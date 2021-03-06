// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function fromInt(n) {
  switch (n) {
    case 1 :
        return /* ConnectRequest */0;
    case 2 :
        return /* Disconnect */1;
    case 3 :
        return /* PlayerSlotSet */2;
    case 4 :
        return /* PlayerInfo */3;
    case 5 :
        return /* PlayerInventorySlot */4;
    case 6 :
        return /* WorldDataRequest */5;
    case 7 :
        return /* WorldInfo */6;
    case 8 :
        return /* InitialTileSectionsRequest */7;
    case 9 :
        return /* Status */8;
    case 10 :
        return /* TileSectionSend */9;
    case 11 :
        return /* TileSectionFrame */10;
    case 12 :
        return /* PlayerSpawn */11;
    case 13 :
        return /* PlayerUpdate */12;
    case 14 :
        return /* PlayerActive */13;
    case 16 :
        return /* PlayerHealth */14;
    case 17 :
        return /* TileModify */15;
    case 18 :
        return /* TimeSet */16;
    case 19 :
        return /* DoorUse */17;
    case 20 :
        return /* TileSquareSend */18;
    case 21 :
        return /* ItemDropUpdate */19;
    case 22 :
        return /* ItemOwner */20;
    case 23 :
        return /* NpcUpdate */21;
    case 24 :
        return /* NpcItemStrike */22;
    case 27 :
        return /* ProjectileSync */23;
    case 28 :
        return /* NpcStrike */24;
    case 29 :
        return /* ProjectileDestroy */25;
    case 30 :
        return /* PvpToggle */26;
    case 31 :
        return /* ChestOpen */27;
    case 32 :
        return /* ChestItem */28;
    case 33 :
        return /* ActiveContainerSync */29;
    case 34 :
        return /* ChestPlace */30;
    case 35 :
        return /* HealEffect */31;
    case 36 :
        return /* Zones */32;
    case 37 :
        return /* PasswordRequired */33;
    case 38 :
        return /* PasswordSend */34;
    case 39 :
        return /* ItemOwnerRemove */35;
    case 40 :
        return /* NpcTalk */36;
    case 41 :
        return /* PlayerAnimation */37;
    case 42 :
        return /* PlayerMana */38;
    case 43 :
        return /* ManaEffect */39;
    case 15 :
    case 25 :
    case 26 :
    case 44 :
        return ;
    case 45 :
        return /* PlayerTeam */40;
    case 46 :
        return /* SignRead */41;
    case 47 :
        return /* SignNew */42;
    case 48 :
        return /* LiquidSet */43;
    case 49 :
        return /* PlayerSpawnSelf */44;
    case 50 :
        return /* PlayerBuffsSet */45;
    case 51 :
        return /* NpcSpecialEffect */46;
    case 52 :
        return /* ChestOrTempleUnlock */47;
    case 53 :
        return /* NpcBuffAdd */48;
    case 54 :
        return /* NpcBuffUpdate */49;
    case 55 :
        return /* PlayerBuffAdd */50;
    case 56 :
        return /* NpcNameUpdate */51;
    case 57 :
        return /* GoodEvilUpdate */52;
    case 58 :
        return /* HarpPlay */53;
    case 59 :
        return /* SwitchHit */54;
    case 60 :
        return /* NpcHomeUpdate */55;
    case 61 :
        return /* BossOrInvasionSpawn */56;
    case 62 :
        return /* PlayerDodge */57;
    case 63 :
        return /* PaintTile */58;
    case 64 :
        return /* PaintWall */59;
    case 65 :
        return /* Teleport */60;
    case 66 :
        return /* PlayerHealOther */61;
    case 67 :
        return /* DimensionsUpdate */62;
    case 68 :
        return /* ClientUuid */63;
    case 69 :
        return /* ChestName */64;
    case 70 :
        return /* CatchNpc */65;
    case 71 :
        return /* ReleaseNpc */66;
    case 72 :
        return /* TravellingMerchantInventory */67;
    case 73 :
        return /* TeleportationPotion */68;
    case 74 :
        return /* AnglerQuest */69;
    case 75 :
        return /* AnglerQuestComplete */70;
    case 76 :
        return /* AnglerQuestsCompletedAmount */71;
    case 77 :
        return /* TemporaryAnimationCreate */72;
    case 78 :
        return /* InvasionProgressReport */73;
    case 79 :
        return /* ObjectPlace */74;
    case 80 :
        return /* PlayerChestIndexSync */75;
    case 81 :
        return /* CombatNumberCreate */76;
    case 82 :
        return /* NetModuleLoad */77;
    case 83 :
        return /* NpcKillCount */78;
    case 84 :
        return /* PlayerStealth */79;
    case 85 :
        return /* ItemForceIntoNearestChest */80;
    case 86 :
        return /* TileEntityUpdate */81;
    case 87 :
        return /* TileEntityPlace */82;
    case 88 :
        return /* ItemDropModify */83;
    case 89 :
        return /* ItemFramePlace */84;
    case 90 :
        return /* ItemDropInstancedUpdate */85;
    case 91 :
        return /* EmoteBubble */86;
    case 92 :
        return /* ExtraValueSync */87;
    case 93 :
        return /* SocialHandshake */88;
    case 94 :
        return /* Unused */89;
    case 95 :
        return /* PortalKill */90;
    case 96 :
        return /* PlayerTeleportPortal */91;
    case 97 :
        return /* NpcKilledNotification */92;
    case 98 :
        return /* EventNotification */93;
    case 99 :
        return /* MinionTargetUpdate */94;
    case 100 :
        return /* NpcTeleportPortal */95;
    case 101 :
        return /* ShieldStrengthsUpdate */96;
    case 102 :
        return /* NebulaLevelUp */97;
    case 103 :
        return /* MoonLordCountdown */98;
    case 104 :
        return /* NpcShopItem */99;
    case 105 :
        return /* GemLockToggle */100;
    case 106 :
        return /* SmokePoof */101;
    case 107 :
        return /* ChatMessageSmart */102;
    case 108 :
        return /* WiredCannonShot */103;
    case 109 :
        return /* MassWireOperation */104;
    case 110 :
        return /* MassWireOperationPay */105;
    case 111 :
        return /* PartyToggle */106;
    case 112 :
        return /* TreeGrowFx */107;
    case 113 :
        return /* CrystalInvasionStart */108;
    case 114 :
        return /* CrystalInvasionWipeAll */109;
    case 115 :
        return /* MinionAttackTargetUpdate */110;
    case 116 :
        return /* CrystalInvasionSendWaitTime */111;
    case 117 :
        return /* PlayerDamage */112;
    case 118 :
        return /* PlayerDeath */113;
    case 119 :
        return /* CombatTextCreate */114;
    case 120 :
        return /* Emoji */115;
    case 121 :
        return /* TileEntityDisplayDollItemSync */116;
    case 122 :
        return /* TileEntityInteractionRequest */117;
    case 123 :
        return /* WeaponsRackTryPlacing */118;
    case 124 :
        return /* TileEntityHatRackItemSync */119;
    case 125 :
        return /* TilePickingSync */120;
    case 126 :
        return /* RevengeMarkerSync */121;
    case 127 :
        return /* RevengeMarkerRemove */122;
    case 128 :
        return /* GolfBallLandInCup */123;
    case 129 :
        return /* ClientFinishConnectingToServer */124;
    case 130 :
        return /* NpcFishOut */125;
    case 131 :
        return /* NpcTamper */126;
    case 132 :
        return /* LegacySoundPlay */127;
    case 133 :
        return /* FoodPlatterTryPlacing */128;
    case 134 :
        return /* PlayerLuckFactorsUpdate */129;
    case 135 :
        return /* PlayerDead */130;
    case 136 :
        return /* CavernMonsterTypeSync */131;
    case 137 :
        return /* NpcBuffRemovalRequest */132;
    case 138 :
        return /* ClientSyncedInventory */133;
    case 139 :
        return /* CountsAsHostForGameplaySet */134;
    default:
      return ;
  }
}

function toInt(self) {
  switch (self) {
    case /* ConnectRequest */0 :
        return 1;
    case /* Disconnect */1 :
        return 2;
    case /* PlayerSlotSet */2 :
        return 3;
    case /* PlayerInfo */3 :
        return 4;
    case /* PlayerInventorySlot */4 :
        return 5;
    case /* WorldDataRequest */5 :
        return 6;
    case /* WorldInfo */6 :
        return 7;
    case /* InitialTileSectionsRequest */7 :
        return 8;
    case /* Status */8 :
        return 9;
    case /* TileSectionSend */9 :
        return 10;
    case /* TileSectionFrame */10 :
        return 11;
    case /* PlayerSpawn */11 :
        return 12;
    case /* PlayerUpdate */12 :
        return 13;
    case /* PlayerActive */13 :
        return 14;
    case /* PlayerHealth */14 :
        return 16;
    case /* TileModify */15 :
        return 17;
    case /* TimeSet */16 :
        return 18;
    case /* DoorUse */17 :
        return 19;
    case /* TileSquareSend */18 :
        return 20;
    case /* ItemDropUpdate */19 :
        return 21;
    case /* ItemOwner */20 :
        return 22;
    case /* NpcUpdate */21 :
        return 23;
    case /* NpcItemStrike */22 :
        return 24;
    case /* ProjectileSync */23 :
        return 27;
    case /* NpcStrike */24 :
        return 28;
    case /* ProjectileDestroy */25 :
        return 29;
    case /* PvpToggle */26 :
        return 30;
    case /* ChestOpen */27 :
        return 31;
    case /* ChestItem */28 :
        return 32;
    case /* ActiveContainerSync */29 :
        return 33;
    case /* ChestPlace */30 :
        return 34;
    case /* HealEffect */31 :
        return 35;
    case /* Zones */32 :
        return 36;
    case /* PasswordRequired */33 :
        return 37;
    case /* PasswordSend */34 :
        return 38;
    case /* ItemOwnerRemove */35 :
        return 39;
    case /* NpcTalk */36 :
        return 40;
    case /* PlayerAnimation */37 :
        return 41;
    case /* PlayerMana */38 :
        return 42;
    case /* ManaEffect */39 :
        return 43;
    case /* PlayerTeam */40 :
        return 45;
    case /* SignRead */41 :
        return 46;
    case /* SignNew */42 :
        return 47;
    case /* LiquidSet */43 :
        return 48;
    case /* PlayerSpawnSelf */44 :
        return 49;
    case /* PlayerBuffsSet */45 :
        return 50;
    case /* NpcSpecialEffect */46 :
        return 51;
    case /* ChestOrTempleUnlock */47 :
        return 52;
    case /* NpcBuffAdd */48 :
        return 53;
    case /* NpcBuffUpdate */49 :
        return 54;
    case /* PlayerBuffAdd */50 :
        return 55;
    case /* NpcNameUpdate */51 :
        return 56;
    case /* GoodEvilUpdate */52 :
        return 57;
    case /* HarpPlay */53 :
        return 58;
    case /* SwitchHit */54 :
        return 59;
    case /* NpcHomeUpdate */55 :
        return 60;
    case /* BossOrInvasionSpawn */56 :
        return 61;
    case /* PlayerDodge */57 :
        return 62;
    case /* PaintTile */58 :
        return 63;
    case /* PaintWall */59 :
        return 64;
    case /* Teleport */60 :
        return 65;
    case /* PlayerHealOther */61 :
        return 66;
    case /* DimensionsUpdate */62 :
        return 67;
    case /* ClientUuid */63 :
        return 68;
    case /* ChestName */64 :
        return 69;
    case /* CatchNpc */65 :
        return 70;
    case /* ReleaseNpc */66 :
        return 71;
    case /* TravellingMerchantInventory */67 :
        return 72;
    case /* TeleportationPotion */68 :
        return 73;
    case /* AnglerQuest */69 :
        return 74;
    case /* AnglerQuestComplete */70 :
        return 75;
    case /* AnglerQuestsCompletedAmount */71 :
        return 76;
    case /* TemporaryAnimationCreate */72 :
        return 77;
    case /* InvasionProgressReport */73 :
        return 78;
    case /* ObjectPlace */74 :
        return 79;
    case /* PlayerChestIndexSync */75 :
        return 80;
    case /* CombatNumberCreate */76 :
        return 81;
    case /* NetModuleLoad */77 :
        return 82;
    case /* NpcKillCount */78 :
        return 83;
    case /* PlayerStealth */79 :
        return 84;
    case /* ItemForceIntoNearestChest */80 :
        return 85;
    case /* TileEntityUpdate */81 :
        return 86;
    case /* TileEntityPlace */82 :
        return 87;
    case /* ItemDropModify */83 :
        return 88;
    case /* ItemFramePlace */84 :
        return 89;
    case /* ItemDropInstancedUpdate */85 :
        return 90;
    case /* EmoteBubble */86 :
        return 91;
    case /* ExtraValueSync */87 :
        return 92;
    case /* SocialHandshake */88 :
        return 93;
    case /* Unused */89 :
        return 94;
    case /* PortalKill */90 :
        return 95;
    case /* PlayerTeleportPortal */91 :
        return 96;
    case /* NpcKilledNotification */92 :
        return 97;
    case /* EventNotification */93 :
        return 98;
    case /* MinionTargetUpdate */94 :
        return 99;
    case /* NpcTeleportPortal */95 :
        return 100;
    case /* ShieldStrengthsUpdate */96 :
        return 101;
    case /* NebulaLevelUp */97 :
        return 102;
    case /* MoonLordCountdown */98 :
        return 103;
    case /* NpcShopItem */99 :
        return 104;
    case /* GemLockToggle */100 :
        return 105;
    case /* SmokePoof */101 :
        return 106;
    case /* ChatMessageSmart */102 :
        return 107;
    case /* WiredCannonShot */103 :
        return 108;
    case /* MassWireOperation */104 :
        return 109;
    case /* MassWireOperationPay */105 :
        return 110;
    case /* PartyToggle */106 :
        return 111;
    case /* TreeGrowFx */107 :
        return 112;
    case /* CrystalInvasionStart */108 :
        return 113;
    case /* CrystalInvasionWipeAll */109 :
        return 114;
    case /* MinionAttackTargetUpdate */110 :
        return 115;
    case /* CrystalInvasionSendWaitTime */111 :
        return 116;
    case /* PlayerDamage */112 :
        return 117;
    case /* PlayerDeath */113 :
        return 118;
    case /* CombatTextCreate */114 :
        return 119;
    case /* Emoji */115 :
        return 120;
    case /* TileEntityDisplayDollItemSync */116 :
        return 121;
    case /* TileEntityInteractionRequest */117 :
        return 122;
    case /* WeaponsRackTryPlacing */118 :
        return 123;
    case /* TileEntityHatRackItemSync */119 :
        return 124;
    case /* TilePickingSync */120 :
        return 125;
    case /* RevengeMarkerSync */121 :
        return 126;
    case /* RevengeMarkerRemove */122 :
        return 127;
    case /* GolfBallLandInCup */123 :
        return 128;
    case /* ClientFinishConnectingToServer */124 :
        return 129;
    case /* NpcFishOut */125 :
        return 130;
    case /* NpcTamper */126 :
        return 131;
    case /* LegacySoundPlay */127 :
        return 132;
    case /* FoodPlatterTryPlacing */128 :
        return 133;
    case /* PlayerLuckFactorsUpdate */129 :
        return 134;
    case /* PlayerDead */130 :
        return 135;
    case /* CavernMonsterTypeSync */131 :
        return 136;
    case /* NpcBuffRemovalRequest */132 :
        return 137;
    case /* ClientSyncedInventory */133 :
        return 138;
    case /* CountsAsHostForGameplaySet */134 :
        return 139;
    
  }
}

exports.fromInt = fromInt;
exports.toInt = toInt;
/* No side effect */
