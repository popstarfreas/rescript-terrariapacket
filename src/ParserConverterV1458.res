type toLatestIfNeeded =
  | PacketStructureIsSame
  | ConvertedToLatest(Packet.t)
  | DiscardAsNotExists

type fromLatestIfNeeded =
  | PacketStructureIsSame
  | ConvertedFromLatest(PacketV1458.t)
  | DiscardAsNotExists

// NPC.TypeToDefaultHeadIndex (326) and the corresponding town emotes (329).
let faceEmote = head =>
  switch head {
  | Some(1) => Some(105)
  | Some(2) => Some(101)
  | Some(3) => Some(102)
  | Some(4) => Some(107)
  | Some(5) => Some(104)
  | Some(6) => Some(103)
  | Some(7) => Some(108)
  | Some(8) => Some(111)
  | Some(9) => Some(109)
  | Some(10) => Some(110)
  | Some(11) => Some(112)
  | Some(12) => Some(113)
  | Some(13) => Some(114)
  | Some(14) => Some(115)
  | Some(15) => Some(116)
  | Some(16) => Some(117)
  | Some(17) => Some(118)
  | Some(18) => Some(119)
  | Some(19) => Some(120)
  | Some(20) => Some(121)
  | Some(21) => Some(122)
  | Some(22) => Some(123)
  | Some(23) => Some(125)
  | Some(24) => Some(130)
  | Some(25) => Some(140)
  | Some(26) => Some(141)
  | Some(45) => Some(145)
  | _ => None
  }

let upgradeBubble = (value: PacketV1458.EmoteBubble.t) => {
  let bubble = anchor => ConvertedToLatest(Packet.EmoteBubble({id: value.id, anchor}))
  switch value.anchor {
  | Remove => bubble(Remove)
  | Anchor({anchorType, anchorMeta, time, emote, metadata}) =>
    let face = emote == -1 ? faceEmote(metadata) : Some(emote)
    switch (anchorType, face) {
    | (0, Some(emote)) => bubble(Anchor({target: Npc(anchorMeta), time, emote}))
    | (1, Some(emote)) if anchorMeta <= 255 =>
      bubble(Anchor({target: Player(anchorMeta), time, emote}))
    // A backend-local projectile slot cannot identify a projectile on the client.
    | _ => DiscardAsNotExists
    }
  }
}

let downgradeBubble = (value: Packet.EmoteBubble.t) => {
  let bubble = anchor => ConvertedFromLatest(PacketV1458.EmoteBubble({id: value.id, anchor}))
  switch value.anchor {
  | Remove => bubble(Remove)
  | Anchor({target, time, emote}) =>
    switch target {
    | Npc(n) => bubble(Anchor({anchorType: 0, anchorMeta: n, time, emote, metadata: None}))
    | Player(n) => bubble(Anchor({anchorType: 1, anchorMeta: n, time, emote, metadata: None}))
    | Projectile(_) | Unanchored => DiscardAsNotExists
    }
  }
}

let convertToLatestIfNeeded = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): result<
  toLatestIfNeeded,
  IParser.parseError,
> => {
  if buffer->NodeJs.Buffer.length < 3 {
    Error(IParser.ParseError.InvalidPacketLength(buffer->NodeJs.Buffer.length))
  } else {
    let id = buffer->NodeJs.Buffer.unsafeGet(2)
    switch PacketTypeV1458.fromInt(id) {
    | None => Error(IParser.ParseError.InvalidPacketType(id))
    // These IDs were reserved for mobile in the historical library. Desktop 326 has neither.
    | Some(ServerInfo | PlayerPlatformInfo) => Ok(DiscardAsNotExists)
    | Some(WorldInfo | PlayerAnimation | ItemDropModify | EmoteBubble | PlayerDamage) =>
      ParserV1458.parse(~buffer, ~fromServer)->Result.map(packet =>
        switch packet {
        | WorldInfo(value) =>
          let base: Packet.WorldInfo.t = Obj.magic(value)
          ConvertedToLatest(Packet.WorldInfo({...base, noSpidersSeed: false}))
        | PlayerAnimation({playerId, itemRotation, itemAnimation}) =>
          ConvertedToLatest(
            Packet.PlayerAnimation({
              playerId,
              itemRotation,
              itemAnimation,
              itemAnimationMax: itemAnimation,
            }),
          )
        | ItemDropModify(value) =>
          ConvertedToLatest(
            Packet.ItemDropModify({
              itemId: value.itemId,
              color: value.color->Option.map(c => {
                Packet.ItemDropModify.r: c.r,
                g: c.g,
                b: c.b,
                a: c.a,
              }),
              damage: value.damage,
              knockback: value.knockback,
              useAnimation: value.useAnimation,
              useTime: value.useTime,
              shoot: value.shoot,
              shootSpeed: value.shootSpeed,
              scale: value.scale,
              ammo: value.ammo,
              useAmmo: value.useAmmo,
              notAmmo: value.notAmmo,
            }),
          )
        | EmoteBubble(value) => upgradeBubble(value)
        | PlayerDamage(value) =>
          ConvertedToLatest(
            Packet.PlayerDamage({
              target: value.target,
              deathReason: value.deathReason,
              damage: value.damage,
              hitDirection: value.hitDirection,
              critical: value.critical,
              pvp: value.pvp,
              dodgeable: true,
              cooldownCounter: value.cooldownCounter,
            }),
          )
        | _ => PacketStructureIsSame
        }
      )
    | Some(_) => Ok(PacketStructureIsSame)
    }
  }
}

let convertFromLatestIfNeeded = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): result<
  fromLatestIfNeeded,
  IParser.parseError,
> => {
  if buffer->NodeJs.Buffer.length < 3 {
    Error(IParser.ParseError.InvalidPacketLength(buffer->NodeJs.Buffer.length))
  } else {
    let id = buffer->NodeJs.Buffer.unsafeGet(2)
    switch PacketType.fromInt(id) {
    | None => Error(IParser.ParseError.InvalidPacketType(id))
    | Some(ServerInfo | PlayerPlatformInfo | CustomServerAck) => Ok(DiscardAsNotExists)
    | Some(WorldInfo | PlayerAnimation | ItemDropModify | EmoteBubble | PlayerDamage) =>
      Parser.parse(~buffer, ~fromServer)->Result.map(packet =>
        switch packet {
        | WorldInfo(value) => ConvertedFromLatest(PacketV1458.WorldInfo(Obj.magic(value)))
        | PlayerAnimation({playerId, itemRotation, itemAnimation}) =>
          ConvertedFromLatest(PacketV1458.PlayerAnimation({playerId, itemRotation, itemAnimation}))
        | ItemDropModify(value) =>
          ConvertedFromLatest(
            PacketV1458.ItemDropModify({
              itemId: value.itemId,
              color: value.color->Option.map(c => {
                PacketV1458.ItemDropModify.r: c.r,
                g: c.g,
                b: c.b,
                a: c.a,
              }),
              damage: value.damage,
              knockback: value.knockback,
              useAnimation: value.useAnimation,
              useTime: value.useTime,
              shoot: value.shoot,
              shootSpeed: value.shootSpeed,
              width: None,
              height: None,
              scale: value.scale,
              ammo: value.ammo,
              useAmmo: value.useAmmo,
              notAmmo: value.notAmmo,
            }),
          )
        | EmoteBubble(value) => downgradeBubble(value)
        | PlayerDamage(value) =>
          ConvertedFromLatest(
            PacketV1458.PlayerDamage({
              target: value.target,
              deathReason: value.deathReason,
              damage: value.damage,
              hitDirection: value.hitDirection,
              critical: value.critical,
              pvp: value.pvp,
              cooldownCounter: value.cooldownCounter,
            }),
          )
        | _ => PacketStructureIsSame
        }
      )
    | Some(_) => Ok(PacketStructureIsSame)
    }
  }
}
