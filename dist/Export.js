"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_option.js
var require_caml_option = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_option.js"(exports2) {
    "use strict";
    function isNested(x) {
      return x.BS_PRIVATE_NESTED_SOME_NONE !== void 0;
    }
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
    function nullable_to_opt(x) {
      if (x == null) {
        return;
      } else {
        return some(x);
      }
    }
    function undefined_to_opt(x) {
      if (x === void 0) {
        return;
      } else {
        return some(x);
      }
    }
    function null_to_opt(x) {
      if (x === null) {
        return;
      } else {
        return some(x);
      }
    }
    function valFromOption(x) {
      if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) {
        return x;
      }
      var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
      if (depth === 0) {
        return;
      } else {
        return {
          BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
        };
      }
    }
    function option_get(x) {
      if (x === void 0) {
        return;
      } else {
        return valFromOption(x);
      }
    }
    function option_unwrap(x) {
      if (x !== void 0) {
        return x.VAL;
      } else {
        return x;
      }
    }
    exports2.nullable_to_opt = nullable_to_opt;
    exports2.undefined_to_opt = undefined_to_opt;
    exports2.null_to_opt = null_to_opt;
    exports2.valFromOption = valFromOption;
    exports2.some = some;
    exports2.isNested = isNested;
    exports2.option_get = option_get;
    exports2.option_unwrap = option_unwrap;
  }
});

// src/packet/Packet_AnglerQuest.js
var require_Packet_AnglerQuest = __commonJS({
  "src/packet/Packet_AnglerQuest.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_AnglerQuestComplete.js
var require_Packet_AnglerQuestComplete = __commonJS({
  "src/packet/Packet_AnglerQuestComplete.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/PacketType.js
var require_PacketType = __commonJS({
  "src/PacketType.js"(exports2) {
    "use strict";
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
      }
    }
    exports2.fromInt = fromInt;
    exports2.toInt = toInt;
  }
});

// node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/src/ManagedPacketWriter.js
var require_ManagedPacketWriter = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/src/ManagedPacketWriter.js"(exports2) {
    "use strict";
    function setType(untypedT, packetType) {
      return untypedT.setType(packetType);
    }
    exports2.setType = setType;
  }
});

// node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/networktext.js
var require_networktext = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/networktext.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var NetworkText = class {
      constructor(mode, text) {
        this._mode = mode;
        this._text = text;
      }
      get mode() {
        return this._mode;
      }
      get text() {
        return this._text;
      }
      toString() {
        return this._text;
      }
    };
    exports2.default = NetworkText;
  }
});

// node_modules/.pnpm/utf8@2.1.2/node_modules/utf8/utf8.js
var require_utf8 = __commonJS({
  "node_modules/.pnpm/utf8@2.1.2/node_modules/utf8/utf8.js"(exports2, module2) {
    (function(root) {
      var freeExports = typeof exports2 == "object" && exports2;
      var freeModule = typeof module2 == "object" && module2 && module2.exports == freeExports && module2;
      var freeGlobal = typeof global == "object" && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
        root = freeGlobal;
      }
      var stringFromCharCode = String.fromCharCode;
      function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        var value;
        var extra;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      function ucs2encode(array) {
        var length = array.length;
        var index = -1;
        var value;
        var output = "";
        while (++index < length) {
          value = array[index];
          if (value > 65535) {
            value -= 65536;
            output += stringFromCharCode(value >>> 10 & 1023 | 55296);
            value = 56320 | value & 1023;
          }
          output += stringFromCharCode(value);
        }
        return output;
      }
      function checkScalarValue(codePoint) {
        if (codePoint >= 55296 && codePoint <= 57343) {
          throw Error(
            "Lone surrogate U+" + codePoint.toString(16).toUpperCase() + " is not a scalar value"
          );
        }
      }
      function createByte(codePoint, shift) {
        return stringFromCharCode(codePoint >> shift & 63 | 128);
      }
      function encodeCodePoint(codePoint) {
        if ((codePoint & 4294967168) == 0) {
          return stringFromCharCode(codePoint);
        }
        var symbol = "";
        if ((codePoint & 4294965248) == 0) {
          symbol = stringFromCharCode(codePoint >> 6 & 31 | 192);
        } else if ((codePoint & 4294901760) == 0) {
          checkScalarValue(codePoint);
          symbol = stringFromCharCode(codePoint >> 12 & 15 | 224);
          symbol += createByte(codePoint, 6);
        } else if ((codePoint & 4292870144) == 0) {
          symbol = stringFromCharCode(codePoint >> 18 & 7 | 240);
          symbol += createByte(codePoint, 12);
          symbol += createByte(codePoint, 6);
        }
        symbol += stringFromCharCode(codePoint & 63 | 128);
        return symbol;
      }
      function utf8encode(string) {
        var codePoints = ucs2decode(string);
        var length = codePoints.length;
        var index = -1;
        var codePoint;
        var byteString = "";
        while (++index < length) {
          codePoint = codePoints[index];
          byteString += encodeCodePoint(codePoint);
        }
        return byteString;
      }
      function readContinuationByte() {
        if (byteIndex >= byteCount) {
          throw Error("Invalid byte index");
        }
        var continuationByte = byteArray[byteIndex] & 255;
        byteIndex++;
        if ((continuationByte & 192) == 128) {
          return continuationByte & 63;
        }
        throw Error("Invalid continuation byte");
      }
      function decodeSymbol() {
        var byte1;
        var byte2;
        var byte3;
        var byte4;
        var codePoint;
        if (byteIndex > byteCount) {
          throw Error("Invalid byte index");
        }
        if (byteIndex == byteCount) {
          return false;
        }
        byte1 = byteArray[byteIndex] & 255;
        byteIndex++;
        if ((byte1 & 128) == 0) {
          return byte1;
        }
        if ((byte1 & 224) == 192) {
          byte2 = readContinuationByte();
          codePoint = (byte1 & 31) << 6 | byte2;
          if (codePoint >= 128) {
            return codePoint;
          } else {
            throw Error("Invalid continuation byte");
          }
        }
        if ((byte1 & 240) == 224) {
          byte2 = readContinuationByte();
          byte3 = readContinuationByte();
          codePoint = (byte1 & 15) << 12 | byte2 << 6 | byte3;
          if (codePoint >= 2048) {
            checkScalarValue(codePoint);
            return codePoint;
          } else {
            throw Error("Invalid continuation byte");
          }
        }
        if ((byte1 & 248) == 240) {
          byte2 = readContinuationByte();
          byte3 = readContinuationByte();
          byte4 = readContinuationByte();
          codePoint = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
          if (codePoint >= 65536 && codePoint <= 1114111) {
            return codePoint;
          }
        }
        throw Error("Invalid UTF-8 detected");
      }
      var byteArray;
      var byteCount;
      var byteIndex;
      function utf8decode(byteString) {
        byteArray = ucs2decode(byteString);
        byteCount = byteArray.length;
        byteIndex = 0;
        var codePoints = [];
        var tmp;
        while ((tmp = decodeSymbol()) !== false) {
          codePoints.push(tmp);
        }
        return ucs2encode(codePoints);
      }
      var utf8 = {
        "version": "2.1.2",
        "encode": utf8encode,
        "decode": utf8decode
      };
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        define(function() {
          return utf8;
        });
      } else if (freeExports && !freeExports.nodeType) {
        if (freeModule) {
          freeModule.exports = utf8;
        } else {
          var object = {};
          var hasOwnProperty = object.hasOwnProperty;
          for (var key in utf8) {
            hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
          }
        }
      } else {
        root.utf8 = utf8;
      }
    })(exports2);
  }
});

// node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/bufferwriter.js
var require_bufferwriter = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/bufferwriter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var utils_1 = require_utils();
    var utf8 = require_utf8();
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
        const packedStr = (0, utils_1.textToBuffer)(utf8.encode(str));
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
    exports2.default = BufferWriter;
  }
});

// node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getPackedStringByteLen = exports2.requireNoCache = exports2._invalidateRequireCacheForFile = exports2.getPacketsFromBuffer = exports2.getPacketTypeFromBuffer = exports2.getProperIP = exports2.textToBuffer = exports2.bufferToText = void 0;
    var path = require("path");
    var bufferreader_1 = require_bufferreader();
    var utf8 = require_utf8();
    var bufferwriter_1 = require_bufferwriter();
    function bufferToText(buf) {
      const reader = new bufferreader_1.default(buf);
      let str = "";
      for (let i = 0; i < buf.length; i++) {
        str += String.fromCharCode(reader.readByte());
      }
      return str;
    }
    exports2.bufferToText = bufferToText;
    function textToBuffer(str) {
      const writer = new bufferwriter_1.default(Buffer.allocUnsafe(str.length));
      for (var i = 0, l = str.length; i < l; i++) {
        writer.packByte(str.charCodeAt(i));
      }
      return writer.data;
    }
    exports2.textToBuffer = textToBuffer;
    function getProperIP(ip) {
      if (typeof ip === "undefined")
        return void 0;
      let IPFromRequest = ip;
      let indexOfColon = IPFromRequest.lastIndexOf(":");
      let IP = IPFromRequest.substring(indexOfColon + 1, IPFromRequest.length);
      return IP;
    }
    exports2.getProperIP = getProperIP;
    function getPacketTypeFromBuffer(buf) {
      return buf.readUInt8(2);
    }
    exports2.getPacketTypeFromBuffer = getPacketTypeFromBuffer;
    function getPacketsFromBuffer(buf) {
      const reader = new bufferreader_1.default(buf);
      let packets = [];
      let end = false;
      let length;
      let data;
      let index = 0;
      let packetType;
      let bufferPacket = Buffer.allocUnsafe(0);
      if (buf.length > 1) {
        while (!end) {
          length = reader.readUInt16();
          if (length === 0) {
            end = true;
          } else {
            data = buf.slice(reader.head - 2, reader.head - 2 + length);
            reader.head += length - 2;
            if (reader.head > buf.length) {
              bufferPacket = data;
              end = true;
            } else {
              packetType = getPacketTypeFromBuffer(data);
              packets.push({
                packetType,
                data
              });
              if (reader.head === buf.length - 1) {
                bufferPacket = buf.slice(buf.length - 1, buf.length);
                end = true;
              } else if (reader.head === buf.length) {
                end = true;
              }
            }
          }
        }
      } else {
        bufferPacket = buf.slice(0, 1);
      }
      return { bufferPacket, packets };
    }
    exports2.getPacketsFromBuffer = getPacketsFromBuffer;
    function _invalidateRequireCacheForFile(filePath, require2) {
      var realPath = path.resolve(filePath);
      delete require2.cache[realPath];
    }
    exports2._invalidateRequireCacheForFile = _invalidateRequireCacheForFile;
    function requireNoCache(filePath, require2) {
      _invalidateRequireCacheForFile(filePath, require2);
      return require2(filePath);
    }
    exports2.requireNoCache = requireNoCache;
    function getPackedStringByteLen(str) {
      const strLen = textToBuffer(utf8.encode(str)).length;
      if (strLen >= 128) {
        return 2 + strLen;
      }
      return 1 + strLen;
    }
    exports2.getPackedStringByteLen = getPackedStringByteLen;
  }
});

// node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/bufferreader.js
var require_bufferreader = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/bufferreader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var networktext_1 = require_networktext();
    var utils_1 = require_utils();
    var utf8 = require_utf8();
    var BufferReader = class {
      constructor(data) {
        this.head = 0;
        this._data = data;
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
      set buffer(data) {
        this._data = data;
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
        const rawText = (0, utils_1.bufferToText)(this._data.slice(this.head, this.head + strLength));
        const strContent = utf8.decode(rawText);
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
        return new networktext_1.default(mode, text);
      }
    };
    exports2.default = BufferReader;
  }
});

// node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/packetreader.js
var require_packetreader = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/packetreader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var bufferreader_1 = require_bufferreader();
    var PacketReader = class extends bufferreader_1.default {
      constructor(data) {
        super(data);
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
    exports2.default = PacketReader;
  }
});

// node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/dumbpacketwriter.js
var require_dumbpacketwriter = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/dumbpacketwriter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var bufferwriter_1 = require_bufferwriter();
    var PacketWriter = class extends bufferwriter_1.default {
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
    exports2.default = PacketWriter;
  }
});

// node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/packetwriter.js
var require_packetwriter = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.2.0/node_modules/@popstarfreas/packetfactory/packetwriter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var dumbpacketwriter_1 = require_dumbpacketwriter();
    var utils_1 = require_utils();
    var PacketWriter = class {
      constructor(writerCls = dumbpacketwriter_1.default) {
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
        this._size += (0, utils_1.getPackedStringByteLen)(str);
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
    exports2.default = PacketWriter;
  }
});

// src/packet/Packet_BossOrInvasionSpawn.js
var require_Packet_BossOrInvasionSpawn = __commonJS({
  "src/packet/Packet_BossOrInvasionSpawn.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readInt16();
      var invasionType = reader.readInt16();
      var spawnType;
      var exit = 0;
      switch (invasionType) {
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
        spawnType = invasionType < 0 ? {
          TAG: "Invasion",
          _0: -invasionType | 0
        } : {
          TAG: "Npc",
          _0: invasionType
        };
      }
      return {
        playerId,
        spawnType
      };
    }
    var Decode = {
      readInt16,
      parse
    };
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function packSpawnType(writer, spawnType) {
      if (typeof spawnType === "object") {
        if (spawnType.TAG === "Invasion") {
          return writer.packInt16(-spawnType._0 | 0);
        } else {
          return writer.packInt16(spawnType._0);
        }
      }
      switch (spawnType) {
        case "GoblinInvasion":
          return writer.packInt16(-1);
        case "FrostInvasion":
          return writer.packInt16(-2);
        case "PirateInvasion":
          return writer.packInt16(-3);
        case "PumpkinMoon":
          return writer.packInt16(-4);
        case "SnowMoon":
          return writer.packInt16(-5);
        case "Eclipse":
          return writer.packInt16(-6);
        case "MartianMoon":
          return writer.packInt16(-7);
        case "ImpendingDoom":
          return writer.packInt16(-8);
        case "BloodMoon":
          return writer.packInt16(-10);
        case "CombatBookUsed":
          return writer.packInt16(-11);
        case "BoughtCat":
          return writer.packInt16(-12);
        case "BoughtDog":
          return writer.packInt16(-13);
        case "BoughtBunny":
          return writer.packInt16(-14);
        case "BoughtSlime":
          return writer.packInt16(-15);
        case "MechQueen":
          return writer.packInt16(-16);
        case "CombatBookVolumeTwo":
          return writer.packInt16(-17);
        case "PeddlersSatchel":
          return writer.packInt16(-18);
      }
    }
    function toBuffer(self) {
      return packSpawnType(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("BossOrInvasionSpawn")).packInt16(self.playerId), self.spawnType).data;
    }
    var Encode = {
      Writer: void 0,
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      packSpawnType,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ChatMessageSmart.js
var require_Packet_ChatMessageSmart = __commonJS({
  "src/packet/Packet_ChatMessageSmart.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ChestItem.js
var require_Packet_ChestItem = __commonJS({
  "src/packet/Packet_ChestItem.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readInt16(prim) {
      return prim.readInt16();
    }
    function readByte(prim) {
      return prim.readByte();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var chestId = reader.readInt16();
      var slot = reader.readByte();
      var stack = reader.readInt16();
      var prefix = reader.readByte();
      var itemNetId = reader.readInt16();
      return {
        chestId,
        slot,
        stack,
        prefix,
        itemNetId
      };
    }
    var Decode = {
      readInt16,
      readByte,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ChestItem")).packInt16(self.chestId).packByte(self.slot).packInt16(self.stack).packByte(self.prefix).packInt16(self.itemNetId).data;
    }
    var Encode = {
      packByte,
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ChestOrTempleUnlock.js
var require_Packet_ChestOrTempleUnlock = __commonJS({
  "src/packet/Packet_ChestOrTempleUnlock.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
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
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var unlockType = unlockTypeFromInt(reader.readByte());
      var x = reader.readInt16();
      var y = reader.readInt16();
      if (unlockType !== void 0) {
        return {
          unlockType,
          x,
          y
        };
      }
    }
    var Decode = {
      readByte,
      readInt16,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ChestOrTempleUnlock")).packByte(unlockTypeToInt(self.unlockType)).packInt16(self.x).packInt16(self.y).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.unlockTypeToInt = unlockTypeToInt;
    exports2.unlockTypeFromInt = unlockTypeFromInt;
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ChestPlace.js
var require_Packet_ChestPlace = __commonJS({
  "src/packet/Packet_ChestPlace.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function toInt(action) {
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
    function fromInt(action) {
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
      toInt,
      fromInt,
      toString
    };
    function parse(payload) {
      var reader = new Packetreader(payload);
      var action = fromInt(reader.readByte());
      var x = reader.readInt16();
      var y = reader.readInt16();
      var style = reader.readInt16();
      var id = reader.readInt16();
      if (action !== void 0) {
        return {
          action,
          x,
          y,
          style,
          id
        };
      }
    }
    function packAction(writer, action) {
      var $$byte;
      switch (action) {
        case "PlaceChest":
          $$byte = 0;
          break;
        case "KillChest":
          $$byte = 1;
          break;
        case "PlaceDresser":
          $$byte = 2;
          break;
        case "KillDresser":
          $$byte = 3;
          break;
        case "PlaceContainer":
          $$byte = 4;
          break;
        case "KillContainer":
          $$byte = 5;
          break;
      }
      return writer.packByte($$byte);
    }
    function toBuffer(self) {
      return packAction(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ChestPlace")), self.action).packInt16(self.x).packInt16(self.y).packInt16(self.style).packInt16(self.id).data;
    }
    exports2.Action = Action;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ClientFinishConnectingToServer.js
var require_Packet_ClientFinishConnectingToServer = __commonJS({
  "src/packet/Packet_ClientFinishConnectingToServer.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ConnectRequest.js
var require_Packet_ConnectRequest = __commonJS({
  "src/packet/Packet_ConnectRequest.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var version = reader.readString();
      return {
        version
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ConnectRequest")).packString(self.version).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_CountsAsHostForGameplaySet.js
var require_Packet_CountsAsHostForGameplaySet = __commonJS({
  "src/packet/Packet_CountsAsHostForGameplaySet.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_array.js
var require_caml_array = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_array.js"(exports2) {
    "use strict";
    function sub(x, offset, len2) {
      var result = new Array(len2);
      var j = 0;
      var i = offset;
      while (j < len2) {
        result[j] = x[i];
        j = j + 1 | 0;
        i = i + 1 | 0;
      }
      ;
      return result;
    }
    function len(_acc, _l) {
      while (true) {
        var l = _l;
        var acc = _acc;
        if (!l) {
          return acc;
        }
        _l = l.tl;
        _acc = l.hd.length + acc | 0;
        continue;
      }
      ;
    }
    function fill(arr, _i, _l) {
      while (true) {
        var l = _l;
        var i = _i;
        if (!l) {
          return;
        }
        var x = l.hd;
        var l$1 = x.length;
        var k = i;
        var j = 0;
        while (j < l$1) {
          arr[k] = x[j];
          k = k + 1 | 0;
          j = j + 1 | 0;
        }
        ;
        _l = l.tl;
        _i = k;
        continue;
      }
      ;
    }
    function concat(l) {
      var v = len(0, l);
      var result = new Array(v);
      fill(result, 0, l);
      return result;
    }
    function set(xs, index, newval) {
      if (index < 0 || index >= xs.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
      }
      xs[index] = newval;
    }
    function get(xs, index) {
      if (index < 0 || index >= xs.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
      }
      return xs[index];
    }
    function make(len2, init) {
      var b = new Array(len2);
      for (var i = 0; i < len2; ++i) {
        b[i] = init;
      }
      return b;
    }
    function make_float(len2) {
      var b = new Array(len2);
      for (var i = 0; i < len2; ++i) {
        b[i] = 0;
      }
      return b;
    }
    function blit(a1, i1, a2, i2, len2) {
      if (i2 <= i1) {
        for (var j = 0; j < len2; ++j) {
          a2[j + i2 | 0] = a1[j + i1 | 0];
        }
        return;
      }
      for (var j$1 = len2 - 1 | 0; j$1 >= 0; --j$1) {
        a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
      }
    }
    function dup(prim) {
      return prim.slice(0);
    }
    exports2.dup = dup;
    exports2.sub = sub;
    exports2.concat = concat;
    exports2.make = make;
    exports2.make_float = make_float;
    exports2.blit = blit;
    exports2.get = get;
    exports2.set = set;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/curry.js
var require_curry = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/curry.js"(exports2) {
    "use strict";
    var Caml_array = require_caml_array();
    function app(_f, _args) {
      while (true) {
        var args = _args;
        var f = _f;
        var init_arity = f.length;
        var arity = init_arity === 0 ? 1 : init_arity;
        var len = args.length;
        var d = arity - len | 0;
        if (d === 0) {
          return f.apply(null, args);
        }
        if (d >= 0) {
          return /* @__PURE__ */ function(f2, args2) {
            return function(x) {
              return app(f2, args2.concat([x]));
            };
          }(f, args);
        }
        _args = Caml_array.sub(args, arity, -d | 0);
        _f = f.apply(null, Caml_array.sub(args, 0, arity));
        continue;
      }
      ;
    }
    function _1(o, a0) {
      var arity = o.length;
      if (arity === 1) {
        return o(a0);
      } else {
        switch (arity) {
          case 1:
            return o(a0);
          case 2:
            return function(param) {
              return o(a0, param);
            };
          case 3:
            return function(param, param$1) {
              return o(a0, param, param$1);
            };
          case 4:
            return function(param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            };
          case 5:
            return function(param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            };
          case 6:
            return function(param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            };
          case 7:
            return function(param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            };
          default:
            return app(o, [a0]);
        }
      }
    }
    function __1(o) {
      var arity = o.length;
      if (arity === 1) {
        return o;
      } else {
        return function(a0) {
          return _1(o, a0);
        };
      }
    }
    function _2(o, a0, a1) {
      var arity = o.length;
      if (arity === 2) {
        return o(a0, a1);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [a1]);
          case 2:
            return o(a0, a1);
          case 3:
            return function(param) {
              return o(a0, a1, param);
            };
          case 4:
            return function(param, param$1) {
              return o(a0, a1, param, param$1);
            };
          case 5:
            return function(param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            };
          case 6:
            return function(param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            };
          case 7:
            return function(param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            };
          default:
            return app(o, [
              a0,
              a1
            ]);
        }
      }
    }
    function __2(o) {
      var arity = o.length;
      if (arity === 2) {
        return o;
      } else {
        return function(a0, a1) {
          return _2(o, a0, a1);
        };
      }
    }
    function _3(o, a0, a1, a2) {
      var arity = o.length;
      if (arity === 3) {
        return o(a0, a1, a2);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2
            ]);
          case 2:
            return app(o(a0, a1), [a2]);
          case 3:
            return o(a0, a1, a2);
          case 4:
            return function(param) {
              return o(a0, a1, a2, param);
            };
          case 5:
            return function(param, param$1) {
              return o(a0, a1, a2, param, param$1);
            };
          case 6:
            return function(param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            };
          case 7:
            return function(param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            };
          default:
            return app(o, [
              a0,
              a1,
              a2
            ]);
        }
      }
    }
    function __3(o) {
      var arity = o.length;
      if (arity === 3) {
        return o;
      } else {
        return function(a0, a1, a2) {
          return _3(o, a0, a1, a2);
        };
      }
    }
    function _4(o, a0, a1, a2, a3) {
      var arity = o.length;
      if (arity === 4) {
        return o(a0, a1, a2, a3);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3
            ]);
          case 3:
            return app(o(a0, a1, a2), [a3]);
          case 4:
            return o(a0, a1, a2, a3);
          case 5:
            return function(param) {
              return o(a0, a1, a2, a3, param);
            };
          case 6:
            return function(param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            };
          case 7:
            return function(param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            };
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3
            ]);
        }
      }
    }
    function __4(o) {
      var arity = o.length;
      if (arity === 4) {
        return o;
      } else {
        return function(a0, a1, a2, a3) {
          return _4(o, a0, a1, a2, a3);
        };
      }
    }
    function _5(o, a0, a1, a2, a3, a4) {
      var arity = o.length;
      if (arity === 5) {
        return o(a0, a1, a2, a3, a4);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3,
              a4
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3,
              a4
            ]);
          case 3:
            return app(o(a0, a1, a2), [
              a3,
              a4
            ]);
          case 4:
            return app(o(a0, a1, a2, a3), [a4]);
          case 5:
            return o(a0, a1, a2, a3, a4);
          case 6:
            return function(param) {
              return o(a0, a1, a2, a3, a4, param);
            };
          case 7:
            return function(param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            };
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3,
              a4
            ]);
        }
      }
    }
    function __5(o) {
      var arity = o.length;
      if (arity === 5) {
        return o;
      } else {
        return function(a0, a1, a2, a3, a4) {
          return _5(o, a0, a1, a2, a3, a4);
        };
      }
    }
    function _6(o, a0, a1, a2, a3, a4, a5) {
      var arity = o.length;
      if (arity === 6) {
        return o(a0, a1, a2, a3, a4, a5);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3,
              a4,
              a5
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3,
              a4,
              a5
            ]);
          case 3:
            return app(o(a0, a1, a2), [
              a3,
              a4,
              a5
            ]);
          case 4:
            return app(o(a0, a1, a2, a3), [
              a4,
              a5
            ]);
          case 5:
            return app(o(a0, a1, a2, a3, a4), [a5]);
          case 6:
            return o(a0, a1, a2, a3, a4, a5);
          case 7:
            return function(param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            };
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3,
              a4,
              a5
            ]);
        }
      }
    }
    function __6(o) {
      var arity = o.length;
      if (arity === 6) {
        return o;
      } else {
        return function(a0, a1, a2, a3, a4, a5) {
          return _6(o, a0, a1, a2, a3, a4, a5);
        };
      }
    }
    function _7(o, a0, a1, a2, a3, a4, a5, a6) {
      var arity = o.length;
      if (arity === 7) {
        return o(a0, a1, a2, a3, a4, a5, a6);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3,
              a4,
              a5,
              a6
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3,
              a4,
              a5,
              a6
            ]);
          case 3:
            return app(o(a0, a1, a2), [
              a3,
              a4,
              a5,
              a6
            ]);
          case 4:
            return app(o(a0, a1, a2, a3), [
              a4,
              a5,
              a6
            ]);
          case 5:
            return app(o(a0, a1, a2, a3, a4), [
              a5,
              a6
            ]);
          case 6:
            return app(o(a0, a1, a2, a3, a4, a5), [a6]);
          case 7:
            return o(a0, a1, a2, a3, a4, a5, a6);
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3,
              a4,
              a5,
              a6
            ]);
        }
      }
    }
    function __7(o) {
      var arity = o.length;
      if (arity === 7) {
        return o;
      } else {
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return _7(o, a0, a1, a2, a3, a4, a5, a6);
        };
      }
    }
    function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
      var arity = o.length;
      if (arity === 8) {
        return o(a0, a1, a2, a3, a4, a5, a6, a7);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3,
              a4,
              a5,
              a6,
              a7
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3,
              a4,
              a5,
              a6,
              a7
            ]);
          case 3:
            return app(o(a0, a1, a2), [
              a3,
              a4,
              a5,
              a6,
              a7
            ]);
          case 4:
            return app(o(a0, a1, a2, a3), [
              a4,
              a5,
              a6,
              a7
            ]);
          case 5:
            return app(o(a0, a1, a2, a3, a4), [
              a5,
              a6,
              a7
            ]);
          case 6:
            return app(o(a0, a1, a2, a3, a4, a5), [
              a6,
              a7
            ]);
          case 7:
            return app(o(a0, a1, a2, a3, a4, a5, a6), [a7]);
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3,
              a4,
              a5,
              a6,
              a7
            ]);
        }
      }
    }
    function __8(o) {
      var arity = o.length;
      if (arity === 8) {
        return o;
      } else {
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
        };
      }
    }
    exports2.app = app;
    exports2._1 = _1;
    exports2.__1 = __1;
    exports2._2 = _2;
    exports2.__2 = __2;
    exports2._3 = _3;
    exports2.__3 = __3;
    exports2._4 = _4;
    exports2.__4 = __4;
    exports2._5 = _5;
    exports2.__5 = __5;
    exports2._6 = _6;
    exports2.__6 = __6;
    exports2._7 = _7;
    exports2.__7 = __7;
    exports2._8 = _8;
    exports2.__8 = __8;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_Option.js
var require_belt_Option = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_Option.js"(exports2) {
    "use strict";
    var Curry = require_curry();
    var Caml_option = require_caml_option();
    function keepU(opt, p) {
      if (opt !== void 0 && p(Caml_option.valFromOption(opt))) {
        return opt;
      }
    }
    function keep(opt, p) {
      return keepU(opt, Curry.__1(p));
    }
    function forEachU(opt, f) {
      if (opt !== void 0) {
        return f(Caml_option.valFromOption(opt));
      }
    }
    function forEach(opt, f) {
      forEachU(opt, Curry.__1(f));
    }
    function getExn(x) {
      if (x !== void 0) {
        return Caml_option.valFromOption(x);
      }
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    function mapWithDefaultU(opt, $$default, f) {
      if (opt !== void 0) {
        return f(Caml_option.valFromOption(opt));
      } else {
        return $$default;
      }
    }
    function mapWithDefault(opt, $$default, f) {
      return mapWithDefaultU(opt, $$default, Curry.__1(f));
    }
    function mapU(opt, f) {
      if (opt !== void 0) {
        return Caml_option.some(f(Caml_option.valFromOption(opt)));
      }
    }
    function map(opt, f) {
      return mapU(opt, Curry.__1(f));
    }
    function flatMapU(opt, f) {
      if (opt !== void 0) {
        return f(Caml_option.valFromOption(opt));
      }
    }
    function flatMap(opt, f) {
      return flatMapU(opt, Curry.__1(f));
    }
    function getWithDefault(opt, $$default) {
      if (opt !== void 0) {
        return Caml_option.valFromOption(opt);
      } else {
        return $$default;
      }
    }
    function orElse(opt, other) {
      if (opt !== void 0) {
        return opt;
      } else {
        return other;
      }
    }
    function isSome(x) {
      return x !== void 0;
    }
    function isNone(x) {
      return x === void 0;
    }
    function eqU(a, b, f) {
      if (a !== void 0) {
        if (b !== void 0) {
          return f(Caml_option.valFromOption(a), Caml_option.valFromOption(b));
        } else {
          return false;
        }
      } else {
        return b === void 0;
      }
    }
    function eq(a, b, f) {
      return eqU(a, b, Curry.__2(f));
    }
    function cmpU(a, b, f) {
      if (a !== void 0) {
        if (b !== void 0) {
          return f(Caml_option.valFromOption(a), Caml_option.valFromOption(b));
        } else {
          return 1;
        }
      } else if (b !== void 0) {
        return -1;
      } else {
        return 0;
      }
    }
    function cmp(a, b, f) {
      return cmpU(a, b, Curry.__2(f));
    }
    exports2.keepU = keepU;
    exports2.keep = keep;
    exports2.forEachU = forEachU;
    exports2.forEach = forEach;
    exports2.getExn = getExn;
    exports2.mapWithDefaultU = mapWithDefaultU;
    exports2.mapWithDefault = mapWithDefault;
    exports2.mapU = mapU;
    exports2.map = map;
    exports2.flatMapU = flatMapU;
    exports2.flatMap = flatMap;
    exports2.getWithDefault = getWithDefault;
    exports2.orElse = orElse;
    exports2.isSome = isSome;
    exports2.isNone = isNone;
    exports2.eqU = eqU;
    exports2.eq = eq;
    exports2.cmpU = cmpU;
    exports2.cmp = cmp;
  }
});

// src/packet/Packet_CreditsOrSlimeTransform.js
var require_Packet_CreditsOrSlimeTransform = __commonJS({
  "src/packet/Packet_CreditsOrSlimeTransform.js"(exports2) {
    "use strict";
    var Belt_Option = require_belt_Option();
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function fromInt(num) {
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
    function toInt(eventType) {
      switch (eventType) {
        case "CreditsTimeRemainingSet":
          return 0;
        case "CopperSlimeTransform":
          return 1;
        case "ElderSlimeTransform":
          return 2;
      }
    }
    var EventType = {
      fromInt,
      toInt
    };
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt32(prim) {
      return prim.readInt32();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var eventType = reader.readByte();
      var value = reader.readInt32();
      return Belt_Option.map(fromInt(eventType), function(eventType2) {
        return {
          eventType: eventType2,
          value
        };
      });
    }
    var Decode = {
      readByte,
      readInt32,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("CreditsOrSlimeTransform")).packByte(toInt(self.eventType)).packInt32(self.value).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt32,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    var $$Option;
    exports2.$$Option = $$Option;
    exports2.EventType = EventType;
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_CrystalInvasionStart.js
var require_Packet_CrystalInvasionStart = __commonJS({
  "src/packet/Packet_CrystalInvasionStart.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var x = reader.readInt16();
      var y = reader.readInt16();
      return {
        x,
        y
      };
    }
    var Decode = {
      readByte,
      readInt16,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("CrystalInvasionStart")).packInt16(self.x).packInt16(self.y).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_DimensionsUpdate.js
var require_Packet_DimensionsUpdate = __commonJS({
  "src/packet/Packet_DimensionsUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function toInt(self) {
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
    function fromInt(n) {
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
      toInt,
      fromInt
    };
    function parse(payload) {
      var reader = new Packetreader(payload);
      var updateType = reader.readInt16();
      var match = fromInt(updateType);
      if (match === void 0) {
        return;
      }
      switch (match) {
        case "RealIpAddress":
          var ip = reader.readString();
          return {
            TAG: "RealIpAddress",
            _0: ip
          };
        case "GamemodesJoinMode":
          return "GamemodesJoinMode";
        case "SwitchServer":
          var dimensionName = reader.readString();
          return {
            TAG: "SwitchServer",
            _0: dimensionName
          };
        case "SwitchServerManual":
          var ip$1 = reader.readString();
          var port = reader.readUInt16();
          return {
            TAG: "SwitchServerManual",
            _0: ip$1,
            _1: port
          };
      }
    }
    function gamemodesJoinModeToBuffer() {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")).packInt16(1).data;
    }
    function toBuffer(self) {
      if (typeof self !== "object") {
        return gamemodesJoinModeToBuffer();
      }
      switch (self.TAG) {
        case "RealIpAddress":
          var ip = self._0;
          return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")).packInt16(0).packString(ip).data;
        case "SwitchServer":
          var dimensionName = self._0;
          return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")).packInt16(2).packString(dimensionName).data;
        case "SwitchServerManual":
          var ip$1 = self._0;
          var port = self._1;
          return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")).packInt16(3).packString(ip$1).packUInt16(port).data;
      }
    }
    exports2.UpdateType = UpdateType;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ExtraValueSync.js
var require_Packet_ExtraValueSync = __commonJS({
  "src/packet/Packet_ExtraValueSync.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readInt16(prim) {
      return prim.readInt16();
    }
    function readInt32(prim) {
      return prim.readInt32();
    }
    function readSingle(prim) {
      return prim.readSingle();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var npcSlotId = reader.readInt16();
      var extraValue = reader.readInt32();
      var x = reader.readSingle();
      var y = reader.readSingle();
      return {
        npcSlotId,
        extraValue,
        x,
        y
      };
    }
    var Decode = {
      readInt16,
      readInt32,
      readSingle,
      parse
    };
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function packSingle(prim0, prim1) {
      return prim0.packSingle(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ExtraValueSync")).packInt16(self.npcSlotId).packInt32(self.extraValue).packSingle(self.x).packSingle(self.y).data;
    }
    var Encode = {
      packInt16,
      packInt32,
      packSingle,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_HaveDryadDoStardewAnimation.js
var require_Packet_HaveDryadDoStardewAnimation = __commonJS({
  "src/packet/Packet_HaveDryadDoStardewAnimation.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetwriter = require_packetwriter().default;
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    var Decode = {
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function packSingle(prim0, prim1) {
      return prim0.packSingle(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(_self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("HaveDryadDoStardewAnimation")).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt32,
      packSingle,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_InvasionProgressReport.js
var require_Packet_InvasionProgressReport = __commonJS({
  "src/packet/Packet_InvasionProgressReport.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// node_modules/.pnpm/@rescript+core@https+++codeload.github.com+popstarfreas+rescript-core+tar.gz+36c55da8f2_caf1374fc00c87f69a17ce978f74cf4d/node_modules/@rescript/core/src/Core__Error.js
var require_Core_Error = __commonJS({
  "node_modules/.pnpm/@rescript+core@https+++codeload.github.com+popstarfreas+rescript-core+tar.gz+36c55da8f2_caf1374fc00c87f69a17ce978f74cf4d/node_modules/@rescript/core/src/Core__Error.js"(exports2) {
    "use strict";
    var $$EvalError = {};
    var $$RangeError = {};
    var $$ReferenceError = {};
    var $$SyntaxError = {};
    var $$TypeError = {};
    var $$URIError = {};
    function panic(msg) {
      throw new Error("Panic! " + msg);
    }
    exports2.$$EvalError = $$EvalError;
    exports2.$$RangeError = $$RangeError;
    exports2.$$ReferenceError = $$ReferenceError;
    exports2.$$SyntaxError = $$SyntaxError;
    exports2.$$TypeError = $$TypeError;
    exports2.$$URIError = $$URIError;
    exports2.panic = panic;
  }
});

// node_modules/.pnpm/@rescript+core@https+++codeload.github.com+popstarfreas+rescript-core+tar.gz+36c55da8f2_caf1374fc00c87f69a17ce978f74cf4d/node_modules/@rescript/core/src/Core__Option.js
var require_Core_Option = __commonJS({
  "node_modules/.pnpm/@rescript+core@https+++codeload.github.com+popstarfreas+rescript-core+tar.gz+36c55da8f2_caf1374fc00c87f69a17ce978f74cf4d/node_modules/@rescript/core/src/Core__Option.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    var Core__Error = require_Core_Error();
    function filter(opt, p) {
      if (opt !== void 0 && p(Caml_option.valFromOption(opt))) {
        return opt;
      }
    }
    function forEach(opt, f) {
      if (opt !== void 0) {
        return f(Caml_option.valFromOption(opt));
      }
    }
    function getExn(x, message) {
      if (x !== void 0) {
        return Caml_option.valFromOption(x);
      } else {
        return Core__Error.panic(message !== void 0 ? message : "Option.getExn called for None value");
      }
    }
    function mapOr(opt, $$default, f) {
      if (opt !== void 0) {
        return f(Caml_option.valFromOption(opt));
      } else {
        return $$default;
      }
    }
    function map(opt, f) {
      if (opt !== void 0) {
        return Caml_option.some(f(Caml_option.valFromOption(opt)));
      }
    }
    function flatMap(opt, f) {
      if (opt !== void 0) {
        return f(Caml_option.valFromOption(opt));
      }
    }
    function getOr(opt, $$default) {
      if (opt !== void 0) {
        return Caml_option.valFromOption(opt);
      } else {
        return $$default;
      }
    }
    function orElse(opt, other) {
      if (opt !== void 0) {
        return opt;
      } else {
        return other;
      }
    }
    function isSome(x) {
      return x !== void 0;
    }
    function isNone(x) {
      return x === void 0;
    }
    function equal(a, b, eq) {
      if (a !== void 0) {
        if (b !== void 0) {
          return eq(Caml_option.valFromOption(a), Caml_option.valFromOption(b));
        } else {
          return false;
        }
      } else {
        return b === void 0;
      }
    }
    function compare(a, b, cmp) {
      if (a !== void 0) {
        if (b !== void 0) {
          return cmp(Caml_option.valFromOption(a), Caml_option.valFromOption(b));
        } else {
          return 1;
        }
      } else if (b !== void 0) {
        return -1;
      } else {
        return 0;
      }
    }
    var mapWithDefault = mapOr;
    var getWithDefault = getOr;
    exports2.filter = filter;
    exports2.forEach = forEach;
    exports2.getExn = getExn;
    exports2.mapOr = mapOr;
    exports2.mapWithDefault = mapWithDefault;
    exports2.map = map;
    exports2.flatMap = flatMap;
    exports2.getOr = getOr;
    exports2.getWithDefault = getWithDefault;
    exports2.orElse = orElse;
    exports2.isSome = isSome;
    exports2.isNone = isNone;
    exports2.equal = equal;
    exports2.compare = compare;
  }
});

// src/packet/Packet_ItemDropUpdate.js
var require_Packet_ItemDropUpdate = __commonJS({
  "src/packet/Packet_ItemDropUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var itemDropId = reader.readInt16();
      var x = reader.readSingle();
      var y = reader.readSingle();
      var vx = reader.readSingle();
      var vy = reader.readSingle();
      var stack = reader.readInt16();
      var prefix = reader.readByte();
      var noDelay = reader.readByte();
      var itemId = reader.readInt16();
      return {
        itemDropId,
        x,
        y,
        vx,
        vy,
        stack,
        prefix,
        noDelay,
        itemId
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ItemDropUpdate")).packInt16(self.itemDropId).packSingle(self.x).packSingle(self.y).packSingle(self.vx).packSingle(self.vy).packInt16(self.stack).packByte(self.prefix).packByte(self.noDelay).packInt16(self.itemId).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ItemDropShimmeredUpdate.js
var require_Packet_ItemDropShimmeredUpdate = __commonJS({
  "src/packet/Packet_ItemDropShimmeredUpdate.js"(exports2) {
    "use strict";
    var Core__Option = require_Core_Option();
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packet_ItemDropUpdate$TerrariaPacket = require_Packet_ItemDropUpdate();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function readSingle(prim) {
      return prim.readSingle();
    }
    function readBytes(prim0, prim1) {
      return prim0.readBytes(prim1);
    }
    function parse(payload) {
      return Core__Option.map(Packet_ItemDropUpdate$TerrariaPacket.parse(payload), function(itemDropUpdate) {
        var reader = new Packetreader(payload);
        reader.readBytes(24);
        var shimmered = reader.readByte() === 1;
        var shimmeredTime = reader.readSingle();
        return {
          itemDropId: itemDropUpdate.itemDropId,
          x: itemDropUpdate.x,
          y: itemDropUpdate.y,
          vx: itemDropUpdate.vx,
          vy: itemDropUpdate.vy,
          stack: itemDropUpdate.stack,
          prefix: itemDropUpdate.prefix,
          noDelay: itemDropUpdate.noDelay,
          itemId: itemDropUpdate.itemId,
          shimmered,
          shimmeredTime
        };
      });
    }
    var Decode = {
      readByte,
      readSingle,
      readBytes,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function packSingle(prim0, prim1) {
      return prim0.packSingle(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ItemDropShimmeredUpdate")).packInt16(self.itemDropId).packSingle(self.x).packSingle(self.y).packSingle(self.vx).packSingle(self.vy).packInt16(self.stack).packByte(self.prefix).packByte(self.noDelay).packInt16(self.itemId).packByte(self.shimmered ? 1 : 0).packSingle(self.shimmeredTime).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt16,
      packInt32,
      packSingle,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ItemOwner.js
var require_Packet_ItemOwner = __commonJS({
  "src/packet/Packet_ItemOwner.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var itemDropId = reader.readInt16();
      var owner = reader.readByte();
      return {
        itemDropId,
        owner
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ItemOwner")).packInt16(self.itemDropId).packByte(self.owner).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_LoadoutSwitch.js
var require_Packet_LoadoutSwitch = __commonJS({
  "src/packet/Packet_LoadoutSwitch.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var loadout = reader.readByte();
      return {
        playerId,
        loadout
      };
    }
    var Decode = {
      readByte,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function packSingle(prim0, prim1) {
      return prim0.packSingle(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("LoadoutSwitch")).packByte(self.playerId).packByte(self.loadout).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt32,
      packSingle,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/ArrayExt.js
var require_ArrayExt = __commonJS({
  "src/ArrayExt.js"(exports2) {
    "use strict";
    var Core__Option = require_Core_Option();
    function intoChunks(self, chunkSize) {
      var chunked = [];
      var len = self.length;
      var max = (Math.ceil(len / chunkSize) | 0) - 1 | 0;
      for (var i = 0; i <= max; ++i) {
        (function(__x) {
          chunked.push(__x);
        })(self.slice(Math.imul(i, chunkSize), Math.imul(i + 1 | 0, chunkSize)));
      }
      return chunked;
    }
    function getOr(self, index, or) {
      return Core__Option.getOr(self[index], or);
    }
    exports2.intoChunks = intoChunks;
    exports2.getOr = getOr;
  }
});

// src/BitFlags.js
var require_BitFlags = __commonJS({
  "src/BitFlags.js"(exports2) {
    "use strict";
    var ArrayExt$TerrariaPacket = require_ArrayExt();
    function fromByte($$byte) {
      return $$byte;
    }
    function fromFlags(flag12, flag22, flag32, flag42, flag52, flag62, flag72, flag82) {
      var $$byte = 0;
      $$byte = $$byte | (flag12 ? 1 : 0);
      $$byte = $$byte | (flag22 ? 2 : 0);
      $$byte = $$byte | (flag32 ? 4 : 0);
      $$byte = $$byte | (flag42 ? 8 : 0);
      $$byte = $$byte | (flag52 ? 16 : 0);
      $$byte = $$byte | (flag62 ? 32 : 0);
      $$byte = $$byte | (flag72 ? 64 : 0);
      $$byte = $$byte | (flag82 ? 128 : 0);
      return $$byte;
    }
    function fromArray(flags) {
      return fromFlags(ArrayExt$TerrariaPacket.getOr(flags, 0, false), ArrayExt$TerrariaPacket.getOr(flags, 1, false), ArrayExt$TerrariaPacket.getOr(flags, 2, false), ArrayExt$TerrariaPacket.getOr(flags, 3, false), ArrayExt$TerrariaPacket.getOr(flags, 4, false), ArrayExt$TerrariaPacket.getOr(flags, 5, false), ArrayExt$TerrariaPacket.getOr(flags, 6, false), ArrayExt$TerrariaPacket.getOr(flags, 7, false));
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
    exports2.fromByte = fromByte;
    exports2.fromFlags = fromFlags;
    exports2.fromArray = fromArray;
    exports2.flag1 = flag1;
    exports2.flag2 = flag2;
    exports2.flag3 = flag3;
    exports2.flag4 = flag4;
    exports2.flag5 = flag5;
    exports2.flag6 = flag6;
    exports2.flag7 = flag7;
    exports2.flag8 = flag8;
    exports2.flagN = flagN;
    exports2.forEach = forEach;
    exports2.toByte = toByte;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/js_exn.js
var require_js_exn = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/js_exn.js"(exports2) {
    "use strict";
    function raiseError(str) {
      throw new Error(str);
    }
    function raiseEvalError(str) {
      throw new EvalError(str);
    }
    function raiseRangeError(str) {
      throw new RangeError(str);
    }
    function raiseReferenceError(str) {
      throw new ReferenceError(str);
    }
    function raiseSyntaxError(str) {
      throw new SyntaxError(str);
    }
    function raiseTypeError(str) {
      throw new TypeError(str);
    }
    function raiseUriError(str) {
      throw new URIError(str);
    }
    var $$Error$1 = "JsError";
    exports2.$$Error = $$Error$1;
    exports2.raiseError = raiseError;
    exports2.raiseEvalError = raiseEvalError;
    exports2.raiseRangeError = raiseRangeError;
    exports2.raiseReferenceError = raiseReferenceError;
    exports2.raiseSyntaxError = raiseSyntaxError;
    exports2.raiseTypeError = raiseTypeError;
    exports2.raiseUriError = raiseUriError;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_exceptions.js
var require_caml_exceptions = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_exceptions.js"(exports2) {
    "use strict";
    var idMap = /* @__PURE__ */ new Map();
    function create(str) {
      var v = idMap.get(str);
      var id;
      if (v !== void 0) {
        var id$1 = v + 1 | 0;
        idMap.set(str, id$1);
        id = id$1;
      } else {
        idMap.set(str, 1);
        id = 1;
      }
      return str + ("/" + id);
    }
    function is_extension(e) {
      if (e == null) {
        return false;
      } else {
        return typeof e.RE_EXN_ID === "string";
      }
    }
    function exn_slot_name(x) {
      return x.RE_EXN_ID;
    }
    exports2.create = create;
    exports2.is_extension = is_extension;
    exports2.exn_slot_name = exn_slot_name;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_js_exceptions.js
var require_caml_js_exceptions = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_js_exceptions.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    var Caml_exceptions = require_caml_exceptions();
    var $$Error = "JsError";
    function internalToOCamlException(e) {
      if (Caml_exceptions.is_extension(e)) {
        return e;
      } else {
        return {
          RE_EXN_ID: "JsError",
          _1: e
        };
      }
    }
    function as_js_exn(exn) {
      if (exn.RE_EXN_ID === $$Error) {
        return Caml_option.some(exn._1);
      }
    }
    exports2.$$Error = $$Error;
    exports2.internalToOCamlException = internalToOCamlException;
    exports2.as_js_exn = as_js_exn;
  }
});

// src/ErrorAwarePacketWriter.js
var require_ErrorAwarePacketWriter = __commonJS({
  "src/ErrorAwarePacketWriter.js"(exports2) {
    "use strict";
    var Js_exn = require_js_exn();
    var Caml_js_exceptions = require_caml_js_exceptions();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetwriter = require_packetwriter().default;
    function packSingle(self, value, context) {
      if (self.TAG !== "Writing") {
        return self;
      }
      try {
        var writer = self._0.packSingle(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packInt32(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packByte(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
    function packUInt16(self, value, context) {
      if (self.TAG !== "Writing") {
        return self;
      }
      try {
        var writer = self._0.packUInt16(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packInt16(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packUInt64(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packString(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packSByte(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packBytes(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packColor(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packBuffer(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packNetworkText(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        _0: ManagedPacketWriter$PacketFactory.setType(self, value)
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
      return new Packetwriter();
    }
    exports2.packSingle = packSingle;
    exports2.packInt32 = packInt32;
    exports2.packByte = packByte;
    exports2.packUInt16 = packUInt16;
    exports2.packInt16 = packInt16;
    exports2.packUInt64 = packUInt64;
    exports2.packString = packString;
    exports2.packSByte = packSByte;
    exports2.packBytes = packBytes;
    exports2.packColor = packColor;
    exports2.packBuffer = packBuffer;
    exports2.packNetworkText = packNetworkText;
    exports2.setType = setType;
    exports2.data = data;
    exports2.make = make;
  }
});

// src/CreativePowers.js
var require_CreativePowers = __commonJS({
  "src/CreativePowers.js"(exports2) {
    "use strict";
    var Core__Option = require_Core_Option();
    var ArrayExt$TerrariaPacket = require_ArrayExt();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function toString(self) {
      return "PerPlayerSliderPower { playerId: " + self.playerId.toString() + ", value: " + self.value.toString() + " }";
    }
    function pack(writer, self) {
      return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, self.playerId, "playerId"), self.value, "value");
    }
    function parse(reader) {
      return {
        playerId: reader.readByte(),
        value: reader.readSingle()
      };
    }
    function toString$1(self) {
      if (self.TAG === "Everyone") {
        return "Everyone { values: " + self._0.map(function(value) {
          if (value) {
            return "1";
          } else {
            return "0";
          }
        }).join(", ") + " }";
      } else {
        return "Player { playerId: " + self._0.toString() + ", value: " + (self._1 ? "true" : "false") + " }";
      }
    }
    function pack$1(writer, self) {
      if (self.TAG === "Everyone") {
        var values = self._0;
        var bytes = ArrayExt$TerrariaPacket.intoChunks(values, 8).map(BitFlags$TerrariaPacket.fromArray).map(BitFlags$TerrariaPacket.toByte);
        return ErrorAwarePacketWriter$TerrariaPacket.packBytes(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 0, "everyoneType"), bytes, "everyoneValues");
      } else {
        var playerId = self._0;
        var value = self._1;
        return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 1, "playerType"), playerId, "playerId"), value ? 1 : 0, "playerValue");
      }
    }
    function parse$1(reader) {
      var match = reader.readByte();
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
        var toggles = [];
        for (var _for = 1; _for <= 32; ++_for) {
          var $$byte = reader.readByte();
          BitFlags$TerrariaPacket.forEach(BitFlags$TerrariaPacket.fromByte($$byte), function(flag) {
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
            return "StartDayImmediately";
          case "StartNoonImmediately":
            return "StartNoonImmediately";
          case "StartNightImmediately":
            return "StartNightImmediately";
          case "StartMidnightImmediately":
            return "StartMidnightImmediately";
        }
      } else {
        switch (self.TAG) {
          case "FreezeTime":
            return "FreezeTime { value: " + (self._0 ? "true" : "false") + " }";
          case "GodmodePower":
            return "GodmodePower { message: " + toString$1(self._0) + " }";
          case "ModifyWindDirectionAndStrength":
            return "ModifyWindDirectionAndStrength { value: " + self._0.toString() + " }";
          case "ModifyRainPower":
            return "ModifyRainPower { value: " + self._0.toString() + " }";
          case "ModifyTimeRate":
            return "ModifyTimeRate { value: " + self._0.toString() + " }";
          case "FreezeRainPower":
            return "FreezeRainPower { value: " + (self._0 ? "true" : "false") + " }";
          case "FreezeWindDirectionAndStrength":
            return "FreezeWindDirectionAndStrength { value: " + (self._0 ? "true" : "false") + " }";
          case "FarPlacementRangePower":
            return "FarPlacementRangePower { message: " + toString$1(self._0) + " }";
          case "DifficultySliderPower":
            return "DifficultySliderPower { value: " + self._0.toString() + " }";
          case "StopBiomeSpreadPower":
            return "StopBiomeSpreadPower { value: " + (self._0 ? "true" : "false") + " }";
          case "SpawnRateSliderPerPlayerPower":
            return "SpawnRateSliderPerPlayerPower { sliderPower: " + toString(self._0) + " }";
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
    function fromInt(n) {
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
    function toInt(self) {
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
      fromInt,
      toInt
    };
    function pack$2(writer, self) {
      if (typeof self !== "object") {
        switch (self) {
          case "StartDayImmediately":
            return ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 1, "startDayImmediatelyType");
          case "StartNoonImmediately":
            return ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 2, "startNoonImmediatelyType");
          case "StartNightImmediately":
            return ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 3, "startNightImmediatelyType");
          case "StartMidnightImmediately":
            return ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 4, "startMidnightImmediatelyType");
        }
      } else {
        switch (self.TAG) {
          case "FreezeTime":
            var value = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 0, "freezeTimeType"), value ? 1 : 0, "freezeTimeValue");
          case "GodmodePower":
            var message = self._0;
            return pack$1(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 5, "godmodePowerType"), message);
          case "ModifyWindDirectionAndStrength":
            var value$1 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 6, "modifyWindDirectionAndStrengthType"), value$1, "modifyWindDirectionAndStrengthValue");
          case "ModifyRainPower":
            var value$2 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 7, "modifyRainPowerType"), value$2, "modifyRainPowerValue");
          case "ModifyTimeRate":
            var value$3 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 8, "modifyTimeRateType"), value$3, "modifyTimeRateValue");
          case "FreezeRainPower":
            var on = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 9, "freezeRainPowerType"), on ? 1 : 0, "freezeRainPowerValue");
          case "FreezeWindDirectionAndStrength":
            var on$1 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 10, "freezeWindDirectionAndStrengthType"), on$1 ? 1 : 0, "freezeWindDirectionAndStrengthValue");
          case "FarPlacementRangePower":
            var message$1 = self._0;
            return pack$1(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 11, "farPlacementRangePowerType"), message$1);
          case "DifficultySliderPower":
            var value$4 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 12, "difficultySliderPowerType"), value$4, "difficultySliderPowerValue");
          case "StopBiomeSpreadPower":
            var on$2 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 13, "stopBiomeSpreadPowerType"), on$2 ? 1 : 0, "stopBiomeSpreadPowerValue");
          case "SpawnRateSliderPerPlayerPower":
            var message$2 = self._0;
            return pack(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 14, "spawnRateSliderPerPlayerPowerType"), message$2);
        }
      }
    }
    function parse$2(reader) {
      var match = reader.readUInt16();
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
          return Core__Option.map(parse$1(reader), function(m) {
            return {
              TAG: "GodmodePower",
              _0: m
            };
          });
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
          return Core__Option.map(parse$1(reader), function(m) {
            return {
              TAG: "FarPlacementRangePower",
              _0: m
            };
          });
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
          return Core__Option.map(parse(reader), function(m) {
            return {
              TAG: "SpawnRateSliderPerPlayerPower",
              _0: m
            };
          });
        default:
          return;
      }
    }
    var PerPlayerSliderPower = {
      pack,
      parse
    };
    var PerPlayerTogglePower = {
      pack: pack$1,
      parse: parse$1
    };
    exports2.PerPlayerSliderPower = PerPlayerSliderPower;
    exports2.PerPlayerTogglePower = PerPlayerTogglePower;
    exports2.toString = toString$2;
    exports2.CreativePowerType = CreativePowerType;
    exports2.pack = pack$2;
    exports2.parse = parse$2;
  }
});

// src/ErrorAwarePacketReader.js
var require_ErrorAwarePacketReader = __commonJS({
  "src/ErrorAwarePacketReader.js"(exports2) {
    "use strict";
    var Js_exn = require_js_exn();
    var Caml_exceptions = require_caml_exceptions();
    var Caml_js_exceptions = require_caml_js_exceptions();
    var ReadError = /* @__PURE__ */ Caml_exceptions.create("ErrorAwarePacketReader-TerrariaPacket.ReadError");
    function readByte(reader, context) {
      try {
        return reader.readByte();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readUInt16(reader, context) {
      try {
        return reader.readUInt16();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readInt16(reader, context) {
      try {
        return reader.readInt16();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readInt32(reader, context) {
      try {
        return reader.readInt32();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readUInt64(reader, context) {
      try {
        return reader.readUInt64();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readString(reader, context) {
      try {
        return reader.readString();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readBytes(reader, count, context) {
      try {
        return reader.readBytes(count);
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readSingle(reader, context) {
      try {
        return reader.readSingle();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readSByte(reader, context) {
      try {
        return reader.readSByte();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readColor(reader, context) {
      try {
        return reader.readColor();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readBuffer(reader, bytes, context) {
      try {
        return reader.readBuffer(bytes);
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readNetworkText(reader, context) {
      try {
        return reader.readNetworkText();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function getBytesLeft(reader) {
      return reader.bytesLeft;
    }
    exports2.ReadError = ReadError;
    exports2.readByte = readByte;
    exports2.readUInt16 = readUInt16;
    exports2.readInt16 = readInt16;
    exports2.readInt32 = readInt32;
    exports2.readUInt64 = readUInt64;
    exports2.readString = readString;
    exports2.readBytes = readBytes;
    exports2.readSingle = readSingle;
    exports2.readSByte = readSByte;
    exports2.readColor = readColor;
    exports2.readBuffer = readBuffer;
    exports2.readNetworkText = readNetworkText;
    exports2.getBytesLeft = getBytesLeft;
  }
});

// src/packet/Packet_NetModuleLoad.js
var require_Packet_NetModuleLoad = __commonJS({
  "src/packet/Packet_NetModuleLoad.js"(exports2) {
    "use strict";
    var Core__Option = require_Core_Option();
    var PacketType$TerrariaPacket = require_PacketType();
    var CreativePowers$TerrariaPacket = require_CreativePowers();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
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
    function fromInt(n) {
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
          return "CreativeUnlocks";
        case 6:
          return "CreativePower";
        case 7:
          return "CreativeUnlocksPlayerReport";
        case 8:
          return "TeleportPylon";
        case 9:
          return "Particles";
        case 10:
          return "CreativePowerPermissions";
        default:
          return;
      }
    }
    function toInt(self) {
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
        case "CreativeUnlocks":
          return 5;
        case "CreativePower":
          return 6;
        case "CreativeUnlocksPlayerReport":
          return 7;
        case "TeleportPylon":
          return 8;
        case "Particles":
          return 9;
        case "CreativePowerPermissions":
          return 10;
      }
    }
    var NetModuleType = {
      fromInt,
      toInt
    };
    function toBuffer(self) {
      switch (self.TAG) {
        case "Liquid":
          var liquid = self._0;
          var writer = ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 0, "moduleType"), liquid.changes.length, "changesCount");
          liquid.changes.forEach(function(change) {
            ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, change.y, "y"), change.x, "x"), change.amount, "amount"), change.liquidType, "liquidType");
          });
          return ErrorAwarePacketWriter$TerrariaPacket.data(writer);
        case "ClientText":
          var commandId = self._0;
          var message = self._1;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 1, "moduleType"), commandId, "commandId"), message, "message"));
        case "ServerText":
          var playerId = self._0;
          var networkText = self._1;
          var color = self._2;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packNetworkText(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 1, "moduleType"), playerId, "playerId"), networkText, "networkText"), color, "color"));
        case "Ping":
          var ping = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 2, "moduleType"), ping.x, "x"), ping.y, "y"));
        case "Ambience":
          var ambience = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 3, "moduleType"), ambience.playerId, "playerId"), ambience.seed, "seed"), ambience.skyEntityType, "skyEntityType"));
        case "Bestiary":
          var bestiary = self._0;
          var writer$1 = ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 4, "moduleType");
          var _count = bestiary.unlockType;
          var tmp;
          tmp = typeof _count !== "object" ? _count === "Sight" ? ErrorAwarePacketWriter$TerrariaPacket.packByte(writer$1, 1, "unlockTypeByte") : ErrorAwarePacketWriter$TerrariaPacket.packByte(writer$1, 2, "unlockTypeByte") : ErrorAwarePacketWriter$TerrariaPacket.packByte(writer$1, 0, "unlockTypeByte");
          ErrorAwarePacketWriter$TerrariaPacket.packInt16(tmp, bestiary.npcId, "npcId");
          var count = bestiary.unlockType;
          var tmp$1;
          tmp$1 = typeof count !== "object" ? writer$1 : ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer$1, count._0, "killCount");
          return ErrorAwarePacketWriter$TerrariaPacket.data(tmp$1);
        case "CreativeUnlocks":
          var creativeUnlock = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 5, "moduleType"), creativeUnlock.itemId, "itemId"), creativeUnlock.researchedCount, "researchedCount"));
        case "CreativePower":
          var creativePower = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(CreativePowers$TerrariaPacket.pack(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 6, "moduleType"), creativePower));
        case "CreativeUnlocksPlayerReport":
          var unlockReport = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 7, "moduleType"), unlockReport.itemId, "itemId"), unlockReport.researchedCount, "researchedCount"));
        case "TeleportPylon":
          var teleportPylon = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 8, "moduleType"), pylonActionToInt(teleportPylon.pylonAction), "pylonAction"), teleportPylon.x, "x"), teleportPylon.y, "y"), teleportPylon.pylonType, "pylonType"));
        case "Particles":
          var particle = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 9, "moduleType"), particle.particleType, "particleType"), particle.x, "x"), particle.y, "y"), particle.vx, "vx"), particle.vy, "vy"), particle.shaderIndex, "shaderIndex"), particle.invokedByPlayer, "invokedByPlayer"));
        case "CreativePowerPermissions":
          var creativePowerPermission = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 10, "moduleType"), creativePowerPermission.powerType, "powerType"), powerLevelToInt(creativePowerPermission.powerLevel), "powerLevel"));
      }
    }
    function parse(payload, fromServer) {
      var reader = new Packetreader(payload);
      var moduleType = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "moduleType");
      var match = fromInt(moduleType);
      if (match === void 0) {
        return;
      }
      switch (match) {
        case "Liquid":
          var changesCount = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "changesCount");
          var changes = [];
          for (var _for = 0; _for < changesCount; ++_for) {
            var y = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
            var x = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
            var amount = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "amount");
            var liquidType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidType");
            changes.push({
              x,
              y,
              amount,
              liquidType
            });
          }
          return {
            TAG: "Liquid",
            _0: {
              changes
            }
          };
        case "Text":
          if (fromServer) {
            var playerId = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
            var message = ErrorAwarePacketReader$TerrariaPacket.readNetworkText(reader, "message");
            var color = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "color");
            return {
              TAG: "ServerText",
              _0: playerId,
              _1: message,
              _2: color
            };
          }
          var commandId = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "commandId");
          var message$1 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "message");
          return {
            TAG: "ClientText",
            _0: commandId,
            _1: message$1
          };
        case "Ping":
          var x$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
          var y$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
          return {
            TAG: "Ping",
            _0: {
              x: x$1,
              y: y$1
            }
          };
        case "Ambience":
          var playerId$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
          var seed = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "seed");
          var skyEntityType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "skyEntityType");
          return {
            TAG: "Ambience",
            _0: {
              playerId: playerId$1,
              seed,
              skyEntityType
            }
          };
        case "Bestiary":
          var rawBestiaryUnlockType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "rawBestiaryUnlockType");
          var npcId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
          var bestiaryUnlockType;
          switch (rawBestiaryUnlockType) {
            case 0:
              bestiaryUnlockType = {
                TAG: "Kill",
                _0: ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "killCount")
              };
              break;
            case 1:
              bestiaryUnlockType = "Sight";
              break;
            case 2:
              bestiaryUnlockType = "Chat";
              break;
            default:
              bestiaryUnlockType = void 0;
          }
          if (bestiaryUnlockType !== void 0) {
            return {
              TAG: "Bestiary",
              _0: {
                unlockType: bestiaryUnlockType,
                npcId
              }
            };
          } else {
            return;
          }
        case "CreativeUnlocks":
          var itemId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
          var researchedCount = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "researchedCount");
          return {
            TAG: "CreativeUnlocks",
            _0: {
              itemId,
              researchedCount
            }
          };
        case "CreativePower":
          return Core__Option.map(CreativePowers$TerrariaPacket.parse(reader), function(p) {
            return {
              TAG: "CreativePower",
              _0: p
            };
          });
        case "CreativeUnlocksPlayerReport":
          ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "unknownByte");
          var itemId$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "itemId");
          var researchedCount$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "researchedCount");
          return {
            TAG: "CreativeUnlocksPlayerReport",
            _0: {
              itemId: itemId$1,
              researchedCount: researchedCount$1
            }
          };
        case "TeleportPylon":
          var rawPylonAction = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "rawPylonAction");
          var x$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
          var y$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
          var pylonType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "pylonType");
          var pylonAction;
          switch (rawPylonAction) {
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
              TAG: "TeleportPylon",
              _0: {
                pylonAction,
                x: x$2,
                y: y$2,
                pylonType
              }
            };
          } else {
            return;
          }
        case "Particles":
          var particleType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "particleType");
          var x$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
          var y$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
          var vx = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
          var vy = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
          var shaderIndex = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "shaderIndex");
          var invokedByPlayer = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "invokedByPlayer");
          return {
            TAG: "Particles",
            _0: {
              particleType,
              x: x$3,
              y: y$3,
              vx,
              vy,
              shaderIndex,
              invokedByPlayer
            }
          };
        case "CreativePowerPermissions":
          ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "unknownByte");
          var powerType = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "powerType");
          var rawPowerLevel = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "rawPowerLevel");
          var powerLevel;
          switch (rawPowerLevel) {
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
              TAG: "CreativePowerPermissions",
              _0: {
                powerType,
                powerLevel
              }
            };
          } else {
            return;
          }
      }
    }
    exports2.NetModuleType = NetModuleType;
    exports2.toBuffer = toBuffer;
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcBuffRemovalRequest.js
var require_Packet_NpcBuffRemovalRequest = __commonJS({
  "src/packet/Packet_NpcBuffRemovalRequest.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_sys.js
var require_caml_sys = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_sys.js"(exports2) {
    "use strict";
    function sys_getenv(s) {
      if (typeof process === "undefined" || process.env === void 0) {
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      var x = process.env[s];
      if (x !== void 0) {
        return x;
      }
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    var os_type = function(_) {
      if (typeof process !== "undefined" && process.platform === "win32") {
        return "Win32";
      } else {
        return "Unix";
      }
    };
    function sys_time(param) {
      if (typeof process === "undefined" || process.uptime === void 0) {
        return -1;
      } else {
        return process.uptime();
      }
    }
    var sys_getcwd = function(param) {
      if (typeof process === "undefined" || process.cwd === void 0) {
        return "/";
      }
      return process.cwd();
    };
    function sys_get_argv(param) {
      if (typeof process === "undefined") {
        return [
          "",
          [""]
        ];
      }
      var argv = process.argv;
      if (argv == null) {
        return [
          "",
          [""]
        ];
      } else {
        return [
          argv[0],
          argv
        ];
      }
    }
    function sys_exit(exit_code) {
      if (typeof process !== "undefined") {
        return process.exit(exit_code);
      }
    }
    function sys_is_directory(_s) {
      throw {
        RE_EXN_ID: "Failure",
        _1: "sys_is_directory not implemented",
        Error: new Error()
      };
    }
    function sys_file_exists(_s) {
      throw {
        RE_EXN_ID: "Failure",
        _1: "sys_file_exists not implemented",
        Error: new Error()
      };
    }
    exports2.sys_getenv = sys_getenv;
    exports2.sys_time = sys_time;
    exports2.os_type = os_type;
    exports2.sys_getcwd = sys_getcwd;
    exports2.sys_get_argv = sys_get_argv;
    exports2.sys_exit = sys_exit;
    exports2.sys_is_directory = sys_is_directory;
    exports2.sys_file_exists = sys_file_exists;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml.js
var require_caml = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml.js"(exports2) {
    "use strict";
    function int_compare(x, y) {
      if (x < y) {
        return -1;
      } else if (x === y) {
        return 0;
      } else {
        return 1;
      }
    }
    function bool_compare(x, y) {
      if (x) {
        if (y) {
          return 0;
        } else {
          return 1;
        }
      } else if (y) {
        return -1;
      } else {
        return 0;
      }
    }
    function float_compare(x, y) {
      if (x === y) {
        return 0;
      } else if (x < y) {
        return -1;
      } else if (x > y || x === x) {
        return 1;
      } else if (y === y) {
        return -1;
      } else {
        return 0;
      }
    }
    function bigint_compare(x, y) {
      if (x < y) {
        return -1;
      } else if (x === y) {
        return 0;
      } else {
        return 1;
      }
    }
    function string_compare(s1, s2) {
      if (s1 === s2) {
        return 0;
      } else if (s1 < s2) {
        return -1;
      } else {
        return 1;
      }
    }
    function bool_min(x, y) {
      if (x) {
        return y;
      } else {
        return x;
      }
    }
    function int_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    function float_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    function string_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    function bool_max(x, y) {
      if (x) {
        return x;
      } else {
        return y;
      }
    }
    function int_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    function float_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    function string_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    function i64_eq(x, y) {
      if (x[1] === y[1]) {
        return x[0] === y[0];
      } else {
        return false;
      }
    }
    function i64_ge(param, param$1) {
      var other_hi = param$1[0];
      var hi = param[0];
      if (hi > other_hi) {
        return true;
      } else if (hi < other_hi) {
        return false;
      } else {
        return param[1] >= param$1[1];
      }
    }
    function i64_neq(x, y) {
      return !i64_eq(x, y);
    }
    function i64_lt(x, y) {
      return !i64_ge(x, y);
    }
    function i64_gt(x, y) {
      if (x[0] > y[0]) {
        return true;
      } else if (x[0] < y[0]) {
        return false;
      } else {
        return x[1] > y[1];
      }
    }
    function i64_le(x, y) {
      return !i64_gt(x, y);
    }
    function i64_min(x, y) {
      if (i64_ge(x, y)) {
        return y;
      } else {
        return x;
      }
    }
    function i64_max(x, y) {
      if (i64_gt(x, y)) {
        return x;
      } else {
        return y;
      }
    }
    exports2.int_compare = int_compare;
    exports2.bool_compare = bool_compare;
    exports2.float_compare = float_compare;
    exports2.bigint_compare = bigint_compare;
    exports2.string_compare = string_compare;
    exports2.bool_min = bool_min;
    exports2.int_min = int_min;
    exports2.float_min = float_min;
    exports2.string_min = string_min;
    exports2.bool_max = bool_max;
    exports2.int_max = int_max;
    exports2.float_max = float_max;
    exports2.string_max = string_max;
    exports2.i64_eq = i64_eq;
    exports2.i64_neq = i64_neq;
    exports2.i64_lt = i64_lt;
    exports2.i64_gt = i64_gt;
    exports2.i64_le = i64_le;
    exports2.i64_ge = i64_ge;
    exports2.i64_min = i64_min;
    exports2.i64_max = i64_max;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_int64.js
var require_caml_int64 = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_int64.js"(exports2) {
    "use strict";
    var Caml = require_caml();
    function mk(lo, hi) {
      return [
        hi,
        lo >>> 0
      ];
    }
    var min_int = [
      -2147483648,
      0
    ];
    var max_int = [
      2147483647,
      4294967295
    ];
    var one = [
      0,
      1
    ];
    var zero = [
      0,
      0
    ];
    var neg_one = [
      -1,
      4294967295
    ];
    function neg_signed(x) {
      return (x & -2147483648) !== 0;
    }
    function non_neg_signed(x) {
      return (x & -2147483648) === 0;
    }
    function succ(param) {
      var x_lo = param[1];
      var x_hi = param[0];
      var lo = x_lo + 1 | 0;
      return [
        x_hi + (lo === 0 ? 1 : 0) | 0,
        lo >>> 0
      ];
    }
    function neg(param) {
      var other_lo = (param[1] ^ -1) + 1 | 0;
      return [
        (param[0] ^ -1) + (other_lo === 0 ? 1 : 0) | 0,
        other_lo >>> 0
      ];
    }
    function add_aux(param, y_lo, y_hi) {
      var x_lo = param[1];
      var lo = x_lo + y_lo | 0;
      var overflow = neg_signed(x_lo) && (neg_signed(y_lo) || non_neg_signed(lo)) || neg_signed(y_lo) && non_neg_signed(lo) ? 1 : 0;
      return [
        param[0] + y_hi + overflow | 0,
        lo >>> 0
      ];
    }
    function add(self, param) {
      return add_aux(self, param[1], param[0]);
    }
    function equal(x, y) {
      if (x[1] === y[1]) {
        return x[0] === y[0];
      } else {
        return false;
      }
    }
    function equal_null(x, y) {
      if (y !== null) {
        return Caml.i64_eq(x, y);
      } else {
        return false;
      }
    }
    function equal_undefined(x, y) {
      if (y !== void 0) {
        return Caml.i64_eq(x, y);
      } else {
        return false;
      }
    }
    function equal_nullable(x, y) {
      if (y == null) {
        return false;
      } else {
        return Caml.i64_eq(x, y);
      }
    }
    function sub_aux(x, lo, hi) {
      var y_lo = (lo ^ -1) + 1 >>> 0;
      var y_hi = (hi ^ -1) + (y_lo === 0 ? 1 : 0) | 0;
      return add_aux(x, y_lo, y_hi);
    }
    function sub(self, param) {
      return sub_aux(self, param[1], param[0]);
    }
    function lsl_(x, numBits) {
      if (numBits === 0) {
        return x;
      }
      var lo = x[1];
      if (numBits >= 32) {
        return [
          lo << (numBits - 32 | 0),
          0
        ];
      } else {
        return [
          lo >>> (32 - numBits | 0) | x[0] << numBits,
          lo << numBits >>> 0
        ];
      }
    }
    function lsr_(x, numBits) {
      if (numBits === 0) {
        return x;
      }
      var hi = x[0];
      var offset = numBits - 32 | 0;
      if (offset === 0) {
        return [
          0,
          hi >>> 0
        ];
      } else if (offset > 0) {
        return [
          0,
          hi >>> offset
        ];
      } else {
        return [
          hi >>> numBits,
          (hi << (-offset | 0) | x[1] >>> numBits) >>> 0
        ];
      }
    }
    function asr_(x, numBits) {
      if (numBits === 0) {
        return x;
      }
      var hi = x[0];
      if (numBits < 32) {
        return [
          hi >> numBits,
          (hi << (32 - numBits | 0) | x[1] >>> numBits) >>> 0
        ];
      } else {
        return [
          hi >= 0 ? 0 : -1,
          hi >> (numBits - 32 | 0) >>> 0
        ];
      }
    }
    function is_zero(x) {
      if (x[0] !== 0) {
        return false;
      } else {
        return x[1] === 0;
      }
    }
    function mul(_this, _other) {
      while (true) {
        var other = _other;
        var $$this = _this;
        var lo;
        var this_hi = $$this[0];
        var exit = 0;
        var exit$1 = 0;
        var exit$2 = 0;
        if (this_hi !== 0) {
          exit$2 = 4;
        } else {
          if ($$this[1] === 0) {
            return zero;
          }
          exit$2 = 4;
        }
        if (exit$2 === 4) {
          if (other[0] !== 0) {
            exit$1 = 3;
          } else {
            if (other[1] === 0) {
              return zero;
            }
            exit$1 = 3;
          }
        }
        if (exit$1 === 3) {
          if (this_hi !== -2147483648 || $$this[1] !== 0) {
            exit = 2;
          } else {
            lo = other[1];
          }
        }
        if (exit === 2) {
          var other_hi = other[0];
          var lo$1 = $$this[1];
          var exit$3 = 0;
          if (other_hi !== -2147483648 || other[1] !== 0) {
            exit$3 = 3;
          } else {
            lo = lo$1;
          }
          if (exit$3 === 3) {
            var other_lo = other[1];
            if (this_hi < 0) {
              if (other_hi >= 0) {
                return neg(mul(neg($$this), other));
              }
              _other = neg(other);
              _this = neg($$this);
              continue;
            }
            if (other_hi < 0) {
              return neg(mul($$this, neg(other)));
            }
            var a48 = this_hi >>> 16;
            var a32 = this_hi & 65535;
            var a16 = lo$1 >>> 16;
            var a00 = lo$1 & 65535;
            var b48 = other_hi >>> 16;
            var b32 = other_hi & 65535;
            var b16 = other_lo >>> 16;
            var b00 = other_lo & 65535;
            var c48 = 0;
            var c32 = 0;
            var c16 = 0;
            var c00 = a00 * b00;
            c16 = (c00 >>> 16) + a16 * b00;
            c32 = c16 >>> 16;
            c16 = (c16 & 65535) + a00 * b16;
            c32 = c32 + (c16 >>> 16) + a32 * b00;
            c48 = c32 >>> 16;
            c32 = (c32 & 65535) + a16 * b16;
            c48 = c48 + (c32 >>> 16);
            c32 = (c32 & 65535) + a00 * b32;
            c48 = c48 + (c32 >>> 16);
            c32 = c32 & 65535;
            c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
            return [
              c32 | c48 << 16,
              (c00 & 65535 | (c16 & 65535) << 16) >>> 0
            ];
          }
        }
        if ((lo & 1) === 0) {
          return zero;
        } else {
          return min_int;
        }
      }
      ;
    }
    function xor(param, param$1) {
      return [
        param[0] ^ param$1[0],
        (param[1] ^ param$1[1]) >>> 0
      ];
    }
    function or_(param, param$1) {
      return [
        param[0] | param$1[0],
        (param[1] | param$1[1]) >>> 0
      ];
    }
    function and_(param, param$1) {
      return [
        param[0] & param$1[0],
        (param[1] & param$1[1]) >>> 0
      ];
    }
    function to_float(param) {
      return param[0] * 4294967296 + param[1];
    }
    function of_float(x) {
      if (isNaN(x) || !isFinite(x)) {
        return zero;
      }
      if (x <= -9223372036854776e3) {
        return min_int;
      }
      if (x + 1 >= 9223372036854776e3) {
        return max_int;
      }
      if (x < 0) {
        return neg(of_float(-x));
      }
      var hi = x / 4294967296 | 0;
      var lo = x % 4294967296 | 0;
      return [
        hi,
        lo >>> 0
      ];
    }
    function isSafeInteger(param) {
      var hi = param[0];
      var top11Bits = hi >> 21;
      if (top11Bits === 0) {
        return true;
      } else if (top11Bits === -1) {
        return !(param[1] === 0 && hi === -2097152);
      } else {
        return false;
      }
    }
    function to_string(self) {
      if (isSafeInteger(self)) {
        return String(to_float(self));
      }
      if (self[0] < 0) {
        if (Caml.i64_eq(self, min_int)) {
          return "-9223372036854775808";
        } else {
          return "-" + to_string(neg(self));
        }
      }
      var approx_div1 = of_float(Math.floor(to_float(self) / 10));
      var lo = approx_div1[1];
      var hi = approx_div1[0];
      var match = sub_aux(sub_aux(self, lo << 3, lo >>> 29 | hi << 3), lo << 1, lo >>> 31 | hi << 1);
      var rem_lo = match[1];
      var rem_hi = match[0];
      if (rem_lo === 0 && rem_hi === 0) {
        return to_string(approx_div1) + "0";
      }
      if (rem_hi < 0) {
        var rem_lo$1 = (rem_lo ^ -1) + 1 >>> 0;
        var delta = Math.ceil(rem_lo$1 / 10);
        var remainder = 10 * delta - rem_lo$1;
        return to_string(sub_aux(approx_div1, delta | 0, 0)) + String(remainder | 0);
      }
      var delta$1 = Math.floor(rem_lo / 10);
      var remainder$1 = rem_lo - 10 * delta$1;
      return to_string(add_aux(approx_div1, delta$1 | 0, 0)) + String(remainder$1 | 0);
    }
    function div(_self, _other) {
      while (true) {
        var other = _other;
        var self = _self;
        var self_hi = self[0];
        var exit = 0;
        var exit$1 = 0;
        if (other[0] !== 0 || other[1] !== 0) {
          exit$1 = 2;
        } else {
          throw {
            RE_EXN_ID: "Division_by_zero",
            Error: new Error()
          };
        }
        if (exit$1 === 2) {
          if (self_hi !== -2147483648) {
            if (self_hi !== 0) {
              exit = 1;
            } else {
              if (self[1] === 0) {
                return zero;
              }
              exit = 1;
            }
          } else if (self[1] !== 0) {
            exit = 1;
          } else {
            if (Caml.i64_eq(other, one) || Caml.i64_eq(other, neg_one)) {
              return self;
            }
            if (Caml.i64_eq(other, min_int)) {
              return one;
            }
            var half_this = asr_(self, 1);
            var approx = lsl_(div(half_this, other), 1);
            var exit$2 = 0;
            if (approx[0] !== 0) {
              exit$2 = 3;
            } else {
              if (approx[1] === 0) {
                if (other[0] < 0) {
                  return one;
                } else {
                  return neg(one);
                }
              }
              exit$2 = 3;
            }
            if (exit$2 === 3) {
              var rem = sub(self, mul(other, approx));
              return add(approx, div(rem, other));
            }
          }
        }
        if (exit === 1) {
          var other_hi = other[0];
          var exit$3 = 0;
          if (other_hi !== -2147483648) {
            exit$3 = 2;
          } else {
            if (other[1] === 0) {
              return zero;
            }
            exit$3 = 2;
          }
          if (exit$3 === 2) {
            if (self_hi < 0) {
              if (other_hi >= 0) {
                return neg(div(neg(self), other));
              }
              _other = neg(other);
              _self = neg(self);
              continue;
            }
            if (other_hi < 0) {
              return neg(div(self, neg(other)));
            }
            var res = zero;
            var rem$1 = self;
            while (Caml.i64_ge(rem$1, other)) {
              var b = Math.floor(to_float(rem$1) / to_float(other));
              var approx$1 = 1 > b ? 1 : b;
              var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
              var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
              var approxRes = of_float(approx$1);
              var approxRem = mul(approxRes, other);
              while (approxRem[0] < 0 || Caml.i64_gt(approxRem, rem$1)) {
                approx$1 = approx$1 - delta;
                approxRes = of_float(approx$1);
                approxRem = mul(approxRes, other);
              }
              ;
              if (is_zero(approxRes)) {
                approxRes = one;
              }
              res = add(res, approxRes);
              rem$1 = sub(rem$1, approxRem);
            }
            ;
            return res;
          }
        }
      }
      ;
    }
    function mod_(self, other) {
      return sub(self, mul(div(self, other), other));
    }
    function div_mod(self, other) {
      var quotient = div(self, other);
      return [
        quotient,
        sub(self, mul(quotient, other))
      ];
    }
    function compare(self, other) {
      var y = other[0];
      var x = self[0];
      var v = x < y ? -1 : x === y ? 0 : 1;
      if (v !== 0) {
        return v;
      }
      var y$1 = other[1];
      var x$1 = self[1];
      if (x$1 < y$1) {
        return -1;
      } else if (x$1 === y$1) {
        return 0;
      } else {
        return 1;
      }
    }
    function of_int32(lo) {
      return [
        lo < 0 ? -1 : 0,
        lo >>> 0
      ];
    }
    function to_int32(x) {
      return x[1] | 0;
    }
    function to_hex(x) {
      var x_lo = x[1];
      var x_hi = x[0];
      var aux = function(v) {
        return (v >>> 0).toString(16);
      };
      if (x_hi === 0 && x_lo === 0) {
        return "0";
      }
      if (x_lo === 0) {
        return aux(x_hi) + "00000000";
      }
      if (x_hi === 0) {
        return aux(x_lo);
      }
      var lo = aux(x_lo);
      var pad = 8 - lo.length | 0;
      if (pad <= 0) {
        return aux(x_hi) + lo;
      } else {
        return aux(x_hi) + ("0".repeat(pad) + lo);
      }
    }
    function discard_sign(x) {
      return [
        2147483647 & x[0],
        x[1]
      ];
    }
    function float_of_bits(x) {
      return function(lo, hi) {
        return new Float64Array(new Int32Array([lo, hi]).buffer)[0];
      }(x[1], x[0]);
    }
    function bits_of_float(x) {
      var match = function(x2) {
        return new Int32Array(new Float64Array([x2]).buffer);
      }(x);
      return [
        match[1],
        match[0] >>> 0
      ];
    }
    exports2.mk = mk;
    exports2.succ = succ;
    exports2.min_int = min_int;
    exports2.max_int = max_int;
    exports2.one = one;
    exports2.zero = zero;
    exports2.neg_one = neg_one;
    exports2.of_int32 = of_int32;
    exports2.to_int32 = to_int32;
    exports2.add = add;
    exports2.neg = neg;
    exports2.sub = sub;
    exports2.lsl_ = lsl_;
    exports2.lsr_ = lsr_;
    exports2.asr_ = asr_;
    exports2.is_zero = is_zero;
    exports2.mul = mul;
    exports2.xor = xor;
    exports2.or_ = or_;
    exports2.and_ = and_;
    exports2.equal = equal;
    exports2.equal_null = equal_null;
    exports2.equal_undefined = equal_undefined;
    exports2.equal_nullable = equal_nullable;
    exports2.to_float = to_float;
    exports2.of_float = of_float;
    exports2.div = div;
    exports2.mod_ = mod_;
    exports2.compare = compare;
    exports2.float_of_bits = float_of_bits;
    exports2.bits_of_float = bits_of_float;
    exports2.div_mod = div_mod;
    exports2.to_hex = to_hex;
    exports2.discard_sign = discard_sign;
    exports2.to_string = to_string;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_format.js
var require_caml_format = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_format.js"(exports2) {
    "use strict";
    var Caml = require_caml();
    var Caml_int64 = require_caml_int64();
    function parse_digit(c) {
      if (c >= 65) {
        if (c >= 97) {
          if (c >= 123) {
            return -1;
          } else {
            return c - 87 | 0;
          }
        } else if (c >= 91) {
          return -1;
        } else {
          return c - 55 | 0;
        }
      } else if (c > 57 || c < 48) {
        return -1;
      } else {
        return c - /* '0' */
        48 | 0;
      }
    }
    function int_of_string_base(param) {
      switch (param) {
        case "Oct":
          return 8;
        case "Hex":
          return 16;
        case "Dec":
          return 10;
        case "Bin":
          return 2;
      }
    }
    function parse_sign_and_base(s) {
      var sign = 1;
      var base = "Dec";
      var i = 0;
      var match = s.codePointAt(i);
      switch (match) {
        case 43:
          i = i + 1 | 0;
          break;
        case 45:
          sign = -1;
          i = i + 1 | 0;
          break;
        default:
      }
      if (s.codePointAt(i) === /* '0' */
      48) {
        var match$1 = s.codePointAt(i + 1 | 0);
        if (match$1 >= 89) {
          if (match$1 >= 111) {
            if (match$1 < 121) {
              switch (match$1) {
                case 111:
                  base = "Oct";
                  i = i + 2 | 0;
                  break;
                case 117:
                  i = i + 2 | 0;
                  break;
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                  break;
                case 120:
                  base = "Hex";
                  i = i + 2 | 0;
                  break;
              }
            }
          } else if (match$1 === 98) {
            base = "Bin";
            i = i + 2 | 0;
          }
        } else if (match$1 !== 66) {
          if (match$1 >= 79) {
            switch (match$1) {
              case 79:
                base = "Oct";
                i = i + 2 | 0;
                break;
              case 85:
                i = i + 2 | 0;
                break;
              case 80:
              case 81:
              case 82:
              case 83:
              case 84:
              case 86:
              case 87:
                break;
              case 88:
                base = "Hex";
                i = i + 2 | 0;
                break;
            }
          }
        } else {
          base = "Bin";
          i = i + 2 | 0;
        }
      }
      return [
        i,
        sign,
        base
      ];
    }
    function int_of_string(s) {
      var match = parse_sign_and_base(s);
      var i = match[0];
      var base = int_of_string_base(match[2]);
      var threshold = 4294967295;
      var len = s.length;
      var c = i < len ? s.codePointAt(i) : (
        /* '\000' */
        0
      );
      var d = parse_digit(c);
      if (d < 0 || d >= base) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "int_of_string",
          Error: new Error()
        };
      }
      var aux = function(_acc, _k) {
        while (true) {
          var k = _k;
          var acc = _acc;
          if (k === len) {
            return acc;
          }
          var a = s.codePointAt(k);
          if (a === /* '_' */
          95) {
            _k = k + 1 | 0;
            continue;
          }
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw {
              RE_EXN_ID: "Failure",
              _1: "int_of_string",
              Error: new Error()
            };
          }
          var acc$1 = base * acc + v;
          if (acc$1 > threshold) {
            throw {
              RE_EXN_ID: "Failure",
              _1: "int_of_string",
              Error: new Error()
            };
          }
          _k = k + 1 | 0;
          _acc = acc$1;
          continue;
        }
        ;
      };
      var res = match[1] * aux(d, i + 1 | 0);
      var or_res = res | 0;
      if (base === 10 && res !== or_res) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "int_of_string",
          Error: new Error()
        };
      }
      return or_res;
    }
    function int64_of_string(s) {
      var match = parse_sign_and_base(s);
      var hbase = match[2];
      var i = match[0];
      var base = Caml_int64.of_int32(int_of_string_base(hbase));
      var sign = Caml_int64.of_int32(match[1]);
      var threshold;
      switch (hbase) {
        case "Oct":
          threshold = [
            536870911,
            4294967295
          ];
          break;
        case "Hex":
          threshold = [
            268435455,
            4294967295
          ];
          break;
        case "Dec":
          threshold = [
            429496729,
            2576980377
          ];
          break;
        case "Bin":
          threshold = Caml_int64.max_int;
          break;
      }
      var len = s.length;
      var c = i < len ? s.codePointAt(i) : (
        /* '\000' */
        0
      );
      var d = Caml_int64.of_int32(parse_digit(c));
      if (Caml.i64_lt(d, Caml_int64.zero) || Caml.i64_ge(d, base)) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "int64_of_string",
          Error: new Error()
        };
      }
      var aux = function(_acc, _k) {
        while (true) {
          var k = _k;
          var acc = _acc;
          if (k === len) {
            return acc;
          }
          var a = s.codePointAt(k);
          if (a === /* '_' */
          95) {
            _k = k + 1 | 0;
            continue;
          }
          var v = Caml_int64.of_int32(parse_digit(a));
          if (Caml.i64_lt(v, Caml_int64.zero) || Caml.i64_ge(v, base) || Caml.i64_gt(acc, threshold)) {
            throw {
              RE_EXN_ID: "Failure",
              _1: "int64_of_string",
              Error: new Error()
            };
          }
          var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
          _k = k + 1 | 0;
          _acc = acc$1;
          continue;
        }
        ;
      };
      var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
      var or_res = Caml_int64.or_(res, Caml_int64.zero);
      if (Caml.i64_eq(base, [
        0,
        10
      ]) && Caml.i64_neq(res, or_res)) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "int64_of_string",
          Error: new Error()
        };
      }
      return or_res;
    }
    function int_of_base(param) {
      switch (param) {
        case "Oct":
          return 8;
        case "Hex":
          return 16;
        case "Dec":
          return 10;
      }
    }
    function lowercase(c) {
      if (c >= /* 'A' */
      65 && c <= /* 'Z' */
      90 || c >= /* '\192' */
      192 && c <= /* '\214' */
      214 || c >= /* '\216' */
      216 && c <= /* '\222' */
      222) {
        return c + 32 | 0;
      } else {
        return c;
      }
    }
    function parse_format(fmt) {
      var len = fmt.length;
      if (len > 31) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "format_int: format too long",
          Error: new Error()
        };
      }
      var f = {
        justify: "+",
        signstyle: "-",
        filter: " ",
        alternate: false,
        base: "Dec",
        signedconv: false,
        width: 0,
        uppercase: false,
        sign: 1,
        prec: -1,
        conv: "f"
      };
      var _i = 0;
      while (true) {
        var i = _i;
        if (i >= len) {
          return f;
        }
        var c = fmt.codePointAt(i);
        var exit = 0;
        if (c >= 69) {
          if (c >= 88) {
            if (c >= 121) {
              exit = 1;
            } else {
              switch (c) {
                case 88:
                  f.base = "Hex";
                  f.uppercase = true;
                  _i = i + 1 | 0;
                  continue;
                case 101:
                case 102:
                case 103:
                  exit = 5;
                  break;
                case 100:
                case 105:
                  exit = 4;
                  break;
                case 111:
                  f.base = "Oct";
                  _i = i + 1 | 0;
                  continue;
                case 117:
                  f.base = "Dec";
                  _i = i + 1 | 0;
                  continue;
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 104:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                  exit = 1;
                  break;
                case 120:
                  f.base = "Hex";
                  _i = i + 1 | 0;
                  continue;
              }
            }
          } else if (c >= 72) {
            exit = 1;
          } else {
            f.signedconv = true;
            f.uppercase = true;
            f.conv = String.fromCharCode(lowercase(c));
            _i = i + 1 | 0;
            continue;
          }
        } else {
          switch (c) {
            case 35:
              f.alternate = true;
              _i = i + 1 | 0;
              continue;
            case 32:
            case 43:
              exit = 2;
              break;
            case 45:
              f.justify = "-";
              _i = i + 1 | 0;
              continue;
            case 46:
              f.prec = 0;
              var j = i + 1 | 0;
              while ((/* @__PURE__ */ function(j2) {
                return function() {
                  var w = fmt.codePointAt(j2) - /* '0' */
                  48 | 0;
                  return w >= 0 && w <= 9;
                };
              }(j))()) {
                f.prec = (Math.imul(f.prec, 10) + fmt.codePointAt(j) | 0) - /* '0' */
                48 | 0;
                j = j + 1 | 0;
              }
              ;
              _i = j;
              continue;
            case 48:
              f.filter = "0";
              _i = i + 1 | 0;
              continue;
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              exit = 3;
              break;
            default:
              exit = 1;
          }
        }
        switch (exit) {
          case 1:
            _i = i + 1 | 0;
            continue;
          case 2:
            f.signstyle = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue;
          case 3:
            f.width = 0;
            var j$1 = i;
            while ((/* @__PURE__ */ function(j$12) {
              return function() {
                var w = fmt.codePointAt(j$12) - /* '0' */
                48 | 0;
                return w >= 0 && w <= 9;
              };
            }(j$1))()) {
              f.width = (Math.imul(f.width, 10) + fmt.codePointAt(j$1) | 0) - /* '0' */
              48 | 0;
              j$1 = j$1 + 1 | 0;
            }
            ;
            _i = j$1;
            continue;
          case 4:
            f.signedconv = true;
            f.base = "Dec";
            _i = i + 1 | 0;
            continue;
          case 5:
            f.signedconv = true;
            f.conv = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue;
        }
      }
      ;
    }
    function finish_formatting(config, rawbuffer) {
      var justify = config.justify;
      var signstyle = config.signstyle;
      var filter = config.filter;
      var alternate = config.alternate;
      var base = config.base;
      var signedconv = config.signedconv;
      var width = config.width;
      var uppercase = config.uppercase;
      var sign = config.sign;
      var len = rawbuffer.length;
      if (signedconv && (sign < 0 || signstyle !== "-")) {
        len = len + 1 | 0;
      }
      if (alternate) {
        if (base === "Oct") {
          len = len + 1 | 0;
        } else if (base === "Hex") {
          len = len + 2 | 0;
        }
      }
      var buffer = "";
      if (justify === "+" && filter === " ") {
        for (var _for = len; _for < width; ++_for) {
          buffer = buffer + filter;
        }
      }
      if (signedconv) {
        if (sign < 0) {
          buffer = buffer + "-";
        } else if (signstyle !== "-") {
          buffer = buffer + signstyle;
        }
      }
      if (alternate && base === "Oct") {
        buffer = buffer + "0";
      }
      if (alternate && base === "Hex") {
        buffer = buffer + "0x";
      }
      if (justify === "+" && filter === "0") {
        for (var _for$1 = len; _for$1 < width; ++_for$1) {
          buffer = buffer + filter;
        }
      }
      buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
      if (justify === "-") {
        for (var _for$2 = len; _for$2 < width; ++_for$2) {
          buffer = buffer + " ";
        }
      }
      return buffer;
    }
    function format_int(fmt, i) {
      if (fmt === "%d") {
        return String(i);
      }
      var f = parse_format(fmt);
      var i$1 = i < 0 ? f.signedconv ? (f.sign = -1, -i >>> 0) : i >>> 0 : i;
      var s = i$1.toString(int_of_base(f.base));
      if (f.prec >= 0) {
        f.filter = " ";
        var n = f.prec - s.length | 0;
        if (n > 0) {
          s = "0".repeat(n) + s;
        }
      }
      return finish_formatting(f, s);
    }
    function dec_of_pos_int64(x) {
      if (!Caml.i64_lt(x, Caml_int64.zero)) {
        return Caml_int64.to_string(x);
      }
      var wbase = [
        0,
        10
      ];
      var y = Caml_int64.discard_sign(x);
      var match = Caml_int64.div_mod(y, wbase);
      var match$1 = Caml_int64.div_mod(Caml_int64.add([
        0,
        8
      ], match[1]), wbase);
      var quotient = Caml_int64.add(Caml_int64.add([
        214748364,
        3435973836
      ], match[0]), match$1[0]);
      return Caml_int64.to_string(quotient) + "0123456789"[Caml_int64.to_int32(match$1[1])];
    }
    function oct_of_int64(x) {
      var s = "";
      var wbase = [
        0,
        8
      ];
      var cvtbl = "01234567";
      if (Caml.i64_lt(x, Caml_int64.zero)) {
        var y = Caml_int64.discard_sign(x);
        var match = Caml_int64.div_mod(y, wbase);
        var quotient = Caml_int64.add([
          268435456,
          0
        ], match[0]);
        var modulus = match[1];
        s = cvtbl[Caml_int64.to_int32(modulus)] + s;
        while (Caml.i64_neq(quotient, Caml_int64.zero)) {
          var match$1 = Caml_int64.div_mod(quotient, wbase);
          quotient = match$1[0];
          modulus = match$1[1];
          s = cvtbl[Caml_int64.to_int32(modulus)] + s;
        }
        ;
      } else {
        var match$2 = Caml_int64.div_mod(x, wbase);
        var quotient$1 = match$2[0];
        var modulus$1 = match$2[1];
        s = cvtbl[Caml_int64.to_int32(modulus$1)] + s;
        while (Caml.i64_neq(quotient$1, Caml_int64.zero)) {
          var match$3 = Caml_int64.div_mod(quotient$1, wbase);
          quotient$1 = match$3[0];
          modulus$1 = match$3[1];
          s = cvtbl[Caml_int64.to_int32(modulus$1)] + s;
        }
        ;
      }
      return s;
    }
    function int64_format(fmt, x) {
      if (fmt === "%d") {
        return Caml_int64.to_string(x);
      }
      var f = parse_format(fmt);
      var x$1 = f.signedconv && Caml.i64_lt(x, Caml_int64.zero) ? (f.sign = -1, Caml_int64.neg(x)) : x;
      var match = f.base;
      var s;
      switch (match) {
        case "Oct":
          s = oct_of_int64(x$1);
          break;
        case "Hex":
          s = Caml_int64.to_hex(x$1);
          break;
        case "Dec":
          s = dec_of_pos_int64(x$1);
          break;
      }
      var fill_s;
      if (f.prec >= 0) {
        f.filter = " ";
        var n = f.prec - s.length | 0;
        fill_s = n > 0 ? "0".repeat(n) + s : s;
      } else {
        fill_s = s;
      }
      return finish_formatting(f, fill_s);
    }
    function format_float(fmt, x) {
      var f = parse_format(fmt);
      var prec = f.prec < 0 ? 6 : f.prec;
      var x$1 = x < 0 ? (f.sign = -1, -x) : x;
      var s = "";
      if (isNaN(x$1)) {
        s = "nan";
        f.filter = " ";
      } else if (isFinite(x$1)) {
        var match = f.conv;
        switch (match) {
          case "e":
            s = x$1.toExponential(prec);
            var i = s.length;
            if (s.codePointAt(i - 3 | 0) === /* 'e' */
            101) {
              s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
            }
            break;
          case "f":
            s = x$1.toFixed(prec);
            break;
          case "g":
            var prec$1 = prec !== 0 ? prec : 1;
            s = x$1.toExponential(prec$1 - 1 | 0);
            var j = s.indexOf("e");
            var exp = Number(s.slice(j + 1 | 0)) | 0;
            if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
              var i$1 = j - 1 | 0;
              while (s.codePointAt(i$1) === /* '0' */
              48) {
                i$1 = i$1 - 1 | 0;
              }
              ;
              if (s.codePointAt(i$1) === /* '.' */
              46) {
                i$1 = i$1 - 1 | 0;
              }
              s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
              var i$2 = s.length;
              if (s.codePointAt(i$2 - 3 | 0) === /* 'e' */
              101) {
                s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
              }
            } else {
              var p = prec$1;
              if (exp < 0) {
                p = p - (exp + 1 | 0) | 0;
                s = x$1.toFixed(p);
              } else {
                while (function() {
                  s = x$1.toFixed(p);
                  return s.length > (prec$1 + 1 | 0);
                }()) {
                  p = p - 1 | 0;
                }
                ;
              }
              if (p !== 0) {
                var k = s.length - 1 | 0;
                while (s.codePointAt(k) === /* '0' */
                48) {
                  k = k - 1 | 0;
                }
                ;
                if (s.codePointAt(k) === /* '.' */
                46) {
                  k = k - 1 | 0;
                }
                s = s.slice(0, k + 1 | 0);
              }
            }
            break;
          default:
        }
      } else {
        s = "inf";
        f.filter = " ";
      }
      return finish_formatting(f, s);
    }
    var hexstring_of_float = function(x, prec, style) {
      if (!isFinite(x)) {
        if (isNaN(x)) return "nan";
        return x > 0 ? "infinity" : "-infinity";
      }
      var sign = x == 0 && 1 / x == -Infinity ? 1 : x >= 0 ? 0 : 1;
      if (sign) x = -x;
      var exp = 0;
      if (x == 0) {
      } else if (x < 1) {
        while (x < 1 && exp > -1022) {
          x *= 2;
          exp--;
        }
      } else {
        while (x >= 2) {
          x /= 2;
          exp++;
        }
      }
      var exp_sign = exp < 0 ? "" : "+";
      var sign_str = "";
      if (sign) sign_str = "-";
      else {
        switch (style) {
          case 43:
            sign_str = "+";
            break;
          case 32:
            sign_str = " ";
            break;
          default:
            break;
        }
      }
      if (prec >= 0 && prec < 13) {
        var cst = Math.pow(2, prec * 4);
        x = Math.round(x * cst) / cst;
      }
      var x_str = x.toString(16);
      if (prec >= 0) {
        var idx = x_str.indexOf(".");
        if (idx < 0) {
          x_str += "." + "0".repeat(prec);
        } else {
          var size = idx + 1 + prec;
          if (x_str.length < size)
            x_str += "0".repeat(size - x_str.length);
          else
            x_str = x_str.substr(0, size);
        }
      }
      return sign_str + "0x" + x_str + "p" + exp_sign + exp.toString(10);
    };
    var float_of_string = function(s, exn) {
      var res = +s;
      if (s.length > 0 && res === res)
        return res;
      s = s.replace(/_/g, "");
      res = +s;
      if (s.length > 0 && res === res || /^[+-]?nan$/i.test(s)) {
        return res;
      }
      ;
      var m = /^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(s);
      if (m) {
        var m3 = m[3].replace(/0+$/, "");
        var mantissa = parseInt(m[1] + m[2] + m3, 16);
        var exponent = (m[4] | 0) - 4 * m3.length;
        res = mantissa * Math.pow(2, exponent);
        return res;
      }
      if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
      if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
      throw exn;
    };
    function float_of_string$1(s) {
      return float_of_string(s, {
        RE_EXN_ID: "Failure",
        _1: "float_of_string"
      });
    }
    exports2.format_float = format_float;
    exports2.hexstring_of_float = hexstring_of_float;
    exports2.format_int = format_int;
    exports2.float_of_string = float_of_string$1;
    exports2.int64_format = int64_format;
    exports2.int_of_string = int_of_string;
    exports2.int64_of_string = int64_of_string;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_string.js
var require_caml_string = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_string.js"(exports2) {
    "use strict";
    function get(s, i) {
      if (i >= s.length || i < 0) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
      }
      return s.codePointAt(i);
    }
    function make(n, ch) {
      return String.fromCharCode(ch).repeat(n);
    }
    exports2.get = get;
    exports2.make = make;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/pervasivesU.js
var require_pervasivesU = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/pervasivesU.js"(exports2) {
    "use strict";
    var Caml_sys = require_caml_sys();
    var Caml_format = require_caml_format();
    var Caml_string = require_caml_string();
    var Caml_exceptions = require_caml_exceptions();
    var Caml_js_exceptions = require_caml_js_exceptions();
    var JsxModules = {
      Jsx: void 0,
      JsxEvent: void 0,
      JsxDOM: void 0
    };
    function failwith(s) {
      throw {
        RE_EXN_ID: "Failure",
        _1: s,
        Error: new Error()
      };
    }
    function invalid_arg(s) {
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: s,
        Error: new Error()
      };
    }
    var Exit = /* @__PURE__ */ Caml_exceptions.create("PervasivesU.Exit");
    function abs(x) {
      if (x >= 0) {
        return x;
      } else {
        return -x | 0;
      }
    }
    function lnot(x) {
      return x ^ -1;
    }
    var min_int = -2147483648;
    function classify_float(x) {
      if (isFinite(x)) {
        if (Math.abs(x) >= 22250738585072014e-324) {
          return "FP_normal";
        } else if (x !== 0) {
          return "FP_subnormal";
        } else {
          return "FP_zero";
        }
      } else if (isNaN(x)) {
        return "FP_nan";
      } else {
        return "FP_infinite";
      }
    }
    function char_of_int(n) {
      if (n < 0 || n > 255) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "char_of_int",
          Error: new Error()
        };
      }
      return n;
    }
    function string_of_bool(b) {
      if (b) {
        return "true";
      } else {
        return "false";
      }
    }
    function bool_of_string(param) {
      switch (param) {
        case "false":
          return false;
        case "true":
          return true;
        default:
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "bool_of_string",
            Error: new Error()
          };
      }
    }
    function bool_of_string_opt(param) {
      switch (param) {
        case "false":
          return false;
        case "true":
          return true;
        default:
          return;
      }
    }
    function int_of_string_opt(s) {
      try {
        return Caml_format.int_of_string(s);
      } catch (raw_exn) {
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn.RE_EXN_ID === "Failure") {
          return;
        }
        throw exn;
      }
    }
    function valid_float_lexem(s) {
      var l = s.length;
      var _i = 0;
      while (true) {
        var i = _i;
        if (i >= l) {
          return s + ".";
        }
        var match = Caml_string.get(s, i);
        if (match >= 48) {
          if (match >= 58) {
            return s;
          }
          _i = i + 1 | 0;
          continue;
        }
        if (match !== 45) {
          return s;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function string_of_float(f) {
      return valid_float_lexem(Caml_format.format_float("%.12g", f));
    }
    function float_of_string_opt(s) {
      try {
        return Caml_format.float_of_string(s);
      } catch (raw_exn) {
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn.RE_EXN_ID === "Failure") {
          return;
        }
        throw exn;
      }
    }
    function $at(l1, l2) {
      if (l1) {
        return {
          hd: l1.hd,
          tl: $at(l1.tl, l2)
        };
      } else {
        return l2;
      }
    }
    function print_newline() {
      console.log("");
    }
    function prerr_newline() {
      console.error("");
    }
    function print_int(i) {
      console.log(String(i));
    }
    function print_float(i) {
      console.log(string_of_float(i));
    }
    function print_string(prim) {
      console.log(prim);
    }
    var exit_function = {
      contents: function(prim) {
      }
    };
    function at_exit(f) {
      var g = exit_function.contents;
      exit_function.contents = function() {
        f();
        g();
      };
    }
    function exit(retcode) {
      exit_function.contents();
      return Caml_sys.sys_exit(retcode);
    }
    var Jsx;
    var JsxEvent;
    var JsxDOM;
    var JsxPPXReactSupport;
    var max_int = 2147483647;
    var infinity = Infinity;
    var neg_infinity = -Infinity;
    var max_float = 17976931348623157e292;
    var min_float = 22250738585072014e-324;
    var epsilon_float = 2220446049250313e-31;
    exports2.Jsx = Jsx;
    exports2.JsxEvent = JsxEvent;
    exports2.JsxDOM = JsxDOM;
    exports2.JsxPPXReactSupport = JsxPPXReactSupport;
    exports2.JsxModules = JsxModules;
    exports2.invalid_arg = invalid_arg;
    exports2.failwith = failwith;
    exports2.Exit = Exit;
    exports2.abs = abs;
    exports2.max_int = max_int;
    exports2.min_int = min_int;
    exports2.lnot = lnot;
    exports2.infinity = infinity;
    exports2.neg_infinity = neg_infinity;
    exports2.max_float = max_float;
    exports2.min_float = min_float;
    exports2.epsilon_float = epsilon_float;
    exports2.classify_float = classify_float;
    exports2.char_of_int = char_of_int;
    exports2.string_of_bool = string_of_bool;
    exports2.bool_of_string = bool_of_string;
    exports2.bool_of_string_opt = bool_of_string_opt;
    exports2.int_of_string_opt = int_of_string_opt;
    exports2.string_of_float = string_of_float;
    exports2.float_of_string_opt = float_of_string_opt;
    exports2.$at = $at;
    exports2.print_string = print_string;
    exports2.print_int = print_int;
    exports2.print_float = print_float;
    exports2.print_newline = print_newline;
    exports2.prerr_newline = prerr_newline;
    exports2.exit = exit;
    exports2.at_exit = at_exit;
    exports2.valid_float_lexem = valid_float_lexem;
  }
});

// src/packet/Packet_NpcBuffUpdate.js
var require_Packet_NpcBuffUpdate = __commonJS({
  "src/packet/Packet_NpcBuffUpdate.js"(exports2) {
    "use strict";
    var PervasivesU = require_pervasivesU();
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readUInt16(prim) {
      return prim.readUInt16();
    }
    function readInt16(prim) {
      return prim.readInt16();
    }
    function readByte(prim) {
      return prim.readByte();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var npcId = reader.readInt16();
      var buffs = [];
      var buffTimes = [];
      for (var _i = 1; _i <= 20; ++_i) {
        buffs.push(reader.readUInt16());
        buffTimes.push(reader.readInt16());
      }
      return {
        npcId,
        buffs,
        buffTimes
      };
    }
    var Decode = {
      readUInt16,
      readInt16,
      readByte,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function packUInt16(prim0, prim1) {
      return prim0.packUInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function packBuffs(writer, buffs) {
      buffs.forEach(function(buff) {
        writer.packUInt16(buff);
      });
      return writer;
    }
    function packBuffTimes(writer, buffTimes) {
      buffTimes.forEach(function(buff) {
        writer.packInt16(buff);
      });
      return writer;
    }
    function toBuffer(self) {
      if (self.buffs.length !== 20) {
        PervasivesU.failwith("Expected 20 buffs, got " + self.buffs.length.toString());
      }
      return packBuffTimes(packBuffs(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("NpcBuffUpdate")).packByte(self.npcId), self.buffs), self.buffTimes).data;
    }
    var Encode = {
      packByte,
      packInt16,
      packUInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      packBuffs,
      packBuffTimes,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_NpcCatch.js
var require_Packet_NpcCatch = __commonJS({
  "src/packet/Packet_NpcCatch.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var npcId = reader.readInt16();
      var playerId = reader.readByte();
      return {
        npcId,
        playerId
      };
    }
    var Decode = {
      readByte,
      readInt16,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("NpcCatch")).packInt16(self.npcId).packByte(self.playerId).data;
    }
    var Encode = {
      packByte,
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_NpcFishOut.js
var require_Packet_NpcFishOut = __commonJS({
  "src/packet/Packet_NpcFishOut.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcHomeUpdate.js
var require_Packet_NpcHomeUpdate = __commonJS({
  "src/packet/Packet_NpcHomeUpdate.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcKillCount.js
var require_Packet_NpcKillCount = __commonJS({
  "src/packet/Packet_NpcKillCount.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcNameUpdate.js
var require_Packet_NpcNameUpdate = __commonJS({
  "src/packet/Packet_NpcNameUpdate.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcShopItem.js
var require_Packet_NpcShopItem = __commonJS({
  "src/packet/Packet_NpcShopItem.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcTalk.js
var require_Packet_NpcTalk = __commonJS({
  "src/packet/Packet_NpcTalk.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcTeleportPortal.js
var require_Packet_NpcTeleportPortal = __commonJS({
  "src/packet/Packet_NpcTeleportPortal.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ObjectPlace.js
var require_Packet_ObjectPlace = __commonJS({
  "src/packet/Packet_ObjectPlace.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var x = reader.readInt16();
      var y = reader.readInt16();
      var objectType = reader.readInt16();
      var style = reader.readInt16();
      var alternate = reader.readByte();
      var random = reader.readSByte();
      var match = reader.readByte();
      var direction = match !== 0 ? "Right" : "Left";
      return {
        x,
        y,
        objectType,
        style,
        alternate,
        random,
        direction
      };
    }
    function toBuffer(self) {
      var match = self.direction;
      var tmp;
      tmp = match === "Left" ? 0 : 1;
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ObjectPlace")).packInt16(self.x).packInt16(self.y).packInt16(self.objectType).packInt16(self.style).packByte(self.alternate).packSByte(self.random).packByte(tmp).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PartyToggle.js
var require_Packet_PartyToggle = __commonJS({
  "src/packet/Packet_PartyToggle.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerAnimation.js
var require_Packet_PlayerAnimation = __commonJS({
  "src/packet/Packet_PlayerAnimation.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerBuffAdd.js
var require_Packet_PlayerBuffAdd = __commonJS({
  "src/packet/Packet_PlayerBuffAdd.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var buff = reader.readUInt16();
      var time = reader.readInt32();
      return {
        playerId,
        buff,
        time
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerBuffAdd")).packByte(self.playerId).packUInt16(self.buff).packInt32(self.time).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerChestIndexSync.js
var require_Packet_PlayerChestIndexSync = __commonJS({
  "src/packet/Packet_PlayerChestIndexSync.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerDead.js
var require_Packet_PlayerDead = __commonJS({
  "src/packet/Packet_PlayerDead.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/PlayerDeathReason.js
var require_PlayerDeathReason = __commonJS({
  "src/PlayerDeathReason.js"(exports2) {
    "use strict";
    var Belt_Option = require_belt_Option();
    var BitFlags$TerrariaPacket = require_BitFlags();
    function otherFromByte($$byte) {
      switch ($$byte) {
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
      var reasonType = BitFlags$TerrariaPacket.fromByte(reader.readByte());
      var killerPlayerId = BitFlags$TerrariaPacket.flag1(reasonType) ? reader.readInt16() : void 0;
      var killerNpcId = BitFlags$TerrariaPacket.flag2(reasonType) ? reader.readInt16() : void 0;
      var killerProjectileId = BitFlags$TerrariaPacket.flag3(reasonType) ? reader.readInt16() : void 0;
      var typeOfDeathOther = BitFlags$TerrariaPacket.flag4(reasonType) ? otherFromByte(reader.readByte()) : void 0;
      var projectileType = BitFlags$TerrariaPacket.flag5(reasonType) ? reader.readInt16() : void 0;
      var itemType = BitFlags$TerrariaPacket.flag6(reasonType) ? reader.readInt16() : void 0;
      var itemPrefix = BitFlags$TerrariaPacket.flag7(reasonType) ? reader.readByte() : void 0;
      var deathReason = BitFlags$TerrariaPacket.flag8(reasonType) ? reader.readString() : void 0;
      return {
        killerPlayerId,
        killerNpcId,
        killerProjectileId,
        typeOfDeathOther,
        projectileType,
        itemType,
        itemPrefix,
        deathReason
      };
    }
    function packFlags(writer, self) {
      var flags = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(self.killerPlayerId), Belt_Option.isSome(self.killerNpcId), Belt_Option.isSome(self.killerProjectileId), Belt_Option.isSome(self.typeOfDeathOther), Belt_Option.isSome(self.projectileType), Belt_Option.isSome(self.itemType), Belt_Option.isSome(self.itemPrefix), Belt_Option.isSome(self.deathReason));
      return writer.packByte(BitFlags$TerrariaPacket.toByte(flags));
    }
    function packKillerPlayerId(writer, self) {
      var killerPlayerId = self.killerPlayerId;
      if (killerPlayerId !== void 0) {
        return writer.packInt16(killerPlayerId);
      } else {
        return writer;
      }
    }
    function packKillerNpcId(writer, self) {
      var killerNpcId = self.killerNpcId;
      if (killerNpcId !== void 0) {
        return writer.packInt16(killerNpcId);
      } else {
        return writer;
      }
    }
    function packKillerProjectileId(writer, self) {
      var killerProjectileId = self.killerProjectileId;
      if (killerProjectileId !== void 0) {
        return writer.packInt16(killerProjectileId);
      } else {
        return writer;
      }
    }
    function packTypeOfDeathOther(writer, self) {
      var typeOfDeathOther = self.typeOfDeathOther;
      if (typeOfDeathOther !== void 0) {
        return writer.packByte(otherToByte(typeOfDeathOther));
      } else {
        return writer;
      }
    }
    function packProjectileType(writer, self) {
      var projectileType = self.projectileType;
      if (projectileType !== void 0) {
        return writer.packInt16(projectileType);
      } else {
        return writer;
      }
    }
    function packItemType(writer, self) {
      var itemType = self.itemType;
      if (itemType !== void 0) {
        return writer.packInt16(itemType);
      } else {
        return writer;
      }
    }
    function packItemPrefix(writer, self) {
      var itemPrefix = self.itemPrefix;
      if (itemPrefix !== void 0) {
        return writer.packByte(itemPrefix);
      } else {
        return writer;
      }
    }
    function pack(writer, self) {
      var writer$1 = packItemPrefix(packItemType(packProjectileType(packTypeOfDeathOther(packKillerProjectileId(packKillerNpcId(packKillerPlayerId(packFlags(writer, self), self), self), self), self), self), self), self);
      var deathReason = self.deathReason;
      if (deathReason !== void 0) {
        return writer$1.packString(deathReason);
      } else {
        return writer$1;
      }
    }
    var packDeathReason = pack;
    exports2.readDeathReason = readDeathReason;
    exports2.packDeathReason = packDeathReason;
  }
});

// src/packet/Packet_PlayerDeath.js
var require_Packet_PlayerDeath = __commonJS({
  "src/packet/Packet_PlayerDeath.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var PlayerDeathReason$TerrariaPacket = require_PlayerDeathReason();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var deathReason = PlayerDeathReason$TerrariaPacket.readDeathReason(reader);
      var damage = reader.readInt16();
      var hitDirection = reader.readByte();
      var pvp = reader.readByte() === 1;
      return {
        playerId,
        deathReason,
        damage,
        hitDirection,
        pvp
      };
    }
    function toBuffer(self) {
      return PlayerDeathReason$TerrariaPacket.packDeathReason(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerDeath")).packByte(self.playerId), self.deathReason).packInt16(self.damage).packByte(self.hitDirection).packByte(self.pvp ? 1 : 0).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerDodge.js
var require_Packet_PlayerDodge = __commonJS({
  "src/packet/Packet_PlayerDodge.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerMana.js
var require_Packet_PlayerMana = __commonJS({
  "src/packet/Packet_PlayerMana.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var mana = reader.readInt16();
      var maxMana = reader.readInt16();
      return {
        playerId,
        mana,
        maxMana
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerMana")).packByte(self.playerId).packInt16(self.mana).packInt16(self.maxMana).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerTeam.js
var require_Packet_PlayerTeam = __commonJS({
  "src/packet/Packet_PlayerTeam.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PvpToggle.js
var require_Packet_PvpToggle = __commonJS({
  "src/packet/Packet_PvpToggle.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var pvpEnabled = reader.readByte() === 1;
      return {
        playerId,
        pvpEnabled
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ItemOwner")).packByte(self.playerId).packByte(self.pvpEnabled ? 1 : 0).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ShimmerEffectOrCoinLuck.js
var require_Packet_ShimmerEffectOrCoinLuck = __commonJS({
  "src/packet/Packet_ShimmerEffectOrCoinLuck.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt32(prim) {
      return prim.readInt32();
    }
    function readSingle(prim) {
      return prim.readSingle();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var match = reader.readByte();
      switch (match) {
        case 0:
          return {
            TAG: "ShimmerEffect",
            _0: reader.readSingle(),
            _1: reader.readSingle()
          };
        case 1:
          return {
            TAG: "CoinLuck",
            _0: {
              position: {
                x: reader.readSingle(),
                y: reader.readSingle()
              },
              amount: reader.readInt32()
            }
          };
        case 2:
          return {
            TAG: "NewShimmerEffect",
            _0: reader.readInt32()
          };
        default:
          return;
      }
    }
    var Decode = {
      readByte,
      readInt32,
      readSingle,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function packSingle(prim0, prim1) {
      return prim0.packSingle(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      var writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ShimmerEffectOrCoinLuck"));
      var tmp;
      switch (self.TAG) {
        case "ShimmerEffect":
          tmp = writer.packByte(0).packSingle(self._0).packSingle(self._1);
          break;
        case "CoinLuck":
          var match = self._0;
          var position = match.position;
          tmp = writer.packByte(1).packSingle(position.x).packSingle(position.y).packInt32(match.amount);
          break;
        case "NewShimmerEffect":
          tmp = writer.packByte(2).packInt32(self._0);
          break;
      }
      return tmp.data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt32,
      packSingle,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_SignNew.js
var require_Packet_SignNew = __commonJS({
  "src/packet/Packet_SignNew.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_SignRead.js
var require_Packet_SignRead = __commonJS({
  "src/packet/Packet_SignRead.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_SmokePoof.js
var require_Packet_SmokePoof = __commonJS({
  "src/packet/Packet_SmokePoof.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_SocialHandshake.js
var require_Packet_SocialHandshake = __commonJS({
  "src/packet/Packet_SocialHandshake.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_Status.js
var require_Packet_Status = __commonJS({
  "src/packet/Packet_Status.js"(exports2) {
    "use strict";
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var max = reader.readInt32();
      var text = reader.readNetworkText();
      var flags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
      return {
        max,
        text,
        flags: {
          hideStatusTextPercent: BitFlags$TerrariaPacket.flag1(flags),
          statusTextHasShadows: BitFlags$TerrariaPacket.flag2(flags),
          runCheckBytes: BitFlags$TerrariaPacket.flag3(flags)
        }
      };
    }
    function flagsToByte(flags) {
      var $$byte = 0;
      $$byte = $$byte | (flags.hideStatusTextPercent ? 1 : 0);
      $$byte = $$byte | (flags.statusTextHasShadows ? 2 : 0);
      $$byte = $$byte | (flags.runCheckBytes ? 4 : 0);
      return $$byte;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("Status")).packInt32(self.max).packNetworkText(self.text).packByte(flagsToByte(self.flags)).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_SwitchHit.js
var require_Packet_SwitchHit = __commonJS({
  "src/packet/Packet_SwitchHit.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_Teleport.js
var require_Packet_Teleport = __commonJS({
  "src/packet/Packet_Teleport.js"(exports2) {
    "use strict";
    var Belt_Option = require_belt_Option();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt16(prim) {
      return prim.readInt16();
    }
    function readSingle(prim) {
      return prim.readSingle();
    }
    function readInt32(prim) {
      return prim.readInt32();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var flags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
      var getPositionFromTarget = BitFlags$TerrariaPacket.flag3(flags);
      var match = BitFlags$TerrariaPacket.flag1(flags);
      var match$1 = BitFlags$TerrariaPacket.flag2(flags);
      var teleportType = match ? match$1 ? void 0 : "Npc" : match$1 ? "PlayerToPlayer" : "Player";
      var targetId = reader.readInt16();
      var x = reader.readSingle();
      var y = reader.readSingle();
      var style = reader.readByte();
      var extraInfo = BitFlags$TerrariaPacket.flag4(flags) ? reader.readInt32() : void 0;
      if (teleportType !== void 0) {
        return {
          teleportType,
          getPositionFromTarget,
          targetId,
          x,
          y,
          style,
          extraInfo
        };
      }
    }
    var Decode = {
      readByte,
      readInt16,
      readSingle,
      readInt32,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function packSingle(prim0, prim1) {
      return prim0.packSingle(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function getFlags(self) {
      return BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(self.teleportType === "Npc", self.teleportType === "PlayerToPlayer", self.getPositionFromTarget, Belt_Option.isSome(self.extraInfo), false, false, false, false));
    }
    function toBuffer(self) {
      var writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("Teleport")).packByte(getFlags(self)).packInt16(self.targetId).packSingle(self.x).packSingle(self.y).packByte(self.style);
      var extraInfo = self.extraInfo;
      if (extraInfo !== void 0) {
        writer.packInt32(extraInfo);
      }
      return writer.data;
    }
    var Encode = {
      packByte,
      packInt16,
      packSingle,
      packInt32,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      getFlags,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TeleportationPotion.js
var require_Packet_TeleportationPotion = __commonJS({
  "src/packet/Packet_TeleportationPotion.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
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
      }
    }
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var match = reader.readByte();
      var teleportType;
      switch (match) {
        case 0:
          teleportType = "TeleportationPotion";
          break;
        case 1:
          teleportType = "MagicConch";
          break;
        case 2:
          teleportType = "DemonConch";
          break;
        case 3:
          teleportType = "ShellphoneSpawn";
          break;
        default:
          teleportType = void 0;
      }
      if (teleportType !== void 0) {
        return {
          teleportType
        };
      }
    }
    var Decode = {
      readByte,
      readInt16,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TeleportationPotion")).packByte(teleportTypeToInt(self.teleportType)).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.teleportTypeToInt = teleportTypeToInt;
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TemporaryAnimationCreate.js
var require_Packet_TemporaryAnimationCreate = __commonJS({
  "src/packet/Packet_TemporaryAnimationCreate.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_TileEntityDisplayDollItemSync.js
var require_Packet_TileEntityDisplayDollItemSync = __commonJS({
  "src/packet/Packet_TileEntityDisplayDollItemSync.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt32(prim) {
      return prim.readInt32();
    }
    function readUInt16(prim) {
      return prim.readUInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var tileEntityId = reader.readInt32();
      var itemIndex = reader.readByte();
      var itemId = reader.readUInt16();
      var stack = reader.readUInt16();
      var prefix = reader.readByte();
      return {
        playerId,
        tileEntityId,
        itemIndex,
        itemId,
        stack,
        prefix
      };
    }
    var Decode = {
      readByte,
      readInt32,
      readUInt16,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function packUInt16(prim0, prim1) {
      return prim0.packUInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TileEntityDisplayDollItemSync")).packByte(self.playerId).packInt32(self.tileEntityId).packByte(self.itemIndex).packUInt16(self.itemId).packUInt16(self.stack).packByte(self.prefix).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt32,
      packUInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TileEntityHatRackItemSync.js
var require_Packet_TileEntityHatRackItemSync = __commonJS({
  "src/packet/Packet_TileEntityHatRackItemSync.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt32(prim) {
      return prim.readInt32();
    }
    function readUInt16(prim) {
      return prim.readUInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var tileEntityId = reader.readInt32();
      var itemIndex = reader.readByte();
      var itemId = reader.readUInt16();
      var stack = reader.readUInt16();
      var prefix = reader.readByte();
      return {
        playerId,
        tileEntityId,
        itemIndex,
        itemId,
        stack,
        prefix
      };
    }
    var Decode = {
      readByte,
      readInt32,
      readUInt16,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function packUInt16(prim0, prim1) {
      return prim0.packUInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TileEntityHatRackItemSync")).packByte(self.playerId).packInt32(self.tileEntityId).packByte(self.itemIndex).packUInt16(self.itemId).packUInt16(self.stack).packByte(self.prefix).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt32,
      packUInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TileEntityInteractionRequest.js
var require_Packet_TileEntityInteractionRequest = __commonJS({
  "src/packet/Packet_TileEntityInteractionRequest.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_TileEntityPlace.js
var require_Packet_TileEntityPlace = __commonJS({
  "src/packet/Packet_TileEntityPlace.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_TileEntityUpdate.js
var require_Packet_TileEntityUpdate = __commonJS({
  "src/packet/Packet_TileEntityUpdate.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_TileModify.js
var require_Packet_TileModify = __commonJS({
  "src/packet/Packet_TileModify.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function fromInt(action) {
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
    function toInt(action) {
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
    var Action = {
      fromInt,
      toInt
    };
    function parse(payload) {
      var reader = new Packetreader(payload);
      var action = fromInt(reader.readByte());
      var tileX = reader.readInt16();
      var tileY = reader.readInt16();
      var value1 = reader.readInt16();
      var value2 = reader.readByte();
      if (action !== void 0) {
        return {
          action,
          tileX,
          tileY,
          value1,
          value2
        };
      }
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TileModify")).packByte(toInt(self.action)).packInt16(self.tileX).packInt16(self.tileY).packInt16(self.value1).packByte(self.value2).data;
    }
    exports2.Action = Action;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TilePaint.js
var require_Packet_TilePaint = __commonJS({
  "src/packet/Packet_TilePaint.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var x = reader.readInt16();
      var y = reader.readInt16();
      var color = reader.readByte();
      var coat = reader.readByte();
      return {
        x,
        y,
        color,
        coat
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TilePaint")).packInt16(self.x).packInt16(self.y).packByte(self.color).packByte(self.coat).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TilePickingSync.js
var require_Packet_TilePickingSync = __commonJS({
  "src/packet/Packet_TilePickingSync.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_TileSectionFrame.js
var require_Packet_TileSectionFrame = __commonJS({
  "src/packet/Packet_TileSectionFrame.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var startX = reader.readInt16();
      var startY = reader.readInt16();
      var endX = reader.readInt16();
      var endY = reader.readInt16();
      return {
        startX,
        startY,
        endX,
        endY
      };
    }
    var Decode = {
      readInt16,
      parse
    };
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TileSectionFrame")).packInt16(self.startX).packInt16(self.startY).packInt16(self.endX).packInt16(self.endY).data;
    }
    var Encode = {
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_obj.js
var require_caml_obj = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/caml_obj.js"(exports2) {
    "use strict";
    var Caml = require_caml();
    var for_in = function(o, foo) {
      for (var x in o) {
        foo(x);
      }
    };
    var obj_dup = function(x) {
      if (Array.isArray(x)) {
        var len = x.length;
        var v = new Array(len);
        for (var i = 0; i < len; ++i) {
          v[i] = x[i];
        }
        if (x.TAG !== void 0) {
          v.TAG = x.TAG;
        }
        return v;
      }
      return Object.assign({}, x);
    };
    var update_dummy = function(x, y) {
      var k;
      if (Array.isArray(y)) {
        for (k = 0; k < y.length; ++k) {
          x[k] = y[k];
        }
        if (y.TAG !== void 0) {
          x.TAG = y.TAG;
        }
      } else {
        for (var k in y) {
          x[k] = y[k];
        }
      }
    };
    function compare(a, b) {
      if (a === b) {
        return 0;
      }
      var a_type = typeof a;
      var b_type = typeof b;
      switch (a_type) {
        case "bigint":
          if (b_type === "bigint") {
            return Caml.float_compare(a, b);
          }
          break;
        case "boolean":
          if (b_type === "boolean") {
            return Caml.bool_compare(a, b);
          }
          break;
        case "function":
          if (b_type === "function") {
            throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "compare: functional value",
              Error: new Error()
            };
          }
          break;
        case "number":
          if (b_type === "number") {
            return Caml.float_compare(a, b);
          }
          break;
        case "string":
          if (b_type === "string") {
            return Caml.string_compare(a, b);
          } else {
            return 1;
          }
        case "undefined":
          return -1;
        default:
      }
      switch (b_type) {
        case "string":
          return -1;
        case "undefined":
          return 1;
        default:
          if (a_type === "boolean") {
            return 1;
          }
          if (b_type === "boolean") {
            return -1;
          }
          if (a_type === "function") {
            return 1;
          }
          if (b_type === "function") {
            return -1;
          }
          if (a_type === "number") {
            if (b === null || b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return 1;
            } else {
              return -1;
            }
          }
          if (b_type === "number") {
            if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return -1;
            } else {
              return 1;
            }
          }
          if (a === null) {
            if (b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return 1;
            } else {
              return -1;
            }
          }
          if (b === null) {
            if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return -1;
            } else {
              return 1;
            }
          }
          if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
            if (b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return aux_obj_compare(a, b);
            } else {
              return -1;
            }
          }
          var tag_a = a.TAG;
          var tag_b = b.TAG;
          if (tag_a === 248) {
            return Caml.int_compare(a[1], b[1]);
          }
          if (tag_a === 251) {
            throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "equal: abstract value",
              Error: new Error()
            };
          }
          if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          }
          var len_a = a.length | 0;
          var len_b = b.length | 0;
          if (len_a === len_b) {
            if (Array.isArray(a)) {
              var _i = 0;
              while (true) {
                var i = _i;
                if (i === len_a) {
                  return 0;
                }
                var res = compare(a[i], b[i]);
                if (res !== 0) {
                  return res;
                }
                _i = i + 1 | 0;
                continue;
              }
              ;
            } else if (a instanceof Date && b instanceof Date) {
              return a - b;
            } else {
              return aux_obj_compare(a, b);
            }
          } else if (len_a < len_b) {
            var _i$1 = 0;
            while (true) {
              var i$1 = _i$1;
              if (i$1 === len_a) {
                return -1;
              }
              var res$1 = compare(a[i$1], b[i$1]);
              if (res$1 !== 0) {
                return res$1;
              }
              _i$1 = i$1 + 1 | 0;
              continue;
            }
            ;
          } else {
            var _i$2 = 0;
            while (true) {
              var i$2 = _i$2;
              if (i$2 === len_b) {
                return 1;
              }
              var res$2 = compare(a[i$2], b[i$2]);
              if (res$2 !== 0) {
                return res$2;
              }
              _i$2 = i$2 + 1 | 0;
              continue;
            }
            ;
          }
      }
    }
    function aux_obj_compare(a, b) {
      var min_key_lhs = {
        contents: void 0
      };
      var min_key_rhs = {
        contents: void 0
      };
      var do_key = function(param, key) {
        var min_key = param[2];
        var b2 = param[1];
        if (!(!Object.prototype.hasOwnProperty.call(b2, key) || compare(param[0][key], b2[key]) > 0)) {
          return;
        }
        var mk = min_key.contents;
        if (mk !== void 0 && key >= mk) {
          return;
        } else {
          min_key.contents = key;
          return;
        }
      };
      var partial_arg = [
        a,
        b,
        min_key_rhs
      ];
      var do_key_a = function(param) {
        return do_key(partial_arg, param);
      };
      var partial_arg$1 = [
        b,
        a,
        min_key_lhs
      ];
      var do_key_b = function(param) {
        return do_key(partial_arg$1, param);
      };
      for_in(a, do_key_a);
      for_in(b, do_key_b);
      var match = min_key_lhs.contents;
      var match$1 = min_key_rhs.contents;
      if (match !== void 0) {
        if (match$1 !== void 0) {
          return Caml.string_compare(match, match$1);
        } else {
          return -1;
        }
      } else if (match$1 !== void 0) {
        return 1;
      } else {
        return 0;
      }
    }
    function equal(a, b) {
      if (a === b) {
        return true;
      }
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "bigint" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return false;
      }
      var b_type = typeof b;
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
      var tag_a = a.TAG;
      var tag_b = b.TAG;
      if (tag_a === 248) {
        return a[1] === b[1];
      }
      if (tag_a === 251) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: abstract value",
          Error: new Error()
        };
      }
      if (tag_a !== tag_b) {
        return false;
      }
      var len_a = a.length | 0;
      var len_b = b.length | 0;
      if (len_a === len_b) {
        if (Array.isArray(a)) {
          var _i = 0;
          while (true) {
            var i = _i;
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
          var result = {
            contents: true
          };
          var do_key_a = function(key) {
            if (!Object.prototype.hasOwnProperty.call(b, key)) {
              result.contents = false;
              return;
            }
          };
          var do_key_b = function(key) {
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
    function equal_null(x, y) {
      if (y !== null) {
        return equal(x, y);
      } else {
        return x === y;
      }
    }
    function equal_undefined(x, y) {
      if (y !== void 0) {
        return equal(x, y);
      } else {
        return x === y;
      }
    }
    function equal_nullable(x, y) {
      if (y == null) {
        return x === y;
      } else {
        return equal(x, y);
      }
    }
    function notequal(a, b) {
      if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
        return a !== b;
      } else {
        return !equal(a, b);
      }
    }
    function greaterequal(a, b) {
      if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
        return a >= b;
      } else {
        return compare(a, b) >= 0;
      }
    }
    function greaterthan(a, b) {
      if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
        return a > b;
      } else {
        return compare(a, b) > 0;
      }
    }
    function lessequal(a, b) {
      if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
        return a <= b;
      } else {
        return compare(a, b) <= 0;
      }
    }
    function lessthan(a, b) {
      if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
        return a < b;
      } else {
        return compare(a, b) < 0;
      }
    }
    function min(x, y) {
      if (compare(x, y) <= 0) {
        return x;
      } else {
        return y;
      }
    }
    function max(x, y) {
      if (compare(x, y) >= 0) {
        return x;
      } else {
        return y;
      }
    }
    exports2.obj_dup = obj_dup;
    exports2.update_dummy = update_dummy;
    exports2.compare = compare;
    exports2.equal = equal;
    exports2.equal_null = equal_null;
    exports2.equal_undefined = equal_undefined;
    exports2.equal_nullable = equal_nullable;
    exports2.notequal = notequal;
    exports2.greaterequal = greaterequal;
    exports2.greaterthan = greaterthan;
    exports2.lessthan = lessthan;
    exports2.lessequal = lessequal;
    exports2.min = min;
    exports2.max = max;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/js_int.js
var require_js_int = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/js_int.js"(exports2) {
    "use strict";
    function equal(x, y) {
      return x === y;
    }
    var max = 2147483647;
    var min = -2147483648;
    exports2.equal = equal;
    exports2.max = max;
    exports2.min = min;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/js_math.js
var require_js_math = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/js_math.js"(exports2) {
    "use strict";
    var Js_int = require_js_int();
    function unsafe_ceil(prim) {
      return Math.ceil(prim);
    }
    function ceil_int(f) {
      if (f > Js_int.max) {
        return Js_int.max;
      } else if (f < Js_int.min) {
        return Js_int.min;
      } else {
        return Math.ceil(f);
      }
    }
    function unsafe_floor(prim) {
      return Math.floor(prim);
    }
    function floor_int(f) {
      if (f > Js_int.max) {
        return Js_int.max;
      } else if (f < Js_int.min) {
        return Js_int.min;
      } else {
        return Math.floor(f);
      }
    }
    function random_int(min, max) {
      return floor_int(Math.random() * (max - min | 0)) + min | 0;
    }
    var ceil = ceil_int;
    var floor = floor_int;
    exports2.unsafe_ceil = unsafe_ceil;
    exports2.ceil_int = ceil_int;
    exports2.ceil = ceil;
    exports2.unsafe_floor = unsafe_floor;
    exports2.floor_int = floor_int;
    exports2.floor = floor;
    exports2.random_int = random_int;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_Array.js
var require_belt_Array = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_Array.js"(exports2) {
    "use strict";
    var Caml = require_caml();
    var Curry = require_curry();
    var Js_math = require_js_math();
    var Caml_option = require_caml_option();
    function get(arr, i) {
      if (i >= 0 && i < arr.length) {
        return Caml_option.some(arr[i]);
      }
    }
    function getExn(arr, i) {
      if (!(i >= 0 && i < arr.length)) {
        throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "belt_Array.res",
            36,
            2
          ],
          Error: new Error()
        };
      }
      return arr[i];
    }
    function set(arr, i, v) {
      if (i >= 0 && i < arr.length) {
        arr[i] = v;
        return true;
      } else {
        return false;
      }
    }
    function setExn(arr, i, v) {
      if (!(i >= 0 && i < arr.length)) {
        throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "belt_Array.res",
            49,
            2
          ],
          Error: new Error()
        };
      }
      arr[i] = v;
    }
    function swapUnsafe(xs, i, j) {
      var tmp = xs[i];
      xs[i] = xs[j];
      xs[j] = tmp;
    }
    function shuffleInPlace(xs) {
      var len = xs.length;
      for (var i = 0; i < len; ++i) {
        swapUnsafe(xs, i, Js_math.random_int(i, len));
      }
    }
    function shuffle(xs) {
      var result = xs.slice(0);
      shuffleInPlace(result);
      return result;
    }
    function reverseInPlace(xs) {
      var len = xs.length;
      var ofs = 0;
      for (var i = 0, i_finish = len / 2 | 0; i < i_finish; ++i) {
        swapUnsafe(xs, ofs + i | 0, ((ofs + len | 0) - i | 0) - 1 | 0);
      }
    }
    function reverse(xs) {
      var len = xs.length;
      var result = new Array(len);
      for (var i = 0; i < len; ++i) {
        result[i] = xs[(len - 1 | 0) - i | 0];
      }
      return result;
    }
    function make(l, f) {
      if (l <= 0) {
        return [];
      }
      var res = new Array(l);
      for (var i = 0; i < l; ++i) {
        res[i] = f;
      }
      return res;
    }
    function makeByU(l, f) {
      if (l <= 0) {
        return [];
      }
      var res = new Array(l);
      for (var i = 0; i < l; ++i) {
        res[i] = f(i);
      }
      return res;
    }
    function makeBy(l, f) {
      return makeByU(l, Curry.__1(f));
    }
    function makeByAndShuffleU(l, f) {
      var u = makeByU(l, f);
      shuffleInPlace(u);
      return u;
    }
    function makeByAndShuffle(l, f) {
      return makeByAndShuffleU(l, Curry.__1(f));
    }
    function range(start, finish) {
      var cut = finish - start | 0;
      if (cut < 0) {
        return [];
      }
      var arr = new Array(cut + 1 | 0);
      for (var i = 0; i <= cut; ++i) {
        arr[i] = start + i | 0;
      }
      return arr;
    }
    function rangeBy(start, finish, step) {
      var cut = finish - start | 0;
      if (cut < 0 || step <= 0) {
        return [];
      }
      var nb = (cut / step | 0) + 1 | 0;
      var arr = new Array(nb);
      var cur = start;
      for (var i = 0; i < nb; ++i) {
        arr[i] = cur;
        cur = cur + step | 0;
      }
      return arr;
    }
    function zip(xs, ys) {
      var lenx = xs.length;
      var leny = ys.length;
      var len = lenx < leny ? lenx : leny;
      var s = new Array(len);
      for (var i = 0; i < len; ++i) {
        s[i] = [
          xs[i],
          ys[i]
        ];
      }
      return s;
    }
    function zipByU(xs, ys, f) {
      var lenx = xs.length;
      var leny = ys.length;
      var len = lenx < leny ? lenx : leny;
      var s = new Array(len);
      for (var i = 0; i < len; ++i) {
        s[i] = f(xs[i], ys[i]);
      }
      return s;
    }
    function zipBy(xs, ys, f) {
      return zipByU(xs, ys, Curry.__2(f));
    }
    function concat(a1, a2) {
      var l1 = a1.length;
      var l2 = a2.length;
      var a1a2 = new Array(l1 + l2 | 0);
      for (var i = 0; i < l1; ++i) {
        a1a2[i] = a1[i];
      }
      for (var i$1 = 0; i$1 < l2; ++i$1) {
        a1a2[l1 + i$1 | 0] = a2[i$1];
      }
      return a1a2;
    }
    function concatMany(arrs) {
      var lenArrs = arrs.length;
      var totalLen = 0;
      for (var i = 0; i < lenArrs; ++i) {
        totalLen = totalLen + arrs[i].length | 0;
      }
      var result = new Array(totalLen);
      totalLen = 0;
      for (var j = 0; j < lenArrs; ++j) {
        var cur = arrs[j];
        for (var k = 0, k_finish = cur.length; k < k_finish; ++k) {
          result[totalLen] = cur[k];
          totalLen = totalLen + 1 | 0;
        }
      }
      return result;
    }
    function slice(a, offset, len) {
      if (len <= 0) {
        return [];
      }
      var lena = a.length;
      var ofs = offset < 0 ? Caml.int_max(lena + offset | 0, 0) : offset;
      var hasLen = lena - ofs | 0;
      var copyLength = hasLen < len ? hasLen : len;
      if (copyLength <= 0) {
        return [];
      }
      var result = new Array(copyLength);
      for (var i = 0; i < copyLength; ++i) {
        result[i] = a[ofs + i | 0];
      }
      return result;
    }
    function sliceToEnd(a, offset) {
      var lena = a.length;
      var ofs = offset < 0 ? Caml.int_max(lena + offset | 0, 0) : offset;
      var len = lena > ofs ? lena - ofs | 0 : 0;
      var result = new Array(len);
      for (var i = 0; i < len; ++i) {
        result[i] = a[ofs + i | 0];
      }
      return result;
    }
    function fill(a, offset, len, v) {
      if (len <= 0) {
        return;
      }
      var lena = a.length;
      var ofs = offset < 0 ? Caml.int_max(lena + offset | 0, 0) : offset;
      var hasLen = lena - ofs | 0;
      var fillLength = hasLen < len ? hasLen : len;
      if (fillLength <= 0) {
        return;
      }
      for (var i = ofs, i_finish = ofs + fillLength | 0; i < i_finish; ++i) {
        a[i] = v;
      }
    }
    function blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {
      if (srcofs2 <= srcofs1) {
        for (var j = 0; j < blitLength; ++j) {
          a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
        }
        return;
      }
      for (var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1) {
        a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
      }
    }
    function blit(a1, ofs1, a2, ofs2, len) {
      var lena1 = a1.length;
      var lena2 = a2.length;
      var srcofs1 = ofs1 < 0 ? Caml.int_max(lena1 + ofs1 | 0, 0) : ofs1;
      var srcofs2 = ofs2 < 0 ? Caml.int_max(lena2 + ofs2 | 0, 0) : ofs2;
      var blitLength = Caml.int_min(len, Caml.int_min(lena1 - srcofs1 | 0, lena2 - srcofs2 | 0));
      if (srcofs2 <= srcofs1) {
        for (var j = 0; j < blitLength; ++j) {
          a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
        }
        return;
      }
      for (var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1) {
        a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
      }
    }
    function forEachU(a, f) {
      for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
        f(a[i]);
      }
    }
    function forEach(a, f) {
      forEachU(a, Curry.__1(f));
    }
    function mapU(a, f) {
      var l = a.length;
      var r = new Array(l);
      for (var i = 0; i < l; ++i) {
        r[i] = f(a[i]);
      }
      return r;
    }
    function map(a, f) {
      return mapU(a, Curry.__1(f));
    }
    function flatMapU(a, f) {
      return concatMany(mapU(a, f));
    }
    function flatMap(a, f) {
      return concatMany(mapU(a, Curry.__1(f)));
    }
    function getByU(a, p) {
      var l = a.length;
      var i = 0;
      var r;
      while (r === void 0 && i < l) {
        var v = a[i];
        if (p(v)) {
          r = Caml_option.some(v);
        }
        i = i + 1 | 0;
      }
      ;
      return r;
    }
    function getBy(a, p) {
      return getByU(a, Curry.__1(p));
    }
    function getIndexByU(a, p) {
      var l = a.length;
      var i = 0;
      var r;
      while (r === void 0 && i < l) {
        var v = a[i];
        if (p(v)) {
          r = i;
        }
        i = i + 1 | 0;
      }
      ;
      return r;
    }
    function getIndexBy(a, p) {
      return getIndexByU(a, Curry.__1(p));
    }
    function keepU(a, f) {
      var l = a.length;
      var r = new Array(l);
      var j = 0;
      for (var i = 0; i < l; ++i) {
        var v = a[i];
        if (f(v)) {
          r[j] = v;
          j = j + 1 | 0;
        }
      }
      r.length = j;
      return r;
    }
    function keep(a, f) {
      return keepU(a, Curry.__1(f));
    }
    function keepWithIndexU(a, f) {
      var l = a.length;
      var r = new Array(l);
      var j = 0;
      for (var i = 0; i < l; ++i) {
        var v = a[i];
        if (f(v, i)) {
          r[j] = v;
          j = j + 1 | 0;
        }
      }
      r.length = j;
      return r;
    }
    function keepWithIndex(a, f) {
      return keepWithIndexU(a, Curry.__2(f));
    }
    function keepMapU(a, f) {
      var l = a.length;
      var r = new Array(l);
      var j = 0;
      for (var i = 0; i < l; ++i) {
        var v = a[i];
        var v$1 = f(v);
        if (v$1 !== void 0) {
          r[j] = Caml_option.valFromOption(v$1);
          j = j + 1 | 0;
        }
      }
      r.length = j;
      return r;
    }
    function keepMap(a, f) {
      return keepMapU(a, Curry.__1(f));
    }
    function forEachWithIndexU(a, f) {
      for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
        f(i, a[i]);
      }
    }
    function forEachWithIndex(a, f) {
      forEachWithIndexU(a, Curry.__2(f));
    }
    function mapWithIndexU(a, f) {
      var l = a.length;
      var r = new Array(l);
      for (var i = 0; i < l; ++i) {
        r[i] = f(i, a[i]);
      }
      return r;
    }
    function mapWithIndex(a, f) {
      return mapWithIndexU(a, Curry.__2(f));
    }
    function reduceU(a, x, f) {
      var r = x;
      for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
        r = f(r, a[i]);
      }
      return r;
    }
    function reduce(a, x, f) {
      return reduceU(a, x, Curry.__2(f));
    }
    function reduceReverseU(a, x, f) {
      var r = x;
      for (var i = a.length - 1 | 0; i >= 0; --i) {
        r = f(r, a[i]);
      }
      return r;
    }
    function reduceReverse(a, x, f) {
      return reduceReverseU(a, x, Curry.__2(f));
    }
    function reduceReverse2U(a, b, x, f) {
      var r = x;
      var len = Caml.int_min(a.length, b.length);
      for (var i = len - 1 | 0; i >= 0; --i) {
        r = f(r, a[i], b[i]);
      }
      return r;
    }
    function reduceReverse2(a, b, x, f) {
      return reduceReverse2U(a, b, x, Curry.__3(f));
    }
    function reduceWithIndexU(a, x, f) {
      var r = x;
      for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
        r = f(r, a[i], i);
      }
      return r;
    }
    function reduceWithIndex(a, x, f) {
      return reduceWithIndexU(a, x, Curry.__3(f));
    }
    function everyU(arr, b) {
      var len = arr.length;
      var _i = 0;
      while (true) {
        var i = _i;
        if (i === len) {
          return true;
        }
        if (!b(arr[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function every(arr, f) {
      return everyU(arr, Curry.__1(f));
    }
    function someU(arr, b) {
      var len = arr.length;
      var _i = 0;
      while (true) {
        var i = _i;
        if (i === len) {
          return false;
        }
        if (b(arr[i])) {
          return true;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function some(arr, f) {
      return someU(arr, Curry.__1(f));
    }
    function everyAux2(arr1, arr2, _i, b, len) {
      while (true) {
        var i = _i;
        if (i === len) {
          return true;
        }
        if (!b(arr1[i], arr2[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function every2U(a, b, p) {
      return everyAux2(a, b, 0, p, Caml.int_min(a.length, b.length));
    }
    function every2(a, b, p) {
      return every2U(a, b, Curry.__2(p));
    }
    function some2U(a, b, p) {
      var _i = 0;
      var len = Caml.int_min(a.length, b.length);
      while (true) {
        var i = _i;
        if (i === len) {
          return false;
        }
        if (p(a[i], b[i])) {
          return true;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function some2(a, b, p) {
      return some2U(a, b, Curry.__2(p));
    }
    function eqU(a, b, p) {
      var lena = a.length;
      var lenb = b.length;
      if (lena === lenb) {
        return everyAux2(a, b, 0, p, lena);
      } else {
        return false;
      }
    }
    function eq(a, b, p) {
      return eqU(a, b, Curry.__2(p));
    }
    function cmpU(a, b, p) {
      var lena = a.length;
      var lenb = b.length;
      if (lena > lenb) {
        return 1;
      } else if (lena < lenb) {
        return -1;
      } else {
        var _i = 0;
        while (true) {
          var i = _i;
          if (i === lena) {
            return 0;
          }
          var c = p(a[i], b[i]);
          if (c !== 0) {
            return c;
          }
          _i = i + 1 | 0;
          continue;
        }
        ;
      }
    }
    function cmp(a, b, p) {
      return cmpU(a, b, Curry.__2(p));
    }
    function partitionU(a, f) {
      var l = a.length;
      var i = 0;
      var j = 0;
      var a1 = new Array(l);
      var a2 = new Array(l);
      for (var ii = 0; ii < l; ++ii) {
        var v = a[ii];
        if (f(v)) {
          a1[i] = v;
          i = i + 1 | 0;
        } else {
          a2[j] = v;
          j = j + 1 | 0;
        }
      }
      a1.length = i;
      a2.length = j;
      return [
        a1,
        a2
      ];
    }
    function partition(a, f) {
      return partitionU(a, Curry.__1(f));
    }
    function unzip(a) {
      var l = a.length;
      var a1 = new Array(l);
      var a2 = new Array(l);
      for (var i = 0; i < l; ++i) {
        var match = a[i];
        a1[i] = match[0];
        a2[i] = match[1];
      }
      return [
        a1,
        a2
      ];
    }
    function joinWithU(a, sep, toString) {
      var l = a.length;
      if (l === 0) {
        return "";
      }
      var lastIndex = l - 1 | 0;
      var _i = 0;
      var _res = "";
      while (true) {
        var res = _res;
        var i = _i;
        if (i === lastIndex) {
          return res + toString(a[i]);
        }
        _res = res + (toString(a[i]) + sep);
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function joinWith(a, sep, toString) {
      return joinWithU(a, sep, Curry.__1(toString));
    }
    function initU(n, f) {
      var v = new Array(n);
      for (var i = 0; i < n; ++i) {
        v[i] = f(i);
      }
      return v;
    }
    function init(n, f) {
      return initU(n, Curry.__1(f));
    }
    exports2.get = get;
    exports2.getExn = getExn;
    exports2.set = set;
    exports2.setExn = setExn;
    exports2.shuffleInPlace = shuffleInPlace;
    exports2.shuffle = shuffle;
    exports2.reverseInPlace = reverseInPlace;
    exports2.reverse = reverse;
    exports2.make = make;
    exports2.range = range;
    exports2.rangeBy = rangeBy;
    exports2.makeByU = makeByU;
    exports2.makeBy = makeBy;
    exports2.makeByAndShuffleU = makeByAndShuffleU;
    exports2.makeByAndShuffle = makeByAndShuffle;
    exports2.zip = zip;
    exports2.zipByU = zipByU;
    exports2.zipBy = zipBy;
    exports2.unzip = unzip;
    exports2.concat = concat;
    exports2.concatMany = concatMany;
    exports2.slice = slice;
    exports2.sliceToEnd = sliceToEnd;
    exports2.fill = fill;
    exports2.blit = blit;
    exports2.blitUnsafe = blitUnsafe;
    exports2.forEachU = forEachU;
    exports2.forEach = forEach;
    exports2.mapU = mapU;
    exports2.map = map;
    exports2.flatMapU = flatMapU;
    exports2.flatMap = flatMap;
    exports2.getByU = getByU;
    exports2.getBy = getBy;
    exports2.getIndexByU = getIndexByU;
    exports2.getIndexBy = getIndexBy;
    exports2.keepU = keepU;
    exports2.keep = keep;
    exports2.keepWithIndexU = keepWithIndexU;
    exports2.keepWithIndex = keepWithIndex;
    exports2.keepMapU = keepMapU;
    exports2.keepMap = keepMap;
    exports2.forEachWithIndexU = forEachWithIndexU;
    exports2.forEachWithIndex = forEachWithIndex;
    exports2.mapWithIndexU = mapWithIndexU;
    exports2.mapWithIndex = mapWithIndex;
    exports2.partitionU = partitionU;
    exports2.partition = partition;
    exports2.reduceU = reduceU;
    exports2.reduce = reduce;
    exports2.reduceReverseU = reduceReverseU;
    exports2.reduceReverse = reduceReverse;
    exports2.reduceReverse2U = reduceReverse2U;
    exports2.reduceReverse2 = reduceReverse2;
    exports2.reduceWithIndexU = reduceWithIndexU;
    exports2.reduceWithIndex = reduceWithIndex;
    exports2.joinWithU = joinWithU;
    exports2.joinWith = joinWith;
    exports2.someU = someU;
    exports2.some = some;
    exports2.everyU = everyU;
    exports2.every = every;
    exports2.every2U = every2U;
    exports2.every2 = every2;
    exports2.some2U = some2U;
    exports2.some2 = some2;
    exports2.cmpU = cmpU;
    exports2.cmp = cmp;
    exports2.eqU = eqU;
    exports2.eq = eq;
    exports2.initU = initU;
    exports2.init = init;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_Result.js
var require_belt_Result = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_Result.js"(exports2) {
    "use strict";
    var Curry = require_curry();
    function getExn(x) {
      if (x.TAG === "Ok") {
        return x._0;
      }
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    function mapWithDefaultU(opt, $$default, f) {
      if (opt.TAG === "Ok") {
        return f(opt._0);
      } else {
        return $$default;
      }
    }
    function mapWithDefault(opt, $$default, f) {
      return mapWithDefaultU(opt, $$default, Curry.__1(f));
    }
    function mapU(opt, f) {
      if (opt.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: f(opt._0)
        };
      } else {
        return {
          TAG: "Error",
          _0: opt._0
        };
      }
    }
    function map(opt, f) {
      return mapU(opt, Curry.__1(f));
    }
    function flatMapU(opt, f) {
      if (opt.TAG === "Ok") {
        return f(opt._0);
      } else {
        return {
          TAG: "Error",
          _0: opt._0
        };
      }
    }
    function flatMap(opt, f) {
      return flatMapU(opt, Curry.__1(f));
    }
    function getWithDefault(opt, $$default) {
      if (opt.TAG === "Ok") {
        return opt._0;
      } else {
        return $$default;
      }
    }
    function isOk(x) {
      if (x.TAG === "Ok") {
        return true;
      } else {
        return false;
      }
    }
    function isError(x) {
      if (x.TAG === "Ok") {
        return false;
      } else {
        return true;
      }
    }
    function eqU(a, b, f) {
      if (a.TAG === "Ok") {
        if (b.TAG === "Ok") {
          return f(a._0, b._0);
        } else {
          return false;
        }
      } else if (b.TAG === "Ok") {
        return false;
      } else {
        return true;
      }
    }
    function eq(a, b, f) {
      return eqU(a, b, Curry.__2(f));
    }
    function cmpU(a, b, f) {
      if (a.TAG === "Ok") {
        if (b.TAG === "Ok") {
          return f(a._0, b._0);
        } else {
          return 1;
        }
      } else if (b.TAG === "Ok") {
        return -1;
      } else {
        return 0;
      }
    }
    function cmp(a, b, f) {
      return cmpU(a, b, Curry.__2(f));
    }
    exports2.getExn = getExn;
    exports2.mapWithDefaultU = mapWithDefaultU;
    exports2.mapWithDefault = mapWithDefault;
    exports2.mapU = mapU;
    exports2.map = map;
    exports2.flatMapU = flatMapU;
    exports2.flatMap = flatMap;
    exports2.getWithDefault = getWithDefault;
    exports2.isOk = isOk;
    exports2.isError = isError;
    exports2.eqU = eqU;
    exports2.eq = eq;
    exports2.cmpU = cmpU;
    exports2.cmp = cmp;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_SortArray.js
var require_belt_SortArray = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_SortArray.js"(exports2) {
    "use strict";
    var Curry = require_curry();
    var Belt_Array = require_belt_Array();
    function sortedLengthAuxMore(xs, _prec, _acc, len, lt) {
      while (true) {
        var acc = _acc;
        var prec = _prec;
        if (acc >= len) {
          return acc;
        }
        var v = xs[acc];
        if (!lt(v, prec)) {
          return acc;
        }
        _acc = acc + 1 | 0;
        _prec = v;
        continue;
      }
      ;
    }
    function strictlySortedLengthU(xs, lt) {
      var len = xs.length;
      if (len === 0 || len === 1) {
        return len;
      }
      var x0 = xs[0];
      var x1 = xs[1];
      if (lt(x0, x1)) {
        var _prec = x1;
        var _acc = 2;
        while (true) {
          var acc = _acc;
          var prec = _prec;
          if (acc >= len) {
            return acc;
          }
          var v = xs[acc];
          if (!lt(prec, v)) {
            return acc;
          }
          _acc = acc + 1 | 0;
          _prec = v;
          continue;
        }
        ;
      } else if (lt(x1, x0)) {
        return -sortedLengthAuxMore(xs, x1, 2, len, lt) | 0;
      } else {
        return 1;
      }
    }
    function strictlySortedLength(xs, lt) {
      return strictlySortedLengthU(xs, Curry.__2(lt));
    }
    function isSortedU(a, cmp) {
      var len = a.length;
      if (len === 0) {
        return true;
      } else {
        var _i = 0;
        var last_bound = len - 1 | 0;
        while (true) {
          var i = _i;
          if (i === last_bound) {
            return true;
          }
          if (cmp(a[i], a[i + 1 | 0]) > 0) {
            return false;
          }
          _i = i + 1 | 0;
          continue;
        }
        ;
      }
    }
    function isSorted(a, cmp) {
      return isSortedU(a, Curry.__2(cmp));
    }
    function merge(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
      var src1r = src1ofs + src1len | 0;
      var src2r = src2ofs + src2len | 0;
      var _i1 = src1ofs;
      var _s1 = src[src1ofs];
      var _i2 = src2ofs;
      var _s2 = src2[src2ofs];
      var _d = dstofs;
      while (true) {
        var d = _d;
        var s2 = _s2;
        var i2 = _i2;
        var s1 = _s1;
        var i1 = _i1;
        if (cmp(s1, s2) <= 0) {
          dst[d] = s1;
          var i1$1 = i1 + 1 | 0;
          if (i1$1 >= src1r) {
            return Belt_Array.blitUnsafe(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
          }
          _d = d + 1 | 0;
          _s1 = src[i1$1];
          _i1 = i1$1;
          continue;
        }
        dst[d] = s2;
        var i2$1 = i2 + 1 | 0;
        if (i2$1 >= src2r) {
          return Belt_Array.blitUnsafe(src, i1, dst, d + 1 | 0, src1r - i1 | 0);
        }
        _d = d + 1 | 0;
        _s2 = src2[i2$1];
        _i2 = i2$1;
        continue;
      }
      ;
    }
    function unionU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
      var src1r = src1ofs + src1len | 0;
      var src2r = src2ofs + src2len | 0;
      var _i1 = src1ofs;
      var _s1 = src[src1ofs];
      var _i2 = src2ofs;
      var _s2 = src2[src2ofs];
      var _d = dstofs;
      while (true) {
        var d = _d;
        var s2 = _s2;
        var i2 = _i2;
        var s1 = _s1;
        var i1 = _i1;
        var c = cmp(s1, s2);
        if (c < 0) {
          dst[d] = s1;
          var i1$1 = i1 + 1 | 0;
          var d$1 = d + 1 | 0;
          if (i1$1 < src1r) {
            _d = d$1;
            _s1 = src[i1$1];
            _i1 = i1$1;
            continue;
          }
          Belt_Array.blitUnsafe(src2, i2, dst, d$1, src2r - i2 | 0);
          return (d$1 + src2r | 0) - i2 | 0;
        }
        if (c === 0) {
          dst[d] = s1;
          var i1$2 = i1 + 1 | 0;
          var i2$1 = i2 + 1 | 0;
          var d$2 = d + 1 | 0;
          if (!(i1$2 < src1r && i2$1 < src2r)) {
            if (i1$2 === src1r) {
              Belt_Array.blitUnsafe(src2, i2$1, dst, d$2, src2r - i2$1 | 0);
              return (d$2 + src2r | 0) - i2$1 | 0;
            } else {
              Belt_Array.blitUnsafe(src, i1$2, dst, d$2, src1r - i1$2 | 0);
              return (d$2 + src1r | 0) - i1$2 | 0;
            }
          }
          _d = d$2;
          _s2 = src2[i2$1];
          _i2 = i2$1;
          _s1 = src[i1$2];
          _i1 = i1$2;
          continue;
        }
        dst[d] = s2;
        var i2$2 = i2 + 1 | 0;
        var d$3 = d + 1 | 0;
        if (i2$2 < src2r) {
          _d = d$3;
          _s2 = src2[i2$2];
          _i2 = i2$2;
          continue;
        }
        Belt_Array.blitUnsafe(src, i1, dst, d$3, src1r - i1 | 0);
        return (d$3 + src1r | 0) - i1 | 0;
      }
      ;
    }
    function union(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
      return unionU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, Curry.__2(cmp));
    }
    function intersectU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
      var src1r = src1ofs + src1len | 0;
      var src2r = src2ofs + src2len | 0;
      var _i1 = src1ofs;
      var _s1 = src[src1ofs];
      var _i2 = src2ofs;
      var _s2 = src2[src2ofs];
      var _d = dstofs;
      while (true) {
        var d = _d;
        var s2 = _s2;
        var i2 = _i2;
        var s1 = _s1;
        var i1 = _i1;
        var c = cmp(s1, s2);
        if (c < 0) {
          var i1$1 = i1 + 1 | 0;
          if (i1$1 >= src1r) {
            return d;
          }
          _s1 = src[i1$1];
          _i1 = i1$1;
          continue;
        }
        if (c === 0) {
          dst[d] = s1;
          var i1$2 = i1 + 1 | 0;
          var i2$1 = i2 + 1 | 0;
          var d$1 = d + 1 | 0;
          if (!(i1$2 < src1r && i2$1 < src2r)) {
            return d$1;
          }
          _d = d$1;
          _s2 = src2[i2$1];
          _i2 = i2$1;
          _s1 = src[i1$2];
          _i1 = i1$2;
          continue;
        }
        var i2$2 = i2 + 1 | 0;
        if (i2$2 >= src2r) {
          return d;
        }
        _s2 = src2[i2$2];
        _i2 = i2$2;
        continue;
      }
      ;
    }
    function intersect(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
      return intersectU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, Curry.__2(cmp));
    }
    function diffU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
      var src1r = src1ofs + src1len | 0;
      var src2r = src2ofs + src2len | 0;
      var _i1 = src1ofs;
      var _s1 = src[src1ofs];
      var _i2 = src2ofs;
      var _s2 = src2[src2ofs];
      var _d = dstofs;
      while (true) {
        var d = _d;
        var s2 = _s2;
        var i2 = _i2;
        var s1 = _s1;
        var i1 = _i1;
        var c = cmp(s1, s2);
        if (c < 0) {
          dst[d] = s1;
          var d$1 = d + 1 | 0;
          var i1$1 = i1 + 1 | 0;
          if (i1$1 >= src1r) {
            return d$1;
          }
          _d = d$1;
          _s1 = src[i1$1];
          _i1 = i1$1;
          continue;
        }
        if (c === 0) {
          var i1$2 = i1 + 1 | 0;
          var i2$1 = i2 + 1 | 0;
          if (!(i1$2 < src1r && i2$1 < src2r)) {
            if (i1$2 === src1r) {
              return d;
            } else {
              Belt_Array.blitUnsafe(src, i1$2, dst, d, src1r - i1$2 | 0);
              return (d + src1r | 0) - i1$2 | 0;
            }
          }
          _s2 = src2[i2$1];
          _i2 = i2$1;
          _s1 = src[i1$2];
          _i1 = i1$2;
          continue;
        }
        var i2$2 = i2 + 1 | 0;
        if (i2$2 < src2r) {
          _s2 = src2[i2$2];
          _i2 = i2$2;
          continue;
        }
        Belt_Array.blitUnsafe(src, i1, dst, d, src1r - i1 | 0);
        return (d + src1r | 0) - i1 | 0;
      }
      ;
    }
    function diff(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
      return diffU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, Curry.__2(cmp));
    }
    function insertionSort(src, srcofs, dst, dstofs, len, cmp) {
      for (var i = 0; i < len; ++i) {
        var e = src[srcofs + i | 0];
        var j = (dstofs + i | 0) - 1 | 0;
        while (j >= dstofs && cmp(dst[j], e) > 0) {
          dst[j + 1 | 0] = dst[j];
          j = j - 1 | 0;
        }
        ;
        dst[j + 1 | 0] = e;
      }
    }
    function sortTo(src, srcofs, dst, dstofs, len, cmp) {
      if (len <= 5) {
        return insertionSort(src, srcofs, dst, dstofs, len, cmp);
      }
      var l1 = len / 2 | 0;
      var l2 = len - l1 | 0;
      sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2, cmp);
      sortTo(src, srcofs, src, srcofs + l2 | 0, l1, cmp);
      merge(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs, cmp);
    }
    function stableSortInPlaceByU(a, cmp) {
      var l = a.length;
      if (l <= 5) {
        return insertionSort(a, 0, a, 0, l, cmp);
      }
      var l1 = l / 2 | 0;
      var l2 = l - l1 | 0;
      var t = new Array(l2);
      sortTo(a, l1, t, 0, l2, cmp);
      sortTo(a, 0, a, l2, l1, cmp);
      merge(a, l2, l1, t, 0, l2, a, 0, cmp);
    }
    function stableSortInPlaceBy(a, cmp) {
      stableSortInPlaceByU(a, Curry.__2(cmp));
    }
    function stableSortByU(a, cmp) {
      var b = a.slice(0);
      stableSortInPlaceByU(b, cmp);
      return b;
    }
    function stableSortBy(a, cmp) {
      return stableSortByU(a, Curry.__2(cmp));
    }
    function binarySearchByU(sorted, key, cmp) {
      var len = sorted.length;
      if (len === 0) {
        return -1;
      }
      var lo = sorted[0];
      var c = cmp(key, lo);
      if (c < 0) {
        return -1;
      }
      var hi = sorted[len - 1 | 0];
      var c2 = cmp(key, hi);
      if (c2 > 0) {
        return -(len + 1 | 0) | 0;
      } else {
        var _lo = 0;
        var _hi = len - 1 | 0;
        while (true) {
          var hi$1 = _hi;
          var lo$1 = _lo;
          var mid = (lo$1 + hi$1 | 0) / 2 | 0;
          var midVal = sorted[mid];
          var c$1 = cmp(key, midVal);
          if (c$1 === 0) {
            return mid;
          }
          if (c$1 < 0) {
            if (hi$1 === mid) {
              if (cmp(sorted[lo$1], key) === 0) {
                return lo$1;
              } else {
                return -(hi$1 + 1 | 0) | 0;
              }
            }
            _hi = mid;
            continue;
          }
          if (lo$1 === mid) {
            if (cmp(sorted[hi$1], key) === 0) {
              return hi$1;
            } else {
              return -(hi$1 + 1 | 0) | 0;
            }
          }
          _lo = mid;
          continue;
        }
        ;
      }
    }
    function binarySearchBy(sorted, key, cmp) {
      return binarySearchByU(sorted, key, Curry.__2(cmp));
    }
    var Int;
    var $$String;
    exports2.Int = Int;
    exports2.$$String = $$String;
    exports2.strictlySortedLengthU = strictlySortedLengthU;
    exports2.strictlySortedLength = strictlySortedLength;
    exports2.isSortedU = isSortedU;
    exports2.isSorted = isSorted;
    exports2.stableSortInPlaceByU = stableSortInPlaceByU;
    exports2.stableSortInPlaceBy = stableSortInPlaceBy;
    exports2.stableSortByU = stableSortByU;
    exports2.stableSortBy = stableSortBy;
    exports2.binarySearchByU = binarySearchByU;
    exports2.binarySearchBy = binarySearchBy;
    exports2.unionU = unionU;
    exports2.union = union;
    exports2.intersectU = intersectU;
    exports2.intersect = intersect;
    exports2.diffU = diffU;
    exports2.diff = diff;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_List.js
var require_belt_List = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_List.js"(exports2) {
    "use strict";
    var Curry = require_curry();
    var Belt_Array = require_belt_Array();
    var Caml_option = require_caml_option();
    var Belt_SortArray = require_belt_SortArray();
    function head(x) {
      if (x) {
        return Caml_option.some(x.hd);
      }
    }
    function headExn(x) {
      if (x) {
        return x.hd;
      }
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    function tail(x) {
      if (x) {
        return x.tl;
      }
    }
    function tailExn(x) {
      if (x) {
        return x.tl;
      }
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    function add(xs, x) {
      return {
        hd: x,
        tl: xs
      };
    }
    function get(x, n) {
      if (n < 0) {
        return;
      } else {
        var _x = x;
        var _n = n;
        while (true) {
          var n$1 = _n;
          var x$1 = _x;
          if (!x$1) {
            return;
          }
          if (n$1 === 0) {
            return Caml_option.some(x$1.hd);
          }
          _n = n$1 - 1 | 0;
          _x = x$1.tl;
          continue;
        }
        ;
      }
    }
    function getExn(x, n) {
      if (n < 0) {
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      var _x = x;
      var _n = n;
      while (true) {
        var n$1 = _n;
        var x$1 = _x;
        if (x$1) {
          if (n$1 === 0) {
            return x$1.hd;
          }
          _n = n$1 - 1 | 0;
          _x = x$1.tl;
          continue;
        }
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      ;
    }
    function partitionAux(p, _cell, _precX, _precY) {
      while (true) {
        var precY = _precY;
        var precX = _precX;
        var cell = _cell;
        if (!cell) {
          return;
        }
        var t = cell.tl;
        var h = cell.hd;
        var next = {
          hd: h,
          tl: (
            /* [] */
            0
          )
        };
        if (p(h)) {
          precX.tl = next;
          _precX = next;
          _cell = t;
          continue;
        }
        precY.tl = next;
        _precY = next;
        _cell = t;
        continue;
      }
      ;
    }
    function splitAux(_cell, _precX, _precY) {
      while (true) {
        var precY = _precY;
        var precX = _precX;
        var cell = _cell;
        if (!cell) {
          return;
        }
        var match = cell.hd;
        var nextA = {
          hd: match[0],
          tl: (
            /* [] */
            0
          )
        };
        var nextB = {
          hd: match[1],
          tl: (
            /* [] */
            0
          )
        };
        precX.tl = nextA;
        precY.tl = nextB;
        _precY = nextB;
        _precX = nextA;
        _cell = cell.tl;
        continue;
      }
      ;
    }
    function copyAuxCont(_cellX, _prec) {
      while (true) {
        var prec = _prec;
        var cellX = _cellX;
        if (!cellX) {
          return prec;
        }
        var next = {
          hd: cellX.hd,
          tl: (
            /* [] */
            0
          )
        };
        prec.tl = next;
        _prec = next;
        _cellX = cellX.tl;
        continue;
      }
      ;
    }
    function copyAuxWitFilter(f, _cellX, _prec) {
      while (true) {
        var prec = _prec;
        var cellX = _cellX;
        if (!cellX) {
          return;
        }
        var t = cellX.tl;
        var h = cellX.hd;
        if (f(h)) {
          var next = {
            hd: h,
            tl: (
              /* [] */
              0
            )
          };
          prec.tl = next;
          _prec = next;
          _cellX = t;
          continue;
        }
        _cellX = t;
        continue;
      }
      ;
    }
    function copyAuxWithFilterIndex(f, _cellX, _prec, _i) {
      while (true) {
        var i = _i;
        var prec = _prec;
        var cellX = _cellX;
        if (!cellX) {
          return;
        }
        var t = cellX.tl;
        var h = cellX.hd;
        if (f(h, i)) {
          var next = {
            hd: h,
            tl: (
              /* [] */
              0
            )
          };
          prec.tl = next;
          _i = i + 1 | 0;
          _prec = next;
          _cellX = t;
          continue;
        }
        _i = i + 1 | 0;
        _cellX = t;
        continue;
      }
      ;
    }
    function copyAuxWitFilterMap(f, _cellX, _prec) {
      while (true) {
        var prec = _prec;
        var cellX = _cellX;
        if (!cellX) {
          return;
        }
        var t = cellX.tl;
        var h = f(cellX.hd);
        if (h !== void 0) {
          var next = {
            hd: Caml_option.valFromOption(h),
            tl: (
              /* [] */
              0
            )
          };
          prec.tl = next;
          _prec = next;
          _cellX = t;
          continue;
        }
        _cellX = t;
        continue;
      }
      ;
    }
    function removeAssocAuxWithMap(_cellX, x, _prec, f) {
      while (true) {
        var prec = _prec;
        var cellX = _cellX;
        if (!cellX) {
          return false;
        }
        var t = cellX.tl;
        var h = cellX.hd;
        if (f(h[0], x)) {
          prec.tl = t;
          return true;
        }
        var next = {
          hd: h,
          tl: (
            /* [] */
            0
          )
        };
        prec.tl = next;
        _prec = next;
        _cellX = t;
        continue;
      }
      ;
    }
    function setAssocAuxWithMap(_cellX, x, k, _prec, eq2) {
      while (true) {
        var prec = _prec;
        var cellX = _cellX;
        if (!cellX) {
          return false;
        }
        var t = cellX.tl;
        var h = cellX.hd;
        if (eq2(h[0], x)) {
          prec.tl = {
            hd: [
              x,
              k
            ],
            tl: t
          };
          return true;
        }
        var next = {
          hd: h,
          tl: (
            /* [] */
            0
          )
        };
        prec.tl = next;
        _prec = next;
        _cellX = t;
        continue;
      }
      ;
    }
    function copyAuxWithMap(_cellX, _prec, f) {
      while (true) {
        var prec = _prec;
        var cellX = _cellX;
        if (!cellX) {
          return;
        }
        var next = {
          hd: f(cellX.hd),
          tl: (
            /* [] */
            0
          )
        };
        prec.tl = next;
        _prec = next;
        _cellX = cellX.tl;
        continue;
      }
      ;
    }
    function zipAux(_cellX, _cellY, _prec) {
      while (true) {
        var prec = _prec;
        var cellY = _cellY;
        var cellX = _cellX;
        if (!cellX) {
          return;
        }
        if (!cellY) {
          return;
        }
        var next = {
          hd: [
            cellX.hd,
            cellY.hd
          ],
          tl: (
            /* [] */
            0
          )
        };
        prec.tl = next;
        _prec = next;
        _cellY = cellY.tl;
        _cellX = cellX.tl;
        continue;
      }
      ;
    }
    function copyAuxWithMap2(f, _cellX, _cellY, _prec) {
      while (true) {
        var prec = _prec;
        var cellY = _cellY;
        var cellX = _cellX;
        if (!cellX) {
          return;
        }
        if (!cellY) {
          return;
        }
        var next = {
          hd: f(cellX.hd, cellY.hd),
          tl: (
            /* [] */
            0
          )
        };
        prec.tl = next;
        _prec = next;
        _cellY = cellY.tl;
        _cellX = cellX.tl;
        continue;
      }
      ;
    }
    function copyAuxWithMapI(f, _i, _cellX, _prec) {
      while (true) {
        var prec = _prec;
        var cellX = _cellX;
        var i = _i;
        if (!cellX) {
          return;
        }
        var next = {
          hd: f(i, cellX.hd),
          tl: (
            /* [] */
            0
          )
        };
        prec.tl = next;
        _prec = next;
        _cellX = cellX.tl;
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function takeAux(_n, _cell, _prec) {
      while (true) {
        var prec = _prec;
        var cell = _cell;
        var n = _n;
        if (n === 0) {
          return true;
        }
        if (!cell) {
          return false;
        }
        var cell$1 = {
          hd: cell.hd,
          tl: (
            /* [] */
            0
          )
        };
        prec.tl = cell$1;
        _prec = cell$1;
        _cell = cell.tl;
        _n = n - 1 | 0;
        continue;
      }
      ;
    }
    function splitAtAux(_n, _cell, _prec) {
      while (true) {
        var prec = _prec;
        var cell = _cell;
        var n = _n;
        if (n === 0) {
          return cell;
        }
        if (!cell) {
          return;
        }
        var cell$1 = {
          hd: cell.hd,
          tl: (
            /* [] */
            0
          )
        };
        prec.tl = cell$1;
        _prec = cell$1;
        _cell = cell.tl;
        _n = n - 1 | 0;
        continue;
      }
      ;
    }
    function take(lst, n) {
      if (n < 0) {
        return;
      }
      if (n === 0) {
        return (
          /* [] */
          0
        );
      }
      if (!lst) {
        return;
      }
      var cell = {
        hd: lst.hd,
        tl: (
          /* [] */
          0
        )
      };
      var has2 = takeAux(n - 1 | 0, lst.tl, cell);
      if (has2) {
        return cell;
      }
    }
    function drop(lst, n) {
      if (n < 0) {
        return;
      } else {
        var _l = lst;
        var _n = n;
        while (true) {
          var n$1 = _n;
          var l = _l;
          if (n$1 === 0) {
            return l;
          }
          if (!l) {
            return;
          }
          _n = n$1 - 1 | 0;
          _l = l.tl;
          continue;
        }
        ;
      }
    }
    function splitAt(lst, n) {
      if (n < 0) {
        return;
      }
      if (n === 0) {
        return [
          /* [] */
          0,
          lst
        ];
      }
      if (!lst) {
        return;
      }
      var cell = {
        hd: lst.hd,
        tl: (
          /* [] */
          0
        )
      };
      var rest = splitAtAux(n - 1 | 0, lst.tl, cell);
      if (rest !== void 0) {
        return [
          cell,
          rest
        ];
      }
    }
    function concat(xs, ys) {
      if (!xs) {
        return ys;
      }
      var cell = {
        hd: xs.hd,
        tl: (
          /* [] */
          0
        )
      };
      copyAuxCont(xs.tl, cell).tl = ys;
      return cell;
    }
    function mapU(xs, f) {
      if (!xs) {
        return (
          /* [] */
          0
        );
      }
      var cell = {
        hd: f(xs.hd),
        tl: (
          /* [] */
          0
        )
      };
      copyAuxWithMap(xs.tl, cell, f);
      return cell;
    }
    function map(xs, f) {
      return mapU(xs, Curry.__1(f));
    }
    function zipByU(l1, l2, f) {
      if (!l1) {
        return (
          /* [] */
          0
        );
      }
      if (!l2) {
        return (
          /* [] */
          0
        );
      }
      var cell = {
        hd: f(l1.hd, l2.hd),
        tl: (
          /* [] */
          0
        )
      };
      copyAuxWithMap2(f, l1.tl, l2.tl, cell);
      return cell;
    }
    function zipBy(l1, l2, f) {
      return zipByU(l1, l2, Curry.__2(f));
    }
    function mapWithIndexU(xs, f) {
      if (!xs) {
        return (
          /* [] */
          0
        );
      }
      var cell = {
        hd: f(0, xs.hd),
        tl: (
          /* [] */
          0
        )
      };
      copyAuxWithMapI(f, 1, xs.tl, cell);
      return cell;
    }
    function mapWithIndex(xs, f) {
      return mapWithIndexU(xs, Curry.__2(f));
    }
    function makeByU(n, f) {
      if (n <= 0) {
        return (
          /* [] */
          0
        );
      }
      var headX = {
        hd: f(0),
        tl: (
          /* [] */
          0
        )
      };
      var cur = headX;
      var i = 1;
      while (i < n) {
        var v = {
          hd: f(i),
          tl: (
            /* [] */
            0
          )
        };
        cur.tl = v;
        cur = v;
        i = i + 1 | 0;
      }
      ;
      return headX;
    }
    function makeBy(n, f) {
      return makeByU(n, Curry.__1(f));
    }
    function make(n, v) {
      if (n <= 0) {
        return (
          /* [] */
          0
        );
      }
      var headX = {
        hd: v,
        tl: (
          /* [] */
          0
        )
      };
      var cur = headX;
      var i = 1;
      while (i < n) {
        var v$1 = {
          hd: v,
          tl: (
            /* [] */
            0
          )
        };
        cur.tl = v$1;
        cur = v$1;
        i = i + 1 | 0;
      }
      ;
      return headX;
    }
    function length(xs) {
      var _x = xs;
      var _acc = 0;
      while (true) {
        var acc = _acc;
        var x = _x;
        if (!x) {
          return acc;
        }
        _acc = acc + 1 | 0;
        _x = x.tl;
        continue;
      }
      ;
    }
    function fillAux(arr, _i, _x) {
      while (true) {
        var x = _x;
        var i = _i;
        if (!x) {
          return;
        }
        arr[i] = x.hd;
        _x = x.tl;
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function fromArray(a) {
      var _i = a.length - 1 | 0;
      var _res = (
        /* [] */
        0
      );
      while (true) {
        var res = _res;
        var i = _i;
        if (i < 0) {
          return res;
        }
        _res = {
          hd: a[i],
          tl: res
        };
        _i = i - 1 | 0;
        continue;
      }
      ;
    }
    function toArray(x) {
      var len = length(x);
      var arr = new Array(len);
      fillAux(arr, 0, x);
      return arr;
    }
    function shuffle(xs) {
      var v = toArray(xs);
      Belt_Array.shuffleInPlace(v);
      return fromArray(v);
    }
    function reverseConcat(_l1, _l2) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          return l2;
        }
        _l2 = {
          hd: l1.hd,
          tl: l2
        };
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function reverse(l) {
      return reverseConcat(
        l,
        /* [] */
        0
      );
    }
    function flattenAux(_prec, _xs) {
      while (true) {
        var xs = _xs;
        var prec = _prec;
        if (xs) {
          _xs = xs.tl;
          _prec = copyAuxCont(xs.hd, prec);
          continue;
        }
        prec.tl = /* [] */
        0;
        return;
      }
      ;
    }
    function flatten(_xs) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return (
            /* [] */
            0
          );
        }
        var match = xs.hd;
        if (match) {
          var cell = {
            hd: match.hd,
            tl: (
              /* [] */
              0
            )
          };
          flattenAux(copyAuxCont(match.tl, cell), xs.tl);
          return cell;
        }
        _xs = xs.tl;
        continue;
      }
      ;
    }
    function concatMany(xs) {
      var len = xs.length;
      if (len === 1) {
        return xs[0];
      }
      if (len === 0) {
        return (
          /* [] */
          0
        );
      }
      var len$1 = xs.length;
      var v = xs[len$1 - 1 | 0];
      for (var i = len$1 - 2 | 0; i >= 0; --i) {
        v = concat(xs[i], v);
      }
      return v;
    }
    function mapReverseU(l, f) {
      var _accu = (
        /* [] */
        0
      );
      var _xs = l;
      while (true) {
        var xs = _xs;
        var accu = _accu;
        if (!xs) {
          return accu;
        }
        _xs = xs.tl;
        _accu = {
          hd: f(xs.hd),
          tl: accu
        };
        continue;
      }
      ;
    }
    function mapReverse(l, f) {
      return mapReverseU(l, Curry.__1(f));
    }
    function forEachU(_xs, f) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return;
        }
        f(xs.hd);
        _xs = xs.tl;
        continue;
      }
      ;
    }
    function forEach(xs, f) {
      forEachU(xs, Curry.__1(f));
    }
    function forEachWithIndexU(l, f) {
      var _xs = l;
      var _i = 0;
      while (true) {
        var i = _i;
        var xs = _xs;
        if (!xs) {
          return;
        }
        f(i, xs.hd);
        _i = i + 1 | 0;
        _xs = xs.tl;
        continue;
      }
      ;
    }
    function forEachWithIndex(l, f) {
      forEachWithIndexU(l, Curry.__2(f));
    }
    function reduceU(_l, _accu, f) {
      while (true) {
        var accu = _accu;
        var l = _l;
        if (!l) {
          return accu;
        }
        _accu = f(accu, l.hd);
        _l = l.tl;
        continue;
      }
      ;
    }
    function reduce(l, accu, f) {
      return reduceU(l, accu, Curry.__2(f));
    }
    function reduceReverseUnsafeU(l, accu, f) {
      if (l) {
        return f(reduceReverseUnsafeU(l.tl, accu, f), l.hd);
      } else {
        return accu;
      }
    }
    function reduceReverseU(l, acc, f) {
      var len = length(l);
      if (len < 1e3) {
        return reduceReverseUnsafeU(l, acc, f);
      } else {
        return Belt_Array.reduceReverseU(toArray(l), acc, f);
      }
    }
    function reduceReverse(l, accu, f) {
      return reduceReverseU(l, accu, Curry.__2(f));
    }
    function reduceWithIndexU(l, acc, f) {
      var _l = l;
      var _acc = acc;
      var _i = 0;
      while (true) {
        var i = _i;
        var acc$1 = _acc;
        var l$1 = _l;
        if (!l$1) {
          return acc$1;
        }
        _i = i + 1 | 0;
        _acc = f(acc$1, l$1.hd, i);
        _l = l$1.tl;
        continue;
      }
      ;
    }
    function reduceWithIndex(l, acc, f) {
      return reduceWithIndexU(l, acc, Curry.__3(f));
    }
    function mapReverse2U(l1, l2, f) {
      var _l1 = l1;
      var _l2 = l2;
      var _accu = (
        /* [] */
        0
      );
      while (true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1$1 = _l1;
        if (!l1$1) {
          return accu;
        }
        if (!l2$1) {
          return accu;
        }
        _accu = {
          hd: f(l1$1.hd, l2$1.hd),
          tl: accu
        };
        _l2 = l2$1.tl;
        _l1 = l1$1.tl;
        continue;
      }
      ;
    }
    function mapReverse2(l1, l2, f) {
      return mapReverse2U(l1, l2, Curry.__2(f));
    }
    function forEach2U(_l1, _l2, f) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          return;
        }
        if (!l2) {
          return;
        }
        f(l1.hd, l2.hd);
        _l2 = l2.tl;
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function forEach2(l1, l2, f) {
      forEach2U(l1, l2, Curry.__2(f));
    }
    function reduce2U(_l1, _l2, _accu, f) {
      while (true) {
        var accu = _accu;
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          return accu;
        }
        if (!l2) {
          return accu;
        }
        _accu = f(accu, l1.hd, l2.hd);
        _l2 = l2.tl;
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function reduce2(l1, l2, acc, f) {
      return reduce2U(l1, l2, acc, Curry.__3(f));
    }
    function reduceReverse2UnsafeU(l1, l2, accu, f) {
      if (l1 && l2) {
        return f(reduceReverse2UnsafeU(l1.tl, l2.tl, accu, f), l1.hd, l2.hd);
      } else {
        return accu;
      }
    }
    function reduceReverse2U(l1, l2, acc, f) {
      var len = length(l1);
      if (len < 1e3) {
        return reduceReverse2UnsafeU(l1, l2, acc, f);
      } else {
        return Belt_Array.reduceReverse2U(toArray(l1), toArray(l2), acc, f);
      }
    }
    function reduceReverse2(l1, l2, acc, f) {
      return reduceReverse2U(l1, l2, acc, Curry.__3(f));
    }
    function everyU(_xs, p) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return true;
        }
        if (!p(xs.hd)) {
          return false;
        }
        _xs = xs.tl;
        continue;
      }
      ;
    }
    function every(xs, p) {
      return everyU(xs, Curry.__1(p));
    }
    function someU(_xs, p) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return false;
        }
        if (p(xs.hd)) {
          return true;
        }
        _xs = xs.tl;
        continue;
      }
      ;
    }
    function some(xs, p) {
      return someU(xs, Curry.__1(p));
    }
    function every2U(_l1, _l2, p) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          return true;
        }
        if (!l2) {
          return true;
        }
        if (!p(l1.hd, l2.hd)) {
          return false;
        }
        _l2 = l2.tl;
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function every2(l1, l2, p) {
      return every2U(l1, l2, Curry.__2(p));
    }
    function cmpByLength(_l1, _l2) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          if (l2) {
            return -1;
          } else {
            return 0;
          }
        }
        if (!l2) {
          return 1;
        }
        _l2 = l2.tl;
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function cmpU(_l1, _l2, p) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          if (l2) {
            return -1;
          } else {
            return 0;
          }
        }
        if (!l2) {
          return 1;
        }
        var c = p(l1.hd, l2.hd);
        if (c !== 0) {
          return c;
        }
        _l2 = l2.tl;
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function cmp(l1, l2, f) {
      return cmpU(l1, l2, Curry.__2(f));
    }
    function eqU(_l1, _l2, p) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          if (l2) {
            return false;
          } else {
            return true;
          }
        }
        if (!l2) {
          return false;
        }
        if (!p(l1.hd, l2.hd)) {
          return false;
        }
        _l2 = l2.tl;
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function eq(l1, l2, f) {
      return eqU(l1, l2, Curry.__2(f));
    }
    function some2U(_l1, _l2, p) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          return false;
        }
        if (!l2) {
          return false;
        }
        if (p(l1.hd, l2.hd)) {
          return true;
        }
        _l2 = l2.tl;
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function some2(l1, l2, p) {
      return some2U(l1, l2, Curry.__2(p));
    }
    function hasU(_xs, x, eq2) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return false;
        }
        if (eq2(xs.hd, x)) {
          return true;
        }
        _xs = xs.tl;
        continue;
      }
      ;
    }
    function has(xs, x, eq2) {
      return hasU(xs, x, Curry.__2(eq2));
    }
    function getAssocU(_xs, x, eq2) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return;
        }
        var match = xs.hd;
        if (eq2(match[0], x)) {
          return Caml_option.some(match[1]);
        }
        _xs = xs.tl;
        continue;
      }
      ;
    }
    function getAssoc(xs, x, eq2) {
      return getAssocU(xs, x, Curry.__2(eq2));
    }
    function hasAssocU(_xs, x, eq2) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return false;
        }
        if (eq2(xs.hd[0], x)) {
          return true;
        }
        _xs = xs.tl;
        continue;
      }
      ;
    }
    function hasAssoc(xs, x, eq2) {
      return hasAssocU(xs, x, Curry.__2(eq2));
    }
    function removeAssocU(xs, x, eq2) {
      if (!xs) {
        return (
          /* [] */
          0
        );
      }
      var l = xs.tl;
      var pair = xs.hd;
      if (eq2(pair[0], x)) {
        return l;
      }
      var cell = {
        hd: pair,
        tl: (
          /* [] */
          0
        )
      };
      var removed = removeAssocAuxWithMap(l, x, cell, eq2);
      if (removed) {
        return cell;
      } else {
        return xs;
      }
    }
    function removeAssoc(xs, x, eq2) {
      return removeAssocU(xs, x, Curry.__2(eq2));
    }
    function setAssocU(xs, x, k, eq2) {
      if (!xs) {
        return {
          hd: [
            x,
            k
          ],
          tl: (
            /* [] */
            0
          )
        };
      }
      var l = xs.tl;
      var pair = xs.hd;
      if (eq2(pair[0], x)) {
        return {
          hd: [
            x,
            k
          ],
          tl: l
        };
      }
      var cell = {
        hd: pair,
        tl: (
          /* [] */
          0
        )
      };
      var replaced = setAssocAuxWithMap(l, x, k, cell, eq2);
      if (replaced) {
        return cell;
      } else {
        return {
          hd: [
            x,
            k
          ],
          tl: xs
        };
      }
    }
    function setAssoc(xs, x, k, eq2) {
      return setAssocU(xs, x, k, Curry.__2(eq2));
    }
    function sortU(xs, cmp2) {
      var arr = toArray(xs);
      Belt_SortArray.stableSortInPlaceByU(arr, cmp2);
      return fromArray(arr);
    }
    function sort(xs, cmp2) {
      return sortU(xs, Curry.__2(cmp2));
    }
    function getByU(_xs, p) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return;
        }
        var x = xs.hd;
        if (p(x)) {
          return Caml_option.some(x);
        }
        _xs = xs.tl;
        continue;
      }
      ;
    }
    function getBy(xs, p) {
      return getByU(xs, Curry.__1(p));
    }
    function keepU(_xs, p) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return (
            /* [] */
            0
          );
        }
        var t = xs.tl;
        var h = xs.hd;
        if (p(h)) {
          var cell = {
            hd: h,
            tl: (
              /* [] */
              0
            )
          };
          copyAuxWitFilter(p, t, cell);
          return cell;
        }
        _xs = t;
        continue;
      }
      ;
    }
    function keep(xs, p) {
      return keepU(xs, Curry.__1(p));
    }
    function keepWithIndexU(xs, p) {
      var _xs = xs;
      var _i = 0;
      while (true) {
        var i = _i;
        var xs$1 = _xs;
        if (!xs$1) {
          return (
            /* [] */
            0
          );
        }
        var t = xs$1.tl;
        var h = xs$1.hd;
        if (p(h, i)) {
          var cell = {
            hd: h,
            tl: (
              /* [] */
              0
            )
          };
          copyAuxWithFilterIndex(p, t, cell, i + 1 | 0);
          return cell;
        }
        _i = i + 1 | 0;
        _xs = t;
        continue;
      }
      ;
    }
    function keepWithIndex(xs, p) {
      return keepWithIndexU(xs, Curry.__2(p));
    }
    function keepMapU(_xs, p) {
      while (true) {
        var xs = _xs;
        if (!xs) {
          return (
            /* [] */
            0
          );
        }
        var t = xs.tl;
        var h = p(xs.hd);
        if (h !== void 0) {
          var cell = {
            hd: Caml_option.valFromOption(h),
            tl: (
              /* [] */
              0
            )
          };
          copyAuxWitFilterMap(p, t, cell);
          return cell;
        }
        _xs = t;
        continue;
      }
      ;
    }
    function keepMap(xs, p) {
      return keepMapU(xs, Curry.__1(p));
    }
    function partitionU(l, p) {
      if (!l) {
        return [
          /* [] */
          0,
          /* [] */
          0
        ];
      }
      var h = l.hd;
      var nextX = {
        hd: h,
        tl: (
          /* [] */
          0
        )
      };
      var nextY = {
        hd: h,
        tl: (
          /* [] */
          0
        )
      };
      var b = p(h);
      partitionAux(p, l.tl, nextX, nextY);
      if (b) {
        return [
          nextX,
          nextY.tl
        ];
      } else {
        return [
          nextX.tl,
          nextY
        ];
      }
    }
    function partition(l, p) {
      return partitionU(l, Curry.__1(p));
    }
    function unzip(xs) {
      if (!xs) {
        return [
          /* [] */
          0,
          /* [] */
          0
        ];
      }
      var match = xs.hd;
      var cellX = {
        hd: match[0],
        tl: (
          /* [] */
          0
        )
      };
      var cellY = {
        hd: match[1],
        tl: (
          /* [] */
          0
        )
      };
      splitAux(xs.tl, cellX, cellY);
      return [
        cellX,
        cellY
      ];
    }
    function zip(l1, l2) {
      if (!l1) {
        return (
          /* [] */
          0
        );
      }
      if (!l2) {
        return (
          /* [] */
          0
        );
      }
      var cell = {
        hd: [
          l1.hd,
          l2.hd
        ],
        tl: (
          /* [] */
          0
        )
      };
      zipAux(l1.tl, l2.tl, cell);
      return cell;
    }
    var size = length;
    var filter = keep;
    var filterWithIndex = keepWithIndex;
    exports2.length = length;
    exports2.size = size;
    exports2.head = head;
    exports2.headExn = headExn;
    exports2.tail = tail;
    exports2.tailExn = tailExn;
    exports2.add = add;
    exports2.get = get;
    exports2.getExn = getExn;
    exports2.make = make;
    exports2.makeByU = makeByU;
    exports2.makeBy = makeBy;
    exports2.shuffle = shuffle;
    exports2.drop = drop;
    exports2.take = take;
    exports2.splitAt = splitAt;
    exports2.concat = concat;
    exports2.concatMany = concatMany;
    exports2.reverseConcat = reverseConcat;
    exports2.flatten = flatten;
    exports2.mapU = mapU;
    exports2.map = map;
    exports2.zip = zip;
    exports2.zipByU = zipByU;
    exports2.zipBy = zipBy;
    exports2.mapWithIndexU = mapWithIndexU;
    exports2.mapWithIndex = mapWithIndex;
    exports2.fromArray = fromArray;
    exports2.toArray = toArray;
    exports2.reverse = reverse;
    exports2.mapReverseU = mapReverseU;
    exports2.mapReverse = mapReverse;
    exports2.forEachU = forEachU;
    exports2.forEach = forEach;
    exports2.forEachWithIndexU = forEachWithIndexU;
    exports2.forEachWithIndex = forEachWithIndex;
    exports2.reduceU = reduceU;
    exports2.reduce = reduce;
    exports2.reduceWithIndexU = reduceWithIndexU;
    exports2.reduceWithIndex = reduceWithIndex;
    exports2.reduceReverseU = reduceReverseU;
    exports2.reduceReverse = reduceReverse;
    exports2.mapReverse2U = mapReverse2U;
    exports2.mapReverse2 = mapReverse2;
    exports2.forEach2U = forEach2U;
    exports2.forEach2 = forEach2;
    exports2.reduce2U = reduce2U;
    exports2.reduce2 = reduce2;
    exports2.reduceReverse2U = reduceReverse2U;
    exports2.reduceReverse2 = reduceReverse2;
    exports2.everyU = everyU;
    exports2.every = every;
    exports2.someU = someU;
    exports2.some = some;
    exports2.every2U = every2U;
    exports2.every2 = every2;
    exports2.some2U = some2U;
    exports2.some2 = some2;
    exports2.cmpByLength = cmpByLength;
    exports2.cmpU = cmpU;
    exports2.cmp = cmp;
    exports2.eqU = eqU;
    exports2.eq = eq;
    exports2.hasU = hasU;
    exports2.has = has;
    exports2.getByU = getByU;
    exports2.getBy = getBy;
    exports2.keepU = keepU;
    exports2.keep = keep;
    exports2.filter = filter;
    exports2.keepWithIndexU = keepWithIndexU;
    exports2.keepWithIndex = keepWithIndex;
    exports2.filterWithIndex = filterWithIndex;
    exports2.keepMapU = keepMapU;
    exports2.keepMap = keepMap;
    exports2.partitionU = partitionU;
    exports2.partition = partition;
    exports2.unzip = unzip;
    exports2.getAssocU = getAssocU;
    exports2.getAssoc = getAssoc;
    exports2.hasAssocU = hasAssocU;
    exports2.hasAssoc = hasAssoc;
    exports2.removeAssocU = removeAssocU;
    exports2.removeAssoc = removeAssoc;
    exports2.setAssocU = setAssocU;
    exports2.setAssoc = setAssoc;
    exports2.sortU = sortU;
    exports2.sort = sort;
  }
});

// src/ResultExt.js
var require_ResultExt = __commonJS({
  "src/ResultExt.js"(exports2) {
    "use strict";
    var Belt_List = require_belt_List();
    function allOkOrError(results) {
      var _good = (
        /* [] */
        0
      );
      var _entriesLeft = Belt_List.fromArray(results);
      while (true) {
        var entriesLeft = _entriesLeft;
        var good = _good;
        if (!entriesLeft) {
          return {
            TAG: "Ok",
            _0: Belt_List.toArray(good)
          };
        }
        var entry = entriesLeft.hd;
        if (entry.TAG !== "Ok") {
          return entry;
        }
        _entriesLeft = entriesLeft.tl;
        _good = {
          hd: entry._0,
          tl: good
        };
        continue;
      }
      ;
    }
    exports2.allOkOrError = allOkOrError;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_internalAVLtree.js
var require_belt_internalAVLtree = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_internalAVLtree.js"(exports2) {
    "use strict";
    var Curry = require_curry();
    var Caml_option = require_caml_option();
    var Belt_SortArray = require_belt_SortArray();
    function treeHeight(n) {
      if (n !== void 0) {
        return n.h;
      } else {
        return 0;
      }
    }
    function copy(n) {
      if (n !== void 0) {
        return {
          k: n.k,
          v: n.v,
          h: n.h,
          l: copy(n.l),
          r: copy(n.r)
        };
      } else {
        return n;
      }
    }
    function create(l, x, d, r) {
      var hl = treeHeight(l);
      var hr = treeHeight(r);
      return {
        k: x,
        v: d,
        h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
        l,
        r
      };
    }
    function singleton(x, d) {
      return {
        k: x,
        v: d,
        h: 1,
        l: void 0,
        r: void 0
      };
    }
    function heightGe(l, r) {
      if (r !== void 0) {
        if (l !== void 0) {
          return l.h >= r.h;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
    function updateValue(n, newValue) {
      if (n.v === newValue) {
        return n;
      } else {
        return {
          k: n.k,
          v: newValue,
          h: n.h,
          l: n.l,
          r: n.r
        };
      }
    }
    function bal(l, x, d, r) {
      var hl = l !== void 0 ? l.h : 0;
      var hr = r !== void 0 ? r.h : 0;
      if (hl > (hr + 2 | 0)) {
        var ll = l.l;
        var lr = l.r;
        if (treeHeight(ll) >= treeHeight(lr)) {
          return create(ll, l.k, l.v, create(lr, x, d, r));
        } else {
          return create(create(ll, l.k, l.v, lr.l), lr.k, lr.v, create(lr.r, x, d, r));
        }
      }
      if (hr <= (hl + 2 | 0)) {
        return {
          k: x,
          v: d,
          h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
          l,
          r
        };
      }
      var rl = r.l;
      var rr = r.r;
      if (treeHeight(rr) >= treeHeight(rl)) {
        return create(create(l, x, d, rl), r.k, r.v, rr);
      } else {
        return create(create(l, x, d, rl.l), rl.k, rl.v, create(rl.r, r.k, r.v, rr));
      }
    }
    function minKey0Aux(_n) {
      while (true) {
        var n = _n;
        var n$1 = n.l;
        if (n$1 === void 0) {
          return n.k;
        }
        _n = n$1;
        continue;
      }
      ;
    }
    function minKey(n) {
      if (n !== void 0) {
        return Caml_option.some(minKey0Aux(n));
      }
    }
    function minKeyUndefined(n) {
      if (n !== void 0) {
        return minKey0Aux(n);
      }
    }
    function maxKey0Aux(_n) {
      while (true) {
        var n = _n;
        var n$1 = n.r;
        if (n$1 === void 0) {
          return n.k;
        }
        _n = n$1;
        continue;
      }
      ;
    }
    function maxKey(n) {
      if (n !== void 0) {
        return Caml_option.some(maxKey0Aux(n));
      }
    }
    function maxKeyUndefined(n) {
      if (n !== void 0) {
        return maxKey0Aux(n);
      }
    }
    function minKV0Aux(_n) {
      while (true) {
        var n = _n;
        var n$1 = n.l;
        if (n$1 === void 0) {
          return [
            n.k,
            n.v
          ];
        }
        _n = n$1;
        continue;
      }
      ;
    }
    function minimum(n) {
      if (n !== void 0) {
        return minKV0Aux(n);
      }
    }
    function minUndefined(n) {
      if (n !== void 0) {
        return minKV0Aux(n);
      }
    }
    function maxKV0Aux(_n) {
      while (true) {
        var n = _n;
        var n$1 = n.r;
        if (n$1 === void 0) {
          return [
            n.k,
            n.v
          ];
        }
        _n = n$1;
        continue;
      }
      ;
    }
    function maximum(n) {
      if (n !== void 0) {
        return maxKV0Aux(n);
      }
    }
    function maxUndefined(n) {
      if (n !== void 0) {
        return maxKV0Aux(n);
      }
    }
    function removeMinAuxWithRef(n, kr, vr) {
      var ln = n.l;
      if (ln !== void 0) {
        return bal(removeMinAuxWithRef(ln, kr, vr), n.k, n.v, n.r);
      } else {
        kr.contents = n.k;
        vr.contents = n.v;
        return n.r;
      }
    }
    function isEmpty(x) {
      return x === void 0;
    }
    function stackAllLeft(_v, _s) {
      while (true) {
        var s = _s;
        var v = _v;
        if (v === void 0) {
          return s;
        }
        _s = {
          hd: v,
          tl: s
        };
        _v = v.l;
        continue;
      }
      ;
    }
    function findFirstByU(n, p) {
      if (n === void 0) {
        return;
      }
      var left = findFirstByU(n.l, p);
      if (left !== void 0) {
        return left;
      }
      var v = n.k;
      var d = n.v;
      var pvd = p(v, d);
      if (pvd) {
        return [
          v,
          d
        ];
      }
      var right = findFirstByU(n.r, p);
      if (right !== void 0) {
        return right;
      }
    }
    function findFirstBy(n, p) {
      return findFirstByU(n, Curry.__2(p));
    }
    function forEachU(_n, f) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return;
        }
        forEachU(n.l, f);
        f(n.k, n.v);
        _n = n.r;
        continue;
      }
      ;
    }
    function forEach(n, f) {
      forEachU(n, Curry.__2(f));
    }
    function mapU(n, f) {
      if (n === void 0) {
        return;
      }
      var newLeft = mapU(n.l, f);
      var newD = f(n.v);
      var newRight = mapU(n.r, f);
      return {
        k: n.k,
        v: newD,
        h: n.h,
        l: newLeft,
        r: newRight
      };
    }
    function map(n, f) {
      return mapU(n, Curry.__1(f));
    }
    function mapWithKeyU(n, f) {
      if (n === void 0) {
        return;
      }
      var key = n.k;
      var newLeft = mapWithKeyU(n.l, f);
      var newD = f(key, n.v);
      var newRight = mapWithKeyU(n.r, f);
      return {
        k: key,
        v: newD,
        h: n.h,
        l: newLeft,
        r: newRight
      };
    }
    function mapWithKey(n, f) {
      return mapWithKeyU(n, Curry.__2(f));
    }
    function reduceU(_m, _accu, f) {
      while (true) {
        var accu = _accu;
        var m = _m;
        if (m === void 0) {
          return accu;
        }
        var v = m.k;
        var d = m.v;
        var l = m.l;
        var r = m.r;
        _accu = f(reduceU(l, accu, f), v, d);
        _m = r;
        continue;
      }
      ;
    }
    function reduce(m, accu, f) {
      return reduceU(m, accu, Curry.__3(f));
    }
    function everyU(_n, p) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return true;
        }
        if (!p(n.k, n.v)) {
          return false;
        }
        if (!everyU(n.l, p)) {
          return false;
        }
        _n = n.r;
        continue;
      }
      ;
    }
    function every(n, p) {
      return everyU(n, Curry.__2(p));
    }
    function someU(_n, p) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return false;
        }
        if (p(n.k, n.v)) {
          return true;
        }
        if (someU(n.l, p)) {
          return true;
        }
        _n = n.r;
        continue;
      }
      ;
    }
    function some(n, p) {
      return someU(n, Curry.__2(p));
    }
    function addMinElement(n, k, v) {
      if (n !== void 0) {
        return bal(addMinElement(n.l, k, v), n.k, n.v, n.r);
      } else {
        return singleton(k, v);
      }
    }
    function addMaxElement(n, k, v) {
      if (n !== void 0) {
        return bal(n.l, n.k, n.v, addMaxElement(n.r, k, v));
      } else {
        return singleton(k, v);
      }
    }
    function join(ln, v, d, rn) {
      if (ln === void 0) {
        return addMinElement(rn, v, d);
      }
      if (rn === void 0) {
        return addMaxElement(ln, v, d);
      }
      var lv = ln.k;
      var ld = ln.v;
      var lh = ln.h;
      var ll = ln.l;
      var lr = ln.r;
      var rv = rn.k;
      var rd = rn.v;
      var rh = rn.h;
      var rl = rn.l;
      var rr = rn.r;
      if (lh > (rh + 2 | 0)) {
        return bal(ll, lv, ld, join(lr, v, d, rn));
      } else if (rh > (lh + 2 | 0)) {
        return bal(join(ln, v, d, rl), rv, rd, rr);
      } else {
        return create(ln, v, d, rn);
      }
    }
    function concat(t1, t2) {
      if (t1 === void 0) {
        return t2;
      }
      if (t2 === void 0) {
        return t1;
      }
      var kr = {
        contents: t2.k
      };
      var vr = {
        contents: t2.v
      };
      var t2r = removeMinAuxWithRef(t2, kr, vr);
      return join(t1, kr.contents, vr.contents, t2r);
    }
    function concatOrJoin(t1, v, d, t2) {
      if (d !== void 0) {
        return join(t1, v, Caml_option.valFromOption(d), t2);
      } else {
        return concat(t1, t2);
      }
    }
    function keepSharedU(n, p) {
      if (n === void 0) {
        return;
      }
      var v = n.k;
      var d = n.v;
      var newLeft = keepSharedU(n.l, p);
      var pvd = p(v, d);
      var newRight = keepSharedU(n.r, p);
      if (pvd) {
        return join(newLeft, v, d, newRight);
      } else {
        return concat(newLeft, newRight);
      }
    }
    function keepShared(n, p) {
      return keepSharedU(n, Curry.__2(p));
    }
    function keepMapU(n, p) {
      if (n === void 0) {
        return;
      }
      var v = n.k;
      var d = n.v;
      var newLeft = keepMapU(n.l, p);
      var pvd = p(v, d);
      var newRight = keepMapU(n.r, p);
      if (pvd !== void 0) {
        return join(newLeft, v, Caml_option.valFromOption(pvd), newRight);
      } else {
        return concat(newLeft, newRight);
      }
    }
    function keepMap(n, p) {
      return keepMapU(n, Curry.__2(p));
    }
    function partitionSharedU(n, p) {
      if (n === void 0) {
        return [
          void 0,
          void 0
        ];
      }
      var key = n.k;
      var value = n.v;
      var match = partitionSharedU(n.l, p);
      var lf = match[1];
      var lt = match[0];
      var pvd = p(key, value);
      var match$1 = partitionSharedU(n.r, p);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pvd) {
        return [
          join(lt, key, value, rt),
          concat(lf, rf)
        ];
      } else {
        return [
          concat(lt, rt),
          join(lf, key, value, rf)
        ];
      }
    }
    function partitionShared(n, p) {
      return partitionSharedU(n, Curry.__2(p));
    }
    function lengthNode(n) {
      var l = n.l;
      var r = n.r;
      var sizeL = l !== void 0 ? lengthNode(l) : 0;
      var sizeR = r !== void 0 ? lengthNode(r) : 0;
      return (1 + sizeL | 0) + sizeR | 0;
    }
    function size(n) {
      if (n !== void 0) {
        return lengthNode(n);
      } else {
        return 0;
      }
    }
    function toListAux(_n, _accu) {
      while (true) {
        var accu = _accu;
        var n = _n;
        if (n === void 0) {
          return accu;
        }
        var k = n.k;
        var v = n.v;
        var l = n.l;
        var r = n.r;
        _accu = {
          hd: [
            k,
            v
          ],
          tl: toListAux(r, accu)
        };
        _n = l;
        continue;
      }
      ;
    }
    function toList(s) {
      return toListAux(
        s,
        /* [] */
        0
      );
    }
    function checkInvariantInternal(_v) {
      while (true) {
        var v = _v;
        if (v === void 0) {
          return;
        }
        var l = v.l;
        var r = v.r;
        var diff = treeHeight(l) - treeHeight(r) | 0;
        if (!(diff <= 2 && diff >= -2)) {
          throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "belt_internalAVLtree.res",
              457,
              4
            ],
            Error: new Error()
          };
        }
        checkInvariantInternal(l);
        _v = r;
        continue;
      }
      ;
    }
    function fillArrayKey(_n, _i, arr) {
      while (true) {
        var i = _i;
        var n = _n;
        var v = n.k;
        var l = n.l;
        var r = n.r;
        var next = l !== void 0 ? fillArrayKey(l, i, arr) : i;
        arr[next] = v;
        var rnext = next + 1 | 0;
        if (r === void 0) {
          return rnext;
        }
        _i = rnext;
        _n = r;
        continue;
      }
      ;
    }
    function fillArrayValue(_n, _i, arr) {
      while (true) {
        var i = _i;
        var n = _n;
        var l = n.l;
        var r = n.r;
        var next = l !== void 0 ? fillArrayValue(l, i, arr) : i;
        arr[next] = n.v;
        var rnext = next + 1 | 0;
        if (r === void 0) {
          return rnext;
        }
        _i = rnext;
        _n = r;
        continue;
      }
      ;
    }
    function fillArray(_n, _i, arr) {
      while (true) {
        var i = _i;
        var n = _n;
        var l = n.l;
        var v = n.k;
        var r = n.r;
        var next = l !== void 0 ? fillArray(l, i, arr) : i;
        arr[next] = [
          v,
          n.v
        ];
        var rnext = next + 1 | 0;
        if (r === void 0) {
          return rnext;
        }
        _i = rnext;
        _n = r;
        continue;
      }
      ;
    }
    function toArray(n) {
      if (n === void 0) {
        return [];
      }
      var size2 = lengthNode(n);
      var v = new Array(size2);
      fillArray(n, 0, v);
      return v;
    }
    function keysToArray(n) {
      if (n === void 0) {
        return [];
      }
      var size2 = lengthNode(n);
      var v = new Array(size2);
      fillArrayKey(n, 0, v);
      return v;
    }
    function valuesToArray(n) {
      if (n === void 0) {
        return [];
      }
      var size2 = lengthNode(n);
      var v = new Array(size2);
      fillArrayValue(n, 0, v);
      return v;
    }
    function fromSortedArrayRevAux(arr, off, len) {
      switch (len) {
        case 0:
          return;
        case 1:
          var match = arr[off];
          return singleton(match[0], match[1]);
        case 2:
          var match_0 = arr[off];
          var match_1 = arr[off - 1 | 0];
          var match$1 = match_1;
          var match$2 = match_0;
          return {
            k: match$1[0],
            v: match$1[1],
            h: 2,
            l: singleton(match$2[0], match$2[1]),
            r: void 0
          };
        case 3:
          var match_0$1 = arr[off];
          var match_1$1 = arr[off - 1 | 0];
          var match_2 = arr[off - 2 | 0];
          var match$3 = match_2;
          var match$4 = match_1$1;
          var match$5 = match_0$1;
          return {
            k: match$4[0],
            v: match$4[1],
            h: 2,
            l: singleton(match$5[0], match$5[1]),
            r: singleton(match$3[0], match$3[1])
          };
        default:
          var nl = len / 2 | 0;
          var left = fromSortedArrayRevAux(arr, off, nl);
          var match$6 = arr[off - nl | 0];
          var right = fromSortedArrayRevAux(arr, (off - nl | 0) - 1 | 0, (len - nl | 0) - 1 | 0);
          return create(left, match$6[0], match$6[1], right);
      }
    }
    function fromSortedArrayAux(arr, off, len) {
      switch (len) {
        case 0:
          return;
        case 1:
          var match = arr[off];
          return singleton(match[0], match[1]);
        case 2:
          var match_0 = arr[off];
          var match_1 = arr[off + 1 | 0];
          var match$1 = match_1;
          var match$2 = match_0;
          return {
            k: match$1[0],
            v: match$1[1],
            h: 2,
            l: singleton(match$2[0], match$2[1]),
            r: void 0
          };
        case 3:
          var match_0$1 = arr[off];
          var match_1$1 = arr[off + 1 | 0];
          var match_2 = arr[off + 2 | 0];
          var match$3 = match_2;
          var match$4 = match_1$1;
          var match$5 = match_0$1;
          return {
            k: match$4[0],
            v: match$4[1],
            h: 2,
            l: singleton(match$5[0], match$5[1]),
            r: singleton(match$3[0], match$3[1])
          };
        default:
          var nl = len / 2 | 0;
          var left = fromSortedArrayAux(arr, off, nl);
          var match$6 = arr[off + nl | 0];
          var right = fromSortedArrayAux(arr, (off + nl | 0) + 1 | 0, (len - nl | 0) - 1 | 0);
          return create(left, match$6[0], match$6[1], right);
      }
    }
    function fromSortedArrayUnsafe(arr) {
      return fromSortedArrayAux(arr, 0, arr.length);
    }
    function cmpU(s1, s2, kcmp, vcmp) {
      var len1 = size(s1);
      var len2 = size(s2);
      if (len1 === len2) {
        var _e1 = stackAllLeft(
          s1,
          /* [] */
          0
        );
        var _e2 = stackAllLeft(
          s2,
          /* [] */
          0
        );
        while (true) {
          var e2 = _e2;
          var e1 = _e1;
          if (!e1) {
            return 0;
          }
          if (!e2) {
            return 0;
          }
          var h2 = e2.hd;
          var h1 = e1.hd;
          var c = kcmp(h1.k, h2.k);
          if (c !== 0) {
            return c;
          }
          var cx = vcmp(h1.v, h2.v);
          if (cx !== 0) {
            return cx;
          }
          _e2 = stackAllLeft(h2.r, e2.tl);
          _e1 = stackAllLeft(h1.r, e1.tl);
          continue;
        }
        ;
      } else if (len1 < len2) {
        return -1;
      } else {
        return 1;
      }
    }
    function cmp(s1, s2, kcmp, vcmp) {
      return cmpU(s1, s2, kcmp, Curry.__2(vcmp));
    }
    function eqU(s1, s2, kcmp, veq) {
      var len1 = size(s1);
      var len2 = size(s2);
      if (len1 === len2) {
        var _e1 = stackAllLeft(
          s1,
          /* [] */
          0
        );
        var _e2 = stackAllLeft(
          s2,
          /* [] */
          0
        );
        while (true) {
          var e2 = _e2;
          var e1 = _e1;
          if (!e1) {
            return true;
          }
          if (!e2) {
            return true;
          }
          var h2 = e2.hd;
          var h1 = e1.hd;
          if (!(kcmp(h1.k, h2.k) === 0 && veq(h1.v, h2.v))) {
            return false;
          }
          _e2 = stackAllLeft(h2.r, e2.tl);
          _e1 = stackAllLeft(h1.r, e1.tl);
          continue;
        }
        ;
      } else {
        return false;
      }
    }
    function eq(s1, s2, kcmp, veq) {
      return eqU(s1, s2, kcmp, Curry.__2(veq));
    }
    function get(_n, x, cmp2) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return;
        }
        var v = n.k;
        var c = cmp2(x, v);
        if (c === 0) {
          return Caml_option.some(n.v);
        }
        _n = c < 0 ? n.l : n.r;
        continue;
      }
      ;
    }
    function getUndefined(_n, x, cmp2) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return;
        }
        var v = n.k;
        var c = cmp2(x, v);
        if (c === 0) {
          return n.v;
        }
        _n = c < 0 ? n.l : n.r;
        continue;
      }
      ;
    }
    function getExn(_n, x, cmp2) {
      while (true) {
        var n = _n;
        if (n !== void 0) {
          var v = n.k;
          var c = cmp2(x, v);
          if (c === 0) {
            return n.v;
          }
          _n = c < 0 ? n.l : n.r;
          continue;
        }
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      ;
    }
    function getWithDefault(_n, x, def, cmp2) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return def;
        }
        var v = n.k;
        var c = cmp2(x, v);
        if (c === 0) {
          return n.v;
        }
        _n = c < 0 ? n.l : n.r;
        continue;
      }
      ;
    }
    function has(_n, x, cmp2) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return false;
        }
        var v = n.k;
        var c = cmp2(x, v);
        if (c === 0) {
          return true;
        }
        _n = c < 0 ? n.l : n.r;
        continue;
      }
      ;
    }
    function rotateWithLeftChild(k2) {
      var k1 = k2.l;
      k2.l = k1.r;
      k1.r = k2;
      var hlk2 = treeHeight(k2.l);
      var hrk2 = treeHeight(k2.r);
      k2.h = (hlk2 > hrk2 ? hlk2 : hrk2) + 1 | 0;
      var hlk1 = treeHeight(k1.l);
      var hk2 = k2.h;
      k1.h = (hlk1 > hk2 ? hlk1 : hk2) + 1 | 0;
      return k1;
    }
    function rotateWithRightChild(k1) {
      var k2 = k1.r;
      k1.r = k2.l;
      k2.l = k1;
      var hlk1 = treeHeight(k1.l);
      var hrk1 = treeHeight(k1.r);
      k1.h = (hlk1 > hrk1 ? hlk1 : hrk1) + 1 | 0;
      var hrk2 = treeHeight(k2.r);
      var hk1 = k1.h;
      k2.h = (hrk2 > hk1 ? hrk2 : hk1) + 1 | 0;
      return k2;
    }
    function doubleWithLeftChild(k3) {
      var x = k3.l;
      var v = rotateWithRightChild(x);
      k3.l = v;
      return rotateWithLeftChild(k3);
    }
    function doubleWithRightChild(k2) {
      var x = k2.r;
      var v = rotateWithLeftChild(x);
      k2.r = v;
      return rotateWithRightChild(k2);
    }
    function heightUpdateMutate(t) {
      var hlt = treeHeight(t.l);
      var hrt = treeHeight(t.r);
      t.h = (hlt > hrt ? hlt : hrt) + 1 | 0;
      return t;
    }
    function balMutate(nt) {
      var l = nt.l;
      var r = nt.r;
      var hl = treeHeight(l);
      var hr = treeHeight(r);
      if (hl > (2 + hr | 0)) {
        var ll = l.l;
        var lr = l.r;
        if (heightGe(ll, lr)) {
          return heightUpdateMutate(rotateWithLeftChild(nt));
        } else {
          return heightUpdateMutate(doubleWithLeftChild(nt));
        }
      }
      if (hr > (2 + hl | 0)) {
        var rl = r.l;
        var rr = r.r;
        if (heightGe(rr, rl)) {
          return heightUpdateMutate(rotateWithRightChild(nt));
        } else {
          return heightUpdateMutate(doubleWithRightChild(nt));
        }
      }
      nt.h = (hl > hr ? hl : hr) + 1 | 0;
      return nt;
    }
    function updateMutate(t, x, data, cmp2) {
      if (t === void 0) {
        return singleton(x, data);
      }
      var k = t.k;
      var c = cmp2(x, k);
      if (c === 0) {
        t.v = data;
        return t;
      }
      var l = t.l;
      var r = t.r;
      if (c < 0) {
        var ll = updateMutate(l, x, data, cmp2);
        t.l = ll;
      } else {
        t.r = updateMutate(r, x, data, cmp2);
      }
      return balMutate(t);
    }
    function fromArray(xs, cmp2) {
      var len = xs.length;
      if (len === 0) {
        return;
      }
      var next = Belt_SortArray.strictlySortedLengthU(xs, function(param, param$1) {
        return cmp2(param[0], param$1[0]) < 0;
      });
      var result;
      if (next >= 0) {
        result = fromSortedArrayAux(xs, 0, next);
      } else {
        next = -next | 0;
        result = fromSortedArrayRevAux(xs, next - 1 | 0, next);
      }
      for (var i = next; i < len; ++i) {
        var match = xs[i];
        result = updateMutate(result, match[0], match[1], cmp2);
      }
      return result;
    }
    function removeMinAuxWithRootMutate(nt, n) {
      var rn = n.r;
      var ln = n.l;
      if (ln !== void 0) {
        n.l = removeMinAuxWithRootMutate(nt, ln);
        return balMutate(n);
      } else {
        nt.k = n.k;
        nt.v = n.v;
        return rn;
      }
    }
    exports2.copy = copy;
    exports2.create = create;
    exports2.bal = bal;
    exports2.singleton = singleton;
    exports2.updateValue = updateValue;
    exports2.minKey = minKey;
    exports2.minKeyUndefined = minKeyUndefined;
    exports2.maxKey = maxKey;
    exports2.maxKeyUndefined = maxKeyUndefined;
    exports2.minimum = minimum;
    exports2.minUndefined = minUndefined;
    exports2.maximum = maximum;
    exports2.maxUndefined = maxUndefined;
    exports2.removeMinAuxWithRef = removeMinAuxWithRef;
    exports2.isEmpty = isEmpty;
    exports2.stackAllLeft = stackAllLeft;
    exports2.findFirstByU = findFirstByU;
    exports2.findFirstBy = findFirstBy;
    exports2.forEachU = forEachU;
    exports2.forEach = forEach;
    exports2.mapU = mapU;
    exports2.map = map;
    exports2.mapWithKeyU = mapWithKeyU;
    exports2.mapWithKey = mapWithKey;
    exports2.reduceU = reduceU;
    exports2.reduce = reduce;
    exports2.everyU = everyU;
    exports2.every = every;
    exports2.someU = someU;
    exports2.some = some;
    exports2.join = join;
    exports2.concat = concat;
    exports2.concatOrJoin = concatOrJoin;
    exports2.keepSharedU = keepSharedU;
    exports2.keepShared = keepShared;
    exports2.keepMapU = keepMapU;
    exports2.keepMap = keepMap;
    exports2.partitionSharedU = partitionSharedU;
    exports2.partitionShared = partitionShared;
    exports2.lengthNode = lengthNode;
    exports2.size = size;
    exports2.toList = toList;
    exports2.checkInvariantInternal = checkInvariantInternal;
    exports2.fillArray = fillArray;
    exports2.toArray = toArray;
    exports2.keysToArray = keysToArray;
    exports2.valuesToArray = valuesToArray;
    exports2.fromSortedArrayAux = fromSortedArrayAux;
    exports2.fromSortedArrayRevAux = fromSortedArrayRevAux;
    exports2.fromSortedArrayUnsafe = fromSortedArrayUnsafe;
    exports2.cmpU = cmpU;
    exports2.cmp = cmp;
    exports2.eqU = eqU;
    exports2.eq = eq;
    exports2.get = get;
    exports2.getUndefined = getUndefined;
    exports2.getWithDefault = getWithDefault;
    exports2.getExn = getExn;
    exports2.has = has;
    exports2.fromArray = fromArray;
    exports2.updateMutate = updateMutate;
    exports2.balMutate = balMutate;
    exports2.removeMinAuxWithRootMutate = removeMinAuxWithRootMutate;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_internalMapInt.js
var require_belt_internalMapInt = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_internalMapInt.js"(exports2) {
    "use strict";
    var Caml = require_caml();
    var Curry = require_curry();
    var Caml_option = require_caml_option();
    var Belt_SortArray = require_belt_SortArray();
    var Belt_internalAVLtree = require_belt_internalAVLtree();
    function add(t, x, data) {
      if (t === void 0) {
        return Belt_internalAVLtree.singleton(x, data);
      }
      var k = t.k;
      if (x === k) {
        return Belt_internalAVLtree.updateValue(t, data);
      }
      var v = t.v;
      if (x < k) {
        return Belt_internalAVLtree.bal(add(t.l, x, data), k, v, t.r);
      } else {
        return Belt_internalAVLtree.bal(t.l, k, v, add(t.r, x, data));
      }
    }
    function get(_n, x) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return;
        }
        var v = n.k;
        if (x === v) {
          return Caml_option.some(n.v);
        }
        _n = x < v ? n.l : n.r;
        continue;
      }
      ;
    }
    function getUndefined(_n, x) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return;
        }
        var v = n.k;
        if (x === v) {
          return n.v;
        }
        _n = x < v ? n.l : n.r;
        continue;
      }
      ;
    }
    function getExn(_n, x) {
      while (true) {
        var n = _n;
        if (n !== void 0) {
          var v = n.k;
          if (x === v) {
            return n.v;
          }
          _n = x < v ? n.l : n.r;
          continue;
        }
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      ;
    }
    function getWithDefault(_n, x, def) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return def;
        }
        var v = n.k;
        if (x === v) {
          return n.v;
        }
        _n = x < v ? n.l : n.r;
        continue;
      }
      ;
    }
    function has(_n, x) {
      while (true) {
        var n = _n;
        if (n === void 0) {
          return false;
        }
        var v = n.k;
        if (x === v) {
          return true;
        }
        _n = x < v ? n.l : n.r;
        continue;
      }
      ;
    }
    function remove(n, x) {
      if (n === void 0) {
        return n;
      }
      var v = n.k;
      var l = n.l;
      var r = n.r;
      if (x !== v) {
        if (x < v) {
          return Belt_internalAVLtree.bal(remove(l, x), v, n.v, r);
        } else {
          return Belt_internalAVLtree.bal(l, v, n.v, remove(r, x));
        }
      }
      if (l === void 0) {
        return r;
      }
      if (r === void 0) {
        return l;
      }
      var kr = {
        contents: r.k
      };
      var vr = {
        contents: r.v
      };
      var r$1 = Belt_internalAVLtree.removeMinAuxWithRef(r, kr, vr);
      return Belt_internalAVLtree.bal(l, kr.contents, vr.contents, r$1);
    }
    function splitAux(x, n) {
      var v = n.k;
      var d = n.v;
      var l = n.l;
      var r = n.r;
      if (x === v) {
        return [
          l,
          Caml_option.some(d),
          r
        ];
      }
      if (x < v) {
        if (l === void 0) {
          return [
            void 0,
            void 0,
            n
          ];
        }
        var match = splitAux(x, l);
        return [
          match[0],
          match[1],
          Belt_internalAVLtree.join(match[2], v, d, r)
        ];
      }
      if (r === void 0) {
        return [
          n,
          void 0,
          void 0
        ];
      }
      var match$1 = splitAux(x, r);
      return [
        Belt_internalAVLtree.join(l, v, d, match$1[0]),
        match$1[1],
        match$1[2]
      ];
    }
    function split(x, n) {
      if (n !== void 0) {
        return splitAux(x, n);
      } else {
        return [
          void 0,
          void 0,
          void 0
        ];
      }
    }
    function mergeU(s1, s2, f) {
      if (s1 !== void 0) {
        if (s1.h >= (s2 !== void 0 ? s2.h : 0)) {
          var v1 = s1.k;
          var d1 = s1.v;
          var l1 = s1.l;
          var r1 = s1.r;
          var match = split(v1, s2);
          return Belt_internalAVLtree.concatOrJoin(mergeU(l1, match[0], f), v1, f(v1, Caml_option.some(d1), match[1]), mergeU(r1, match[2], f));
        }
      } else if (s2 === void 0) {
        return;
      }
      var v2 = s2.k;
      var d2 = s2.v;
      var l2 = s2.l;
      var r2 = s2.r;
      var match$1 = split(v2, s1);
      return Belt_internalAVLtree.concatOrJoin(mergeU(match$1[0], l2, f), v2, f(v2, match$1[1], Caml_option.some(d2)), mergeU(match$1[2], r2, f));
    }
    function merge(s1, s2, f) {
      return mergeU(s1, s2, Curry.__3(f));
    }
    function compareAux(_e1, _e2, vcmp) {
      while (true) {
        var e2 = _e2;
        var e1 = _e1;
        if (!e1) {
          return 0;
        }
        if (!e2) {
          return 0;
        }
        var h2 = e2.hd;
        var h1 = e1.hd;
        var c = Caml.int_compare(h1.k, h2.k);
        if (c !== 0) {
          return c;
        }
        var cx = vcmp(h1.v, h2.v);
        if (cx !== 0) {
          return cx;
        }
        _e2 = Belt_internalAVLtree.stackAllLeft(h2.r, e2.tl);
        _e1 = Belt_internalAVLtree.stackAllLeft(h1.r, e1.tl);
        continue;
      }
      ;
    }
    function cmpU(s1, s2, cmp2) {
      var len1 = Belt_internalAVLtree.size(s1);
      var len2 = Belt_internalAVLtree.size(s2);
      if (len1 === len2) {
        return compareAux(Belt_internalAVLtree.stackAllLeft(
          s1,
          /* [] */
          0
        ), Belt_internalAVLtree.stackAllLeft(
          s2,
          /* [] */
          0
        ), cmp2);
      } else if (len1 < len2) {
        return -1;
      } else {
        return 1;
      }
    }
    function cmp(s1, s2, f) {
      return cmpU(s1, s2, Curry.__2(f));
    }
    function eqAux(_e1, _e2, eq2) {
      while (true) {
        var e2 = _e2;
        var e1 = _e1;
        if (!e1) {
          return true;
        }
        if (!e2) {
          return true;
        }
        var h2 = e2.hd;
        var h1 = e1.hd;
        if (!(h1.k === h2.k && eq2(h1.v, h2.v))) {
          return false;
        }
        _e2 = Belt_internalAVLtree.stackAllLeft(h2.r, e2.tl);
        _e1 = Belt_internalAVLtree.stackAllLeft(h1.r, e1.tl);
        continue;
      }
      ;
    }
    function eqU(s1, s2, eq2) {
      var len1 = Belt_internalAVLtree.size(s1);
      var len2 = Belt_internalAVLtree.size(s2);
      if (len1 === len2) {
        return eqAux(Belt_internalAVLtree.stackAllLeft(
          s1,
          /* [] */
          0
        ), Belt_internalAVLtree.stackAllLeft(
          s2,
          /* [] */
          0
        ), eq2);
      } else {
        return false;
      }
    }
    function eq(s1, s2, f) {
      return eqU(s1, s2, Curry.__2(f));
    }
    function addMutate(t, x, data) {
      if (t === void 0) {
        return Belt_internalAVLtree.singleton(x, data);
      }
      var k = t.k;
      if (x === k) {
        t.k = x;
        t.v = data;
        return t;
      }
      var l = t.l;
      var r = t.r;
      if (x < k) {
        var ll = addMutate(l, x, data);
        t.l = ll;
      } else {
        t.r = addMutate(r, x, data);
      }
      return Belt_internalAVLtree.balMutate(t);
    }
    function fromArray(xs) {
      var len = xs.length;
      if (len === 0) {
        return;
      }
      var next = Belt_SortArray.strictlySortedLengthU(xs, function(param, param$1) {
        return param[0] < param$1[0];
      });
      var result;
      if (next >= 0) {
        result = Belt_internalAVLtree.fromSortedArrayAux(xs, 0, next);
      } else {
        next = -next | 0;
        result = Belt_internalAVLtree.fromSortedArrayRevAux(xs, next - 1 | 0, next);
      }
      for (var i = next; i < len; ++i) {
        var match = xs[i];
        result = addMutate(result, match[0], match[1]);
      }
      return result;
    }
    var N;
    var A;
    var S;
    exports2.N = N;
    exports2.A = A;
    exports2.S = S;
    exports2.add = add;
    exports2.get = get;
    exports2.getUndefined = getUndefined;
    exports2.getExn = getExn;
    exports2.getWithDefault = getWithDefault;
    exports2.has = has;
    exports2.remove = remove;
    exports2.splitAux = splitAux;
    exports2.split = split;
    exports2.mergeU = mergeU;
    exports2.merge = merge;
    exports2.compareAux = compareAux;
    exports2.cmpU = cmpU;
    exports2.cmp = cmp;
    exports2.eqAux = eqAux;
    exports2.eqU = eqU;
    exports2.eq = eq;
    exports2.addMutate = addMutate;
    exports2.fromArray = fromArray;
  }
});

// node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_MapInt.js
var require_belt_MapInt = __commonJS({
  "node_modules/.pnpm/rescript@11.1.4/node_modules/rescript/lib/js/belt_MapInt.js"(exports2) {
    "use strict";
    var Curry = require_curry();
    var Caml_option = require_caml_option();
    var Belt_internalMapInt = require_belt_internalMapInt();
    var Belt_internalAVLtree = require_belt_internalAVLtree();
    function set(t, newK, newD) {
      if (t === void 0) {
        return Belt_internalAVLtree.singleton(newK, newD);
      }
      var k = t.k;
      if (newK === k) {
        return Belt_internalAVLtree.updateValue(t, newD);
      }
      var v = t.v;
      if (newK < k) {
        return Belt_internalAVLtree.bal(set(t.l, newK, newD), k, v, t.r);
      } else {
        return Belt_internalAVLtree.bal(t.l, k, v, set(t.r, newK, newD));
      }
    }
    function updateU(t, x, f) {
      if (t !== void 0) {
        var k = t.k;
        if (x === k) {
          var data = f(Caml_option.some(t.v));
          if (data !== void 0) {
            return Belt_internalAVLtree.updateValue(t, Caml_option.valFromOption(data));
          }
          var l = t.l;
          var r = t.r;
          if (l === void 0) {
            return r;
          }
          if (r === void 0) {
            return l;
          }
          var kr = {
            contents: r.k
          };
          var vr = {
            contents: r.v
          };
          var r$1 = Belt_internalAVLtree.removeMinAuxWithRef(r, kr, vr);
          return Belt_internalAVLtree.bal(l, kr.contents, vr.contents, r$1);
        }
        var v = t.v;
        var l$1 = t.l;
        var r$2 = t.r;
        if (x < k) {
          var ll = updateU(l$1, x, f);
          if (l$1 === ll) {
            return t;
          } else {
            return Belt_internalAVLtree.bal(ll, k, v, r$2);
          }
        }
        var rr = updateU(r$2, x, f);
        if (r$2 === rr) {
          return t;
        } else {
          return Belt_internalAVLtree.bal(l$1, k, v, rr);
        }
      }
      var data$1 = f(void 0);
      if (data$1 !== void 0) {
        return Belt_internalAVLtree.singleton(x, Caml_option.valFromOption(data$1));
      } else {
        return t;
      }
    }
    function update(t, x, f) {
      return updateU(t, x, Curry.__1(f));
    }
    function removeAux(n, x) {
      var v = n.k;
      var l = n.l;
      var r = n.r;
      if (x === v) {
        if (l === void 0) {
          return r;
        }
        if (r === void 0) {
          return l;
        }
        var kr = {
          contents: r.k
        };
        var vr = {
          contents: r.v
        };
        var r$1 = Belt_internalAVLtree.removeMinAuxWithRef(r, kr, vr);
        return Belt_internalAVLtree.bal(l, kr.contents, vr.contents, r$1);
      }
      if (x < v) {
        if (l === void 0) {
          return n;
        }
        var ll = removeAux(l, x);
        if (ll === l) {
          return n;
        } else {
          return Belt_internalAVLtree.bal(ll, v, n.v, r);
        }
      }
      if (r === void 0) {
        return n;
      }
      var rr = removeAux(r, x);
      return Belt_internalAVLtree.bal(l, v, n.v, rr);
    }
    function remove(n, x) {
      if (n !== void 0) {
        return removeAux(n, x);
      }
    }
    function removeMany(t, keys) {
      var len = keys.length;
      if (t !== void 0) {
        var _t = t;
        var _i = 0;
        while (true) {
          var i = _i;
          var t$1 = _t;
          if (i >= len) {
            return t$1;
          }
          var ele = keys[i];
          var u = removeAux(t$1, ele);
          if (u === void 0) {
            return u;
          }
          _i = i + 1 | 0;
          _t = u;
          continue;
        }
        ;
      }
    }
    function mergeMany(h, arr) {
      var len = arr.length;
      var v = h;
      for (var i = 0; i < len; ++i) {
        var match = arr[i];
        v = set(v, match[0], match[1]);
      }
      return v;
    }
    var empty;
    var isEmpty = Belt_internalAVLtree.isEmpty;
    var has = Belt_internalMapInt.has;
    var cmpU = Belt_internalMapInt.cmpU;
    var cmp = Belt_internalMapInt.cmp;
    var eqU = Belt_internalMapInt.eqU;
    var eq = Belt_internalMapInt.eq;
    var findFirstByU = Belt_internalAVLtree.findFirstByU;
    var findFirstBy = Belt_internalAVLtree.findFirstBy;
    var forEachU = Belt_internalAVLtree.forEachU;
    var forEach = Belt_internalAVLtree.forEach;
    var reduceU = Belt_internalAVLtree.reduceU;
    var reduce = Belt_internalAVLtree.reduce;
    var everyU = Belt_internalAVLtree.everyU;
    var every = Belt_internalAVLtree.every;
    var someU = Belt_internalAVLtree.someU;
    var some = Belt_internalAVLtree.some;
    var size = Belt_internalAVLtree.size;
    var toList = Belt_internalAVLtree.toList;
    var toArray = Belt_internalAVLtree.toArray;
    var fromArray = Belt_internalMapInt.fromArray;
    var keysToArray = Belt_internalAVLtree.keysToArray;
    var valuesToArray = Belt_internalAVLtree.valuesToArray;
    var minKey = Belt_internalAVLtree.minKey;
    var minKeyUndefined = Belt_internalAVLtree.minKeyUndefined;
    var maxKey = Belt_internalAVLtree.maxKey;
    var maxKeyUndefined = Belt_internalAVLtree.maxKeyUndefined;
    var minimum = Belt_internalAVLtree.minimum;
    var minUndefined = Belt_internalAVLtree.minUndefined;
    var maximum = Belt_internalAVLtree.maximum;
    var maxUndefined = Belt_internalAVLtree.maxUndefined;
    var get = Belt_internalMapInt.get;
    var getUndefined = Belt_internalMapInt.getUndefined;
    var getWithDefault = Belt_internalMapInt.getWithDefault;
    var getExn = Belt_internalMapInt.getExn;
    var checkInvariantInternal = Belt_internalAVLtree.checkInvariantInternal;
    var mergeU = Belt_internalMapInt.mergeU;
    var merge = Belt_internalMapInt.merge;
    var keepU = Belt_internalAVLtree.keepSharedU;
    var keep = Belt_internalAVLtree.keepShared;
    var partitionU = Belt_internalAVLtree.partitionSharedU;
    var partition = Belt_internalAVLtree.partitionShared;
    var split = Belt_internalMapInt.split;
    var mapU = Belt_internalAVLtree.mapU;
    var map = Belt_internalAVLtree.map;
    var mapWithKeyU = Belt_internalAVLtree.mapWithKeyU;
    var mapWithKey = Belt_internalAVLtree.mapWithKey;
    exports2.empty = empty;
    exports2.isEmpty = isEmpty;
    exports2.has = has;
    exports2.cmpU = cmpU;
    exports2.cmp = cmp;
    exports2.eqU = eqU;
    exports2.eq = eq;
    exports2.findFirstByU = findFirstByU;
    exports2.findFirstBy = findFirstBy;
    exports2.forEachU = forEachU;
    exports2.forEach = forEach;
    exports2.reduceU = reduceU;
    exports2.reduce = reduce;
    exports2.everyU = everyU;
    exports2.every = every;
    exports2.someU = someU;
    exports2.some = some;
    exports2.size = size;
    exports2.toList = toList;
    exports2.toArray = toArray;
    exports2.fromArray = fromArray;
    exports2.keysToArray = keysToArray;
    exports2.valuesToArray = valuesToArray;
    exports2.minKey = minKey;
    exports2.minKeyUndefined = minKeyUndefined;
    exports2.maxKey = maxKey;
    exports2.maxKeyUndefined = maxKeyUndefined;
    exports2.minimum = minimum;
    exports2.minUndefined = minUndefined;
    exports2.maximum = maximum;
    exports2.maxUndefined = maxUndefined;
    exports2.get = get;
    exports2.getUndefined = getUndefined;
    exports2.getWithDefault = getWithDefault;
    exports2.getExn = getExn;
    exports2.checkInvariantInternal = checkInvariantInternal;
    exports2.remove = remove;
    exports2.removeMany = removeMany;
    exports2.set = set;
    exports2.updateU = updateU;
    exports2.update = update;
    exports2.mergeU = mergeU;
    exports2.merge = merge;
    exports2.mergeMany = mergeMany;
    exports2.keepU = keepU;
    exports2.keep = keep;
    exports2.partitionU = partitionU;
    exports2.partition = partition;
    exports2.split = split;
    exports2.mapU = mapU;
    exports2.map = map;
    exports2.mapWithKeyU = mapWithKeyU;
    exports2.mapWithKey = mapWithKey;
  }
});

// src/TileSolid.js
var require_TileSolid = __commonJS({
  "src/TileSolid.js"(exports2) {
    "use strict";
    var Belt_MapInt = require_belt_MapInt();
    var map = Belt_MapInt.fromArray([
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
      return Belt_MapInt.getWithDefault(map, tileType, false);
    }
    exports2.map = map;
    exports2.isSolid = isSolid;
  }
});

// src/TileFrameImportant.js
var require_TileFrameImportant = __commonJS({
  "src/TileFrameImportant.js"(exports2) {
    "use strict";
    var Belt_MapInt = require_belt_MapInt();
    var map = Belt_MapInt.fromArray([
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
        false
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
        559,
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
      ]
    ]);
    function isImportant(tileType) {
      return Belt_MapInt.getWithDefault(map, tileType, false);
    }
    exports2.map = map;
    exports2.isImportant = isImportant;
  }
});

// src/ErrorAwareBufferReader.js
var require_ErrorAwareBufferReader = __commonJS({
  "src/ErrorAwareBufferReader.js"(exports2) {
    "use strict";
    var Js_exn = require_js_exn();
    var Caml_exceptions = require_caml_exceptions();
    var Caml_js_exceptions = require_caml_js_exceptions();
    var ReadError = /* @__PURE__ */ Caml_exceptions.create("ErrorAwareBufferReader-TerrariaPacket.ReadError");
    function readByte(reader, context) {
      try {
        return reader.readByte();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readInt16(reader, context) {
      try {
        return reader.readInt16();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readInt32(reader, context) {
      try {
        return reader.readInt32();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readUInt64(reader, context) {
      try {
        return reader.readUInt64();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readString(reader, context) {
      try {
        return reader.readString();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readBytes(reader, count, context) {
      try {
        return reader.readBytes(count);
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readSingle(reader, context) {
      try {
        return reader.readSingle();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readSByte(reader, context) {
      try {
        return reader.readSByte();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readColor(reader, context) {
      try {
        return reader.readColor();
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function readBuffer(reader, bytes, context) {
      try {
        return reader.readBuffer(bytes);
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
          throw {
            RE_EXN_ID: ReadError,
            _1: {
              context,
              error: obj._1
            },
            Error: new Error()
          };
        }
        throw obj;
      }
    }
    function getBytesLeft(reader) {
      return reader.bytesLeft;
    }
    exports2.ReadError = ReadError;
    exports2.readByte = readByte;
    exports2.readInt16 = readInt16;
    exports2.readInt32 = readInt32;
    exports2.readUInt64 = readUInt64;
    exports2.readString = readString;
    exports2.readBytes = readBytes;
    exports2.readSingle = readSingle;
    exports2.readSByte = readSByte;
    exports2.readColor = readColor;
    exports2.readBuffer = readBuffer;
    exports2.getBytesLeft = getBytesLeft;
  }
});

// src/ErrorAwareBufferWriter.js
var require_ErrorAwareBufferWriter = __commonJS({
  "src/ErrorAwareBufferWriter.js"(exports2) {
    "use strict";
    var Js_exn = require_js_exn();
    var Caml_js_exceptions = require_caml_js_exceptions();
    var Bufferwriter = require_bufferwriter().default;
    function packSingle(self, value, context) {
      if (self.TAG !== "Writing") {
        return self;
      }
      try {
        var writer = self._0.packSingle(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packInt32(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packByte(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packInt16(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packUInt64(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packString(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packSByte(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packBytes(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packColor(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
        var writer = self._0.packBuffer(value);
        return {
          TAG: "Writing",
          _0: writer
        };
      } catch (raw_obj) {
        var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
        if (obj.RE_EXN_ID === Js_exn.$$Error) {
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
    function make(buffer) {
      return {
        TAG: "Writing",
        _0: new Bufferwriter(buffer)
      };
    }
    exports2.packSingle = packSingle;
    exports2.packInt32 = packInt32;
    exports2.packByte = packByte;
    exports2.packInt16 = packInt16;
    exports2.packUInt64 = packUInt64;
    exports2.packString = packString;
    exports2.packSByte = packSByte;
    exports2.packBytes = packBytes;
    exports2.packColor = packColor;
    exports2.packBuffer = packBuffer;
    exports2.data = data;
    exports2.make = make;
  }
});

// src/packet/Packet_TileSectionSend.js
var require_Packet_TileSectionSend = __commonJS({
  "src/packet/Packet_TileSectionSend.js"(exports2) {
    "use strict";
    var Caml_obj = require_caml_obj();
    var Nodezlib = require("node:zlib");
    var Belt_Array = require_belt_Array();
    var Belt_Option = require_belt_Option();
    var Belt_Result = require_belt_Result();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var ResultExt$TerrariaPacket = require_ResultExt();
    var TileSolid$TerrariaPacket = require_TileSolid();
    var PacketType$TerrariaPacket = require_PacketType();
    var TileFrameImportant$TerrariaPacket = require_TileFrameImportant();
    var ErrorAwareBufferReader$TerrariaPacket = require_ErrorAwareBufferReader();
    var ErrorAwareBufferWriter$TerrariaPacket = require_ErrorAwareBufferWriter();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Bufferreader = require_bufferreader().default;
    var Packetreader = require_packetreader().default;
    function defaultTileCache() {
      return {
        activeTile: void 0,
        color: void 0,
        wallColor: void 0,
        wall: void 0,
        liquid: void 0,
        lava: false,
        honey: false,
        wire: false,
        wire2: false,
        wire3: false,
        wire4: false,
        halfBrick: false,
        slope: void 0,
        actuator: false,
        inActive: false,
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
        wire: cache.wire,
        wire2: cache.wire2,
        wire3: cache.wire3,
        wire4: cache.wire4,
        halfBrick: cache.halfBrick,
        slope: cache.slope,
        actuator: cache.actuator,
        inActive: cache.inActive,
        coatHeader: cache.coatHeader
      };
    }
    function parse(reader) {
      var id = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "id");
      var x = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "x");
      var y = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "y");
      var name = ErrorAwareBufferReader$TerrariaPacket.readString(reader, "name");
      return {
        id,
        x,
        y,
        name
      };
    }
    function pack(writer, chest) {
      return ErrorAwareBufferWriter$TerrariaPacket.packString(ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packInt16(writer, chest.id, "id"), chest.x, "x"), chest.y, "y"), chest.name, "name");
    }
    var Chest = {
      readString: ErrorAwareBufferReader$TerrariaPacket.readString,
      readInt16: ErrorAwareBufferReader$TerrariaPacket.readInt16,
      parse,
      packInt16: ErrorAwareBufferWriter$TerrariaPacket.packInt16,
      packString: ErrorAwareBufferWriter$TerrariaPacket.packString,
      pack
    };
    function parse$1(reader) {
      var id = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "id");
      var x = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "x");
      var y = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "y");
      var name = ErrorAwareBufferReader$TerrariaPacket.readString(reader, "name");
      return {
        id,
        x,
        y,
        name
      };
    }
    function pack$1(writer, sign) {
      return ErrorAwareBufferWriter$TerrariaPacket.packString(ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packInt16(writer, sign.id, "id"), sign.x, "x"), sign.y, "y"), sign.name, "name");
    }
    var Sign = {
      readString: ErrorAwareBufferReader$TerrariaPacket.readString,
      readInt16: ErrorAwareBufferReader$TerrariaPacket.readInt16,
      parse: parse$1,
      packInt16: ErrorAwareBufferWriter$TerrariaPacket.packInt16,
      packString: ErrorAwareBufferWriter$TerrariaPacket.packString,
      pack: pack$1
    };
    function parseTrainingDummyKind(reader) {
      return {
        npcSlotId: ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "npcSlotId")
      };
    }
    function parseDisplayItem(reader) {
      var netId = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "netId");
      var prefix = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "prefix");
      var stack = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "stack");
      return {
        netId,
        prefix,
        stack
      };
    }
    function parseLogicSensorKind(reader) {
      var checkType = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "checkType");
      var on = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "on") === 1;
      return {
        checkType,
        on
      };
    }
    function parseDisplayDollKind(reader) {
      var itemsFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "itemsFlags"));
      var dyeFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "dyeFlags"));
      var items = [];
      var dyes = [];
      for (var i = 0; i <= 7; ++i) {
        if (BitFlags$TerrariaPacket.flagN(itemsFlags, i)) {
          items.push(parseDisplayItem(reader));
        } else {
          items.push(void 0);
        }
      }
      for (var i$1 = 0; i$1 <= 7; ++i$1) {
        if (BitFlags$TerrariaPacket.flagN(dyeFlags, i$1)) {
          dyes.push(parseDisplayItem(reader));
        } else {
          dyes.push(void 0);
        }
      }
      return {
        items,
        dyes
      };
    }
    function parseHatRackKind(reader) {
      var flags = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "flags"));
      var items = [];
      var dyes = [];
      for (var i = 0; i <= 1; ++i) {
        if (BitFlags$TerrariaPacket.flagN(flags, i)) {
          items.push(parseDisplayItem(reader));
        } else {
          items.push(void 0);
        }
      }
      for (var i$1 = 0; i$1 <= 1; ++i$1) {
        if (BitFlags$TerrariaPacket.flagN(flags, i$1 + 2 | 0)) {
          dyes.push(parseDisplayItem(reader));
        } else {
          dyes.push(void 0);
        }
      }
      return {
        items,
        dyes
      };
    }
    function parse$2(reader) {
      var entityType = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "entityType");
      var x = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "x");
      var y = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "y");
      var entityKind;
      switch (entityType) {
        case 0:
          entityKind = {
            TAG: "Ok",
            _0: {
              TAG: "TrainingDummy",
              _0: parseTrainingDummyKind(reader)
            }
          };
          break;
        case 1:
          entityKind = {
            TAG: "Ok",
            _0: {
              TAG: "ItemFrame",
              _0: parseDisplayItem(reader)
            }
          };
          break;
        case 2:
          entityKind = {
            TAG: "Ok",
            _0: {
              TAG: "LogicSensor",
              _0: parseLogicSensorKind(reader)
            }
          };
          break;
        case 3:
          entityKind = {
            TAG: "Ok",
            _0: {
              TAG: "DisplayDoll",
              _0: parseDisplayDollKind(reader)
            }
          };
          break;
        case 4:
          entityKind = {
            TAG: "Ok",
            _0: {
              TAG: "WeaponsRack",
              _0: parseDisplayItem(reader)
            }
          };
          break;
        case 5:
          entityKind = {
            TAG: "Ok",
            _0: {
              TAG: "HatRack",
              _0: parseHatRackKind(reader)
            }
          };
          break;
        case 6:
          entityKind = {
            TAG: "Ok",
            _0: {
              TAG: "FoodPlatter",
              _0: parseDisplayItem(reader)
            }
          };
          break;
        case 7:
          entityKind = {
            TAG: "Ok",
            _0: {
              TAG: "TeleportationPylon",
              _0: void 0
            }
          };
          break;
        default:
          entityKind = {
            TAG: "Error",
            _0: 'File "Packet_TileSectionSend.res", line 317, characters 17-24Unknown entity kind. '
          };
      }
      return Belt_Result.map(entityKind, function(entityKind2) {
        return {
          entityType,
          x,
          y,
          entityKind: entityKind2
        };
      });
    }
    function packTrainingDummy(writer, trainingDummy) {
      return ErrorAwareBufferWriter$TerrariaPacket.packInt16(writer, trainingDummy.npcSlotId, "npcSlotId");
    }
    function packDisplayItem(writer, displayItem) {
      return ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packByte(ErrorAwareBufferWriter$TerrariaPacket.packInt16(writer, displayItem.netId, "netId"), displayItem.prefix, "prefix"), displayItem.stack, "stack");
    }
    function packLogicSensor(writer, logicSensorKind) {
      return ErrorAwareBufferWriter$TerrariaPacket.packByte(ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, logicSensorKind.checkType, "checkType"), logicSensorKind.on ? 1 : 0, "on");
    }
    function hasItem(arr, n) {
      return Belt_Option.isSome(Belt_Option.flatMap(Belt_Array.get(arr, n), function(a) {
        return a;
      }));
    }
    function packDisplayDoll(writer, displayDollKind) {
      var itemFlags = BitFlags$TerrariaPacket.fromFlags(hasItem(displayDollKind.items, 0), hasItem(displayDollKind.items, 1), hasItem(displayDollKind.items, 2), hasItem(displayDollKind.items, 3), hasItem(displayDollKind.items, 4), hasItem(displayDollKind.items, 5), hasItem(displayDollKind.items, 6), hasItem(displayDollKind.items, 7));
      var dyeFlags = BitFlags$TerrariaPacket.fromFlags(hasItem(displayDollKind.dyes, 0), hasItem(displayDollKind.dyes, 1), hasItem(displayDollKind.dyes, 2), hasItem(displayDollKind.dyes, 3), hasItem(displayDollKind.dyes, 4), hasItem(displayDollKind.dyes, 5), hasItem(displayDollKind.dyes, 6), hasItem(displayDollKind.dyes, 7));
      ErrorAwareBufferWriter$TerrariaPacket.packByte(ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(itemFlags), "itemFlags"), BitFlags$TerrariaPacket.toByte(dyeFlags), "dyeFlags");
      for (var i = 0; i <= 7; ++i) {
        var item = Belt_Option.flatMap(Belt_Array.get(displayDollKind.items, i), function(a) {
          return a;
        });
        if (item !== void 0) {
          packDisplayItem(writer, item);
        }
      }
      for (var i$1 = 0; i$1 <= 7; ++i$1) {
        var item$1 = Belt_Option.flatMap(Belt_Array.get(displayDollKind.dyes, i$1), function(a) {
          return a;
        });
        if (item$1 !== void 0) {
          packDisplayItem(writer, item$1);
        }
      }
      return writer;
    }
    function packHatRack(writer, hatRackKind) {
      var flags = BitFlags$TerrariaPacket.fromFlags(hasItem(hatRackKind.items, 0), hasItem(hatRackKind.items, 1), hasItem(hatRackKind.dyes, 2), hasItem(hatRackKind.dyes, 3), false, false, false, false);
      ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(flags), "flags");
      for (var i = 0; i <= 1; ++i) {
        var item = Belt_Option.flatMap(Belt_Array.get(hatRackKind.items, i), function(a) {
          return a;
        });
        if (item !== void 0) {
          packDisplayItem(writer, item);
        }
      }
      for (var i$1 = 0; i$1 <= 1; ++i$1) {
        var item$1 = Belt_Option.flatMap(Belt_Array.get(hatRackKind.dyes, i$1), function(a) {
          return a;
        });
        if (item$1 !== void 0) {
          packDisplayItem(writer, item$1);
        }
      }
      return writer;
    }
    function packTeleportationPylon(writer, _teleportationPylonKind) {
      return writer;
    }
    function packEntityKind(writer, entityKind) {
      switch (entityKind.TAG) {
        case "DisplayDoll":
          return packDisplayDoll(writer, entityKind._0);
        case "HatRack":
          return packHatRack(writer, entityKind._0);
        case "LogicSensor":
          return packLogicSensor(writer, entityKind._0);
        case "TeleportationPylon":
          return writer;
        case "TrainingDummy":
          return packTrainingDummy(writer, entityKind._0);
        case "FoodPlatter":
        case "ItemFrame":
        case "WeaponsRack":
          return packDisplayItem(writer, entityKind._0);
      }
    }
    function pack$2(writer, entity) {
      return packEntityKind(ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, entity.entityType, "entityType"), entity.x, "x"), entity.y, "y"), entity.entityKind);
    }
    var Entity = {
      readInt16: ErrorAwareBufferReader$TerrariaPacket.readInt16,
      readByte: ErrorAwareBufferReader$TerrariaPacket.readByte,
      parseTrainingDummyKind,
      parseDisplayItem,
      parseItemFrameKind: parseDisplayItem,
      parseLogicSensorKind,
      parseDisplayDollKind,
      parseWeaponsRackKind: parseDisplayItem,
      parseHatRackKind,
      parseFoodPlatterKind: parseDisplayItem,
      parse: parse$2,
      packByte: ErrorAwareBufferWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwareBufferWriter$TerrariaPacket.packInt16,
      packTrainingDummy,
      packDisplayItem,
      packItemFrame: packDisplayItem,
      packLogicSensor,
      hasItem,
      packDisplayDoll,
      packWeaponsRack: packDisplayItem,
      packHatRack,
      packFoodPlatter: packDisplayItem,
      packTeleportationPylon,
      packEntityKind,
      pack: pack$2
    };
    var isTheSameAs = Caml_obj.equal;
    function clearTileCache(tile) {
      tile.activeTile = void 0;
      tile.color = void 0;
      tile.wallColor = void 0;
      tile.wall = void 0;
      tile.liquid = void 0;
      tile.lava = false;
      tile.honey = false;
      tile.wire = false;
      tile.wire2 = false;
      tile.wire3 = false;
      tile.wire4 = false;
      tile.halfBrick = false;
      tile.slope = void 0;
      tile.actuator = false;
      tile.inActive = false;
    }
    function parse$3(payload) {
      var packetReader = new Packetreader(payload);
      var deflated = ErrorAwarePacketReader$TerrariaPacket.readBuffer(packetReader, ErrorAwarePacketReader$TerrariaPacket.getBytesLeft(packetReader), "deflatedPayload");
      var reader = new Bufferreader(Nodezlib.inflateRawSync(deflated));
      var tileX = ErrorAwareBufferReader$TerrariaPacket.readInt32(reader, "tileX");
      var tileY = ErrorAwareBufferReader$TerrariaPacket.readInt32(reader, "tileY");
      var width = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "width");
      var height = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "height");
      var tiles = [];
      var tileCache = defaultTileCache();
      var rleCount = 0;
      if (height < 0 || width < 0) {
        return;
      }
      for (var _y = 0; _y < height; ++_y) {
        var row = [];
        for (var _x = 0; _x < width; ++_x) {
          if (rleCount !== 0) {
            rleCount = rleCount - 1 | 0;
            row.push(cacheToTile(tileCache));
          } else {
            clearTileCache(tileCache);
            var header5 = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header5"));
            var match;
            if (BitFlags$TerrariaPacket.flag1(header5)) {
              var header4 = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header4_conditional"));
              var header3 = BitFlags$TerrariaPacket.flag1(header4) ? BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header3_conditional")) : BitFlags$TerrariaPacket.fromByte(0);
              var header2 = BitFlags$TerrariaPacket.flag1(header3) ? ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header2_conditional") : 0;
              match = [
                header4,
                header3,
                header2
              ];
            } else {
              match = [
                BitFlags$TerrariaPacket.fromByte(0),
                BitFlags$TerrariaPacket.fromByte(0),
                0
              ];
            }
            var header3$1 = match[1];
            var header4$1 = match[0];
            tileCache.coatHeader = match[2];
            var oldActive = tileCache.activeTile;
            if (BitFlags$TerrariaPacket.flag2(header5)) {
              var oldType = Belt_Option.mapWithDefault(tileCache.activeTile, 0, function(active) {
                return active.tileType;
              });
              var tileType;
              if (BitFlags$TerrariaPacket.flag6(header5)) {
                var $$byte = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "tileType_byte1");
                var secondByte = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "tileType_byte2");
                tileType = secondByte << 8 | $$byte;
              } else {
                tileType = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "tileType");
              }
              var frame;
              if (TileFrameImportant$TerrariaPacket.isImportant(tileType)) {
                var x = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "frameX");
                var y = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "frameY");
                frame = {
                  x,
                  y
                };
              } else {
                frame = Belt_Option.isSome(oldActive) && tileType === oldType ? oldActive.frame : void 0;
              }
              if (BitFlags$TerrariaPacket.flag4(header3$1)) {
                tileCache.color = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "color");
              }
              tileCache.activeTile = {
                tileType,
                frame
              };
            }
            if (BitFlags$TerrariaPacket.flag3(header5)) {
              tileCache.wall = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "wall");
              if (BitFlags$TerrariaPacket.flag5(header3$1)) {
                tileCache.wallColor = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "wallColor");
              }
            }
            var liquidBits = (BitFlags$TerrariaPacket.toByte(header5) & 24) >>> 3;
            if (liquidBits !== 0) {
              tileCache.liquid = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "liquidValue");
              if (liquidBits > 1) {
                if (liquidBits === 2) {
                  tileCache.lava = true;
                } else {
                  tileCache.honey = true;
                }
              }
            }
            if (BitFlags$TerrariaPacket.toByte(header4$1) > 1) {
              if (BitFlags$TerrariaPacket.flag2(header4$1)) {
                tileCache.wire = true;
              }
              if (BitFlags$TerrariaPacket.flag3(header4$1)) {
                tileCache.wire2 = true;
              }
              if (BitFlags$TerrariaPacket.flag4(header4$1)) {
                tileCache.wire3 = true;
              }
              var slopeBits = (BitFlags$TerrariaPacket.toByte(header4$1) & 112) >>> 4;
              if (slopeBits !== 0 && TileSolid$TerrariaPacket.isSolid(Belt_Option.mapWithDefault(tileCache.activeTile, 0, function(tile) {
                return tile.tileType;
              }))) {
                if (slopeBits === 1) {
                  tileCache.halfBrick = true;
                } else {
                  tileCache.slope = slopeBits - 1 | 0;
                }
              }
            }
            if (BitFlags$TerrariaPacket.toByte(header3$1) > 0) {
              if (BitFlags$TerrariaPacket.flag2(header3$1)) {
                tileCache.actuator = true;
              }
              if (BitFlags$TerrariaPacket.flag3(header3$1)) {
                tileCache.inActive = true;
              }
              if (BitFlags$TerrariaPacket.flag6(header3$1)) {
                tileCache.wire4 = true;
              }
              if (BitFlags$TerrariaPacket.flag7(header3$1)) {
                var $$byte$1 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "wall_highByte");
                tileCache.wall = $$byte$1 << 8 | tileCache.wall;
              }
            }
            var repeatCountBytes = (BitFlags$TerrariaPacket.toByte(header5) & 192) >>> 6;
            rleCount = repeatCountBytes !== 0 ? repeatCountBytes !== 1 ? ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "rle_int16") : ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "rle_byte") : 0;
            row.push(cacheToTile(tileCache));
          }
        }
        tiles.push(row);
      }
      var chestCount = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "chestCount");
      var chests = Belt_Array.make(chestCount, 0).map(function(param) {
        return parse(reader);
      });
      var signCount = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "signCount");
      var signs = Belt_Array.make(signCount, 0).map(function(param) {
        return parse$1(reader);
      });
      var entityCount = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "entityCount");
      var entities = ResultExt$TerrariaPacket.allOkOrError(Belt_Array.make(entityCount, 0).map(function(param) {
        return parse$2(reader);
      }));
      if (entities.TAG === "Ok") {
        return {
          height,
          width,
          tileX,
          tileY,
          tiles,
          chests,
          signs,
          entities: entities._0
        };
      }
    }
    var Decode = {
      clearTileCache,
      PacketReader: void 0,
      readBuffer: ErrorAwarePacketReader$TerrariaPacket.readBuffer,
      getBytesLeft: ErrorAwarePacketReader$TerrariaPacket.getBytesLeft,
      readInt16: ErrorAwareBufferReader$TerrariaPacket.readInt16,
      readInt32: ErrorAwareBufferReader$TerrariaPacket.readInt32,
      readByte: ErrorAwareBufferReader$TerrariaPacket.readByte,
      parse: parse$3
    };
    function getLiquidBitFlags(tile) {
      var liquidBits = tile.honey ? "Three" : tile.lava ? "Two" : Belt_Option.isSome(tile.liquid) ? "One" : "Zero";
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
      var match = tile.slope;
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
      var repeatCountBytes = getRepeatCountByteLength(repeatCount);
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
    function packTile(writer, tile, repeatCount) {
      var header2 = tile.coatHeader;
      var wall = tile.wall;
      var header3 = BitFlags$TerrariaPacket.fromFlags(header2 > 0, tile.actuator, tile.inActive, Belt_Option.isSome(tile.color), Belt_Option.isSome(tile.wall) && Belt_Option.isSome(tile.wallColor), tile.wire4, wall !== void 0 ? wall > 255 : false, false);
      var match = getSlopeBitFlags(tile);
      var header4 = BitFlags$TerrariaPacket.fromFlags(BitFlags$TerrariaPacket.toByte(header3) > 0, tile.wire, tile.wire2, tile.wire3, match[2], match[1], match[0], false);
      var match$1 = getLiquidBitFlags(tile);
      var match$2 = getRepeatCountBitFlags(repeatCount);
      var activeTile = tile.activeTile;
      var tileFlags = BitFlags$TerrariaPacket.fromFlags(BitFlags$TerrariaPacket.toByte(header4) > 0, Belt_Option.isSome(tile.activeTile), Belt_Option.isSome(tile.wall), match$1[1], match$1[0], activeTile !== void 0 ? activeTile.tileType > 255 : false, match$2[1], match$2[0]);
      ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(tileFlags), "tileFlags");
      if (BitFlags$TerrariaPacket.flag1(tileFlags)) {
        ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(header4), "header4");
        if (BitFlags$TerrariaPacket.flag1(header4)) {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(header3), "header3");
          if (BitFlags$TerrariaPacket.flag1(header3)) {
            ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, header2, "header2");
          }
        }
      }
      var activeTile$1 = tile.activeTile;
      if (activeTile$1 !== void 0) {
        if (BitFlags$TerrariaPacket.flag6(tileFlags)) {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, activeTile$1.tileType & 255, "tileType_lowByte");
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, (activeTile$1.tileType & 65280) >>> 8, "tileType_highByte");
        } else {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, activeTile$1.tileType, "tileType");
        }
        var match$3 = activeTile$1.frame;
        if (match$3 !== void 0) {
          ErrorAwareBufferWriter$TerrariaPacket.packInt16(writer, match$3.x, "frameX");
          ErrorAwareBufferWriter$TerrariaPacket.packInt16(writer, match$3.y, "frameY");
        }
        var color = tile.color;
        if (color !== void 0) {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, color, "color");
        }
      }
      var wall$1 = tile.wall;
      if (wall$1 !== void 0) {
        ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, wall$1 & 255, "wall_lowByte");
        var wallColor = tile.wallColor;
        if (wallColor !== void 0) {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, wallColor, "wallColor");
        }
      }
      var liquid = tile.liquid;
      if (liquid !== void 0) {
        ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, liquid, "liquidValue");
      }
      var wall$2 = tile.wall;
      if (wall$2 !== void 0 && wall$2 > 255) {
        ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, wall$2 >>> 8, "wall_highByte");
      }
      var match$4 = getRepeatCountByteLength(repeatCount);
      if (match$4 !== 0) {
        if (match$4 !== 1) {
          ErrorAwareBufferWriter$TerrariaPacket.packInt16(writer, repeatCount, "rle_int16");
        } else {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, repeatCount, "rle_byte");
        }
      }
      return writer;
    }
    function decidePackTile(writer, lastTile, tile) {
      var last = lastTile.contents;
      if (last !== void 0) {
        if (Caml_obj.equal(tile, last.tile)) {
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
    function toBuffer(self) {
      var outerPacketWriter = ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileSectionSend"));
      var innerWriter = ErrorAwareBufferWriter$TerrariaPacket.make(Buffer.allocUnsafe(64e3));
      ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packInt32(ErrorAwareBufferWriter$TerrariaPacket.packInt32(innerWriter, self.tileX, "tileX"), self.tileY, "tileY"), self.width, "width"), self.height, "height");
      var lastTile = {
        contents: void 0
      };
      for (var y = 0, y_finish = self.height; y < y_finish; ++y) {
        for (var x = 0, x_finish = self.width; x < x_finish; ++x) {
          var tile = self.tiles[y][x];
          decidePackTile(innerWriter, lastTile, tile);
        }
      }
      var lastTileValue = lastTile.contents;
      if (lastTileValue !== void 0) {
        packTile(innerWriter, lastTileValue.tile, lastTileValue.count);
      }
      ErrorAwareBufferWriter$TerrariaPacket.packInt16(innerWriter, self.chests.length, "chestCount");
      self.chests.forEach(function(chest) {
        pack(innerWriter, chest);
      });
      ErrorAwareBufferWriter$TerrariaPacket.packInt16(innerWriter, self.signs.length, "signCount");
      self.signs.forEach(function(sign) {
        pack$1(innerWriter, sign);
      });
      ErrorAwareBufferWriter$TerrariaPacket.packInt16(innerWriter, self.entities.length, "entityCount");
      self.entities.forEach(function(entity) {
        pack$2(innerWriter, entity);
      });
      var innerBuffer = ErrorAwareBufferWriter$TerrariaPacket.data(innerWriter);
      if (innerBuffer.TAG === "Ok") {
        var deflatedPayload = Nodezlib.deflateRawSync(innerBuffer._0);
        return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packBuffer(outerPacketWriter, deflatedPayload, "deflatedPayload"));
      }
      var e = innerBuffer._0;
      return {
        TAG: "Error",
        _0: {
          context: "innerWriter; " + e.context,
          error: e.error
        }
      };
    }
    var Encode = {
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      packBuffer: ErrorAwarePacketWriter$TerrariaPacket.packBuffer,
      packByte: ErrorAwareBufferWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwareBufferWriter$TerrariaPacket.packInt16,
      packInt32: ErrorAwareBufferWriter$TerrariaPacket.packInt32,
      data: ErrorAwareBufferWriter$TerrariaPacket.data,
      getLiquidBitFlags,
      getSlopeBitFlags,
      getRepeatCountByteLength,
      getRepeatCountBitFlags,
      packTile,
      decidePackTile,
      toBuffer
    };
    var Int;
    var $$Option;
    exports2.Int = Int;
    exports2.$$Option = $$Option;
    exports2.defaultTileCache = defaultTileCache;
    exports2.cacheToTile = cacheToTile;
    exports2.Chest = Chest;
    exports2.Sign = Sign;
    exports2.Entity = Entity;
    exports2.isTheSameAs = isTheSameAs;
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse$3;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TileSquareSend.js
var require_Packet_TileSquareSend = __commonJS({
  "src/packet/Packet_TileSquareSend.js"(exports2) {
    "use strict";
    var Belt_Option = require_belt_Option();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var TileFrameImportant$TerrariaPacket = require_TileFrameImportant();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var tileX = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "tileX");
      var tileY = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "tileY");
      var width = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "width");
      var height = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "height");
      var changeType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "changeType");
      var tiles = [];
      for (var _x = 0; _x < width; ++_x) {
        var column = [];
        for (var _y = 0; _y < height; ++_y) {
          var flags1 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags1"));
          var flags2 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags2"));
          var flags3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags3");
          var active = BitFlags$TerrariaPacket.flag1(flags1);
          var hasWall = BitFlags$TerrariaPacket.flag3(flags1);
          var hasLiquid = BitFlags$TerrariaPacket.flag4(flags1);
          var wire = BitFlags$TerrariaPacket.flag5(flags1);
          var halfBrick = BitFlags$TerrariaPacket.flag6(flags1);
          var actuator = BitFlags$TerrariaPacket.flag7(flags1);
          var inActive = BitFlags$TerrariaPacket.flag8(flags1);
          var wire2 = BitFlags$TerrariaPacket.flag1(flags2);
          var wire3 = BitFlags$TerrariaPacket.flag2(flags2);
          var color = BitFlags$TerrariaPacket.flag3(flags2) ? ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "color") : void 0;
          var wallColor = BitFlags$TerrariaPacket.flag4(flags2) ? ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "wallColor") : void 0;
          var activeTile;
          if (active) {
            var tileType = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "tileType");
            var frame = TileFrameImportant$TerrariaPacket.isImportant(tileType) ? {
              x: ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "frameX"),
              y: ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "frameY")
            } : void 0;
            var slope = ((0 + (BitFlags$TerrariaPacket.flag5(flags2) ? 1 : 0) | 0) + (BitFlags$TerrariaPacket.flag6(flags2) ? 2 : 0) | 0) + (BitFlags$TerrariaPacket.flag7(flags2) ? 4 : 0) | 0;
            activeTile = {
              tileType,
              slope,
              frame
            };
          } else {
            activeTile = void 0;
          }
          var wall = hasWall ? ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "wall") : void 0;
          var liquid = hasLiquid ? {
            liquidValue: ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidValue"),
            liquidType: ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidType")
          } : void 0;
          var wire4 = BitFlags$TerrariaPacket.flag8(flags2);
          column.push({
            wire,
            halfBrick,
            actuator,
            inActive,
            wire2,
            wire3,
            wire4,
            color,
            wallColor,
            activeTile,
            wall,
            liquid,
            coatHeader: flags3
          });
        }
        tiles.push(column);
      }
      return {
        width,
        height,
        changeType,
        tileX,
        tileY,
        tiles
      };
    }
    function packTile(writer, tile) {
      var flags1 = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(tile.activeTile), false, Belt_Option.isSome(tile.wall), Belt_Option.isSome(tile.liquid), tile.wire, tile.halfBrick, tile.actuator, tile.inActive);
      var flags2 = BitFlags$TerrariaPacket.fromFlags(tile.wire2, tile.wire3, Belt_Option.isSome(tile.color), Belt_Option.isSome(tile.wallColor), Belt_Option.mapWithDefault(tile.activeTile, false, function(tile2) {
        return (tile2.slope & 1) === 1;
      }), Belt_Option.mapWithDefault(tile.activeTile, false, function(tile2) {
        return (tile2.slope & 2) === 2;
      }), Belt_Option.mapWithDefault(tile.activeTile, false, function(tile2) {
        return (tile2.slope & 4) === 4;
      }), tile.wire4);
      ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(flags1), "flags1"), BitFlags$TerrariaPacket.toByte(flags2), "flags2"), tile.coatHeader, "coatHeader");
      var c = tile.color;
      if (c !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, c, "color");
      }
      var wc = tile.wallColor;
      if (wc !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, wc, "wallColor");
      }
      var at = tile.activeTile;
      if (at !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, at.tileType, "tileType");
        if (TileFrameImportant$TerrariaPacket.isImportant(at.tileType)) {
          ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, Belt_Option.mapWithDefault(at.frame, 0, function(frame) {
            return frame.x;
          }), "frameX"), Belt_Option.mapWithDefault(at.frame, 0, function(frame) {
            return frame.y;
          }), "frameY");
        }
      }
      var w = tile.wall;
      if (w !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, w, "wall");
      }
      var l = tile.liquid;
      if (l !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, l.liquidValue, "liquidValue"), l.liquidType, "liquidType");
      }
      return writer;
    }
    function packTiles(writer, tiles) {
      for (var x = 0, x_finish = tiles.length; x < x_finish; ++x) {
        for (var y = 0, y_finish = tiles[x].length; y < y_finish; ++y) {
          packTile(writer, tiles[x][y]);
        }
      }
      return writer;
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(packTiles(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileSquareSend")), self.tileX, "tileX"), self.tileY, "tileY"), self.width, "width"), self.height, "height"), self.changeType, "changeType"), self.tiles));
    }
    var Decode = {
      parse
    };
    var Encode = {
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TimeSet.js
var require_Packet_TimeSet = __commonJS({
  "src/packet/Packet_TimeSet.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_TravellingMerchantInventory.js
var require_Packet_TravellingMerchantInventory = __commonJS({
  "src/packet/Packet_TravellingMerchantInventory.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var items = [];
      for (var _for = 1; _for <= 40; ++_for) {
        items.push(reader.readInt16());
      }
      return {
        items
      };
    }
    var Decode = {
      readInt16,
      parse
    };
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      var writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TravellingMerchantInventory"));
      self.items.forEach(function(item) {
        writer.packInt16(item);
      });
      return writer.data;
    }
    var Encode = {
      Writer: void 0,
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TreeGrowFx.js
var require_Packet_TreeGrowFx = __commonJS({
  "src/packet/Packet_TreeGrowFx.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_Unused.js
var require_Packet_Unused = __commonJS({
  "src/packet/Packet_Unused.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_WallPaint.js
var require_Packet_WallPaint = __commonJS({
  "src/packet/Packet_WallPaint.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var x = reader.readInt16();
      var y = reader.readInt16();
      var color = reader.readByte();
      var coat = reader.readByte();
      return {
        x,
        y,
        color,
        coat
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("WallPaint")).packInt16(self.x).packInt16(self.y).packByte(self.color).packByte(self.coat).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_WeaponsRackTryPlacing.js
var require_Packet_WeaponsRackTryPlacing = __commonJS({
  "src/packet/Packet_WeaponsRackTryPlacing.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var x = reader.readInt16();
      var y = reader.readInt16();
      var itemId = reader.readInt16();
      var prefix = reader.readByte();
      var stack = reader.readInt16();
      return {
        x,
        y,
        itemId,
        prefix,
        stack
      };
    }
    var Decode = {
      readByte,
      readInt16,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("WeaponsRackTryPlacing")).packInt16(self.x).packInt16(self.y).packInt16(self.itemId).packInt16(self.prefix).packInt16(self.stack).data;
    }
    var Encode = {
      Writer: void 0,
      packByte,
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_WiredCannonShot.js
var require_Packet_WiredCannonShot = __commonJS({
  "src/packet/Packet_WiredCannonShot.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_WorldDataRequest.js
var require_Packet_WorldDataRequest = __commonJS({
  "src/packet/Packet_WorldDataRequest.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetwriter = require_packetwriter().default;
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    var Decode = {
      parse
    };
    function data(prim) {
      return prim.data;
    }
    function toBuffer(_self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("WorldDataRequest")).data;
    }
    var Encode = {
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_Zones.js
var require_Packet_Zones = __commonJS({
  "src/packet/Packet_Zones.js"(exports2) {
    "use strict";
    var Caml_option = require_caml_option();
    function parse(_payload) {
      return Caml_option.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/Array16.js
var require_Array16 = __commonJS({
  "src/Array16.js"(exports2) {
    "use strict";
    function fromArray(a) {
      if (a.length === 16) {
        return a;
      }
    }
    function asArray(self) {
      return self;
    }
    exports2.fromArray = fromArray;
    exports2.asArray = asArray;
  }
});

// src/packet/Packet_PlayerSlotSet.js
var require_Packet_PlayerSlotSet = __commonJS({
  "src/packet/Packet_PlayerSlotSet.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      return reader.readByte();
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerSlotSet")).packByte(self).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerUpdate.js
var require_Packet_PlayerUpdate = __commonJS({
  "src/packet/Packet_PlayerUpdate.js"(exports2) {
    "use strict";
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      var controlFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "controlFlags"));
      var miscFlags1 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "miscFlags1"));
      var miscFlags2 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "miscFlags2"));
      var miscFlags3 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "miscFlags3"));
      var control_isHoldingUp = BitFlags$TerrariaPacket.flag1(controlFlags);
      var control_isHoldingDown = BitFlags$TerrariaPacket.flag2(controlFlags);
      var control_isHoldingLeft = BitFlags$TerrariaPacket.flag3(controlFlags);
      var control_isHoldingRight = BitFlags$TerrariaPacket.flag4(controlFlags);
      var control_isHoldingJump = BitFlags$TerrariaPacket.flag5(controlFlags);
      var control_isHoldingItemUse = BitFlags$TerrariaPacket.flag6(controlFlags);
      var control = {
        isHoldingUp: control_isHoldingUp,
        isHoldingDown: control_isHoldingDown,
        isHoldingLeft: control_isHoldingLeft,
        isHoldingRight: control_isHoldingRight,
        isHoldingJump: control_isHoldingJump,
        isHoldingItemUse: control_isHoldingItemUse
      };
      var direction = BitFlags$TerrariaPacket.flag7(controlFlags) ? "Right" : "Left";
      var pulleyDirection = BitFlags$TerrariaPacket.flag1(miscFlags1) ? BitFlags$TerrariaPacket.flag2(miscFlags1) ? "Two" : "One" : void 0;
      var vortexStealthActive = BitFlags$TerrariaPacket.flag4(miscFlags1);
      var gravityDirection = BitFlags$TerrariaPacket.flag5(miscFlags1) ? "Normal" : "Inverted";
      var shouldGuard = BitFlags$TerrariaPacket.flag6(miscFlags1);
      var ghost = BitFlags$TerrariaPacket.flag7(miscFlags1);
      var selectedItem = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "selectedItem");
      var position_x = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionX");
      var position_y = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionY");
      var position = {
        x: position_x,
        y: position_y
      };
      var velocity = BitFlags$TerrariaPacket.flag3(miscFlags1) ? {
        x: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityX"),
        y: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityY")
      } : void 0;
      var potionOfReturn = BitFlags$TerrariaPacket.flag7(miscFlags2) ? {
        originalUsePosition: {
          x: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnOrigX"),
          y: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnOrigY")
        },
        homePosition: {
          x: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnHomeX"),
          y: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnHomeY")
        }
      } : void 0;
      var tryKeepingHoveringUp = BitFlags$TerrariaPacket.flag1(miscFlags2);
      var isVoidVaultEnabled = BitFlags$TerrariaPacket.flag2(miscFlags2);
      var isSitting = BitFlags$TerrariaPacket.flag3(miscFlags2);
      var hasFinishedAnyDd2Event = BitFlags$TerrariaPacket.flag4(miscFlags2);
      var isPettingAnimal = BitFlags$TerrariaPacket.flag5(miscFlags2);
      var isTheAnimalBeingPetSmall = BitFlags$TerrariaPacket.flag6(miscFlags2);
      var tryKeepingHoveringDown = BitFlags$TerrariaPacket.flag8(miscFlags2);
      var isSleeping = BitFlags$TerrariaPacket.flag1(miscFlags3);
      return {
        playerId,
        control,
        direction,
        pulleyDirection,
        vortexStealthActive,
        gravityDirection,
        shouldGuard,
        ghost,
        selectedItem,
        position,
        velocity,
        potionOfReturn,
        tryKeepingHoveringUp,
        isVoidVaultEnabled,
        isSitting,
        hasFinishedAnyDd2Event,
        isPettingAnimal,
        isTheAnimalBeingPetSmall,
        tryKeepingHoveringDown,
        isSleeping
      };
    }
    function packControlFlags(writer, control, direction) {
      var tmp;
      tmp = direction === "Left" ? false : true;
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(control.isHoldingUp, control.isHoldingDown, control.isHoldingLeft, control.isHoldingRight, control.isHoldingJump, control.isHoldingItemUse, tmp, false)), "controlFlags");
    }
    function packMiscFlags1(writer, pulleyDirection, velocity, vortexStealthActive, gravityDirection, shouldGuard, ghost) {
      var tmp;
      tmp = pulleyDirection !== void 0 && pulleyDirection !== "One" ? true : false;
      var tmp$1;
      tmp$1 = gravityDirection === "Normal" ? true : false;
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(pulleyDirection !== void 0, tmp, velocity !== void 0, vortexStealthActive, tmp$1, shouldGuard, ghost, false)), "miscFlags1");
    }
    function packMiscFlags2(writer, tryKeepingHoveringUp, isVoidVaultEnabled, isSitting, hasFinishedAnyDd2Event, isPettingAnimal, isTheAnimalBeingPetSmall, potionOfReturn, tryKeepingHoveringDown) {
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(tryKeepingHoveringUp, isVoidVaultEnabled, isSitting, hasFinishedAnyDd2Event, isPettingAnimal, isTheAnimalBeingPetSmall, potionOfReturn !== void 0, tryKeepingHoveringDown)), "miscFlags2");
    }
    function packMiscFlags3(writer, isSleeping) {
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(isSleeping, false, false, false, false, false, false, false)), "miscFlags3");
    }
    function packVelocity(writer, velocity) {
      if (velocity !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, velocity.x, "velocityX"), velocity.y, "velocityY");
      } else {
        return writer;
      }
    }
    function packPotionOfReturn(writer, potionOfReturn) {
      if (potionOfReturn !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, potionOfReturn.originalUsePosition.x, "potionOfReturnOrigX"), potionOfReturn.originalUsePosition.y, "potionOfReturnOrigY"), potionOfReturn.homePosition.x, "potionOfReturnHomeX"), potionOfReturn.homePosition.y, "potionOfReturnHomeY");
      } else {
        return writer;
      }
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(packPotionOfReturn(packVelocity(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(packMiscFlags3(packMiscFlags2(packMiscFlags1(packControlFlags(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerUpdate")), self.playerId, "playerId"), self.control, self.direction), self.pulleyDirection, self.velocity, self.vortexStealthActive, self.gravityDirection, self.shouldGuard, self.ghost), self.tryKeepingHoveringUp, self.isVoidVaultEnabled, self.isSitting, self.hasFinishedAnyDd2Event, self.isPettingAnimal, self.isTheAnimalBeingPetSmall, self.potionOfReturn, self.tryKeepingHoveringDown), self.isSleeping), self.selectedItem, "selectedItem"), self.position.x, "positionX"), self.position.y, "positionY"), self.velocity), self.potionOfReturn));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerInfo.js
var require_Packet_PlayerInfo = __commonJS({
  "src/packet/Packet_PlayerInfo.js"(exports2) {
    "use strict";
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function getDifficulty(difficultyFlags) {
      if (BitFlags$TerrariaPacket.flag2(difficultyFlags)) {
        return "Hardcore";
      } else if (BitFlags$TerrariaPacket.flag1(difficultyFlags)) {
        return "Mediumcore";
      } else {
        return "Softcore";
      }
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      var skinVariant = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "skinVariant");
      var hair = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hair");
      var name = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "name");
      var hairDye = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hairDye");
      var hideVisuals = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hideVisuals");
      var hideVisuals2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hideVisuals2");
      var hideMisc = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hideMisc");
      var hairColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "hairColor");
      var skinColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "skinColor");
      var eyeColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "eyeColor");
      var shirtColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "shirtColor");
      var underShirtColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "underShirtColor");
      var pantsColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "pantsColor");
      var shoeColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "shoeColor");
      var difficultyFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "difficultyFlags"));
      var torchFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "torchFlags"));
      var difficulty = getDifficulty(difficultyFlags);
      var extraAccessory = BitFlags$TerrariaPacket.flag3(difficultyFlags);
      var mode = BitFlags$TerrariaPacket.flag4(difficultyFlags) ? "Journey" : "Classic";
      var usingBiomeTorches = BitFlags$TerrariaPacket.flag1(torchFlags);
      var happyFunTorchTime = BitFlags$TerrariaPacket.flag2(torchFlags);
      var unlockedBiomeTorches = BitFlags$TerrariaPacket.flag3(torchFlags);
      var unlockedSuperCart = BitFlags$TerrariaPacket.flag4(torchFlags);
      var enabledSuperCart = BitFlags$TerrariaPacket.flag5(torchFlags);
      var usedFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "usedFlags"));
      var usedAegisCrystal = BitFlags$TerrariaPacket.flag1(usedFlags);
      var usedAegisFruit = BitFlags$TerrariaPacket.flag2(usedFlags);
      var usedArcaneCrystal = BitFlags$TerrariaPacket.flag3(usedFlags);
      var usedGalaxyPearl = BitFlags$TerrariaPacket.flag4(usedFlags);
      var usedGummyWorm = BitFlags$TerrariaPacket.flag5(usedFlags);
      var usedAmbrosia = BitFlags$TerrariaPacket.flag6(usedFlags);
      var ateArtisanBread = BitFlags$TerrariaPacket.flag7(usedFlags);
      return {
        playerId,
        skinVariant,
        hair,
        name,
        hairDye,
        hideVisuals,
        hideVisuals2,
        hideMisc,
        hairColor,
        skinColor,
        eyeColor,
        shirtColor,
        underShirtColor,
        pantsColor,
        shoeColor,
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
      };
    }
    function packDifficultyFlags(writer, difficulty, extraAccessory, mode) {
      var $$byte = 0;
      var tmp;
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
      $$byte = $$byte | tmp;
      $$byte = $$byte | (extraAccessory ? 4 : 0);
      $$byte = $$byte | (mode === "Journey" ? 8 : 0);
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, $$byte, "difficultyFlags");
    }
    function packTorchFlags(writer, usingBiomeTorches, happyFunTorchTime, unlockedBiomeTorches, unlockedSuperCart, enabledSuperCart) {
      var $$byte = 0;
      $$byte = $$byte | (usingBiomeTorches ? 1 : 0);
      $$byte = $$byte | (happyFunTorchTime ? 2 : 0);
      $$byte = $$byte | (unlockedBiomeTorches ? 4 : 0);
      $$byte = $$byte | (unlockedSuperCart ? 8 : 0);
      $$byte = $$byte | (enabledSuperCart ? 16 : 0);
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, $$byte, "torchFlags");
    }
    function packUsedFlags(writer, usedAegisCrystal, usedAegisFruit, usedArcaneCrystal, usedGalaxyPearl, usedGummyWorm, usedAmbrosia, ateArtisanBread) {
      var $$byte = 0;
      $$byte = $$byte | (usedAegisCrystal ? 1 : 0);
      $$byte = $$byte | (usedAegisFruit ? 2 : 0);
      $$byte = $$byte | (usedArcaneCrystal ? 4 : 0);
      $$byte = $$byte | (usedGalaxyPearl ? 8 : 0);
      $$byte = $$byte | (usedGummyWorm ? 16 : 0);
      $$byte = $$byte | (usedAmbrosia ? 32 : 0);
      $$byte = $$byte | (ateArtisanBread ? 64 : 0);
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, $$byte, "usedFlags");
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(packUsedFlags(packTorchFlags(packDifficultyFlags(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerInfo")), self.playerId, "playerId"), self.skinVariant, "skinVariant"), self.hair, "hair"), self.name, "name"), self.hairDye, "hairDye"), self.hideVisuals, "hideVisuals"), self.hideVisuals2, "hideVisuals2"), self.hideMisc, "hideMisc"), self.hairColor, "hairColor"), self.skinColor, "skinColor"), self.eyeColor, "eyeColor"), self.shirtColor, "shirtColor"), self.underShirtColor, "underShirtColor"), self.pantsColor, "pantsColor"), self.shoeColor, "shoeColor"), self.difficulty, self.extraAccessory, self.mode), self.usingBiomeTorches, self.happyFunTorchTime, self.unlockedBiomeTorches, self.unlockedSuperCart, self.enabledSuperCart), self.usedAegisCrystal, self.usedAegisFruit, self.usedArcaneCrystal, self.usedGalaxyPearl, self.usedGummyWorm, self.usedAmbrosia, self.ateArtisanBread));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerSpawn.js
var require_Packet_PlayerSpawn = __commonJS({
  "src/packet/Packet_PlayerSpawn.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var x = reader.readInt16();
      var y = reader.readInt16();
      var timeRemaining = reader.readInt32();
      var numberOfDeathsPve = reader.readInt16();
      var numberOfDeathsPvp = reader.readInt16();
      var rawContext = reader.readByte();
      var context;
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
        default:
          context = void 0;
      }
      if (context !== void 0) {
        return {
          playerId,
          x,
          y,
          timeRemaining,
          numberOfDeathsPve,
          numberOfDeathsPvp,
          context
        };
      }
    }
    function toBuffer(self) {
      var match = self.context;
      var tmp;
      switch (match) {
        case "ReviveFromDeath":
          tmp = 0;
          break;
        case "SpawningIntoWorld":
          tmp = 1;
          break;
        case "RecallFromItem":
          tmp = 2;
          break;
      }
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerSpawn")).packByte(self.playerId).packInt16(self.x).packInt16(self.y).packInt32(self.timeRemaining).packInt16(self.numberOfDeathsPve).packInt16(self.numberOfDeathsPvp).packByte(tmp).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerInventorySlot.js
var require_Packet_PlayerInventorySlot = __commonJS({
  "src/packet/Packet_PlayerInventorySlot.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var slot = reader.readInt16();
      var stack = reader.readInt16();
      var prefix = reader.readByte();
      var itemId = reader.readInt16();
      return {
        playerId,
        slot,
        stack,
        prefix,
        itemId
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerInventorySlot")).packByte(self.playerId).packInt16(self.slot).packInt16(self.stack).packByte(self.prefix).packInt16(self.itemId).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerHealth.js
var require_Packet_PlayerHealth = __commonJS({
  "src/packet/Packet_PlayerHealth.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var health = reader.readInt16();
      var maxHealth = reader.readInt16();
      return {
        playerId,
        health,
        maxHealth
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerHealth")).packByte(self.playerId).packInt16(self.health).packInt16(self.maxHealth).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ClientUuid.js
var require_Packet_ClientUuid = __commonJS({
  "src/packet/Packet_ClientUuid.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var uuid = reader.readString();
      return {
        uuid
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ClientUuid")).packString(self.uuid).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ProjectileSync.js
var require_Packet_ProjectileSync = __commonJS({
  "src/packet/Packet_ProjectileSync.js"(exports2) {
    "use strict";
    var Belt_Option = require_belt_Option();
    var Caml_option = require_caml_option();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var projectileId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileId");
      var x = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      var y = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      var vx = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
      var vy = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
      var owner = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "owner");
      var projectileType = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileType");
      var flags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags"));
      var flags2 = BitFlags$TerrariaPacket.flag3(flags) ? Caml_option.some(BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags2"))) : void 0;
      var ai0 = BitFlags$TerrariaPacket.flag1(flags) ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai0") : void 0;
      var ai1 = BitFlags$TerrariaPacket.flag2(flags) ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai1") : void 0;
      var bannerIdToRespondTo = BitFlags$TerrariaPacket.flag4(flags) ? ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "bannerIdToRespondTo") : void 0;
      var damage = BitFlags$TerrariaPacket.flag5(flags) ? ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "damage") : void 0;
      var knockback = BitFlags$TerrariaPacket.flag6(flags) ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "knockback") : void 0;
      var originalDamage = BitFlags$TerrariaPacket.flag7(flags) ? ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "originalDamage") : void 0;
      var projectileUuid = BitFlags$TerrariaPacket.flag8(flags) ? ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileUuid") : void 0;
      var ai2 = flags2 !== void 0 && BitFlags$TerrariaPacket.flag1(Caml_option.valFromOption(flags2)) ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai2") : void 0;
      return {
        projectileId,
        x,
        y,
        vx,
        vy,
        owner,
        projectileType,
        ai: [
          ai0,
          ai1,
          ai2
        ],
        bannerIdToRespondTo,
        damage,
        knockback,
        originalDamage,
        projectileUuid
      };
    }
    function packOptionalData(writer, self) {
      var match = self.ai;
      var ai2 = match[2];
      var ai1 = match[1];
      var ai0 = match[0];
      var bitFlags2 = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(ai2), false, false, false, false, false, false, false);
      var bannerIdToRespondTo = self.bannerIdToRespondTo;
      var bitFlags = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(ai0), Belt_Option.isSome(ai1), BitFlags$TerrariaPacket.toByte(bitFlags2) !== 0, bannerIdToRespondTo !== void 0 ? bannerIdToRespondTo !== 0 : false, Belt_Option.isSome(self.damage), Belt_Option.isSome(self.knockback), Belt_Option.isSome(self.originalDamage), Belt_Option.isSome(self.projectileUuid));
      ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(bitFlags), "flags");
      if (BitFlags$TerrariaPacket.flag3(bitFlags)) {
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(bitFlags2), "flags2");
      }
      if (BitFlags$TerrariaPacket.flag1(bitFlags)) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, ai0, "ai0");
      }
      if (BitFlags$TerrariaPacket.flag2(bitFlags)) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, ai1, "ai1");
      }
      if (BitFlags$TerrariaPacket.flag4(bitFlags)) {
        ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, self.bannerIdToRespondTo, "bannerIdToRespondTo");
      }
      if (BitFlags$TerrariaPacket.flag5(bitFlags)) {
        ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, self.damage, "damage");
      }
      if (BitFlags$TerrariaPacket.flag6(bitFlags)) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, self.knockback, "knockback");
      }
      if (BitFlags$TerrariaPacket.flag7(bitFlags)) {
        ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, self.originalDamage, "originalDamage");
      }
      if (BitFlags$TerrariaPacket.flag8(bitFlags)) {
        ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, self.projectileUuid, "projectileUuid");
      }
      if (BitFlags$TerrariaPacket.flag1(bitFlags2)) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, ai2, "ai2");
      }
      return writer;
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(packOptionalData(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ProjectileSync")), self.projectileId, "projectileId"), self.x, "x"), self.y, "y"), self.vx, "vx"), self.vy, "vy"), self.owner, "owner"), self.projectileType, "projectileType"), self));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerDamage.js
var require_Packet_PlayerDamage = __commonJS({
  "src/packet/Packet_PlayerDamage.js"(exports2) {
    "use strict";
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var PlayerDeathReason$TerrariaPacket = require_PlayerDeathReason();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readDamageFlags(reader) {
      var flags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
      return {
        critical: BitFlags$TerrariaPacket.flag1(flags),
        pvp: BitFlags$TerrariaPacket.flag2(flags)
      };
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var target = reader.readByte();
      var deathReason = PlayerDeathReason$TerrariaPacket.readDeathReason(reader);
      var damage = reader.readInt16();
      var hitDirection = reader.readByte();
      var damageFlags = readDamageFlags(reader);
      var critical = damageFlags.critical;
      var pvp = damageFlags.pvp;
      var cooldownCounter = reader.readSByte();
      return {
        target,
        deathReason,
        damage,
        hitDirection,
        critical,
        pvp,
        cooldownCounter
      };
    }
    function toBuffer(self) {
      var damageFlags = function(self2) {
        return BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(self2.critical, self2.pvp, false, false, false, false, false, false));
      };
      return PlayerDeathReason$TerrariaPacket.packDeathReason(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerDamage")).packByte(self.target), self.deathReason).packInt16(self.damage).packByte(self.hitDirection).packByte(damageFlags(self)).packSByte(self.cooldownCounter).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_WorldInfo.js
var require_Packet_WorldInfo = __commonJS({
  "src/packet/Packet_WorldInfo.js"(exports2) {
    "use strict";
    var Belt_Option = require_belt_Option();
    var Array16$TerrariaPacket = require_Array16();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function readEventInfo(reader) {
      var eventInfo1 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo1"));
      var eventInfo2 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo2"));
      var eventInfo3 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo3"));
      var eventInfo4 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo4"));
      var eventInfo5 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo5"));
      var eventInfo6 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo6"));
      var eventInfo7 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo7"));
      var eventInfo8 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo8"));
      var eventInfo9 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo9"));
      var eventInfo10 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo10"));
      var shadowOrbSmashed = BitFlags$TerrariaPacket.flag1(eventInfo1);
      var killedBoss1 = BitFlags$TerrariaPacket.flag2(eventInfo1);
      var killedBoss2 = BitFlags$TerrariaPacket.flag3(eventInfo1);
      var killedBoss3 = BitFlags$TerrariaPacket.flag4(eventInfo1);
      var hardMode = BitFlags$TerrariaPacket.flag5(eventInfo1);
      var killedClown = BitFlags$TerrariaPacket.flag6(eventInfo1);
      var serverSidedCharacters = BitFlags$TerrariaPacket.flag7(eventInfo1);
      var killedPlantBoss = BitFlags$TerrariaPacket.flag8(eventInfo1);
      var killedMechBoss = BitFlags$TerrariaPacket.flag1(eventInfo2);
      var killedMechBoss2 = BitFlags$TerrariaPacket.flag2(eventInfo2);
      var killedMechBoss3 = BitFlags$TerrariaPacket.flag3(eventInfo2);
      var killedAnyMechBoss = BitFlags$TerrariaPacket.flag4(eventInfo2);
      var cloudBg = BitFlags$TerrariaPacket.flag5(eventInfo2);
      var crimson = BitFlags$TerrariaPacket.flag6(eventInfo2);
      var pumpkinMoon = BitFlags$TerrariaPacket.flag7(eventInfo2);
      var snowMoon = BitFlags$TerrariaPacket.flag8(eventInfo2);
      var expertMode = BitFlags$TerrariaPacket.flag1(eventInfo3);
      var fastForwardTime = BitFlags$TerrariaPacket.flag2(eventInfo3);
      var slimeRain = BitFlags$TerrariaPacket.flag3(eventInfo3);
      var killedKingSlime = BitFlags$TerrariaPacket.flag4(eventInfo3);
      var killedQueenBee = BitFlags$TerrariaPacket.flag5(eventInfo3);
      var killedFishron = BitFlags$TerrariaPacket.flag6(eventInfo3);
      var killedMartians = BitFlags$TerrariaPacket.flag7(eventInfo3);
      var killedAncientCultist = BitFlags$TerrariaPacket.flag8(eventInfo3);
      var killedMoonLord = BitFlags$TerrariaPacket.flag1(eventInfo4);
      var killedPumpking = BitFlags$TerrariaPacket.flag2(eventInfo4);
      var killedMourningWood = BitFlags$TerrariaPacket.flag3(eventInfo4);
      var killedIceQueen = BitFlags$TerrariaPacket.flag4(eventInfo4);
      var killedSantank = BitFlags$TerrariaPacket.flag5(eventInfo4);
      var killedEverscream = BitFlags$TerrariaPacket.flag6(eventInfo4);
      var killedGolem = BitFlags$TerrariaPacket.flag7(eventInfo4);
      var birthdayParty = BitFlags$TerrariaPacket.flag8(eventInfo4);
      var killedPirates = BitFlags$TerrariaPacket.flag1(eventInfo5);
      var killedFrostLegion = BitFlags$TerrariaPacket.flag2(eventInfo5);
      var killedGoblins = BitFlags$TerrariaPacket.flag3(eventInfo5);
      var sandstorm = BitFlags$TerrariaPacket.flag4(eventInfo5);
      var dungeonDefendersEvent = BitFlags$TerrariaPacket.flag5(eventInfo5);
      var killedDungeonDefendersTier1 = BitFlags$TerrariaPacket.flag6(eventInfo5);
      var killedDungeonDefendersTier2 = BitFlags$TerrariaPacket.flag7(eventInfo5);
      var killedDungeonDefendersTier3 = BitFlags$TerrariaPacket.flag8(eventInfo5);
      var combatBookUsed = BitFlags$TerrariaPacket.flag1(eventInfo6);
      var manualLanterns = BitFlags$TerrariaPacket.flag2(eventInfo6);
      var killedSolarTower = BitFlags$TerrariaPacket.flag3(eventInfo6);
      var killedVortexTower = BitFlags$TerrariaPacket.flag4(eventInfo6);
      var killedNebulaTower = BitFlags$TerrariaPacket.flag5(eventInfo6);
      var killedStardustTower = BitFlags$TerrariaPacket.flag6(eventInfo6);
      var forceHalloween = BitFlags$TerrariaPacket.flag7(eventInfo6);
      var forceChristmas = BitFlags$TerrariaPacket.flag8(eventInfo6);
      var boughtCat = BitFlags$TerrariaPacket.flag1(eventInfo7);
      var boughtDog = BitFlags$TerrariaPacket.flag2(eventInfo7);
      var boughtBunny = BitFlags$TerrariaPacket.flag3(eventInfo7);
      var freeCake = BitFlags$TerrariaPacket.flag4(eventInfo7);
      var drunkWorld = BitFlags$TerrariaPacket.flag5(eventInfo7);
      var killedEmpressOfLight = BitFlags$TerrariaPacket.flag6(eventInfo7);
      var killedQueenSlime = BitFlags$TerrariaPacket.flag7(eventInfo7);
      var getGoodWorld = BitFlags$TerrariaPacket.flag8(eventInfo7);
      var tenthAnniversaryWorld = BitFlags$TerrariaPacket.flag1(eventInfo8);
      var dontStarveWorld = BitFlags$TerrariaPacket.flag2(eventInfo8);
      var downedDeerClops = BitFlags$TerrariaPacket.flag3(eventInfo8);
      var notTheBeesWorld = BitFlags$TerrariaPacket.flag4(eventInfo8);
      var remixWorld = BitFlags$TerrariaPacket.flag5(eventInfo8);
      var unlockedSlimeBlueSpawn = BitFlags$TerrariaPacket.flag6(eventInfo8);
      var combatBookVolumeTwoWasUsed = BitFlags$TerrariaPacket.flag7(eventInfo8);
      var peddlersSatchelWasUsed = BitFlags$TerrariaPacket.flag8(eventInfo8);
      var unlockedSlimeGreenSpawn = BitFlags$TerrariaPacket.flag1(eventInfo9);
      var unlockedSlimeOldSpawn = BitFlags$TerrariaPacket.flag2(eventInfo9);
      var unlockedSlimePurpleSpawn = BitFlags$TerrariaPacket.flag3(eventInfo9);
      var unlockedSlimeRainbowSpawn = BitFlags$TerrariaPacket.flag4(eventInfo9);
      var unlockedSlimeRedSpawn = BitFlags$TerrariaPacket.flag5(eventInfo9);
      var unlockedSlimeYellowSpawn = BitFlags$TerrariaPacket.flag6(eventInfo9);
      var unlockedSlimeCopperSpawn = BitFlags$TerrariaPacket.flag7(eventInfo9);
      var fastForwardTimeToDusk = BitFlags$TerrariaPacket.flag8(eventInfo9);
      var noTrapsWorld = BitFlags$TerrariaPacket.flag1(eventInfo10);
      var zenithWorld = BitFlags$TerrariaPacket.flag2(eventInfo10);
      var unlockedTruffleSpawn = BitFlags$TerrariaPacket.flag3(eventInfo10);
      return {
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
        unlockedTruffleSpawn
      };
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var time = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "time");
      var dayAndMoonInfo = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "dayAndMoonInfo");
      var moonPhase = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "moonPhase");
      var maxTilesX = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "maxTilesX");
      var maxTilesY = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "maxTilesY");
      var spawnX = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "spawnX");
      var spawnY = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "spawnY");
      var worldSurface = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "worldSurface");
      var rockLayer = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "rockLayer");
      var worldId = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "worldId");
      var worldName = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "worldName");
      var gameMode = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "gameMode");
      var worldUniqueId = Array16$TerrariaPacket.fromArray(ErrorAwarePacketReader$TerrariaPacket.readBytes(reader, 16, "worldUniqueId"));
      var worldGeneratorVersion = ErrorAwarePacketReader$TerrariaPacket.readUInt64(reader, "worldGeneratorVersion");
      var moonType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "moonType");
      var treeBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground");
      var treeBackground2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground2");
      var treeBackground3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground3");
      var treeBackground4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground4");
      var corruptionBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "corruptionBackground");
      var jungleBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "jungleBackground");
      var snowBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "snowBackground");
      var hallowBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hallowBackground");
      var crimsonBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "crimsonBackground");
      var desertBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "desertBackground");
      var oceanBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "oceanBackground");
      var mushroomBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "mushroomBackground");
      var underworldBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "underworldBackground");
      var iceBackStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "iceBackStyle");
      var jungleBackStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "jungleBackStyle");
      var hellBackStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hellBackStyle");
      var windSpeedSet = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "windSpeedSet");
      var cloudNumber = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "cloudNumber");
      var tree1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tree1");
      var tree2 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tree2");
      var tree3 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tree3");
      var treeStyle1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle1");
      var treeStyle2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle2");
      var treeStyle3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle3");
      var treeStyle4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle4");
      var caveBack1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "caveBack1");
      var caveBack2 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "caveBack2");
      var caveBack3 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "caveBack3");
      var caveBackStyle1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle1");
      var caveBackStyle2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle2");
      var caveBackStyle3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle3");
      var caveBackStyle4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle4");
      var forest1TreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest1TreeTopStyle");
      var forest2TreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest2TreeTopStyle");
      var forest3TreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest3TreeTopStyle");
      var forest4TreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest4TreeTopStyle");
      var corruptionTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "corruptionTreeTopStyle");
      var jungleTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "jungleTreeTopStyle");
      var snowTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "snowTreeTopStyle");
      var hallowTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hallowTreeTopStyle");
      var crimsonTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "crimsonTreeTopStyle");
      var desertTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "desertTreeTopStyle");
      var oceanTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "oceanTreeTopStyle");
      var glowingMushroomTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "glowingMushroomTreeTopStyle");
      var underworldTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "underworldTreeTopStyle");
      var rain = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "rain");
      var eventInfo = readEventInfo(reader);
      var sundialCooldown = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "sundialCooldown");
      var moondialCooldown = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "moondialCooldown");
      var copperOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "copperOreTier");
      var ironOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "ironOreTier");
      var silverOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "silverOreTier");
      var goldOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "goldOreTier");
      var cobaltOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "cobaltOreTier");
      var mythrilOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "mythrilOreTier");
      var adamantiteOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "adamantiteOreTier");
      var invasionType = ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "invasionType");
      var lobbyId = ErrorAwarePacketReader$TerrariaPacket.readUInt64(reader, "lobbyId");
      var sandstormSeverity = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "sandstormSeverity");
      return Belt_Option.map(worldUniqueId, function(worldUniqueId2) {
        return {
          time,
          dayAndMoonInfo,
          moonPhase,
          maxTilesX,
          maxTilesY,
          spawnX,
          spawnY,
          worldSurface,
          rockLayer,
          worldId,
          worldName,
          gameMode,
          worldUniqueId: worldUniqueId2,
          worldGeneratorVersion,
          moonType,
          treeBackground,
          treeBackground2,
          treeBackground3,
          treeBackground4,
          corruptionBackground,
          jungleBackground,
          snowBackground,
          hallowBackground,
          crimsonBackground,
          desertBackground,
          oceanBackground,
          mushroomBackground,
          underworldBackground,
          iceBackStyle,
          jungleBackStyle,
          hellBackStyle,
          windSpeedSet,
          cloudNumber,
          tree1,
          tree2,
          tree3,
          treeStyle1,
          treeStyle2,
          treeStyle3,
          treeStyle4,
          caveBack1,
          caveBack2,
          caveBack3,
          caveBackStyle1,
          caveBackStyle2,
          caveBackStyle3,
          caveBackStyle4,
          forest1TreeTopStyle,
          forest2TreeTopStyle,
          forest3TreeTopStyle,
          forest4TreeTopStyle,
          corruptionTreeTopStyle,
          jungleTreeTopStyle,
          snowTreeTopStyle,
          hallowTreeTopStyle,
          crimsonTreeTopStyle,
          desertTreeTopStyle,
          oceanTreeTopStyle,
          glowingMushroomTreeTopStyle,
          underworldTreeTopStyle,
          rain,
          eventInfo,
          sundialCooldown,
          moondialCooldown,
          copperOreTier,
          ironOreTier,
          silverOreTier,
          goldOreTier,
          cobaltOreTier,
          mythrilOreTier,
          adamantiteOreTier,
          invasionType,
          lobbyId,
          sandstormSeverity
        };
      });
    }
    function packEventInfo(writer, eventInfo) {
      var eventInfo1 = BitFlags$TerrariaPacket.fromFlags(eventInfo.shadowOrbSmashed, eventInfo.killedBoss1, eventInfo.killedBoss2, eventInfo.killedBoss3, eventInfo.hardMode, eventInfo.killedClown, eventInfo.serverSidedCharacters, eventInfo.killedPlantBoss);
      var eventInfo2 = BitFlags$TerrariaPacket.fromFlags(eventInfo.killedMechBoss, eventInfo.killedMechBoss2, eventInfo.killedMechBoss3, eventInfo.killedAnyMechBoss, eventInfo.cloudBg, eventInfo.crimson, eventInfo.pumpkinMoon, eventInfo.snowMoon);
      var eventInfo3 = BitFlags$TerrariaPacket.fromFlags(eventInfo.expertMode, eventInfo.fastForwardTime, eventInfo.slimeRain, eventInfo.killedKingSlime, eventInfo.killedQueenBee, eventInfo.killedFishron, eventInfo.killedMartians, eventInfo.killedAncientCultist);
      var eventInfo4 = BitFlags$TerrariaPacket.fromFlags(eventInfo.killedMoonLord, eventInfo.killedPumpking, eventInfo.killedMourningWood, eventInfo.killedIceQueen, eventInfo.killedSantank, eventInfo.killedEverscream, eventInfo.killedGolem, eventInfo.birthdayParty);
      var eventInfo5 = BitFlags$TerrariaPacket.fromFlags(eventInfo.killedPirates, eventInfo.killedFrostLegion, eventInfo.killedGoblins, eventInfo.sandstorm, eventInfo.dungeonDefendersEvent, eventInfo.killedDungeonDefendersTier1, eventInfo.killedDungeonDefendersTier2, eventInfo.killedDungeonDefendersTier3);
      var eventInfo6 = BitFlags$TerrariaPacket.fromFlags(eventInfo.combatBookUsed, eventInfo.manualLanterns, eventInfo.killedSolarTower, eventInfo.killedVortexTower, eventInfo.killedNebulaTower, eventInfo.killedStardustTower, eventInfo.forceHalloween, eventInfo.forceChristmas);
      var eventInfo7 = BitFlags$TerrariaPacket.fromFlags(eventInfo.boughtCat, eventInfo.boughtDog, eventInfo.boughtBunny, eventInfo.freeCake, eventInfo.drunkWorld, eventInfo.killedEmpressOfLight, eventInfo.killedQueenSlime, eventInfo.getGoodWorld);
      var eventInfo8 = BitFlags$TerrariaPacket.fromFlags(eventInfo.tenthAnniversaryWorld, eventInfo.dontStarveWorld, eventInfo.downedDeerClops, eventInfo.notTheBeesWorld, eventInfo.remixWorld, eventInfo.unlockedSlimeBlueSpawn, eventInfo.combatBookVolumeTwoWasUsed, eventInfo.peddlersSatchelWasUsed);
      var eventInfo9 = BitFlags$TerrariaPacket.fromFlags(eventInfo.unlockedSlimeGreenSpawn, eventInfo.unlockedSlimeOldSpawn, eventInfo.unlockedSlimePurpleSpawn, eventInfo.unlockedSlimeRainbowSpawn, eventInfo.unlockedSlimeRedSpawn, eventInfo.unlockedSlimeYellowSpawn, eventInfo.unlockedSlimeCopperSpawn, eventInfo.fastForwardTimeToDusk);
      var eventInfo10 = BitFlags$TerrariaPacket.fromFlags(eventInfo.noTrapsWorld, eventInfo.zenithWorld, eventInfo.unlockedTruffleSpawn, false, false, false, false, false);
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(eventInfo1), "eventInfo1"), BitFlags$TerrariaPacket.toByte(eventInfo2), "eventInfo2"), BitFlags$TerrariaPacket.toByte(eventInfo3), "eventInfo3"), BitFlags$TerrariaPacket.toByte(eventInfo4), "eventInfo4"), BitFlags$TerrariaPacket.toByte(eventInfo5), "eventInfo5"), BitFlags$TerrariaPacket.toByte(eventInfo6), "eventInfo6"), BitFlags$TerrariaPacket.toByte(eventInfo7), "eventInfo7"), BitFlags$TerrariaPacket.toByte(eventInfo8), "eventInfo8"), BitFlags$TerrariaPacket.toByte(eventInfo9), "eventInfo9"), BitFlags$TerrariaPacket.toByte(eventInfo10), "eventInfo10");
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt64(ErrorAwarePacketWriter$TerrariaPacket.packSByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(packEventInfo(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt64(ErrorAwarePacketWriter$TerrariaPacket.packBytes(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("WorldInfo")), self.time, "time"), self.dayAndMoonInfo, "dayAndMoonInfo"), self.moonPhase, "moonPhase"), self.maxTilesX, "maxTilesX"), self.maxTilesY, "maxTilesY"), self.spawnX, "spawnX"), self.spawnY, "spawnY"), self.worldSurface, "worldSurface"), self.rockLayer, "rockLayer"), self.worldId, "worldId"), self.worldName, "worldName"), self.gameMode, "gameMode"), Array16$TerrariaPacket.asArray(self.worldUniqueId), "worldUniqueId"), self.worldGeneratorVersion, "worldGeneratorVersion"), self.moonType, "moonType"), self.treeBackground, "treeBackground"), self.treeBackground2, "treeBackground2"), self.treeBackground3, "treeBackground3"), self.treeBackground4, "treeBackground4"), self.corruptionBackground, "corruptionBackground"), self.jungleBackground, "jungleBackground"), self.snowBackground, "snowBackground"), self.hallowBackground, "hallowBackground"), self.crimsonBackground, "crimsonBackground"), self.desertBackground, "desertBackground"), self.oceanBackground, "oceanBackground"), self.mushroomBackground, "mushroomBackground"), self.underworldBackground, "underworldBackground"), self.iceBackStyle, "iceBackStyle"), self.jungleBackStyle, "jungleBackStyle"), self.hellBackStyle, "hellBackStyle"), self.windSpeedSet, "windSpeedSet"), self.cloudNumber, "cloudNumber"), self.tree1, "tree1"), self.tree2, "tree2"), self.tree3, "tree3"), self.treeStyle1, "treeStyle1"), self.treeStyle2, "treeStyle2"), self.treeStyle3, "treeStyle3"), self.treeStyle4, "treeStyle4"), self.caveBack1, "caveBack1"), self.caveBack2, "caveBack2"), self.caveBack3, "caveBack3"), self.caveBackStyle1, "caveBackStyle1"), self.caveBackStyle2, "caveBackStyle2"), self.caveBackStyle3, "caveBackStyle3"), self.caveBackStyle4, "caveBackStyle4"), self.forest1TreeTopStyle, "forest1TreeTopStyle"), self.forest2TreeTopStyle, "forest2TreeTopStyle"), self.forest3TreeTopStyle, "forest3TreeTopStyle"), self.forest4TreeTopStyle, "forest4TreeTopStyle"), self.corruptionTreeTopStyle, "corruptionTreeTopStyle"), self.jungleTreeTopStyle, "jungleTreeTopStyle"), self.snowTreeTopStyle, "snowTreeTopStyle"), self.hallowTreeTopStyle, "hallowTreeTopStyle"), self.crimsonTreeTopStyle, "crimsonTreeTopStyle"), self.desertTreeTopStyle, "desertTreeTopStyle"), self.oceanTreeTopStyle, "oceanTreeTopStyle"), self.glowingMushroomTreeTopStyle, "glowingMushroomTreeTopStyle"), self.underworldTreeTopStyle, "underworldTreeTopStyle"), self.rain, "rain"), self.eventInfo), self.sundialCooldown, "sundialCooldown"), self.moondialCooldown, "moondialCooldown"), self.copperOreTier, "copperOreTier"), self.ironOreTier, "ironOreTier"), self.silverOreTier, "silverOreTier"), self.goldOreTier, "goldOreTier"), self.cobaltOreTier, "cobaltOreTier"), self.mythrilOreTier, "mythrilOreTier"), self.adamantiteOreTier, "adamantiteOreTier"), self.invasionType, "invasionType"), self.lobbyId, "lobbyId"), self.sandstormSeverity, "sandstormSeverity"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerActive.js
var require_Packet_PlayerActive = __commonJS({
  "src/packet/Packet_PlayerActive.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      var reader = new Packetreader(payload);
      var playerId = reader.readByte();
      var active = reader.readByte() !== 0;
      return {
        playerId,
        active
      };
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerActive")).packByte(self.playerId).packByte(self.active ? 1 : 0).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_NpcUpdate.js
var require_Packet_NpcUpdate = __commonJS({
  "src/packet/Packet_NpcUpdate.js"(exports2) {
    "use strict";
    var Belt_Option = require_belt_Option();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function readNpcFlags1(reader, fieldName) {
      var flags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, fieldName));
      return {
        directionX: BitFlags$TerrariaPacket.flag1(flags),
        directionY: BitFlags$TerrariaPacket.flag2(flags),
        ai0: BitFlags$TerrariaPacket.flag3(flags),
        ai1: BitFlags$TerrariaPacket.flag4(flags),
        ai2: BitFlags$TerrariaPacket.flag5(flags),
        ai3: BitFlags$TerrariaPacket.flag6(flags),
        spriteDirection: BitFlags$TerrariaPacket.flag7(flags),
        lifeMax: BitFlags$TerrariaPacket.flag8(flags)
      };
    }
    function readNpcFlags2(reader, fieldName) {
      var flags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, fieldName));
      return {
        statsScaled: BitFlags$TerrariaPacket.flag1(flags),
        spawnedFromStatue: BitFlags$TerrariaPacket.flag2(flags),
        strengthMultiplier: BitFlags$TerrariaPacket.flag3(flags)
      };
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var npcSlotId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcSlotId");
      var x = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      var y = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      var vx = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
      var vy = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
      var target = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "target");
      var npcFlags12 = readNpcFlags1(reader, "npcFlags1");
      var npcFlags22 = readNpcFlags2(reader, "npcFlags2");
      var ai_0 = npcFlags12.ai0 ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai0") : void 0;
      var ai_1 = npcFlags12.ai1 ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai1") : void 0;
      var ai_2 = npcFlags12.ai2 ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai2") : void 0;
      var ai_3 = npcFlags12.ai3 ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai3") : void 0;
      var ai = [
        ai_0,
        ai_1,
        ai_2,
        ai_3
      ];
      var npcTypeId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcTypeId");
      var playerCountScale = npcFlags22.statsScaled ? ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerCountScale") : void 0;
      var strengthMultiplier = npcFlags22.strengthMultiplier ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "strengthMultiplier") : void 0;
      var life;
      if (npcFlags12.lifeMax) {
        life = "Max";
      } else {
        var lifeBytes = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "lifeBytes");
        switch (lifeBytes) {
          case 1:
            life = {
              TAG: "Byte",
              _0: ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "life_sbyte")
            };
            break;
          case 2:
            life = {
              TAG: "Int16",
              _0: ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "life_int16")
            };
            break;
          case 4:
            life = {
              TAG: "Int32",
              _0: ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "life_int32")
            };
            break;
          default:
            life = void 0;
        }
      }
      var releaseOwner;
      try {
        releaseOwner = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "releaseOwner");
      } catch (exn) {
        releaseOwner = void 0;
      }
      if (life !== void 0) {
        return {
          npcSlotId,
          npcTypeId,
          x,
          y,
          vx,
          vy,
          target,
          directionX: npcFlags12.directionX,
          directionY: npcFlags12.directionY,
          ai,
          spriteDirection: npcFlags12.spriteDirection,
          life,
          releaseOwner,
          playerCountScale,
          strengthMultiplier,
          spawnedFromStatue: npcFlags22.spawnedFromStatue
        };
      }
    }
    function npcFlags1(self) {
      var match = self.ai;
      return BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(self.directionX, self.directionY, Belt_Option.isSome(match[0]), Belt_Option.isSome(match[1]), Belt_Option.isSome(match[2]), Belt_Option.isSome(match[3]), self.spriteDirection, self.life === "Max"));
    }
    function npcFlags2(self) {
      return BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(self.playerCountScale), self.spawnedFromStatue, Belt_Option.isSome(self.strengthMultiplier), false, false, false, false, false));
    }
    function packAi(writer, param) {
      var ai3 = param[3];
      var ai2 = param[2];
      var ai1 = param[1];
      var ai0 = param[0];
      if (ai0 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, ai0, "ai0");
      }
      if (ai1 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, ai1, "ai1");
      }
      if (ai2 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, ai2, "ai2");
      }
      if (ai3 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, ai3, "ai3");
      }
      return writer;
    }
    function packPlayerCountScale(writer, playerCountScale) {
      if (playerCountScale !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, playerCountScale, "playerCountScale");
      } else {
        return writer;
      }
    }
    function packStrengthMultiplier(writer, strengthMultiplier) {
      if (strengthMultiplier !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, strengthMultiplier, "strengthMultiplier");
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
          return ErrorAwarePacketWriter$TerrariaPacket.packSByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 1, "lifeBytes"), life._0, "life_sbyte");
        case "Int16":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 2, "lifeBytes"), life._0, "life_int16");
        case "Int32":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 4, "lifeBytes"), life._0, "life_int32");
      }
    }
    function packReleaseOwner(writer, releaseOwner) {
      if (releaseOwner !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, releaseOwner, "releaseOwner");
      } else {
        return writer;
      }
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(packReleaseOwner(packLife(packStrengthMultiplier(packPlayerCountScale(ErrorAwarePacketWriter$TerrariaPacket.packInt16(packAi(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcUpdate")), self.npcSlotId, "npcSlotId"), self.x, "x"), self.y, "y"), self.vx, "vx"), self.vy, "vy"), self.target, "target"), npcFlags1(self), "npcFlags1"), npcFlags2(self), "npcFlags2"), self.ai), self.npcTypeId, "npcTypeId"), self.playerCountScale), self.strengthMultiplier), self.life), self.releaseOwner));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_Disconnect.js
var require_Packet_Disconnect = __commonJS({
  "src/packet/Packet_Disconnect.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readNetworkText(prim) {
      return prim.readNetworkText();
    }
    function parse(payload) {
      var reader = new Packetreader(payload);
      var reason = reader.readNetworkText();
      return {
        reason
      };
    }
    var Decode = {
      readNetworkText,
      parse
    };
    function packNetworkText(prim0, prim1) {
      return prim0.packNetworkText(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("Disconnect")).packNetworkText(self.reason).data;
    }
    var Encode = {
      packNetworkText,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/Point.js
var require_Point = __commonJS({
  "src/Point.js"(exports2) {
    "use strict";
    function toString(self) {
      return "{ x: " + String(self.x) + ", y: " + String(self.y) + " }";
    }
    var Int = {
      toString
    };
    function toString$1(self) {
      return "{ x: " + String(self.x) + ", y: " + String(self.y) + " }";
    }
    var Float = {
      toString: toString$1
    };
    exports2.Int = Int;
    exports2.Float = Float;
  }
});

// src/Export.ts
var Export_exports = {};
__export(Export_exports, {
  AnglerQuestCompletePacket: () => AnglerQuestCompletePacket,
  AnglerQuestPacket: () => AnglerQuestPacket,
  Array16: () => Array16,
  ArrayExt: () => ArrayExt,
  BitFlags: () => BitFlags,
  BossOrInvasionSpawnPacket: () => BossOrInvasionSpawnPacket,
  ChatMessageSmartPacket: () => ChatMessageSmartPacket,
  ChestItemPacket: () => ChestItemPacket,
  ChestOrTempleUnlockPacket: () => ChestOrTempleUnlockPacket,
  ChestPlacePacket: () => ChestPlacePacket,
  ClientFinishConnectingToServerPacket: () => ClientFinishConnectingToServerPacket,
  ClientUuidPacket: () => ClientUuidPacket,
  ConnectRequestPacket: () => ConnectRequestPacket,
  CountsAsHostForGameplaySetPacket: () => CountsAsHostForGameplaySetPacket,
  CreativePowers: () => CreativePowers,
  CreditsOrSlimeTransformPacket: () => CreditsOrSlimeTransformPacket,
  CrystalInvasionStartPacket: () => CrystalInvasionStartPacket,
  DimensionsUpdatePacket: () => DimensionsUpdatePacket,
  DisconnectPacket: () => DisconnectPacket,
  ErrorAwarePacketWriter: () => ErrorAwarePacketWriter,
  ExtraValueSyncPacket: () => ExtraValueSyncPacket,
  HaveDryadDoStardewAnimationPacket: () => HaveDryadDoStardewAnimationPacket,
  InvasionProgressReportPacket: () => InvasionProgressReportPacket,
  ItemDropShimmeredUpdatePacket: () => ItemDropShimmeredUpdatePacket,
  ItemDropUpdatePacket: () => ItemDropUpdatePacket,
  ItemOwnerPacket: () => ItemOwnerPacket,
  LoadoutSwitchPacket: () => LoadoutSwitchPacket,
  NetModuleLoadPacket: () => NetModuleLoadPacket,
  NpcBuffRemovalRequestPacket: () => NpcBuffRemovalRequestPacket,
  NpcBuffUpdatePacket: () => NpcBuffUpdatePacket,
  NpcCatchPacket: () => NpcCatchPacket,
  NpcFishOutPacket: () => NpcFishOutPacket,
  NpcHomeUpdatePacket: () => NpcHomeUpdatePacket,
  NpcKillCountPacket: () => NpcKillCountPacket,
  NpcNameUpdatePacket: () => NpcNameUpdatePacket,
  NpcShopItemPacket: () => NpcShopItemPacket,
  NpcTalkPacket: () => NpcTalkPacket,
  NpcTeleportPortalPacket: () => NpcTeleportPortalPacket,
  NpcUpdatePacket: () => NpcUpdatePacket,
  ObjectPlacePacket: () => ObjectPlacePacket,
  PartyTogglePacket: () => PartyTogglePacket,
  PlayerActivePacket: () => PlayerActivePacket,
  PlayerAnimationPacket: () => PlayerAnimationPacket,
  PlayerBuffAddPacket: () => PlayerBuffAddPacket,
  PlayerChestIndexSyncPacket: () => PlayerChestIndexSyncPacket,
  PlayerDamagePacket: () => PlayerDamagePacket,
  PlayerDeadPacket: () => PlayerDeadPacket,
  PlayerDeathPacket: () => PlayerDeathPacket,
  PlayerDeathReason: () => PlayerDeathReason,
  PlayerDodgePacket: () => PlayerDodgePacket,
  PlayerHealthPacket: () => PlayerHealthPacket,
  PlayerInfoPacket: () => PlayerInfoPacket,
  PlayerInventorySlotPacket: () => PlayerInventorySlotPacket,
  PlayerManaPacket: () => PlayerManaPacket,
  PlayerSlotSetPacket: () => PlayerSlotSetPacket,
  PlayerSpawnPacket: () => PlayerSpawnPacket,
  PlayerTeamPacket: () => PlayerTeamPacket,
  PlayerUpdatePacket: () => PlayerUpdatePacket,
  Point: () => Point,
  ProjectileSyncPacket: () => ProjectileSyncPacket,
  PvpTogglePacket: () => PvpTogglePacket,
  ShimmerEffectOrCoinLuckPacket: () => ShimmerEffectOrCoinLuckPacket,
  SignNewPacket: () => SignNewPacket,
  SignReadPacket: () => SignReadPacket,
  SmokePoofPacket: () => SmokePoofPacket,
  SocialHandshakePacket: () => SocialHandshakePacket,
  StatusPacket: () => StatusPacket,
  SwitchHitPacket: () => SwitchHitPacket,
  TeleportPacket: () => TeleportPacket,
  TeleportationPotionPacket: () => TeleportationPotionPacket,
  TemporaryAnimationCreatePacket: () => TemporaryAnimationCreatePacket,
  TileEntityDisplayDollItemSyncPacket: () => TileEntityDisplayDollItemSyncPacket,
  TileEntityHatRackItemSyncPacket: () => TileEntityHatRackItemSyncPacket,
  TileEntityInteractionRequestPacket: () => TileEntityInteractionRequestPacket,
  TileEntityPlacePacket: () => TileEntityPlacePacket,
  TileEntityUpdatePacket: () => TileEntityUpdatePacket,
  TileModifyPacket: () => TileModifyPacket,
  TilePaintPacket: () => TilePaintPacket,
  TilePickingSyncPacket: () => TilePickingSyncPacket,
  TileSectionFramePacket: () => TileSectionFramePacket,
  TileSectionSendPacket: () => TileSectionSendPacket,
  TileSquareSendPacket: () => TileSquareSendPacket,
  TimeSetPacket: () => TimeSetPacket,
  TravellingMerchantInventoryPacket: () => TravellingMerchantInventoryPacket,
  TreeGrowFxPacket: () => TreeGrowFxPacket,
  UnusedPacket: () => UnusedPacket,
  WallPaintPacket: () => WallPaintPacket,
  WeaponsRackTryPlacingPacket: () => WeaponsRackTryPlacingPacket,
  WiredCannonShotPacket: () => WiredCannonShotPacket,
  WorldDataRequestPacket: () => WorldDataRequestPacket,
  WorldInfoPacket: () => WorldInfoPacket,
  ZonesPacket: () => ZonesPacket
});
module.exports = __toCommonJS(Export_exports);
var AnglerQuestPacket = __toESM(require_Packet_AnglerQuest());
var AnglerQuestCompletePacket = __toESM(require_Packet_AnglerQuestComplete());
var BossOrInvasionSpawnPacket = __toESM(require_Packet_BossOrInvasionSpawn());
var ChatMessageSmartPacket = __toESM(require_Packet_ChatMessageSmart());
var ChestItemPacket = __toESM(require_Packet_ChestItem());
var ChestOrTempleUnlockPacket = __toESM(require_Packet_ChestOrTempleUnlock());
var ChestPlacePacket = __toESM(require_Packet_ChestPlace());
var ClientFinishConnectingToServerPacket = __toESM(require_Packet_ClientFinishConnectingToServer());
var ConnectRequestPacket = __toESM(require_Packet_ConnectRequest());
var CountsAsHostForGameplaySetPacket = __toESM(require_Packet_CountsAsHostForGameplaySet());
var CreditsOrSlimeTransformPacket = __toESM(require_Packet_CreditsOrSlimeTransform());
var CrystalInvasionStartPacket = __toESM(require_Packet_CrystalInvasionStart());
var DimensionsUpdatePacket = __toESM(require_Packet_DimensionsUpdate());
var ExtraValueSyncPacket = __toESM(require_Packet_ExtraValueSync());
var HaveDryadDoStardewAnimationPacket = __toESM(require_Packet_HaveDryadDoStardewAnimation());
var InvasionProgressReportPacket = __toESM(require_Packet_InvasionProgressReport());
var ItemDropShimmeredUpdatePacket = __toESM(require_Packet_ItemDropShimmeredUpdate());
var ItemDropUpdatePacket = __toESM(require_Packet_ItemDropUpdate());
var ItemOwnerPacket = __toESM(require_Packet_ItemOwner());
var LoadoutSwitchPacket = __toESM(require_Packet_LoadoutSwitch());
var NetModuleLoadPacket = __toESM(require_Packet_NetModuleLoad());
var NpcBuffRemovalRequestPacket = __toESM(require_Packet_NpcBuffRemovalRequest());
var NpcBuffUpdatePacket = __toESM(require_Packet_NpcBuffUpdate());
var NpcCatchPacket = __toESM(require_Packet_NpcCatch());
var NpcFishOutPacket = __toESM(require_Packet_NpcFishOut());
var NpcHomeUpdatePacket = __toESM(require_Packet_NpcHomeUpdate());
var NpcKillCountPacket = __toESM(require_Packet_NpcKillCount());
var NpcNameUpdatePacket = __toESM(require_Packet_NpcNameUpdate());
var NpcShopItemPacket = __toESM(require_Packet_NpcShopItem());
var NpcTalkPacket = __toESM(require_Packet_NpcTalk());
var NpcTeleportPortalPacket = __toESM(require_Packet_NpcTeleportPortal());
var ObjectPlacePacket = __toESM(require_Packet_ObjectPlace());
var PartyTogglePacket = __toESM(require_Packet_PartyToggle());
var PlayerAnimationPacket = __toESM(require_Packet_PlayerAnimation());
var PlayerBuffAddPacket = __toESM(require_Packet_PlayerBuffAdd());
var PlayerChestIndexSyncPacket = __toESM(require_Packet_PlayerChestIndexSync());
var PlayerDeadPacket = __toESM(require_Packet_PlayerDead());
var PlayerDeathPacket = __toESM(require_Packet_PlayerDeath());
var PlayerDodgePacket = __toESM(require_Packet_PlayerDodge());
var PlayerManaPacket = __toESM(require_Packet_PlayerMana());
var PlayerTeamPacket = __toESM(require_Packet_PlayerTeam());
var PvpTogglePacket = __toESM(require_Packet_PvpToggle());
var ShimmerEffectOrCoinLuckPacket = __toESM(require_Packet_ShimmerEffectOrCoinLuck());
var SignNewPacket = __toESM(require_Packet_SignNew());
var SignReadPacket = __toESM(require_Packet_SignRead());
var SmokePoofPacket = __toESM(require_Packet_SmokePoof());
var SocialHandshakePacket = __toESM(require_Packet_SocialHandshake());
var StatusPacket = __toESM(require_Packet_Status());
var SwitchHitPacket = __toESM(require_Packet_SwitchHit());
var TeleportPacket = __toESM(require_Packet_Teleport());
var TeleportationPotionPacket = __toESM(require_Packet_TeleportationPotion());
var TemporaryAnimationCreatePacket = __toESM(require_Packet_TemporaryAnimationCreate());
var TileEntityDisplayDollItemSyncPacket = __toESM(require_Packet_TileEntityDisplayDollItemSync());
var TileEntityHatRackItemSyncPacket = __toESM(require_Packet_TileEntityHatRackItemSync());
var TileEntityInteractionRequestPacket = __toESM(require_Packet_TileEntityInteractionRequest());
var TileEntityPlacePacket = __toESM(require_Packet_TileEntityPlace());
var TileEntityUpdatePacket = __toESM(require_Packet_TileEntityUpdate());
var TileModifyPacket = __toESM(require_Packet_TileModify());
var TilePaintPacket = __toESM(require_Packet_TilePaint());
var TilePickingSyncPacket = __toESM(require_Packet_TilePickingSync());
var TileSectionFramePacket = __toESM(require_Packet_TileSectionFrame());
var TileSectionSendPacket = __toESM(require_Packet_TileSectionSend());
var TileSquareSendPacket = __toESM(require_Packet_TileSquareSend());
var TimeSetPacket = __toESM(require_Packet_TimeSet());
var TravellingMerchantInventoryPacket = __toESM(require_Packet_TravellingMerchantInventory());
var TreeGrowFxPacket = __toESM(require_Packet_TreeGrowFx());
var UnusedPacket = __toESM(require_Packet_Unused());
var WallPaintPacket = __toESM(require_Packet_WallPaint());
var WeaponsRackTryPlacingPacket = __toESM(require_Packet_WeaponsRackTryPlacing());
var WiredCannonShotPacket = __toESM(require_Packet_WiredCannonShot());
var WorldDataRequestPacket = __toESM(require_Packet_WorldDataRequest());
var ZonesPacket = __toESM(require_Packet_Zones());
var Array16 = __toESM(require_Array16());
var ArrayExt = __toESM(require_ArrayExt());
var BitFlags = __toESM(require_BitFlags());
var CreativePowers = __toESM(require_CreativePowers());
var ErrorAwarePacketWriter = __toESM(require_ErrorAwarePacketWriter());
var PlayerDeathReason = __toESM(require_PlayerDeathReason());
var PlayerSlotSetPacket = __toESM(require_Packet_PlayerSlotSet());
var PlayerUpdatePacket = __toESM(require_Packet_PlayerUpdate());
var PlayerInfoPacket = __toESM(require_Packet_PlayerInfo());
var PlayerSpawnPacket = __toESM(require_Packet_PlayerSpawn());
var PlayerInventorySlotPacket = __toESM(require_Packet_PlayerInventorySlot());
var PlayerHealthPacket = __toESM(require_Packet_PlayerHealth());
var ClientUuidPacket = __toESM(require_Packet_ClientUuid());
var ProjectileSyncPacket = __toESM(require_Packet_ProjectileSync());
var PlayerDamagePacket = __toESM(require_Packet_PlayerDamage());
var WorldInfoPacket = __toESM(require_Packet_WorldInfo());
var PlayerActivePacket = __toESM(require_Packet_PlayerActive());
var NpcUpdatePacket = __toESM(require_Packet_NpcUpdate());
var DisconnectPacket = __toESM(require_Packet_Disconnect());
var Point = __toESM(require_Point());
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnglerQuestCompletePacket,
  AnglerQuestPacket,
  Array16,
  ArrayExt,
  BitFlags,
  BossOrInvasionSpawnPacket,
  ChatMessageSmartPacket,
  ChestItemPacket,
  ChestOrTempleUnlockPacket,
  ChestPlacePacket,
  ClientFinishConnectingToServerPacket,
  ClientUuidPacket,
  ConnectRequestPacket,
  CountsAsHostForGameplaySetPacket,
  CreativePowers,
  CreditsOrSlimeTransformPacket,
  CrystalInvasionStartPacket,
  DimensionsUpdatePacket,
  DisconnectPacket,
  ErrorAwarePacketWriter,
  ExtraValueSyncPacket,
  HaveDryadDoStardewAnimationPacket,
  InvasionProgressReportPacket,
  ItemDropShimmeredUpdatePacket,
  ItemDropUpdatePacket,
  ItemOwnerPacket,
  LoadoutSwitchPacket,
  NetModuleLoadPacket,
  NpcBuffRemovalRequestPacket,
  NpcBuffUpdatePacket,
  NpcCatchPacket,
  NpcFishOutPacket,
  NpcHomeUpdatePacket,
  NpcKillCountPacket,
  NpcNameUpdatePacket,
  NpcShopItemPacket,
  NpcTalkPacket,
  NpcTeleportPortalPacket,
  NpcUpdatePacket,
  ObjectPlacePacket,
  PartyTogglePacket,
  PlayerActivePacket,
  PlayerAnimationPacket,
  PlayerBuffAddPacket,
  PlayerChestIndexSyncPacket,
  PlayerDamagePacket,
  PlayerDeadPacket,
  PlayerDeathPacket,
  PlayerDeathReason,
  PlayerDodgePacket,
  PlayerHealthPacket,
  PlayerInfoPacket,
  PlayerInventorySlotPacket,
  PlayerManaPacket,
  PlayerSlotSetPacket,
  PlayerSpawnPacket,
  PlayerTeamPacket,
  PlayerUpdatePacket,
  Point,
  ProjectileSyncPacket,
  PvpTogglePacket,
  ShimmerEffectOrCoinLuckPacket,
  SignNewPacket,
  SignReadPacket,
  SmokePoofPacket,
  SocialHandshakePacket,
  StatusPacket,
  SwitchHitPacket,
  TeleportPacket,
  TeleportationPotionPacket,
  TemporaryAnimationCreatePacket,
  TileEntityDisplayDollItemSyncPacket,
  TileEntityHatRackItemSyncPacket,
  TileEntityInteractionRequestPacket,
  TileEntityPlacePacket,
  TileEntityUpdatePacket,
  TileModifyPacket,
  TilePaintPacket,
  TilePickingSyncPacket,
  TileSectionFramePacket,
  TileSectionSendPacket,
  TileSquareSendPacket,
  TimeSetPacket,
  TravellingMerchantInventoryPacket,
  TreeGrowFxPacket,
  UnusedPacket,
  WallPaintPacket,
  WeaponsRackTryPlacingPacket,
  WiredCannonShotPacket,
  WorldDataRequestPacket,
  WorldInfoPacket,
  ZonesPacket
});
/*! Bundled license information:

utf8/utf8.js:
  (*! https://mths.be/utf8js v2.1.2 by @mathias *)
*/
