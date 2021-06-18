module ConnectRequest = Packet_ConnectRequest
module Disconnect = Packet_Disconnect
module PlayerSlotSet = Packet_PlayerSlotSet
module PlayerInfo = Packet_PlayerInfo
module PlayerInventorySlot = Packet_PlayerInventorySlot
module WorldDataRequest = Packet_WorldDataRequest
module WorldInfo = Packet_WorldInfo
module InitialTileSectionsRequest = Packet_InitialTileSectionsRequest
module Status = Packet_Status
module TileSectionSend = Packet_TileSectionSend
module TileSectionFrame = Packet_TileSectionFrame
module PlayerSpawn = Packet_PlayerSpawn
module PlayerUpdate = Packet_PlayerUpdate
module PlayerActive = Packet_PlayerActive
module PlayerHealth = Packet_PlayerHealth
module TileModify = Packet_TileModify
module TimeSet = Packet_TimeSet
module DoorUse = Packet_DoorUse
module TileSquareSend = Packet_TileSquareSend
module ItemDropUpdate = Packet_ItemDropUpdate
module ItemOwner = Packet_ItemOwner
module NpcUpdate = Packet_NpcUpdate
module NpcItemStrike = Packet_NpcItemStrike
module ProjectileSync = Packet_ProjectileSync
module NpcStrike = Packet_NpcStrike
module ProjectileDestroy = Packet_ProjectileDestroy
module PvpToggle = Packet_PvpToggle
module ChestOpen = Packet_ChestOpen
module ChestItem = Packet_ChestItem
module ActiveContainerSync = Packet_ActiveContainerSync
module ChestPlace = Packet_ChestPlace
module HealEffect = Packet_HealEffect
module Zones = Packet_Zones
module PasswordRequired = Packet_PasswordRequired
module PasswordSend = Packet_PasswordSend
module ItemOwnerRemove = Packet_ItemOwnerRemove
module NpcTalk = Packet_NpcTalk
module PlayerAnimation = Packet_PlayerAnimation
module PlayerMana = Packet_PlayerMana
module ManaEffect = Packet_ManaEffect
module PlayerTeam = Packet_PlayerTeam
module SignRead = Packet_SignRead
module SignNew = Packet_SignNew
module LiquidSet = Packet_LiquidSet
module PlayerSpawnSelf = Packet_PlayerSpawnSelf
module PlayerBuffsSet = Packet_PlayerBuffsSet
module NpcSpecialEffect = Packet_NpcSpecialEffect
module ChestUnlock = Packet_ChestUnlock
module NpcBuffAdd = Packet_NpcBuffAdd
module NpcBuffUpdate = Packet_NpcBuffUpdate
module PlayerBuffAdd = Packet_PlayerBuffAdd
module NpcNameUpdate = Packet_NpcNameUpdate
module GoodEvilUpdate = Packet_GoodEvilUpdate
module HarpPlay = Packet_HarpPlay
module SwitchHit = Packet_SwitchHit
module NpcHomeUpdate = Packet_NpcHomeUpdate
module BossOrInvasionSpawn = Packet_BossOrInvasionSpawn
module PlayerDodge = Packet_PlayerDodge
module PaintTile = Packet_PaintTile
module PaintWall = Packet_PaintWall
module Teleport = Packet_Teleport
module PlayerHealOther = Packet_PlayerHealOther
module DimensionsUpdate = Packet_DimensionsUpdate
module ClientUuid = Packet_ClientUuid
module ChestName = Packet_ChestName
module CatchNpc = Packet_CatchNpc
module ReleaseNpc = Packet_ReleaseNpc
module TravellingMerchantInventory = Packet_TravellingMerchantInventory
module TeleportationPotion = Packet_TeleportationPotion
module AnglerQuest = Packet_AnglerQuest
module AnglerQuestComplete = Packet_AnglerQuestComplete
module AnglerQuestsCompletedAmount = Packet_AnglerQuestsCompletedAmount
module TemporaryAnimationCreate = Packet_TemporaryAnimationCreate
module InvasionProgressReport = Packet_InvasionProgressReport
module ObjectPlace = Packet_ObjectPlace
module PlayerChestIndexSync = Packet_PlayerChestIndexSync
module CombatNumberCreate = Packet_CombatNumberCreate
module NetModuleLoad = Packet_NetModuleLoad
module NpcKillCount = Packet_NpcKillCount
module PlayerStealth = Packet_PlayerStealth
module ItemForceIntoNearestChest = Packet_ItemForceIntoNearestChest
module TileEntityUpdate = Packet_TileEntityUpdate
module TileEntityPlace = Packet_TileEntityPlace
module ItemDropModify = Packet_ItemDropModify
module ItemFramePlace = Packet_ItemFramePlace
module ItemDropInstancedUpdate = Packet_ItemDropInstancedUpdate
module EmoteBubble = Packet_EmoteBubble
module ExtraValueSync = Packet_ExtraValueSync
module SocialHandshake = Packet_SocialHandshake
module Unused = Packet_Unused
module PortalKill = Packet_PortalKill
module PlayerTeleportPortal = Packet_PlayerTeleportPortal
module NpcKilledNotification = Packet_NpcKilledNotification
module EventNotification = Packet_EventNotification
module MinionTargetUpdate = Packet_MinionTargetUpdate
module NpcTeleportPortal = Packet_NpcTeleportPortal
module ShieldStrengthsUpdate = Packet_ShieldStrengthsUpdate
module NebulaLevelUp = Packet_NebulaLevelUp
module MoonLordCountdown = Packet_MoonLordCountdown
module NpcShopItem = Packet_NpcShopItem
module GemLockToggle = Packet_GemLockToggle
module SmokePoof = Packet_SmokePoof
module ChatMessageSmart = Packet_ChatMessageSmart
module WiredCannonShot = Packet_WiredCannonShot
module MassWireOperation = Packet_MassWireOperation
module MassWireOperationPay = Packet_MassWireOperationPay
module PartyToggle = Packet_PartyToggle
module TreeGrowFx = Packet_TreeGrowFx
module CrystalInvasionStart = Packet_CrystalInvasionStart
module CrystalInvasionWipeAll = Packet_CrystalInvasionWipeAll
module MinionAttackTargetUpdate = Packet_MinionAttackTargetUpdate
module CrystalInvasionSendWaitTime = Packet_CrystalInvasionSendWaitTime
module PlayerDamage = Packet_PlayerDamage
module PlayerDeath = Packet_PlayerDeath
module CombatTextCreate = Packet_CombatTextCreate
module Emoji = Packet_Emoji
module TileEntityDisplayDollItemSync = Packet_TileEntityDisplayDollItemSync
module TileEntityInteractionRequest = Packet_TileEntityInteractionRequest
module WeaponsRackTryPlacing = Packet_WeaponsRackTryPlacing
module TileEntityHatRackItemSync = Packet_TileEntityHatRackItemSync
module TilePickingSync = Packet_TilePickingSync
module RevengeMarkerSync = Packet_RevengeMarkerSync
module RevengeMarkerRemove = Packet_RevengeMarkerRemove
module GolfBallLandInCup = Packet_GolfBallLandInCup
module ClientFinishConnectingToServer = Packet_ClientFinishConnectingToServer
module NpcFishOut = Packet_NpcFishOut
module NpcTamper = Packet_NpcTamper
module LegacySoundPlay = Packet_LegacySoundPlay
module FoodPlatterTryPlacing = Packet_FoodPlatterTryPlacing
module PlayerLuckFactorsUpdate = Packet_PlayerLuckFactorsUpdate
module PlayerDead = Packet_PlayerDead
module CavernMonsterTypeSync = Packet_CavernMonsterTypeSync
module NpcBuffRemovalRequest = Packet_NpcBuffRemovalRequest
module ClientSyncedInventory = Packet_ClientSyncedInventory
module CountsAsHostForGameplaySet = Packet_CountsAsHostForGameplaySet

type t =
  | ConnectRequest(ConnectRequest.t)
  | Disconnect(Disconnect.t)
  | PlayerSlotSet(PlayerSlotSet.t)
  | PlayerInfo(PlayerInfo.t)
  | PlayerInventorySlot(PlayerInventorySlot.t)
  | WorldDataRequest(WorldDataRequest.t)
  | WorldInfo(WorldInfo.t)
  | InitialTileSectionsRequest(InitialTileSectionsRequest.t)
  | Status(Status.t)
  | TileSectionSend(TileSectionSend.t)
  | TileSectionFrame(TileSectionFrame.t)
  | PlayerSpawn(PlayerSpawn.t)
  | PlayerUpdate(PlayerUpdate.t)
  | PlayerActive(PlayerActive.t)
  | PlayerHealth(PlayerHealth.t)
  | TileModify(TileModify.t)
  | TimeSet(TimeSet.t)
  | DoorUse(DoorUse.t)
  | TileSquareSend(TileSquareSend.t)
  | ItemDropUpdate(ItemDropUpdate.t)
  | ItemOwner(ItemOwner.t)
  | NpcUpdate(NpcUpdate.t)
  | NpcItemStrike(NpcItemStrike.t)
  | ProjectileSync(ProjectileSync.t)
  | NpcStrike(NpcStrike.t)
  | ProjectileDestroy(ProjectileDestroy.t)
  | PvpToggle(PvpToggle.t)
  | ChestOpen(ChestOpen.t)
  | ChestItem(ChestItem.t)
  | ActiveContainerSync(ActiveContainerSync.t)
  | ChestPlace(ChestPlace.t)
  | HealEffect(HealEffect.t)
  | Zones(Zones.t)
  | PasswordRequired(PasswordRequired.t)
  | PasswordSend(PasswordSend.t)
  | ItemOwnerRemove(ItemOwnerRemove.t)
  | NpcTalk(NpcTalk.t)
  | PlayerAnimation(PlayerAnimation.t)
  | PlayerMana(PlayerMana.t)
  | ManaEffect(ManaEffect.t)
  | PlayerTeam(PlayerTeam.t)
  | SignRead(SignRead.t)
  | SignNew(SignNew.t)
  | LiquidSet(LiquidSet.t)
  | PlayerSpawnSelf(PlayerSpawnSelf.t)
  | PlayerBuffsSet(PlayerBuffsSet.t)
  | NpcSpecialEffect(NpcSpecialEffect.t)
  | ChestUnlock(ChestUnlock.t)
  | NpcBuffAdd(NpcBuffAdd.t)
  | NpcBuffUpdate(NpcBuffUpdate.t)
  | PlayerBuffAdd(PlayerBuffAdd.t)
  | NpcNameUpdate(NpcNameUpdate.t)
  | GoodEvilUpdate(GoodEvilUpdate.t)
  | HarpPlay(HarpPlay.t)
  | SwitchHit(SwitchHit.t)
  | NpcHomeUpdate(NpcHomeUpdate.t)
  | BossOrInvasionSpawn(BossOrInvasionSpawn.t)
  | PlayerDodge(PlayerDodge.t)
  | PaintTile(PaintTile.t)
  | PaintWall(PaintWall.t)
  | Teleport(Teleport.t)
  | PlayerHealOther(PlayerHealOther.t)
  | DimensionsUpdate(DimensionsUpdate.t)
  | ClientUuid(ClientUuid.t)
  | ChestName(ChestName.t)
  | CatchNpc(CatchNpc.t)
  | ReleaseNpc(ReleaseNpc.t)
  | TravellingMerchantInventory(TravellingMerchantInventory.t)
  | TeleportationPotion(TeleportationPotion.t)
  | AnglerQuest(AnglerQuest.t)
  | AnglerQuestComplete(AnglerQuestComplete.t)
  | AnglerQuestsCompletedAmount(AnglerQuestsCompletedAmount.t)
  | TemporaryAnimationCreate(TemporaryAnimationCreate.t)
  | InvasionProgressReport(InvasionProgressReport.t)
  | ObjectPlace(ObjectPlace.t)
  | PlayerChestIndexSync(PlayerChestIndexSync.t)
  | CombatNumberCreate(CombatNumberCreate.t)
  | NetModuleLoad(NetModuleLoad.t)
  | NpcKillCount(NpcKillCount.t)
  | PlayerStealth(PlayerStealth.t)
  | ItemForceIntoNearestChest(ItemForceIntoNearestChest.t)
  | TileEntityUpdate(TileEntityUpdate.t)
  | TileEntityPlace(TileEntityPlace.t)
  | ItemDropModify(ItemDropModify.t)
  | ItemFramePlace(ItemFramePlace.t)
  | ItemDropInstancedUpdate(ItemDropInstancedUpdate.t)
  | EmoteBubble(EmoteBubble.t)
  | ExtraValueSync(ExtraValueSync.t)
  | SocialHandshake(SocialHandshake.t)
  | Unused(Unused.t)
  | PortalKill(PortalKill.t)
  | PlayerTeleportPortal(PlayerTeleportPortal.t)
  | NpcKilledNotification(NpcKilledNotification.t)
  | EventNotification(EventNotification.t)
  | MinionTargetUpdate(MinionTargetUpdate.t)
  | NpcTeleportPortal(NpcTeleportPortal.t)
  | ShieldStrengthsUpdate(ShieldStrengthsUpdate.t)
  | NebulaLevelUp(NebulaLevelUp.t)
  | MoonLordCountdown(MoonLordCountdown.t)
  | NpcShopItem(NpcShopItem.t)
  | GemLockToggle(GemLockToggle.t)
  | SmokePoof(SmokePoof.t)
  | ChatMessageSmart(ChatMessageSmart.t)
  | WiredCannonShot(WiredCannonShot.t)
  | MassWireOperation(MassWireOperation.t)
  | MassWireOperationPay(MassWireOperationPay.t)
  | PartyToggle(PartyToggle.t)
  | TreeGrowFx(TreeGrowFx.t)
  | CrystalInvasionStart(CrystalInvasionStart.t)
  | CrystalInvasionWipeAll(CrystalInvasionWipeAll.t)
  | MinionAttackTargetUpdate(MinionAttackTargetUpdate.t)
  | CrystalInvasionSendWaitTime(CrystalInvasionSendWaitTime.t)
  | PlayerDamage(PlayerDamage.t)
  | PlayerDeath(PlayerDeath.t)
  | CombatTextCreate(CombatTextCreate.t)
  | Emoji(Emoji.t)
  | TileEntityDisplayDollItemSync(TileEntityDisplayDollItemSync.t)
  | TileEntityInteractionRequest(TileEntityInteractionRequest.t)
  | WeaponsRackTryPlacing(WeaponsRackTryPlacing.t)
  | TileEntityHatRackItemSync(TileEntityHatRackItemSync.t)
  | TilePickingSync(TilePickingSync.t)
  | RevengeMarkerSync(RevengeMarkerSync.t)
  | RevengeMarkerRemove(RevengeMarkerRemove.t)
  | GolfBallLandInCup(GolfBallLandInCup.t)
  | ClientFinishConnectingToServer(ClientFinishConnectingToServer.t)
  | NpcFishOut(NpcFishOut.t)
  | NpcTamper(NpcTamper.t)
  | LegacySoundPlay(LegacySoundPlay.t)
  | FoodPlatterTryPlacing(FoodPlatterTryPlacing.t)
  | PlayerLuckFactorsUpdate(PlayerLuckFactorsUpdate.t)
  | PlayerDead(PlayerDead.t)
  | CavernMonsterTypeSync(CavernMonsterTypeSync.t)
  | NpcBuffRemovalRequest(NpcBuffRemovalRequest.t)
  | ClientSyncedInventory(ClientSyncedInventory.t)
  | CountsAsHostForGameplaySet(CountsAsHostForGameplaySet.t)

let toBuffer = (packet: t, fromServer: bool): option<NodeJs.Buffer.t> => {
  switch packet {
  | ConnectRequest(connectRequest) => Some(ConnectRequest.toBuffer(connectRequest))
  | Disconnect(disconnect) => Some(Disconnect.toBuffer(disconnect))
  | PlayerSlotSet(playerSlotSet) => Some(PlayerSlotSet.toBuffer(playerSlotSet))
  | PlayerInfo(playerInfo) => Some(PlayerInfo.toBuffer(playerInfo))
  | PlayerInventorySlot(playerInventorySlot) => Some(PlayerInventorySlot.toBuffer(playerInventorySlot))
  | WorldDataRequest(worldDataRequest) => Some(WorldDataRequest.toBuffer(worldDataRequest))
  | WorldInfo(worldInfo) => Some(WorldInfo.toBuffer(worldInfo))
  | InitialTileSectionsRequest(initialTileSectionsRequest) => Some(InitialTileSectionsRequest.toBuffer(initialTileSectionsRequest))
  | Status(status) => Some(Status.toBuffer(status))
  | TileSectionSend(tileSectionSend) => None
  | TileSectionFrame(tileSectionFrame) => None
  | PlayerSpawn(playerSpawn) => Some(PlayerSpawn.toBuffer(playerSpawn))
  | PlayerUpdate(playerUpdate) => None
  | PlayerActive(playerActive) => Some(PlayerActive.toBuffer(playerActive))
  | PlayerHealth(playerHealth) => Some(PlayerHealth.toBuffer(playerHealth))
  | TileModify(tileModify) => None
  | TimeSet(timeSet) => None
  | DoorUse(doorUse) => None
  | TileSquareSend(tileSquareSend) => Some(TileSquareSend.toBuffer(tileSquareSend))
  | ItemDropUpdate(itemDropUpdate) => Some(ItemDropUpdate.toBuffer(itemDropUpdate))
  | ItemOwner(itemOwner) => None
  | NpcUpdate(npcUpdate) => Some(NpcUpdate.toBuffer(npcUpdate))
  | NpcItemStrike(npcItemStrike) => None
  | ProjectileSync(projectileSync) => Some(ProjectileSync.toBuffer(projectileSync))
  | NpcStrike(npcStrike) => None
  | ProjectileDestroy(projectileDestroy) => Some(ProjectileDestroy.toBuffer(projectileDestroy))
  | PvpToggle(pvpToggle) => None
  | ChestOpen(chestOpen) => None
  | ChestItem(chestItem) => None
  | ActiveContainerSync(activeContainerSync) => None
  | ChestPlace(chestPlace) => None
  | HealEffect(healEffect) => None
  | Zones(zones) => None
  | PasswordRequired(passwordRequired) => None
  | PasswordSend(passwordSend) => None
  | ItemOwnerRemove(itemOwnerRemove) => None
  | NpcTalk(npcTalk) => None
  | PlayerAnimation(playerAnimation) => None
  | PlayerMana(playerMana) => Some(PlayerMana.toBuffer(playerMana))
  | ManaEffect(manaEffect) => None
  | PlayerTeam(playerTeam) => None
  | SignRead(signRead) => None
  | SignNew(signNew) => None
  | LiquidSet(liquidSet) => None
  | PlayerSpawnSelf(playerSpawnSelf) => None
  | PlayerBuffsSet(playerBuffsSet) => None
  | NpcSpecialEffect(npcSpecialEffect) => None
  | ChestUnlock(chestUnlock) => None
  | NpcBuffAdd(npcBuffAdd) => None
  | NpcBuffUpdate(npcBuffUpdate) => None
  | PlayerBuffAdd(playerBuffAdd) => None
  | NpcNameUpdate(npcNameUpdate) => None
  | GoodEvilUpdate(goodEvilUpdate) => None
  | HarpPlay(harpPlay) => None
  | SwitchHit(switchHit) => None
  | NpcHomeUpdate(npcHomeUpdate) => None
  | BossOrInvasionSpawn(bossOrInvasionSpawn) => None
  | PlayerDodge(playerDodge) => None
  | PaintTile(paintTile) => None
  | PaintWall(paintWall) => None
  | Teleport(teleport) => None
  | PlayerHealOther(playerHealOther) => None
  | DimensionsUpdate(dimensionsUpdate) => Some(DimensionsUpdate.toBuffer(dimensionsUpdate))
  | ClientUuid(clientUuid) => None
  | ChestName(chestName) => None
  | CatchNpc(catchNpc) => None
  | ReleaseNpc(releaseNpc) => None
  | TravellingMerchantInventory(travellingMerchantInventory) => None
  | TeleportationPotion(teleportationPotion) => None
  | AnglerQuest(anglerQuest) => None
  | AnglerQuestComplete(anglerQuestComplete) => None
  | AnglerQuestsCompletedAmount(anglerQuestsCompletedAmount) => None
  | TemporaryAnimationCreate(temporaryAnimationCreate) => None
  | InvasionProgressReport(invasionProgressReport) => None
  | ObjectPlace(objectPlace) => None
  | PlayerChestIndexSync(playerChestIndexSync) => None
  | CombatNumberCreate(combatNumberCreate) => None
  | NetModuleLoad(netModuleLoad) => Some(NetModuleLoad.toBuffer(netModuleLoad))
  | NpcKillCount(npcKillCount) => None
  | PlayerStealth(playerStealth) => None
  | ItemForceIntoNearestChest(itemForceIntoNearestChest) => None
  | TileEntityUpdate(tileEntityUpdate) => None
  | TileEntityPlace(tileEntityPlace) => None
  | ItemDropModify(itemDropModify) => None
  | ItemFramePlace(itemFramePlace) => None
  | ItemDropInstancedUpdate(itemDropInstancedUpdate) => None
  | EmoteBubble(emoteBubble) => None
  | ExtraValueSync(extraValueSync) => None
  | SocialHandshake(socialHandshake) => None
  | Unused(unused) => None
  | PortalKill(portalKill) => None
  | PlayerTeleportPortal(playerTeleportPortal) => None
  | NpcKilledNotification(npcKilledNotification) => None
  | EventNotification(eventNotification) => None
  | MinionTargetUpdate(minionTargetUpdate) => None
  | NpcTeleportPortal(npcTeleportPortal) => None
  | ShieldStrengthsUpdate(shieldStrengthsUpdate) => None
  | NebulaLevelUp(nebulaLevelUp) => None
  | MoonLordCountdown(moonLordCountdown) => None
  | NpcShopItem(npcShopItem) => None
  | GemLockToggle(gemLockToggle) => None
  | SmokePoof(smokePoof) => None
  | ChatMessageSmart(chatMessageSmart) => None
  | WiredCannonShot(wiredCannonShot) => None
  | MassWireOperation(massWireOperation) => None
  | MassWireOperationPay(massWireOperationPay) => None
  | PartyToggle(partyToggle) => None
  | TreeGrowFx(treeGrowFx) => None
  | CrystalInvasionStart(crystalInvasionStart) => None
  | CrystalInvasionWipeAll(crystalInvasionWipeAll) => None
  | MinionAttackTargetUpdate(minionAttackTargetUpdate) => None
  | CrystalInvasionSendWaitTime(crystalInvasionSendWaitTime) => None
  | PlayerDamage(playerDamage) => None
  | PlayerDeath(playerDeath) => None
  | CombatTextCreate(combatTextCreate) => None
  | Emoji(emoji) => None
  | TileEntityDisplayDollItemSync(tileEntityDisplayDollItemSync) => None
  | TileEntityInteractionRequest(tileEntityInteractionRequest) => None
  | WeaponsRackTryPlacing(weaponsRackTryPlacing) => None
  | TileEntityHatRackItemSync(tileEntityHatRackItemSync) => None
  | TilePickingSync(tilePickingSync) => None
  | RevengeMarkerSync(revengeMarkerSync) => None
  | RevengeMarkerRemove(revengeMarkerRemove) => None
  | GolfBallLandInCup(golfBallLandInCup) => None
  | ClientFinishConnectingToServer(clientFinishConnectingToServer) => None
  | NpcFishOut(npcFishOut) => None
  | NpcTamper(npcTamper) => None
  | LegacySoundPlay(legacySoundPlay) => None
  | FoodPlatterTryPlacing(foodPlatterTryPlacing) => None
  | PlayerLuckFactorsUpdate(playerLuckFactorsUpdate) => None
  | PlayerDead(playerDead) => None
  | CavernMonsterTypeSync(cavernMonsterTypeSync) => None
  | NpcBuffRemovalRequest(npcBuffRemovalRequest) => None
  | ClientSyncedInventory(clientSyncedInventory) => None
  | CountsAsHostForGameplaySet(countsAsHostForGameplaySet) => None
  }
}

let serialize: ISerializer.serialize<t> = (~parsed: IParser.parsed<t>, ~fromServer: bool) => switch parsed {
  | IParser.ShouldSerialize(packet) => toBuffer(packet, fromServer)
  | IParser.SerializeNotNecessary(_, buffer) => Some(buffer)
}

let toPacketName = (packet: t): string => {
  switch packet {
  | ConnectRequest(_connectRequest) => "ConnectRequest"
  | Disconnect(_disconnect) => "Disconnect"
  | PlayerSlotSet(_playerSlotSet) => "PlayerSlotSet"
  | PlayerInfo(_playerInfo) => "PlayerInfo"
  | PlayerInventorySlot(_playerInventorySlot) => "PlayerInventorySlot"
  | WorldDataRequest(_worldDataRequest) => "WorldDataRequest"
  | WorldInfo(_worldInfo) => "WorldInfo"
  | InitialTileSectionsRequest(_initialTileSectionsRequest) => "InitialTileSectionsRequest"
  | Status(_status) => "Status"
  | TileSectionSend(_tileSectionSend) => "TileSectionSend"
  | TileSectionFrame(_tileSectionFrame) => "TileSectionFrame"
  | PlayerSpawn(_playerSpawn) => "PlayerSpawn"
  | PlayerUpdate(_playerUpdate) => "PlayerUpdate"
  | PlayerActive(_playerActive) => "PlayerActive"
  | PlayerHealth(_playerHealth) => "PlayerHealth"
  | TileModify(_tileModify) => "TileModify"
  | TimeSet(_timeSet) => "TimeSet"
  | DoorUse(_doorUse) => "DoorUse"
  | TileSquareSend(_tileSquareSend) => "TileSquareSend"
  | ItemDropUpdate(_itemDropUpdate) => "ItemDropUpdate"
  | ItemOwner(_itemOwner) => "ItemOwner"
  | NpcUpdate(_npcUpdate) => "NpcUpdate"
  | NpcItemStrike(_npcItemStrike) => "NpcItemStrike"
  | ProjectileSync(_projectileSync) => "ProjectileSync"
  | NpcStrike(_npcStrike) => "NpcStrike"
  | ProjectileDestroy(_projectileDestroy) => "ProjectileDestroy"
  | PvpToggle(_pvpToggle) => "PvpToggle"
  | ChestOpen(_chestOpen) => "ChestOpen"
  | ChestItem(_chestItem) => "ChestItem"
  | ActiveContainerSync(_activeContainerSync) => "ActiveContainerSync"
  | ChestPlace(_chestPlace) => "ChestPlace"
  | HealEffect(_healEffect) => "HealEffect"
  | Zones(_zones) => "Zones"
  | PasswordRequired(_passwordRequired) => "PasswordRequired"
  | PasswordSend(_passwordSend) => "PasswordSend"
  | ItemOwnerRemove(_itemOwnerRemove) => "ItemOwnerRemove"
  | NpcTalk(_npcTalk) => "NpcTalk"
  | PlayerAnimation(_playerAnimation) => "PlayerAnimation"
  | PlayerMana(_playerMana) => "PlayerMana"
  | ManaEffect(_manaEffect) => "ManaEffect"
  | PlayerTeam(_playerTeam) => "PlayerTeam"
  | SignRead(_signRead) => "SignRead"
  | SignNew(_signNew) => "SignNew"
  | LiquidSet(_liquidSet) => "LiquidSet"
  | PlayerSpawnSelf(_playerSpawnSelf) => "PlayerSpawnSelf"
  | PlayerBuffsSet(_playerBuffsSet) => "PlayerBuffsSet"
  | NpcSpecialEffect(_npcSpecialEffect) => "NpcSpecialEffect"
  | ChestUnlock(_chestUnlock) => "ChestUnlock"
  | NpcBuffAdd(_npcBuffAdd) => "NpcBuffAdd"
  | NpcBuffUpdate(_npcBuffUpdate) => "NpcBuffUpdate"
  | PlayerBuffAdd(_playerBuffAdd) => "PlayerBuffAdd"
  | NpcNameUpdate(_npcNameUpdate) => "NpcNameUpdate"
  | GoodEvilUpdate(_goodEvilUpdate) => "GoodEvilUpdate"
  | HarpPlay(_harpPlay) => "HarpPlay"
  | SwitchHit(_switchHit) => "SwitchHit"
  | NpcHomeUpdate(_npcHomeUpdate) => "NpcHomeUpdate"
  | BossOrInvasionSpawn(_bossOrInvasionSpawn) => "BossOrInvasionSpawn"
  | PlayerDodge(_playerDodge) => "PlayerDodge"
  | PaintTile(_paintTile) => "PaintTile"
  | PaintWall(_paintWall) => "PaintWall"
  | Teleport(_teleport) => "Teleport"
  | PlayerHealOther(_playerHealOther) => "PlayerHealOther"
  | DimensionsUpdate(_dimensionsUpdate) => "DimensionsUpdate"
  | ClientUuid(_clientUuid) => "ClientUuid"
  | ChestName(_chestName) => "ChestName"
  | CatchNpc(_catchNpc) => "CatchNpc"
  | ReleaseNpc(_releaseNpc) => "ReleaseNpc"
  | TravellingMerchantInventory(_travellingMerchantInventory) => "TravellingMerchantInventory"
  | TeleportationPotion(_teleportationPotion) => "TeleportationPotion"
  | AnglerQuest(_anglerQuest) => "AnglerQuest"
  | AnglerQuestComplete(_anglerQuestComplete) => "AnglerQuestComplete"
  | AnglerQuestsCompletedAmount(_anglerQuestsCompletedAmount) => "AnglerQuestsCompletedAmount"
  | TemporaryAnimationCreate(_temporaryAnimationCreate) => "TemporaryAnimationCreate"
  | InvasionProgressReport(_invasionProgressReport) => "InvasionProgressReport"
  | ObjectPlace(_objectPlace) => "ObjectPlace"
  | PlayerChestIndexSync(_playerChestIndexSync) => "PlayerChestIndexSync"
  | CombatNumberCreate(_combatNumberCreate) => "CombatNumberCreate"
  | NetModuleLoad(_netModuleLoad) => "NetModuleLoad"
  | NpcKillCount(_npcKillCount) => "NpcKillCount"
  | PlayerStealth(_playerStealth) => "PlayerStealth"
  | ItemForceIntoNearestChest(_itemForceIntoNearestChest) => "ItemForceIntoNearestChest"
  | TileEntityUpdate(_tileEntityUpdate) => "TileEntityUpdate"
  | TileEntityPlace(_tileEntityPlace) => "TileEntityPlace"
  | ItemDropModify(_itemDropModify) => "ItemDropModify"
  | ItemFramePlace(_itemFramePlace) => "ItemFramePlace"
  | ItemDropInstancedUpdate(_itemDropInstancedUpdate) => "ItemDropInstancedUpdate"
  | EmoteBubble(_emoteBubble) => "EmoteBubble"
  | ExtraValueSync(_extraValueSync) => "ExtraValueSync"
  | SocialHandshake(_socialHandshake) => "SocialHandshake"
  | Unused(_unused) => "Unused"
  | PortalKill(_portalKill) => "PortalKill"
  | PlayerTeleportPortal(_playerTeleportPortal) => "PlayerTeleportPortal"
  | NpcKilledNotification(_npcKilledNotification) => "NpcKilledNotification"
  | EventNotification(_eventNotification) => "EventNotification"
  | MinionTargetUpdate(_minionTargetUpdate) => "MinionTargetUpdate"
  | NpcTeleportPortal(_npcTeleportPortal) => "NpcTeleportPortal"
  | ShieldStrengthsUpdate(_shieldStrengthsUpdate) => "ShieldStrengthsUpdate"
  | NebulaLevelUp(_nebulaLevelUp) => "NebulaLevelUp"
  | MoonLordCountdown(_moonLordCountdown) => "MoonLordCountdown"
  | NpcShopItem(_npcShopItem) => "NpcShopItem"
  | GemLockToggle(_gemLockToggle) => "GemLockToggle"
  | SmokePoof(_smokePoof) => "SmokePoof"
  | ChatMessageSmart(_chatMessageSmart) => "ChatMessageSmart"
  | WiredCannonShot(_wiredCannonShot) => "WiredCannonShot"
  | MassWireOperation(_massWireOperation) => "MassWireOperation"
  | MassWireOperationPay(_massWireOperationPay) => "MassWireOperationPay"
  | PartyToggle(_partyToggle) => "PartyToggle"
  | TreeGrowFx(_treeGrowFx) => "TreeGrowFx"
  | CrystalInvasionStart(_crystalInvasionStart) => "CrystalInvasionStart"
  | CrystalInvasionWipeAll(_crystalInvasionWipeAll) => "CrystalInvasionWipeAll"
  | MinionAttackTargetUpdate(_minionAttackTargetUpdate) => "MinionAttackTargetUpdate"
  | CrystalInvasionSendWaitTime(_crystalInvasionSendWaitTime) => "CrystalInvasionSendWaitTime"
  | PlayerDamage(_playerDamage) => "PlayerDamage"
  | PlayerDeath(_playerDeath) => "PlayerDeath"
  | CombatTextCreate(_combatTextCreate) => "CombatTextCreate"
  | Emoji(_emoji) => "Emoji"
  | TileEntityDisplayDollItemSync(_tileEntityDisplayDollItemSync) => "TileEntityDisplayDollItemSync"
  | TileEntityInteractionRequest(_tileEntityInteractionRequest) => "TileEntityInteractionRequest"
  | WeaponsRackTryPlacing(_weaponsRackTryPlacing) => "WeaponsRackTryPlacing"
  | TileEntityHatRackItemSync(_tileEntityHatRackItemSync) => "TileEntityHatRackItemSync"
  | TilePickingSync(_tilePickingSync) => "TilePickingSync"
  | RevengeMarkerSync(_revengeMarkerSync) => "RevengeMarkerSync"
  | RevengeMarkerRemove(_revengeMarkerRemove) => "RevengeMarkerRemove"
  | GolfBallLandInCup(_golfBallLandInCup) => "GolfBallLandInCup"
  | ClientFinishConnectingToServer(_clientFinishConnectingToServer) => "ClientFinishConnectingToServer"
  | NpcFishOut(_npcFishOut) => "NpcFishOut"
  | NpcTamper(_npcTamper) => "NpcTamper"
  | LegacySoundPlay(_legacySoundPlay) => "LegacySoundPlay"
  | FoodPlatterTryPlacing(_foodPlatterTryPlacing) => "FoodPlatterTryPlacing"
  | PlayerLuckFactorsUpdate(_playerLuckFactorsUpdate) => "PlayerLuckFactorsUpdate"
  | PlayerDead(_playerDead) => "PlayerDead"
  | CavernMonsterTypeSync(_cavernMonsterTypeSync) => "CavernMonsterTypeSync"
  | NpcBuffRemovalRequest(_npcBuffRemovalRequest) => "NpcBuffRemovalRequest"
  | ClientSyncedInventory(_clientSyncedInventory) => "ClientSyncedInventory"
  | CountsAsHostForGameplaySet(_countsAsHostForGameplaySet) => "CountsAsHostForGameplaySet"
  }
}

