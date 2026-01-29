var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/packetv1449/PacketV1449_AnglerQuest.js
var PacketV1449_AnglerQuest_exports = {};
__export(PacketV1449_AnglerQuest_exports, {
  parse: () => parse,
  toBuffer: () => toBuffer
});

// src/PacketType.js
var PacketType_exports = {};
__export(PacketType_exports, {
  fromInt: () => fromInt,
  packetName: () => packetName,
  toInt: () => toInt
});
function fromInt(n) {
  switch (n) {
    case 1:
      return "ConnectRequest";
    case 2:
      return "Disconnect";
    case 3:
      return "PlayerSlotSet";
    case 4:
      return "PlayerInfo";
    case 5:
      return "PlayerInventorySlot";
    case 6:
      return "WorldDataRequest";
    case 7:
      return "WorldInfo";
    case 8:
      return "InitialTileSectionsRequest";
    case 9:
      return "Status";
    case 10:
      return "TileSectionSend";
    case 11:
      return "TileSectionFrame";
    case 12:
      return "PlayerSpawn";
    case 13:
      return "PlayerUpdate";
    case 14:
      return "PlayerActive";
    case 16:
      return "PlayerHealth";
    case 17:
      return "TileModify";
    case 18:
      return "TimeSet";
    case 19:
      return "DoorUse";
    case 20:
      return "TileSquareSend";
    case 21:
      return "ItemDropUpdate";
    case 22:
      return "ItemOwner";
    case 23:
      return "NpcUpdate";
    case 24:
      return "NpcItemStrike";
    case 27:
      return "ProjectileSync";
    case 28:
      return "NpcStrike";
    case 29:
      return "ProjectileDestroy";
    case 30:
      return "PvpToggle";
    case 31:
      return "ChestOpen";
    case 32:
      return "ChestItem";
    case 33:
      return "ActiveContainerSync";
    case 34:
      return "ChestPlace";
    case 35:
      return "HealEffect";
    case 36:
      return "Zones";
    case 37:
      return "PasswordRequired";
    case 38:
      return "PasswordSend";
    case 39:
      return "ItemOwnerRemove";
    case 40:
      return "NpcTalk";
    case 41:
      return "PlayerAnimation";
    case 42:
      return "PlayerMana";
    case 43:
      return "ManaEffect";
    case 45:
      return "PlayerTeam";
    case 46:
      return "SignRead";
    case 47:
      return "SignNew";
    case 48:
      return "LiquidSet";
    case 49:
      return "PlayerSpawnSelf";
    case 50:
      return "PlayerBuffsSet";
    case 51:
      return "NpcSpecialEffect";
    case 52:
      return "ChestOrTempleUnlock";
    case 53:
      return "NpcBuffAdd";
    case 54:
      return "NpcBuffUpdate";
    case 55:
      return "PlayerBuffAdd";
    case 56:
      return "NpcNameUpdate";
    case 57:
      return "GoodEvilUpdate";
    case 58:
      return "HarpPlay";
    case 59:
      return "SwitchHit";
    case 60:
      return "NpcHomeUpdate";
    case 61:
      return "BossOrInvasionSpawn";
    case 62:
      return "PlayerDodge";
    case 63:
      return "TilePaint";
    case 64:
      return "WallPaint";
    case 65:
      return "Teleport";
    case 66:
      return "PlayerHealOther";
    case 67:
      return "DimensionsUpdate";
    case 68:
      return "ClientUuid";
    case 69:
      return "ChestName";
    case 70:
      return "NpcCatch";
    case 71:
      return "NpcRelease";
    case 72:
      return "TravellingMerchantInventory";
    case 73:
      return "TeleportationPotion";
    case 74:
      return "AnglerQuest";
    case 75:
      return "AnglerQuestComplete";
    case 76:
      return "AnglerQuestsCompletedAmount";
    case 77:
      return "TemporaryAnimationCreate";
    case 78:
      return "InvasionProgressReport";
    case 79:
      return "ObjectPlace";
    case 80:
      return "PlayerChestIndexSync";
    case 81:
      return "CombatNumberCreate";
    case 82:
      return "NetModuleLoad";
    case 83:
      return "NpcKillCount";
    case 84:
      return "PlayerStealth";
    case 85:
      return "ItemForceIntoNearestChest";
    case 86:
      return "TileEntityUpdate";
    case 87:
      return "TileEntityPlace";
    case 88:
      return "ItemDropModify";
    case 89:
      return "ItemFramePlace";
    case 90:
      return "ItemDropInstancedUpdate";
    case 91:
      return "EmoteBubble";
    case 92:
      return "ExtraValueSync";
    case 93:
      return "SocialHandshake";
    case 94:
      return "Unused";
    case 95:
      return "PortalKill";
    case 96:
      return "PlayerTeleportPortal";
    case 97:
      return "NpcKilledNotification";
    case 98:
      return "EventNotification";
    case 99:
      return "MinionTargetUpdate";
    case 100:
      return "NpcTeleportPortal";
    case 101:
      return "ShieldStrengthsUpdate";
    case 102:
      return "NebulaLevelUp";
    case 103:
      return "MoonLordCountdown";
    case 104:
      return "NpcShopItem";
    case 105:
      return "GemLockToggle";
    case 106:
      return "SmokePoof";
    case 107:
      return "ChatMessageSmart";
    case 108:
      return "WiredCannonShot";
    case 109:
      return "MassWireOperation";
    case 110:
      return "MassWireOperationPay";
    case 111:
      return "PartyToggle";
    case 112:
      return "TreeGrowFx";
    case 113:
      return "CrystalInvasionStart";
    case 114:
      return "CrystalInvasionWipeAll";
    case 115:
      return "MinionAttackTargetUpdate";
    case 116:
      return "CrystalInvasionSendWaitTime";
    case 117:
      return "PlayerDamage";
    case 118:
      return "PlayerDeath";
    case 119:
      return "CombatTextCreate";
    case 120:
      return "Emoji";
    case 121:
      return "TileEntityDisplayDollItemSync";
    case 122:
      return "TileEntityInteractionRequest";
    case 123:
      return "WeaponsRackTryPlacing";
    case 124:
      return "TileEntityHatRackItemSync";
    case 125:
      return "TilePickingSync";
    case 126:
      return "RevengeMarkerSync";
    case 127:
      return "RevengeMarkerRemove";
    case 128:
      return "GolfBallLandInCup";
    case 129:
      return "ClientFinishConnectingToServer";
    case 130:
      return "NpcFishOut";
    case 131:
      return "NpcTamper";
    case 132:
      return "LegacySoundPlay";
    case 133:
      return "FoodPlatterTryPlacing";
    case 134:
      return "PlayerLuckFactorsUpdate";
    case 135:
      return "PlayerDead";
    case 136:
      return "CavernMonsterTypeSync";
    case 137:
      return "NpcBuffRemovalRequest";
    case 138:
      return "ClientSyncedInventory";
    case 139:
      return "CountsAsHostForGameplaySet";
    case 140:
      return "CreditsOrSlimeTransform";
    case 141:
      return "LucyAxeMessage";
    case 142:
      return "PiggyBankVoidLensUpdate";
    case 143:
      return "DungeonDefendersEventAttemptSkipWait";
    case 144:
      return "HaveDryadDoStardewAnimation";
    case 145:
      return "ItemDropShimmeredUpdate";
    case 146:
      return "ShimmerEffectOrCoinLuck";
    case 147:
      return "LoadoutSwitch";
    case 148:
      return "ItemDropProtectedUpdate";
    case 149:
      return "DeadCellsDisplayJarTryPlacing";
    case 150:
      return "PlayerSpectate";
    case 151:
      return "ItemDropClear";
    case 152:
      return "PlayerItemUseSound";
    case 153:
      return "NpcHurtByDebuff";
    case 154:
      return "Ping";
    case 155:
      return "ChestResize";
    case 156:
      return "LeashedEntityAnchorInsertItem";
    case 157:
      return "PlayerTeamUpdate";
    case 158:
      return "PlayerTeamSwapSpawn";
    case 159:
      return "SectionRequest";
    case 160:
      return "ItemDropPosition";
    case 161:
      return "HostToken";
    default:
      return;
  }
}
function toInt(self) {
  switch (self) {
    case "ConnectRequest":
      return 1;
    case "Disconnect":
      return 2;
    case "PlayerSlotSet":
      return 3;
    case "PlayerInfo":
      return 4;
    case "PlayerInventorySlot":
      return 5;
    case "WorldDataRequest":
      return 6;
    case "WorldInfo":
      return 7;
    case "InitialTileSectionsRequest":
      return 8;
    case "Status":
      return 9;
    case "TileSectionSend":
      return 10;
    case "TileSectionFrame":
      return 11;
    case "PlayerSpawn":
      return 12;
    case "PlayerUpdate":
      return 13;
    case "PlayerActive":
      return 14;
    case "PlayerHealth":
      return 16;
    case "TileModify":
      return 17;
    case "TimeSet":
      return 18;
    case "DoorUse":
      return 19;
    case "TileSquareSend":
      return 20;
    case "ItemDropUpdate":
      return 21;
    case "ItemOwner":
      return 22;
    case "NpcUpdate":
      return 23;
    case "NpcItemStrike":
      return 24;
    case "ProjectileSync":
      return 27;
    case "NpcStrike":
      return 28;
    case "ProjectileDestroy":
      return 29;
    case "PvpToggle":
      return 30;
    case "ChestOpen":
      return 31;
    case "ChestItem":
      return 32;
    case "ActiveContainerSync":
      return 33;
    case "ChestPlace":
      return 34;
    case "HealEffect":
      return 35;
    case "Zones":
      return 36;
    case "PasswordRequired":
      return 37;
    case "PasswordSend":
      return 38;
    case "ItemOwnerRemove":
      return 39;
    case "NpcTalk":
      return 40;
    case "PlayerAnimation":
      return 41;
    case "PlayerMana":
      return 42;
    case "ManaEffect":
      return 43;
    case "PlayerTeam":
      return 45;
    case "SignRead":
      return 46;
    case "SignNew":
      return 47;
    case "LiquidSet":
      return 48;
    case "PlayerSpawnSelf":
      return 49;
    case "PlayerBuffsSet":
      return 50;
    case "NpcSpecialEffect":
      return 51;
    case "ChestOrTempleUnlock":
      return 52;
    case "NpcBuffAdd":
      return 53;
    case "NpcBuffUpdate":
      return 54;
    case "PlayerBuffAdd":
      return 55;
    case "NpcNameUpdate":
      return 56;
    case "GoodEvilUpdate":
      return 57;
    case "HarpPlay":
      return 58;
    case "SwitchHit":
      return 59;
    case "NpcHomeUpdate":
      return 60;
    case "BossOrInvasionSpawn":
      return 61;
    case "PlayerDodge":
      return 62;
    case "TilePaint":
      return 63;
    case "WallPaint":
      return 64;
    case "Teleport":
      return 65;
    case "PlayerHealOther":
      return 66;
    case "DimensionsUpdate":
      return 67;
    case "ClientUuid":
      return 68;
    case "ChestName":
      return 69;
    case "NpcCatch":
      return 70;
    case "NpcRelease":
      return 71;
    case "TravellingMerchantInventory":
      return 72;
    case "TeleportationPotion":
      return 73;
    case "AnglerQuest":
      return 74;
    case "AnglerQuestComplete":
      return 75;
    case "AnglerQuestsCompletedAmount":
      return 76;
    case "TemporaryAnimationCreate":
      return 77;
    case "InvasionProgressReport":
      return 78;
    case "ObjectPlace":
      return 79;
    case "PlayerChestIndexSync":
      return 80;
    case "CombatNumberCreate":
      return 81;
    case "NetModuleLoad":
      return 82;
    case "NpcKillCount":
      return 83;
    case "PlayerStealth":
      return 84;
    case "ItemForceIntoNearestChest":
      return 85;
    case "TileEntityUpdate":
      return 86;
    case "TileEntityPlace":
      return 87;
    case "ItemDropModify":
      return 88;
    case "ItemFramePlace":
      return 89;
    case "ItemDropInstancedUpdate":
      return 90;
    case "EmoteBubble":
      return 91;
    case "ExtraValueSync":
      return 92;
    case "SocialHandshake":
      return 93;
    case "Unused":
      return 94;
    case "PortalKill":
      return 95;
    case "PlayerTeleportPortal":
      return 96;
    case "NpcKilledNotification":
      return 97;
    case "EventNotification":
      return 98;
    case "MinionTargetUpdate":
      return 99;
    case "NpcTeleportPortal":
      return 100;
    case "ShieldStrengthsUpdate":
      return 101;
    case "NebulaLevelUp":
      return 102;
    case "MoonLordCountdown":
      return 103;
    case "NpcShopItem":
      return 104;
    case "GemLockToggle":
      return 105;
    case "SmokePoof":
      return 106;
    case "ChatMessageSmart":
      return 107;
    case "WiredCannonShot":
      return 108;
    case "MassWireOperation":
      return 109;
    case "MassWireOperationPay":
      return 110;
    case "PartyToggle":
      return 111;
    case "TreeGrowFx":
      return 112;
    case "CrystalInvasionStart":
      return 113;
    case "CrystalInvasionWipeAll":
      return 114;
    case "MinionAttackTargetUpdate":
      return 115;
    case "CrystalInvasionSendWaitTime":
      return 116;
    case "PlayerDamage":
      return 117;
    case "PlayerDeath":
      return 118;
    case "CombatTextCreate":
      return 119;
    case "Emoji":
      return 120;
    case "TileEntityDisplayDollItemSync":
      return 121;
    case "TileEntityInteractionRequest":
      return 122;
    case "WeaponsRackTryPlacing":
      return 123;
    case "TileEntityHatRackItemSync":
      return 124;
    case "TilePickingSync":
      return 125;
    case "RevengeMarkerSync":
      return 126;
    case "RevengeMarkerRemove":
      return 127;
    case "GolfBallLandInCup":
      return 128;
    case "ClientFinishConnectingToServer":
      return 129;
    case "NpcFishOut":
      return 130;
    case "NpcTamper":
      return 131;
    case "LegacySoundPlay":
      return 132;
    case "FoodPlatterTryPlacing":
      return 133;
    case "PlayerLuckFactorsUpdate":
      return 134;
    case "PlayerDead":
      return 135;
    case "CavernMonsterTypeSync":
      return 136;
    case "NpcBuffRemovalRequest":
      return 137;
    case "ClientSyncedInventory":
      return 138;
    case "CountsAsHostForGameplaySet":
      return 139;
    case "CreditsOrSlimeTransform":
      return 140;
    case "LucyAxeMessage":
      return 141;
    case "PiggyBankVoidLensUpdate":
      return 142;
    case "DungeonDefendersEventAttemptSkipWait":
      return 143;
    case "HaveDryadDoStardewAnimation":
      return 144;
    case "ItemDropShimmeredUpdate":
      return 145;
    case "ShimmerEffectOrCoinLuck":
      return 146;
    case "LoadoutSwitch":
      return 147;
    case "ItemDropProtectedUpdate":
      return 148;
    case "DeadCellsDisplayJarTryPlacing":
      return 149;
    case "PlayerSpectate":
      return 150;
    case "ItemDropClear":
      return 151;
    case "PlayerItemUseSound":
      return 152;
    case "NpcHurtByDebuff":
      return 153;
    case "Ping":
      return 154;
    case "ChestResize":
      return 155;
    case "LeashedEntityAnchorInsertItem":
      return 156;
    case "PlayerTeamUpdate":
      return 157;
    case "PlayerTeamSwapSpawn":
      return 158;
    case "SectionRequest":
      return 159;
    case "ItemDropPosition":
      return 160;
    case "HostToken":
      return 161;
  }
}
function packetName(packetType) {
  switch (packetType) {
    case "ConnectRequest":
      return "ConnectRequest";
    case "Disconnect":
      return "Disconnect";
    case "PlayerSlotSet":
      return "PlayerSlotSet";
    case "PlayerInfo":
      return "PlayerInfo";
    case "PlayerInventorySlot":
      return "PlayerInventorySlot";
    case "WorldDataRequest":
      return "WorldDataRequest";
    case "WorldInfo":
      return "WorldInfo";
    case "InitialTileSectionsRequest":
      return "InitialTileSectionsRequest";
    case "Status":
      return "Status";
    case "TileSectionSend":
      return "TileSectionSend";
    case "TileSectionFrame":
      return "TileSectionFrame";
    case "PlayerSpawn":
      return "PlayerSpawn";
    case "PlayerUpdate":
      return "PlayerUpdate";
    case "PlayerActive":
      return "PlayerActive";
    case "PlayerHealth":
      return "PlayerHealth";
    case "TileModify":
      return "TileModify";
    case "TimeSet":
      return "TimeSet";
    case "DoorUse":
      return "DoorUse";
    case "TileSquareSend":
      return "TileSquareSend";
    case "ItemDropUpdate":
      return "ItemDropUpdate";
    case "ItemOwner":
      return "ItemOwner";
    case "NpcUpdate":
      return "NpcUpdate";
    case "NpcItemStrike":
      return "NpcItemStrike";
    case "ProjectileSync":
      return "ProjectileSync";
    case "NpcStrike":
      return "NpcStrike";
    case "ProjectileDestroy":
      return "ProjectileDestroy";
    case "PvpToggle":
      return "PvpToggle";
    case "ChestOpen":
      return "ChestOpen";
    case "ChestItem":
      return "ChestItem";
    case "ActiveContainerSync":
      return "ActiveContainerSync";
    case "ChestPlace":
      return "ChestPlace";
    case "HealEffect":
      return "HealEffect";
    case "Zones":
      return "Zones";
    case "PasswordRequired":
      return "PasswordRequired";
    case "PasswordSend":
      return "PasswordSend";
    case "ItemOwnerRemove":
      return "ItemOwnerRemove";
    case "NpcTalk":
      return "NpcTalk";
    case "PlayerAnimation":
      return "PlayerAnimation";
    case "PlayerMana":
      return "PlayerMana";
    case "ManaEffect":
      return "ManaEffect";
    case "PlayerTeam":
      return "PlayerTeam";
    case "SignRead":
      return "SignRead";
    case "SignNew":
      return "SignNew";
    case "LiquidSet":
      return "LiquidSet";
    case "PlayerSpawnSelf":
      return "PlayerSpawnSelf";
    case "PlayerBuffsSet":
      return "PlayerBuffsSet";
    case "NpcSpecialEffect":
      return "NpcSpecialEffect";
    case "ChestOrTempleUnlock":
      return "ChestOrTempleUnlock";
    case "NpcBuffAdd":
      return "NpcBuffAdd";
    case "NpcBuffUpdate":
      return "NpcBuffUpdate";
    case "PlayerBuffAdd":
      return "PlayerBuffAdd";
    case "NpcNameUpdate":
      return "NpcNameUpdate";
    case "GoodEvilUpdate":
      return "GoodEvilUpdate";
    case "HarpPlay":
      return "HarpPlay";
    case "SwitchHit":
      return "SwitchHit";
    case "NpcHomeUpdate":
      return "NpcHomeUpdate";
    case "BossOrInvasionSpawn":
      return "BossOrInvasionSpawn";
    case "PlayerDodge":
      return "PlayerDodge";
    case "TilePaint":
      return "TilePaint";
    case "WallPaint":
      return "WallPaint";
    case "Teleport":
      return "Teleport";
    case "PlayerHealOther":
      return "PlayerHealOther";
    case "DimensionsUpdate":
      return "DimensionsUpdate";
    case "ClientUuid":
      return "ClientUuid";
    case "ChestName":
      return "ChestName";
    case "NpcCatch":
      return "NpcCatch";
    case "NpcRelease":
      return "NpcRelease";
    case "TravellingMerchantInventory":
      return "TravellingMerchantInventory";
    case "TeleportationPotion":
      return "TeleportationPotion";
    case "AnglerQuest":
      return "AnglerQuest";
    case "AnglerQuestComplete":
      return "AnglerQuestComplete";
    case "AnglerQuestsCompletedAmount":
      return "AnglerQuestsCompletedAmount";
    case "TemporaryAnimationCreate":
      return "TemporaryAnimationCreate";
    case "InvasionProgressReport":
      return "InvasionProgressReport";
    case "ObjectPlace":
      return "ObjectPlace";
    case "PlayerChestIndexSync":
      return "PlayerChestIndexSync";
    case "CombatNumberCreate":
      return "CombatNumberCreate";
    case "NetModuleLoad":
      return "NetModuleLoad";
    case "NpcKillCount":
      return "NpcKillCount";
    case "PlayerStealth":
      return "PlayerStealth";
    case "ItemForceIntoNearestChest":
      return "ItemForceIntoNearestChest";
    case "TileEntityUpdate":
      return "TileEntityUpdate";
    case "TileEntityPlace":
      return "TileEntityPlace";
    case "ItemDropModify":
      return "ItemDropModify";
    case "ItemFramePlace":
      return "ItemFramePlace";
    case "ItemDropInstancedUpdate":
      return "ItemDropInstancedUpdate";
    case "EmoteBubble":
      return "EmoteBubble";
    case "ExtraValueSync":
      return "ExtraValueSync";
    case "SocialHandshake":
      return "SocialHandshake";
    case "Unused":
      return "Unused";
    case "PortalKill":
      return "PortalKill";
    case "PlayerTeleportPortal":
      return "PlayerTeleportPortal";
    case "NpcKilledNotification":
      return "NpcKilledNotification";
    case "EventNotification":
      return "EventNotification";
    case "MinionTargetUpdate":
      return "MinionTargetUpdate";
    case "NpcTeleportPortal":
      return "NpcTeleportPortal";
    case "ShieldStrengthsUpdate":
      return "ShieldStrengthsUpdate";
    case "NebulaLevelUp":
      return "NebulaLevelUp";
    case "MoonLordCountdown":
      return "MoonLordCountdown";
    case "NpcShopItem":
      return "NpcShopItem";
    case "GemLockToggle":
      return "GemLockToggle";
    case "SmokePoof":
      return "SmokePoof";
    case "ChatMessageSmart":
      return "ChatMessageSmart";
    case "WiredCannonShot":
      return "WiredCannonShot";
    case "MassWireOperation":
      return "MassWireOperation";
    case "MassWireOperationPay":
      return "MassWireOperationPay";
    case "PartyToggle":
      return "PartyToggle";
    case "TreeGrowFx":
      return "TreeGrowFx";
    case "CrystalInvasionStart":
      return "CrystalInvasionStart";
    case "CrystalInvasionWipeAll":
      return "CrystalInvasionWipeAll";
    case "MinionAttackTargetUpdate":
      return "MinionAttackTargetUpdate";
    case "CrystalInvasionSendWaitTime":
      return "CrystalInvasionSendWaitTime";
    case "PlayerDamage":
      return "PlayerDamage";
    case "PlayerDeath":
      return "PlayerDeath";
    case "CombatTextCreate":
      return "CombatTextCreate";
    case "Emoji":
      return "Emoji";
    case "TileEntityDisplayDollItemSync":
      return "TileEntityDisplayDollItemSync";
    case "TileEntityInteractionRequest":
      return "TileEntityInteractionRequest";
    case "WeaponsRackTryPlacing":
      return "WeaponsRackTryPlacing";
    case "TileEntityHatRackItemSync":
      return "TileEntityHatRackItemSync";
    case "TilePickingSync":
      return "TilePickingSync";
    case "RevengeMarkerSync":
      return "RevengeMarkerSync";
    case "RevengeMarkerRemove":
      return "RevengeMarkerRemove";
    case "GolfBallLandInCup":
      return "GolfBallLandInCup";
    case "ClientFinishConnectingToServer":
      return "ClientFinishConnectingToServer";
    case "NpcFishOut":
      return "NpcFishOut";
    case "NpcTamper":
      return "NpcTamper";
    case "LegacySoundPlay":
      return "LegacySoundPlay";
    case "FoodPlatterTryPlacing":
      return "FoodPlatterTryPlacing";
    case "PlayerLuckFactorsUpdate":
      return "PlayerLuckFactorsUpdate";
    case "PlayerDead":
      return "PlayerDead";
    case "CavernMonsterTypeSync":
      return "CavernMonsterTypeSync";
    case "NpcBuffRemovalRequest":
      return "NpcBuffRemovalRequest";
    case "ClientSyncedInventory":
      return "ClientSyncedInventory";
    case "CountsAsHostForGameplaySet":
      return "CountsAsHostForGameplaySet";
    case "CreditsOrSlimeTransform":
      return "CreditsOrSlimeTransform";
    case "LucyAxeMessage":
      return "LucyAxeMessage";
    case "PiggyBankVoidLensUpdate":
      return "PiggyBankVoidLensUpdate";
    case "DungeonDefendersEventAttemptSkipWait":
      return "DungeonDefendersEventAttemptSkipWait";
    case "HaveDryadDoStardewAnimation":
      return "HaveDryadDoStardewAnimation";
    case "ItemDropShimmeredUpdate":
      return "ItemDropShimmeredUpdate";
    case "ShimmerEffectOrCoinLuck":
      return "ShimmerEffectOrCoinLuck";
    case "LoadoutSwitch":
      return "LoadoutSwitch";
    case "ItemDropProtectedUpdate":
      return "ItemDropProtectedUpdate";
    case "DeadCellsDisplayJarTryPlacing":
      return "DeadCellsDisplayJarTryPlacing";
    case "PlayerSpectate":
      return "PlayerSpectate";
    case "ItemDropClear":
      return "ItemDropClear";
    case "PlayerItemUseSound":
      return "PlayerItemUseSound";
    case "NpcHurtByDebuff":
      return "NpcHurtByDebuff";
    case "Ping":
      return "Ping";
    case "ChestResize":
      return "ChestResize";
    case "LeashedEntityAnchorInsertItem":
      return "LeashedEntityAnchorInsertItem";
    case "PlayerTeamUpdate":
      return "PlayerTeamUpdate";
    case "PlayerTeamSwapSpawn":
      return "PlayerTeamSwapSpawn";
    case "SectionRequest":
      return "SectionRequest";
    case "ItemDropPosition":
      return "ItemDropPosition";
    case "HostToken":
      return "HostToken";
  }
}

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Stdlib_JsError.js
function throwWithMessage(str) {
  throw new Error(str);
}

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Primitive_exceptions.js
function isExtension(e) {
  if (e == null) {
    return false;
  } else {
    return typeof e.RE_EXN_ID === "string";
  }
}
function internalToException(e) {
  if (isExtension(e)) {
    return e;
  } else {
    return {
      RE_EXN_ID: "JsExn",
      _1: e
    };
  }
}

// src/ErrorAwarePacketReader.js
function readByteUnsafe(prim) {
  return prim.readByte();
}
function readUInt16Unsafe(prim) {
  return prim.readUInt16();
}
function readInt16Unsafe(prim) {
  return prim.readInt16();
}
function readUInt32Unsafe(prim) {
  return prim.readUInt32();
}
function readInt32Unsafe(prim) {
  return prim.readInt32();
}
function readUInt64Unsafe(prim) {
  return prim.readUInt64();
}
function readStringUnsafe(prim) {
  return prim.readString();
}
function readSingleUnsafe(prim) {
  return prim.readSingle();
}
function readSByteUnsafe(prim) {
  return prim.readSByte();
}
function readColorUnsafe(prim) {
  return prim.readColor();
}
function readNetworkTextUnsafe(prim) {
  return prim.readNetworkText();
}
function getBytesLeftUnsafe(prim) {
  return prim.bytesLeft;
}
function withContext(fn, reader, context) {
  try {
    return {
      TAG: "Ok",
      _0: fn(reader)
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function readByte(reader, context) {
  return withContext(readByteUnsafe, reader, context);
}
function readBool(reader, context) {
  return withContext((reader2) => reader2.readByte() === 1, reader, context);
}
function readUInt16(reader, context) {
  return withContext(readUInt16Unsafe, reader, context);
}
function readInt16(reader, context) {
  return withContext(readInt16Unsafe, reader, context);
}
function readUInt32(reader, context) {
  return withContext(readUInt32Unsafe, reader, context);
}
function readInt32(reader, context) {
  return withContext(readInt32Unsafe, reader, context);
}
function readUInt64(reader, context) {
  return withContext(readUInt64Unsafe, reader, context);
}
function readString(reader, context) {
  return withContext(readStringUnsafe, reader, context);
}
function readBytes(reader, count, context) {
  return withContext((reader2) => reader2.readBytes(count), reader, context);
}
function read7BitEncodedInt(reader, context) {
  return withContext((reader2) => {
    let result = 0;
    let shift = 0;
    let $$continue = true;
    while ($$continue) {
      if (shift >= 35) {
        throwWithMessage("Invalid 7-bit encoded int");
      }
      let byte = reader2.readByte();
      result = result | (byte & 127) << shift;
      if ((byte & 128) === 0) {
        $$continue = false;
      } else {
        shift = shift + 7 | 0;
      }
    }
    ;
    return result;
  }, reader, context);
}
function readSingle(reader, context) {
  return withContext(readSingleUnsafe, reader, context);
}
function readSByte(reader, context) {
  return withContext(readSByteUnsafe, reader, context);
}
function readColor(reader, context) {
  return withContext(readColorUnsafe, reader, context);
}
function readBuffer(reader, bytes, context) {
  return withContext((reader2) => reader2.readBuffer(bytes), reader, context);
}
function readNetworkText(reader, context) {
  return withContext(readNetworkTextUnsafe, reader, context);
}
function getBytesLeft(reader) {
  return withContext(getBytesLeftUnsafe, reader, "getBytesLeft");
}

// src/ErrorAwarePacketWriter.js
var ErrorAwarePacketWriter_exports = {};
__export(ErrorAwarePacketWriter_exports, {
  data: () => data,
  make: () => make,
  packBool: () => packBool,
  packBuffer: () => packBuffer,
  packByte: () => packByte,
  packBytes: () => packBytes,
  packColor: () => packColor,
  packInt16: () => packInt16,
  packInt32: () => packInt32,
  packNetworkText: () => packNetworkText,
  packSByte: () => packSByte,
  packSingle: () => packSingle,
  packString: () => packString,
  packUInt16: () => packUInt16,
  packUInt32: () => packUInt32,
  packUInt64: () => packUInt64,
  setType: () => setType
});

// node_modules/.pnpm/@popstarfreas+packetfactory@7.1.3/node_modules/@popstarfreas/packetfactory/app/bufferwriter.js
var BufferWriter = class {
  constructor(buffer) {
    this._offset = 0;
    this._buffer = buffer;
  }
  changeOffset(offset) {
    this._offset = offset;
  }
  packInt16(int16) {
    this._buffer.writeInt16LE(int16, this._offset);
    this._offset += 2;
    return this;
  }
  packUInt16(uint16) {
    this._buffer.writeUInt16LE(uint16, this._offset);
    this._offset += 2;
    return this;
  }
  packInt32(int32) {
    this._buffer.writeInt32LE(int32, this._offset);
    this._offset += 4;
    return this;
  }
  packUInt32(uint32) {
    this._buffer.writeUInt32LE(uint32, this._offset);
    this._offset += 4;
    return this;
  }
  packInt64(int64) {
    this._buffer.writeBigInt64LE(int64, this._offset);
    this._offset += 8;
    return this;
  }
  packUInt64(uint64) {
    this._buffer.writeBigUInt64LE(uint64, this._offset);
    this._offset += 8;
    return this;
  }
  packSingle(single) {
    this._buffer.writeFloatLE(single, this._offset);
    this._offset += 4;
    return this;
  }
  packDouble(double) {
    this._buffer.writeDoubleLE(double, this._offset);
    this._offset += 8;
    return this;
  }
  packByte(byte) {
    if (byte < 0)
      byte = -byte;
    this._buffer.writeUInt8(byte, this._offset);
    this._offset += 1;
    return this;
  }
  packSByte(byte) {
    this._buffer.writeInt8(byte, this._offset);
    this._offset += 1;
    return this;
  }
  packBytes(bytes) {
    for (const byte of bytes) {
      this.packByte(byte);
    }
    return this;
  }
  packHex(hex) {
    const buf = Buffer.from(hex, "hex");
    buf.copy(this._buffer, this._offset, 0);
    this._offset += buf.length;
    return this;
  }
  packBuffer(buffer) {
    buffer.copy(this._buffer, this._offset, 0);
    this._offset += buffer.length;
    return this;
  }
  packString(str) {
    const packedStr = Buffer.from(str, "utf8");
    const strLen = packedStr.length;
    if (strLen >= 128) {
      this.packByte(strLen % 128 + 128);
      this.packByte(Math.floor(strLen / 128));
    } else {
      this.packByte(strLen);
    }
    this.packBuffer(packedStr);
    return this;
  }
  packColor(color) {
    this.packByte(color.R);
    this.packByte(color.G);
    this.packByte(color.B);
    return this;
  }
  packNetworkText(networkText) {
    this.packByte(networkText.mode);
    this.packString(networkText.text);
    return this;
  }
  get data() {
    return this._buffer;
  }
  get packedLength() {
    return this._offset;
  }
  get slicedData() {
    return this._buffer.slice(0, this._offset);
  }
};
var bufferwriter_default = BufferWriter;

// node_modules/.pnpm/@popstarfreas+packetfactory@7.1.3/node_modules/@popstarfreas/packetfactory/app/dumbpacketwriter.js
var PacketWriter = class extends bufferwriter_default {
  updateSize() {
    const offset = this._offset;
    this._offset = 0;
    super.packUInt16(offset);
    this._offset = offset;
  }
  setType(type) {
    this.packUInt16(3);
    this.packByte(type);
    return this;
  }
  packInt16(int16) {
    super.packInt16(int16);
    this.updateSize();
    return this;
  }
  packUInt16(uint16) {
    super.packUInt16(uint16);
    this.updateSize();
    return this;
  }
  packInt32(int32) {
    super.packInt32(int32);
    this.updateSize();
    return this;
  }
  packUInt32(uint32) {
    super.packUInt32(uint32);
    this.updateSize();
    return this;
  }
  packSingle(single) {
    super.packSingle(single);
    this.updateSize();
    return this;
  }
  packByte(byte) {
    super.packByte(byte);
    this.updateSize();
    return this;
  }
  packSByte(byte) {
    super.packSByte(byte);
    this.updateSize();
    return this;
  }
  packHex(hex) {
    super.packHex(hex);
    this.updateSize();
    return this;
  }
  packBuffer(buffer) {
    super.packBuffer(buffer);
    this.updateSize();
    return this;
  }
  packString(str) {
    super.packString(str);
    this.updateSize();
    return this;
  }
  packNetworkText(networkText) {
    this.packByte(networkText.mode);
    this.packString(networkText.text);
    return this;
  }
  packColor(color) {
    this.packByte(color.R);
    this.packByte(color.G);
    this.packByte(color.B);
    return this;
  }
};
var dumbpacketwriter_default = PacketWriter;

// node_modules/.pnpm/@popstarfreas+packetfactory@7.1.3/node_modules/@popstarfreas/packetfactory/app/networktext.js
var NetworkText = class {
  constructor(mode, text, substitutionList = void 0) {
    this._mode = mode;
    this._text = text;
    this._substitutionList = substitutionList;
  }
  get mode() {
    return this._mode;
  }
  get text() {
    return this._text;
  }
  get substitutionList() {
    return this._substitutionList;
  }
  toString() {
    return this._text;
  }
};
var networktext_default = NetworkText;

// node_modules/.pnpm/@popstarfreas+packetfactory@7.1.3/node_modules/@popstarfreas/packetfactory/app/bufferreader.js
var BufferReader = class {
  constructor(data2) {
    this.head = 0;
    this._data = data2;
  }
  get bytesLeft() {
    return this._data.length - this.head;
  }
  /**
   * Gets the data still stored by the reader
   *
   * @return The hex data still stored by the reader
   */
  get data() {
    return this._data;
  }
  set buffer(data2) {
    this._data = data2;
    this.head = 0;
  }
  /**
   * Reads a byte from the data
   *
   * @return The byte removed
   */
  readByte() {
    const byte = this._data.readUInt8(this.head);
    this.head += 1;
    return byte;
  }
  /**
   * Reads a certain number of bytes from the data
   *
   * @return The bytes removed
   */
  readBytes(amount) {
    const bytes = [];
    for (let i = 0; i < amount; i++) {
      bytes.push(this.readByte());
    }
    return bytes;
  }
  /**
   * Reads a chunk of data and returns it in a buffer
   *
   * @param size The number of bytes to read
   */
  readBuffer(size) {
    const buffer = this._data.slice(this.head, this.head + size);
    this.head += size;
    return buffer;
  }
  /**
   * Reads three bytes from the data and puts them into a color object
   *
   * @return The color object {R, G, B}
   */
  readColor() {
    const color = {
      R: this.readByte(),
      G: this.readByte(),
      B: this.readByte()
    };
    return color;
  }
  /**
   * Reads a byte and converts it into an sbyte
   *
   * @return The sbyte removed
   */
  readSByte() {
    const byte = this._data.readInt8(this.head);
    this.head += 1;
    return byte;
  }
  /**
   * Reads 2 bytes from the data, converting it to a signed int16
   * as an int16.
   *
   * @return An int16
   */
  readInt16() {
    const int16 = this._data.readInt16LE(this.head);
    this.head += 2;
    return int16;
  }
  /**
   * Reads 2 bytes from the data and converts it to an unsigned int16
   *
   * @return A uint16
   */
  readUInt16() {
    const uint16 = this._data.readUInt16LE(this.head);
    this.head += 2;
    return uint16;
  }
  /**
   * Reads 4 bytes from the data, converting it into a signed int32
   *
   * Perf: https://jsperf.com/conv-dimen-1
   * @return The signed int32 removed from the data
   */
  readInt32() {
    const int32 = this._data.readInt32LE(this.head);
    this.head += 4;
    return int32;
  }
  /**
   * Reads 4 bytes from the data, converting it into an unsigned int32
   *
   * @return The unsigned int32 removed from the data
   */
  readUInt32() {
    const uint32 = this._data.readUInt32LE(this.head);
    this.head += 4;
    return uint32;
  }
  /**
   * Reads 8 bytes from the data, converting it into an unsigned int64
   *
   * @return The unsigned int64 removed from the data
   */
  readUInt64() {
    const uint64 = this._data.readBigUInt64LE(this.head);
    this.head += 8;
    return uint64;
  }
  /**
   * Reads 8 bytes from the data, converting it into an unsigned int64
   *
   * @return The unsigned int64 removed from the data
   */
  readInt64() {
    const int64 = this._data.readBigInt64LE(this.head);
    this.head += 8;
    return int64;
  }
  /**
   * Alias for readFloat()
   *
   * @return The single removed from the data
   */
  readSingle() {
    const single = this._data.readFloatLE(this.head);
    this.head += 4;
    return single;
  }
  /**
   * Reads 8 bytes from the data converting it into a double
   *
   * @return The double removed from the data
   */
  readDouble() {
    const double = this._data.readDoubleLE(this.head);
    this.head += 8;
    return double;
  }
  /**
   * Reads a certain number of bytes for the string length, and then further
   * bytes depending on the length, converting it into a string of characters.
   *
   * @return The string removed from the data
   */
  readString() {
    const firstByte = this.readByte();
    let strLength = firstByte;
    if (firstByte >= 128) {
      const secondByte = this.readByte();
      strLength = firstByte - 128 + (secondByte << 7);
    }
    const strContent = this._data.slice(this.head, this.head + strLength).toString("utf8");
    this.head += strLength;
    return strContent;
  }
  /**
   * Reads the mode byte and the string bytes
   *
   * @return The text
   */
  readNetworkText() {
    const mode = this.readByte();
    const text = this.readString();
    return new networktext_default(mode, text);
  }
};
var bufferreader_default = BufferReader;

// node_modules/.pnpm/@popstarfreas+packetfactory@7.1.3/node_modules/@popstarfreas/packetfactory/app/utils.js
function getPackedStringByteLen(str) {
  const strLen = Buffer.from(str, "utf8").length;
  if (strLen >= 128) {
    return 2 + strLen;
  }
  return 1 + strLen;
}

// node_modules/.pnpm/@popstarfreas+packetfactory@7.1.3/node_modules/@popstarfreas/packetfactory/app/packetwriter.js
var PacketWriter2 = class {
  constructor(writerCls = dumbpacketwriter_default) {
    this._queue = [];
    this._size = 0;
    this._data = null;
    this._writerCls = writerCls;
  }
  compile() {
    const writer = new this._writerCls(Buffer.allocUnsafe(this._size));
    for (const item of this._queue) {
      writer[item.method](item.value);
    }
    this._data = writer.data;
  }
  setType(type) {
    this._queue.push({ method: "setType", value: type });
    if (this._size === 0)
      this._size = 3;
    return this;
  }
  packInt16(int16) {
    this._queue.push({ method: "packInt16", value: int16 });
    this._size += 2;
    return this;
  }
  packUInt16(uint16) {
    this._queue.push({ method: "packUInt16", value: uint16 });
    this._size += 2;
    return this;
  }
  packInt32(int32) {
    this._queue.push({ method: "packInt32", value: int32 });
    this._size += 4;
    return this;
  }
  packUInt32(uint32) {
    this._queue.push({ method: "packUInt32", value: uint32 });
    this._size += 4;
    return this;
  }
  packInt64(int64) {
    this._queue.push({ method: "packInt64", value: int64 });
    this._size += 8;
    return this;
  }
  packUInt64(uint64) {
    this._queue.push({ method: "packUInt64", value: uint64 });
    this._size += 8;
    return this;
  }
  packSingle(single) {
    this._queue.push({ method: "packSingle", value: single });
    this._size += 4;
    return this;
  }
  packDouble(double) {
    this._queue.push({ method: "packDouble", value: double });
    this._size += 8;
    return this;
  }
  packByte(byte) {
    this._queue.push({ method: "packByte", value: byte });
    this._size += 1;
    return this;
  }
  packSByte(byte) {
    this._queue.push({ method: "packSByte", value: byte });
    this._size += 1;
    return this;
  }
  packBytes(bytes) {
    this._queue.push({ method: "packBytes", value: bytes });
    this._size += bytes.length;
    return this;
  }
  packHex(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error("Tried to pack invalid hex string.");
    }
    this._queue.push({ method: "packHex", value: hex });
    this._size += hex.length / 2;
    return this;
  }
  packBuffer(buffer) {
    this._queue.push({ method: "packBuffer", value: buffer });
    this._size += buffer.length;
    return this;
  }
  packString(str) {
    this._queue.push({ method: "packString", value: str });
    this._size += getPackedStringByteLen(str);
    return this;
  }
  packNetworkText(networkText) {
    this.packByte(networkText.mode);
    this.packString(networkText.text);
    return this;
  }
  packColor(color) {
    this.packByte(color.R);
    this.packByte(color.G);
    this.packByte(color.B);
    return this;
  }
  get data() {
    if (this._data === null) {
      this.compile();
    }
    return this._data;
  }
};
var packetwriter_default = PacketWriter2;

// src/ErrorAwarePacketWriter.js
function packSingle(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packSingle(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packUInt32(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packUInt32(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packInt32(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packInt32(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packByte(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packByte(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packBool(self, value, context) {
  return packByte(self, value ? 1 : 0, context);
}
function packUInt16(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packUInt16(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packInt16(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packInt16(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packUInt64(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packUInt64(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packString(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packString(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packSByte(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packSByte(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packBytes(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packBytes(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packColor(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packColor(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packBuffer(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packBuffer(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packNetworkText(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packNetworkText(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function setType(self, value) {
  return {
    TAG: "Writing",
    _0: self.setType(value)
  };
}
function data(self) {
  if (self.TAG === "Writing") {
    return {
      TAG: "Ok",
      _0: self._0.data
    };
  } else {
    return {
      TAG: "Error",
      _0: self._0
    };
  }
}
function make() {
  return new packetwriter_default();
}

// node_modules/.pnpm/@popstarfreas+packetfactory@7.1.3/node_modules/@popstarfreas/packetfactory/app/packetreader.js
var PacketReader = class extends bufferreader_default {
  constructor(data2) {
    super(data2);
    this.readUInt16();
    this._type = this.readByte();
  }
  /**
   * Gets the packet type
   *
   * @return The packet type of the packet
   */
  get type() {
    return this._type;
  }
};
var packetreader_default = PacketReader;

// src/packetv1449/PacketV1449_AnglerQuest.js
function parse(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "anglerQuest");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readBool(reader, "anglerQuestFinished");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        anglerQuest: e._0,
        anglerQuestFinished: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer(self) {
  return data(packBool(packByte(setType(new packetwriter_default(), toInt("AnglerQuest")), self.anglerQuest, "anglerQuest"), self.anglerQuestFinished, "anglerQuestFinished"));
}

// src/packetv1449/PacketV1449_AnglerQuestComplete.js
var PacketV1449_AnglerQuestComplete_exports = {};
__export(PacketV1449_AnglerQuestComplete_exports, {
  parse: () => parse2,
  toBuffer: () => toBuffer2
});
function parse2(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}
function toBuffer2(_self) {
  return data(setType(make(), toInt("AnglerQuestComplete")));
}

// src/packetv1449/PacketV1449_BossOrInvasionSpawn.js
var PacketV1449_BossOrInvasionSpawn_exports = {};
__export(PacketV1449_BossOrInvasionSpawn_exports, {
  parse: () => parse3,
  toBuffer: () => toBuffer3
});
function parse3(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "spawnType");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let rawSpawnType = e$1._0;
  let spawnType;
  let exit = 0;
  switch (rawSpawnType) {
    case -18:
      spawnType = "PeddlersSatchel";
      break;
    case -17:
      spawnType = "CombatBookVolumeTwo";
      break;
    case -16:
      spawnType = "MechQueen";
      break;
    case -15:
      spawnType = "BoughtSlime";
      break;
    case -14:
      spawnType = "BoughtBunny";
      break;
    case -13:
      spawnType = "BoughtDog";
      break;
    case -12:
      spawnType = "BoughtCat";
      break;
    case -11:
      spawnType = "CombatBookUsed";
      break;
    case -10:
      spawnType = "BloodMoon";
      break;
    case -8:
      spawnType = "ImpendingDoom";
      break;
    case -7:
      spawnType = "MartianMoon";
      break;
    case -6:
      spawnType = "Eclipse";
      break;
    case -5:
      spawnType = "SnowMoon";
      break;
    case -4:
      spawnType = "PumpkinMoon";
      break;
    case -3:
      spawnType = "PirateInvasion";
      break;
    case -2:
      spawnType = "FrostInvasion";
      break;
    case -1:
      spawnType = "GoblinInvasion";
      break;
    default:
      exit = 1;
  }
  if (exit === 1) {
    spawnType = rawSpawnType < 0 ? {
      TAG: "Invasion",
      _0: -rawSpawnType | 0
    } : {
      TAG: "Npc",
      _0: rawSpawnType
    };
  }
  return {
    TAG: "Ok",
    _0: {
      playerId: e._0,
      spawnType
    }
  };
}
function packSpawnType(writer, spawnType) {
  if (typeof spawnType === "object") {
    if (spawnType.TAG === "Invasion") {
      return packInt16(writer, -spawnType._0 | 0, "spawnType");
    } else {
      return packInt16(writer, spawnType._0, "spawnType");
    }
  }
  switch (spawnType) {
    case "GoblinInvasion":
      return packInt16(writer, -1, "spawnType");
    case "FrostInvasion":
      return packInt16(writer, -2, "spawnType");
    case "PirateInvasion":
      return packInt16(writer, -3, "spawnType");
    case "PumpkinMoon":
      return packInt16(writer, -4, "spawnType");
    case "SnowMoon":
      return packInt16(writer, -5, "spawnType");
    case "Eclipse":
      return packInt16(writer, -6, "spawnType");
    case "MartianMoon":
      return packInt16(writer, -7, "spawnType");
    case "ImpendingDoom":
      return packInt16(writer, -8, "spawnType");
    case "BloodMoon":
      return packInt16(writer, -10, "spawnType");
    case "CombatBookUsed":
      return packInt16(writer, -11, "spawnType");
    case "BoughtCat":
      return packInt16(writer, -12, "spawnType");
    case "BoughtDog":
      return packInt16(writer, -13, "spawnType");
    case "BoughtBunny":
      return packInt16(writer, -14, "spawnType");
    case "BoughtSlime":
      return packInt16(writer, -15, "spawnType");
    case "MechQueen":
      return packInt16(writer, -16, "spawnType");
    case "CombatBookVolumeTwo":
      return packInt16(writer, -17, "spawnType");
    case "PeddlersSatchel":
      return packInt16(writer, -18, "spawnType");
  }
}
function toBuffer3(self) {
  return data(packSpawnType(packInt16(setType(make(), toInt("BossOrInvasionSpawn")), self.playerId, "playerId"), self.spawnType));
}

// src/packetv1449/PacketV1449_ChatMessageSmart.js
var PacketV1449_ChatMessageSmart_exports = {};
__export(PacketV1449_ChatMessageSmart_exports, {
  parse: () => parse4,
  toBuffer: () => toBuffer4
});
function parse4(payload) {
  let reader = new packetreader_default(payload);
  let e = readColor(reader, "color");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readNetworkText(reader, "message");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "widthLimit");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        color: e._0,
        message: e$1._0,
        widthLimit: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
function toBuffer4(self) {
  return data(packInt16(packNetworkText(packColor(setType(make(), toInt("ChatMessageSmart")), self.color, "color"), self.message, "message"), self.widthLimit, "widthLimit"));
}

// src/packetv1449/PacketV1449_ChestItem.js
var PacketV1449_ChestItem_exports = {};
__export(PacketV1449_ChestItem_exports, {
  parse: () => parse5,
  toBuffer: () => toBuffer5
});
function parse5(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "chestId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "slot");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "stack");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "prefix");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "itemNetId");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        chestId: e._0,
        slot: e$1._0,
        stack: e$2._0,
        prefix: e$3._0,
        itemNetId: e$4._0
      }
    };
  } else {
    return e$4;
  }
}
function toBuffer5(self) {
  return data(packInt16(packByte(packInt16(packByte(packInt16(setType(make(), toInt("ChestItem")), self.chestId, "chestId"), self.slot, "slot"), self.stack, "stack"), self.prefix, "prefix"), self.itemNetId, "itemNetId"));
}

// src/packetv1449/PacketV1449_ChestOrTempleUnlock.js
var PacketV1449_ChestOrTempleUnlock_exports = {};
__export(PacketV1449_ChestOrTempleUnlock_exports, {
  parse: () => parse6,
  toBuffer: () => toBuffer6
});
function unlockTypeToInt(self) {
  switch (self) {
    case "Chest":
      return 1;
    case "TempleDoor":
      return 2;
    case "ChestLock":
      return 3;
  }
}
function unlockTypeFromInt(self) {
  switch (self) {
    case 1:
      return "Chest";
    case 2:
      return "TempleDoor";
    case 3:
      return "ChestLock";
    default:
      return;
  }
}
function parse6(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "unlockType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let unlockType = unlockTypeFromInt(e._0);
  let e$1 = unlockType !== void 0 ? {
    TAG: "Ok",
    _0: unlockType
  } : {
    TAG: "Error",
    _0: {
      context: "Packet_ChestOrTempleUnlock.parse",
      error: new Error("Unknown unlock type")
    }
  };
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "x");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "y");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        unlockType: e$1._0,
        x: e$2._0,
        y: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer6(self) {
  return data(packInt16(packInt16(packByte(setType(make(), toInt("ChestOrTempleUnlock")), unlockTypeToInt(self.unlockType), "unlockType"), self.x, "x"), self.y, "y"));
}

// src/packetv1449/PacketV1449_ChestPlace.js
var PacketV1449_ChestPlace_exports = {};
__export(PacketV1449_ChestPlace_exports, {
  Action: () => Action,
  parse: () => parse7,
  toBuffer: () => toBuffer7
});
function toInt2(action) {
  switch (action) {
    case "PlaceChest":
      return 0;
    case "KillChest":
      return 1;
    case "PlaceDresser":
      return 2;
    case "KillDresser":
      return 3;
    case "PlaceContainer":
      return 4;
    case "KillContainer":
      return 5;
  }
}
function fromInt2(action) {
  switch (action) {
    case 0:
      return "PlaceChest";
    case 1:
      return "KillChest";
    case 2:
      return "PlaceDresser";
    case 3:
      return "KillDresser";
    case 4:
      return "PlaceContainer";
    case 5:
      return "KillContainer";
    default:
      return;
  }
}
function toString(action) {
  switch (action) {
    case "PlaceChest":
      return "PlaceChest";
    case "KillChest":
      return "KillChest";
    case "PlaceDresser":
      return "PlaceDresser";
    case "KillDresser":
      return "KillDresser";
    case "PlaceContainer":
      return "PlaceContainer";
    case "KillContainer":
      return "KillContainer";
  }
}
var Action = {
  toInt: toInt2,
  fromInt: fromInt2,
  toString
};
function parse7(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "action");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "style");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "id");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let action = fromInt2(e._0);
  let action$1 = action !== void 0 ? {
    TAG: "Ok",
    _0: action
  } : {
    TAG: "Error",
    _0: {
      context: "ChestPlace.parse.action",
      error: new Error("Unknown action")
    }
  };
  if (action$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        action: action$1._0,
        x: e$1._0,
        y: e$2._0,
        style: e$3._0,
        id: e$4._0
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: action$1._0
    };
  }
}
function packAction(writer, action) {
  let byte;
  switch (action) {
    case "PlaceChest":
      byte = 0;
      break;
    case "KillChest":
      byte = 1;
      break;
    case "PlaceDresser":
      byte = 2;
      break;
    case "KillDresser":
      byte = 3;
      break;
    case "PlaceContainer":
      byte = 4;
      break;
    case "KillContainer":
      byte = 5;
      break;
  }
  return packByte(writer, byte, "action");
}
function toBuffer7(self) {
  return data(packInt16(packInt16(packInt16(packInt16(packAction(setType(make(), toInt("ChestPlace")), self.action), self.x, "x"), self.y, "y"), self.style, "style"), self.id, "id"));
}

// src/packetv1449/PacketV1449_ClientFinishConnectingToServer.js
var PacketV1449_ClientFinishConnectingToServer_exports = {};
__export(PacketV1449_ClientFinishConnectingToServer_exports, {
  parse: () => parse8,
  toBuffer: () => toBuffer8
});
function parse8(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}
function toBuffer8(_self) {
  return data(setType(make(), toInt("ClientFinishConnectingToServer")));
}

// src/packetv1449/PacketV1449_ConnectRequest.js
var PacketV1449_ConnectRequest_exports = {};
__export(PacketV1449_ConnectRequest_exports, {
  parse: () => parse9,
  toBuffer: () => toBuffer9
});
function parse9(payload) {
  let reader = new packetreader_default(payload);
  let e = readString(reader, "version");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        version: e._0
      }
    };
  } else {
    return e;
  }
}
function toBuffer9(self) {
  return data(packString(setType(make(), toInt("ConnectRequest")), self.version, "version"));
}

// src/packetv1449/PacketV1449_CountsAsHostForGameplaySet.js
var PacketV1449_CountsAsHostForGameplaySet_exports = {};
__export(PacketV1449_CountsAsHostForGameplaySet_exports, {
  parse: () => parse10,
  toBuffer: () => toBuffer10
});
function parse10(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readBool(reader, "countsAsHost");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        countsAsHost: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer10(self) {
  return data(packBool(packByte(setType(new packetwriter_default(), toInt("CountsAsHostForGameplaySet")), self.playerId, "playerId"), self.countsAsHost, "countsAsHost"));
}

// src/packetv1449/PacketV1449_CreditsOrSlimeTransform.js
var PacketV1449_CreditsOrSlimeTransform_exports = {};
__export(PacketV1449_CreditsOrSlimeTransform_exports, {
  EventType: () => EventType,
  parse: () => parse11,
  toBuffer: () => toBuffer11
});
function fromInt3(num) {
  switch (num) {
    case 0:
      return "CreditsTimeRemainingSet";
    case 1:
      return "CopperSlimeTransform";
    case 2:
      return "ElderSlimeTransform";
    default:
      return;
  }
}
function toInt3(eventType) {
  switch (eventType) {
    case "CreditsTimeRemainingSet":
      return 0;
    case "CopperSlimeTransform":
      return 1;
    case "ElderSlimeTransform":
      return 2;
  }
}
function parse11(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "eventType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "value");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let eventType = fromInt3(e._0);
  if (eventType !== void 0) {
    return {
      TAG: "Ok",
      _0: {
        eventType,
        value: e$1._0
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: {
        context: "Packet_CreditsOrSlimeTransform.parse",
        error: new Error("Unknown event type")
      }
    };
  }
}
function toBuffer11(self) {
  return data(packInt32(packByte(setType(make(), toInt("CreditsOrSlimeTransform")), toInt3(self.eventType), "eventType"), self.value, "value"));
}
var EventType = {};

// src/packetv1449/PacketV1449_CrystalInvasionStart.js
var PacketV1449_CrystalInvasionStart_exports = {};
__export(PacketV1449_CrystalInvasionStart_exports, {
  parse: () => parse12,
  toBuffer: () => toBuffer12
});
function parse12(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer12(self) {
  return data(packInt16(packInt16(setType(make(), toInt("CrystalInvasionStart")), self.x, "x"), self.y, "y"));
}

// src/packetv1449/PacketV1449_DimensionsUpdate.js
var PacketV1449_DimensionsUpdate_exports = {};
__export(PacketV1449_DimensionsUpdate_exports, {
  UpdateType: () => UpdateType,
  parse: () => parse13,
  toBuffer: () => toBuffer13
});
function toInt4(self) {
  switch (self) {
    case "RealIpAddress":
      return 0;
    case "GamemodesJoinMode":
      return 1;
    case "SwitchServer":
      return 2;
    case "SwitchServerManual":
      return 3;
  }
}
function fromInt4(n) {
  switch (n) {
    case 0:
      return "RealIpAddress";
    case 1:
      return "GamemodesJoinMode";
    case 2:
      return "SwitchServer";
    case 3:
      return "SwitchServerManual";
    default:
      return;
  }
}
var UpdateType = {
  toInt: toInt4,
  fromInt: fromInt4
};
function parse13(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "updateType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let match = fromInt4(e._0);
  if (match === void 0) {
    return {
      TAG: "Error",
      _0: {
        context: "DimensionsUpdate.parse.updateType",
        error: new Error("Unknown updateType")
      }
    };
  }
  switch (match) {
    case "RealIpAddress":
      let e$1 = readString(reader, "ip");
      if (e$1.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "RealIpAddress",
            _0: e$1._0
          }
        };
      } else {
        return e$1;
      }
    case "GamemodesJoinMode":
      return {
        TAG: "Ok",
        _0: "GamemodesJoinMode"
      };
    case "SwitchServer":
      let e$2 = readString(reader, "dimensionName");
      if (e$2.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "SwitchServer",
            _0: e$2._0
          }
        };
      } else {
        return e$2;
      }
    case "SwitchServerManual":
      let e$3 = readString(reader, "ip");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = readUInt16(reader, "port");
      if (e$4.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "SwitchServerManual",
            _0: e$3._0,
            _1: e$4._0
          }
        };
      } else {
        return e$4;
      }
  }
}
function gamemodesJoinModeToBuffer() {
  return data(packInt16(setType(make(), toInt("DimensionsUpdate")), 1, "updateType"));
}
function toBuffer13(self) {
  if (typeof self !== "object") {
    return gamemodesJoinModeToBuffer();
  }
  switch (self.TAG) {
    case "RealIpAddress":
      let ip = self._0;
      return data(packString(packInt16(setType(make(), toInt("DimensionsUpdate")), 0, "updateType"), ip, "ip"));
    case "SwitchServer":
      let dimensionName = self._0;
      return data(packString(packInt16(setType(make(), toInt("DimensionsUpdate")), 2, "updateType"), dimensionName, "dimensionName"));
    case "SwitchServerManual":
      let ip$1 = self._0;
      let port = self._1;
      return data(packUInt16(packString(packInt16(setType(make(), toInt("DimensionsUpdate")), 3, "updateType"), ip$1, "ip"), port, "port"));
  }
}

// src/packetv1449/PacketV1449_ExtraValueSync.js
var PacketV1449_ExtraValueSync_exports = {};
__export(PacketV1449_ExtraValueSync_exports, {
  parse: () => parse14,
  toBuffer: () => toBuffer14
});
function parse14(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcSlotId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "extraValue");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "x");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "y");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcSlotId: e._0,
        extraValue: e$1._0,
        x: e$2._0,
        y: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer14(self) {
  return data(packSingle(packSingle(packInt32(packInt16(setType(make(), toInt("ExtraValueSync")), self.npcSlotId, "npcSlotId"), self.extraValue, "extraValue"), self.x, "x"), self.y, "y"));
}

// src/packetv1449/PacketV1449_HaveDryadDoStardewAnimation.js
var PacketV1449_HaveDryadDoStardewAnimation_exports = {};
__export(PacketV1449_HaveDryadDoStardewAnimation_exports, {
  parse: () => parse15,
  toBuffer: () => toBuffer15
});
function parse15(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}
function toBuffer15(_self) {
  return data(setType(make(), toInt("HaveDryadDoStardewAnimation")));
}

// src/packetv1449/PacketV1449_InvasionProgressReport.js
var PacketV1449_InvasionProgressReport_exports = {};
__export(PacketV1449_InvasionProgressReport_exports, {
  parse: () => parse16,
  toBuffer: () => toBuffer16
});
function parse16(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "progress");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "progressMax");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSByte(reader, "icon");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSByte(reader, "wave");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        progress: e._0,
        progressMax: e$1._0,
        icon: e$2._0,
        wave: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer16(self) {
  return data(packSByte(packSByte(packInt32(packInt32(setType(make(), toInt("InvasionProgressReport")), self.progress, "progress"), self.progressMax, "progressMax"), self.icon, "icon"), self.wave, "wave"));
}

// src/packetv1449/PacketV1449_ItemDropShimmeredUpdate.js
var PacketV1449_ItemDropShimmeredUpdate_exports = {};
__export(PacketV1449_ItemDropShimmeredUpdate_exports, {
  parse: () => parse17,
  toBuffer: () => toBuffer17
});
function parse17(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "itemDropId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "vx");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readSingle(reader, "vy");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readInt16(reader, "stack");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "prefix");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readByte(reader, "noDelay");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$8 = readInt16(reader, "itemId");
  if (e$8.TAG !== "Ok") {
    return e$8;
  }
  let e$9 = readByte(reader, "shimmered");
  if (e$9.TAG !== "Ok") {
    return e$9;
  }
  let e$10 = readSingle(reader, "shimmeredTime");
  if (e$10.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        itemDropId: e._0,
        x: e$1._0,
        y: e$2._0,
        vx: e$3._0,
        vy: e$4._0,
        stack: e$5._0,
        prefix: e$6._0,
        noDelay: e$7._0,
        itemId: e$8._0,
        shimmered: e$9._0 === 1,
        shimmeredTime: e$10._0
      }
    };
  } else {
    return e$10;
  }
}
function toBuffer17(self) {
  return data(packSingle(packByte(packInt16(packByte(packByte(packInt16(packSingle(packSingle(packSingle(packSingle(packInt16(setType(make(), toInt("ItemDropShimmeredUpdate")), self.itemDropId, "itemDropId"), self.x, "x"), self.y, "y"), self.vx, "vx"), self.vy, "vy"), self.stack, "stack"), self.prefix, "prefix"), self.noDelay, "noDelay"), self.itemId, "itemId"), self.shimmered ? 1 : 0, "shimmered"), self.shimmeredTime, "shimmeredTime"));
}

// src/packetv1449/PacketV1449_ItemDropUpdate.js
var PacketV1449_ItemDropUpdate_exports = {};
__export(PacketV1449_ItemDropUpdate_exports, {
  parse: () => parse18,
  toBuffer: () => toBuffer18
});
function parse18(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "itemDropId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "vx");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readSingle(reader, "vy");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readInt16(reader, "stack");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "prefix");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readByte(reader, "noDelay");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$8 = readInt16(reader, "itemId");
  if (e$8.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        itemDropId: e._0,
        x: e$1._0,
        y: e$2._0,
        vx: e$3._0,
        vy: e$4._0,
        stack: e$5._0,
        prefix: e$6._0,
        noDelay: e$7._0,
        itemId: e$8._0
      }
    };
  } else {
    return e$8;
  }
}
function toBuffer18(self) {
  return data(packInt16(packByte(packByte(packInt16(packSingle(packSingle(packSingle(packSingle(packInt16(setType(make(), toInt("ItemDropUpdate")), self.itemDropId, "itemDropId"), self.x, "x"), self.y, "y"), self.vx, "vx"), self.vy, "vy"), self.stack, "stack"), self.prefix, "prefix"), self.noDelay, "noDelay"), self.itemId, "itemId"));
}

// src/packet/Packet_ItemOwner.js
var Packet_ItemOwner_exports = {};
__export(Packet_ItemOwner_exports, {
  Decode: () => Decode,
  Encode: () => Encode,
  parse: () => parse19,
  toBuffer: () => toBuffer19
});
function parse19(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "itemDropId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "owner");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "positionX");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "positionY");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        itemDropId: e._0,
        owner: e$1._0,
        position: {
          x: e$2._0,
          y: e$3._0
        }
      }
    };
  } else {
    return e$3;
  }
}
var Decode = {
  readInt16,
  readByte,
  readSingle,
  parse: parse19
};
function toBuffer19(self) {
  return data(packSingle(packSingle(packByte(packInt16(setType(make(), toInt("ItemOwner")), self.itemDropId, "itemDropId"), self.owner, "owner"), self.position.x, "positionX"), self.position.y, "positionY"));
}
var Encode = {
  packInt16,
  packByte,
  packSingle,
  setType,
  data,
  toBuffer: toBuffer19
};

// src/packetv1449/PacketV1449_ItemOwnerRemove.js
var PacketV1449_ItemOwnerRemove_exports = {};
__export(PacketV1449_ItemOwnerRemove_exports, {
  parse: () => parse20,
  toBuffer: () => toBuffer20
});
function parse20(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "itemDropId");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        itemDropId: e._0
      }
    };
  } else {
    return e;
  }
}
function toBuffer20(self) {
  return data(packInt16(setType(make(), toInt("ItemOwnerRemove")), self.itemDropId, "itemDropId"));
}

// src/packetv1449/PacketV1449_LoadoutSwitch.js
var PacketV1449_LoadoutSwitch_exports = {};
__export(PacketV1449_LoadoutSwitch_exports, {
  parse: () => parse21,
  toBuffer: () => toBuffer21
});

// src/Array16.js
var Array16_exports = {};
__export(Array16_exports, {
  asArray: () => asArray,
  fromArray: () => fromArray2,
  fromBitFlagsPair: () => fromBitFlagsPair,
  toBitFlagsPair: () => toBitFlagsPair
});

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Primitive_option.js
function some(x) {
  if (x === void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: 0
    };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
    };
  } else {
    return x;
  }
}
function valFromOption(x) {
  if (x === null || x.BS_PRIVATE_NESTED_SOME_NONE === void 0) {
    return x;
  }
  let depth = x.BS_PRIVATE_NESTED_SOME_NONE;
  if (depth === 0) {
    return;
  } else {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
    };
  }
}

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Stdlib_Array.js
function make2(length, x) {
  if (length <= 0) {
    return [];
  }
  let arr = new Array(length);
  arr.fill(x);
  return arr;
}

// src/BitFlags.js
var BitFlags_exports = {};
__export(BitFlags_exports, {
  flag1: () => flag1,
  flag2: () => flag2,
  flag3: () => flag3,
  flag4: () => flag4,
  flag5: () => flag5,
  flag6: () => flag6,
  flag7: () => flag7,
  flag8: () => flag8,
  flagN: () => flagN,
  forEach: () => forEach,
  fromArray: () => fromArray,
  fromByte: () => fromByte,
  fromFlags: () => fromFlags,
  toByte: () => toByte
});

// src/ArrayExt.js
var ArrayExt_exports = {};
__export(ArrayExt_exports, {
  getOr: () => getOr2,
  intoChunks: () => intoChunks
});

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Stdlib_Option.js
function mapOr(opt, $$default, f) {
  if (opt !== void 0) {
    return f(valFromOption(opt));
  } else {
    return $$default;
  }
}
function map(opt, f) {
  if (opt !== void 0) {
    return some(f(valFromOption(opt)));
  }
}
function flatMap(opt, f) {
  if (opt !== void 0) {
    return f(valFromOption(opt));
  }
}
function getOr(opt, $$default) {
  if (opt !== void 0) {
    return valFromOption(opt);
  } else {
    return $$default;
  }
}
function isSome(x) {
  return x !== void 0;
}

// src/ArrayExt.js
function intoChunks(self, chunkSize) {
  let chunked = [];
  let len = self.length;
  let max2 = (Math.ceil(len / chunkSize) | 0) - 1 | 0;
  for (let i = 0; i <= max2; ++i) {
    let __x = self.slice(i * chunkSize | 0, (i + 1 | 0) * chunkSize | 0);
    chunked.push(__x);
  }
  return chunked;
}
function getOr2(self, index, or) {
  return getOr(self[index], or);
}

// src/BitFlags.js
function fromByte(byte) {
  return byte;
}
function fromFlags(flag12, flag22, flag32, flag42, flag52, flag62, flag72, flag82) {
  let byte = 0;
  byte = byte | (flag12 ? 1 : 0);
  byte = byte | (flag22 ? 2 : 0);
  byte = byte | (flag32 ? 4 : 0);
  byte = byte | (flag42 ? 8 : 0);
  byte = byte | (flag52 ? 16 : 0);
  byte = byte | (flag62 ? 32 : 0);
  byte = byte | (flag72 ? 64 : 0);
  byte = byte | (flag82 ? 128 : 0);
  return byte;
}
function fromArray(flags) {
  return fromFlags(getOr2(flags, 0, false), getOr2(flags, 1, false), getOr2(flags, 2, false), getOr2(flags, 3, false), getOr2(flags, 4, false), getOr2(flags, 5, false), getOr2(flags, 6, false), getOr2(flags, 7, false));
}
function flagN(self, n) {
  return (self & n) === n;
}
function flag1(__x) {
  return (__x & 1) === 1;
}
function flag2(__x) {
  return (__x & 2) === 2;
}
function flag3(__x) {
  return (__x & 4) === 4;
}
function flag4(__x) {
  return (__x & 8) === 8;
}
function flag5(__x) {
  return (__x & 16) === 16;
}
function flag6(__x) {
  return (__x & 32) === 32;
}
function flag7(__x) {
  return (__x & 64) === 64;
}
function flag8(__x) {
  return (__x & 128) === 128;
}
function forEach(self, fn) {
  fn((self & 1) === 1);
  fn((self & 2) === 2);
  fn((self & 4) === 4);
  fn((self & 8) === 8);
  fn((self & 16) === 16);
  fn((self & 32) === 32);
  fn((self & 64) === 64);
  fn((self & 128) === 128);
}
function toByte(self) {
  return self;
}

// src/Array16.js
function fromArray2(a) {
  if (a.length === 16) {
    return a;
  }
}
function fromBitFlagsPair(a, b) {
  let array = make2(16, false);
  array[0] = flag1(a);
  array[1] = flag2(a);
  array[2] = flag3(a);
  array[3] = flag4(a);
  array[4] = flag5(a);
  array[5] = flag6(a);
  array[6] = flag7(a);
  array[7] = flag8(a);
  array[8] = flag1(b);
  array[9] = flag2(b);
  array[10] = flag3(b);
  array[11] = flag4(b);
  array[12] = flag5(b);
  array[13] = flag6(b);
  array[14] = flag7(b);
  array[15] = flag8(b);
  return array;
}
function toBitFlagsPair(self) {
  let a = fromArray(self.slice(0, 8));
  let b = fromArray(self.slice(8, 16));
  return [
    a,
    b
  ];
}
function asArray(self) {
  return self;
}

// src/packetv1449/PacketV1449_LoadoutSwitch.js
function parse21(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "loadout");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readUInt16(reader, "hideVisibleAccessory");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let hideVisibleAccessory = e$2._0;
  let flags0 = fromByte(hideVisibleAccessory & 255);
  let flags1 = fromByte(hideVisibleAccessory >> 8 & 255);
  let hideVisibleAccessory$1 = fromBitFlagsPair(flags0, flags1);
  return {
    TAG: "Ok",
    _0: {
      playerId: e._0,
      loadout: e$1._0,
      hideVisibleAccessory: hideVisibleAccessory$1
    }
  };
}
function toBuffer21(self) {
  let match = toBitFlagsPair(self.hideVisibleAccessory);
  let hideVisibleAccessory = toByte(match[0]) | toByte(match[1]) << 8;
  return data(packUInt16(packByte(packByte(setType(make(), toInt("LoadoutSwitch")), self.playerId, "playerId"), self.loadout, "loadout"), hideVisibleAccessory, "hideVisibleAccessory"));
}

// src/packet/Packet_NetModuleLoad.js
var Packet_NetModuleLoad_exports = {};
__export(Packet_NetModuleLoad_exports, {
  Buffer: () => Buffer2,
  Decode: () => Decode2,
  Encode: () => Encode2,
  NetModuleType: () => NetModuleType,
  maxNpcIndexSentinel: () => maxNpcIndexSentinel,
  parse: () => parse23,
  powerLevelToInt: () => powerLevelToInt,
  pylonActionToInt: () => pylonActionToInt,
  toBuffer: () => toBuffer22
});

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Primitive_int.js
function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Belt_Array.js
function concatMany(arrs) {
  let lenArrs = arrs.length;
  let totalLen = 0;
  for (let i = 0; i < lenArrs; ++i) {
    totalLen = totalLen + arrs[i].length | 0;
  }
  let result = new Array(totalLen);
  totalLen = 0;
  for (let j = 0; j < lenArrs; ++j) {
    let cur = arrs[j];
    for (let k = 0, k_finish = cur.length; k < k_finish; ++k) {
      result[totalLen] = cur[k];
      totalLen = totalLen + 1 | 0;
    }
  }
  return result;
}

// src/CreativePowers.js
var CreativePowers_exports = {};
__export(CreativePowers_exports, {
  CreativePowerType: () => CreativePowerType,
  PerPlayerSliderPower: () => PerPlayerSliderPower,
  PerPlayerTogglePower: () => PerPlayerTogglePower,
  pack: () => pack$2,
  parse: () => parse$2,
  toString: () => toString$2
});
function toString2(self) {
  return `PerPlayerSliderPower { playerId: ` + self.playerId.toString() + `, value: ` + self.value.toString() + ` }`;
}
function pack(writer, self) {
  return packSingle(packByte(writer, self.playerId, "playerId"), self.value, "value");
}
function parse22(reader) {
  return {
    playerId: reader.readByte(),
    value: reader.readSingle()
  };
}
function toString$1(self) {
  if (self.TAG === "Everyone") {
    return `Everyone { values: ` + self._0.map((value) => {
      if (value) {
        return "1";
      } else {
        return "0";
      }
    }).join(", ") + ` }`;
  } else {
    return `Player { playerId: ` + self._0.toString() + `, value: ` + (self._1 ? "true" : "false") + ` }`;
  }
}
function pack$1(writer, self) {
  if (self.TAG === "Everyone") {
    let values = self._0;
    let bytes = intoChunks(values, 8).map(fromArray).map(toByte);
    return packBytes(packByte(writer, 0, "everyoneType"), bytes, "everyoneValues");
  } else {
    let playerId = self._0;
    let value = self._1;
    return packByte(packByte(packByte(writer, 1, "playerType"), playerId, "playerId"), value ? 1 : 0, "playerValue");
  }
}
function parse$1(reader) {
  let match = reader.readByte();
  if (match !== 0) {
    if (match !== 1) {
      return;
    } else {
      return {
        TAG: "Player",
        _0: reader.readByte(),
        _1: reader.readByte() === 1
      };
    }
  } else {
    let toggles = [];
    for (let _for = 1; _for <= 32; ++_for) {
      let byte = reader.readByte();
      forEach(fromByte(byte), (flag) => {
        toggles.push(flag);
      });
    }
    toggles.pop();
    return {
      TAG: "Everyone",
      _0: toggles
    };
  }
}
function toString$2(self) {
  if (typeof self !== "object") {
    switch (self) {
      case "StartDayImmediately":
        return `StartDayImmediately`;
      case "StartNoonImmediately":
        return `StartNoonImmediately`;
      case "StartNightImmediately":
        return `StartNightImmediately`;
      case "StartMidnightImmediately":
        return `StartMidnightImmediately`;
    }
  } else {
    switch (self.TAG) {
      case "FreezeTime":
        return `FreezeTime { value: ` + (self._0 ? "true" : "false") + ` }`;
      case "GodmodePower":
        return `GodmodePower { message: ` + toString$1(self._0) + ` }`;
      case "ModifyWindDirectionAndStrength":
        return `ModifyWindDirectionAndStrength { value: ` + self._0.toString() + ` }`;
      case "ModifyRainPower":
        return `ModifyRainPower { value: ` + self._0.toString() + ` }`;
      case "ModifyTimeRate":
        return `ModifyTimeRate { value: ` + self._0.toString() + ` }`;
      case "FreezeRainPower":
        return `FreezeRainPower { value: ` + (self._0 ? "true" : "false") + ` }`;
      case "FreezeWindDirectionAndStrength":
        return `FreezeWindDirectionAndStrength { value: ` + (self._0 ? "true" : "false") + ` }`;
      case "FarPlacementRangePower":
        return `FarPlacementRangePower { message: ` + toString$1(self._0) + ` }`;
      case "DifficultySliderPower":
        return `DifficultySliderPower { value: ` + self._0.toString() + ` }`;
      case "StopBiomeSpreadPower":
        return `StopBiomeSpreadPower { value: ` + (self._0 ? "true" : "false") + ` }`;
      case "SpawnRateSliderPerPlayerPower":
        return `SpawnRateSliderPerPlayerPower { sliderPower: ` + toString2(self._0) + ` }`;
    }
  }
}
function toString$3(self) {
  switch (self) {
    case "FreezeTime":
      return "FreezeTime";
    case "StartDayImmediately":
      return "StartDayImmediately";
    case "StartNoonImmediately":
      return "StartNoonImmediately";
    case "StartNightImmediately":
      return "StartNightImmediately";
    case "StartMidnightImmediately":
      return "StartMidnightImmediately";
    case "GodmodePower":
      return "GodmodePower";
    case "ModifyWindDirectionAndStrength":
      return "ModifyWindDirectionAndStrength";
    case "ModifyRainPower":
      return "ModifyRainPower";
    case "ModifyTimeRate":
      return "ModifyTimeRate";
    case "FreezeRainPower":
      return "FreezeRainPower";
    case "FreezeWindDirectionAndStrength":
      return "FreezeWindDirectionAndStrength";
    case "FarPlacementRangePower":
      return "FarPlacementRangePower";
    case "DifficultySliderPower":
      return "DifficultySliderPower";
    case "StopBiomeSpreadPower":
      return "StopBiomeSpreadPower";
    case "SpawnRateSliderPerPlayerPower":
      return "SpawnRateSliderPerPlayerPower";
  }
}
function fromInt5(n) {
  switch (n) {
    case 0:
      return "FreezeTime";
    case 1:
      return "StartDayImmediately";
    case 2:
      return "StartNoonImmediately";
    case 3:
      return "StartNightImmediately";
    case 4:
      return "StartMidnightImmediately";
    case 5:
      return "GodmodePower";
    case 6:
      return "ModifyWindDirectionAndStrength";
    case 7:
      return "ModifyRainPower";
    case 8:
      return "ModifyTimeRate";
    case 9:
      return "FreezeRainPower";
    case 10:
      return "FreezeWindDirectionAndStrength";
    case 11:
      return "FarPlacementRangePower";
    case 12:
      return "DifficultySliderPower";
    case 13:
      return "StopBiomeSpreadPower";
    case 14:
      return "SpawnRateSliderPerPlayerPower";
    default:
      return;
  }
}
function toInt5(self) {
  switch (self) {
    case "FreezeTime":
      return 0;
    case "StartDayImmediately":
      return 1;
    case "StartNoonImmediately":
      return 2;
    case "StartNightImmediately":
      return 3;
    case "StartMidnightImmediately":
      return 4;
    case "GodmodePower":
      return 5;
    case "ModifyWindDirectionAndStrength":
      return 6;
    case "ModifyRainPower":
      return 7;
    case "ModifyTimeRate":
      return 8;
    case "FreezeRainPower":
      return 9;
    case "FreezeWindDirectionAndStrength":
      return 10;
    case "FarPlacementRangePower":
      return 11;
    case "DifficultySliderPower":
      return 12;
    case "StopBiomeSpreadPower":
      return 13;
    case "SpawnRateSliderPerPlayerPower":
      return 14;
  }
}
var CreativePowerType = {
  toString: toString$3,
  fromInt: fromInt5,
  toInt: toInt5
};
function pack$2(writer, self) {
  if (typeof self !== "object") {
    switch (self) {
      case "StartDayImmediately":
        return packUInt16(writer, 1, "startDayImmediatelyType");
      case "StartNoonImmediately":
        return packUInt16(writer, 2, "startNoonImmediatelyType");
      case "StartNightImmediately":
        return packUInt16(writer, 3, "startNightImmediatelyType");
      case "StartMidnightImmediately":
        return packUInt16(writer, 4, "startMidnightImmediatelyType");
    }
  } else {
    switch (self.TAG) {
      case "FreezeTime":
        let value = self._0;
        return packByte(packUInt16(writer, 0, "freezeTimeType"), value ? 1 : 0, "freezeTimeValue");
      case "GodmodePower":
        let message = self._0;
        return pack$1(packUInt16(writer, 5, "godmodePowerType"), message);
      case "ModifyWindDirectionAndStrength":
        let value$1 = self._0;
        return packSingle(packUInt16(writer, 6, "modifyWindDirectionAndStrengthType"), value$1, "modifyWindDirectionAndStrengthValue");
      case "ModifyRainPower":
        let value$2 = self._0;
        return packSingle(packUInt16(writer, 7, "modifyRainPowerType"), value$2, "modifyRainPowerValue");
      case "ModifyTimeRate":
        let value$3 = self._0;
        return packSingle(packUInt16(writer, 8, "modifyTimeRateType"), value$3, "modifyTimeRateValue");
      case "FreezeRainPower":
        let on = self._0;
        return packByte(packUInt16(writer, 9, "freezeRainPowerType"), on ? 1 : 0, "freezeRainPowerValue");
      case "FreezeWindDirectionAndStrength":
        let on$1 = self._0;
        return packByte(packUInt16(writer, 10, "freezeWindDirectionAndStrengthType"), on$1 ? 1 : 0, "freezeWindDirectionAndStrengthValue");
      case "FarPlacementRangePower":
        let message$1 = self._0;
        return pack$1(packUInt16(writer, 11, "farPlacementRangePowerType"), message$1);
      case "DifficultySliderPower":
        let value$4 = self._0;
        return packSingle(packUInt16(writer, 12, "difficultySliderPowerType"), value$4, "difficultySliderPowerValue");
      case "StopBiomeSpreadPower":
        let on$2 = self._0;
        return packByte(packUInt16(writer, 13, "stopBiomeSpreadPowerType"), on$2 ? 1 : 0, "stopBiomeSpreadPowerValue");
      case "SpawnRateSliderPerPlayerPower":
        let message$2 = self._0;
        return pack(packUInt16(writer, 14, "spawnRateSliderPerPlayerPowerType"), message$2);
    }
  }
}
function parse$2(reader) {
  let match = reader.readUInt16();
  switch (match) {
    case 0:
      return {
        TAG: "FreezeTime",
        _0: reader.readByte() === 1
      };
    case 1:
      return "StartDayImmediately";
    case 2:
      return "StartNoonImmediately";
    case 3:
      return "StartNightImmediately";
    case 4:
      return "StartMidnightImmediately";
    case 5:
      return map(parse$1(reader), (m) => ({
        TAG: "GodmodePower",
        _0: m
      }));
    case 6:
      return {
        TAG: "ModifyWindDirectionAndStrength",
        _0: reader.readSingle()
      };
    case 7:
      return {
        TAG: "ModifyRainPower",
        _0: reader.readSingle()
      };
    case 8:
      return {
        TAG: "ModifyTimeRate",
        _0: reader.readSingle()
      };
    case 9:
      return {
        TAG: "FreezeRainPower",
        _0: reader.readByte() === 1
      };
    case 10:
      return {
        TAG: "FreezeWindDirectionAndStrength",
        _0: reader.readByte() === 1
      };
    case 11:
      return map(parse$1(reader), (m) => ({
        TAG: "FarPlacementRangePower",
        _0: m
      }));
    case 12:
      return {
        TAG: "DifficultySliderPower",
        _0: reader.readSingle()
      };
    case 13:
      return {
        TAG: "StopBiomeSpreadPower",
        _0: reader.readByte() === 1
      };
    case 14:
      return map(parse22(reader), (m) => ({
        TAG: "SpawnRateSliderPerPlayerPower",
        _0: m
      }));
    default:
      return;
  }
}
var PerPlayerSliderPower = {
  pack,
  parse: parse22
};
var PerPlayerTogglePower = {
  pack: pack$1,
  parse: parse$1
};

// src/packet/Packet_NetModuleLoad.js
function pylonActionToInt(pylonAction) {
  switch (pylonAction) {
    case "Added":
      return 0;
    case "Removed":
      return 1;
    case "RequestTeleport":
      return 2;
  }
}
function powerLevelToInt(powerLevel) {
  switch (powerLevel) {
    case "LockedForEveryone":
      return 0;
    case "CanBeChangedByHostAlone":
      return 1;
    case "CanBeChangedByEveryone":
      return 2;
  }
}
function fromInt6(n) {
  switch (n) {
    case 0:
      return "Liquid";
    case 1:
      return "Text";
    case 2:
      return "Ping";
    case 3:
      return "Ambience";
    case 4:
      return "Bestiary";
    case 5:
      return "CreativePower";
    case 6:
      return "CreativeUnlocksPlayerReport";
    case 7:
      return "TeleportPylon";
    case 8:
      return "Particles";
    case 9:
      return "CreativePowerPermissions";
    case 10:
      return "Banners";
    case 11:
      return "CraftingRequests";
    case 12:
      return "TagEffectState";
    case 13:
      return "LeashedEntity";
    case 14:
      return "UnbreakableWallScan";
    default:
      return;
  }
}
function toInt6(self) {
  switch (self) {
    case "Liquid":
      return 0;
    case "Text":
      return 1;
    case "Ping":
      return 2;
    case "Ambience":
      return 3;
    case "Bestiary":
      return 4;
    case "CreativePower":
      return 5;
    case "CreativeUnlocksPlayerReport":
      return 6;
    case "TeleportPylon":
      return 7;
    case "Particles":
      return 8;
    case "CreativePowerPermissions":
      return 9;
    case "Banners":
      return 10;
    case "CraftingRequests":
      return 11;
    case "TagEffectState":
      return 12;
    case "LeashedEntity":
      return 13;
    case "UnbreakableWallScan":
      return 14;
  }
}
var NetModuleType = {
  fromInt: fromInt6,
  toInt: toInt6
};
function pack7BitEncodedInt(writer, value, context) {
  let writer$1 = writer;
  let remaining = value;
  let $$continue = true;
  while ($$continue) {
    let byte = remaining & 127;
    remaining = remaining >>> 7;
    if (remaining !== 0) {
      byte = byte | 128;
    }
    writer$1 = packByte(writer$1, byte, context);
    if (remaining === 0) {
      $$continue = false;
    }
  }
  ;
  return writer$1;
}
function liquidToBuffer(liquid) {
  let writer = packUInt16(packUInt16(setType(make(), toInt("NetModuleLoad")), 0, "moduleType"), liquid.changes.length, "changesCount");
  liquid.changes.forEach((change) => {
    packByte(packByte(packInt16(packInt16(writer, change.y, "y"), change.x, "x"), change.amount, "amount"), change.liquidType, "liquidType");
  });
  return data(writer);
}
function clientTextToBuffer(commandId, message) {
  return data(packString(packString(packUInt16(setType(make(), toInt("NetModuleLoad")), 1, "moduleType"), commandId, "commandId"), message, "message"));
}
function serverTextToBuffer(playerId, networkText, color) {
  return data(packColor(packNetworkText(packByte(packUInt16(setType(make(), toInt("NetModuleLoad")), 1, "moduleType"), playerId, "playerId"), networkText, "networkText"), color, "color"));
}
function pingToBuffer(ping) {
  return data(packSingle(packSingle(packUInt16(setType(make(), toInt("NetModuleLoad")), 2, "moduleType"), ping.x, "x"), ping.y, "y"));
}
function ambienceToBuffer(ambience) {
  return data(packByte(packInt32(packByte(packUInt16(setType(make(), toInt("NetModuleLoad")), 3, "moduleType"), ambience.playerId, "playerId"), ambience.seed, "seed"), ambience.skyEntityType, "skyEntityType"));
}
function bestiaryToBuffer(bestiary) {
  let writer = packUInt16(setType(make(), toInt("NetModuleLoad")), 4, "moduleType");
  let _count = bestiary.unlockType;
  let tmp;
  tmp = typeof _count !== "object" ? _count === "Sight" ? packByte(writer, 1, "unlockTypeByte") : packByte(writer, 2, "unlockTypeByte") : packByte(writer, 0, "unlockTypeByte");
  packInt16(tmp, bestiary.npcId, "npcId");
  let count = bestiary.unlockType;
  let tmp$1;
  tmp$1 = typeof count !== "object" ? writer : pack7BitEncodedInt(writer, count._0, "killCount");
  return data(tmp$1);
}
function creativePowerToBuffer(creativePower) {
  return data(pack$2(packUInt16(setType(make(), toInt("NetModuleLoad")), 5, "moduleType"), creativePower));
}
function creativeUnlocksPlayerReportToBuffer(unlockReport) {
  return data(packUInt16(packUInt16(packByte(packUInt16(setType(make(), toInt("NetModuleLoad")), 6, "moduleType"), unlockReport.userId, "userId"), unlockReport.itemId, "itemId"), unlockReport.researchedCount, "researchedCount"));
}
function teleportPylonToBuffer(teleportPylon) {
  return data(packByte(packInt16(packInt16(packByte(packUInt16(setType(make(), toInt("NetModuleLoad")), 7, "moduleType"), pylonActionToInt(teleportPylon.pylonAction), "pylonAction"), teleportPylon.x, "x"), teleportPylon.y, "y"), teleportPylon.pylonType, "pylonType"));
}
function particlesToBuffer(particle) {
  return data(packByte(packInt32(packSingle(packSingle(packSingle(packSingle(packByte(packUInt16(setType(make(), toInt("NetModuleLoad")), 8, "moduleType"), particle.particleType, "particleType"), particle.x, "x"), particle.y, "y"), particle.vx, "vx"), particle.vy, "vy"), particle.shaderIndex, "shaderIndex"), particle.invokedByPlayer, "invokedByPlayer"));
}
function creativePowerPermissionsToBuffer(creativePowerPermission) {
  return data(packByte(packUInt16(packByte(packUInt16(setType(make(), toInt("NetModuleLoad")), 9, "moduleType"), 0, "messageType"), creativePowerPermission.powerType, "powerType"), powerLevelToInt(creativePowerPermission.powerLevel), "powerLevel"));
}
function bannersToBuffer(message) {
  let writer = packUInt16(setType(make(), toInt("NetModuleLoad")), 10, "moduleType");
  switch (message.TAG) {
    case "BannerFullState":
      let state = message._0;
      let writer$1 = packInt16(packByte(writer, 0, "messageType"), state.killCounts.length, "killCountLength");
      state.killCounts.forEach((count) => {
        packInt32(writer$1, count, "killCount");
      });
      let writer$2 = packInt16(writer$1, state.claimableCounts.length, "claimableCountLength");
      state.claimableCounts.forEach((count) => {
        packUInt16(writer$2, count, "claimableCount");
      });
      return data(writer$2);
    case "BannerKillCountUpdate":
      let match = message._0;
      return data(packInt32(packInt16(packByte(writer, 1, "messageType"), match.bannerId, "bannerId"), match.killCount, "killCount"));
    case "BannerClaimCountUpdate":
      let match$1 = message._0;
      return data(packUInt16(packInt16(packByte(writer, 2, "messageType"), match$1.bannerId, "bannerId"), match$1.claimCount, "claimCount"));
    case "BannerClaimRequest":
      let match$2 = message._0;
      return data(packUInt16(packInt16(packByte(writer, 3, "messageType"), match$2.bannerId, "bannerId"), match$2.amount, "amount"));
    case "BannerClaimResponse":
      let match$3 = message._0;
      return data(packBool(packUInt16(packInt16(packByte(writer, 4, "messageType"), match$3.bannerId, "bannerId"), match$3.amount, "amount"), match$3.granted, "granted"));
  }
}
function craftingRequestsToBuffer(message) {
  let writer = packUInt16(setType(make(), toInt("NetModuleLoad")), 11, "moduleType");
  if (message.TAG !== "CraftingRequest") {
    return data(packBool(writer, message._0.approved, "approved"));
  }
  let request = message._0;
  let writer$1 = pack7BitEncodedInt(writer, request.items.length, "itemsCount");
  request.items.forEach((item) => {
    pack7BitEncodedInt(packInt32(writer$1, item.itemIdOrRecipeGroup, "itemIdOrRecipeGroup"), item.stack, "stack");
  });
  let writer$2 = pack7BitEncodedInt(writer$1, request.chestIndexes.length, "chestCount");
  request.chestIndexes.forEach((chestIndex) => {
    pack7BitEncodedInt(writer$2, chestIndex, "chestIndex");
  });
  return data(writer$2);
}
function packSparseNpcTimes(writer, entries) {
  let writer$1 = {
    contents: writer
  };
  entries.forEach((entry) => {
    writer$1.contents = packInt32(packByte(writer$1.contents, entry.npcIndex, "npcIndex"), entry.time, "npcTime");
  });
  return packByte(writer$1.contents, 200, "npcIndexSentinel");
}
function tagEffectStateToBuffer(message) {
  let writer = packUInt16(setType(make(), toInt("NetModuleLoad")), 12, "moduleType");
  switch (message.TAG) {
    case "TagFullState":
      let match = message._0;
      let procTimeLeft = match.procTimeLeft;
      let writer$1 = packSparseNpcTimes(packInt16(packByte(packByte(writer, match.ownerId, "ownerId"), 0, "messageType"), match.effectType, "effectType"), match.timeLeft);
      if (procTimeLeft !== void 0) {
        return data(packSparseNpcTimes(writer$1, procTimeLeft));
      } else {
        return data(writer$1);
      }
    case "TagChangeActiveEffect":
      let match$1 = message._0;
      return data(packInt16(packByte(packByte(writer, match$1.ownerId, "ownerId"), 1, "messageType"), match$1.effectType, "effectType"));
    case "TagApplyTagToNpc":
      let match$2 = message._0;
      return data(packByte(packByte(packByte(writer, match$2.ownerId, "ownerId"), 2, "messageType"), match$2.npcIndex, "npcIndex"));
    case "TagEnableProcOnNpc":
      let match$3 = message._0;
      return data(packByte(packByte(packByte(writer, match$3.ownerId, "ownerId"), 3, "messageType"), match$3.npcIndex, "npcIndex"));
    case "TagClearProcOnNpc":
      let match$4 = message._0;
      return data(packByte(packByte(packByte(writer, match$4.ownerId, "ownerId"), 4, "messageType"), match$4.npcIndex, "npcIndex"));
  }
}
function leashedEntityToBuffer(message) {
  let writer = packUInt16(setType(make(), toInt("NetModuleLoad")), 13, "moduleType");
  switch (message.TAG) {
    case "LeashedRemove":
      return data(pack7BitEncodedInt(packByte(writer, 0, "messageType"), message._0.slot, "slot"));
    case "LeashedFullSync":
      let match = message._0;
      return data(packBuffer(packInt16(packInt16(pack7BitEncodedInt(pack7BitEncodedInt(packByte(writer, 1, "messageType"), match.slot, "slot"), match.entityType, "entityType"), match.anchorX, "anchorX"), match.anchorY, "anchorY"), match.payload, "payload"));
    case "LeashedPartialSync":
      let match$1 = message._0;
      return data(packBuffer(pack7BitEncodedInt(pack7BitEncodedInt(packByte(writer, 2, "messageType"), match$1.slot, "slot"), match$1.entityType, "entityType"), match$1.payload, "payload"));
  }
}
function unbreakableWallScanToBuffer(payload) {
  return data(packBool(packByte(packUInt16(setType(make(), toInt("NetModuleLoad")), 14, "moduleType"), payload.playerId, "playerId"), payload.insideUnbreakableWalls, "insideUnbreakableWalls"));
}
function toBuffer22(self) {
  switch (self.TAG) {
    case "Liquid":
      return liquidToBuffer(self._0);
    case "ClientText":
      return clientTextToBuffer(self._0, self._1);
    case "ServerText":
      return serverTextToBuffer(self._0, self._1, self._2);
    case "Ping":
      return pingToBuffer(self._0);
    case "Ambience":
      return ambienceToBuffer(self._0);
    case "Bestiary":
      return bestiaryToBuffer(self._0);
    case "CreativePower":
      return creativePowerToBuffer(self._0);
    case "CreativeUnlocksPlayerReport":
      return creativeUnlocksPlayerReportToBuffer(self._0);
    case "TeleportPylon":
      return teleportPylonToBuffer(self._0);
    case "Particles":
      return particlesToBuffer(self._0);
    case "CreativePowerPermissions":
      return creativePowerPermissionsToBuffer(self._0);
    case "Banners":
      return bannersToBuffer(self._0);
    case "CraftingRequests":
      return craftingRequestsToBuffer(self._0);
    case "TagEffectState":
      return tagEffectStateToBuffer(self._0);
    case "LeashedEntity":
      return leashedEntityToBuffer(self._0);
    case "UnbreakableWallScan":
      return unbreakableWallScanToBuffer(self._0);
  }
}
var Encode2 = {
  packInt32,
  packInt16,
  packNetworkText,
  packColor,
  packString,
  packUInt16,
  packByte,
  packSingle,
  packBool,
  packBuffer,
  setType,
  data,
  pack7BitEncodedInt,
  liquidToBuffer,
  clientTextToBuffer,
  serverTextToBuffer,
  pingToBuffer,
  ambienceToBuffer,
  bestiaryToBuffer,
  creativePowerToBuffer,
  creativeUnlocksPlayerReportToBuffer,
  teleportPylonToBuffer,
  particlesToBuffer,
  creativePowerPermissionsToBuffer,
  bannersToBuffer,
  craftingRequestsToBuffer,
  packSparseNpcTimes,
  tagEffectStateToBuffer,
  leashedEntityToBuffer,
  unbreakableWallScanToBuffer,
  toBuffer: toBuffer22
};
function parseLiquid(reader) {
  let e = readUInt16(reader, "changesCount");
  if (e.TAG !== "Ok") {
    return e;
  }
  let changesCount = e._0;
  let readChanges = (_idx, _acc) => {
    while (true) {
      let acc = _acc;
      let idx = _idx;
      if (idx >= changesCount) {
        return {
          TAG: "Ok",
          _0: acc.toReversed()
        };
      }
      let e2 = readInt16(reader, "y");
      if (e2.TAG !== "Ok") {
        return e2;
      }
      let e$12 = readInt16(reader, "x");
      if (e$12.TAG !== "Ok") {
        return e$12;
      }
      let e$2 = readByte(reader, "amount");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = readByte(reader, "liquidType");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      _acc = concatMany([
        [{
          x: e$12._0,
          y: e2._0,
          amount: e$2._0,
          liquidType: e$3._0
        }],
        acc
      ]);
      _idx = idx + 1 | 0;
      continue;
    }
    ;
  };
  let e$1 = readChanges(0, []);
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "Liquid",
        _0: {
          changes: e$1._0
        }
      }
    };
  } else {
    return e$1;
  }
}
function parseText(reader, fromServer) {
  if (fromServer) {
    let e = readByte(reader, "playerId");
    if (e.TAG !== "Ok") {
      return e;
    }
    let e$1 = readNetworkText(reader, "message");
    if (e$1.TAG !== "Ok") {
      return e$1;
    }
    let e$2 = readColor(reader, "color");
    if (e$2.TAG === "Ok") {
      return {
        TAG: "Ok",
        _0: {
          TAG: "ServerText",
          _0: e._0,
          _1: e$1._0,
          _2: e$2._0
        }
      };
    } else {
      return e$2;
    }
  }
  let e$3 = readString(reader, "commandId");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readString(reader, "message");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "ClientText",
        _0: e$3._0,
        _1: e$4._0
      }
    };
  } else {
    return e$4;
  }
}
function parsePing(reader) {
  let e = readSingle(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "y");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "Ping",
        _0: {
          x: e._0,
          y: e$1._0
        }
      }
    };
  } else {
    return e$1;
  }
}
function parseAmbience(reader) {
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "seed");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "skyEntityType");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "Ambience",
        _0: {
          playerId: e._0,
          seed: e$1._0,
          skyEntityType: e$2._0
        }
      }
    };
  } else {
    return e$2;
  }
}
function parseBestiary(reader) {
  let e = readByte(reader, "rawBestiaryUnlockType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "npcId");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2;
  switch (e._0) {
    case 0:
      let e$3 = read7BitEncodedInt(reader, "killCount");
      e$2 = e$3.TAG === "Ok" ? {
        TAG: "Ok",
        _0: {
          TAG: "Kill",
          _0: e$3._0
        }
      } : e$3;
      break;
    case 1:
      e$2 = {
        TAG: "Ok",
        _0: "Sight"
      };
      break;
    case 2:
      e$2 = {
        TAG: "Ok",
        _0: "Chat"
      };
      break;
    default:
      e$2 = {
        TAG: "Error",
        _0: {
          context: "Packet_NetModuleLoad.parseBestiary",
          error: new Error("Unknown bestiary unlock type")
        }
      };
  }
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "Bestiary",
        _0: {
          unlockType: e$2._0,
          npcId: e$1._0
        }
      }
    };
  } else {
    return e$2;
  }
}
function parseCreativePower(reader) {
  let p = parse$2(reader);
  if (p !== void 0) {
    return {
      TAG: "Ok",
      _0: {
        TAG: "CreativePower",
        _0: p
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: {
        context: "Packet_NetModuleLoad.parseCreativePower",
        error: new Error("Failed to parse creative power")
      }
    };
  }
}
function parseCreativeUnlocksPlayerReport(reader) {
  let e = readByte(reader, "userId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "itemId");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readUInt16(reader, "researchedCount");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "CreativeUnlocksPlayerReport",
        _0: {
          userId: e._0,
          itemId: e$1._0,
          researchedCount: e$2._0
        }
      }
    };
  } else {
    return e$2;
  }
}
function parseTeleportPylon(reader) {
  let e = readByte(reader, "rawPylonAction");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "pylonType");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let pylonAction;
  switch (e._0) {
    case 0:
      pylonAction = "Added";
      break;
    case 1:
      pylonAction = "Removed";
      break;
    case 2:
      pylonAction = "RequestTeleport";
      break;
    default:
      pylonAction = void 0;
  }
  if (pylonAction !== void 0) {
    return {
      TAG: "Ok",
      _0: {
        TAG: "TeleportPylon",
        _0: {
          pylonAction,
          x: e$1._0,
          y: e$2._0,
          pylonType: e$3._0
        }
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: {
        context: "Packet_NetModuleLoad.parseTeleportPylon",
        error: new Error("Unknown pylon action")
      }
    };
  }
}
function parseParticle(reader) {
  let e = readByte(reader, "particleType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "vx");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readSingle(reader, "vy");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readInt32(reader, "shaderIndex");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "invokedByPlayer");
  if (e$6.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "Particles",
        _0: {
          particleType: e._0,
          x: e$1._0,
          y: e$2._0,
          vx: e$3._0,
          vy: e$4._0,
          shaderIndex: e$5._0,
          invokedByPlayer: e$6._0
        }
      }
    };
  } else {
    return e$6;
  }
}
function parseCreativePowerPermission(reader) {
  let e = readByte(reader, "messageType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "powerType");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "rawPowerLevel");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let powerLevel;
  switch (e$2._0) {
    case 0:
      powerLevel = "LockedForEveryone";
      break;
    case 1:
      powerLevel = "CanBeChangedByHostAlone";
      break;
    case 2:
      powerLevel = "CanBeChangedByEveryone";
      break;
    default:
      powerLevel = void 0;
  }
  if (powerLevel !== void 0) {
    return {
      TAG: "Ok",
      _0: {
        TAG: "CreativePowerPermissions",
        _0: {
          powerType: e$1._0,
          powerLevel
        }
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: {
        context: "Packet_NetModuleLoad.parseCreativePowerPermission",
        error: new Error("Unknown creative power permission level")
      }
    };
  }
}
function parseBanners(reader) {
  let e = readByte(reader, "messageType");
  if (e.TAG !== "Ok") {
    return e;
  }
  switch (e._0) {
    case 0:
      let e$1 = readInt16(reader, "killCountLength");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let killCountLength = e$1._0;
      let readKillCounts = (_idx, _acc) => {
        while (true) {
          let acc = _acc;
          let idx = _idx;
          if (idx >= killCountLength) {
            return {
              TAG: "Ok",
              _0: acc.toReversed()
            };
          }
          let e2 = readInt32(reader, "killCount");
          if (e2.TAG !== "Ok") {
            return e2;
          }
          _acc = concatMany([
            [e2._0],
            acc
          ]);
          _idx = idx + 1 | 0;
          continue;
        }
        ;
      };
      let e$2 = readKillCounts(0, []);
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = readInt16(reader, "claimableCountLength");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let claimableCountLength = e$3._0;
      let readClaimableCounts = (_idx, _acc) => {
        while (true) {
          let acc = _acc;
          let idx = _idx;
          if (idx >= claimableCountLength) {
            return {
              TAG: "Ok",
              _0: acc.toReversed()
            };
          }
          let e2 = readUInt16(reader, "claimableCount");
          if (e2.TAG !== "Ok") {
            return e2;
          }
          _acc = concatMany([
            [e2._0],
            acc
          ]);
          _idx = idx + 1 | 0;
          continue;
        }
        ;
      };
      let e$4 = readClaimableCounts(0, []);
      if (e$4.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "Banners",
            _0: {
              TAG: "BannerFullState",
              _0: {
                killCounts: e$2._0,
                claimableCounts: e$4._0
              }
            }
          }
        };
      } else {
        return e$4;
      }
    case 1:
      let e$5 = readInt16(reader, "bannerId");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = readInt32(reader, "killCount");
      if (e$6.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "Banners",
            _0: {
              TAG: "BannerKillCountUpdate",
              _0: {
                bannerId: e$5._0,
                killCount: e$6._0
              }
            }
          }
        };
      } else {
        return e$6;
      }
    case 2:
      let e$7 = readInt16(reader, "bannerId");
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let e$8 = readUInt16(reader, "claimCount");
      if (e$8.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "Banners",
            _0: {
              TAG: "BannerClaimCountUpdate",
              _0: {
                bannerId: e$7._0,
                claimCount: e$8._0
              }
            }
          }
        };
      } else {
        return e$8;
      }
    case 3:
      let e$9 = readInt16(reader, "bannerId");
      if (e$9.TAG !== "Ok") {
        return e$9;
      }
      let e$10 = readUInt16(reader, "amount");
      if (e$10.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "Banners",
            _0: {
              TAG: "BannerClaimRequest",
              _0: {
                bannerId: e$9._0,
                amount: e$10._0
              }
            }
          }
        };
      } else {
        return e$10;
      }
    case 4:
      let e$11 = readInt16(reader, "bannerId");
      if (e$11.TAG !== "Ok") {
        return e$11;
      }
      let e$12 = readUInt16(reader, "amount");
      if (e$12.TAG !== "Ok") {
        return e$12;
      }
      let e$13 = readBool(reader, "granted");
      if (e$13.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "Banners",
            _0: {
              TAG: "BannerClaimResponse",
              _0: {
                bannerId: e$11._0,
                amount: e$12._0,
                granted: e$13._0
              }
            }
          }
        };
      } else {
        return e$13;
      }
    default:
      return {
        TAG: "Error",
        _0: {
          context: "Packet_NetModuleLoad.parseBanners",
          error: new Error("Unknown banner message type")
        }
      };
  }
}
function parseCraftingRequests(reader, fromServer) {
  if (fromServer) {
    let e = readBool(reader, "approved");
    if (e.TAG === "Ok") {
      return {
        TAG: "Ok",
        _0: {
          TAG: "CraftingRequests",
          _0: {
            TAG: "CraftingResponse",
            _0: {
              approved: e._0
            }
          }
        }
      };
    } else {
      return e;
    }
  }
  let e$1 = read7BitEncodedInt(reader, "itemsCount");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let itemsCount = e$1._0;
  let readItems = (_idx, _acc) => {
    while (true) {
      let acc = _acc;
      let idx = _idx;
      if (idx >= itemsCount) {
        return {
          TAG: "Ok",
          _0: acc.toReversed()
        };
      }
      let e = readInt32(reader, "itemIdOrRecipeGroup");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$12 = read7BitEncodedInt(reader, "stack");
      if (e$12.TAG !== "Ok") {
        return e$12;
      }
      _acc = concatMany([
        [{
          itemIdOrRecipeGroup: e._0,
          stack: e$12._0
        }],
        acc
      ]);
      _idx = idx + 1 | 0;
      continue;
    }
    ;
  };
  let e$2 = readItems(0, []);
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = read7BitEncodedInt(reader, "chestCount");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let chestCount = e$3._0;
  let readChests = (_idx, _acc) => {
    while (true) {
      let acc = _acc;
      let idx = _idx;
      if (idx >= chestCount) {
        return {
          TAG: "Ok",
          _0: acc.toReversed()
        };
      }
      let e = read7BitEncodedInt(reader, "chestIndex");
      if (e.TAG !== "Ok") {
        return e;
      }
      _acc = concatMany([
        [e._0],
        acc
      ]);
      _idx = idx + 1 | 0;
      continue;
    }
    ;
  };
  let e$4 = readChests(0, []);
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "CraftingRequests",
        _0: {
          TAG: "CraftingRequest",
          _0: {
            items: e$2._0,
            chestIndexes: e$4._0
          }
        }
      }
    };
  } else {
    return e$4;
  }
}
function readSparseNpcTimes(reader) {
  let _acc = [];
  while (true) {
    let acc = _acc;
    let e = readByte(reader, "npcIndex");
    if (e.TAG !== "Ok") {
      return e;
    }
    let npcIndex = e._0;
    if (npcIndex >= 200) {
      return {
        TAG: "Ok",
        _0: acc.toReversed()
      };
    }
    let e$1 = readInt32(reader, "npcTime");
    if (e$1.TAG !== "Ok") {
      return e$1;
    }
    _acc = concatMany([
      [{
        npcIndex,
        time: e$1._0
      }],
      acc
    ]);
    continue;
  }
  ;
}
function parseTagEffectState(reader) {
  let e = readByte(reader, "ownerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let ownerId = e._0;
  let e$1 = readByte(reader, "messageType");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  switch (e$1._0) {
    case 0:
      let e$2 = readInt16(reader, "effectType");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let effectType = e$2._0;
      let e$3 = readSparseNpcTimes(reader);
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let timeLeft = e$3._0;
      let e$4 = getBytesLeft(reader);
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      if (e$4._0 <= 0) {
        return {
          TAG: "Ok",
          _0: {
            TAG: "TagEffectState",
            _0: {
              TAG: "TagFullState",
              _0: {
                ownerId,
                effectType,
                timeLeft,
                procTimeLeft: void 0
              }
            }
          }
        };
      }
      let e$5 = readSparseNpcTimes(reader);
      if (e$5.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "TagEffectState",
            _0: {
              TAG: "TagFullState",
              _0: {
                ownerId,
                effectType,
                timeLeft,
                procTimeLeft: e$5._0
              }
            }
          }
        };
      } else {
        return e$5;
      }
    case 1:
      let e$6 = readInt16(reader, "effectType");
      if (e$6.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "TagEffectState",
            _0: {
              TAG: "TagChangeActiveEffect",
              _0: {
                ownerId,
                effectType: e$6._0
              }
            }
          }
        };
      } else {
        return e$6;
      }
    case 2:
      let e$7 = readByte(reader, "npcIndex");
      if (e$7.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "TagEffectState",
            _0: {
              TAG: "TagApplyTagToNpc",
              _0: {
                ownerId,
                npcIndex: e$7._0
              }
            }
          }
        };
      } else {
        return e$7;
      }
    case 3:
      let e$8 = readByte(reader, "npcIndex");
      if (e$8.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "TagEffectState",
            _0: {
              TAG: "TagEnableProcOnNpc",
              _0: {
                ownerId,
                npcIndex: e$8._0
              }
            }
          }
        };
      } else {
        return e$8;
      }
    case 4:
      let e$9 = readByte(reader, "npcIndex");
      if (e$9.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "TagEffectState",
            _0: {
              TAG: "TagClearProcOnNpc",
              _0: {
                ownerId,
                npcIndex: e$9._0
              }
            }
          }
        };
      } else {
        return e$9;
      }
    default:
      return {
        TAG: "Error",
        _0: {
          context: "Packet_NetModuleLoad.parseTagEffectState",
          error: new Error("Unknown tag effect state message type")
        }
      };
  }
}
function parseLeashedEntity(reader) {
  let e = readByte(reader, "messageType");
  if (e.TAG !== "Ok") {
    return e;
  }
  switch (e._0) {
    case 0:
      let e$1 = read7BitEncodedInt(reader, "slot");
      if (e$1.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "LeashedEntity",
            _0: {
              TAG: "LeashedRemove",
              _0: {
                slot: e$1._0
              }
            }
          }
        };
      } else {
        return e$1;
      }
    case 1:
      let e$2 = read7BitEncodedInt(reader, "slot");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = read7BitEncodedInt(reader, "entityType");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = readInt16(reader, "anchorX");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = readInt16(reader, "anchorY");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = getBytesLeft(reader);
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = readBuffer(reader, e$6._0, "payload");
      if (e$7.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "LeashedEntity",
            _0: {
              TAG: "LeashedFullSync",
              _0: {
                slot: e$2._0,
                entityType: e$3._0,
                anchorX: e$4._0,
                anchorY: e$5._0,
                payload: e$7._0
              }
            }
          }
        };
      } else {
        return e$7;
      }
    case 2:
      let e$8 = read7BitEncodedInt(reader, "slot");
      if (e$8.TAG !== "Ok") {
        return e$8;
      }
      let e$9 = read7BitEncodedInt(reader, "entityType");
      if (e$9.TAG !== "Ok") {
        return e$9;
      }
      let e$10 = getBytesLeft(reader);
      if (e$10.TAG !== "Ok") {
        return e$10;
      }
      let e$11 = readBuffer(reader, e$10._0, "payload");
      if (e$11.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            TAG: "LeashedEntity",
            _0: {
              TAG: "LeashedPartialSync",
              _0: {
                slot: e$8._0,
                entityType: e$9._0,
                payload: e$11._0
              }
            }
          }
        };
      } else {
        return e$11;
      }
    default:
      return {
        TAG: "Error",
        _0: {
          context: "Packet_NetModuleLoad.parseLeashedEntity",
          error: new Error("Unknown leashed entity message type")
        }
      };
  }
}
function parseUnbreakableWallScan(reader) {
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readBool(reader, "insideUnbreakableWalls");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "UnbreakableWallScan",
        _0: {
          playerId: e._0,
          insideUnbreakableWalls: e$1._0
        }
      }
    };
  } else {
    return e$1;
  }
}
function parse23(payload, fromServer) {
  let reader = new packetreader_default(payload);
  let e = readUInt16(reader, "moduleType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let match = fromInt6(e._0);
  if (match === void 0) {
    return {
      TAG: "Error",
      _0: {
        context: "Packet_NetModuleLoad.parse",
        error: new Error("Unknown net module type")
      }
    };
  }
  switch (match) {
    case "Liquid":
      return parseLiquid(reader);
    case "Text":
      return parseText(reader, fromServer);
    case "Ping":
      return parsePing(reader);
    case "Ambience":
      return parseAmbience(reader);
    case "Bestiary":
      return parseBestiary(reader);
    case "CreativePower":
      return parseCreativePower(reader);
    case "CreativeUnlocksPlayerReport":
      return parseCreativeUnlocksPlayerReport(reader);
    case "TeleportPylon":
      return parseTeleportPylon(reader);
    case "Particles":
      return parseParticle(reader);
    case "CreativePowerPermissions":
      return parseCreativePowerPermission(reader);
    case "Banners":
      return parseBanners(reader);
    case "CraftingRequests":
      return parseCraftingRequests(reader, fromServer);
    case "TagEffectState":
      return parseTagEffectState(reader);
    case "LeashedEntity":
      return parseLeashedEntity(reader);
    case "UnbreakableWallScan":
      return parseUnbreakableWallScan(reader);
  }
}
var Decode2 = {
  readInt32,
  readSingle,
  readUInt16,
  readInt16,
  readString,
  readByte,
  readBool,
  readColor,
  readNetworkText,
  readBuffer,
  getBytesLeft,
  read7BitEncodedInt,
  parseLiquid,
  parseText,
  parsePing,
  parseAmbience,
  parseBestiary,
  parseCreativePower,
  parseCreativeUnlocksPlayerReport,
  parseTeleportPylon,
  parseParticle,
  parseCreativePowerPermission,
  parseBanners,
  parseCraftingRequests,
  readSparseNpcTimes,
  parseTagEffectState,
  parseLeashedEntity,
  parseUnbreakableWallScan,
  parse: parse23
};
var Buffer2;
var maxNpcIndexSentinel = 200;

// src/packetv1449/PacketV1449_NpcBuffRemovalRequest.js
var PacketV1449_NpcBuffRemovalRequest_exports = {};
__export(PacketV1449_NpcBuffRemovalRequest_exports, {
  parse: () => parse24,
  toBuffer: () => toBuffer23
});
function parse24(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "buffType");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        buffType: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer23(self) {
  return data(packUInt16(packInt16(setType(make(), toInt("NpcBuffRemovalRequest")), self.npcId, "npcId"), self.buffType, "buffType"));
}

// src/packet/Packet_NpcBuffUpdate.js
var Packet_NpcBuffUpdate_exports = {};
__export(Packet_NpcBuffUpdate_exports, {
  Decode: () => Decode3,
  Encode: () => Encode3,
  parse: () => parse25,
  toBuffer: () => toBuffer24
});
function parse25(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let buffs = [];
  let buffTimes = [];
  let readBuffs = () => {
    while (true) {
      let e2 = readUInt16(reader, "buff");
      if (e2.TAG !== "Ok") {
        return e2;
      }
      let buff = e2._0;
      if (buff === 0) {
        return {
          TAG: "Ok",
          _0: void 0
        };
      }
      let e$12 = readUInt16(reader, "buffTime");
      if (e$12.TAG !== "Ok") {
        return e$12;
      }
      buffs.push(buff);
      buffTimes.push(e$12._0);
      continue;
    }
    ;
  };
  let e$1 = readBuffs();
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        buffs,
        buffTimes
      }
    };
  } else {
    return e$1;
  }
}
var Decode3 = {
  readUInt16,
  readInt16,
  parse: parse25
};
function packBuffs(writer, buffs, buffTimes) {
  let len = min(buffs.length, buffTimes.length);
  for (let i = 0; i < len; ++i) {
    packUInt16(writer, buffs[i], `buff` + i.toString());
    packUInt16(writer, buffTimes[i], `buffTime` + i.toString());
  }
  return packUInt16(writer, 0, "buff_terminator");
}
function toBuffer24(self) {
  if (self.buffs.length !== self.buffTimes.length) {
    return {
      TAG: "Error",
      _0: {
        context: "Packet_NpcBuffUpdate.toBuffer",
        error: new Error("Expected buffs and buffTimes to be same length")
      }
    };
  } else {
    return data(packBuffs(packInt16(setType(make(), toInt("NpcBuffUpdate")), self.npcId, "npcId"), self.buffs, self.buffTimes));
  }
}
var Encode3 = {
  packInt16,
  packUInt16,
  setType,
  data,
  packBuffs,
  toBuffer: toBuffer24
};

// src/packetv1449/PacketV1449_NpcCatch.js
var PacketV1449_NpcCatch_exports = {};
__export(PacketV1449_NpcCatch_exports, {
  parse: () => parse26,
  toBuffer: () => toBuffer25
});
function parse26(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "playerId");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        playerId: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer25(self) {
  return data(packByte(packInt16(setType(make(), toInt("NpcCatch")), self.npcId, "npcId"), self.playerId, "playerId"));
}

// src/packetv1449/PacketV1449_NpcFishOut.js
var PacketV1449_NpcFishOut_exports = {};
__export(PacketV1449_NpcFishOut_exports, {
  parse: () => parse27,
  toBuffer: () => toBuffer26
});
function parse27(payload) {
  let reader = new packetreader_default(payload);
  let e = readUInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "npcNetId");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        npcNetId: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
function toBuffer26(self) {
  return data(packInt16(packUInt16(packUInt16(setType(make(), toInt("NpcFishOut")), self.x, "x"), self.y, "y"), self.npcNetId, "npcNetId"));
}

// src/packetv1449/PacketV1449_NpcHomeUpdate.js
var PacketV1449_NpcHomeUpdate_exports = {};
__export(PacketV1449_NpcHomeUpdate_exports, {
  parse: () => parse28,
  toBuffer: () => toBuffer27
});
function parse28(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "homeTileX");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "homeTileY");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "state");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        homeTileX: e$1._0,
        homeTileY: e$2._0,
        state: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer27(self) {
  return data(packByte(packInt16(packInt16(packInt16(setType(make(), toInt("NpcHomeUpdate")), self.npcId, "npcId"), self.homeTileX, "homeTileX"), self.homeTileY, "homeTileY"), self.state, "state"));
}

// src/packetv1449/PacketV1449_NpcKillCount.js
var PacketV1449_NpcKillCount_exports = {};
__export(PacketV1449_NpcKillCount_exports, {
  parse: () => parse29,
  toBuffer: () => toBuffer28
});
function parse29(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "killCount");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        killCount: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer28(self) {
  return data(packInt32(packInt16(setType(make(), toInt("NpcKillCount")), self.npcId, "npcId"), self.killCount, "killCount"));
}

// src/packetv1449/PacketV1449_NpcNameUpdate.js
var PacketV1449_NpcNameUpdate_exports = {};
__export(PacketV1449_NpcNameUpdate_exports, {
  parse: () => parse30,
  toBuffer: () => toBuffer29
});
function parse30(payload, fromServer) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1;
  if (fromServer) {
    let e$2 = readString(reader, "name");
    if (e$2.TAG === "Ok") {
      let e$3 = readInt32(reader, "townNpcVariationIndex");
      e$1 = e$3.TAG === "Ok" ? {
        TAG: "Ok",
        _0: {
          name: e$2._0,
          townNpcVariationIndex: e$3._0
        }
      } : e$3;
    } else {
      e$1 = e$2;
    }
  } else {
    e$1 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        extraInfo: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer29(self) {
  let writer = packInt16(setType(make(), toInt("NpcNameUpdate")), self.npcId, "npcId");
  let extraInfo = self.extraInfo;
  if (extraInfo !== void 0) {
    return data(packInt32(packString(writer, extraInfo.name, "name"), extraInfo.townNpcVariationIndex, "townNpcVariationIndex"));
  } else {
    return data(writer);
  }
}

// src/packetv1449/PacketV1449_NpcShopItem.js
var PacketV1449_NpcShopItem_exports = {};
__export(PacketV1449_NpcShopItem_exports, {
  parse: () => parse31,
  toBuffer: () => toBuffer30
});
function parse31(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "slot");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "itemId");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "stack");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "prefix");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt32(reader, "value");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readByte(reader, "flags");
  if (e$5.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        slot: e._0,
        itemId: e$1._0,
        stack: e$2._0,
        prefix: e$3._0,
        value: e$4._0,
        buyOnce: flag1(fromByte(e$5._0))
      }
    };
  } else {
    return e$5;
  }
}
function toBuffer30(self) {
  let flags = fromFlags(self.buyOnce, false, false, false, false, false, false, false);
  return data(packByte(packInt32(packByte(packInt16(packInt16(packByte(setType(make(), toInt("NpcShopItem")), self.slot, "slot"), self.itemId, "itemId"), self.stack, "stack"), self.prefix, "prefix"), self.value, "value"), toByte(flags), "flags"));
}

// src/packetv1449/PacketV1449_NpcTalk.js
var PacketV1449_NpcTalk_exports = {};
__export(PacketV1449_NpcTalk_exports, {
  parse: () => parse32,
  toBuffer: () => toBuffer31
});
function parse32(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "npcId");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        npcId: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer31(self) {
  return data(packInt16(packByte(setType(make(), toInt("NpcTalk")), self.playerId, "playerId"), self.npcId, "npcId"));
}

// src/packetv1449/PacketV1449_NpcTeleportPortal.js
var PacketV1449_NpcTeleportPortal_exports = {};
__export(PacketV1449_NpcTeleportPortal_exports, {
  parse: () => parse33,
  toBuffer: () => toBuffer32
});
function parse33(payload) {
  let reader = new packetreader_default(payload);
  let e = readUInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "portalColor");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "posX");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "posY");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readSingle(reader, "velX");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readSingle(reader, "velY");
  if (e$5.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        portalColor: e$1._0,
        position: {
          x: e$2._0,
          y: e$3._0
        },
        velocity: {
          x: e$4._0,
          y: e$5._0
        }
      }
    };
  } else {
    return e$5;
  }
}
function toBuffer32(self) {
  return data(packSingle(packSingle(packSingle(packSingle(packInt16(packUInt16(setType(make(), toInt("NpcTeleportPortal")), self.npcId, "npcId"), self.portalColor, "portalColor"), self.position.x, "posX"), self.position.y, "posY"), self.velocity.x, "velX"), self.velocity.y, "velY"));
}

// src/packetv1449/PacketV1449_ObjectPlace.js
var PacketV1449_ObjectPlace_exports = {};
__export(PacketV1449_ObjectPlace_exports, {
  parse: () => parse34,
  toBuffer: () => toBuffer33
});
function parse34(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "objectType");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "style");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "alternate");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readSByte(reader, "random");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "direction");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let directionRaw = e$6._0;
  let direction = directionRaw !== 0 ? directionRaw !== 1 ? {
    TAG: "Error",
    _0: {
      context: "ObjectPlace.parse.direction",
      error: new Error("Unknown direction")
    }
  } : {
    TAG: "Ok",
    _0: "Right"
  } : {
    TAG: "Ok",
    _0: "Left"
  };
  if (direction.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        objectType: e$2._0,
        style: e$3._0,
        alternate: e$4._0,
        random: e$5._0,
        direction: direction._0
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: direction._0
    };
  }
}
function toBuffer33(self) {
  let match = self.direction;
  let tmp;
  tmp = match === "Left" ? 0 : 1;
  return data(packByte(packSByte(packByte(packInt16(packInt16(packInt16(packInt16(setType(make(), toInt("ObjectPlace")), self.x, "x"), self.y, "y"), self.objectType, "objectType"), self.style, "style"), self.alternate, "alternate"), self.random, "random"), tmp, "direction"));
}

// src/packetv1449/PacketV1449_PartyToggle.js
var PacketV1449_PartyToggle_exports = {};
__export(PacketV1449_PartyToggle_exports, {
  parse: () => parse35,
  toBuffer: () => toBuffer34
});
function parse35(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}
function toBuffer34(_self) {
  return data(setType(make(), toInt("PartyToggle")));
}

// src/packetv1449/PacketV1449_PlayerAnimation.js
var PacketV1449_PlayerAnimation_exports = {};
__export(PacketV1449_PlayerAnimation_exports, {
  parse: () => parse36,
  toBuffer: () => toBuffer35
});
function parse36(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "itemRotation");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "itemAnimation");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        itemRotation: e$1._0,
        itemAnimation: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
function toBuffer35(self) {
  return data(packInt16(packSingle(packByte(setType(make(), toInt("PlayerAnimation")), self.playerId, "playerId"), self.itemRotation, "itemRotation"), self.itemAnimation, "itemAnimation"));
}

// src/packetv1449/PacketV1449_PlayerBuffAdd.js
var PacketV1449_PlayerBuffAdd_exports = {};
__export(PacketV1449_PlayerBuffAdd_exports, {
  parse: () => parse37,
  toBuffer: () => toBuffer36
});
function parse37(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "buff");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt32(reader, "time");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        buff: e$1._0,
        time: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
function toBuffer36(self) {
  return data(packInt32(packUInt16(packByte(setType(make(), toInt("PlayerBuffAdd")), self.playerId, "playerId"), self.buff, "buff"), self.time, "time"));
}

// src/packet/Packet_PlayerBuffsSet.js
var Packet_PlayerBuffsSet_exports = {};
__export(Packet_PlayerBuffsSet_exports, {
  Decode: () => Decode4,
  Encode: () => Encode4,
  parse: () => parse38,
  toBuffer: () => toBuffer37
});
function parse38(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let buffs = [];
  let readBuffs = () => {
    while (true) {
      let e2 = readUInt16(reader, "buff");
      if (e2.TAG !== "Ok") {
        return e2;
      }
      let buff = e2._0;
      if (buff === 0) {
        return {
          TAG: "Ok",
          _0: void 0
        };
      }
      buffs.push(buff);
      continue;
    }
    ;
  };
  let e$1 = readBuffs();
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        buffs
      }
    };
  } else {
    return e$1;
  }
}
var Decode4 = {
  readUInt16,
  readByte,
  parse: parse38
};
function packBuffs2(writer, buffs) {
  buffs.forEach((buff, idx) => {
    packUInt16(writer, buff, `buff_` + idx.toString());
  });
  return packUInt16(writer, 0, "buff_terminator");
}
function toBuffer37(self) {
  return data(packBuffs2(packByte(setType(make(), toInt("PlayerBuffsSet")), self.playerId, "playerId"), self.buffs));
}
var Encode4 = {
  packByte,
  packUInt16,
  setType,
  data,
  packBuffs: packBuffs2,
  toBuffer: toBuffer37
};

// src/packetv1449/PacketV1449_PlayerChestIndexSync.js
var PacketV1449_PlayerChestIndexSync_exports = {};
__export(PacketV1449_PlayerChestIndexSync_exports, {
  parse: () => parse39,
  toBuffer: () => toBuffer38
});
function parse39(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "chestId");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        chestId: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer38(self) {
  return data(packInt16(packByte(setType(make(), toInt("PlayerChestIndexSync")), self.playerId, "playerId"), self.chestId, "chestId"));
}

// src/packetv1449/PacketV1449_PlayerDead.js
var PacketV1449_PlayerDead_exports = {};
__export(PacketV1449_PlayerDead_exports, {
  parse: () => parse40,
  toBuffer: () => toBuffer39
});
function parse40(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0
      }
    };
  } else {
    return e;
  }
}
function toBuffer39(self) {
  return data(packByte(setType(make(), toInt("PlayerDead")), self.playerId, "playerId"));
}

// src/packetv1449/PacketV1449_PlayerDeath.js
var PacketV1449_PlayerDeath_exports = {};
__export(PacketV1449_PlayerDeath_exports, {
  parse: () => parse41,
  toBuffer: () => toBuffer40
});

// src/PlayerDeathReason.js
var PlayerDeathReason_exports = {};
__export(PlayerDeathReason_exports, {
  packDeathReason: () => packDeathReason,
  readDeathReason: () => readDeathReason
});
function otherFromByte(byte) {
  switch (byte) {
    case 0:
      return "FallDamage";
    case 1:
      return "Drowning";
    case 2:
      return "Lava";
    case 3:
      return "FallDamage2";
    case 4:
      return "DemonAltar";
    case 5:
      return "CompanionCube";
    case 6:
      return "Suffocation";
    case 7:
      return "Burning";
    case 8:
      return "Poison";
    case 9:
      return "Electrified";
    case 10:
      return "WallOfFleshEscape";
    case 11:
      return "WallOfFleshLicked";
    case 12:
      return "ChaosState";
    case 13:
      return "ChaosState2Male";
    case 14:
      return "ChaosState3Female";
    default:
      return;
  }
}
function otherToByte(other) {
  switch (other) {
    case "FallDamage":
      return 0;
    case "Drowning":
      return 1;
    case "Lava":
      return 2;
    case "FallDamage2":
      return 3;
    case "DemonAltar":
      return 4;
    case "CompanionCube":
      return 5;
    case "Suffocation":
      return 6;
    case "Burning":
      return 7;
    case "Poison":
      return 8;
    case "Electrified":
      return 9;
    case "WallOfFleshEscape":
      return 10;
    case "WallOfFleshLicked":
      return 11;
    case "ChaosState":
      return 12;
    case "ChaosState2Male":
      return 13;
    case "ChaosState3Female":
      return 14;
  }
}
function readDeathReason(reader) {
  let e = readByte(reader, "reasonType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let reasonType = fromByte(e._0);
  let e$1;
  if (flag1(reasonType)) {
    let e$2 = readInt16(reader, "killerPlayerId");
    e$1 = e$2.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$2._0
    } : e$2;
  } else {
    e$1 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$3;
  if (flag2(reasonType)) {
    let e$4 = readInt16(reader, "killerNpcId");
    e$3 = e$4.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$4._0
    } : e$4;
  } else {
    e$3 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$5;
  if (flag3(reasonType)) {
    let e$6 = readInt16(reader, "killerProjectileId");
    e$5 = e$6.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$6._0
    } : e$6;
  } else {
    e$5 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$7;
  if (flag4(reasonType)) {
    let e$8 = readByte(reader, "typeOfDeathOther");
    e$7 = e$8.TAG === "Ok" ? {
      TAG: "Ok",
      _0: otherFromByte(e$8._0)
    } : e$8;
  } else {
    e$7 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$9;
  if (flag5(reasonType)) {
    let e$10 = readInt16(reader, "projectileType");
    e$9 = e$10.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$10._0
    } : e$10;
  } else {
    e$9 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$9.TAG !== "Ok") {
    return e$9;
  }
  let e$11;
  if (flag6(reasonType)) {
    let e$12 = readInt16(reader, "itemType");
    e$11 = e$12.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$12._0
    } : e$12;
  } else {
    e$11 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$11.TAG !== "Ok") {
    return e$11;
  }
  let e$13;
  if (flag7(reasonType)) {
    let e$14 = readByte(reader, "itemPrefix");
    e$13 = e$14.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$14._0
    } : e$14;
  } else {
    e$13 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$13.TAG !== "Ok") {
    return e$13;
  }
  let e$15;
  if (flag8(reasonType)) {
    let e$16 = readString(reader, "deathReason");
    e$15 = e$16.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$16._0
    } : e$16;
  } else {
    e$15 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$15.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        killerPlayerId: e$1._0,
        killerNpcId: e$3._0,
        killerProjectileId: e$5._0,
        typeOfDeathOther: e$7._0,
        projectileType: e$9._0,
        itemType: e$11._0,
        itemPrefix: e$13._0,
        deathReason: e$15._0
      }
    };
  } else {
    return e$15;
  }
}
function packFlags(writer, self) {
  let flags = fromFlags(isSome(self.killerPlayerId), isSome(self.killerNpcId), isSome(self.killerProjectileId), isSome(self.typeOfDeathOther), isSome(self.projectileType), isSome(self.itemType), isSome(self.itemPrefix), isSome(self.deathReason));
  return packByte(writer, toByte(flags), "reasonType");
}
function packKillerPlayerId(writer, self) {
  let killerPlayerId = self.killerPlayerId;
  if (killerPlayerId !== void 0) {
    return packInt16(writer, killerPlayerId, "killerPlayerId");
  } else {
    return writer;
  }
}
function packKillerNpcId(writer, self) {
  let killerNpcId = self.killerNpcId;
  if (killerNpcId !== void 0) {
    return packInt16(writer, killerNpcId, "killerNpcId");
  } else {
    return writer;
  }
}
function packKillerProjectileId(writer, self) {
  let killerProjectileId = self.killerProjectileId;
  if (killerProjectileId !== void 0) {
    return packInt16(writer, killerProjectileId, "killerProjectileId");
  } else {
    return writer;
  }
}
function packTypeOfDeathOther(writer, self) {
  let typeOfDeathOther = self.typeOfDeathOther;
  if (typeOfDeathOther !== void 0) {
    return packByte(writer, otherToByte(typeOfDeathOther), "typeOfDeathOther");
  } else {
    return writer;
  }
}
function packProjectileType(writer, self) {
  let projectileType = self.projectileType;
  if (projectileType !== void 0) {
    return packInt16(writer, projectileType, "projectileType");
  } else {
    return writer;
  }
}
function packItemType(writer, self) {
  let itemType = self.itemType;
  if (itemType !== void 0) {
    return packInt16(writer, itemType, "itemType");
  } else {
    return writer;
  }
}
function packItemPrefix(writer, self) {
  let itemPrefix = self.itemPrefix;
  if (itemPrefix !== void 0) {
    return packByte(writer, itemPrefix, "itemPrefix");
  } else {
    return writer;
  }
}
function pack2(writer, self) {
  let writer$1 = packItemPrefix(packItemType(packProjectileType(packTypeOfDeathOther(packKillerProjectileId(packKillerNpcId(packKillerPlayerId(packFlags(writer, self), self), self), self), self), self), self), self);
  let deathReason = self.deathReason;
  if (deathReason !== void 0) {
    return packString(writer$1, deathReason, "deathReason");
  } else {
    return writer$1;
  }
}
var packDeathReason = pack2;

// src/packetv1449/PacketV1449_PlayerDeath.js
function parse41(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readDeathReason(reader);
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "damage");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "hitDirection");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "pvp");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        deathReason: e$1._0,
        damage: e$2._0,
        hitDirection: e$3._0,
        pvp: e$4._0 === 1
      }
    };
  } else {
    return e$4;
  }
}
function toBuffer40(self) {
  return data(packByte(packByte(packInt16(packDeathReason(packByte(setType(make(), toInt("PlayerDeath")), self.playerId, "playerId"), self.deathReason), self.damage, "damage"), self.hitDirection, "hitDirection"), self.pvp ? 1 : 0, "pvp"));
}

// src/packetv1449/PacketV1449_PlayerDodge.js
var PacketV1449_PlayerDodge_exports = {};
__export(PacketV1449_PlayerDodge_exports, {
  parse: () => parse42,
  toBuffer: () => toBuffer41
});
function dodgeFromByte(b) {
  switch (b) {
    case 1:
      return "Ninja";
    case 2:
      return "Shadow";
    case 4:
      return "BrainOfConfusion";
    default:
      return;
  }
}
function dodgeToByte(d) {
  switch (d) {
    case "Ninja":
      return 1;
    case "Shadow":
      return 2;
    case "BrainOfConfusion":
      return 4;
  }
}
function parse42(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "dodge");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let dodge = dodgeFromByte(e$1._0);
  let dodge$1 = dodge !== void 0 ? {
    TAG: "Ok",
    _0: dodge
  } : {
    TAG: "Error",
    _0: {
      context: "Packet_PlayerDodge.parse.dodge",
      error: new Error("Unknown dodge type")
    }
  };
  if (dodge$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        dodge: dodge$1._0
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: dodge$1._0
    };
  }
}
function toBuffer41(self) {
  return data(packByte(packByte(setType(make(), toInt("PlayerDodge")), self.playerId, "playerId"), dodgeToByte(self.dodge), "dodge"));
}

// src/packetv1449/PacketV1449_PlayerMana.js
var PacketV1449_PlayerMana_exports = {};
__export(PacketV1449_PlayerMana_exports, {
  parse: () => parse43,
  toBuffer: () => toBuffer42
});
function parse43(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "mana");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "maxMana");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        mana: e$1._0,
        maxMana: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
function toBuffer42(self) {
  return data(packInt16(packInt16(packByte(setType(make(), toInt("PlayerMana")), self.playerId, "playerId"), self.mana, "mana"), self.maxMana, "maxMana"));
}

// src/packetv1449/PacketV1449_PlayerTeam.js
var PacketV1449_PlayerTeam_exports = {};
__export(PacketV1449_PlayerTeam_exports, {
  parse: () => parse44,
  toBuffer: () => toBuffer43
});
function parse44(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "team");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        team: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer43(self) {
  return data(packByte(packByte(setType(make(), toInt("PlayerTeam")), self.playerId, "playerId"), self.team, "team"));
}

// src/packetv1449/PacketV1449_PvpToggle.js
var PacketV1449_PvpToggle_exports = {};
__export(PacketV1449_PvpToggle_exports, {
  parse: () => parse45,
  toBuffer: () => toBuffer44
});
function parse45(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "pvpEnabled");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        pvpEnabled: e$1._0 === 1
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer44(self) {
  return data(packByte(packByte(setType(make(), toInt("PvpToggle")), self.playerId, "playerId"), self.pvpEnabled ? 1 : 0, "pvpEnabled"));
}

// src/packet/Packet_ShimmerEffectOrCoinLuck.js
var Packet_ShimmerEffectOrCoinLuck_exports = {};
__export(Packet_ShimmerEffectOrCoinLuck_exports, {
  Decode: () => Decode5,
  Encode: () => Encode5,
  parse: () => parse46,
  toBuffer: () => toBuffer45
});
function parse46(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "kind");
  if (e.TAG !== "Ok") {
    return e;
  }
  let kind = e._0;
  if (kind !== 0) {
    if (kind !== 1) {
      return {
        TAG: "Error",
        _0: {
          context: "Packet_ShimmerEffectOrCoinLuck.parse",
          error: new Error("Unknown shimmer effect kind")
        }
      };
    }
    let e$1 = readSingle(reader, "coinLuckX");
    if (e$1.TAG !== "Ok") {
      return e$1;
    }
    let e$2 = readSingle(reader, "coinLuckY");
    if (e$2.TAG !== "Ok") {
      return e$2;
    }
    let e$3 = readInt32(reader, "coinLuckAmount");
    if (e$3.TAG === "Ok") {
      return {
        TAG: "Ok",
        _0: {
          TAG: "CoinLuck",
          _0: {
            position: {
              x: e$1._0,
              y: e$2._0
            },
            amount: e$3._0
          }
        }
      };
    } else {
      return e$3;
    }
  }
  let e$4 = readSingle(reader, "shimmerX");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readSingle(reader, "shimmerY");
  if (e$5.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "ShimmerEffect",
        _0: e$4._0,
        _1: e$5._0
      }
    };
  } else {
    return e$5;
  }
}
var Decode5 = {
  readByte,
  readInt32,
  readSingle,
  parse: parse46
};
function toBuffer45(self) {
  let writer = setType(make(), toInt("ShimmerEffectOrCoinLuck"));
  let tmp;
  if (self.TAG === "ShimmerEffect") {
    tmp = packSingle(packSingle(packByte(writer, 0, "kind"), self._0, "shimmerX"), self._1, "shimmerY");
  } else {
    let match = self._0;
    let position = match.position;
    tmp = packInt32(packSingle(packSingle(packByte(writer, 1, "kind"), position.x, "coinLuckX"), position.y, "coinLuckY"), match.amount, "coinLuckAmount");
  }
  return data(tmp);
}
var Encode5 = {
  Writer: void 0,
  packByte,
  packInt32,
  packSingle,
  setType,
  data,
  toBuffer: toBuffer45
};

// src/packetv1449/PacketV1449_SignNew.js
var PacketV1449_SignNew_exports = {};
__export(PacketV1449_SignNew_exports, {
  parse: () => parse47,
  toBuffer: () => toBuffer46
});
function parse47(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "signId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readString(reader, "text");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "playerId");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readByte(reader, "flags");
  if (e$5.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        signId: e._0,
        x: e$1._0,
        y: e$2._0,
        text: e$3._0,
        playerId: e$4._0,
        deleteSign: flag1(fromByte(e$5._0))
      }
    };
  } else {
    return e$5;
  }
}
function toBuffer46(self) {
  let flags = fromFlags(self.deleteSign, false, false, false, false, false, false, false);
  return data(packByte(packByte(packString(packInt16(packInt16(packInt16(setType(make(), toInt("SignNew")), self.signId, "signId"), self.x, "x"), self.y, "y"), self.text, "text"), self.playerId, "playerId"), toByte(flags), "flags"));
}

// src/packetv1449/PacketV1449_SignRead.js
var PacketV1449_SignRead_exports = {};
__export(PacketV1449_SignRead_exports, {
  parse: () => parse48,
  toBuffer: () => toBuffer47
});
function parse48(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer47(self) {
  return data(packInt16(packInt16(setType(make(), toInt("SignRead")), self.x, "x"), self.y, "y"));
}

// src/packetv1449/PacketV1449_SmokePoof.js
var PacketV1449_SmokePoof_exports = {};
__export(PacketV1449_SmokePoof_exports, {
  parse: () => parse49,
  toBuffer: () => toBuffer48
});
function parse49(payload) {
  let reader = new packetreader_default(payload);
  let e = readUInt32(reader, "packedPosition");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        packedPosition: e._0
      }
    };
  } else {
    return e;
  }
}
function toBuffer48(self) {
  return data(packUInt32(setType(make(), toInt("SmokePoof")), self.packedPosition, "packedPosition"));
}

// src/packetv1449/PacketV1449_SocialHandshake.js
var PacketV1449_SocialHandshake_exports = {};
__export(PacketV1449_SocialHandshake_exports, {
  parse: () => parse50,
  toBuffer: () => toBuffer49
});
function parse50(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}
function toBuffer49(_self) {
  return data(setType(make(), toInt("SocialHandshake")));
}

// src/packetv1449/PacketV1449_Status.js
var PacketV1449_Status_exports = {};
__export(PacketV1449_Status_exports, {
  parse: () => parse51,
  toBuffer: () => toBuffer50
});
function parse51(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "max");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readNetworkText(reader, "text");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "flags");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let flags = fromByte(e$2._0);
  return {
    TAG: "Ok",
    _0: {
      max: e._0,
      text: e$1._0,
      flags: {
        hideStatusTextPercent: flag1(flags),
        statusTextHasShadows: flag2(flags),
        runCheckBytes: flag3(flags)
      }
    }
  };
}
function flagsToByte(flags) {
  let byte = 0;
  byte = byte | (flags.hideStatusTextPercent ? 1 : 0);
  byte = byte | (flags.statusTextHasShadows ? 2 : 0);
  byte = byte | (flags.runCheckBytes ? 4 : 0);
  return byte;
}
function toBuffer50(self) {
  return data(packByte(packNetworkText(packInt32(setType(make(), toInt("Status")), self.max, "max"), self.text, "text"), flagsToByte(self.flags), "flags"));
}

// src/packetv1449/PacketV1449_SwitchHit.js
var PacketV1449_SwitchHit_exports = {};
__export(PacketV1449_SwitchHit_exports, {
  parse: () => parse52,
  toBuffer: () => toBuffer51
});
function parse52(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer51(self) {
  return data(packInt16(packInt16(setType(make(), toInt("SwitchHit")), self.x, "x"), self.y, "y"));
}

// src/packet/Packet_Teleport.js
var Packet_Teleport_exports = {};
__export(Packet_Teleport_exports, {
  Decode: () => Decode6,
  Encode: () => Encode6,
  parse: () => parse53,
  toBuffer: () => toBuffer52
});

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Stdlib_Result.js
function map2(opt, f) {
  if (opt.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: f(opt._0)
    };
  } else {
    return opt;
  }
}
function mapError(r, f) {
  if (r.TAG === "Ok") {
    return r;
  } else {
    return {
      TAG: "Error",
      _0: f(r._0)
    };
  }
}
function all4(param) {
  let d = param[3];
  let c = param[2];
  let b = param[1];
  let a = param[0];
  if (a.TAG === "Ok") {
    if (b.TAG === "Ok") {
      if (c.TAG === "Ok") {
        if (d.TAG === "Ok") {
          return {
            TAG: "Ok",
            _0: [
              a._0,
              b._0,
              c._0,
              d._0
            ]
          };
        } else {
          return {
            TAG: "Error",
            _0: d._0
          };
        }
      } else {
        return {
          TAG: "Error",
          _0: c._0
        };
      }
    } else {
      return {
        TAG: "Error",
        _0: b._0
      };
    }
  } else {
    return {
      TAG: "Error",
      _0: a._0
    };
  }
}

// src/packet/Packet_Teleport.js
function parse53(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "flags");
  if (e.TAG !== "Ok") {
    return e;
  }
  let flags = fromByte(e._0);
  let getPositionFromTarget = flag3(flags);
  let match = flag1(flags);
  let match$1 = flag2(flags);
  let teleportType = match ? match$1 ? "TeleportAck" : "Npc" : match$1 ? "PlayerToPlayer" : "Player";
  let e$1 = readInt16(reader, "targetId");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "x");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "y");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "style");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = flag4(flags) ? map2(readInt32(reader, "extraInfo"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (e$5.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        teleportType,
        getPositionFromTarget,
        targetId: e$1._0,
        x: e$2._0,
        y: e$3._0,
        style: e$4._0,
        extraInfo: e$5._0
      }
    };
  } else {
    return e$5;
  }
}
var Decode6 = {
  readByte,
  readInt16,
  readSingle,
  readInt32,
  parse: parse53
};
function getFlags(self) {
  return toByte(fromFlags(self.teleportType === "Npc" || self.teleportType === "TeleportAck", self.teleportType === "PlayerToPlayer" || self.teleportType === "TeleportAck", self.getPositionFromTarget, isSome(self.extraInfo), false, false, false, false));
}
function toBuffer52(self) {
  let writer = packByte(packSingle(packSingle(packInt16(packByte(setType(make(), toInt("Teleport")), getFlags(self), "flags"), self.targetId, "targetId"), self.x, "x"), self.y, "y"), self.style, "style");
  let extraInfo = self.extraInfo;
  return data(extraInfo !== void 0 ? packInt32(writer, extraInfo, "extraInfo") : writer);
}
var Encode6 = {
  packByte,
  packInt16,
  packSingle,
  packInt32,
  setType,
  data,
  getFlags,
  toBuffer: toBuffer52
};

// src/packet/Packet_TeleportationPotion.js
var Packet_TeleportationPotion_exports = {};
__export(Packet_TeleportationPotion_exports, {
  Decode: () => Decode7,
  Encode: () => Encode7,
  parse: () => parse54,
  teleportTypeToInt: () => teleportTypeToInt,
  toBuffer: () => toBuffer53
});
function teleportTypeToInt(teleportType) {
  switch (teleportType) {
    case "TeleportationPotion":
      return 0;
    case "MagicConch":
      return 1;
    case "DemonConch":
      return 2;
    case "ShellphoneSpawn":
      return 3;
    case "PlayerNoSpaceTeleport":
      return 4;
  }
}
function parse54(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "teleportType");
  if (e.TAG !== "Ok") {
    return e;
  }
  switch (e._0) {
    case 0:
      return {
        TAG: "Ok",
        _0: {
          teleportType: "TeleportationPotion"
        }
      };
    case 1:
      return {
        TAG: "Ok",
        _0: {
          teleportType: "MagicConch"
        }
      };
    case 2:
      return {
        TAG: "Ok",
        _0: {
          teleportType: "DemonConch"
        }
      };
    case 3:
      return {
        TAG: "Ok",
        _0: {
          teleportType: "ShellphoneSpawn"
        }
      };
    case 4:
      return {
        TAG: "Ok",
        _0: {
          teleportType: "PlayerNoSpaceTeleport"
        }
      };
    default:
      return {
        TAG: "Error",
        _0: {
          context: "Packet_TeleportationPotion.parse",
          error: new Error("Unknown teleport type")
        }
      };
  }
}
var Decode7 = {
  readByte,
  parse: parse54
};
function toBuffer53(self) {
  return data(packByte(setType(make(), toInt("TeleportationPotion")), teleportTypeToInt(self.teleportType), "teleportType"));
}
var Encode7 = {
  Writer: void 0,
  packByte,
  setType,
  data,
  toBuffer: toBuffer53
};

// src/packetv1449/PacketV1449_TemporaryAnimationCreate.js
var PacketV1449_TemporaryAnimationCreate_exports = {};
__export(PacketV1449_TemporaryAnimationCreate_exports, {
  parse: () => parse55,
  toBuffer: () => toBuffer54
});
function parse55(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "typeId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "tileType");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "x");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "y");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        typeId: e._0,
        tileType: e$1._0,
        x: e$2._0,
        y: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer54(self) {
  return data(packInt16(packInt16(packUInt16(packInt16(setType(make(), toInt("TemporaryAnimationCreate")), self.typeId, "typeId"), self.tileType, "tileType"), self.x, "x"), self.y, "y"));
}

// src/packet/Packet_TileEntityDisplayDollItemSync.js
var Packet_TileEntityDisplayDollItemSync_exports = {};
__export(Packet_TileEntityDisplayDollItemSync_exports, {
  Decode: () => Decode8,
  Encode: () => Encode8,
  commandFromInt: () => commandFromInt,
  commandToInt: () => commandToInt,
  parse: () => parse56,
  toBuffer: () => toBuffer55
});
function commandToInt(command) {
  switch (command) {
    case "Equip":
      return 0;
    case "Dye":
      return 1;
    case "Pose":
      return 2;
    case "Misc":
      return 3;
  }
}
function commandFromInt(value) {
  switch (value) {
    case 0:
      return "Equip";
    case 1:
      return "Dye";
    case 2:
      return "Pose";
    case 3:
      return "Misc";
    default:
      return;
  }
}
function parse56(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let playerId = e._0;
  let e$1 = readInt32(reader, "tileEntityId");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let tileEntityId = e$1._0;
  let e$2 = readByte(reader, "itemIndex");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let itemIndex = e$2._0;
  let e$3 = readByte(reader, "command");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let command = commandFromInt(e$3._0);
  if (command === void 0) {
    return {
      TAG: "Error",
      _0: {
        context: "Packet_TileEntityDisplayDollItemSync.parse",
        error: new Error("Unknown display doll command")
      }
    };
  }
  if (command === "Pose") {
    let e$4 = readByte(reader, "pose");
    if (e$4.TAG === "Ok") {
      return {
        TAG: "Ok",
        _0: {
          playerId,
          tileEntityId,
          itemIndex,
          command,
          data: {
            TAG: "PoseValue",
            _0: e$4._0
          }
        }
      };
    } else {
      return e$4;
    }
  }
  let e$5 = readUInt16(reader, "itemId");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readUInt16(reader, "stack");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readByte(reader, "prefix");
  if (e$7.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId,
        tileEntityId,
        itemIndex,
        command,
        data: {
          TAG: "Item",
          _0: {
            itemId: e$5._0,
            stack: e$6._0,
            prefix: e$7._0
          }
        }
      }
    };
  } else {
    return e$7;
  }
}
var Decode8 = {
  readByte,
  readInt32,
  readUInt16,
  parse: parse56
};
function toBuffer55(self) {
  let writer = packByte(packByte(packInt32(packByte(setType(make(), toInt("TileEntityDisplayDollItemSync")), self.playerId, "playerId"), self.tileEntityId, "tileEntityId"), self.itemIndex, "itemIndex"), commandToInt(self.command), "command");
  let pose = self.data;
  let tmp;
  if (pose.TAG === "Item") {
    let match = pose._0;
    tmp = packByte(packUInt16(packUInt16(writer, match.itemId, "itemId"), match.stack, "stack"), match.prefix, "prefix");
  } else {
    tmp = packByte(writer, pose._0, "pose");
  }
  return data(tmp);
}
var Encode8 = {
  Writer: void 0,
  packByte,
  packInt32,
  packUInt16,
  setType,
  data,
  toBuffer: toBuffer55
};

// src/packetv1449/PacketV1449_TileEntityHatRackItemSync.js
var PacketV1449_TileEntityHatRackItemSync_exports = {};
__export(PacketV1449_TileEntityHatRackItemSync_exports, {
  parse: () => parse57,
  toBuffer: () => toBuffer56
});
function parse57(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "tileEntityId");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "itemIndex");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readUInt16(reader, "itemId");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readUInt16(reader, "stack");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readByte(reader, "prefix");
  if (e$5.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        tileEntityId: e$1._0,
        itemIndex: e$2._0,
        itemId: e$3._0,
        stack: e$4._0,
        prefix: e$5._0
      }
    };
  } else {
    return e$5;
  }
}
function toBuffer56(self) {
  return data(packByte(packUInt16(packUInt16(packByte(packInt32(packByte(setType(make(), toInt("TileEntityHatRackItemSync")), self.playerId, "playerId"), self.tileEntityId, "tileEntityId"), self.itemIndex, "itemIndex"), self.itemId, "itemId"), self.stack, "stack"), self.prefix, "prefix"));
}

// src/packetv1449/PacketV1449_TileEntityInteractionRequest.js
var PacketV1449_TileEntityInteractionRequest_exports = {};
__export(PacketV1449_TileEntityInteractionRequest_exports, {
  parse: () => parse58,
  toBuffer: () => toBuffer57
});
function parse58(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "tileEntityId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "playerId");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        tileEntityId: e._0,
        playerId: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer57(self) {
  return data(packByte(packInt32(setType(make(), toInt("TileEntityInteractionRequest")), self.tileEntityId, "tileEntityId"), self.playerId, "playerId"));
}

// src/packetv1449/PacketV1449_TileEntityPlace.js
var PacketV1449_TileEntityPlace_exports = {};
__export(PacketV1449_TileEntityPlace_exports, {
  parse: () => parse59,
  toBuffer: () => toBuffer58
});
function parse59(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "tileEntityType");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        tileEntityType: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
function toBuffer58(self) {
  return data(packByte(packInt16(packInt16(setType(make(), toInt("TileEntityPlace")), self.x, "x"), self.y, "y"), self.tileEntityType, "tileEntityType"));
}

// src/packetv1449/PacketV1449_TileEntityUpdate.js
var PacketV1449_TileEntityUpdate_exports = {};
__export(PacketV1449_TileEntityUpdate_exports, {
  parse: () => parse60,
  toBuffer: () => toBuffer59
});
function parse60(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "tileEntityId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let tileEntityId = e._0;
  let e$1 = readBool(reader, "hasData");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  if (!e$1._0) {
    return {
      TAG: "Ok",
      _0: {
        tileEntityId,
        payload: "Remove"
      }
    };
  }
  let e$2 = getBytesLeft(reader);
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readBuffer(reader, e$2._0, "tileEntityData");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        tileEntityId,
        payload: {
          TAG: "Data",
          _0: e$3._0
        }
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer59(self) {
  let writer = packInt32(setType(make(), toInt("TileEntityUpdate")), self.tileEntityId, "tileEntityId");
  let tileEntityData = self.payload;
  if (typeof tileEntityData !== "object") {
    return data(packBool(writer, false, "hasData"));
  } else {
    return data(packBuffer(packBool(writer, true, "hasData"), tileEntityData._0, "tileEntityData"));
  }
}

// src/packetv1449/PacketV1449_TileModify.js
var PacketV1449_TileModify_exports = {};
__export(PacketV1449_TileModify_exports, {
  Action: () => Action2,
  parse: () => parse61,
  toBuffer: () => toBuffer60
});
function fromInt7(action) {
  switch (action) {
    case 0:
      return "KillTile";
    case 1:
      return "PlaceTile";
    case 2:
      return "KillWall";
    case 3:
      return "PlaceWall";
    case 4:
      return "KillTileNoItem";
    case 5:
      return "PlaceWire";
    case 6:
      return "KillWire";
    case 7:
      return "PoundTile";
    case 8:
      return "PlaceActuator";
    case 9:
      return "KillActuator";
    case 10:
      return "PlaceWire2";
    case 11:
      return "KillWire2";
    case 12:
      return "PlaceWire3";
    case 13:
      return "KillWire3";
    case 14:
      return "SlopeTile";
    case 15:
      return "FrameTrack";
    case 16:
      return "PlaceWire4";
    case 17:
      return "KillWire4";
    case 18:
      return "PokeLogicGate";
    case 19:
      return "Actuate";
    case 20:
      return "KillTile2";
    case 21:
      return "ReplaceTile";
    case 22:
      return "ReplaceWall";
    case 23:
      return "SlopePoundTile";
    default:
      return;
  }
}
function toInt7(action) {
  switch (action) {
    case "KillTile":
      return 0;
    case "PlaceTile":
      return 1;
    case "KillWall":
      return 2;
    case "PlaceWall":
      return 3;
    case "KillTileNoItem":
      return 4;
    case "PlaceWire":
      return 5;
    case "KillWire":
      return 6;
    case "PoundTile":
      return 7;
    case "PlaceActuator":
      return 8;
    case "KillActuator":
      return 9;
    case "PlaceWire2":
      return 10;
    case "KillWire2":
      return 11;
    case "PlaceWire3":
      return 12;
    case "KillWire3":
      return 13;
    case "SlopeTile":
      return 14;
    case "FrameTrack":
      return 15;
    case "PlaceWire4":
      return 16;
    case "KillWire4":
      return 17;
    case "PokeLogicGate":
      return 18;
    case "Actuate":
      return 19;
    case "KillTile2":
      return 20;
    case "ReplaceTile":
      return 21;
    case "ReplaceWall":
      return 22;
    case "SlopePoundTile":
      return 23;
  }
}
var Action2 = {
  fromInt: fromInt7,
  toInt: toInt7
};
function parse61(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "action");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "tileX");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "tileY");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "value1");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "value2");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let action = fromInt7(e._0);
  let action$1 = action !== void 0 ? {
    TAG: "Ok",
    _0: action
  } : {
    TAG: "Error",
    _0: {
      context: "TileModify.parse.action",
      error: new Error("Unknown action")
    }
  };
  if (action$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        action: action$1._0,
        tileX: e$1._0,
        tileY: e$2._0,
        value1: e$3._0,
        value2: e$4._0
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: action$1._0
    };
  }
}
function toBuffer60(self) {
  return data(packByte(packInt16(packInt16(packInt16(packByte(setType(make(), toInt("TileModify")), toInt7(self.action), "action"), self.tileX, "tileX"), self.tileY, "tileY"), self.value1, "value1"), self.value2, "value2"));
}

// src/packetv1449/PacketV1449_TilePaint.js
var PacketV1449_TilePaint_exports = {};
__export(PacketV1449_TilePaint_exports, {
  parse: () => parse62,
  toBuffer: () => toBuffer61
});
function parse62(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "color");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "coat");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        color: e$2._0,
        coat: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer61(self) {
  return data(packByte(packByte(packInt16(packInt16(setType(make(), toInt("TilePaint")), self.x, "x"), self.y, "y"), self.color, "color"), self.coat, "coat"));
}

// src/packetv1449/PacketV1449_TilePickingSync.js
var PacketV1449_TilePickingSync_exports = {};
__export(PacketV1449_TilePickingSync_exports, {
  parse: () => parse63,
  toBuffer: () => toBuffer62
});
function parse63(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "pickPower");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        x: e$1._0,
        y: e$2._0,
        pickPower: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer62(self) {
  return data(packByte(packInt16(packInt16(packByte(setType(make(), toInt("TilePickingSync")), self.playerId, "playerId"), self.x, "x"), self.y, "y"), self.pickPower, "pickPower"));
}

// src/packetv1449/PacketV1449_TileSectionFrame.js
var PacketV1449_TileSectionFrame_exports = {};
__export(PacketV1449_TileSectionFrame_exports, {
  parse: () => parse64,
  toBuffer: () => toBuffer63
});
function parse64(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "startX");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "startY");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "endX");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "endY");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        startX: e._0,
        startY: e$1._0,
        endX: e$2._0,
        endY: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer63(self) {
  return data(packInt16(packInt16(packInt16(packInt16(setType(make(), toInt("TileSectionFrame")), self.startX, "startX"), self.startY, "startY"), self.endX, "endX"), self.endY, "endY"));
}

// src/packet/Packet_TileSectionSend.js
var Packet_TileSectionSend_exports = {};
__export(Packet_TileSectionSend_exports, {
  Chest: () => Chest2,
  Entity: () => Entity,
  Sign: () => Sign2,
  parse: () => parse$13,
  toBuffer: () => toBuffer64
});
import * as Nodezlib from "node:zlib";

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Primitive_object.js
var for_in = function(o, foo) {
  for (var x in o) {
    foo(x);
  }
};
function equal(a, b) {
  if (a === b) {
    return true;
  }
  let a_type = typeof a;
  if (a_type === "string" || a_type === "number" || a_type === "bigint" || a_type === "boolean" || a_type === "undefined" || a === null) {
    return false;
  }
  let b_type = typeof b;
  if (a_type === "function" || b_type === "function") {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: functional value",
      Error: new Error()
    };
  }
  if (b_type === "number" || b_type === "bigint" || b_type === "undefined" || b === null) {
    return false;
  }
  let tag_a = a.TAG;
  let tag_b = b.TAG;
  if (tag_a !== tag_b) {
    return false;
  }
  let len_a = a.length | 0;
  let len_b = b.length | 0;
  if (len_a === len_b) {
    if (Array.isArray(a)) {
      let _i = 0;
      while (true) {
        let i = _i;
        if (i === len_a) {
          return true;
        }
        if (!equal(a[i], b[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    } else if (a instanceof Date && b instanceof Date) {
      return !(a > b || a < b);
    } else {
      let result = {
        contents: true
      };
      let do_key_a = (key) => {
        if (!Object.prototype.hasOwnProperty.call(b, key)) {
          result.contents = false;
          return;
        }
      };
      let do_key_b = (key) => {
        if (!Object.prototype.hasOwnProperty.call(a, key) || !equal(b[key], a[key])) {
          result.contents = false;
          return;
        }
      };
      for_in(a, do_key_a);
      if (result.contents) {
        for_in(b, do_key_b);
      }
      return result.contents;
    }
  } else {
    return false;
  }
}
function notequal(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a !== b;
  } else {
    return !equal(a, b);
  }
}

// src/TileSolid.js
var map3 = /* @__PURE__ */ new Map([
  [
    379,
    true
  ],
  [
    371,
    true
  ],
  [
    357,
    true
  ],
  [
    408,
    true
  ],
  [
    409,
    true
  ],
  [
    415,
    true
  ],
  [
    416,
    true
  ],
  [
    417,
    true
  ],
  [
    418,
    true
  ],
  [
    232,
    true
  ],
  [
    311,
    true
  ],
  [
    312,
    true
  ],
  [
    313,
    true
  ],
  [
    315,
    true
  ],
  [
    321,
    true
  ],
  [
    322,
    true
  ],
  [
    239,
    true
  ],
  [
    380,
    true
  ],
  [
    367,
    true
  ],
  [
    357,
    true
  ],
  [
    368,
    true
  ],
  [
    369,
    true
  ],
  [
    325,
    true
  ],
  [
    460,
    true
  ],
  [
    326,
    true
  ],
  [
    458,
    true
  ],
  [
    459,
    true
  ],
  [
    327,
    true
  ],
  [
    345,
    true
  ],
  [
    328,
    true
  ],
  [
    329,
    true
  ],
  [
    421,
    true
  ],
  [
    422,
    true
  ],
  [
    426,
    true
  ],
  [
    430,
    true
  ],
  [
    431,
    true
  ],
  [
    432,
    true
  ],
  [
    433,
    true
  ],
  [
    434,
    true
  ],
  [
    446,
    true
  ],
  [
    447,
    true
  ],
  [
    448,
    true
  ],
  [
    427,
    true
  ],
  [
    284,
    true
  ],
  [
    346,
    true
  ],
  [
    347,
    true
  ],
  [
    348,
    true
  ],
  [
    350,
    true
  ],
  [
    370,
    true
  ],
  [
    383,
    true
  ],
  [
    385,
    true
  ],
  [
    396,
    true
  ],
  [
    397,
    true
  ],
  [
    399,
    true
  ],
  [
    401,
    true
  ],
  [
    398,
    true
  ],
  [
    400,
    true
  ],
  [
    402,
    true
  ],
  [
    403,
    true
  ],
  [
    404,
    true
  ],
  [
    407,
    true
  ],
  [
    170,
    true
  ],
  [
    221,
    true
  ],
  [
    272,
    true
  ],
  [
    229,
    true
  ],
  [
    230,
    true
  ],
  [
    222,
    true
  ],
  [
    223,
    true
  ],
  [
    224,
    true
  ],
  [
    225,
    true
  ],
  [
    226,
    true
  ],
  [
    235,
    true
  ],
  [
    191,
    true
  ],
  [
    211,
    true
  ],
  [
    208,
    true
  ],
  [
    192,
    true
  ],
  [
    193,
    true
  ],
  [
    194,
    true
  ],
  [
    195,
    true
  ],
  [
    200,
    true
  ],
  [
    203,
    true
  ],
  [
    204,
    true
  ],
  [
    189,
    true
  ],
  [
    190,
    true
  ],
  [
    198,
    true
  ],
  [
    206,
    true
  ],
  [
    248,
    true
  ],
  [
    249,
    true
  ],
  [
    250,
    true
  ],
  [
    251,
    true
  ],
  [
    252,
    true
  ],
  [
    253,
    true
  ],
  [
    273,
    true
  ],
  [
    274,
    true
  ],
  [
    202,
    true
  ],
  [
    188,
    true
  ],
  [
    179,
    true
  ],
  [
    381,
    true
  ],
  [
    180,
    true
  ],
  [
    181,
    true
  ],
  [
    182,
    true
  ],
  [
    183,
    true
  ],
  [
    196,
    true
  ],
  [
    197,
    true
  ],
  [
    175,
    true
  ],
  [
    176,
    true
  ],
  [
    177,
    true
  ],
  [
    162,
    true
  ],
  [
    163,
    true
  ],
  [
    164,
    true
  ],
  [
    234,
    true
  ],
  [
    137,
    true
  ],
  [
    160,
    true
  ],
  [
    161,
    true
  ],
  [
    145,
    true
  ],
  [
    146,
    true
  ],
  [
    147,
    true
  ],
  [
    148,
    true
  ],
  [
    138,
    true
  ],
  [
    140,
    true
  ],
  [
    151,
    true
  ],
  [
    152,
    true
  ],
  [
    153,
    true
  ],
  [
    154,
    true
  ],
  [
    155,
    true
  ],
  [
    156,
    true
  ],
  [
    157,
    true
  ],
  [
    158,
    true
  ],
  [
    159,
    true
  ],
  [
    130,
    true
  ],
  [
    107,
    true
  ],
  [
    108,
    true
  ],
  [
    111,
    true
  ],
  [
    109,
    true
  ],
  [
    112,
    true
  ],
  [
    116,
    true
  ],
  [
    117,
    true
  ],
  [
    123,
    true
  ],
  [
    118,
    true
  ],
  [
    119,
    true
  ],
  [
    120,
    true
  ],
  [
    121,
    true
  ],
  [
    122,
    true
  ],
  [
    150,
    true
  ],
  [
    199,
    true
  ],
  [
    0,
    true
  ],
  [
    1,
    true
  ],
  [
    2,
    true
  ],
  [
    6,
    true
  ],
  [
    7,
    true
  ],
  [
    8,
    true
  ],
  [
    9,
    true
  ],
  [
    166,
    true
  ],
  [
    167,
    true
  ],
  [
    168,
    true
  ],
  [
    169,
    true
  ],
  [
    10,
    true
  ],
  [
    19,
    true
  ],
  [
    22,
    true
  ],
  [
    23,
    true
  ],
  [
    25,
    true
  ],
  [
    30,
    true
  ],
  [
    37,
    true
  ],
  [
    38,
    true
  ],
  [
    39,
    true
  ],
  [
    40,
    true
  ],
  [
    41,
    true
  ],
  [
    43,
    true
  ],
  [
    44,
    true
  ],
  [
    45,
    true
  ],
  [
    46,
    true
  ],
  [
    47,
    true
  ],
  [
    48,
    true
  ],
  [
    53,
    true
  ],
  [
    54,
    true
  ],
  [
    56,
    true
  ],
  [
    57,
    true
  ],
  [
    58,
    true
  ],
  [
    59,
    true
  ],
  [
    60,
    true
  ],
  [
    63,
    true
  ],
  [
    64,
    true
  ],
  [
    65,
    true
  ],
  [
    66,
    true
  ],
  [
    67,
    true
  ],
  [
    68,
    true
  ],
  [
    75,
    true
  ],
  [
    76,
    true
  ],
  [
    70,
    true
  ],
  [
    384,
    true
  ],
  [
    387,
    true
  ],
  [
    388,
    true
  ]
]);
function isSolid(tileType) {
  return getOr(map3.get(tileType), false);
}

// src/TileFrameImportant.js
var map4 = /* @__PURE__ */ new Map([
  [
    0,
    false
  ],
  [
    1,
    false
  ],
  [
    2,
    false
  ],
  [
    3,
    true
  ],
  [
    4,
    true
  ],
  [
    5,
    true
  ],
  [
    6,
    false
  ],
  [
    7,
    false
  ],
  [
    8,
    false
  ],
  [
    9,
    false
  ],
  [
    10,
    true
  ],
  [
    11,
    true
  ],
  [
    12,
    true
  ],
  [
    13,
    true
  ],
  [
    14,
    true
  ],
  [
    15,
    true
  ],
  [
    16,
    true
  ],
  [
    17,
    true
  ],
  [
    18,
    true
  ],
  [
    19,
    true
  ],
  [
    20,
    true
  ],
  [
    21,
    true
  ],
  [
    22,
    false
  ],
  [
    23,
    false
  ],
  [
    24,
    true
  ],
  [
    25,
    false
  ],
  [
    26,
    true
  ],
  [
    27,
    true
  ],
  [
    28,
    true
  ],
  [
    29,
    true
  ],
  [
    30,
    false
  ],
  [
    31,
    true
  ],
  [
    32,
    false
  ],
  [
    33,
    true
  ],
  [
    34,
    true
  ],
  [
    35,
    true
  ],
  [
    36,
    true
  ],
  [
    37,
    false
  ],
  [
    38,
    false
  ],
  [
    39,
    false
  ],
  [
    40,
    false
  ],
  [
    41,
    false
  ],
  [
    42,
    true
  ],
  [
    43,
    false
  ],
  [
    44,
    false
  ],
  [
    45,
    false
  ],
  [
    46,
    false
  ],
  [
    47,
    false
  ],
  [
    48,
    false
  ],
  [
    49,
    true
  ],
  [
    50,
    true
  ],
  [
    51,
    false
  ],
  [
    52,
    false
  ],
  [
    53,
    false
  ],
  [
    54,
    false
  ],
  [
    55,
    true
  ],
  [
    56,
    false
  ],
  [
    57,
    false
  ],
  [
    58,
    false
  ],
  [
    59,
    false
  ],
  [
    60,
    false
  ],
  [
    61,
    true
  ],
  [
    62,
    false
  ],
  [
    63,
    false
  ],
  [
    64,
    false
  ],
  [
    65,
    false
  ],
  [
    66,
    false
  ],
  [
    67,
    false
  ],
  [
    68,
    false
  ],
  [
    69,
    false
  ],
  [
    70,
    false
  ],
  [
    71,
    true
  ],
  [
    72,
    true
  ],
  [
    73,
    true
  ],
  [
    74,
    true
  ],
  [
    75,
    false
  ],
  [
    76,
    false
  ],
  [
    77,
    true
  ],
  [
    78,
    true
  ],
  [
    79,
    true
  ],
  [
    80,
    false
  ],
  [
    81,
    true
  ],
  [
    82,
    true
  ],
  [
    83,
    true
  ],
  [
    84,
    true
  ],
  [
    85,
    true
  ],
  [
    86,
    true
  ],
  [
    87,
    true
  ],
  [
    88,
    true
  ],
  [
    89,
    true
  ],
  [
    90,
    true
  ],
  [
    91,
    true
  ],
  [
    92,
    true
  ],
  [
    93,
    true
  ],
  [
    94,
    true
  ],
  [
    95,
    true
  ],
  [
    96,
    true
  ],
  [
    97,
    true
  ],
  [
    98,
    true
  ],
  [
    99,
    true
  ],
  [
    100,
    true
  ],
  [
    101,
    true
  ],
  [
    102,
    true
  ],
  [
    103,
    true
  ],
  [
    104,
    true
  ],
  [
    105,
    true
  ],
  [
    106,
    true
  ],
  [
    107,
    false
  ],
  [
    108,
    false
  ],
  [
    109,
    false
  ],
  [
    110,
    true
  ],
  [
    111,
    false
  ],
  [
    112,
    false
  ],
  [
    113,
    true
  ],
  [
    114,
    true
  ],
  [
    115,
    false
  ],
  [
    116,
    false
  ],
  [
    117,
    false
  ],
  [
    118,
    false
  ],
  [
    119,
    false
  ],
  [
    120,
    false
  ],
  [
    121,
    false
  ],
  [
    122,
    false
  ],
  [
    123,
    false
  ],
  [
    124,
    false
  ],
  [
    125,
    true
  ],
  [
    126,
    true
  ],
  [
    127,
    false
  ],
  [
    128,
    true
  ],
  [
    129,
    true
  ],
  [
    130,
    false
  ],
  [
    131,
    false
  ],
  [
    132,
    true
  ],
  [
    133,
    true
  ],
  [
    134,
    true
  ],
  [
    135,
    true
  ],
  [
    136,
    true
  ],
  [
    137,
    true
  ],
  [
    138,
    true
  ],
  [
    139,
    true
  ],
  [
    140,
    false
  ],
  [
    141,
    true
  ],
  [
    142,
    true
  ],
  [
    143,
    true
  ],
  [
    144,
    true
  ],
  [
    145,
    false
  ],
  [
    146,
    false
  ],
  [
    147,
    false
  ],
  [
    148,
    false
  ],
  [
    149,
    true
  ],
  [
    150,
    false
  ],
  [
    151,
    false
  ],
  [
    152,
    false
  ],
  [
    153,
    false
  ],
  [
    154,
    false
  ],
  [
    155,
    false
  ],
  [
    156,
    false
  ],
  [
    157,
    false
  ],
  [
    158,
    false
  ],
  [
    159,
    false
  ],
  [
    160,
    false
  ],
  [
    161,
    false
  ],
  [
    162,
    false
  ],
  [
    163,
    false
  ],
  [
    164,
    false
  ],
  [
    165,
    true
  ],
  [
    166,
    false
  ],
  [
    167,
    false
  ],
  [
    168,
    false
  ],
  [
    169,
    false
  ],
  [
    170,
    false
  ],
  [
    171,
    true
  ],
  [
    172,
    true
  ],
  [
    173,
    true
  ],
  [
    174,
    true
  ],
  [
    175,
    false
  ],
  [
    176,
    false
  ],
  [
    177,
    false
  ],
  [
    178,
    true
  ],
  [
    179,
    false
  ],
  [
    180,
    false
  ],
  [
    181,
    false
  ],
  [
    182,
    false
  ],
  [
    183,
    false
  ],
  [
    184,
    true
  ],
  [
    185,
    true
  ],
  [
    186,
    true
  ],
  [
    187,
    true
  ],
  [
    188,
    false
  ],
  [
    189,
    false
  ],
  [
    190,
    false
  ],
  [
    191,
    false
  ],
  [
    192,
    false
  ],
  [
    193,
    false
  ],
  [
    194,
    false
  ],
  [
    195,
    false
  ],
  [
    196,
    false
  ],
  [
    197,
    false
  ],
  [
    198,
    false
  ],
  [
    199,
    false
  ],
  [
    200,
    false
  ],
  [
    201,
    true
  ],
  [
    202,
    false
  ],
  [
    203,
    false
  ],
  [
    204,
    false
  ],
  [
    205,
    false
  ],
  [
    206,
    false
  ],
  [
    207,
    true
  ],
  [
    208,
    false
  ],
  [
    209,
    true
  ],
  [
    210,
    true
  ],
  [
    211,
    false
  ],
  [
    212,
    true
  ],
  [
    213,
    false
  ],
  [
    214,
    false
  ],
  [
    215,
    true
  ],
  [
    216,
    true
  ],
  [
    217,
    true
  ],
  [
    218,
    true
  ],
  [
    219,
    true
  ],
  [
    220,
    true
  ],
  [
    221,
    false
  ],
  [
    222,
    false
  ],
  [
    223,
    false
  ],
  [
    224,
    false
  ],
  [
    225,
    false
  ],
  [
    226,
    false
  ],
  [
    227,
    true
  ],
  [
    228,
    true
  ],
  [
    229,
    false
  ],
  [
    230,
    false
  ],
  [
    231,
    true
  ],
  [
    232,
    false
  ],
  [
    233,
    true
  ],
  [
    234,
    false
  ],
  [
    235,
    true
  ],
  [
    236,
    true
  ],
  [
    237,
    true
  ],
  [
    238,
    true
  ],
  [
    239,
    true
  ],
  [
    240,
    true
  ],
  [
    241,
    true
  ],
  [
    242,
    true
  ],
  [
    243,
    true
  ],
  [
    244,
    true
  ],
  [
    245,
    true
  ],
  [
    246,
    true
  ],
  [
    247,
    true
  ],
  [
    248,
    false
  ],
  [
    249,
    false
  ],
  [
    250,
    false
  ],
  [
    251,
    false
  ],
  [
    252,
    false
  ],
  [
    253,
    false
  ],
  [
    254,
    true
  ],
  [
    255,
    false
  ],
  [
    256,
    false
  ],
  [
    257,
    false
  ],
  [
    258,
    false
  ],
  [
    259,
    false
  ],
  [
    260,
    false
  ],
  [
    261,
    false
  ],
  [
    262,
    false
  ],
  [
    263,
    false
  ],
  [
    264,
    false
  ],
  [
    265,
    false
  ],
  [
    266,
    false
  ],
  [
    267,
    false
  ],
  [
    268,
    false
  ],
  [
    269,
    true
  ],
  [
    270,
    true
  ],
  [
    271,
    true
  ],
  [
    272,
    false
  ],
  [
    273,
    false
  ],
  [
    274,
    false
  ],
  [
    275,
    true
  ],
  [
    276,
    true
  ],
  [
    277,
    true
  ],
  [
    278,
    true
  ],
  [
    279,
    true
  ],
  [
    280,
    true
  ],
  [
    281,
    true
  ],
  [
    282,
    true
  ],
  [
    283,
    true
  ],
  [
    284,
    false
  ],
  [
    285,
    true
  ],
  [
    286,
    true
  ],
  [
    287,
    true
  ],
  [
    288,
    true
  ],
  [
    289,
    true
  ],
  [
    290,
    true
  ],
  [
    291,
    true
  ],
  [
    292,
    true
  ],
  [
    293,
    true
  ],
  [
    294,
    true
  ],
  [
    295,
    true
  ],
  [
    296,
    true
  ],
  [
    297,
    true
  ],
  [
    298,
    true
  ],
  [
    299,
    true
  ],
  [
    300,
    true
  ],
  [
    301,
    true
  ],
  [
    302,
    true
  ],
  [
    303,
    true
  ],
  [
    304,
    true
  ],
  [
    305,
    true
  ],
  [
    306,
    true
  ],
  [
    307,
    true
  ],
  [
    308,
    true
  ],
  [
    309,
    true
  ],
  [
    310,
    true
  ],
  [
    311,
    false
  ],
  [
    312,
    false
  ],
  [
    313,
    false
  ],
  [
    314,
    true
  ],
  [
    315,
    false
  ],
  [
    316,
    true
  ],
  [
    317,
    true
  ],
  [
    318,
    true
  ],
  [
    319,
    true
  ],
  [
    320,
    true
  ],
  [
    321,
    false
  ],
  [
    322,
    false
  ],
  [
    323,
    true
  ],
  [
    324,
    true
  ],
  [
    325,
    false
  ],
  [
    326,
    false
  ],
  [
    327,
    false
  ],
  [
    328,
    false
  ],
  [
    329,
    false
  ],
  [
    330,
    false
  ],
  [
    331,
    false
  ],
  [
    332,
    false
  ],
  [
    333,
    false
  ],
  [
    334,
    true
  ],
  [
    335,
    true
  ],
  [
    336,
    false
  ],
  [
    337,
    true
  ],
  [
    338,
    true
  ],
  [
    339,
    true
  ],
  [
    340,
    false
  ],
  [
    341,
    false
  ],
  [
    342,
    false
  ],
  [
    343,
    false
  ],
  [
    344,
    false
  ],
  [
    345,
    false
  ],
  [
    346,
    false
  ],
  [
    347,
    false
  ],
  [
    348,
    false
  ],
  [
    349,
    true
  ],
  [
    350,
    false
  ],
  [
    351,
    false
  ],
  [
    352,
    false
  ],
  [
    353,
    false
  ],
  [
    354,
    true
  ],
  [
    355,
    true
  ],
  [
    356,
    true
  ],
  [
    357,
    false
  ],
  [
    358,
    true
  ],
  [
    359,
    true
  ],
  [
    360,
    true
  ],
  [
    361,
    true
  ],
  [
    362,
    true
  ],
  [
    363,
    true
  ],
  [
    364,
    true
  ],
  [
    365,
    false
  ],
  [
    366,
    false
  ],
  [
    367,
    false
  ],
  [
    368,
    false
  ],
  [
    369,
    false
  ],
  [
    370,
    false
  ],
  [
    371,
    false
  ],
  [
    372,
    true
  ],
  [
    373,
    true
  ],
  [
    374,
    true
  ],
  [
    375,
    true
  ],
  [
    376,
    true
  ],
  [
    377,
    true
  ],
  [
    378,
    true
  ],
  [
    379,
    false
  ],
  [
    380,
    true
  ],
  [
    381,
    false
  ],
  [
    382,
    false
  ],
  [
    383,
    false
  ],
  [
    384,
    false
  ],
  [
    385,
    false
  ],
  [
    386,
    true
  ],
  [
    387,
    true
  ],
  [
    388,
    true
  ],
  [
    389,
    true
  ],
  [
    390,
    true
  ],
  [
    391,
    true
  ],
  [
    392,
    true
  ],
  [
    393,
    true
  ],
  [
    394,
    true
  ],
  [
    395,
    true
  ],
  [
    396,
    false
  ],
  [
    397,
    false
  ],
  [
    398,
    false
  ],
  [
    399,
    false
  ],
  [
    400,
    false
  ],
  [
    401,
    false
  ],
  [
    402,
    false
  ],
  [
    403,
    false
  ],
  [
    404,
    false
  ],
  [
    405,
    true
  ],
  [
    406,
    true
  ],
  [
    407,
    false
  ],
  [
    408,
    false
  ],
  [
    409,
    false
  ],
  [
    410,
    true
  ],
  [
    411,
    true
  ],
  [
    412,
    true
  ],
  [
    413,
    true
  ],
  [
    414,
    true
  ],
  [
    415,
    false
  ],
  [
    416,
    false
  ],
  [
    417,
    false
  ],
  [
    418,
    false
  ],
  [
    419,
    true
  ],
  [
    420,
    true
  ],
  [
    421,
    false
  ],
  [
    422,
    false
  ],
  [
    423,
    true
  ],
  [
    424,
    true
  ],
  [
    425,
    true
  ],
  [
    426,
    false
  ],
  [
    427,
    true
  ],
  [
    428,
    true
  ],
  [
    429,
    true
  ],
  [
    430,
    false
  ],
  [
    431,
    false
  ],
  [
    432,
    false
  ],
  [
    433,
    false
  ],
  [
    434,
    false
  ],
  [
    435,
    false
  ],
  [
    436,
    false
  ],
  [
    437,
    false
  ],
  [
    438,
    false
  ],
  [
    439,
    false
  ],
  [
    440,
    true
  ],
  [
    441,
    true
  ],
  [
    442,
    true
  ],
  [
    443,
    true
  ],
  [
    444,
    true
  ],
  [
    445,
    true
  ],
  [
    446,
    false
  ],
  [
    447,
    false
  ],
  [
    448,
    false
  ],
  [
    449,
    false
  ],
  [
    450,
    false
  ],
  [
    451,
    false
  ],
  [
    452,
    true
  ],
  [
    453,
    true
  ],
  [
    454,
    true
  ],
  [
    455,
    true
  ],
  [
    456,
    true
  ],
  [
    457,
    true
  ],
  [
    458,
    false
  ],
  [
    459,
    false
  ],
  [
    460,
    false
  ],
  [
    461,
    true
  ],
  [
    462,
    true
  ],
  [
    463,
    true
  ],
  [
    464,
    true
  ],
  [
    465,
    true
  ],
  [
    466,
    true
  ],
  [
    467,
    true
  ],
  [
    468,
    true
  ],
  [
    469,
    true
  ],
  [
    470,
    true
  ],
  [
    471,
    true
  ],
  [
    472,
    false
  ],
  [
    473,
    false
  ],
  [
    474,
    false
  ],
  [
    475,
    true
  ],
  [
    476,
    true
  ],
  [
    477,
    false
  ],
  [
    478,
    false
  ],
  [
    479,
    false
  ],
  [
    480,
    true
  ],
  [
    481,
    false
  ],
  [
    482,
    false
  ],
  [
    483,
    false
  ],
  [
    484,
    true
  ],
  [
    485,
    true
  ],
  [
    486,
    true
  ],
  [
    487,
    true
  ],
  [
    488,
    true
  ],
  [
    489,
    true
  ],
  [
    490,
    true
  ],
  [
    491,
    true
  ],
  [
    492,
    false
  ],
  [
    493,
    true
  ],
  [
    494,
    true
  ],
  [
    495,
    false
  ],
  [
    496,
    false
  ],
  [
    497,
    true
  ],
  [
    498,
    false
  ],
  [
    499,
    true
  ],
  [
    500,
    false
  ],
  [
    501,
    false
  ],
  [
    502,
    false
  ],
  [
    503,
    false
  ],
  [
    504,
    false
  ],
  [
    505,
    true
  ],
  [
    506,
    true
  ],
  [
    507,
    false
  ],
  [
    508,
    false
  ],
  [
    509,
    true
  ],
  [
    510,
    true
  ],
  [
    511,
    true
  ],
  [
    512,
    false
  ],
  [
    513,
    false
  ],
  [
    514,
    false
  ],
  [
    515,
    false
  ],
  [
    516,
    false
  ],
  [
    517,
    false
  ],
  [
    518,
    true
  ],
  [
    519,
    true
  ],
  [
    520,
    true
  ],
  [
    521,
    true
  ],
  [
    522,
    true
  ],
  [
    523,
    true
  ],
  [
    524,
    true
  ],
  [
    525,
    true
  ],
  [
    526,
    true
  ],
  [
    527,
    true
  ],
  [
    528,
    false
  ],
  [
    529,
    true
  ],
  [
    530,
    true
  ],
  [
    531,
    true
  ],
  [
    532,
    true
  ],
  [
    533,
    true
  ],
  [
    534,
    false
  ],
  [
    535,
    false
  ],
  [
    536,
    false
  ],
  [
    537,
    false
  ],
  [
    538,
    true
  ],
  [
    539,
    false
  ],
  [
    540,
    false
  ],
  [
    541,
    false
  ],
  [
    542,
    true
  ],
  [
    543,
    true
  ],
  [
    544,
    true
  ],
  [
    545,
    true
  ],
  [
    546,
    false
  ],
  [
    547,
    true
  ],
  [
    548,
    true
  ],
  [
    549,
    true
  ],
  [
    550,
    true
  ],
  [
    551,
    true
  ],
  [
    552,
    true
  ],
  [
    553,
    true
  ],
  [
    554,
    true
  ],
  [
    555,
    true
  ],
  [
    556,
    true
  ],
  [
    557,
    false
  ],
  [
    558,
    true
  ],
  [
    559,
    true
  ],
  [
    560,
    true
  ],
  [
    561,
    false
  ],
  [
    562,
    false
  ],
  [
    563,
    false
  ],
  [
    564,
    true
  ],
  [
    565,
    true
  ],
  [
    566,
    false
  ],
  [
    567,
    true
  ],
  [
    568,
    true
  ],
  [
    569,
    true
  ],
  [
    570,
    true
  ],
  [
    571,
    true
  ],
  [
    572,
    true
  ],
  [
    573,
    true
  ],
  [
    574,
    false
  ],
  [
    575,
    false
  ],
  [
    576,
    false
  ],
  [
    577,
    false
  ],
  [
    578,
    false
  ],
  [
    579,
    true
  ],
  [
    580,
    true
  ],
  [
    581,
    true
  ],
  [
    582,
    true
  ],
  [
    583,
    true
  ],
  [
    584,
    true
  ],
  [
    585,
    true
  ],
  [
    586,
    true
  ],
  [
    587,
    true
  ],
  [
    588,
    true
  ],
  [
    589,
    true
  ],
  [
    590,
    true
  ],
  [
    591,
    true
  ],
  [
    592,
    true
  ],
  [
    593,
    true
  ],
  [
    594,
    true
  ],
  [
    595,
    true
  ],
  [
    596,
    true
  ],
  [
    597,
    true
  ],
  [
    598,
    true
  ],
  [
    599,
    true
  ],
  [
    600,
    true
  ],
  [
    601,
    true
  ],
  [
    602,
    true
  ],
  [
    603,
    true
  ],
  [
    604,
    true
  ],
  [
    605,
    true
  ],
  [
    606,
    true
  ],
  [
    607,
    true
  ],
  [
    608,
    true
  ],
  [
    609,
    true
  ],
  [
    610,
    true
  ],
  [
    611,
    true
  ],
  [
    612,
    true
  ],
  [
    613,
    true
  ],
  [
    614,
    true
  ],
  [
    615,
    true
  ],
  [
    616,
    true
  ],
  [
    617,
    true
  ],
  [
    618,
    false
  ],
  [
    619,
    true
  ],
  [
    620,
    true
  ],
  [
    621,
    true
  ],
  [
    622,
    true
  ],
  [
    623,
    true
  ],
  [
    624,
    true
  ],
  [
    625,
    false
  ],
  [
    626,
    false
  ],
  [
    627,
    false
  ],
  [
    628,
    false
  ],
  [
    629,
    true
  ],
  [
    630,
    true
  ],
  [
    631,
    true
  ],
  [
    632,
    true
  ],
  [
    633,
    false
  ],
  [
    634,
    true
  ],
  [
    635,
    false
  ],
  [
    636,
    false
  ],
  [
    637,
    true
  ],
  [
    638,
    false
  ],
  [
    639,
    true
  ],
  [
    640,
    true
  ],
  [
    641,
    false
  ],
  [
    642,
    true
  ],
  [
    643,
    true
  ],
  [
    644,
    true
  ],
  [
    645,
    true
  ],
  [
    646,
    true
  ],
  [
    647,
    true
  ],
  [
    648,
    true
  ],
  [
    649,
    true
  ],
  [
    650,
    true
  ],
  [
    651,
    true
  ],
  [
    652,
    true
  ],
  [
    653,
    true
  ],
  [
    654,
    true
  ],
  [
    655,
    false
  ],
  [
    656,
    true
  ],
  [
    657,
    true
  ],
  [
    658,
    true
  ],
  [
    659,
    false
  ],
  [
    660,
    true
  ],
  [
    661,
    false
  ],
  [
    662,
    false
  ],
  [
    663,
    true
  ],
  [
    664,
    true
  ],
  [
    665,
    true
  ],
  [
    666,
    false
  ],
  [
    667,
    false
  ],
  [
    668,
    false
  ],
  [
    669,
    false
  ],
  [
    670,
    false
  ],
  [
    671,
    false
  ],
  [
    672,
    false
  ],
  [
    673,
    false
  ],
  [
    674,
    false
  ],
  [
    675,
    false
  ],
  [
    676,
    false
  ],
  [
    677,
    false
  ],
  [
    678,
    false
  ],
  [
    679,
    false
  ],
  [
    680,
    false
  ],
  [
    681,
    false
  ],
  [
    682,
    false
  ],
  [
    683,
    false
  ],
  [
    684,
    false
  ],
  [
    685,
    false
  ],
  [
    686,
    false
  ],
  [
    687,
    false
  ],
  [
    688,
    false
  ],
  [
    689,
    false
  ],
  [
    690,
    false
  ],
  [
    691,
    false
  ],
  [
    692,
    false
  ],
  [
    693,
    true
  ],
  [
    694,
    true
  ],
  [
    695,
    true
  ],
  [
    696,
    true
  ],
  [
    697,
    false
  ],
  [
    698,
    true
  ],
  [
    699,
    true
  ],
  [
    700,
    true
  ],
  [
    701,
    true
  ],
  [
    702,
    true
  ],
  [
    703,
    true
  ],
  [
    704,
    true
  ],
  [
    705,
    true
  ],
  [
    706,
    true
  ],
  [
    707,
    true
  ],
  [
    708,
    false
  ],
  [
    709,
    true
  ],
  [
    710,
    true
  ],
  [
    711,
    true
  ],
  [
    712,
    true
  ],
  [
    713,
    true
  ],
  [
    714,
    true
  ],
  [
    715,
    true
  ],
  [
    716,
    true
  ],
  [
    717,
    false
  ],
  [
    718,
    false
  ],
  [
    719,
    false
  ],
  [
    720,
    true
  ],
  [
    721,
    true
  ],
  [
    722,
    false
  ],
  [
    723,
    true
  ],
  [
    724,
    true
  ],
  [
    725,
    true
  ],
  [
    726,
    true
  ],
  [
    727,
    false
  ],
  [
    728,
    false
  ],
  [
    729,
    false
  ],
  [
    730,
    false
  ],
  [
    731,
    false
  ],
  [
    732,
    false
  ],
  [
    733,
    true
  ],
  [
    734,
    false
  ],
  [
    735,
    false
  ],
  [
    736,
    false
  ],
  [
    737,
    false
  ],
  [
    738,
    false
  ],
  [
    739,
    false
  ],
  [
    740,
    false
  ],
  [
    741,
    false
  ],
  [
    742,
    false
  ],
  [
    743,
    false
  ],
  [
    744,
    false
  ],
  [
    745,
    false
  ],
  [
    746,
    false
  ],
  [
    747,
    false
  ],
  [
    748,
    false
  ],
  [
    749,
    false
  ],
  [
    750,
    false
  ],
  [
    751,
    true
  ],
  [
    752,
    true
  ]
]);
function isImportant(tileType) {
  return getOr(map4.get(tileType), false);
}

// src/ErrorAwareBufferReader.js
function readByteUnsafe2(prim) {
  return prim.readByte();
}
function readInt16Unsafe2(prim) {
  return prim.readInt16();
}
function readInt32Unsafe2(prim) {
  return prim.readInt32();
}
function readStringUnsafe2(prim) {
  return prim.readString();
}
function getBytesLeftUnsafe2(prim) {
  return prim.bytesLeft;
}
function withContext2(fn, reader, context) {
  try {
    return {
      TAG: "Ok",
      _0: fn(reader)
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function readByte2(reader, context) {
  return withContext2(readByteUnsafe2, reader, context);
}
function readInt162(reader, context) {
  return withContext2(readInt16Unsafe2, reader, context);
}
function readInt322(reader, context) {
  return withContext2(readInt32Unsafe2, reader, context);
}
function readString2(reader, context) {
  return withContext2(readStringUnsafe2, reader, context);
}
function readBuffer2(reader, bytes, context) {
  return withContext2((reader2) => reader2.readBuffer(bytes), reader, context);
}
function getBytesLeft2(reader) {
  return withContext2(getBytesLeftUnsafe2, reader, "getBytesLeft");
}

// src/ErrorAwareBufferWriter.js
function packInt322(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packInt32(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packByte2(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packByte(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packInt162(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packInt16(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function packString2(self, value, context) {
  if (self.TAG !== "Writing") {
    return self;
  }
  try {
    let writer = self._0.packString(value);
    return {
      TAG: "Writing",
      _0: writer
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          context,
          error: obj._1
        }
      };
    }
    throw obj;
  }
}
function slicedData(self) {
  if (self.TAG === "Writing") {
    return {
      TAG: "Ok",
      _0: self._0.slicedData
    };
  } else {
    return {
      TAG: "Error",
      _0: self._0
    };
  }
}
function make3(buffer) {
  return {
    TAG: "Writing",
    _0: new bufferwriter_default(buffer)
  };
}

// src/TileFrameImportantV1449.js
var map5 = /* @__PURE__ */ new Map([
  [
    0,
    false
  ],
  [
    1,
    false
  ],
  [
    2,
    false
  ],
  [
    3,
    true
  ],
  [
    4,
    true
  ],
  [
    5,
    true
  ],
  [
    6,
    false
  ],
  [
    7,
    false
  ],
  [
    8,
    false
  ],
  [
    9,
    false
  ],
  [
    10,
    true
  ],
  [
    11,
    true
  ],
  [
    12,
    true
  ],
  [
    13,
    true
  ],
  [
    14,
    true
  ],
  [
    15,
    true
  ],
  [
    16,
    true
  ],
  [
    17,
    true
  ],
  [
    18,
    true
  ],
  [
    19,
    true
  ],
  [
    20,
    true
  ],
  [
    21,
    true
  ],
  [
    22,
    false
  ],
  [
    23,
    false
  ],
  [
    24,
    true
  ],
  [
    25,
    false
  ],
  [
    26,
    true
  ],
  [
    27,
    true
  ],
  [
    28,
    true
  ],
  [
    29,
    true
  ],
  [
    30,
    false
  ],
  [
    31,
    true
  ],
  [
    32,
    false
  ],
  [
    33,
    true
  ],
  [
    34,
    true
  ],
  [
    35,
    true
  ],
  [
    36,
    true
  ],
  [
    37,
    false
  ],
  [
    38,
    false
  ],
  [
    39,
    false
  ],
  [
    40,
    false
  ],
  [
    41,
    false
  ],
  [
    42,
    true
  ],
  [
    43,
    false
  ],
  [
    44,
    false
  ],
  [
    45,
    false
  ],
  [
    46,
    false
  ],
  [
    47,
    false
  ],
  [
    48,
    false
  ],
  [
    49,
    true
  ],
  [
    50,
    true
  ],
  [
    51,
    false
  ],
  [
    52,
    false
  ],
  [
    53,
    false
  ],
  [
    54,
    false
  ],
  [
    55,
    true
  ],
  [
    56,
    false
  ],
  [
    57,
    false
  ],
  [
    58,
    false
  ],
  [
    59,
    false
  ],
  [
    60,
    false
  ],
  [
    61,
    true
  ],
  [
    62,
    false
  ],
  [
    63,
    false
  ],
  [
    64,
    false
  ],
  [
    65,
    false
  ],
  [
    66,
    false
  ],
  [
    67,
    false
  ],
  [
    68,
    false
  ],
  [
    69,
    false
  ],
  [
    70,
    false
  ],
  [
    71,
    true
  ],
  [
    72,
    true
  ],
  [
    73,
    true
  ],
  [
    74,
    true
  ],
  [
    75,
    false
  ],
  [
    76,
    false
  ],
  [
    77,
    true
  ],
  [
    78,
    true
  ],
  [
    79,
    true
  ],
  [
    80,
    false
  ],
  [
    81,
    true
  ],
  [
    82,
    true
  ],
  [
    83,
    true
  ],
  [
    84,
    true
  ],
  [
    85,
    true
  ],
  [
    86,
    true
  ],
  [
    87,
    true
  ],
  [
    88,
    true
  ],
  [
    89,
    true
  ],
  [
    90,
    true
  ],
  [
    91,
    true
  ],
  [
    92,
    true
  ],
  [
    93,
    true
  ],
  [
    94,
    true
  ],
  [
    95,
    true
  ],
  [
    96,
    true
  ],
  [
    97,
    true
  ],
  [
    98,
    true
  ],
  [
    99,
    true
  ],
  [
    100,
    true
  ],
  [
    101,
    true
  ],
  [
    102,
    true
  ],
  [
    103,
    true
  ],
  [
    104,
    true
  ],
  [
    105,
    true
  ],
  [
    106,
    true
  ],
  [
    107,
    false
  ],
  [
    108,
    false
  ],
  [
    109,
    false
  ],
  [
    110,
    true
  ],
  [
    111,
    false
  ],
  [
    112,
    false
  ],
  [
    113,
    true
  ],
  [
    114,
    true
  ],
  [
    115,
    false
  ],
  [
    116,
    false
  ],
  [
    117,
    false
  ],
  [
    118,
    false
  ],
  [
    119,
    false
  ],
  [
    120,
    false
  ],
  [
    121,
    false
  ],
  [
    122,
    false
  ],
  [
    123,
    false
  ],
  [
    124,
    false
  ],
  [
    125,
    true
  ],
  [
    126,
    true
  ],
  [
    127,
    false
  ],
  [
    128,
    true
  ],
  [
    129,
    true
  ],
  [
    130,
    false
  ],
  [
    131,
    false
  ],
  [
    132,
    true
  ],
  [
    133,
    true
  ],
  [
    134,
    true
  ],
  [
    135,
    true
  ],
  [
    136,
    true
  ],
  [
    137,
    true
  ],
  [
    138,
    true
  ],
  [
    139,
    true
  ],
  [
    140,
    false
  ],
  [
    141,
    true
  ],
  [
    142,
    true
  ],
  [
    143,
    true
  ],
  [
    144,
    true
  ],
  [
    145,
    false
  ],
  [
    146,
    false
  ],
  [
    147,
    false
  ],
  [
    148,
    false
  ],
  [
    149,
    true
  ],
  [
    150,
    false
  ],
  [
    151,
    false
  ],
  [
    152,
    false
  ],
  [
    153,
    false
  ],
  [
    154,
    false
  ],
  [
    155,
    false
  ],
  [
    156,
    false
  ],
  [
    157,
    false
  ],
  [
    158,
    false
  ],
  [
    159,
    false
  ],
  [
    160,
    false
  ],
  [
    161,
    false
  ],
  [
    162,
    false
  ],
  [
    163,
    false
  ],
  [
    164,
    false
  ],
  [
    165,
    true
  ],
  [
    166,
    false
  ],
  [
    167,
    false
  ],
  [
    168,
    false
  ],
  [
    169,
    false
  ],
  [
    170,
    false
  ],
  [
    171,
    true
  ],
  [
    172,
    true
  ],
  [
    173,
    true
  ],
  [
    174,
    true
  ],
  [
    175,
    false
  ],
  [
    176,
    false
  ],
  [
    177,
    false
  ],
  [
    178,
    true
  ],
  [
    179,
    false
  ],
  [
    180,
    false
  ],
  [
    181,
    false
  ],
  [
    182,
    false
  ],
  [
    183,
    false
  ],
  [
    184,
    true
  ],
  [
    185,
    true
  ],
  [
    186,
    true
  ],
  [
    187,
    true
  ],
  [
    188,
    false
  ],
  [
    189,
    false
  ],
  [
    190,
    false
  ],
  [
    191,
    false
  ],
  [
    192,
    false
  ],
  [
    193,
    false
  ],
  [
    194,
    false
  ],
  [
    195,
    false
  ],
  [
    196,
    false
  ],
  [
    197,
    false
  ],
  [
    198,
    false
  ],
  [
    199,
    false
  ],
  [
    200,
    false
  ],
  [
    201,
    true
  ],
  [
    202,
    false
  ],
  [
    203,
    false
  ],
  [
    204,
    false
  ],
  [
    205,
    false
  ],
  [
    206,
    false
  ],
  [
    207,
    true
  ],
  [
    208,
    false
  ],
  [
    209,
    true
  ],
  [
    210,
    true
  ],
  [
    211,
    false
  ],
  [
    212,
    true
  ],
  [
    213,
    false
  ],
  [
    214,
    false
  ],
  [
    215,
    true
  ],
  [
    216,
    true
  ],
  [
    217,
    true
  ],
  [
    218,
    true
  ],
  [
    219,
    true
  ],
  [
    220,
    true
  ],
  [
    221,
    false
  ],
  [
    222,
    false
  ],
  [
    223,
    false
  ],
  [
    224,
    false
  ],
  [
    225,
    false
  ],
  [
    226,
    false
  ],
  [
    227,
    true
  ],
  [
    228,
    true
  ],
  [
    229,
    false
  ],
  [
    230,
    false
  ],
  [
    231,
    true
  ],
  [
    232,
    false
  ],
  [
    233,
    true
  ],
  [
    234,
    false
  ],
  [
    235,
    true
  ],
  [
    236,
    true
  ],
  [
    237,
    true
  ],
  [
    238,
    true
  ],
  [
    239,
    true
  ],
  [
    240,
    true
  ],
  [
    241,
    true
  ],
  [
    242,
    true
  ],
  [
    243,
    true
  ],
  [
    244,
    true
  ],
  [
    245,
    true
  ],
  [
    246,
    true
  ],
  [
    247,
    true
  ],
  [
    248,
    false
  ],
  [
    249,
    false
  ],
  [
    250,
    false
  ],
  [
    251,
    false
  ],
  [
    252,
    false
  ],
  [
    253,
    false
  ],
  [
    254,
    true
  ],
  [
    255,
    false
  ],
  [
    256,
    false
  ],
  [
    257,
    false
  ],
  [
    258,
    false
  ],
  [
    259,
    false
  ],
  [
    260,
    false
  ],
  [
    261,
    false
  ],
  [
    262,
    false
  ],
  [
    263,
    false
  ],
  [
    264,
    false
  ],
  [
    265,
    false
  ],
  [
    266,
    false
  ],
  [
    267,
    false
  ],
  [
    268,
    false
  ],
  [
    269,
    true
  ],
  [
    270,
    true
  ],
  [
    271,
    true
  ],
  [
    272,
    false
  ],
  [
    273,
    false
  ],
  [
    274,
    false
  ],
  [
    275,
    true
  ],
  [
    276,
    true
  ],
  [
    277,
    true
  ],
  [
    278,
    true
  ],
  [
    279,
    true
  ],
  [
    280,
    true
  ],
  [
    281,
    true
  ],
  [
    282,
    true
  ],
  [
    283,
    true
  ],
  [
    284,
    false
  ],
  [
    285,
    true
  ],
  [
    286,
    true
  ],
  [
    287,
    true
  ],
  [
    288,
    true
  ],
  [
    289,
    true
  ],
  [
    290,
    true
  ],
  [
    291,
    true
  ],
  [
    292,
    true
  ],
  [
    293,
    true
  ],
  [
    294,
    true
  ],
  [
    295,
    true
  ],
  [
    296,
    true
  ],
  [
    297,
    true
  ],
  [
    298,
    true
  ],
  [
    299,
    true
  ],
  [
    300,
    true
  ],
  [
    301,
    true
  ],
  [
    302,
    true
  ],
  [
    303,
    true
  ],
  [
    304,
    true
  ],
  [
    305,
    true
  ],
  [
    306,
    true
  ],
  [
    307,
    true
  ],
  [
    308,
    true
  ],
  [
    309,
    true
  ],
  [
    310,
    true
  ],
  [
    311,
    false
  ],
  [
    312,
    false
  ],
  [
    313,
    false
  ],
  [
    314,
    true
  ],
  [
    315,
    false
  ],
  [
    316,
    true
  ],
  [
    317,
    true
  ],
  [
    318,
    true
  ],
  [
    319,
    true
  ],
  [
    320,
    true
  ],
  [
    321,
    false
  ],
  [
    322,
    false
  ],
  [
    323,
    true
  ],
  [
    324,
    true
  ],
  [
    325,
    false
  ],
  [
    326,
    false
  ],
  [
    327,
    false
  ],
  [
    328,
    false
  ],
  [
    329,
    false
  ],
  [
    330,
    false
  ],
  [
    331,
    false
  ],
  [
    332,
    false
  ],
  [
    333,
    false
  ],
  [
    334,
    true
  ],
  [
    335,
    true
  ],
  [
    336,
    false
  ],
  [
    337,
    true
  ],
  [
    338,
    true
  ],
  [
    339,
    true
  ],
  [
    340,
    false
  ],
  [
    341,
    false
  ],
  [
    342,
    false
  ],
  [
    343,
    false
  ],
  [
    344,
    false
  ],
  [
    345,
    false
  ],
  [
    346,
    false
  ],
  [
    347,
    false
  ],
  [
    348,
    false
  ],
  [
    349,
    true
  ],
  [
    350,
    false
  ],
  [
    351,
    false
  ],
  [
    352,
    false
  ],
  [
    353,
    false
  ],
  [
    354,
    true
  ],
  [
    355,
    true
  ],
  [
    356,
    true
  ],
  [
    357,
    false
  ],
  [
    358,
    true
  ],
  [
    359,
    true
  ],
  [
    360,
    true
  ],
  [
    361,
    true
  ],
  [
    362,
    true
  ],
  [
    363,
    true
  ],
  [
    364,
    true
  ],
  [
    365,
    false
  ],
  [
    366,
    false
  ],
  [
    367,
    false
  ],
  [
    368,
    false
  ],
  [
    369,
    false
  ],
  [
    370,
    false
  ],
  [
    371,
    false
  ],
  [
    372,
    true
  ],
  [
    373,
    true
  ],
  [
    374,
    true
  ],
  [
    375,
    true
  ],
  [
    376,
    true
  ],
  [
    377,
    true
  ],
  [
    378,
    true
  ],
  [
    379,
    false
  ],
  [
    380,
    true
  ],
  [
    381,
    false
  ],
  [
    382,
    false
  ],
  [
    383,
    false
  ],
  [
    384,
    false
  ],
  [
    385,
    false
  ],
  [
    386,
    true
  ],
  [
    387,
    true
  ],
  [
    388,
    true
  ],
  [
    389,
    true
  ],
  [
    390,
    true
  ],
  [
    391,
    true
  ],
  [
    392,
    true
  ],
  [
    393,
    true
  ],
  [
    394,
    true
  ],
  [
    395,
    true
  ],
  [
    396,
    false
  ],
  [
    397,
    false
  ],
  [
    398,
    false
  ],
  [
    399,
    false
  ],
  [
    400,
    false
  ],
  [
    401,
    false
  ],
  [
    402,
    false
  ],
  [
    403,
    false
  ],
  [
    404,
    false
  ],
  [
    405,
    true
  ],
  [
    406,
    true
  ],
  [
    407,
    false
  ],
  [
    408,
    false
  ],
  [
    409,
    false
  ],
  [
    410,
    true
  ],
  [
    411,
    true
  ],
  [
    412,
    true
  ],
  [
    413,
    true
  ],
  [
    414,
    true
  ],
  [
    415,
    false
  ],
  [
    416,
    false
  ],
  [
    417,
    false
  ],
  [
    418,
    false
  ],
  [
    419,
    true
  ],
  [
    420,
    true
  ],
  [
    421,
    false
  ],
  [
    422,
    false
  ],
  [
    423,
    true
  ],
  [
    424,
    true
  ],
  [
    425,
    true
  ],
  [
    426,
    false
  ],
  [
    427,
    true
  ],
  [
    428,
    true
  ],
  [
    429,
    true
  ],
  [
    430,
    false
  ],
  [
    431,
    false
  ],
  [
    432,
    false
  ],
  [
    433,
    false
  ],
  [
    434,
    false
  ],
  [
    435,
    true
  ],
  [
    436,
    true
  ],
  [
    437,
    true
  ],
  [
    438,
    true
  ],
  [
    439,
    true
  ],
  [
    440,
    true
  ],
  [
    441,
    true
  ],
  [
    442,
    true
  ],
  [
    443,
    true
  ],
  [
    444,
    true
  ],
  [
    445,
    true
  ],
  [
    446,
    false
  ],
  [
    447,
    false
  ],
  [
    448,
    false
  ],
  [
    449,
    false
  ],
  [
    450,
    false
  ],
  [
    451,
    false
  ],
  [
    452,
    true
  ],
  [
    453,
    true
  ],
  [
    454,
    true
  ],
  [
    455,
    true
  ],
  [
    456,
    true
  ],
  [
    457,
    true
  ],
  [
    458,
    false
  ],
  [
    459,
    false
  ],
  [
    460,
    false
  ],
  [
    461,
    true
  ],
  [
    462,
    true
  ],
  [
    463,
    true
  ],
  [
    464,
    true
  ],
  [
    465,
    true
  ],
  [
    466,
    true
  ],
  [
    467,
    true
  ],
  [
    468,
    true
  ],
  [
    469,
    true
  ],
  [
    470,
    true
  ],
  [
    471,
    true
  ],
  [
    472,
    false
  ],
  [
    473,
    false
  ],
  [
    474,
    false
  ],
  [
    475,
    true
  ],
  [
    476,
    true
  ],
  [
    477,
    false
  ],
  [
    478,
    false
  ],
  [
    479,
    false
  ],
  [
    480,
    true
  ],
  [
    481,
    false
  ],
  [
    482,
    false
  ],
  [
    483,
    false
  ],
  [
    484,
    true
  ],
  [
    485,
    true
  ],
  [
    486,
    true
  ],
  [
    487,
    true
  ],
  [
    488,
    true
  ],
  [
    489,
    true
  ],
  [
    490,
    true
  ],
  [
    491,
    true
  ],
  [
    492,
    false
  ],
  [
    493,
    true
  ],
  [
    494,
    true
  ],
  [
    495,
    false
  ],
  [
    496,
    false
  ],
  [
    497,
    true
  ],
  [
    498,
    false
  ],
  [
    499,
    true
  ],
  [
    500,
    false
  ],
  [
    501,
    false
  ],
  [
    502,
    false
  ],
  [
    503,
    false
  ],
  [
    504,
    false
  ],
  [
    505,
    true
  ],
  [
    506,
    true
  ],
  [
    507,
    false
  ],
  [
    508,
    false
  ],
  [
    509,
    true
  ],
  [
    510,
    true
  ],
  [
    511,
    true
  ],
  [
    512,
    false
  ],
  [
    513,
    false
  ],
  [
    514,
    false
  ],
  [
    515,
    false
  ],
  [
    516,
    false
  ],
  [
    517,
    false
  ],
  [
    518,
    true
  ],
  [
    519,
    true
  ],
  [
    520,
    true
  ],
  [
    521,
    true
  ],
  [
    522,
    true
  ],
  [
    523,
    true
  ],
  [
    524,
    true
  ],
  [
    525,
    true
  ],
  [
    526,
    true
  ],
  [
    527,
    true
  ],
  [
    528,
    false
  ],
  [
    529,
    true
  ],
  [
    530,
    true
  ],
  [
    531,
    true
  ],
  [
    532,
    true
  ],
  [
    533,
    true
  ],
  [
    534,
    false
  ],
  [
    535,
    false
  ],
  [
    536,
    false
  ],
  [
    537,
    false
  ],
  [
    538,
    true
  ],
  [
    539,
    false
  ],
  [
    540,
    false
  ],
  [
    541,
    false
  ],
  [
    542,
    true
  ],
  [
    543,
    true
  ],
  [
    544,
    true
  ],
  [
    545,
    true
  ],
  [
    546,
    false
  ],
  [
    547,
    true
  ],
  [
    548,
    true
  ],
  [
    549,
    true
  ],
  [
    550,
    true
  ],
  [
    551,
    true
  ],
  [
    552,
    true
  ],
  [
    553,
    true
  ],
  [
    554,
    true
  ],
  [
    555,
    true
  ],
  [
    556,
    true
  ],
  [
    557,
    false
  ],
  [
    558,
    true
  ],
  [
    559,
    true
  ],
  [
    560,
    true
  ],
  [
    561,
    false
  ],
  [
    562,
    false
  ],
  [
    563,
    false
  ],
  [
    564,
    true
  ],
  [
    565,
    true
  ],
  [
    566,
    false
  ],
  [
    567,
    true
  ],
  [
    568,
    true
  ],
  [
    569,
    true
  ],
  [
    570,
    true
  ],
  [
    571,
    true
  ],
  [
    572,
    true
  ],
  [
    573,
    true
  ],
  [
    574,
    false
  ],
  [
    575,
    false
  ],
  [
    576,
    false
  ],
  [
    577,
    false
  ],
  [
    578,
    false
  ],
  [
    579,
    true
  ],
  [
    580,
    true
  ],
  [
    581,
    true
  ],
  [
    582,
    true
  ],
  [
    583,
    true
  ],
  [
    584,
    true
  ],
  [
    585,
    true
  ],
  [
    586,
    true
  ],
  [
    587,
    true
  ],
  [
    588,
    true
  ],
  [
    589,
    true
  ],
  [
    590,
    true
  ],
  [
    591,
    true
  ],
  [
    592,
    true
  ],
  [
    593,
    true
  ],
  [
    594,
    true
  ],
  [
    595,
    true
  ],
  [
    596,
    true
  ],
  [
    597,
    true
  ],
  [
    598,
    true
  ],
  [
    599,
    true
  ],
  [
    600,
    true
  ],
  [
    601,
    true
  ],
  [
    602,
    true
  ],
  [
    603,
    true
  ],
  [
    604,
    true
  ],
  [
    605,
    true
  ],
  [
    606,
    true
  ],
  [
    607,
    true
  ],
  [
    608,
    true
  ],
  [
    609,
    true
  ],
  [
    610,
    true
  ],
  [
    611,
    true
  ],
  [
    612,
    true
  ],
  [
    613,
    true
  ],
  [
    614,
    true
  ],
  [
    615,
    true
  ],
  [
    616,
    true
  ],
  [
    617,
    true
  ],
  [
    618,
    false
  ],
  [
    619,
    true
  ],
  [
    620,
    true
  ],
  [
    621,
    true
  ],
  [
    622,
    true
  ],
  [
    623,
    true
  ],
  [
    624,
    true
  ],
  [
    625,
    false
  ],
  [
    626,
    false
  ],
  [
    627,
    false
  ],
  [
    628,
    false
  ],
  [
    629,
    true
  ],
  [
    630,
    true
  ],
  [
    631,
    true
  ],
  [
    632,
    true
  ],
  [
    633,
    false
  ],
  [
    634,
    true
  ],
  [
    635,
    false
  ],
  [
    636,
    false
  ],
  [
    637,
    true
  ],
  [
    638,
    false
  ],
  [
    639,
    true
  ],
  [
    640,
    true
  ],
  [
    641,
    false
  ],
  [
    642,
    true
  ],
  [
    643,
    true
  ],
  [
    644,
    true
  ],
  [
    645,
    true
  ],
  [
    646,
    true
  ],
  [
    647,
    true
  ],
  [
    648,
    true
  ],
  [
    649,
    true
  ],
  [
    650,
    true
  ],
  [
    651,
    true
  ],
  [
    652,
    true
  ],
  [
    653,
    true
  ],
  [
    654,
    true
  ],
  [
    655,
    false
  ],
  [
    656,
    true
  ],
  [
    657,
    true
  ],
  [
    658,
    true
  ],
  [
    659,
    false
  ],
  [
    660,
    true
  ],
  [
    661,
    false
  ],
  [
    662,
    false
  ],
  [
    663,
    true
  ],
  [
    664,
    true
  ],
  [
    665,
    true
  ],
  [
    666,
    false
  ],
  [
    667,
    false
  ],
  [
    668,
    false
  ],
  [
    669,
    false
  ],
  [
    670,
    false
  ],
  [
    671,
    false
  ],
  [
    672,
    false
  ],
  [
    673,
    false
  ],
  [
    674,
    false
  ],
  [
    675,
    false
  ],
  [
    676,
    false
  ],
  [
    677,
    false
  ],
  [
    678,
    false
  ],
  [
    679,
    false
  ],
  [
    680,
    false
  ],
  [
    681,
    false
  ],
  [
    682,
    false
  ],
  [
    683,
    false
  ],
  [
    684,
    false
  ],
  [
    685,
    false
  ],
  [
    686,
    false
  ],
  [
    687,
    false
  ],
  [
    688,
    false
  ],
  [
    689,
    false
  ],
  [
    690,
    false
  ],
  [
    691,
    false
  ],
  [
    692,
    false
  ]
]);
function isImportant2(tileType) {
  return getOr(map5.get(tileType), false);
}

// src/packetv1449/PacketV1449_TileSectionSend.js
function defaultTileCache() {
  return {
    activeTile: void 0,
    color: void 0,
    wallColor: void 0,
    wall: void 0,
    liquid: void 0,
    lava: false,
    honey: false,
    shimmer: false,
    wire: false,
    wire2: false,
    wire3: false,
    wire4: false,
    halfBrick: false,
    slope: void 0,
    actuator: false,
    inActive: false,
    invisibleBlock: false,
    invisibleWall: false,
    fullbrightBlock: false,
    fullbrightWall: false,
    coatHeader: 0
  };
}
function cacheToTile(cache) {
  return {
    activeTile: cache.activeTile,
    color: cache.color,
    wallColor: cache.wallColor,
    wall: cache.wall,
    liquid: cache.liquid,
    lava: cache.lava,
    honey: cache.honey,
    shimmer: cache.shimmer,
    wire: cache.wire,
    wire2: cache.wire2,
    wire3: cache.wire3,
    wire4: cache.wire4,
    halfBrick: cache.halfBrick,
    slope: cache.slope,
    actuator: cache.actuator,
    inActive: cache.inActive,
    invisibleBlock: cache.invisibleBlock,
    invisibleWall: cache.invisibleWall,
    fullbrightBlock: cache.fullbrightBlock,
    fullbrightWall: cache.fullbrightWall,
    coatHeader: cache.coatHeader
  };
}
function parse65(reader) {
  let e = readInt162(reader, "id");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt162(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt162(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readString2(reader, "name");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        id: e._0,
        x: e$1._0,
        y: e$2._0,
        name: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function pack3(writer, chest) {
  return packString2(packInt162(packInt162(packInt162(writer, chest.id, "id"), chest.x, "x"), chest.y, "y"), chest.name, "name");
}
function parse$12(reader) {
  let e = readInt162(reader, "id");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt162(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt162(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readString2(reader, "name");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        id: e._0,
        x: e$1._0,
        y: e$2._0,
        name: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function pack$12(writer, sign) {
  return packString2(packInt162(packInt162(packInt162(writer, sign.id, "id"), sign.x, "x"), sign.y, "y"), sign.name, "name");
}
var Chest = {
  parse: parse65,
  pack: pack3
};
var Sign = {
  parse: parse$12,
  pack: pack$12
};

// src/packet/Packet_TileSectionSend.js
function parseTrainingDummyKind(reader) {
  let e = readInt162(reader, "npcSlotId");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcSlotId: e._0
      }
    };
  } else {
    return e;
  }
}
function parseDisplayItem(reader) {
  let e = readInt162(reader, "netId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte2(reader, "prefix");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt162(reader, "stack");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        netId: e._0,
        prefix: e$1._0,
        stack: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
function parseLogicSensorKind(reader) {
  let e = readByte2(reader, "checkType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte2(reader, "on");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        checkType: e._0,
        on: e$1._0 === 1
      }
    };
  } else {
    return e$1;
  }
}
function parseDisplayDollKind(reader) {
  let e = readByte2(reader, "itemsFlags");
  if (e.TAG !== "Ok") {
    return e;
  }
  let itemsFlags = fromByte(e._0);
  let e$1 = readByte2(reader, "dyeFlags");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let dyeFlags = fromByte(e$1._0);
  let e$2 = readByte2(reader, "pose");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte2(reader, "extraFlags");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let extraFlags = fromByte(e$3._0);
  let items = [];
  let dyes = [];
  let misc = [];
  let parseResult = {
    TAG: "Ok",
    _0: void 0
  };
  for (let i = 0; i <= 7; ++i) {
    let match = parseResult;
    if (match.TAG === "Ok") {
      if (flagN(itemsFlags, 1 << i)) {
        let item = parseDisplayItem(reader);
        if (item.TAG === "Ok") {
          items.push(item._0);
        } else {
          parseResult = {
            TAG: "Error",
            _0: item._0
          };
        }
      } else {
        items.push(void 0);
      }
    }
  }
  let match$1 = parseResult;
  if (match$1.TAG === "Ok") {
    if (flag2(extraFlags)) {
      let item$1 = parseDisplayItem(reader);
      if (item$1.TAG === "Ok") {
        items.push(item$1._0);
      } else {
        parseResult = {
          TAG: "Error",
          _0: item$1._0
        };
      }
    } else {
      items.push(void 0);
    }
  }
  for (let i$1 = 0; i$1 <= 7; ++i$1) {
    let match$2 = parseResult;
    if (match$2.TAG === "Ok") {
      if (flagN(dyeFlags, 1 << i$1)) {
        let item$2 = parseDisplayItem(reader);
        if (item$2.TAG === "Ok") {
          dyes.push(item$2._0);
        } else {
          parseResult = {
            TAG: "Error",
            _0: item$2._0
          };
        }
      } else {
        dyes.push(void 0);
      }
    }
  }
  let match$3 = parseResult;
  if (match$3.TAG === "Ok") {
    if (flag3(extraFlags)) {
      let item$3 = parseDisplayItem(reader);
      if (item$3.TAG === "Ok") {
        dyes.push(item$3._0);
      } else {
        parseResult = {
          TAG: "Error",
          _0: item$3._0
        };
      }
    } else {
      dyes.push(void 0);
    }
  }
  let match$4 = parseResult;
  if (match$4.TAG === "Ok") {
    if (flag1(extraFlags)) {
      let item$4 = parseDisplayItem(reader);
      if (item$4.TAG === "Ok") {
        misc.push(item$4._0);
      } else {
        parseResult = {
          TAG: "Error",
          _0: item$4._0
        };
      }
    } else {
      misc.push(void 0);
    }
  }
  let err = parseResult;
  if (err.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        items,
        dyes,
        misc,
        pose: e$2._0
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: err._0
    };
  }
}
function parseHatRackKind(reader) {
  let e = readByte2(reader, "flags");
  if (e.TAG !== "Ok") {
    return e;
  }
  let flags = fromByte(e._0);
  let items = [];
  let dyes = [];
  let parseResult = {
    TAG: "Ok",
    _0: void 0
  };
  for (let i = 0; i <= 1; ++i) {
    let match = parseResult;
    if (match.TAG === "Ok") {
      if (flagN(flags, 1 << i)) {
        let item = parseDisplayItem(reader);
        if (item.TAG === "Ok") {
          items.push(item._0);
        } else {
          parseResult = {
            TAG: "Error",
            _0: item._0
          };
        }
      } else {
        items.push(void 0);
      }
    }
  }
  for (let i$1 = 0; i$1 <= 1; ++i$1) {
    let match$1 = parseResult;
    if (match$1.TAG === "Ok") {
      if (flagN(flags, 1 << (i$1 + 2 | 0))) {
        let item$1 = parseDisplayItem(reader);
        if (item$1.TAG === "Ok") {
          dyes.push(item$1._0);
        } else {
          parseResult = {
            TAG: "Error",
            _0: item$1._0
          };
        }
      } else {
        dyes.push(void 0);
      }
    }
  }
  let err = parseResult;
  if (err.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        items,
        dyes
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: err._0
    };
  }
}
function parseLeashedEntityAnchorKind(reader) {
  let e = readInt162(reader, "itemType");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        itemType: e._0
      }
    };
  } else {
    return e;
  }
}
function parseEntityKind(entityType, reader) {
  switch (entityType) {
    case 0:
      return map2(parseTrainingDummyKind(reader), (v) => ({
        TAG: "TrainingDummy",
        _0: v
      }));
    case 1:
      return map2(parseDisplayItem(reader), (v) => ({
        TAG: "ItemFrame",
        _0: v
      }));
    case 2:
      return map2(parseLogicSensorKind(reader), (v) => ({
        TAG: "LogicSensor",
        _0: v
      }));
    case 3:
      return map2(parseDisplayDollKind(reader), (v) => ({
        TAG: "DisplayDoll",
        _0: v
      }));
    case 4:
      return map2(parseDisplayItem(reader), (v) => ({
        TAG: "WeaponsRack",
        _0: v
      }));
    case 5:
      return map2(parseHatRackKind(reader), (v) => ({
        TAG: "HatRack",
        _0: v
      }));
    case 6:
      return map2(parseDisplayItem(reader), (v) => ({
        TAG: "FoodPlatter",
        _0: v
      }));
    case 7:
      return {
        TAG: "Ok",
        _0: {
          TAG: "TeleportationPylon",
          _0: void 0
        }
      };
    case 8:
      return map2(parseDisplayItem(reader), (v) => ({
        TAG: "DeadCellsDisplayJar",
        _0: v
      }));
    case 9:
      return map2(parseLeashedEntityAnchorKind(reader), (v) => ({
        TAG: "KiteAnchor",
        _0: v
      }));
    case 10:
      return map2(parseLeashedEntityAnchorKind(reader), (v) => ({
        TAG: "CritterAnchor",
        _0: v
      }));
    default:
      return {
        TAG: "Error",
        _0: {
          context: "Entity.parse",
          error: new Error("Unknown entity kind: " + entityType.toString())
        }
      };
  }
}
function parse66(reader) {
  let e = readByte2(reader, "entityType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let entityType = e._0;
  let e$1 = readInt322(reader, "id");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt162(reader, "x");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt162(reader, "y");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = parseEntityKind(entityType, reader);
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let entity_id = e$1._0;
  let entity_x = e$2._0;
  let entity_y = e$3._0;
  let entity_entityKind = e$4._0;
  let entity = {
    entityType,
    id: entity_id,
    x: entity_x,
    y: entity_y,
    entityKind: entity_entityKind
  };
  return {
    TAG: "Ok",
    _0: entity
  };
}
function packDisplayItem(writer, displayItem) {
  return packInt162(packByte2(packInt162(writer, displayItem.netId, "netId"), displayItem.prefix, "prefix"), displayItem.stack, "stack");
}
function hasItem(arr, n) {
  return isSome(flatMap(arr[n], (a) => a));
}
function pack4(writer, entity) {
  let writer$1 = packInt162(packInt162(packInt322(packByte2(writer, entity.entityType, "entityType"), entity.id, "id"), entity.x, "x"), entity.y, "y");
  let entityKind = entity.entityKind;
  switch (entityKind.TAG) {
    case "DisplayDoll":
      let displayDollKind = entityKind._0;
      let itemFlags = fromFlags(hasItem(displayDollKind.items, 0), hasItem(displayDollKind.items, 1), hasItem(displayDollKind.items, 2), hasItem(displayDollKind.items, 3), hasItem(displayDollKind.items, 4), hasItem(displayDollKind.items, 5), hasItem(displayDollKind.items, 6), hasItem(displayDollKind.items, 7));
      let dyeFlags = fromFlags(hasItem(displayDollKind.dyes, 0), hasItem(displayDollKind.dyes, 1), hasItem(displayDollKind.dyes, 2), hasItem(displayDollKind.dyes, 3), hasItem(displayDollKind.dyes, 4), hasItem(displayDollKind.dyes, 5), hasItem(displayDollKind.dyes, 6), hasItem(displayDollKind.dyes, 7));
      let extraFlags = fromFlags(hasItem(displayDollKind.misc, 0), hasItem(displayDollKind.items, 8), hasItem(displayDollKind.dyes, 8), false, false, false, false, false);
      packByte2(packByte2(packByte2(packByte2(writer$1, toByte(itemFlags), "itemFlags"), toByte(dyeFlags), "dyeFlags"), displayDollKind.pose, "pose"), toByte(extraFlags), "extraFlags");
      for (let i = 0; i <= 7; ++i) {
        let item = flatMap(displayDollKind.items[i], (a) => a);
        if (item !== void 0) {
          packDisplayItem(writer$1, item);
        }
      }
      let item$1 = flatMap(displayDollKind.items[8], (a) => a);
      if (item$1 !== void 0) {
        packDisplayItem(writer$1, item$1);
      }
      for (let i$1 = 0; i$1 <= 7; ++i$1) {
        let item$2 = flatMap(displayDollKind.dyes[i$1], (a) => a);
        if (item$2 !== void 0) {
          packDisplayItem(writer$1, item$2);
        }
      }
      let item$3 = flatMap(displayDollKind.dyes[8], (a) => a);
      if (item$3 !== void 0) {
        packDisplayItem(writer$1, item$3);
      }
      let item$4 = flatMap(displayDollKind.misc[0], (a) => a);
      if (item$4 !== void 0) {
        packDisplayItem(writer$1, item$4);
      }
      return writer$1;
    case "HatRack":
      let hatRackKind = entityKind._0;
      let flags = fromFlags(hasItem(hatRackKind.items, 0), hasItem(hatRackKind.items, 1), hasItem(hatRackKind.dyes, 0), hasItem(hatRackKind.dyes, 1), false, false, false, false);
      packByte2(writer$1, toByte(flags), "flags");
      for (let i$2 = 0; i$2 <= 1; ++i$2) {
        let item$5 = flatMap(hatRackKind.items[i$2], (a) => a);
        if (item$5 !== void 0) {
          packDisplayItem(writer$1, item$5);
        }
      }
      for (let i$3 = 0; i$3 <= 1; ++i$3) {
        let item$6 = flatMap(hatRackKind.dyes[i$3], (a) => a);
        if (item$6 !== void 0) {
          packDisplayItem(writer$1, item$6);
        }
      }
      return writer$1;
    case "LogicSensor":
      let logicSensorKind = entityKind._0;
      return packByte2(packByte2(writer$1, logicSensorKind.checkType, "checkType"), logicSensorKind.on ? 1 : 0, "on");
    case "TeleportationPylon":
      return writer$1;
    case "TrainingDummy":
      let trainingDummy = entityKind._0;
      return packInt162(writer$1, trainingDummy.npcSlotId, "npcSlotId");
    case "FoodPlatter":
    case "ItemFrame":
    case "WeaponsRack":
    case "DeadCellsDisplayJar":
      return packDisplayItem(writer$1, entityKind._0);
    case "KiteAnchor":
    case "CritterAnchor":
      let leashedEntityAnchor = entityKind._0;
      return packInt162(writer$1, leashedEntityAnchor.itemType, "itemType");
  }
}
function isTheSameAs(self, compTile) {
  let sameHeaders = isSome(self.activeTile) === isSome(compTile.activeTile) && self.inActive === compTile.inActive && self.wire === compTile.wire && self.wire2 === compTile.wire2 && self.wire3 === compTile.wire3 && self.halfBrick === compTile.halfBrick && equal(self.slope, compTile.slope) && self.actuator === compTile.actuator && equal(self.color, compTile.color);
  if (!sameHeaders) {
    return false;
  }
  let match = self.activeTile;
  let match$1 = compTile.activeTile;
  let activeMatches = match !== void 0 ? match$1 !== void 0 && match.tileType === match$1.tileType ? isImportant(match.tileType) ? equal(match.frame, match$1.frame) : true : false : match$1 === void 0;
  if (!activeMatches) {
    return false;
  }
  if (notequal(self.wall, compTile.wall) || notequal(self.liquid, compTile.liquid)) {
    return false;
  }
  let sameWallColor = equal(self.wallColor, compTile.wallColor);
  let sameWire4 = self.wire4 === compTile.wire4;
  let match$2 = compTile.liquid;
  let liquidMatches = match$2 !== void 0 ? sameWallColor && sameWire4 && self.lava === compTile.lava && self.honey === compTile.honey && self.shimmer === compTile.shimmer : sameWallColor && sameWire4;
  if (!liquidMatches || self.invisibleBlock !== compTile.invisibleBlock || self.invisibleWall !== compTile.invisibleWall || self.fullbrightBlock !== compTile.fullbrightBlock) {
    return false;
  } else {
    return self.fullbrightWall === compTile.fullbrightWall;
  }
}
function clearTileCache(tile) {
  tile.activeTile = void 0;
  tile.color = void 0;
  tile.wallColor = void 0;
  tile.wall = void 0;
  tile.liquid = void 0;
  tile.lava = false;
  tile.honey = false;
  tile.shimmer = false;
  tile.wire = false;
  tile.wire2 = false;
  tile.wire3 = false;
  tile.wire4 = false;
  tile.halfBrick = false;
  tile.slope = void 0;
  tile.actuator = false;
  tile.inActive = false;
  tile.invisibleBlock = false;
  tile.invisibleWall = false;
  tile.fullbrightBlock = false;
  tile.fullbrightWall = false;
  tile.coatHeader = 0;
}
function readRepeated(count, parseItem) {
  let items = [];
  let parseResult = {
    TAG: "Ok",
    _0: void 0
  };
  for (let _i = 0; _i < count; ++_i) {
    let match = parseResult;
    if (match.TAG === "Ok") {
      let item = parseItem();
      if (item.TAG === "Ok") {
        items.push(item._0);
      } else {
        parseResult = {
          TAG: "Error",
          _0: item._0
        };
      }
    }
  }
  let err = parseResult;
  if (err.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: items
    };
  } else {
    return {
      TAG: "Error",
      _0: err._0
    };
  }
}
function parse$13(payload) {
  let packetReader = new packetreader_default(payload);
  let e = getBytesLeft(packetReader);
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readBuffer(packetReader, e._0, "deflatedPayload");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let inflated;
  try {
    inflated = {
      TAG: "Ok",
      _0: Nodezlib.inflateRawSync(e$1._0)
    };
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      inflated = {
        TAG: "Error",
        _0: {
          context: "inflateRawSync",
          error: obj._1
        }
      };
    } else {
      throw obj;
    }
  }
  if (inflated.TAG !== "Ok") {
    return inflated;
  }
  let reader = new bufferreader_default(inflated._0);
  let e$2 = readInt322(reader, "tileX");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt322(reader, "tileY");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt162(reader, "width");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let width = e$4._0;
  let e$5 = readInt162(reader, "height");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let height = e$5._0;
  let tiles = [];
  let tileCache = defaultTileCache();
  let rleCount = {
    contents: 0
  };
  if (height < 0 || width < 0) {
    return {
      TAG: "Error",
      _0: {
        context: "Packet_TileSectionSend.parse",
        error: new Error("Tile section dimensions must be non-negative")
      }
    };
  }
  let parseResult = {
    TAG: "Ok",
    _0: void 0
  };
  let readTile = () => {
    clearTileCache(tileCache);
    let e2 = readByte2(reader, "header5");
    if (e2.TAG !== "Ok") {
      return e2;
    }
    let header5 = fromByte(e2._0);
    let e$16;
    if (flag1(header5)) {
      let e$22 = readByte2(reader, "header4_conditional");
      if (e$22.TAG === "Ok") {
        let header4 = fromByte(e$22._0);
        let e$32;
        if (flag1(header4)) {
          let e$42 = readByte2(reader, "header3_conditional");
          if (e$42.TAG === "Ok") {
            let header3 = fromByte(e$42._0);
            let e$52 = flag1(header3) ? readByte2(reader, "header2_conditional") : {
              TAG: "Ok",
              _0: 0
            };
            e$32 = e$52.TAG === "Ok" ? {
              TAG: "Ok",
              _0: [
                header3,
                e$52._0
              ]
            } : e$52;
          } else {
            e$32 = e$42;
          }
        } else {
          e$32 = {
            TAG: "Ok",
            _0: [
              fromByte(0),
              0
            ]
          };
        }
        if (e$32.TAG === "Ok") {
          let match = e$32._0;
          e$16 = {
            TAG: "Ok",
            _0: [
              header4,
              match[0],
              match[1]
            ]
          };
        } else {
          e$16 = e$32;
        }
      } else {
        e$16 = e$22;
      }
    } else {
      e$16 = {
        TAG: "Ok",
        _0: [
          fromByte(0),
          fromByte(0),
          0
        ]
      };
    }
    if (e$16.TAG !== "Ok") {
      return e$16;
    }
    let match$1 = e$16._0;
    let header2 = match$1[2];
    let header3$1 = match$1[1];
    let header4$1 = match$1[0];
    tileCache.coatHeader = header2;
    tileCache.invisibleBlock = (header2 & 2) !== 0;
    tileCache.invisibleWall = (header2 & 4) !== 0;
    tileCache.fullbrightBlock = (header2 & 8) !== 0;
    tileCache.fullbrightWall = (header2 & 16) !== 0;
    let oldActive = tileCache.activeTile;
    let e$62;
    if (flag2(header5)) {
      let oldType = mapOr(tileCache.activeTile, 0, (active) => active.tileType);
      let e$72;
      if (flag6(header5)) {
        let e$82 = readByte2(reader, "tileType_byte1");
        if (e$82.TAG === "Ok") {
          let e$92 = readByte2(reader, "tileType_byte2");
          e$72 = e$92.TAG === "Ok" ? {
            TAG: "Ok",
            _0: e$92._0 << 8 | e$82._0
          } : e$92;
        } else {
          e$72 = e$82;
        }
      } else {
        e$72 = readByte2(reader, "tileType");
      }
      if (e$72.TAG === "Ok") {
        let tileType = e$72._0;
        let e$102;
        if (isImportant(tileType)) {
          let e$112 = readInt162(reader, "frameX");
          if (e$112.TAG === "Ok") {
            let e$122 = readInt162(reader, "frameY");
            e$102 = e$122.TAG === "Ok" ? {
              TAG: "Ok",
              _0: {
                x: e$112._0,
                y: e$122._0
              }
            } : e$122;
          } else {
            e$102 = e$112;
          }
        } else {
          e$102 = isSome(oldActive) && tileType === oldType ? {
            TAG: "Ok",
            _0: oldActive.frame
          } : {
            TAG: "Ok",
            _0: void 0
          };
        }
        if (e$102.TAG === "Ok") {
          let e$132;
          if (flag4(header3$1)) {
            let e$142 = readByte2(reader, "color");
            if (e$142.TAG === "Ok") {
              tileCache.color = e$142._0;
              e$132 = {
                TAG: "Ok",
                _0: void 0
              };
            } else {
              e$132 = e$142;
            }
          } else {
            e$132 = {
              TAG: "Ok",
              _0: void 0
            };
          }
          if (e$132.TAG === "Ok") {
            tileCache.activeTile = {
              tileType,
              frame: e$102._0
            };
            e$62 = {
              TAG: "Ok",
              _0: void 0
            };
          } else {
            e$62 = e$132;
          }
        } else {
          e$62 = e$102;
        }
      } else {
        e$62 = e$72;
      }
    } else {
      e$62 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$62.TAG !== "Ok") {
      return e$62;
    }
    let e$152;
    if (flag3(header5)) {
      let e$162 = readByte2(reader, "wall");
      if (e$162.TAG === "Ok") {
        tileCache.wall = e$162._0;
        if (flag5(header3$1)) {
          let e$17 = readByte2(reader, "wallColor");
          if (e$17.TAG === "Ok") {
            tileCache.wallColor = e$17._0;
            e$152 = {
              TAG: "Ok",
              _0: void 0
            };
          } else {
            e$152 = e$17;
          }
        } else {
          e$152 = {
            TAG: "Ok",
            _0: void 0
          };
        }
      } else {
        e$152 = e$162;
      }
    } else {
      e$152 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$152.TAG !== "Ok") {
      return e$152;
    }
    let liquidBits = (toByte(header5) & 24) >> 3;
    let e$18;
    if (liquidBits !== 0) {
      let e$19 = readByte2(reader, "liquidValue");
      if (e$19.TAG === "Ok") {
        tileCache.liquid = e$19._0;
        if (flag8(header3$1)) {
          tileCache.shimmer = true;
        } else if (liquidBits > 1) {
          if (liquidBits === 2) {
            tileCache.lava = true;
          } else {
            tileCache.honey = true;
          }
        }
        e$18 = {
          TAG: "Ok",
          _0: void 0
        };
      } else {
        e$18 = e$19;
      }
    } else {
      e$18 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$18.TAG !== "Ok") {
      return e$18;
    }
    if (toByte(header4$1) > 1) {
      if (flag2(header4$1)) {
        tileCache.wire = true;
      }
      if (flag3(header4$1)) {
        tileCache.wire2 = true;
      }
      if (flag4(header4$1)) {
        tileCache.wire3 = true;
      }
      let slopeBits = (toByte(header4$1) & 112) >> 4;
      if (slopeBits !== 0 && isSolid(mapOr(tileCache.activeTile, 0, (tile) => tile.tileType))) {
        if (slopeBits === 1) {
          tileCache.halfBrick = true;
        } else {
          tileCache.slope = slopeBits - 1 | 0;
        }
      }
    }
    let e$20;
    if (toByte(header3$1) > 0) {
      if (flag2(header3$1)) {
        tileCache.actuator = true;
      }
      if (flag3(header3$1)) {
        tileCache.inActive = true;
      }
      if (flag6(header3$1)) {
        tileCache.wire4 = true;
      }
      let e$21;
      if (flag7(header3$1)) {
        let e$22 = readByte2(reader, "wall_highByte");
        if (e$22.TAG === "Ok") {
          tileCache.wall = e$22._0 << 8 | tileCache.wall;
          e$21 = {
            TAG: "Ok",
            _0: void 0
          };
        } else {
          e$21 = e$22;
        }
      } else {
        e$21 = {
          TAG: "Ok",
          _0: void 0
        };
      }
      e$20 = e$21.TAG === "Ok" ? {
        TAG: "Ok",
        _0: void 0
      } : e$21;
    } else {
      e$20 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$20.TAG !== "Ok") {
      return e$20;
    }
    let repeatCountBytes = (toByte(header5) & 192) >> 6;
    let e$23;
    if (repeatCountBytes !== 0) {
      if (repeatCountBytes !== 1) {
        let e$24 = readInt162(reader, "rle_int16");
        if (e$24.TAG === "Ok") {
          rleCount.contents = e$24._0;
          e$23 = {
            TAG: "Ok",
            _0: void 0
          };
        } else {
          e$23 = e$24;
        }
      } else {
        let e$25 = readByte2(reader, "rle_byte");
        if (e$25.TAG === "Ok") {
          rleCount.contents = e$25._0;
          e$23 = {
            TAG: "Ok",
            _0: void 0
          };
        } else {
          e$23 = e$25;
        }
      }
    } else {
      rleCount.contents = 0;
      e$23 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$23.TAG === "Ok") {
      return {
        TAG: "Ok",
        _0: cacheToTile(tileCache)
      };
    } else {
      return e$23;
    }
  };
  for (let _y = 0; _y < height; ++_y) {
    let match = parseResult;
    if (match.TAG === "Ok") {
      let row = [];
      for (let _x = 0; _x < width; ++_x) {
        let match$1 = parseResult;
        if (match$1.TAG === "Ok") {
          if (rleCount.contents !== 0) {
            rleCount.contents = rleCount.contents - 1 | 0;
            row.push(cacheToTile(tileCache));
          } else {
            let tile = readTile();
            if (tile.TAG === "Ok") {
              row.push(tile._0);
            } else {
              parseResult = {
                TAG: "Error",
                _0: tile._0
              };
            }
          }
        }
      }
      let match$2 = parseResult;
      if (match$2.TAG === "Ok") {
        tiles.push(row);
      }
    }
  }
  let err = parseResult;
  if (err.TAG !== "Ok") {
    return {
      TAG: "Error",
      _0: err._0
    };
  }
  let e$6 = readInt162(reader, "chestCount");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readRepeated(e$6._0, () => Chest.parse(reader));
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$8 = readInt162(reader, "signCount");
  if (e$8.TAG !== "Ok") {
    return e$8;
  }
  let e$9 = readRepeated(e$8._0, () => Sign.parse(reader));
  if (e$9.TAG !== "Ok") {
    return e$9;
  }
  let e$10 = readInt162(reader, "entityCount");
  if (e$10.TAG !== "Ok") {
    return e$10;
  }
  let e$11 = getBytesLeft2(reader);
  if (e$11.TAG !== "Ok") {
    return e$11;
  }
  let e$12 = readBuffer2(reader, e$11._0, "entitiesBuffer");
  if (e$12.TAG !== "Ok") {
    return e$12;
  }
  let entityReader = new bufferreader_default(e$12._0);
  let e$13 = readRepeated(e$10._0, () => parse66(entityReader));
  if (e$13.TAG !== "Ok") {
    return e$13;
  }
  let e$14 = getBytesLeft2(entityReader);
  if (e$14.TAG !== "Ok") {
    return e$14;
  }
  let e$15 = e$14._0 === 0 ? {
    TAG: "Ok",
    _0: void 0
  } : {
    TAG: "Error",
    _0: {
      context: "Packet_TileSectionSend.entities",
      error: new Error("Unexpected trailing entity bytes")
    }
  };
  if (e$15.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        height,
        width,
        tileX: e$2._0,
        tileY: e$3._0,
        tiles,
        chests: e$7._0,
        signs: e$9._0,
        entities: e$13._0
      }
    };
  } else {
    return e$15;
  }
}
function getLiquidBitFlags(tile) {
  let hasLiquid = isSome(tile.liquid);
  let liquidBits = hasLiquid ? tile.shimmer ? "One" : tile.honey ? "Three" : tile.lava ? "Two" : "One" : "Zero";
  switch (liquidBits) {
    case "Zero":
      return [
        false,
        false
      ];
    case "One":
      return [
        false,
        true
      ];
    case "Two":
      return [
        true,
        false
      ];
    case "Three":
      return [
        true,
        true
      ];
  }
}
function getSlopeBitFlags(tile) {
  if (tile.halfBrick) {
    return [
      false,
      false,
      true
    ];
  }
  let match = tile.slope;
  if (match === void 0) {
    return [
      false,
      false,
      false
    ];
  }
  switch (match) {
    case 0:
      return [
        false,
        false,
        true
      ];
    case 1:
      return [
        false,
        true,
        false
      ];
    case 2:
      return [
        false,
        true,
        true
      ];
    case 3:
      return [
        true,
        false,
        false
      ];
    case 4:
      return [
        true,
        false,
        true
      ];
    case 5:
      return [
        true,
        true,
        false
      ];
    default:
      return [
        true,
        true,
        true
      ];
  }
}
function getRepeatCountByteLength(repeatCount) {
  if (repeatCount > 255) {
    return 2;
  } else if (repeatCount > 0) {
    return 1;
  } else {
    return 0;
  }
}
function getRepeatCountBitFlags(repeatCount) {
  let repeatCountBytes = getRepeatCountByteLength(repeatCount);
  switch (repeatCountBytes) {
    case 0:
      return [
        false,
        false
      ];
    case 1:
      return [
        false,
        true
      ];
    default:
      return [
        true,
        false
      ];
  }
}
function allowsSaveCompressionBatching(tile) {
  let activeTile = tile.activeTile;
  if (activeTile !== void 0) {
    if (activeTile.tileType !== 520) {
      return activeTile.tileType !== 423;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
function packTile(writer, tile, repeatCount) {
  let coatFlags = (((tile.invisibleBlock ? 2 : 0) + (tile.invisibleWall ? 4 : 0) | 0) + (tile.fullbrightBlock ? 8 : 0) | 0) + (tile.fullbrightWall ? 16 : 0) | 0;
  let header2 = tile.coatHeader | coatFlags;
  let hasLiquid = isSome(tile.liquid);
  let wall = tile.wall;
  let header3 = fromFlags(header2 > 0, tile.actuator, tile.inActive, isSome(tile.color), isSome(tile.wall) && isSome(tile.wallColor), tile.wire4, wall !== void 0 ? wall > 255 : false, tile.shimmer && hasLiquid);
  let match = getSlopeBitFlags(tile);
  let header4 = fromFlags(toByte(header3) > 0, tile.wire, tile.wire2, tile.wire3, match[2], match[1], match[0], false);
  let match$1 = getLiquidBitFlags(tile);
  let match$2 = getRepeatCountBitFlags(repeatCount);
  let activeTile = tile.activeTile;
  let tileFlags = fromFlags(toByte(header4) > 0, isSome(tile.activeTile), isSome(tile.wall), match$1[1], match$1[0], activeTile !== void 0 ? activeTile.tileType > 255 : false, match$2[1], match$2[0]);
  packByte2(writer, toByte(tileFlags), "tileFlags");
  if (flag1(tileFlags)) {
    packByte2(writer, toByte(header4), "header4");
    if (flag1(header4)) {
      packByte2(writer, toByte(header3), "header3");
      if (flag1(header3)) {
        packByte2(writer, header2, "header2");
      }
    }
  }
  let activeTile$1 = tile.activeTile;
  if (activeTile$1 !== void 0) {
    if (flag6(tileFlags)) {
      packByte2(writer, activeTile$1.tileType & 255, "tileType_lowByte");
      packByte2(writer, (activeTile$1.tileType & 65280) >> 8, "tileType_highByte");
    } else {
      packByte2(writer, activeTile$1.tileType, "tileType");
    }
    let match$3 = activeTile$1.frame;
    if (match$3 !== void 0) {
      packInt162(writer, match$3.x, "frameX");
      packInt162(writer, match$3.y, "frameY");
    }
    let color = tile.color;
    if (color !== void 0) {
      packByte2(writer, color, "color");
    }
  }
  let wall$1 = tile.wall;
  if (wall$1 !== void 0) {
    packByte2(writer, wall$1 & 255, "wall_lowByte");
    let wallColor = tile.wallColor;
    if (wallColor !== void 0) {
      packByte2(writer, wallColor, "wallColor");
    }
  }
  let liquid = tile.liquid;
  if (liquid !== void 0) {
    packByte2(writer, liquid, "liquidValue");
  }
  let wall$2 = tile.wall;
  if (wall$2 !== void 0 && wall$2 > 255) {
    packByte2(writer, wall$2 >> 8, "wall_highByte");
  }
  let match$4 = getRepeatCountByteLength(repeatCount);
  if (match$4 !== 0) {
    if (match$4 !== 1) {
      packInt162(writer, repeatCount, "rle_int16");
    } else {
      packByte2(writer, repeatCount, "rle_byte");
    }
  }
  return writer;
}
function decidePackTile(writer, lastTile, tile) {
  let last = lastTile.contents;
  if (last !== void 0) {
    if (isTheSameAs(tile, last.tile) && allowsSaveCompressionBatching(tile)) {
      last.count = last.count + 1 | 0;
    } else {
      packTile(writer, last.tile, last.count);
      lastTile.contents = {
        tile,
        count: 0
      };
    }
  } else {
    lastTile.contents = {
      tile,
      count: 0
    };
  }
}
function toBuffer64(self) {
  let outerPacketWriter = setType(make(), toInt("TileSectionSend"));
  let innerWriter = make3(Buffer.allocUnsafe(64e3));
  packInt162(packInt162(packInt322(packInt322(innerWriter, self.tileX, "tileX"), self.tileY, "tileY"), self.width, "width"), self.height, "height");
  let lastTile = {
    contents: void 0
  };
  for (let y = 0, y_finish = self.height; y < y_finish; ++y) {
    for (let x = 0, x_finish = self.width; x < x_finish; ++x) {
      let tile = self.tiles[y][x];
      decidePackTile(innerWriter, lastTile, tile);
    }
  }
  let lastTileValue = lastTile.contents;
  if (lastTileValue !== void 0) {
    packTile(innerWriter, lastTileValue.tile, lastTileValue.count);
  }
  packInt162(innerWriter, self.chests.length, "chestCount");
  self.chests.forEach((chest) => {
    Chest.pack(innerWriter, chest);
  });
  packInt162(innerWriter, self.signs.length, "signCount");
  self.signs.forEach((sign) => {
    Sign.pack(innerWriter, sign);
  });
  packInt162(innerWriter, self.entities.length, "entityCount");
  self.entities.forEach((entity) => {
    pack4(innerWriter, entity);
  });
  let innerBuffer = slicedData(innerWriter);
  if (innerBuffer.TAG === "Ok") {
    let deflatedPayload = Nodezlib.deflateRawSync(innerBuffer._0);
    return data(packBuffer(outerPacketWriter, deflatedPayload, "deflatedPayload"));
  }
  let e = innerBuffer._0;
  return {
    TAG: "Error",
    _0: {
      context: "innerWriter; " + e.context,
      error: e.error
    }
  };
}
var Chest2;
var Sign2;
var Entity = {
  parse: parse66,
  pack: pack4
};

// src/packet/Packet_TileSquareSend.js
var Packet_TileSquareSend_exports = {};
__export(Packet_TileSquareSend_exports, {
  Decode: () => Decode9,
  Encode: () => Encode9,
  parse: () => parse67,
  toBuffer: () => toBuffer65
});
function parse67(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "tileX");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "tileY");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "width");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let width = e$2._0;
  let e$3 = readByte(reader, "height");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let height = e$3._0;
  let e$4 = readByte(reader, "changeType");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let readTile = () => {
    let e2 = readByte(reader, "flags1");
    if (e2.TAG !== "Ok") {
      return e2;
    }
    let flags1 = fromByte(e2._0);
    let e$12 = readByte(reader, "flags2");
    if (e$12.TAG !== "Ok") {
      return e$12;
    }
    let flags2 = fromByte(e$12._0);
    let e$22 = readByte(reader, "flags3");
    if (e$22.TAG !== "Ok") {
      return e$22;
    }
    let active = flag1(flags1);
    let hasWall = flag3(flags1);
    let hasLiquid = flag4(flags1);
    let wire = flag5(flags1);
    let halfBrick = flag6(flags1);
    let actuator = flag7(flags1);
    let inActive = flag8(flags1);
    let wire2 = flag1(flags2);
    let wire3 = flag2(flags2);
    let e$32;
    if (flag3(flags2)) {
      let e$42 = readByte(reader, "color");
      e$32 = e$42.TAG === "Ok" ? {
        TAG: "Ok",
        _0: e$42._0
      } : e$42;
    } else {
      e$32 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$32.TAG !== "Ok") {
      return e$32;
    }
    let e$5;
    if (flag4(flags2)) {
      let e$6 = readByte(reader, "wallColor");
      e$5 = e$6.TAG === "Ok" ? {
        TAG: "Ok",
        _0: e$6._0
      } : e$6;
    } else {
      e$5 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$5.TAG !== "Ok") {
      return e$5;
    }
    let e$7;
    if (active) {
      let e$8 = readUInt16(reader, "tileType");
      if (e$8.TAG === "Ok") {
        let tileType = e$8._0;
        let e$9;
        if (isImportant(tileType)) {
          let e$10 = readInt16(reader, "frameX");
          if (e$10.TAG === "Ok") {
            let e$11 = readInt16(reader, "frameY");
            e$9 = e$11.TAG === "Ok" ? {
              TAG: "Ok",
              _0: {
                x: e$10._0,
                y: e$11._0
              }
            } : e$11;
          } else {
            e$9 = e$10;
          }
        } else {
          e$9 = {
            TAG: "Ok",
            _0: void 0
          };
        }
        if (e$9.TAG === "Ok") {
          let slope = ((0 + (flag5(flags2) ? 1 : 0) | 0) + (flag6(flags2) ? 2 : 0) | 0) + (flag7(flags2) ? 4 : 0) | 0;
          e$7 = {
            TAG: "Ok",
            _0: {
              tileType,
              slope,
              frame: e$9._0
            }
          };
        } else {
          e$7 = e$9;
        }
      } else {
        e$7 = e$8;
      }
    } else {
      e$7 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$7.TAG !== "Ok") {
      return e$7;
    }
    let e$122;
    if (hasWall) {
      let e$13 = readUInt16(reader, "wall");
      e$122 = e$13.TAG === "Ok" ? {
        TAG: "Ok",
        _0: e$13._0
      } : e$13;
    } else {
      e$122 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$122.TAG !== "Ok") {
      return e$122;
    }
    let e$14;
    if (hasLiquid) {
      let e$15 = readByte(reader, "liquidValue");
      if (e$15.TAG === "Ok") {
        let e$16 = readByte(reader, "liquidType");
        e$14 = e$16.TAG === "Ok" ? {
          TAG: "Ok",
          _0: {
            liquidValue: e$15._0,
            liquidType: e$16._0
          }
        } : e$16;
      } else {
        e$14 = e$15;
      }
    } else {
      e$14 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$14.TAG !== "Ok") {
      return e$14;
    }
    let wire4 = flag8(flags2);
    return {
      TAG: "Ok",
      _0: {
        wire,
        halfBrick,
        actuator,
        inActive,
        wire2,
        wire3,
        wire4,
        color: e$32._0,
        wallColor: e$5._0,
        activeTile: e$7._0,
        wall: e$122._0,
        liquid: e$14._0,
        coatHeader: e$22._0
      }
    };
  };
  let tiles = [];
  let parseResult = {
    TAG: "Ok",
    _0: void 0
  };
  for (let _x = 0; _x < width; ++_x) {
    let match = parseResult;
    if (match.TAG === "Ok") {
      let column = [];
      for (let _y = 0; _y < height; ++_y) {
        let match$1 = parseResult;
        if (match$1.TAG === "Ok") {
          let tile = readTile();
          if (tile.TAG === "Ok") {
            column.push(tile._0);
          } else {
            parseResult = {
              TAG: "Error",
              _0: tile._0
            };
          }
        }
      }
      let match$2 = parseResult;
      if (match$2.TAG === "Ok") {
        tiles.push(column);
      }
    }
  }
  let err = parseResult;
  if (err.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        width,
        height,
        changeType: e$4._0,
        tileX: e._0,
        tileY: e$1._0,
        tiles
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: err._0
    };
  }
}
function packTile2(writer, tile) {
  let flags1 = fromFlags(isSome(tile.activeTile), false, isSome(tile.wall), isSome(tile.liquid), tile.wire, tile.halfBrick, tile.actuator, tile.inActive);
  let flags2 = fromFlags(tile.wire2, tile.wire3, isSome(tile.color), isSome(tile.wallColor), mapOr(tile.activeTile, false, (tile2) => (tile2.slope & 1) === 1), mapOr(tile.activeTile, false, (tile2) => (tile2.slope & 2) === 2), mapOr(tile.activeTile, false, (tile2) => (tile2.slope & 4) === 4), tile.wire4);
  packByte(packByte(packByte(writer, toByte(flags1), "flags1"), toByte(flags2), "flags2"), tile.coatHeader, "coatHeader");
  let c = tile.color;
  if (c !== void 0) {
    packByte(writer, c, "color");
  }
  let wc = tile.wallColor;
  if (wc !== void 0) {
    packByte(writer, wc, "wallColor");
  }
  let at = tile.activeTile;
  if (at !== void 0) {
    packUInt16(writer, at.tileType, "tileType");
    if (isImportant(at.tileType)) {
      packInt16(packInt16(writer, mapOr(at.frame, 0, (frame) => frame.x), "frameX"), mapOr(at.frame, 0, (frame) => frame.y), "frameY");
    }
  }
  let w = tile.wall;
  if (w !== void 0) {
    packUInt16(writer, w, "wall");
  }
  let l = tile.liquid;
  if (l !== void 0) {
    packByte(packByte(writer, l.liquidValue, "liquidValue"), l.liquidType, "liquidType");
  }
  return writer;
}
function packTiles(writer, tiles) {
  for (let x = 0, x_finish = tiles.length; x < x_finish; ++x) {
    for (let y = 0, y_finish = tiles[x].length; y < y_finish; ++y) {
      packTile2(writer, tiles[x][y]);
    }
  }
  return writer;
}
function toBuffer65(self) {
  return data(packTiles(packByte(packByte(packByte(packInt16(packInt16(setType(make(), toInt("TileSquareSend")), self.tileX, "tileX"), self.tileY, "tileY"), self.width, "width"), self.height, "height"), self.changeType, "changeType"), self.tiles));
}
var Decode9 = {
  parse: parse67
};
var Encode9 = {
  toBuffer: toBuffer65
};

// src/packetv1449/PacketV1449_TimeSet.js
var PacketV1449_TimeSet_exports = {};
__export(PacketV1449_TimeSet_exports, {
  parse: () => parse68,
  toBuffer: () => toBuffer66
});
function parse68(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "dayTime");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "time");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "sunModY");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "moonModY");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        dayTime: e._0 === 1,
        time: e$1._0,
        sunModY: e$2._0,
        moonModY: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer66(self) {
  return data(packInt16(packInt16(packInt32(packByte(setType(make(), toInt("TimeSet")), self.dayTime ? 1 : 0, "dayTime"), self.time, "time"), self.sunModY, "sunModY"), self.moonModY, "moonModY"));
}

// src/packet/Packet_TravellingMerchantInventory.js
var Packet_TravellingMerchantInventory_exports = {};
__export(Packet_TravellingMerchantInventory_exports, {
  Decode: () => Decode10,
  Encode: () => Encode10,
  parse: () => parse69,
  toBuffer: () => toBuffer67
});
function parse69(payload) {
  let reader = new packetreader_default(payload);
  let items = [];
  let totalItems = payload.length / 2 | 0;
  let readItems = (_idx) => {
    while (true) {
      let idx = _idx;
      if (idx >= totalItems) {
        return {
          TAG: "Ok",
          _0: void 0
        };
      }
      let e2 = readInt16(reader, `item` + (idx + 1 | 0).toString());
      if (e2.TAG !== "Ok") {
        return e2;
      }
      items.push(e2._0);
      _idx = idx + 1 | 0;
      continue;
    }
    ;
  };
  let e = readItems(0);
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        items
      }
    };
  } else {
    return e;
  }
}
var Decode10 = {
  readInt16,
  parse: parse69
};
function packItems(writer, items) {
  let _writer = writer;
  let _idx = 0;
  while (true) {
    let idx = _idx;
    let writer$1 = _writer;
    if (idx >= items.length) {
      return writer$1;
    }
    _idx = idx + 1 | 0;
    _writer = packInt16(writer$1, items[idx], `item` + (idx + 1 | 0).toString());
    continue;
  }
  ;
}
function toBuffer67(self) {
  let writer = setType(make(), toInt("TravellingMerchantInventory"));
  return data(packItems(writer, self.items));
}
var Encode10 = {
  Writer: void 0,
  packInt16,
  setType,
  data,
  packItems,
  toBuffer: toBuffer67
};

// src/packetv1449/PacketV1449_TreeGrowFx.js
var PacketV1449_TreeGrowFx_exports = {};
__export(PacketV1449_TreeGrowFx_exports, {
  parse: () => parse70,
  toBuffer: () => toBuffer68
});
function parse70(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "action");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt32(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "style");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "treeType");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        action: e._0,
        x: e$1._0,
        y: e$2._0,
        style: e$3._0,
        treeType: e$4._0
      }
    };
  } else {
    return e$4;
  }
}
function toBuffer68(self) {
  return data(packInt16(packByte(packInt32(packInt32(packByte(setType(make(), toInt("TreeGrowFx")), self.action, "action"), self.x, "x"), self.y, "y"), self.style, "style"), self.treeType, "treeType"));
}

// src/packetv1449/PacketV1449_Unused.js
var PacketV1449_Unused_exports = {};
__export(PacketV1449_Unused_exports, {
  parse: () => parse71
});
function parse71(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}

// src/packetv1449/PacketV1449_WallPaint.js
var PacketV1449_WallPaint_exports = {};
__export(PacketV1449_WallPaint_exports, {
  parse: () => parse72,
  toBuffer: () => toBuffer69
});
function parse72(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "color");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "coat");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        color: e$2._0,
        coat: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
function toBuffer69(self) {
  return data(packByte(packByte(packInt16(packInt16(setType(make(), toInt("WallPaint")), self.x, "x"), self.y, "y"), self.color, "color"), self.coat, "coat"));
}

// src/packetv1449/PacketV1449_WeaponsRackTryPlacing.js
var PacketV1449_WeaponsRackTryPlacing_exports = {};
__export(PacketV1449_WeaponsRackTryPlacing_exports, {
  parse: () => parse73,
  toBuffer: () => toBuffer70
});
function parse73(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "itemId");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "prefix");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "stack");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        itemId: e$2._0,
        prefix: e$3._0,
        stack: e$4._0
      }
    };
  } else {
    return e$4;
  }
}
function toBuffer70(self) {
  return data(packInt16(packInt16(packInt16(packInt16(packInt16(setType(make(), toInt("WeaponsRackTryPlacing")), self.x, "x"), self.y, "y"), self.itemId, "itemId"), self.prefix, "prefix"), self.stack, "stack"));
}

// src/packetv1449/PacketV1449_WiredCannonShot.js
var PacketV1449_WiredCannonShot_exports = {};
__export(PacketV1449_WiredCannonShot_exports, {
  parse: () => parse74,
  toBuffer: () => toBuffer71
});
function parse74(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "damage");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "knockback");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "x");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "y");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "angle");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readInt16(reader, "ammo");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "playerId");
  if (e$6.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        damage: e._0,
        knockback: e$1._0,
        x: e$2._0,
        y: e$3._0,
        angle: e$4._0,
        ammo: e$5._0,
        playerId: e$6._0
      }
    };
  } else {
    return e$6;
  }
}
function toBuffer71(self) {
  return data(packByte(packInt16(packInt16(packInt16(packInt16(packSingle(packInt16(setType(make(), toInt("WiredCannonShot")), self.damage, "damage"), self.knockback, "knockback"), self.x, "x"), self.y, "y"), self.angle, "angle"), self.ammo, "ammo"), self.playerId, "playerId"));
}

// src/packetv1449/PacketV1449_WorldDataRequest.js
var PacketV1449_WorldDataRequest_exports = {};
__export(PacketV1449_WorldDataRequest_exports, {
  parse: () => parse75,
  toBuffer: () => toBuffer72
});
function parse75(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}
function toBuffer72(_self) {
  return {
    TAG: "Ok",
    _0: new packetwriter_default().setType(toInt("WorldDataRequest")).data
  };
}

// src/packet/Packet_Zones.js
var Packet_Zones_exports = {};
__export(Packet_Zones_exports, {
  Decode: () => Decode11,
  Encode: () => Encode11,
  parse: () => parse76,
  toBuffer: () => toBuffer73
});
function parse76(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "zone1");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "zone2");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "zone3");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "zone4");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readByte(reader, "zone5");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "townNPCs");
  if (e$6.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        zone1: e$1._0,
        zone2: e$2._0,
        zone3: e$3._0,
        zone4: e$4._0,
        zone5: e$5._0,
        townNPCs: e$6._0
      }
    };
  } else {
    return e$6;
  }
}
var Decode11 = {
  readByte,
  parse: parse76
};
function toBuffer73(self) {
  return data(packByte(packByte(packByte(packByte(packByte(packByte(packByte(setType(make(), toInt("Zones")), self.playerId, "playerId"), self.zone1, "zone1"), self.zone2, "zone2"), self.zone3, "zone3"), self.zone4, "zone4"), self.zone5, "zone5"), self.townNPCs, "townNPCs"));
}
var Encode11 = {
  packByte,
  setType,
  data,
  toBuffer: toBuffer73
};

// src/packet/Packet_ChestResize.js
var Packet_ChestResize_exports = {};
__export(Packet_ChestResize_exports, {
  Decode: () => Decode12,
  Encode: () => Encode12,
  parse: () => parse77,
  toBuffer: () => toBuffer74
});
function parse77(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "chestId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "newSize");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        chestId: e._0,
        newSize: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
var Decode12 = {
  readInt16,
  parse: parse77
};
function toBuffer74(self) {
  return data(packInt16(packInt16(setType(make(), toInt("ChestResize")), self.chestId, "chestId"), self.newSize, "newSize"));
}
var Encode12 = {
  packInt16,
  setType,
  data,
  toBuffer: toBuffer74
};

// src/packet/Packet_DeadCellsDisplayJarTryPlacing.js
var Packet_DeadCellsDisplayJarTryPlacing_exports = {};
__export(Packet_DeadCellsDisplayJarTryPlacing_exports, {
  Decode: () => Decode13,
  Encode: () => Encode13,
  parse: () => parse78,
  toBuffer: () => toBuffer75
});
function parse78(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "itemType");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "prefix");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "stack");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        itemType: e$2._0,
        prefix: e$3._0,
        stack: e$4._0
      }
    };
  } else {
    return e$4;
  }
}
var Decode13 = {
  readInt16,
  readByte,
  parse: parse78
};
function toBuffer75(self) {
  return data(packInt16(packByte(packInt16(packInt16(packInt16(setType(make(), toInt("DeadCellsDisplayJarTryPlacing")), self.x, "x"), self.y, "y"), self.itemType, "itemType"), self.prefix, "prefix"), self.stack, "stack"));
}
var Encode13 = {
  packInt16,
  packByte,
  setType,
  data,
  toBuffer: toBuffer75
};

// src/packet/Packet_DebugCommand.js
var Packet_DebugCommand_exports = {};
__export(Packet_DebugCommand_exports, {
  Decode: () => Decode14,
  Encode: () => Encode14,
  parse: () => parse79,
  toBuffer: () => toBuffer76
});
function parse79(payload) {
  let reader = new packetreader_default(payload);
  let e = readString(reader, "command");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "argInt");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "argFloat");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "argFloat2");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        command: e._0,
        argInt: e$1._0,
        argFloat: e$2._0,
        argFloat2: e$3._0
      }
    };
  } else {
    return e$3;
  }
}
var Decode14 = {
  readString,
  readInt32,
  readSingle,
  parse: parse79
};
function toBuffer76(self) {
  return data(packSingle(packSingle(packInt32(packString(setType(make(), toInt("Unused")), self.command, "command"), self.argInt, "argInt"), self.argFloat, "argFloat"), self.argFloat2, "argFloat2"));
}
var Encode14 = {
  packString,
  packInt32,
  packSingle,
  setType,
  data,
  toBuffer: toBuffer76
};

// src/packet/Packet_HostToken.js
var Packet_HostToken_exports = {};
__export(Packet_HostToken_exports, {
  Decode: () => Decode15,
  Encode: () => Encode15,
  parse: () => parse80,
  toBuffer: () => toBuffer77
});
function parse80(payload) {
  let reader = new packetreader_default(payload);
  let e = readString(reader, "token");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        token: e._0
      }
    };
  } else {
    return e;
  }
}
var Decode15 = {
  readString,
  parse: parse80
};
function toBuffer77(self) {
  return data(packString(setType(make(), toInt("HostToken")), self.token, "token"));
}
var Encode15 = {
  packString,
  setType,
  data,
  toBuffer: toBuffer77
};

// src/packet/Packet_InitialTileSectionsRequest.js
var Packet_InitialTileSectionsRequest_exports = {};
__export(Packet_InitialTileSectionsRequest_exports, {
  Decode: () => Decode16,
  Encode: () => Encode16,
  parse: () => parse81,
  toBuffer: () => toBuffer78
});
function parse81(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "team");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        team: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
var Decode16 = {
  readInt32,
  readByte,
  parse: parse81
};
function toBuffer78(self) {
  return data(packByte(packInt32(packInt32(setType(new packetwriter_default(), toInt("InitialTileSectionsRequest")), self.x, "x"), self.y, "y"), self.team, "team"));
}
var Encode16 = {
  toBuffer: toBuffer78
};

// src/packet/Packet_ItemDropClear.js
var Packet_ItemDropClear_exports = {};
__export(Packet_ItemDropClear_exports, {
  Decode: () => Decode17,
  Encode: () => Encode17,
  parse: () => parse82,
  toBuffer: () => toBuffer79
});
function parse82(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "itemDropId");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        itemDropId: e._0
      }
    };
  } else {
    return e;
  }
}
var Decode17 = {
  readInt16,
  parse: parse82
};
function toBuffer79(self) {
  return data(packInt16(setType(make(), toInt("ItemDropClear")), self.itemDropId, "itemDropId"));
}
var Encode17 = {
  packInt16,
  setType,
  data,
  toBuffer: toBuffer79
};

// src/packet/Packet_ItemDropPosition.js
var Packet_ItemDropPosition_exports = {};
__export(Packet_ItemDropPosition_exports, {
  Decode: () => Decode18,
  Encode: () => Encode18,
  parse: () => parse83,
  toBuffer: () => toBuffer80
});
function parse83(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "itemDropId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "positionX");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "positionY");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        itemDropId: e._0,
        position: {
          x: e$1._0,
          y: e$2._0
        }
      }
    };
  } else {
    return e$2;
  }
}
var Decode18 = {
  readInt16,
  readSingle,
  parse: parse83
};
function toBuffer80(self) {
  return data(packSingle(packSingle(packInt16(setType(make(), toInt("ItemDropPosition")), self.itemDropId, "itemDropId"), self.position.x, "positionX"), self.position.y, "positionY"));
}
var Encode18 = {
  packInt16,
  packSingle,
  setType,
  data,
  toBuffer: toBuffer80
};

// src/packet/Packet_ItemForceIntoNearestChest.js
var Packet_ItemForceIntoNearestChest_exports = {};
__export(Packet_ItemForceIntoNearestChest_exports, {
  Decode: () => Decode19,
  Encode: () => Encode19,
  parse: () => parse84,
  toBuffer: () => toBuffer81
});
function parse84(payload, fromServer) {
  let reader = new packetreader_default(payload);
  if (fromServer) {
    let e = readInt32(reader, "blockedChestCount");
    if (e.TAG !== "Ok") {
      return e;
    }
    let count = e._0;
    let chestIds = [];
    let readChests = (_idx) => {
      while (true) {
        let idx = _idx;
        if (idx >= count) {
          return {
            TAG: "Ok",
            _0: void 0
          };
        }
        let e2 = readUInt16(reader, `blockedChest` + idx.toString());
        if (e2.TAG !== "Ok") {
          return e2;
        }
        chestIds.push(e2._0);
        _idx = idx + 1 | 0;
        continue;
      }
      ;
    };
    let e$1 = readChests(0);
    if (e$1.TAG === "Ok") {
      return {
        TAG: "Ok",
        _0: {
          TAG: "ServerBlockedChests",
          _0: {
            chestIds
          }
        }
      };
    } else {
      return e$1;
    }
  }
  let e$2 = readInt32(reader, "slotCount");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let count$1 = e$2._0;
  let slotIds = [];
  let readSlots = (_idx) => {
    while (true) {
      let idx = _idx;
      if (idx >= count$1) {
        return {
          TAG: "Ok",
          _0: void 0
        };
      }
      let e = readInt16(reader, `slot` + idx.toString());
      if (e.TAG !== "Ok") {
        return e;
      }
      slotIds.push(e._0);
      _idx = idx + 1 | 0;
      continue;
    }
    ;
  };
  let e$3 = readSlots(0);
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "smartStack");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        TAG: "ClientRequest",
        _0: {
          slotIds,
          smartStack: e$4._0 !== 0
        }
      }
    };
  } else {
    return e$4;
  }
}
var Decode19 = {
  readInt16,
  readUInt16,
  readInt32,
  readByte,
  parse: parse84
};
function packSlotIds(writer, slotIds) {
  let writer$1 = packInt32(writer, slotIds.length, "slotCount");
  slotIds.forEach((slotId, idx) => {
    packInt16(writer$1, slotId, `slot` + idx.toString());
  });
  return writer$1;
}
function packChestIds(writer, chestIds) {
  let writer$1 = packInt32(writer, chestIds.length, "blockedChestCount");
  chestIds.forEach((chestId, idx) => {
    packUInt16(writer$1, chestId, `blockedChest` + idx.toString());
  });
  return writer$1;
}
function toBuffer81(self) {
  let writer = setType(make(), toInt("ItemForceIntoNearestChest"));
  if (self.TAG !== "ClientRequest") {
    return data(packChestIds(writer, self._0.chestIds));
  }
  let match = self._0;
  return data(packByte(packSlotIds(writer, match.slotIds), match.smartStack ? 1 : 0, "smartStack"));
}
var Encode19 = {
  Writer: void 0,
  packInt16,
  packUInt16,
  packInt32,
  packByte,
  setType,
  data,
  packSlotIds,
  packChestIds,
  toBuffer: toBuffer81
};

// src/packet/Packet_LeashedEntityAnchorInsertItem.js
var Packet_LeashedEntityAnchorInsertItem_exports = {};
__export(Packet_LeashedEntityAnchorInsertItem_exports, {
  Decode: () => Decode20,
  Encode: () => Encode20,
  parse: () => parse85,
  toBuffer: () => toBuffer82
});
function parse85(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "itemType");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        itemType: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
var Decode20 = {
  readInt16,
  parse: parse85
};
function toBuffer82(self) {
  return data(packInt16(packInt16(packInt16(setType(make(), toInt("LeashedEntityAnchorInsertItem")), self.x, "x"), self.y, "y"), self.itemType, "itemType"));
}
var Encode20 = {
  packInt16,
  setType,
  data,
  toBuffer: toBuffer82
};

// src/packet/Packet_NpcHurtByDebuff.js
var Packet_NpcHurtByDebuff_exports = {};
__export(Packet_NpcHurtByDebuff_exports, {
  Decode: () => Decode21,
  Encode: () => Encode21,
  parse: () => parse86,
  toBuffer: () => toBuffer83
});
function parse86(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "debuffId");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        debuffId: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
var Decode21 = {
  readByte,
  readInt16,
  parse: parse86
};
function toBuffer83(self) {
  return data(packInt16(packByte(setType(make(), toInt("NpcHurtByDebuff")), self.npcId, "npcId"), self.debuffId, "debuffId"));
}
var Encode21 = {
  packByte,
  packInt16,
  setType,
  data,
  toBuffer: toBuffer83
};

// src/packet/Packet_Ping.js
var Packet_Ping_exports = {};
__export(Packet_Ping_exports, {
  Decode: () => Decode22,
  Encode: () => Encode22,
  parse: () => parse87,
  toBuffer: () => toBuffer84
});
function parse87(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}
var Decode22 = {
  parse: parse87
};
function toBuffer84(_self) {
  return data(setType(make(), toInt("Ping")));
}
var Encode22 = {
  setType,
  data,
  toBuffer: toBuffer84
};

// src/packet/Packet_PlayerItemUseSound.js
var Packet_PlayerItemUseSound_exports = {};
__export(Packet_PlayerItemUseSound_exports, {
  Decode: () => Decode23,
  Encode: () => Encode23,
  parse: () => parse88,
  toBuffer: () => toBuffer85
});
function parse88(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0
      }
    };
  } else {
    return e;
  }
}
var Decode23 = {
  readByte,
  parse: parse88
};
function toBuffer85(self) {
  return data(packByte(setType(make(), toInt("PlayerItemUseSound")), self.playerId, "playerId"));
}
var Encode23 = {
  packByte,
  setType,
  data,
  toBuffer: toBuffer85
};

// src/packet/Packet_PlayerLuckFactorsUpdate.js
var Packet_PlayerLuckFactorsUpdate_exports = {};
__export(Packet_PlayerLuckFactorsUpdate_exports, {
  Decode: () => Decode24,
  Encode: () => Encode24,
  parse: () => parse89,
  toBuffer: () => toBuffer86
});
function parse89(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "ladyBugLuckTimeLeft");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "torchLuck");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "luckPotion");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "hasGardenGnomeNearby");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let hasGardenGnomeNearby = e$4._0 === 1;
  let e$5 = readByte(reader, "brokenMirrorBadLuck");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let brokenMirrorBadLuck = e$5._0 === 1;
  let e$6 = readSingle(reader, "equipmentBasedLuckBonus");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readSingle(reader, "coinLuck");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$8 = readByte(reader, "kiteLuckLevel");
  if (e$8.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        ladyBugLuckTimeLeft: e$1._0,
        torchLuck: e$2._0,
        luckPotion: e$3._0,
        hasGardenGnomeNearby,
        brokenMirrorBadLuck,
        equipmentBasedLuckBonus: e$6._0,
        coinLuck: e$7._0,
        kiteLuckLevel: e$8._0
      }
    };
  } else {
    return e$8;
  }
}
var Decode24 = {
  readInt32,
  readByte,
  readSingle,
  parse: parse89
};
function toBuffer86(self) {
  return data(packByte(packSingle(packSingle(packByte(packByte(packByte(packSingle(packInt32(packByte(setType(make(), toInt("PlayerLuckFactorsUpdate")), self.playerId, "playerId"), self.ladyBugLuckTimeLeft, "ladyBugLuckTimeLeft"), self.torchLuck, "torchLuck"), self.luckPotion, "luckPotion"), self.hasGardenGnomeNearby ? 1 : 0, "hasGardenGnomeNearby"), self.brokenMirrorBadLuck ? 1 : 0, "brokenMirrorBadLuck"), self.equipmentBasedLuckBonus, "equipmentBasedLuckBonus"), self.coinLuck, "coinLuck"), self.kiteLuckLevel, "kiteLuckLevel"));
}
var Encode24 = {
  packByte,
  packInt32,
  packSingle,
  setType,
  data,
  toBuffer: toBuffer86
};

// src/packet/Packet_PlayerSpectate.js
var Packet_PlayerSpectate_exports = {};
__export(Packet_PlayerSpectate_exports, {
  Decode: () => Decode25,
  Encode: () => Encode25,
  parse: () => parse90,
  toBuffer: () => toBuffer87
});
function parse90(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "targetPlayerId");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        targetPlayerId: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
var Decode25 = {
  readByte,
  readInt16,
  parse: parse90
};
function toBuffer87(self) {
  return data(packInt16(packByte(setType(make(), toInt("PlayerSpectate")), self.playerId, "playerId"), self.targetPlayerId, "targetPlayerId"));
}
var Encode25 = {
  packByte,
  packInt16,
  setType,
  data,
  toBuffer: toBuffer87
};

// src/packet/Packet_PlayerTeamSwapSpawn.js
var Packet_PlayerTeamSwapSpawn_exports = {};
__export(Packet_PlayerTeamSwapSpawn_exports, {
  Decode: () => Decode26,
  Encode: () => Encode26,
  parse: () => parse91,
  toBuffer: () => toBuffer88
});
function parse91(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0
      }
    };
  } else {
    return e;
  }
}
var Decode26 = {
  readByte,
  parse: parse91
};
function toBuffer88(self) {
  return data(packByte(setType(make(), toInt("PlayerTeamSwapSpawn")), self.playerId, "playerId"));
}
var Encode26 = {
  packByte,
  setType,
  data,
  toBuffer: toBuffer88
};

// src/packet/Packet_PlayerTeamUpdate.js
var Packet_PlayerTeamUpdate_exports = {};
__export(Packet_PlayerTeamUpdate_exports, {
  Decode: () => Decode27,
  Encode: () => Encode27,
  parse: () => parse92,
  toBuffer: () => toBuffer89
});
function parse92(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "team");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        team: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
var Decode27 = {
  readByte,
  parse: parse92
};
function toBuffer89(self) {
  return data(packByte(packByte(setType(make(), toInt("PlayerTeamUpdate")), self.playerId, "playerId"), self.team, "team"));
}
var Encode27 = {
  packByte,
  setType,
  data,
  toBuffer: toBuffer89
};

// src/packet/Packet_SectionRequest.js
var Packet_SectionRequest_exports = {};
__export(Packet_SectionRequest_exports, {
  Decode: () => Decode28,
  Encode: () => Encode28,
  parse: () => parse93,
  toBuffer: () => toBuffer90
});
function parse93(payload) {
  let reader = new packetreader_default(payload);
  let e = readUInt16(reader, "sectionX");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "sectionY");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        sectionX: e._0,
        sectionY: e$1._0
      }
    };
  } else {
    return e$1;
  }
}
var Decode28 = {
  readUInt16,
  parse: parse93
};
function toBuffer90(self) {
  return data(packUInt16(packUInt16(setType(make(), toInt("SectionRequest")), self.sectionX, "sectionX"), self.sectionY, "sectionY"));
}
var Encode28 = {
  packUInt16,
  setType,
  data,
  toBuffer: toBuffer90
};

// src/packetv1449/PacketV1449_PlayerSlotSet.js
var PacketV1449_PlayerSlotSet_exports = {};
__export(PacketV1449_PlayerSlotSet_exports, {
  parse: () => parse94,
  toBuffer: () => toBuffer91
});
function parse94(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerSlotId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "serverWantsToRunCheckBytesInClientLoopThread");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerSlotId: e._0,
        serverWantsToRunCheckBytesInClientLoopThread: e$1._0 === 1
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer91(self) {
  return data(packByte(packByte(setType(make(), toInt("PlayerSlotSet")), self.playerSlotId, "playerSlotId"), self.serverWantsToRunCheckBytesInClientLoopThread ? 1 : 0, "serverWantsToRunCheckBytesInClientLoopThread"));
}

// src/packet/Packet_PlayerUpdate.js
var Packet_PlayerUpdate_exports = {};
__export(Packet_PlayerUpdate_exports, {
  Decode: () => Decode29,
  Encode: () => Encode29,
  parse: () => parse95,
  toBuffer: () => toBuffer92
});
function parse95(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "controlFlags");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let controlFlags = fromByte(e$1._0);
  let e$2 = readByte(reader, "miscFlags1");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let miscFlags1 = fromByte(e$2._0);
  let e$3 = readByte(reader, "miscFlags2");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let miscFlags2 = fromByte(e$3._0);
  let e$4 = readByte(reader, "miscFlags3");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let miscFlags3 = fromByte(e$4._0);
  let control_isHoldingUp = flag1(controlFlags);
  let control_isHoldingDown = flag2(controlFlags);
  let control_isHoldingLeft = flag3(controlFlags);
  let control_isHoldingRight = flag4(controlFlags);
  let control_isHoldingJump = flag5(controlFlags);
  let control_isHoldingItemUse = flag6(controlFlags);
  let control = {
    isHoldingUp: control_isHoldingUp,
    isHoldingDown: control_isHoldingDown,
    isHoldingLeft: control_isHoldingLeft,
    isHoldingRight: control_isHoldingRight,
    isHoldingJump: control_isHoldingJump,
    isHoldingItemUse: control_isHoldingItemUse
  };
  let direction = flag7(controlFlags) ? "Right" : "Left";
  let pulleyDirection = flag1(miscFlags1) ? flag2(miscFlags1) ? "Two" : "One" : void 0;
  let vortexStealthActive = flag4(miscFlags1);
  let gravityDirection = flag5(miscFlags1) ? "Normal" : "Inverted";
  let shieldRaised = flag6(miscFlags1);
  let ghost = flag7(miscFlags1);
  let e$5 = readByte(reader, "selectedItem");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readSingle(reader, "positionX");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readSingle(reader, "positionY");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let position_x = e$6._0;
  let position_y = e$7._0;
  let position = {
    x: position_x,
    y: position_y
  };
  let e$8;
  if (flag3(miscFlags1)) {
    let e$9 = readSingle(reader, "velocityX");
    if (e$9.TAG === "Ok") {
      let e$10 = readSingle(reader, "velocityY");
      e$8 = e$10.TAG === "Ok" ? {
        TAG: "Ok",
        _0: {
          x: e$9._0,
          y: e$10._0
        }
      } : e$10;
    } else {
      e$8 = e$9;
    }
  } else {
    e$8 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$8.TAG !== "Ok") {
    return e$8;
  }
  let e$11;
  if (flag8(miscFlags1)) {
    let e$12 = readUInt16(reader, "mountType");
    e$11 = e$12.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$12._0
    } : e$12;
  } else {
    e$11 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$11.TAG !== "Ok") {
    return e$11;
  }
  let e$13;
  if (flag7(miscFlags2)) {
    let e$14 = readSingle(reader, "potionOfReturnOrigX");
    if (e$14.TAG === "Ok") {
      let e$15 = readSingle(reader, "potionOfReturnOrigY");
      if (e$15.TAG === "Ok") {
        let e$16 = readSingle(reader, "potionOfReturnHomeX");
        if (e$16.TAG === "Ok") {
          let e$17 = readSingle(reader, "potionOfReturnHomeY");
          e$13 = e$17.TAG === "Ok" ? {
            TAG: "Ok",
            _0: {
              originalUsePosition: {
                x: e$14._0,
                y: e$15._0
              },
              homePosition: {
                x: e$16._0,
                y: e$17._0
              }
            }
          } : e$17;
        } else {
          e$13 = e$16;
        }
      } else {
        e$13 = e$15;
      }
    } else {
      e$13 = e$14;
    }
  } else {
    e$13 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$13.TAG !== "Ok") {
    return e$13;
  }
  let tryKeepingHoveringUp = flag1(miscFlags2);
  let isVoidVaultEnabled = flag2(miscFlags2);
  let isSitting = flag3(miscFlags2);
  let hasFinishedAnyDd2Event = flag4(miscFlags2);
  let isPettingAnimal = flag5(miscFlags2);
  let isTheAnimalBeingPetSmall = flag6(miscFlags2);
  let tryKeepingHoveringDown = flag8(miscFlags2);
  let isSleeping = flag1(miscFlags3);
  let autoReuseAllWeapons = flag2(miscFlags3);
  let controlDownHold = flag3(miscFlags3);
  let isOperatingAnotherEntity = flag4(miscFlags3);
  let controlUseTile = flag5(miscFlags3);
  let e$18;
  if (flag6(miscFlags3)) {
    let e$19 = readSingle(reader, "netCameraTargetX");
    if (e$19.TAG === "Ok") {
      let e$20 = readSingle(reader, "netCameraTargetY");
      e$18 = e$20.TAG === "Ok" ? {
        TAG: "Ok",
        _0: {
          x: e$19._0,
          y: e$20._0
        }
      } : e$20;
    } else {
      e$18 = e$19;
    }
  } else {
    e$18 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$18.TAG !== "Ok") {
    return e$18;
  }
  let lastItemUseAttemptSuccess = flag7(miscFlags3);
  return {
    TAG: "Ok",
    _0: {
      playerId: e._0,
      control,
      direction,
      pulleyDirection,
      vortexStealthActive,
      gravityDirection,
      shieldRaised,
      ghost,
      selectedItem: e$5._0,
      position,
      velocity: e$8._0,
      mountType: e$11._0,
      potionOfReturn: e$13._0,
      tryKeepingHoveringUp,
      isVoidVaultEnabled,
      isSitting,
      hasFinishedAnyDd2Event,
      isPettingAnimal,
      isTheAnimalBeingPetSmall,
      tryKeepingHoveringDown,
      isSleeping,
      autoReuseAllWeapons,
      controlDownHold,
      isOperatingAnotherEntity,
      controlUseTile,
      netCameraTarget: e$18._0,
      lastItemUseAttemptSuccess
    }
  };
}
var Decode29 = {
  readByte,
  readSingle,
  readUInt16,
  parse: parse95
};
function packControlFlags(writer, control, direction) {
  let tmp;
  tmp = direction !== "Left";
  return packByte(writer, toByte(fromFlags(control.isHoldingUp, control.isHoldingDown, control.isHoldingLeft, control.isHoldingRight, control.isHoldingJump, control.isHoldingItemUse, tmp, false)), "controlFlags");
}
function packMiscFlags1(writer, pulleyDirection, velocity, vortexStealthActive, gravityDirection, shieldRaised, ghost, mountType) {
  let tmp;
  tmp = pulleyDirection !== void 0 ? pulleyDirection !== "One" : false;
  let tmp$1;
  tmp$1 = gravityDirection === "Normal";
  return packByte(writer, toByte(fromFlags(pulleyDirection !== void 0, tmp, velocity !== void 0, vortexStealthActive, tmp$1, shieldRaised, ghost, isSome(mountType))), "miscFlags1");
}
function packMiscFlags2(writer, tryKeepingHoveringUp, isVoidVaultEnabled, isSitting, hasFinishedAnyDd2Event, isPettingAnimal, isTheAnimalBeingPetSmall, potionOfReturn, tryKeepingHoveringDown) {
  return packByte(writer, toByte(fromFlags(tryKeepingHoveringUp, isVoidVaultEnabled, isSitting, hasFinishedAnyDd2Event, isPettingAnimal, isTheAnimalBeingPetSmall, potionOfReturn !== void 0, tryKeepingHoveringDown)), "miscFlags2");
}
function packMiscFlags3(writer, isSleeping, autoReuseAllWeapons, controlDownHold, isOperatingAnotherEntity, controlUseTile, netCameraTarget, lastItemUseAttemptSuccess) {
  return packByte(writer, toByte(fromFlags(isSleeping, autoReuseAllWeapons, controlDownHold, isOperatingAnotherEntity, controlUseTile, isSome(netCameraTarget), lastItemUseAttemptSuccess, false)), "miscFlags3");
}
function packVelocity(writer, velocity) {
  if (velocity !== void 0) {
    return packSingle(packSingle(writer, velocity.x, "velocityX"), velocity.y, "velocityY");
  } else {
    return writer;
  }
}
function packMountType(writer, mountType) {
  if (mountType !== void 0) {
    return packUInt16(writer, mountType, "mountType");
  } else {
    return writer;
  }
}
function packPotionOfReturn(writer, potionOfReturn) {
  if (potionOfReturn !== void 0) {
    return packSingle(packSingle(packSingle(packSingle(writer, potionOfReturn.originalUsePosition.x, "potionOfReturnOrigX"), potionOfReturn.originalUsePosition.y, "potionOfReturnOrigY"), potionOfReturn.homePosition.x, "potionOfReturnHomeX"), potionOfReturn.homePosition.y, "potionOfReturnHomeY");
  } else {
    return writer;
  }
}
function packNetCameraTarget(writer, netCameraTarget) {
  if (netCameraTarget !== void 0) {
    return packSingle(packSingle(writer, netCameraTarget.x, "netCameraTargetX"), netCameraTarget.y, "netCameraTargetY");
  } else {
    return writer;
  }
}
function toBuffer92(self) {
  return data(packNetCameraTarget(packPotionOfReturn(packMountType(packVelocity(packSingle(packSingle(packByte(packMiscFlags3(packMiscFlags2(packMiscFlags1(packControlFlags(packByte(setType(make(), toInt("PlayerUpdate")), self.playerId, "playerId"), self.control, self.direction), self.pulleyDirection, self.velocity, self.vortexStealthActive, self.gravityDirection, self.shieldRaised, self.ghost, self.mountType), self.tryKeepingHoveringUp, self.isVoidVaultEnabled, self.isSitting, self.hasFinishedAnyDd2Event, self.isPettingAnimal, self.isTheAnimalBeingPetSmall, self.potionOfReturn, self.tryKeepingHoveringDown), self.isSleeping, self.autoReuseAllWeapons, self.controlDownHold, self.isOperatingAnotherEntity, self.controlUseTile, self.netCameraTarget, self.lastItemUseAttemptSuccess), self.selectedItem, "selectedItem"), self.position.x, "positionX"), self.position.y, "positionY"), self.velocity), self.mountType), self.potionOfReturn), self.netCameraTarget));
}
var Encode29 = {
  packByte,
  packSingle,
  packUInt16,
  setType,
  data,
  packControlFlags,
  packMiscFlags1,
  packMiscFlags2,
  packMiscFlags3,
  packVelocity,
  packMountType,
  packPotionOfReturn,
  packNetCameraTarget,
  toBuffer: toBuffer92
};

// src/packet/Packet_PlayerInfo.js
var Packet_PlayerInfo_exports = {};
__export(Packet_PlayerInfo_exports, {
  Color: () => Color,
  Decode: () => Decode30,
  Encode: () => Encode30,
  parse: () => parse96,
  toBuffer: () => toBuffer93
});
function getDifficulty(difficultyFlags) {
  if (flag2(difficultyFlags)) {
    return "Hardcore";
  } else if (flag1(difficultyFlags)) {
    return "Mediumcore";
  } else {
    return "Softcore";
  }
}
function parse96(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "skinVariant");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "voiceVariant");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "voicePitchOffset");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "hair");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readString(reader, "name");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "hairDye");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readByte(reader, "hideVisuals");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$8 = readByte(reader, "hideVisuals2");
  if (e$8.TAG !== "Ok") {
    return e$8;
  }
  let e$9 = readByte(reader, "hideMisc");
  if (e$9.TAG !== "Ok") {
    return e$9;
  }
  let e$10 = readColor(reader, "hairColor");
  if (e$10.TAG !== "Ok") {
    return e$10;
  }
  let e$11 = readColor(reader, "skinColor");
  if (e$11.TAG !== "Ok") {
    return e$11;
  }
  let e$12 = readColor(reader, "eyeColor");
  if (e$12.TAG !== "Ok") {
    return e$12;
  }
  let e$13 = readColor(reader, "shirtColor");
  if (e$13.TAG !== "Ok") {
    return e$13;
  }
  let e$14 = readColor(reader, "underShirtColor");
  if (e$14.TAG !== "Ok") {
    return e$14;
  }
  let e$15 = readColor(reader, "pantsColor");
  if (e$15.TAG !== "Ok") {
    return e$15;
  }
  let e$16 = readColor(reader, "shoeColor");
  if (e$16.TAG !== "Ok") {
    return e$16;
  }
  let e$17 = readByte(reader, "difficultyFlags");
  if (e$17.TAG !== "Ok") {
    return e$17;
  }
  let difficultyFlags = fromByte(e$17._0);
  let e$18 = readByte(reader, "torchFlags");
  if (e$18.TAG !== "Ok") {
    return e$18;
  }
  let torchFlags = fromByte(e$18._0);
  let difficulty = getDifficulty(difficultyFlags);
  let extraAccessory = flag3(difficultyFlags);
  let mode = flag4(difficultyFlags) ? "Journey" : "Classic";
  let usingBiomeTorches = flag1(torchFlags);
  let happyFunTorchTime = flag2(torchFlags);
  let unlockedBiomeTorches = flag3(torchFlags);
  let unlockedSuperCart = flag4(torchFlags);
  let enabledSuperCart = flag5(torchFlags);
  let e$19 = readByte(reader, "usedFlags");
  let e$20;
  e$20 = e$19.TAG === "Ok" ? {
    TAG: "Ok",
    _0: fromByte(e$19._0)
  } : e$19;
  if (e$20.TAG !== "Ok") {
    return e$20;
  }
  let usedFlags = e$20._0;
  let usedAegisCrystal = flag1(usedFlags);
  let usedAegisFruit = flag2(usedFlags);
  let usedArcaneCrystal = flag3(usedFlags);
  let usedGalaxyPearl = flag4(usedFlags);
  let usedGummyWorm = flag5(usedFlags);
  let usedAmbrosia = flag6(usedFlags);
  let ateArtisanBread = flag7(usedFlags);
  return {
    TAG: "Ok",
    _0: {
      playerId: e._0,
      skinVariant: e$1._0,
      voiceVariant: e$2._0,
      voicePitchOffset: e$3._0,
      hair: e$4._0,
      name: e$5._0,
      hairDye: e$6._0,
      hideVisuals: e$7._0,
      hideVisuals2: e$8._0,
      hideMisc: e$9._0,
      hairColor: e$10._0,
      skinColor: e$11._0,
      eyeColor: e$12._0,
      shirtColor: e$13._0,
      underShirtColor: e$14._0,
      pantsColor: e$15._0,
      shoeColor: e$16._0,
      difficulty,
      mode,
      extraAccessory,
      usingBiomeTorches,
      unlockedBiomeTorches,
      happyFunTorchTime,
      unlockedSuperCart,
      enabledSuperCart,
      usedAegisCrystal,
      usedAegisFruit,
      usedArcaneCrystal,
      usedGalaxyPearl,
      usedGummyWorm,
      usedAmbrosia,
      ateArtisanBread
    }
  };
}
var Decode30 = {
  readSingle,
  readByte,
  readString,
  readColor,
  getDifficulty,
  parse: parse96
};
function packDifficultyFlags(writer, difficulty, extraAccessory, mode) {
  let byte = 0;
  let tmp;
  switch (difficulty) {
    case "Softcore":
      tmp = 0;
      break;
    case "Mediumcore":
      tmp = 1;
      break;
    case "Hardcore":
      tmp = 2;
      break;
  }
  byte = byte | tmp;
  byte = byte | (extraAccessory ? 4 : 0);
  byte = byte | (mode === "Journey" ? 8 : 0);
  return packByte(writer, byte, "difficultyFlags");
}
function packTorchFlags(writer, usingBiomeTorches, happyFunTorchTime, unlockedBiomeTorches, unlockedSuperCart, enabledSuperCart) {
  let byte = 0;
  byte = byte | (usingBiomeTorches ? 1 : 0);
  byte = byte | (happyFunTorchTime ? 2 : 0);
  byte = byte | (unlockedBiomeTorches ? 4 : 0);
  byte = byte | (unlockedSuperCart ? 8 : 0);
  byte = byte | (enabledSuperCart ? 16 : 0);
  return packByte(writer, byte, "torchFlags");
}
function packUsedFlags(writer, usedAegisCrystal, usedAegisFruit, usedArcaneCrystal, usedGalaxyPearl, usedGummyWorm, usedAmbrosia, ateArtisanBread) {
  let byte = 0;
  byte = byte | (usedAegisCrystal ? 1 : 0);
  byte = byte | (usedAegisFruit ? 2 : 0);
  byte = byte | (usedArcaneCrystal ? 4 : 0);
  byte = byte | (usedGalaxyPearl ? 8 : 0);
  byte = byte | (usedGummyWorm ? 16 : 0);
  byte = byte | (usedAmbrosia ? 32 : 0);
  byte = byte | (ateArtisanBread ? 64 : 0);
  return packByte(writer, byte, "usedFlags");
}
function toBuffer93(self) {
  return data(packUsedFlags(packTorchFlags(packDifficultyFlags(packColor(packColor(packColor(packColor(packColor(packColor(packColor(packByte(packByte(packByte(packByte(packString(packByte(packSingle(packByte(packByte(packByte(setType(make(), toInt("PlayerInfo")), self.playerId, "playerId"), self.skinVariant, "skinVariant"), self.voiceVariant, "voiceVariant"), self.voicePitchOffset, "voicePitchOffset"), self.hair, "hair"), self.name, "name"), self.hairDye, "hairDye"), self.hideVisuals, "hideVisuals"), self.hideVisuals2, "hideVisuals2"), self.hideMisc, "hideMisc"), self.hairColor, "hairColor"), self.skinColor, "skinColor"), self.eyeColor, "eyeColor"), self.shirtColor, "shirtColor"), self.underShirtColor, "underShirtColor"), self.pantsColor, "pantsColor"), self.shoeColor, "shoeColor"), self.difficulty, self.extraAccessory, self.mode), self.usingBiomeTorches, self.happyFunTorchTime, self.unlockedBiomeTorches, self.unlockedSuperCart, self.enabledSuperCart), self.usedAegisCrystal, self.usedAegisFruit, self.usedArcaneCrystal, self.usedGalaxyPearl, self.usedGummyWorm, self.usedAmbrosia, self.ateArtisanBread));
}
var Encode30 = {
  packSingle,
  packByte,
  packString,
  packColor,
  setType,
  data,
  packDifficultyFlags,
  packTorchFlags,
  packUsedFlags,
  toBuffer: toBuffer93
};
var Color;

// src/packet/Packet_PlayerSpawn.js
var Packet_PlayerSpawn_exports = {};
__export(Packet_PlayerSpawn_exports, {
  Decode: () => Decode31,
  Encode: () => Encode31,
  parse: () => parse97,
  toBuffer: () => toBuffer94
});
function parse97(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt32(reader, "timeRemaining");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "numberOfDeathsPve");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readInt16(reader, "numberOfDeathsPvp");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "team");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readByte(reader, "context");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let rawContext = e$7._0;
  let context;
  switch (rawContext) {
    case 0:
      context = "ReviveFromDeath";
      break;
    case 1:
      context = "SpawningIntoWorld";
      break;
    case 2:
      context = "RecallFromItem";
      break;
    case 3:
      context = "TeamSwap";
      break;
    default:
      context = {
        TAG: "Unknown",
        _0: rawContext
      };
  }
  return {
    TAG: "Ok",
    _0: {
      playerId: e._0,
      x: e$1._0,
      y: e$2._0,
      timeRemaining: e$3._0,
      numberOfDeathsPve: e$4._0,
      numberOfDeathsPvp: e$5._0,
      team: e$6._0,
      context
    }
  };
}
var Decode31 = {
  readByte,
  readInt16,
  readInt32,
  parse: parse97
};
function toBuffer94(self) {
  let n = self.context;
  let tmp;
  if (typeof n !== "object") {
    switch (n) {
      case "ReviveFromDeath":
        tmp = 0;
        break;
      case "SpawningIntoWorld":
        tmp = 1;
        break;
      case "RecallFromItem":
        tmp = 2;
        break;
      case "TeamSwap":
        tmp = 3;
        break;
    }
  } else {
    tmp = n._0;
  }
  return data(packByte(packByte(packInt16(packInt16(packInt32(packInt16(packInt16(packByte(setType(make(), toInt("PlayerSpawn")), self.playerId, "playerId"), self.x, "x"), self.y, "y"), self.timeRemaining, "timeRemaining"), self.numberOfDeathsPve, "numberOfDeathsPve"), self.numberOfDeathsPvp, "numberOfDeathsPvp"), self.team, "team"), tmp, "context"));
}
var Encode31 = {
  toBuffer: toBuffer94
};

// src/packet/Packet_PlayerInventorySlot.js
var Packet_PlayerInventorySlot_exports = {};
__export(Packet_PlayerInventorySlot_exports, {
  Decode: () => Decode32,
  Encode: () => Encode32,
  parse: () => parse98,
  toBuffer: () => toBuffer95
});
function parse98(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "slot");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "stack");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "prefix");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "itemType");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readByte(reader, "flags");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let flags = fromByte(e$5._0);
  return {
    TAG: "Ok",
    _0: {
      playerId: e._0,
      slot: e$1._0,
      stack: e$2._0,
      prefix: e$3._0,
      itemType: e$4._0,
      favorited: flag1(flags),
      blocked: flag2(flags)
    }
  };
}
var Decode32 = {
  parse: parse98
};
function toBuffer95(self) {
  return data(packByte(packInt16(packByte(packInt16(packInt16(packByte(setType(make(), toInt("PlayerInventorySlot")), self.playerId, "playerId"), self.slot, "slot"), self.stack, "stack"), self.prefix, "prefix"), self.itemType, "itemType"), toByte(fromFlags(self.favorited, self.blocked, false, false, false, false, false, false)), "flags"));
}
var Encode32 = {
  packInt16,
  packByte,
  setType,
  data,
  toBuffer: toBuffer95
};

// src/packetv1449/PacketV1449_PlayerHealth.js
var PacketV1449_PlayerHealth_exports = {};
__export(PacketV1449_PlayerHealth_exports, {
  parse: () => parse99,
  toBuffer: () => toBuffer96
});
function parse99(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "health");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "maxHealth");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        health: e$1._0,
        maxHealth: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
function toBuffer96(self) {
  return data(packInt16(packInt16(packByte(setType(make(), toInt("PlayerHealth")), self.playerId, "playerId"), self.health, "health"), self.maxHealth, "maxHealth"));
}

// src/packetv1449/PacketV1449_ClientUuid.js
var PacketV1449_ClientUuid_exports = {};
__export(PacketV1449_ClientUuid_exports, {
  parse: () => parse100,
  toBuffer: () => toBuffer97
});
function parse100(payload) {
  let reader = new packetreader_default(payload);
  let e = readString(reader, "uuid");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        uuid: e._0
      }
    };
  } else {
    return e;
  }
}
function toBuffer97(self) {
  return data(packString(setType(make(), toInt("ClientUuid")), self.uuid, "uuid"));
}

// src/packetv1449/PacketV1449_ProjectileSync.js
var PacketV1449_ProjectileSync_exports = {};
__export(PacketV1449_ProjectileSync_exports, {
  parse: () => parse101,
  toBuffer: () => toBuffer98
});
function parse101(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "projectileId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "vx");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readSingle(reader, "vy");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readByte(reader, "owner");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readInt16(reader, "projectileType");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readByte(reader, "flags");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let flags = fromByte(e$7._0);
  let e$8;
  if (flag3(flags)) {
    let e$9 = readByte(reader, "flags2");
    e$8 = e$9.TAG === "Ok" ? {
      TAG: "Ok",
      _0: some(fromByte(e$9._0))
    } : e$9;
  } else {
    e$8 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$8.TAG !== "Ok") {
    return e$8;
  }
  let flags2 = e$8._0;
  let e$10;
  if (flag1(flags)) {
    let e$11 = readSingle(reader, "ai0");
    e$10 = e$11.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$11._0
    } : e$11;
  } else {
    e$10 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$10.TAG !== "Ok") {
    return e$10;
  }
  let e$12;
  if (flag2(flags)) {
    let e$13 = readSingle(reader, "ai1");
    e$12 = e$13.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$13._0
    } : e$13;
  } else {
    e$12 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$12.TAG !== "Ok") {
    return e$12;
  }
  let e$14;
  if (flag4(flags)) {
    let e$15 = readUInt16(reader, "bannerIdToRespondTo");
    e$14 = e$15.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$15._0
    } : e$15;
  } else {
    e$14 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$14.TAG !== "Ok") {
    return e$14;
  }
  let e$16;
  if (flag5(flags)) {
    let e$17 = readInt16(reader, "damage");
    e$16 = e$17.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$17._0
    } : e$17;
  } else {
    e$16 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$16.TAG !== "Ok") {
    return e$16;
  }
  let e$18;
  if (flag6(flags)) {
    let e$19 = readSingle(reader, "knockback");
    e$18 = e$19.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$19._0
    } : e$19;
  } else {
    e$18 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$18.TAG !== "Ok") {
    return e$18;
  }
  let e$20;
  if (flag7(flags)) {
    let e$21 = readInt16(reader, "originalDamage");
    e$20 = e$21.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$21._0
    } : e$21;
  } else {
    e$20 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$20.TAG !== "Ok") {
    return e$20;
  }
  let e$22;
  if (flag8(flags)) {
    let e$23 = readInt16(reader, "projectileUuid");
    e$22 = e$23.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$23._0
    } : e$23;
  } else {
    e$22 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$22.TAG !== "Ok") {
    return e$22;
  }
  let e$24;
  if (flags2 !== void 0 && flag1(valFromOption(flags2))) {
    let e$25 = readSingle(reader, "ai2");
    e$24 = e$25.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$25._0
    } : e$25;
  } else {
    e$24 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$24.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        projectileId: e._0,
        x: e$1._0,
        y: e$2._0,
        vx: e$3._0,
        vy: e$4._0,
        owner: e$5._0,
        projectileType: e$6._0,
        ai: [
          e$10._0,
          e$12._0,
          e$24._0
        ],
        bannerIdToRespondTo: e$14._0,
        damage: e$16._0,
        knockback: e$18._0,
        originalDamage: e$20._0,
        projectileUuid: e$22._0
      }
    };
  } else {
    return e$24;
  }
}
function packOptionalData(writer, self) {
  let match = self.ai;
  let ai2 = match[2];
  let ai1 = match[1];
  let ai0 = match[0];
  let bitFlags2 = fromFlags(isSome(ai2), false, false, false, false, false, false, false);
  let bannerIdToRespondTo = self.bannerIdToRespondTo;
  let bitFlags = fromFlags(isSome(ai0), isSome(ai1), toByte(bitFlags2) !== 0, bannerIdToRespondTo !== void 0 ? bannerIdToRespondTo !== 0 : false, isSome(self.damage), isSome(self.knockback), isSome(self.originalDamage), isSome(self.projectileUuid));
  packByte(writer, toByte(bitFlags), "flags");
  if (flag3(bitFlags)) {
    packByte(writer, toByte(bitFlags2), "flags2");
  }
  if (flag1(bitFlags)) {
    packSingle(writer, ai0, "ai0");
  }
  if (flag2(bitFlags)) {
    packSingle(writer, ai1, "ai1");
  }
  if (flag4(bitFlags)) {
    packUInt16(writer, self.bannerIdToRespondTo, "bannerIdToRespondTo");
  }
  if (flag5(bitFlags)) {
    packInt16(writer, self.damage, "damage");
  }
  if (flag6(bitFlags)) {
    packSingle(writer, self.knockback, "knockback");
  }
  if (flag7(bitFlags)) {
    packInt16(writer, self.originalDamage, "originalDamage");
  }
  if (flag8(bitFlags)) {
    packInt16(writer, self.projectileUuid, "projectileUuid");
  }
  if (flag1(bitFlags2)) {
    packSingle(writer, ai2, "ai2");
  }
  return writer;
}
function toBuffer98(self) {
  return data(packOptionalData(packInt16(packByte(packSingle(packSingle(packSingle(packSingle(packInt16(setType(make(), toInt("ProjectileSync")), self.projectileId, "projectileId"), self.x, "x"), self.y, "y"), self.vx, "vx"), self.vy, "vy"), self.owner, "owner"), self.projectileType, "projectileType"), self));
}

// src/packetv1449/PacketV1449_PlayerDamage.js
var PacketV1449_PlayerDamage_exports = {};
__export(PacketV1449_PlayerDamage_exports, {
  parse: () => parse102,
  toBuffer: () => toBuffer99
});
function readDamageFlags(reader) {
  let e = readByte(reader, "damageFlags");
  if (e.TAG !== "Ok") {
    return e;
  }
  let flags = fromByte(e._0);
  return {
    TAG: "Ok",
    _0: {
      critical: flag1(flags),
      pvp: flag2(flags)
    }
  };
}
function parse102(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "target");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readDeathReason(reader);
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "damage");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "hitDirection");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readDamageFlags(reader);
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let damageFlags = e$4._0;
  let e$5 = readSByte(reader, "cooldownCounter");
  if (e$5.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        target: e._0,
        deathReason: e$1._0,
        damage: e$2._0,
        hitDirection: e$3._0,
        critical: damageFlags.critical,
        pvp: damageFlags.pvp,
        cooldownCounter: e$5._0
      }
    };
  } else {
    return e$5;
  }
}
function toBuffer99(self) {
  let damageFlags = (self2) => toByte(fromFlags(self2.critical, self2.pvp, false, false, false, false, false, false));
  return data(packSByte(packByte(packByte(packInt16(packDeathReason(packByte(setType(make(), toInt("PlayerDamage")), self.target, "target"), self.deathReason), self.damage, "damage"), self.hitDirection, "hitDirection"), damageFlags(self), "damageFlags"), self.cooldownCounter, "cooldownCounter"));
}

// src/packet/Packet_WorldInfo.js
var Packet_WorldInfo_exports = {};
__export(Packet_WorldInfo_exports, {
  Decode: () => Decode33,
  Encode: () => Encode33,
  parse: () => parse103,
  toBuffer: () => toBuffer100
});
function readEventInfo(reader) {
  let e = readByte(reader, "eventInfo1");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "eventInfo2");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "eventInfo3");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "eventInfo4");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "eventInfo5");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readByte(reader, "eventInfo6");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "eventInfo7");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readByte(reader, "eventInfo8");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$8 = readByte(reader, "eventInfo9");
  if (e$8.TAG !== "Ok") {
    return e$8;
  }
  let e$9 = readByte(reader, "eventInfo10");
  if (e$9.TAG !== "Ok") {
    return e$9;
  }
  let eventInfo1 = fromByte(e._0);
  let eventInfo2 = fromByte(e$1._0);
  let eventInfo3 = fromByte(e$2._0);
  let eventInfo4 = fromByte(e$3._0);
  let eventInfo5 = fromByte(e$4._0);
  let eventInfo6 = fromByte(e$5._0);
  let eventInfo7 = fromByte(e$6._0);
  let eventInfo8 = fromByte(e$7._0);
  let eventInfo9 = fromByte(e$8._0);
  let eventInfo10 = fromByte(e$9._0);
  let shadowOrbSmashed = flag1(eventInfo1);
  let killedBoss1 = flag2(eventInfo1);
  let killedBoss2 = flag3(eventInfo1);
  let killedBoss3 = flag4(eventInfo1);
  let hardMode = flag5(eventInfo1);
  let killedClown = flag6(eventInfo1);
  let serverSidedCharacters = flag7(eventInfo1);
  let killedPlantBoss = flag8(eventInfo1);
  let killedMechBoss = flag1(eventInfo2);
  let killedMechBoss2 = flag2(eventInfo2);
  let killedMechBoss3 = flag3(eventInfo2);
  let killedAnyMechBoss = flag4(eventInfo2);
  let cloudBg = flag5(eventInfo2);
  let crimson = flag6(eventInfo2);
  let pumpkinMoon = flag7(eventInfo2);
  let snowMoon = flag8(eventInfo2);
  let expertMode = flag1(eventInfo3);
  let fastForwardTime = flag2(eventInfo3);
  let slimeRain = flag3(eventInfo3);
  let killedKingSlime = flag4(eventInfo3);
  let killedQueenBee = flag5(eventInfo3);
  let killedFishron = flag6(eventInfo3);
  let killedMartians = flag7(eventInfo3);
  let killedAncientCultist = flag8(eventInfo3);
  let killedMoonLord = flag1(eventInfo4);
  let killedPumpking = flag2(eventInfo4);
  let killedMourningWood = flag3(eventInfo4);
  let killedIceQueen = flag4(eventInfo4);
  let killedSantank = flag5(eventInfo4);
  let killedEverscream = flag6(eventInfo4);
  let killedGolem = flag7(eventInfo4);
  let birthdayParty = flag8(eventInfo4);
  let killedPirates = flag1(eventInfo5);
  let killedFrostLegion = flag2(eventInfo5);
  let killedGoblins = flag3(eventInfo5);
  let sandstorm = flag4(eventInfo5);
  let dungeonDefendersEvent = flag5(eventInfo5);
  let killedDungeonDefendersTier1 = flag6(eventInfo5);
  let killedDungeonDefendersTier2 = flag7(eventInfo5);
  let killedDungeonDefendersTier3 = flag8(eventInfo5);
  let combatBookUsed = flag1(eventInfo6);
  let manualLanterns = flag2(eventInfo6);
  let killedSolarTower = flag3(eventInfo6);
  let killedVortexTower = flag4(eventInfo6);
  let killedNebulaTower = flag5(eventInfo6);
  let killedStardustTower = flag6(eventInfo6);
  let forceHalloween = flag7(eventInfo6);
  let forceChristmas = flag8(eventInfo6);
  let boughtCat = flag1(eventInfo7);
  let boughtDog = flag2(eventInfo7);
  let boughtBunny = flag3(eventInfo7);
  let freeCake = flag4(eventInfo7);
  let drunkWorld = flag5(eventInfo7);
  let killedEmpressOfLight = flag6(eventInfo7);
  let killedQueenSlime = flag7(eventInfo7);
  let getGoodWorld = flag8(eventInfo7);
  let tenthAnniversaryWorld = flag1(eventInfo8);
  let dontStarveWorld = flag2(eventInfo8);
  let downedDeerClops = flag3(eventInfo8);
  let notTheBeesWorld = flag4(eventInfo8);
  let remixWorld = flag5(eventInfo8);
  let unlockedSlimeBlueSpawn = flag6(eventInfo8);
  let combatBookVolumeTwoWasUsed = flag7(eventInfo8);
  let peddlersSatchelWasUsed = flag8(eventInfo8);
  let unlockedSlimeGreenSpawn = flag1(eventInfo9);
  let unlockedSlimeOldSpawn = flag2(eventInfo9);
  let unlockedSlimePurpleSpawn = flag3(eventInfo9);
  let unlockedSlimeRainbowSpawn = flag4(eventInfo9);
  let unlockedSlimeRedSpawn = flag5(eventInfo9);
  let unlockedSlimeYellowSpawn = flag6(eventInfo9);
  let unlockedSlimeCopperSpawn = flag7(eventInfo9);
  let fastForwardTimeToDusk = flag8(eventInfo9);
  let noTrapsWorld = flag1(eventInfo10);
  let zenithWorld = flag2(eventInfo10);
  let unlockedTruffleSpawn = flag3(eventInfo10);
  let vampireSeed = flag4(eventInfo10);
  let infectedSeed = flag5(eventInfo10);
  let teamBasedSpawnsSeed = flag6(eventInfo10);
  let skyblockWorld = flag7(eventInfo10);
  let dualDungeonsSeed = flag8(eventInfo10);
  return {
    TAG: "Ok",
    _0: {
      shadowOrbSmashed,
      killedBoss1,
      killedBoss2,
      killedBoss3,
      hardMode,
      killedClown,
      serverSidedCharacters,
      killedPlantBoss,
      killedMechBoss,
      killedMechBoss2,
      killedMechBoss3,
      killedAnyMechBoss,
      cloudBg,
      crimson,
      pumpkinMoon,
      snowMoon,
      expertMode,
      fastForwardTime,
      slimeRain,
      killedKingSlime,
      killedQueenBee,
      killedFishron,
      killedMartians,
      killedAncientCultist,
      killedMoonLord,
      killedPumpking,
      killedMourningWood,
      killedIceQueen,
      killedSantank,
      killedEverscream,
      killedGolem,
      birthdayParty,
      killedPirates,
      killedFrostLegion,
      killedGoblins,
      sandstorm,
      dungeonDefendersEvent,
      killedDungeonDefendersTier1,
      killedDungeonDefendersTier2,
      killedDungeonDefendersTier3,
      combatBookUsed,
      manualLanterns,
      killedSolarTower,
      killedVortexTower,
      killedNebulaTower,
      killedStardustTower,
      forceHalloween,
      forceChristmas,
      boughtCat,
      boughtDog,
      boughtBunny,
      freeCake,
      drunkWorld,
      killedEmpressOfLight,
      killedQueenSlime,
      getGoodWorld,
      tenthAnniversaryWorld,
      dontStarveWorld,
      downedDeerClops,
      notTheBeesWorld,
      remixWorld,
      unlockedSlimeBlueSpawn,
      combatBookVolumeTwoWasUsed,
      peddlersSatchelWasUsed,
      unlockedSlimeGreenSpawn,
      unlockedSlimeOldSpawn,
      unlockedSlimePurpleSpawn,
      unlockedSlimeRainbowSpawn,
      unlockedSlimeRedSpawn,
      unlockedSlimeYellowSpawn,
      unlockedSlimeCopperSpawn,
      fastForwardTimeToDusk,
      noTrapsWorld,
      zenithWorld,
      unlockedTruffleSpawn,
      vampireSeed,
      infectedSeed,
      teamBasedSpawnsSeed,
      skyblockWorld,
      dualDungeonsSeed
    }
  };
}
function parse103(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "time");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "dayAndMoonInfo");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "moonPhase");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "maxTilesX");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "maxTilesY");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readInt16(reader, "spawnX");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readInt16(reader, "spawnY");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readInt16(reader, "worldSurface");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$8 = readInt16(reader, "rockLayer");
  if (e$8.TAG !== "Ok") {
    return e$8;
  }
  let e$9 = readInt32(reader, "worldId");
  if (e$9.TAG !== "Ok") {
    return e$9;
  }
  let e$10 = readString(reader, "worldName");
  if (e$10.TAG !== "Ok") {
    return e$10;
  }
  let e$11 = readByte(reader, "gameMode");
  if (e$11.TAG !== "Ok") {
    return e$11;
  }
  let e$12 = readBytes(reader, 16, "worldUniqueId");
  if (e$12.TAG !== "Ok") {
    return e$12;
  }
  let worldUniqueId = fromArray2(e$12._0);
  let e$13 = worldUniqueId !== void 0 ? {
    TAG: "Ok",
    _0: valFromOption(worldUniqueId)
  } : {
    TAG: "Error",
    _0: {
      context: "WorldInfo.parse.worldUniqueId",
      error: new Error("Invalid worldUniqueId")
    }
  };
  if (e$13.TAG !== "Ok") {
    return e$13;
  }
  let e$14 = readUInt64(reader, "worldGeneratorVersion");
  if (e$14.TAG !== "Ok") {
    return e$14;
  }
  let e$15 = readByte(reader, "moonType");
  if (e$15.TAG !== "Ok") {
    return e$15;
  }
  let e$16 = readByte(reader, "treeBackground");
  if (e$16.TAG !== "Ok") {
    return e$16;
  }
  let e$17 = readByte(reader, "treeBackground2");
  if (e$17.TAG !== "Ok") {
    return e$17;
  }
  let e$18 = readByte(reader, "treeBackground3");
  if (e$18.TAG !== "Ok") {
    return e$18;
  }
  let e$19 = readByte(reader, "treeBackground4");
  if (e$19.TAG !== "Ok") {
    return e$19;
  }
  let e$20 = readByte(reader, "corruptionBackground");
  if (e$20.TAG !== "Ok") {
    return e$20;
  }
  let e$21 = readByte(reader, "jungleBackground");
  if (e$21.TAG !== "Ok") {
    return e$21;
  }
  let e$22 = readByte(reader, "snowBackground");
  if (e$22.TAG !== "Ok") {
    return e$22;
  }
  let e$23 = readByte(reader, "hallowBackground");
  if (e$23.TAG !== "Ok") {
    return e$23;
  }
  let e$24 = readByte(reader, "crimsonBackground");
  if (e$24.TAG !== "Ok") {
    return e$24;
  }
  let e$25 = readByte(reader, "desertBackground");
  if (e$25.TAG !== "Ok") {
    return e$25;
  }
  let e$26 = readByte(reader, "oceanBackground");
  if (e$26.TAG !== "Ok") {
    return e$26;
  }
  let e$27 = readByte(reader, "mushroomBackground");
  if (e$27.TAG !== "Ok") {
    return e$27;
  }
  let e$28 = readByte(reader, "underworldBackground");
  if (e$28.TAG !== "Ok") {
    return e$28;
  }
  let e$29 = readByte(reader, "iceBackStyle");
  if (e$29.TAG !== "Ok") {
    return e$29;
  }
  let e$30 = readByte(reader, "jungleBackStyle");
  if (e$30.TAG !== "Ok") {
    return e$30;
  }
  let e$31 = readByte(reader, "hellBackStyle");
  if (e$31.TAG !== "Ok") {
    return e$31;
  }
  let e$32 = readSingle(reader, "windSpeedSet");
  if (e$32.TAG !== "Ok") {
    return e$32;
  }
  let e$33 = readByte(reader, "cloudNumber");
  if (e$33.TAG !== "Ok") {
    return e$33;
  }
  let e$34 = readInt32(reader, "tree1");
  if (e$34.TAG !== "Ok") {
    return e$34;
  }
  let e$35 = readInt32(reader, "tree2");
  if (e$35.TAG !== "Ok") {
    return e$35;
  }
  let e$36 = readInt32(reader, "tree3");
  if (e$36.TAG !== "Ok") {
    return e$36;
  }
  let e$37 = readByte(reader, "treeStyle1");
  if (e$37.TAG !== "Ok") {
    return e$37;
  }
  let e$38 = readByte(reader, "treeStyle2");
  if (e$38.TAG !== "Ok") {
    return e$38;
  }
  let e$39 = readByte(reader, "treeStyle3");
  if (e$39.TAG !== "Ok") {
    return e$39;
  }
  let e$40 = readByte(reader, "treeStyle4");
  if (e$40.TAG !== "Ok") {
    return e$40;
  }
  let e$41 = readInt32(reader, "caveBack1");
  if (e$41.TAG !== "Ok") {
    return e$41;
  }
  let e$42 = readInt32(reader, "caveBack2");
  if (e$42.TAG !== "Ok") {
    return e$42;
  }
  let e$43 = readInt32(reader, "caveBack3");
  if (e$43.TAG !== "Ok") {
    return e$43;
  }
  let e$44 = readByte(reader, "caveBackStyle1");
  if (e$44.TAG !== "Ok") {
    return e$44;
  }
  let e$45 = readByte(reader, "caveBackStyle2");
  if (e$45.TAG !== "Ok") {
    return e$45;
  }
  let e$46 = readByte(reader, "caveBackStyle3");
  if (e$46.TAG !== "Ok") {
    return e$46;
  }
  let e$47 = readByte(reader, "caveBackStyle4");
  if (e$47.TAG !== "Ok") {
    return e$47;
  }
  let e$48 = readByte(reader, "forest1TreeTopStyle");
  if (e$48.TAG !== "Ok") {
    return e$48;
  }
  let e$49 = readByte(reader, "forest2TreeTopStyle");
  if (e$49.TAG !== "Ok") {
    return e$49;
  }
  let e$50 = readByte(reader, "forest3TreeTopStyle");
  if (e$50.TAG !== "Ok") {
    return e$50;
  }
  let e$51 = readByte(reader, "forest4TreeTopStyle");
  if (e$51.TAG !== "Ok") {
    return e$51;
  }
  let e$52 = readByte(reader, "corruptionTreeTopStyle");
  if (e$52.TAG !== "Ok") {
    return e$52;
  }
  let e$53 = readByte(reader, "jungleTreeTopStyle");
  if (e$53.TAG !== "Ok") {
    return e$53;
  }
  let e$54 = readByte(reader, "snowTreeTopStyle");
  if (e$54.TAG !== "Ok") {
    return e$54;
  }
  let e$55 = readByte(reader, "hallowTreeTopStyle");
  if (e$55.TAG !== "Ok") {
    return e$55;
  }
  let e$56 = readByte(reader, "crimsonTreeTopStyle");
  if (e$56.TAG !== "Ok") {
    return e$56;
  }
  let e$57 = readByte(reader, "desertTreeTopStyle");
  if (e$57.TAG !== "Ok") {
    return e$57;
  }
  let e$58 = readByte(reader, "oceanTreeTopStyle");
  if (e$58.TAG !== "Ok") {
    return e$58;
  }
  let e$59 = readByte(reader, "glowingMushroomTreeTopStyle");
  if (e$59.TAG !== "Ok") {
    return e$59;
  }
  let e$60 = readByte(reader, "underworldTreeTopStyle");
  if (e$60.TAG !== "Ok") {
    return e$60;
  }
  let e$61 = readSingle(reader, "rain");
  if (e$61.TAG !== "Ok") {
    return e$61;
  }
  let e$62 = readEventInfo(reader);
  if (e$62.TAG !== "Ok") {
    return e$62;
  }
  let e$63 = readByte(reader, "sundialCooldown");
  if (e$63.TAG !== "Ok") {
    return e$63;
  }
  let e$64 = readByte(reader, "moondialCooldown");
  if (e$64.TAG !== "Ok") {
    return e$64;
  }
  let e$65 = readInt16(reader, "copperOreTier");
  if (e$65.TAG !== "Ok") {
    return e$65;
  }
  let e$66 = readInt16(reader, "ironOreTier");
  if (e$66.TAG !== "Ok") {
    return e$66;
  }
  let e$67 = readInt16(reader, "silverOreTier");
  if (e$67.TAG !== "Ok") {
    return e$67;
  }
  let e$68 = readInt16(reader, "goldOreTier");
  if (e$68.TAG !== "Ok") {
    return e$68;
  }
  let e$69 = readInt16(reader, "cobaltOreTier");
  if (e$69.TAG !== "Ok") {
    return e$69;
  }
  let e$70 = readInt16(reader, "mythrilOreTier");
  if (e$70.TAG !== "Ok") {
    return e$70;
  }
  let e$71 = readInt16(reader, "adamantiteOreTier");
  if (e$71.TAG !== "Ok") {
    return e$71;
  }
  let e$72 = readSByte(reader, "invasionType");
  if (e$72.TAG !== "Ok") {
    return e$72;
  }
  let e$73 = readUInt64(reader, "lobbyId");
  if (e$73.TAG !== "Ok") {
    return e$73;
  }
  let e$74 = readSingle(reader, "sandstormSeverity");
  if (e$74.TAG !== "Ok") {
    return e$74;
  }
  let e$75 = readByte(reader, "extraSpawnPointCount");
  if (e$75.TAG !== "Ok") {
    return e$75;
  }
  let extraSpawnPointCount = e$75._0;
  let extraSpawnPoints = [];
  let readExtraSpawnPoints = (_idx) => {
    while (true) {
      let idx = _idx;
      if (idx >= extraSpawnPointCount) {
        return {
          TAG: "Ok",
          _0: void 0
        };
      }
      let e2 = readInt16(reader, `extraSpawnPointX_` + idx.toString());
      if (e2.TAG !== "Ok") {
        return e2;
      }
      let e$110 = readInt16(reader, `extraSpawnPointY_` + idx.toString());
      if (e$110.TAG !== "Ok") {
        return e$110;
      }
      extraSpawnPoints.push({
        x: e2._0,
        y: e$110._0
      });
      _idx = idx + 1 | 0;
      continue;
    }
    ;
  };
  let e$76 = readExtraSpawnPoints(0);
  if (e$76.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        time: e._0,
        dayAndMoonInfo: e$1._0,
        moonPhase: e$2._0,
        maxTilesX: e$3._0,
        maxTilesY: e$4._0,
        spawnX: e$5._0,
        spawnY: e$6._0,
        worldSurface: e$7._0,
        rockLayer: e$8._0,
        worldId: e$9._0,
        worldName: e$10._0,
        gameMode: e$11._0,
        worldUniqueId: e$13._0,
        worldGeneratorVersion: e$14._0,
        moonType: e$15._0,
        treeBackground: e$16._0,
        treeBackground2: e$17._0,
        treeBackground3: e$18._0,
        treeBackground4: e$19._0,
        corruptionBackground: e$20._0,
        jungleBackground: e$21._0,
        snowBackground: e$22._0,
        hallowBackground: e$23._0,
        crimsonBackground: e$24._0,
        desertBackground: e$25._0,
        oceanBackground: e$26._0,
        mushroomBackground: e$27._0,
        underworldBackground: e$28._0,
        iceBackStyle: e$29._0,
        jungleBackStyle: e$30._0,
        hellBackStyle: e$31._0,
        windSpeedSet: e$32._0,
        cloudNumber: e$33._0,
        tree1: e$34._0,
        tree2: e$35._0,
        tree3: e$36._0,
        treeStyle1: e$37._0,
        treeStyle2: e$38._0,
        treeStyle3: e$39._0,
        treeStyle4: e$40._0,
        caveBack1: e$41._0,
        caveBack2: e$42._0,
        caveBack3: e$43._0,
        caveBackStyle1: e$44._0,
        caveBackStyle2: e$45._0,
        caveBackStyle3: e$46._0,
        caveBackStyle4: e$47._0,
        forest1TreeTopStyle: e$48._0,
        forest2TreeTopStyle: e$49._0,
        forest3TreeTopStyle: e$50._0,
        forest4TreeTopStyle: e$51._0,
        corruptionTreeTopStyle: e$52._0,
        jungleTreeTopStyle: e$53._0,
        snowTreeTopStyle: e$54._0,
        hallowTreeTopStyle: e$55._0,
        crimsonTreeTopStyle: e$56._0,
        desertTreeTopStyle: e$57._0,
        oceanTreeTopStyle: e$58._0,
        glowingMushroomTreeTopStyle: e$59._0,
        underworldTreeTopStyle: e$60._0,
        rain: e$61._0,
        eventInfo: e$62._0,
        sundialCooldown: e$63._0,
        moondialCooldown: e$64._0,
        copperOreTier: e$65._0,
        ironOreTier: e$66._0,
        silverOreTier: e$67._0,
        goldOreTier: e$68._0,
        cobaltOreTier: e$69._0,
        mythrilOreTier: e$70._0,
        adamantiteOreTier: e$71._0,
        invasionType: e$72._0,
        lobbyId: e$73._0,
        sandstormSeverity: e$74._0,
        extraSpawnPoints
      }
    };
  } else {
    return e$76;
  }
}
var Decode33 = {
  readByte,
  readInt16,
  readInt32,
  readUInt64,
  readString,
  readBytes,
  readSingle,
  readSByte,
  readEventInfo,
  parse: parse103
};
function packEventInfo(writer, eventInfo) {
  let eventInfo1 = fromFlags(eventInfo.shadowOrbSmashed, eventInfo.killedBoss1, eventInfo.killedBoss2, eventInfo.killedBoss3, eventInfo.hardMode, eventInfo.killedClown, eventInfo.serverSidedCharacters, eventInfo.killedPlantBoss);
  let eventInfo2 = fromFlags(eventInfo.killedMechBoss, eventInfo.killedMechBoss2, eventInfo.killedMechBoss3, eventInfo.killedAnyMechBoss, eventInfo.cloudBg, eventInfo.crimson, eventInfo.pumpkinMoon, eventInfo.snowMoon);
  let eventInfo3 = fromFlags(eventInfo.expertMode, eventInfo.fastForwardTime, eventInfo.slimeRain, eventInfo.killedKingSlime, eventInfo.killedQueenBee, eventInfo.killedFishron, eventInfo.killedMartians, eventInfo.killedAncientCultist);
  let eventInfo4 = fromFlags(eventInfo.killedMoonLord, eventInfo.killedPumpking, eventInfo.killedMourningWood, eventInfo.killedIceQueen, eventInfo.killedSantank, eventInfo.killedEverscream, eventInfo.killedGolem, eventInfo.birthdayParty);
  let eventInfo5 = fromFlags(eventInfo.killedPirates, eventInfo.killedFrostLegion, eventInfo.killedGoblins, eventInfo.sandstorm, eventInfo.dungeonDefendersEvent, eventInfo.killedDungeonDefendersTier1, eventInfo.killedDungeonDefendersTier2, eventInfo.killedDungeonDefendersTier3);
  let eventInfo6 = fromFlags(eventInfo.combatBookUsed, eventInfo.manualLanterns, eventInfo.killedSolarTower, eventInfo.killedVortexTower, eventInfo.killedNebulaTower, eventInfo.killedStardustTower, eventInfo.forceHalloween, eventInfo.forceChristmas);
  let eventInfo7 = fromFlags(eventInfo.boughtCat, eventInfo.boughtDog, eventInfo.boughtBunny, eventInfo.freeCake, eventInfo.drunkWorld, eventInfo.killedEmpressOfLight, eventInfo.killedQueenSlime, eventInfo.getGoodWorld);
  let eventInfo8 = fromFlags(eventInfo.tenthAnniversaryWorld, eventInfo.dontStarveWorld, eventInfo.downedDeerClops, eventInfo.notTheBeesWorld, eventInfo.remixWorld, eventInfo.unlockedSlimeBlueSpawn, eventInfo.combatBookVolumeTwoWasUsed, eventInfo.peddlersSatchelWasUsed);
  let eventInfo9 = fromFlags(eventInfo.unlockedSlimeGreenSpawn, eventInfo.unlockedSlimeOldSpawn, eventInfo.unlockedSlimePurpleSpawn, eventInfo.unlockedSlimeRainbowSpawn, eventInfo.unlockedSlimeRedSpawn, eventInfo.unlockedSlimeYellowSpawn, eventInfo.unlockedSlimeCopperSpawn, eventInfo.fastForwardTimeToDusk);
  let eventInfo10 = fromFlags(eventInfo.noTrapsWorld, eventInfo.zenithWorld, eventInfo.unlockedTruffleSpawn, eventInfo.vampireSeed, eventInfo.infectedSeed, eventInfo.teamBasedSpawnsSeed, eventInfo.skyblockWorld, eventInfo.dualDungeonsSeed);
  return packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(writer, toByte(eventInfo1), "eventInfo1"), toByte(eventInfo2), "eventInfo2"), toByte(eventInfo3), "eventInfo3"), toByte(eventInfo4), "eventInfo4"), toByte(eventInfo5), "eventInfo5"), toByte(eventInfo6), "eventInfo6"), toByte(eventInfo7), "eventInfo7"), toByte(eventInfo8), "eventInfo8"), toByte(eventInfo9), "eventInfo9"), toByte(eventInfo10), "eventInfo10");
}
function packExtraSpawnPoints(writer, extraSpawnPoints) {
  let writer$1 = packByte(writer, extraSpawnPoints.length, "extraSpawnPointCount");
  extraSpawnPoints.forEach((point, idx) => {
    let idxLabel = idx.toString();
    packInt16(packInt16(writer$1, point.x, `extraSpawnPointX_` + idxLabel), point.y, `extraSpawnPointY_` + idxLabel);
  });
  return writer$1;
}
function toBuffer100(self) {
  return data(packExtraSpawnPoints(packSingle(packUInt64(packSByte(packInt16(packInt16(packInt16(packInt16(packInt16(packInt16(packInt16(packByte(packByte(packEventInfo(packSingle(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packInt32(packInt32(packInt32(packByte(packByte(packByte(packByte(packInt32(packInt32(packInt32(packByte(packSingle(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packByte(packUInt64(packBytes(packByte(packString(packInt32(packInt16(packInt16(packInt16(packInt16(packInt16(packInt16(packByte(packByte(packInt32(setType(make(), toInt("WorldInfo")), self.time, "time"), self.dayAndMoonInfo, "dayAndMoonInfo"), self.moonPhase, "moonPhase"), self.maxTilesX, "maxTilesX"), self.maxTilesY, "maxTilesY"), self.spawnX, "spawnX"), self.spawnY, "spawnY"), self.worldSurface, "worldSurface"), self.rockLayer, "rockLayer"), self.worldId, "worldId"), self.worldName, "worldName"), self.gameMode, "gameMode"), asArray(self.worldUniqueId), "worldUniqueId"), self.worldGeneratorVersion, "worldGeneratorVersion"), self.moonType, "moonType"), self.treeBackground, "treeBackground"), self.treeBackground2, "treeBackground2"), self.treeBackground3, "treeBackground3"), self.treeBackground4, "treeBackground4"), self.corruptionBackground, "corruptionBackground"), self.jungleBackground, "jungleBackground"), self.snowBackground, "snowBackground"), self.hallowBackground, "hallowBackground"), self.crimsonBackground, "crimsonBackground"), self.desertBackground, "desertBackground"), self.oceanBackground, "oceanBackground"), self.mushroomBackground, "mushroomBackground"), self.underworldBackground, "underworldBackground"), self.iceBackStyle, "iceBackStyle"), self.jungleBackStyle, "jungleBackStyle"), self.hellBackStyle, "hellBackStyle"), self.windSpeedSet, "windSpeedSet"), self.cloudNumber, "cloudNumber"), self.tree1, "tree1"), self.tree2, "tree2"), self.tree3, "tree3"), self.treeStyle1, "treeStyle1"), self.treeStyle2, "treeStyle2"), self.treeStyle3, "treeStyle3"), self.treeStyle4, "treeStyle4"), self.caveBack1, "caveBack1"), self.caveBack2, "caveBack2"), self.caveBack3, "caveBack3"), self.caveBackStyle1, "caveBackStyle1"), self.caveBackStyle2, "caveBackStyle2"), self.caveBackStyle3, "caveBackStyle3"), self.caveBackStyle4, "caveBackStyle4"), self.forest1TreeTopStyle, "forest1TreeTopStyle"), self.forest2TreeTopStyle, "forest2TreeTopStyle"), self.forest3TreeTopStyle, "forest3TreeTopStyle"), self.forest4TreeTopStyle, "forest4TreeTopStyle"), self.corruptionTreeTopStyle, "corruptionTreeTopStyle"), self.jungleTreeTopStyle, "jungleTreeTopStyle"), self.snowTreeTopStyle, "snowTreeTopStyle"), self.hallowTreeTopStyle, "hallowTreeTopStyle"), self.crimsonTreeTopStyle, "crimsonTreeTopStyle"), self.desertTreeTopStyle, "desertTreeTopStyle"), self.oceanTreeTopStyle, "oceanTreeTopStyle"), self.glowingMushroomTreeTopStyle, "glowingMushroomTreeTopStyle"), self.underworldTreeTopStyle, "underworldTreeTopStyle"), self.rain, "rain"), self.eventInfo), self.sundialCooldown, "sundialCooldown"), self.moondialCooldown, "moondialCooldown"), self.copperOreTier, "copperOreTier"), self.ironOreTier, "ironOreTier"), self.silverOreTier, "silverOreTier"), self.goldOreTier, "goldOreTier"), self.cobaltOreTier, "cobaltOreTier"), self.mythrilOreTier, "mythrilOreTier"), self.adamantiteOreTier, "adamantiteOreTier"), self.invasionType, "invasionType"), self.lobbyId, "lobbyId"), self.sandstormSeverity, "sandstormSeverity"), self.extraSpawnPoints));
}
var Encode33 = {
  packInt16,
  packByte,
  packEventInfo,
  packExtraSpawnPoints,
  toBuffer: toBuffer100
};

// src/packetv1449/PacketV1449_PlayerActive.js
var PacketV1449_PlayerActive_exports = {};
__export(PacketV1449_PlayerActive_exports, {
  parse: () => parse104,
  toBuffer: () => toBuffer101
});
function parse104(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "active");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        active: e$1._0 !== 0
      }
    };
  } else {
    return e$1;
  }
}
function toBuffer101(self) {
  return data(packByte(packByte(setType(make(), toInt("PlayerActive")), self.playerId, "playerId"), self.active ? 1 : 0, "active"));
}

// src/packet/Packet_NpcUpdate.js
var Packet_NpcUpdate_exports = {};
__export(Packet_NpcUpdate_exports, {
  Decode: () => Decode34,
  Encode: () => Encode34,
  parse: () => parse105,
  toBuffer: () => toBuffer102
});
function readNpcFlags1(reader, fieldName) {
  let e = readByte(reader, fieldName);
  if (e.TAG !== "Ok") {
    return e;
  }
  let flags = fromByte(e._0);
  return {
    TAG: "Ok",
    _0: {
      directionX: flag1(flags),
      directionY: flag2(flags),
      ai0: flag3(flags),
      ai1: flag4(flags),
      ai2: flag5(flags),
      ai3: flag6(flags),
      spriteDirection: flag7(flags),
      lifeMax: flag8(flags)
    }
  };
}
function readNpcFlags2(reader, fieldName) {
  let e = readByte(reader, fieldName);
  if (e.TAG !== "Ok") {
    return e;
  }
  let flags = fromByte(e._0);
  return {
    TAG: "Ok",
    _0: {
      statsScaled: flag1(flags),
      spawnedFromStatue: flag2(flags),
      difficulty: flag3(flags),
      spawnNeedsSyncing: flag4(flags),
      shimmerTransparency: flag5(flags)
    }
  };
}
function parse105(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcSlotId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "vx");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readSingle(reader, "vy");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readUInt16(reader, "target");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readNpcFlags1(reader, "npcFlags1");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let npcFlags12 = e$6._0;
  let e$7 = readNpcFlags2(reader, "npcFlags2");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let npcFlags22 = e$7._0;
  let tmp;
  if (npcFlags12.ai0) {
    let e$8 = readSingle(reader, "ai0");
    tmp = e$8.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$8._0
    } : e$8;
  } else {
    tmp = {
      TAG: "Ok",
      _0: void 0
    };
  }
  let tmp$1;
  if (npcFlags12.ai1) {
    let e$9 = readSingle(reader, "ai1");
    tmp$1 = e$9.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$9._0
    } : e$9;
  } else {
    tmp$1 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  let tmp$2;
  if (npcFlags12.ai2) {
    let e$10 = readSingle(reader, "ai2");
    tmp$2 = e$10.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$10._0
    } : e$10;
  } else {
    tmp$2 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  let tmp$3;
  if (npcFlags12.ai3) {
    let e$11 = readSingle(reader, "ai3");
    tmp$3 = e$11.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$11._0
    } : e$11;
  } else {
    tmp$3 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  let e$12 = all4([
    tmp,
    tmp$1,
    tmp$2,
    tmp$3
  ]);
  if (e$12.TAG !== "Ok") {
    return e$12;
  }
  let e$13 = readInt16(reader, "npcTypeId");
  if (e$13.TAG !== "Ok") {
    return e$13;
  }
  let e$14;
  if (npcFlags22.statsScaled) {
    let e$15 = readByte(reader, "playerCountScale");
    e$14 = e$15.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$15._0
    } : e$15;
  } else {
    e$14 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$14.TAG !== "Ok") {
    return e$14;
  }
  let e$16;
  if (npcFlags22.difficulty) {
    let e$17 = readSingle(reader, "difficulty");
    e$16 = e$17.TAG === "Ok" ? {
      TAG: "Ok",
      _0: e$17._0
    } : e$17;
  } else {
    e$16 = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (e$16.TAG !== "Ok") {
    return e$16;
  }
  let e$18;
  if (npcFlags12.lifeMax) {
    e$18 = {
      TAG: "Ok",
      _0: "Max"
    };
  } else {
    let e$19 = readByte(reader, "lifeBytes");
    if (e$19.TAG === "Ok") {
      switch (e$19._0) {
        case 1:
          let e$20 = readSByte(reader, "life_sbyte");
          e$18 = e$20.TAG === "Ok" ? {
            TAG: "Ok",
            _0: {
              TAG: "Byte",
              _0: e$20._0
            }
          } : e$20;
          break;
        case 2:
          let e$21 = readInt16(reader, "life_int16");
          e$18 = e$21.TAG === "Ok" ? {
            TAG: "Ok",
            _0: {
              TAG: "Int16",
              _0: e$21._0
            }
          } : e$21;
          break;
        case 4:
          let e$22 = readInt32(reader, "life_int32");
          e$18 = e$22.TAG === "Ok" ? {
            TAG: "Ok",
            _0: {
              TAG: "Int32",
              _0: e$22._0
            }
          } : e$22;
          break;
        default:
          e$18 = {
            TAG: "Error",
            _0: {
              context: "Packet_NpcUpdate.parse",
              error: new Error("Invalid life byte count")
            }
          };
      }
    } else {
      e$18 = e$19;
    }
  }
  if (e$18.TAG !== "Ok") {
    return e$18;
  }
  let releaseOwner = readByte(reader, "releaseOwner");
  let releaseOwner$1;
  releaseOwner$1 = releaseOwner.TAG === "Ok" ? releaseOwner._0 : void 0;
  return {
    TAG: "Ok",
    _0: {
      npcSlotId: e._0,
      npcTypeId: e$13._0,
      x: e$1._0,
      y: e$2._0,
      vx: e$3._0,
      vy: e$4._0,
      target: e$5._0,
      directionX: npcFlags12.directionX,
      directionY: npcFlags12.directionY,
      ai: e$12._0,
      spriteDirection: npcFlags12.spriteDirection,
      life: e$18._0,
      releaseOwner: releaseOwner$1,
      playerCountScale: e$14._0,
      difficulty: e$16._0,
      spawnedFromStatue: npcFlags22.spawnedFromStatue,
      spawnNeedsSyncing: npcFlags22.spawnNeedsSyncing,
      shimmerTransparency: npcFlags22.shimmerTransparency
    }
  };
}
var Decode34 = {
  readInt32,
  readInt16,
  readSingle,
  readUInt16,
  readByte,
  readSByte,
  readNpcFlags1,
  readNpcFlags2,
  parse: parse105
};
function npcFlags1(self) {
  let match = self.ai;
  return toByte(fromFlags(self.directionX, self.directionY, isSome(match[0]), isSome(match[1]), isSome(match[2]), isSome(match[3]), self.spriteDirection, self.life === "Max"));
}
function npcFlags2(self) {
  return toByte(fromFlags(isSome(self.playerCountScale), self.spawnedFromStatue, isSome(self.difficulty), self.spawnNeedsSyncing, self.shimmerTransparency, false, false, false));
}
function packAi(writer, param) {
  let ai3 = param[3];
  let ai2 = param[2];
  let ai1 = param[1];
  let ai0 = param[0];
  if (ai0 !== void 0) {
    packSingle(writer, ai0, "ai0");
  }
  if (ai1 !== void 0) {
    packSingle(writer, ai1, "ai1");
  }
  if (ai2 !== void 0) {
    packSingle(writer, ai2, "ai2");
  }
  if (ai3 !== void 0) {
    packSingle(writer, ai3, "ai3");
  }
  return writer;
}
function packPlayerCountScale(writer, playerCountScale) {
  if (playerCountScale !== void 0) {
    return packByte(writer, playerCountScale, "playerCountScale");
  } else {
    return writer;
  }
}
function packDifficulty(writer, difficulty) {
  if (difficulty !== void 0) {
    return packSingle(writer, difficulty, "difficulty");
  } else {
    return writer;
  }
}
function packLife(writer, life) {
  if (typeof life !== "object") {
    return writer;
  }
  switch (life.TAG) {
    case "Byte":
      return packSByte(packByte(writer, 1, "lifeBytes"), life._0, "life_sbyte");
    case "Int16":
      return packInt16(packByte(writer, 2, "lifeBytes"), life._0, "life_int16");
    case "Int32":
      return packInt32(packByte(writer, 4, "lifeBytes"), life._0, "life_int32");
  }
}
function packReleaseOwner(writer, releaseOwner) {
  if (releaseOwner !== void 0) {
    return packByte(writer, releaseOwner, "releaseOwner");
  } else {
    return writer;
  }
}
function toBuffer102(self) {
  return data(packReleaseOwner(packLife(packDifficulty(packPlayerCountScale(packInt16(packAi(packByte(packByte(packUInt16(packSingle(packSingle(packSingle(packSingle(packInt16(setType(make(), toInt("NpcUpdate")), self.npcSlotId, "npcSlotId"), self.x, "x"), self.y, "y"), self.vx, "vx"), self.vy, "vy"), self.target, "target"), npcFlags1(self), "npcFlags1"), npcFlags2(self), "npcFlags2"), self.ai), self.npcTypeId, "npcTypeId"), self.playerCountScale), self.difficulty), self.life), self.releaseOwner));
}
var Encode34 = {
  packInt32,
  packInt16,
  packSingle,
  packUInt16,
  packByte,
  packSByte,
  setType,
  data,
  npcFlags1,
  npcFlags2,
  packAi,
  packPlayerCountScale,
  packDifficulty,
  packLife,
  packReleaseOwner,
  toBuffer: toBuffer102
};

// src/packetv1449/PacketV1449_Disconnect.js
var PacketV1449_Disconnect_exports = {};
__export(PacketV1449_Disconnect_exports, {
  parse: () => parse106,
  toBuffer: () => toBuffer103
});
function parse106(payload) {
  let reader = new packetreader_default(payload);
  let e = readNetworkText(reader, "reason");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        reason: e._0
      }
    };
  } else {
    return e;
  }
}
function toBuffer103(self) {
  return data(packNetworkText(setType(make(), toInt("Disconnect")), self.reason, "reason"));
}

// src/Parser.js
var Parser_exports = {};
__export(Parser_exports, {
  parse: () => parse162,
  parseLazy: () => parseLazy
});

// node_modules/.pnpm/@rescript+runtime@12.0.1/node_modules/@rescript/runtime/lib/es6/Stdlib_Lazy.js
function from_fun(closure) {
  return {
    LAZY_DONE: false,
    VAL: closure
  };
}
var make4 = from_fun;

// src/packetv1449/PacketV1449_Emoji.js
function parse107(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "emojiId");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        emojiId: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_DoorUse.js
function actionFromInt(self) {
  switch (self) {
    case 0:
      return "OpenDoor";
    case 1:
      return "CloseDoor";
    case 2:
      return "ShiftTrapdoorOpen";
    case 3:
      return "ShiftTrapdoorClose";
    case 4:
      return "ShiftTallGateOpen";
    case 5:
      return "ShiftTallGateClose";
    default:
      return;
  }
}
function parse108(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "action");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "direction");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let action = actionFromInt(e._0);
  let action$1 = action !== void 0 ? {
    TAG: "Ok",
    _0: action
  } : {
    TAG: "Error",
    _0: {
      context: "Packet_DoorUse.parse.action",
      error: new Error("Unknown door action")
    }
  };
  if (action$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        action: action$1._0,
        x: e$1._0,
        y: e$2._0,
        direction: e$3._0 === 0 ? -1 : 1
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: action$1._0
    };
  }
}

// src/packetv1449/PacketV1449_HarpPlay.js
function parse109(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "pitch");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        pitch: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_ChestName.js
function parse110(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "chestId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readString(reader, "name");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        chestId: e._0,
        x: e$1._0,
        y: e$2._0,
        name: e$3._0
      }
    };
  } else {
    return e$3;
  }
}

// src/packetv1449/PacketV1449_ChestOpen.js
function parse111(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_LiquidSet.js
function parse112(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "liquid");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "liquidType");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        liquid: e$2._0,
        liquidType: e$3._0
      }
    };
  } else {
    return e$3;
  }
}

// src/packetv1449/PacketV1449_NpcStrike.js
function parse113(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "damage");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "knockback");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "direction");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "critical");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        damage: e$1._0,
        knockback: e$2._0,
        direction: e$3._0 - 1 | 0,
        critical: e$4._0 === 1
      }
    };
  } else {
    return e$4;
  }
}

// src/packetv1449/PacketV1449_NpcTamper.js
function fromInt8(playerId) {
  if (playerId !== -1) {
    return {
      TAG: "PlayerId",
      _0: playerId
    };
  } else {
    return "All";
  }
}
function parse114(payload) {
  let reader = new packetreader_default(payload);
  let e = readUInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "setNpcImmunity");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2;
  if (e$1._0 === 1) {
    let e$3 = readInt32(reader, "immunityTime");
    if (e$3.TAG === "Ok") {
      let e$4 = readInt16(reader, "immunityFromPlayerId");
      e$2 = e$4.TAG === "Ok" ? {
        TAG: "Ok",
        _0: [
          e$3._0,
          fromInt8(e$4._0)
        ]
      } : e$4;
    } else {
      e$2 = e$3;
    }
  } else {
    e$2 = {
      TAG: "Ok",
      _0: [
        void 0,
        void 0
      ]
    };
  }
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let match = e$2._0;
  return {
    TAG: "Ok",
    _0: {
      npcId: e._0,
      immunityTime: match[0],
      immunityFromPlayerId: match[1]
    }
  };
}

// src/packetv1449/PacketV1449_HealEffect.js
function parse115(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "healAmount");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        healAmount: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_ManaEffect.js
function parse116(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "manaAmount");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        manaAmount: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_NpcBuffAdd.js
function parse117(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "buffType");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "time");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        buffType: e$1._0,
        time: e$2._0
      }
    };
  } else {
    return e$2;
  }
}

// src/packetv1449/PacketV1449_NpcRelease.js
function parse118(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "npcType");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "style");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        npcType: e$2._0,
        style: e$3._0
      }
    };
  } else {
    return e$3;
  }
}

// src/packetv1449/PacketV1449_PortalKill.js
function parse119(payload) {
  let reader = new packetreader_default(payload);
  let e = readUInt16(reader, "owner");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "portalColor");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        owner: e._0,
        portalColor: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_EmoteBubble.js
function parse120(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "id");
  if (e.TAG !== "Ok") {
    return e;
  }
  let id = e._0;
  let e$1 = readByte(reader, "anchorType");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let anchorType = e$1._0;
  if (anchorType === 255) {
    return {
      TAG: "Ok",
      _0: {
        id,
        anchor: "Remove"
      }
    };
  }
  let e$2 = readUInt16(reader, "anchorMeta");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let anchorMeta = e$2._0;
  let e$3 = readUInt16(reader, "time");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let time = e$3._0;
  let e$4 = readByte(reader, "emote");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let emoteByte = e$4._0;
  if (emoteByte !== 255) {
    return {
      TAG: "Ok",
      _0: {
        id,
        anchor: {
          TAG: "Anchor",
          anchorType,
          anchorMeta,
          time,
          emote: emoteByte,
          metadata: void 0
        }
      }
    };
  }
  let e$5 = readInt16(reader, "metadata");
  if (e$5.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        id,
        anchor: {
          TAG: "Anchor",
          anchorType,
          anchorMeta,
          time,
          emote: -1,
          metadata: e$5._0
        }
      }
    };
  } else {
    return e$5;
  }
}

// src/packetv1449/PacketV1449_PasswordSend.js
function parse121(payload) {
  let reader = new packetreader_default(payload);
  let e = readString(reader, "password");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        password: e._0
      }
    };
  } else {
    return e;
  }
}

// src/packetv1449/PacketV1449_GemLockToggle.js
function parse122(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readBool(reader, "active");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        active: e$2._0
      }
    };
  } else {
    return e$2;
  }
}

// src/packetv1449/PacketV1449_NebulaLevelUp.js
function parse123(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "level");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "x");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "y");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        level: e$1._0,
        x: e$2._0,
        y: e$3._0
      }
    };
  } else {
    return e$3;
  }
}

// src/packetv1449/PacketV1449_NpcItemStrike.js
function parse124(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "playerId");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0,
        playerId: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_PlayerStealth.js
function parse125(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "stealth");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        stealth: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_GoodEvilUpdate.js
function parse126(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "good");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "evil");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "blood");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        good: e._0,
        evil: e$1._0,
        blood: e$2._0
      }
    };
  } else {
    return e$2;
  }
}

// src/packetv1449/PacketV1449_ItemDropModify.js
function parseFlags2(reader, flags2) {
  let width = flag1(flags2) ? map2(readInt16(reader, "width"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (width.TAG !== "Ok") {
    return width;
  }
  let height = flag2(flags2) ? map2(readInt16(reader, "height"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (height.TAG !== "Ok") {
    return height;
  }
  let scale = flag3(flags2) ? map2(readSingle(reader, "scale"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (scale.TAG !== "Ok") {
    return scale;
  }
  let ammo = flag4(flags2) ? map2(readInt16(reader, "ammo"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (ammo.TAG !== "Ok") {
    return ammo;
  }
  let useAmmo = flag5(flags2) ? map2(readInt16(reader, "useAmmo"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (useAmmo.TAG !== "Ok") {
    return useAmmo;
  }
  let notAmmo = flag6(flags2) ? map2(readByte(reader, "notAmmo"), (v) => v === 1) : {
    TAG: "Ok",
    _0: void 0
  };
  if (notAmmo.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: [
        width._0,
        height._0,
        scale._0,
        ammo._0,
        useAmmo._0,
        notAmmo._0
      ]
    };
  } else {
    return notAmmo;
  }
}
function parse127(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "itemId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "flags1");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let flags1 = fromByte(e$1._0);
  let color;
  if (flag1(flags1)) {
    let e$2 = readByte(reader, "Color.r");
    if (e$2.TAG === "Ok") {
      let e$3 = readByte(reader, "Color.g");
      if (e$3.TAG === "Ok") {
        let e$4 = readByte(reader, "Color.b");
        if (e$4.TAG === "Ok") {
          let e$5 = readByte(reader, "Color.a");
          color = e$5.TAG === "Ok" ? {
            TAG: "Ok",
            _0: {
              r: e$2._0,
              g: e$3._0,
              b: e$4._0,
              a: e$5._0
            }
          } : e$5;
        } else {
          color = e$4;
        }
      } else {
        color = e$3;
      }
    } else {
      color = e$2;
    }
  } else {
    color = {
      TAG: "Ok",
      _0: void 0
    };
  }
  if (color.TAG !== "Ok") {
    return color;
  }
  let damage = flag2(flags1) ? map2(readUInt16(reader, "damage"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (damage.TAG !== "Ok") {
    return damage;
  }
  let knockback = flag3(flags1) ? map2(readSingle(reader, "knockback"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (knockback.TAG !== "Ok") {
    return knockback;
  }
  let useAnimation = flag4(flags1) ? map2(readUInt16(reader, "useAnimation"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (useAnimation.TAG !== "Ok") {
    return useAnimation;
  }
  let useTime = flag5(flags1) ? map2(readUInt16(reader, "useTime"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (useTime.TAG !== "Ok") {
    return useTime;
  }
  let shoot = flag6(flags1) ? map2(readInt16(reader, "shoot"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (shoot.TAG !== "Ok") {
    return shoot;
  }
  let shootSpeed = flag7(flags1) ? map2(readSingle(reader, "shootSpeed"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (shootSpeed.TAG !== "Ok") {
    return shootSpeed;
  }
  let e$6;
  if (flag8(flags1)) {
    let e$7 = readByte(reader, "flags2");
    e$6 = e$7.TAG === "Ok" ? parseFlags2(reader, fromByte(e$7._0)) : e$7;
  } else {
    e$6 = {
      TAG: "Ok",
      _0: [
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      ]
    };
  }
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let match = e$6._0;
  return {
    TAG: "Ok",
    _0: {
      itemId: e._0,
      color: color._0,
      damage: damage._0,
      knockback: knockback._0,
      useAnimation: useAnimation._0,
      useTime: useTime._0,
      shoot: shoot._0,
      shootSpeed: shootSpeed._0,
      width: match[0],
      height: match[1],
      scale: match[2],
      ammo: match[3],
      useAmmo: match[4],
      notAmmo: match[5]
    }
  };
}

// src/packetv1449/PacketV1449_ItemFramePlace.js
function parse128(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "itemId");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "prefix");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "stack");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        itemId: e$2._0,
        prefix: e$3._0,
        stack: e$4._0
      }
    };
  } else {
    return e$4;
  }
}

// src/packetv1449/PacketV1449_LucyAxeMessage.js
function parse129(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "source");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "variant");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "velocityX");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "velocityY");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let velocity_x = e$2._0;
  let velocity_y = e$3._0;
  let velocity = {
    x: velocity_x,
    y: velocity_y
  };
  let e$4 = readInt32(reader, "positionX");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readInt32(reader, "positionY");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let position_x = e$4._0;
  let position_y = e$5._0;
  let position = {
    x: position_x,
    y: position_y
  };
  return {
    TAG: "Ok",
    _0: {
      source: e._0,
      variant: e$1._0,
      velocity,
      position
    }
  };
}

// src/packetv1449/PacketV1449_TileSquareSend.js
function parse130(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "tileX");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "tileY");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "width");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let width = e$2._0;
  let e$3 = readByte(reader, "height");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let height = e$3._0;
  let e$4 = readByte(reader, "changeType");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let readTile = () => {
    let e2 = readByte(reader, "flags1");
    if (e2.TAG !== "Ok") {
      return e2;
    }
    let flags1 = fromByte(e2._0);
    let e$12 = readByte(reader, "flags2");
    if (e$12.TAG !== "Ok") {
      return e$12;
    }
    let flags2 = fromByte(e$12._0);
    let e$22 = readByte(reader, "flags3");
    if (e$22.TAG !== "Ok") {
      return e$22;
    }
    let active = flag1(flags1);
    let hasWall = flag3(flags1);
    let hasLiquid = flag4(flags1);
    let wire = flag5(flags1);
    let halfBrick = flag6(flags1);
    let actuator = flag7(flags1);
    let inActive = flag8(flags1);
    let wire2 = flag1(flags2);
    let wire3 = flag2(flags2);
    let e$32;
    if (flag3(flags2)) {
      let e$42 = readByte(reader, "color");
      e$32 = e$42.TAG === "Ok" ? {
        TAG: "Ok",
        _0: e$42._0
      } : e$42;
    } else {
      e$32 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$32.TAG !== "Ok") {
      return e$32;
    }
    let e$5;
    if (flag4(flags2)) {
      let e$6 = readByte(reader, "wallColor");
      e$5 = e$6.TAG === "Ok" ? {
        TAG: "Ok",
        _0: e$6._0
      } : e$6;
    } else {
      e$5 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$5.TAG !== "Ok") {
      return e$5;
    }
    let e$7;
    if (active) {
      let e$8 = readUInt16(reader, "tileType");
      if (e$8.TAG === "Ok") {
        let tileType = e$8._0;
        let e$9;
        if (isImportant2(tileType)) {
          let e$10 = readInt16(reader, "frameX");
          if (e$10.TAG === "Ok") {
            let e$11 = readInt16(reader, "frameY");
            e$9 = e$11.TAG === "Ok" ? {
              TAG: "Ok",
              _0: {
                x: e$10._0,
                y: e$11._0
              }
            } : e$11;
          } else {
            e$9 = e$10;
          }
        } else {
          e$9 = {
            TAG: "Ok",
            _0: void 0
          };
        }
        if (e$9.TAG === "Ok") {
          let slope = ((0 + (flag5(flags2) ? 1 : 0) | 0) + (flag6(flags2) ? 2 : 0) | 0) + (flag7(flags2) ? 4 : 0) | 0;
          e$7 = {
            TAG: "Ok",
            _0: {
              tileType,
              slope,
              frame: e$9._0
            }
          };
        } else {
          e$7 = e$9;
        }
      } else {
        e$7 = e$8;
      }
    } else {
      e$7 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$7.TAG !== "Ok") {
      return e$7;
    }
    let e$122;
    if (hasWall) {
      let e$13 = readUInt16(reader, "wall");
      e$122 = e$13.TAG === "Ok" ? {
        TAG: "Ok",
        _0: e$13._0
      } : e$13;
    } else {
      e$122 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$122.TAG !== "Ok") {
      return e$122;
    }
    let e$14;
    if (hasLiquid) {
      let e$15 = readByte(reader, "liquidValue");
      if (e$15.TAG === "Ok") {
        let e$16 = readByte(reader, "liquidType");
        e$14 = e$16.TAG === "Ok" ? {
          TAG: "Ok",
          _0: {
            liquidValue: e$15._0,
            liquidType: e$16._0
          }
        } : e$16;
      } else {
        e$14 = e$15;
      }
    } else {
      e$14 = {
        TAG: "Ok",
        _0: void 0
      };
    }
    if (e$14.TAG !== "Ok") {
      return e$14;
    }
    let wire4 = flag8(flags2);
    return {
      TAG: "Ok",
      _0: {
        wire,
        halfBrick,
        actuator,
        inActive,
        wire2,
        wire3,
        wire4,
        color: e$32._0,
        wallColor: e$5._0,
        activeTile: e$7._0,
        wall: e$122._0,
        liquid: e$14._0,
        coatHeader: e$22._0
      }
    };
  };
  let tiles = [];
  let parseResult = {
    TAG: "Ok",
    _0: void 0
  };
  for (let _x = 0; _x < width; ++_x) {
    let match = parseResult;
    if (match.TAG === "Ok") {
      let column = [];
      for (let _y = 0; _y < height; ++_y) {
        let match$1 = parseResult;
        if (match$1.TAG === "Ok") {
          let tile = readTile();
          if (tile.TAG === "Ok") {
            column.push(tile._0);
          } else {
            parseResult = {
              TAG: "Error",
              _0: tile._0
            };
          }
        }
      }
      let match$2 = parseResult;
      if (match$2.TAG === "Ok") {
        tiles.push(column);
      }
    }
  }
  let err = parseResult;
  if (err.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        width,
        height,
        changeType: e$4._0,
        tileX: e._0,
        tileY: e$1._0,
        tiles
      }
    };
  } else {
    return {
      TAG: "Error",
      _0: err._0
    };
  }
}

// src/packetv1449/PacketV1449_LegacySoundPlay.js
function parse131(payload) {
  let reader = new packetreader_default(payload);
  let e = readSingle(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readUInt16(reader, "soundIndex");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "flags");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let flags = fromByte(e$3._0);
  let e$4 = flag1(flags) ? map2(readInt32(reader, "styleOverride"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = flag2(flags) ? map2(readSingle(reader, "volumeOverride"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = flag3(flags) ? map2(readSingle(reader, "pitchOverride"), (v) => v) : {
    TAG: "Ok",
    _0: void 0
  };
  if (e$6.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        position: {
          x: e._0,
          y: e$1._0
        },
        soundIndex: e$2._0,
        styleOverride: e$4._0,
        volumeOverride: e$5._0,
        pitchOverride: e$6._0
      }
    };
  } else {
    return e$6;
  }
}

// src/packetv1449/PacketV1449_PlayerHealOther.js
function parse132(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "healAmount");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        healAmount: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_PlayerSpawnSelf.js
function parse133(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}

// src/packetv1449/PacketV1449_CombatTextCreate.js
function parse134(payload) {
  let reader = new packetreader_default(payload);
  let e = readSingle(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readColor(reader, "color");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readNetworkText(reader, "text");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        color: e$2._0,
        text: e$3._0
      }
    };
  } else {
    return e$3;
  }
}

// src/packetv1449/PacketV1449_NpcSpecialEffect.js
function parse135(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "effectType");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        effectType: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_PasswordRequired.js
function parse136(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}

// src/packetv1449/PacketV1449_EventNotification.js
function parse137(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "eventId");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        eventId: e._0
      }
    };
  } else {
    return e;
  }
}

// src/packetv1449/PacketV1449_GolfBallLandInCup.js
function parse138(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "cupX");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readUInt16(reader, "cupY");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readUInt16(reader, "projId");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readUInt16(reader, "projType");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        cupX: e$1._0,
        cupY: e$2._0,
        projId: e$3._0,
        projType: e$4._0
      }
    };
  } else {
    return e$4;
  }
}

// src/packetv1449/PacketV1449_MassWireOperation.js
function parse139(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "startX");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "startY");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "endX");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt16(reader, "endY");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readByte(reader, "toolMode");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        startX: e._0,
        startY: e$1._0,
        endX: e$2._0,
        endY: e$3._0,
        toolMode: e$4._0
      }
    };
  } else {
    return e$4;
  }
}

// src/packetv1449/PacketV1449_MoonLordCountdown.js
function parse140(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "maxMoonLordCountdown");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "moonLordCountdown");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        maxMoonLordCountdown: e._0,
        moonLordCountdown: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_ProjectileDestroy.js
function parse141(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "projectileId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readByte(reader, "owner");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        projectileId: e._0,
        owner: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_RevengeMarkerSync.js
function parse142(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "uniqueId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "posX");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "posY");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt32(reader, "npcNetId");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readSingle(reader, "npcHpPercent");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readInt32(reader, "npcTypeAgainstDiscouragement");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readInt32(reader, "npcAiStyleAgainstDiscouragement");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readInt32(reader, "coinValue");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$8 = readSingle(reader, "baseValue");
  if (e$8.TAG !== "Ok") {
    return e$8;
  }
  let e$9 = readBool(reader, "spawnedFromStatue");
  if (e$9.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        uniqueId: e._0,
        position: {
          x: e$1._0,
          y: e$2._0
        },
        npcNetId: e$3._0,
        npcHpPercent: e$4._0,
        npcTypeAgainstDiscouragement: e$5._0,
        npcAiStyleAgainstDiscouragement: e$6._0,
        coinValue: e$7._0,
        baseValue: e$8._0,
        spawnedFromStatue: e$9._0
      }
    };
  } else {
    return e$9;
  }
}

// src/packetv1449/PacketV1449_CombatNumberCreate.js
function parse143(payload) {
  let reader = new packetreader_default(payload);
  let e = readSingle(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readColor(reader, "color");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readInt32(reader, "amount");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        color: e$2._0,
        amount: e$3._0
      }
    };
  } else {
    return e$3;
  }
}

// src/packetv1449/PacketV1449_MinionTargetUpdate.js
function parse144(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "y");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        x: e$1._0,
        y: e$2._0
      }
    };
  } else {
    return e$2;
  }
}

// src/packetv1449/PacketV1449_ActiveContainerSync.js
function parse145(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "chestId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "nameLength");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let nameLength = e$3._0;
  let e$4 = nameLength > 0 && nameLength <= 20 ? readString(reader, "name") : {
    TAG: "Ok",
    _0: ""
  };
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        chestId: e._0,
        x: e$1._0,
        y: e$2._0,
        nameLength,
        name: e$4._0
      }
    };
  } else {
    return e$4;
  }
}

// src/packetv1449/PacketV1449_RevengeMarkerRemove.js
function parse146(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "markerId");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        markerId: e._0
      }
    };
  } else {
    return e;
  }
}

// src/packetv1449/PacketV1449_MassWireOperationPay.js
function parse147(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "itemType");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "stack");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readByte(reader, "playerId");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        itemType: e._0,
        stack: e$1._0,
        playerId: e$2._0
      }
    };
  } else {
    return e$2;
  }
}

// src/packetv1449/PacketV1449_PlayerTeleportPortal.js
function parse148(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "extraInfo");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "positionX");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "positionY");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let position_x = e$2._0;
  let position_y = e$3._0;
  let position = {
    x: position_x,
    y: position_y
  };
  let e$4 = readSingle(reader, "velocityX");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readSingle(reader, "velocityY");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let velocity_x = e$4._0;
  let velocity_y = e$5._0;
  let velocity = {
    x: velocity_x,
    y: velocity_y
  };
  return {
    TAG: "Ok",
    _0: {
      playerId: e._0,
      extraInfo: e$1._0,
      position,
      velocity
    }
  };
}

// src/packetv1449/PacketV1449_CavernMonsterTypeSync.js
function parse149(payload) {
  let reader = new packetreader_default(payload);
  let rows = make2(2, []);
  let error;
  for (let i = 0; i <= 1; ++i) {
    if (error !== void 0) {
      let row = make2(3, 0);
      for (let j = 0; j <= 2; ++j) {
        if (error !== void 0) {
          let value = readUInt16(reader, `monster_` + i.toString() + `_` + j.toString());
          if (value.TAG === "Ok") {
            row[j] = value._0;
          } else {
            error = value._0;
          }
        }
      }
      rows[i] = row;
    }
  }
  let err = error;
  if (err !== void 0) {
    return {
      TAG: "Error",
      _0: err
    };
  } else {
    return {
      TAG: "Ok",
      _0: rows
    };
  }
}

// src/packetv1449/PacketV1449_ClientSyncedInventory.js
function parse150(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}

// src/packetv1449/PacketV1449_FoodPlatterTryPlacing.js
function parse151(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "x");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "y");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, "itemId");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readByte(reader, "prefix");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readInt16(reader, "stack");
  if (e$4.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        x: e._0,
        y: e$1._0,
        itemId: e$2._0,
        prefix: e$3._0,
        stack: e$4._0
      }
    };
  } else {
    return e$4;
  }
}

// src/packetv1449/PacketV1449_NpcKilledNotification.js
function parse152(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "npcId");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        npcId: e._0
      }
    };
  } else {
    return e;
  }
}

// src/packetv1449/PacketV1449_ShieldStrengthsUpdate.js
function parse153(payload) {
  let reader = new packetreader_default(payload);
  let e = readUInt16(reader, "solar");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readUInt16(reader, "vortex");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readUInt16(reader, "nebula");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readUInt16(reader, "stardust");
  if (e$3.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        solar: e._0,
        vortex: e$1._0,
        nebula: e$2._0,
        stardust: e$3._0
      }
    };
  } else {
    return e$3;
  }
}

// src/packetv1449/PacketV1449_CrystalInvasionWipeAll.js
function parse154(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}

// src/packetv1449/PacketV1449_ItemDropInstancedUpdate.js
var parse155 = parse18;

// src/packetv1449/PacketV1449_ItemDropProtectedUpdate.js
function parse156(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt16(reader, "itemDropId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readSingle(reader, "x");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readSingle(reader, "y");
  if (e$2.TAG !== "Ok") {
    return e$2;
  }
  let e$3 = readSingle(reader, "vx");
  if (e$3.TAG !== "Ok") {
    return e$3;
  }
  let e$4 = readSingle(reader, "vy");
  if (e$4.TAG !== "Ok") {
    return e$4;
  }
  let e$5 = readInt16(reader, "stack");
  if (e$5.TAG !== "Ok") {
    return e$5;
  }
  let e$6 = readByte(reader, "prefix");
  if (e$6.TAG !== "Ok") {
    return e$6;
  }
  let e$7 = readByte(reader, "noDelay");
  if (e$7.TAG !== "Ok") {
    return e$7;
  }
  let e$8 = readInt16(reader, "itemId");
  if (e$8.TAG !== "Ok") {
    return e$8;
  }
  let e$9 = readByte(reader, "timeLeftInWhichTheItemCannotBeTakenByEnemies");
  if (e$9.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        itemDropId: e._0,
        x: e$1._0,
        y: e$2._0,
        vx: e$3._0,
        vy: e$4._0,
        stack: e$5._0,
        prefix: e$6._0,
        noDelay: e$7._0,
        itemId: e$8._0,
        timeLeftInWhichTheItemCannotBeTakenByEnemies: e$9._0
      }
    };
  } else {
    return e$9;
  }
}

// src/packetv1449/PacketV1449_PiggyBankVoidLensUpdate.js
function tryReading(reader, context) {
  let e = readInt16(reader, context);
  if (e.TAG !== "Ok") {
    return e;
  }
  if (e._0 !== -1) {
    return {
      TAG: "Ok",
      _0: void 0
    };
  }
  let e$1 = readInt16(reader, context + "_expectedIdentity");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt16(reader, context + "_expectedType");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        expectedIdentity: e$1._0,
        expectedType: e$2._0
      }
    };
  } else {
    return e$2;
  }
}
function parse157(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = tryReading(reader, "piggyBankProj");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = tryReading(reader, "voidLensChest");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        piggyBankProj: e$1._0,
        voidLensChest: e$2._0
      }
    };
  } else {
    return e$2;
  }
}

// src/packetv1449/PacketV1449_MinionAttackTargetUpdate.js
function parse158(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt16(reader, "targetNpcId");
  if (e$1.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        targetNpcId: e$1._0
      }
    };
  } else {
    return e$1;
  }
}

// src/packetv1449/PacketV1449_AnglerQuestsCompletedAmount.js
function parse159(payload) {
  let reader = new packetreader_default(payload);
  let e = readByte(reader, "playerId");
  if (e.TAG !== "Ok") {
    return e;
  }
  let e$1 = readInt32(reader, "anglerQuestsFinished");
  if (e$1.TAG !== "Ok") {
    return e$1;
  }
  let e$2 = readInt32(reader, "golferScoreAccumulated");
  if (e$2.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        playerId: e._0,
        anglerQuestsFinished: e$1._0,
        golferScoreAccumulated: e$2._0
      }
    };
  } else {
    return e$2;
  }
}

// src/packetv1449/PacketV1449_CrystalInvasionSendWaitTime.js
function parse160(payload) {
  let reader = new packetreader_default(payload);
  let e = readInt32(reader, "timeLeftBetweenWaves");
  if (e.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: {
        timeLeftBetweenWaves: e._0
      }
    };
  } else {
    return e;
  }
}

// src/packetv1449/PacketV1449_DungeonDefendersEventAttemptSkipWait.js
function parse161(_payload) {
  return {
    TAG: "Ok",
    _0: void 0
  };
}

// src/Parser.js
function packetTypeName(packetType) {
  switch (packetType) {
    case "ConnectRequest":
      return "ConnectRequest";
    case "Disconnect":
      return "Disconnect";
    case "PlayerSlotSet":
      return "PlayerSlotSet";
    case "PlayerInfo":
      return "PlayerInfo";
    case "PlayerInventorySlot":
      return "PlayerInventorySlot";
    case "WorldDataRequest":
      return "WorldDataRequest";
    case "WorldInfo":
      return "WorldInfo";
    case "InitialTileSectionsRequest":
      return "InitialTileSectionsRequest";
    case "Status":
      return "Status";
    case "TileSectionSend":
      return "TileSectionSend";
    case "TileSectionFrame":
      return "TileSectionFrame";
    case "PlayerSpawn":
      return "PlayerSpawn";
    case "PlayerUpdate":
      return "PlayerUpdate";
    case "PlayerActive":
      return "PlayerActive";
    case "PlayerHealth":
      return "PlayerHealth";
    case "TileModify":
      return "TileModify";
    case "TimeSet":
      return "TimeSet";
    case "DoorUse":
      return "DoorUse";
    case "TileSquareSend":
      return "TileSquareSend";
    case "ItemDropUpdate":
      return "ItemDropUpdate";
    case "ItemOwner":
      return "ItemOwner";
    case "NpcUpdate":
      return "NpcUpdate";
    case "NpcItemStrike":
      return "NpcItemStrike";
    case "ProjectileSync":
      return "ProjectileSync";
    case "NpcStrike":
      return "NpcStrike";
    case "ProjectileDestroy":
      return "ProjectileDestroy";
    case "PvpToggle":
      return "PvpToggle";
    case "ChestOpen":
      return "ChestOpen";
    case "ChestItem":
      return "ChestItem";
    case "ActiveContainerSync":
      return "ActiveContainerSync";
    case "ChestPlace":
      return "ChestPlace";
    case "HealEffect":
      return "HealEffect";
    case "Zones":
      return "Zones";
    case "PasswordRequired":
      return "PasswordRequired";
    case "PasswordSend":
      return "PasswordSend";
    case "ItemOwnerRemove":
      return "ItemOwnerRemove";
    case "NpcTalk":
      return "NpcTalk";
    case "PlayerAnimation":
      return "PlayerAnimation";
    case "PlayerMana":
      return "PlayerMana";
    case "ManaEffect":
      return "ManaEffect";
    case "PlayerTeam":
      return "PlayerTeam";
    case "SignRead":
      return "SignRead";
    case "SignNew":
      return "SignNew";
    case "LiquidSet":
      return "LiquidSet";
    case "PlayerSpawnSelf":
      return "PlayerSpawnSelf";
    case "PlayerBuffsSet":
      return "PlayerBuffsSet";
    case "NpcSpecialEffect":
      return "NpcSpecialEffect";
    case "ChestOrTempleUnlock":
      return "ChestOrTempleUnlock";
    case "NpcBuffAdd":
      return "NpcBuffAdd";
    case "NpcBuffUpdate":
      return "NpcBuffUpdate";
    case "PlayerBuffAdd":
      return "PlayerBuffAdd";
    case "NpcNameUpdate":
      return "NpcNameUpdate";
    case "GoodEvilUpdate":
      return "GoodEvilUpdate";
    case "HarpPlay":
      return "HarpPlay";
    case "SwitchHit":
      return "SwitchHit";
    case "NpcHomeUpdate":
      return "NpcHomeUpdate";
    case "BossOrInvasionSpawn":
      return "BossOrInvasionSpawn";
    case "PlayerDodge":
      return "PlayerDodge";
    case "TilePaint":
      return "TilePaint";
    case "WallPaint":
      return "WallPaint";
    case "Teleport":
      return "Teleport";
    case "PlayerHealOther":
      return "PlayerHealOther";
    case "DimensionsUpdate":
      return "DimensionsUpdate";
    case "ClientUuid":
      return "ClientUuid";
    case "ChestName":
      return "ChestName";
    case "NpcCatch":
      return "NpcCatch";
    case "NpcRelease":
      return "NpcRelease";
    case "TravellingMerchantInventory":
      return "TravellingMerchantInventory";
    case "TeleportationPotion":
      return "TeleportationPotion";
    case "AnglerQuest":
      return "AnglerQuest";
    case "AnglerQuestComplete":
      return "AnglerQuestComplete";
    case "AnglerQuestsCompletedAmount":
      return "AnglerQuestsCompletedAmount";
    case "TemporaryAnimationCreate":
      return "TemporaryAnimationCreate";
    case "InvasionProgressReport":
      return "InvasionProgressReport";
    case "ObjectPlace":
      return "ObjectPlace";
    case "PlayerChestIndexSync":
      return "PlayerChestIndexSync";
    case "CombatNumberCreate":
      return "CombatNumberCreate";
    case "NetModuleLoad":
      return "NetModuleLoad";
    case "NpcKillCount":
      return "NpcKillCount";
    case "PlayerStealth":
      return "PlayerStealth";
    case "ItemForceIntoNearestChest":
      return "ItemForceIntoNearestChest";
    case "TileEntityUpdate":
      return "TileEntityUpdate";
    case "TileEntityPlace":
      return "TileEntityPlace";
    case "ItemDropModify":
      return "ItemDropModify";
    case "ItemFramePlace":
      return "ItemFramePlace";
    case "ItemDropInstancedUpdate":
      return "ItemDropInstancedUpdate";
    case "EmoteBubble":
      return "EmoteBubble";
    case "ExtraValueSync":
      return "ExtraValueSync";
    case "SocialHandshake":
      return "SocialHandshake";
    case "Unused":
      return "Unused";
    case "PortalKill":
      return "PortalKill";
    case "PlayerTeleportPortal":
      return "PlayerTeleportPortal";
    case "NpcKilledNotification":
      return "NpcKilledNotification";
    case "EventNotification":
      return "EventNotification";
    case "MinionTargetUpdate":
      return "MinionTargetUpdate";
    case "NpcTeleportPortal":
      return "NpcTeleportPortal";
    case "ShieldStrengthsUpdate":
      return "ShieldStrengthsUpdate";
    case "NebulaLevelUp":
      return "NebulaLevelUp";
    case "MoonLordCountdown":
      return "MoonLordCountdown";
    case "NpcShopItem":
      return "NpcShopItem";
    case "GemLockToggle":
      return "GemLockToggle";
    case "SmokePoof":
      return "SmokePoof";
    case "ChatMessageSmart":
      return "ChatMessageSmart";
    case "WiredCannonShot":
      return "WiredCannonShot";
    case "MassWireOperation":
      return "MassWireOperation";
    case "MassWireOperationPay":
      return "MassWireOperationPay";
    case "PartyToggle":
      return "PartyToggle";
    case "TreeGrowFx":
      return "TreeGrowFx";
    case "CrystalInvasionStart":
      return "CrystalInvasionStart";
    case "CrystalInvasionWipeAll":
      return "CrystalInvasionWipeAll";
    case "MinionAttackTargetUpdate":
      return "MinionAttackTargetUpdate";
    case "CrystalInvasionSendWaitTime":
      return "CrystalInvasionSendWaitTime";
    case "PlayerDamage":
      return "PlayerDamage";
    case "PlayerDeath":
      return "PlayerDeath";
    case "CombatTextCreate":
      return "CombatTextCreate";
    case "Emoji":
      return "Emoji";
    case "TileEntityDisplayDollItemSync":
      return "TileEntityDisplayDollItemSync";
    case "TileEntityInteractionRequest":
      return "TileEntityInteractionRequest";
    case "WeaponsRackTryPlacing":
      return "WeaponsRackTryPlacing";
    case "TileEntityHatRackItemSync":
      return "TileEntityHatRackItemSync";
    case "TilePickingSync":
      return "TilePickingSync";
    case "RevengeMarkerSync":
      return "RevengeMarkerSync";
    case "RevengeMarkerRemove":
      return "RevengeMarkerRemove";
    case "GolfBallLandInCup":
      return "GolfBallLandInCup";
    case "ClientFinishConnectingToServer":
      return "ClientFinishConnectingToServer";
    case "NpcFishOut":
      return "NpcFishOut";
    case "NpcTamper":
      return "NpcTamper";
    case "LegacySoundPlay":
      return "LegacySoundPlay";
    case "FoodPlatterTryPlacing":
      return "FoodPlatterTryPlacing";
    case "PlayerLuckFactorsUpdate":
      return "PlayerLuckFactorsUpdate";
    case "PlayerDead":
      return "PlayerDead";
    case "CavernMonsterTypeSync":
      return "CavernMonsterTypeSync";
    case "NpcBuffRemovalRequest":
      return "NpcBuffRemovalRequest";
    case "ClientSyncedInventory":
      return "ClientSyncedInventory";
    case "CountsAsHostForGameplaySet":
      return "CountsAsHostForGameplaySet";
    case "CreditsOrSlimeTransform":
      return "CreditsOrSlimeTransform";
    case "LucyAxeMessage":
      return "LucyAxeMessage";
    case "PiggyBankVoidLensUpdate":
      return "PiggyBankVoidLensUpdate";
    case "DungeonDefendersEventAttemptSkipWait":
      return "DungeonDefendersEventAttemptSkipWait";
    case "HaveDryadDoStardewAnimation":
      return "HaveDryadDoStardewAnimation";
    case "ItemDropShimmeredUpdate":
      return "ItemDropShimmeredUpdate";
    case "ShimmerEffectOrCoinLuck":
      return "ShimmerEffectOrCoinLuck";
    case "LoadoutSwitch":
      return "LoadoutSwitch";
    case "ItemDropProtectedUpdate":
      return "ItemDropProtectedUpdate";
    case "DeadCellsDisplayJarTryPlacing":
      return "DeadCellsDisplayJarTryPlacing";
    case "PlayerSpectate":
      return "PlayerSpectate";
    case "ItemDropClear":
      return "ItemDropClear";
    case "PlayerItemUseSound":
      return "PlayerItemUseSound";
    case "NpcHurtByDebuff":
      return "NpcHurtByDebuff";
    case "Ping":
      return "Ping";
    case "ChestResize":
      return "ChestResize";
    case "LeashedEntityAnchorInsertItem":
      return "LeashedEntityAnchorInsertItem";
    case "PlayerTeamUpdate":
      return "PlayerTeamUpdate";
    case "PlayerTeamSwapSpawn":
      return "PlayerTeamSwapSpawn";
    case "SectionRequest":
      return "SectionRequest";
    case "ItemDropPosition":
      return "ItemDropPosition";
    case "HostToken":
      return "HostToken";
  }
}
function addPacketContext(packetName2, err) {
  return {
    context: "Packet " + packetName2 + ": " + err.context,
    error: err.error
  };
}
function mapPacket(result, packetName2, fn) {
  return mapError(map2(result, fn), (e) => ({
    TAG: "ReaderError",
    _0: addPacketContext(packetName2, e)
  }));
}
function makeParsers(packetName2, parse163, toPacket, toLazyPacket) {
  let parseWrapped = (payload, _fromServer) => mapPacket(parse163(payload), packetName2, toPacket);
  let parseLazyWrapped = (payload, _fromServer) => ({
    TAG: "Ok",
    _0: toLazyPacket(make4(() => mapError(parse163(payload), (e) => addPacketContext(packetName2, e))))
  });
  return {
    parse: parseWrapped,
    parseLazy: parseLazyWrapped
  };
}
function makeParsersWithFromServer(packetName2, parse163, toPacket, toLazyPacket) {
  let parseWrapped = (payload, fromServer) => mapPacket(parse163(payload, fromServer), packetName2, toPacket);
  let parseLazyWrapped = (payload, fromServer) => ({
    TAG: "Ok",
    _0: toLazyPacket(make4(() => mapError(parse163(payload, fromServer), (e) => addPacketContext(packetName2, e))))
  });
  return {
    parse: parseWrapped,
    parseLazy: parseLazyWrapped
  };
}
function getParsers(packetType, fromServer) {
  let packetName2 = packetTypeName(packetType);
  switch (packetType) {
    case "ConnectRequest":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "ConnectRequestFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse9, (a) => ({
            TAG: "ConnectRequest",
            _0: a
          }), (a) => ({
            TAG: "ConnectRequest",
            _0: a
          }))
        };
      }
    case "Disconnect":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse106, (a) => ({
            TAG: "Disconnect",
            _0: a
          }), (a) => ({
            TAG: "Disconnect",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "DisconnectFromClient"
        };
      }
    case "PlayerSlotSet":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse94, (a) => ({
            TAG: "PlayerSlotSet",
            _0: a
          }), (a) => ({
            TAG: "PlayerSlotSet",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "PlayerSlotSetFromClient"
        };
      }
    case "PlayerInfo":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse96, (a) => ({
          TAG: "PlayerInfo",
          _0: a
        }), (a) => ({
          TAG: "PlayerInfo",
          _0: a
        }))
      };
    case "PlayerInventorySlot":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse98, (a) => ({
          TAG: "PlayerInventorySlot",
          _0: a
        }), (a) => ({
          TAG: "PlayerInventorySlot",
          _0: a
        }))
      };
    case "WorldDataRequest":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "WorldDataRequestFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse75, (a) => ({
            TAG: "WorldDataRequest",
            _0: a
          }), (a) => ({
            TAG: "WorldDataRequest",
            _0: a
          }))
        };
      }
    case "WorldInfo":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse103, (a) => ({
            TAG: "WorldInfo",
            _0: a
          }), (a) => ({
            TAG: "WorldInfo",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "WorldInfoFromClient"
        };
      }
    case "InitialTileSectionsRequest":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "InitialTileSectionsRequestFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse81, (a) => ({
            TAG: "InitialTileSectionsRequest",
            _0: a
          }), (a) => ({
            TAG: "InitialTileSectionsRequest",
            _0: a
          }))
        };
      }
    case "Status":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse51, (a) => ({
            TAG: "Status",
            _0: a
          }), (a) => ({
            TAG: "Status",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "StatusFromClient"
        };
      }
    case "TileSectionSend":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse$13, (a) => ({
            TAG: "TileSectionSend",
            _0: a
          }), (a) => ({
            TAG: "TileSectionSend",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "TileSectionSendFromClient"
        };
      }
    case "TileSectionFrame":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse64, (a) => ({
            TAG: "TileSectionFrame",
            _0: a
          }), (a) => ({
            TAG: "TileSectionFrame",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "TileSectionFrameFromClient"
        };
      }
    case "PlayerSpawn":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse97, (a) => ({
          TAG: "PlayerSpawn",
          _0: a
        }), (a) => ({
          TAG: "PlayerSpawn",
          _0: a
        }))
      };
    case "PlayerUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse95, (a) => ({
          TAG: "PlayerUpdate",
          _0: a
        }), (a) => ({
          TAG: "PlayerUpdate",
          _0: a
        }))
      };
    case "PlayerActive":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse104, (a) => ({
            TAG: "PlayerActive",
            _0: a
          }), (a) => ({
            TAG: "PlayerActive",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "PlayerActiveFromClient"
        };
      }
    case "PlayerHealth":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse99, (a) => ({
          TAG: "PlayerHealth",
          _0: a
        }), (a) => ({
          TAG: "PlayerHealth",
          _0: a
        }))
      };
    case "TileModify":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse61, (a) => ({
          TAG: "TileModify",
          _0: a
        }), (a) => ({
          TAG: "TileModify",
          _0: a
        }))
      };
    case "TimeSet":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse68, (a) => ({
            TAG: "TimeSet",
            _0: a
          }), (a) => ({
            TAG: "TimeSet",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "TimeSetFromClient"
        };
      }
    case "DoorUse":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse108, (a) => ({
          TAG: "DoorUse",
          _0: a
        }), (a) => ({
          TAG: "DoorUse",
          _0: a
        }))
      };
    case "TileSquareSend":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse130, (a) => ({
          TAG: "TileSquareSend",
          _0: a
        }), (a) => ({
          TAG: "TileSquareSend",
          _0: a
        }))
      };
    case "ItemDropUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse18, (a) => ({
          TAG: "ItemDropUpdate",
          _0: a
        }), (a) => ({
          TAG: "ItemDropUpdate",
          _0: a
        }))
      };
    case "ItemOwner":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse19, (a) => ({
          TAG: "ItemOwner",
          _0: a
        }), (a) => ({
          TAG: "ItemOwner",
          _0: a
        }))
      };
    case "NpcUpdate":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse105, (a) => ({
            TAG: "NpcUpdate",
            _0: a
          }), (a) => ({
            TAG: "NpcUpdate",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "NpcUpdateFromClient"
        };
      }
    case "NpcItemStrike":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse124, (a) => ({
          TAG: "NpcItemStrike",
          _0: a
        }), (a) => ({
          TAG: "NpcItemStrike",
          _0: a
        }))
      };
    case "ProjectileSync":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse101, (a) => ({
          TAG: "ProjectileSync",
          _0: a
        }), (a) => ({
          TAG: "ProjectileSync",
          _0: a
        }))
      };
    case "NpcStrike":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse113, (a) => ({
          TAG: "NpcStrike",
          _0: a
        }), (a) => ({
          TAG: "NpcStrike",
          _0: a
        }))
      };
    case "ProjectileDestroy":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse141, (a) => ({
          TAG: "ProjectileDestroy",
          _0: a
        }), (a) => ({
          TAG: "ProjectileDestroy",
          _0: a
        }))
      };
    case "PvpToggle":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse45, (a) => ({
          TAG: "PvpToggle",
          _0: a
        }), (a) => ({
          TAG: "PvpToggle",
          _0: a
        }))
      };
    case "ChestOpen":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "ChestOpenFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse111, (a) => ({
            TAG: "ChestOpen",
            _0: a
          }), (a) => ({
            TAG: "ChestOpen",
            _0: a
          }))
        };
      }
    case "ChestItem":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse5, (a) => ({
          TAG: "ChestItem",
          _0: a
        }), (a) => ({
          TAG: "ChestItem",
          _0: a
        }))
      };
    case "ActiveContainerSync":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse145, (a) => ({
          TAG: "ActiveContainerSync",
          _0: a
        }), (a) => ({
          TAG: "ActiveContainerSync",
          _0: a
        }))
      };
    case "ChestPlace":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse7, (a) => ({
          TAG: "ChestPlace",
          _0: a
        }), (a) => ({
          TAG: "ChestPlace",
          _0: a
        }))
      };
    case "HealEffect":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse115, (a) => ({
          TAG: "HealEffect",
          _0: a
        }), (a) => ({
          TAG: "HealEffect",
          _0: a
        }))
      };
    case "Zones":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse76, (a) => ({
          TAG: "Zones",
          _0: a
        }), (a) => ({
          TAG: "Zones",
          _0: a
        }))
      };
    case "PasswordRequired":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse136, (a) => ({
            TAG: "PasswordRequired",
            _0: a
          }), (a) => ({
            TAG: "PasswordRequired",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "PasswordRequiredFromClient"
        };
      }
    case "PasswordSend":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "PasswordSendFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse121, (a) => ({
            TAG: "PasswordSend",
            _0: a
          }), (a) => ({
            TAG: "PasswordSend",
            _0: a
          }))
        };
      }
    case "ItemOwnerRemove":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse20, (a) => ({
            TAG: "ItemOwnerRemove",
            _0: a
          }), (a) => ({
            TAG: "ItemOwnerRemove",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "ItemOwnerRemoveFromClient"
        };
      }
    case "NpcTalk":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse32, (a) => ({
          TAG: "NpcTalk",
          _0: a
        }), (a) => ({
          TAG: "NpcTalk",
          _0: a
        }))
      };
    case "PlayerAnimation":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse36, (a) => ({
          TAG: "PlayerAnimation",
          _0: a
        }), (a) => ({
          TAG: "PlayerAnimation",
          _0: a
        }))
      };
    case "PlayerMana":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse43, (a) => ({
          TAG: "PlayerMana",
          _0: a
        }), (a) => ({
          TAG: "PlayerMana",
          _0: a
        }))
      };
    case "ManaEffect":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse116, (a) => ({
          TAG: "ManaEffect",
          _0: a
        }), (a) => ({
          TAG: "ManaEffect",
          _0: a
        }))
      };
    case "PlayerTeam":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse44, (a) => ({
          TAG: "PlayerTeam",
          _0: a
        }), (a) => ({
          TAG: "PlayerTeam",
          _0: a
        }))
      };
    case "SignRead":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "SignReadFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse48, (a) => ({
            TAG: "SignRead",
            _0: a
          }), (a) => ({
            TAG: "SignRead",
            _0: a
          }))
        };
      }
    case "SignNew":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse47, (a) => ({
          TAG: "SignNew",
          _0: a
        }), (a) => ({
          TAG: "SignNew",
          _0: a
        }))
      };
    case "LiquidSet":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse112, (a) => ({
          TAG: "LiquidSet",
          _0: a
        }), (a) => ({
          TAG: "LiquidSet",
          _0: a
        }))
      };
    case "PlayerSpawnSelf":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse133, (a) => ({
            TAG: "PlayerSpawnSelf",
            _0: a
          }), (a) => ({
            TAG: "PlayerSpawnSelf",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "PlayerSpawnSelfFromClient"
        };
      }
    case "PlayerBuffsSet":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse38, (a) => ({
          TAG: "PlayerBuffsSet",
          _0: a
        }), (a) => ({
          TAG: "PlayerBuffsSet",
          _0: a
        }))
      };
    case "NpcSpecialEffect":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse135, (a) => ({
          TAG: "NpcSpecialEffect",
          _0: a
        }), (a) => ({
          TAG: "NpcSpecialEffect",
          _0: a
        }))
      };
    case "ChestOrTempleUnlock":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse6, (a) => ({
          TAG: "ChestOrTempleUnlock",
          _0: a
        }), (a) => ({
          TAG: "ChestOrTempleUnlock",
          _0: a
        }))
      };
    case "NpcBuffAdd":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse117, (a) => ({
          TAG: "NpcBuffAdd",
          _0: a
        }), (a) => ({
          TAG: "NpcBuffAdd",
          _0: a
        }))
      };
    case "NpcBuffUpdate":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse25, (a) => ({
            TAG: "NpcBuffUpdate",
            _0: a
          }), (a) => ({
            TAG: "NpcBuffUpdate",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "NpcBuffUpdateFromClient"
        };
      }
    case "PlayerBuffAdd":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse37, (a) => ({
          TAG: "PlayerBuffAdd",
          _0: a
        }), (a) => ({
          TAG: "PlayerBuffAdd",
          _0: a
        }))
      };
    case "NpcNameUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, (__x) => parse30(__x, fromServer), (a) => ({
          TAG: "NpcNameUpdate",
          _0: a
        }), (a) => ({
          TAG: "NpcNameUpdate",
          _0: a
        }))
      };
    case "GoodEvilUpdate":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse126, (a) => ({
            TAG: "GoodEvilUpdate",
            _0: a
          }), (a) => ({
            TAG: "GoodEvilUpdate",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "GoodEvilUpdateFromClient"
        };
      }
    case "HarpPlay":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse109, (a) => ({
          TAG: "HarpPlay",
          _0: a
        }), (a) => ({
          TAG: "HarpPlay",
          _0: a
        }))
      };
    case "SwitchHit":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse52, (a) => ({
          TAG: "SwitchHit",
          _0: a
        }), (a) => ({
          TAG: "SwitchHit",
          _0: a
        }))
      };
    case "NpcHomeUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse28, (a) => ({
          TAG: "NpcHomeUpdate",
          _0: a
        }), (a) => ({
          TAG: "NpcHomeUpdate",
          _0: a
        }))
      };
    case "BossOrInvasionSpawn":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "BossOrInvasionSpawnFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse3, (a) => ({
            TAG: "BossOrInvasionSpawn",
            _0: a
          }), (a) => ({
            TAG: "BossOrInvasionSpawn",
            _0: a
          }))
        };
      }
    case "PlayerDodge":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse42, (a) => ({
          TAG: "PlayerDodge",
          _0: a
        }), (a) => ({
          TAG: "PlayerDodge",
          _0: a
        }))
      };
    case "TilePaint":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse62, (a) => ({
          TAG: "TilePaint",
          _0: a
        }), (a) => ({
          TAG: "TilePaint",
          _0: a
        }))
      };
    case "WallPaint":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse72, (a) => ({
          TAG: "WallPaint",
          _0: a
        }), (a) => ({
          TAG: "WallPaint",
          _0: a
        }))
      };
    case "Teleport":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse53, (a) => ({
          TAG: "Teleport",
          _0: a
        }), (a) => ({
          TAG: "Teleport",
          _0: a
        }))
      };
    case "PlayerHealOther":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse132, (a) => ({
          TAG: "PlayerHealOther",
          _0: a
        }), (a) => ({
          TAG: "PlayerHealOther",
          _0: a
        }))
      };
    case "DimensionsUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse13, (a) => ({
          TAG: "DimensionsUpdate",
          _0: a
        }), (a) => ({
          TAG: "DimensionsUpdate",
          _0: a
        }))
      };
    case "ClientUuid":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "ClientUuidFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse100, (a) => ({
            TAG: "ClientUuid",
            _0: a
          }), (a) => ({
            TAG: "ClientUuid",
            _0: a
          }))
        };
      }
    case "ChestName":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse110, (a) => ({
          TAG: "ChestName",
          _0: a
        }), (a) => ({
          TAG: "ChestName",
          _0: a
        }))
      };
    case "NpcCatch":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "NpcCatchFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse26, (a) => ({
            TAG: "NpcCatch",
            _0: a
          }), (a) => ({
            TAG: "NpcCatch",
            _0: a
          }))
        };
      }
    case "NpcRelease":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "NpcReleaseFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse118, (a) => ({
            TAG: "NpcRelease",
            _0: a
          }), (a) => ({
            TAG: "NpcRelease",
            _0: a
          }))
        };
      }
    case "TravellingMerchantInventory":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse69, (a) => ({
            TAG: "TravellingMerchantInventory",
            _0: a
          }), (a) => ({
            TAG: "TravellingMerchantInventory",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "TravellingMerchantInventoryFromClient"
        };
      }
    case "TeleportationPotion":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse54, (a) => ({
          TAG: "TeleportationPotion",
          _0: a
        }), (a) => ({
          TAG: "TeleportationPotion",
          _0: a
        }))
      };
    case "AnglerQuest":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse, (a) => ({
            TAG: "AnglerQuest",
            _0: a
          }), (a) => ({
            TAG: "AnglerQuest",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "AnglerQuestFromClient"
        };
      }
    case "AnglerQuestComplete":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "AnglerQuestCompleteFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse2, (a) => ({
            TAG: "AnglerQuestComplete",
            _0: a
          }), (a) => ({
            TAG: "AnglerQuestComplete",
            _0: a
          }))
        };
      }
    case "AnglerQuestsCompletedAmount":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse159, (a) => ({
          TAG: "AnglerQuestsCompletedAmount",
          _0: a
        }), (a) => ({
          TAG: "AnglerQuestsCompletedAmount",
          _0: a
        }))
      };
    case "TemporaryAnimationCreate":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse55, (a) => ({
            TAG: "TemporaryAnimationCreate",
            _0: a
          }), (a) => ({
            TAG: "TemporaryAnimationCreate",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "TemporaryAnimationCreateFromClient"
        };
      }
    case "InvasionProgressReport":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse16, (a) => ({
            TAG: "InvasionProgressReport",
            _0: a
          }), (a) => ({
            TAG: "InvasionProgressReport",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "InvasionProgressReportFromClient"
        };
      }
    case "ObjectPlace":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse34, (a) => ({
          TAG: "ObjectPlace",
          _0: a
        }), (a) => ({
          TAG: "ObjectPlace",
          _0: a
        }))
      };
    case "PlayerChestIndexSync":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse39, (a) => ({
            TAG: "PlayerChestIndexSync",
            _0: a
          }), (a) => ({
            TAG: "PlayerChestIndexSync",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "PlayerChestIndexSyncFromClient"
        };
      }
    case "CombatNumberCreate":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse143, (a) => ({
            TAG: "CombatNumberCreate",
            _0: a
          }), (a) => ({
            TAG: "CombatNumberCreate",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "CombatNumberCreateFromClient"
        };
      }
    case "NetModuleLoad":
      return {
        TAG: "Ok",
        _0: makeParsersWithFromServer(packetName2, parse23, (a) => ({
          TAG: "NetModuleLoad",
          _0: a
        }), (a) => ({
          TAG: "NetModuleLoad",
          _0: a
        }))
      };
    case "NpcKillCount":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse29, (a) => ({
            TAG: "NpcKillCount",
            _0: a
          }), (a) => ({
            TAG: "NpcKillCount",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "NpcKillCountFromClient"
        };
      }
    case "PlayerStealth":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse125, (a) => ({
          TAG: "PlayerStealth",
          _0: a
        }), (a) => ({
          TAG: "PlayerStealth",
          _0: a
        }))
      };
    case "ItemForceIntoNearestChest":
      return {
        TAG: "Ok",
        _0: makeParsersWithFromServer(packetName2, parse84, (a) => ({
          TAG: "ItemForceIntoNearestChest",
          _0: a
        }), (a) => ({
          TAG: "ItemForceIntoNearestChest",
          _0: a
        }))
      };
    case "TileEntityUpdate":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse60, (a) => ({
            TAG: "TileEntityUpdate",
            _0: a
          }), (a) => ({
            TAG: "TileEntityUpdate",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "TileEntityUpdateFromClient"
        };
      }
    case "TileEntityPlace":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "TileEntityPlaceFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse59, (a) => ({
            TAG: "TileEntityPlace",
            _0: a
          }), (a) => ({
            TAG: "TileEntityPlace",
            _0: a
          }))
        };
      }
    case "ItemDropModify":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse127, (a) => ({
            TAG: "ItemDropModify",
            _0: a
          }), (a) => ({
            TAG: "ItemDropModify",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "ItemDropModifyFromClient"
        };
      }
    case "ItemFramePlace":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "ItemFramePlaceFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse128, (a) => ({
            TAG: "ItemFramePlace",
            _0: a
          }), (a) => ({
            TAG: "ItemFramePlace",
            _0: a
          }))
        };
      }
    case "ItemDropInstancedUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse155, (a) => ({
          TAG: "ItemDropInstancedUpdate",
          _0: a
        }), (a) => ({
          TAG: "ItemDropInstancedUpdate",
          _0: a
        }))
      };
    case "EmoteBubble":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse120, (a) => ({
            TAG: "EmoteBubble",
            _0: a
          }), (a) => ({
            TAG: "EmoteBubble",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "EmoteBubbleFromClient"
        };
      }
    case "ExtraValueSync":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse14, (a) => ({
          TAG: "ExtraValueSync",
          _0: a
        }), (a) => ({
          TAG: "ExtraValueSync",
          _0: a
        }))
      };
    case "SocialHandshake":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse50, (a) => ({
          TAG: "SocialHandshake",
          _0: a
        }), (a) => ({
          TAG: "SocialHandshake",
          _0: a
        }))
      };
    case "Unused":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse79, (a) => ({
          TAG: "Unused",
          _0: a
        }), (a) => ({
          TAG: "Unused",
          _0: a
        }))
      };
    case "PortalKill":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "PortalKillFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse119, (a) => ({
            TAG: "PortalKill",
            _0: a
          }), (a) => ({
            TAG: "PortalKill",
            _0: a
          }))
        };
      }
    case "PlayerTeleportPortal":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse148, (a) => ({
          TAG: "PlayerTeleportPortal",
          _0: a
        }), (a) => ({
          TAG: "PlayerTeleportPortal",
          _0: a
        }))
      };
    case "NpcKilledNotification":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse152, (a) => ({
            TAG: "NpcKilledNotification",
            _0: a
          }), (a) => ({
            TAG: "NpcKilledNotification",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "NpcKilledNotificationFromClient"
        };
      }
    case "EventNotification":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse137, (a) => ({
            TAG: "EventNotification",
            _0: a
          }), (a) => ({
            TAG: "EventNotification",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "EventNotificationFromClient"
        };
      }
    case "MinionTargetUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse144, (a) => ({
          TAG: "MinionTargetUpdate",
          _0: a
        }), (a) => ({
          TAG: "MinionTargetUpdate",
          _0: a
        }))
      };
    case "NpcTeleportPortal":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse33, (a) => ({
          TAG: "NpcTeleportPortal",
          _0: a
        }), (a) => ({
          TAG: "NpcTeleportPortal",
          _0: a
        }))
      };
    case "ShieldStrengthsUpdate":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse153, (a) => ({
            TAG: "ShieldStrengthsUpdate",
            _0: a
          }), (a) => ({
            TAG: "ShieldStrengthsUpdate",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "ShieldStrengthsUpdateFromClient"
        };
      }
    case "NebulaLevelUp":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse123, (a) => ({
          TAG: "NebulaLevelUp",
          _0: a
        }), (a) => ({
          TAG: "NebulaLevelUp",
          _0: a
        }))
      };
    case "MoonLordCountdown":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse140, (a) => ({
            TAG: "MoonLordCountdown",
            _0: a
          }), (a) => ({
            TAG: "MoonLordCountdown",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "MoonLordCountdownFromClient"
        };
      }
    case "NpcShopItem":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse31, (a) => ({
            TAG: "NpcShopItem",
            _0: a
          }), (a) => ({
            TAG: "NpcShopItem",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "NpcShopItemFromClient"
        };
      }
    case "GemLockToggle":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "GemLockToggleFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse122, (a) => ({
            TAG: "GemLockToggle",
            _0: a
          }), (a) => ({
            TAG: "GemLockToggle",
            _0: a
          }))
        };
      }
    case "SmokePoof":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse49, (a) => ({
            TAG: "SmokePoof",
            _0: a
          }), (a) => ({
            TAG: "SmokePoof",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "SmokePoofFromClient"
        };
      }
    case "ChatMessageSmart":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse4, (a) => ({
            TAG: "ChatMessageSmart",
            _0: a
          }), (a) => ({
            TAG: "ChatMessageSmart",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "ChatMessageSmartFromClient"
        };
      }
    case "WiredCannonShot":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse74, (a) => ({
            TAG: "WiredCannonShot",
            _0: a
          }), (a) => ({
            TAG: "WiredCannonShot",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "WiredCannonShotFromClient"
        };
      }
    case "MassWireOperation":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "MassWireOperationFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse139, (a) => ({
            TAG: "MassWireOperation",
            _0: a
          }), (a) => ({
            TAG: "MassWireOperation",
            _0: a
          }))
        };
      }
    case "MassWireOperationPay":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse147, (a) => ({
            TAG: "MassWireOperationPay",
            _0: a
          }), (a) => ({
            TAG: "MassWireOperationPay",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "MassWireOperationPayFromClient"
        };
      }
    case "PartyToggle":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "PartyToggleFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse35, (a) => ({
            TAG: "PartyToggle",
            _0: a
          }), (a) => ({
            TAG: "PartyToggle",
            _0: a
          }))
        };
      }
    case "TreeGrowFx":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse70, (a) => ({
          TAG: "TreeGrowFx",
          _0: a
        }), (a) => ({
          TAG: "TreeGrowFx",
          _0: a
        }))
      };
    case "CrystalInvasionStart":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "CrystalInvasionStartFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse12, (a) => ({
            TAG: "CrystalInvasionStart",
            _0: a
          }), (a) => ({
            TAG: "CrystalInvasionStart",
            _0: a
          }))
        };
      }
    case "CrystalInvasionWipeAll":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse154, (a) => ({
            TAG: "CrystalInvasionWipeAll",
            _0: a
          }), (a) => ({
            TAG: "CrystalInvasionWipeAll",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "CrystalInvasionWipeAllFromClient"
        };
      }
    case "MinionAttackTargetUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse158, (a) => ({
          TAG: "MinionAttackTargetUpdate",
          _0: a
        }), (a) => ({
          TAG: "MinionAttackTargetUpdate",
          _0: a
        }))
      };
    case "CrystalInvasionSendWaitTime":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse160, (a) => ({
            TAG: "CrystalInvasionSendWaitTime",
            _0: a
          }), (a) => ({
            TAG: "CrystalInvasionSendWaitTime",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "CrystalInvasionSendWaitTimeFromClient"
        };
      }
    case "PlayerDamage":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse102, (a) => ({
          TAG: "PlayerDamage",
          _0: a
        }), (a) => ({
          TAG: "PlayerDamage",
          _0: a
        }))
      };
    case "PlayerDeath":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse41, (a) => ({
          TAG: "PlayerDeath",
          _0: a
        }), (a) => ({
          TAG: "PlayerDeath",
          _0: a
        }))
      };
    case "CombatTextCreate":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse134, (a) => ({
            TAG: "CombatTextCreate",
            _0: a
          }), (a) => ({
            TAG: "CombatTextCreate",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "CombatTextCreateFromClient"
        };
      }
    case "Emoji":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "EmojiFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse107, (a) => ({
            TAG: "Emoji",
            _0: a
          }), (a) => ({
            TAG: "Emoji",
            _0: a
          }))
        };
      }
    case "TileEntityDisplayDollItemSync":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse56, (a) => ({
          TAG: "TileEntityDisplayDollItemSync",
          _0: a
        }), (a) => ({
          TAG: "TileEntityDisplayDollItemSync",
          _0: a
        }))
      };
    case "TileEntityInteractionRequest":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse58, (a) => ({
          TAG: "TileEntityInteractionRequest",
          _0: a
        }), (a) => ({
          TAG: "TileEntityInteractionRequest",
          _0: a
        }))
      };
    case "WeaponsRackTryPlacing":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "WeaponsRackTryPlacingFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse73, (a) => ({
            TAG: "WeaponsRackTryPlacing",
            _0: a
          }), (a) => ({
            TAG: "WeaponsRackTryPlacing",
            _0: a
          }))
        };
      }
    case "TileEntityHatRackItemSync":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse57, (a) => ({
          TAG: "TileEntityHatRackItemSync",
          _0: a
        }), (a) => ({
          TAG: "TileEntityHatRackItemSync",
          _0: a
        }))
      };
    case "TilePickingSync":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse63, (a) => ({
          TAG: "TilePickingSync",
          _0: a
        }), (a) => ({
          TAG: "TilePickingSync",
          _0: a
        }))
      };
    case "RevengeMarkerSync":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse142, (a) => ({
            TAG: "RevengeMarkerSync",
            _0: a
          }), (a) => ({
            TAG: "RevengeMarkerSync",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "RevengeMarkerSyncFromClient"
        };
      }
    case "RevengeMarkerRemove":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse146, (a) => ({
            TAG: "RevengeMarkerRemove",
            _0: a
          }), (a) => ({
            TAG: "RevengeMarkerRemove",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "RevengeMarkerRemoveFromClient"
        };
      }
    case "GolfBallLandInCup":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse138, (a) => ({
          TAG: "GolfBallLandInCup",
          _0: a
        }), (a) => ({
          TAG: "GolfBallLandInCup",
          _0: a
        }))
      };
    case "ClientFinishConnectingToServer":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse8, (a) => ({
            TAG: "ClientFinishConnectingToServer",
            _0: a
          }), (a) => ({
            TAG: "ClientFinishConnectingToServer",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "ClientFinishConnectingToServerFromClient"
        };
      }
    case "NpcFishOut":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "NpcFishOutFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse27, (a) => ({
            TAG: "NpcFishOut",
            _0: a
          }), (a) => ({
            TAG: "NpcFishOut",
            _0: a
          }))
        };
      }
    case "NpcTamper":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse114, (a) => ({
            TAG: "NpcTamper",
            _0: a
          }), (a) => ({
            TAG: "NpcTamper",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "NpcTamperFromClient"
        };
      }
    case "LegacySoundPlay":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse131, (a) => ({
            TAG: "LegacySoundPlay",
            _0: a
          }), (a) => ({
            TAG: "LegacySoundPlay",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "LegacySoundPlayFromClient"
        };
      }
    case "FoodPlatterTryPlacing":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "FoodPlatterTryPlacingFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse151, (a) => ({
            TAG: "FoodPlatterTryPlacing",
            _0: a
          }), (a) => ({
            TAG: "FoodPlatterTryPlacing",
            _0: a
          }))
        };
      }
    case "PlayerLuckFactorsUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse89, (a) => ({
          TAG: "PlayerLuckFactorsUpdate",
          _0: a
        }), (a) => ({
          TAG: "PlayerLuckFactorsUpdate",
          _0: a
        }))
      };
    case "PlayerDead":
      if (fromServer) {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse40, (a) => ({
            TAG: "PlayerDead",
            _0: a
          }), (a) => ({
            TAG: "PlayerDead",
            _0: a
          }))
        };
      } else {
        return {
          TAG: "Error",
          _0: "PlayerDeadFromClient"
        };
      }
    case "CavernMonsterTypeSync":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse149, (a) => ({
          TAG: "CavernMonsterTypeSync",
          _0: a
        }), (a) => ({
          TAG: "CavernMonsterTypeSync",
          _0: a
        }))
      };
    case "NpcBuffRemovalRequest":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "NpcBuffRemovalRequestFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse24, (a) => ({
            TAG: "NpcBuffRemovalRequest",
            _0: a
          }), (a) => ({
            TAG: "NpcBuffRemovalRequest",
            _0: a
          }))
        };
      }
    case "ClientSyncedInventory":
      if (fromServer) {
        return {
          TAG: "Error",
          _0: "ClientSyncedInventoryFromServer"
        };
      } else {
        return {
          TAG: "Ok",
          _0: makeParsers(packetName2, parse150, (a) => ({
            TAG: "ClientSyncedInventory",
            _0: a
          }), (a) => ({
            TAG: "ClientSyncedInventory",
            _0: a
          }))
        };
      }
    case "CountsAsHostForGameplaySet":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse10, (a) => ({
          TAG: "CountsAsHostForGameplaySet",
          _0: a
        }), (a) => ({
          TAG: "CountsAsHostForGameplaySet",
          _0: a
        }))
      };
    case "CreditsOrSlimeTransform":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse11, (a) => ({
          TAG: "CreditsOrSlimeTransform",
          _0: a
        }), (a) => ({
          TAG: "CreditsOrSlimeTransform",
          _0: a
        }))
      };
    case "LucyAxeMessage":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse129, (a) => ({
          TAG: "LucyAxeMessage",
          _0: a
        }), (a) => ({
          TAG: "LucyAxeMessage",
          _0: a
        }))
      };
    case "PiggyBankVoidLensUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse157, (a) => ({
          TAG: "PiggyBankVoidLensUpdate",
          _0: a
        }), (a) => ({
          TAG: "PiggyBankVoidLensUpdate",
          _0: a
        }))
      };
    case "DungeonDefendersEventAttemptSkipWait":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse161, (a) => ({
          TAG: "DungeonDefendersEventAttemptSkipWait",
          _0: a
        }), (a) => ({
          TAG: "DungeonDefendersEventAttemptSkipWait",
          _0: a
        }))
      };
    case "HaveDryadDoStardewAnimation":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse15, (a) => ({
          TAG: "HaveDryadDoStardewAnimation",
          _0: a
        }), (a) => ({
          TAG: "HaveDryadDoStardewAnimation",
          _0: a
        }))
      };
    case "ItemDropShimmeredUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse17, (a) => ({
          TAG: "ItemDropShimmeredUpdate",
          _0: a
        }), (a) => ({
          TAG: "ItemDropShimmeredUpdate",
          _0: a
        }))
      };
    case "ShimmerEffectOrCoinLuck":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse46, (a) => ({
          TAG: "ShimmerEffectOrCoinLuck",
          _0: a
        }), (a) => ({
          TAG: "ShimmerEffectOrCoinLuck",
          _0: a
        }))
      };
    case "LoadoutSwitch":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse21, (a) => ({
          TAG: "LoadoutSwitch",
          _0: a
        }), (a) => ({
          TAG: "LoadoutSwitch",
          _0: a
        }))
      };
    case "ItemDropProtectedUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse156, (a) => ({
          TAG: "ItemDropProtectedUpdate",
          _0: a
        }), (a) => ({
          TAG: "ItemDropProtectedUpdate",
          _0: a
        }))
      };
    case "DeadCellsDisplayJarTryPlacing":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse78, (a) => ({
          TAG: "DeadCellsDisplayJarTryPlacing",
          _0: a
        }), (a) => ({
          TAG: "DeadCellsDisplayJarTryPlacing",
          _0: a
        }))
      };
    case "PlayerSpectate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse90, (a) => ({
          TAG: "PlayerSpectate",
          _0: a
        }), (a) => ({
          TAG: "PlayerSpectate",
          _0: a
        }))
      };
    case "ItemDropClear":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse82, (a) => ({
          TAG: "ItemDropClear",
          _0: a
        }), (a) => ({
          TAG: "ItemDropClear",
          _0: a
        }))
      };
    case "PlayerItemUseSound":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse88, (a) => ({
          TAG: "PlayerItemUseSound",
          _0: a
        }), (a) => ({
          TAG: "PlayerItemUseSound",
          _0: a
        }))
      };
    case "NpcHurtByDebuff":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse86, (a) => ({
          TAG: "NpcHurtByDebuff",
          _0: a
        }), (a) => ({
          TAG: "NpcHurtByDebuff",
          _0: a
        }))
      };
    case "Ping":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse87, (a) => ({
          TAG: "Ping",
          _0: a
        }), (a) => ({
          TAG: "Ping",
          _0: a
        }))
      };
    case "ChestResize":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse77, (a) => ({
          TAG: "ChestResize",
          _0: a
        }), (a) => ({
          TAG: "ChestResize",
          _0: a
        }))
      };
    case "LeashedEntityAnchorInsertItem":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse85, (a) => ({
          TAG: "LeashedEntityAnchorInsertItem",
          _0: a
        }), (a) => ({
          TAG: "LeashedEntityAnchorInsertItem",
          _0: a
        }))
      };
    case "PlayerTeamUpdate":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse92, (a) => ({
          TAG: "PlayerTeamUpdate",
          _0: a
        }), (a) => ({
          TAG: "PlayerTeamUpdate",
          _0: a
        }))
      };
    case "PlayerTeamSwapSpawn":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse91, (a) => ({
          TAG: "PlayerTeamSwapSpawn",
          _0: a
        }), (a) => ({
          TAG: "PlayerTeamSwapSpawn",
          _0: a
        }))
      };
    case "SectionRequest":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse93, (a) => ({
          TAG: "SectionRequest",
          _0: a
        }), (a) => ({
          TAG: "SectionRequest",
          _0: a
        }))
      };
    case "ItemDropPosition":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse83, (a) => ({
          TAG: "ItemDropPosition",
          _0: a
        }), (a) => ({
          TAG: "ItemDropPosition",
          _0: a
        }))
      };
    case "HostToken":
      return {
        TAG: "Ok",
        _0: makeParsers(packetName2, parse80, (a) => ({
          TAG: "HostToken",
          _0: a
        }), (a) => ({
          TAG: "HostToken",
          _0: a
        }))
      };
  }
}
function parse162(buffer, fromServer, ignoreOpt) {
  let ignore = ignoreOpt !== void 0 ? ignoreOpt : [];
  let match = buffer.length;
  if (!(match > 2 || match < 0)) {
    return {
      TAG: "Error",
      _0: {
        TAG: "InvalidPacketLength",
        _0: buffer.length
      }
    };
  }
  let packetType = fromInt(buffer[2]);
  if (packetType === void 0) {
    return {
      TAG: "Error",
      _0: {
        TAG: "InvalidPacketType",
        _0: buffer[2]
      }
    };
  }
  if (ignore.includes(packetType)) {
    return {
      TAG: "Error",
      _0: "IgnoredPacket"
    };
  }
  try {
    let parsers = getParsers(packetType, fromServer);
    if (parsers.TAG === "Ok") {
      return parsers._0.parse(buffer, fromServer);
    } else {
      return {
        TAG: "Error",
        _0: parsers._0
      };
    }
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          TAG: "ReaderError",
          _0: {
            context: "Parser.parse",
            error: obj._1
          }
        }
      };
    }
    throw obj;
  }
}
function parseLazy(buffer, fromServer) {
  let match = buffer.length;
  if (!(match > 2 || match < 0)) {
    return {
      TAG: "Error",
      _0: {
        TAG: "InvalidPacketLength",
        _0: buffer.length
      }
    };
  }
  let packetType = fromInt(buffer[2]);
  if (packetType === void 0) {
    return {
      TAG: "Error",
      _0: {
        TAG: "InvalidPacketType",
        _0: buffer[2]
      }
    };
  }
  try {
    let parsers = getParsers(packetType, fromServer);
    if (parsers.TAG === "Ok") {
      return parsers._0.parseLazy(buffer, fromServer);
    } else {
      return {
        TAG: "Error",
        _0: parsers._0
      };
    }
  } catch (raw_obj) {
    let obj = internalToException(raw_obj);
    if (obj.RE_EXN_ID === "JsExn") {
      return {
        TAG: "Error",
        _0: {
          TAG: "ReaderError",
          _0: {
            context: "Parser.parseLazy",
            error: obj._1
          }
        }
      };
    }
    throw obj;
  }
}

// src/Point.js
var Point_exports = {};
__export(Point_exports, {
  Float: () => Float,
  Int: () => Int
});
function toString3(self) {
  return `{ x: ` + self.x.toString() + `, y: ` + self.y.toString() + ` }`;
}
var Int = {
  toString: toString3
};
function toString$12(self) {
  return `{ x: ` + self.x.toString() + `, y: ` + self.y.toString() + ` }`;
}
var Float = {
  toString: toString$12
};
export {
  PacketV1449_AnglerQuestComplete_exports as AnglerQuestCompletePacket,
  PacketV1449_AnglerQuest_exports as AnglerQuestPacket,
  Array16_exports as Array16,
  ArrayExt_exports as ArrayExt,
  BitFlags_exports as BitFlags,
  PacketV1449_BossOrInvasionSpawn_exports as BossOrInvasionSpawnPacket,
  PacketV1449_ChatMessageSmart_exports as ChatMessageSmartPacket,
  PacketV1449_ChestItem_exports as ChestItemPacket,
  PacketV1449_ChestOrTempleUnlock_exports as ChestOrTempleUnlockPacket,
  PacketV1449_ChestPlace_exports as ChestPlacePacket,
  Packet_ChestResize_exports as ChestResizePacket,
  PacketV1449_ClientFinishConnectingToServer_exports as ClientFinishConnectingToServerPacket,
  PacketV1449_ClientUuid_exports as ClientUuidPacket,
  PacketV1449_ConnectRequest_exports as ConnectRequestPacket,
  PacketV1449_CountsAsHostForGameplaySet_exports as CountsAsHostForGameplaySetPacket,
  CreativePowers_exports as CreativePowers,
  PacketV1449_CreditsOrSlimeTransform_exports as CreditsOrSlimeTransformPacket,
  PacketV1449_CrystalInvasionStart_exports as CrystalInvasionStartPacket,
  Packet_DeadCellsDisplayJarTryPlacing_exports as DeadCellsDisplayJarTryPlacingPacket,
  Packet_DebugCommand_exports as DebugCommandPacket,
  PacketV1449_DimensionsUpdate_exports as DimensionsUpdatePacket,
  PacketV1449_Disconnect_exports as DisconnectPacket,
  ErrorAwarePacketWriter_exports as ErrorAwarePacketWriter,
  PacketV1449_ExtraValueSync_exports as ExtraValueSyncPacket,
  PacketV1449_HaveDryadDoStardewAnimation_exports as HaveDryadDoStardewAnimationPacket,
  Packet_HostToken_exports as HostTokenPacket,
  Packet_InitialTileSectionsRequest_exports as InitialTileSectionsRequestPacket,
  PacketV1449_InvasionProgressReport_exports as InvasionProgressReportPacket,
  Packet_ItemDropClear_exports as ItemDropClearPacket,
  Packet_ItemDropPosition_exports as ItemDropPositionPacket,
  PacketV1449_ItemDropShimmeredUpdate_exports as ItemDropShimmeredUpdatePacket,
  PacketV1449_ItemDropUpdate_exports as ItemDropUpdatePacket,
  Packet_ItemForceIntoNearestChest_exports as ItemForceIntoNearestChestPacket,
  Packet_ItemOwner_exports as ItemOwnerPacket,
  PacketV1449_ItemOwnerRemove_exports as ItemOwnerRemovePacket,
  Packet_LeashedEntityAnchorInsertItem_exports as LeashedEntityAnchorInsertItemPacket,
  PacketV1449_LoadoutSwitch_exports as LoadoutSwitchPacket,
  Packet_NetModuleLoad_exports as NetModuleLoadPacket,
  PacketV1449_NpcBuffRemovalRequest_exports as NpcBuffRemovalRequestPacket,
  Packet_NpcBuffUpdate_exports as NpcBuffUpdatePacket,
  PacketV1449_NpcCatch_exports as NpcCatchPacket,
  PacketV1449_NpcFishOut_exports as NpcFishOutPacket,
  PacketV1449_NpcHomeUpdate_exports as NpcHomeUpdatePacket,
  Packet_NpcHurtByDebuff_exports as NpcHurtByDebuffPacket,
  PacketV1449_NpcKillCount_exports as NpcKillCountPacket,
  PacketV1449_NpcNameUpdate_exports as NpcNameUpdatePacket,
  PacketV1449_NpcShopItem_exports as NpcShopItemPacket,
  PacketV1449_NpcTalk_exports as NpcTalkPacket,
  PacketV1449_NpcTeleportPortal_exports as NpcTeleportPortalPacket,
  Packet_NpcUpdate_exports as NpcUpdatePacket,
  PacketV1449_ObjectPlace_exports as ObjectPlacePacket,
  PacketType_exports as PacketType,
  Parser_exports as Parser,
  PacketV1449_PartyToggle_exports as PartyTogglePacket,
  Packet_Ping_exports as PingPacket,
  PacketV1449_PlayerActive_exports as PlayerActivePacket,
  PacketV1449_PlayerAnimation_exports as PlayerAnimationPacket,
  PacketV1449_PlayerBuffAdd_exports as PlayerBuffAddPacket,
  Packet_PlayerBuffsSet_exports as PlayerBuffsSetPacket,
  PacketV1449_PlayerChestIndexSync_exports as PlayerChestIndexSyncPacket,
  PacketV1449_PlayerDamage_exports as PlayerDamagePacket,
  PacketV1449_PlayerDead_exports as PlayerDeadPacket,
  PacketV1449_PlayerDeath_exports as PlayerDeathPacket,
  PlayerDeathReason_exports as PlayerDeathReason,
  PacketV1449_PlayerDodge_exports as PlayerDodgePacket,
  PacketV1449_PlayerHealth_exports as PlayerHealthPacket,
  Packet_PlayerInfo_exports as PlayerInfoPacket,
  Packet_PlayerInventorySlot_exports as PlayerInventorySlotPacket,
  Packet_PlayerItemUseSound_exports as PlayerItemUseSoundPacket,
  Packet_PlayerLuckFactorsUpdate_exports as PlayerLuckFactorsUpdatePacket,
  PacketV1449_PlayerMana_exports as PlayerManaPacket,
  PacketV1449_PlayerSlotSet_exports as PlayerSlotSetPacket,
  Packet_PlayerSpawn_exports as PlayerSpawnPacket,
  Packet_PlayerSpectate_exports as PlayerSpectatePacket,
  PacketV1449_PlayerTeam_exports as PlayerTeamPacket,
  Packet_PlayerTeamSwapSpawn_exports as PlayerTeamSwapSpawnPacket,
  Packet_PlayerTeamUpdate_exports as PlayerTeamUpdatePacket,
  Packet_PlayerUpdate_exports as PlayerUpdatePacket,
  Point_exports as Point,
  PacketV1449_ProjectileSync_exports as ProjectileSyncPacket,
  PacketV1449_PvpToggle_exports as PvpTogglePacket,
  Packet_SectionRequest_exports as SectionRequestPacket,
  Packet_ShimmerEffectOrCoinLuck_exports as ShimmerEffectOrCoinLuckPacket,
  PacketV1449_SignNew_exports as SignNewPacket,
  PacketV1449_SignRead_exports as SignReadPacket,
  PacketV1449_SmokePoof_exports as SmokePoofPacket,
  PacketV1449_SocialHandshake_exports as SocialHandshakePacket,
  PacketV1449_Status_exports as StatusPacket,
  PacketV1449_SwitchHit_exports as SwitchHitPacket,
  Packet_Teleport_exports as TeleportPacket,
  Packet_TeleportationPotion_exports as TeleportationPotionPacket,
  PacketV1449_TemporaryAnimationCreate_exports as TemporaryAnimationCreatePacket,
  Packet_TileEntityDisplayDollItemSync_exports as TileEntityDisplayDollItemSyncPacket,
  PacketV1449_TileEntityHatRackItemSync_exports as TileEntityHatRackItemSyncPacket,
  PacketV1449_TileEntityInteractionRequest_exports as TileEntityInteractionRequestPacket,
  PacketV1449_TileEntityPlace_exports as TileEntityPlacePacket,
  PacketV1449_TileEntityUpdate_exports as TileEntityUpdatePacket,
  PacketV1449_TileModify_exports as TileModifyPacket,
  PacketV1449_TilePaint_exports as TilePaintPacket,
  PacketV1449_TilePickingSync_exports as TilePickingSyncPacket,
  PacketV1449_TileSectionFrame_exports as TileSectionFramePacket,
  Packet_TileSectionSend_exports as TileSectionSendPacket,
  Packet_TileSquareSend_exports as TileSquareSendPacket,
  PacketV1449_TimeSet_exports as TimeSetPacket,
  Packet_TravellingMerchantInventory_exports as TravellingMerchantInventoryPacket,
  PacketV1449_TreeGrowFx_exports as TreeGrowFxPacket,
  PacketV1449_Unused_exports as UnusedPacket,
  PacketV1449_WallPaint_exports as WallPaintPacket,
  PacketV1449_WeaponsRackTryPlacing_exports as WeaponsRackTryPlacingPacket,
  PacketV1449_WiredCannonShot_exports as WiredCannonShotPacket,
  PacketV1449_WorldDataRequest_exports as WorldDataRequestPacket,
  Packet_WorldInfo_exports as WorldInfoPacket,
  Packet_Zones_exports as ZonesPacket
};
