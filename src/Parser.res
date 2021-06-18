let parsePayload = (packetType: PacketType.t, payload: NodeJs.Buffer.t, fromServer: bool) =>
  switch packetType {
  | ConnectRequest =>
    Packet.ConnectRequest.parse(payload)->Belt.Option.map(a => Packet.ConnectRequest(a))
  | Disconnect => Packet.Disconnect.parse(payload)->Belt.Option.map(a => Packet.Disconnect(a))
  | PlayerSlotSet =>
    Packet.PlayerSlotSet.parse(payload)->Belt.Option.map(a => Packet.PlayerSlotSet(a))
  | PlayerInfo => Packet.PlayerInfo.parse(payload)->Belt.Option.map(a => Packet.PlayerInfo(a))
  | PlayerInventorySlot =>
    Packet.PlayerInventorySlot.parse(payload)->Belt.Option.map(a => Packet.PlayerInventorySlot(a))
  | WorldDataRequest =>
    Packet.WorldDataRequest.parse(payload)->Belt.Option.map(a => Packet.WorldDataRequest(a))
  | WorldInfo => Packet.WorldInfo.parse(payload)->Belt.Option.map(a => Packet.WorldInfo(a))
  | InitialTileSectionsRequest =>
    Packet.InitialTileSectionsRequest.parse(
      payload,
    )->Belt.Option.map(a => Packet.InitialTileSectionsRequest(a))
  | Status => Packet.Status.parse(payload)->Belt.Option.map(a => Packet.Status(a))
  | TileSectionSend =>
    Packet.TileSectionSend.parse(payload)->Belt.Option.map(a => Packet.TileSectionSend(a))
  | TileSectionFrame =>
    Packet.TileSectionFrame.parse(payload)->Belt.Option.map(a => Packet.TileSectionFrame(a))
  | PlayerSpawn => Packet.PlayerSpawn.parse(payload)->Belt.Option.map(a => Packet.PlayerSpawn(a))
  | PlayerUpdate => Packet.PlayerUpdate.parse(payload)->Belt.Option.map(a => Packet.PlayerUpdate(a))
  | PlayerActive => Packet.PlayerActive.parse(payload)->Belt.Option.map(a => Packet.PlayerActive(a))
  | PlayerHealth => Packet.PlayerHealth.parse(payload)->Belt.Option.map(a => Packet.PlayerHealth(a))
  | TileModify => Packet.TileModify.parse(payload)->Belt.Option.map(a => Packet.TileModify(a))
  | TimeSet => Packet.TimeSet.parse(payload)->Belt.Option.map(a => Packet.TimeSet(a))
  | DoorUse => Packet.DoorUse.parse(payload)->Belt.Option.map(a => Packet.DoorUse(a))
  | TileSquareSend =>
    Packet.TileSquareSend.parse(payload)->Belt.Option.map(a => Packet.TileSquareSend(a))
  | ItemDropUpdate =>
    Packet.ItemDropUpdate.parse(payload)->Belt.Option.map(a => Packet.ItemDropUpdate(a))
  | ItemOwner => Packet.ItemOwner.parse(payload)->Belt.Option.map(a => Packet.ItemOwner(a))
  | NpcUpdate => Packet.NpcUpdate.parse(payload)->Belt.Option.map(a => Packet.NpcUpdate(a))
  | NpcItemStrike =>
    Packet.NpcItemStrike.parse(payload)->Belt.Option.map(a => Packet.NpcItemStrike(a))
  | ProjectileSync =>
    Packet.ProjectileSync.parse(payload)->Belt.Option.map(a => Packet.ProjectileSync(a))
  | NpcStrike => Packet.NpcStrike.parse(payload)->Belt.Option.map(a => Packet.NpcStrike(a))
  | ProjectileDestroy =>
    Packet.ProjectileDestroy.parse(payload)->Belt.Option.map(a => Packet.ProjectileDestroy(a))
  | PvpToggle => Packet.PvpToggle.parse(payload)->Belt.Option.map(a => Packet.PvpToggle(a))
  | ChestOpen => Packet.ChestOpen.parse(payload)->Belt.Option.map(a => Packet.ChestOpen(a))
  | ChestItem => Packet.ChestItem.parse(payload)->Belt.Option.map(a => Packet.ChestItem(a))
  | ActiveContainerSync =>
    Packet.ActiveContainerSync.parse(payload)->Belt.Option.map(a => Packet.ActiveContainerSync(a))
  | ChestPlace => Packet.ChestPlace.parse(payload)->Belt.Option.map(a => Packet.ChestPlace(a))
  | HealEffect => Packet.HealEffect.parse(payload)->Belt.Option.map(a => Packet.HealEffect(a))
  | Zones => Packet.Zones.parse(payload)->Belt.Option.map(a => Packet.Zones(a))
  | PasswordRequired =>
    Packet.PasswordRequired.parse(payload)->Belt.Option.map(a => Packet.PasswordRequired(a))
  | PasswordSend => Packet.PasswordSend.parse(payload)->Belt.Option.map(a => Packet.PasswordSend(a))
  | ItemOwnerRemove =>
    Packet.ItemOwnerRemove.parse(payload)->Belt.Option.map(a => Packet.ItemOwnerRemove(a))
  | NpcTalk => Packet.NpcTalk.parse(payload)->Belt.Option.map(a => Packet.NpcTalk(a))
  | PlayerAnimation =>
    Packet.PlayerAnimation.parse(payload)->Belt.Option.map(a => Packet.PlayerAnimation(a))
  | PlayerMana => Packet.PlayerMana.parse(payload)->Belt.Option.map(a => Packet.PlayerMana(a))
  | ManaEffect => Packet.ManaEffect.parse(payload)->Belt.Option.map(a => Packet.ManaEffect(a))
  | PlayerTeam => Packet.PlayerTeam.parse(payload)->Belt.Option.map(a => Packet.PlayerTeam(a))
  | SignRead => Packet.SignRead.parse(payload)->Belt.Option.map(a => Packet.SignRead(a))
  | SignNew => Packet.SignNew.parse(payload)->Belt.Option.map(a => Packet.SignNew(a))
  | LiquidSet => Packet.LiquidSet.parse(payload)->Belt.Option.map(a => Packet.LiquidSet(a))
  | PlayerSpawnSelf =>
    Packet.PlayerSpawnSelf.parse(payload)->Belt.Option.map(a => Packet.PlayerSpawnSelf(a))
  | PlayerBuffsSet =>
    Packet.PlayerBuffsSet.parse(payload)->Belt.Option.map(a => Packet.PlayerBuffsSet(a))
  | NpcSpecialEffect =>
    Packet.NpcSpecialEffect.parse(payload)->Belt.Option.map(a => Packet.NpcSpecialEffect(a))
  | ChestUnlock => Packet.ChestUnlock.parse(payload)->Belt.Option.map(a => Packet.ChestUnlock(a))
  | NpcBuffAdd => Packet.NpcBuffAdd.parse(payload)->Belt.Option.map(a => Packet.NpcBuffAdd(a))
  | NpcBuffUpdate =>
    Packet.NpcBuffUpdate.parse(payload)->Belt.Option.map(a => Packet.NpcBuffUpdate(a))
  | PlayerBuffAdd =>
    Packet.PlayerBuffAdd.parse(payload)->Belt.Option.map(a => Packet.PlayerBuffAdd(a))
  | NpcNameUpdate =>
    Packet.NpcNameUpdate.parse(payload)->Belt.Option.map(a => Packet.NpcNameUpdate(a))
  | GoodEvilUpdate =>
    Packet.GoodEvilUpdate.parse(payload)->Belt.Option.map(a => Packet.GoodEvilUpdate(a))
  | HarpPlay => Packet.HarpPlay.parse(payload)->Belt.Option.map(a => Packet.HarpPlay(a))
  | SwitchHit => Packet.SwitchHit.parse(payload)->Belt.Option.map(a => Packet.SwitchHit(a))
  | NpcHomeUpdate =>
    Packet.NpcHomeUpdate.parse(payload)->Belt.Option.map(a => Packet.NpcHomeUpdate(a))
  | BossOrInvasionSpawn =>
    Packet.BossOrInvasionSpawn.parse(payload)->Belt.Option.map(a => Packet.BossOrInvasionSpawn(a))
  | PlayerDodge => Packet.PlayerDodge.parse(payload)->Belt.Option.map(a => Packet.PlayerDodge(a))
  | PaintTile => Packet.PaintTile.parse(payload)->Belt.Option.map(a => Packet.PaintTile(a))
  | PaintWall => Packet.PaintWall.parse(payload)->Belt.Option.map(a => Packet.PaintWall(a))
  | Teleport => Packet.Teleport.parse(payload)->Belt.Option.map(a => Packet.Teleport(a))
  | PlayerHealOther =>
    Packet.PlayerHealOther.parse(payload)->Belt.Option.map(a => Packet.PlayerHealOther(a))
  | DimensionsUpdate =>
    Packet.DimensionsUpdate.parse(payload)->Belt.Option.map(a => Packet.DimensionsUpdate(a))
  | ClientUuid => Packet.ClientUuid.parse(payload)->Belt.Option.map(a => Packet.ClientUuid(a))
  | ChestName => Packet.ChestName.parse(payload)->Belt.Option.map(a => Packet.ChestName(a))
  | CatchNpc => Packet.CatchNpc.parse(payload)->Belt.Option.map(a => Packet.CatchNpc(a))
  | ReleaseNpc => Packet.ReleaseNpc.parse(payload)->Belt.Option.map(a => Packet.ReleaseNpc(a))
  | TravellingMerchantInventory =>
    Packet.TravellingMerchantInventory.parse(
      payload,
    )->Belt.Option.map(a => Packet.TravellingMerchantInventory(a))
  | TeleportationPotion =>
    Packet.TeleportationPotion.parse(payload)->Belt.Option.map(a => Packet.TeleportationPotion(a))
  | AnglerQuest => Packet.AnglerQuest.parse(payload)->Belt.Option.map(a => Packet.AnglerQuest(a))
  | AnglerQuestComplete =>
    Packet.AnglerQuestComplete.parse(payload)->Belt.Option.map(a => Packet.AnglerQuestComplete(a))
  | AnglerQuestsCompletedAmount =>
    Packet.AnglerQuestsCompletedAmount.parse(
      payload,
    )->Belt.Option.map(a => Packet.AnglerQuestsCompletedAmount(a))
  | TemporaryAnimationCreate =>
    Packet.TemporaryAnimationCreate.parse(
      payload,
    )->Belt.Option.map(a => Packet.TemporaryAnimationCreate(a))
  | InvasionProgressReport =>
    Packet.InvasionProgressReport.parse(
      payload,
    )->Belt.Option.map(a => Packet.InvasionProgressReport(a))
  | ObjectPlace => Packet.ObjectPlace.parse(payload)->Belt.Option.map(a => Packet.ObjectPlace(a))
  | PlayerChestIndexSync =>
    Packet.PlayerChestIndexSync.parse(payload)->Belt.Option.map(a => Packet.PlayerChestIndexSync(a))
  | CombatNumberCreate =>
    Packet.CombatNumberCreate.parse(payload)->Belt.Option.map(a => Packet.CombatNumberCreate(a))
  | NetModuleLoad =>
    Packet.NetModuleLoad.parse(payload, fromServer)->Belt.Option.map(a => Packet.NetModuleLoad(a))
  | NpcKillCount => Packet.NpcKillCount.parse(payload)->Belt.Option.map(a => Packet.NpcKillCount(a))
  | PlayerStealth =>
    Packet.PlayerStealth.parse(payload)->Belt.Option.map(a => Packet.PlayerStealth(a))
  | ItemForceIntoNearestChest =>
    Packet.ItemForceIntoNearestChest.parse(
      payload,
    )->Belt.Option.map(a => Packet.ItemForceIntoNearestChest(a))
  | TileEntityUpdate =>
    Packet.TileEntityUpdate.parse(payload)->Belt.Option.map(a => Packet.TileEntityUpdate(a))
  | TileEntityPlace =>
    Packet.TileEntityPlace.parse(payload)->Belt.Option.map(a => Packet.TileEntityPlace(a))
  | ItemDropModify =>
    Packet.ItemDropModify.parse(payload)->Belt.Option.map(a => Packet.ItemDropModify(a))
  | ItemFramePlace =>
    Packet.ItemFramePlace.parse(payload)->Belt.Option.map(a => Packet.ItemFramePlace(a))
  | ItemDropInstancedUpdate =>
    Packet.ItemDropInstancedUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packet.ItemDropInstancedUpdate(a))
  | EmoteBubble => Packet.EmoteBubble.parse(payload)->Belt.Option.map(a => Packet.EmoteBubble(a))
  | ExtraValueSync =>
    Packet.ExtraValueSync.parse(payload)->Belt.Option.map(a => Packet.ExtraValueSync(a))
  | SocialHandshake =>
    Packet.SocialHandshake.parse(payload)->Belt.Option.map(a => Packet.SocialHandshake(a))
  | Unused => Packet.Unused.parse(payload)->Belt.Option.map(a => Packet.Unused(a))
  | PortalKill => Packet.PortalKill.parse(payload)->Belt.Option.map(a => Packet.PortalKill(a))
  | PlayerTeleportPortal =>
    Packet.PlayerTeleportPortal.parse(payload)->Belt.Option.map(a => Packet.PlayerTeleportPortal(a))
  | NpcKilledNotification =>
    Packet.NpcKilledNotification.parse(payload)->Belt.Option.map(a => Packet.NpcKilledNotification(
      a,
    ))
  | EventNotification =>
    Packet.EventNotification.parse(payload)->Belt.Option.map(a => Packet.EventNotification(a))
  | MinionTargetUpdate =>
    Packet.MinionTargetUpdate.parse(payload)->Belt.Option.map(a => Packet.MinionTargetUpdate(a))
  | NpcTeleportPortal =>
    Packet.NpcTeleportPortal.parse(payload)->Belt.Option.map(a => Packet.NpcTeleportPortal(a))
  | ShieldStrengthsUpdate =>
    Packet.ShieldStrengthsUpdate.parse(payload)->Belt.Option.map(a => Packet.ShieldStrengthsUpdate(
      a,
    ))
  | NebulaLevelUp =>
    Packet.NebulaLevelUp.parse(payload)->Belt.Option.map(a => Packet.NebulaLevelUp(a))
  | MoonLordCountdown =>
    Packet.MoonLordCountdown.parse(payload)->Belt.Option.map(a => Packet.MoonLordCountdown(a))
  | NpcShopItem => Packet.NpcShopItem.parse(payload)->Belt.Option.map(a => Packet.NpcShopItem(a))
  | GemLockToggle =>
    Packet.GemLockToggle.parse(payload)->Belt.Option.map(a => Packet.GemLockToggle(a))
  | SmokePoof => Packet.SmokePoof.parse(payload)->Belt.Option.map(a => Packet.SmokePoof(a))
  | ChatMessageSmart =>
    Packet.ChatMessageSmart.parse(payload)->Belt.Option.map(a => Packet.ChatMessageSmart(a))
  | WiredCannonShot =>
    Packet.WiredCannonShot.parse(payload)->Belt.Option.map(a => Packet.WiredCannonShot(a))
  | MassWireOperation =>
    Packet.MassWireOperation.parse(payload)->Belt.Option.map(a => Packet.MassWireOperation(a))
  | MassWireOperationPay =>
    Packet.MassWireOperationPay.parse(payload)->Belt.Option.map(a => Packet.MassWireOperationPay(a))
  | PartyToggle => Packet.PartyToggle.parse(payload)->Belt.Option.map(a => Packet.PartyToggle(a))
  | TreeGrowFx => Packet.TreeGrowFx.parse(payload)->Belt.Option.map(a => Packet.TreeGrowFx(a))
  | CrystalInvasionStart =>
    Packet.CrystalInvasionStart.parse(payload)->Belt.Option.map(a => Packet.CrystalInvasionStart(a))
  | CrystalInvasionWipeAll =>
    Packet.CrystalInvasionWipeAll.parse(
      payload,
    )->Belt.Option.map(a => Packet.CrystalInvasionWipeAll(a))
  | MinionAttackTargetUpdate =>
    Packet.MinionAttackTargetUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packet.MinionAttackTargetUpdate(a))
  | CrystalInvasionSendWaitTime =>
    Packet.CrystalInvasionSendWaitTime.parse(
      payload,
    )->Belt.Option.map(a => Packet.CrystalInvasionSendWaitTime(a))
  | PlayerDamage => Packet.PlayerDamage.parse(payload)->Belt.Option.map(a => Packet.PlayerDamage(a))
  | PlayerDeath => Packet.PlayerDeath.parse(payload)->Belt.Option.map(a => Packet.PlayerDeath(a))
  | CombatTextCreate =>
    Packet.CombatTextCreate.parse(payload)->Belt.Option.map(a => Packet.CombatTextCreate(a))
  | Emoji => Packet.Emoji.parse(payload)->Belt.Option.map(a => Packet.Emoji(a))
  | TileEntityDisplayDollItemSync =>
    Packet.TileEntityDisplayDollItemSync.parse(
      payload,
    )->Belt.Option.map(a => Packet.TileEntityDisplayDollItemSync(a))
  | TileEntityInteractionRequest =>
    Packet.TileEntityInteractionRequest.parse(
      payload,
    )->Belt.Option.map(a => Packet.TileEntityInteractionRequest(a))
  | WeaponsRackTryPlacing =>
    Packet.WeaponsRackTryPlacing.parse(payload)->Belt.Option.map(a => Packet.WeaponsRackTryPlacing(
      a,
    ))
  | TileEntityHatRackItemSync =>
    Packet.TileEntityHatRackItemSync.parse(
      payload,
    )->Belt.Option.map(a => Packet.TileEntityHatRackItemSync(a))
  | TilePickingSync =>
    Packet.TilePickingSync.parse(payload)->Belt.Option.map(a => Packet.TilePickingSync(a))
  | RevengeMarkerSync =>
    Packet.RevengeMarkerSync.parse(payload)->Belt.Option.map(a => Packet.RevengeMarkerSync(a))
  | RevengeMarkerRemove =>
    Packet.RevengeMarkerRemove.parse(payload)->Belt.Option.map(a => Packet.RevengeMarkerRemove(a))
  | GolfBallLandInCup =>
    Packet.GolfBallLandInCup.parse(payload)->Belt.Option.map(a => Packet.GolfBallLandInCup(a))
  | ClientFinishConnectingToServer =>
    Packet.ClientFinishConnectingToServer.parse(
      payload,
    )->Belt.Option.map(a => Packet.ClientFinishConnectingToServer(a))
  | NpcFishOut => Packet.NpcFishOut.parse(payload)->Belt.Option.map(a => Packet.NpcFishOut(a))
  | NpcTamper => Packet.NpcTamper.parse(payload)->Belt.Option.map(a => Packet.NpcTamper(a))
  | LegacySoundPlay =>
    Packet.LegacySoundPlay.parse(payload)->Belt.Option.map(a => Packet.LegacySoundPlay(a))
  | FoodPlatterTryPlacing =>
    Packet.FoodPlatterTryPlacing.parse(payload)->Belt.Option.map(a => Packet.FoodPlatterTryPlacing(
      a,
    ))
  | PlayerLuckFactorsUpdate =>
    Packet.PlayerLuckFactorsUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packet.PlayerLuckFactorsUpdate(a))
  | PlayerDead => Packet.PlayerDead.parse(payload)->Belt.Option.map(a => Packet.PlayerDead(a))
  | CavernMonsterTypeSync =>
    Packet.CavernMonsterTypeSync.parse(payload)->Belt.Option.map(a => Packet.CavernMonsterTypeSync(
      a,
    ))
  | NpcBuffRemovalRequest =>
    Packet.NpcBuffRemovalRequest.parse(payload)->Belt.Option.map(a => Packet.NpcBuffRemovalRequest(
      a,
    ))
  | ClientSyncedInventory =>
    Packet.ClientSyncedInventory.parse(payload)->Belt.Option.map(a => Packet.ClientSyncedInventory(
      a,
    ))
  | CountsAsHostForGameplaySet =>
    Packet.CountsAsHostForGameplaySet.parse(
      payload,
    )->Belt.Option.map(a => Packet.CountsAsHostForGameplaySet(a))
  }

let parse: IParser.parse<Packet.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => None
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the latest version to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayload(packetType, buffer, fromServer)->Belt.Option.map(packet => IParser.SerializeNotNecessary(packet, buffer))
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
