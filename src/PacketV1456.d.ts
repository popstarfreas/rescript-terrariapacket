/* TypeScript file generated from PacketV1456.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type { t as Lazy_t } from '../src/shims/Lazy.js';
import type { Result } from '../src/shims/Result.js';
import type { readError } from "./ErrorAwarePacketReader.js";
import type { PackError } from "./ErrorAwarePacketWriter.js";

import type { t as Packet_ActiveContainerSync_t } from '../src/packetv1449/PacketV1449_ActiveContainerSync.js';

import type { t as Packet_AnglerQuestComplete_t } from '../src/packetv1449/PacketV1449_AnglerQuestComplete.js';

import type { t as Packet_AnglerQuest_t } from '../src/packetv1449/PacketV1449_AnglerQuest.js';

import type { t as Packet_AnglerQuestsCompletedAmount_t } from '../src/packetv1449/PacketV1449_AnglerQuestsCompletedAmount.js';

import type { t as Packet_BossOrInvasionSpawn_t } from '../src/packetv1449/PacketV1449_BossOrInvasionSpawn.js';

import type { t as Packet_CavernMonsterTypeSync_t } from '../src/packetv1449/PacketV1449_CavernMonsterTypeSync.js';

import type { t as Packet_ChatMessageSmart_t } from '../src/packetv1449/PacketV1449_ChatMessageSmart.js';

import type { t as Packet_ChestItem_t } from '../src/packetv1449/PacketV1449_ChestItem.js';

import type { t as Packet_ChestName_t } from '../src/packetv1449/PacketV1449_ChestName.js';

import type { t as Packet_ChestOpen_t } from '../src/packetv1449/PacketV1449_ChestOpen.js';

import type { t as Packet_ChestOrTempleUnlock_t } from '../src/packetv1449/PacketV1449_ChestOrTempleUnlock.js';

import type { t as Packet_ChestPlace_t } from '../src/packetv1449/PacketV1449_ChestPlace.js';

import type { t as Packet_ClientFinishConnectingToServer_t } from '../src/packetv1449/PacketV1449_ClientFinishConnectingToServer.js';

import type { t as Packet_ClientSyncedInventory_t } from '../src/packetv1449/PacketV1449_ClientSyncedInventory.js';

import type { t as Packet_ClientUuid_t } from '../src/packetv1449/PacketV1449_ClientUuid.js';

import type { t as Packet_CombatNumberCreate_t } from '../src/packetv1449/PacketV1449_CombatNumberCreate.js';

import type { t as Packet_CombatTextCreate_t } from '../src/packetv1449/PacketV1449_CombatTextCreate.js';

import type { t as Packet_ConnectRequest_t } from '../src/packetv1449/PacketV1449_ConnectRequest.js';

import type { t as Packet_CountsAsHostForGameplaySet_t } from '../src/packetv1449/PacketV1449_CountsAsHostForGameplaySet.js';

import type { t as Packet_CreditsOrSlimeTransform_t } from '../src/packetv1449/PacketV1449_CreditsOrSlimeTransform.js';

import type { t as Packet_CrystalInvasionSendWaitTime_t } from '../src/packetv1449/PacketV1449_CrystalInvasionSendWaitTime.js';

import type { t as Packet_CrystalInvasionStart_t } from '../src/packetv1449/PacketV1449_CrystalInvasionStart.js';

import type { t as Packet_CrystalInvasionWipeAll_t } from '../src/packetv1449/PacketV1449_CrystalInvasionWipeAll.js';

import type { t as Packet_DimensionsUpdate_t } from '../src/packetv1449/PacketV1449_DimensionsUpdate.js';

import type { t as Packet_Disconnect_t } from '../src/packetv1449/PacketV1449_Disconnect.js';

import type { t as Packet_DoorUse_t } from '../src/packetv1449/PacketV1449_DoorUse.js';

import type { t as Packet_DungeonDefendersEventAttemptSkipWait_t } from '../src/packetv1449/PacketV1449_DungeonDefendersEventAttemptSkipWait.js';

import type { t as Packet_Emoji_t } from '../src/packetv1449/PacketV1449_Emoji.js';

import type { t as Packet_EmoteBubble_t } from '../src/packetv1449/PacketV1449_EmoteBubble.js';

import type { t as Packet_EventNotification_t } from '../src/packetv1449/PacketV1449_EventNotification.js';

import type { t as Packet_ExtraValueSync_t } from '../src/packetv1449/PacketV1449_ExtraValueSync.js';

import type { t as Packet_FoodPlatterTryPlacing_t } from '../src/packetv1449/PacketV1449_FoodPlatterTryPlacing.js';

import type { t as Packet_GemLockToggle_t } from '../src/packetv1449/PacketV1449_GemLockToggle.js';

import type { t as Packet_GolfBallLandInCup_t } from '../src/packetv1449/PacketV1449_GolfBallLandInCup.js';

import type { t as Packet_GoodEvilUpdate_t } from '../src/packetv1449/PacketV1449_GoodEvilUpdate.js';

import type { t as Packet_HarpPlay_t } from '../src/packetv1449/PacketV1449_HarpPlay.js';

import type { t as Packet_HaveDryadDoStardewAnimation_t } from '../src/packetv1449/PacketV1449_HaveDryadDoStardewAnimation.js';

import type { t as Packet_HealEffect_t } from '../src/packetv1449/PacketV1449_HealEffect.js';

import type { t as Packet_InitialTileSectionsRequest_t } from './packetv1456/PacketV1456_InitialTileSectionsRequest.js';

import type { t as Packet_InvasionProgressReport_t } from '../src/packetv1449/PacketV1449_InvasionProgressReport.js';

import type { t as Packet_ItemDropInstancedUpdate_t } from '../src/packetv1449/PacketV1449_ItemDropInstancedUpdate.js';

import type { t as Packet_ItemDropModify_t } from '../src/packetv1449/PacketV1449_ItemDropModify.js';

import type { t as Packet_ItemDropProtectedUpdate_t } from '../src/packetv1449/PacketV1449_ItemDropProtectedUpdate.js';

import type { t as Packet_ItemDropShimmeredUpdate_t } from '../src/packetv1449/PacketV1449_ItemDropShimmeredUpdate.js';

import type { t as Packet_ItemDropUpdate_t } from '../src/packetv1449/PacketV1449_ItemDropUpdate.js';

import type { t as Packet_ItemForceIntoNearestChest_t } from './packetv1456/PacketV1456_ItemForceIntoNearestChest.js';

import type { t as Packet_ItemFramePlace_t } from '../src/packetv1449/PacketV1449_ItemFramePlace.js';

import type { t as Packet_ItemOwnerRemove_t } from '../src/packetv1449/PacketV1449_ItemOwnerRemove.js';

import type { t as Packet_ItemOwner_t } from './packetv1456/PacketV1456_ItemOwner.js';

import type { t as Packet_LegacySoundPlay_t } from '../src/packetv1449/PacketV1449_LegacySoundPlay.js';

import type { t as Packet_LiquidSet_t } from '../src/packetv1449/PacketV1449_LiquidSet.js';

import type { t as Packet_LoadoutSwitch_t } from '../src/packetv1449/PacketV1449_LoadoutSwitch.js';

import type { t as Packet_LucyAxeMessage_t } from '../src/packetv1449/PacketV1449_LucyAxeMessage.js';

import type { t as Packet_ManaEffect_t } from '../src/packetv1449/PacketV1449_ManaEffect.js';

import type { t as Packet_MassWireOperationPay_t } from '../src/packetv1449/PacketV1449_MassWireOperationPay.js';

import type { t as Packet_MassWireOperation_t } from '../src/packetv1449/PacketV1449_MassWireOperation.js';

import type { t as Packet_MinionAttackTargetUpdate_t } from '../src/packetv1449/PacketV1449_MinionAttackTargetUpdate.js';

import type { t as Packet_MinionTargetUpdate_t } from '../src/packetv1449/PacketV1449_MinionTargetUpdate.js';

import type { t as Packet_MoonLordCountdown_t } from '../src/packetv1449/PacketV1449_MoonLordCountdown.js';

import type { t as Packet_NebulaLevelUp_t } from '../src/packetv1449/PacketV1449_NebulaLevelUp.js';

import type { t as NetModuleLoad } from './packetv1456/PacketV1456_NetModuleLoad.js';

import type { t as Packet_NpcBuffAdd_t } from '../src/packetv1449/PacketV1449_NpcBuffAdd.js';

import type { t as Packet_NpcBuffRemovalRequest_t } from '../src/packetv1449/PacketV1449_NpcBuffRemovalRequest.js';

import type { t as Packet_NpcBuffUpdate_t } from './packetv1456/PacketV1456_NpcBuffUpdate.js';

import type { t as Packet_NpcCatch_t } from '../src/packetv1449/PacketV1449_NpcCatch.js';

import type { t as Packet_NpcFishOut_t } from '../src/packetv1449/PacketV1449_NpcFishOut.js';

import type { t as Packet_NpcHomeUpdate_t } from '../src/packetv1449/PacketV1449_NpcHomeUpdate.js';

import type { t as Packet_NpcItemStrike_t } from '../src/packetv1449/PacketV1449_NpcItemStrike.js';

import type { t as Packet_NpcKillCount_t } from '../src/packetv1449/PacketV1449_NpcKillCount.js';

import type { t as Packet_NpcKilledNotification_t } from '../src/packetv1449/PacketV1449_NpcKilledNotification.js';

import type { t as Packet_NpcNameUpdate_t } from '../src/packetv1449/PacketV1449_NpcNameUpdate.js';

import type { t as Packet_NpcRelease_t } from '../src/packetv1449/PacketV1449_NpcRelease.js';

import type { t as Packet_NpcShopItem_t } from '../src/packetv1449/PacketV1449_NpcShopItem.js';

import type { t as Packet_NpcSpecialEffect_t } from '../src/packetv1449/PacketV1449_NpcSpecialEffect.js';

import type { t as Packet_NpcStrike_t } from '../src/packetv1449/PacketV1449_NpcStrike.js';

import type { t as Packet_NpcTalk_t } from '../src/packetv1449/PacketV1449_NpcTalk.js';

import type { t as Packet_NpcTamper_t } from '../src/packetv1449/PacketV1449_NpcTamper.js';

import type { t as Packet_NpcTeleportPortal_t } from '../src/packetv1449/PacketV1449_NpcTeleportPortal.js';

import type { t as Packet_NpcUpdate_t } from './packetv1456/PacketV1456_NpcUpdate.js';

import type { t as Packet_ObjectPlace_t } from '../src/packetv1449/PacketV1449_ObjectPlace.js';

import type { t as Packet_PartyToggle_t } from '../src/packetv1449/PacketV1449_PartyToggle.js';

import type { t as Packet_PasswordRequired_t } from '../src/packetv1449/PacketV1449_PasswordRequired.js';

import type { t as Packet_PasswordSend_t } from '../src/packetv1449/PacketV1449_PasswordSend.js';

import type { t as Packet_PiggyBankVoidLensUpdate_t } from '../src/packetv1449/PacketV1449_PiggyBankVoidLensUpdate.js';

import type { t as Packet_PlayerActive_t } from '../src/packetv1449/PacketV1449_PlayerActive.js';

import type { t as Packet_PlayerAnimation_t } from '../src/packetv1449/PacketV1449_PlayerAnimation.js';

import type { t as Packet_PlayerBuffAdd_t } from '../src/packetv1449/PacketV1449_PlayerBuffAdd.js';

import type { t as Packet_PlayerBuffsSet_t } from './packetv1456/PacketV1456_PlayerBuffsSet.js';

import type { t as Packet_PlayerChestIndexSync_t } from '../src/packetv1449/PacketV1449_PlayerChestIndexSync.js';

import type { t as Packet_PlayerDamage_t } from '../src/packetv1449/PacketV1449_PlayerDamage.js';

import type { t as Packet_PlayerDead_t } from '../src/packetv1449/PacketV1449_PlayerDead.js';

import type { t as Packet_PlayerDeath_t } from '../src/packetv1449/PacketV1449_PlayerDeath.js';

import type { t as Packet_PlayerDodge_t } from '../src/packetv1449/PacketV1449_PlayerDodge.js';

import type { t as Packet_PlayerHealOther_t } from '../src/packetv1449/PacketV1449_PlayerHealOther.js';

import type { t as Packet_PlayerHealth_t } from '../src/packetv1449/PacketV1449_PlayerHealth.js';

import type { t as Packet_PlayerInfo_t } from './packetv1456/PacketV1456_PlayerInfo.js';

import type { t as Packet_PlayerInventorySlot_t } from './packetv1456/PacketV1456_PlayerInventorySlot.js';

import type { t as Packet_PlayerLuckFactorsUpdate_t } from './packetv1456/PacketV1456_PlayerLuckFactorsUpdate.js';

import type { t as Packet_PlayerMana_t } from '../src/packetv1449/PacketV1449_PlayerMana.js';

import type { t as Packet_PlayerSlotSet_t } from '../src/packetv1449/PacketV1449_PlayerSlotSet.js';

import type { t as Packet_PlayerSpawnSelf_t } from '../src/packetv1449/PacketV1449_PlayerSpawnSelf.js';

import type { t as Packet_PlayerSpawn_t } from './packetv1456/PacketV1456_PlayerSpawn.js';

import type { t as Packet_PlayerStealth_t } from '../src/packetv1449/PacketV1449_PlayerStealth.js';

import type { t as Packet_PlayerTeam_t } from '../src/packetv1449/PacketV1449_PlayerTeam.js';

import type { t as Packet_PlayerTeleportPortal_t } from '../src/packetv1449/PacketV1449_PlayerTeleportPortal.js';

import type { t as Packet_PlayerUpdate_t } from './packetv1456/PacketV1456_PlayerUpdate.js';

import type { t as Packet_PortalKill_t } from '../src/packetv1449/PacketV1449_PortalKill.js';

import type { t as Packet_ProjectileDestroy_t } from '../src/packetv1449/PacketV1449_ProjectileDestroy.js';

import type { t as Packet_ProjectileSync_t } from '../src/packetv1449/PacketV1449_ProjectileSync.js';

import type { t as Packet_PvpToggle_t } from '../src/packetv1449/PacketV1449_PvpToggle.js';

import type { t as Packet_RevengeMarkerRemove_t } from '../src/packetv1449/PacketV1449_RevengeMarkerRemove.js';

import type { t as Packet_RevengeMarkerSync_t } from '../src/packetv1449/PacketV1449_RevengeMarkerSync.js';

import type { t as Packet_ShieldStrengthsUpdate_t } from '../src/packetv1449/PacketV1449_ShieldStrengthsUpdate.js';

import type { t as Packet_ShimmerEffectOrCoinLuck_t } from './packetv1456/PacketV1456_ShimmerEffectOrCoinLuck.js';

import type { t as Packet_SignNew_t } from '../src/packetv1449/PacketV1449_SignNew.js';

import type { t as Packet_SignRead_t } from '../src/packetv1449/PacketV1449_SignRead.js';

import type { t as Packet_SmokePoof_t } from '../src/packetv1449/PacketV1449_SmokePoof.js';

import type { t as Packet_SocialHandshake_t } from '../src/packetv1449/PacketV1449_SocialHandshake.js';

import type { t as Packet_Status_t } from '../src/packetv1449/PacketV1449_Status.js';

import type { t as Packet_SwitchHit_t } from '../src/packetv1449/PacketV1449_SwitchHit.js';

import type { t as Packet_Teleport_t } from './packetv1456/PacketV1456_Teleport.js';

import type { t as Packet_TeleportationPotion_t } from './packetv1456/PacketV1456_TeleportationPotion.js';

import type { t as Packet_TemporaryAnimationCreate_t } from '../src/packetv1449/PacketV1449_TemporaryAnimationCreate.js';

import type { t as Packet_TileEntityDisplayDollItemSync_t } from './packetv1456/PacketV1456_TileEntityDisplayDollItemSync.js';

import type { t as Packet_TileEntityHatRackItemSync_t } from '../src/packetv1449/PacketV1449_TileEntityHatRackItemSync.js';

import type { t as Packet_TileEntityInteractionRequest_t } from '../src/packetv1449/PacketV1449_TileEntityInteractionRequest.js';

import type { t as Packet_TileEntityPlace_t } from '../src/packetv1449/PacketV1449_TileEntityPlace.js';

import type { t as Packet_TileEntityUpdate_t } from '../src/packetv1449/PacketV1449_TileEntityUpdate.js';

import type { t as Packet_TileModify_t } from '../src/packetv1449/PacketV1449_TileModify.js';

import type { t as Packet_TilePaint_t } from '../src/packetv1449/PacketV1449_TilePaint.js';

import type { t as Packet_TilePickingSync_t } from '../src/packetv1449/PacketV1449_TilePickingSync.js';

import type { t as Packet_TileSectionFrame_t } from '../src/packetv1449/PacketV1449_TileSectionFrame.js';

import type { t as Packet_TileSectionSend_t } from './packetv1456/PacketV1456_TileSectionSend.js';

import type { t as Packet_TileSquareSend_t } from './packetv1456/PacketV1456_TileSquareSend.js';

import type { t as Packet_TimeSet_t } from '../src/packetv1449/PacketV1449_TimeSet.js';

import type { t as Packet_TravellingMerchantInventory_t } from './packetv1456/PacketV1456_TravellingMerchantInventory.js';

import type { t as Packet_TreeGrowFx_t } from '../src/packetv1449/PacketV1449_TreeGrowFx.js';

import type { t as Packet_Unused_t } from '../src/packetv1449/PacketV1449_Unused.js';

import type { t as Packet_WallPaint_t } from '../src/packetv1449/PacketV1449_WallPaint.js';

import type { t as Packet_WeaponsRackTryPlacing_t } from '../src/packetv1449/PacketV1449_WeaponsRackTryPlacing.js';

import type { t as Packet_WiredCannonShot_t } from '../src/packetv1449/PacketV1449_WiredCannonShot.js';

import type { t as Packet_WorldDataRequest_t } from '../src/packetv1449/PacketV1449_WorldDataRequest.js';

import type { t as Packet_WorldInfo_t } from './packetv1456/PacketV1456_WorldInfo.js';

import type { t as Packet_Zones_t } from './packetv1456/PacketV1456_Zones.js';

import type { t as Packet_DeadCellsDisplayJarTryPlacing_t } from './packetv1456/PacketV1456_DeadCellsDisplayJarTryPlacing.js';

import type { t as Packet_PlayerSpectate_t } from './packetv1456/PacketV1456_PlayerSpectate.js';

import type { t as Packet_ItemDropClear_t } from './packetv1456/PacketV1456_ItemDropClear.js';

import type { t as Packet_PlayerItemUseSound_t } from './packetv1456/PacketV1456_PlayerItemUseSound.js';

import type { t as Packet_NpcHurtByDebuff_t } from './packetv1456/PacketV1456_NpcHurtByDebuff.js';

import type { t as Packet_Ping_t } from './packetv1456/PacketV1456_Ping.js';

import type { t as Packet_ChestResize_t } from './packetv1456/PacketV1456_ChestResize.js';

import type { t as Packet_LeashedEntityAnchorInsertItem_t } from './packetv1456/PacketV1456_LeashedEntityAnchorInsertItem.js';

import type { t as Packet_PlayerTeamUpdate_t } from './packetv1456/PacketV1456_PlayerTeamUpdate.js';

import type { t as Packet_PlayerTeamSwapSpawn_t } from './packetv1456/PacketV1456_PlayerTeamSwapSpawn.js';

import type { t as Packet_SectionRequest_t } from './packetv1456/PacketV1456_SectionRequest.js';

import type { t as Packet_ItemDropPosition_t } from './packetv1456/PacketV1456_ItemDropPosition.js';

import type { t as Packet_HostToken_t } from './packetv1456/PacketV1456_HostToken.js';

import type { t as Packet_ServerInfo_t } from './packetv1456/PacketV1456_ServerInfo.js';

import type { t as Packet_PlayerPlatformInfo_t } from './packetv1456/PacketV1456_PlayerPlatformInfo.js';

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
  | { TAG: "ItemDropProtectedUpdate"; _0: Packet_ItemDropProtectedUpdate_t }
  | { TAG: "DeadCellsDisplayJarTryPlacing"; _0: Packet_DeadCellsDisplayJarTryPlacing_t }
  | { TAG: "PlayerSpectate"; _0: Packet_PlayerSpectate_t }
  | { TAG: "ItemDropClear"; _0: Packet_ItemDropClear_t }
  | { TAG: "PlayerItemUseSound"; _0: Packet_PlayerItemUseSound_t }
  | { TAG: "NpcHurtByDebuff"; _0: Packet_NpcHurtByDebuff_t }
  | { TAG: "Ping"; _0: Packet_Ping_t }
  | { TAG: "ChestResize"; _0: Packet_ChestResize_t }
  | { TAG: "LeashedEntityAnchorInsertItem"; _0: Packet_LeashedEntityAnchorInsertItem_t }
  | { TAG: "PlayerTeamUpdate"; _0: Packet_PlayerTeamUpdate_t }
  | { TAG: "PlayerTeamSwapSpawn"; _0: Packet_PlayerTeamSwapSpawn_t }
  | { TAG: "SectionRequest"; _0: Packet_SectionRequest_t }
  | { TAG: "ItemDropPosition"; _0: Packet_ItemDropPosition_t }
  | { TAG: "HostToken"; _0: Packet_HostToken_t }
  | { TAG: "ServerInfo"; _0: Packet_ServerInfo_t }
  | { TAG: "PlayerPlatformInfo"; _0: Packet_PlayerPlatformInfo_t };

export type LazyPacket_lazyParsed<a> = Lazy_t<Result<a, readError>>;

export type LazyPacket_t =
  { TAG: "ConnectRequest"; _0: LazyPacket_lazyParsed<Packet_ConnectRequest_t> }
  | { TAG: "Disconnect"; _0: LazyPacket_lazyParsed<Packet_Disconnect_t> }
  | { TAG: "PlayerSlotSet"; _0: LazyPacket_lazyParsed<Packet_PlayerSlotSet_t> }
  | { TAG: "PlayerInfo"; _0: LazyPacket_lazyParsed<Packet_PlayerInfo_t> }
  | { TAG: "PlayerInventorySlot"; _0: LazyPacket_lazyParsed<Packet_PlayerInventorySlot_t> }
  | { TAG: "WorldDataRequest"; _0: LazyPacket_lazyParsed<Packet_WorldDataRequest_t> }
  | { TAG: "WorldInfo"; _0: LazyPacket_lazyParsed<Packet_WorldInfo_t> }
  | { TAG: "InitialTileSectionsRequest"; _0: LazyPacket_lazyParsed<Packet_InitialTileSectionsRequest_t> }
  | { TAG: "Status"; _0: LazyPacket_lazyParsed<Packet_Status_t> }
  | { TAG: "TileSectionSend"; _0: LazyPacket_lazyParsed<Packet_TileSectionSend_t> }
  | { TAG: "TileSectionFrame"; _0: LazyPacket_lazyParsed<Packet_TileSectionFrame_t> }
  | { TAG: "PlayerSpawn"; _0: LazyPacket_lazyParsed<Packet_PlayerSpawn_t> }
  | { TAG: "PlayerUpdate"; _0: LazyPacket_lazyParsed<Packet_PlayerUpdate_t> }
  | { TAG: "PlayerActive"; _0: LazyPacket_lazyParsed<Packet_PlayerActive_t> }
  | { TAG: "PlayerHealth"; _0: LazyPacket_lazyParsed<Packet_PlayerHealth_t> }
  | { TAG: "TileModify"; _0: LazyPacket_lazyParsed<Packet_TileModify_t> }
  | { TAG: "TimeSet"; _0: LazyPacket_lazyParsed<Packet_TimeSet_t> }
  | { TAG: "DoorUse"; _0: LazyPacket_lazyParsed<Packet_DoorUse_t> }
  | { TAG: "TileSquareSend"; _0: LazyPacket_lazyParsed<Packet_TileSquareSend_t> }
  | { TAG: "ItemDropUpdate"; _0: LazyPacket_lazyParsed<Packet_ItemDropUpdate_t> }
  | { TAG: "ItemOwner"; _0: LazyPacket_lazyParsed<Packet_ItemOwner_t> }
  | { TAG: "NpcUpdate"; _0: LazyPacket_lazyParsed<Packet_NpcUpdate_t> }
  | { TAG: "NpcItemStrike"; _0: LazyPacket_lazyParsed<Packet_NpcItemStrike_t> }
  | { TAG: "ProjectileSync"; _0: LazyPacket_lazyParsed<Packet_ProjectileSync_t> }
  | { TAG: "NpcStrike"; _0: LazyPacket_lazyParsed<Packet_NpcStrike_t> }
  | { TAG: "ProjectileDestroy"; _0: LazyPacket_lazyParsed<Packet_ProjectileDestroy_t> }
  | { TAG: "PvpToggle"; _0: LazyPacket_lazyParsed<Packet_PvpToggle_t> }
  | { TAG: "ChestOpen"; _0: LazyPacket_lazyParsed<Packet_ChestOpen_t> }
  | { TAG: "ChestItem"; _0: LazyPacket_lazyParsed<Packet_ChestItem_t> }
  | { TAG: "ActiveContainerSync"; _0: LazyPacket_lazyParsed<Packet_ActiveContainerSync_t> }
  | { TAG: "ChestPlace"; _0: LazyPacket_lazyParsed<Packet_ChestPlace_t> }
  | { TAG: "HealEffect"; _0: LazyPacket_lazyParsed<Packet_HealEffect_t> }
  | { TAG: "Zones"; _0: LazyPacket_lazyParsed<Packet_Zones_t> }
  | { TAG: "PasswordRequired"; _0: LazyPacket_lazyParsed<Packet_PasswordRequired_t> }
  | { TAG: "PasswordSend"; _0: LazyPacket_lazyParsed<Packet_PasswordSend_t> }
  | { TAG: "ItemOwnerRemove"; _0: LazyPacket_lazyParsed<Packet_ItemOwnerRemove_t> }
  | { TAG: "NpcTalk"; _0: LazyPacket_lazyParsed<Packet_NpcTalk_t> }
  | { TAG: "PlayerAnimation"; _0: LazyPacket_lazyParsed<Packet_PlayerAnimation_t> }
  | { TAG: "PlayerMana"; _0: LazyPacket_lazyParsed<Packet_PlayerMana_t> }
  | { TAG: "ManaEffect"; _0: LazyPacket_lazyParsed<Packet_ManaEffect_t> }
  | { TAG: "PlayerTeam"; _0: LazyPacket_lazyParsed<Packet_PlayerTeam_t> }
  | { TAG: "SignRead"; _0: LazyPacket_lazyParsed<Packet_SignRead_t> }
  | { TAG: "SignNew"; _0: LazyPacket_lazyParsed<Packet_SignNew_t> }
  | { TAG: "LiquidSet"; _0: LazyPacket_lazyParsed<Packet_LiquidSet_t> }
  | { TAG: "PlayerSpawnSelf"; _0: LazyPacket_lazyParsed<Packet_PlayerSpawnSelf_t> }
  | { TAG: "PlayerBuffsSet"; _0: LazyPacket_lazyParsed<Packet_PlayerBuffsSet_t> }
  | { TAG: "NpcSpecialEffect"; _0: LazyPacket_lazyParsed<Packet_NpcSpecialEffect_t> }
  | { TAG: "ChestOrTempleUnlock"; _0: LazyPacket_lazyParsed<Packet_ChestOrTempleUnlock_t> }
  | { TAG: "NpcBuffAdd"; _0: LazyPacket_lazyParsed<Packet_NpcBuffAdd_t> }
  | { TAG: "NpcBuffUpdate"; _0: LazyPacket_lazyParsed<Packet_NpcBuffUpdate_t> }
  | { TAG: "PlayerBuffAdd"; _0: LazyPacket_lazyParsed<Packet_PlayerBuffAdd_t> }
  | { TAG: "NpcNameUpdate"; _0: LazyPacket_lazyParsed<Packet_NpcNameUpdate_t> }
  | { TAG: "GoodEvilUpdate"; _0: LazyPacket_lazyParsed<Packet_GoodEvilUpdate_t> }
  | { TAG: "HarpPlay"; _0: LazyPacket_lazyParsed<Packet_HarpPlay_t> }
  | { TAG: "SwitchHit"; _0: LazyPacket_lazyParsed<Packet_SwitchHit_t> }
  | { TAG: "NpcHomeUpdate"; _0: LazyPacket_lazyParsed<Packet_NpcHomeUpdate_t> }
  | { TAG: "BossOrInvasionSpawn"; _0: LazyPacket_lazyParsed<Packet_BossOrInvasionSpawn_t> }
  | { TAG: "PlayerDodge"; _0: LazyPacket_lazyParsed<Packet_PlayerDodge_t> }
  | { TAG: "TilePaint"; _0: LazyPacket_lazyParsed<Packet_TilePaint_t> }
  | { TAG: "WallPaint"; _0: LazyPacket_lazyParsed<Packet_WallPaint_t> }
  | { TAG: "Teleport"; _0: LazyPacket_lazyParsed<Packet_Teleport_t> }
  | { TAG: "PlayerHealOther"; _0: LazyPacket_lazyParsed<Packet_PlayerHealOther_t> }
  | { TAG: "DimensionsUpdate"; _0: LazyPacket_lazyParsed<Packet_DimensionsUpdate_t> }
  | { TAG: "ClientUuid"; _0: LazyPacket_lazyParsed<Packet_ClientUuid_t> }
  | { TAG: "ChestName"; _0: LazyPacket_lazyParsed<Packet_ChestName_t> }
  | { TAG: "NpcCatch"; _0: LazyPacket_lazyParsed<Packet_NpcCatch_t> }
  | { TAG: "NpcRelease"; _0: LazyPacket_lazyParsed<Packet_NpcRelease_t> }
  | { TAG: "TravellingMerchantInventory"; _0: LazyPacket_lazyParsed<Packet_TravellingMerchantInventory_t> }
  | { TAG: "TeleportationPotion"; _0: LazyPacket_lazyParsed<Packet_TeleportationPotion_t> }
  | { TAG: "AnglerQuest"; _0: LazyPacket_lazyParsed<Packet_AnglerQuest_t> }
  | { TAG: "AnglerQuestComplete"; _0: LazyPacket_lazyParsed<Packet_AnglerQuestComplete_t> }
  | { TAG: "AnglerQuestsCompletedAmount"; _0: LazyPacket_lazyParsed<Packet_AnglerQuestsCompletedAmount_t> }
  | { TAG: "TemporaryAnimationCreate"; _0: LazyPacket_lazyParsed<Packet_TemporaryAnimationCreate_t> }
  | { TAG: "InvasionProgressReport"; _0: LazyPacket_lazyParsed<Packet_InvasionProgressReport_t> }
  | { TAG: "ObjectPlace"; _0: LazyPacket_lazyParsed<Packet_ObjectPlace_t> }
  | { TAG: "PlayerChestIndexSync"; _0: LazyPacket_lazyParsed<Packet_PlayerChestIndexSync_t> }
  | { TAG: "CombatNumberCreate"; _0: LazyPacket_lazyParsed<Packet_CombatNumberCreate_t> }
  | { TAG: "NetModuleLoad"; _0: LazyPacket_lazyParsed<NetModuleLoad> }
  | { TAG: "NpcKillCount"; _0: LazyPacket_lazyParsed<Packet_NpcKillCount_t> }
  | { TAG: "PlayerStealth"; _0: LazyPacket_lazyParsed<Packet_PlayerStealth_t> }
  | { TAG: "ItemForceIntoNearestChest"; _0: LazyPacket_lazyParsed<Packet_ItemForceIntoNearestChest_t> }
  | { TAG: "TileEntityUpdate"; _0: LazyPacket_lazyParsed<Packet_TileEntityUpdate_t> }
  | { TAG: "TileEntityPlace"; _0: LazyPacket_lazyParsed<Packet_TileEntityPlace_t> }
  | { TAG: "ItemDropModify"; _0: LazyPacket_lazyParsed<Packet_ItemDropModify_t> }
  | { TAG: "ItemFramePlace"; _0: LazyPacket_lazyParsed<Packet_ItemFramePlace_t> }
  | { TAG: "ItemDropInstancedUpdate"; _0: LazyPacket_lazyParsed<Packet_ItemDropInstancedUpdate_t> }
  | { TAG: "EmoteBubble"; _0: LazyPacket_lazyParsed<Packet_EmoteBubble_t> }
  | { TAG: "ExtraValueSync"; _0: LazyPacket_lazyParsed<Packet_ExtraValueSync_t> }
  | { TAG: "SocialHandshake"; _0: LazyPacket_lazyParsed<Packet_SocialHandshake_t> }
  | { TAG: "Unused"; _0: LazyPacket_lazyParsed<Packet_Unused_t> }
  | { TAG: "PortalKill"; _0: LazyPacket_lazyParsed<Packet_PortalKill_t> }
  | { TAG: "PlayerTeleportPortal"; _0: LazyPacket_lazyParsed<Packet_PlayerTeleportPortal_t> }
  | { TAG: "NpcKilledNotification"; _0: LazyPacket_lazyParsed<Packet_NpcKilledNotification_t> }
  | { TAG: "EventNotification"; _0: LazyPacket_lazyParsed<Packet_EventNotification_t> }
  | { TAG: "MinionTargetUpdate"; _0: LazyPacket_lazyParsed<Packet_MinionTargetUpdate_t> }
  | { TAG: "NpcTeleportPortal"; _0: LazyPacket_lazyParsed<Packet_NpcTeleportPortal_t> }
  | { TAG: "ShieldStrengthsUpdate"; _0: LazyPacket_lazyParsed<Packet_ShieldStrengthsUpdate_t> }
  | { TAG: "NebulaLevelUp"; _0: LazyPacket_lazyParsed<Packet_NebulaLevelUp_t> }
  | { TAG: "MoonLordCountdown"; _0: LazyPacket_lazyParsed<Packet_MoonLordCountdown_t> }
  | { TAG: "NpcShopItem"; _0: LazyPacket_lazyParsed<Packet_NpcShopItem_t> }
  | { TAG: "GemLockToggle"; _0: LazyPacket_lazyParsed<Packet_GemLockToggle_t> }
  | { TAG: "SmokePoof"; _0: LazyPacket_lazyParsed<Packet_SmokePoof_t> }
  | { TAG: "ChatMessageSmart"; _0: LazyPacket_lazyParsed<Packet_ChatMessageSmart_t> }
  | { TAG: "WiredCannonShot"; _0: LazyPacket_lazyParsed<Packet_WiredCannonShot_t> }
  | { TAG: "MassWireOperation"; _0: LazyPacket_lazyParsed<Packet_MassWireOperation_t> }
  | { TAG: "MassWireOperationPay"; _0: LazyPacket_lazyParsed<Packet_MassWireOperationPay_t> }
  | { TAG: "PartyToggle"; _0: LazyPacket_lazyParsed<Packet_PartyToggle_t> }
  | { TAG: "TreeGrowFx"; _0: LazyPacket_lazyParsed<Packet_TreeGrowFx_t> }
  | { TAG: "CrystalInvasionStart"; _0: LazyPacket_lazyParsed<Packet_CrystalInvasionStart_t> }
  | { TAG: "CrystalInvasionWipeAll"; _0: LazyPacket_lazyParsed<Packet_CrystalInvasionWipeAll_t> }
  | { TAG: "MinionAttackTargetUpdate"; _0: LazyPacket_lazyParsed<Packet_MinionAttackTargetUpdate_t> }
  | { TAG: "CrystalInvasionSendWaitTime"; _0: LazyPacket_lazyParsed<Packet_CrystalInvasionSendWaitTime_t> }
  | { TAG: "PlayerDamage"; _0: LazyPacket_lazyParsed<Packet_PlayerDamage_t> }
  | { TAG: "PlayerDeath"; _0: LazyPacket_lazyParsed<Packet_PlayerDeath_t> }
  | { TAG: "CombatTextCreate"; _0: LazyPacket_lazyParsed<Packet_CombatTextCreate_t> }
  | { TAG: "Emoji"; _0: LazyPacket_lazyParsed<Packet_Emoji_t> }
  | { TAG: "TileEntityDisplayDollItemSync"; _0: LazyPacket_lazyParsed<Packet_TileEntityDisplayDollItemSync_t> }
  | { TAG: "TileEntityInteractionRequest"; _0: LazyPacket_lazyParsed<Packet_TileEntityInteractionRequest_t> }
  | { TAG: "WeaponsRackTryPlacing"; _0: LazyPacket_lazyParsed<Packet_WeaponsRackTryPlacing_t> }
  | { TAG: "TileEntityHatRackItemSync"; _0: LazyPacket_lazyParsed<Packet_TileEntityHatRackItemSync_t> }
  | { TAG: "TilePickingSync"; _0: LazyPacket_lazyParsed<Packet_TilePickingSync_t> }
  | { TAG: "RevengeMarkerSync"; _0: LazyPacket_lazyParsed<Packet_RevengeMarkerSync_t> }
  | { TAG: "RevengeMarkerRemove"; _0: LazyPacket_lazyParsed<Packet_RevengeMarkerRemove_t> }
  | { TAG: "GolfBallLandInCup"; _0: LazyPacket_lazyParsed<Packet_GolfBallLandInCup_t> }
  | { TAG: "ClientFinishConnectingToServer"; _0: LazyPacket_lazyParsed<Packet_ClientFinishConnectingToServer_t> }
  | { TAG: "NpcFishOut"; _0: LazyPacket_lazyParsed<Packet_NpcFishOut_t> }
  | { TAG: "NpcTamper"; _0: LazyPacket_lazyParsed<Packet_NpcTamper_t> }
  | { TAG: "LegacySoundPlay"; _0: LazyPacket_lazyParsed<Packet_LegacySoundPlay_t> }
  | { TAG: "FoodPlatterTryPlacing"; _0: LazyPacket_lazyParsed<Packet_FoodPlatterTryPlacing_t> }
  | { TAG: "PlayerLuckFactorsUpdate"; _0: LazyPacket_lazyParsed<Packet_PlayerLuckFactorsUpdate_t> }
  | { TAG: "PlayerDead"; _0: LazyPacket_lazyParsed<Packet_PlayerDead_t> }
  | { TAG: "CavernMonsterTypeSync"; _0: LazyPacket_lazyParsed<Packet_CavernMonsterTypeSync_t> }
  | { TAG: "NpcBuffRemovalRequest"; _0: LazyPacket_lazyParsed<Packet_NpcBuffRemovalRequest_t> }
  | { TAG: "ClientSyncedInventory"; _0: LazyPacket_lazyParsed<Packet_ClientSyncedInventory_t> }
  | { TAG: "CountsAsHostForGameplaySet"; _0: LazyPacket_lazyParsed<Packet_CountsAsHostForGameplaySet_t> }
  | { TAG: "CreditsOrSlimeTransform"; _0: LazyPacket_lazyParsed<Packet_CreditsOrSlimeTransform_t> }
  | { TAG: "LucyAxeMessage"; _0: LazyPacket_lazyParsed<Packet_LucyAxeMessage_t> }
  | { TAG: "PiggyBankVoidLensUpdate"; _0: LazyPacket_lazyParsed<Packet_PiggyBankVoidLensUpdate_t> }
  | { TAG: "DungeonDefendersEventAttemptSkipWait"; _0: LazyPacket_lazyParsed<Packet_DungeonDefendersEventAttemptSkipWait_t> }
  | { TAG: "HaveDryadDoStardewAnimation"; _0: LazyPacket_lazyParsed<Packet_HaveDryadDoStardewAnimation_t> }
  | { TAG: "ItemDropShimmeredUpdate"; _0: LazyPacket_lazyParsed<Packet_ItemDropShimmeredUpdate_t> }
  | { TAG: "ShimmerEffectOrCoinLuck"; _0: LazyPacket_lazyParsed<Packet_ShimmerEffectOrCoinLuck_t> }
  | { TAG: "LoadoutSwitch"; _0: LazyPacket_lazyParsed<Packet_LoadoutSwitch_t> }
  | { TAG: "ItemDropProtectedUpdate"; _0: LazyPacket_lazyParsed<Packet_ItemDropProtectedUpdate_t> }
  | { TAG: "DeadCellsDisplayJarTryPlacing"; _0: LazyPacket_lazyParsed<Packet_DeadCellsDisplayJarTryPlacing_t> }
  | { TAG: "PlayerSpectate"; _0: LazyPacket_lazyParsed<Packet_PlayerSpectate_t> }
  | { TAG: "ItemDropClear"; _0: LazyPacket_lazyParsed<Packet_ItemDropClear_t> }
  | { TAG: "PlayerItemUseSound"; _0: LazyPacket_lazyParsed<Packet_PlayerItemUseSound_t> }
  | { TAG: "NpcHurtByDebuff"; _0: LazyPacket_lazyParsed<Packet_NpcHurtByDebuff_t> }
  | { TAG: "Ping"; _0: LazyPacket_lazyParsed<Packet_Ping_t> }
  | { TAG: "ChestResize"; _0: LazyPacket_lazyParsed<Packet_ChestResize_t> }
  | { TAG: "LeashedEntityAnchorInsertItem"; _0: LazyPacket_lazyParsed<Packet_LeashedEntityAnchorInsertItem_t> }
  | { TAG: "PlayerTeamUpdate"; _0: LazyPacket_lazyParsed<Packet_PlayerTeamUpdate_t> }
  | { TAG: "PlayerTeamSwapSpawn"; _0: LazyPacket_lazyParsed<Packet_PlayerTeamSwapSpawn_t> }
  | { TAG: "SectionRequest"; _0: LazyPacket_lazyParsed<Packet_SectionRequest_t> }
  | { TAG: "ItemDropPosition"; _0: LazyPacket_lazyParsed<Packet_ItemDropPosition_t> }
  | { TAG: "HostToken"; _0: LazyPacket_lazyParsed<Packet_HostToken_t> }
  | { TAG: "ServerInfo"; _0: LazyPacket_lazyParsed<Packet_ServerInfo_t> }
  | { TAG: "PlayerPlatformInfo"; _0: LazyPacket_lazyParsed<Packet_PlayerPlatformInfo_t> };

export type toBufferResult =
  | { TAG: "Ok"; _0: Buffer }
  | "NotImplemented"
  | { TAG: "Error"; _0: PackError };

export declare const LazyPacket: {
  readonly toPacketName: (packet: LazyPacket_t) => string;
};

export declare const toBuffer: (packet: t, fromServer: boolean) => toBufferResult;
export declare const toPacketName: (packet: t) => string;
