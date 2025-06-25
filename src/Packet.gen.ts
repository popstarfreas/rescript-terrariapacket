/* TypeScript file generated from Packet.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type { t as Lazy_t } from '../src/shims/Lazy.shim';

import type { t as Packet_ActiveContainerSync_t } from '../src/packet/Packet_ActiveContainerSync.gen';

import type { t as Packet_AnglerQuestComplete_t } from '../src/packet/Packet_AnglerQuestComplete.gen';

import type { t as Packet_AnglerQuest_t } from '../src/packet/Packet_AnglerQuest.gen';

import type { t as Packet_AnglerQuestsCompletedAmount_t } from '../src/packet/Packet_AnglerQuestsCompletedAmount.gen';

import type { t as Packet_BossOrInvasionSpawn_t } from '../src/packet/Packet_BossOrInvasionSpawn.gen';

import type { t as Packet_CavernMonsterTypeSync_t } from '../src/packet/Packet_CavernMonsterTypeSync.gen';

import type { t as Packet_ChatMessageSmart_t } from '../src/packet/Packet_ChatMessageSmart.gen';

import type { t as Packet_ChestItem_t } from '../src/packet/Packet_ChestItem.gen';

import type { t as Packet_ChestName_t } from '../src/packet/Packet_ChestName.gen';

import type { t as Packet_ChestOpen_t } from '../src/packet/Packet_ChestOpen.gen';

import type { t as Packet_ChestOrTempleUnlock_t } from '../src/packet/Packet_ChestOrTempleUnlock.gen';

import type { t as Packet_ChestPlace_t } from '../src/packet/Packet_ChestPlace.gen';

import type { t as Packet_ClientFinishConnectingToServer_t } from '../src/packet/Packet_ClientFinishConnectingToServer.gen';

import type { t as Packet_ClientSyncedInventory_t } from '../src/packet/Packet_ClientSyncedInventory.gen';

import type { t as Packet_ClientUuid_t } from '../src/packet/Packet_ClientUuid.gen';

import type { t as Packet_CombatNumberCreate_t } from '../src/packet/Packet_CombatNumberCreate.gen';

import type { t as Packet_CombatTextCreate_t } from '../src/packet/Packet_CombatTextCreate.gen';

import type { t as Packet_ConnectRequest_t } from '../src/packet/Packet_ConnectRequest.gen';

import type { t as Packet_CountsAsHostForGameplaySet_t } from '../src/packet/Packet_CountsAsHostForGameplaySet.gen';

import type { t as Packet_CreditsOrSlimeTransform_t } from '../src/packet/Packet_CreditsOrSlimeTransform.gen';

import type { t as Packet_CrystalInvasionSendWaitTime_t } from '../src/packet/Packet_CrystalInvasionSendWaitTime.gen';

import type { t as Packet_CrystalInvasionStart_t } from '../src/packet/Packet_CrystalInvasionStart.gen';

import type { t as Packet_CrystalInvasionWipeAll_t } from '../src/packet/Packet_CrystalInvasionWipeAll.gen';

import type { t as Packet_DimensionsUpdate_t } from '../src/packet/Packet_DimensionsUpdate.gen';

import type { t as Packet_Disconnect_t } from '../src/packet/Packet_Disconnect';

import type { t as Packet_DoorUse_t } from '../src/packet/Packet_DoorUse.gen';

import type { t as Packet_DungeonDefendersEventAttemptSkipWait_t } from '../src/packet/Packet_DungeonDefendersEventAttemptSkipWait.gen';

import type { t as Packet_Emoji_t } from '../src/packet/Packet_Emoji.gen';

import type { t as Packet_EmoteBubble_t } from '../src/packet/Packet_EmoteBubble.gen';

import type { t as Packet_EventNotification_t } from '../src/packet/Packet_EventNotification.gen';

import type { t as Packet_ExtraValueSync_t } from '../src/packet/Packet_ExtraValueSync.gen';

import type { t as Packet_FoodPlatterTryPlacing_t } from '../src/packet/Packet_FoodPlatterTryPlacing.gen';

import type { t as Packet_GemLockToggle_t } from '../src/packet/Packet_GemLockToggle.gen';

import type { t as Packet_GolfBallLandInCup_t } from '../src/packet/Packet_GolfBallLandInCup.gen';

import type { t as Packet_GoodEvilUpdate_t } from '../src/packet/Packet_GoodEvilUpdate.gen';

import type { t as Packet_HarpPlay_t } from '../src/packet/Packet_HarpPlay.gen';

import type { t as Packet_HaveDryadDoStardewAnimation_t } from '../src/packet/Packet_HaveDryadDoStardewAnimation.gen';

import type { t as Packet_HealEffect_t } from '../src/packet/Packet_HealEffect.gen';

import type { t as Packet_InitialTileSectionsRequest_t } from '../src/packet/Packet_InitialTileSectionsRequest.gen';

import type { t as Packet_InvasionProgressReport_t } from '../src/packet/Packet_InvasionProgressReport.gen';

import type { t as Packet_ItemDropInstancedUpdate_t } from '../src/packet/Packet_ItemDropInstancedUpdate.gen';

import type { t as Packet_ItemDropModify_t } from '../src/packet/Packet_ItemDropModify.gen';

import type { t as Packet_ItemDropProtectedUpdate_t } from '../src/packet/Packet_ItemDropProtectedUpdate.gen';

import type { t as Packet_ItemDropShimmeredUpdate_t } from '../src/packet/Packet_ItemDropShimmeredUpdate.gen';

import type { t as Packet_ItemDropUpdate_t } from '../src/packet/Packet_ItemDropUpdate.gen';

import type { t as Packet_ItemForceIntoNearestChest_t } from '../src/packet/Packet_ItemForceIntoNearestChest.gen';

import type { t as Packet_ItemFramePlace_t } from '../src/packet/Packet_ItemFramePlace.gen';

import type { t as Packet_ItemOwnerRemove_t } from '../src/packet/Packet_ItemOwnerRemove.gen';

import type { t as Packet_ItemOwner_t } from '../src/packet/Packet_ItemOwner.gen';

import type { t as Packet_LegacySoundPlay_t } from '../src/packet/Packet_LegacySoundPlay.gen';

import type { t as Packet_LiquidSet_t } from '../src/packet/Packet_LiquidSet.gen';

import type { t as Packet_LoadoutSwitch_t } from '../src/packet/Packet_LoadoutSwitch.gen';

import type { t as Packet_LucyAxeMessage_t } from '../src/packet/Packet_LucyAxeMessage.gen';

import type { t as Packet_ManaEffect_t } from '../src/packet/Packet_ManaEffect.gen';

import type { t as Packet_MassWireOperationPay_t } from '../src/packet/Packet_MassWireOperationPay.gen';

import type { t as Packet_MassWireOperation_t } from '../src/packet/Packet_MassWireOperation.gen';

import type { t as Packet_MinionAttackTargetUpdate_t } from '../src/packet/Packet_MinionAttackTargetUpdate.gen';

import type { t as Packet_MinionTargetUpdate_t } from '../src/packet/Packet_MinionTargetUpdate.gen';

import type { t as Packet_MoonLordCountdown_t } from '../src/packet/Packet_MoonLordCountdown.gen';

import type { t as Packet_NebulaLevelUp_t } from '../src/packet/Packet_NebulaLevelUp.gen';

import type { NetModuleLoad } from './packet/Packet_NetModuleLoad';

import type { t as Packet_NpcBuffAdd_t } from '../src/packet/Packet_NpcBuffAdd.gen';

import type { t as Packet_NpcBuffRemovalRequest_t } from '../src/packet/Packet_NpcBuffRemovalRequest.gen';

import type { t as Packet_NpcBuffUpdate_t } from '../src/packet/Packet_NpcBuffUpdate.gen';

import type { t as Packet_NpcCatch_t } from '../src/packet/Packet_NpcCatch.gen';

import type { t as Packet_NpcFishOut_t } from '../src/packet/Packet_NpcFishOut.gen';

import type { t as Packet_NpcHomeUpdate_t } from '../src/packet/Packet_NpcHomeUpdate.gen';

import type { t as Packet_NpcItemStrike_t } from '../src/packet/Packet_NpcItemStrike.gen';

import type { t as Packet_NpcKillCount_t } from '../src/packet/Packet_NpcKillCount.gen';

import type { t as Packet_NpcKilledNotification_t } from '../src/packet/Packet_NpcKilledNotification.gen';

import type { t as Packet_NpcNameUpdate_t } from '../src/packet/Packet_NpcNameUpdate.gen';

import type { t as Packet_NpcRelease_t } from '../src/packet/Packet_NpcRelease.gen';

import type { t as Packet_NpcShopItem_t } from '../src/packet/Packet_NpcShopItem.gen';

import type { t as Packet_NpcSpecialEffect_t } from '../src/packet/Packet_NpcSpecialEffect.gen';

import type { t as Packet_NpcStrike_t } from '../src/packet/Packet_NpcStrike.gen';

import type { t as Packet_NpcTalk_t } from '../src/packet/Packet_NpcTalk.gen';

import type { t as Packet_NpcTamper_t } from '../src/packet/Packet_NpcTamper.gen';

import type { t as Packet_NpcTeleportPortal_t } from '../src/packet/Packet_NpcTeleportPortal.gen';

import type { t as Packet_NpcUpdate_t } from '../src/packet/Packet_NpcUpdate.gen';

import type { t as Packet_ObjectPlace_t } from '../src/packet/Packet_ObjectPlace.gen';

import type { t as Packet_PartyToggle_t } from '../src/packet/Packet_PartyToggle.gen';

import type { t as Packet_PasswordRequired_t } from '../src/packet/Packet_PasswordRequired.gen';

import type { t as Packet_PasswordSend_t } from '../src/packet/Packet_PasswordSend.gen';

import type { t as Packet_PiggyBankVoidLensUpdate_t } from '../src/packet/Packet_PiggyBankVoidLensUpdate.gen';

import type { t as Packet_PlayerActive_t } from '../src/packet/Packet_PlayerActive';

import type { t as Packet_PlayerAnimation_t } from '../src/packet/Packet_PlayerAnimation.gen';

import type { t as Packet_PlayerBuffAdd_t } from '../src/packet/Packet_PlayerBuffAdd.gen';

import type { t as Packet_PlayerBuffsSet_t } from '../src/packet/Packet_PlayerBuffsSet.gen';

import type { t as Packet_PlayerChestIndexSync_t } from '../src/packet/Packet_PlayerChestIndexSync.gen';

import type { t as Packet_PlayerDamage_t } from '../src/packet/Packet_PlayerDamage.gen';

import type { t as Packet_PlayerDead_t } from '../src/packet/Packet_PlayerDead.gen';

import type { t as Packet_PlayerDeath_t } from '../src/packet/Packet_PlayerDeath.gen';

import type { t as Packet_PlayerDodge_t } from '../src/packet/Packet_PlayerDodge.gen';

import type { t as Packet_PlayerHealOther_t } from '../src/packet/Packet_PlayerHealOther.gen';

import type { t as Packet_PlayerHealth_t } from '../src/packet/Packet_PlayerHealth.gen';

import type { t as Packet_PlayerInfo_t } from '../src/packet/Packet_PlayerInfo.gen';

import type { t as Packet_PlayerInventorySlot_t } from '../src/packet/Packet_PlayerInventorySlot';

import type { t as Packet_PlayerLuckFactorsUpdate_t } from '../src/packet/Packet_PlayerLuckFactorsUpdate.gen';

import type { t as Packet_PlayerMana_t } from '../src/packet/Packet_PlayerMana.gen';

import type { t as Packet_PlayerSlotSet_t } from '../src/packet/Packet_PlayerSlotSet.gen';

import type { t as Packet_PlayerSpawnSelf_t } from '../src/packet/Packet_PlayerSpawnSelf.gen';

import type { t as Packet_PlayerSpawn_t } from '../src/packet/Packet_PlayerSpawn.gen';

import type { t as Packet_PlayerStealth_t } from '../src/packet/Packet_PlayerStealth.gen';

import type { t as Packet_PlayerTeam_t } from '../src/packet/Packet_PlayerTeam.gen';

import type { t as Packet_PlayerTeleportPortal_t } from '../src/packet/Packet_PlayerTeleportPortal.gen';

import type { t as Packet_PlayerUpdate_t } from '../src/packet/Packet_PlayerUpdate.gen';

import type { t as Packet_PortalKill_t } from '../src/packet/Packet_PortalKill.gen';

import type { t as Packet_ProjectileDestroy_t } from '../src/packet/Packet_ProjectileDestroy.gen';

import type { t as Packet_ProjectileSync_t } from '../src/packet/Packet_ProjectileSync.gen';

import type { t as Packet_PvpToggle_t } from '../src/packet/Packet_PvpToggle.gen';

import type { t as Packet_RevengeMarkerRemove_t } from '../src/packet/Packet_RevengeMarkerRemove.gen';

import type { t as Packet_RevengeMarkerSync_t } from '../src/packet/Packet_RevengeMarkerSync.gen';

import type { t as Packet_ShieldStrengthsUpdate_t } from '../src/packet/Packet_ShieldStrengthsUpdate.gen';

import type { t as Packet_ShimmerEffectOrCoinLuck_t } from '../src/packet/Packet_ShimmerEffectOrCoinLuck.gen';

import type { t as Packet_SignNew_t } from '../src/packet/Packet_SignNew.gen';

import type { t as Packet_SignRead_t } from '../src/packet/Packet_SignRead.gen';

import type { t as Packet_SmokePoof_t } from '../src/packet/Packet_SmokePoof.gen';

import type { t as Packet_SocialHandshake_t } from '../src/packet/Packet_SocialHandshake.gen';

import type { t as Packet_Status_t } from '../src/packet/Packet_Status.gen';

import type { t as Packet_SwitchHit_t } from '../src/packet/Packet_SwitchHit.gen';

import type { t as Packet_Teleport_t } from '../src/packet/Packet_Teleport.gen';

import type { t as Packet_TeleportationPotion_t } from '../src/packet/Packet_TeleportationPotion.gen';

import type { t as Packet_TemporaryAnimationCreate_t } from '../src/packet/Packet_TemporaryAnimationCreate.gen';

import type { t as Packet_TileEntityDisplayDollItemSync_t } from '../src/packet/Packet_TileEntityDisplayDollItemSync.gen';

import type { t as Packet_TileEntityHatRackItemSync_t } from '../src/packet/Packet_TileEntityHatRackItemSync.gen';

import type { t as Packet_TileEntityInteractionRequest_t } from '../src/packet/Packet_TileEntityInteractionRequest.gen';

import type { t as Packet_TileEntityPlace_t } from '../src/packet/Packet_TileEntityPlace.gen';

import type { t as Packet_TileEntityUpdate_t } from '../src/packet/Packet_TileEntityUpdate.gen';

import type { t as Packet_TileModify_t } from '../src/packet/Packet_TileModify.gen';

import type { t as Packet_TilePaint_t } from '../src/packet/Packet_TilePaint.gen';

import type { t as Packet_TilePickingSync_t } from '../src/packet/Packet_TilePickingSync.gen';

import type { t as Packet_TileSectionFrame_t } from '../src/packet/Packet_TileSectionFrame.gen';

import type { t as Packet_TileSectionSend_t } from '../src/packet/Packet_TileSectionSend.gen';

import type { t as Packet_TileSquareSend_t } from '../src/packet/Packet_TileSquareSend.gen';

import type { t as Packet_TimeSet_t } from '../src/packet/Packet_TimeSet.gen';

import type { t as Packet_TravellingMerchantInventory_t } from '../src/packet/Packet_TravellingMerchantInventory.gen';

import type { t as Packet_TreeGrowFx_t } from '../src/packet/Packet_TreeGrowFx.gen';

import type { t as Packet_Unused_t } from '../src/packet/Packet_Unused.gen';

import type { t as Packet_WallPaint_t } from '../src/packet/Packet_WallPaint.gen';

import type { t as Packet_WeaponsRackTryPlacing_t } from '../src/packet/Packet_WeaponsRackTryPlacing.gen';

import type { t as Packet_WiredCannonShot_t } from '../src/packet/Packet_WiredCannonShot.gen';

import type { t as Packet_WorldDataRequest_t } from '../src/packet/Packet_WorldDataRequest.gen';

import type { WorldInfo as Packet_WorldInfo_t } from '../src/packet/Packet_WorldInfo';

import type { t as Packet_Zones_t } from '../src/packet/Packet_Zones.gen';

export type t =
  { TAG: "ConnectRequest"; _0: Packet_ConnectRequest_t }
  | { TAG: "Disconnect"; _0: Packet_Disconnect_t }
  | { TAG: "PlayerSlotSet"; _0: Packet_PlayerSlotSet_t }
  | { TAG: "PlayerInfo"; _0: Packet_PlayerInfo_t }
  | { TAG: "PlayerInventorySlot"; _0: Packet_PlayerInventorySlot_t }
  | { TAG: "WorldDataRequest"; _0: Packet_WorldDataRequest_t }
  | { TAG: "WorldInfo"; _0: Packet_WorldInfo_t }
  | { TAG: "InitialTileSectionsRequest"; _0: Packet_InitialTileSectionsRequest_t }
  | { TAG: "Status"; _0: Packet_Status_t }
  | { TAG: "TileSectionSend"; _0: Packet_TileSectionSend_t }
  | { TAG: "TileSectionFrame"; _0: Packet_TileSectionFrame_t }
  | { TAG: "PlayerSpawn"; _0: Packet_PlayerSpawn_t }
  | { TAG: "PlayerUpdate"; _0: Packet_PlayerUpdate_t }
  | { TAG: "PlayerActive"; _0: Packet_PlayerActive_t }
  | { TAG: "PlayerHealth"; _0: Packet_PlayerHealth_t }
  | { TAG: "TileModify"; _0: Packet_TileModify_t }
  | { TAG: "TimeSet"; _0: Packet_TimeSet_t }
  | { TAG: "DoorUse"; _0: Packet_DoorUse_t }
  | { TAG: "TileSquareSend"; _0: Packet_TileSquareSend_t }
  | { TAG: "ItemDropUpdate"; _0: Packet_ItemDropUpdate_t }
  | { TAG: "ItemOwner"; _0: Packet_ItemOwner_t }
  | { TAG: "NpcUpdate"; _0: Packet_NpcUpdate_t }
  | { TAG: "NpcItemStrike"; _0: Packet_NpcItemStrike_t }
  | { TAG: "ProjectileSync"; _0: Packet_ProjectileSync_t }
  | { TAG: "NpcStrike"; _0: Packet_NpcStrike_t }
  | { TAG: "ProjectileDestroy"; _0: Packet_ProjectileDestroy_t }
  | { TAG: "PvpToggle"; _0: Packet_PvpToggle_t }
  | { TAG: "ChestOpen"; _0: Packet_ChestOpen_t }
  | { TAG: "ChestItem"; _0: Packet_ChestItem_t }
  | { TAG: "ActiveContainerSync"; _0: Packet_ActiveContainerSync_t }
  | { TAG: "ChestPlace"; _0: Packet_ChestPlace_t }
  | { TAG: "HealEffect"; _0: Packet_HealEffect_t }
  | { TAG: "Zones"; _0: Packet_Zones_t }
  | { TAG: "PasswordRequired"; _0: Packet_PasswordRequired_t }
  | { TAG: "PasswordSend"; _0: Packet_PasswordSend_t }
  | { TAG: "ItemOwnerRemove"; _0: Packet_ItemOwnerRemove_t }
  | { TAG: "NpcTalk"; _0: Packet_NpcTalk_t }
  | { TAG: "PlayerAnimation"; _0: Packet_PlayerAnimation_t }
  | { TAG: "PlayerMana"; _0: Packet_PlayerMana_t }
  | { TAG: "ManaEffect"; _0: Packet_ManaEffect_t }
  | { TAG: "PlayerTeam"; _0: Packet_PlayerTeam_t }
  | { TAG: "SignRead"; _0: Packet_SignRead_t }
  | { TAG: "SignNew"; _0: Packet_SignNew_t }
  | { TAG: "LiquidSet"; _0: Packet_LiquidSet_t }
  | { TAG: "PlayerSpawnSelf"; _0: Packet_PlayerSpawnSelf_t }
  | { TAG: "PlayerBuffsSet"; _0: Packet_PlayerBuffsSet_t }
  | { TAG: "NpcSpecialEffect"; _0: Packet_NpcSpecialEffect_t }
  | { TAG: "ChestOrTempleUnlock"; _0: Packet_ChestOrTempleUnlock_t }
  | { TAG: "NpcBuffAdd"; _0: Packet_NpcBuffAdd_t }
  | { TAG: "NpcBuffUpdate"; _0: Packet_NpcBuffUpdate_t }
  | { TAG: "PlayerBuffAdd"; _0: Packet_PlayerBuffAdd_t }
  | { TAG: "NpcNameUpdate"; _0: Packet_NpcNameUpdate_t }
  | { TAG: "GoodEvilUpdate"; _0: Packet_GoodEvilUpdate_t }
  | { TAG: "HarpPlay"; _0: Packet_HarpPlay_t }
  | { TAG: "SwitchHit"; _0: Packet_SwitchHit_t }
  | { TAG: "NpcHomeUpdate"; _0: Packet_NpcHomeUpdate_t }
  | { TAG: "BossOrInvasionSpawn"; _0: Packet_BossOrInvasionSpawn_t }
  | { TAG: "PlayerDodge"; _0: Packet_PlayerDodge_t }
  | { TAG: "TilePaint"; _0: Packet_TilePaint_t }
  | { TAG: "WallPaint"; _0: Packet_WallPaint_t }
  | { TAG: "Teleport"; _0: Packet_Teleport_t }
  | { TAG: "PlayerHealOther"; _0: Packet_PlayerHealOther_t }
  | { TAG: "DimensionsUpdate"; _0: Packet_DimensionsUpdate_t }
  | { TAG: "ClientUuid"; _0: Packet_ClientUuid_t }
  | { TAG: "ChestName"; _0: Packet_ChestName_t }
  | { TAG: "NpcCatch"; _0: Packet_NpcCatch_t }
  | { TAG: "NpcRelease"; _0: Packet_NpcRelease_t }
  | { TAG: "TravellingMerchantInventory"; _0: Packet_TravellingMerchantInventory_t }
  | { TAG: "TeleportationPotion"; _0: Packet_TeleportationPotion_t }
  | { TAG: "AnglerQuest"; _0: Packet_AnglerQuest_t }
  | { TAG: "AnglerQuestComplete"; _0: Packet_AnglerQuestComplete_t }
  | { TAG: "AnglerQuestsCompletedAmount"; _0: Packet_AnglerQuestsCompletedAmount_t }
  | { TAG: "TemporaryAnimationCreate"; _0: Packet_TemporaryAnimationCreate_t }
  | { TAG: "InvasionProgressReport"; _0: Packet_InvasionProgressReport_t }
  | { TAG: "ObjectPlace"; _0: Packet_ObjectPlace_t }
  | { TAG: "PlayerChestIndexSync"; _0: Packet_PlayerChestIndexSync_t }
  | { TAG: "CombatNumberCreate"; _0: Packet_CombatNumberCreate_t }
  | { TAG: "NetModuleLoad"; _0: NetModuleLoad }
  | { TAG: "NpcKillCount"; _0: Packet_NpcKillCount_t }
  | { TAG: "PlayerStealth"; _0: Packet_PlayerStealth_t }
  | { TAG: "ItemForceIntoNearestChest"; _0: Packet_ItemForceIntoNearestChest_t }
  | { TAG: "TileEntityUpdate"; _0: Packet_TileEntityUpdate_t }
  | { TAG: "TileEntityPlace"; _0: Packet_TileEntityPlace_t }
  | { TAG: "ItemDropModify"; _0: Packet_ItemDropModify_t }
  | { TAG: "ItemFramePlace"; _0: Packet_ItemFramePlace_t }
  | { TAG: "ItemDropInstancedUpdate"; _0: Packet_ItemDropInstancedUpdate_t }
  | { TAG: "EmoteBubble"; _0: Packet_EmoteBubble_t }
  | { TAG: "ExtraValueSync"; _0: Packet_ExtraValueSync_t }
  | { TAG: "SocialHandshake"; _0: Packet_SocialHandshake_t }
  | { TAG: "Unused"; _0: Packet_Unused_t }
  | { TAG: "PortalKill"; _0: Packet_PortalKill_t }
  | { TAG: "PlayerTeleportPortal"; _0: Packet_PlayerTeleportPortal_t }
  | { TAG: "NpcKilledNotification"; _0: Packet_NpcKilledNotification_t }
  | { TAG: "EventNotification"; _0: Packet_EventNotification_t }
  | { TAG: "MinionTargetUpdate"; _0: Packet_MinionTargetUpdate_t }
  | { TAG: "NpcTeleportPortal"; _0: Packet_NpcTeleportPortal_t }
  | { TAG: "ShieldStrengthsUpdate"; _0: Packet_ShieldStrengthsUpdate_t }
  | { TAG: "NebulaLevelUp"; _0: Packet_NebulaLevelUp_t }
  | { TAG: "MoonLordCountdown"; _0: Packet_MoonLordCountdown_t }
  | { TAG: "NpcShopItem"; _0: Packet_NpcShopItem_t }
  | { TAG: "GemLockToggle"; _0: Packet_GemLockToggle_t }
  | { TAG: "SmokePoof"; _0: Packet_SmokePoof_t }
  | { TAG: "ChatMessageSmart"; _0: Packet_ChatMessageSmart_t }
  | { TAG: "WiredCannonShot"; _0: Packet_WiredCannonShot_t }
  | { TAG: "MassWireOperation"; _0: Packet_MassWireOperation_t }
  | { TAG: "MassWireOperationPay"; _0: Packet_MassWireOperationPay_t }
  | { TAG: "PartyToggle"; _0: Packet_PartyToggle_t }
  | { TAG: "TreeGrowFx"; _0: Packet_TreeGrowFx_t }
  | { TAG: "CrystalInvasionStart"; _0: Packet_CrystalInvasionStart_t }
  | { TAG: "CrystalInvasionWipeAll"; _0: Packet_CrystalInvasionWipeAll_t }
  | { TAG: "MinionAttackTargetUpdate"; _0: Packet_MinionAttackTargetUpdate_t }
  | { TAG: "CrystalInvasionSendWaitTime"; _0: Packet_CrystalInvasionSendWaitTime_t }
  | { TAG: "PlayerDamage"; _0: Packet_PlayerDamage_t }
  | { TAG: "PlayerDeath"; _0: Packet_PlayerDeath_t }
  | { TAG: "CombatTextCreate"; _0: Packet_CombatTextCreate_t }
  | { TAG: "Emoji"; _0: Packet_Emoji_t }
  | { TAG: "TileEntityDisplayDollItemSync"; _0: Packet_TileEntityDisplayDollItemSync_t }
  | { TAG: "TileEntityInteractionRequest"; _0: Packet_TileEntityInteractionRequest_t }
  | { TAG: "WeaponsRackTryPlacing"; _0: Packet_WeaponsRackTryPlacing_t }
  | { TAG: "TileEntityHatRackItemSync"; _0: Packet_TileEntityHatRackItemSync_t }
  | { TAG: "TilePickingSync"; _0: Packet_TilePickingSync_t }
  | { TAG: "RevengeMarkerSync"; _0: Packet_RevengeMarkerSync_t }
  | { TAG: "RevengeMarkerRemove"; _0: Packet_RevengeMarkerRemove_t }
  | { TAG: "GolfBallLandInCup"; _0: Packet_GolfBallLandInCup_t }
  | { TAG: "ClientFinishConnectingToServer"; _0: Packet_ClientFinishConnectingToServer_t }
  | { TAG: "NpcFishOut"; _0: Packet_NpcFishOut_t }
  | { TAG: "NpcTamper"; _0: Packet_NpcTamper_t }
  | { TAG: "LegacySoundPlay"; _0: Packet_LegacySoundPlay_t }
  | { TAG: "FoodPlatterTryPlacing"; _0: Packet_FoodPlatterTryPlacing_t }
  | { TAG: "PlayerLuckFactorsUpdate"; _0: Packet_PlayerLuckFactorsUpdate_t }
  | { TAG: "PlayerDead"; _0: Packet_PlayerDead_t }
  | { TAG: "CavernMonsterTypeSync"; _0: Packet_CavernMonsterTypeSync_t }
  | { TAG: "NpcBuffRemovalRequest"; _0: Packet_NpcBuffRemovalRequest_t }
  | { TAG: "ClientSyncedInventory"; _0: Packet_ClientSyncedInventory_t }
  | { TAG: "CountsAsHostForGameplaySet"; _0: Packet_CountsAsHostForGameplaySet_t }
  | { TAG: "CreditsOrSlimeTransform"; _0: Packet_CreditsOrSlimeTransform_t }
  | { TAG: "LucyAxeMessage"; _0: Packet_LucyAxeMessage_t }
  | { TAG: "PiggyBankVoidLensUpdate"; _0: Packet_PiggyBankVoidLensUpdate_t }
  | { TAG: "DungeonDefendersEventAttemptSkipWait"; _0: Packet_DungeonDefendersEventAttemptSkipWait_t }
  | { TAG: "HaveDryadDoStardewAnimation"; _0: Packet_HaveDryadDoStardewAnimation_t }
  | { TAG: "ItemDropShimmeredUpdate"; _0: Packet_ItemDropShimmeredUpdate_t }
  | { TAG: "ShimmerEffectOrCoinLuck"; _0: Packet_ShimmerEffectOrCoinLuck_t }
  | { TAG: "LoadoutSwitch"; _0: Packet_LoadoutSwitch_t }
  | { TAG: "ItemDropProtectedUpdate"; _0: Packet_ItemDropProtectedUpdate_t };

export type LazyPacket_t =
  { TAG: "ConnectRequest"; _0: Lazy_t<(undefined | Packet_ConnectRequest_t)> }
  | { TAG: "Disconnect"; _0: Lazy_t<(undefined | Packet_Disconnect_t)> }
  | { TAG: "PlayerSlotSet"; _0: Lazy_t<(undefined | Packet_PlayerSlotSet_t)> }
  | { TAG: "PlayerInfo"; _0: Lazy_t<(undefined | Packet_PlayerInfo_t)> }
  | { TAG: "PlayerInventorySlot"; _0: Lazy_t<(undefined | Packet_PlayerInventorySlot_t)> }
  | { TAG: "WorldDataRequest"; _0: Lazy_t<(undefined | Packet_WorldDataRequest_t)> }
  | { TAG: "WorldInfo"; _0: Lazy_t<(undefined | Packet_WorldInfo_t)> }
  | { TAG: "InitialTileSectionsRequest"; _0: Lazy_t<(undefined | Packet_InitialTileSectionsRequest_t)> }
  | { TAG: "Status"; _0: Lazy_t<(undefined | Packet_Status_t)> }
  | { TAG: "TileSectionSend"; _0: Lazy_t<(undefined | Packet_TileSectionSend_t)> }
  | { TAG: "TileSectionFrame"; _0: Lazy_t<(undefined | Packet_TileSectionFrame_t)> }
  | { TAG: "PlayerSpawn"; _0: Lazy_t<(undefined | Packet_PlayerSpawn_t)> }
  | { TAG: "PlayerUpdate"; _0: Lazy_t<(undefined | Packet_PlayerUpdate_t)> }
  | { TAG: "PlayerActive"; _0: Lazy_t<(undefined | Packet_PlayerActive_t)> }
  | { TAG: "PlayerHealth"; _0: Lazy_t<(undefined | Packet_PlayerHealth_t)> }
  | { TAG: "TileModify"; _0: Lazy_t<(undefined | Packet_TileModify_t)> }
  | { TAG: "TimeSet"; _0: Lazy_t<(undefined | Packet_TimeSet_t)> }
  | { TAG: "DoorUse"; _0: Lazy_t<(undefined | Packet_DoorUse_t)> }
  | { TAG: "TileSquareSend"; _0: Lazy_t<(undefined | Packet_TileSquareSend_t)> }
  | { TAG: "ItemDropUpdate"; _0: Lazy_t<(undefined | Packet_ItemDropUpdate_t)> }
  | { TAG: "ItemOwner"; _0: Lazy_t<(undefined | Packet_ItemOwner_t)> }
  | { TAG: "NpcUpdate"; _0: Lazy_t<(undefined | Packet_NpcUpdate_t)> }
  | { TAG: "NpcItemStrike"; _0: Lazy_t<(undefined | Packet_NpcItemStrike_t)> }
  | { TAG: "ProjectileSync"; _0: Lazy_t<(undefined | Packet_ProjectileSync_t)> }
  | { TAG: "NpcStrike"; _0: Lazy_t<(undefined | Packet_NpcStrike_t)> }
  | { TAG: "ProjectileDestroy"; _0: Lazy_t<(undefined | Packet_ProjectileDestroy_t)> }
  | { TAG: "PvpToggle"; _0: Lazy_t<(undefined | Packet_PvpToggle_t)> }
  | { TAG: "ChestOpen"; _0: Lazy_t<(undefined | Packet_ChestOpen_t)> }
  | { TAG: "ChestItem"; _0: Lazy_t<(undefined | Packet_ChestItem_t)> }
  | { TAG: "ActiveContainerSync"; _0: Lazy_t<(undefined | Packet_ActiveContainerSync_t)> }
  | { TAG: "ChestPlace"; _0: Lazy_t<(undefined | Packet_ChestPlace_t)> }
  | { TAG: "HealEffect"; _0: Lazy_t<(undefined | Packet_HealEffect_t)> }
  | { TAG: "Zones"; _0: Lazy_t<(undefined | Packet_Zones_t)> }
  | { TAG: "PasswordRequired"; _0: Lazy_t<(undefined | Packet_PasswordRequired_t)> }
  | { TAG: "PasswordSend"; _0: Lazy_t<(undefined | Packet_PasswordSend_t)> }
  | { TAG: "ItemOwnerRemove"; _0: Lazy_t<(undefined | Packet_ItemOwnerRemove_t)> }
  | { TAG: "NpcTalk"; _0: Lazy_t<(undefined | Packet_NpcTalk_t)> }
  | { TAG: "PlayerAnimation"; _0: Lazy_t<(undefined | Packet_PlayerAnimation_t)> }
  | { TAG: "PlayerMana"; _0: Lazy_t<(undefined | Packet_PlayerMana_t)> }
  | { TAG: "ManaEffect"; _0: Lazy_t<(undefined | Packet_ManaEffect_t)> }
  | { TAG: "PlayerTeam"; _0: Lazy_t<(undefined | Packet_PlayerTeam_t)> }
  | { TAG: "SignRead"; _0: Lazy_t<(undefined | Packet_SignRead_t)> }
  | { TAG: "SignNew"; _0: Lazy_t<(undefined | Packet_SignNew_t)> }
  | { TAG: "LiquidSet"; _0: Lazy_t<(undefined | Packet_LiquidSet_t)> }
  | { TAG: "PlayerSpawnSelf"; _0: Lazy_t<(undefined | Packet_PlayerSpawnSelf_t)> }
  | { TAG: "PlayerBuffsSet"; _0: Lazy_t<(undefined | Packet_PlayerBuffsSet_t)> }
  | { TAG: "NpcSpecialEffect"; _0: Lazy_t<(undefined | Packet_NpcSpecialEffect_t)> }
  | { TAG: "ChestOrTempleUnlock"; _0: Lazy_t<(undefined | Packet_ChestOrTempleUnlock_t)> }
  | { TAG: "NpcBuffAdd"; _0: Lazy_t<(undefined | Packet_NpcBuffAdd_t)> }
  | { TAG: "NpcBuffUpdate"; _0: Lazy_t<(undefined | Packet_NpcBuffUpdate_t)> }
  | { TAG: "PlayerBuffAdd"; _0: Lazy_t<(undefined | Packet_PlayerBuffAdd_t)> }
  | { TAG: "NpcNameUpdate"; _0: Lazy_t<(undefined | Packet_NpcNameUpdate_t)> }
  | { TAG: "GoodEvilUpdate"; _0: Lazy_t<(undefined | Packet_GoodEvilUpdate_t)> }
  | { TAG: "HarpPlay"; _0: Lazy_t<(undefined | Packet_HarpPlay_t)> }
  | { TAG: "SwitchHit"; _0: Lazy_t<(undefined | Packet_SwitchHit_t)> }
  | { TAG: "NpcHomeUpdate"; _0: Lazy_t<(undefined | Packet_NpcHomeUpdate_t)> }
  | { TAG: "BossOrInvasionSpawn"; _0: Lazy_t<(undefined | Packet_BossOrInvasionSpawn_t)> }
  | { TAG: "PlayerDodge"; _0: Lazy_t<(undefined | Packet_PlayerDodge_t)> }
  | { TAG: "TilePaint"; _0: Lazy_t<(undefined | Packet_TilePaint_t)> }
  | { TAG: "WallPaint"; _0: Lazy_t<(undefined | Packet_WallPaint_t)> }
  | { TAG: "Teleport"; _0: Lazy_t<(undefined | Packet_Teleport_t)> }
  | { TAG: "PlayerHealOther"; _0: Lazy_t<(undefined | Packet_PlayerHealOther_t)> }
  | { TAG: "DimensionsUpdate"; _0: Lazy_t<(undefined | Packet_DimensionsUpdate_t)> }
  | { TAG: "ClientUuid"; _0: Lazy_t<(undefined | Packet_ClientUuid_t)> }
  | { TAG: "ChestName"; _0: Lazy_t<(undefined | Packet_ChestName_t)> }
  | { TAG: "NpcCatch"; _0: Lazy_t<(undefined | Packet_NpcCatch_t)> }
  | { TAG: "NpcRelease"; _0: Lazy_t<(undefined | Packet_NpcRelease_t)> }
  | { TAG: "TravellingMerchantInventory"; _0: Lazy_t<(undefined | Packet_TravellingMerchantInventory_t)> }
  | { TAG: "TeleportationPotion"; _0: Lazy_t<(undefined | Packet_TeleportationPotion_t)> }
  | { TAG: "AnglerQuest"; _0: Lazy_t<(undefined | Packet_AnglerQuest_t)> }
  | { TAG: "AnglerQuestComplete"; _0: Lazy_t<(undefined | Packet_AnglerQuestComplete_t)> }
  | { TAG: "AnglerQuestsCompletedAmount"; _0: Lazy_t<(undefined | Packet_AnglerQuestsCompletedAmount_t)> }
  | { TAG: "TemporaryAnimationCreate"; _0: Lazy_t<(undefined | Packet_TemporaryAnimationCreate_t)> }
  | { TAG: "InvasionProgressReport"; _0: Lazy_t<(undefined | Packet_InvasionProgressReport_t)> }
  | { TAG: "ObjectPlace"; _0: Lazy_t<(undefined | Packet_ObjectPlace_t)> }
  | { TAG: "PlayerChestIndexSync"; _0: Lazy_t<(undefined | Packet_PlayerChestIndexSync_t)> }
  | { TAG: "CombatNumberCreate"; _0: Lazy_t<(undefined | Packet_CombatNumberCreate_t)> }
  | { TAG: "NetModuleLoad"; _0: Lazy_t<(undefined | NetModuleLoad)> }
  | { TAG: "NpcKillCount"; _0: Lazy_t<(undefined | Packet_NpcKillCount_t)> }
  | { TAG: "PlayerStealth"; _0: Lazy_t<(undefined | Packet_PlayerStealth_t)> }
  | { TAG: "ItemForceIntoNearestChest"; _0: Lazy_t<(undefined | Packet_ItemForceIntoNearestChest_t)> }
  | { TAG: "TileEntityUpdate"; _0: Lazy_t<(undefined | Packet_TileEntityUpdate_t)> }
  | { TAG: "TileEntityPlace"; _0: Lazy_t<(undefined | Packet_TileEntityPlace_t)> }
  | { TAG: "ItemDropModify"; _0: Lazy_t<(undefined | Packet_ItemDropModify_t)> }
  | { TAG: "ItemFramePlace"; _0: Lazy_t<(undefined | Packet_ItemFramePlace_t)> }
  | { TAG: "ItemDropInstancedUpdate"; _0: Lazy_t<(undefined | Packet_ItemDropInstancedUpdate_t)> }
  | { TAG: "EmoteBubble"; _0: Lazy_t<(undefined | Packet_EmoteBubble_t)> }
  | { TAG: "ExtraValueSync"; _0: Lazy_t<(undefined | Packet_ExtraValueSync_t)> }
  | { TAG: "SocialHandshake"; _0: Lazy_t<(undefined | Packet_SocialHandshake_t)> }
  | { TAG: "Unused"; _0: Lazy_t<(undefined | Packet_Unused_t)> }
  | { TAG: "PortalKill"; _0: Lazy_t<(undefined | Packet_PortalKill_t)> }
  | { TAG: "PlayerTeleportPortal"; _0: Lazy_t<(undefined | Packet_PlayerTeleportPortal_t)> }
  | { TAG: "NpcKilledNotification"; _0: Lazy_t<(undefined | Packet_NpcKilledNotification_t)> }
  | { TAG: "EventNotification"; _0: Lazy_t<(undefined | Packet_EventNotification_t)> }
  | { TAG: "MinionTargetUpdate"; _0: Lazy_t<(undefined | Packet_MinionTargetUpdate_t)> }
  | { TAG: "NpcTeleportPortal"; _0: Lazy_t<(undefined | Packet_NpcTeleportPortal_t)> }
  | { TAG: "ShieldStrengthsUpdate"; _0: Lazy_t<(undefined | Packet_ShieldStrengthsUpdate_t)> }
  | { TAG: "NebulaLevelUp"; _0: Lazy_t<(undefined | Packet_NebulaLevelUp_t)> }
  | { TAG: "MoonLordCountdown"; _0: Lazy_t<(undefined | Packet_MoonLordCountdown_t)> }
  | { TAG: "NpcShopItem"; _0: Lazy_t<(undefined | Packet_NpcShopItem_t)> }
  | { TAG: "GemLockToggle"; _0: Lazy_t<(undefined | Packet_GemLockToggle_t)> }
  | { TAG: "SmokePoof"; _0: Lazy_t<(undefined | Packet_SmokePoof_t)> }
  | { TAG: "ChatMessageSmart"; _0: Lazy_t<(undefined | Packet_ChatMessageSmart_t)> }
  | { TAG: "WiredCannonShot"; _0: Lazy_t<(undefined | Packet_WiredCannonShot_t)> }
  | { TAG: "MassWireOperation"; _0: Lazy_t<(undefined | Packet_MassWireOperation_t)> }
  | { TAG: "MassWireOperationPay"; _0: Lazy_t<(undefined | Packet_MassWireOperationPay_t)> }
  | { TAG: "PartyToggle"; _0: Lazy_t<(undefined | Packet_PartyToggle_t)> }
  | { TAG: "TreeGrowFx"; _0: Lazy_t<(undefined | Packet_TreeGrowFx_t)> }
  | { TAG: "CrystalInvasionStart"; _0: Lazy_t<(undefined | Packet_CrystalInvasionStart_t)> }
  | { TAG: "CrystalInvasionWipeAll"; _0: Lazy_t<(undefined | Packet_CrystalInvasionWipeAll_t)> }
  | { TAG: "MinionAttackTargetUpdate"; _0: Lazy_t<(undefined | Packet_MinionAttackTargetUpdate_t)> }
  | { TAG: "CrystalInvasionSendWaitTime"; _0: Lazy_t<(undefined | Packet_CrystalInvasionSendWaitTime_t)> }
  | { TAG: "PlayerDamage"; _0: Lazy_t<(undefined | Packet_PlayerDamage_t)> }
  | { TAG: "PlayerDeath"; _0: Lazy_t<(undefined | Packet_PlayerDeath_t)> }
  | { TAG: "CombatTextCreate"; _0: Lazy_t<(undefined | Packet_CombatTextCreate_t)> }
  | { TAG: "Emoji"; _0: Lazy_t<(undefined | Packet_Emoji_t)> }
  | { TAG: "TileEntityDisplayDollItemSync"; _0: Lazy_t<(undefined | Packet_TileEntityDisplayDollItemSync_t)> }
  | { TAG: "TileEntityInteractionRequest"; _0: Lazy_t<(undefined | Packet_TileEntityInteractionRequest_t)> }
  | { TAG: "WeaponsRackTryPlacing"; _0: Lazy_t<(undefined | Packet_WeaponsRackTryPlacing_t)> }
  | { TAG: "TileEntityHatRackItemSync"; _0: Lazy_t<(undefined | Packet_TileEntityHatRackItemSync_t)> }
  | { TAG: "TilePickingSync"; _0: Lazy_t<(undefined | Packet_TilePickingSync_t)> }
  | { TAG: "RevengeMarkerSync"; _0: Lazy_t<(undefined | Packet_RevengeMarkerSync_t)> }
  | { TAG: "RevengeMarkerRemove"; _0: Lazy_t<(undefined | Packet_RevengeMarkerRemove_t)> }
  | { TAG: "GolfBallLandInCup"; _0: Lazy_t<(undefined | Packet_GolfBallLandInCup_t)> }
  | { TAG: "ClientFinishConnectingToServer"; _0: Lazy_t<(undefined | Packet_ClientFinishConnectingToServer_t)> }
  | { TAG: "NpcFishOut"; _0: Lazy_t<(undefined | Packet_NpcFishOut_t)> }
  | { TAG: "NpcTamper"; _0: Lazy_t<(undefined | Packet_NpcTamper_t)> }
  | { TAG: "LegacySoundPlay"; _0: Lazy_t<(undefined | Packet_LegacySoundPlay_t)> }
  | { TAG: "FoodPlatterTryPlacing"; _0: Lazy_t<(undefined | Packet_FoodPlatterTryPlacing_t)> }
  | { TAG: "PlayerLuckFactorsUpdate"; _0: Lazy_t<(undefined | Packet_PlayerLuckFactorsUpdate_t)> }
  | { TAG: "PlayerDead"; _0: Lazy_t<(undefined | Packet_PlayerDead_t)> }
  | { TAG: "CavernMonsterTypeSync"; _0: Lazy_t<(undefined | Packet_CavernMonsterTypeSync_t)> }
  | { TAG: "NpcBuffRemovalRequest"; _0: Lazy_t<(undefined | Packet_NpcBuffRemovalRequest_t)> }
  | { TAG: "ClientSyncedInventory"; _0: Lazy_t<(undefined | Packet_ClientSyncedInventory_t)> }
  | { TAG: "CountsAsHostForGameplaySet"; _0: Lazy_t<(undefined | Packet_CountsAsHostForGameplaySet_t)> }
  | { TAG: "CreditsOrSlimeTransform"; _0: Lazy_t<(undefined | Packet_CreditsOrSlimeTransform_t)> }
  | { TAG: "LucyAxeMessage"; _0: Lazy_t<(undefined | Packet_LucyAxeMessage_t)> }
  | { TAG: "PiggyBankVoidLensUpdate"; _0: Lazy_t<(undefined | Packet_PiggyBankVoidLensUpdate_t)> }
  | { TAG: "DungeonDefendersEventAttemptSkipWait"; _0: Lazy_t<(undefined | Packet_DungeonDefendersEventAttemptSkipWait_t)> }
  | { TAG: "HaveDryadDoStardewAnimation"; _0: Lazy_t<(undefined | Packet_HaveDryadDoStardewAnimation_t)> }
  | { TAG: "ItemDropShimmeredUpdate"; _0: Lazy_t<(undefined | Packet_ItemDropShimmeredUpdate_t)> }
  | { TAG: "ShimmerEffectOrCoinLuck"; _0: Lazy_t<(undefined | Packet_ShimmerEffectOrCoinLuck_t)> }
  | { TAG: "LoadoutSwitch"; _0: Lazy_t<(undefined | Packet_LoadoutSwitch_t)> }
  | { TAG: "ItemDropProtectedUpdate"; _0: Lazy_t<(undefined | Packet_ItemDropProtectedUpdate_t)> };
