type toLatestIfNeeded =
  | PacketStructureIsSame
  | ConvertedToLatest(Packet.t)
  | DiscardAsNotExists

type fromLatestIfNeeded =
  | PacketStructureIsSame
  | ConvertedFromLatest(PacketV1456.t)
  | DiscardAsNotExists

let ownershipFromV1456 = value =>
  switch Int.bitwiseAnd(value, 3) {
  | 0 => Packet.ItemDropUpdate.None
  | 1 => Packet.ItemDropUpdate.ReserveForLocalPlayer
  | 2 => Packet.ItemDropUpdate.GrabDelayForLocalPlayer
  | _ => Packet.ItemDropUpdate.GrabDelayForAllPlayers
  }

let ownershipToV1456 = ownership =>
  switch ownership {
  | Packet.ItemDropUpdate.None => 0
  | Packet.ItemDropUpdate.ReserveForLocalPlayer => 1
  | Packet.ItemDropUpdate.GrabDelayForLocalPlayer => 2
  | Packet.ItemDropUpdate.GrabDelayForAllPlayers => 3
  }

let itemDropFromV1456 = (
  item: PacketV1456.ItemDropUpdate.t,
  ~shimmer: option<Packet.ItemDropUpdate.shimmer>=?,
  ~enemyGrabDelayTime: option<int>=?,
): Packet.ItemDropUpdate.t => {
  itemDropId: item.itemDropId,
  position: {x: item.x, y: item.y},
  velocity: {x: item.vx, y: item.vy},
  stack: item.stack,
  prefix: item.prefix,
  ownership: ownershipFromV1456(item.noDelay),
  itemId: item.itemId,
  shimmer,
  enemyGrabDelayTime,
}

let itemDropBaseToV1456 = (item: Packet.ItemDropUpdate.t): PacketV1456.ItemDropUpdate.t => {
  itemDropId: item.itemDropId,
  x: item.position.x,
  y: item.position.y,
  vx: item.velocity.x,
  vy: item.velocity.y,
  stack: item.stack,
  prefix: item.prefix,
  noDelay: ownershipToV1456(item.ownership),
  itemId: item.itemId,
}

let netModuleToLatest = (value: PacketV1456.NetModuleLoad.t): option<Packet.NetModuleLoad.t> =>
  switch value {
  | Liquid(payload) => Some(Packet.NetModuleLoad.Liquid(Obj.magic(payload)))
  | ClientText(commandId, message) => Some(Packet.NetModuleLoad.ClientText(commandId, message))
  | ServerText(playerId, message, color) =>
    Some(Packet.NetModuleLoad.ServerText(playerId, message, color))
  | Ping(payload) => Some(Packet.NetModuleLoad.Ping(Obj.magic(payload)))
  | Ambience(payload) => Some(Packet.NetModuleLoad.Ambience(Obj.magic(payload)))
  | Bestiary(payload) => Some(Packet.NetModuleLoad.Bestiary(Obj.magic(payload)))
  | CreativePower(payload) => Some(Packet.NetModuleLoad.CreativePower(payload))
  | CreativeUnlocksPlayerReport(payload) =>
    Some(Packet.NetModuleLoad.CreativeUnlocksPlayerReport(Obj.magic(payload)))
  | TeleportPylon(payload) => Some(Packet.NetModuleLoad.TeleportPylon(Obj.magic(payload)))
  | Particles(payload) => Some(Packet.NetModuleLoad.Particles(Obj.magic(payload)))
  | CreativePowerPermissions(payload) =>
    Some(Packet.NetModuleLoad.CreativePowerPermissions(Obj.magic(payload)))
  | Banners(payload) => Some(Packet.NetModuleLoad.Banners(Obj.magic(payload)))
  | CraftingRequests(payload) => Some(Packet.NetModuleLoad.CraftingRequests(Obj.magic(payload)))
  | TagEffectState(_) => None
  | LeashedEntity(payload) => Some(Packet.NetModuleLoad.LeashedEntity(Obj.magic(payload)))
  | UnbreakableWallScan(payload) =>
    Some(Packet.NetModuleLoad.UnbreakableWallScan(Obj.magic(payload)))
  }

let netModuleFromLatest = (value: Packet.NetModuleLoad.t): PacketV1456.NetModuleLoad.t =>
  switch value {
  | Liquid(payload) => PacketV1456.NetModuleLoad.Liquid(Obj.magic(payload))
  | ClientText(commandId, message) => PacketV1456.NetModuleLoad.ClientText(commandId, message)
  | ServerText(playerId, message, color) =>
    PacketV1456.NetModuleLoad.ServerText(playerId, message, color)
  | Ping(payload) => PacketV1456.NetModuleLoad.Ping(Obj.magic(payload))
  | Ambience(payload) => PacketV1456.NetModuleLoad.Ambience(Obj.magic(payload))
  | Bestiary(payload) => PacketV1456.NetModuleLoad.Bestiary(Obj.magic(payload))
  | CreativeUnlocks(payload) =>
    PacketV1456.NetModuleLoad.CreativeUnlocksPlayerReport({
      userId: 0,
      itemId: payload.itemId,
      researchedCount: payload.sacrificeCount,
    })
  | CreativePower(payload) => PacketV1456.NetModuleLoad.CreativePower(payload)
  | CreativeUnlocksPlayerReport(payload) =>
    PacketV1456.NetModuleLoad.CreativeUnlocksPlayerReport(Obj.magic(payload))
  | TeleportPylon(payload) => PacketV1456.NetModuleLoad.TeleportPylon(Obj.magic(payload))
  | Particles(payload) => PacketV1456.NetModuleLoad.Particles(Obj.magic(payload))
  | CreativePowerPermissions(payload) =>
    PacketV1456.NetModuleLoad.CreativePowerPermissions(Obj.magic(payload))
  | Banners(payload) => PacketV1456.NetModuleLoad.Banners(Obj.magic(payload))
  | CraftingRequests(payload) => PacketV1456.NetModuleLoad.CraftingRequests(Obj.magic(payload))
  | LeashedEntity(payload) => PacketV1456.NetModuleLoad.LeashedEntity(Obj.magic(payload))
  | UnbreakableWallScan(payload) =>
    PacketV1456.NetModuleLoad.UnbreakableWallScan(Obj.magic(payload))
  }

let toLatest = (packet: PacketV1456.t): option<Packet.t> =>
  switch packet {
  | WorldInfo(value) => {
      let base: Packet.WorldInfo.t = Obj.magic(value)
      Some(Packet.WorldInfo({
        ...base,
        forceHalloweenForever: false,
        forceChristmasForever: false,
        moreLightningSeed: false,
        noLightningSeed: false,
      }))
    }
  | PlayerUpdate(value) => {
      let controlBase: Packet.PlayerUpdate.control = Obj.magic(value.control)
      let base: Packet.PlayerUpdate.t = Obj.magic(value)
      Some(Packet.PlayerUpdate({
        ...base,
        control: {...controlBase, isHoldingDash: false},
        snappingStoneLightUp: false,
      }))
    }
  | ItemDropUpdate(value) => Some(Packet.ItemDropUpdate(itemDropFromV1456(value)))
  | ItemDropInstancedUpdate(value) =>
    Some(Packet.ItemDropInstancedUpdate(itemDropFromV1456(value)))
  | ItemDropShimmeredUpdate(value) =>
    Some(Packet.ItemDropUpdate(itemDropFromV1456(
      Obj.magic(value),
      ~shimmer={shimmered: value.shimmered, shimmerTime: value.shimmeredTime},
    )))
  | ItemDropProtectedUpdate(value) =>
    Some(Packet.ItemDropUpdate(itemDropFromV1456(
      Obj.magic(value),
      ~enemyGrabDelayTime=value.timeLeftInWhichTheItemCannotBeTakenByEnemies,
    )))
  | ItemOwner(value) => {
      let base: Packet.ItemOwner.t = Obj.magic(value)
      Some(Packet.ItemOwner({
        ...base,
        timeToKeepReservation: 0,
        grabDelayPlayer: 0,
        grabDelayTime: 0,
      }))
    }
  | NpcUpdate(value) => {
      let base: Packet.NpcUpdate.t = Obj.magic(value)
      Some(Packet.NpcUpdate({...base, generation: 0}))
    }
  | ProjectileSync(value) =>
    Some(Packet.ProjectileSync({
      projectileKey: {
        spawner: value.owner,
        index: value.projectileId,
        generation: value.projectileUuid->Option.getOr(0),
      },
      position: {x: value.x, y: value.y},
      velocity: {x: value.vx, y: value.vy},
      projectileType: value.projectileType,
      ai: value.ai,
      bannerIdToRespondTo: value.bannerIdToRespondTo,
      damage: value.damage,
      knockback: value.knockback,
      originalDamage: value.originalDamage,
    }))
  | NpcStrike(value) =>
    Some(Packet.NpcStrike({
      npcSlotId: value.npcId,
      generation: 0,
      damage: value.damage,
      knockback: value.knockback,
      direction: value.direction,
      critical: value.critical,
    }))
  | ProjectileDestroy(value) =>
    Some(Packet.ProjectileDestroy({
      projectileKey: {spawner: value.owner, index: value.projectileId, generation: 0},
      position: {x: 0.0, y: 0.0},
    }))
  | ItemOwnerRemove(value) =>
    Some(Packet.ItemOwnerRemove({itemDropId: value.itemDropId, forceAssignToServer: false}))
  | PlayerDodge(value) =>
    Some(Packet.PlayerDodge({
      playerId: value.playerId,
      dodge: switch value.dodge {
      | Ninja => Packet.PlayerDodge.Ninja
      | Shadow => Packet.PlayerDodge.Shadow
      | BrainOfConfusion => Packet.PlayerDodge.BrainOfConfusion
      },
    }))
  | NpcCatch(value) => Some(Packet.NpcCatch({npcId: value.npcId}))
  | NetModuleLoad(value) => netModuleToLatest(value)->Option.map(value => Packet.NetModuleLoad(value))
  | ServerInfo(_) => Some(Packet.ServerInfo())
  | PlayerPlatformInfo(value) => Some(Packet.PlayerPlatformInfo(Obj.magic(value)))
  | _ => None
  }

let fromLatest = (packet: Packet.t): PacketV1456.t =>
  switch packet {
  | WorldInfo(value) => PacketV1456.WorldInfo(Obj.magic(value))
  | PlayerUpdate(value) => PacketV1456.PlayerUpdate(Obj.magic(value))
  | ItemDropUpdate(value) =>
    switch (value.shimmer, value.enemyGrabDelayTime) {
    | (Some(shimmer), _) =>
      let base = itemDropBaseToV1456(value)
      let base: PacketV1456.ItemDropShimmeredUpdate.t = Obj.magic(base)
      PacketV1456.ItemDropShimmeredUpdate({
        ...base,
        shimmered: shimmer.shimmered,
        shimmeredTime: shimmer.shimmerTime,
      })
    | (None, Some(enemyGrabDelayTime)) =>
      let base = itemDropBaseToV1456(value)
      let base: PacketV1456.ItemDropProtectedUpdate.t = Obj.magic(base)
      PacketV1456.ItemDropProtectedUpdate({
        ...base,
        timeLeftInWhichTheItemCannotBeTakenByEnemies: enemyGrabDelayTime,
      })
    | (None, None) => PacketV1456.ItemDropUpdate(itemDropBaseToV1456(value))
    }
  | ItemDropInstancedUpdate(value) =>
    PacketV1456.ItemDropInstancedUpdate(itemDropBaseToV1456(value))
  | ItemOwner(value) => PacketV1456.ItemOwner(Obj.magic(value))
  | NpcUpdate(value) => PacketV1456.NpcUpdate(Obj.magic(value))
  | ProjectileSync(value) =>
    PacketV1456.ProjectileSync({
      projectileId: value.projectileKey.index,
      x: value.position.x,
      y: value.position.y,
      vx: value.velocity.x,
      vy: value.velocity.y,
      owner: value.projectileKey.spawner,
      projectileType: value.projectileType,
      ai: value.ai,
      bannerIdToRespondTo: value.bannerIdToRespondTo,
      damage: value.damage,
      knockback: value.knockback,
      originalDamage: value.originalDamage,
      projectileUuid: value.projectileKey.generation == 0 ? None : Some(value.projectileKey.generation),
    })
  | NpcStrike(value) =>
    PacketV1456.NpcStrike({
      npcId: value.npcSlotId,
      damage: value.damage,
      knockback: value.knockback,
      direction: value.direction,
      critical: value.critical,
    })
  | ProjectileDestroy(value) =>
    PacketV1456.ProjectileDestroy({
      projectileId: value.projectileKey.index,
      owner: value.projectileKey.spawner,
    })
  | ItemOwnerRemove(value) => PacketV1456.ItemOwnerRemove({itemDropId: value.itemDropId})
  | PlayerDodge(value) =>
    PacketV1456.PlayerDodge({
      playerId: value.playerId,
      dodge: switch value.dodge {
      | Ninja => PacketV1456.PlayerDodge.Ninja
      | Shadow => PacketV1456.PlayerDodge.Shadow
      | BrainOfConfusion | MysticSash => PacketV1456.PlayerDodge.BrainOfConfusion
      },
    })
  | NpcCatch(value) => PacketV1456.NpcCatch({npcId: value.npcId, playerId: 0})
  | NetModuleLoad(value) => PacketV1456.NetModuleLoad(netModuleFromLatest(value))
  | ServerInfo(_) => PacketV1456.ServerInfo()
  | PlayerPlatformInfo(value) => PacketV1456.PlayerPlatformInfo(Obj.magic(value))
  | packet => Obj.magic(packet)
  }

let convertToLatestIfNeeded = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): result<
  toLatestIfNeeded,
  IParser.parseError,
> => {
  if buffer->NodeJs.Buffer.length < 3 {
    Error(IParser.ParseError.InvalidPacketLength(buffer->NodeJs.Buffer.length))
  } else {
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketTypeV1456.fromInt {
    | None => Error(IParser.ParseError.InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    | Some(NpcItemStrike) => Ok(DiscardAsNotExists)
    | Some(ShimmerEffectOrCoinLuck) if !fromServer => Ok(DiscardAsNotExists)
    | Some(WorldInfo)
    | Some(PlayerUpdate)
    | Some(ItemDropUpdate)
    | Some(ItemOwner)
    | Some(NpcUpdate)
    | Some(ProjectileSync)
    | Some(NpcStrike)
    | Some(ProjectileDestroy)
    | Some(ItemOwnerRemove)
    | Some(PlayerDodge)
    | Some(NpcCatch)
    | Some(NetModuleLoad)
    | Some(ItemDropInstancedUpdate)
    | Some(ItemDropShimmeredUpdate)
    | Some(ItemDropProtectedUpdate)
    | Some(ServerInfo)
    | Some(PlayerPlatformInfo) =>
      ParserV1456.parse(~buffer, ~fromServer)->Result.map(packet =>
        switch toLatest(packet) {
        | Some(packet) => ConvertedToLatest(packet)
        | None => DiscardAsNotExists
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
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | None => Error(IParser.ParseError.InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    | Some(NpcItemStrike)
    | Some(ItemDropShimmeredUpdate)
    | Some(ItemDropProtectedUpdate)
    | Some(DamageNPCAck) => Ok(DiscardAsNotExists)
    | Some(WorldInfo)
    | Some(PlayerUpdate)
    | Some(ItemDropUpdate)
    | Some(ItemOwner)
    | Some(NpcUpdate)
    | Some(ProjectileSync)
    | Some(NpcStrike)
    | Some(ProjectileDestroy)
    | Some(ItemOwnerRemove)
    | Some(PlayerDodge)
    | Some(NpcCatch)
    | Some(NetModuleLoad)
    | Some(ItemDropInstancedUpdate)
    | Some(ServerInfo)
    | Some(PlayerPlatformInfo) =>
      Parser.parse(~buffer, ~fromServer)
      ->Result.map(packet =>
        switch packet {
        | NetModuleLoad(CreativeUnlocks(_)) => DiscardAsNotExists
        | packet => ConvertedFromLatest(fromLatest(packet))
        }
      )
    | Some(_) => Ok(PacketStructureIsSame)
    }
  }
}
