let parsePayload = (packetType: PacketType.t, payload: NodeJs.Buffer.t, fromServer: bool) =>
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => None
  | (ConnectRequest, false) =>
    Packet.ConnectRequest.parse(payload)->Belt.Option.map(a => Packet.ConnectRequest(a))
  | (Disconnect, false) => None
  | (Disconnect, true) => Packet.Disconnect.parse(payload)->Belt.Option.map(a => Packet.Disconnect(a))
  | (PlayerSlotSet, false) => None
  | (PlayerSlotSet, true) =>
    Packet.PlayerSlotSet.parse(payload)->Belt.Option.map(a => Packet.PlayerSlotSet(a))
  | (PlayerInfo, true | false) => Packet.PlayerInfo.parse(payload)->Belt.Option.map(a => Packet.PlayerInfo(a))
  | (PlayerInventorySlot, true | false) =>
    Packet.PlayerInventorySlot.parse(payload)->Belt.Option.map(a => Packet.PlayerInventorySlot(a))
  | (WorldDataRequest, true) => None
  | (WorldDataRequest, false) =>
    Packet.WorldDataRequest.parse(payload)->Belt.Option.map(a => Packet.WorldDataRequest(a))
  | (WorldInfo, false) => None
  | (WorldInfo, true) => Packet.WorldInfo.parse(payload)->Belt.Option.map(a => Packet.WorldInfo(a))
  | (InitialTileSectionsRequest, true) => None
  | (InitialTileSectionsRequest, false) =>
    Packet.InitialTileSectionsRequest.parse(
      payload,
    )->Belt.Option.map(a => Packet.InitialTileSectionsRequest(a))
  | (Status, false) => None
  | (Status, true) => Packet.Status.parse(payload)->Belt.Option.map(a => Packet.Status(a))
  | (TileSectionSend, false) => None
  | (TileSectionSend, true) =>
    Packet.TileSectionSend.parse(payload)->Belt.Option.map(a => Packet.TileSectionSend(a))
  | (TileSectionFrame, false) => None
  | (TileSectionFrame, true) =>
    Packet.TileSectionFrame.parse(payload)->Belt.Option.map(a => Packet.TileSectionFrame(a))
  | (PlayerSpawn, true) => None
  | (PlayerSpawn, false) => Packet.PlayerSpawn.parse(payload)->Belt.Option.map(a => Packet.PlayerSpawn(a))
  | (PlayerUpdate, true | false) => Packet.PlayerUpdate.parse(payload)->Belt.Option.map(a => Packet.PlayerUpdate(a))
  | (PlayerActive, false) => None
  | (PlayerActive, true) => Packet.PlayerActive.parse(payload)->Belt.Option.map(a => Packet.PlayerActive(a))
  | (PlayerHealth, true | false) => Packet.PlayerHealth.parse(payload)->Belt.Option.map(a => Packet.PlayerHealth(a))
  | (TileModify, true | false) => Packet.TileModify.parse(payload)->Belt.Option.map(a => Packet.TileModify(a))
  | (TimeSet, false) => None
  | (TimeSet, true) => Packet.TimeSet.parse(payload)->Belt.Option.map(a => Packet.TimeSet(a))
  | (DoorUse, true | false) => Packet.DoorUse.parse(payload)->Belt.Option.map(a => Packet.DoorUse(a))
  | (TileSquareSend, true | false) =>
    Packet.TileSquareSend.parse(payload)->Belt.Option.map(a => Packet.TileSquareSend(a))
  | (ItemDropUpdate, true | false) =>
    Packet.ItemDropUpdate.parse(payload)->Belt.Option.map(a => Packet.ItemDropUpdate(a))
  | (ItemOwner, true | false) => Packet.ItemOwner.parse(payload)->Belt.Option.map(a => Packet.ItemOwner(a))
  | (NpcUpdate, false) => {
    None
  }
  | (NpcUpdate, true) => Packet.NpcUpdate.parse(payload)->Belt.Option.map(a => Packet.NpcUpdate(a))
  | (NpcItemStrike, true | false) =>
    Packet.NpcItemStrike.parse(payload)->Belt.Option.map(a => Packet.NpcItemStrike(a))
  | (ProjectileSync, true | false) =>
    Packet.ProjectileSync.parse(payload)->Belt.Option.map(a => Packet.ProjectileSync(a))
  | (NpcStrike, true | false) => Packet.NpcStrike.parse(payload)->Belt.Option.map(a => Packet.NpcStrike(a))
  | (ProjectileDestroy, true | false) =>
    Packet.ProjectileDestroy.parse(payload)->Belt.Option.map(a => Packet.ProjectileDestroy(a))
  | (PvpToggle, true | false) => Packet.PvpToggle.parse(payload)->Belt.Option.map(a => Packet.PvpToggle(a))
  | (ChestOpen, true) => None
  | (ChestOpen, false) => Packet.ChestOpen.parse(payload)->Belt.Option.map(a => Packet.ChestOpen(a))
  | (ChestItem, true | false) => Packet.ChestItem.parse(payload)->Belt.Option.map(a => Packet.ChestItem(a))
  | (ActiveContainerSync, true | false) =>
    Packet.ActiveContainerSync.parse(payload)->Belt.Option.map(a => Packet.ActiveContainerSync(a))
  | (ChestPlace, true | false) => Packet.ChestPlace.parse(payload)->Belt.Option.map(a => Packet.ChestPlace(a))
  | (HealEffect, true | false) => Packet.HealEffect.parse(payload)->Belt.Option.map(a => Packet.HealEffect(a))
  | (Zones, true | false) => Packet.Zones.parse(payload)->Belt.Option.map(a => Packet.Zones(a))
  | (PasswordRequired, false) => None
  | (PasswordRequired, true) =>
    Packet.PasswordRequired.parse(payload)->Belt.Option.map(a => Packet.PasswordRequired(a))
  | (PasswordSend, true) => None
  | (PasswordSend, false) => Packet.PasswordSend.parse(payload)->Belt.Option.map(a => Packet.PasswordSend(a))
  | (ItemOwnerRemove, false) => None
  | (ItemOwnerRemove, true) =>
    Packet.ItemOwnerRemove.parse(payload)->Belt.Option.map(a => Packet.ItemOwnerRemove(a))
  | (NpcTalk, true | false) => Packet.NpcTalk.parse(payload)->Belt.Option.map(a => Packet.NpcTalk(a))
  | (PlayerAnimation, true | false) =>
    Packet.PlayerAnimation.parse(payload)->Belt.Option.map(a => Packet.PlayerAnimation(a))
  | (PlayerMana, true | false) => Packet.PlayerMana.parse(payload)->Belt.Option.map(a => Packet.PlayerMana(a))
  | (ManaEffect, true | false) => Packet.ManaEffect.parse(payload)->Belt.Option.map(a => Packet.ManaEffect(a))
  | (PlayerTeam, true | false) => Packet.PlayerTeam.parse(payload)->Belt.Option.map(a => Packet.PlayerTeam(a))
  | (SignRead, true) => None
  | (SignRead, false) => Packet.SignRead.parse(payload)->Belt.Option.map(a => Packet.SignRead(a))
  | (SignNew, true | false) => Packet.SignNew.parse(payload)->Belt.Option.map(a => Packet.SignNew(a))
  | (LiquidSet, true | false) => Packet.LiquidSet.parse(payload)->Belt.Option.map(a => Packet.LiquidSet(a))
  | (PlayerSpawnSelf, false) => None
  | (PlayerSpawnSelf, true) =>
    Packet.PlayerSpawnSelf.parse(payload)->Belt.Option.map(a => Packet.PlayerSpawnSelf(a))
  | (PlayerBuffsSet, true | false) =>
    Packet.PlayerBuffsSet.parse(payload)->Belt.Option.map(a => Packet.PlayerBuffsSet(a))
  | (NpcSpecialEffect, true | false) =>
    Packet.NpcSpecialEffect.parse(payload)->Belt.Option.map(a => Packet.NpcSpecialEffect(a))
  | (ChestUnlock, true | false) => Packet.ChestUnlock.parse(payload)->Belt.Option.map(a => Packet.ChestUnlock(a))
  | (NpcBuffAdd, true | false) => Packet.NpcBuffAdd.parse(payload)->Belt.Option.map(a => Packet.NpcBuffAdd(a))
  | (NpcBuffUpdate, false) => None
  | (NpcBuffUpdate, true) =>
    Packet.NpcBuffUpdate.parse(payload)->Belt.Option.map(a => Packet.NpcBuffUpdate(a))
  | (PlayerBuffAdd, true | false) =>
    Packet.PlayerBuffAdd.parse(payload)->Belt.Option.map(a => Packet.PlayerBuffAdd(a))
  | (NpcNameUpdate, true | false) =>
    Packet.NpcNameUpdate.parse(payload)->Belt.Option.map(a => Packet.NpcNameUpdate(a))
  | (GoodEvilUpdate, false) => None
  | (GoodEvilUpdate, true) =>
    Packet.GoodEvilUpdate.parse(payload)->Belt.Option.map(a => Packet.GoodEvilUpdate(a))
  | (HarpPlay, true | false) => Packet.HarpPlay.parse(payload)->Belt.Option.map(a => Packet.HarpPlay(a))
  | (SwitchHit, true | false) => Packet.SwitchHit.parse(payload)->Belt.Option.map(a => Packet.SwitchHit(a))
  | (NpcHomeUpdate, true | false) =>
    Packet.NpcHomeUpdate.parse(payload)->Belt.Option.map(a => Packet.NpcHomeUpdate(a))
  | (BossOrInvasionSpawn, true) => None
  | (BossOrInvasionSpawn, false) =>
    Packet.BossOrInvasionSpawn.parse(payload)->Belt.Option.map(a => Packet.BossOrInvasionSpawn(a))
  | (PlayerDodge, true | false) => Packet.PlayerDodge.parse(payload)->Belt.Option.map(a => Packet.PlayerDodge(a))
  | (PaintTile, true | false) => Packet.PaintTile.parse(payload)->Belt.Option.map(a => Packet.PaintTile(a))
  | (PaintWall, true | false) => Packet.PaintWall.parse(payload)->Belt.Option.map(a => Packet.PaintWall(a))
  | (Teleport, true | false) => Packet.Teleport.parse(payload)->Belt.Option.map(a => Packet.Teleport(a))
  | (PlayerHealOther, true | false) =>
    Packet.PlayerHealOther.parse(payload)->Belt.Option.map(a => Packet.PlayerHealOther(a))
  | (DimensionsUpdate, true | false) =>
    Packet.DimensionsUpdate.parse(payload)->Belt.Option.map(a => Packet.DimensionsUpdate(a))
  | (ClientUuid, true) => None
  | (ClientUuid, false) => Packet.ClientUuid.parse(payload)->Belt.Option.map(a => Packet.ClientUuid(a))
  | (ChestName, true | false) => Packet.ChestName.parse(payload)->Belt.Option.map(a => Packet.ChestName(a))
  | (CatchNpc, true) => None
  | (CatchNpc, false) => Packet.CatchNpc.parse(payload)->Belt.Option.map(a => Packet.CatchNpc(a))
  | (ReleaseNpc, true) => None
  | (ReleaseNpc, false) => Packet.ReleaseNpc.parse(payload)->Belt.Option.map(a => Packet.ReleaseNpc(a))
  | (TravellingMerchantInventory, false) => None
  | (TravellingMerchantInventory, true) =>
    Packet.TravellingMerchantInventory.parse(
      payload,
    )->Belt.Option.map(a => Packet.TravellingMerchantInventory(a))
  | (TeleportationPotion, true | false) =>
    Packet.TeleportationPotion.parse(payload)->Belt.Option.map(a => Packet.TeleportationPotion(a))
  | (AnglerQuest, false) => None
  | (AnglerQuest, true) => Packet.AnglerQuest.parse(payload)->Belt.Option.map(a => Packet.AnglerQuest(a))
  | (AnglerQuestComplete, true) => None
  | (AnglerQuestComplete, false) =>
    Packet.AnglerQuestComplete.parse(payload)->Belt.Option.map(a => Packet.AnglerQuestComplete(a))
  | (AnglerQuestsCompletedAmount, true) => None
  | (AnglerQuestsCompletedAmount, false) =>
    Packet.AnglerQuestsCompletedAmount.parse(
      payload,
    )->Belt.Option.map(a => Packet.AnglerQuestsCompletedAmount(a))
  | (TemporaryAnimationCreate, false) => None
  | (TemporaryAnimationCreate, true) =>
    Packet.TemporaryAnimationCreate.parse(
      payload,
    )->Belt.Option.map(a => Packet.TemporaryAnimationCreate(a))
  | (InvasionProgressReport, false) => None
  | (InvasionProgressReport, true) =>
    Packet.InvasionProgressReport.parse(
      payload,
    )->Belt.Option.map(a => Packet.InvasionProgressReport(a))
  | (ObjectPlace, true | false) => Packet.ObjectPlace.parse(payload)->Belt.Option.map(a => Packet.ObjectPlace(a))
  | (PlayerChestIndexSync, false) => None
  | (PlayerChestIndexSync, true) =>
    Packet.PlayerChestIndexSync.parse(payload)->Belt.Option.map(a => Packet.PlayerChestIndexSync(a))
  | (CombatNumberCreate, false) => None
  | (CombatNumberCreate, true) =>
    Packet.CombatNumberCreate.parse(payload)->Belt.Option.map(a => Packet.CombatNumberCreate(a))
  | (NetModuleLoad, true | false) =>
    Packet.NetModuleLoad.parse(payload, fromServer)->Belt.Option.map(a => Packet.NetModuleLoad(a))
  | (NpcKillCount, false) => None
  | (NpcKillCount, true) => Packet.NpcKillCount.parse(payload)->Belt.Option.map(a => Packet.NpcKillCount(a))
  | (PlayerStealth, true | false) =>
    Packet.PlayerStealth.parse(payload)->Belt.Option.map(a => Packet.PlayerStealth(a))
  | (ItemForceIntoNearestChest, true) => None
  | (ItemForceIntoNearestChest, false) =>
    Packet.ItemForceIntoNearestChest.parse(
      payload,
    )->Belt.Option.map(a => Packet.ItemForceIntoNearestChest(a))
  | (TileEntityUpdate, false) => None
  | (TileEntityUpdate, true) =>
    Packet.TileEntityUpdate.parse(payload)->Belt.Option.map(a => Packet.TileEntityUpdate(a))
  | (TileEntityPlace, true) => None
  | (TileEntityPlace, false) =>
    Packet.TileEntityPlace.parse(payload)->Belt.Option.map(a => Packet.TileEntityPlace(a))
  | (ItemDropModify, false) => None
  | (ItemDropModify, true) =>
    Packet.ItemDropModify.parse(payload)->Belt.Option.map(a => Packet.ItemDropModify(a))
  | (ItemFramePlace, true) => None
  | (ItemFramePlace, false) =>
    Packet.ItemFramePlace.parse(payload)->Belt.Option.map(a => Packet.ItemFramePlace(a))
  | (ItemDropInstancedUpdate, true | false) =>
    Packet.ItemDropInstancedUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packet.ItemDropInstancedUpdate(a))
  | (EmoteBubble, false) => None
  | (EmoteBubble, true) => Packet.EmoteBubble.parse(payload)->Belt.Option.map(a => Packet.EmoteBubble(a))
  | (ExtraValueSync, true | false) =>
    Packet.ExtraValueSync.parse(payload)->Belt.Option.map(a => Packet.ExtraValueSync(a))
  | (SocialHandshake, true | false) =>
    Packet.SocialHandshake.parse(payload)->Belt.Option.map(a => Packet.SocialHandshake(a))
  | (Unused, true | false) => Packet.Unused.parse(payload)->Belt.Option.map(a => Packet.Unused(a))
  | (PortalKill, true) => None
  | (PortalKill, false) => Packet.PortalKill.parse(payload)->Belt.Option.map(a => Packet.PortalKill(a))
  | (PlayerTeleportPortal, true | false) =>
    Packet.PlayerTeleportPortal.parse(payload)->Belt.Option.map(a => Packet.PlayerTeleportPortal(a))
  | (NpcKilledNotification, false) => None
  | (NpcKilledNotification, true) =>
    Packet.NpcKilledNotification.parse(payload)->Belt.Option.map(a => Packet.NpcKilledNotification(
      a,
    ))
  | (EventNotification, false) => None
  | (EventNotification, true) =>
    Packet.EventNotification.parse(payload)->Belt.Option.map(a => Packet.EventNotification(a))
  | (MinionTargetUpdate, true | false) =>
    Packet.MinionTargetUpdate.parse(payload)->Belt.Option.map(a => Packet.MinionTargetUpdate(a))
  | (NpcTeleportPortal, true | false) =>
    Packet.NpcTeleportPortal.parse(payload)->Belt.Option.map(a => Packet.NpcTeleportPortal(a))
  | (ShieldStrengthsUpdate, false) => None
  | (ShieldStrengthsUpdate, true) =>
    Packet.ShieldStrengthsUpdate.parse(payload)->Belt.Option.map(a => Packet.ShieldStrengthsUpdate(
      a,
    ))
  | (NebulaLevelUp, true | false) =>
    Packet.NebulaLevelUp.parse(payload)->Belt.Option.map(a => Packet.NebulaLevelUp(a))
  | (MoonLordCountdown, false) => None
  | (MoonLordCountdown, true) =>
    Packet.MoonLordCountdown.parse(payload)->Belt.Option.map(a => Packet.MoonLordCountdown(a))
  | (NpcShopItem, false) => None
  | (NpcShopItem, true) => Packet.NpcShopItem.parse(payload)->Belt.Option.map(a => Packet.NpcShopItem(a))
  | (GemLockToggle, true) => None
  | (GemLockToggle, false) =>
    Packet.GemLockToggle.parse(payload)->Belt.Option.map(a => Packet.GemLockToggle(a))
  | (SmokePoof, false) => None
  | (SmokePoof, true) => Packet.SmokePoof.parse(payload)->Belt.Option.map(a => Packet.SmokePoof(a))
  | (ChatMessageSmart, false) => None
  | (ChatMessageSmart, true) =>
    Packet.ChatMessageSmart.parse(payload)->Belt.Option.map(a => Packet.ChatMessageSmart(a))
  | (WiredCannonShot, false) => None
  | (WiredCannonShot, true) =>
    Packet.WiredCannonShot.parse(payload)->Belt.Option.map(a => Packet.WiredCannonShot(a))
  | (MassWireOperation, true) => None
  | (MassWireOperation, false) =>
    Packet.MassWireOperation.parse(payload)->Belt.Option.map(a => Packet.MassWireOperation(a))
  | (MassWireOperationPay, false) => None
  | (MassWireOperationPay, true) =>
    Packet.MassWireOperationPay.parse(payload)->Belt.Option.map(a => Packet.MassWireOperationPay(a))
  | (PartyToggle, true) => None
  | (PartyToggle, false) => Packet.PartyToggle.parse(payload)->Belt.Option.map(a => Packet.PartyToggle(a))
  | (TreeGrowFx, true | false) => Packet.TreeGrowFx.parse(payload)->Belt.Option.map(a => Packet.TreeGrowFx(a))
  | (CrystalInvasionStart, true) => None
  | (CrystalInvasionStart, false) =>
    Packet.CrystalInvasionStart.parse(payload)->Belt.Option.map(a => Packet.CrystalInvasionStart(a))
  | (CrystalInvasionWipeAll, false) => None
  | (CrystalInvasionWipeAll, true) =>
    Packet.CrystalInvasionWipeAll.parse(
      payload,
    )->Belt.Option.map(a => Packet.CrystalInvasionWipeAll(a))
  | (MinionAttackTargetUpdate, true | false) =>
    Packet.MinionAttackTargetUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packet.MinionAttackTargetUpdate(a))
  | (CrystalInvasionSendWaitTime, false) => None
  | (CrystalInvasionSendWaitTime, true) =>
    Packet.CrystalInvasionSendWaitTime.parse(
      payload,
    )->Belt.Option.map(a => Packet.CrystalInvasionSendWaitTime(a))
  | (PlayerDamage, true | false) => Packet.PlayerDamage.parse(payload)->Belt.Option.map(a => Packet.PlayerDamage(a))
  | (PlayerDeath, true | false) => Packet.PlayerDeath.parse(payload)->Belt.Option.map(a => Packet.PlayerDeath(a))
  | (CombatTextCreate, false) => None
  | (CombatTextCreate, true) =>
    Packet.CombatTextCreate.parse(payload)->Belt.Option.map(a => Packet.CombatTextCreate(a))
  | (Emoji, true) => None
  | (Emoji, false) => Packet.Emoji.parse(payload)->Belt.Option.map(a => Packet.Emoji(a))
  | (TileEntityDisplayDollItemSync, true | false) =>
    Packet.TileEntityDisplayDollItemSync.parse(
      payload,
    )->Belt.Option.map(a => Packet.TileEntityDisplayDollItemSync(a))
  | (TileEntityInteractionRequest, true | false) =>
    Packet.TileEntityInteractionRequest.parse(
      payload,
    )->Belt.Option.map(a => Packet.TileEntityInteractionRequest(a))
  | (WeaponsRackTryPlacing, true) => None
  | (WeaponsRackTryPlacing, false) =>
    Packet.WeaponsRackTryPlacing.parse(payload)->Belt.Option.map(a => Packet.WeaponsRackTryPlacing(
      a,
    ))
  | (TileEntityHatRackItemSync, true | false) =>
    Packet.TileEntityHatRackItemSync.parse(
      payload,
    )->Belt.Option.map(a => Packet.TileEntityHatRackItemSync(a))
  | (TilePickingSync, true | false) =>
    Packet.TilePickingSync.parse(payload)->Belt.Option.map(a => Packet.TilePickingSync(a))
  | (RevengeMarkerSync, false) => None
  | (RevengeMarkerSync, true) =>
    Packet.RevengeMarkerSync.parse(payload)->Belt.Option.map(a => Packet.RevengeMarkerSync(a))
  | (RevengeMarkerRemove, false) => None
  | (RevengeMarkerRemove, true) =>
    Packet.RevengeMarkerRemove.parse(payload)->Belt.Option.map(a => Packet.RevengeMarkerRemove(a))
  | (GolfBallLandInCup, true | false) =>
    Packet.GolfBallLandInCup.parse(payload)->Belt.Option.map(a => Packet.GolfBallLandInCup(a))
  | (ClientFinishConnectingToServer, false) => None
  | (ClientFinishConnectingToServer, true) =>
    Packet.ClientFinishConnectingToServer.parse(
      payload,
    )->Belt.Option.map(a => Packet.ClientFinishConnectingToServer(a))
  | (NpcFishOut, true) => None
  | (NpcFishOut, false) => Packet.NpcFishOut.parse(payload)->Belt.Option.map(a => Packet.NpcFishOut(a))
  | (NpcTamper, false) => None
  | (NpcTamper, true) => Packet.NpcTamper.parse(payload)->Belt.Option.map(a => Packet.NpcTamper(a))
  | (LegacySoundPlay, false) => None
  | (LegacySoundPlay, true) =>
    Packet.LegacySoundPlay.parse(payload)->Belt.Option.map(a => Packet.LegacySoundPlay(a))
  | (FoodPlatterTryPlacing, true) => None
  | (FoodPlatterTryPlacing, false) =>
    Packet.FoodPlatterTryPlacing.parse(payload)->Belt.Option.map(a => Packet.FoodPlatterTryPlacing(
      a,
    ))
  | (PlayerLuckFactorsUpdate, true | false) =>
    Packet.PlayerLuckFactorsUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packet.PlayerLuckFactorsUpdate(a))
  | (PlayerDead, false) => None
  | (PlayerDead, true) => Packet.PlayerDead.parse(payload)->Belt.Option.map(a => Packet.PlayerDead(a))
  | (CavernMonsterTypeSync, true | false) =>
    Packet.CavernMonsterTypeSync.parse(payload)->Belt.Option.map(a => Packet.CavernMonsterTypeSync(
      a,
    ))
  | (NpcBuffRemovalRequest, true) => None
  | (NpcBuffRemovalRequest, false) =>
    Packet.NpcBuffRemovalRequest.parse(payload)->Belt.Option.map(a => Packet.NpcBuffRemovalRequest(
      a,
    ))
  | (ClientSyncedInventory, true) => None
  | (ClientSyncedInventory, false) =>
    Packet.ClientSyncedInventory.parse(payload)->Belt.Option.map(a => Packet.ClientSyncedInventory(
      a,
    ))
  | (CountsAsHostForGameplaySet, false) => None
  | (CountsAsHostForGameplaySet, true) =>
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
          None
        }
      }
    | None => None
    }
  }
}

let parseLazy: IParser.parseLazy<Packet.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => lazy({
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
          None
        }
      }
    | None => None
    }
  }
})
