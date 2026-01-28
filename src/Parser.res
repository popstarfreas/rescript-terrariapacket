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
  | DeadCellsDisplayJarTryPlacing => "DeadCellsDisplayJarTryPlacing"
  | PlayerSpectate => "PlayerSpectate"
  | ItemDropClear => "ItemDropClear"
  | PlayerItemUseSound => "PlayerItemUseSound"
  | NpcHurtByDebuff => "NpcHurtByDebuff"
  | Ping => "Ping"
  | ChestResize => "ChestResize"
  | LeashedEntityAnchorInsertItem => "LeashedEntityAnchorInsertItem"
  | PlayerTeamUpdate => "PlayerTeamUpdate"
  | PlayerTeamSwapSpawn => "PlayerTeamSwapSpawn"
  | SectionRequest => "SectionRequest"
  | ItemDropPosition => "ItemDropPosition"
  | HostToken => "HostToken"
  }

let addPacketContext = (
  ~packetName,
  err: ErrorAwarePacketReader.readError,
): ErrorAwarePacketReader.readError => {
  context: "Packet " ++ packetName ++ ": " ++ err.context,
  error: err.error,
}

let mapPacket = (result, ~packetName, fn): result<Packet.t, IParser.parseError> =>
  result
  ->Result.map(fn)
  ->Result.mapError(e => IParser.ParseError.ReaderError(addPacketContext(~packetName, e)))

type parsers = {
  parse: (NodeJs.Buffer.t, bool) => result<Packet.t, IParser.parseError>,
  parseLazy: (NodeJs.Buffer.t, bool) => result<Packet.LazyPacket.t, IParser.parseError>,
}

let makeParsers = (
  ~packetName: string,
  ~parse: NodeJs.Buffer.t => result<'a, ErrorAwarePacketReader.readError>,
  ~toPacket: 'a => Packet.t,
  ~toLazyPacket: Packet.LazyPacket.lazyParsed<'a> => Packet.LazyPacket.t,
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
  ~toPacket: 'a => Packet.t,
  ~toLazyPacket: Packet.LazyPacket.lazyParsed<'a> => Packet.LazyPacket.t,
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
        ~toPacket=a => Packet.ConnectRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.ConnectRequest(a),
      ),
    )
  | (Disconnect, false) => Error(DisconnectFromClient)
  | (Disconnect, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.Disconnect.parse,
        ~toPacket=a => Packet.Disconnect(a),
        ~toLazyPacket=a => Packet.LazyPacket.Disconnect(a),
      ),
    )
  | (PlayerSlotSet, false) => Error(PlayerSlotSetFromClient)
  | (PlayerSlotSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerSlotSet.parse,
        ~toPacket=a => Packet.PlayerSlotSet(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerSlotSet(a),
      ),
    )
  | (PlayerInfo, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerInfo.parse,
        ~toPacket=a => Packet.PlayerInfo(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerInfo(a),
      ),
    )
  | (PlayerInventorySlot, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerInventorySlot.parse,
        ~toPacket=a => Packet.PlayerInventorySlot(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerInventorySlot(a),
      ),
    )
  | (WorldDataRequest, true) => Error(WorldDataRequestFromServer)
  | (WorldDataRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.WorldDataRequest.parse,
        ~toPacket=a => Packet.WorldDataRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.WorldDataRequest(a),
      ),
    )
  | (WorldInfo, false) => Error(WorldInfoFromClient)
  | (WorldInfo, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.WorldInfo.parse,
        ~toPacket=a => Packet.WorldInfo(a),
        ~toLazyPacket=a => Packet.LazyPacket.WorldInfo(a),
      ),
    )
  | (InitialTileSectionsRequest, true) => Error(InitialTileSectionsRequestFromServer)
  | (InitialTileSectionsRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.InitialTileSectionsRequest.parse,
        ~toPacket=a => Packet.InitialTileSectionsRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.InitialTileSectionsRequest(a),
      ),
    )
  | (Status, false) => Error(StatusFromClient)
  | (Status, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.Status.parse,
        ~toPacket=a => Packet.Status(a),
        ~toLazyPacket=a => Packet.LazyPacket.Status(a),
      ),
    )
  | (TileSectionSend, false) => Error(TileSectionSendFromClient)
  | (TileSectionSend, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TileSectionSend.parse,
        ~toPacket=a => Packet.TileSectionSend(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileSectionSend(a),
      ),
    )
  | (TileSectionFrame, false) => Error(TileSectionFrameFromClient)
  | (TileSectionFrame, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TileSectionFrame.parse,
        ~toPacket=a => Packet.TileSectionFrame(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileSectionFrame(a),
      ),
    )
  | (PlayerSpawn, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerSpawn.parse,
        ~toPacket=a => Packet.PlayerSpawn(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerSpawn(a),
      ),
    )
  | (PlayerUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerUpdate.parse,
        ~toPacket=a => Packet.PlayerUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerUpdate(a),
      ),
    )
  | (PlayerActive, false) => Error(PlayerActiveFromClient)
  | (PlayerActive, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerActive.parse,
        ~toPacket=a => Packet.PlayerActive(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerActive(a),
      ),
    )
  | (PlayerHealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerHealth.parse,
        ~toPacket=a => Packet.PlayerHealth(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerHealth(a),
      ),
    )
  | (TileModify, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TileModify.parse,
        ~toPacket=a => Packet.TileModify(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileModify(a),
      ),
    )
  | (TimeSet, false) => Error(TimeSetFromClient)
  | (TimeSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TimeSet.parse,
        ~toPacket=a => Packet.TimeSet(a),
        ~toLazyPacket=a => Packet.LazyPacket.TimeSet(a),
      ),
    )
  | (DoorUse, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.DoorUse.parse,
        ~toPacket=a => Packet.DoorUse(a),
        ~toLazyPacket=a => Packet.LazyPacket.DoorUse(a),
      ),
    )
  | (TileSquareSend, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TileSquareSend.parse,
        ~toPacket=a => Packet.TileSquareSend(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileSquareSend(a),
      ),
    )
  | (ItemDropUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemDropUpdate.parse,
        ~toPacket=a => Packet.ItemDropUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropUpdate(a),
      ),
    )
  | (ItemOwner, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemOwner.parse,
        ~toPacket=a => Packet.ItemOwner(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemOwner(a),
      ),
    )
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcUpdate.parse,
        ~toPacket=a => Packet.NpcUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcUpdate(a),
      ),
    )
  | (NpcItemStrike, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcItemStrike.parse,
        ~toPacket=a => Packet.NpcItemStrike(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcItemStrike(a),
      ),
    )
  | (ProjectileSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ProjectileSync.parse,
        ~toPacket=a => Packet.ProjectileSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.ProjectileSync(a),
      ),
    )
  | (NpcStrike, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcStrike.parse,
        ~toPacket=a => Packet.NpcStrike(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcStrike(a),
      ),
    )
  | (ProjectileDestroy, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ProjectileDestroy.parse,
        ~toPacket=a => Packet.ProjectileDestroy(a),
        ~toLazyPacket=a => Packet.LazyPacket.ProjectileDestroy(a),
      ),
    )
  | (PvpToggle, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PvpToggle.parse,
        ~toPacket=a => Packet.PvpToggle(a),
        ~toLazyPacket=a => Packet.LazyPacket.PvpToggle(a),
      ),
    )
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ChestOpen.parse,
        ~toPacket=a => Packet.ChestOpen(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestOpen(a),
      ),
    )
  | (ChestItem, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ChestItem.parse,
        ~toPacket=a => Packet.ChestItem(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestItem(a),
      ),
    )
  | (ActiveContainerSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ActiveContainerSync.parse,
        ~toPacket=a => Packet.ActiveContainerSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.ActiveContainerSync(a),
      ),
    )
  | (ChestPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ChestPlace.parse,
        ~toPacket=a => Packet.ChestPlace(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestPlace(a),
      ),
    )
  | (HealEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.HealEffect.parse,
        ~toPacket=a => Packet.HealEffect(a),
        ~toLazyPacket=a => Packet.LazyPacket.HealEffect(a),
      ),
    )
  | (Zones, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.Zones.parse,
        ~toPacket=a => Packet.Zones(a),
        ~toLazyPacket=a => Packet.LazyPacket.Zones(a),
      ),
    )
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PasswordRequired.parse,
        ~toPacket=a => Packet.PasswordRequired(a),
        ~toLazyPacket=a => Packet.LazyPacket.PasswordRequired(a),
      ),
    )
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PasswordSend.parse,
        ~toPacket=a => Packet.PasswordSend(a),
        ~toLazyPacket=a => Packet.LazyPacket.PasswordSend(a),
      ),
    )
  | (ItemOwnerRemove, false) => Error(ItemOwnerRemoveFromClient)
  | (ItemOwnerRemove, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemOwnerRemove.parse,
        ~toPacket=a => Packet.ItemOwnerRemove(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemOwnerRemove(a),
      ),
    )
  | (NpcTalk, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcTalk.parse,
        ~toPacket=a => Packet.NpcTalk(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcTalk(a),
      ),
    )
  | (PlayerAnimation, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerAnimation.parse,
        ~toPacket=a => Packet.PlayerAnimation(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerAnimation(a),
      ),
    )
  | (PlayerMana, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerMana.parse,
        ~toPacket=a => Packet.PlayerMana(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerMana(a),
      ),
    )
  | (ManaEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ManaEffect.parse,
        ~toPacket=a => Packet.ManaEffect(a),
        ~toLazyPacket=a => Packet.LazyPacket.ManaEffect(a),
      ),
    )
  | (PlayerTeam, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerTeam.parse,
        ~toPacket=a => Packet.PlayerTeam(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerTeam(a),
      ),
    )
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.SignRead.parse,
        ~toPacket=a => Packet.SignRead(a),
        ~toLazyPacket=a => Packet.LazyPacket.SignRead(a),
      ),
    )
  | (SignNew, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.SignNew.parse,
        ~toPacket=a => Packet.SignNew(a),
        ~toLazyPacket=a => Packet.LazyPacket.SignNew(a),
      ),
    )
  | (LiquidSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.LiquidSet.parse,
        ~toPacket=a => Packet.LiquidSet(a),
        ~toLazyPacket=a => Packet.LazyPacket.LiquidSet(a),
      ),
    )
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerSpawnSelf.parse,
        ~toPacket=a => Packet.PlayerSpawnSelf(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerSpawnSelf(a),
      ),
    )
  | (PlayerBuffsSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerBuffsSet.parse,
        ~toPacket=a => Packet.PlayerBuffsSet(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerBuffsSet(a),
      ),
    )
  | (NpcSpecialEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcSpecialEffect.parse,
        ~toPacket=a => Packet.NpcSpecialEffect(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcSpecialEffect(a),
      ),
    )
  | (ChestOrTempleUnlock, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ChestOrTempleUnlock.parse,
        ~toPacket=a => Packet.ChestOrTempleUnlock(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestOrTempleUnlock(a),
      ),
    )
  | (NpcBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcBuffAdd.parse,
        ~toPacket=a => Packet.NpcBuffAdd(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcBuffAdd(a),
      ),
    )
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcBuffUpdate.parse,
        ~toPacket=a => Packet.NpcBuffUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcBuffUpdate(a),
      ),
    )
  | (PlayerBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerBuffAdd.parse,
        ~toPacket=a => Packet.PlayerBuffAdd(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerBuffAdd(a),
      ),
    )
  | (NpcNameUpdate, fromServer) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcNameUpdate.parse(_, ~fromServer),
        ~toPacket=a => Packet.NpcNameUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcNameUpdate(a),
      ),
    )
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.GoodEvilUpdate.parse,
        ~toPacket=a => Packet.GoodEvilUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.GoodEvilUpdate(a),
      ),
    )
  | (HarpPlay, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.HarpPlay.parse,
        ~toPacket=a => Packet.HarpPlay(a),
        ~toLazyPacket=a => Packet.LazyPacket.HarpPlay(a),
      ),
    )
  | (SwitchHit, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.SwitchHit.parse,
        ~toPacket=a => Packet.SwitchHit(a),
        ~toLazyPacket=a => Packet.LazyPacket.SwitchHit(a),
      ),
    )
  | (NpcHomeUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcHomeUpdate.parse,
        ~toPacket=a => Packet.NpcHomeUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcHomeUpdate(a),
      ),
    )
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.BossOrInvasionSpawn.parse,
        ~toPacket=a => Packet.BossOrInvasionSpawn(a),
        ~toLazyPacket=a => Packet.LazyPacket.BossOrInvasionSpawn(a),
      ),
    )
  | (PlayerDodge, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerDodge.parse,
        ~toPacket=a => Packet.PlayerDodge(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerDodge(a),
      ),
    )
  | (TilePaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TilePaint.parse,
        ~toPacket=a => Packet.TilePaint(a),
        ~toLazyPacket=a => Packet.LazyPacket.TilePaint(a),
      ),
    )
  | (WallPaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.WallPaint.parse,
        ~toPacket=a => Packet.WallPaint(a),
        ~toLazyPacket=a => Packet.LazyPacket.WallPaint(a),
      ),
    )
  | (Teleport, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.Teleport.parse,
        ~toPacket=a => Packet.Teleport(a),
        ~toLazyPacket=a => Packet.LazyPacket.Teleport(a),
      ),
    )
  | (PlayerHealOther, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerHealOther.parse,
        ~toPacket=a => Packet.PlayerHealOther(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerHealOther(a),
      ),
    )
  | (DimensionsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.DimensionsUpdate.parse,
        ~toPacket=a => Packet.DimensionsUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.DimensionsUpdate(a),
      ),
    )
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ClientUuid.parse,
        ~toPacket=a => Packet.ClientUuid(a),
        ~toLazyPacket=a => Packet.LazyPacket.ClientUuid(a),
      ),
    )
  | (ChestName, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ChestName.parse,
        ~toPacket=a => Packet.ChestName(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestName(a),
      ),
    )
  | (NpcCatch, true) => Error(NpcCatchFromServer)
  | (NpcCatch, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcCatch.parse,
        ~toPacket=a => Packet.NpcCatch(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcCatch(a),
      ),
    )
  | (NpcRelease, true) => Error(NpcReleaseFromServer)
  | (NpcRelease, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcRelease.parse,
        ~toPacket=a => Packet.NpcRelease(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcRelease(a),
      ),
    )
  | (TravellingMerchantInventory, false) => Error(TravellingMerchantInventoryFromClient)
  | (TravellingMerchantInventory, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TravellingMerchantInventory.parse,
        ~toPacket=a => Packet.TravellingMerchantInventory(a),
        ~toLazyPacket=a => Packet.LazyPacket.TravellingMerchantInventory(a),
      ),
    )
  | (TeleportationPotion, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TeleportationPotion.parse,
        ~toPacket=a => Packet.TeleportationPotion(a),
        ~toLazyPacket=a => Packet.LazyPacket.TeleportationPotion(a),
      ),
    )
  | (AnglerQuest, false) => Error(AnglerQuestFromClient)
  | (AnglerQuest, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.AnglerQuest.parse,
        ~toPacket=a => Packet.AnglerQuest(a),
        ~toLazyPacket=a => Packet.LazyPacket.AnglerQuest(a),
      ),
    )
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.AnglerQuestComplete.parse,
        ~toPacket=a => Packet.AnglerQuestComplete(a),
        ~toLazyPacket=a => Packet.LazyPacket.AnglerQuestComplete(a),
      ),
    )
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.AnglerQuestsCompletedAmount.parse,
        ~toPacket=a => Packet.AnglerQuestsCompletedAmount(a),
        ~toLazyPacket=a => Packet.LazyPacket.AnglerQuestsCompletedAmount(a),
      ),
    )
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TemporaryAnimationCreate.parse,
        ~toPacket=a => Packet.TemporaryAnimationCreate(a),
        ~toLazyPacket=a => Packet.LazyPacket.TemporaryAnimationCreate(a),
      ),
    )

  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.InvasionProgressReport.parse,
        ~toPacket=a => Packet.InvasionProgressReport(a),
        ~toLazyPacket=a => Packet.LazyPacket.InvasionProgressReport(a),
      ),
    )
  | (ObjectPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ObjectPlace.parse,
        ~toPacket=a => Packet.ObjectPlace(a),
        ~toLazyPacket=a => Packet.LazyPacket.ObjectPlace(a),
      ),
    )
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerChestIndexSync.parse,
        ~toPacket=a => Packet.PlayerChestIndexSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerChestIndexSync(a),
      ),
    )
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.CombatNumberCreate.parse,
        ~toPacket=a => Packet.CombatNumberCreate(a),
        ~toLazyPacket=a => Packet.LazyPacket.CombatNumberCreate(a),
      ),
    )
  | (NetModuleLoad, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~packetName,
        ~parse=(payload, fromServer) => Packet.NetModuleLoad.parse(payload, ~fromServer),
        ~toPacket=a => Packet.NetModuleLoad(a),
        ~toLazyPacket=a => Packet.LazyPacket.NetModuleLoad(a),
      ),
    )
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcKillCount.parse,
        ~toPacket=a => Packet.NpcKillCount(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcKillCount(a),
      ),
    )
  | (PlayerStealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerStealth.parse,
        ~toPacket=a => Packet.PlayerStealth(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerStealth(a),
      ),
    )
  | (ItemForceIntoNearestChest, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~packetName,
        ~parse=(payload, fromServer) => Packet.ItemForceIntoNearestChest.parse(payload, fromServer),
        ~toPacket=a => Packet.ItemForceIntoNearestChest(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemForceIntoNearestChest(a),
      ),
    )
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TileEntityUpdate.parse,
        ~toPacket=a => Packet.TileEntityUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityUpdate(a),
      ),
    )
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TileEntityPlace.parse,
        ~toPacket=a => Packet.TileEntityPlace(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityPlace(a),
      ),
    )
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemDropModify.parse,
        ~toPacket=a => Packet.ItemDropModify(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropModify(a),
      ),
    )
  | (ItemFramePlace, true) => Error(ItemFramePlaceFromServer)
  | (ItemFramePlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemFramePlace.parse,
        ~toPacket=a => Packet.ItemFramePlace(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemFramePlace(a),
      ),
    )
  | (ItemDropInstancedUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemDropInstancedUpdate.parse,
        ~toPacket=a => Packet.ItemDropInstancedUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropInstancedUpdate(a),
      ),
    )
  | (EmoteBubble, false) => Error(EmoteBubbleFromClient)
  | (EmoteBubble, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.EmoteBubble.parse,
        ~toPacket=a => Packet.EmoteBubble(a),
        ~toLazyPacket=a => Packet.LazyPacket.EmoteBubble(a),
      ),
    )
  | (ExtraValueSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ExtraValueSync.parse,
        ~toPacket=a => Packet.ExtraValueSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.ExtraValueSync(a),
      ),
    )
  | (SocialHandshake, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.SocialHandshake.parse,
        ~toPacket=a => Packet.SocialHandshake(a),
        ~toLazyPacket=a => Packet.LazyPacket.SocialHandshake(a),
      ),
    )
  | (Unused, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.Unused.parse,
        ~toPacket=a => Packet.Unused(a),
        ~toLazyPacket=a => Packet.LazyPacket.Unused(a),
      ),
    )
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PortalKill.parse,
        ~toPacket=a => Packet.PortalKill(a),
        ~toLazyPacket=a => Packet.LazyPacket.PortalKill(a),
      ),
    )
  | (PlayerTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerTeleportPortal.parse,
        ~toPacket=a => Packet.PlayerTeleportPortal(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerTeleportPortal(a),
      ),
    )
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcKilledNotification.parse,
        ~toPacket=a => Packet.NpcKilledNotification(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcKilledNotification(a),
      ),
    )
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.EventNotification.parse,
        ~toPacket=a => Packet.EventNotification(a),
        ~toLazyPacket=a => Packet.LazyPacket.EventNotification(a),
      ),
    )
  | (MinionTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.MinionTargetUpdate.parse,
        ~toPacket=a => Packet.MinionTargetUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.MinionTargetUpdate(a),
      ),
    )
  | (NpcTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcTeleportPortal.parse,
        ~toPacket=a => Packet.NpcTeleportPortal(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcTeleportPortal(a),
      ),
    )
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ShieldStrengthsUpdate.parse,
        ~toPacket=a => Packet.ShieldStrengthsUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ShieldStrengthsUpdate(a),
      ),
    )
  | (NebulaLevelUp, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NebulaLevelUp.parse,
        ~toPacket=a => Packet.NebulaLevelUp(a),
        ~toLazyPacket=a => Packet.LazyPacket.NebulaLevelUp(a),
      ),
    )
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.MoonLordCountdown.parse,
        ~toPacket=a => Packet.MoonLordCountdown(a),
        ~toLazyPacket=a => Packet.LazyPacket.MoonLordCountdown(a),
      ),
    )
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcShopItem.parse,
        ~toPacket=a => Packet.NpcShopItem(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcShopItem(a),
      ),
    )
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.GemLockToggle.parse,
        ~toPacket=a => Packet.GemLockToggle(a),
        ~toLazyPacket=a => Packet.LazyPacket.GemLockToggle(a),
      ),
    )
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.SmokePoof.parse,
        ~toPacket=a => Packet.SmokePoof(a),
        ~toLazyPacket=a => Packet.LazyPacket.SmokePoof(a),
      ),
    )
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ChatMessageSmart.parse,
        ~toPacket=a => Packet.ChatMessageSmart(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChatMessageSmart(a),
      ),
    )
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.WiredCannonShot.parse,
        ~toPacket=a => Packet.WiredCannonShot(a),
        ~toLazyPacket=a => Packet.LazyPacket.WiredCannonShot(a),
      ),
    )
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.MassWireOperation.parse,
        ~toPacket=a => Packet.MassWireOperation(a),
        ~toLazyPacket=a => Packet.LazyPacket.MassWireOperation(a),
      ),
    )
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.MassWireOperationPay.parse,
        ~toPacket=a => Packet.MassWireOperationPay(a),
        ~toLazyPacket=a => Packet.LazyPacket.MassWireOperationPay(a),
      ),
    )
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PartyToggle.parse,
        ~toPacket=a => Packet.PartyToggle(a),
        ~toLazyPacket=a => Packet.LazyPacket.PartyToggle(a),
      ),
    )
  | (TreeGrowFx, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TreeGrowFx.parse,
        ~toPacket=a => Packet.TreeGrowFx(a),
        ~toLazyPacket=a => Packet.LazyPacket.TreeGrowFx(a),
      ),
    )
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.CrystalInvasionStart.parse,
        ~toPacket=a => Packet.CrystalInvasionStart(a),
        ~toLazyPacket=a => Packet.LazyPacket.CrystalInvasionStart(a),
      ),
    )
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.CrystalInvasionWipeAll.parse,
        ~toPacket=a => Packet.CrystalInvasionWipeAll(a),
        ~toLazyPacket=a => Packet.LazyPacket.CrystalInvasionWipeAll(a),
      ),
    )
  | (MinionAttackTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.MinionAttackTargetUpdate.parse,
        ~toPacket=a => Packet.MinionAttackTargetUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.MinionAttackTargetUpdate(a),
      ),
    )
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.CrystalInvasionSendWaitTime.parse,
        ~toPacket=a => Packet.CrystalInvasionSendWaitTime(a),
        ~toLazyPacket=a => Packet.LazyPacket.CrystalInvasionSendWaitTime(a),
      ),
    )
  | (PlayerDamage, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerDamage.parse,
        ~toPacket=a => Packet.PlayerDamage(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerDamage(a),
      ),
    )
  | (PlayerDeath, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerDeath.parse,
        ~toPacket=a => Packet.PlayerDeath(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerDeath(a),
      ),
    )
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.CombatTextCreate.parse,
        ~toPacket=a => Packet.CombatTextCreate(a),
        ~toLazyPacket=a => Packet.LazyPacket.CombatTextCreate(a),
      ),
    )
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.Emoji.parse,
        ~toPacket=a => Packet.Emoji(a),
        ~toLazyPacket=a => Packet.LazyPacket.Emoji(a),
      ),
    )
  | (TileEntityDisplayDollItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TileEntityDisplayDollItemSync.parse,
        ~toPacket=a => Packet.TileEntityDisplayDollItemSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityDisplayDollItemSync(a),
      ),
    )
  | (TileEntityInteractionRequest, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TileEntityInteractionRequest.parse,
        ~toPacket=a => Packet.TileEntityInteractionRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityInteractionRequest(a),
      ),
    )
  | (WeaponsRackTryPlacing, true) => Error(WeaponsRackTryPlacingFromServer)
  | (WeaponsRackTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.WeaponsRackTryPlacing.parse,
        ~toPacket=a => Packet.WeaponsRackTryPlacing(a),
        ~toLazyPacket=a => Packet.LazyPacket.WeaponsRackTryPlacing(a),
      ),
    )
  | (TileEntityHatRackItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TileEntityHatRackItemSync.parse,
        ~toPacket=a => Packet.TileEntityHatRackItemSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityHatRackItemSync(a),
      ),
    )
  | (TilePickingSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.TilePickingSync.parse,
        ~toPacket=a => Packet.TilePickingSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.TilePickingSync(a),
      ),
    )
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.RevengeMarkerSync.parse,
        ~toPacket=a => Packet.RevengeMarkerSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.RevengeMarkerSync(a),
      ),
    )
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.RevengeMarkerRemove.parse,
        ~toPacket=a => Packet.RevengeMarkerRemove(a),
        ~toLazyPacket=a => Packet.LazyPacket.RevengeMarkerRemove(a),
      ),
    )
  | (GolfBallLandInCup, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.GolfBallLandInCup.parse,
        ~toPacket=a => Packet.GolfBallLandInCup(a),
        ~toLazyPacket=a => Packet.LazyPacket.GolfBallLandInCup(a),
      ),
    )
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ClientFinishConnectingToServer.parse,
        ~toPacket=a => Packet.ClientFinishConnectingToServer(a),
        ~toLazyPacket=a => Packet.LazyPacket.ClientFinishConnectingToServer(a),
      ),
    )
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcFishOut.parse,
        ~toPacket=a => Packet.NpcFishOut(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcFishOut(a),
      ),
    )
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcTamper.parse,
        ~toPacket=a => Packet.NpcTamper(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcTamper(a),
      ),
    )
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.LegacySoundPlay.parse,
        ~toPacket=a => Packet.LegacySoundPlay(a),
        ~toLazyPacket=a => Packet.LazyPacket.LegacySoundPlay(a),
      ),
    )
  | (FoodPlatterTryPlacing, true) => Error(FoodPlatterTryPlacingFromServer)
  | (FoodPlatterTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.FoodPlatterTryPlacing.parse,
        ~toPacket=a => Packet.FoodPlatterTryPlacing(a),
        ~toLazyPacket=a => Packet.LazyPacket.FoodPlatterTryPlacing(a),
      ),
    )
  | (PlayerLuckFactorsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerLuckFactorsUpdate.parse,
        ~toPacket=a => Packet.PlayerLuckFactorsUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerLuckFactorsUpdate(a),
      ),
    )
  | (PlayerDead, false) => Error(PlayerDeadFromClient)
  | (PlayerDead, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerDead.parse,
        ~toPacket=a => Packet.PlayerDead(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerDead(a),
      ),
    )
  | (CavernMonsterTypeSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.CavernMonsterTypeSync.parse,
        ~toPacket=a => Packet.CavernMonsterTypeSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.CavernMonsterTypeSync(a),
      ),
    )
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcBuffRemovalRequest.parse,
        ~toPacket=a => Packet.NpcBuffRemovalRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcBuffRemovalRequest(a),
      ),
    )
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ClientSyncedInventory.parse,
        ~toPacket=a => Packet.ClientSyncedInventory(a),
        ~toLazyPacket=a => Packet.LazyPacket.ClientSyncedInventory(a),
      ),
    )
  | (CountsAsHostForGameplaySet, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.CountsAsHostForGameplaySet.parse,
        ~toPacket=a => Packet.CountsAsHostForGameplaySet(a),
        ~toLazyPacket=a => Packet.LazyPacket.CountsAsHostForGameplaySet(a),
      ),
    )
  | (CreditsOrSlimeTransform, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.CreditsOrSlimeTransform.parse,
        ~toPacket=a => Packet.CreditsOrSlimeTransform(a),
        ~toLazyPacket=a => Packet.LazyPacket.CreditsOrSlimeTransform(a),
      ),
    )
  | (LucyAxeMessage, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.LucyAxeMessage.parse,
        ~toPacket=a => Packet.LucyAxeMessage(a),
        ~toLazyPacket=a => Packet.LazyPacket.LucyAxeMessage(a),
      ),
    )
  | (PiggyBankVoidLensUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PiggyBankVoidLensUpdate.parse,
        ~toPacket=a => Packet.PiggyBankVoidLensUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.PiggyBankVoidLensUpdate(a),
      ),
    )
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.DungeonDefendersEventAttemptSkipWait.parse,
        ~toPacket=a => Packet.DungeonDefendersEventAttemptSkipWait(a),
        ~toLazyPacket=a => Packet.LazyPacket.DungeonDefendersEventAttemptSkipWait(a),
      ),
    )
  | (HaveDryadDoStardewAnimation, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.HaveDryadDoStardewAnimation.parse,
        ~toPacket=a => Packet.HaveDryadDoStardewAnimation(a),
        ~toLazyPacket=a => Packet.LazyPacket.HaveDryadDoStardewAnimation(a),
      ),
    )
  | (ItemDropShimmeredUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemDropShimmeredUpdate.parse,
        ~toPacket=a => Packet.ItemDropShimmeredUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropShimmeredUpdate(a),
      ),
    )
  | (ShimmerEffectOrCoinLuck, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ShimmerEffectOrCoinLuck.parse,
        ~toPacket=a => Packet.ShimmerEffectOrCoinLuck(a),
        ~toLazyPacket=a => Packet.LazyPacket.ShimmerEffectOrCoinLuck(a),
      ),
    )
  | (LoadoutSwitch, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.LoadoutSwitch.parse,
        ~toPacket=a => Packet.LoadoutSwitch(a),
        ~toLazyPacket=a => Packet.LazyPacket.LoadoutSwitch(a),
      ),
    )
  | (ItemDropProtectedUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemDropProtectedUpdate.parse,
        ~toPacket=a => Packet.ItemDropProtectedUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropProtectedUpdate(a),
      ),
    )
  | (DeadCellsDisplayJarTryPlacing, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.DeadCellsDisplayJarTryPlacing.parse,
        ~toPacket=a => Packet.DeadCellsDisplayJarTryPlacing(a),
        ~toLazyPacket=a => Packet.LazyPacket.DeadCellsDisplayJarTryPlacing(a),
      ),
    )
  | (PlayerSpectate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerSpectate.parse,
        ~toPacket=a => Packet.PlayerSpectate(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerSpectate(a),
      ),
    )
  | (ItemDropClear, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemDropClear.parse,
        ~toPacket=a => Packet.ItemDropClear(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropClear(a),
      ),
    )
  | (PlayerItemUseSound, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerItemUseSound.parse,
        ~toPacket=a => Packet.PlayerItemUseSound(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerItemUseSound(a),
      ),
    )
  | (NpcHurtByDebuff, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.NpcHurtByDebuff.parse,
        ~toPacket=a => Packet.NpcHurtByDebuff(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcHurtByDebuff(a),
      ),
    )
  | (Ping, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.Ping.parse,
        ~toPacket=a => Packet.Ping(a),
        ~toLazyPacket=a => Packet.LazyPacket.Ping(a),
      ),
    )
  | (ChestResize, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ChestResize.parse,
        ~toPacket=a => Packet.ChestResize(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestResize(a),
      ),
    )
  | (LeashedEntityAnchorInsertItem, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.LeashedEntityAnchorInsertItem.parse,
        ~toPacket=a => Packet.LeashedEntityAnchorInsertItem(a),
        ~toLazyPacket=a => Packet.LazyPacket.LeashedEntityAnchorInsertItem(a),
      ),
    )
  | (PlayerTeamUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerTeamUpdate.parse,
        ~toPacket=a => Packet.PlayerTeamUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerTeamUpdate(a),
      ),
    )
  | (PlayerTeamSwapSpawn, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.PlayerTeamSwapSpawn.parse,
        ~toPacket=a => Packet.PlayerTeamSwapSpawn(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerTeamSwapSpawn(a),
      ),
    )
  | (SectionRequest, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.SectionRequest.parse,
        ~toPacket=a => Packet.SectionRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.SectionRequest(a),
      ),
    )
  | (ItemDropPosition, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.ItemDropPosition.parse,
        ~toPacket=a => Packet.ItemDropPosition(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropPosition(a),
      ),
    )
  | (HostToken, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=Packet.HostToken.parse,
        ~toPacket=a => Packet.HostToken(a),
        ~toLazyPacket=a => Packet.LazyPacket.HostToken(a),
      ),
    )
  }
}

let parsePayload = (packetType: PacketType.t, payload: NodeJs.Buffer.t, fromServer: bool): result<
  Packet.t,
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
): result<Packet.LazyPacket.t, IParser.parseError> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parseLazy(payload, fromServer)
  | Error(err) => Error(err)
  }

let parse: IParser.parse<Packet.t> = (
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

let parseLazy: IParser.parseLazy<Packet.LazyPacket.t> = (
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

let worldEventInfoFromV1449 = (
  eventInfo: PacketV1449.WorldInfo.eventInfo,
): Packet.WorldInfo.eventInfo => {
  {
    shadowOrbSmashed: eventInfo.shadowOrbSmashed,
    killedBoss1: eventInfo.killedBoss1,
    killedBoss2: eventInfo.killedBoss2,
    killedBoss3: eventInfo.killedBoss3,
    hardMode: eventInfo.hardMode,
    killedClown: eventInfo.killedClown,
    serverSidedCharacters: eventInfo.serverSidedCharacters,
    killedPlantBoss: eventInfo.killedPlantBoss,
    killedMechBoss: eventInfo.killedMechBoss,
    killedMechBoss2: eventInfo.killedMechBoss2,
    killedMechBoss3: eventInfo.killedMechBoss3,
    killedAnyMechBoss: eventInfo.killedAnyMechBoss,
    cloudBg: eventInfo.cloudBg,
    crimson: eventInfo.crimson,
    pumpkinMoon: eventInfo.pumpkinMoon,
    snowMoon: eventInfo.snowMoon,
    expertMode: eventInfo.expertMode,
    fastForwardTime: eventInfo.fastForwardTime,
    slimeRain: eventInfo.slimeRain,
    killedKingSlime: eventInfo.killedKingSlime,
    killedQueenBee: eventInfo.killedQueenBee,
    killedFishron: eventInfo.killedFishron,
    killedMartians: eventInfo.killedMartians,
    killedAncientCultist: eventInfo.killedAncientCultist,
    killedMoonLord: eventInfo.killedMoonLord,
    killedPumpking: eventInfo.killedPumpking,
    killedMourningWood: eventInfo.killedMourningWood,
    killedIceQueen: eventInfo.killedIceQueen,
    killedSantank: eventInfo.killedSantank,
    killedEverscream: eventInfo.killedEverscream,
    killedGolem: eventInfo.killedGolem,
    birthdayParty: eventInfo.birthdayParty,
    killedPirates: eventInfo.killedPirates,
    killedFrostLegion: eventInfo.killedFrostLegion,
    killedGoblins: eventInfo.killedGoblins,
    sandstorm: eventInfo.sandstorm,
    dungeonDefendersEvent: eventInfo.dungeonDefendersEvent,
    killedDungeonDefendersTier1: eventInfo.killedDungeonDefendersTier1,
    killedDungeonDefendersTier2: eventInfo.killedDungeonDefendersTier2,
    killedDungeonDefendersTier3: eventInfo.killedDungeonDefendersTier3,
    combatBookUsed: eventInfo.combatBookUsed,
    manualLanterns: eventInfo.manualLanterns,
    killedSolarTower: eventInfo.killedSolarTower,
    killedVortexTower: eventInfo.killedVortexTower,
    killedNebulaTower: eventInfo.killedNebulaTower,
    killedStardustTower: eventInfo.killedStardustTower,
    forceHalloween: eventInfo.forceHalloween,
    forceChristmas: eventInfo.forceChristmas,
    boughtCat: eventInfo.boughtCat,
    boughtDog: eventInfo.boughtDog,
    boughtBunny: eventInfo.boughtBunny,
    freeCake: eventInfo.freeCake,
    drunkWorld: eventInfo.drunkWorld,
    killedEmpressOfLight: eventInfo.killedEmpressOfLight,
    killedQueenSlime: eventInfo.killedQueenSlime,
    getGoodWorld: eventInfo.getGoodWorld,
    tenthAnniversaryWorld: eventInfo.tenthAnniversaryWorld,
    dontStarveWorld: eventInfo.dontStarveWorld,
    downedDeerClops: eventInfo.downedDeerClops,
    notTheBeesWorld: eventInfo.notTheBeesWorld,
    remixWorld: eventInfo.remixWorld,
    unlockedSlimeBlueSpawn: eventInfo.unlockedSlimeBlueSpawn,
    combatBookVolumeTwoWasUsed: eventInfo.combatBookVolumeTwoWasUsed,
    peddlersSatchelWasUsed: eventInfo.peddlersSatchelWasUsed,
    unlockedSlimeGreenSpawn: eventInfo.unlockedSlimeGreenSpawn,
    unlockedSlimeOldSpawn: eventInfo.unlockedSlimeOldSpawn,
    unlockedSlimePurpleSpawn: eventInfo.unlockedSlimePurpleSpawn,
    unlockedSlimeRainbowSpawn: eventInfo.unlockedSlimeRainbowSpawn,
    unlockedSlimeRedSpawn: eventInfo.unlockedSlimeRedSpawn,
    unlockedSlimeYellowSpawn: eventInfo.unlockedSlimeYellowSpawn,
    unlockedSlimeCopperSpawn: eventInfo.unlockedSlimeCopperSpawn,
    fastForwardTimeToDusk: eventInfo.fastForwardTimeToDusk,
    noTrapsWorld: eventInfo.noTrapsWorld,
    zenithWorld: eventInfo.zenithWorld,
    unlockedTruffleSpawn: eventInfo.unlockedTruffleSpawn,
    vampireSeed: false,
    infectedSeed: false,
    teamBasedSpawnsSeed: false,
    skyblockWorld: false,
    dualDungeonsSeed: false,
  }
}

let worldEventInfoToV1449 = (
  eventInfo: Packet.WorldInfo.eventInfo,
): PacketV1449.WorldInfo.eventInfo => {
  {
    shadowOrbSmashed: eventInfo.shadowOrbSmashed,
    killedBoss1: eventInfo.killedBoss1,
    killedBoss2: eventInfo.killedBoss2,
    killedBoss3: eventInfo.killedBoss3,
    hardMode: eventInfo.hardMode,
    killedClown: eventInfo.killedClown,
    serverSidedCharacters: eventInfo.serverSidedCharacters,
    killedPlantBoss: eventInfo.killedPlantBoss,
    killedMechBoss: eventInfo.killedMechBoss,
    killedMechBoss2: eventInfo.killedMechBoss2,
    killedMechBoss3: eventInfo.killedMechBoss3,
    killedAnyMechBoss: eventInfo.killedAnyMechBoss,
    cloudBg: eventInfo.cloudBg,
    crimson: eventInfo.crimson,
    pumpkinMoon: eventInfo.pumpkinMoon,
    snowMoon: eventInfo.snowMoon,
    expertMode: eventInfo.expertMode,
    fastForwardTime: eventInfo.fastForwardTime,
    slimeRain: eventInfo.slimeRain,
    killedKingSlime: eventInfo.killedKingSlime,
    killedQueenBee: eventInfo.killedQueenBee,
    killedFishron: eventInfo.killedFishron,
    killedMartians: eventInfo.killedMartians,
    killedAncientCultist: eventInfo.killedAncientCultist,
    killedMoonLord: eventInfo.killedMoonLord,
    killedPumpking: eventInfo.killedPumpking,
    killedMourningWood: eventInfo.killedMourningWood,
    killedIceQueen: eventInfo.killedIceQueen,
    killedSantank: eventInfo.killedSantank,
    killedEverscream: eventInfo.killedEverscream,
    killedGolem: eventInfo.killedGolem,
    birthdayParty: eventInfo.birthdayParty,
    killedPirates: eventInfo.killedPirates,
    killedFrostLegion: eventInfo.killedFrostLegion,
    killedGoblins: eventInfo.killedGoblins,
    sandstorm: eventInfo.sandstorm,
    dungeonDefendersEvent: eventInfo.dungeonDefendersEvent,
    killedDungeonDefendersTier1: eventInfo.killedDungeonDefendersTier1,
    killedDungeonDefendersTier2: eventInfo.killedDungeonDefendersTier2,
    killedDungeonDefendersTier3: eventInfo.killedDungeonDefendersTier3,
    combatBookUsed: eventInfo.combatBookUsed,
    manualLanterns: eventInfo.manualLanterns,
    killedSolarTower: eventInfo.killedSolarTower,
    killedVortexTower: eventInfo.killedVortexTower,
    killedNebulaTower: eventInfo.killedNebulaTower,
    killedStardustTower: eventInfo.killedStardustTower,
    forceHalloween: eventInfo.forceHalloween,
    forceChristmas: eventInfo.forceChristmas,
    boughtCat: eventInfo.boughtCat,
    boughtDog: eventInfo.boughtDog,
    boughtBunny: eventInfo.boughtBunny,
    freeCake: eventInfo.freeCake,
    drunkWorld: eventInfo.drunkWorld,
    killedEmpressOfLight: eventInfo.killedEmpressOfLight,
    killedQueenSlime: eventInfo.killedQueenSlime,
    getGoodWorld: eventInfo.getGoodWorld,
    tenthAnniversaryWorld: eventInfo.tenthAnniversaryWorld,
    dontStarveWorld: eventInfo.dontStarveWorld,
    downedDeerClops: eventInfo.downedDeerClops,
    notTheBeesWorld: eventInfo.notTheBeesWorld,
    remixWorld: eventInfo.remixWorld,
    unlockedSlimeBlueSpawn: eventInfo.unlockedSlimeBlueSpawn,
    combatBookVolumeTwoWasUsed: eventInfo.combatBookVolumeTwoWasUsed,
    peddlersSatchelWasUsed: eventInfo.peddlersSatchelWasUsed,
    unlockedSlimeGreenSpawn: eventInfo.unlockedSlimeGreenSpawn,
    unlockedSlimeOldSpawn: eventInfo.unlockedSlimeOldSpawn,
    unlockedSlimePurpleSpawn: eventInfo.unlockedSlimePurpleSpawn,
    unlockedSlimeRainbowSpawn: eventInfo.unlockedSlimeRainbowSpawn,
    unlockedSlimeRedSpawn: eventInfo.unlockedSlimeRedSpawn,
    unlockedSlimeYellowSpawn: eventInfo.unlockedSlimeYellowSpawn,
    unlockedSlimeCopperSpawn: eventInfo.unlockedSlimeCopperSpawn,
    fastForwardTimeToDusk: eventInfo.fastForwardTimeToDusk,
    noTrapsWorld: eventInfo.noTrapsWorld,
    zenithWorld: eventInfo.zenithWorld,
    unlockedTruffleSpawn: eventInfo.unlockedTruffleSpawn,
  }
}

let worldInfoFromV1449 = (worldInfo: PacketV1449.WorldInfo.t): Packet.WorldInfo.t => {
  {
    time: worldInfo.time,
    dayAndMoonInfo: worldInfo.dayAndMoonInfo,
    moonPhase: worldInfo.moonPhase,
    maxTilesX: worldInfo.maxTilesX,
    maxTilesY: worldInfo.maxTilesY,
    spawnX: worldInfo.spawnX,
    spawnY: worldInfo.spawnY,
    worldSurface: worldInfo.worldSurface,
    rockLayer: worldInfo.rockLayer,
    worldId: worldInfo.worldId,
    worldName: worldInfo.worldName,
    gameMode: worldInfo.gameMode,
    worldUniqueId: worldInfo.worldUniqueId,
    worldGeneratorVersion: worldInfo.worldGeneratorVersion,
    moonType: worldInfo.moonType,
    treeBackground: worldInfo.treeBackground,
    treeBackground2: worldInfo.treeBackground2,
    treeBackground3: worldInfo.treeBackground3,
    treeBackground4: worldInfo.treeBackground4,
    corruptionBackground: worldInfo.corruptionBackground,
    jungleBackground: worldInfo.jungleBackground,
    snowBackground: worldInfo.snowBackground,
    hallowBackground: worldInfo.hallowBackground,
    crimsonBackground: worldInfo.crimsonBackground,
    desertBackground: worldInfo.desertBackground,
    oceanBackground: worldInfo.oceanBackground,
    mushroomBackground: worldInfo.mushroomBackground,
    underworldBackground: worldInfo.underworldBackground,
    iceBackStyle: worldInfo.iceBackStyle,
    jungleBackStyle: worldInfo.jungleBackStyle,
    hellBackStyle: worldInfo.hellBackStyle,
    windSpeedSet: worldInfo.windSpeedSet,
    cloudNumber: worldInfo.cloudNumber,
    tree1: worldInfo.tree1,
    tree2: worldInfo.tree2,
    tree3: worldInfo.tree3,
    treeStyle1: worldInfo.treeStyle1,
    treeStyle2: worldInfo.treeStyle2,
    treeStyle3: worldInfo.treeStyle3,
    treeStyle4: worldInfo.treeStyle4,
    caveBack1: worldInfo.caveBack1,
    caveBack2: worldInfo.caveBack2,
    caveBack3: worldInfo.caveBack3,
    caveBackStyle1: worldInfo.caveBackStyle1,
    caveBackStyle2: worldInfo.caveBackStyle2,
    caveBackStyle3: worldInfo.caveBackStyle3,
    caveBackStyle4: worldInfo.caveBackStyle4,
    forest1TreeTopStyle: worldInfo.forest1TreeTopStyle,
    forest2TreeTopStyle: worldInfo.forest2TreeTopStyle,
    forest3TreeTopStyle: worldInfo.forest3TreeTopStyle,
    forest4TreeTopStyle: worldInfo.forest4TreeTopStyle,
    corruptionTreeTopStyle: worldInfo.corruptionTreeTopStyle,
    jungleTreeTopStyle: worldInfo.jungleTreeTopStyle,
    snowTreeTopStyle: worldInfo.snowTreeTopStyle,
    hallowTreeTopStyle: worldInfo.hallowTreeTopStyle,
    crimsonTreeTopStyle: worldInfo.crimsonTreeTopStyle,
    desertTreeTopStyle: worldInfo.desertTreeTopStyle,
    oceanTreeTopStyle: worldInfo.oceanTreeTopStyle,
    glowingMushroomTreeTopStyle: worldInfo.glowingMushroomTreeTopStyle,
    underworldTreeTopStyle: worldInfo.underworldTreeTopStyle,
    rain: worldInfo.rain,
    eventInfo: worldEventInfoFromV1449(worldInfo.eventInfo),
    sundialCooldown: worldInfo.sundialCooldown,
    moondialCooldown: worldInfo.moondialCooldown,
    copperOreTier: worldInfo.copperOreTier,
    ironOreTier: worldInfo.ironOreTier,
    silverOreTier: worldInfo.silverOreTier,
    goldOreTier: worldInfo.goldOreTier,
    cobaltOreTier: worldInfo.cobaltOreTier,
    mythrilOreTier: worldInfo.mythrilOreTier,
    adamantiteOreTier: worldInfo.adamantiteOreTier,
    invasionType: worldInfo.invasionType,
    lobbyId: worldInfo.lobbyId,
    sandstormSeverity: worldInfo.sandstormSeverity,
    extraSpawnPoints: [],
  }
}

let worldInfoToV1449 = (worldInfo: Packet.WorldInfo.t): PacketV1449.WorldInfo.t => {
  {
    time: worldInfo.time,
    dayAndMoonInfo: worldInfo.dayAndMoonInfo,
    moonPhase: worldInfo.moonPhase,
    maxTilesX: worldInfo.maxTilesX,
    maxTilesY: worldInfo.maxTilesY,
    spawnX: worldInfo.spawnX,
    spawnY: worldInfo.spawnY,
    worldSurface: worldInfo.worldSurface,
    rockLayer: worldInfo.rockLayer,
    worldId: worldInfo.worldId,
    worldName: worldInfo.worldName,
    gameMode: worldInfo.gameMode,
    worldUniqueId: worldInfo.worldUniqueId,
    worldGeneratorVersion: worldInfo.worldGeneratorVersion,
    moonType: worldInfo.moonType,
    treeBackground: worldInfo.treeBackground,
    treeBackground2: worldInfo.treeBackground2,
    treeBackground3: worldInfo.treeBackground3,
    treeBackground4: worldInfo.treeBackground4,
    corruptionBackground: worldInfo.corruptionBackground,
    jungleBackground: worldInfo.jungleBackground,
    snowBackground: worldInfo.snowBackground,
    hallowBackground: worldInfo.hallowBackground,
    crimsonBackground: worldInfo.crimsonBackground,
    desertBackground: worldInfo.desertBackground,
    oceanBackground: worldInfo.oceanBackground,
    mushroomBackground: worldInfo.mushroomBackground,
    underworldBackground: worldInfo.underworldBackground,
    iceBackStyle: worldInfo.iceBackStyle,
    jungleBackStyle: worldInfo.jungleBackStyle,
    hellBackStyle: worldInfo.hellBackStyle,
    windSpeedSet: worldInfo.windSpeedSet,
    cloudNumber: worldInfo.cloudNumber,
    tree1: worldInfo.tree1,
    tree2: worldInfo.tree2,
    tree3: worldInfo.tree3,
    treeStyle1: worldInfo.treeStyle1,
    treeStyle2: worldInfo.treeStyle2,
    treeStyle3: worldInfo.treeStyle3,
    treeStyle4: worldInfo.treeStyle4,
    caveBack1: worldInfo.caveBack1,
    caveBack2: worldInfo.caveBack2,
    caveBack3: worldInfo.caveBack3,
    caveBackStyle1: worldInfo.caveBackStyle1,
    caveBackStyle2: worldInfo.caveBackStyle2,
    caveBackStyle3: worldInfo.caveBackStyle3,
    caveBackStyle4: worldInfo.caveBackStyle4,
    forest1TreeTopStyle: worldInfo.forest1TreeTopStyle,
    forest2TreeTopStyle: worldInfo.forest2TreeTopStyle,
    forest3TreeTopStyle: worldInfo.forest3TreeTopStyle,
    forest4TreeTopStyle: worldInfo.forest4TreeTopStyle,
    corruptionTreeTopStyle: worldInfo.corruptionTreeTopStyle,
    jungleTreeTopStyle: worldInfo.jungleTreeTopStyle,
    snowTreeTopStyle: worldInfo.snowTreeTopStyle,
    hallowTreeTopStyle: worldInfo.hallowTreeTopStyle,
    crimsonTreeTopStyle: worldInfo.crimsonTreeTopStyle,
    desertTreeTopStyle: worldInfo.desertTreeTopStyle,
    oceanTreeTopStyle: worldInfo.oceanTreeTopStyle,
    glowingMushroomTreeTopStyle: worldInfo.glowingMushroomTreeTopStyle,
    underworldTreeTopStyle: worldInfo.underworldTreeTopStyle,
    rain: worldInfo.rain,
    eventInfo: worldEventInfoToV1449(worldInfo.eventInfo),
    sundialCooldown: worldInfo.sundialCooldown,
    moondialCooldown: worldInfo.moondialCooldown,
    copperOreTier: worldInfo.copperOreTier,
    ironOreTier: worldInfo.ironOreTier,
    silverOreTier: worldInfo.silverOreTier,
    goldOreTier: worldInfo.goldOreTier,
    cobaltOreTier: worldInfo.cobaltOreTier,
    mythrilOreTier: worldInfo.mythrilOreTier,
    adamantiteOreTier: worldInfo.adamantiteOreTier,
    invasionType: worldInfo.invasionType,
    lobbyId: worldInfo.lobbyId,
    sandstormSeverity: worldInfo.sandstormSeverity,
  }
}

let playerSpawnContextFromV1449 = (
  context: PacketV1449.PlayerSpawn.context,
): Packet.PlayerSpawn.context =>
  switch context {
  | PacketV1449.PlayerSpawn.ReviveFromDeath => Packet.PlayerSpawn.ReviveFromDeath
  | PacketV1449.PlayerSpawn.SpawningIntoWorld => Packet.PlayerSpawn.SpawningIntoWorld
  | PacketV1449.PlayerSpawn.RecallFromItem => Packet.PlayerSpawn.RecallFromItem
  }

let playerSpawnContextToV1449 = (
  context: Packet.PlayerSpawn.context,
): PacketV1449.PlayerSpawn.context =>
  switch context {
  | Packet.PlayerSpawn.ReviveFromDeath => PacketV1449.PlayerSpawn.ReviveFromDeath
  | Packet.PlayerSpawn.SpawningIntoWorld => PacketV1449.PlayerSpawn.SpawningIntoWorld
  | Packet.PlayerSpawn.RecallFromItem => PacketV1449.PlayerSpawn.RecallFromItem
  | Packet.PlayerSpawn.TeamSwap => PacketV1449.PlayerSpawn.SpawningIntoWorld
  | Unknown(_n) => PacketV1449.PlayerSpawn.SpawningIntoWorld
  }

let playerUpdateControlFromV1449 = (
  control: PacketV1449.PlayerUpdate.control,
): Packet.PlayerUpdate.control => {
  {
    isHoldingUp: control.isHoldingUp,
    isHoldingDown: control.isHoldingDown,
    isHoldingLeft: control.isHoldingLeft,
    isHoldingRight: control.isHoldingRight,
    isHoldingJump: control.isHoldingJump,
    isHoldingItemUse: control.isHoldingItemUse,
  }
}

let playerUpdateControlToV1449 = (
  control: Packet.PlayerUpdate.control,
): PacketV1449.PlayerUpdate.control => {
  {
    isHoldingUp: control.isHoldingUp,
    isHoldingDown: control.isHoldingDown,
    isHoldingLeft: control.isHoldingLeft,
    isHoldingRight: control.isHoldingRight,
    isHoldingJump: control.isHoldingJump,
    isHoldingItemUse: control.isHoldingItemUse,
  }
}

let playerUpdateDirectionFromV1449 = (
  direction: PacketV1449.PlayerUpdate.direction,
): Packet.PlayerUpdate.direction =>
  switch direction {
  | PacketV1449.PlayerUpdate.Left => Packet.PlayerUpdate.Left
  | PacketV1449.PlayerUpdate.Right => Packet.PlayerUpdate.Right
  }

let playerUpdateDirectionToV1449 = (
  direction: Packet.PlayerUpdate.direction,
): PacketV1449.PlayerUpdate.direction =>
  switch direction {
  | Packet.PlayerUpdate.Left => PacketV1449.PlayerUpdate.Left
  | Packet.PlayerUpdate.Right => PacketV1449.PlayerUpdate.Right
  }

let playerUpdatePulleyDirectionFromV1449 = (
  pulleyDirection: option<PacketV1449.PlayerUpdate.pulleyDirection>,
): option<Packet.PlayerUpdate.pulleyDirection> =>
  switch pulleyDirection {
  | None => None
  | Some(PacketV1449.PlayerUpdate.One) => Some(Packet.PlayerUpdate.One)
  | Some(PacketV1449.PlayerUpdate.Two) => Some(Packet.PlayerUpdate.Two)
  }

let playerUpdatePulleyDirectionToV1449 = (
  pulleyDirection: option<Packet.PlayerUpdate.pulleyDirection>,
): option<PacketV1449.PlayerUpdate.pulleyDirection> =>
  switch pulleyDirection {
  | None => None
  | Some(Packet.PlayerUpdate.One) => Some(PacketV1449.PlayerUpdate.One)
  | Some(Packet.PlayerUpdate.Two) => Some(PacketV1449.PlayerUpdate.Two)
  }

let playerUpdateGravityDirectionFromV1449 = (
  gravityDirection: PacketV1449.PlayerUpdate.gravityDirection,
): Packet.PlayerUpdate.gravityDirection =>
  switch gravityDirection {
  | PacketV1449.PlayerUpdate.Normal => Packet.PlayerUpdate.Normal
  | PacketV1449.PlayerUpdate.Inverted => Packet.PlayerUpdate.Inverted
  }

let playerUpdateGravityDirectionToV1449 = (
  gravityDirection: Packet.PlayerUpdate.gravityDirection,
): PacketV1449.PlayerUpdate.gravityDirection =>
  switch gravityDirection {
  | Packet.PlayerUpdate.Normal => PacketV1449.PlayerUpdate.Normal
  | Packet.PlayerUpdate.Inverted => PacketV1449.PlayerUpdate.Inverted
  }

let playerUpdatePotionOfReturnFromV1449 = (
  potionOfReturn: option<PacketV1449.PlayerUpdate.potionOfReturn>,
): option<Packet.PlayerUpdate.potionOfReturn> =>
  switch potionOfReturn {
  | None => None
  | Some(potion) =>
    Some({
      originalUsePosition: potion.originalUsePosition,
      homePosition: potion.homePosition,
    })
  }

let playerUpdatePotionOfReturnToV1449 = (
  potionOfReturn: option<Packet.PlayerUpdate.potionOfReturn>,
): option<PacketV1449.PlayerUpdate.potionOfReturn> =>
  switch potionOfReturn {
  | None => None
  | Some(potion) =>
    Some({
      originalUsePosition: potion.originalUsePosition,
      homePosition: potion.homePosition,
    })
  }

let npcUpdateLifeFromV1449 = (life: PacketV1449.NpcUpdate.life): Packet.NpcUpdate.life =>
  switch life {
  | PacketV1449.NpcUpdate.Max => Packet.NpcUpdate.Max
  | PacketV1449.NpcUpdate.Byte(value) => Packet.NpcUpdate.Byte(value)
  | PacketV1449.NpcUpdate.Int16(value) => Packet.NpcUpdate.Int16(value)
  | PacketV1449.NpcUpdate.Int32(value) => Packet.NpcUpdate.Int32(value)
  }

let npcUpdateLifeToV1449 = (life: Packet.NpcUpdate.life): PacketV1449.NpcUpdate.life =>
  switch life {
  | Packet.NpcUpdate.Max => PacketV1449.NpcUpdate.Max
  | Packet.NpcUpdate.Byte(value) => PacketV1449.NpcUpdate.Byte(value)
  | Packet.NpcUpdate.Int16(value) => PacketV1449.NpcUpdate.Int16(value)
  | Packet.NpcUpdate.Int32(value) => PacketV1449.NpcUpdate.Int32(value)
  }

let shimmerCoinLuckFromV1449 = (
  coinLuck: PacketV1449.ShimmerEffectOrCoinLuck.coinLuck,
): Packet.ShimmerEffectOrCoinLuck.coinLuck => {
  {position: coinLuck.position, amount: coinLuck.amount}
}

let shimmerCoinLuckToV1449 = (
  coinLuck: Packet.ShimmerEffectOrCoinLuck.coinLuck,
): PacketV1449.ShimmerEffectOrCoinLuck.coinLuck => {
  {position: coinLuck.position, amount: coinLuck.amount}
}

let netModuleLoadLiquidChangeFromV1449 = (
  change: PacketV1449.NetModuleLoad.liquidChange,
): Packet.NetModuleLoad.liquidChange => {
  {
    x: change.x,
    y: change.y,
    amount: change.amount,
    liquidType: change.liquidType,
  }
}

let netModuleLoadLiquidFromV1449 = (
  liquid: PacketV1449.NetModuleLoad.liquid,
): Packet.NetModuleLoad.liquid => {
  {changes: liquid.changes->Array.map(netModuleLoadLiquidChangeFromV1449)}
}

let netModuleLoadPositionFromV1449 = (
  position: PacketV1449.NetModuleLoad.position,
): Packet.NetModuleLoad.position => {
  {x: position.x, y: position.y}
}

let netModuleLoadAmbienceFromV1449 = (
  ambience: PacketV1449.NetModuleLoad.ambience,
): Packet.NetModuleLoad.ambience => {
  {playerId: ambience.playerId, seed: ambience.seed, skyEntityType: ambience.skyEntityType}
}

let netModuleLoadBestiaryUnlockTypeFromV1449 = (
  unlockType: PacketV1449.NetModuleLoad.bestiaryUnlockType,
): Packet.NetModuleLoad.bestiaryUnlockType => {
  switch unlockType {
  | Kill(count) => Packet.NetModuleLoad.Kill(count)
  | Sight => Packet.NetModuleLoad.Sight
  | Chat => Packet.NetModuleLoad.Chat
  }
}

let netModuleLoadBestiaryFromV1449 = (
  bestiary: PacketV1449.NetModuleLoad.bestiary,
): Packet.NetModuleLoad.bestiary => {
  {
    unlockType: netModuleLoadBestiaryUnlockTypeFromV1449(bestiary.unlockType),
    npcId: bestiary.npcId,
  }
}

let netModuleLoadPylonActionFromV1449 = (
  action: PacketV1449.NetModuleLoad.pylonAction,
): Packet.NetModuleLoad.pylonAction => {
  switch action {
  | Added => Packet.NetModuleLoad.Added
  | Removed => Packet.NetModuleLoad.Removed
  | RequestTeleport => Packet.NetModuleLoad.RequestTeleport
  }
}

let netModuleLoadTeleportPylonFromV1449 = (
  teleportPylon: PacketV1449.NetModuleLoad.teleportPylon,
): Packet.NetModuleLoad.teleportPylon => {
  {
    pylonAction: netModuleLoadPylonActionFromV1449(teleportPylon.pylonAction),
    x: teleportPylon.x,
    y: teleportPylon.y,
    pylonType: teleportPylon.pylonType,
  }
}

let netModuleLoadParticleFromV1449 = (
  particle: PacketV1449.NetModuleLoad.particle,
): Packet.NetModuleLoad.particle => {
  {
    particleType: particle.particleType,
    x: particle.x,
    y: particle.y,
    vx: particle.vx,
    vy: particle.vy,
    shaderIndex: particle.shaderIndex,
    invokedByPlayer: particle.invokedByPlayer,
  }
}

let netModuleLoadPowerLevelFromV1449 = (
  powerLevel: PacketV1449.NetModuleLoad.powerLevel,
): Packet.NetModuleLoad.powerLevel => {
  switch powerLevel {
  | LockedForEveryone => Packet.NetModuleLoad.LockedForEveryone
  | CanBeChangedByHostAlone => Packet.NetModuleLoad.CanBeChangedByHostAlone
  | CanBeChangedByEveryone => Packet.NetModuleLoad.CanBeChangedByEveryone
  }
}

let netModuleLoadCreativePowerPermissionFromV1449 = (
  permission: PacketV1449.NetModuleLoad.creativePowerPermission,
): Packet.NetModuleLoad.creativePowerPermission => {
  {
    powerType: permission.powerType,
    powerLevel: netModuleLoadPowerLevelFromV1449(permission.powerLevel),
  }
}

let netModuleLoadLiquidChangeToV1449 = (
  change: Packet.NetModuleLoad.liquidChange,
): PacketV1449.NetModuleLoad.liquidChange => {
  {
    x: change.x,
    y: change.y,
    amount: change.amount,
    liquidType: change.liquidType,
  }
}

let netModuleLoadLiquidToV1449 = (
  liquid: Packet.NetModuleLoad.liquid,
): PacketV1449.NetModuleLoad.liquid => {
  {changes: liquid.changes->Array.map(netModuleLoadLiquidChangeToV1449)}
}

let netModuleLoadPositionToV1449 = (
  position: Packet.NetModuleLoad.position,
): PacketV1449.NetModuleLoad.position => {
  {x: position.x, y: position.y}
}

let netModuleLoadAmbienceToV1449 = (
  ambience: Packet.NetModuleLoad.ambience,
): PacketV1449.NetModuleLoad.ambience => {
  {playerId: ambience.playerId, seed: ambience.seed, skyEntityType: ambience.skyEntityType}
}

let netModuleLoadBestiaryUnlockTypeToV1449 = (
  unlockType: Packet.NetModuleLoad.bestiaryUnlockType,
): PacketV1449.NetModuleLoad.bestiaryUnlockType => {
  switch unlockType {
  | Kill(count) => PacketV1449.NetModuleLoad.Kill(count)
  | Sight => PacketV1449.NetModuleLoad.Sight
  | Chat => PacketV1449.NetModuleLoad.Chat
  }
}

let netModuleLoadBestiaryToV1449 = (
  bestiary: Packet.NetModuleLoad.bestiary,
): PacketV1449.NetModuleLoad.bestiary => {
  {
    unlockType: netModuleLoadBestiaryUnlockTypeToV1449(bestiary.unlockType),
    npcId: bestiary.npcId,
  }
}

let netModuleLoadPylonActionToV1449 = (
  action: Packet.NetModuleLoad.pylonAction,
): PacketV1449.NetModuleLoad.pylonAction => {
  switch action {
  | Added => PacketV1449.NetModuleLoad.Added
  | Removed => PacketV1449.NetModuleLoad.Removed
  | RequestTeleport => PacketV1449.NetModuleLoad.RequestTeleport
  }
}

let netModuleLoadTeleportPylonToV1449 = (
  teleportPylon: Packet.NetModuleLoad.teleportPylon,
): PacketV1449.NetModuleLoad.teleportPylon => {
  {
    pylonAction: netModuleLoadPylonActionToV1449(teleportPylon.pylonAction),
    x: teleportPylon.x,
    y: teleportPylon.y,
    pylonType: teleportPylon.pylonType,
  }
}

let netModuleLoadParticleToV1449 = (
  particle: Packet.NetModuleLoad.particle,
): PacketV1449.NetModuleLoad.particle => {
  {
    particleType: particle.particleType,
    x: particle.x,
    y: particle.y,
    vx: particle.vx,
    vy: particle.vy,
    shaderIndex: particle.shaderIndex,
    invokedByPlayer: particle.invokedByPlayer,
  }
}

let netModuleLoadPowerLevelToV1449 = (
  powerLevel: Packet.NetModuleLoad.powerLevel,
): PacketV1449.NetModuleLoad.powerLevel => {
  switch powerLevel {
  | LockedForEveryone => PacketV1449.NetModuleLoad.LockedForEveryone
  | CanBeChangedByHostAlone => PacketV1449.NetModuleLoad.CanBeChangedByHostAlone
  | CanBeChangedByEveryone => PacketV1449.NetModuleLoad.CanBeChangedByEveryone
  }
}

let netModuleLoadCreativePowerPermissionToV1449 = (
  permission: Packet.NetModuleLoad.creativePowerPermission,
): PacketV1449.NetModuleLoad.creativePowerPermission => {
  {
    powerType: permission.powerType,
    powerLevel: netModuleLoadPowerLevelToV1449(permission.powerLevel),
  }
}

let netModuleLoadFromV1449 = (
  netModuleLoad: PacketV1449.NetModuleLoad.t,
): Packet.NetModuleLoad.t => {
  switch netModuleLoad {
  | Liquid(liquid) => Packet.NetModuleLoad.Liquid(netModuleLoadLiquidFromV1449(liquid))
  | ClientText(commandId, message) => Packet.NetModuleLoad.ClientText(commandId, message)
  | ServerText(playerId, text, color) => Packet.NetModuleLoad.ServerText(playerId, text, color)
  | Ping(position) => Packet.NetModuleLoad.Ping(netModuleLoadPositionFromV1449(position))
  | Ambience(ambience) => Packet.NetModuleLoad.Ambience(netModuleLoadAmbienceFromV1449(ambience))
  | Bestiary(bestiary) => Packet.NetModuleLoad.Bestiary(netModuleLoadBestiaryFromV1449(bestiary))
  | CreativeUnlocks(creativeUnlock) =>
    Packet.NetModuleLoad.CreativeUnlocksPlayerReport({
      userId: 0,
      itemId: creativeUnlock.itemId,
      researchedCount: creativeUnlock.researchedCount,
    })
  | CreativePower(creativePower) => Packet.NetModuleLoad.CreativePower(creativePower)
  | CreativeUnlocksPlayerReport(unlockReport) =>
    Packet.NetModuleLoad.CreativeUnlocksPlayerReport({
      userId: 0,
      itemId: unlockReport.itemId,
      researchedCount: unlockReport.researchedCount,
    })
  | TeleportPylon(teleportPylon) =>
    Packet.NetModuleLoad.TeleportPylon(netModuleLoadTeleportPylonFromV1449(teleportPylon))
  | Particles(particle) => Packet.NetModuleLoad.Particles(netModuleLoadParticleFromV1449(particle))
  | CreativePowerPermissions(creativePowerPermission) =>
    Packet.NetModuleLoad.CreativePowerPermissions(
      netModuleLoadCreativePowerPermissionFromV1449(creativePowerPermission),
    )
  }
}

let netModuleLoadToV1449 = (netModuleLoad: Packet.NetModuleLoad.t): option<
  PacketV1449.NetModuleLoad.t,
> => {
  switch netModuleLoad {
  | Liquid(liquid) => Some(PacketV1449.NetModuleLoad.Liquid(netModuleLoadLiquidToV1449(liquid)))
  | ClientText(commandId, message) => Some(PacketV1449.NetModuleLoad.ClientText(commandId, message))
  | ServerText(playerId, text, color) =>
    Some(PacketV1449.NetModuleLoad.ServerText(playerId, text, color))
  | Ping(position) => Some(PacketV1449.NetModuleLoad.Ping(netModuleLoadPositionToV1449(position)))
  | Ambience(ambience) =>
    Some(PacketV1449.NetModuleLoad.Ambience(netModuleLoadAmbienceToV1449(ambience)))
  | Bestiary(bestiary) =>
    Some(PacketV1449.NetModuleLoad.Bestiary(netModuleLoadBestiaryToV1449(bestiary)))
  | CreativePower(creativePower) => Some(PacketV1449.NetModuleLoad.CreativePower(creativePower))
  | CreativeUnlocksPlayerReport(unlockReport) =>
    Some(
      PacketV1449.NetModuleLoad.CreativeUnlocksPlayerReport({
        itemId: unlockReport.itemId,
        researchedCount: unlockReport.researchedCount,
      }),
    )
  | TeleportPylon(teleportPylon) =>
    Some(PacketV1449.NetModuleLoad.TeleportPylon(netModuleLoadTeleportPylonToV1449(teleportPylon)))
  | Particles(particle) =>
    Some(PacketV1449.NetModuleLoad.Particles(netModuleLoadParticleToV1449(particle)))
  | CreativePowerPermissions(creativePowerPermission) =>
    Some(
      PacketV1449.NetModuleLoad.CreativePowerPermissions(
        netModuleLoadCreativePowerPermissionToV1449(creativePowerPermission),
      ),
    )
  | Banners(_)
  | CraftingRequests(_)
  | TagEffectState(_)
  | LeashedEntity(_)
  | UnbreakableWallScan(_) =>
    None
  }
}

let fromV1449 = (packet: PacketV1449.t): Packet.t => {
  switch packet {
  | PlayerInfo(playerInfo) =>
    Packet.PlayerInfo({
      playerId: playerInfo.playerId,
      skinVariant: playerInfo.skinVariant,
      hair: playerInfo.hair,
      name: playerInfo.name,
      hairDye: playerInfo.hairDye,
      hideVisuals: playerInfo.hideVisuals,
      hideVisuals2: playerInfo.hideVisuals2,
      hideMisc: playerInfo.hideMisc,
      hairColor: playerInfo.hairColor,
      skinColor: playerInfo.skinColor,
      eyeColor: playerInfo.eyeColor,
      shirtColor: playerInfo.shirtColor,
      underShirtColor: playerInfo.underShirtColor,
      pantsColor: playerInfo.pantsColor,
      shoeColor: playerInfo.shoeColor,
      difficulty: playerInfo.difficulty,
      mode: playerInfo.mode,
      extraAccessory: playerInfo.extraAccessory,
      usingBiomeTorches: playerInfo.usingBiomeTorches,
      unlockedBiomeTorches: playerInfo.unlockedBiomeTorches,
      happyFunTorchTime: playerInfo.happyFunTorchTime,
      unlockedSuperCart: playerInfo.unlockedSuperCart,
      enabledSuperCart: playerInfo.enabledSuperCart,
      usedAegisCrystal: playerInfo.usedAegisCrystal,
      usedAegisFruit: playerInfo.usedAegisFruit,
      usedArcaneCrystal: playerInfo.usedArcaneCrystal,
      usedGalaxyPearl: playerInfo.usedGalaxyPearl,
      usedGummyWorm: playerInfo.usedGummyWorm,
      usedAmbrosia: playerInfo.usedAmbrosia,
      ateArtisanBread: playerInfo.ateArtisanBread,
      voiceVariant: 1,
      voicePitchOffset: 0.0,
    })
  | PlayerInventorySlot(playerInventorySlot) =>
    Packet.PlayerInventorySlot({
      playerId: playerInventorySlot.playerId,
      slot: playerInventorySlot.slot,
      stack: playerInventorySlot.stack,
      prefix: playerInventorySlot.prefix,
      itemType: playerInventorySlot.itemId,
      favorited: false,
      blocked: false,
    })
  | TileSectionSend(tileSectionSend) => Packet.TileSectionSend(tileSectionSend)
  | TileSquareSend(tileSquareSend) => Packet.TileSquareSend(tileSquareSend)
  | WorldInfo(worldInfo) => Packet.WorldInfo(worldInfoFromV1449(worldInfo))
  | InitialTileSectionsRequest(req) =>
    Packet.InitialTileSectionsRequest({x: req.x, y: req.y, team: 0})
  | PlayerSpawn(playerSpawn) =>
    Packet.PlayerSpawn({
      playerId: playerSpawn.playerId,
      x: playerSpawn.x,
      y: playerSpawn.y,
      timeRemaining: playerSpawn.timeRemaining,
      numberOfDeathsPve: playerSpawn.numberOfDeathsPve,
      numberOfDeathsPvp: playerSpawn.numberOfDeathsPvp,
      context: playerSpawnContextFromV1449(playerSpawn.context),
      team: 0,
    })
  | PlayerUpdate(playerUpdate) =>
    Packet.PlayerUpdate({
      playerId: playerUpdate.playerId,
      control: playerUpdateControlFromV1449(playerUpdate.control),
      direction: playerUpdateDirectionFromV1449(playerUpdate.direction),
      pulleyDirection: playerUpdatePulleyDirectionFromV1449(playerUpdate.pulleyDirection),
      vortexStealthActive: playerUpdate.vortexStealthActive,
      gravityDirection: playerUpdateGravityDirectionFromV1449(playerUpdate.gravityDirection),
      shieldRaised: playerUpdate.shouldGuard,
      ghost: playerUpdate.ghost,
      selectedItem: playerUpdate.selectedItem,
      position: playerUpdate.position,
      velocity: playerUpdate.velocity,
      mountType: None,
      potionOfReturn: playerUpdatePotionOfReturnFromV1449(playerUpdate.potionOfReturn),
      tryKeepingHoveringUp: playerUpdate.tryKeepingHoveringUp,
      isVoidVaultEnabled: playerUpdate.isVoidVaultEnabled,
      isSitting: playerUpdate.isSitting,
      hasFinishedAnyDd2Event: playerUpdate.hasFinishedAnyDd2Event,
      isPettingAnimal: playerUpdate.isPettingAnimal,
      isTheAnimalBeingPetSmall: playerUpdate.isTheAnimalBeingPetSmall,
      tryKeepingHoveringDown: playerUpdate.tryKeepingHoveringDown,
      isSleeping: playerUpdate.isSleeping,
      autoReuseAllWeapons: false,
      controlDownHold: false,
      isOperatingAnotherEntity: false,
      controlUseTile: false,
      netCameraTarget: None,
      lastItemUseAttemptSuccess: false,
    })
  | ItemOwner(itemOwner) =>
    Packet.ItemOwner({
      itemDropId: itemOwner.itemDropId,
      owner: itemOwner.owner,
      position: {x: 0.0, y: 0.0},
    })
  | NpcUpdate(npcUpdate) =>
    Packet.NpcUpdate({
      npcSlotId: npcUpdate.npcSlotId,
      npcTypeId: npcUpdate.npcTypeId,
      x: npcUpdate.x,
      y: npcUpdate.y,
      vx: npcUpdate.vx,
      vy: npcUpdate.vy,
      target: npcUpdate.target,
      directionX: npcUpdate.directionX,
      directionY: npcUpdate.directionY,
      ai: npcUpdate.ai,
      spriteDirection: npcUpdate.spriteDirection,
      life: npcUpdateLifeFromV1449(npcUpdate.life),
      releaseOwner: npcUpdate.releaseOwner,
      playerCountScale: npcUpdate.playerCountScale,
      difficulty: npcUpdate.strengthMultiplier,
      spawnedFromStatue: npcUpdate.spawnedFromStatue,
      spawnNeedsSyncing: false,
      shimmerTransparency: false,
    })
  | Zones(zones) =>
    Packet.Zones({
      playerId: zones.playerId,
      zone1: zones.zone1,
      zone2: zones.zone2,
      zone3: zones.zone3,
      zone4: zones.zone4,
      zone5: zones.zone5,
      townNPCs: 0,
    })
  | PlayerBuffsSet(playerBuffsSet) =>
    Packet.PlayerBuffsSet({
      playerId: playerBuffsSet.playerId,
      buffs: playerBuffsSet.buffs->Array.filter(buff => buff != 0),
    })
  | NpcBuffUpdate(npcBuffUpdate) => {
      let buffs: array<int> = []
      let buffTimes: array<int> = []
      for i in 0 to npcBuffUpdate.buffs->Array.length - 1 {
        let buff = npcBuffUpdate.buffs->Array.getUnsafe(i)
        let buffTime = npcBuffUpdate.buffTimes->Array.getUnsafe(i)
        if buff > 0 && buffTime > 0 {
          buffs->Array.push(buff)
          buffTimes->Array.push(buffTime)
        }
      }
      Packet.NpcBuffUpdate({npcId: npcBuffUpdate.npcId, buffs, buffTimes})
    }
  | Teleport(teleport) =>
    Packet.Teleport({
      teleportType: switch teleport.teleportType {
      | PacketV1449.Teleport.Player => Packet.Teleport.Player
      | PacketV1449.Teleport.Npc => Packet.Teleport.Npc
      | PacketV1449.Teleport.PlayerToPlayer => Packet.Teleport.PlayerToPlayer
      },
      getPositionFromTarget: teleport.getPositionFromTarget,
      targetId: teleport.targetId,
      x: teleport.x,
      y: teleport.y,
      style: teleport.style,
      extraInfo: teleport.extraInfo,
    })
  | TravellingMerchantInventory(inv) => Packet.TravellingMerchantInventory({items: inv.items})
  | TeleportationPotion(teleportationPotion) =>
    Packet.TeleportationPotion({
      teleportType: switch teleportationPotion.teleportType {
      | PacketV1449.TeleportationPotion.TeleportationPotion =>
        Packet.TeleportationPotion.TeleportationPotion
      | PacketV1449.TeleportationPotion.MagicConch => Packet.TeleportationPotion.MagicConch
      | PacketV1449.TeleportationPotion.DemonConch => Packet.TeleportationPotion.DemonConch
      | PacketV1449.TeleportationPotion.ShellphoneSpawn =>
        Packet.TeleportationPotion.ShellphoneSpawn
      },
    })
  | ItemForceIntoNearestChest(itemForce) =>
    Packet.ItemForceIntoNearestChest(
      Packet.ItemForceIntoNearestChest.ClientRequest({
        slotIds: [itemForce.slot],
        smartStack: false,
      }),
    )
  | TileEntityDisplayDollItemSync(tileEntityDisplayDollItemSync) =>
    Packet.TileEntityDisplayDollItemSync({
      playerId: tileEntityDisplayDollItemSync.playerId,
      tileEntityId: tileEntityDisplayDollItemSync.tileEntityId,
      itemIndex: tileEntityDisplayDollItemSync.itemIndex,
      command: Packet.TileEntityDisplayDollItemSync.Equip,
      data: Packet.TileEntityDisplayDollItemSync.Item({
        itemId: tileEntityDisplayDollItemSync.itemId,
        stack: tileEntityDisplayDollItemSync.stack,
        prefix: tileEntityDisplayDollItemSync.prefix,
      }),
    })
  | PlayerLuckFactorsUpdate(playerLuckFactorsUpdate) =>
    Packet.PlayerLuckFactorsUpdate({
      playerId: playerLuckFactorsUpdate.playerId,
      ladyBugLuckTimeLeft: playerLuckFactorsUpdate.ladyBugLuckTimeLeft,
      torchLuck: playerLuckFactorsUpdate.torchLuck,
      luckPotion: playerLuckFactorsUpdate.luckPotion,
      hasGardenGnomeNearby: playerLuckFactorsUpdate.hasGardenGnomeNearby,
      brokenMirrorBadLuck: false,
      equipmentBasedLuckBonus: playerLuckFactorsUpdate.equipmentBasedLuckBonus,
      coinLuck: playerLuckFactorsUpdate.coinLuck,
      kiteLuckLevel: 0,
    })
  | ShimmerEffectOrCoinLuck(shimmerEffectOrCoinLuck) =>
    switch shimmerEffectOrCoinLuck {
    | PacketV1449.ShimmerEffectOrCoinLuck.ShimmerEffect(x, y) =>
      Packet.ShimmerEffectOrCoinLuck(Packet.ShimmerEffectOrCoinLuck.ShimmerEffect(x, y))
    | PacketV1449.ShimmerEffectOrCoinLuck.CoinLuck(coinLuck) =>
      Packet.ShimmerEffectOrCoinLuck(
        Packet.ShimmerEffectOrCoinLuck.CoinLuck(shimmerCoinLuckFromV1449(coinLuck)),
      )
    | PacketV1449.ShimmerEffectOrCoinLuck.NewShimmerEffect(_) =>
      Packet.ShimmerEffectOrCoinLuck(Packet.ShimmerEffectOrCoinLuck.ShimmerEffect(0.0, 0.0))
    }
  | NetModuleLoad(netModuleLoad) => Packet.NetModuleLoad(netModuleLoadFromV1449(netModuleLoad))
  | packet => Obj.magic(packet)
  }
}
let v1449ToLatest = (packet: Packet.t): PacketV1449.t => {
  switch packet {
  | PlayerInfo(playerInfo) =>
    PacketV1449.PlayerInfo({
      playerId: playerInfo.playerId,
      skinVariant: playerInfo.skinVariant,
      hair: playerInfo.hair,
      name: playerInfo.name,
      hairDye: playerInfo.hairDye,
      hideVisuals: playerInfo.hideVisuals,
      hideVisuals2: playerInfo.hideVisuals2,
      hideMisc: playerInfo.hideMisc,
      hairColor: playerInfo.hairColor,
      skinColor: playerInfo.skinColor,
      eyeColor: playerInfo.eyeColor,
      shirtColor: playerInfo.shirtColor,
      underShirtColor: playerInfo.underShirtColor,
      pantsColor: playerInfo.pantsColor,
      shoeColor: playerInfo.shoeColor,
      difficulty: playerInfo.difficulty,
      mode: playerInfo.mode,
      extraAccessory: playerInfo.extraAccessory,
      usingBiomeTorches: playerInfo.usingBiomeTorches,
      unlockedBiomeTorches: playerInfo.unlockedBiomeTorches,
      happyFunTorchTime: playerInfo.happyFunTorchTime,
      unlockedSuperCart: playerInfo.unlockedSuperCart,
      enabledSuperCart: playerInfo.enabledSuperCart,
      usedAegisCrystal: playerInfo.usedAegisCrystal,
      usedAegisFruit: playerInfo.usedAegisFruit,
      usedArcaneCrystal: playerInfo.usedArcaneCrystal,
      usedGalaxyPearl: playerInfo.usedGalaxyPearl,
      usedGummyWorm: playerInfo.usedGummyWorm,
      usedAmbrosia: playerInfo.usedAmbrosia,
      ateArtisanBread: playerInfo.ateArtisanBread,
    })
  | PlayerInventorySlot(playerInventorySlot) =>
    PacketV1449.PlayerInventorySlot({
      playerId: playerInventorySlot.playerId,
      slot: playerInventorySlot.slot,
      stack: playerInventorySlot.stack,
      prefix: playerInventorySlot.prefix,
      itemId: playerInventorySlot.itemType,
    })
  | WorldInfo(worldInfo) => PacketV1449.WorldInfo(worldInfoToV1449(worldInfo))
  | InitialTileSectionsRequest(req) => PacketV1449.InitialTileSectionsRequest({x: req.x, y: req.y})
  | PlayerSpawn(playerSpawn) =>
    PacketV1449.PlayerSpawn({
      playerId: playerSpawn.playerId,
      x: playerSpawn.x,
      y: playerSpawn.y,
      timeRemaining: playerSpawn.timeRemaining,
      numberOfDeathsPve: playerSpawn.numberOfDeathsPve,
      numberOfDeathsPvp: playerSpawn.numberOfDeathsPvp,
      context: playerSpawnContextToV1449(playerSpawn.context),
    })
  | PlayerUpdate(playerUpdate) =>
    PacketV1449.PlayerUpdate({
      playerId: playerUpdate.playerId,
      control: playerUpdateControlToV1449(playerUpdate.control),
      direction: playerUpdateDirectionToV1449(playerUpdate.direction),
      pulleyDirection: playerUpdatePulleyDirectionToV1449(playerUpdate.pulleyDirection),
      vortexStealthActive: playerUpdate.vortexStealthActive,
      gravityDirection: playerUpdateGravityDirectionToV1449(playerUpdate.gravityDirection),
      shouldGuard: playerUpdate.shieldRaised,
      ghost: playerUpdate.ghost,
      selectedItem: playerUpdate.selectedItem,
      position: playerUpdate.position,
      velocity: playerUpdate.velocity,
      potionOfReturn: playerUpdatePotionOfReturnToV1449(playerUpdate.potionOfReturn),
      tryKeepingHoveringUp: playerUpdate.tryKeepingHoveringUp,
      isVoidVaultEnabled: playerUpdate.isVoidVaultEnabled,
      isSitting: playerUpdate.isSitting,
      hasFinishedAnyDd2Event: playerUpdate.hasFinishedAnyDd2Event,
      isPettingAnimal: playerUpdate.isPettingAnimal,
      isTheAnimalBeingPetSmall: playerUpdate.isTheAnimalBeingPetSmall,
      tryKeepingHoveringDown: playerUpdate.tryKeepingHoveringDown,
      isSleeping: playerUpdate.isSleeping,
    })
  | ItemOwner(itemOwner) =>
    PacketV1449.ItemOwner({
      itemDropId: itemOwner.itemDropId,
      owner: itemOwner.owner,
    })
  | NpcUpdate(npcUpdate) =>
    PacketV1449.NpcUpdate({
      npcSlotId: npcUpdate.npcSlotId,
      npcTypeId: npcUpdate.npcTypeId,
      x: npcUpdate.x,
      y: npcUpdate.y,
      vx: npcUpdate.vx,
      vy: npcUpdate.vy,
      target: npcUpdate.target,
      directionX: npcUpdate.directionX,
      directionY: npcUpdate.directionY,
      ai: npcUpdate.ai,
      spriteDirection: npcUpdate.spriteDirection,
      life: npcUpdateLifeToV1449(npcUpdate.life),
      releaseOwner: npcUpdate.releaseOwner,
      playerCountScale: npcUpdate.playerCountScale,
      strengthMultiplier: npcUpdate.difficulty,
      spawnedFromStatue: npcUpdate.spawnedFromStatue,
    })
  | Zones(zones) =>
    PacketV1449.Zones({
      playerId: zones.playerId,
      zone1: zones.zone1,
      zone2: zones.zone2,
      zone3: zones.zone3,
      zone4: zones.zone4,
      zone5: zones.zone5,
    })
  | PlayerBuffsSet(playerBuffsSet) => {
      let buffs = Array.make(~length=44, 0)
      let max = min(44, playerBuffsSet.buffs->Array.length)
      for i in 0 to max - 1 {
        buffs->Array.setUnsafe(i, playerBuffsSet.buffs->Array.getUnsafe(i))
      }
      PacketV1449.PlayerBuffsSet({playerId: playerBuffsSet.playerId, buffs})
    }
  | NpcBuffUpdate(npcBuffUpdate) => {
      let buffs = Array.make(~length=20, 0)
      let buffTimes = Array.make(~length=20, 0)
      let max = min(20, npcBuffUpdate.buffs->Array.length)
      for i in 0 to max - 1 {
        buffs->Array.setUnsafe(i, npcBuffUpdate.buffs->Array.getUnsafe(i))
        buffTimes->Array.setUnsafe(i, npcBuffUpdate.buffTimes->Array.getUnsafe(i))
      }
      PacketV1449.NpcBuffUpdate({npcId: npcBuffUpdate.npcId, buffs, buffTimes})
    }
  | Teleport(teleport) =>
    PacketV1449.Teleport({
      teleportType: switch teleport.teleportType {
      | Packet.Teleport.Player => PacketV1449.Teleport.Player
      | Packet.Teleport.Npc => PacketV1449.Teleport.Npc
      | Packet.Teleport.PlayerToPlayer => PacketV1449.Teleport.PlayerToPlayer
      | Packet.Teleport.TeleportAck => PacketV1449.Teleport.Player
      },
      getPositionFromTarget: teleport.getPositionFromTarget,
      targetId: teleport.targetId,
      x: teleport.x,
      y: teleport.y,
      style: teleport.style,
      extraInfo: teleport.extraInfo,
    })
  | TravellingMerchantInventory(inv) => {
      let items = Array.make(~length=40, 0)
      let max = min(40, inv.items->Array.length)
      for i in 0 to max - 1 {
        items->Array.setUnsafe(i, inv.items->Array.getUnsafe(i))
      }
      PacketV1449.TravellingMerchantInventory({items: items})
    }
  | TeleportationPotion(teleportationPotion) =>
    PacketV1449.TeleportationPotion({
      teleportType: switch teleportationPotion.teleportType {
      | Packet.TeleportationPotion.TeleportationPotion =>
        PacketV1449.TeleportationPotion.TeleportationPotion
      | Packet.TeleportationPotion.MagicConch => PacketV1449.TeleportationPotion.MagicConch
      | Packet.TeleportationPotion.DemonConch => PacketV1449.TeleportationPotion.DemonConch
      | Packet.TeleportationPotion.ShellphoneSpawn =>
        PacketV1449.TeleportationPotion.ShellphoneSpawn
      | Packet.TeleportationPotion.PlayerNoSpaceTeleport =>
        PacketV1449.TeleportationPotion.TeleportationPotion
      },
    })
  | ItemForceIntoNearestChest(itemForce) =>
    switch itemForce {
    | Packet.ItemForceIntoNearestChest.ClientRequest({slotIds}) =>
      PacketV1449.ItemForceIntoNearestChest({
        slot: slotIds->Array.get(0)->Option.getOr(0),
      })
    | Packet.ItemForceIntoNearestChest.ServerBlockedChests(_) =>
      PacketV1449.ItemForceIntoNearestChest({slot: 0})
    }
  | TileEntityDisplayDollItemSync(tileEntityDisplayDollItemSync) =>
    switch tileEntityDisplayDollItemSync.data {
    | Packet.TileEntityDisplayDollItemSync.Item(item) =>
      PacketV1449.TileEntityDisplayDollItemSync({
        playerId: tileEntityDisplayDollItemSync.playerId,
        tileEntityId: tileEntityDisplayDollItemSync.tileEntityId,
        itemIndex: tileEntityDisplayDollItemSync.itemIndex,
        itemId: item.itemId,
        stack: item.stack,
        prefix: item.prefix,
      })
    | Packet.TileEntityDisplayDollItemSync.PoseValue(_) =>
      PacketV1449.TileEntityDisplayDollItemSync({
        playerId: tileEntityDisplayDollItemSync.playerId,
        tileEntityId: tileEntityDisplayDollItemSync.tileEntityId,
        itemIndex: tileEntityDisplayDollItemSync.itemIndex,
        itemId: 0,
        stack: 0,
        prefix: 0,
      })
    }
  | PlayerLuckFactorsUpdate(playerLuckFactorsUpdate) =>
    PacketV1449.PlayerLuckFactorsUpdate({
      playerId: playerLuckFactorsUpdate.playerId,
      ladyBugLuckTimeLeft: playerLuckFactorsUpdate.ladyBugLuckTimeLeft,
      torchLuck: playerLuckFactorsUpdate.torchLuck,
      luckPotion: playerLuckFactorsUpdate.luckPotion,
      hasGardenGnomeNearby: playerLuckFactorsUpdate.hasGardenGnomeNearby,
      equipmentBasedLuckBonus: playerLuckFactorsUpdate.equipmentBasedLuckBonus,
      coinLuck: playerLuckFactorsUpdate.coinLuck,
    })
  | ShimmerEffectOrCoinLuck(shimmerEffectOrCoinLuck) =>
    switch shimmerEffectOrCoinLuck {
    | Packet.ShimmerEffectOrCoinLuck.ShimmerEffect(x, y) =>
      PacketV1449.ShimmerEffectOrCoinLuck(PacketV1449.ShimmerEffectOrCoinLuck.ShimmerEffect(x, y))
    | Packet.ShimmerEffectOrCoinLuck.CoinLuck(coinLuck) =>
      PacketV1449.ShimmerEffectOrCoinLuck(
        PacketV1449.ShimmerEffectOrCoinLuck.CoinLuck(shimmerCoinLuckToV1449(coinLuck)),
      )
    }
  | NetModuleLoad(netModuleLoad) =>
    switch netModuleLoadToV1449(netModuleLoad) {
    | Some(converted) => PacketV1449.NetModuleLoad(converted)
    | None => PacketV1449.NetModuleLoad(PacketV1449.NetModuleLoad.Ping({x: 0.0, y: 0.0}))
    }
  | packet => Obj.magic(packet)
  }
}

type convertIfNeeded =
  | PacketStructureIsSame
  | ConvertedToLatestVersion(Packet.t)
let convertFromV1449IfNeeded = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): result<
  convertIfNeeded,
  IParser.parseError,
> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    // Packets with structural changes between v1449 and v145
    | Some(PlayerInfo)
    | Some(PlayerInventorySlot)
    | Some(WorldInfo)
    | Some(InitialTileSectionsRequest)
    | Some(PlayerSpawn)
    | Some(PlayerUpdate)
    | Some(ItemOwner)
    | Some(NpcUpdate)
    | Some(Zones)
    | Some(PlayerBuffsSet)
    | Some(NpcBuffUpdate)
    | Some(Teleport)
    | Some(TravellingMerchantInventory)
    | Some(TeleportationPotion)
    | Some(ItemForceIntoNearestChest)
    | Some(TileEntityDisplayDollItemSync)
    | Some(PlayerLuckFactorsUpdate)
    | Some(ShimmerEffectOrCoinLuck)
    | Some(TileSectionSend)
    | Some(TileSquareSend)
    | Some(NetModuleLoad) =>
      try {
        Parserv1449.parse(~buffer, ~fromServer)
        ->Result.map(fromV1449)
        ->Result.map(p => ConvertedToLatestVersion(p))
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "Parser.parseLazy", error: obj}))
      }
    | Some(_) => Ok(PacketStructureIsSame)
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}

type convertToV1449IfNeeded =
  | PacketStructureIsSame
  | ConvertedToV1449(PacketV1449.t)
  | DiscardAsNotExists
let convertToV1449IfNeeded = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): result<
  convertToV1449IfNeeded,
  IParser.parseError,
> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(ChestResize)
    | Some(DeadCellsDisplayJarTryPlacing)
    | Some(HostToken)
    | Some(ItemDropClear)
    | Some(ItemDropPosition)
    | Some(LeashedEntityAnchorInsertItem)
    | Some(NpcHurtByDebuff)
    | Some(Ping)
    | Some(PlayerItemUseSound)
    | Some(PlayerSpectate)
    | Some(PlayerTeamSwapSpawn)
    | Some(PlayerTeamUpdate)
    | Some(SectionRequest) =>
      Ok(DiscardAsNotExists)
    // Packets with structural changes between v1449 and v145
    | Some(PlayerInfo)
    | Some(PlayerInventorySlot)
    | Some(WorldInfo)
    | Some(InitialTileSectionsRequest)
    | Some(PlayerSpawn)
    | Some(PlayerUpdate)
    | Some(ItemOwner)
    | Some(NpcUpdate)
    | Some(Zones)
    | Some(PlayerBuffsSet)
    | Some(NpcBuffUpdate)
    | Some(Teleport)
    | Some(TravellingMerchantInventory)
    | Some(TeleportationPotion)
    | Some(ItemForceIntoNearestChest)
    | Some(TileEntityDisplayDollItemSync)
    | Some(PlayerLuckFactorsUpdate)
    | Some(ShimmerEffectOrCoinLuck)
    | Some(NetModuleLoad) =>
      try {
        parse(~buffer, ~fromServer)->Result.map(packet =>
          switch packet {
          | NetModuleLoad(netModuleLoad) =>
            switch netModuleLoadToV1449(netModuleLoad) {
            | Some(converted) => ConvertedToV1449(PacketV1449.NetModuleLoad(converted))
            | None => DiscardAsNotExists
            }
          | _ => ConvertedToV1449(v1449ToLatest(packet))
          }
        )
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "Parser.parseLazy", error: obj}))
      }
    | Some(_) => Ok(PacketStructureIsSame)
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}
