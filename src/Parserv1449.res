let packetTypeName = (packetType: PacketType.t): string =>
  switch packetType {
  | ConnectRequest => "ConnectRequest"
  | Disconnect => "Disconnect"
  | PlayerSlotSet => "PlayerSlotSet"
  | PlayerInfo => "PlayerInfo"
  | PlayerInventorySlot => "PlayerInventorySlot"
  | WorldDataRequest => "WorldDataRequest"
  | WorldInfo => "WorldInfo"
  | InitialTileSectionsRequest => "InitialTileSectionsRequest"
  | Status => "Status"
  | TileSectionSend => "TileSectionSend"
  | TileSectionFrame => "TileSectionFrame"
  | PlayerSpawn => "PlayerSpawn"
  | PlayerUpdate => "PlayerUpdate"
  | PlayerActive => "PlayerActive"
  | PlayerHealth => "PlayerHealth"
  | TileModify => "TileModify"
  | TimeSet => "TimeSet"
  | DoorUse => "DoorUse"
  | TileSquareSend => "TileSquareSend"
  | ItemDropUpdate => "ItemDropUpdate"
  | ItemOwner => "ItemOwner"
  | NpcUpdate => "NpcUpdate"
  | NpcItemStrike => "NpcItemStrike"
  | ProjectileSync => "ProjectileSync"
  | NpcStrike => "NpcStrike"
  | ProjectileDestroy => "ProjectileDestroy"
  | PvpToggle => "PvpToggle"
  | ChestOpen => "ChestOpen"
  | ChestItem => "ChestItem"
  | ActiveContainerSync => "ActiveContainerSync"
  | ChestPlace => "ChestPlace"
  | HealEffect => "HealEffect"
  | Zones => "Zones"
  | PasswordRequired => "PasswordRequired"
  | PasswordSend => "PasswordSend"
  | ItemOwnerRemove => "ItemOwnerRemove"
  | NpcTalk => "NpcTalk"
  | PlayerAnimation => "PlayerAnimation"
  | PlayerMana => "PlayerMana"
  | ManaEffect => "ManaEffect"
  | PlayerTeam => "PlayerTeam"
  | SignRead => "SignRead"
  | SignNew => "SignNew"
  | LiquidSet => "LiquidSet"
  | PlayerSpawnSelf => "PlayerSpawnSelf"
  | PlayerBuffsSet => "PlayerBuffsSet"
  | NpcSpecialEffect => "NpcSpecialEffect"
  | ChestOrTempleUnlock => "ChestOrTempleUnlock"
  | NpcBuffAdd => "NpcBuffAdd"
  | NpcBuffUpdate => "NpcBuffUpdate"
  | PlayerBuffAdd => "PlayerBuffAdd"
  | NpcNameUpdate => "NpcNameUpdate"
  | GoodEvilUpdate => "GoodEvilUpdate"
  | HarpPlay => "HarpPlay"
  | SwitchHit => "SwitchHit"
  | NpcHomeUpdate => "NpcHomeUpdate"
  | BossOrInvasionSpawn => "BossOrInvasionSpawn"
  | PlayerDodge => "PlayerDodge"
  | TilePaint => "TilePaint"
  | WallPaint => "WallPaint"
  | Teleport => "Teleport"
  | PlayerHealOther => "PlayerHealOther"
  | DimensionsUpdate => "DimensionsUpdate"
  | ClientUuid => "ClientUuid"
  | ChestName => "ChestName"
  | NpcCatch => "NpcCatch"
  | NpcRelease => "NpcRelease"
  | TravellingMerchantInventory => "TravellingMerchantInventory"
  | TeleportationPotion => "TeleportationPotion"
  | AnglerQuest => "AnglerQuest"
  | AnglerQuestComplete => "AnglerQuestComplete"
  | AnglerQuestsCompletedAmount => "AnglerQuestsCompletedAmount"
  | TemporaryAnimationCreate => "TemporaryAnimationCreate"
  | InvasionProgressReport => "InvasionProgressReport"
  | ObjectPlace => "ObjectPlace"
  | PlayerChestIndexSync => "PlayerChestIndexSync"
  | CombatNumberCreate => "CombatNumberCreate"
  | NetModuleLoad => "NetModuleLoad"
  | NpcKillCount => "NpcKillCount"
  | PlayerStealth => "PlayerStealth"
  | ItemForceIntoNearestChest => "ItemForceIntoNearestChest"
  | TileEntityUpdate => "TileEntityUpdate"
  | TileEntityPlace => "TileEntityPlace"
  | ItemDropModify => "ItemDropModify"
  | ItemFramePlace => "ItemFramePlace"
  | ItemDropInstancedUpdate => "ItemDropInstancedUpdate"
  | EmoteBubble => "EmoteBubble"
  | ExtraValueSync => "ExtraValueSync"
  | SocialHandshake => "SocialHandshake"
  | Unused => "Unused"
  | PortalKill => "PortalKill"
  | PlayerTeleportPortal => "PlayerTeleportPortal"
  | NpcKilledNotification => "NpcKilledNotification"
  | EventNotification => "EventNotification"
  | MinionTargetUpdate => "MinionTargetUpdate"
  | NpcTeleportPortal => "NpcTeleportPortal"
  | ShieldStrengthsUpdate => "ShieldStrengthsUpdate"
  | NebulaLevelUp => "NebulaLevelUp"
  | MoonLordCountdown => "MoonLordCountdown"
  | NpcShopItem => "NpcShopItem"
  | GemLockToggle => "GemLockToggle"
  | SmokePoof => "SmokePoof"
  | ChatMessageSmart => "ChatMessageSmart"
  | WiredCannonShot => "WiredCannonShot"
  | MassWireOperation => "MassWireOperation"
  | MassWireOperationPay => "MassWireOperationPay"
  | PartyToggle => "PartyToggle"
  | TreeGrowFx => "TreeGrowFx"
  | CrystalInvasionStart => "CrystalInvasionStart"
  | CrystalInvasionWipeAll => "CrystalInvasionWipeAll"
  | MinionAttackTargetUpdate => "MinionAttackTargetUpdate"
  | CrystalInvasionSendWaitTime => "CrystalInvasionSendWaitTime"
  | PlayerDamage => "PlayerDamage"
  | PlayerDeath => "PlayerDeath"
  | CombatTextCreate => "CombatTextCreate"
  | Emoji => "Emoji"
  | TileEntityDisplayDollItemSync => "TileEntityDisplayDollItemSync"
  | TileEntityInteractionRequest => "TileEntityInteractionRequest"
  | WeaponsRackTryPlacing => "WeaponsRackTryPlacing"
  | TileEntityHatRackItemSync => "TileEntityHatRackItemSync"
  | TilePickingSync => "TilePickingSync"
  | RevengeMarkerSync => "RevengeMarkerSync"
  | RevengeMarkerRemove => "RevengeMarkerRemove"
  | GolfBallLandInCup => "GolfBallLandInCup"
  | ClientFinishConnectingToServer => "ClientFinishConnectingToServer"
  | NpcFishOut => "NpcFishOut"
  | NpcTamper => "NpcTamper"
  | LegacySoundPlay => "LegacySoundPlay"
  | FoodPlatterTryPlacing => "FoodPlatterTryPlacing"
  | PlayerLuckFactorsUpdate => "PlayerLuckFactorsUpdate"
  | PlayerDead => "PlayerDead"
  | CavernMonsterTypeSync => "CavernMonsterTypeSync"
  | NpcBuffRemovalRequest => "NpcBuffRemovalRequest"
  | ClientSyncedInventory => "ClientSyncedInventory"
  | CountsAsHostForGameplaySet => "CountsAsHostForGameplaySet"
  | CreditsOrSlimeTransform => "CreditsOrSlimeTransform"
  | LucyAxeMessage => "LucyAxeMessage"
  | PiggyBankVoidLensUpdate => "PiggyBankVoidLensUpdate"
  | DungeonDefendersEventAttemptSkipWait => "DungeonDefendersEventAttemptSkipWait"
  | HaveDryadDoStardewAnimation => "HaveDryadDoStardewAnimation"
  | ItemDropShimmeredUpdate => "ItemDropShimmeredUpdate"
  | ShimmerEffectOrCoinLuck => "ShimmerEffectOrCoinLuck"
  | LoadoutSwitch => "LoadoutSwitch"
  | ItemDropProtectedUpdate => "ItemDropProtectedUpdate"
  | _ => throw(Failure("Unknown packet type: " ++ PacketType.packetName(packetType)))
  }

let addPacketContext = (
  ~packetName,
  err: ErrorAwarePacketReader.readError,
): ErrorAwarePacketReader.readError => {
  context: "Packet " ++ packetName ++ ": " ++ err.context,
  error: err.error,
}

let mapPacket = (result, ~packetName, fn): result<PacketV1449.t, IParser.parseError> =>
  result
  ->Result.map(fn)
  ->Result.mapError(e => IParser.ParseError.ReaderError(addPacketContext(~packetName, e)))

type parsers = {
  parse: (NodeJs.Buffer.t, bool) => result<PacketV1449.t, IParser.parseError>,
  parseLazy: (NodeJs.Buffer.t, bool) => result<PacketV1449.LazyPacket.t, IParser.parseError>,
}

let makeParsers = (
  ~packetName: string,
  ~parse: NodeJs.Buffer.t => result<'a, ErrorAwarePacketReader.readError>,
  ~toPacket: 'a => PacketV1449.t,
  ~toLazyPacket: Packet.LazyPacket.lazyParsed<'a> => PacketV1449.LazyPacket.t,
): parsers => {
  let parseWrapped = (payload, _fromServer) => parse(payload)->mapPacket(~packetName, toPacket)
  let parseLazyWrapped = (payload, _fromServer) => Ok(
    toLazyPacket(
      Lazy.make(() => parse(payload)->Result.mapError(e => addPacketContext(~packetName, e))),
    ),
  )
  {parse: parseWrapped, parseLazy: parseLazyWrapped}
}

let makeParsersWithFromServer = (
  ~packetName: string,
  ~parse: (NodeJs.Buffer.t, bool) => result<'a, ErrorAwarePacketReader.readError>,
  ~toPacket: 'a => PacketV1449.t,
  ~toLazyPacket: Packet.LazyPacket.lazyParsed<'a> => PacketV1449.LazyPacket.t,
): parsers => {
  let parseWrapped = (payload, fromServer) =>
    parse(payload, fromServer)->mapPacket(~packetName, toPacket)
  let parseLazyWrapped = (payload, fromServer) => Ok(
    toLazyPacket(
      Lazy.make(() =>
        parse(payload, fromServer)->Result.mapError(e => addPacketContext(~packetName, e))
      ),
    ),
  )
  {parse: parseWrapped, parseLazy: parseLazyWrapped}
}

let getParsers = (packetType: PacketType.t, fromServer: bool): result<
  parsers,
  IParser.parseError,
> => {
  let packetName = packetTypeName(packetType)
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => Error(ConnectRequestFromServer)
  | (ConnectRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ConnectRequest.parse,
        ~toPacket=a => PacketV1449.ConnectRequest(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ConnectRequest(a),
      ),
    )
  | (Disconnect, false) => Error(DisconnectFromClient)
  | (Disconnect, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.Disconnect.parse,
        ~toPacket=a => PacketV1449.Disconnect(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.Disconnect(a),
      ),
    )
  | (PlayerSlotSet, false) => Error(PlayerSlotSetFromClient)
  | (PlayerSlotSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerSlotSet.parse,
        ~toPacket=a => PacketV1449.PlayerSlotSet(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerSlotSet(a),
      ),
    )
  | (PlayerInfo, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerInfo.parse,
        ~toPacket=a => PacketV1449.PlayerInfo(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerInfo(a),
      ),
    )
  | (PlayerInventorySlot, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerInventorySlot.parse,
        ~toPacket=a => PacketV1449.PlayerInventorySlot(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerInventorySlot(a),
      ),
    )
  | (WorldDataRequest, true) => Error(WorldDataRequestFromServer)
  | (WorldDataRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.WorldDataRequest.parse,
        ~toPacket=a => PacketV1449.WorldDataRequest(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.WorldDataRequest(a),
      ),
    )
  | (WorldInfo, false) => Error(WorldInfoFromClient)
  | (WorldInfo, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.WorldInfo.parse,
        ~toPacket=a => PacketV1449.WorldInfo(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.WorldInfo(a),
      ),
    )
  | (InitialTileSectionsRequest, true) => Error(InitialTileSectionsRequestFromServer)
  | (InitialTileSectionsRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.InitialTileSectionsRequest.parse,
        ~toPacket=a => PacketV1449.InitialTileSectionsRequest(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.InitialTileSectionsRequest(a),
      ),
    )
  | (Status, false) => Error(StatusFromClient)
  | (Status, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.Status.parse,
        ~toPacket=a => PacketV1449.Status(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.Status(a),
      ),
    )
  | (TileSectionSend, false) => Error(TileSectionSendFromClient)
  | (TileSectionSend, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TileSectionSend.parse,
        ~toPacket=a => PacketV1449.TileSectionSend(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TileSectionSend(a),
      ),
    )
  | (TileSectionFrame, false) => Error(TileSectionFrameFromClient)
  | (TileSectionFrame, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TileSectionFrame.parse,
        ~toPacket=a => PacketV1449.TileSectionFrame(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TileSectionFrame(a),
      ),
    )
  | (PlayerSpawn, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerSpawn.parse,
        ~toPacket=a => PacketV1449.PlayerSpawn(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerSpawn(a),
      ),
    )
  | (PlayerUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerUpdate.parse,
        ~toPacket=a => PacketV1449.PlayerUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerUpdate(a),
      ),
    )
  | (PlayerActive, false) => Error(PlayerActiveFromClient)
  | (PlayerActive, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerActive.parse,
        ~toPacket=a => PacketV1449.PlayerActive(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerActive(a),
      ),
    )
  | (PlayerHealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerHealth.parse,
        ~toPacket=a => PacketV1449.PlayerHealth(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerHealth(a),
      ),
    )
  | (TileModify, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TileModify.parse,
        ~toPacket=a => PacketV1449.TileModify(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TileModify(a),
      ),
    )
  | (TimeSet, false) => Error(TimeSetFromClient)
  | (TimeSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TimeSet.parse,
        ~toPacket=a => PacketV1449.TimeSet(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TimeSet(a),
      ),
    )
  | (DoorUse, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.DoorUse.parse,
        ~toPacket=a => PacketV1449.DoorUse(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.DoorUse(a),
      ),
    )
  | (TileSquareSend, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TileSquareSend.parse,
        ~toPacket=a => PacketV1449.TileSquareSend(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TileSquareSend(a),
      ),
    )
  | (ItemDropUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ItemDropUpdate.parse,
        ~toPacket=a => PacketV1449.ItemDropUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ItemDropUpdate(a),
      ),
    )
  | (ItemOwner, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ItemOwner.parse,
        ~toPacket=a => PacketV1449.ItemOwner(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ItemOwner(a),
      ),
    )
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcUpdate.parse,
        ~toPacket=a => PacketV1449.NpcUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcUpdate(a),
      ),
    )
  | (NpcItemStrike, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcItemStrike.parse,
        ~toPacket=a => PacketV1449.NpcItemStrike(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcItemStrike(a),
      ),
    )
  | (ProjectileSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ProjectileSync.parse,
        ~toPacket=a => PacketV1449.ProjectileSync(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ProjectileSync(a),
      ),
    )
  | (NpcStrike, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcStrike.parse,
        ~toPacket=a => PacketV1449.NpcStrike(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcStrike(a),
      ),
    )
  | (ProjectileDestroy, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ProjectileDestroy.parse,
        ~toPacket=a => PacketV1449.ProjectileDestroy(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ProjectileDestroy(a),
      ),
    )
  | (PvpToggle, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PvpToggle.parse,
        ~toPacket=a => PacketV1449.PvpToggle(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PvpToggle(a),
      ),
    )
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ChestOpen.parse,
        ~toPacket=a => PacketV1449.ChestOpen(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ChestOpen(a),
      ),
    )
  | (ChestItem, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ChestItem.parse,
        ~toPacket=a => PacketV1449.ChestItem(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ChestItem(a),
      ),
    )
  | (ActiveContainerSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ActiveContainerSync.parse,
        ~toPacket=a => PacketV1449.ActiveContainerSync(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ActiveContainerSync(a),
      ),
    )
  | (ChestPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ChestPlace.parse,
        ~toPacket=a => PacketV1449.ChestPlace(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ChestPlace(a),
      ),
    )
  | (HealEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.HealEffect.parse,
        ~toPacket=a => PacketV1449.HealEffect(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.HealEffect(a),
      ),
    )
  | (Zones, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.Zones.parse,
        ~toPacket=a => PacketV1449.Zones(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.Zones(a),
      ),
    )
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PasswordRequired.parse,
        ~toPacket=a => PacketV1449.PasswordRequired(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PasswordRequired(a),
      ),
    )
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PasswordSend.parse,
        ~toPacket=a => PacketV1449.PasswordSend(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PasswordSend(a),
      ),
    )
  | (ItemOwnerRemove, false) => Error(ItemOwnerRemoveFromClient)
  | (ItemOwnerRemove, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ItemOwnerRemove.parse,
        ~toPacket=a => PacketV1449.ItemOwnerRemove(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ItemOwnerRemove(a),
      ),
    )
  | (NpcTalk, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcTalk.parse,
        ~toPacket=a => PacketV1449.NpcTalk(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcTalk(a),
      ),
    )
  | (PlayerAnimation, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerAnimation.parse,
        ~toPacket=a => PacketV1449.PlayerAnimation(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerAnimation(a),
      ),
    )
  | (PlayerMana, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerMana.parse,
        ~toPacket=a => PacketV1449.PlayerMana(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerMana(a),
      ),
    )
  | (ManaEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ManaEffect.parse,
        ~toPacket=a => PacketV1449.ManaEffect(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ManaEffect(a),
      ),
    )
  | (PlayerTeam, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerTeam.parse,
        ~toPacket=a => PacketV1449.PlayerTeam(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerTeam(a),
      ),
    )
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.SignRead.parse,
        ~toPacket=a => PacketV1449.SignRead(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.SignRead(a),
      ),
    )
  | (SignNew, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.SignNew.parse,
        ~toPacket=a => PacketV1449.SignNew(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.SignNew(a),
      ),
    )
  | (LiquidSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.LiquidSet.parse,
        ~toPacket=a => PacketV1449.LiquidSet(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.LiquidSet(a),
      ),
    )
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerSpawnSelf.parse,
        ~toPacket=a => PacketV1449.PlayerSpawnSelf(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerSpawnSelf(a),
      ),
    )
  | (PlayerBuffsSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerBuffsSet.parse,
        ~toPacket=a => PacketV1449.PlayerBuffsSet(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerBuffsSet(a),
      ),
    )
  | (NpcSpecialEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcSpecialEffect.parse,
        ~toPacket=a => PacketV1449.NpcSpecialEffect(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcSpecialEffect(a),
      ),
    )
  | (ChestOrTempleUnlock, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ChestOrTempleUnlock.parse,
        ~toPacket=a => PacketV1449.ChestOrTempleUnlock(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ChestOrTempleUnlock(a),
      ),
    )
  | (NpcBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcBuffAdd.parse,
        ~toPacket=a => PacketV1449.NpcBuffAdd(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcBuffAdd(a),
      ),
    )
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcBuffUpdate.parse,
        ~toPacket=a => PacketV1449.NpcBuffUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcBuffUpdate(a),
      ),
    )
  | (PlayerBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerBuffAdd.parse,
        ~toPacket=a => PacketV1449.PlayerBuffAdd(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerBuffAdd(a),
      ),
    )
  | (NpcNameUpdate, fromServer) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcNameUpdate.parse(_, ~fromServer),
        ~toPacket=a => PacketV1449.NpcNameUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcNameUpdate(a),
      ),
    )
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.GoodEvilUpdate.parse,
        ~toPacket=a => PacketV1449.GoodEvilUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.GoodEvilUpdate(a),
      ),
    )
  | (HarpPlay, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.HarpPlay.parse,
        ~toPacket=a => PacketV1449.HarpPlay(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.HarpPlay(a),
      ),
    )
  | (SwitchHit, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.SwitchHit.parse,
        ~toPacket=a => PacketV1449.SwitchHit(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.SwitchHit(a),
      ),
    )
  | (NpcHomeUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcHomeUpdate.parse,
        ~toPacket=a => PacketV1449.NpcHomeUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcHomeUpdate(a),
      ),
    )
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.BossOrInvasionSpawn.parse,
        ~toPacket=a => PacketV1449.BossOrInvasionSpawn(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.BossOrInvasionSpawn(a),
      ),
    )
  | (PlayerDodge, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerDodge.parse,
        ~toPacket=a => PacketV1449.PlayerDodge(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerDodge(a),
      ),
    )
  | (TilePaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TilePaint.parse,
        ~toPacket=a => PacketV1449.TilePaint(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TilePaint(a),
      ),
    )
  | (WallPaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.WallPaint.parse,
        ~toPacket=a => PacketV1449.WallPaint(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.WallPaint(a),
      ),
    )
  | (Teleport, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.Teleport.parse,
        ~toPacket=a => PacketV1449.Teleport(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.Teleport(a),
      ),
    )
  | (PlayerHealOther, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerHealOther.parse,
        ~toPacket=a => PacketV1449.PlayerHealOther(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerHealOther(a),
      ),
    )
  | (DimensionsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.DimensionsUpdate.parse,
        ~toPacket=a => PacketV1449.DimensionsUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.DimensionsUpdate(a),
      ),
    )
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ClientUuid.parse,
        ~toPacket=a => PacketV1449.ClientUuid(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ClientUuid(a),
      ),
    )
  | (ChestName, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ChestName.parse,
        ~toPacket=a => PacketV1449.ChestName(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ChestName(a),
      ),
    )
  | (NpcCatch, true) => Error(NpcCatchFromServer)
  | (NpcCatch, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcCatch.parse,
        ~toPacket=a => PacketV1449.NpcCatch(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcCatch(a),
      ),
    )
  | (NpcRelease, true) => Error(NpcReleaseFromServer)
  | (NpcRelease, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcRelease.parse,
        ~toPacket=a => PacketV1449.NpcRelease(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcRelease(a),
      ),
    )
  | (TravellingMerchantInventory, false) => Error(TravellingMerchantInventoryFromClient)
  | (TravellingMerchantInventory, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TravellingMerchantInventory.parse,
        ~toPacket=a => PacketV1449.TravellingMerchantInventory(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TravellingMerchantInventory(a),
      ),
    )
  | (TeleportationPotion, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TeleportationPotion.parse,
        ~toPacket=a => PacketV1449.TeleportationPotion(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TeleportationPotion(a),
      ),
    )
  | (AnglerQuest, false) => Error(AnglerQuestFromClient)
  | (AnglerQuest, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.AnglerQuest.parse,
        ~toPacket=a => PacketV1449.AnglerQuest(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.AnglerQuest(a),
      ),
    )
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.AnglerQuestComplete.parse,
        ~toPacket=a => PacketV1449.AnglerQuestComplete(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.AnglerQuestComplete(a),
      ),
    )
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.AnglerQuestsCompletedAmount.parse,
        ~toPacket=a => PacketV1449.AnglerQuestsCompletedAmount(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.AnglerQuestsCompletedAmount(a),
      ),
    )
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TemporaryAnimationCreate.parse,
        ~toPacket=a => PacketV1449.TemporaryAnimationCreate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TemporaryAnimationCreate(a),
      ),
    )

  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.InvasionProgressReport.parse,
        ~toPacket=a => PacketV1449.InvasionProgressReport(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.InvasionProgressReport(a),
      ),
    )
  | (ObjectPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ObjectPlace.parse,
        ~toPacket=a => PacketV1449.ObjectPlace(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ObjectPlace(a),
      ),
    )
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerChestIndexSync.parse,
        ~toPacket=a => PacketV1449.PlayerChestIndexSync(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerChestIndexSync(a),
      ),
    )
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.CombatNumberCreate.parse,
        ~toPacket=a => PacketV1449.CombatNumberCreate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.CombatNumberCreate(a),
      ),
    )
  | (NetModuleLoad, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~packetName,
        ~parse=(payload, fromServer) => PacketV1449.NetModuleLoad.parse(payload, ~fromServer),
        ~toPacket=a => PacketV1449.NetModuleLoad(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NetModuleLoad(a),
      ),
    )
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcKillCount.parse,
        ~toPacket=a => PacketV1449.NpcKillCount(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcKillCount(a),
      ),
    )
  | (PlayerStealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerStealth.parse,
        ~toPacket=a => PacketV1449.PlayerStealth(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerStealth(a),
      ),
    )
  | (ItemForceIntoNearestChest, true) => Error(ItemForceIntoNearestChestFromServer)
  | (ItemForceIntoNearestChest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ItemForceIntoNearestChest.parse,
        ~toPacket=a => PacketV1449.ItemForceIntoNearestChest(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ItemForceIntoNearestChest(a),
      ),
    )
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TileEntityUpdate.parse,
        ~toPacket=a => PacketV1449.TileEntityUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TileEntityUpdate(a),
      ),
    )
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TileEntityPlace.parse,
        ~toPacket=a => PacketV1449.TileEntityPlace(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TileEntityPlace(a),
      ),
    )
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ItemDropModify.parse,
        ~toPacket=a => PacketV1449.ItemDropModify(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ItemDropModify(a),
      ),
    )
  | (ItemFramePlace, true) => Error(ItemFramePlaceFromServer)
  | (ItemFramePlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ItemFramePlace.parse,
        ~toPacket=a => PacketV1449.ItemFramePlace(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ItemFramePlace(a),
      ),
    )
  | (ItemDropInstancedUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ItemDropInstancedUpdate.parse,
        ~toPacket=a => PacketV1449.ItemDropInstancedUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ItemDropInstancedUpdate(a),
      ),
    )
  | (EmoteBubble, false) => Error(EmoteBubbleFromClient)
  | (EmoteBubble, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.EmoteBubble.parse,
        ~toPacket=a => PacketV1449.EmoteBubble(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.EmoteBubble(a),
      ),
    )
  | (ExtraValueSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ExtraValueSync.parse,
        ~toPacket=a => PacketV1449.ExtraValueSync(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ExtraValueSync(a),
      ),
    )
  | (SocialHandshake, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.SocialHandshake.parse,
        ~toPacket=a => PacketV1449.SocialHandshake(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.SocialHandshake(a),
      ),
    )
  | (Unused, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.Unused.parse,
        ~toPacket=a => PacketV1449.Unused(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.Unused(a),
      ),
    )
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PortalKill.parse,
        ~toPacket=a => PacketV1449.PortalKill(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PortalKill(a),
      ),
    )
  | (PlayerTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerTeleportPortal.parse,
        ~toPacket=a => PacketV1449.PlayerTeleportPortal(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerTeleportPortal(a),
      ),
    )
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcKilledNotification.parse,
        ~toPacket=a => PacketV1449.NpcKilledNotification(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcKilledNotification(a),
      ),
    )
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.EventNotification.parse,
        ~toPacket=a => PacketV1449.EventNotification(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.EventNotification(a),
      ),
    )
  | (MinionTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.MinionTargetUpdate.parse,
        ~toPacket=a => PacketV1449.MinionTargetUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.MinionTargetUpdate(a),
      ),
    )
  | (NpcTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcTeleportPortal.parse,
        ~toPacket=a => PacketV1449.NpcTeleportPortal(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcTeleportPortal(a),
      ),
    )
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ShieldStrengthsUpdate.parse,
        ~toPacket=a => PacketV1449.ShieldStrengthsUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ShieldStrengthsUpdate(a),
      ),
    )
  | (NebulaLevelUp, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NebulaLevelUp.parse,
        ~toPacket=a => PacketV1449.NebulaLevelUp(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NebulaLevelUp(a),
      ),
    )
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.MoonLordCountdown.parse,
        ~toPacket=a => PacketV1449.MoonLordCountdown(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.MoonLordCountdown(a),
      ),
    )
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcShopItem.parse,
        ~toPacket=a => PacketV1449.NpcShopItem(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcShopItem(a),
      ),
    )
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.GemLockToggle.parse,
        ~toPacket=a => PacketV1449.GemLockToggle(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.GemLockToggle(a),
      ),
    )
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.SmokePoof.parse,
        ~toPacket=a => PacketV1449.SmokePoof(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.SmokePoof(a),
      ),
    )
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ChatMessageSmart.parse,
        ~toPacket=a => PacketV1449.ChatMessageSmart(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ChatMessageSmart(a),
      ),
    )
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.WiredCannonShot.parse,
        ~toPacket=a => PacketV1449.WiredCannonShot(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.WiredCannonShot(a),
      ),
    )
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.MassWireOperation.parse,
        ~toPacket=a => PacketV1449.MassWireOperation(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.MassWireOperation(a),
      ),
    )
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.MassWireOperationPay.parse,
        ~toPacket=a => PacketV1449.MassWireOperationPay(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.MassWireOperationPay(a),
      ),
    )
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PartyToggle.parse,
        ~toPacket=a => PacketV1449.PartyToggle(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PartyToggle(a),
      ),
    )
  | (TreeGrowFx, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TreeGrowFx.parse,
        ~toPacket=a => PacketV1449.TreeGrowFx(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TreeGrowFx(a),
      ),
    )
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.CrystalInvasionStart.parse,
        ~toPacket=a => PacketV1449.CrystalInvasionStart(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.CrystalInvasionStart(a),
      ),
    )
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.CrystalInvasionWipeAll.parse,
        ~toPacket=a => PacketV1449.CrystalInvasionWipeAll(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.CrystalInvasionWipeAll(a),
      ),
    )
  | (MinionAttackTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.MinionAttackTargetUpdate.parse,
        ~toPacket=a => PacketV1449.MinionAttackTargetUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.MinionAttackTargetUpdate(a),
      ),
    )
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.CrystalInvasionSendWaitTime.parse,
        ~toPacket=a => PacketV1449.CrystalInvasionSendWaitTime(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.CrystalInvasionSendWaitTime(a),
      ),
    )
  | (PlayerDamage, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerDamage.parse,
        ~toPacket=a => PacketV1449.PlayerDamage(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerDamage(a),
      ),
    )
  | (PlayerDeath, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerDeath.parse,
        ~toPacket=a => PacketV1449.PlayerDeath(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerDeath(a),
      ),
    )
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.CombatTextCreate.parse,
        ~toPacket=a => PacketV1449.CombatTextCreate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.CombatTextCreate(a),
      ),
    )
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.Emoji.parse,
        ~toPacket=a => PacketV1449.Emoji(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.Emoji(a),
      ),
    )
  | (TileEntityDisplayDollItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TileEntityDisplayDollItemSync.parse,
        ~toPacket=a => PacketV1449.TileEntityDisplayDollItemSync(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TileEntityDisplayDollItemSync(a),
      ),
    )
  | (TileEntityInteractionRequest, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TileEntityInteractionRequest.parse,
        ~toPacket=a => PacketV1449.TileEntityInteractionRequest(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TileEntityInteractionRequest(a),
      ),
    )
  | (WeaponsRackTryPlacing, true) => Error(WeaponsRackTryPlacingFromServer)
  | (WeaponsRackTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.WeaponsRackTryPlacing.parse,
        ~toPacket=a => PacketV1449.WeaponsRackTryPlacing(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.WeaponsRackTryPlacing(a),
      ),
    )
  | (TileEntityHatRackItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TileEntityHatRackItemSync.parse,
        ~toPacket=a => PacketV1449.TileEntityHatRackItemSync(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TileEntityHatRackItemSync(a),
      ),
    )
  | (TilePickingSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.TilePickingSync.parse,
        ~toPacket=a => PacketV1449.TilePickingSync(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.TilePickingSync(a),
      ),
    )
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.RevengeMarkerSync.parse,
        ~toPacket=a => PacketV1449.RevengeMarkerSync(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.RevengeMarkerSync(a),
      ),
    )
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.RevengeMarkerRemove.parse,
        ~toPacket=a => PacketV1449.RevengeMarkerRemove(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.RevengeMarkerRemove(a),
      ),
    )
  | (GolfBallLandInCup, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.GolfBallLandInCup.parse,
        ~toPacket=a => PacketV1449.GolfBallLandInCup(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.GolfBallLandInCup(a),
      ),
    )
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ClientFinishConnectingToServer.parse,
        ~toPacket=a => PacketV1449.ClientFinishConnectingToServer(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ClientFinishConnectingToServer(a),
      ),
    )
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcFishOut.parse,
        ~toPacket=a => PacketV1449.NpcFishOut(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcFishOut(a),
      ),
    )
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcTamper.parse,
        ~toPacket=a => PacketV1449.NpcTamper(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcTamper(a),
      ),
    )
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.LegacySoundPlay.parse,
        ~toPacket=a => PacketV1449.LegacySoundPlay(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.LegacySoundPlay(a),
      ),
    )
  | (FoodPlatterTryPlacing, true) => Error(FoodPlatterTryPlacingFromServer)
  | (FoodPlatterTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.FoodPlatterTryPlacing.parse,
        ~toPacket=a => PacketV1449.FoodPlatterTryPlacing(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.FoodPlatterTryPlacing(a),
      ),
    )
  | (PlayerLuckFactorsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerLuckFactorsUpdate.parse,
        ~toPacket=a => PacketV1449.PlayerLuckFactorsUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerLuckFactorsUpdate(a),
      ),
    )
  | (PlayerDead, false) => Error(PlayerDeadFromClient)
  | (PlayerDead, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PlayerDead.parse,
        ~toPacket=a => PacketV1449.PlayerDead(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PlayerDead(a),
      ),
    )
  | (CavernMonsterTypeSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.CavernMonsterTypeSync.parse,
        ~toPacket=a => PacketV1449.CavernMonsterTypeSync(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.CavernMonsterTypeSync(a),
      ),
    )
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.NpcBuffRemovalRequest.parse,
        ~toPacket=a => PacketV1449.NpcBuffRemovalRequest(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.NpcBuffRemovalRequest(a),
      ),
    )
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ClientSyncedInventory.parse,
        ~toPacket=a => PacketV1449.ClientSyncedInventory(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ClientSyncedInventory(a),
      ),
    )
  | (CountsAsHostForGameplaySet, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.CountsAsHostForGameplaySet.parse,
        ~toPacket=a => PacketV1449.CountsAsHostForGameplaySet(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.CountsAsHostForGameplaySet(a),
      ),
    )
  | (CreditsOrSlimeTransform, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.CreditsOrSlimeTransform.parse,
        ~toPacket=a => PacketV1449.CreditsOrSlimeTransform(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.CreditsOrSlimeTransform(a),
      ),
    )
  | (LucyAxeMessage, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.LucyAxeMessage.parse,
        ~toPacket=a => PacketV1449.LucyAxeMessage(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.LucyAxeMessage(a),
      ),
    )
  | (PiggyBankVoidLensUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.PiggyBankVoidLensUpdate.parse,
        ~toPacket=a => PacketV1449.PiggyBankVoidLensUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.PiggyBankVoidLensUpdate(a),
      ),
    )
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.DungeonDefendersEventAttemptSkipWait.parse,
        ~toPacket=a => PacketV1449.DungeonDefendersEventAttemptSkipWait(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.DungeonDefendersEventAttemptSkipWait(a),
      ),
    )
  | (HaveDryadDoStardewAnimation, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.HaveDryadDoStardewAnimation.parse,
        ~toPacket=a => PacketV1449.HaveDryadDoStardewAnimation(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.HaveDryadDoStardewAnimation(a),
      ),
    )
  | (ItemDropShimmeredUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ItemDropShimmeredUpdate.parse,
        ~toPacket=a => PacketV1449.ItemDropShimmeredUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ItemDropShimmeredUpdate(a),
      ),
    )
  | (ShimmerEffectOrCoinLuck, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ShimmerEffectOrCoinLuck.parse,
        ~toPacket=a => PacketV1449.ShimmerEffectOrCoinLuck(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ShimmerEffectOrCoinLuck(a),
      ),
    )
  | (LoadoutSwitch, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.LoadoutSwitch.parse,
        ~toPacket=a => PacketV1449.LoadoutSwitch(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.LoadoutSwitch(a),
      ),
    )
  | (ItemDropProtectedUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1449.ItemDropProtectedUpdate.parse,
        ~toPacket=a => PacketV1449.ItemDropProtectedUpdate(a),
        ~toLazyPacket=a => PacketV1449.LazyPacket.ItemDropProtectedUpdate(a),
      ),
    )
  | _ => Error(InvalidPacketType(PacketType.toInt(packetType)))
  }
}

let parsePayload = (packetType: PacketType.t, payload: NodeJs.Buffer.t, fromServer: bool): result<
  PacketV1449.t,
  IParser.parseError,
> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parse(payload, fromServer)
  | Error(err) => Error(err)
  }

let parsePayloadLazy = (
  packetType: PacketType.t,
  payload: NodeJs.Buffer.t,
  fromServer: bool,
): result<PacketV1449.LazyPacket.t, IParser.parseError> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parseLazy(payload, fromServer)
  | Error(err) => Error(err)
  }

let parse: IParser.parse<PacketV1449.t> = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
  ~ignore: array<PacketType.t>=[],
) => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) if Array.includes(ignore, packetType) => Error(IgnoredPacket)
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the latest version to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayload(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "Parser.parse", error: obj}))
      }
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}

let parseLazy: IParser.parseLazy<PacketV1449.LazyPacket.t> = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the latest version to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayloadLazy(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "Parser.parseLazy", error: obj}))
      }
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}
