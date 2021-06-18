let parsePayload = (packetType: PacketType.t, payload: NodeJs.Buffer.t, fromServer: bool) =>
  switch packetType {
  | ConnectRequest =>
    Packetv1405.ConnectRequest.parse(payload)->Belt.Option.map(a => Packetv1405.ConnectRequest(a))
  | Disconnect => Packetv1405.Disconnect.parse(payload)->Belt.Option.map(a => Packetv1405.Disconnect(a))
  | PlayerSlotSet =>
    Packetv1405.PlayerSlotSet.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerSlotSet(a))
  | PlayerInfo => Packetv1405.PlayerInfo.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerInfo(a))
  | PlayerInventorySlot =>
    Packetv1405.PlayerInventorySlot.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerInventorySlot(a))
  | WorldDataRequest =>
    Packetv1405.WorldDataRequest.parse(payload)->Belt.Option.map(a => Packetv1405.WorldDataRequest(a))
  | WorldInfo => Packetv1405.WorldInfo.parse(payload)->Belt.Option.map(a => Packetv1405.WorldInfo(a))
  | InitialTileSectionsRequest =>
    Packetv1405.InitialTileSectionsRequest.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.InitialTileSectionsRequest(a))
  | Status => Packetv1405.Status.parse(payload)->Belt.Option.map(a => Packetv1405.Status(a))
  | TileSectionSend =>
    Packetv1405.TileSectionSend.parse(payload)->Belt.Option.map(a => Packetv1405.TileSectionSend(a))
  | TileSectionFrame =>
    Packetv1405.TileSectionFrame.parse(payload)->Belt.Option.map(a => Packetv1405.TileSectionFrame(a))
  | PlayerSpawn => Packetv1405.PlayerSpawn.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerSpawn(a))
  | PlayerUpdate => Packetv1405.PlayerUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerUpdate(a))
  | PlayerActive => Packetv1405.PlayerActive.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerActive(a))
  | PlayerHealth => Packetv1405.PlayerHealth.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerHealth(a))
  | TileModify => Packetv1405.TileModify.parse(payload)->Belt.Option.map(a => Packetv1405.TileModify(a))
  | TimeSet => Packetv1405.TimeSet.parse(payload)->Belt.Option.map(a => Packetv1405.TimeSet(a))
  | DoorUse => Packetv1405.DoorUse.parse(payload)->Belt.Option.map(a => Packetv1405.DoorUse(a))
  | TileSquareSend =>
    Packetv1405.TileSquareSend.parse(payload)->Belt.Option.map(a => Packetv1405.TileSquareSend(a))
  | ItemDropUpdate =>
    Packetv1405.ItemDropUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.ItemDropUpdate(a))
  | ItemOwner => Packetv1405.ItemOwner.parse(payload)->Belt.Option.map(a => Packetv1405.ItemOwner(a))
  | NpcUpdate => Packetv1405.NpcUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.NpcUpdate(a))
  | NpcItemStrike =>
    Packetv1405.NpcItemStrike.parse(payload)->Belt.Option.map(a => Packetv1405.NpcItemStrike(a))
  | ProjectileSync =>
    Packetv1405.ProjectileSync.parse(payload)->Belt.Option.map(a => Packetv1405.ProjectileSync(a))
  | NpcStrike => Packetv1405.NpcStrike.parse(payload)->Belt.Option.map(a => Packetv1405.NpcStrike(a))
  | ProjectileDestroy =>
    Packetv1405.ProjectileDestroy.parse(payload)->Belt.Option.map(a => Packetv1405.ProjectileDestroy(a))
  | PvpToggle => Packetv1405.PvpToggle.parse(payload)->Belt.Option.map(a => Packetv1405.PvpToggle(a))
  | ChestOpen => Packetv1405.ChestOpen.parse(payload)->Belt.Option.map(a => Packetv1405.ChestOpen(a))
  | ChestItem => Packetv1405.ChestItem.parse(payload)->Belt.Option.map(a => Packetv1405.ChestItem(a))
  | ActiveContainerSync =>
    Packetv1405.ActiveContainerSync.parse(payload)->Belt.Option.map(a => Packetv1405.ActiveContainerSync(a))
  | ChestPlace => Packetv1405.ChestPlace.parse(payload)->Belt.Option.map(a => Packetv1405.ChestPlace(a))
  | HealEffect => Packetv1405.HealEffect.parse(payload)->Belt.Option.map(a => Packetv1405.HealEffect(a))
  | Zones => Packetv1405.Zones.parse(payload)->Belt.Option.map(a => Packetv1405.Zones(a))
  | PasswordRequired =>
    Packetv1405.PasswordRequired.parse(payload)->Belt.Option.map(a => Packetv1405.PasswordRequired(a))
  | PasswordSend => Packetv1405.PasswordSend.parse(payload)->Belt.Option.map(a => Packetv1405.PasswordSend(a))
  | ItemOwnerRemove =>
    Packetv1405.ItemOwnerRemove.parse(payload)->Belt.Option.map(a => Packetv1405.ItemOwnerRemove(a))
  | NpcTalk => Packetv1405.NpcTalk.parse(payload)->Belt.Option.map(a => Packetv1405.NpcTalk(a))
  | PlayerAnimation =>
    Packetv1405.PlayerAnimation.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerAnimation(a))
  | PlayerMana => Packetv1405.PlayerMana.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerMana(a))
  | ManaEffect => Packetv1405.ManaEffect.parse(payload)->Belt.Option.map(a => Packetv1405.ManaEffect(a))
  | PlayerTeam => Packetv1405.PlayerTeam.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerTeam(a))
  | SignRead => Packetv1405.SignRead.parse(payload)->Belt.Option.map(a => Packetv1405.SignRead(a))
  | SignNew => Packetv1405.SignNew.parse(payload)->Belt.Option.map(a => Packetv1405.SignNew(a))
  | LiquidSet => Packetv1405.LiquidSet.parse(payload)->Belt.Option.map(a => Packetv1405.LiquidSet(a))
  | PlayerSpawnSelf =>
    Packetv1405.PlayerSpawnSelf.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerSpawnSelf(a))
  | PlayerBuffsSet =>
    Packetv1405.PlayerBuffsSet.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerBuffsSet(a))
  | NpcSpecialEffect =>
    Packetv1405.NpcSpecialEffect.parse(payload)->Belt.Option.map(a => Packetv1405.NpcSpecialEffect(a))
  | ChestUnlock => Packetv1405.ChestUnlock.parse(payload)->Belt.Option.map(a => Packetv1405.ChestUnlock(a))
  | NpcBuffAdd => Packetv1405.NpcBuffAdd.parse(payload)->Belt.Option.map(a => Packetv1405.NpcBuffAdd(a))
  | NpcBuffUpdate =>
    Packetv1405.NpcBuffUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.NpcBuffUpdate(a))
  | PlayerBuffAdd =>
    Packetv1405.PlayerBuffAdd.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerBuffAdd(a))
  | NpcNameUpdate =>
    Packetv1405.NpcNameUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.NpcNameUpdate(a))
  | GoodEvilUpdate =>
    Packetv1405.GoodEvilUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.GoodEvilUpdate(a))
  | HarpPlay => Packetv1405.HarpPlay.parse(payload)->Belt.Option.map(a => Packetv1405.HarpPlay(a))
  | SwitchHit => Packetv1405.SwitchHit.parse(payload)->Belt.Option.map(a => Packetv1405.SwitchHit(a))
  | NpcHomeUpdate =>
    Packetv1405.NpcHomeUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.NpcHomeUpdate(a))
  | BossOrInvasionSpawn =>
    Packetv1405.BossOrInvasionSpawn.parse(payload)->Belt.Option.map(a => Packetv1405.BossOrInvasionSpawn(a))
  | PlayerDodge => Packetv1405.PlayerDodge.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerDodge(a))
  | PaintTile => Packetv1405.PaintTile.parse(payload)->Belt.Option.map(a => Packetv1405.PaintTile(a))
  | PaintWall => Packetv1405.PaintWall.parse(payload)->Belt.Option.map(a => Packetv1405.PaintWall(a))
  | Teleport => Packetv1405.Teleport.parse(payload)->Belt.Option.map(a => Packetv1405.Teleport(a))
  | PlayerHealOther =>
    Packetv1405.PlayerHealOther.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerHealOther(a))
  | DimensionsUpdate =>
    Packetv1405.DimensionsUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.DimensionsUpdate(a))
  | ClientUuid => Packetv1405.ClientUuid.parse(payload)->Belt.Option.map(a => Packetv1405.ClientUuid(a))
  | ChestName => Packetv1405.ChestName.parse(payload)->Belt.Option.map(a => Packetv1405.ChestName(a))
  | CatchNpc => Packetv1405.CatchNpc.parse(payload)->Belt.Option.map(a => Packetv1405.CatchNpc(a))
  | ReleaseNpc => Packetv1405.ReleaseNpc.parse(payload)->Belt.Option.map(a => Packetv1405.ReleaseNpc(a))
  | TravellingMerchantInventory =>
    Packetv1405.TravellingMerchantInventory.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TravellingMerchantInventory(a))
  | TeleportationPotion =>
    Packetv1405.TeleportationPotion.parse(payload)->Belt.Option.map(a => Packetv1405.TeleportationPotion(a))
  | AnglerQuest => Packetv1405.AnglerQuest.parse(payload)->Belt.Option.map(a => Packetv1405.AnglerQuest(a))
  | AnglerQuestComplete =>
    Packetv1405.AnglerQuestComplete.parse(payload)->Belt.Option.map(a => Packetv1405.AnglerQuestComplete(a))
  | AnglerQuestsCompletedAmount =>
    Packetv1405.AnglerQuestsCompletedAmount.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.AnglerQuestsCompletedAmount(a))
  | TemporaryAnimationCreate =>
    Packetv1405.TemporaryAnimationCreate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TemporaryAnimationCreate(a))
  | InvasionProgressReport =>
    Packetv1405.InvasionProgressReport.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.InvasionProgressReport(a))
  | ObjectPlace => Packetv1405.ObjectPlace.parse(payload)->Belt.Option.map(a => Packetv1405.ObjectPlace(a))
  | PlayerChestIndexSync =>
    Packetv1405.PlayerChestIndexSync.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerChestIndexSync(a))
  | CombatNumberCreate =>
    Packetv1405.CombatNumberCreate.parse(payload)->Belt.Option.map(a => Packetv1405.CombatNumberCreate(a))
  | NetModuleLoad =>
    Packetv1405.NetModuleLoad.parse(payload, fromServer)->Belt.Option.map(a => Packetv1405.NetModuleLoad(a))
  | NpcKillCount => Packetv1405.NpcKillCount.parse(payload)->Belt.Option.map(a => Packetv1405.NpcKillCount(a))
  | PlayerStealth =>
    Packetv1405.PlayerStealth.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerStealth(a))
  | ItemForceIntoNearestChest =>
    Packetv1405.ItemForceIntoNearestChest.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ItemForceIntoNearestChest(a))
  | TileEntityUpdate =>
    Packetv1405.TileEntityUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.TileEntityUpdate(a))
  | TileEntityPlace =>
    Packetv1405.TileEntityPlace.parse(payload)->Belt.Option.map(a => Packetv1405.TileEntityPlace(a))
  | ItemDropModify =>
    Packetv1405.ItemDropModify.parse(payload)->Belt.Option.map(a => Packetv1405.ItemDropModify(a))
  | ItemFramePlace =>
    Packetv1405.ItemFramePlace.parse(payload)->Belt.Option.map(a => Packetv1405.ItemFramePlace(a))
  | ItemDropInstancedUpdate =>
    Packetv1405.ItemDropInstancedUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ItemDropInstancedUpdate(a))
  | EmoteBubble => Packetv1405.EmoteBubble.parse(payload)->Belt.Option.map(a => Packetv1405.EmoteBubble(a))
  | ExtraValueSync =>
    Packetv1405.ExtraValueSync.parse(payload)->Belt.Option.map(a => Packetv1405.ExtraValueSync(a))
  | SocialHandshake =>
    Packetv1405.SocialHandshake.parse(payload)->Belt.Option.map(a => Packetv1405.SocialHandshake(a))
  | Unused => Packetv1405.Unused.parse(payload)->Belt.Option.map(a => Packetv1405.Unused(a))
  | PortalKill => Packetv1405.PortalKill.parse(payload)->Belt.Option.map(a => Packetv1405.PortalKill(a))
  | PlayerTeleportPortal =>
    Packetv1405.PlayerTeleportPortal.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerTeleportPortal(a))
  | NpcKilledNotification =>
    Packetv1405.NpcKilledNotification.parse(payload)->Belt.Option.map(a => Packetv1405.NpcKilledNotification(
      a,
    ))
  | EventNotification =>
    Packetv1405.EventNotification.parse(payload)->Belt.Option.map(a => Packetv1405.EventNotification(a))
  | MinionTargetUpdate =>
    Packetv1405.MinionTargetUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.MinionTargetUpdate(a))
  | NpcTeleportPortal =>
    Packetv1405.NpcTeleportPortal.parse(payload)->Belt.Option.map(a => Packetv1405.NpcTeleportPortal(a))
  | ShieldStrengthsUpdate =>
    Packetv1405.ShieldStrengthsUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.ShieldStrengthsUpdate(
      a,
    ))
  | NebulaLevelUp =>
    Packetv1405.NebulaLevelUp.parse(payload)->Belt.Option.map(a => Packetv1405.NebulaLevelUp(a))
  | MoonLordCountdown =>
    Packetv1405.MoonLordCountdown.parse(payload)->Belt.Option.map(a => Packetv1405.MoonLordCountdown(a))
  | NpcShopItem => Packetv1405.NpcShopItem.parse(payload)->Belt.Option.map(a => Packetv1405.NpcShopItem(a))
  | GemLockToggle =>
    Packetv1405.GemLockToggle.parse(payload)->Belt.Option.map(a => Packetv1405.GemLockToggle(a))
  | SmokePoof => Packetv1405.SmokePoof.parse(payload)->Belt.Option.map(a => Packetv1405.SmokePoof(a))
  | ChatMessageSmart =>
    Packetv1405.ChatMessageSmart.parse(payload)->Belt.Option.map(a => Packetv1405.ChatMessageSmart(a))
  | WiredCannonShot =>
    Packetv1405.WiredCannonShot.parse(payload)->Belt.Option.map(a => Packetv1405.WiredCannonShot(a))
  | MassWireOperation =>
    Packetv1405.MassWireOperation.parse(payload)->Belt.Option.map(a => Packetv1405.MassWireOperation(a))
  | MassWireOperationPay =>
    Packetv1405.MassWireOperationPay.parse(payload)->Belt.Option.map(a => Packetv1405.MassWireOperationPay(a))
  | PartyToggle => Packetv1405.PartyToggle.parse(payload)->Belt.Option.map(a => Packetv1405.PartyToggle(a))
  | TreeGrowFx => Packetv1405.TreeGrowFx.parse(payload)->Belt.Option.map(a => Packetv1405.TreeGrowFx(a))
  | CrystalInvasionStart =>
    Packetv1405.CrystalInvasionStart.parse(payload)->Belt.Option.map(a => Packetv1405.CrystalInvasionStart(a))
  | CrystalInvasionWipeAll =>
    Packetv1405.CrystalInvasionWipeAll.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.CrystalInvasionWipeAll(a))
  | MinionAttackTargetUpdate =>
    Packetv1405.MinionAttackTargetUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.MinionAttackTargetUpdate(a))
  | CrystalInvasionSendWaitTime =>
    Packetv1405.CrystalInvasionSendWaitTime.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.CrystalInvasionSendWaitTime(a))
  | PlayerDamage => Packetv1405.PlayerDamage.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerDamage(a))
  | PlayerDeath => Packetv1405.PlayerDeath.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerDeath(a))
  | CombatTextCreate =>
    Packetv1405.CombatTextCreate.parse(payload)->Belt.Option.map(a => Packetv1405.CombatTextCreate(a))
  | Emoji => Packetv1405.Emoji.parse(payload)->Belt.Option.map(a => Packetv1405.Emoji(a))
  | TileEntityDisplayDollItemSync =>
    Packetv1405.TileEntityDisplayDollItemSync.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TileEntityDisplayDollItemSync(a))
  | TileEntityInteractionRequest =>
    Packetv1405.TileEntityInteractionRequest.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TileEntityInteractionRequest(a))
  | WeaponsRackTryPlacing =>
    Packetv1405.WeaponsRackTryPlacing.parse(payload)->Belt.Option.map(a => Packetv1405.WeaponsRackTryPlacing(
      a,
    ))
  | TileEntityHatRackItemSync =>
    Packetv1405.TileEntityHatRackItemSync.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TileEntityHatRackItemSync(a))
  | TilePickingSync =>
    Packetv1405.TilePickingSync.parse(payload)->Belt.Option.map(a => Packetv1405.TilePickingSync(a))
  | RevengeMarkerSync =>
    Packetv1405.RevengeMarkerSync.parse(payload)->Belt.Option.map(a => Packetv1405.RevengeMarkerSync(a))
  | RevengeMarkerRemove =>
    Packetv1405.RevengeMarkerRemove.parse(payload)->Belt.Option.map(a => Packetv1405.RevengeMarkerRemove(a))
  | GolfBallLandInCup =>
    Packetv1405.GolfBallLandInCup.parse(payload)->Belt.Option.map(a => Packetv1405.GolfBallLandInCup(a))
  | ClientFinishConnectingToServer =>
    Packetv1405.ClientFinishConnectingToServer.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ClientFinishConnectingToServer(a))
  | NpcFishOut => Packetv1405.NpcFishOut.parse(payload)->Belt.Option.map(a => Packetv1405.NpcFishOut(a))
  | NpcTamper => Packetv1405.NpcTamper.parse(payload)->Belt.Option.map(a => Packetv1405.NpcTamper(a))
  | LegacySoundPlay =>
    Packetv1405.LegacySoundPlay.parse(payload)->Belt.Option.map(a => Packetv1405.LegacySoundPlay(a))
  | FoodPlatterTryPlacing =>
    Packetv1405.FoodPlatterTryPlacing.parse(payload)->Belt.Option.map(a => Packetv1405.FoodPlatterTryPlacing(
      a,
    ))
  | PlayerLuckFactorsUpdate =>
    Packetv1405.PlayerLuckFactorsUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.PlayerLuckFactorsUpdate(a))
  | PlayerDead => Packetv1405.PlayerDead.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerDead(a))
  | CavernMonsterTypeSync =>
    Packetv1405.CavernMonsterTypeSync.parse(payload)->Belt.Option.map(a => Packetv1405.CavernMonsterTypeSync(
      a,
    ))
  | NpcBuffRemovalRequest =>
    Packetv1405.NpcBuffRemovalRequest.parse(payload)->Belt.Option.map(a => Packetv1405.NpcBuffRemovalRequest(
      a,
    ))
  | ClientSyncedInventory =>
    Packetv1405.ClientSyncedInventory.parse(payload)->Belt.Option.map(a => Packetv1405.ClientSyncedInventory(
      a,
    ))
  | CountsAsHostForGameplaySet =>
    Packetv1405.CountsAsHostForGameplaySet.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.CountsAsHostForGameplaySet(a))
  }

let simpleParse = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): option<Packetv1405.t> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => None
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the 1405 to the equivalent packet data structures
        // it won't ever need Serializing after only parsing - only when it gets converted will this change
        parsePayload(packetType, buffer, fromServer)
      } catch {
      | e => {
          Js.log(e)
          None
        }
      }
    | None => None
    }
  }
}

let parse: IParser.parse<Packetv1405.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  simpleParse(~buffer, ~fromServer)->Belt.Option.map(packet => IParser.SerializeNotNecessary(packet, buffer))
}

let parseAsLatest: IParser.parse<Packet.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  simpleParse(~buffer, ~fromServer)->Belt.Option.map(packet =>
    switch Packetv1405.toLatest(packet, fromServer) {
    | Same(packet) => IParser.SerializeNotNecessary(packet, buffer)
    | NotSame(packet) => IParser.ShouldSerialize(packet)
    }
  )
}
