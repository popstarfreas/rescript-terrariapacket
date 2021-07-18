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

let toBuffer = (packet: t, _fromServer: bool): option<NodeJs.Buffer.t> => {
  switch packet {
  | ConnectRequest(connectRequest) => Some(ConnectRequest.toBuffer(connectRequest))
  | Disconnect(disconnect) => Some(Disconnect.toBuffer(disconnect))
  | PlayerSlotSet(playerSlotSet) => Some(PlayerSlotSet.toBuffer(playerSlotSet))
  | PlayerInfo(playerInfo) => Some(PlayerInfo.toBuffer(playerInfo))
  | PlayerInventorySlot(playerInventorySlot) =>
    Some(PlayerInventorySlot.toBuffer(playerInventorySlot))
  | WorldDataRequest(worldDataRequest) => Some(WorldDataRequest.toBuffer(worldDataRequest))
  | WorldInfo(worldInfo) => Some(WorldInfo.toBuffer(worldInfo))
  | InitialTileSectionsRequest(initialTileSectionsRequest) =>
    Some(InitialTileSectionsRequest.toBuffer(initialTileSectionsRequest))
  | Status(status) => Some(Status.toBuffer(status))
  | TileSectionSend(tileSectionSend) => Some(TileSectionSend.toBuffer(tileSectionSend))
  | TileSectionFrame(_tileSectionFrame) => None
  | PlayerSpawn(playerSpawn) => Some(PlayerSpawn.toBuffer(playerSpawn))
  | PlayerUpdate(_playerUpdate) => None
  | PlayerActive(playerActive) => Some(PlayerActive.toBuffer(playerActive))
  | PlayerHealth(playerHealth) => Some(PlayerHealth.toBuffer(playerHealth))
  | TileModify(_tileModify) => None
  | TimeSet(_timeSet) => None
  | DoorUse(_doorUse) => None
  | TileSquareSend(tileSquareSend) => Some(TileSquareSend.toBuffer(tileSquareSend))
  | ItemDropUpdate(itemDropUpdate) => Some(ItemDropUpdate.toBuffer(itemDropUpdate))
  | ItemOwner(_itemOwner) => None
  | NpcUpdate(npcUpdate) => Some(NpcUpdate.toBuffer(npcUpdate))
  | NpcItemStrike(_npcItemStrike) => None
  | ProjectileSync(projectileSync) => Some(ProjectileSync.toBuffer(projectileSync))
  | NpcStrike(_npcStrike) => None
  | ProjectileDestroy(projectileDestroy) => Some(ProjectileDestroy.toBuffer(projectileDestroy))
  | PvpToggle(_pvpToggle) => None
  | ChestOpen(_chestOpen) => None
  | ChestItem(_chestItem) => None
  | ActiveContainerSync(_activeContainerSync) => None
  | ChestPlace(_chestPlace) => None
  | HealEffect(_healEffect) => None
  | Zones(_zones) => None
  | PasswordRequired(_passwordRequired) => None
  | PasswordSend(_passwordSend) => None
  | ItemOwnerRemove(_itemOwnerRemove) => None
  | NpcTalk(_npcTalk) => None
  | PlayerAnimation(_playerAnimation) => None
  | PlayerMana(playerMana) => Some(PlayerMana.toBuffer(playerMana))
  | ManaEffect(_manaEffect) => None
  | PlayerTeam(_playerTeam) => None
  | SignRead(_signRead) => None
  | SignNew(_signNew) => None
  | LiquidSet(_liquidSet) => None
  | PlayerSpawnSelf(_playerSpawnSelf) => None
  | PlayerBuffsSet(_playerBuffsSet) => None
  | NpcSpecialEffect(_npcSpecialEffect) => None
  | ChestUnlock(_chestUnlock) => None
  | NpcBuffAdd(_npcBuffAdd) => None
  | NpcBuffUpdate(_npcBuffUpdate) => None
  | PlayerBuffAdd(_playerBuffAdd) => None
  | NpcNameUpdate(_npcNameUpdate) => None
  | GoodEvilUpdate(_goodEvilUpdate) => None
  | HarpPlay(_harpPlay) => None
  | SwitchHit(_switchHit) => None
  | NpcHomeUpdate(_npcHomeUpdate) => None
  | BossOrInvasionSpawn(_bossOrInvasionSpawn) => None
  | PlayerDodge(_playerDodge) => None
  | PaintTile(_paintTile) => None
  | PaintWall(_paintWall) => None
  | Teleport(_teleport) => None
  | PlayerHealOther(_playerHealOther) => None
  | DimensionsUpdate(dimensionsUpdate) => Some(DimensionsUpdate.toBuffer(dimensionsUpdate))
  | ClientUuid(_clientUuid) => None
  | ChestName(_chestName) => None
  | CatchNpc(_catchNpc) => None
  | ReleaseNpc(_releaseNpc) => None
  | TravellingMerchantInventory(_travellingMerchantInventory) => None
  | TeleportationPotion(_teleportationPotion) => None
  | AnglerQuest(_anglerQuest) => None
  | AnglerQuestComplete(_anglerQuestComplete) => None
  | AnglerQuestsCompletedAmount(_anglerQuestsCompletedAmount) => None
  | TemporaryAnimationCreate(_temporaryAnimationCreate) => None
  | InvasionProgressReport(_invasionProgressReport) => None
  | ObjectPlace(_objectPlace) => None
  | PlayerChestIndexSync(_playerChestIndexSync) => None
  | CombatNumberCreate(_combatNumberCreate) => None
  | NetModuleLoad(netModuleLoad) => Some(NetModuleLoad.toBuffer(netModuleLoad))
  | NpcKillCount(_npcKillCount) => None
  | PlayerStealth(_playerStealth) => None
  | ItemForceIntoNearestChest(_itemForceIntoNearestChest) => None
  | TileEntityUpdate(_tileEntityUpdate) => None
  | TileEntityPlace(_tileEntityPlace) => None
  | ItemDropModify(_itemDropModify) => None
  | ItemFramePlace(_itemFramePlace) => None
  | ItemDropInstancedUpdate(_itemDropInstancedUpdate) => None
  | EmoteBubble(_emoteBubble) => None
  | ExtraValueSync(_extraValueSync) => None
  | SocialHandshake(_socialHandshake) => None
  | Unused(_unused) => None
  | PortalKill(_portalKill) => None
  | PlayerTeleportPortal(_playerTeleportPortal) => None
  | NpcKilledNotification(_npcKilledNotification) => None
  | EventNotification(_eventNotification) => None
  | MinionTargetUpdate(_minionTargetUpdate) => None
  | NpcTeleportPortal(_npcTeleportPortal) => None
  | ShieldStrengthsUpdate(_shieldStrengthsUpdate) => None
  | NebulaLevelUp(_nebulaLevelUp) => None
  | MoonLordCountdown(_moonLordCountdown) => None
  | NpcShopItem(_npcShopItem) => None
  | GemLockToggle(_gemLockToggle) => None
  | SmokePoof(_smokePoof) => None
  | ChatMessageSmart(_chatMessageSmart) => None
  | WiredCannonShot(_wiredCannonShot) => None
  | MassWireOperation(_massWireOperation) => None
  | MassWireOperationPay(_massWireOperationPay) => None
  | PartyToggle(_partyToggle) => None
  | TreeGrowFx(_treeGrowFx) => None
  | CrystalInvasionStart(_crystalInvasionStart) => None
  | CrystalInvasionWipeAll(_crystalInvasionWipeAll) => None
  | MinionAttackTargetUpdate(_minionAttackTargetUpdate) => None
  | CrystalInvasionSendWaitTime(_crystalInvasionSendWaitTime) => None
  | PlayerDamage(_playerDamage) => None
  | PlayerDeath(_playerDeath) => None
  | CombatTextCreate(_combatTextCreate) => None
  | Emoji(_emoji) => None
  | TileEntityDisplayDollItemSync(_tileEntityDisplayDollItemSync) => None
  | TileEntityInteractionRequest(_tileEntityInteractionRequest) => None
  | WeaponsRackTryPlacing(_weaponsRackTryPlacing) => None
  | TileEntityHatRackItemSync(_tileEntityHatRackItemSync) => None
  | TilePickingSync(_tilePickingSync) => None
  | RevengeMarkerSync(_revengeMarkerSync) => None
  | RevengeMarkerRemove(_revengeMarkerRemove) => None
  | GolfBallLandInCup(_golfBallLandInCup) => None
  | ClientFinishConnectingToServer(_clientFinishConnectingToServer) => None
  | NpcFishOut(_npcFishOut) => None
  | NpcTamper(_npcTamper) => None
  | LegacySoundPlay(_legacySoundPlay) => None
  | FoodPlatterTryPlacing(_foodPlatterTryPlacing) => None
  | PlayerLuckFactorsUpdate(_playerLuckFactorsUpdate) => None
  | PlayerDead(_playerDead) => None
  | CavernMonsterTypeSync(_cavernMonsterTypeSync) => None
  | NpcBuffRemovalRequest(_npcBuffRemovalRequest) => None
  | ClientSyncedInventory(_clientSyncedInventory) => None
  | CountsAsHostForGameplaySet(_countsAsHostForGameplaySet) => None
  }
}

let serialize: ISerializer.serialize<t> = (~parsed: IParser.parsed<t>, ~fromServer: bool) =>
  switch parsed {
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
  | NpcUpdate({npcSlotId, npcTypeId, x, y, vx, vy, target, directionX, directionY}) =>
    `NpcUpdate(npcSlotId: ${npcSlotId->Belt.Int.toString}, npcTypeId: ${npcTypeId->Belt.Int.toString}, x: ${x->Belt.Float.toString}, y: ${y->Belt.Float.toString}, vx: ${vx->Belt.Float.toString}, vy: ${vy->Belt.Float.toString}, target: ${target->Belt.Int.toString}, directionX: ${directionX->string_of_bool}, directionY: ${directionY->string_of_bool})`
  | NpcItemStrike(_npcItemStrike) => "NpcItemStrike"
  | ProjectileSync({projectileId, x, y, vx, vy, owner, projectileType, damage, knockback}) =>
    `ProjectileSync(projectileId: ${projectileId->Belt.Int.toString}, x: ${x->Belt.Float.toString}, y: ${y->Belt.Float.toString}, vx: ${vx->Belt.Float.toString}, vy: ${vy->Belt.Float.toString}, owner: ${owner->Belt.Int.toString}, projectileType: ${projectileType->Belt.Int.toString}, damage: ${damage->Belt.Option.mapWithDefault(
        "None",
        damage => damage->Belt.Int.toString,
      )}, knockback: ${knockback->Belt.Option.mapWithDefault("None", knockback =>
        knockback->Belt.Float.toString
      )})`
  | NpcStrike(_npcStrike) => "NpcStrike"
  | ProjectileDestroy(projectileDestroy) =>
    `ProjectileDestroy(projectileId: ${projectileDestroy.projectileId->Belt.Int.toString}, owner: ${projectileDestroy.owner->Belt.Int.toString})`
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
  | NetModuleLoad(netModuleLoad) =>
    "NetModuleLoad(" ++
    switch netModuleLoad {
    | Liquid(_liquid) => "Liquid"
    | ClientText(_commandId, message) => "ClientText(" ++ message ++ ")"
    | ServerText(_playerId, text, _color) =>
      "ServerText(" ++ text->PacketFactory.NetworkText.text ++ ")"
    | Ping(_position) => "Ping"
    | Ambience(_ambience) => "Ambience"
    | Bestiary(_bestiary) => "Bestiary"
    | CreativeUnlocks(_creativeUnlock) => "CreativeUnlocks"
    | CreativePower(_creativePower) => "CreativePower"
    | CreativeUnlocksPlayerReport(_unlockReport) => "CreativeUnlocksPlayerReport"
    | TeleportPylon(_teleportPylon) => "TeleportPylon"
    | Particles(_particle) => "Particles"
    | CreativePowerPermissions(_creativePowerPermission) => "CreativePowerPermissions"
    } ++ ")"
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
  | ClientFinishConnectingToServer(
      _clientFinishConnectingToServer,
    ) => "ClientFinishConnectingToServer"
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
