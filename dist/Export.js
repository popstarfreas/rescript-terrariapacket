"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all7) => {
  for (var name in all7)
    __defProp(target, name, { get: all7[name], enumerable: true });
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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_option.js
var Primitive_option_exports = {};
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
function fromNullable(x) {
  if (x == null) {
    return;
  } else {
    return some(x);
  }
}
function fromUndefined(x) {
  if (x === void 0) {
    return;
  } else {
    return some(x);
  }
}
function fromNull(x) {
  if (x === null) {
    return;
  } else {
    return some(x);
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
function toUndefined(x) {
  if (x === void 0) {
    return;
  } else {
    return valFromOption(x);
  }
}
function unwrapPolyVar(x) {
  if (x !== void 0) {
    return x.VAL;
  } else {
    return x;
  }
}
var init_Primitive_option = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_option.js"() {
    "use strict";
    exports.fromNullable = fromNullable;
    exports.fromUndefined = fromUndefined;
    exports.fromNull = fromNull;
    exports.valFromOption = valFromOption;
    exports.some = some;
    exports.isNested = isNested;
    exports.toUndefined = toUndefined;
    exports.unwrapPolyVar = unwrapPolyVar;
  }
});

// src/packet/Packet_AnglerQuest.js
var require_Packet_AnglerQuest = __commonJS({
  "src/packet/Packet_AnglerQuest.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_AnglerQuestComplete.js
var require_Packet_AnglerQuestComplete = __commonJS({
  "src/packet/Packet_AnglerQuestComplete.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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

// node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/src/ManagedPacketWriter.js
var require_ManagedPacketWriter = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/src/ManagedPacketWriter.js"(exports2) {
    "use strict";
    function setType(untypedT, packetType) {
      return untypedT.setType(packetType);
    }
    exports2.setType = setType;
  }
});

// node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/networktext.js
var require_networktext = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/networktext.js"(exports2) {
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
        var length2 = string.length;
        var value;
        var extra;
        while (counter < length2) {
          value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length2) {
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
        var length2 = array.length;
        var index = -1;
        var value;
        var output = "";
        while (++index < length2) {
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
        var length2 = codePoints.length;
        var index = -1;
        var codePoint;
        var byteString = "";
        while (++index < length2) {
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

// node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/bufferwriter.js
var require_bufferwriter = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/bufferwriter.js"(exports2) {
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

// node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/utils.js"(exports2) {
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
      let length2;
      let data;
      let index = 0;
      let packetType;
      let bufferPacket = Buffer.allocUnsafe(0);
      if (buf.length > 1) {
        while (!end) {
          length2 = reader.readUInt16();
          if (length2 === 0) {
            end = true;
          } else {
            data = buf.slice(reader.head - 2, reader.head - 2 + length2);
            reader.head += length2 - 2;
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

// node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/bufferreader.js
var require_bufferreader = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/bufferreader.js"(exports2) {
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
      readBuffer(size4) {
        const buffer = this._data.slice(this.head, this.head + size4);
        this.head += size4;
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

// node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/packetreader.js
var require_packetreader = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/packetreader.js"(exports2) {
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

// node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/dumbpacketwriter.js
var require_dumbpacketwriter = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/dumbpacketwriter.js"(exports2) {
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

// node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/packetwriter.js
var require_packetwriter = __commonJS({
  "node_modules/.pnpm/@popstarfreas+packetfactory@6.3.0/node_modules/@popstarfreas/packetfactory/packetwriter.js"(exports2) {
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
      let reader = new Packetreader(payload);
      let playerId = reader.readInt16();
      let invasionType = reader.readInt16();
      let spawnType;
      let exit = 0;
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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_exceptions.js
var Primitive_exceptions_exports = {};
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
function create(str) {
  let v = idMap[str];
  if (v !== void 0) {
    let id = v + 1 | 0;
    idMap[str] = id;
    return str + ("/" + id);
  }
  idMap[str] = 1;
  return str;
}
var idMap, $$Error;
var init_Primitive_exceptions = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_exceptions.js"() {
    "use strict";
    idMap = {};
    $$Error = "JsExn";
    exports.$$Error = $$Error;
    exports.create = create;
    exports.internalToException = internalToException;
  }
});

// src/ErrorAwarePacketReader.js
var require_ErrorAwarePacketReader = __commonJS({
  "src/ErrorAwarePacketReader.js"(exports2) {
    "use strict";
    var Primitive_exceptions3 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
    var ReadError = /* @__PURE__ */ Primitive_exceptions3.create("ErrorAwarePacketReader-TerrariaPacket.ReadError");
    function readByte(reader, context) {
      try {
        return reader.readByte();
      } catch (raw_obj) {
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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

// src/ErrorAwarePacketWriter.js
var require_ErrorAwarePacketWriter = __commonJS({
  "src/ErrorAwarePacketWriter.js"(exports2) {
    "use strict";
    var Primitive_exceptions3 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetwriter = require_packetwriter().default;
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
    function make5() {
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
    exports2.make = make5;
  }
});

// src/packet/Packet_ChatMessageSmart.js
var require_Packet_ChatMessageSmart = __commonJS({
  "src/packet/Packet_ChatMessageSmart.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let color = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "color");
      let message = ErrorAwarePacketReader$TerrariaPacket.readNetworkText(reader, "message");
      let widthLimit = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "widthLimit");
      return {
        color,
        message,
        widthLimit
      };
    }
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readColor: ErrorAwarePacketReader$TerrariaPacket.readColor,
      readNetworkText: ErrorAwarePacketReader$TerrariaPacket.readNetworkText,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packNetworkText(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ChatMessageSmart")), self.color, "color"), self.message, "message"), self.widthLimit, "widthLimit"));
    }
    var Encode = {
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
      packColor: ErrorAwarePacketWriter$TerrariaPacket.packColor,
      packNetworkText: ErrorAwarePacketWriter$TerrariaPacket.packNetworkText,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
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
      let reader = new Packetreader(payload);
      let chestId = reader.readInt16();
      let slot = reader.readByte();
      let stack = reader.readInt16();
      let prefix = reader.readByte();
      let itemNetId = reader.readInt16();
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
      let reader = new Packetreader(payload);
      let unlockType = unlockTypeFromInt(reader.readByte());
      let x = reader.readInt16();
      let y = reader.readInt16();
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
      let reader = new Packetreader(payload);
      let action = fromInt(reader.readByte());
      let x = reader.readInt16();
      let y = reader.readInt16();
      let style = reader.readInt16();
      let id = reader.readInt16();
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
      return writer.packByte(byte);
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let version = reader.readString();
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_Option.js
var Belt_Option_exports = {};
function keep(opt, p) {
  if (opt !== void 0 && p(Primitive_option.valFromOption(opt))) {
    return opt;
  }
}
function forEach(opt, f) {
  if (opt !== void 0) {
    return f(Primitive_option.valFromOption(opt));
  }
}
function getOrThrow(x) {
  if (x !== void 0) {
    return Primitive_option.valFromOption(x);
  }
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}
function mapWithDefault(opt, $$default, f) {
  if (opt !== void 0) {
    return f(Primitive_option.valFromOption(opt));
  } else {
    return $$default;
  }
}
function map(opt, f) {
  if (opt !== void 0) {
    return Primitive_option.some(f(Primitive_option.valFromOption(opt)));
  }
}
function flatMap(opt, f) {
  if (opt !== void 0) {
    return f(Primitive_option.valFromOption(opt));
  }
}
function getWithDefault(opt, $$default) {
  if (opt !== void 0) {
    return Primitive_option.valFromOption(opt);
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
function eq(a, b, f) {
  if (a !== void 0) {
    if (b !== void 0) {
      return f(Primitive_option.valFromOption(a), Primitive_option.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === void 0;
  }
}
function cmp(a, b, f) {
  if (a !== void 0) {
    if (b !== void 0) {
      return f(Primitive_option.valFromOption(a), Primitive_option.valFromOption(b));
    } else {
      return 1;
    }
  } else if (b !== void 0) {
    return -1;
  } else {
    return 0;
  }
}
var Primitive_option, keepU, forEachU, getExn, mapWithDefaultU, mapU, flatMapU, eqU, cmpU;
var init_Belt_Option = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_Option.js"() {
    "use strict";
    Primitive_option = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    keepU = keep;
    forEachU = forEach;
    getExn = getOrThrow;
    mapWithDefaultU = mapWithDefault;
    mapU = map;
    flatMapU = flatMap;
    eqU = eq;
    cmpU = cmp;
    exports.keepU = keepU;
    exports.keep = keep;
    exports.forEachU = forEachU;
    exports.forEach = forEach;
    exports.getExn = getExn;
    exports.getOrThrow = getOrThrow;
    exports.mapWithDefaultU = mapWithDefaultU;
    exports.mapWithDefault = mapWithDefault;
    exports.mapU = mapU;
    exports.map = map;
    exports.flatMapU = flatMapU;
    exports.flatMap = flatMap;
    exports.getWithDefault = getWithDefault;
    exports.orElse = orElse;
    exports.isSome = isSome;
    exports.isNone = isNone;
    exports.eqU = eqU;
    exports.eq = eq;
    exports.cmpU = cmpU;
    exports.cmp = cmp;
  }
});

// src/packet/Packet_CreditsOrSlimeTransform.js
var require_Packet_CreditsOrSlimeTransform = __commonJS({
  "src/packet/Packet_CreditsOrSlimeTransform.js"(exports2) {
    "use strict";
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
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
      let reader = new Packetreader(payload);
      let eventType = reader.readByte();
      let value = reader.readInt32();
      return Belt_Option.map(fromInt(eventType), (eventType2) => ({
        eventType: eventType2,
        value
      }));
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
    var Option;
    exports2.Option = Option;
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
      let reader = new Packetreader(payload);
      let x = reader.readInt16();
      let y = reader.readInt16();
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
      let reader = new Packetreader(payload);
      let updateType = reader.readInt16();
      let match = fromInt(updateType);
      if (match === void 0) {
        return;
      }
      switch (match) {
        case "RealIpAddress":
          let ip = reader.readString();
          return {
            TAG: "RealIpAddress",
            _0: ip
          };
        case "GamemodesJoinMode":
          return "GamemodesJoinMode";
        case "SwitchServer":
          let dimensionName = reader.readString();
          return {
            TAG: "SwitchServer",
            _0: dimensionName
          };
        case "SwitchServerManual":
          let ip$1 = reader.readString();
          let port = reader.readUInt16();
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
          let ip = self._0;
          return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")).packInt16(0).packString(ip).data;
        case "SwitchServer":
          let dimensionName = self._0;
          return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")).packInt16(2).packString(dimensionName).data;
        case "SwitchServerManual":
          let ip$1 = self._0;
          let port = self._1;
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
      let reader = new Packetreader(payload);
      let npcSlotId = reader.readInt16();
      let extraValue = reader.readInt32();
      let x = reader.readSingle();
      let y = reader.readSingle();
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetwriter = require_packetwriter().default;
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_JsError.js
var Stdlib_JsError_exports = {};
function throwWithMessage(str) {
  throw new Error(str);
}
function throwWithMessage$1(s) {
  throw new EvalError(s);
}
function throwWithMessage$2(s) {
  throw new RangeError(s);
}
function throwWithMessage$3(s) {
  throw new ReferenceError(s);
}
function throwWithMessage$4(s) {
  throw new SyntaxError(s);
}
function throwWithMessage$5(s) {
  throw new TypeError(s);
}
function throwWithMessage$6(s) {
  throw new URIError(s);
}
function panic(msg) {
  throw new Error(`Panic! ` + msg);
}
var $$EvalError$1, $$RangeError$1, $$ReferenceError$1, $$SyntaxError$1, $$TypeError$1, $$URIError$1;
var init_Stdlib_JsError = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_JsError.js"() {
    "use strict";
    $$EvalError$1 = {
      throwWithMessage: throwWithMessage$1
    };
    $$RangeError$1 = {
      throwWithMessage: throwWithMessage$2
    };
    $$ReferenceError$1 = {
      throwWithMessage: throwWithMessage$3
    };
    $$SyntaxError$1 = {
      throwWithMessage: throwWithMessage$4
    };
    $$TypeError$1 = {
      throwWithMessage: throwWithMessage$5
    };
    $$URIError$1 = {
      throwWithMessage: throwWithMessage$6
    };
    exports.$$EvalError = $$EvalError$1;
    exports.$$RangeError = $$RangeError$1;
    exports.$$ReferenceError = $$ReferenceError$1;
    exports.$$SyntaxError = $$SyntaxError$1;
    exports.$$TypeError = $$TypeError$1;
    exports.$$URIError = $$URIError$1;
    exports.throwWithMessage = throwWithMessage;
    exports.panic = panic;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Option.js
var Stdlib_Option_exports = {};
function filter(opt, p) {
  if (opt !== void 0 && p(Primitive_option2.valFromOption(opt))) {
    return opt;
  }
}
function forEach2(opt, f) {
  if (opt !== void 0) {
    return f(Primitive_option2.valFromOption(opt));
  }
}
function getOrThrow2(x, message) {
  if (x !== void 0) {
    return Primitive_option2.valFromOption(x);
  } else {
    return Stdlib_JsError.panic(message !== void 0 ? message : "Option.getOrThrow called for None value");
  }
}
function mapOr(opt, $$default, f) {
  if (opt !== void 0) {
    return f(Primitive_option2.valFromOption(opt));
  } else {
    return $$default;
  }
}
function map2(opt, f) {
  if (opt !== void 0) {
    return Primitive_option2.some(f(Primitive_option2.valFromOption(opt)));
  }
}
function flatMap2(opt, f) {
  if (opt !== void 0) {
    return f(Primitive_option2.valFromOption(opt));
  }
}
function getOr(opt, $$default) {
  if (opt !== void 0) {
    return Primitive_option2.valFromOption(opt);
  } else {
    return $$default;
  }
}
function orElse2(opt, other) {
  if (opt !== void 0) {
    return opt;
  } else {
    return other;
  }
}
function isSome2(x) {
  return x !== void 0;
}
function isNone2(x) {
  return x === void 0;
}
function equal(a, b, eq8) {
  if (a !== void 0) {
    if (b !== void 0) {
      return eq8(Primitive_option2.valFromOption(a), Primitive_option2.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === void 0;
  }
}
function compare(a, b, cmp8) {
  if (a !== void 0) {
    if (b !== void 0) {
      return cmp8(Primitive_option2.valFromOption(a), Primitive_option2.valFromOption(b));
    } else {
      return 1;
    }
  } else if (b !== void 0) {
    return -1;
  } else {
    return 0;
  }
}
function all(options) {
  let acc = [];
  let hasNone = false;
  let index = 0;
  while (hasNone === false && index < options.length) {
    let value = options[index];
    if (value !== void 0) {
      acc.push(Primitive_option2.valFromOption(value));
      index = index + 1 | 0;
    } else {
      hasNone = true;
    }
  }
  ;
  if (hasNone) {
    return;
  } else {
    return acc;
  }
}
function all2(param) {
  let b = param[1];
  let a = param[0];
  if (a !== void 0 && b !== void 0) {
    return [
      Primitive_option2.valFromOption(a),
      Primitive_option2.valFromOption(b)
    ];
  }
}
function all3(param) {
  let c = param[2];
  let b = param[1];
  let a = param[0];
  if (a !== void 0 && b !== void 0 && c !== void 0) {
    return [
      Primitive_option2.valFromOption(a),
      Primitive_option2.valFromOption(b),
      Primitive_option2.valFromOption(c)
    ];
  }
}
function all4(param) {
  let d = param[3];
  let c = param[2];
  let b = param[1];
  let a = param[0];
  if (a !== void 0 && b !== void 0 && c !== void 0 && d !== void 0) {
    return [
      Primitive_option2.valFromOption(a),
      Primitive_option2.valFromOption(b),
      Primitive_option2.valFromOption(c),
      Primitive_option2.valFromOption(d)
    ];
  }
}
function all5(param) {
  let e = param[4];
  let d = param[3];
  let c = param[2];
  let b = param[1];
  let a = param[0];
  if (a !== void 0 && b !== void 0 && c !== void 0 && d !== void 0 && e !== void 0) {
    return [
      Primitive_option2.valFromOption(a),
      Primitive_option2.valFromOption(b),
      Primitive_option2.valFromOption(c),
      Primitive_option2.valFromOption(d),
      Primitive_option2.valFromOption(e)
    ];
  }
}
function all6(param) {
  let f = param[5];
  let e = param[4];
  let d = param[3];
  let c = param[2];
  let b = param[1];
  let a = param[0];
  if (a !== void 0 && b !== void 0 && c !== void 0 && d !== void 0 && e !== void 0 && f !== void 0) {
    return [
      Primitive_option2.valFromOption(a),
      Primitive_option2.valFromOption(b),
      Primitive_option2.valFromOption(c),
      Primitive_option2.valFromOption(d),
      Primitive_option2.valFromOption(e),
      Primitive_option2.valFromOption(f)
    ];
  }
}
var Stdlib_JsError, Primitive_option2, getExn2, mapWithDefault2, getWithDefault2;
var init_Stdlib_Option = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Option.js"() {
    "use strict";
    Stdlib_JsError = (init_Stdlib_JsError(), __toCommonJS(Stdlib_JsError_exports));
    Primitive_option2 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    getExn2 = getOrThrow2;
    mapWithDefault2 = mapOr;
    getWithDefault2 = getOr;
    exports.filter = filter;
    exports.forEach = forEach2;
    exports.getExn = getExn2;
    exports.getOrThrow = getOrThrow2;
    exports.mapOr = mapOr;
    exports.mapWithDefault = mapWithDefault2;
    exports.map = map2;
    exports.flatMap = flatMap2;
    exports.getOr = getOr;
    exports.getWithDefault = getWithDefault2;
    exports.orElse = orElse2;
    exports.isSome = isSome2;
    exports.isNone = isNone2;
    exports.equal = equal;
    exports.compare = compare;
    exports.all = all;
    exports.all2 = all2;
    exports.all3 = all3;
    exports.all4 = all4;
    exports.all5 = all5;
    exports.all6 = all6;
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
      let reader = new Packetreader(payload);
      let itemDropId = reader.readInt16();
      let x = reader.readSingle();
      let y = reader.readSingle();
      let vx = reader.readSingle();
      let vy = reader.readSingle();
      let stack = reader.readInt16();
      let prefix = reader.readByte();
      let noDelay = reader.readByte();
      let itemId = reader.readInt16();
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
    var Stdlib_Option = (init_Stdlib_Option(), __toCommonJS(Stdlib_Option_exports));
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
      return Stdlib_Option.map(Packet_ItemDropUpdate$TerrariaPacket.parse(payload), (itemDropUpdate) => {
        let reader = new Packetreader(payload);
        reader.readBytes(24);
        let shimmered = reader.readByte() === 1;
        let shimmeredTime = reader.readSingle();
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
      let reader = new Packetreader(payload);
      let itemDropId = reader.readInt16();
      let owner = reader.readByte();
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let loadout = reader.readByte();
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
    var Stdlib_Option = (init_Stdlib_Option(), __toCommonJS(Stdlib_Option_exports));
    function intoChunks(self, chunkSize) {
      let chunked = [];
      let len = self.length;
      let max6 = (Math.ceil(len / chunkSize) | 0) - 1 | 0;
      for (let i = 0; i <= max6; ++i) {
        let __x = self.slice(i * chunkSize | 0, (i + 1 | 0) * chunkSize | 0);
        chunked.push(__x);
      }
      return chunked;
    }
    function getOr2(self, index, or) {
      return Stdlib_Option.getOr(self[index], or);
    }
    exports2.intoChunks = intoChunks;
    exports2.getOr = getOr2;
  }
});

// src/BitFlags.js
var require_BitFlags = __commonJS({
  "src/BitFlags.js"(exports2) {
    "use strict";
    var ArrayExt$TerrariaPacket = require_ArrayExt();
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
    function fromArray5(flags) {
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
    function forEach7(self, fn) {
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
    exports2.fromArray = fromArray5;
    exports2.flag1 = flag1;
    exports2.flag2 = flag2;
    exports2.flag3 = flag3;
    exports2.flag4 = flag4;
    exports2.flag5 = flag5;
    exports2.flag6 = flag6;
    exports2.flag7 = flag7;
    exports2.flag8 = flag8;
    exports2.flagN = flagN;
    exports2.forEach = forEach7;
    exports2.toByte = toByte;
  }
});

// src/CreativePowers.js
var require_CreativePowers = __commonJS({
  "src/CreativePowers.js"(exports2) {
    "use strict";
    var Stdlib_Option = (init_Stdlib_Option(), __toCommonJS(Stdlib_Option_exports));
    var ArrayExt$TerrariaPacket = require_ArrayExt();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function toString(self) {
      return `PerPlayerSliderPower { playerId: ` + self.playerId.toString() + `, value: ` + self.value.toString() + ` }`;
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
        let bytes = ArrayExt$TerrariaPacket.intoChunks(values, 8).map(BitFlags$TerrariaPacket.fromArray).map(BitFlags$TerrariaPacket.toByte);
        return ErrorAwarePacketWriter$TerrariaPacket.packBytes(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 0, "everyoneType"), bytes, "everyoneValues");
      } else {
        let playerId = self._0;
        let value = self._1;
        return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 1, "playerType"), playerId, "playerId"), value ? 1 : 0, "playerValue");
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
          BitFlags$TerrariaPacket.forEach(BitFlags$TerrariaPacket.fromByte(byte), (flag) => {
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
            return `SpawnRateSliderPerPlayerPower { sliderPower: ` + toString(self._0) + ` }`;
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
            let value = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 0, "freezeTimeType"), value ? 1 : 0, "freezeTimeValue");
          case "GodmodePower":
            let message = self._0;
            return pack$1(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 5, "godmodePowerType"), message);
          case "ModifyWindDirectionAndStrength":
            let value$1 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 6, "modifyWindDirectionAndStrengthType"), value$1, "modifyWindDirectionAndStrengthValue");
          case "ModifyRainPower":
            let value$2 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 7, "modifyRainPowerType"), value$2, "modifyRainPowerValue");
          case "ModifyTimeRate":
            let value$3 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 8, "modifyTimeRateType"), value$3, "modifyTimeRateValue");
          case "FreezeRainPower":
            let on = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 9, "freezeRainPowerType"), on ? 1 : 0, "freezeRainPowerValue");
          case "FreezeWindDirectionAndStrength":
            let on$1 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 10, "freezeWindDirectionAndStrengthType"), on$1 ? 1 : 0, "freezeWindDirectionAndStrengthValue");
          case "FarPlacementRangePower":
            let message$1 = self._0;
            return pack$1(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 11, "farPlacementRangePowerType"), message$1);
          case "DifficultySliderPower":
            let value$4 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 12, "difficultySliderPowerType"), value$4, "difficultySliderPowerValue");
          case "StopBiomeSpreadPower":
            let on$2 = self._0;
            return ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 13, "stopBiomeSpreadPowerType"), on$2 ? 1 : 0, "stopBiomeSpreadPowerValue");
          case "SpawnRateSliderPerPlayerPower":
            let message$2 = self._0;
            return pack(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, 14, "spawnRateSliderPerPlayerPowerType"), message$2);
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
          return Stdlib_Option.map(parse$1(reader), (m) => ({
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
          return Stdlib_Option.map(parse$1(reader), (m) => ({
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
          return Stdlib_Option.map(parse(reader), (m) => ({
            TAG: "SpawnRateSliderPerPlayerPower",
            _0: m
          }));
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

// src/packet/Packet_NetModuleLoad.js
var require_Packet_NetModuleLoad = __commonJS({
  "src/packet/Packet_NetModuleLoad.js"(exports2) {
    "use strict";
    var Stdlib_Option = (init_Stdlib_Option(), __toCommonJS(Stdlib_Option_exports));
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
          let liquid = self._0;
          let writer = ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 0, "moduleType"), liquid.changes.length, "changesCount");
          liquid.changes.forEach((change) => {
            ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, change.y, "y"), change.x, "x"), change.amount, "amount"), change.liquidType, "liquidType");
          });
          return ErrorAwarePacketWriter$TerrariaPacket.data(writer);
        case "ClientText":
          let commandId = self._0;
          let message = self._1;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 1, "moduleType"), commandId, "commandId"), message, "message"));
        case "ServerText":
          let playerId = self._0;
          let networkText = self._1;
          let color = self._2;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packNetworkText(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 1, "moduleType"), playerId, "playerId"), networkText, "networkText"), color, "color"));
        case "Ping":
          let ping = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 2, "moduleType"), ping.x, "x"), ping.y, "y"));
        case "Ambience":
          let ambience = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 3, "moduleType"), ambience.playerId, "playerId"), ambience.seed, "seed"), ambience.skyEntityType, "skyEntityType"));
        case "Bestiary":
          let bestiary = self._0;
          let writer$1 = ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 4, "moduleType");
          let _count = bestiary.unlockType;
          let tmp;
          tmp = typeof _count !== "object" ? _count === "Sight" ? ErrorAwarePacketWriter$TerrariaPacket.packByte(writer$1, 1, "unlockTypeByte") : ErrorAwarePacketWriter$TerrariaPacket.packByte(writer$1, 2, "unlockTypeByte") : ErrorAwarePacketWriter$TerrariaPacket.packByte(writer$1, 0, "unlockTypeByte");
          ErrorAwarePacketWriter$TerrariaPacket.packInt16(tmp, bestiary.npcId, "npcId");
          let count = bestiary.unlockType;
          let tmp$1;
          tmp$1 = typeof count !== "object" ? writer$1 : ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer$1, count._0, "killCount");
          return ErrorAwarePacketWriter$TerrariaPacket.data(tmp$1);
        case "CreativeUnlocks":
          let creativeUnlock = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 5, "moduleType"), creativeUnlock.itemId, "itemId"), creativeUnlock.researchedCount, "researchedCount"));
        case "CreativePower":
          let creativePower = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(CreativePowers$TerrariaPacket.pack(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 6, "moduleType"), creativePower));
        case "CreativeUnlocksPlayerReport":
          let unlockReport = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 7, "moduleType"), unlockReport.itemId, "itemId"), unlockReport.researchedCount, "researchedCount"));
        case "TeleportPylon":
          let teleportPylon = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 8, "moduleType"), pylonActionToInt(teleportPylon.pylonAction), "pylonAction"), teleportPylon.x, "x"), teleportPylon.y, "y"), teleportPylon.pylonType, "pylonType"));
        case "Particles":
          let particle = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 9, "moduleType"), particle.particleType, "particleType"), particle.x, "x"), particle.y, "y"), particle.vx, "vx"), particle.vy, "vy"), particle.shaderIndex, "shaderIndex"), particle.invokedByPlayer, "invokedByPlayer"));
        case "CreativePowerPermissions":
          let creativePowerPermission = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NetModuleLoad")), 10, "moduleType"), creativePowerPermission.powerType, "powerType"), powerLevelToInt(creativePowerPermission.powerLevel), "powerLevel"));
      }
    }
    function parse(payload, fromServer) {
      let reader = new Packetreader(payload);
      let moduleType = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "moduleType");
      let match = fromInt(moduleType);
      if (match === void 0) {
        return;
      }
      switch (match) {
        case "Liquid":
          let changesCount = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "changesCount");
          let changes = [];
          for (let _for = 0; _for < changesCount; ++_for) {
            let y = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
            let x = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
            let amount = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "amount");
            let liquidType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidType");
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
            let playerId = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
            let message = ErrorAwarePacketReader$TerrariaPacket.readNetworkText(reader, "message");
            let color = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "color");
            return {
              TAG: "ServerText",
              _0: playerId,
              _1: message,
              _2: color
            };
          }
          let commandId = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "commandId");
          let message$1 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "message");
          return {
            TAG: "ClientText",
            _0: commandId,
            _1: message$1
          };
        case "Ping":
          let x$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
          let y$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
          return {
            TAG: "Ping",
            _0: {
              x: x$1,
              y: y$1
            }
          };
        case "Ambience":
          let playerId$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
          let seed = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "seed");
          let skyEntityType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "skyEntityType");
          return {
            TAG: "Ambience",
            _0: {
              playerId: playerId$1,
              seed,
              skyEntityType
            }
          };
        case "Bestiary":
          let rawBestiaryUnlockType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "rawBestiaryUnlockType");
          let npcId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
          let bestiaryUnlockType;
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
          let itemId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
          let researchedCount = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "researchedCount");
          return {
            TAG: "CreativeUnlocks",
            _0: {
              itemId,
              researchedCount
            }
          };
        case "CreativePower":
          return Stdlib_Option.map(CreativePowers$TerrariaPacket.parse(reader), (p) => ({
            TAG: "CreativePower",
            _0: p
          }));
        case "CreativeUnlocksPlayerReport":
          ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "unknownByte");
          let itemId$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "itemId");
          let researchedCount$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "researchedCount");
          return {
            TAG: "CreativeUnlocksPlayerReport",
            _0: {
              itemId: itemId$1,
              researchedCount: researchedCount$1
            }
          };
        case "TeleportPylon":
          let rawPylonAction = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "rawPylonAction");
          let x$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
          let y$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
          let pylonType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "pylonType");
          let pylonAction;
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
          let particleType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "particleType");
          let x$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
          let y$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
          let vx = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
          let vy = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
          let shaderIndex = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "shaderIndex");
          let invokedByPlayer = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "invokedByPlayer");
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
          let powerType = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "powerType");
          let rawPowerLevel = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "rawPowerLevel");
          let powerLevel;
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Pervasives.js
var Pervasives_exports = {};
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
function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}
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
  let n = Number.parseInt(s);
  if (n === NaN) {
    return;
  } else {
    return n;
  }
}
function $at(l1, l2) {
  if (l1 !== 0) {
    return {
      hd: l1.hd,
      tl: $at(l1.tl, l2)
    };
  } else {
    return l2;
  }
}
var Primitive_exceptions, Exit, min_int, max_int, infinity, neg_infinity, max_float, min_float, epsilon_float;
var init_Pervasives = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Pervasives.js"() {
    "use strict";
    Primitive_exceptions = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
    Exit = /* @__PURE__ */ Primitive_exceptions.create("Pervasives.Exit");
    min_int = -2147483648;
    max_int = 2147483647;
    infinity = Infinity;
    neg_infinity = -Infinity;
    max_float = 17976931348623157e292;
    min_float = 22250738585072014e-324;
    epsilon_float = 2220446049250313e-31;
    exports.failwith = failwith;
    exports.invalid_arg = invalid_arg;
    exports.Exit = Exit;
    exports.abs = abs;
    exports.max_int = max_int;
    exports.min_int = min_int;
    exports.infinity = infinity;
    exports.neg_infinity = neg_infinity;
    exports.max_float = max_float;
    exports.min_float = min_float;
    exports.epsilon_float = epsilon_float;
    exports.classify_float = classify_float;
    exports.char_of_int = char_of_int;
    exports.string_of_bool = string_of_bool;
    exports.bool_of_string = bool_of_string;
    exports.bool_of_string_opt = bool_of_string_opt;
    exports.int_of_string_opt = int_of_string_opt;
    exports.$at = $at;
  }
});

// src/packet/Packet_NpcBuffUpdate.js
var require_Packet_NpcBuffUpdate = __commonJS({
  "src/packet/Packet_NpcBuffUpdate.js"(exports2) {
    "use strict";
    var Pervasives = (init_Pervasives(), __toCommonJS(Pervasives_exports));
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
      let reader = new Packetreader(payload);
      let npcId = reader.readInt16();
      let buffs = [];
      let buffTimes = [];
      for (let _i = 1; _i <= 20; ++_i) {
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
      buffs.forEach((buff) => {
        writer.packUInt16(buff);
      });
      return writer;
    }
    function packBuffTimes(writer, buffTimes) {
      buffTimes.forEach((buff) => {
        writer.packInt16(buff);
      });
      return writer;
    }
    function toBuffer(self) {
      if (self.buffs.length !== 20) {
        Pervasives.failwith(`Expected 20 buffs, got ` + self.buffs.length.toString());
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
      let reader = new Packetreader(payload);
      let npcId = reader.readInt16();
      let playerId = reader.readByte();
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcHomeUpdate.js
var require_Packet_NpcHomeUpdate = __commonJS({
  "src/packet/Packet_NpcHomeUpdate.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcKillCount.js
var require_Packet_NpcKillCount = __commonJS({
  "src/packet/Packet_NpcKillCount.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcNameUpdate.js
var require_Packet_NpcNameUpdate = __commonJS({
  "src/packet/Packet_NpcNameUpdate.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcShopItem.js
var require_Packet_NpcShopItem = __commonJS({
  "src/packet/Packet_NpcShopItem.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcTalk.js
var require_Packet_NpcTalk = __commonJS({
  "src/packet/Packet_NpcTalk.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcTeleportPortal.js
var require_Packet_NpcTeleportPortal = __commonJS({
  "src/packet/Packet_NpcTeleportPortal.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let x = reader.readInt16();
      let y = reader.readInt16();
      let objectType = reader.readInt16();
      let style = reader.readInt16();
      let alternate = reader.readByte();
      let random = reader.readSByte();
      let match = reader.readByte();
      let direction = match !== 0 ? "Right" : "Left";
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
      let match = self.direction;
      let tmp;
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerAnimation.js
var require_Packet_PlayerAnimation = __commonJS({
  "src/packet/Packet_PlayerAnimation.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let buff = reader.readUInt16();
      let time = reader.readInt32();
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

// src/packet/Packet_PlayerBuffsSet.js
var require_Packet_PlayerBuffsSet = __commonJS({
  "src/packet/Packet_PlayerBuffsSet.js"(exports2) {
    "use strict";
    var Pervasives = (init_Pervasives(), __toCommonJS(Pervasives_exports));
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let buffs = [];
      for (let _i = 1; _i <= 44; ++_i) {
        buffs.push(reader.readUInt16());
      }
      return {
        playerId,
        buffs
      };
    }
    function packBuffs(writer, buffs) {
      buffs.forEach((buff) => {
        writer.packUInt16(buff);
      });
      return writer;
    }
    function toBuffer(self) {
      if (self.buffs.length !== 44) {
        Pervasives.failwith(`Expected 44 buffs, got ` + self.buffs.length.toString());
      }
      return packBuffs(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerBuffsSet")).packByte(self.playerId), self.buffs).data;
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerChestIndexSync.js
var require_Packet_PlayerChestIndexSync = __commonJS({
  "src/packet/Packet_PlayerChestIndexSync.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerDead.js
var require_Packet_PlayerDead = __commonJS({
  "src/packet/Packet_PlayerDead.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/PlayerDeathReason.js
var require_PlayerDeathReason = __commonJS({
  "src/PlayerDeathReason.js"(exports2) {
    "use strict";
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
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
      let reasonType = BitFlags$TerrariaPacket.fromByte(reader.readByte());
      let killerPlayerId = BitFlags$TerrariaPacket.flag1(reasonType) ? reader.readInt16() : void 0;
      let killerNpcId = BitFlags$TerrariaPacket.flag2(reasonType) ? reader.readInt16() : void 0;
      let killerProjectileId = BitFlags$TerrariaPacket.flag3(reasonType) ? reader.readInt16() : void 0;
      let typeOfDeathOther = BitFlags$TerrariaPacket.flag4(reasonType) ? otherFromByte(reader.readByte()) : void 0;
      let projectileType = BitFlags$TerrariaPacket.flag5(reasonType) ? reader.readInt16() : void 0;
      let itemType = BitFlags$TerrariaPacket.flag6(reasonType) ? reader.readInt16() : void 0;
      let itemPrefix = BitFlags$TerrariaPacket.flag7(reasonType) ? reader.readByte() : void 0;
      let deathReason = BitFlags$TerrariaPacket.flag8(reasonType) ? reader.readString() : void 0;
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
      let flags = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(self.killerPlayerId), Belt_Option.isSome(self.killerNpcId), Belt_Option.isSome(self.killerProjectileId), Belt_Option.isSome(self.typeOfDeathOther), Belt_Option.isSome(self.projectileType), Belt_Option.isSome(self.itemType), Belt_Option.isSome(self.itemPrefix), Belt_Option.isSome(self.deathReason));
      return writer.packByte(BitFlags$TerrariaPacket.toByte(flags));
    }
    function packKillerPlayerId(writer, self) {
      let killerPlayerId = self.killerPlayerId;
      if (killerPlayerId !== void 0) {
        return writer.packInt16(killerPlayerId);
      } else {
        return writer;
      }
    }
    function packKillerNpcId(writer, self) {
      let killerNpcId = self.killerNpcId;
      if (killerNpcId !== void 0) {
        return writer.packInt16(killerNpcId);
      } else {
        return writer;
      }
    }
    function packKillerProjectileId(writer, self) {
      let killerProjectileId = self.killerProjectileId;
      if (killerProjectileId !== void 0) {
        return writer.packInt16(killerProjectileId);
      } else {
        return writer;
      }
    }
    function packTypeOfDeathOther(writer, self) {
      let typeOfDeathOther = self.typeOfDeathOther;
      if (typeOfDeathOther !== void 0) {
        return writer.packByte(otherToByte(typeOfDeathOther));
      } else {
        return writer;
      }
    }
    function packProjectileType(writer, self) {
      let projectileType = self.projectileType;
      if (projectileType !== void 0) {
        return writer.packInt16(projectileType);
      } else {
        return writer;
      }
    }
    function packItemType(writer, self) {
      let itemType = self.itemType;
      if (itemType !== void 0) {
        return writer.packInt16(itemType);
      } else {
        return writer;
      }
    }
    function packItemPrefix(writer, self) {
      let itemPrefix = self.itemPrefix;
      if (itemPrefix !== void 0) {
        return writer.packByte(itemPrefix);
      } else {
        return writer;
      }
    }
    function pack(writer, self) {
      let writer$1 = packItemPrefix(packItemType(packProjectileType(packTypeOfDeathOther(packKillerProjectileId(packKillerNpcId(packKillerPlayerId(packFlags(writer, self), self), self), self), self), self), self), self);
      let deathReason = self.deathReason;
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let deathReason = PlayerDeathReason$TerrariaPacket.readDeathReason(reader);
      let damage = reader.readInt16();
      let hitDirection = reader.readByte();
      let pvp = reader.readByte() === 1;
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let mana = reader.readInt16();
      let maxMana = reader.readInt16();
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let pvpEnabled = reader.readByte() === 1;
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
      let reader = new Packetreader(payload);
      let match = reader.readByte();
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
      let writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ShimmerEffectOrCoinLuck"));
      let tmp;
      switch (self.TAG) {
        case "ShimmerEffect":
          tmp = writer.packByte(0).packSingle(self._0).packSingle(self._1);
          break;
        case "CoinLuck":
          let match = self._0;
          let position = match.position;
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_SignRead.js
var require_Packet_SignRead = __commonJS({
  "src/packet/Packet_SignRead.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_SmokePoof.js
var require_Packet_SmokePoof = __commonJS({
  "src/packet/Packet_SmokePoof.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_SocialHandshake.js
var require_Packet_SocialHandshake = __commonJS({
  "src/packet/Packet_SocialHandshake.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let max6 = reader.readInt32();
      let text = reader.readNetworkText();
      let flags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
      return {
        max: max6,
        text,
        flags: {
          hideStatusTextPercent: BitFlags$TerrariaPacket.flag1(flags),
          statusTextHasShadows: BitFlags$TerrariaPacket.flag2(flags),
          runCheckBytes: BitFlags$TerrariaPacket.flag3(flags)
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_Teleport.js
var require_Packet_Teleport = __commonJS({
  "src/packet/Packet_Teleport.js"(exports2) {
    "use strict";
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
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
      let reader = new Packetreader(payload);
      let flags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
      let getPositionFromTarget = BitFlags$TerrariaPacket.flag3(flags);
      let match = BitFlags$TerrariaPacket.flag1(flags);
      let match$1 = BitFlags$TerrariaPacket.flag2(flags);
      let teleportType = match ? match$1 ? void 0 : "Npc" : match$1 ? "PlayerToPlayer" : "Player";
      let targetId = reader.readInt16();
      let x = reader.readSingle();
      let y = reader.readSingle();
      let style = reader.readByte();
      let extraInfo = BitFlags$TerrariaPacket.flag4(flags) ? reader.readInt32() : void 0;
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
      let writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("Teleport")).packByte(getFlags(self)).packInt16(self.targetId).packSingle(self.x).packSingle(self.y).packByte(self.style);
      let extraInfo = self.extraInfo;
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
      let reader = new Packetreader(payload);
      let match = reader.readByte();
      let teleportType;
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let tileEntityId = reader.readInt32();
      let itemIndex = reader.readByte();
      let itemId = reader.readUInt16();
      let stack = reader.readUInt16();
      let prefix = reader.readByte();
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let tileEntityId = reader.readInt32();
      let itemIndex = reader.readByte();
      let itemId = reader.readUInt16();
      let stack = reader.readUInt16();
      let prefix = reader.readByte();
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_TileEntityPlace.js
var require_Packet_TileEntityPlace = __commonJS({
  "src/packet/Packet_TileEntityPlace.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_TileEntityUpdate.js
var require_Packet_TileEntityUpdate = __commonJS({
  "src/packet/Packet_TileEntityUpdate.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let action = fromInt(reader.readByte());
      let tileX = reader.readInt16();
      let tileY = reader.readInt16();
      let value1 = reader.readInt16();
      let value2 = reader.readByte();
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
      let reader = new Packetreader(payload);
      let x = reader.readInt16();
      let y = reader.readInt16();
      let color = reader.readByte();
      let coat = reader.readByte();
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let startX = reader.readInt16();
      let startY = reader.readInt16();
      let endX = reader.readInt16();
      let endY = reader.readInt16();
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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_int.js
var Primitive_int_exports = {};
function compare2(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}
function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
function div(x, y) {
  if (y === 0) {
    throw {
      RE_EXN_ID: "Division_by_zero",
      Error: new Error()
    };
  }
  return x / y | 0;
}
function mod_(x, y) {
  if (y === 0) {
    throw {
      RE_EXN_ID: "Division_by_zero",
      Error: new Error()
    };
  }
  return x % y;
}
var init_Primitive_int = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_int.js"() {
    "use strict";
    exports.compare = compare2;
    exports.min = min;
    exports.max = max;
    exports.div = div;
    exports.mod_ = mod_;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_Array.js
var Belt_Array_exports = {};
function get(arr, i) {
  if (i >= 0 && i < arr.length) {
    return Primitive_option3.some(arr[i]);
  }
}
function getOrThrow3(arr, i) {
  if (!(i >= 0 && i < arr.length)) {
    throw {
      RE_EXN_ID: "Assert_failure",
      _1: [
        "Belt_Array.res",
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
function setOrThrow(arr, i, v) {
  if (!(i >= 0 && i < arr.length)) {
    throw {
      RE_EXN_ID: "Assert_failure",
      _1: [
        "Belt_Array.res",
        51,
        2
      ],
      Error: new Error()
    };
  }
  arr[i] = v;
}
function swapUnsafe(xs, i, j) {
  let tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
}
function shuffleInPlace(xs) {
  let len = xs.length;
  let random_int = (min6, max6) => Math.floor(Math.random() * (max6 - min6 | 0)) + min6 | 0;
  for (let i = 0; i < len; ++i) {
    swapUnsafe(xs, i, random_int(i, len));
  }
}
function shuffle(xs) {
  let result = xs.slice(0);
  shuffleInPlace(result);
  return result;
}
function reverseInPlace(xs) {
  let len = xs.length;
  let ofs = 0;
  for (let i = 0, i_finish = len / 2 | 0; i < i_finish; ++i) {
    swapUnsafe(xs, ofs + i | 0, ((ofs + len | 0) - i | 0) - 1 | 0);
  }
}
function reverse(xs) {
  let len = xs.length;
  let result = new Array(len);
  for (let i = 0; i < len; ++i) {
    result[i] = xs[(len - 1 | 0) - i | 0];
  }
  return result;
}
function make(l, f) {
  if (l <= 0) {
    return [];
  }
  let res = new Array(l);
  for (let i = 0; i < l; ++i) {
    res[i] = f;
  }
  return res;
}
function makeBy(l, f) {
  if (l <= 0) {
    return [];
  }
  let res = new Array(l);
  for (let i = 0; i < l; ++i) {
    res[i] = f(i);
  }
  return res;
}
function makeByAndShuffle(l, f) {
  let u = makeBy(l, f);
  shuffleInPlace(u);
  return u;
}
function range(start, finish) {
  let cut = finish - start | 0;
  if (cut < 0) {
    return [];
  }
  let arr = new Array(cut + 1 | 0);
  for (let i = 0; i <= cut; ++i) {
    arr[i] = start + i | 0;
  }
  return arr;
}
function rangeBy(start, finish, step) {
  let cut = finish - start | 0;
  if (cut < 0 || step <= 0) {
    return [];
  }
  let nb = (cut / step | 0) + 1 | 0;
  let arr = new Array(nb);
  let cur = start;
  for (let i = 0; i < nb; ++i) {
    arr[i] = cur;
    cur = cur + step | 0;
  }
  return arr;
}
function zip(xs, ys) {
  let lenx = xs.length;
  let leny = ys.length;
  let len = Primitive_int.min(lenx, leny);
  let s = new Array(len);
  for (let i = 0; i < len; ++i) {
    s[i] = [
      xs[i],
      ys[i]
    ];
  }
  return s;
}
function zipBy(xs, ys, f) {
  let lenx = xs.length;
  let leny = ys.length;
  let len = Primitive_int.min(lenx, leny);
  let s = new Array(len);
  for (let i = 0; i < len; ++i) {
    s[i] = f(xs[i], ys[i]);
  }
  return s;
}
function concat(a1, a2) {
  let l1 = a1.length;
  let l2 = a2.length;
  let a1a2 = new Array(l1 + l2 | 0);
  for (let i = 0; i < l1; ++i) {
    a1a2[i] = a1[i];
  }
  for (let i$1 = 0; i$1 < l2; ++i$1) {
    a1a2[l1 + i$1 | 0] = a2[i$1];
  }
  return a1a2;
}
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
function slice(a, offset, len) {
  if (len <= 0) {
    return [];
  }
  let lena = a.length;
  let ofs = offset < 0 ? Primitive_int.max(lena + offset | 0, 0) : offset;
  let hasLen = lena - ofs | 0;
  let copyLength = Primitive_int.min(hasLen, len);
  if (copyLength <= 0) {
    return [];
  }
  let result = new Array(copyLength);
  for (let i = 0; i < copyLength; ++i) {
    result[i] = a[ofs + i | 0];
  }
  return result;
}
function sliceToEnd(a, offset) {
  let lena = a.length;
  let ofs = offset < 0 ? Primitive_int.max(lena + offset | 0, 0) : offset;
  let len = lena > ofs ? lena - ofs | 0 : 0;
  let result = new Array(len);
  for (let i = 0; i < len; ++i) {
    result[i] = a[ofs + i | 0];
  }
  return result;
}
function fill(a, offset, len, v) {
  if (len <= 0) {
    return;
  }
  let lena = a.length;
  let ofs = offset < 0 ? Primitive_int.max(lena + offset | 0, 0) : offset;
  let hasLen = lena - ofs | 0;
  let fillLength = Primitive_int.min(hasLen, len);
  if (fillLength <= 0) {
    return;
  }
  for (let i = ofs, i_finish = ofs + fillLength | 0; i < i_finish; ++i) {
    a[i] = v;
  }
}
function blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {
  if (srcofs2 <= srcofs1) {
    for (let j = 0; j < blitLength; ++j) {
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return;
  }
  for (let j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1) {
    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
  }
}
function blit(a1, ofs1, a2, ofs2, len) {
  let lena1 = a1.length;
  let lena2 = a2.length;
  let srcofs1 = ofs1 < 0 ? Primitive_int.max(lena1 + ofs1 | 0, 0) : ofs1;
  let srcofs2 = ofs2 < 0 ? Primitive_int.max(lena2 + ofs2 | 0, 0) : ofs2;
  let blitLength = Primitive_int.min(len, Primitive_int.min(lena1 - srcofs1 | 0, lena2 - srcofs2 | 0));
  if (srcofs2 <= srcofs1) {
    for (let j = 0; j < blitLength; ++j) {
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return;
  }
  for (let j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1) {
    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
  }
}
function forEach3(a, f) {
  for (let i = 0, i_finish = a.length; i < i_finish; ++i) {
    f(a[i]);
  }
}
function map3(a, f) {
  let l = a.length;
  let r = new Array(l);
  for (let i = 0; i < l; ++i) {
    r[i] = f(a[i]);
  }
  return r;
}
function flatMap3(a, f) {
  return concatMany(map3(a, f));
}
function getBy(a, p) {
  let l = a.length;
  let i = 0;
  let r;
  while (r === void 0 && i < l) {
    let v = a[i];
    if (p(v)) {
      r = Primitive_option3.some(v);
    }
    i = i + 1 | 0;
  }
  ;
  return r;
}
function getIndexBy(a, p) {
  let l = a.length;
  let i = 0;
  let r;
  while (r === void 0 && i < l) {
    let v = a[i];
    if (p(v)) {
      r = i;
    }
    i = i + 1 | 0;
  }
  ;
  return r;
}
function keep2(a, f) {
  let l = a.length;
  let r = new Array(l);
  let j = 0;
  for (let i = 0; i < l; ++i) {
    let v = a[i];
    if (f(v)) {
      r[j] = v;
      j = j + 1 | 0;
    }
  }
  r.length = j;
  return r;
}
function keepWithIndex(a, f) {
  let l = a.length;
  let r = new Array(l);
  let j = 0;
  for (let i = 0; i < l; ++i) {
    let v = a[i];
    if (f(v, i)) {
      r[j] = v;
      j = j + 1 | 0;
    }
  }
  r.length = j;
  return r;
}
function keepMap(a, f) {
  let l = a.length;
  let r = new Array(l);
  let j = 0;
  for (let i = 0; i < l; ++i) {
    let v = a[i];
    let v$1 = f(v);
    if (v$1 !== void 0) {
      r[j] = Primitive_option3.valFromOption(v$1);
      j = j + 1 | 0;
    }
  }
  r.length = j;
  return r;
}
function forEachWithIndex(a, f) {
  for (let i = 0, i_finish = a.length; i < i_finish; ++i) {
    f(i, a[i]);
  }
}
function mapWithIndex(a, f) {
  let l = a.length;
  let r = new Array(l);
  for (let i = 0; i < l; ++i) {
    r[i] = f(i, a[i]);
  }
  return r;
}
function reduce(a, x, f) {
  let r = x;
  for (let i = 0, i_finish = a.length; i < i_finish; ++i) {
    r = f(r, a[i]);
  }
  return r;
}
function reduceReverse(a, x, f) {
  let r = x;
  for (let i = a.length - 1 | 0; i >= 0; --i) {
    r = f(r, a[i]);
  }
  return r;
}
function reduceReverse2(a, b, x, f) {
  let r = x;
  let len = Primitive_int.min(a.length, b.length);
  for (let i = len - 1 | 0; i >= 0; --i) {
    r = f(r, a[i], b[i]);
  }
  return r;
}
function reduceWithIndex(a, x, f) {
  let r = x;
  for (let i = 0, i_finish = a.length; i < i_finish; ++i) {
    r = f(r, a[i], i);
  }
  return r;
}
function every(arr, b) {
  let len = arr.length;
  let _i = 0;
  while (true) {
    let i = _i;
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
function some2(arr, b) {
  let len = arr.length;
  let _i = 0;
  while (true) {
    let i = _i;
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
function everyAux2(arr1, arr2, _i, b, len) {
  while (true) {
    let i = _i;
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
function every2(a, b, p) {
  return everyAux2(a, b, 0, p, Primitive_int.min(a.length, b.length));
}
function some22(a, b, p) {
  let _i = 0;
  let len = Primitive_int.min(a.length, b.length);
  while (true) {
    let i = _i;
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
function eq2(a, b, p) {
  let lena = a.length;
  let lenb = b.length;
  if (lena === lenb) {
    return everyAux2(a, b, 0, p, lena);
  } else {
    return false;
  }
}
function cmp2(a, b, p) {
  let lena = a.length;
  let lenb = b.length;
  if (lena > lenb) {
    return 1;
  } else if (lena < lenb) {
    return -1;
  } else {
    let _i = 0;
    while (true) {
      let i = _i;
      if (i === lena) {
        return 0;
      }
      let c = p(a[i], b[i]);
      if (c !== 0) {
        return c;
      }
      _i = i + 1 | 0;
      continue;
    }
    ;
  }
}
function partition(a, f) {
  let l = a.length;
  let i = 0;
  let j = 0;
  let a1 = new Array(l);
  let a2 = new Array(l);
  for (let ii = 0; ii < l; ++ii) {
    let v = a[ii];
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
function unzip(a) {
  let l = a.length;
  let a1 = new Array(l);
  let a2 = new Array(l);
  for (let i = 0; i < l; ++i) {
    let match = a[i];
    a1[i] = match[0];
    a2[i] = match[1];
  }
  return [
    a1,
    a2
  ];
}
function joinWith(a, sep, toString) {
  let l = a.length;
  if (l === 0) {
    return "";
  }
  let lastIndex = l - 1 | 0;
  let _i = 0;
  let _res = "";
  while (true) {
    let res = _res;
    let i = _i;
    if (i === lastIndex) {
      return res + toString(a[i]);
    }
    _res = res + (toString(a[i]) + sep);
    _i = i + 1 | 0;
    continue;
  }
  ;
}
function init(n, f) {
  let v = new Array(n);
  for (let i = 0; i < n; ++i) {
    v[i] = f(i);
  }
  return v;
}
var Primitive_int, Primitive_option3, getExn3, setExn, makeByU, makeByAndShuffleU, zipByU, forEachU2, mapU2, flatMapU2, getByU, getIndexByU, keepU2, keepWithIndexU, keepMapU, forEachWithIndexU, mapWithIndexU, partitionU, reduceU, reduceReverseU, reduceReverse2U, reduceWithIndexU, joinWithU, someU, everyU, every2U, some2U, cmpU2, eqU2, initU;
var init_Belt_Array = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_Array.js"() {
    "use strict";
    Primitive_int = (init_Primitive_int(), __toCommonJS(Primitive_int_exports));
    Primitive_option3 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    getExn3 = getOrThrow3;
    setExn = setOrThrow;
    makeByU = makeBy;
    makeByAndShuffleU = makeByAndShuffle;
    zipByU = zipBy;
    forEachU2 = forEach3;
    mapU2 = map3;
    flatMapU2 = flatMap3;
    getByU = getBy;
    getIndexByU = getIndexBy;
    keepU2 = keep2;
    keepWithIndexU = keepWithIndex;
    keepMapU = keepMap;
    forEachWithIndexU = forEachWithIndex;
    mapWithIndexU = mapWithIndex;
    partitionU = partition;
    reduceU = reduce;
    reduceReverseU = reduceReverse;
    reduceReverse2U = reduceReverse2;
    reduceWithIndexU = reduceWithIndex;
    joinWithU = joinWith;
    someU = some2;
    everyU = every;
    every2U = every2;
    some2U = some22;
    cmpU2 = cmp2;
    eqU2 = eq2;
    initU = init;
    exports.get = get;
    exports.getExn = getExn3;
    exports.getOrThrow = getOrThrow3;
    exports.set = set;
    exports.setExn = setExn;
    exports.setOrThrow = setOrThrow;
    exports.shuffleInPlace = shuffleInPlace;
    exports.shuffle = shuffle;
    exports.reverseInPlace = reverseInPlace;
    exports.reverse = reverse;
    exports.make = make;
    exports.range = range;
    exports.rangeBy = rangeBy;
    exports.makeByU = makeByU;
    exports.makeBy = makeBy;
    exports.makeByAndShuffleU = makeByAndShuffleU;
    exports.makeByAndShuffle = makeByAndShuffle;
    exports.zip = zip;
    exports.zipByU = zipByU;
    exports.zipBy = zipBy;
    exports.unzip = unzip;
    exports.concat = concat;
    exports.concatMany = concatMany;
    exports.slice = slice;
    exports.sliceToEnd = sliceToEnd;
    exports.fill = fill;
    exports.blit = blit;
    exports.blitUnsafe = blitUnsafe;
    exports.forEachU = forEachU2;
    exports.forEach = forEach3;
    exports.mapU = mapU2;
    exports.map = map3;
    exports.flatMapU = flatMapU2;
    exports.flatMap = flatMap3;
    exports.getByU = getByU;
    exports.getBy = getBy;
    exports.getIndexByU = getIndexByU;
    exports.getIndexBy = getIndexBy;
    exports.keepU = keepU2;
    exports.keep = keep2;
    exports.keepWithIndexU = keepWithIndexU;
    exports.keepWithIndex = keepWithIndex;
    exports.keepMapU = keepMapU;
    exports.keepMap = keepMap;
    exports.forEachWithIndexU = forEachWithIndexU;
    exports.forEachWithIndex = forEachWithIndex;
    exports.mapWithIndexU = mapWithIndexU;
    exports.mapWithIndex = mapWithIndex;
    exports.partitionU = partitionU;
    exports.partition = partition;
    exports.reduceU = reduceU;
    exports.reduce = reduce;
    exports.reduceReverseU = reduceReverseU;
    exports.reduceReverse = reduceReverse;
    exports.reduceReverse2U = reduceReverse2U;
    exports.reduceReverse2 = reduceReverse2;
    exports.reduceWithIndexU = reduceWithIndexU;
    exports.reduceWithIndex = reduceWithIndex;
    exports.joinWithU = joinWithU;
    exports.joinWith = joinWith;
    exports.someU = someU;
    exports.some = some2;
    exports.everyU = everyU;
    exports.every = every;
    exports.every2U = every2U;
    exports.every2 = every2;
    exports.some2U = some2U;
    exports.some2 = some22;
    exports.cmpU = cmpU2;
    exports.cmp = cmp2;
    exports.eqU = eqU2;
    exports.eq = eq2;
    exports.initU = initU;
    exports.init = init;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_Result.js
var Belt_Result_exports = {};
function getOrThrow4(x) {
  if (x.TAG === "Ok") {
    return x._0;
  }
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}
function mapWithDefault3(opt, $$default, f) {
  if (opt.TAG === "Ok") {
    return f(opt._0);
  } else {
    return $$default;
  }
}
function map4(opt, f) {
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
function flatMap4(opt, f) {
  if (opt.TAG === "Ok") {
    return f(opt._0);
  } else {
    return {
      TAG: "Error",
      _0: opt._0
    };
  }
}
function getWithDefault3(opt, $$default) {
  if (opt.TAG === "Ok") {
    return opt._0;
  } else {
    return $$default;
  }
}
function isOk(x) {
  return x.TAG === "Ok";
}
function isError(x) {
  return x.TAG !== "Ok";
}
function eq3(a, b, f) {
  if (a.TAG === "Ok") {
    if (b.TAG === "Ok") {
      return f(a._0, b._0);
    } else {
      return false;
    }
  } else {
    return b.TAG !== "Ok";
  }
}
function cmp3(a, b, f) {
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
var getExn4, mapWithDefaultU2, mapU3, flatMapU3, eqU3, cmpU3;
var init_Belt_Result = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_Result.js"() {
    "use strict";
    getExn4 = getOrThrow4;
    mapWithDefaultU2 = mapWithDefault3;
    mapU3 = map4;
    flatMapU3 = flatMap4;
    eqU3 = eq3;
    cmpU3 = cmp3;
    exports.getExn = getExn4;
    exports.getOrThrow = getOrThrow4;
    exports.mapWithDefaultU = mapWithDefaultU2;
    exports.mapWithDefault = mapWithDefault3;
    exports.mapU = mapU3;
    exports.map = map4;
    exports.flatMapU = flatMapU3;
    exports.flatMap = flatMap4;
    exports.getWithDefault = getWithDefault3;
    exports.isOk = isOk;
    exports.isError = isError;
    exports.eqU = eqU3;
    exports.eq = eq3;
    exports.cmpU = cmpU3;
    exports.cmp = cmp3;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_bool.js
var Primitive_bool_exports = {};
function compare3(x, y) {
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
function min2(x, y) {
  if (x) {
    return y;
  } else {
    return x;
  }
}
function max2(x, y) {
  if (x) {
    return x;
  } else {
    return y;
  }
}
var init_Primitive_bool = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_bool.js"() {
    "use strict";
    exports.compare = compare3;
    exports.min = min2;
    exports.max = max2;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_float.js
var Primitive_float_exports = {};
function compare4(x, y) {
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
function min3(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
function max3(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
var init_Primitive_float = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_float.js"() {
    "use strict";
    exports.compare = compare4;
    exports.min = min3;
    exports.max = max3;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_string.js
var Primitive_string_exports = {};
function compare5(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}
function min4(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
function max4(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
function getChar(s, i) {
  if (i >= s.length || i < 0) {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "index out of bounds",
      Error: new Error()
    };
  }
  return s.codePointAt(i);
}
function make2(n, ch) {
  return String.fromCodePoint(ch).repeat(n);
}
var init_Primitive_string = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_string.js"() {
    "use strict";
    exports.compare = compare5;
    exports.min = min4;
    exports.max = max4;
    exports.getChar = getChar;
    exports.make = make2;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_object.js
var Primitive_object_exports = {};
function updateDummy(prim0, prim1) {
  Object.assign(prim0, prim1);
}
function compare6(a, b) {
  if (a === b) {
    return 0;
  }
  let a_type = typeof a;
  let b_type = typeof b;
  switch (a_type) {
    case "bigint":
      if (b_type === "bigint") {
        return Primitive_float.compare(a, b);
      }
      break;
    case "boolean":
      if (b_type === "boolean") {
        return Primitive_bool.compare(a, b);
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
        return Primitive_float.compare(a, b);
      }
      break;
    case "string":
      if (b_type === "string") {
        return Primitive_string.compare(a, b);
      } else {
        return 1;
      }
    case "undefined":
      return -1;
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
      let tag_a = a.TAG;
      let tag_b = b.TAG;
      if (tag_a !== tag_b) {
        if (tag_a < tag_b) {
          return -1;
        } else {
          return 1;
        }
      }
      let len_a = a.length | 0;
      let len_b = b.length | 0;
      if (len_a === len_b) {
        if (Array.isArray(a)) {
          let _i = 0;
          while (true) {
            let i = _i;
            if (i === len_a) {
              return 0;
            }
            let res = compare6(a[i], b[i]);
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
        let _i$1 = 0;
        while (true) {
          let i$1 = _i$1;
          if (i$1 === len_a) {
            return -1;
          }
          let res$1 = compare6(a[i$1], b[i$1]);
          if (res$1 !== 0) {
            return res$1;
          }
          _i$1 = i$1 + 1 | 0;
          continue;
        }
        ;
      } else {
        let _i$2 = 0;
        while (true) {
          let i$2 = _i$2;
          if (i$2 === len_b) {
            return 1;
          }
          let res$2 = compare6(a[i$2], b[i$2]);
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
  let min_key_lhs = {
    contents: void 0
  };
  let min_key_rhs = {
    contents: void 0
  };
  let do_key = (param, key) => {
    let min_key = param[2];
    let b2 = param[1];
    if (!(!Object.prototype.hasOwnProperty.call(b2, key) || compare6(param[0][key], b2[key]) > 0)) {
      return;
    }
    let mk = min_key.contents;
    if (mk !== void 0 && key >= mk) {
      return;
    } else {
      min_key.contents = key;
      return;
    }
  };
  let do_key_a = (key) => do_key([
    a,
    b,
    min_key_rhs
  ], key);
  let do_key_b = (key) => do_key([
    b,
    a,
    min_key_lhs
  ], key);
  for_in(a, do_key_a);
  for_in(b, do_key_b);
  let match = min_key_lhs.contents;
  let match$1 = min_key_rhs.contents;
  if (match !== void 0) {
    if (match$1 !== void 0) {
      return Primitive_string.compare(match, match$1);
    } else {
      return -1;
    }
  } else if (match$1 !== void 0) {
    return 1;
  } else {
    return 0;
  }
}
function equal2(a, b) {
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
        if (!equal2(a[i], b[i])) {
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
        if (!Object.prototype.hasOwnProperty.call(a, key) || !equal2(b[key], a[key])) {
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
    return !equal2(a, b);
  }
}
function greaterequal(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a >= b;
  } else {
    return compare6(a, b) >= 0;
  }
}
function greaterthan(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a > b;
  } else {
    return compare6(a, b) > 0;
  }
}
function lessequal(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a <= b;
  } else {
    return compare6(a, b) <= 0;
  }
}
function lessthan(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a < b;
  } else {
    return compare6(a, b) < 0;
  }
}
function min5(x, y) {
  if (compare6(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}
function max5(x, y) {
  if (compare6(x, y) >= 0) {
    return x;
  } else {
    return y;
  }
}
var Primitive_bool, Primitive_float, Primitive_string, for_in;
var init_Primitive_object = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_object.js"() {
    "use strict";
    Primitive_bool = (init_Primitive_bool(), __toCommonJS(Primitive_bool_exports));
    Primitive_float = (init_Primitive_float(), __toCommonJS(Primitive_float_exports));
    Primitive_string = (init_Primitive_string(), __toCommonJS(Primitive_string_exports));
    for_in = function(o, foo) {
      for (var x in o) {
        foo(x);
      }
    };
    exports.updateDummy = updateDummy;
    exports.compare = compare6;
    exports.equal = equal2;
    exports.notequal = notequal;
    exports.greaterequal = greaterequal;
    exports.greaterthan = greaterthan;
    exports.lessthan = lessthan;
    exports.lessequal = lessequal;
    exports.min = min5;
    exports.max = max5;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_SortArray.js
var Belt_SortArray_exports = {};
function sortedLengthAuxMore(xs, _prec, _acc, len, lt) {
  while (true) {
    let acc = _acc;
    let prec = _prec;
    if (acc >= len) {
      return acc;
    }
    let v = xs[acc];
    if (!lt(v, prec)) {
      return acc;
    }
    _acc = acc + 1 | 0;
    _prec = v;
    continue;
  }
  ;
}
function strictlySortedLength(xs, lt) {
  let len = xs.length;
  if (len === 0 || len === 1) {
    return len;
  }
  let x0 = xs[0];
  let x1 = xs[1];
  if (lt(x0, x1)) {
    let _prec = x1;
    let _acc = 2;
    while (true) {
      let acc = _acc;
      let prec = _prec;
      if (acc >= len) {
        return acc;
      }
      let v = xs[acc];
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
function isSorted(a, cmp8) {
  let len = a.length;
  if (len === 0) {
    return true;
  } else {
    let _i = 0;
    let last_bound = len - 1 | 0;
    while (true) {
      let i = _i;
      if (i === last_bound) {
        return true;
      }
      if (cmp8(a[i], a[i + 1 | 0]) > 0) {
        return false;
      }
      _i = i + 1 | 0;
      continue;
    }
    ;
  }
}
function merge(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp8) {
  let src1r = src1ofs + src1len | 0;
  let src2r = src2ofs + src2len | 0;
  let _i1 = src1ofs;
  let _s1 = src[src1ofs];
  let _i2 = src2ofs;
  let _s2 = src2[src2ofs];
  let _d = dstofs;
  while (true) {
    let d = _d;
    let s2 = _s2;
    let i2 = _i2;
    let s1 = _s1;
    let i1 = _i1;
    if (cmp8(s1, s2) <= 0) {
      dst[d] = s1;
      let i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return Belt_Array.blitUnsafe(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
      }
      _d = d + 1 | 0;
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue;
    }
    dst[d] = s2;
    let i2$1 = i2 + 1 | 0;
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
function union(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp8) {
  let src1r = src1ofs + src1len | 0;
  let src2r = src2ofs + src2len | 0;
  let _i1 = src1ofs;
  let _s1 = src[src1ofs];
  let _i2 = src2ofs;
  let _s2 = src2[src2ofs];
  let _d = dstofs;
  while (true) {
    let d = _d;
    let s2 = _s2;
    let i2 = _i2;
    let s1 = _s1;
    let i1 = _i1;
    let c = cmp8(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      let i1$1 = i1 + 1 | 0;
      let d$1 = d + 1 | 0;
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
      let i1$2 = i1 + 1 | 0;
      let i2$1 = i2 + 1 | 0;
      let d$2 = d + 1 | 0;
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
    let i2$2 = i2 + 1 | 0;
    let d$3 = d + 1 | 0;
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
function intersect(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp8) {
  let src1r = src1ofs + src1len | 0;
  let src2r = src2ofs + src2len | 0;
  let _i1 = src1ofs;
  let _s1 = src[src1ofs];
  let _i2 = src2ofs;
  let _s2 = src2[src2ofs];
  let _d = dstofs;
  while (true) {
    let d = _d;
    let s2 = _s2;
    let i2 = _i2;
    let s1 = _s1;
    let i1 = _i1;
    let c = cmp8(s1, s2);
    if (c < 0) {
      let i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return d;
      }
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue;
    }
    if (c === 0) {
      dst[d] = s1;
      let i1$2 = i1 + 1 | 0;
      let i2$1 = i2 + 1 | 0;
      let d$1 = d + 1 | 0;
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
    let i2$2 = i2 + 1 | 0;
    if (i2$2 >= src2r) {
      return d;
    }
    _s2 = src2[i2$2];
    _i2 = i2$2;
    continue;
  }
  ;
}
function diff(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp8) {
  let src1r = src1ofs + src1len | 0;
  let src2r = src2ofs + src2len | 0;
  let _i1 = src1ofs;
  let _s1 = src[src1ofs];
  let _i2 = src2ofs;
  let _s2 = src2[src2ofs];
  let _d = dstofs;
  while (true) {
    let d = _d;
    let s2 = _s2;
    let i2 = _i2;
    let s1 = _s1;
    let i1 = _i1;
    let c = cmp8(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      let d$1 = d + 1 | 0;
      let i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return d$1;
      }
      _d = d$1;
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue;
    }
    if (c === 0) {
      let i1$2 = i1 + 1 | 0;
      let i2$1 = i2 + 1 | 0;
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
    let i2$2 = i2 + 1 | 0;
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
function insertionSort(src, srcofs, dst, dstofs, len, cmp8) {
  for (let i = 0; i < len; ++i) {
    let e = src[srcofs + i | 0];
    let j = (dstofs + i | 0) - 1 | 0;
    while (j >= dstofs && cmp8(dst[j], e) > 0) {
      dst[j + 1 | 0] = dst[j];
      j = j - 1 | 0;
    }
    ;
    dst[j + 1 | 0] = e;
  }
}
function sortTo(src, srcofs, dst, dstofs, len, cmp8) {
  if (len <= 5) {
    return insertionSort(src, srcofs, dst, dstofs, len, cmp8);
  }
  let l1 = len / 2 | 0;
  let l2 = len - l1 | 0;
  sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2, cmp8);
  sortTo(src, srcofs, src, srcofs + l2 | 0, l1, cmp8);
  merge(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs, cmp8);
}
function stableSortInPlaceBy(a, cmp8) {
  let l = a.length;
  if (l <= 5) {
    return insertionSort(a, 0, a, 0, l, cmp8);
  }
  let l1 = l / 2 | 0;
  let l2 = l - l1 | 0;
  let t = new Array(l2);
  sortTo(a, l1, t, 0, l2, cmp8);
  sortTo(a, 0, a, l2, l1, cmp8);
  merge(a, l2, l1, t, 0, l2, a, 0, cmp8);
}
function stableSortBy(a, cmp8) {
  let b = a.slice(0);
  stableSortInPlaceBy(b, cmp8);
  return b;
}
function binarySearchBy(sorted, key, cmp8) {
  let len = sorted.length;
  if (len === 0) {
    return -1;
  }
  let lo = sorted[0];
  let c = cmp8(key, lo);
  if (c < 0) {
    return -1;
  }
  let hi = sorted[len - 1 | 0];
  let c2 = cmp8(key, hi);
  if (c2 > 0) {
    return -(len + 1 | 0) | 0;
  } else {
    let _lo = 0;
    let _hi = len - 1 | 0;
    while (true) {
      let hi$1 = _hi;
      let lo$1 = _lo;
      let mid = (lo$1 + hi$1 | 0) / 2 | 0;
      let midVal = sorted[mid];
      let c$1 = cmp8(key, midVal);
      if (c$1 === 0) {
        return mid;
      }
      if (c$1 < 0) {
        if (hi$1 === mid) {
          if (cmp8(sorted[lo$1], key) === 0) {
            return lo$1;
          } else {
            return -(hi$1 + 1 | 0) | 0;
          }
        }
        _hi = mid;
        continue;
      }
      if (lo$1 === mid) {
        if (cmp8(sorted[hi$1], key) === 0) {
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
var Belt_Array, Int, $$String, strictlySortedLengthU, isSortedU, stableSortInPlaceByU, stableSortByU, binarySearchByU, unionU, intersectU, diffU;
var init_Belt_SortArray = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_SortArray.js"() {
    "use strict";
    Belt_Array = (init_Belt_Array(), __toCommonJS(Belt_Array_exports));
    strictlySortedLengthU = strictlySortedLength;
    isSortedU = isSorted;
    stableSortInPlaceByU = stableSortInPlaceBy;
    stableSortByU = stableSortBy;
    binarySearchByU = binarySearchBy;
    unionU = union;
    intersectU = intersect;
    diffU = diff;
    exports.Int = Int;
    exports.$$String = $$String;
    exports.strictlySortedLengthU = strictlySortedLengthU;
    exports.strictlySortedLength = strictlySortedLength;
    exports.isSortedU = isSortedU;
    exports.isSorted = isSorted;
    exports.stableSortInPlaceByU = stableSortInPlaceByU;
    exports.stableSortInPlaceBy = stableSortInPlaceBy;
    exports.stableSortByU = stableSortByU;
    exports.stableSortBy = stableSortBy;
    exports.binarySearchByU = binarySearchByU;
    exports.binarySearchBy = binarySearchBy;
    exports.unionU = unionU;
    exports.union = union;
    exports.intersectU = intersectU;
    exports.intersect = intersect;
    exports.diffU = diffU;
    exports.diff = diff;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_List.js
var Belt_List_exports = {};
function head(x) {
  if (x !== 0) {
    return Primitive_option4.some(x.hd);
  }
}
function headOrThrow(x) {
  if (x !== 0) {
    return x.hd;
  }
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}
function tail(x) {
  if (x !== 0) {
    return x.tl;
  }
}
function tailOrThrow(x) {
  if (x !== 0) {
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
function get2(x, n) {
  if (n < 0) {
    return;
  } else {
    let _x = x;
    let _n = n;
    while (true) {
      let n$1 = _n;
      let x$1 = _x;
      if (x$1 === 0) {
        return;
      }
      if (n$1 === 0) {
        return Primitive_option4.some(x$1.hd);
      }
      _n = n$1 - 1 | 0;
      _x = x$1.tl;
      continue;
    }
    ;
  }
}
function getOrThrow5(x, n) {
  if (n < 0) {
    throw {
      RE_EXN_ID: "Not_found",
      Error: new Error()
    };
  }
  let _x = x;
  let _n = n;
  while (true) {
    let n$1 = _n;
    let x$1 = _x;
    if (x$1 !== 0) {
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
    let precY = _precY;
    let precX = _precX;
    let cell = _cell;
    if (cell === 0) {
      return;
    }
    let t = cell.tl;
    let h = cell.hd;
    let next = {
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
    let precY = _precY;
    let precX = _precX;
    let cell = _cell;
    if (cell === 0) {
      return;
    }
    let match = cell.hd;
    let nextA = {
      hd: match[0],
      tl: (
        /* [] */
        0
      )
    };
    let nextB = {
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
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return prec;
    }
    let next = {
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
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    let t = cellX.tl;
    let h = cellX.hd;
    if (f(h)) {
      let next = {
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
    let i = _i;
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    let t = cellX.tl;
    let h = cellX.hd;
    if (f(h, i)) {
      let next = {
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
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    let t = cellX.tl;
    let h = f(cellX.hd);
    if (h !== void 0) {
      let next = {
        hd: Primitive_option4.valFromOption(h),
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
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return false;
    }
    let t = cellX.tl;
    let h = cellX.hd;
    if (f(h[0], x)) {
      prec.tl = t;
      return true;
    }
    let next = {
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
function setAssocAuxWithMap(_cellX, x, k, _prec, eq8) {
  while (true) {
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return false;
    }
    let t = cellX.tl;
    let h = cellX.hd;
    if (eq8(h[0], x)) {
      prec.tl = {
        hd: [
          x,
          k
        ],
        tl: t
      };
      return true;
    }
    let next = {
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
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    let next = {
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
    let prec = _prec;
    let cellY = _cellY;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    if (cellY === 0) {
      return;
    }
    let next = {
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
    let prec = _prec;
    let cellY = _cellY;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    if (cellY === 0) {
      return;
    }
    let next = {
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
    let prec = _prec;
    let cellX = _cellX;
    let i = _i;
    if (cellX === 0) {
      return;
    }
    let next = {
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
    let prec = _prec;
    let cell = _cell;
    let n = _n;
    if (n === 0) {
      return true;
    }
    if (cell === 0) {
      return false;
    }
    let cell$1 = {
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
    let prec = _prec;
    let cell = _cell;
    let n = _n;
    if (n === 0) {
      return cell;
    }
    if (cell === 0) {
      return;
    }
    let cell$1 = {
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
  if (lst === 0) {
    return;
  }
  let cell = {
    hd: lst.hd,
    tl: (
      /* [] */
      0
    )
  };
  let has5 = takeAux(n - 1 | 0, lst.tl, cell);
  if (has5) {
    return cell;
  }
}
function drop(lst, n) {
  if (n < 0) {
    return;
  } else {
    let _l = lst;
    let _n = n;
    while (true) {
      let n$1 = _n;
      let l = _l;
      if (n$1 === 0) {
        return l;
      }
      if (l === 0) {
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
  if (lst === 0) {
    return;
  }
  let cell = {
    hd: lst.hd,
    tl: (
      /* [] */
      0
    )
  };
  let rest = splitAtAux(n - 1 | 0, lst.tl, cell);
  if (rest !== void 0) {
    return [
      cell,
      rest
    ];
  }
}
function concat2(xs, ys) {
  if (xs === 0) {
    return ys;
  }
  let cell = {
    hd: xs.hd,
    tl: (
      /* [] */
      0
    )
  };
  copyAuxCont(xs.tl, cell).tl = ys;
  return cell;
}
function map5(xs, f) {
  if (xs === 0) {
    return (
      /* [] */
      0
    );
  }
  let cell = {
    hd: f(xs.hd),
    tl: (
      /* [] */
      0
    )
  };
  copyAuxWithMap(xs.tl, cell, f);
  return cell;
}
function zipBy2(l1, l2, f) {
  if (l1 === 0) {
    return (
      /* [] */
      0
    );
  }
  if (l2 === 0) {
    return (
      /* [] */
      0
    );
  }
  let cell = {
    hd: f(l1.hd, l2.hd),
    tl: (
      /* [] */
      0
    )
  };
  copyAuxWithMap2(f, l1.tl, l2.tl, cell);
  return cell;
}
function mapWithIndex2(xs, f) {
  if (xs === 0) {
    return (
      /* [] */
      0
    );
  }
  let cell = {
    hd: f(0, xs.hd),
    tl: (
      /* [] */
      0
    )
  };
  copyAuxWithMapI(f, 1, xs.tl, cell);
  return cell;
}
function makeBy2(n, f) {
  if (n <= 0) {
    return (
      /* [] */
      0
    );
  }
  let headX = {
    hd: f(0),
    tl: (
      /* [] */
      0
    )
  };
  let cur = headX;
  let i = 1;
  while (i < n) {
    let v = {
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
function make3(n, v) {
  if (n <= 0) {
    return (
      /* [] */
      0
    );
  }
  let headX = {
    hd: v,
    tl: (
      /* [] */
      0
    )
  };
  let cur = headX;
  let i = 1;
  while (i < n) {
    let v$1 = {
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
  let _x = xs;
  let _acc = 0;
  while (true) {
    let acc = _acc;
    let x = _x;
    if (x === 0) {
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
    let x = _x;
    let i = _i;
    if (x === 0) {
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
  let _i = a.length - 1 | 0;
  let _res = (
    /* [] */
    0
  );
  while (true) {
    let res = _res;
    let i = _i;
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
  let len = length(x);
  let arr = new Array(len);
  fillAux(arr, 0, x);
  return arr;
}
function shuffle2(xs) {
  let v = toArray(xs);
  Belt_Array2.shuffleInPlace(v);
  return fromArray(v);
}
function reverseConcat(_l1, _l2) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
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
function reverse2(l) {
  return reverseConcat(
    l,
    /* [] */
    0
  );
}
function flattenAux(_prec, _xs) {
  while (true) {
    let xs = _xs;
    let prec = _prec;
    if (xs !== 0) {
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
    let xs = _xs;
    if (xs === 0) {
      return (
        /* [] */
        0
      );
    }
    let match = xs.hd;
    if (match !== 0) {
      let cell = {
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
function concatMany2(xs) {
  let len = xs.length;
  if (len === 1) {
    return xs[0];
  }
  if (len === 0) {
    return (
      /* [] */
      0
    );
  }
  let len$1 = xs.length;
  let v = xs[len$1 - 1 | 0];
  for (let i = len$1 - 2 | 0; i >= 0; --i) {
    v = concat2(xs[i], v);
  }
  return v;
}
function mapReverse(l, f) {
  let _accu = (
    /* [] */
    0
  );
  let _xs = l;
  while (true) {
    let xs = _xs;
    let accu = _accu;
    if (xs === 0) {
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
function forEach4(_xs, f) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return;
    }
    f(xs.hd);
    _xs = xs.tl;
    continue;
  }
  ;
}
function forEachWithIndex2(l, f) {
  let _xs = l;
  let _i = 0;
  while (true) {
    let i = _i;
    let xs = _xs;
    if (xs === 0) {
      return;
    }
    f(i, xs.hd);
    _i = i + 1 | 0;
    _xs = xs.tl;
    continue;
  }
  ;
}
function reduce2(_l, _accu, f) {
  while (true) {
    let accu = _accu;
    let l = _l;
    if (l === 0) {
      return accu;
    }
    _accu = f(accu, l.hd);
    _l = l.tl;
    continue;
  }
  ;
}
function reduceReverseUnsafe(l, accu, f) {
  if (l !== 0) {
    return f(reduceReverseUnsafe(l.tl, accu, f), l.hd);
  } else {
    return accu;
  }
}
function reduceReverse3(l, acc, f) {
  let len = length(l);
  if (len < 1e3) {
    return reduceReverseUnsafe(l, acc, f);
  } else {
    return Belt_Array2.reduceReverse(toArray(l), acc, f);
  }
}
function reduceWithIndex2(l, acc, f) {
  let _l = l;
  let _acc = acc;
  let _i = 0;
  while (true) {
    let i = _i;
    let acc$1 = _acc;
    let l$1 = _l;
    if (l$1 === 0) {
      return acc$1;
    }
    _i = i + 1 | 0;
    _acc = f(acc$1, l$1.hd, i);
    _l = l$1.tl;
    continue;
  }
  ;
}
function mapReverse2(l1, l2, f) {
  let _l1 = l1;
  let _l2 = l2;
  let _accu = (
    /* [] */
    0
  );
  while (true) {
    let accu = _accu;
    let l2$1 = _l2;
    let l1$1 = _l1;
    if (l1$1 === 0) {
      return accu;
    }
    if (l2$1 === 0) {
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
function forEach22(_l1, _l2, f) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return;
    }
    if (l2 === 0) {
      return;
    }
    f(l1.hd, l2.hd);
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  }
  ;
}
function reduce22(_l1, _l2, _accu, f) {
  while (true) {
    let accu = _accu;
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return accu;
    }
    if (l2 === 0) {
      return accu;
    }
    _accu = f(accu, l1.hd, l2.hd);
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  }
  ;
}
function reduceReverse2Unsafe(l1, l2, accu, f) {
  if (l1 !== 0 && l2 !== 0) {
    return f(reduceReverse2Unsafe(l1.tl, l2.tl, accu, f), l1.hd, l2.hd);
  } else {
    return accu;
  }
}
function reduceReverse22(l1, l2, acc, f) {
  let len = length(l1);
  if (len < 1e3) {
    return reduceReverse2Unsafe(l1, l2, acc, f);
  } else {
    return Belt_Array2.reduceReverse2(toArray(l1), toArray(l2), acc, f);
  }
}
function every3(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
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
function some3(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
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
function every22(_l1, _l2, p) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return true;
    }
    if (l2 === 0) {
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
function cmpByLength(_l1, _l2) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      if (l2 !== 0) {
        return -1;
      } else {
        return 0;
      }
    }
    if (l2 === 0) {
      return 1;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  }
  ;
}
function cmp4(_l1, _l2, p) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      if (l2 !== 0) {
        return -1;
      } else {
        return 0;
      }
    }
    if (l2 === 0) {
      return 1;
    }
    let c = p(l1.hd, l2.hd);
    if (c !== 0) {
      return c;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  }
  ;
}
function eq4(_l1, _l2, p) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return l2 === 0;
    }
    if (l2 === 0) {
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
function some23(_l1, _l2, p) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return false;
    }
    if (l2 === 0) {
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
function has(_xs, x, eq8) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return false;
    }
    if (eq8(xs.hd, x)) {
      return true;
    }
    _xs = xs.tl;
    continue;
  }
  ;
}
function getAssoc(_xs, x, eq8) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return;
    }
    let match = xs.hd;
    if (eq8(match[0], x)) {
      return Primitive_option4.some(match[1]);
    }
    _xs = xs.tl;
    continue;
  }
  ;
}
function hasAssoc(_xs, x, eq8) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return false;
    }
    if (eq8(xs.hd[0], x)) {
      return true;
    }
    _xs = xs.tl;
    continue;
  }
  ;
}
function removeAssoc(xs, x, eq8) {
  if (xs === 0) {
    return (
      /* [] */
      0
    );
  }
  let l = xs.tl;
  let pair = xs.hd;
  if (eq8(pair[0], x)) {
    return l;
  }
  let cell = {
    hd: pair,
    tl: (
      /* [] */
      0
    )
  };
  let removed = removeAssocAuxWithMap(l, x, cell, eq8);
  if (removed) {
    return cell;
  } else {
    return xs;
  }
}
function setAssoc(xs, x, k, eq8) {
  if (xs === 0) {
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
  let l = xs.tl;
  let pair = xs.hd;
  if (eq8(pair[0], x)) {
    return {
      hd: [
        x,
        k
      ],
      tl: l
    };
  }
  let cell = {
    hd: pair,
    tl: (
      /* [] */
      0
    )
  };
  let replaced = setAssocAuxWithMap(l, x, k, cell, eq8);
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
function sort(xs, cmp8) {
  let arr = toArray(xs);
  Belt_SortArray.stableSortInPlaceBy(arr, cmp8);
  return fromArray(arr);
}
function getBy2(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return;
    }
    let x = xs.hd;
    if (p(x)) {
      return Primitive_option4.some(x);
    }
    _xs = xs.tl;
    continue;
  }
  ;
}
function keep3(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return (
        /* [] */
        0
      );
    }
    let t = xs.tl;
    let h = xs.hd;
    if (p(h)) {
      let cell = {
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
function keepWithIndex2(xs, p) {
  let _xs = xs;
  let _i = 0;
  while (true) {
    let i = _i;
    let xs$1 = _xs;
    if (xs$1 === 0) {
      return (
        /* [] */
        0
      );
    }
    let t = xs$1.tl;
    let h = xs$1.hd;
    if (p(h, i)) {
      let cell = {
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
function keepMap2(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return (
        /* [] */
        0
      );
    }
    let t = xs.tl;
    let h = p(xs.hd);
    if (h !== void 0) {
      let cell = {
        hd: Primitive_option4.valFromOption(h),
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
function partition2(l, p) {
  if (l === 0) {
    return [
      /* [] */
      0,
      /* [] */
      0
    ];
  }
  let h = l.hd;
  let nextX = {
    hd: h,
    tl: (
      /* [] */
      0
    )
  };
  let nextY = {
    hd: h,
    tl: (
      /* [] */
      0
    )
  };
  let b = p(h);
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
function unzip2(xs) {
  if (xs === 0) {
    return [
      /* [] */
      0,
      /* [] */
      0
    ];
  }
  let match = xs.hd;
  let cellX = {
    hd: match[0],
    tl: (
      /* [] */
      0
    )
  };
  let cellY = {
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
function zip2(l1, l2) {
  if (l1 === 0) {
    return (
      /* [] */
      0
    );
  }
  if (l2 === 0) {
    return (
      /* [] */
      0
    );
  }
  let cell = {
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
var Belt_Array2, Belt_SortArray, Primitive_option4, size, headExn, tailExn, getExn5, makeByU2, mapU4, zipByU2, mapWithIndexU2, mapReverseU, forEachU3, forEachWithIndexU2, reduceU2, reduceWithIndexU2, reduceReverseU2, mapReverse2U, forEach2U, reduce2U, reduceReverse2U2, everyU2, someU2, every2U2, some2U2, cmpU4, eqU4, hasU, getByU2, keepU3, filter2, keepWithIndexU2, filterWithIndex, keepMapU2, partitionU2, getAssocU, hasAssocU, removeAssocU, setAssocU, sortU;
var init_Belt_List = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_List.js"() {
    "use strict";
    Belt_Array2 = (init_Belt_Array(), __toCommonJS(Belt_Array_exports));
    Belt_SortArray = (init_Belt_SortArray(), __toCommonJS(Belt_SortArray_exports));
    Primitive_option4 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    size = length;
    headExn = headOrThrow;
    tailExn = tailOrThrow;
    getExn5 = getOrThrow5;
    makeByU2 = makeBy2;
    mapU4 = map5;
    zipByU2 = zipBy2;
    mapWithIndexU2 = mapWithIndex2;
    mapReverseU = mapReverse;
    forEachU3 = forEach4;
    forEachWithIndexU2 = forEachWithIndex2;
    reduceU2 = reduce2;
    reduceWithIndexU2 = reduceWithIndex2;
    reduceReverseU2 = reduceReverse3;
    mapReverse2U = mapReverse2;
    forEach2U = forEach22;
    reduce2U = reduce22;
    reduceReverse2U2 = reduceReverse22;
    everyU2 = every3;
    someU2 = some3;
    every2U2 = every22;
    some2U2 = some23;
    cmpU4 = cmp4;
    eqU4 = eq4;
    hasU = has;
    getByU2 = getBy2;
    keepU3 = keep3;
    filter2 = keep3;
    keepWithIndexU2 = keepWithIndex2;
    filterWithIndex = keepWithIndex2;
    keepMapU2 = keepMap2;
    partitionU2 = partition2;
    getAssocU = getAssoc;
    hasAssocU = hasAssoc;
    removeAssocU = removeAssoc;
    setAssocU = setAssoc;
    sortU = sort;
    exports.length = length;
    exports.size = size;
    exports.head = head;
    exports.headExn = headExn;
    exports.headOrThrow = headOrThrow;
    exports.tail = tail;
    exports.tailExn = tailExn;
    exports.tailOrThrow = tailOrThrow;
    exports.add = add;
    exports.get = get2;
    exports.getExn = getExn5;
    exports.getOrThrow = getOrThrow5;
    exports.make = make3;
    exports.makeByU = makeByU2;
    exports.makeBy = makeBy2;
    exports.shuffle = shuffle2;
    exports.drop = drop;
    exports.take = take;
    exports.splitAt = splitAt;
    exports.concat = concat2;
    exports.concatMany = concatMany2;
    exports.reverseConcat = reverseConcat;
    exports.flatten = flatten;
    exports.mapU = mapU4;
    exports.map = map5;
    exports.zip = zip2;
    exports.zipByU = zipByU2;
    exports.zipBy = zipBy2;
    exports.mapWithIndexU = mapWithIndexU2;
    exports.mapWithIndex = mapWithIndex2;
    exports.fromArray = fromArray;
    exports.toArray = toArray;
    exports.reverse = reverse2;
    exports.mapReverseU = mapReverseU;
    exports.mapReverse = mapReverse;
    exports.forEachU = forEachU3;
    exports.forEach = forEach4;
    exports.forEachWithIndexU = forEachWithIndexU2;
    exports.forEachWithIndex = forEachWithIndex2;
    exports.reduceU = reduceU2;
    exports.reduce = reduce2;
    exports.reduceWithIndexU = reduceWithIndexU2;
    exports.reduceWithIndex = reduceWithIndex2;
    exports.reduceReverseU = reduceReverseU2;
    exports.reduceReverse = reduceReverse3;
    exports.mapReverse2U = mapReverse2U;
    exports.mapReverse2 = mapReverse2;
    exports.forEach2U = forEach2U;
    exports.forEach2 = forEach22;
    exports.reduce2U = reduce2U;
    exports.reduce2 = reduce22;
    exports.reduceReverse2U = reduceReverse2U2;
    exports.reduceReverse2 = reduceReverse22;
    exports.everyU = everyU2;
    exports.every = every3;
    exports.someU = someU2;
    exports.some = some3;
    exports.every2U = every2U2;
    exports.every2 = every22;
    exports.some2U = some2U2;
    exports.some2 = some23;
    exports.cmpByLength = cmpByLength;
    exports.cmpU = cmpU4;
    exports.cmp = cmp4;
    exports.eqU = eqU4;
    exports.eq = eq4;
    exports.hasU = hasU;
    exports.has = has;
    exports.getByU = getByU2;
    exports.getBy = getBy2;
    exports.keepU = keepU3;
    exports.keep = keep3;
    exports.filter = filter2;
    exports.keepWithIndexU = keepWithIndexU2;
    exports.keepWithIndex = keepWithIndex2;
    exports.filterWithIndex = filterWithIndex;
    exports.keepMapU = keepMapU2;
    exports.keepMap = keepMap2;
    exports.partitionU = partitionU2;
    exports.partition = partition2;
    exports.unzip = unzip2;
    exports.getAssocU = getAssocU;
    exports.getAssoc = getAssoc;
    exports.hasAssocU = hasAssocU;
    exports.hasAssoc = hasAssoc;
    exports.removeAssocU = removeAssocU;
    exports.removeAssoc = removeAssoc;
    exports.setAssocU = setAssocU;
    exports.setAssoc = setAssoc;
    exports.sortU = sortU;
    exports.sort = sort;
  }
});

// src/ResultExt.js
var require_ResultExt = __commonJS({
  "src/ResultExt.js"(exports2) {
    "use strict";
    var Belt_List = (init_Belt_List(), __toCommonJS(Belt_List_exports));
    function allOkOrError(results) {
      let _good = (
        /* [] */
        0
      );
      let _entriesLeft = Belt_List.fromArray(results);
      while (true) {
        let entriesLeft = _entriesLeft;
        let good = _good;
        if (entriesLeft === 0) {
          return {
            TAG: "Ok",
            _0: Belt_List.toArray(good)
          };
        }
        let entry = entriesLeft.hd;
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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_internalAVLtree.js
var Belt_internalAVLtree_exports = {};
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
function create2(l, x, d, r) {
  let hl = treeHeight(l);
  let hr = treeHeight(r);
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
  let hl = l !== void 0 ? l.h : 0;
  let hr = r !== void 0 ? r.h : 0;
  if (hl > (hr + 2 | 0)) {
    let ll = l.l;
    let lr = l.r;
    if (treeHeight(ll) >= treeHeight(lr)) {
      return create2(ll, l.k, l.v, create2(lr, x, d, r));
    } else {
      return create2(create2(ll, l.k, l.v, lr.l), lr.k, lr.v, create2(lr.r, x, d, r));
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
  let rl = r.l;
  let rr = r.r;
  if (treeHeight(rr) >= treeHeight(rl)) {
    return create2(create2(l, x, d, rl), r.k, r.v, rr);
  } else {
    return create2(create2(l, x, d, rl.l), rl.k, rl.v, create2(rl.r, r.k, r.v, rr));
  }
}
function minKey0Aux(_n) {
  while (true) {
    let n = _n;
    let n$1 = n.l;
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
    return Primitive_option5.some(minKey0Aux(n));
  }
}
function minKeyUndefined(n) {
  if (n !== void 0) {
    return minKey0Aux(n);
  }
}
function maxKey0Aux(_n) {
  while (true) {
    let n = _n;
    let n$1 = n.r;
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
    return Primitive_option5.some(maxKey0Aux(n));
  }
}
function maxKeyUndefined(n) {
  if (n !== void 0) {
    return maxKey0Aux(n);
  }
}
function minKV0Aux(_n) {
  while (true) {
    let n = _n;
    let n$1 = n.l;
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
    let n = _n;
    let n$1 = n.r;
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
  let ln = n.l;
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
    let s = _s;
    let v = _v;
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
function findFirstBy(n, p) {
  if (n === void 0) {
    return;
  }
  let left = findFirstBy(n.l, p);
  if (left !== void 0) {
    return left;
  }
  let v = n.k;
  let d = n.v;
  let pvd = p(v, d);
  if (pvd) {
    return [
      v,
      d
    ];
  }
  let right = findFirstBy(n.r, p);
  if (right !== void 0) {
    return right;
  }
}
function forEach5(_n, f) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return;
    }
    forEach5(n.l, f);
    f(n.k, n.v);
    _n = n.r;
    continue;
  }
  ;
}
function map6(n, f) {
  if (n === void 0) {
    return;
  }
  let newLeft = map6(n.l, f);
  let newD = f(n.v);
  let newRight = map6(n.r, f);
  return {
    k: n.k,
    v: newD,
    h: n.h,
    l: newLeft,
    r: newRight
  };
}
function mapWithKey(n, f) {
  if (n === void 0) {
    return;
  }
  let key = n.k;
  let newLeft = mapWithKey(n.l, f);
  let newD = f(key, n.v);
  let newRight = mapWithKey(n.r, f);
  return {
    k: key,
    v: newD,
    h: n.h,
    l: newLeft,
    r: newRight
  };
}
function reduce3(_m, _accu, f) {
  while (true) {
    let accu = _accu;
    let m = _m;
    if (m === void 0) {
      return accu;
    }
    let v = m.k;
    let d = m.v;
    let l = m.l;
    let r = m.r;
    _accu = f(reduce3(l, accu, f), v, d);
    _m = r;
    continue;
  }
  ;
}
function every4(_n, p) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return true;
    }
    if (!p(n.k, n.v)) {
      return false;
    }
    if (!every4(n.l, p)) {
      return false;
    }
    _n = n.r;
    continue;
  }
  ;
}
function some4(_n, p) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return false;
    }
    if (p(n.k, n.v)) {
      return true;
    }
    if (some4(n.l, p)) {
      return true;
    }
    _n = n.r;
    continue;
  }
  ;
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
  let lv = ln.k;
  let ld = ln.v;
  let lh = ln.h;
  let ll = ln.l;
  let lr = ln.r;
  let rv = rn.k;
  let rd = rn.v;
  let rh = rn.h;
  let rl = rn.l;
  let rr = rn.r;
  if (lh > (rh + 2 | 0)) {
    return bal(ll, lv, ld, join(lr, v, d, rn));
  } else if (rh > (lh + 2 | 0)) {
    return bal(join(ln, v, d, rl), rv, rd, rr);
  } else {
    return create2(ln, v, d, rn);
  }
}
function concat3(t1, t2) {
  if (t1 === void 0) {
    return t2;
  }
  if (t2 === void 0) {
    return t1;
  }
  let kr = {
    contents: t2.k
  };
  let vr = {
    contents: t2.v
  };
  let t2r = removeMinAuxWithRef(t2, kr, vr);
  return join(t1, kr.contents, vr.contents, t2r);
}
function concatOrJoin(t1, v, d, t2) {
  if (d !== void 0) {
    return join(t1, v, Primitive_option5.valFromOption(d), t2);
  } else {
    return concat3(t1, t2);
  }
}
function keepShared(n, p) {
  if (n === void 0) {
    return;
  }
  let v = n.k;
  let d = n.v;
  let newLeft = keepShared(n.l, p);
  let pvd = p(v, d);
  let newRight = keepShared(n.r, p);
  if (pvd) {
    return join(newLeft, v, d, newRight);
  } else {
    return concat3(newLeft, newRight);
  }
}
function keepMap3(n, p) {
  if (n === void 0) {
    return;
  }
  let v = n.k;
  let d = n.v;
  let newLeft = keepMap3(n.l, p);
  let pvd = p(v, d);
  let newRight = keepMap3(n.r, p);
  if (pvd !== void 0) {
    return join(newLeft, v, Primitive_option5.valFromOption(pvd), newRight);
  } else {
    return concat3(newLeft, newRight);
  }
}
function partitionShared(n, p) {
  if (n === void 0) {
    return [
      void 0,
      void 0
    ];
  }
  let key = n.k;
  let value = n.v;
  let match = partitionShared(n.l, p);
  let lf = match[1];
  let lt = match[0];
  let pvd = p(key, value);
  let match$1 = partitionShared(n.r, p);
  let rf = match$1[1];
  let rt = match$1[0];
  if (pvd) {
    return [
      join(lt, key, value, rt),
      concat3(lf, rf)
    ];
  } else {
    return [
      concat3(lt, rt),
      join(lf, key, value, rf)
    ];
  }
}
function lengthNode(n) {
  let l = n.l;
  let r = n.r;
  let sizeL = l !== void 0 ? lengthNode(l) : 0;
  let sizeR = r !== void 0 ? lengthNode(r) : 0;
  return (1 + sizeL | 0) + sizeR | 0;
}
function size2(n) {
  if (n !== void 0) {
    return lengthNode(n);
  } else {
    return 0;
  }
}
function toListAux(_n, _accu) {
  while (true) {
    let accu = _accu;
    let n = _n;
    if (n === void 0) {
      return accu;
    }
    let k = n.k;
    let v = n.v;
    let l = n.l;
    let r = n.r;
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
    let v = _v;
    if (v === void 0) {
      return;
    }
    let l = v.l;
    let r = v.r;
    let diff2 = treeHeight(l) - treeHeight(r) | 0;
    if (!(diff2 <= 2 && diff2 >= -2)) {
      throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "Belt_internalAVLtree.res",
          439,
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
    let i = _i;
    let n = _n;
    let v = n.k;
    let l = n.l;
    let r = n.r;
    let next = l !== void 0 ? fillArrayKey(l, i, arr) : i;
    arr[next] = v;
    let rnext = next + 1 | 0;
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
    let i = _i;
    let n = _n;
    let l = n.l;
    let r = n.r;
    let next = l !== void 0 ? fillArrayValue(l, i, arr) : i;
    arr[next] = n.v;
    let rnext = next + 1 | 0;
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
    let i = _i;
    let n = _n;
    let l = n.l;
    let v = n.k;
    let r = n.r;
    let next = l !== void 0 ? fillArray(l, i, arr) : i;
    arr[next] = [
      v,
      n.v
    ];
    let rnext = next + 1 | 0;
    if (r === void 0) {
      return rnext;
    }
    _i = rnext;
    _n = r;
    continue;
  }
  ;
}
function toArray2(n) {
  if (n === void 0) {
    return [];
  }
  let size4 = lengthNode(n);
  let v = new Array(size4);
  fillArray(n, 0, v);
  return v;
}
function keysToArray(n) {
  if (n === void 0) {
    return [];
  }
  let size4 = lengthNode(n);
  let v = new Array(size4);
  fillArrayKey(n, 0, v);
  return v;
}
function valuesToArray(n) {
  if (n === void 0) {
    return [];
  }
  let size4 = lengthNode(n);
  let v = new Array(size4);
  fillArrayValue(n, 0, v);
  return v;
}
function fromSortedArrayRevAux(arr, off, len) {
  switch (len) {
    case 0:
      return;
    case 1:
      let match = arr[off];
      return singleton(match[0], match[1]);
    case 2:
      let match_0 = arr[off];
      let match_1 = arr[off - 1 | 0];
      let match$1 = match_1;
      let match$2 = match_0;
      return {
        k: match$1[0],
        v: match$1[1],
        h: 2,
        l: singleton(match$2[0], match$2[1]),
        r: void 0
      };
    case 3:
      let match_0$1 = arr[off];
      let match_1$1 = arr[off - 1 | 0];
      let match_2 = arr[off - 2 | 0];
      let match$3 = match_2;
      let match$4 = match_1$1;
      let match$5 = match_0$1;
      return {
        k: match$4[0],
        v: match$4[1],
        h: 2,
        l: singleton(match$5[0], match$5[1]),
        r: singleton(match$3[0], match$3[1])
      };
    default:
      let nl = len / 2 | 0;
      let left = fromSortedArrayRevAux(arr, off, nl);
      let match$6 = arr[off - nl | 0];
      let right = fromSortedArrayRevAux(arr, (off - nl | 0) - 1 | 0, (len - nl | 0) - 1 | 0);
      return create2(left, match$6[0], match$6[1], right);
  }
}
function fromSortedArrayAux(arr, off, len) {
  switch (len) {
    case 0:
      return;
    case 1:
      let match = arr[off];
      return singleton(match[0], match[1]);
    case 2:
      let match_0 = arr[off];
      let match_1 = arr[off + 1 | 0];
      let match$1 = match_1;
      let match$2 = match_0;
      return {
        k: match$1[0],
        v: match$1[1],
        h: 2,
        l: singleton(match$2[0], match$2[1]),
        r: void 0
      };
    case 3:
      let match_0$1 = arr[off];
      let match_1$1 = arr[off + 1 | 0];
      let match_2 = arr[off + 2 | 0];
      let match$3 = match_2;
      let match$4 = match_1$1;
      let match$5 = match_0$1;
      return {
        k: match$4[0],
        v: match$4[1],
        h: 2,
        l: singleton(match$5[0], match$5[1]),
        r: singleton(match$3[0], match$3[1])
      };
    default:
      let nl = len / 2 | 0;
      let left = fromSortedArrayAux(arr, off, nl);
      let match$6 = arr[off + nl | 0];
      let right = fromSortedArrayAux(arr, (off + nl | 0) + 1 | 0, (len - nl | 0) - 1 | 0);
      return create2(left, match$6[0], match$6[1], right);
  }
}
function fromSortedArrayUnsafe(arr) {
  return fromSortedArrayAux(arr, 0, arr.length);
}
function cmp5(s1, s2, kcmp, vcmp) {
  let len1 = size2(s1);
  let len2 = size2(s2);
  if (len1 === len2) {
    let _e1 = stackAllLeft(
      s1,
      /* [] */
      0
    );
    let _e2 = stackAllLeft(
      s2,
      /* [] */
      0
    );
    while (true) {
      let e2 = _e2;
      let e1 = _e1;
      if (e1 === 0) {
        return 0;
      }
      if (e2 === 0) {
        return 0;
      }
      let h2 = e2.hd;
      let h1 = e1.hd;
      let c = kcmp(h1.k, h2.k);
      if (c !== 0) {
        return c;
      }
      let cx = vcmp(h1.v, h2.v);
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
function eq5(s1, s2, kcmp, veq) {
  let len1 = size2(s1);
  let len2 = size2(s2);
  if (len1 === len2) {
    let _e1 = stackAllLeft(
      s1,
      /* [] */
      0
    );
    let _e2 = stackAllLeft(
      s2,
      /* [] */
      0
    );
    while (true) {
      let e2 = _e2;
      let e1 = _e1;
      if (e1 === 0) {
        return true;
      }
      if (e2 === 0) {
        return true;
      }
      let h2 = e2.hd;
      let h1 = e1.hd;
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
function get3(_n, x, cmp8) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return;
    }
    let v = n.k;
    let c = cmp8(x, v);
    if (c === 0) {
      return Primitive_option5.some(n.v);
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  }
  ;
}
function getUndefined(_n, x, cmp8) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return;
    }
    let v = n.k;
    let c = cmp8(x, v);
    if (c === 0) {
      return n.v;
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  }
  ;
}
function getOrThrow6(_n, x, cmp8) {
  while (true) {
    let n = _n;
    if (n !== void 0) {
      let v = n.k;
      let c = cmp8(x, v);
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
function getWithDefault4(_n, x, def, cmp8) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return def;
    }
    let v = n.k;
    let c = cmp8(x, v);
    if (c === 0) {
      return n.v;
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  }
  ;
}
function has2(_n, x, cmp8) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return false;
    }
    let v = n.k;
    let c = cmp8(x, v);
    if (c === 0) {
      return true;
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  }
  ;
}
function rotateWithLeftChild(k2) {
  let k1 = k2.l;
  k2.l = k1.r;
  k1.r = k2;
  let hlk2 = treeHeight(k2.l);
  let hrk2 = treeHeight(k2.r);
  k2.h = Primitive_int2.max(hlk2, hrk2) + 1 | 0;
  let hlk1 = treeHeight(k1.l);
  let hk2 = k2.h;
  k1.h = Primitive_int2.max(hlk1, hk2) + 1 | 0;
  return k1;
}
function rotateWithRightChild(k1) {
  let k2 = k1.r;
  k1.r = k2.l;
  k2.l = k1;
  let hlk1 = treeHeight(k1.l);
  let hrk1 = treeHeight(k1.r);
  k1.h = Primitive_int2.max(hlk1, hrk1) + 1 | 0;
  let hrk2 = treeHeight(k2.r);
  let hk1 = k1.h;
  k2.h = Primitive_int2.max(hrk2, hk1) + 1 | 0;
  return k2;
}
function doubleWithLeftChild(k3) {
  let x = k3.l;
  let v = rotateWithRightChild(x);
  k3.l = v;
  return rotateWithLeftChild(k3);
}
function doubleWithRightChild(k2) {
  let x = k2.r;
  let v = rotateWithLeftChild(x);
  k2.r = v;
  return rotateWithRightChild(k2);
}
function heightUpdateMutate(t) {
  let hlt = treeHeight(t.l);
  let hrt = treeHeight(t.r);
  t.h = Primitive_int2.max(hlt, hrt) + 1 | 0;
  return t;
}
function balMutate(nt) {
  let l = nt.l;
  let r = nt.r;
  let hl = treeHeight(l);
  let hr = treeHeight(r);
  if (hl > (2 + hr | 0)) {
    let ll = l.l;
    let lr = l.r;
    if (heightGe(ll, lr)) {
      return heightUpdateMutate(rotateWithLeftChild(nt));
    } else {
      return heightUpdateMutate(doubleWithLeftChild(nt));
    }
  }
  if (hr > (2 + hl | 0)) {
    let rl = r.l;
    let rr = r.r;
    if (heightGe(rr, rl)) {
      return heightUpdateMutate(rotateWithRightChild(nt));
    } else {
      return heightUpdateMutate(doubleWithRightChild(nt));
    }
  }
  nt.h = Primitive_int2.max(hl, hr) + 1 | 0;
  return nt;
}
function updateMutate(t, x, data, cmp8) {
  if (t === void 0) {
    return singleton(x, data);
  }
  let k = t.k;
  let c = cmp8(x, k);
  if (c === 0) {
    t.v = data;
    return t;
  }
  let l = t.l;
  let r = t.r;
  if (c < 0) {
    let ll = updateMutate(l, x, data, cmp8);
    t.l = ll;
  } else {
    t.r = updateMutate(r, x, data, cmp8);
  }
  return balMutate(t);
}
function fromArray2(xs, cmp8) {
  let len = xs.length;
  if (len === 0) {
    return;
  }
  let next = Belt_SortArray2.strictlySortedLength(xs, (param, param$1) => cmp8(param[0], param$1[0]) < 0);
  let result;
  if (next >= 0) {
    result = fromSortedArrayAux(xs, 0, next);
  } else {
    next = -next | 0;
    result = fromSortedArrayRevAux(xs, next - 1 | 0, next);
  }
  for (let i = next; i < len; ++i) {
    let match = xs[i];
    result = updateMutate(result, match[0], match[1], cmp8);
  }
  return result;
}
function removeMinAuxWithRootMutate(nt, n) {
  let rn = n.r;
  let ln = n.l;
  if (ln !== void 0) {
    n.l = removeMinAuxWithRootMutate(nt, ln);
    return balMutate(n);
  } else {
    nt.k = n.k;
    nt.v = n.v;
    return rn;
  }
}
var Primitive_int2, Belt_SortArray2, Primitive_option5;
var init_Belt_internalAVLtree = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_internalAVLtree.js"() {
    "use strict";
    Primitive_int2 = (init_Primitive_int(), __toCommonJS(Primitive_int_exports));
    Belt_SortArray2 = (init_Belt_SortArray(), __toCommonJS(Belt_SortArray_exports));
    Primitive_option5 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    exports.copy = copy;
    exports.create = create2;
    exports.bal = bal;
    exports.singleton = singleton;
    exports.updateValue = updateValue;
    exports.minKey = minKey;
    exports.minKeyUndefined = minKeyUndefined;
    exports.maxKey = maxKey;
    exports.maxKeyUndefined = maxKeyUndefined;
    exports.minimum = minimum;
    exports.minUndefined = minUndefined;
    exports.maximum = maximum;
    exports.maxUndefined = maxUndefined;
    exports.removeMinAuxWithRef = removeMinAuxWithRef;
    exports.isEmpty = isEmpty;
    exports.stackAllLeft = stackAllLeft;
    exports.findFirstBy = findFirstBy;
    exports.forEach = forEach5;
    exports.map = map6;
    exports.mapWithKey = mapWithKey;
    exports.reduce = reduce3;
    exports.every = every4;
    exports.some = some4;
    exports.join = join;
    exports.concat = concat3;
    exports.concatOrJoin = concatOrJoin;
    exports.keepShared = keepShared;
    exports.keepMap = keepMap3;
    exports.partitionShared = partitionShared;
    exports.lengthNode = lengthNode;
    exports.size = size2;
    exports.toList = toList;
    exports.checkInvariantInternal = checkInvariantInternal;
    exports.fillArray = fillArray;
    exports.toArray = toArray2;
    exports.keysToArray = keysToArray;
    exports.valuesToArray = valuesToArray;
    exports.fromSortedArrayAux = fromSortedArrayAux;
    exports.fromSortedArrayRevAux = fromSortedArrayRevAux;
    exports.fromSortedArrayUnsafe = fromSortedArrayUnsafe;
    exports.cmp = cmp5;
    exports.eq = eq5;
    exports.get = get3;
    exports.getUndefined = getUndefined;
    exports.getWithDefault = getWithDefault4;
    exports.getOrThrow = getOrThrow6;
    exports.has = has2;
    exports.fromArray = fromArray2;
    exports.updateMutate = updateMutate;
    exports.balMutate = balMutate;
    exports.removeMinAuxWithRootMutate = removeMinAuxWithRootMutate;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_internalMapInt.js
var Belt_internalMapInt_exports = {};
function add2(t, x, data) {
  if (t === void 0) {
    return Belt_internalAVLtree.singleton(x, data);
  }
  let k = t.k;
  if (x === k) {
    return Belt_internalAVLtree.updateValue(t, data);
  }
  let v = t.v;
  if (x < k) {
    return Belt_internalAVLtree.bal(add2(t.l, x, data), k, v, t.r);
  } else {
    return Belt_internalAVLtree.bal(t.l, k, v, add2(t.r, x, data));
  }
}
function get4(_n, x) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return;
    }
    let v = n.k;
    if (x === v) {
      return Primitive_option6.some(n.v);
    }
    _n = x < v ? n.l : n.r;
    continue;
  }
  ;
}
function getUndefined2(_n, x) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return;
    }
    let v = n.k;
    if (x === v) {
      return n.v;
    }
    _n = x < v ? n.l : n.r;
    continue;
  }
  ;
}
function getOrThrow7(_n, x) {
  while (true) {
    let n = _n;
    if (n !== void 0) {
      let v = n.k;
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
function getWithDefault5(_n, x, def) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return def;
    }
    let v = n.k;
    if (x === v) {
      return n.v;
    }
    _n = x < v ? n.l : n.r;
    continue;
  }
  ;
}
function has3(_n, x) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return false;
    }
    let v = n.k;
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
  let v = n.k;
  let l = n.l;
  let r = n.r;
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
  let kr = {
    contents: r.k
  };
  let vr = {
    contents: r.v
  };
  let r$1 = Belt_internalAVLtree.removeMinAuxWithRef(r, kr, vr);
  return Belt_internalAVLtree.bal(l, kr.contents, vr.contents, r$1);
}
function splitAux2(x, n) {
  let v = n.k;
  let d = n.v;
  let l = n.l;
  let r = n.r;
  if (x === v) {
    return [
      l,
      Primitive_option6.some(d),
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
    let match = splitAux2(x, l);
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
  let match$1 = splitAux2(x, r);
  return [
    Belt_internalAVLtree.join(l, v, d, match$1[0]),
    match$1[1],
    match$1[2]
  ];
}
function split(x, n) {
  if (n !== void 0) {
    return splitAux2(x, n);
  } else {
    return [
      void 0,
      void 0,
      void 0
    ];
  }
}
function merge2(s1, s2, f) {
  if (s1 !== void 0) {
    if (s1.h >= (s2 !== void 0 ? s2.h : 0)) {
      let v1 = s1.k;
      let d1 = s1.v;
      let l1 = s1.l;
      let r1 = s1.r;
      let match = split(v1, s2);
      return Belt_internalAVLtree.concatOrJoin(merge2(l1, match[0], f), v1, f(v1, Primitive_option6.some(d1), match[1]), merge2(r1, match[2], f));
    }
  } else if (s2 === void 0) {
    return;
  }
  let v2 = s2.k;
  let d2 = s2.v;
  let l2 = s2.l;
  let r2 = s2.r;
  let match$1 = split(v2, s1);
  return Belt_internalAVLtree.concatOrJoin(merge2(match$1[0], l2, f), v2, f(v2, match$1[1], Primitive_option6.some(d2)), merge2(match$1[2], r2, f));
}
function compareAux(_e1, _e2, vcmp) {
  while (true) {
    let e2 = _e2;
    let e1 = _e1;
    if (e1 === 0) {
      return 0;
    }
    if (e2 === 0) {
      return 0;
    }
    let h2 = e2.hd;
    let h1 = e1.hd;
    let c = Primitive_int3.compare(h1.k, h2.k);
    if (c !== 0) {
      return c;
    }
    let cx = vcmp(h1.v, h2.v);
    if (cx !== 0) {
      return cx;
    }
    _e2 = Belt_internalAVLtree.stackAllLeft(h2.r, e2.tl);
    _e1 = Belt_internalAVLtree.stackAllLeft(h1.r, e1.tl);
    continue;
  }
  ;
}
function cmp6(s1, s2, cmp$1) {
  let len1 = Belt_internalAVLtree.size(s1);
  let len2 = Belt_internalAVLtree.size(s2);
  if (len1 === len2) {
    return compareAux(Belt_internalAVLtree.stackAllLeft(
      s1,
      /* [] */
      0
    ), Belt_internalAVLtree.stackAllLeft(
      s2,
      /* [] */
      0
    ), cmp$1);
  } else if (len1 < len2) {
    return -1;
  } else {
    return 1;
  }
}
function eqAux(_e1, _e2, eq8) {
  while (true) {
    let e2 = _e2;
    let e1 = _e1;
    if (e1 === 0) {
      return true;
    }
    if (e2 === 0) {
      return true;
    }
    let h2 = e2.hd;
    let h1 = e1.hd;
    if (!(h1.k === h2.k && eq8(h1.v, h2.v))) {
      return false;
    }
    _e2 = Belt_internalAVLtree.stackAllLeft(h2.r, e2.tl);
    _e1 = Belt_internalAVLtree.stackAllLeft(h1.r, e1.tl);
    continue;
  }
  ;
}
function eq6(s1, s2, eq$1) {
  let len1 = Belt_internalAVLtree.size(s1);
  let len2 = Belt_internalAVLtree.size(s2);
  if (len1 === len2) {
    return eqAux(Belt_internalAVLtree.stackAllLeft(
      s1,
      /* [] */
      0
    ), Belt_internalAVLtree.stackAllLeft(
      s2,
      /* [] */
      0
    ), eq$1);
  } else {
    return false;
  }
}
function addMutate(t, x, data) {
  if (t === void 0) {
    return Belt_internalAVLtree.singleton(x, data);
  }
  let k = t.k;
  if (x === k) {
    t.k = x;
    t.v = data;
    return t;
  }
  let l = t.l;
  let r = t.r;
  if (x < k) {
    let ll = addMutate(l, x, data);
    t.l = ll;
  } else {
    t.r = addMutate(r, x, data);
  }
  return Belt_internalAVLtree.balMutate(t);
}
function fromArray3(xs) {
  let len = xs.length;
  if (len === 0) {
    return;
  }
  let next = Belt_SortArray3.strictlySortedLength(xs, (param, param$1) => param[0] < param$1[0]);
  let result;
  if (next >= 0) {
    result = Belt_internalAVLtree.fromSortedArrayAux(xs, 0, next);
  } else {
    next = -next | 0;
    result = Belt_internalAVLtree.fromSortedArrayRevAux(xs, next - 1 | 0, next);
  }
  for (let i = next; i < len; ++i) {
    let match = xs[i];
    result = addMutate(result, match[0], match[1]);
  }
  return result;
}
var Primitive_int3, Belt_SortArray3, Primitive_option6, Belt_internalAVLtree, N, A, S, cmpU5, eqU5, mergeU;
var init_Belt_internalMapInt = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_internalMapInt.js"() {
    "use strict";
    Primitive_int3 = (init_Primitive_int(), __toCommonJS(Primitive_int_exports));
    Belt_SortArray3 = (init_Belt_SortArray(), __toCommonJS(Belt_SortArray_exports));
    Primitive_option6 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    Belt_internalAVLtree = (init_Belt_internalAVLtree(), __toCommonJS(Belt_internalAVLtree_exports));
    cmpU5 = cmp6;
    eqU5 = eq6;
    mergeU = merge2;
    exports.N = N;
    exports.A = A;
    exports.S = S;
    exports.add = add2;
    exports.get = get4;
    exports.getUndefined = getUndefined2;
    exports.getOrThrow = getOrThrow7;
    exports.getWithDefault = getWithDefault5;
    exports.has = has3;
    exports.remove = remove;
    exports.splitAux = splitAux2;
    exports.split = split;
    exports.merge = merge2;
    exports.compareAux = compareAux;
    exports.cmp = cmp6;
    exports.eqAux = eqAux;
    exports.eq = eq6;
    exports.addMutate = addMutate;
    exports.fromArray = fromArray3;
    exports.cmpU = cmpU5;
    exports.eqU = eqU5;
    exports.mergeU = mergeU;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_MapInt.js
var Belt_MapInt_exports = {};
function set2(t, newK, newD) {
  if (t === void 0) {
    return Belt_internalAVLtree2.singleton(newK, newD);
  }
  let k = t.k;
  if (newK === k) {
    return Belt_internalAVLtree2.updateValue(t, newD);
  }
  let v = t.v;
  if (newK < k) {
    return Belt_internalAVLtree2.bal(set2(t.l, newK, newD), k, v, t.r);
  } else {
    return Belt_internalAVLtree2.bal(t.l, k, v, set2(t.r, newK, newD));
  }
}
function update(t, x, f) {
  if (t !== void 0) {
    let k = t.k;
    if (x === k) {
      let data = f(Primitive_option7.some(t.v));
      if (data !== void 0) {
        return Belt_internalAVLtree2.updateValue(t, Primitive_option7.valFromOption(data));
      }
      let l = t.l;
      let r = t.r;
      if (l === void 0) {
        return r;
      }
      if (r === void 0) {
        return l;
      }
      let kr = {
        contents: r.k
      };
      let vr = {
        contents: r.v
      };
      let r$1 = Belt_internalAVLtree2.removeMinAuxWithRef(r, kr, vr);
      return Belt_internalAVLtree2.bal(l, kr.contents, vr.contents, r$1);
    }
    let v = t.v;
    let l$1 = t.l;
    let r$2 = t.r;
    if (x < k) {
      let ll = update(l$1, x, f);
      if (l$1 === ll) {
        return t;
      } else {
        return Belt_internalAVLtree2.bal(ll, k, v, r$2);
      }
    }
    let rr = update(r$2, x, f);
    if (r$2 === rr) {
      return t;
    } else {
      return Belt_internalAVLtree2.bal(l$1, k, v, rr);
    }
  }
  let data$1 = f(void 0);
  if (data$1 !== void 0) {
    return Belt_internalAVLtree2.singleton(x, Primitive_option7.valFromOption(data$1));
  } else {
    return t;
  }
}
function removeAux(n, x) {
  let v = n.k;
  let l = n.l;
  let r = n.r;
  if (x === v) {
    if (l === void 0) {
      return r;
    }
    if (r === void 0) {
      return l;
    }
    let kr = {
      contents: r.k
    };
    let vr = {
      contents: r.v
    };
    let r$1 = Belt_internalAVLtree2.removeMinAuxWithRef(r, kr, vr);
    return Belt_internalAVLtree2.bal(l, kr.contents, vr.contents, r$1);
  }
  if (x < v) {
    if (l === void 0) {
      return n;
    }
    let ll = removeAux(l, x);
    if (ll === l) {
      return n;
    } else {
      return Belt_internalAVLtree2.bal(ll, v, n.v, r);
    }
  }
  if (r === void 0) {
    return n;
  }
  let rr = removeAux(r, x);
  return Belt_internalAVLtree2.bal(l, v, n.v, rr);
}
function remove2(n, x) {
  if (n !== void 0) {
    return removeAux(n, x);
  }
}
function removeMany(t, keys) {
  let len = keys.length;
  if (t !== void 0) {
    let _t = t;
    let _i = 0;
    while (true) {
      let i = _i;
      let t$1 = _t;
      if (i >= len) {
        return t$1;
      }
      let ele = keys[i];
      let u = removeAux(t$1, ele);
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
  let len = arr.length;
  let v = h;
  for (let i = 0; i < len; ++i) {
    let match = arr[i];
    v = set2(v, match[0], match[1]);
  }
  return v;
}
var Primitive_option7, Belt_internalMapInt, Belt_internalAVLtree2, empty, isEmpty2, has4, cmpU6, cmp7, eqU6, eq7, findFirstByU, findFirstBy2, forEachU4, forEach6, reduceU3, reduce4, everyU3, every5, someU3, some5, size3, toList2, toArray3, fromArray4, keysToArray2, valuesToArray2, minKey2, minKeyUndefined2, maxKey2, maxKeyUndefined2, minimum2, minUndefined2, maximum2, maxUndefined2, get5, getUndefined3, getWithDefault6, getExn6, getOrThrow8, checkInvariantInternal2, updateU, mergeU2, merge3, keepU4, keep4, partitionU3, partition3, split2, mapU5, map7, mapWithKeyU, mapWithKey2;
var init_Belt_MapInt = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_MapInt.js"() {
    "use strict";
    Primitive_option7 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    Belt_internalMapInt = (init_Belt_internalMapInt(), __toCommonJS(Belt_internalMapInt_exports));
    Belt_internalAVLtree2 = (init_Belt_internalAVLtree(), __toCommonJS(Belt_internalAVLtree_exports));
    isEmpty2 = Belt_internalAVLtree2.isEmpty;
    has4 = Belt_internalMapInt.has;
    cmpU6 = Belt_internalMapInt.cmp;
    cmp7 = Belt_internalMapInt.cmp;
    eqU6 = Belt_internalMapInt.eq;
    eq7 = Belt_internalMapInt.eq;
    findFirstByU = Belt_internalAVLtree2.findFirstBy;
    findFirstBy2 = Belt_internalAVLtree2.findFirstBy;
    forEachU4 = Belt_internalAVLtree2.forEach;
    forEach6 = Belt_internalAVLtree2.forEach;
    reduceU3 = Belt_internalAVLtree2.reduce;
    reduce4 = Belt_internalAVLtree2.reduce;
    everyU3 = Belt_internalAVLtree2.every;
    every5 = Belt_internalAVLtree2.every;
    someU3 = Belt_internalAVLtree2.some;
    some5 = Belt_internalAVLtree2.some;
    size3 = Belt_internalAVLtree2.size;
    toList2 = Belt_internalAVLtree2.toList;
    toArray3 = Belt_internalAVLtree2.toArray;
    fromArray4 = Belt_internalMapInt.fromArray;
    keysToArray2 = Belt_internalAVLtree2.keysToArray;
    valuesToArray2 = Belt_internalAVLtree2.valuesToArray;
    minKey2 = Belt_internalAVLtree2.minKey;
    minKeyUndefined2 = Belt_internalAVLtree2.minKeyUndefined;
    maxKey2 = Belt_internalAVLtree2.maxKey;
    maxKeyUndefined2 = Belt_internalAVLtree2.maxKeyUndefined;
    minimum2 = Belt_internalAVLtree2.minimum;
    minUndefined2 = Belt_internalAVLtree2.minUndefined;
    maximum2 = Belt_internalAVLtree2.maximum;
    maxUndefined2 = Belt_internalAVLtree2.maxUndefined;
    get5 = Belt_internalMapInt.get;
    getUndefined3 = Belt_internalMapInt.getUndefined;
    getWithDefault6 = Belt_internalMapInt.getWithDefault;
    getExn6 = Belt_internalMapInt.getOrThrow;
    getOrThrow8 = Belt_internalMapInt.getOrThrow;
    checkInvariantInternal2 = Belt_internalAVLtree2.checkInvariantInternal;
    updateU = update;
    mergeU2 = Belt_internalMapInt.merge;
    merge3 = Belt_internalMapInt.merge;
    keepU4 = Belt_internalAVLtree2.keepShared;
    keep4 = Belt_internalAVLtree2.keepShared;
    partitionU3 = Belt_internalAVLtree2.partitionShared;
    partition3 = Belt_internalAVLtree2.partitionShared;
    split2 = Belt_internalMapInt.split;
    mapU5 = Belt_internalAVLtree2.map;
    map7 = Belt_internalAVLtree2.map;
    mapWithKeyU = Belt_internalAVLtree2.mapWithKey;
    mapWithKey2 = Belt_internalAVLtree2.mapWithKey;
    exports.empty = empty;
    exports.isEmpty = isEmpty2;
    exports.has = has4;
    exports.cmpU = cmpU6;
    exports.cmp = cmp7;
    exports.eqU = eqU6;
    exports.eq = eq7;
    exports.findFirstByU = findFirstByU;
    exports.findFirstBy = findFirstBy2;
    exports.forEachU = forEachU4;
    exports.forEach = forEach6;
    exports.reduceU = reduceU3;
    exports.reduce = reduce4;
    exports.everyU = everyU3;
    exports.every = every5;
    exports.someU = someU3;
    exports.some = some5;
    exports.size = size3;
    exports.toList = toList2;
    exports.toArray = toArray3;
    exports.fromArray = fromArray4;
    exports.keysToArray = keysToArray2;
    exports.valuesToArray = valuesToArray2;
    exports.minKey = minKey2;
    exports.minKeyUndefined = minKeyUndefined2;
    exports.maxKey = maxKey2;
    exports.maxKeyUndefined = maxKeyUndefined2;
    exports.minimum = minimum2;
    exports.minUndefined = minUndefined2;
    exports.maximum = maximum2;
    exports.maxUndefined = maxUndefined2;
    exports.get = get5;
    exports.getUndefined = getUndefined3;
    exports.getWithDefault = getWithDefault6;
    exports.getExn = getExn6;
    exports.getOrThrow = getOrThrow8;
    exports.checkInvariantInternal = checkInvariantInternal2;
    exports.remove = remove2;
    exports.removeMany = removeMany;
    exports.set = set2;
    exports.updateU = updateU;
    exports.update = update;
    exports.mergeU = mergeU2;
    exports.merge = merge3;
    exports.mergeMany = mergeMany;
    exports.keepU = keepU4;
    exports.keep = keep4;
    exports.partitionU = partitionU3;
    exports.partition = partition3;
    exports.split = split2;
    exports.mapU = mapU5;
    exports.map = map7;
    exports.mapWithKeyU = mapWithKeyU;
    exports.mapWithKey = mapWithKey2;
  }
});

// src/TileSolid.js
var require_TileSolid = __commonJS({
  "src/TileSolid.js"(exports2) {
    "use strict";
    var Belt_MapInt = (init_Belt_MapInt(), __toCommonJS(Belt_MapInt_exports));
    var map8 = Belt_MapInt.fromArray([
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
      return Belt_MapInt.getWithDefault(map8, tileType, false);
    }
    exports2.map = map8;
    exports2.isSolid = isSolid;
  }
});

// src/TileFrameImportant.js
var require_TileFrameImportant = __commonJS({
  "src/TileFrameImportant.js"(exports2) {
    "use strict";
    var Belt_MapInt = (init_Belt_MapInt(), __toCommonJS(Belt_MapInt_exports));
    var map8 = Belt_MapInt.fromArray([
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
      return Belt_MapInt.getWithDefault(map8, tileType, false);
    }
    exports2.map = map8;
    exports2.isImportant = isImportant;
  }
});

// src/ErrorAwareBufferReader.js
var require_ErrorAwareBufferReader = __commonJS({
  "src/ErrorAwareBufferReader.js"(exports2) {
    "use strict";
    var Primitive_exceptions3 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
    var ReadError = /* @__PURE__ */ Primitive_exceptions3.create("ErrorAwareBufferReader-TerrariaPacket.ReadError");
    function readByte(reader, context) {
      try {
        return reader.readByte();
      } catch (raw_obj) {
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
        if (obj.RE_EXN_ID === "JsExn") {
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
    var Primitive_exceptions3 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
    var Bufferwriter = require_bufferwriter().default;
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
        let obj = Primitive_exceptions3.internalToException(raw_obj);
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
    function make5(buffer) {
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
    exports2.make = make5;
  }
});

// src/packet/Packet_TileSectionSend.js
var require_Packet_TileSectionSend = __commonJS({
  "src/packet/Packet_TileSectionSend.js"(exports2) {
    "use strict";
    var Nodezlib = require("node:zlib");
    var Belt_Array3 = (init_Belt_Array(), __toCommonJS(Belt_Array_exports));
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
    var Belt_Result = (init_Belt_Result(), __toCommonJS(Belt_Result_exports));
    var Primitive_object = (init_Primitive_object(), __toCommonJS(Primitive_object_exports));
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
      let id = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "id");
      let x = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "x");
      let y = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "y");
      let name = ErrorAwareBufferReader$TerrariaPacket.readString(reader, "name");
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
      let id = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "id");
      let x = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "x");
      let y = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "y");
      let name = ErrorAwareBufferReader$TerrariaPacket.readString(reader, "name");
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
      let netId = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "netId");
      let prefix = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "prefix");
      let stack = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "stack");
      return {
        netId,
        prefix,
        stack
      };
    }
    function parseLogicSensorKind(reader) {
      let checkType = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "checkType");
      let on = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "on") === 1;
      return {
        checkType,
        on
      };
    }
    function parseDisplayDollKind(reader) {
      let itemsFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "itemsFlags"));
      let dyeFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "dyeFlags"));
      let items = [];
      let dyes = [];
      for (let i = 0; i <= 7; ++i) {
        if (BitFlags$TerrariaPacket.flagN(itemsFlags, i)) {
          items.push(parseDisplayItem(reader));
        } else {
          items.push(void 0);
        }
      }
      for (let i$1 = 0; i$1 <= 7; ++i$1) {
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
      let flags = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "flags"));
      let items = [];
      let dyes = [];
      for (let i = 0; i <= 1; ++i) {
        if (BitFlags$TerrariaPacket.flagN(flags, i)) {
          items.push(parseDisplayItem(reader));
        } else {
          items.push(void 0);
        }
      }
      for (let i$1 = 0; i$1 <= 1; ++i$1) {
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
      let entityType = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "entityType");
      let x = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "x");
      let y = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "y");
      let entityKind;
      switch (entityType) {
        case 0:
          entityKind = {
            TAG: "Ok",
            _0: {
              TAG: "TrainingDummy",
              _0: {
                npcSlotId: ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "npcSlotId")
              }
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
      return Belt_Result.map(entityKind, (entityKind2) => ({
        entityType,
        x,
        y,
        entityKind: entityKind2
      }));
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
      return Belt_Option.isSome(Belt_Option.flatMap(Belt_Array3.get(arr, n), (a) => a));
    }
    function packDisplayDoll(writer, displayDollKind) {
      let itemFlags = BitFlags$TerrariaPacket.fromFlags(hasItem(displayDollKind.items, 0), hasItem(displayDollKind.items, 1), hasItem(displayDollKind.items, 2), hasItem(displayDollKind.items, 3), hasItem(displayDollKind.items, 4), hasItem(displayDollKind.items, 5), hasItem(displayDollKind.items, 6), hasItem(displayDollKind.items, 7));
      let dyeFlags = BitFlags$TerrariaPacket.fromFlags(hasItem(displayDollKind.dyes, 0), hasItem(displayDollKind.dyes, 1), hasItem(displayDollKind.dyes, 2), hasItem(displayDollKind.dyes, 3), hasItem(displayDollKind.dyes, 4), hasItem(displayDollKind.dyes, 5), hasItem(displayDollKind.dyes, 6), hasItem(displayDollKind.dyes, 7));
      ErrorAwareBufferWriter$TerrariaPacket.packByte(ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(itemFlags), "itemFlags"), BitFlags$TerrariaPacket.toByte(dyeFlags), "dyeFlags");
      for (let i = 0; i <= 7; ++i) {
        let item = Belt_Option.flatMap(Belt_Array3.get(displayDollKind.items, i), (a) => a);
        if (item !== void 0) {
          packDisplayItem(writer, item);
        }
      }
      for (let i$1 = 0; i$1 <= 7; ++i$1) {
        let item$1 = Belt_Option.flatMap(Belt_Array3.get(displayDollKind.dyes, i$1), (a) => a);
        if (item$1 !== void 0) {
          packDisplayItem(writer, item$1);
        }
      }
      return writer;
    }
    function packHatRack(writer, hatRackKind) {
      let flags = BitFlags$TerrariaPacket.fromFlags(hasItem(hatRackKind.items, 0), hasItem(hatRackKind.items, 1), hasItem(hatRackKind.dyes, 2), hasItem(hatRackKind.dyes, 3), false, false, false, false);
      ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(flags), "flags");
      for (let i = 0; i <= 1; ++i) {
        let item = Belt_Option.flatMap(Belt_Array3.get(hatRackKind.items, i), (a) => a);
        if (item !== void 0) {
          packDisplayItem(writer, item);
        }
      }
      for (let i$1 = 0; i$1 <= 1; ++i$1) {
        let item$1 = Belt_Option.flatMap(Belt_Array3.get(hatRackKind.dyes, i$1), (a) => a);
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
    var isTheSameAs = Primitive_object.equal;
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
      let packetReader = new Packetreader(payload);
      let deflated = ErrorAwarePacketReader$TerrariaPacket.readBuffer(packetReader, ErrorAwarePacketReader$TerrariaPacket.getBytesLeft(packetReader), "deflatedPayload");
      let reader = new Bufferreader(Nodezlib.inflateRawSync(deflated));
      let tileX = ErrorAwareBufferReader$TerrariaPacket.readInt32(reader, "tileX");
      let tileY = ErrorAwareBufferReader$TerrariaPacket.readInt32(reader, "tileY");
      let width = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "width");
      let height = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "height");
      let tiles = [];
      let tileCache = defaultTileCache();
      let rleCount = 0;
      if (height < 0 || width < 0) {
        return;
      }
      for (let _y = 0; _y < height; ++_y) {
        let row = [];
        for (let _x = 0; _x < width; ++_x) {
          if (rleCount !== 0) {
            rleCount = rleCount - 1 | 0;
            row.push(cacheToTile(tileCache));
          } else {
            clearTileCache(tileCache);
            let header5 = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header5"));
            let match;
            if (BitFlags$TerrariaPacket.flag1(header5)) {
              let header4 = BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header4_conditional"));
              let header3 = BitFlags$TerrariaPacket.flag1(header4) ? BitFlags$TerrariaPacket.fromByte(ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header3_conditional")) : BitFlags$TerrariaPacket.fromByte(0);
              let header2 = BitFlags$TerrariaPacket.flag1(header3) ? ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header2_conditional") : 0;
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
            let header3$1 = match[1];
            let header4$1 = match[0];
            tileCache.coatHeader = match[2];
            let oldActive = tileCache.activeTile;
            if (BitFlags$TerrariaPacket.flag2(header5)) {
              let oldType = Belt_Option.mapWithDefault(tileCache.activeTile, 0, (active) => active.tileType);
              let tileType;
              if (BitFlags$TerrariaPacket.flag6(header5)) {
                let byte = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "tileType_byte1");
                let secondByte = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "tileType_byte2");
                tileType = secondByte << 8 | byte;
              } else {
                tileType = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "tileType");
              }
              let frame;
              if (TileFrameImportant$TerrariaPacket.isImportant(tileType)) {
                let x = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "frameX");
                let y = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "frameY");
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
            let liquidBits = (BitFlags$TerrariaPacket.toByte(header5) & 24) >> 3;
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
              let slopeBits = (BitFlags$TerrariaPacket.toByte(header4$1) & 112) >> 4;
              if (slopeBits !== 0 && TileSolid$TerrariaPacket.isSolid(Belt_Option.mapWithDefault(tileCache.activeTile, 0, (tile) => tile.tileType))) {
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
                let byte$1 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "wall_highByte");
                tileCache.wall = byte$1 << 8 | tileCache.wall;
              }
            }
            let repeatCountBytes = (BitFlags$TerrariaPacket.toByte(header5) & 192) >> 6;
            rleCount = repeatCountBytes !== 0 ? repeatCountBytes !== 1 ? ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "rle_int16") : ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "rle_byte") : 0;
            row.push(cacheToTile(tileCache));
          }
        }
        tiles.push(row);
      }
      let chestCount = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "chestCount");
      let chests = Belt_Array3.make(chestCount, 0).map((param) => parse(reader));
      let signCount = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "signCount");
      let signs = Belt_Array3.make(signCount, 0).map((param) => parse$1(reader));
      let entityCount = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "entityCount");
      let entities = ResultExt$TerrariaPacket.allOkOrError(Belt_Array3.make(entityCount, 0).map((param) => parse$2(reader)));
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
      let liquidBits = tile.honey ? "Three" : tile.lava ? "Two" : Belt_Option.isSome(tile.liquid) ? "One" : "Zero";
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
    function packTile(writer, tile, repeatCount) {
      let header2 = tile.coatHeader;
      let wall = tile.wall;
      let header3 = BitFlags$TerrariaPacket.fromFlags(header2 > 0, tile.actuator, tile.inActive, Belt_Option.isSome(tile.color), Belt_Option.isSome(tile.wall) && Belt_Option.isSome(tile.wallColor), tile.wire4, wall !== void 0 ? wall > 255 : false, false);
      let match = getSlopeBitFlags(tile);
      let header4 = BitFlags$TerrariaPacket.fromFlags(BitFlags$TerrariaPacket.toByte(header3) > 0, tile.wire, tile.wire2, tile.wire3, match[2], match[1], match[0], false);
      let match$1 = getLiquidBitFlags(tile);
      let match$2 = getRepeatCountBitFlags(repeatCount);
      let activeTile = tile.activeTile;
      let tileFlags = BitFlags$TerrariaPacket.fromFlags(BitFlags$TerrariaPacket.toByte(header4) > 0, Belt_Option.isSome(tile.activeTile), Belt_Option.isSome(tile.wall), match$1[1], match$1[0], activeTile !== void 0 ? activeTile.tileType > 255 : false, match$2[1], match$2[0]);
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
      let activeTile$1 = tile.activeTile;
      if (activeTile$1 !== void 0) {
        if (BitFlags$TerrariaPacket.flag6(tileFlags)) {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, activeTile$1.tileType & 255, "tileType_lowByte");
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, (activeTile$1.tileType & 65280) >> 8, "tileType_highByte");
        } else {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, activeTile$1.tileType, "tileType");
        }
        let match$3 = activeTile$1.frame;
        if (match$3 !== void 0) {
          ErrorAwareBufferWriter$TerrariaPacket.packInt16(writer, match$3.x, "frameX");
          ErrorAwareBufferWriter$TerrariaPacket.packInt16(writer, match$3.y, "frameY");
        }
        let color = tile.color;
        if (color !== void 0) {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, color, "color");
        }
      }
      let wall$1 = tile.wall;
      if (wall$1 !== void 0) {
        ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, wall$1 & 255, "wall_lowByte");
        let wallColor = tile.wallColor;
        if (wallColor !== void 0) {
          ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, wallColor, "wallColor");
        }
      }
      let liquid = tile.liquid;
      if (liquid !== void 0) {
        ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, liquid, "liquidValue");
      }
      let wall$2 = tile.wall;
      if (wall$2 !== void 0 && wall$2 > 255) {
        ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, wall$2 >> 8, "wall_highByte");
      }
      let match$4 = getRepeatCountByteLength(repeatCount);
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
      let last = lastTile.contents;
      if (last !== void 0) {
        if (Primitive_object.equal(tile, last.tile)) {
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
      let outerPacketWriter = ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileSectionSend"));
      let innerWriter = ErrorAwareBufferWriter$TerrariaPacket.make(Buffer.allocUnsafe(64e3));
      ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packInt16(ErrorAwareBufferWriter$TerrariaPacket.packInt32(ErrorAwareBufferWriter$TerrariaPacket.packInt32(innerWriter, self.tileX, "tileX"), self.tileY, "tileY"), self.width, "width"), self.height, "height");
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
      ErrorAwareBufferWriter$TerrariaPacket.packInt16(innerWriter, self.chests.length, "chestCount");
      self.chests.forEach((chest) => {
        pack(innerWriter, chest);
      });
      ErrorAwareBufferWriter$TerrariaPacket.packInt16(innerWriter, self.signs.length, "signCount");
      self.signs.forEach((sign) => {
        pack$1(innerWriter, sign);
      });
      ErrorAwareBufferWriter$TerrariaPacket.packInt16(innerWriter, self.entities.length, "entityCount");
      self.entities.forEach((entity) => {
        pack$2(innerWriter, entity);
      });
      let innerBuffer = ErrorAwareBufferWriter$TerrariaPacket.data(innerWriter);
      if (innerBuffer.TAG === "Ok") {
        let deflatedPayload = Nodezlib.deflateRawSync(innerBuffer._0);
        return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packBuffer(outerPacketWriter, deflatedPayload, "deflatedPayload"));
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
    var Int2;
    var Option;
    exports2.Int = Int2;
    exports2.Option = Option;
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
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var TileFrameImportant$TerrariaPacket = require_TileFrameImportant();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let tileX = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "tileX");
      let tileY = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "tileY");
      let width = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "width");
      let height = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "height");
      let changeType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "changeType");
      let tiles = [];
      for (let _x = 0; _x < width; ++_x) {
        let column = [];
        for (let _y = 0; _y < height; ++_y) {
          let flags1 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags1"));
          let flags2 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags2"));
          let flags3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags3");
          let active = BitFlags$TerrariaPacket.flag1(flags1);
          let hasWall = BitFlags$TerrariaPacket.flag3(flags1);
          let hasLiquid = BitFlags$TerrariaPacket.flag4(flags1);
          let wire = BitFlags$TerrariaPacket.flag5(flags1);
          let halfBrick = BitFlags$TerrariaPacket.flag6(flags1);
          let actuator = BitFlags$TerrariaPacket.flag7(flags1);
          let inActive = BitFlags$TerrariaPacket.flag8(flags1);
          let wire2 = BitFlags$TerrariaPacket.flag1(flags2);
          let wire3 = BitFlags$TerrariaPacket.flag2(flags2);
          let color = BitFlags$TerrariaPacket.flag3(flags2) ? ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "color") : void 0;
          let wallColor = BitFlags$TerrariaPacket.flag4(flags2) ? ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "wallColor") : void 0;
          let activeTile;
          if (active) {
            let tileType = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "tileType");
            let frame = TileFrameImportant$TerrariaPacket.isImportant(tileType) ? {
              x: ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "frameX"),
              y: ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "frameY")
            } : void 0;
            let slope = ((0 + (BitFlags$TerrariaPacket.flag5(flags2) ? 1 : 0) | 0) + (BitFlags$TerrariaPacket.flag6(flags2) ? 2 : 0) | 0) + (BitFlags$TerrariaPacket.flag7(flags2) ? 4 : 0) | 0;
            activeTile = {
              tileType,
              slope,
              frame
            };
          } else {
            activeTile = void 0;
          }
          let wall = hasWall ? ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "wall") : void 0;
          let liquid = hasLiquid ? {
            liquidValue: ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidValue"),
            liquidType: ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidType")
          } : void 0;
          let wire4 = BitFlags$TerrariaPacket.flag8(flags2);
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
      let flags1 = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(tile.activeTile), false, Belt_Option.isSome(tile.wall), Belt_Option.isSome(tile.liquid), tile.wire, tile.halfBrick, tile.actuator, tile.inActive);
      let flags2 = BitFlags$TerrariaPacket.fromFlags(tile.wire2, tile.wire3, Belt_Option.isSome(tile.color), Belt_Option.isSome(tile.wallColor), Belt_Option.mapWithDefault(tile.activeTile, false, (tile2) => (tile2.slope & 1) === 1), Belt_Option.mapWithDefault(tile.activeTile, false, (tile2) => (tile2.slope & 2) === 2), Belt_Option.mapWithDefault(tile.activeTile, false, (tile2) => (tile2.slope & 4) === 4), tile.wire4);
      ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(flags1), "flags1"), BitFlags$TerrariaPacket.toByte(flags2), "flags2"), tile.coatHeader, "coatHeader");
      let c = tile.color;
      if (c !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, c, "color");
      }
      let wc = tile.wallColor;
      if (wc !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, wc, "wallColor");
      }
      let at = tile.activeTile;
      if (at !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, at.tileType, "tileType");
        if (TileFrameImportant$TerrariaPacket.isImportant(at.tileType)) {
          ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, Belt_Option.mapWithDefault(at.frame, 0, (frame) => frame.x), "frameX"), Belt_Option.mapWithDefault(at.frame, 0, (frame) => frame.y), "frameY");
        }
      }
      let w = tile.wall;
      if (w !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, w, "wall");
      }
      let l = tile.liquid;
      if (l !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, l.liquidValue, "liquidValue"), l.liquidType, "liquidType");
      }
      return writer;
    }
    function packTiles(writer, tiles) {
      for (let x = 0, x_finish = tiles.length; x < x_finish; ++x) {
        for (let y = 0, y_finish = tiles[x].length; y < y_finish; ++y) {
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let items = [];
      for (let _for = 1; _for <= 40; ++_for) {
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
      let writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TravellingMerchantInventory"));
      self.items.forEach((item) => {
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_Unused.js
var require_Packet_Unused = __commonJS({
  "src/packet/Packet_Unused.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      let reader = new Packetreader(payload);
      let x = reader.readInt16();
      let y = reader.readInt16();
      let color = reader.readByte();
      let coat = reader.readByte();
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
      let reader = new Packetreader(payload);
      let x = reader.readInt16();
      let y = reader.readInt16();
      let itemId = reader.readInt16();
      let prefix = reader.readByte();
      let stack = reader.readInt16();
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_WorldDataRequest.js
var require_Packet_WorldDataRequest = __commonJS({
  "src/packet/Packet_WorldDataRequest.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetwriter = require_packetwriter().default;
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/Array16.js
var require_Array16 = __commonJS({
  "src/Array16.js"(exports2) {
    "use strict";
    function fromArray5(a) {
      if (a.length === 16) {
        return a;
      }
    }
    function asArray(self) {
      return self;
    }
    exports2.fromArray = fromArray5;
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
      let reader = new Packetreader(payload);
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
      let reader = new Packetreader(payload);
      let playerId = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      let controlFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "controlFlags"));
      let miscFlags1 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "miscFlags1"));
      let miscFlags2 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "miscFlags2"));
      let miscFlags3 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "miscFlags3"));
      let control_isHoldingUp = BitFlags$TerrariaPacket.flag1(controlFlags);
      let control_isHoldingDown = BitFlags$TerrariaPacket.flag2(controlFlags);
      let control_isHoldingLeft = BitFlags$TerrariaPacket.flag3(controlFlags);
      let control_isHoldingRight = BitFlags$TerrariaPacket.flag4(controlFlags);
      let control_isHoldingJump = BitFlags$TerrariaPacket.flag5(controlFlags);
      let control_isHoldingItemUse = BitFlags$TerrariaPacket.flag6(controlFlags);
      let control = {
        isHoldingUp: control_isHoldingUp,
        isHoldingDown: control_isHoldingDown,
        isHoldingLeft: control_isHoldingLeft,
        isHoldingRight: control_isHoldingRight,
        isHoldingJump: control_isHoldingJump,
        isHoldingItemUse: control_isHoldingItemUse
      };
      let direction = BitFlags$TerrariaPacket.flag7(controlFlags) ? "Right" : "Left";
      let pulleyDirection = BitFlags$TerrariaPacket.flag1(miscFlags1) ? BitFlags$TerrariaPacket.flag2(miscFlags1) ? "Two" : "One" : void 0;
      let vortexStealthActive = BitFlags$TerrariaPacket.flag4(miscFlags1);
      let gravityDirection = BitFlags$TerrariaPacket.flag5(miscFlags1) ? "Normal" : "Inverted";
      let shouldGuard = BitFlags$TerrariaPacket.flag6(miscFlags1);
      let ghost = BitFlags$TerrariaPacket.flag7(miscFlags1);
      let selectedItem = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "selectedItem");
      let position_x = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionX");
      let position_y = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionY");
      let position = {
        x: position_x,
        y: position_y
      };
      let velocity = BitFlags$TerrariaPacket.flag3(miscFlags1) ? {
        x: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityX"),
        y: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityY")
      } : void 0;
      let potionOfReturn = BitFlags$TerrariaPacket.flag7(miscFlags2) ? {
        originalUsePosition: {
          x: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnOrigX"),
          y: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnOrigY")
        },
        homePosition: {
          x: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnHomeX"),
          y: ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnHomeY")
        }
      } : void 0;
      let tryKeepingHoveringUp = BitFlags$TerrariaPacket.flag1(miscFlags2);
      let isVoidVaultEnabled = BitFlags$TerrariaPacket.flag2(miscFlags2);
      let isSitting = BitFlags$TerrariaPacket.flag3(miscFlags2);
      let hasFinishedAnyDd2Event = BitFlags$TerrariaPacket.flag4(miscFlags2);
      let isPettingAnimal = BitFlags$TerrariaPacket.flag5(miscFlags2);
      let isTheAnimalBeingPetSmall = BitFlags$TerrariaPacket.flag6(miscFlags2);
      let tryKeepingHoveringDown = BitFlags$TerrariaPacket.flag8(miscFlags2);
      let isSleeping = BitFlags$TerrariaPacket.flag1(miscFlags3);
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
      let tmp;
      tmp = direction !== "Left";
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(control.isHoldingUp, control.isHoldingDown, control.isHoldingLeft, control.isHoldingRight, control.isHoldingJump, control.isHoldingItemUse, tmp, false)), "controlFlags");
    }
    function packMiscFlags1(writer, pulleyDirection, velocity, vortexStealthActive, gravityDirection, shouldGuard, ghost) {
      let tmp;
      tmp = pulleyDirection !== void 0 ? pulleyDirection !== "One" : false;
      let tmp$1;
      tmp$1 = gravityDirection === "Normal";
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
      let reader = new Packetreader(payload);
      let playerId = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      let skinVariant = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "skinVariant");
      let hair = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hair");
      let name = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "name");
      let hairDye = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hairDye");
      let hideVisuals = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hideVisuals");
      let hideVisuals2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hideVisuals2");
      let hideMisc = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hideMisc");
      let hairColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "hairColor");
      let skinColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "skinColor");
      let eyeColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "eyeColor");
      let shirtColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "shirtColor");
      let underShirtColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "underShirtColor");
      let pantsColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "pantsColor");
      let shoeColor = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "shoeColor");
      let difficultyFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "difficultyFlags"));
      let torchFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "torchFlags"));
      let difficulty = getDifficulty(difficultyFlags);
      let extraAccessory = BitFlags$TerrariaPacket.flag3(difficultyFlags);
      let mode = BitFlags$TerrariaPacket.flag4(difficultyFlags) ? "Journey" : "Classic";
      let usingBiomeTorches = BitFlags$TerrariaPacket.flag1(torchFlags);
      let happyFunTorchTime = BitFlags$TerrariaPacket.flag2(torchFlags);
      let unlockedBiomeTorches = BitFlags$TerrariaPacket.flag3(torchFlags);
      let unlockedSuperCart = BitFlags$TerrariaPacket.flag4(torchFlags);
      let enabledSuperCart = BitFlags$TerrariaPacket.flag5(torchFlags);
      let usedFlags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "usedFlags"));
      let usedAegisCrystal = BitFlags$TerrariaPacket.flag1(usedFlags);
      let usedAegisFruit = BitFlags$TerrariaPacket.flag2(usedFlags);
      let usedArcaneCrystal = BitFlags$TerrariaPacket.flag3(usedFlags);
      let usedGalaxyPearl = BitFlags$TerrariaPacket.flag4(usedFlags);
      let usedGummyWorm = BitFlags$TerrariaPacket.flag5(usedFlags);
      let usedAmbrosia = BitFlags$TerrariaPacket.flag6(usedFlags);
      let ateArtisanBread = BitFlags$TerrariaPacket.flag7(usedFlags);
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
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, byte, "difficultyFlags");
    }
    function packTorchFlags(writer, usingBiomeTorches, happyFunTorchTime, unlockedBiomeTorches, unlockedSuperCart, enabledSuperCart) {
      let byte = 0;
      byte = byte | (usingBiomeTorches ? 1 : 0);
      byte = byte | (happyFunTorchTime ? 2 : 0);
      byte = byte | (unlockedBiomeTorches ? 4 : 0);
      byte = byte | (unlockedSuperCart ? 8 : 0);
      byte = byte | (enabledSuperCart ? 16 : 0);
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, byte, "torchFlags");
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
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, byte, "usedFlags");
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let x = reader.readInt16();
      let y = reader.readInt16();
      let timeRemaining = reader.readInt32();
      let numberOfDeathsPve = reader.readInt16();
      let numberOfDeathsPvp = reader.readInt16();
      let rawContext = reader.readByte();
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
      let match = self.context;
      let tmp;
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let slot = reader.readInt16();
      let stack = reader.readInt16();
      let prefix = reader.readByte();
      let itemId = reader.readInt16();
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let health = reader.readInt16();
      let maxHealth = reader.readInt16();
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
      let reader = new Packetreader(payload);
      let uuid = reader.readString();
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
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let projectileId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileId");
      let x = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      let y = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      let vx = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
      let vy = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
      let owner = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "owner");
      let projectileType = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileType");
      let flags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags"));
      let flags2 = BitFlags$TerrariaPacket.flag3(flags) ? Primitive_option8.some(BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags2"))) : void 0;
      let ai0 = BitFlags$TerrariaPacket.flag1(flags) ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai0") : void 0;
      let ai1 = BitFlags$TerrariaPacket.flag2(flags) ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai1") : void 0;
      let bannerIdToRespondTo = BitFlags$TerrariaPacket.flag4(flags) ? ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "bannerIdToRespondTo") : void 0;
      let damage = BitFlags$TerrariaPacket.flag5(flags) ? ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "damage") : void 0;
      let knockback = BitFlags$TerrariaPacket.flag6(flags) ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "knockback") : void 0;
      let originalDamage = BitFlags$TerrariaPacket.flag7(flags) ? ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "originalDamage") : void 0;
      let projectileUuid = BitFlags$TerrariaPacket.flag8(flags) ? ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileUuid") : void 0;
      let ai2 = flags2 !== void 0 && BitFlags$TerrariaPacket.flag1(Primitive_option8.valFromOption(flags2)) ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai2") : void 0;
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
      let match = self.ai;
      let ai2 = match[2];
      let ai1 = match[1];
      let ai0 = match[0];
      let bitFlags2 = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(ai2), false, false, false, false, false, false, false);
      let bannerIdToRespondTo = self.bannerIdToRespondTo;
      let bitFlags = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(ai0), Belt_Option.isSome(ai1), BitFlags$TerrariaPacket.toByte(bitFlags2) !== 0, bannerIdToRespondTo !== void 0 ? bannerIdToRespondTo !== 0 : false, Belt_Option.isSome(self.damage), Belt_Option.isSome(self.knockback), Belt_Option.isSome(self.originalDamage), Belt_Option.isSome(self.projectileUuid));
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
      let flags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
      return {
        critical: BitFlags$TerrariaPacket.flag1(flags),
        pvp: BitFlags$TerrariaPacket.flag2(flags)
      };
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let target = reader.readByte();
      let deathReason = PlayerDeathReason$TerrariaPacket.readDeathReason(reader);
      let damage = reader.readInt16();
      let hitDirection = reader.readByte();
      let damageFlags = readDamageFlags(reader);
      let critical = damageFlags.critical;
      let pvp = damageFlags.pvp;
      let cooldownCounter = reader.readSByte();
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
      let damageFlags = (self2) => BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(self2.critical, self2.pvp, false, false, false, false, false, false));
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
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
    var Array16$TerrariaPacket = require_Array16();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function readEventInfo(reader) {
      let eventInfo1 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo1"));
      let eventInfo2 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo2"));
      let eventInfo3 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo3"));
      let eventInfo4 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo4"));
      let eventInfo5 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo5"));
      let eventInfo6 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo6"));
      let eventInfo7 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo7"));
      let eventInfo8 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo8"));
      let eventInfo9 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo9"));
      let eventInfo10 = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo10"));
      let shadowOrbSmashed = BitFlags$TerrariaPacket.flag1(eventInfo1);
      let killedBoss1 = BitFlags$TerrariaPacket.flag2(eventInfo1);
      let killedBoss2 = BitFlags$TerrariaPacket.flag3(eventInfo1);
      let killedBoss3 = BitFlags$TerrariaPacket.flag4(eventInfo1);
      let hardMode = BitFlags$TerrariaPacket.flag5(eventInfo1);
      let killedClown = BitFlags$TerrariaPacket.flag6(eventInfo1);
      let serverSidedCharacters = BitFlags$TerrariaPacket.flag7(eventInfo1);
      let killedPlantBoss = BitFlags$TerrariaPacket.flag8(eventInfo1);
      let killedMechBoss = BitFlags$TerrariaPacket.flag1(eventInfo2);
      let killedMechBoss2 = BitFlags$TerrariaPacket.flag2(eventInfo2);
      let killedMechBoss3 = BitFlags$TerrariaPacket.flag3(eventInfo2);
      let killedAnyMechBoss = BitFlags$TerrariaPacket.flag4(eventInfo2);
      let cloudBg = BitFlags$TerrariaPacket.flag5(eventInfo2);
      let crimson = BitFlags$TerrariaPacket.flag6(eventInfo2);
      let pumpkinMoon = BitFlags$TerrariaPacket.flag7(eventInfo2);
      let snowMoon = BitFlags$TerrariaPacket.flag8(eventInfo2);
      let expertMode = BitFlags$TerrariaPacket.flag1(eventInfo3);
      let fastForwardTime = BitFlags$TerrariaPacket.flag2(eventInfo3);
      let slimeRain = BitFlags$TerrariaPacket.flag3(eventInfo3);
      let killedKingSlime = BitFlags$TerrariaPacket.flag4(eventInfo3);
      let killedQueenBee = BitFlags$TerrariaPacket.flag5(eventInfo3);
      let killedFishron = BitFlags$TerrariaPacket.flag6(eventInfo3);
      let killedMartians = BitFlags$TerrariaPacket.flag7(eventInfo3);
      let killedAncientCultist = BitFlags$TerrariaPacket.flag8(eventInfo3);
      let killedMoonLord = BitFlags$TerrariaPacket.flag1(eventInfo4);
      let killedPumpking = BitFlags$TerrariaPacket.flag2(eventInfo4);
      let killedMourningWood = BitFlags$TerrariaPacket.flag3(eventInfo4);
      let killedIceQueen = BitFlags$TerrariaPacket.flag4(eventInfo4);
      let killedSantank = BitFlags$TerrariaPacket.flag5(eventInfo4);
      let killedEverscream = BitFlags$TerrariaPacket.flag6(eventInfo4);
      let killedGolem = BitFlags$TerrariaPacket.flag7(eventInfo4);
      let birthdayParty = BitFlags$TerrariaPacket.flag8(eventInfo4);
      let killedPirates = BitFlags$TerrariaPacket.flag1(eventInfo5);
      let killedFrostLegion = BitFlags$TerrariaPacket.flag2(eventInfo5);
      let killedGoblins = BitFlags$TerrariaPacket.flag3(eventInfo5);
      let sandstorm = BitFlags$TerrariaPacket.flag4(eventInfo5);
      let dungeonDefendersEvent = BitFlags$TerrariaPacket.flag5(eventInfo5);
      let killedDungeonDefendersTier1 = BitFlags$TerrariaPacket.flag6(eventInfo5);
      let killedDungeonDefendersTier2 = BitFlags$TerrariaPacket.flag7(eventInfo5);
      let killedDungeonDefendersTier3 = BitFlags$TerrariaPacket.flag8(eventInfo5);
      let combatBookUsed = BitFlags$TerrariaPacket.flag1(eventInfo6);
      let manualLanterns = BitFlags$TerrariaPacket.flag2(eventInfo6);
      let killedSolarTower = BitFlags$TerrariaPacket.flag3(eventInfo6);
      let killedVortexTower = BitFlags$TerrariaPacket.flag4(eventInfo6);
      let killedNebulaTower = BitFlags$TerrariaPacket.flag5(eventInfo6);
      let killedStardustTower = BitFlags$TerrariaPacket.flag6(eventInfo6);
      let forceHalloween = BitFlags$TerrariaPacket.flag7(eventInfo6);
      let forceChristmas = BitFlags$TerrariaPacket.flag8(eventInfo6);
      let boughtCat = BitFlags$TerrariaPacket.flag1(eventInfo7);
      let boughtDog = BitFlags$TerrariaPacket.flag2(eventInfo7);
      let boughtBunny = BitFlags$TerrariaPacket.flag3(eventInfo7);
      let freeCake = BitFlags$TerrariaPacket.flag4(eventInfo7);
      let drunkWorld = BitFlags$TerrariaPacket.flag5(eventInfo7);
      let killedEmpressOfLight = BitFlags$TerrariaPacket.flag6(eventInfo7);
      let killedQueenSlime = BitFlags$TerrariaPacket.flag7(eventInfo7);
      let getGoodWorld = BitFlags$TerrariaPacket.flag8(eventInfo7);
      let tenthAnniversaryWorld = BitFlags$TerrariaPacket.flag1(eventInfo8);
      let dontStarveWorld = BitFlags$TerrariaPacket.flag2(eventInfo8);
      let downedDeerClops = BitFlags$TerrariaPacket.flag3(eventInfo8);
      let notTheBeesWorld = BitFlags$TerrariaPacket.flag4(eventInfo8);
      let remixWorld = BitFlags$TerrariaPacket.flag5(eventInfo8);
      let unlockedSlimeBlueSpawn = BitFlags$TerrariaPacket.flag6(eventInfo8);
      let combatBookVolumeTwoWasUsed = BitFlags$TerrariaPacket.flag7(eventInfo8);
      let peddlersSatchelWasUsed = BitFlags$TerrariaPacket.flag8(eventInfo8);
      let unlockedSlimeGreenSpawn = BitFlags$TerrariaPacket.flag1(eventInfo9);
      let unlockedSlimeOldSpawn = BitFlags$TerrariaPacket.flag2(eventInfo9);
      let unlockedSlimePurpleSpawn = BitFlags$TerrariaPacket.flag3(eventInfo9);
      let unlockedSlimeRainbowSpawn = BitFlags$TerrariaPacket.flag4(eventInfo9);
      let unlockedSlimeRedSpawn = BitFlags$TerrariaPacket.flag5(eventInfo9);
      let unlockedSlimeYellowSpawn = BitFlags$TerrariaPacket.flag6(eventInfo9);
      let unlockedSlimeCopperSpawn = BitFlags$TerrariaPacket.flag7(eventInfo9);
      let fastForwardTimeToDusk = BitFlags$TerrariaPacket.flag8(eventInfo9);
      let noTrapsWorld = BitFlags$TerrariaPacket.flag1(eventInfo10);
      let zenithWorld = BitFlags$TerrariaPacket.flag2(eventInfo10);
      let unlockedTruffleSpawn = BitFlags$TerrariaPacket.flag3(eventInfo10);
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
      let reader = new Packetreader(payload);
      let time = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "time");
      let dayAndMoonInfo = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "dayAndMoonInfo");
      let moonPhase = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "moonPhase");
      let maxTilesX = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "maxTilesX");
      let maxTilesY = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "maxTilesY");
      let spawnX = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "spawnX");
      let spawnY = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "spawnY");
      let worldSurface = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "worldSurface");
      let rockLayer = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "rockLayer");
      let worldId = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "worldId");
      let worldName = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "worldName");
      let gameMode = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "gameMode");
      let worldUniqueId = Array16$TerrariaPacket.fromArray(ErrorAwarePacketReader$TerrariaPacket.readBytes(reader, 16, "worldUniqueId"));
      let worldGeneratorVersion = ErrorAwarePacketReader$TerrariaPacket.readUInt64(reader, "worldGeneratorVersion");
      let moonType = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "moonType");
      let treeBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground");
      let treeBackground2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground2");
      let treeBackground3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground3");
      let treeBackground4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground4");
      let corruptionBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "corruptionBackground");
      let jungleBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "jungleBackground");
      let snowBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "snowBackground");
      let hallowBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hallowBackground");
      let crimsonBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "crimsonBackground");
      let desertBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "desertBackground");
      let oceanBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "oceanBackground");
      let mushroomBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "mushroomBackground");
      let underworldBackground = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "underworldBackground");
      let iceBackStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "iceBackStyle");
      let jungleBackStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "jungleBackStyle");
      let hellBackStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hellBackStyle");
      let windSpeedSet = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "windSpeedSet");
      let cloudNumber = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "cloudNumber");
      let tree1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tree1");
      let tree2 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tree2");
      let tree3 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tree3");
      let treeStyle1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle1");
      let treeStyle2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle2");
      let treeStyle3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle3");
      let treeStyle4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle4");
      let caveBack1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "caveBack1");
      let caveBack2 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "caveBack2");
      let caveBack3 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "caveBack3");
      let caveBackStyle1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle1");
      let caveBackStyle2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle2");
      let caveBackStyle3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle3");
      let caveBackStyle4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle4");
      let forest1TreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest1TreeTopStyle");
      let forest2TreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest2TreeTopStyle");
      let forest3TreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest3TreeTopStyle");
      let forest4TreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest4TreeTopStyle");
      let corruptionTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "corruptionTreeTopStyle");
      let jungleTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "jungleTreeTopStyle");
      let snowTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "snowTreeTopStyle");
      let hallowTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hallowTreeTopStyle");
      let crimsonTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "crimsonTreeTopStyle");
      let desertTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "desertTreeTopStyle");
      let oceanTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "oceanTreeTopStyle");
      let glowingMushroomTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "glowingMushroomTreeTopStyle");
      let underworldTreeTopStyle = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "underworldTreeTopStyle");
      let rain = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "rain");
      let eventInfo = readEventInfo(reader);
      let sundialCooldown = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "sundialCooldown");
      let moondialCooldown = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "moondialCooldown");
      let copperOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "copperOreTier");
      let ironOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "ironOreTier");
      let silverOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "silverOreTier");
      let goldOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "goldOreTier");
      let cobaltOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "cobaltOreTier");
      let mythrilOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "mythrilOreTier");
      let adamantiteOreTier = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "adamantiteOreTier");
      let invasionType = ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "invasionType");
      let lobbyId = ErrorAwarePacketReader$TerrariaPacket.readUInt64(reader, "lobbyId");
      let sandstormSeverity = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "sandstormSeverity");
      return Belt_Option.map(worldUniqueId, (worldUniqueId2) => ({
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
      }));
    }
    function packEventInfo(writer, eventInfo) {
      let eventInfo1 = BitFlags$TerrariaPacket.fromFlags(eventInfo.shadowOrbSmashed, eventInfo.killedBoss1, eventInfo.killedBoss2, eventInfo.killedBoss3, eventInfo.hardMode, eventInfo.killedClown, eventInfo.serverSidedCharacters, eventInfo.killedPlantBoss);
      let eventInfo2 = BitFlags$TerrariaPacket.fromFlags(eventInfo.killedMechBoss, eventInfo.killedMechBoss2, eventInfo.killedMechBoss3, eventInfo.killedAnyMechBoss, eventInfo.cloudBg, eventInfo.crimson, eventInfo.pumpkinMoon, eventInfo.snowMoon);
      let eventInfo3 = BitFlags$TerrariaPacket.fromFlags(eventInfo.expertMode, eventInfo.fastForwardTime, eventInfo.slimeRain, eventInfo.killedKingSlime, eventInfo.killedQueenBee, eventInfo.killedFishron, eventInfo.killedMartians, eventInfo.killedAncientCultist);
      let eventInfo4 = BitFlags$TerrariaPacket.fromFlags(eventInfo.killedMoonLord, eventInfo.killedPumpking, eventInfo.killedMourningWood, eventInfo.killedIceQueen, eventInfo.killedSantank, eventInfo.killedEverscream, eventInfo.killedGolem, eventInfo.birthdayParty);
      let eventInfo5 = BitFlags$TerrariaPacket.fromFlags(eventInfo.killedPirates, eventInfo.killedFrostLegion, eventInfo.killedGoblins, eventInfo.sandstorm, eventInfo.dungeonDefendersEvent, eventInfo.killedDungeonDefendersTier1, eventInfo.killedDungeonDefendersTier2, eventInfo.killedDungeonDefendersTier3);
      let eventInfo6 = BitFlags$TerrariaPacket.fromFlags(eventInfo.combatBookUsed, eventInfo.manualLanterns, eventInfo.killedSolarTower, eventInfo.killedVortexTower, eventInfo.killedNebulaTower, eventInfo.killedStardustTower, eventInfo.forceHalloween, eventInfo.forceChristmas);
      let eventInfo7 = BitFlags$TerrariaPacket.fromFlags(eventInfo.boughtCat, eventInfo.boughtDog, eventInfo.boughtBunny, eventInfo.freeCake, eventInfo.drunkWorld, eventInfo.killedEmpressOfLight, eventInfo.killedQueenSlime, eventInfo.getGoodWorld);
      let eventInfo8 = BitFlags$TerrariaPacket.fromFlags(eventInfo.tenthAnniversaryWorld, eventInfo.dontStarveWorld, eventInfo.downedDeerClops, eventInfo.notTheBeesWorld, eventInfo.remixWorld, eventInfo.unlockedSlimeBlueSpawn, eventInfo.combatBookVolumeTwoWasUsed, eventInfo.peddlersSatchelWasUsed);
      let eventInfo9 = BitFlags$TerrariaPacket.fromFlags(eventInfo.unlockedSlimeGreenSpawn, eventInfo.unlockedSlimeOldSpawn, eventInfo.unlockedSlimePurpleSpawn, eventInfo.unlockedSlimeRainbowSpawn, eventInfo.unlockedSlimeRedSpawn, eventInfo.unlockedSlimeYellowSpawn, eventInfo.unlockedSlimeCopperSpawn, eventInfo.fastForwardTimeToDusk);
      let eventInfo10 = BitFlags$TerrariaPacket.fromFlags(eventInfo.noTrapsWorld, eventInfo.zenithWorld, eventInfo.unlockedTruffleSpawn, false, false, false, false, false);
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let active = reader.readByte() !== 0;
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
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function readNpcFlags1(reader, fieldName) {
      let flags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, fieldName));
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
      let flags = BitFlags$TerrariaPacket.fromByte(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, fieldName));
      return {
        statsScaled: BitFlags$TerrariaPacket.flag1(flags),
        spawnedFromStatue: BitFlags$TerrariaPacket.flag2(flags),
        strengthMultiplier: BitFlags$TerrariaPacket.flag3(flags)
      };
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let npcSlotId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcSlotId");
      let x = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      let y = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      let vx = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
      let vy = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
      let target = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "target");
      let npcFlags12 = readNpcFlags1(reader, "npcFlags1");
      let npcFlags22 = readNpcFlags2(reader, "npcFlags2");
      let ai_0 = npcFlags12.ai0 ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai0") : void 0;
      let ai_1 = npcFlags12.ai1 ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai1") : void 0;
      let ai_2 = npcFlags12.ai2 ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai2") : void 0;
      let ai_3 = npcFlags12.ai3 ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai3") : void 0;
      let ai = [
        ai_0,
        ai_1,
        ai_2,
        ai_3
      ];
      let npcTypeId = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcTypeId");
      let playerCountScale = npcFlags22.statsScaled ? ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerCountScale") : void 0;
      let strengthMultiplier = npcFlags22.strengthMultiplier ? ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "strengthMultiplier") : void 0;
      let life;
      if (npcFlags12.lifeMax) {
        life = "Max";
      } else {
        let lifeBytes = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "lifeBytes");
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
      let releaseOwner;
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
      let match = self.ai;
      return BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(self.directionX, self.directionY, Belt_Option.isSome(match[0]), Belt_Option.isSome(match[1]), Belt_Option.isSome(match[2]), Belt_Option.isSome(match[3]), self.spriteDirection, self.life === "Max"));
    }
    function npcFlags2(self) {
      return BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(self.playerCountScale), self.spawnedFromStatue, Belt_Option.isSome(self.strengthMultiplier), false, false, false, false, false));
    }
    function packAi(writer, param) {
      let ai3 = param[3];
      let ai2 = param[2];
      let ai1 = param[1];
      let ai0 = param[0];
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
      let reader = new Packetreader(payload);
      let reason = reader.readNetworkText();
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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Lazy.js
var Stdlib_Lazy_exports = {};
function is_val(l) {
  return l.LAZY_DONE;
}
function forward_with_closure(blk, closure) {
  let result = closure();
  blk.VAL = result;
  blk.LAZY_DONE = true;
  return result;
}
function raise_undefined() {
  throw {
    RE_EXN_ID: Undefined,
    Error: new Error()
  };
}
function force(lzv) {
  if (lzv.LAZY_DONE) {
    return lzv.VAL;
  } else {
    let closure = lzv.VAL;
    lzv.VAL = raise_undefined;
    try {
      return forward_with_closure(lzv, closure);
    } catch (e) {
      lzv.VAL = () => {
        throw e;
      };
      throw e;
    }
  }
}
function force_val(lzv) {
  if (lzv.LAZY_DONE) {
    return lzv.VAL;
  } else {
    let closure = lzv.VAL;
    lzv.VAL = raise_undefined;
    return forward_with_closure(lzv, closure);
  }
}
function from_fun(closure) {
  return {
    LAZY_DONE: false,
    VAL: closure
  };
}
function from_val(value) {
  return {
    LAZY_DONE: true,
    VAL: value
  };
}
var Primitive_exceptions2, Undefined, make4, get6, isEvaluated;
var init_Stdlib_Lazy = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Lazy.js"() {
    "use strict";
    Primitive_exceptions2 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
    Undefined = /* @__PURE__ */ Primitive_exceptions2.create("Stdlib_Lazy.Undefined");
    make4 = from_fun;
    get6 = force;
    isEvaluated = is_val;
    exports.make = make4;
    exports.get = get6;
    exports.isEvaluated = isEvaluated;
    exports.Undefined = Undefined;
    exports.force = force;
    exports.force_val = force_val;
    exports.from_fun = from_fun;
    exports.from_val = from_val;
    exports.is_val = is_val;
  }
});

// src/packet/Packet_Emoji.js
var require_Packet_Emoji = __commonJS({
  "src/packet/Packet_Emoji.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_DoorUse.js
var require_Packet_DoorUse = __commonJS({
  "src/packet/Packet_DoorUse.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_HarpPlay.js
var require_Packet_HarpPlay = __commonJS({
  "src/packet/Packet_HarpPlay.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ChestName.js
var require_Packet_ChestName = __commonJS({
  "src/packet/Packet_ChestName.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ChestOpen.js
var require_Packet_ChestOpen = __commonJS({
  "src/packet/Packet_ChestOpen.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_LiquidSet.js
var require_Packet_LiquidSet = __commonJS({
  "src/packet/Packet_LiquidSet.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcStrike.js
var require_Packet_NpcStrike = __commonJS({
  "src/packet/Packet_NpcStrike.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcTamper.js
var require_Packet_NpcTamper = __commonJS({
  "src/packet/Packet_NpcTamper.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function fromInt(playerId) {
      if (playerId !== -1) {
        return {
          TAG: "PlayerId",
          _0: playerId
        };
      } else {
        return "All";
      }
    }
    function toInt(self) {
      if (typeof self !== "object") {
        return -1;
      } else {
        return self._0;
      }
    }
    var Immunity = {
      fromInt,
      toInt
    };
    function readUInt16(prim) {
      return prim.readUInt16();
    }
    function readByte(prim) {
      return prim.readByte();
    }
    function readInt32(prim) {
      return prim.readInt32();
    }
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let npcId = reader.readUInt16();
      let setNpcImmunity = reader.readByte() === 1;
      let match = setNpcImmunity ? [
        reader.readInt32(),
        fromInt(reader.readInt16())
      ] : [
        void 0,
        void 0
      ];
      return {
        npcId,
        immunityTime: match[0],
        immunityFromPlayerId: match[1]
      };
    }
    var Decode = {
      readUInt16,
      readByte,
      readInt32,
      readInt16,
      parse
    };
    function packUInt16(prim0, prim1) {
      return prim0.packUInt16(prim1);
    }
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function packImmunity(writer, immunityTime, immunityOrigin) {
      if (immunityTime !== void 0 && immunityOrigin !== void 0) {
        return writer.packByte(1).packInt32(immunityTime).packInt16(toInt(immunityOrigin));
      } else {
        return writer.packByte(0);
      }
    }
    function toBuffer(self) {
      return packImmunity(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("NpcTamper")).packUInt16(self.npcId), self.immunityTime, self.immunityFromPlayerId).data;
    }
    var Encode = {
      packUInt16,
      packByte,
      packInt32,
      packInt16,
      setType: ManagedPacketWriter$PacketFactory.setType,
      data,
      packImmunity,
      toBuffer
    };
    var Option;
    exports2.Option = Option;
    exports2.Immunity = Immunity;
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_HealEffect.js
var require_Packet_HealEffect = __commonJS({
  "src/packet/Packet_HealEffect.js"(exports2) {
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let healAmount = reader.readInt16();
      return {
        playerId,
        healAmount
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("HealEffect")).packByte(self.playerId).packInt16(self.healAmount).data;
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

// src/packet/Packet_ManaEffect.js
var require_Packet_ManaEffect = __commonJS({
  "src/packet/Packet_ManaEffect.js"(exports2) {
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
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let manaAmount = reader.readInt16();
      return {
        playerId,
        manaAmount
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ManaEffect")).packByte(self.playerId).packInt16(self.manaAmount).data;
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

// src/packet/Packet_NpcBuffAdd.js
var require_Packet_NpcBuffAdd = __commonJS({
  "src/packet/Packet_NpcBuffAdd.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcRelease.js
var require_Packet_NpcRelease = __commonJS({
  "src/packet/Packet_NpcRelease.js"(exports2) {
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
    function readInt32(prim) {
      return prim.readInt32();
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let x = reader.readInt32();
      let y = reader.readInt32();
      let npcType = reader.readInt16();
      let style = reader.readByte();
      return {
        x,
        y,
        npcType,
        style
      };
    }
    var Decode = {
      readByte,
      readInt16,
      readInt32,
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
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("NpcRelease")).packInt32(self.x).packInt32(self.y).packInt16(self.npcType).packByte(self.style).data;
    }
    var Encode = {
      packByte,
      packInt16,
      packInt32,
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

// src/packet/Packet_PortalKill.js
var require_Packet_PortalKill = __commonJS({
  "src/packet/Packet_PortalKill.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_EmoteBubble.js
var require_Packet_EmoteBubble = __commonJS({
  "src/packet/Packet_EmoteBubble.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PasswordSend.js
var require_Packet_PasswordSend = __commonJS({
  "src/packet/Packet_PasswordSend.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_GemLockToggle.js
var require_Packet_GemLockToggle = __commonJS({
  "src/packet/Packet_GemLockToggle.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NebulaLevelUp.js
var require_Packet_NebulaLevelUp = __commonJS({
  "src/packet/Packet_NebulaLevelUp.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcItemStrike.js
var require_Packet_NpcItemStrike = __commonJS({
  "src/packet/Packet_NpcItemStrike.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerStealth.js
var require_Packet_PlayerStealth = __commonJS({
  "src/packet/Packet_PlayerStealth.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_GoodEvilUpdate.js
var require_Packet_GoodEvilUpdate = __commonJS({
  "src/packet/Packet_GoodEvilUpdate.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ItemDropModify.js
var require_Packet_ItemDropModify = __commonJS({
  "src/packet/Packet_ItemDropModify.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ItemFramePlace.js
var require_Packet_ItemFramePlace = __commonJS({
  "src/packet/Packet_ItemFramePlace.js"(exports2) {
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
      let reader = new Packetreader(payload);
      let x = reader.readInt16();
      let y = reader.readInt16();
      let itemId = reader.readInt16();
      let prefix = reader.readByte();
      let stack = reader.readInt16();
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ItemFramePlace")).packInt16(self.x).packInt16(self.y).packInt16(self.itemId).packByte(self.prefix).packInt16(self.stack).data;
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

// src/packet/Packet_LucyAxeMessage.js
var require_Packet_LucyAxeMessage = __commonJS({
  "src/packet/Packet_LucyAxeMessage.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readByte(prim) {
      return prim.readByte();
    }
    function readSingle(prim) {
      return prim.readSingle();
    }
    function readInt32(prim) {
      return prim.readInt32();
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let source = reader.readByte();
      let variant = reader.readByte();
      let velocity_x = reader.readSingle();
      let velocity_y = reader.readSingle();
      let velocity = {
        x: velocity_x,
        y: velocity_y
      };
      let position_x = reader.readInt32();
      let position_y = reader.readInt32();
      let position = {
        x: position_x,
        y: position_y
      };
      return {
        source,
        variant,
        velocity,
        position
      };
    }
    var Decode = {
      readByte,
      readSingle,
      readInt32,
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("LucyAxeMessage")).packByte(self.source).packByte(self.variant).packSingle(self.velocity.x).packSingle(self.velocity.y).packInt32(self.position.x).packInt32(self.position.y).data;
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

// src/packet/Packet_ItemOwnerRemove.js
var require_Packet_ItemOwnerRemove = __commonJS({
  "src/packet/Packet_ItemOwnerRemove.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readInt16(prim) {
      return prim.readInt16();
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let itemDropId = reader.readInt16();
      return {
        itemDropId
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ItemOwnerRemove")).packInt16(self.itemDropId).data;
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

// src/packet/Packet_LegacySoundPlay.js
var require_Packet_LegacySoundPlay = __commonJS({
  "src/packet/Packet_LegacySoundPlay.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerHealOther.js
var require_Packet_PlayerHealOther = __commonJS({
  "src/packet/Packet_PlayerHealOther.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerSpawnSelf.js
var require_Packet_PlayerSpawnSelf = __commonJS({
  "src/packet/Packet_PlayerSpawnSelf.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_CombatTextCreate.js
var require_Packet_CombatTextCreate = __commonJS({
  "src/packet/Packet_CombatTextCreate.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_NpcSpecialEffect.js
var require_Packet_NpcSpecialEffect = __commonJS({
  "src/packet/Packet_NpcSpecialEffect.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PasswordRequired.js
var require_Packet_PasswordRequired = __commonJS({
  "src/packet/Packet_PasswordRequired.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_EventNotification.js
var require_Packet_EventNotification = __commonJS({
  "src/packet/Packet_EventNotification.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_GolfBallLandInCup.js
var require_Packet_GolfBallLandInCup = __commonJS({
  "src/packet/Packet_GolfBallLandInCup.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_MassWireOperation.js
var require_Packet_MassWireOperation = __commonJS({
  "src/packet/Packet_MassWireOperation.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_MoonLordCountdown.js
var require_Packet_MoonLordCountdown = __commonJS({
  "src/packet/Packet_MoonLordCountdown.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readInt32(prim) {
      return prim.readInt32();
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      return {
        maxMoonLordCountdown: reader.readInt32(),
        moonLordCountdown: reader.readInt32()
      };
    }
    var Decode = {
      readInt32,
      parse
    };
    function packInt32(prim0, prim1) {
      return prim0.packInt32(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("MoonLordCountdown")).packInt32(self.maxMoonLordCountdown).packInt32(self.moonLordCountdown).data;
    }
    var Encode = {
      packInt32,
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

// src/packet/Packet_ProjectileDestroy.js
var require_Packet_ProjectileDestroy = __commonJS({
  "src/packet/Packet_ProjectileDestroy.js"(exports2) {
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
      let reader = new Packetreader(payload);
      let projectileId = reader.readInt16();
      let owner = reader.readByte();
      return {
        projectileId,
        owner
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ProjectileDestroy")).packInt16(self.projectileId).packByte(self.owner).data;
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

// src/packet/Packet_RevengeMarkerSync.js
var require_Packet_RevengeMarkerSync = __commonJS({
  "src/packet/Packet_RevengeMarkerSync.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_CombatNumberCreate.js
var require_Packet_CombatNumberCreate = __commonJS({
  "src/packet/Packet_CombatNumberCreate.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_MinionTargetUpdate.js
var require_Packet_MinionTargetUpdate = __commonJS({
  "src/packet/Packet_MinionTargetUpdate.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ActiveContainerSync.js
var require_Packet_ActiveContainerSync = __commonJS({
  "src/packet/Packet_ActiveContainerSync.js"(exports2) {
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
    function readString(prim) {
      return prim.readString();
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let chestId = reader.readInt16();
      let x = reader.readInt16();
      let y = reader.readInt16();
      let nameLength = reader.readByte();
      let name = nameLength > 0 && nameLength <= 20 ? reader.readString() : "";
      return {
        chestId,
        x,
        y,
        nameLength,
        name
      };
    }
    var Decode = {
      readByte,
      readInt16,
      readString,
      parse
    };
    function packByte(prim0, prim1) {
      return prim0.packByte(prim1);
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function packString(prim0, prim1) {
      return prim0.packString(prim1);
    }
    function data(prim) {
      return prim.data;
    }
    function toBuffer(self) {
      let writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ActiveContainerSync")).packInt16(self.chestId).packInt16(self.x).packInt16(self.y).packByte(self.nameLength);
      if (self.nameLength > 0 && self.nameLength <= 20) {
        writer.packString(self.name);
      }
      return writer.data;
    }
    var Encode = {
      packByte,
      packInt16,
      packString,
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

// src/packet/Packet_RevengeMarkerRemove.js
var require_Packet_RevengeMarkerRemove = __commonJS({
  "src/packet/Packet_RevengeMarkerRemove.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_MassWireOperationPay.js
var require_Packet_MassWireOperationPay = __commonJS({
  "src/packet/Packet_MassWireOperationPay.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_PlayerTeleportPortal.js
var require_Packet_PlayerTeleportPortal = __commonJS({
  "src/packet/Packet_PlayerTeleportPortal.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let playerId = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      let extraInfo = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "extraInfo");
      let position_x = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionX");
      let position_y = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionY");
      let position = {
        x: position_x,
        y: position_y
      };
      let velocity_x = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityX");
      let velocity_y = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityY");
      let velocity = {
        x: velocity_x,
        y: velocity_y
      };
      return {
        playerId,
        extraInfo,
        position,
        velocity
      };
    }
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerTeleportPortal")), self.playerId, "playerId"), self.extraInfo, "extraInfo"), self.position.x, "positionX"), self.position.y, "positionY"), self.velocity.x, "velocityX"), self.velocity.y, "velocityY"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packSingle: ErrorAwarePacketWriter$TerrariaPacket.packSingle,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_CavernMonsterTypeSync.js
var require_Packet_CavernMonsterTypeSync = __commonJS({
  "src/packet/Packet_CavernMonsterTypeSync.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ClientSyncedInventory.js
var require_Packet_ClientSyncedInventory = __commonJS({
  "src/packet/Packet_ClientSyncedInventory.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_FoodPlatterTryPlacing.js
var require_Packet_FoodPlatterTryPlacing = __commonJS({
  "src/packet/Packet_FoodPlatterTryPlacing.js"(exports2) {
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
      let reader = new Packetreader(payload);
      let x = reader.readInt16();
      let y = reader.readInt16();
      let itemId = reader.readInt16();
      let prefix = reader.readByte();
      let stack = reader.readInt16();
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("FoodPlatterTryPlacing")).packInt16(self.x).packInt16(self.y).packInt16(self.itemId).packByte(self.prefix).packInt16(self.stack).data;
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

// src/packet/Packet_NpcKilledNotification.js
var require_Packet_NpcKilledNotification = __commonJS({
  "src/packet/Packet_NpcKilledNotification.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ShieldStrengthsUpdate.js
var require_Packet_ShieldStrengthsUpdate = __commonJS({
  "src/packet/Packet_ShieldStrengthsUpdate.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_CrystalInvasionWipeAll.js
var require_Packet_CrystalInvasionWipeAll = __commonJS({
  "src/packet/Packet_CrystalInvasionWipeAll.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ItemDropInstancedUpdate.js
var require_Packet_ItemDropInstancedUpdate = __commonJS({
  "src/packet/Packet_ItemDropInstancedUpdate.js"(exports2) {
    "use strict";
    var Packet_ItemDropUpdate$TerrariaPacket = require_Packet_ItemDropUpdate();
    var parse = Packet_ItemDropUpdate$TerrariaPacket.parse;
    var toBuffer = Packet_ItemDropUpdate$TerrariaPacket.toBuffer;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ItemDropProtectedUpdate.js
var require_Packet_ItemDropProtectedUpdate = __commonJS({
  "src/packet/Packet_ItemDropProtectedUpdate.js"(exports2) {
    "use strict";
    var Stdlib_Option = (init_Stdlib_Option(), __toCommonJS(Stdlib_Option_exports));
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
      return Stdlib_Option.map(Packet_ItemDropUpdate$TerrariaPacket.parse(payload), (itemDropUpdate) => {
        let reader = new Packetreader(payload);
        reader.readBytes(24);
        let timeLeftInWhichTheItemCannotBeTakenByEnemies = reader.readByte();
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
          timeLeftInWhichTheItemCannotBeTakenByEnemies
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ItemDropProtectedUpdate")).packInt16(self.itemDropId).packSingle(self.x).packSingle(self.y).packSingle(self.vx).packSingle(self.vy).packInt16(self.stack).packByte(self.prefix).packByte(self.noDelay).packInt16(self.itemId).packByte(self.timeLeftInWhichTheItemCannotBeTakenByEnemies).data;
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

// src/packet/Packet_PiggyBankVoidLensUpdate.js
var require_Packet_PiggyBankVoidLensUpdate = __commonJS({
  "src/packet/Packet_PiggyBankVoidLensUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readInt16(prim) {
      return prim.readInt16();
    }
    function tryReading(reader) {
      let n = reader.readInt16();
      if (n !== -1) {
        return;
      }
      let expectedIdentity = reader.readInt16();
      let expectedType = reader.readInt16();
      return {
        expectedIdentity,
        expectedType
      };
    }
    function packInt16(prim0, prim1) {
      return prim0.packInt16(prim1);
    }
    function pack(writer, self) {
      if (self !== void 0) {
        return writer.packInt16(self.expectedIdentity).packInt16(self.expectedType);
      } else {
        return writer.packInt16(-1);
      }
    }
    var TrackedProjectileReference = {
      readInt16,
      tryReading,
      packInt16,
      pack
    };
    function readByte(prim) {
      return prim.readByte();
    }
    function readSingle(prim) {
      return prim.readSingle();
    }
    function readInt32(prim) {
      return prim.readInt32();
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let playerId = reader.readByte();
      let piggyBankProj = tryReading(reader);
      let voidLensChest = tryReading(reader);
      return {
        playerId,
        piggyBankProj,
        voidLensChest
      };
    }
    var Decode = {
      readByte,
      readSingle,
      readInt32,
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
      return pack(pack(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PiggyBankVoidLensUpdate")).packByte(self.playerId), self.piggyBankProj), self.voidLensChest).data;
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
    exports2.TrackedProjectileReference = TrackedProjectileReference;
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerLuckFactorsUpdate.js
var require_Packet_PlayerLuckFactorsUpdate = __commonJS({
  "src/packet/Packet_PlayerLuckFactorsUpdate.js"(exports2) {
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
    function readByte(prim) {
      return prim.readByte();
    }
    function readSingle(prim) {
      return prim.readSingle();
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let player = reader.readByte();
      let ladyBugLuckTimeLeft = reader.readInt32();
      let torchLuck = reader.readSingle();
      let luckPotion = reader.readByte();
      let hasGardenGnomeNearby = reader.readByte() === 1;
      let equipmentBasedLuckBonus = reader.readSingle();
      let coinLuck = reader.readSingle();
      return {
        playerId: player,
        ladyBugLuckTimeLeft,
        torchLuck,
        luckPotion,
        hasGardenGnomeNearby,
        equipmentBasedLuckBonus,
        coinLuck
      };
    }
    var Decode = {
      readInt16,
      readInt32,
      readByte,
      readSingle,
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerLuckFactorsUpdate")).packByte(self.playerId).packInt32(self.ladyBugLuckTimeLeft).packSingle(self.torchLuck).packByte(self.luckPotion).packByte(self.hasGardenGnomeNearby ? 1 : 0).packSingle(self.equipmentBasedLuckBonus).packSingle(self.coinLuck).data;
    }
    var Encode = {
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

// src/packet/Packet_MinionAttackTargetUpdate.js
var require_Packet_MinionAttackTargetUpdate = __commonJS({
  "src/packet/Packet_MinionAttackTargetUpdate.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_ItemForceIntoNearestChest.js
var require_Packet_ItemForceIntoNearestChest = __commonJS({
  "src/packet/Packet_ItemForceIntoNearestChest.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_InitialTileSectionsRequest.js
var require_Packet_InitialTileSectionsRequest = __commonJS({
  "src/packet/Packet_InitialTileSectionsRequest.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function readInt32(prim) {
      return prim.readInt32();
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let x = reader.readInt32();
      let y = reader.readInt32();
      return {
        x,
        y
      };
    }
    var Decode = {
      readInt32,
      parse
    };
    function toBuffer(self) {
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("InitialTileSectionsRequest")).packInt32(self.x).packInt32(self.y).data;
    }
    var Encode = {
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_AnglerQuestsCompletedAmount.js
var require_Packet_AnglerQuestsCompletedAmount = __commonJS({
  "src/packet/Packet_AnglerQuestsCompletedAmount.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_CrystalInvasionSendWaitTime.js
var require_Packet_CrystalInvasionSendWaitTime = __commonJS({
  "src/packet/Packet_CrystalInvasionSendWaitTime.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    function parse(_payload) {
      return Primitive_option8.some(void 0);
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_DungeonDefendersEventAttemptSkipWait.js
var require_Packet_DungeonDefendersEventAttemptSkipWait = __commonJS({
  "src/packet/Packet_DungeonDefendersEventAttemptSkipWait.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetwriter = require_packetwriter().default;
    function parse(_payload) {
      return Primitive_option8.some(void 0);
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
      return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("DungeonDefendersEventAttemptSkipWait")).data;
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

// src/Parser.js
var require_Parser = __commonJS({
  "src/Parser.js"(exports2) {
    "use strict";
    var Stdlib_Lazy = (init_Stdlib_Lazy(), __toCommonJS(Stdlib_Lazy_exports));
    var Stdlib_Option = (init_Stdlib_Option(), __toCommonJS(Stdlib_Option_exports));
    var PacketType$TerrariaPacket = require_PacketType();
    var Packet_Emoji$TerrariaPacket = require_Packet_Emoji();
    var Packet_Zones$TerrariaPacket = require_Packet_Zones();
    var Packet_Status$TerrariaPacket = require_Packet_Status();
    var Packet_Unused$TerrariaPacket = require_Packet_Unused();
    var Packet_DoorUse$TerrariaPacket = require_Packet_DoorUse();
    var Packet_NpcTalk$TerrariaPacket = require_Packet_NpcTalk();
    var Packet_SignNew$TerrariaPacket = require_Packet_SignNew();
    var Packet_TimeSet$TerrariaPacket = require_Packet_TimeSet();
    var Packet_HarpPlay$TerrariaPacket = require_Packet_HarpPlay();
    var Packet_NpcCatch$TerrariaPacket = require_Packet_NpcCatch();
    var Packet_SignRead$TerrariaPacket = require_Packet_SignRead();
    var Packet_Teleport$TerrariaPacket = require_Packet_Teleport();
    var Packet_ChestItem$TerrariaPacket = require_Packet_ChestItem();
    var Packet_ChestName$TerrariaPacket = require_Packet_ChestName();
    var Packet_ChestOpen$TerrariaPacket = require_Packet_ChestOpen();
    var Packet_ItemOwner$TerrariaPacket = require_Packet_ItemOwner();
    var Packet_LiquidSet$TerrariaPacket = require_Packet_LiquidSet();
    var Packet_NpcStrike$TerrariaPacket = require_Packet_NpcStrike();
    var Packet_NpcTamper$TerrariaPacket = require_Packet_NpcTamper();
    var Packet_NpcUpdate$TerrariaPacket = require_Packet_NpcUpdate();
    var Packet_PvpToggle$TerrariaPacket = require_Packet_PvpToggle();
    var Packet_SmokePoof$TerrariaPacket = require_Packet_SmokePoof();
    var Packet_SwitchHit$TerrariaPacket = require_Packet_SwitchHit();
    var Packet_TilePaint$TerrariaPacket = require_Packet_TilePaint();
    var Packet_WallPaint$TerrariaPacket = require_Packet_WallPaint();
    var Packet_WorldInfo$TerrariaPacket = require_Packet_WorldInfo();
    var Packet_ChestPlace$TerrariaPacket = require_Packet_ChestPlace();
    var Packet_ClientUuid$TerrariaPacket = require_Packet_ClientUuid();
    var Packet_Disconnect$TerrariaPacket = require_Packet_Disconnect();
    var Packet_HealEffect$TerrariaPacket = require_Packet_HealEffect();
    var Packet_ManaEffect$TerrariaPacket = require_Packet_ManaEffect();
    var Packet_NpcBuffAdd$TerrariaPacket = require_Packet_NpcBuffAdd();
    var Packet_NpcFishOut$TerrariaPacket = require_Packet_NpcFishOut();
    var Packet_NpcRelease$TerrariaPacket = require_Packet_NpcRelease();
    var Packet_PlayerDead$TerrariaPacket = require_Packet_PlayerDead();
    var Packet_PlayerInfo$TerrariaPacket = require_Packet_PlayerInfo();
    var Packet_PlayerMana$TerrariaPacket = require_Packet_PlayerMana();
    var Packet_PlayerTeam$TerrariaPacket = require_Packet_PlayerTeam();
    var Packet_PortalKill$TerrariaPacket = require_Packet_PortalKill();
    var Packet_TileModify$TerrariaPacket = require_Packet_TileModify();
    var Packet_TreeGrowFx$TerrariaPacket = require_Packet_TreeGrowFx();
    var Packet_AnglerQuest$TerrariaPacket = require_Packet_AnglerQuest();
    var Packet_EmoteBubble$TerrariaPacket = require_Packet_EmoteBubble();
    var Packet_NpcShopItem$TerrariaPacket = require_Packet_NpcShopItem();
    var Packet_ObjectPlace$TerrariaPacket = require_Packet_ObjectPlace();
    var Packet_PartyToggle$TerrariaPacket = require_Packet_PartyToggle();
    var Packet_PlayerDeath$TerrariaPacket = require_Packet_PlayerDeath();
    var Packet_PlayerDodge$TerrariaPacket = require_Packet_PlayerDodge();
    var Packet_PlayerSpawn$TerrariaPacket = require_Packet_PlayerSpawn();
    var Packet_NpcKillCount$TerrariaPacket = require_Packet_NpcKillCount();
    var Packet_PasswordSend$TerrariaPacket = require_Packet_PasswordSend();
    var Packet_PlayerActive$TerrariaPacket = require_Packet_PlayerActive();
    var Packet_PlayerDamage$TerrariaPacket = require_Packet_PlayerDamage();
    var Packet_PlayerHealth$TerrariaPacket = require_Packet_PlayerHealth();
    var Packet_PlayerUpdate$TerrariaPacket = require_Packet_PlayerUpdate();
    var Packet_GemLockToggle$TerrariaPacket = require_Packet_GemLockToggle();
    var Packet_LoadoutSwitch$TerrariaPacket = require_Packet_LoadoutSwitch();
    var Packet_NebulaLevelUp$TerrariaPacket = require_Packet_NebulaLevelUp();
    var Packet_NetModuleLoad$TerrariaPacket = require_Packet_NetModuleLoad();
    var Packet_NpcBuffUpdate$TerrariaPacket = require_Packet_NpcBuffUpdate();
    var Packet_NpcHomeUpdate$TerrariaPacket = require_Packet_NpcHomeUpdate();
    var Packet_NpcItemStrike$TerrariaPacket = require_Packet_NpcItemStrike();
    var Packet_NpcNameUpdate$TerrariaPacket = require_Packet_NpcNameUpdate();
    var Packet_PlayerBuffAdd$TerrariaPacket = require_Packet_PlayerBuffAdd();
    var Packet_PlayerSlotSet$TerrariaPacket = require_Packet_PlayerSlotSet();
    var Packet_PlayerStealth$TerrariaPacket = require_Packet_PlayerStealth();
    var Packet_ConnectRequest$TerrariaPacket = require_Packet_ConnectRequest();
    var Packet_ExtraValueSync$TerrariaPacket = require_Packet_ExtraValueSync();
    var Packet_GoodEvilUpdate$TerrariaPacket = require_Packet_GoodEvilUpdate();
    var Packet_ItemDropModify$TerrariaPacket = require_Packet_ItemDropModify();
    var Packet_ItemDropUpdate$TerrariaPacket = require_Packet_ItemDropUpdate();
    var Packet_ItemFramePlace$TerrariaPacket = require_Packet_ItemFramePlace();
    var Packet_LucyAxeMessage$TerrariaPacket = require_Packet_LucyAxeMessage();
    var Packet_PlayerBuffsSet$TerrariaPacket = require_Packet_PlayerBuffsSet();
    var Packet_ProjectileSync$TerrariaPacket = require_Packet_ProjectileSync();
    var Packet_TileSquareSend$TerrariaPacket = require_Packet_TileSquareSend();
    var Packet_ItemOwnerRemove$TerrariaPacket = require_Packet_ItemOwnerRemove();
    var Packet_LegacySoundPlay$TerrariaPacket = require_Packet_LegacySoundPlay();
    var Packet_PlayerAnimation$TerrariaPacket = require_Packet_PlayerAnimation();
    var Packet_PlayerHealOther$TerrariaPacket = require_Packet_PlayerHealOther();
    var Packet_PlayerSpawnSelf$TerrariaPacket = require_Packet_PlayerSpawnSelf();
    var Packet_SocialHandshake$TerrariaPacket = require_Packet_SocialHandshake();
    var Packet_TileEntityPlace$TerrariaPacket = require_Packet_TileEntityPlace();
    var Packet_TilePickingSync$TerrariaPacket = require_Packet_TilePickingSync();
    var Packet_TileSectionSend$TerrariaPacket = require_Packet_TileSectionSend();
    var Packet_WiredCannonShot$TerrariaPacket = require_Packet_WiredCannonShot();
    var Packet_ChatMessageSmart$TerrariaPacket = require_Packet_ChatMessageSmart();
    var Packet_CombatTextCreate$TerrariaPacket = require_Packet_CombatTextCreate();
    var Packet_DimensionsUpdate$TerrariaPacket = require_Packet_DimensionsUpdate();
    var Packet_NpcSpecialEffect$TerrariaPacket = require_Packet_NpcSpecialEffect();
    var Packet_PasswordRequired$TerrariaPacket = require_Packet_PasswordRequired();
    var Packet_TileEntityUpdate$TerrariaPacket = require_Packet_TileEntityUpdate();
    var Packet_TileSectionFrame$TerrariaPacket = require_Packet_TileSectionFrame();
    var Packet_WorldDataRequest$TerrariaPacket = require_Packet_WorldDataRequest();
    var Packet_EventNotification$TerrariaPacket = require_Packet_EventNotification();
    var Packet_GolfBallLandInCup$TerrariaPacket = require_Packet_GolfBallLandInCup();
    var Packet_MassWireOperation$TerrariaPacket = require_Packet_MassWireOperation();
    var Packet_MoonLordCountdown$TerrariaPacket = require_Packet_MoonLordCountdown();
    var Packet_NpcTeleportPortal$TerrariaPacket = require_Packet_NpcTeleportPortal();
    var Packet_ProjectileDestroy$TerrariaPacket = require_Packet_ProjectileDestroy();
    var Packet_RevengeMarkerSync$TerrariaPacket = require_Packet_RevengeMarkerSync();
    var Packet_CombatNumberCreate$TerrariaPacket = require_Packet_CombatNumberCreate();
    var Packet_MinionTargetUpdate$TerrariaPacket = require_Packet_MinionTargetUpdate();
    var Packet_ActiveContainerSync$TerrariaPacket = require_Packet_ActiveContainerSync();
    var Packet_AnglerQuestComplete$TerrariaPacket = require_Packet_AnglerQuestComplete();
    var Packet_BossOrInvasionSpawn$TerrariaPacket = require_Packet_BossOrInvasionSpawn();
    var Packet_ChestOrTempleUnlock$TerrariaPacket = require_Packet_ChestOrTempleUnlock();
    var Packet_PlayerInventorySlot$TerrariaPacket = require_Packet_PlayerInventorySlot();
    var Packet_RevengeMarkerRemove$TerrariaPacket = require_Packet_RevengeMarkerRemove();
    var Packet_TeleportationPotion$TerrariaPacket = require_Packet_TeleportationPotion();
    var Packet_CrystalInvasionStart$TerrariaPacket = require_Packet_CrystalInvasionStart();
    var Packet_MassWireOperationPay$TerrariaPacket = require_Packet_MassWireOperationPay();
    var Packet_PlayerChestIndexSync$TerrariaPacket = require_Packet_PlayerChestIndexSync();
    var Packet_PlayerTeleportPortal$TerrariaPacket = require_Packet_PlayerTeleportPortal();
    var Packet_CavernMonsterTypeSync$TerrariaPacket = require_Packet_CavernMonsterTypeSync();
    var Packet_ClientSyncedInventory$TerrariaPacket = require_Packet_ClientSyncedInventory();
    var Packet_FoodPlatterTryPlacing$TerrariaPacket = require_Packet_FoodPlatterTryPlacing();
    var Packet_NpcBuffRemovalRequest$TerrariaPacket = require_Packet_NpcBuffRemovalRequest();
    var Packet_NpcKilledNotification$TerrariaPacket = require_Packet_NpcKilledNotification();
    var Packet_ShieldStrengthsUpdate$TerrariaPacket = require_Packet_ShieldStrengthsUpdate();
    var Packet_WeaponsRackTryPlacing$TerrariaPacket = require_Packet_WeaponsRackTryPlacing();
    var Packet_CrystalInvasionWipeAll$TerrariaPacket = require_Packet_CrystalInvasionWipeAll();
    var Packet_InvasionProgressReport$TerrariaPacket = require_Packet_InvasionProgressReport();
    var Packet_CreditsOrSlimeTransform$TerrariaPacket = require_Packet_CreditsOrSlimeTransform();
    var Packet_ItemDropInstancedUpdate$TerrariaPacket = require_Packet_ItemDropInstancedUpdate();
    var Packet_ItemDropProtectedUpdate$TerrariaPacket = require_Packet_ItemDropProtectedUpdate();
    var Packet_ItemDropShimmeredUpdate$TerrariaPacket = require_Packet_ItemDropShimmeredUpdate();
    var Packet_PiggyBankVoidLensUpdate$TerrariaPacket = require_Packet_PiggyBankVoidLensUpdate();
    var Packet_PlayerLuckFactorsUpdate$TerrariaPacket = require_Packet_PlayerLuckFactorsUpdate();
    var Packet_ShimmerEffectOrCoinLuck$TerrariaPacket = require_Packet_ShimmerEffectOrCoinLuck();
    var Packet_MinionAttackTargetUpdate$TerrariaPacket = require_Packet_MinionAttackTargetUpdate();
    var Packet_TemporaryAnimationCreate$TerrariaPacket = require_Packet_TemporaryAnimationCreate();
    var Packet_ItemForceIntoNearestChest$TerrariaPacket = require_Packet_ItemForceIntoNearestChest();
    var Packet_TileEntityHatRackItemSync$TerrariaPacket = require_Packet_TileEntityHatRackItemSync();
    var Packet_CountsAsHostForGameplaySet$TerrariaPacket = require_Packet_CountsAsHostForGameplaySet();
    var Packet_InitialTileSectionsRequest$TerrariaPacket = require_Packet_InitialTileSectionsRequest();
    var Packet_AnglerQuestsCompletedAmount$TerrariaPacket = require_Packet_AnglerQuestsCompletedAmount();
    var Packet_CrystalInvasionSendWaitTime$TerrariaPacket = require_Packet_CrystalInvasionSendWaitTime();
    var Packet_HaveDryadDoStardewAnimation$TerrariaPacket = require_Packet_HaveDryadDoStardewAnimation();
    var Packet_TravellingMerchantInventory$TerrariaPacket = require_Packet_TravellingMerchantInventory();
    var Packet_TileEntityInteractionRequest$TerrariaPacket = require_Packet_TileEntityInteractionRequest();
    var Packet_TileEntityDisplayDollItemSync$TerrariaPacket = require_Packet_TileEntityDisplayDollItemSync();
    var Packet_ClientFinishConnectingToServer$TerrariaPacket = require_Packet_ClientFinishConnectingToServer();
    var Packet_DungeonDefendersEventAttemptSkipWait$TerrariaPacket = require_Packet_DungeonDefendersEventAttemptSkipWait();
    function parsePayload(packetType, payload, fromServer) {
      switch (packetType) {
        case "ConnectRequest":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_ConnectRequest$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ConnectRequest",
              _0: a
            }));
          }
        case "Disconnect":
          if (fromServer) {
            return Stdlib_Option.map(Packet_Disconnect$TerrariaPacket.parse(payload), (a) => ({
              TAG: "Disconnect",
              _0: a
            }));
          } else {
            return;
          }
        case "PlayerSlotSet":
          if (fromServer) {
            return Stdlib_Option.map(Packet_PlayerSlotSet$TerrariaPacket.parse(payload), (a) => ({
              TAG: "PlayerSlotSet",
              _0: a
            }));
          } else {
            return;
          }
        case "PlayerInfo":
          return Stdlib_Option.map(Packet_PlayerInfo$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerInfo",
            _0: a
          }));
        case "PlayerInventorySlot":
          return Stdlib_Option.map(Packet_PlayerInventorySlot$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerInventorySlot",
            _0: a
          }));
        case "WorldDataRequest":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_WorldDataRequest$TerrariaPacket.parse(payload), (a) => ({
              TAG: "WorldDataRequest",
              _0: a
            }));
          }
        case "WorldInfo":
          if (fromServer) {
            return Stdlib_Option.map(Packet_WorldInfo$TerrariaPacket.parse(payload), (a) => ({
              TAG: "WorldInfo",
              _0: a
            }));
          } else {
            return;
          }
        case "InitialTileSectionsRequest":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_InitialTileSectionsRequest$TerrariaPacket.parse(payload), (a) => ({
              TAG: "InitialTileSectionsRequest",
              _0: a
            }));
          }
        case "Status":
          if (fromServer) {
            return Stdlib_Option.map(Packet_Status$TerrariaPacket.parse(payload), (a) => ({
              TAG: "Status",
              _0: a
            }));
          } else {
            return;
          }
        case "TileSectionSend":
          if (fromServer) {
            return Stdlib_Option.map(Packet_TileSectionSend$TerrariaPacket.parse(payload), (a) => ({
              TAG: "TileSectionSend",
              _0: a
            }));
          } else {
            return;
          }
        case "TileSectionFrame":
          if (fromServer) {
            return Stdlib_Option.map(Packet_TileSectionFrame$TerrariaPacket.parse(payload), (a) => ({
              TAG: "TileSectionFrame",
              _0: a
            }));
          } else {
            return;
          }
        case "PlayerSpawn":
          return Stdlib_Option.map(Packet_PlayerSpawn$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerSpawn",
            _0: a
          }));
        case "PlayerUpdate":
          return Stdlib_Option.map(Packet_PlayerUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerUpdate",
            _0: a
          }));
        case "PlayerActive":
          if (fromServer) {
            return Stdlib_Option.map(Packet_PlayerActive$TerrariaPacket.parse(payload), (a) => ({
              TAG: "PlayerActive",
              _0: a
            }));
          } else {
            return;
          }
        case "PlayerHealth":
          return Stdlib_Option.map(Packet_PlayerHealth$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerHealth",
            _0: a
          }));
        case "TileModify":
          return Stdlib_Option.map(Packet_TileModify$TerrariaPacket.parse(payload), (a) => ({
            TAG: "TileModify",
            _0: a
          }));
        case "TimeSet":
          if (fromServer) {
            return Stdlib_Option.map(Packet_TimeSet$TerrariaPacket.parse(payload), (a) => ({
              TAG: "TimeSet",
              _0: a
            }));
          } else {
            return;
          }
        case "DoorUse":
          return Stdlib_Option.map(Packet_DoorUse$TerrariaPacket.parse(payload), (a) => ({
            TAG: "DoorUse",
            _0: a
          }));
        case "TileSquareSend":
          return Stdlib_Option.map(Packet_TileSquareSend$TerrariaPacket.parse(payload), (a) => ({
            TAG: "TileSquareSend",
            _0: a
          }));
        case "ItemDropUpdate":
          return Stdlib_Option.map(Packet_ItemDropUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ItemDropUpdate",
            _0: a
          }));
        case "ItemOwner":
          return Stdlib_Option.map(Packet_ItemOwner$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ItemOwner",
            _0: a
          }));
        case "NpcUpdate":
          if (fromServer) {
            return Stdlib_Option.map(Packet_NpcUpdate$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcUpdate",
              _0: a
            }));
          } else {
            return;
          }
        case "NpcItemStrike":
          return Stdlib_Option.map(Packet_NpcItemStrike$TerrariaPacket.parse(payload), (a) => ({
            TAG: "NpcItemStrike",
            _0: a
          }));
        case "ProjectileSync":
          return Stdlib_Option.map(Packet_ProjectileSync$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ProjectileSync",
            _0: a
          }));
        case "NpcStrike":
          return Stdlib_Option.map(Packet_NpcStrike$TerrariaPacket.parse(payload), (a) => ({
            TAG: "NpcStrike",
            _0: a
          }));
        case "ProjectileDestroy":
          return Stdlib_Option.map(Packet_ProjectileDestroy$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ProjectileDestroy",
            _0: a
          }));
        case "PvpToggle":
          return Stdlib_Option.map(Packet_PvpToggle$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PvpToggle",
            _0: a
          }));
        case "ChestOpen":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_ChestOpen$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ChestOpen",
              _0: a
            }));
          }
        case "ChestItem":
          return Stdlib_Option.map(Packet_ChestItem$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ChestItem",
            _0: a
          }));
        case "ActiveContainerSync":
          return Stdlib_Option.map(Packet_ActiveContainerSync$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ActiveContainerSync",
            _0: a
          }));
        case "ChestPlace":
          return Stdlib_Option.map(Packet_ChestPlace$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ChestPlace",
            _0: a
          }));
        case "HealEffect":
          return Stdlib_Option.map(Packet_HealEffect$TerrariaPacket.parse(payload), (a) => ({
            TAG: "HealEffect",
            _0: a
          }));
        case "Zones":
          return Stdlib_Option.map(Packet_Zones$TerrariaPacket.parse(payload), (a) => ({
            TAG: "Zones",
            _0: a
          }));
        case "PasswordRequired":
          if (fromServer) {
            return Stdlib_Option.map(Packet_PasswordRequired$TerrariaPacket.parse(payload), (a) => ({
              TAG: "PasswordRequired",
              _0: a
            }));
          } else {
            return;
          }
        case "PasswordSend":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_PasswordSend$TerrariaPacket.parse(payload), (a) => ({
              TAG: "PasswordSend",
              _0: a
            }));
          }
        case "ItemOwnerRemove":
          if (fromServer) {
            return Stdlib_Option.map(Packet_ItemOwnerRemove$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ItemOwnerRemove",
              _0: a
            }));
          } else {
            return;
          }
        case "NpcTalk":
          return Stdlib_Option.map(Packet_NpcTalk$TerrariaPacket.parse(payload), (a) => ({
            TAG: "NpcTalk",
            _0: a
          }));
        case "PlayerAnimation":
          return Stdlib_Option.map(Packet_PlayerAnimation$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerAnimation",
            _0: a
          }));
        case "PlayerMana":
          return Stdlib_Option.map(Packet_PlayerMana$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerMana",
            _0: a
          }));
        case "ManaEffect":
          return Stdlib_Option.map(Packet_ManaEffect$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ManaEffect",
            _0: a
          }));
        case "PlayerTeam":
          return Stdlib_Option.map(Packet_PlayerTeam$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerTeam",
            _0: a
          }));
        case "SignRead":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_SignRead$TerrariaPacket.parse(payload), (a) => ({
              TAG: "SignRead",
              _0: a
            }));
          }
        case "SignNew":
          return Stdlib_Option.map(Packet_SignNew$TerrariaPacket.parse(payload), (a) => ({
            TAG: "SignNew",
            _0: a
          }));
        case "LiquidSet":
          return Stdlib_Option.map(Packet_LiquidSet$TerrariaPacket.parse(payload), (a) => ({
            TAG: "LiquidSet",
            _0: a
          }));
        case "PlayerSpawnSelf":
          if (fromServer) {
            return Stdlib_Option.map(Packet_PlayerSpawnSelf$TerrariaPacket.parse(payload), (a) => ({
              TAG: "PlayerSpawnSelf",
              _0: a
            }));
          } else {
            return;
          }
        case "PlayerBuffsSet":
          return Stdlib_Option.map(Packet_PlayerBuffsSet$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerBuffsSet",
            _0: a
          }));
        case "NpcSpecialEffect":
          return Stdlib_Option.map(Packet_NpcSpecialEffect$TerrariaPacket.parse(payload), (a) => ({
            TAG: "NpcSpecialEffect",
            _0: a
          }));
        case "ChestOrTempleUnlock":
          return Stdlib_Option.map(Packet_ChestOrTempleUnlock$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ChestOrTempleUnlock",
            _0: a
          }));
        case "NpcBuffAdd":
          return Stdlib_Option.map(Packet_NpcBuffAdd$TerrariaPacket.parse(payload), (a) => ({
            TAG: "NpcBuffAdd",
            _0: a
          }));
        case "NpcBuffUpdate":
          if (fromServer) {
            return Stdlib_Option.map(Packet_NpcBuffUpdate$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcBuffUpdate",
              _0: a
            }));
          } else {
            return;
          }
        case "PlayerBuffAdd":
          return Stdlib_Option.map(Packet_PlayerBuffAdd$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerBuffAdd",
            _0: a
          }));
        case "NpcNameUpdate":
          return Stdlib_Option.map(Packet_NpcNameUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "NpcNameUpdate",
            _0: a
          }));
        case "GoodEvilUpdate":
          if (fromServer) {
            return Stdlib_Option.map(Packet_GoodEvilUpdate$TerrariaPacket.parse(payload), (a) => ({
              TAG: "GoodEvilUpdate",
              _0: a
            }));
          } else {
            return;
          }
        case "HarpPlay":
          return Stdlib_Option.map(Packet_HarpPlay$TerrariaPacket.parse(payload), (a) => ({
            TAG: "HarpPlay",
            _0: a
          }));
        case "SwitchHit":
          return Stdlib_Option.map(Packet_SwitchHit$TerrariaPacket.parse(payload), (a) => ({
            TAG: "SwitchHit",
            _0: a
          }));
        case "NpcHomeUpdate":
          return Stdlib_Option.map(Packet_NpcHomeUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "NpcHomeUpdate",
            _0: a
          }));
        case "BossOrInvasionSpawn":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_BossOrInvasionSpawn$TerrariaPacket.parse(payload), (a) => ({
              TAG: "BossOrInvasionSpawn",
              _0: a
            }));
          }
        case "PlayerDodge":
          return Stdlib_Option.map(Packet_PlayerDodge$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerDodge",
            _0: a
          }));
        case "TilePaint":
          return Stdlib_Option.map(Packet_TilePaint$TerrariaPacket.parse(payload), (a) => ({
            TAG: "TilePaint",
            _0: a
          }));
        case "WallPaint":
          return Stdlib_Option.map(Packet_WallPaint$TerrariaPacket.parse(payload), (a) => ({
            TAG: "WallPaint",
            _0: a
          }));
        case "Teleport":
          return Stdlib_Option.map(Packet_Teleport$TerrariaPacket.parse(payload), (a) => ({
            TAG: "Teleport",
            _0: a
          }));
        case "PlayerHealOther":
          return Stdlib_Option.map(Packet_PlayerHealOther$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerHealOther",
            _0: a
          }));
        case "DimensionsUpdate":
          return Stdlib_Option.map(Packet_DimensionsUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "DimensionsUpdate",
            _0: a
          }));
        case "ClientUuid":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_ClientUuid$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ClientUuid",
              _0: a
            }));
          }
        case "ChestName":
          return Stdlib_Option.map(Packet_ChestName$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ChestName",
            _0: a
          }));
        case "NpcCatch":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_NpcCatch$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcCatch",
              _0: a
            }));
          }
        case "NpcRelease":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_NpcRelease$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcRelease",
              _0: a
            }));
          }
        case "TravellingMerchantInventory":
          if (fromServer) {
            return Stdlib_Option.map(Packet_TravellingMerchantInventory$TerrariaPacket.parse(payload), (a) => ({
              TAG: "TravellingMerchantInventory",
              _0: a
            }));
          } else {
            return;
          }
        case "TeleportationPotion":
          return Stdlib_Option.map(Packet_TeleportationPotion$TerrariaPacket.parse(payload), (a) => ({
            TAG: "TeleportationPotion",
            _0: a
          }));
        case "AnglerQuest":
          if (fromServer) {
            return Stdlib_Option.map(Packet_AnglerQuest$TerrariaPacket.parse(payload), (a) => ({
              TAG: "AnglerQuest",
              _0: a
            }));
          } else {
            return;
          }
        case "AnglerQuestComplete":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_AnglerQuestComplete$TerrariaPacket.parse(payload), (a) => ({
              TAG: "AnglerQuestComplete",
              _0: a
            }));
          }
        case "AnglerQuestsCompletedAmount":
          return Stdlib_Option.map(Packet_AnglerQuestsCompletedAmount$TerrariaPacket.parse(payload), (a) => ({
            TAG: "AnglerQuestsCompletedAmount",
            _0: a
          }));
        case "TemporaryAnimationCreate":
          if (fromServer) {
            return Stdlib_Option.map(Packet_TemporaryAnimationCreate$TerrariaPacket.parse(payload), (a) => ({
              TAG: "TemporaryAnimationCreate",
              _0: a
            }));
          } else {
            return;
          }
        case "InvasionProgressReport":
          if (fromServer) {
            return Stdlib_Option.map(Packet_InvasionProgressReport$TerrariaPacket.parse(payload), (a) => ({
              TAG: "InvasionProgressReport",
              _0: a
            }));
          } else {
            return;
          }
        case "ObjectPlace":
          return Stdlib_Option.map(Packet_ObjectPlace$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ObjectPlace",
            _0: a
          }));
        case "PlayerChestIndexSync":
          if (fromServer) {
            return Stdlib_Option.map(Packet_PlayerChestIndexSync$TerrariaPacket.parse(payload), (a) => ({
              TAG: "PlayerChestIndexSync",
              _0: a
            }));
          } else {
            return;
          }
        case "CombatNumberCreate":
          if (fromServer) {
            return Stdlib_Option.map(Packet_CombatNumberCreate$TerrariaPacket.parse(payload), (a) => ({
              TAG: "CombatNumberCreate",
              _0: a
            }));
          } else {
            return;
          }
        case "NetModuleLoad":
          return Stdlib_Option.map(Packet_NetModuleLoad$TerrariaPacket.parse(payload, fromServer), (a) => ({
            TAG: "NetModuleLoad",
            _0: a
          }));
        case "NpcKillCount":
          if (fromServer) {
            return Stdlib_Option.map(Packet_NpcKillCount$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcKillCount",
              _0: a
            }));
          } else {
            return;
          }
        case "PlayerStealth":
          return Stdlib_Option.map(Packet_PlayerStealth$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerStealth",
            _0: a
          }));
        case "ItemForceIntoNearestChest":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_ItemForceIntoNearestChest$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ItemForceIntoNearestChest",
              _0: a
            }));
          }
        case "TileEntityUpdate":
          if (fromServer) {
            return Stdlib_Option.map(Packet_TileEntityUpdate$TerrariaPacket.parse(payload), (a) => ({
              TAG: "TileEntityUpdate",
              _0: a
            }));
          } else {
            return;
          }
        case "TileEntityPlace":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_TileEntityPlace$TerrariaPacket.parse(payload), (a) => ({
              TAG: "TileEntityPlace",
              _0: a
            }));
          }
        case "ItemDropModify":
          if (fromServer) {
            return Stdlib_Option.map(Packet_ItemDropModify$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ItemDropModify",
              _0: a
            }));
          } else {
            return;
          }
        case "ItemFramePlace":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_ItemFramePlace$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ItemFramePlace",
              _0: a
            }));
          }
        case "ItemDropInstancedUpdate":
          return Stdlib_Option.map(Packet_ItemDropInstancedUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ItemDropInstancedUpdate",
            _0: a
          }));
        case "EmoteBubble":
          if (fromServer) {
            return Stdlib_Option.map(Packet_EmoteBubble$TerrariaPacket.parse(payload), (a) => ({
              TAG: "EmoteBubble",
              _0: a
            }));
          } else {
            return;
          }
        case "ExtraValueSync":
          return Stdlib_Option.map(Packet_ExtraValueSync$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ExtraValueSync",
            _0: a
          }));
        case "SocialHandshake":
          return Stdlib_Option.map(Packet_SocialHandshake$TerrariaPacket.parse(payload), (a) => ({
            TAG: "SocialHandshake",
            _0: a
          }));
        case "Unused":
          return Stdlib_Option.map(Packet_Unused$TerrariaPacket.parse(payload), (a) => ({
            TAG: "Unused",
            _0: a
          }));
        case "PortalKill":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_PortalKill$TerrariaPacket.parse(payload), (a) => ({
              TAG: "PortalKill",
              _0: a
            }));
          }
        case "PlayerTeleportPortal":
          return Stdlib_Option.map(Packet_PlayerTeleportPortal$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerTeleportPortal",
            _0: a
          }));
        case "NpcKilledNotification":
          if (fromServer) {
            return Stdlib_Option.map(Packet_NpcKilledNotification$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcKilledNotification",
              _0: a
            }));
          } else {
            return;
          }
        case "EventNotification":
          if (fromServer) {
            return Stdlib_Option.map(Packet_EventNotification$TerrariaPacket.parse(payload), (a) => ({
              TAG: "EventNotification",
              _0: a
            }));
          } else {
            return;
          }
        case "MinionTargetUpdate":
          return Stdlib_Option.map(Packet_MinionTargetUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "MinionTargetUpdate",
            _0: a
          }));
        case "NpcTeleportPortal":
          return Stdlib_Option.map(Packet_NpcTeleportPortal$TerrariaPacket.parse(payload), (a) => ({
            TAG: "NpcTeleportPortal",
            _0: a
          }));
        case "ShieldStrengthsUpdate":
          if (fromServer) {
            return Stdlib_Option.map(Packet_ShieldStrengthsUpdate$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ShieldStrengthsUpdate",
              _0: a
            }));
          } else {
            return;
          }
        case "NebulaLevelUp":
          return Stdlib_Option.map(Packet_NebulaLevelUp$TerrariaPacket.parse(payload), (a) => ({
            TAG: "NebulaLevelUp",
            _0: a
          }));
        case "MoonLordCountdown":
          if (fromServer) {
            return Stdlib_Option.map(Packet_MoonLordCountdown$TerrariaPacket.parse(payload), (a) => ({
              TAG: "MoonLordCountdown",
              _0: a
            }));
          } else {
            return;
          }
        case "NpcShopItem":
          if (fromServer) {
            return Stdlib_Option.map(Packet_NpcShopItem$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcShopItem",
              _0: a
            }));
          } else {
            return;
          }
        case "GemLockToggle":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_GemLockToggle$TerrariaPacket.parse(payload), (a) => ({
              TAG: "GemLockToggle",
              _0: a
            }));
          }
        case "SmokePoof":
          if (fromServer) {
            return Stdlib_Option.map(Packet_SmokePoof$TerrariaPacket.parse(payload), (a) => ({
              TAG: "SmokePoof",
              _0: a
            }));
          } else {
            return;
          }
        case "ChatMessageSmart":
          if (fromServer) {
            return Stdlib_Option.map(Packet_ChatMessageSmart$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ChatMessageSmart",
              _0: a
            }));
          } else {
            return;
          }
        case "WiredCannonShot":
          if (fromServer) {
            return Stdlib_Option.map(Packet_WiredCannonShot$TerrariaPacket.parse(payload), (a) => ({
              TAG: "WiredCannonShot",
              _0: a
            }));
          } else {
            return;
          }
        case "MassWireOperation":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_MassWireOperation$TerrariaPacket.parse(payload), (a) => ({
              TAG: "MassWireOperation",
              _0: a
            }));
          }
        case "MassWireOperationPay":
          if (fromServer) {
            return Stdlib_Option.map(Packet_MassWireOperationPay$TerrariaPacket.parse(payload), (a) => ({
              TAG: "MassWireOperationPay",
              _0: a
            }));
          } else {
            return;
          }
        case "PartyToggle":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_PartyToggle$TerrariaPacket.parse(payload), (a) => ({
              TAG: "PartyToggle",
              _0: a
            }));
          }
        case "TreeGrowFx":
          return Stdlib_Option.map(Packet_TreeGrowFx$TerrariaPacket.parse(payload), (a) => ({
            TAG: "TreeGrowFx",
            _0: a
          }));
        case "CrystalInvasionStart":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_CrystalInvasionStart$TerrariaPacket.parse(payload), (a) => ({
              TAG: "CrystalInvasionStart",
              _0: a
            }));
          }
        case "CrystalInvasionWipeAll":
          if (fromServer) {
            return Stdlib_Option.map(Packet_CrystalInvasionWipeAll$TerrariaPacket.parse(payload), (a) => ({
              TAG: "CrystalInvasionWipeAll",
              _0: a
            }));
          } else {
            return;
          }
        case "MinionAttackTargetUpdate":
          return Stdlib_Option.map(Packet_MinionAttackTargetUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "MinionAttackTargetUpdate",
            _0: a
          }));
        case "CrystalInvasionSendWaitTime":
          if (fromServer) {
            return Stdlib_Option.map(Packet_CrystalInvasionSendWaitTime$TerrariaPacket.parse(payload), (a) => ({
              TAG: "CrystalInvasionSendWaitTime",
              _0: a
            }));
          } else {
            return;
          }
        case "PlayerDamage":
          return Stdlib_Option.map(Packet_PlayerDamage$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerDamage",
            _0: a
          }));
        case "PlayerDeath":
          return Stdlib_Option.map(Packet_PlayerDeath$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerDeath",
            _0: a
          }));
        case "CombatTextCreate":
          if (fromServer) {
            return Stdlib_Option.map(Packet_CombatTextCreate$TerrariaPacket.parse(payload), (a) => ({
              TAG: "CombatTextCreate",
              _0: a
            }));
          } else {
            return;
          }
        case "Emoji":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_Emoji$TerrariaPacket.parse(payload), (a) => ({
              TAG: "Emoji",
              _0: a
            }));
          }
        case "TileEntityDisplayDollItemSync":
          return Stdlib_Option.map(Packet_TileEntityDisplayDollItemSync$TerrariaPacket.parse(payload), (a) => ({
            TAG: "TileEntityDisplayDollItemSync",
            _0: a
          }));
        case "TileEntityInteractionRequest":
          return Stdlib_Option.map(Packet_TileEntityInteractionRequest$TerrariaPacket.parse(payload), (a) => ({
            TAG: "TileEntityInteractionRequest",
            _0: a
          }));
        case "WeaponsRackTryPlacing":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_WeaponsRackTryPlacing$TerrariaPacket.parse(payload), (a) => ({
              TAG: "WeaponsRackTryPlacing",
              _0: a
            }));
          }
        case "TileEntityHatRackItemSync":
          return Stdlib_Option.map(Packet_TileEntityHatRackItemSync$TerrariaPacket.parse(payload), (a) => ({
            TAG: "TileEntityHatRackItemSync",
            _0: a
          }));
        case "TilePickingSync":
          return Stdlib_Option.map(Packet_TilePickingSync$TerrariaPacket.parse(payload), (a) => ({
            TAG: "TilePickingSync",
            _0: a
          }));
        case "RevengeMarkerSync":
          if (fromServer) {
            return Stdlib_Option.map(Packet_RevengeMarkerSync$TerrariaPacket.parse(payload), (a) => ({
              TAG: "RevengeMarkerSync",
              _0: a
            }));
          } else {
            return;
          }
        case "RevengeMarkerRemove":
          if (fromServer) {
            return Stdlib_Option.map(Packet_RevengeMarkerRemove$TerrariaPacket.parse(payload), (a) => ({
              TAG: "RevengeMarkerRemove",
              _0: a
            }));
          } else {
            return;
          }
        case "GolfBallLandInCup":
          return Stdlib_Option.map(Packet_GolfBallLandInCup$TerrariaPacket.parse(payload), (a) => ({
            TAG: "GolfBallLandInCup",
            _0: a
          }));
        case "ClientFinishConnectingToServer":
          if (fromServer) {
            return Stdlib_Option.map(Packet_ClientFinishConnectingToServer$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ClientFinishConnectingToServer",
              _0: a
            }));
          } else {
            return;
          }
        case "NpcFishOut":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_NpcFishOut$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcFishOut",
              _0: a
            }));
          }
        case "NpcTamper":
          if (fromServer) {
            return Stdlib_Option.map(Packet_NpcTamper$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcTamper",
              _0: a
            }));
          } else {
            return;
          }
        case "LegacySoundPlay":
          if (fromServer) {
            return Stdlib_Option.map(Packet_LegacySoundPlay$TerrariaPacket.parse(payload), (a) => ({
              TAG: "LegacySoundPlay",
              _0: a
            }));
          } else {
            return;
          }
        case "FoodPlatterTryPlacing":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_FoodPlatterTryPlacing$TerrariaPacket.parse(payload), (a) => ({
              TAG: "FoodPlatterTryPlacing",
              _0: a
            }));
          }
        case "PlayerLuckFactorsUpdate":
          return Stdlib_Option.map(Packet_PlayerLuckFactorsUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PlayerLuckFactorsUpdate",
            _0: a
          }));
        case "PlayerDead":
          if (fromServer) {
            return Stdlib_Option.map(Packet_PlayerDead$TerrariaPacket.parse(payload), (a) => ({
              TAG: "PlayerDead",
              _0: a
            }));
          } else {
            return;
          }
        case "CavernMonsterTypeSync":
          return Stdlib_Option.map(Packet_CavernMonsterTypeSync$TerrariaPacket.parse(payload), (a) => ({
            TAG: "CavernMonsterTypeSync",
            _0: a
          }));
        case "NpcBuffRemovalRequest":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_NpcBuffRemovalRequest$TerrariaPacket.parse(payload), (a) => ({
              TAG: "NpcBuffRemovalRequest",
              _0: a
            }));
          }
        case "ClientSyncedInventory":
          if (fromServer) {
            return;
          } else {
            return Stdlib_Option.map(Packet_ClientSyncedInventory$TerrariaPacket.parse(payload), (a) => ({
              TAG: "ClientSyncedInventory",
              _0: a
            }));
          }
        case "CountsAsHostForGameplaySet":
          return Stdlib_Option.map(Packet_CountsAsHostForGameplaySet$TerrariaPacket.parse(payload), (a) => ({
            TAG: "CountsAsHostForGameplaySet",
            _0: a
          }));
        case "CreditsOrSlimeTransform":
          return Stdlib_Option.map(Packet_CreditsOrSlimeTransform$TerrariaPacket.parse(payload), (a) => ({
            TAG: "CreditsOrSlimeTransform",
            _0: a
          }));
        case "LucyAxeMessage":
          return Stdlib_Option.map(Packet_LucyAxeMessage$TerrariaPacket.parse(payload), (a) => ({
            TAG: "LucyAxeMessage",
            _0: a
          }));
        case "PiggyBankVoidLensUpdate":
          return Stdlib_Option.map(Packet_PiggyBankVoidLensUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "PiggyBankVoidLensUpdate",
            _0: a
          }));
        case "DungeonDefendersEventAttemptSkipWait":
          return Stdlib_Option.map(Packet_DungeonDefendersEventAttemptSkipWait$TerrariaPacket.parse(payload), (a) => ({
            TAG: "DungeonDefendersEventAttemptSkipWait",
            _0: a
          }));
        case "HaveDryadDoStardewAnimation":
          return Stdlib_Option.map(Packet_HaveDryadDoStardewAnimation$TerrariaPacket.parse(payload), (a) => ({
            TAG: "HaveDryadDoStardewAnimation",
            _0: a
          }));
        case "ItemDropShimmeredUpdate":
          return Stdlib_Option.map(Packet_ItemDropShimmeredUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ItemDropShimmeredUpdate",
            _0: a
          }));
        case "ShimmerEffectOrCoinLuck":
          return Stdlib_Option.map(Packet_ShimmerEffectOrCoinLuck$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ShimmerEffectOrCoinLuck",
            _0: a
          }));
        case "LoadoutSwitch":
          return Stdlib_Option.map(Packet_LoadoutSwitch$TerrariaPacket.parse(payload), (a) => ({
            TAG: "LoadoutSwitch",
            _0: a
          }));
        case "ItemDropProtectedUpdate":
          return Stdlib_Option.map(Packet_ItemDropProtectedUpdate$TerrariaPacket.parse(payload), (a) => ({
            TAG: "ItemDropProtectedUpdate",
            _0: a
          }));
      }
    }
    function parse(buffer, fromServer) {
      let match = buffer.length;
      if (!(match > 2 || match < 0)) {
        return;
      }
      let packetType = PacketType$TerrariaPacket.fromInt(buffer[2]);
      if (packetType === void 0) {
        return;
      }
      try {
        return Stdlib_Option.map(parsePayload(packetType, buffer, fromServer), (packet) => ({
          TAG: "SerializeNotNecessary",
          _0: packet,
          _1: buffer
        }));
      } catch (_e) {
        return;
      }
    }
    function parseLazy(buffer, fromServer) {
      let match = buffer.length;
      if (!(match > 2 || match < 0)) {
        return;
      }
      let packetType = PacketType$TerrariaPacket.fromInt(buffer[2]);
      if (packetType === void 0) {
        return;
      }
      try {
        switch (packetType) {
          case "ConnectRequest":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "ConnectRequest",
                _0: Stdlib_Lazy.make(() => Packet_ConnectRequest$TerrariaPacket.parse(buffer))
              };
            }
          case "Disconnect":
            if (fromServer) {
              return {
                TAG: "Disconnect",
                _0: Stdlib_Lazy.make(() => Packet_Disconnect$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PlayerSlotSet":
            if (fromServer) {
              return {
                TAG: "PlayerSlotSet",
                _0: Stdlib_Lazy.make(() => Packet_PlayerSlotSet$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PlayerInfo":
            return {
              TAG: "PlayerInfo",
              _0: Stdlib_Lazy.make(() => Packet_PlayerInfo$TerrariaPacket.parse(buffer))
            };
          case "PlayerInventorySlot":
            return {
              TAG: "PlayerInventorySlot",
              _0: Stdlib_Lazy.make(() => Packet_PlayerInventorySlot$TerrariaPacket.parse(buffer))
            };
          case "WorldDataRequest":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "WorldDataRequest",
                _0: Stdlib_Lazy.make(() => Packet_WorldDataRequest$TerrariaPacket.parse(buffer))
              };
            }
          case "WorldInfo":
            if (fromServer) {
              return {
                TAG: "WorldInfo",
                _0: Stdlib_Lazy.make(() => Packet_WorldInfo$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "InitialTileSectionsRequest":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "InitialTileSectionsRequest",
                _0: Stdlib_Lazy.make(() => Packet_InitialTileSectionsRequest$TerrariaPacket.parse(buffer))
              };
            }
          case "Status":
            if (fromServer) {
              return {
                TAG: "Status",
                _0: Stdlib_Lazy.make(() => Packet_Status$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "TileSectionSend":
            if (fromServer) {
              return {
                TAG: "TileSectionSend",
                _0: Stdlib_Lazy.make(() => Packet_TileSectionSend$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "TileSectionFrame":
            if (fromServer) {
              return {
                TAG: "TileSectionFrame",
                _0: Stdlib_Lazy.make(() => Packet_TileSectionFrame$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PlayerSpawn":
            return {
              TAG: "PlayerSpawn",
              _0: Stdlib_Lazy.make(() => Packet_PlayerSpawn$TerrariaPacket.parse(buffer))
            };
          case "PlayerUpdate":
            return {
              TAG: "PlayerUpdate",
              _0: Stdlib_Lazy.make(() => Packet_PlayerUpdate$TerrariaPacket.parse(buffer))
            };
          case "PlayerActive":
            if (fromServer) {
              return {
                TAG: "PlayerActive",
                _0: Stdlib_Lazy.make(() => Packet_PlayerActive$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PlayerHealth":
            return {
              TAG: "PlayerHealth",
              _0: Stdlib_Lazy.make(() => Packet_PlayerHealth$TerrariaPacket.parse(buffer))
            };
          case "TileModify":
            return {
              TAG: "TileModify",
              _0: Stdlib_Lazy.make(() => Packet_TileModify$TerrariaPacket.parse(buffer))
            };
          case "TimeSet":
            if (fromServer) {
              return {
                TAG: "TimeSet",
                _0: Stdlib_Lazy.make(() => Packet_TimeSet$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "DoorUse":
            return {
              TAG: "DoorUse",
              _0: Stdlib_Lazy.make(() => Packet_DoorUse$TerrariaPacket.parse(buffer))
            };
          case "TileSquareSend":
            return {
              TAG: "TileSquareSend",
              _0: Stdlib_Lazy.make(() => Packet_TileSquareSend$TerrariaPacket.parse(buffer))
            };
          case "ItemDropUpdate":
            return {
              TAG: "ItemDropUpdate",
              _0: Stdlib_Lazy.make(() => Packet_ItemDropUpdate$TerrariaPacket.parse(buffer))
            };
          case "ItemOwner":
            return {
              TAG: "ItemOwner",
              _0: Stdlib_Lazy.make(() => Packet_ItemOwner$TerrariaPacket.parse(buffer))
            };
          case "NpcUpdate":
            if (fromServer) {
              return {
                TAG: "NpcUpdate",
                _0: Stdlib_Lazy.make(() => Packet_NpcUpdate$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "NpcItemStrike":
            return {
              TAG: "NpcItemStrike",
              _0: Stdlib_Lazy.make(() => Packet_NpcItemStrike$TerrariaPacket.parse(buffer))
            };
          case "ProjectileSync":
            return {
              TAG: "ProjectileSync",
              _0: Stdlib_Lazy.make(() => Packet_ProjectileSync$TerrariaPacket.parse(buffer))
            };
          case "NpcStrike":
            return {
              TAG: "NpcStrike",
              _0: Stdlib_Lazy.make(() => Packet_NpcStrike$TerrariaPacket.parse(buffer))
            };
          case "ProjectileDestroy":
            return {
              TAG: "ProjectileDestroy",
              _0: Stdlib_Lazy.make(() => Packet_ProjectileDestroy$TerrariaPacket.parse(buffer))
            };
          case "PvpToggle":
            return {
              TAG: "PvpToggle",
              _0: Stdlib_Lazy.make(() => Packet_PvpToggle$TerrariaPacket.parse(buffer))
            };
          case "ChestOpen":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "ChestOpen",
                _0: Stdlib_Lazy.make(() => Packet_ChestOpen$TerrariaPacket.parse(buffer))
              };
            }
          case "ChestItem":
            return {
              TAG: "ChestItem",
              _0: Stdlib_Lazy.make(() => Packet_ChestItem$TerrariaPacket.parse(buffer))
            };
          case "ActiveContainerSync":
            return {
              TAG: "ActiveContainerSync",
              _0: Stdlib_Lazy.make(() => Packet_ActiveContainerSync$TerrariaPacket.parse(buffer))
            };
          case "ChestPlace":
            return {
              TAG: "ChestPlace",
              _0: Stdlib_Lazy.make(() => Packet_ChestPlace$TerrariaPacket.parse(buffer))
            };
          case "HealEffect":
            return {
              TAG: "HealEffect",
              _0: Stdlib_Lazy.make(() => Packet_HealEffect$TerrariaPacket.parse(buffer))
            };
          case "Zones":
            return {
              TAG: "Zones",
              _0: Stdlib_Lazy.make(() => Packet_Zones$TerrariaPacket.parse(buffer))
            };
          case "PasswordRequired":
            if (fromServer) {
              return {
                TAG: "PasswordRequired",
                _0: Stdlib_Lazy.make(() => Packet_PasswordRequired$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PasswordSend":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "PasswordSend",
                _0: Stdlib_Lazy.make(() => Packet_PasswordSend$TerrariaPacket.parse(buffer))
              };
            }
          case "ItemOwnerRemove":
            if (fromServer) {
              return {
                TAG: "ItemOwnerRemove",
                _0: Stdlib_Lazy.make(() => Packet_ItemOwnerRemove$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "NpcTalk":
            return {
              TAG: "NpcTalk",
              _0: Stdlib_Lazy.make(() => Packet_NpcTalk$TerrariaPacket.parse(buffer))
            };
          case "PlayerAnimation":
            return {
              TAG: "PlayerAnimation",
              _0: Stdlib_Lazy.make(() => Packet_PlayerAnimation$TerrariaPacket.parse(buffer))
            };
          case "PlayerMana":
            return {
              TAG: "PlayerMana",
              _0: Stdlib_Lazy.make(() => Packet_PlayerMana$TerrariaPacket.parse(buffer))
            };
          case "ManaEffect":
            return {
              TAG: "ManaEffect",
              _0: Stdlib_Lazy.make(() => Packet_ManaEffect$TerrariaPacket.parse(buffer))
            };
          case "PlayerTeam":
            return {
              TAG: "PlayerTeam",
              _0: Stdlib_Lazy.make(() => Packet_PlayerTeam$TerrariaPacket.parse(buffer))
            };
          case "SignRead":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "SignRead",
                _0: Stdlib_Lazy.make(() => Packet_SignRead$TerrariaPacket.parse(buffer))
              };
            }
          case "SignNew":
            return {
              TAG: "SignNew",
              _0: Stdlib_Lazy.make(() => Packet_SignNew$TerrariaPacket.parse(buffer))
            };
          case "LiquidSet":
            return {
              TAG: "LiquidSet",
              _0: Stdlib_Lazy.make(() => Packet_LiquidSet$TerrariaPacket.parse(buffer))
            };
          case "PlayerSpawnSelf":
            if (fromServer) {
              return {
                TAG: "PlayerSpawnSelf",
                _0: Stdlib_Lazy.make(() => Packet_PlayerSpawnSelf$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PlayerBuffsSet":
            return {
              TAG: "PlayerBuffsSet",
              _0: Stdlib_Lazy.make(() => Packet_PlayerBuffsSet$TerrariaPacket.parse(buffer))
            };
          case "NpcSpecialEffect":
            return {
              TAG: "NpcSpecialEffect",
              _0: Stdlib_Lazy.make(() => Packet_NpcSpecialEffect$TerrariaPacket.parse(buffer))
            };
          case "ChestOrTempleUnlock":
            return {
              TAG: "ChestOrTempleUnlock",
              _0: Stdlib_Lazy.make(() => Packet_ChestOrTempleUnlock$TerrariaPacket.parse(buffer))
            };
          case "NpcBuffAdd":
            return {
              TAG: "NpcBuffAdd",
              _0: Stdlib_Lazy.make(() => Packet_NpcBuffAdd$TerrariaPacket.parse(buffer))
            };
          case "NpcBuffUpdate":
            if (fromServer) {
              return {
                TAG: "NpcBuffUpdate",
                _0: Stdlib_Lazy.make(() => Packet_NpcBuffUpdate$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PlayerBuffAdd":
            return {
              TAG: "PlayerBuffAdd",
              _0: Stdlib_Lazy.make(() => Packet_PlayerBuffAdd$TerrariaPacket.parse(buffer))
            };
          case "NpcNameUpdate":
            return {
              TAG: "NpcNameUpdate",
              _0: Stdlib_Lazy.make(() => Packet_NpcNameUpdate$TerrariaPacket.parse(buffer))
            };
          case "GoodEvilUpdate":
            if (fromServer) {
              return {
                TAG: "GoodEvilUpdate",
                _0: Stdlib_Lazy.make(() => Packet_GoodEvilUpdate$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "HarpPlay":
            return {
              TAG: "HarpPlay",
              _0: Stdlib_Lazy.make(() => Packet_HarpPlay$TerrariaPacket.parse(buffer))
            };
          case "SwitchHit":
            return {
              TAG: "SwitchHit",
              _0: Stdlib_Lazy.make(() => Packet_SwitchHit$TerrariaPacket.parse(buffer))
            };
          case "NpcHomeUpdate":
            return {
              TAG: "NpcHomeUpdate",
              _0: Stdlib_Lazy.make(() => Packet_NpcHomeUpdate$TerrariaPacket.parse(buffer))
            };
          case "BossOrInvasionSpawn":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "BossOrInvasionSpawn",
                _0: Stdlib_Lazy.make(() => Packet_BossOrInvasionSpawn$TerrariaPacket.parse(buffer))
              };
            }
          case "PlayerDodge":
            return {
              TAG: "PlayerDodge",
              _0: Stdlib_Lazy.make(() => Packet_PlayerDodge$TerrariaPacket.parse(buffer))
            };
          case "TilePaint":
            return {
              TAG: "TilePaint",
              _0: Stdlib_Lazy.make(() => Packet_TilePaint$TerrariaPacket.parse(buffer))
            };
          case "WallPaint":
            return {
              TAG: "WallPaint",
              _0: Stdlib_Lazy.make(() => Packet_WallPaint$TerrariaPacket.parse(buffer))
            };
          case "Teleport":
            return {
              TAG: "Teleport",
              _0: Stdlib_Lazy.make(() => Packet_Teleport$TerrariaPacket.parse(buffer))
            };
          case "PlayerHealOther":
            return {
              TAG: "PlayerHealOther",
              _0: Stdlib_Lazy.make(() => Packet_PlayerHealOther$TerrariaPacket.parse(buffer))
            };
          case "DimensionsUpdate":
            return {
              TAG: "DimensionsUpdate",
              _0: Stdlib_Lazy.make(() => Packet_DimensionsUpdate$TerrariaPacket.parse(buffer))
            };
          case "ClientUuid":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "ClientUuid",
                _0: Stdlib_Lazy.make(() => Packet_ClientUuid$TerrariaPacket.parse(buffer))
              };
            }
          case "ChestName":
            return {
              TAG: "ChestName",
              _0: Stdlib_Lazy.make(() => Packet_ChestName$TerrariaPacket.parse(buffer))
            };
          case "NpcCatch":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "NpcCatch",
                _0: Stdlib_Lazy.make(() => Packet_NpcCatch$TerrariaPacket.parse(buffer))
              };
            }
          case "NpcRelease":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "NpcRelease",
                _0: Stdlib_Lazy.make(() => Packet_NpcRelease$TerrariaPacket.parse(buffer))
              };
            }
          case "TravellingMerchantInventory":
            if (fromServer) {
              return {
                TAG: "TravellingMerchantInventory",
                _0: Stdlib_Lazy.make(() => Packet_TravellingMerchantInventory$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "TeleportationPotion":
            return {
              TAG: "TeleportationPotion",
              _0: Stdlib_Lazy.make(() => Packet_TeleportationPotion$TerrariaPacket.parse(buffer))
            };
          case "AnglerQuest":
            if (fromServer) {
              return {
                TAG: "AnglerQuest",
                _0: Stdlib_Lazy.make(() => Packet_AnglerQuest$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "AnglerQuestComplete":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "AnglerQuestComplete",
                _0: Stdlib_Lazy.make(() => Packet_AnglerQuestComplete$TerrariaPacket.parse(buffer))
              };
            }
          case "AnglerQuestsCompletedAmount":
            return {
              TAG: "AnglerQuestsCompletedAmount",
              _0: Stdlib_Lazy.make(() => Packet_AnglerQuestsCompletedAmount$TerrariaPacket.parse(buffer))
            };
          case "TemporaryAnimationCreate":
            if (fromServer) {
              return {
                TAG: "TemporaryAnimationCreate",
                _0: Stdlib_Lazy.make(() => Packet_TemporaryAnimationCreate$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "InvasionProgressReport":
            if (fromServer) {
              return {
                TAG: "InvasionProgressReport",
                _0: Stdlib_Lazy.make(() => Packet_InvasionProgressReport$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "ObjectPlace":
            return {
              TAG: "ObjectPlace",
              _0: Stdlib_Lazy.make(() => Packet_ObjectPlace$TerrariaPacket.parse(buffer))
            };
          case "PlayerChestIndexSync":
            if (fromServer) {
              return {
                TAG: "PlayerChestIndexSync",
                _0: Stdlib_Lazy.make(() => Packet_PlayerChestIndexSync$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "CombatNumberCreate":
            if (fromServer) {
              return {
                TAG: "CombatNumberCreate",
                _0: Stdlib_Lazy.make(() => Packet_CombatNumberCreate$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "NetModuleLoad":
            return {
              TAG: "NetModuleLoad",
              _0: Stdlib_Lazy.make(() => Packet_NetModuleLoad$TerrariaPacket.parse(buffer, fromServer))
            };
          case "NpcKillCount":
            if (fromServer) {
              return {
                TAG: "NpcKillCount",
                _0: Stdlib_Lazy.make(() => Packet_NpcKillCount$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PlayerStealth":
            return {
              TAG: "PlayerStealth",
              _0: Stdlib_Lazy.make(() => Packet_PlayerStealth$TerrariaPacket.parse(buffer))
            };
          case "ItemForceIntoNearestChest":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "ItemForceIntoNearestChest",
                _0: Stdlib_Lazy.make(() => Packet_ItemForceIntoNearestChest$TerrariaPacket.parse(buffer))
              };
            }
          case "TileEntityUpdate":
            if (fromServer) {
              return {
                TAG: "TileEntityUpdate",
                _0: Stdlib_Lazy.make(() => Packet_TileEntityUpdate$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "TileEntityPlace":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "TileEntityPlace",
                _0: Stdlib_Lazy.make(() => Packet_TileEntityPlace$TerrariaPacket.parse(buffer))
              };
            }
          case "ItemDropModify":
            if (fromServer) {
              return {
                TAG: "ItemDropModify",
                _0: Stdlib_Lazy.make(() => Packet_ItemDropModify$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "ItemFramePlace":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "ItemFramePlace",
                _0: Stdlib_Lazy.make(() => Packet_ItemFramePlace$TerrariaPacket.parse(buffer))
              };
            }
          case "ItemDropInstancedUpdate":
            return {
              TAG: "ItemDropInstancedUpdate",
              _0: Stdlib_Lazy.make(() => Packet_ItemDropInstancedUpdate$TerrariaPacket.parse(buffer))
            };
          case "EmoteBubble":
            if (fromServer) {
              return {
                TAG: "EmoteBubble",
                _0: Stdlib_Lazy.make(() => Packet_EmoteBubble$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "ExtraValueSync":
            return {
              TAG: "ExtraValueSync",
              _0: Stdlib_Lazy.make(() => Packet_ExtraValueSync$TerrariaPacket.parse(buffer))
            };
          case "SocialHandshake":
            return {
              TAG: "SocialHandshake",
              _0: Stdlib_Lazy.make(() => Packet_SocialHandshake$TerrariaPacket.parse(buffer))
            };
          case "Unused":
            return {
              TAG: "Unused",
              _0: Stdlib_Lazy.make(() => Packet_Unused$TerrariaPacket.parse(buffer))
            };
          case "PortalKill":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "PortalKill",
                _0: Stdlib_Lazy.make(() => Packet_PortalKill$TerrariaPacket.parse(buffer))
              };
            }
          case "PlayerTeleportPortal":
            return {
              TAG: "PlayerTeleportPortal",
              _0: Stdlib_Lazy.make(() => Packet_PlayerTeleportPortal$TerrariaPacket.parse(buffer))
            };
          case "NpcKilledNotification":
            if (fromServer) {
              return {
                TAG: "NpcKilledNotification",
                _0: Stdlib_Lazy.make(() => Packet_NpcKilledNotification$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "EventNotification":
            if (fromServer) {
              return {
                TAG: "EventNotification",
                _0: Stdlib_Lazy.make(() => Packet_EventNotification$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "MinionTargetUpdate":
            return {
              TAG: "MinionTargetUpdate",
              _0: Stdlib_Lazy.make(() => Packet_MinionTargetUpdate$TerrariaPacket.parse(buffer))
            };
          case "NpcTeleportPortal":
            return {
              TAG: "NpcTeleportPortal",
              _0: Stdlib_Lazy.make(() => Packet_NpcTeleportPortal$TerrariaPacket.parse(buffer))
            };
          case "ShieldStrengthsUpdate":
            if (fromServer) {
              return {
                TAG: "ShieldStrengthsUpdate",
                _0: Stdlib_Lazy.make(() => Packet_ShieldStrengthsUpdate$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "NebulaLevelUp":
            return {
              TAG: "NebulaLevelUp",
              _0: Stdlib_Lazy.make(() => Packet_NebulaLevelUp$TerrariaPacket.parse(buffer))
            };
          case "MoonLordCountdown":
            if (fromServer) {
              return {
                TAG: "MoonLordCountdown",
                _0: Stdlib_Lazy.make(() => Packet_MoonLordCountdown$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "NpcShopItem":
            if (fromServer) {
              return {
                TAG: "NpcShopItem",
                _0: Stdlib_Lazy.make(() => Packet_NpcShopItem$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "GemLockToggle":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "GemLockToggle",
                _0: Stdlib_Lazy.make(() => Packet_GemLockToggle$TerrariaPacket.parse(buffer))
              };
            }
          case "SmokePoof":
            if (fromServer) {
              return {
                TAG: "SmokePoof",
                _0: Stdlib_Lazy.make(() => Packet_SmokePoof$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "ChatMessageSmart":
            if (fromServer) {
              return {
                TAG: "ChatMessageSmart",
                _0: Stdlib_Lazy.make(() => Packet_ChatMessageSmart$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "WiredCannonShot":
            if (fromServer) {
              return {
                TAG: "WiredCannonShot",
                _0: Stdlib_Lazy.make(() => Packet_WiredCannonShot$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "MassWireOperation":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "MassWireOperation",
                _0: Stdlib_Lazy.make(() => Packet_MassWireOperation$TerrariaPacket.parse(buffer))
              };
            }
          case "MassWireOperationPay":
            if (fromServer) {
              return {
                TAG: "MassWireOperationPay",
                _0: Stdlib_Lazy.make(() => Packet_MassWireOperationPay$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PartyToggle":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "PartyToggle",
                _0: Stdlib_Lazy.make(() => Packet_PartyToggle$TerrariaPacket.parse(buffer))
              };
            }
          case "TreeGrowFx":
            return {
              TAG: "TreeGrowFx",
              _0: Stdlib_Lazy.make(() => Packet_TreeGrowFx$TerrariaPacket.parse(buffer))
            };
          case "CrystalInvasionStart":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "CrystalInvasionStart",
                _0: Stdlib_Lazy.make(() => Packet_CrystalInvasionStart$TerrariaPacket.parse(buffer))
              };
            }
          case "CrystalInvasionWipeAll":
            if (fromServer) {
              return {
                TAG: "CrystalInvasionWipeAll",
                _0: Stdlib_Lazy.make(() => Packet_CrystalInvasionWipeAll$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "MinionAttackTargetUpdate":
            return {
              TAG: "MinionAttackTargetUpdate",
              _0: Stdlib_Lazy.make(() => Packet_MinionAttackTargetUpdate$TerrariaPacket.parse(buffer))
            };
          case "CrystalInvasionSendWaitTime":
            if (fromServer) {
              return {
                TAG: "CrystalInvasionSendWaitTime",
                _0: Stdlib_Lazy.make(() => Packet_CrystalInvasionSendWaitTime$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "PlayerDamage":
            return {
              TAG: "PlayerDamage",
              _0: Stdlib_Lazy.make(() => Packet_PlayerDamage$TerrariaPacket.parse(buffer))
            };
          case "PlayerDeath":
            return {
              TAG: "PlayerDeath",
              _0: Stdlib_Lazy.make(() => Packet_PlayerDeath$TerrariaPacket.parse(buffer))
            };
          case "CombatTextCreate":
            if (fromServer) {
              return {
                TAG: "CombatTextCreate",
                _0: Stdlib_Lazy.make(() => Packet_CombatTextCreate$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "Emoji":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "Emoji",
                _0: Stdlib_Lazy.make(() => Packet_Emoji$TerrariaPacket.parse(buffer))
              };
            }
          case "TileEntityDisplayDollItemSync":
            return {
              TAG: "TileEntityDisplayDollItemSync",
              _0: Stdlib_Lazy.make(() => Packet_TileEntityDisplayDollItemSync$TerrariaPacket.parse(buffer))
            };
          case "TileEntityInteractionRequest":
            return {
              TAG: "TileEntityInteractionRequest",
              _0: Stdlib_Lazy.make(() => Packet_TileEntityInteractionRequest$TerrariaPacket.parse(buffer))
            };
          case "WeaponsRackTryPlacing":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "WeaponsRackTryPlacing",
                _0: Stdlib_Lazy.make(() => Packet_WeaponsRackTryPlacing$TerrariaPacket.parse(buffer))
              };
            }
          case "TileEntityHatRackItemSync":
            return {
              TAG: "TileEntityHatRackItemSync",
              _0: Stdlib_Lazy.make(() => Packet_TileEntityHatRackItemSync$TerrariaPacket.parse(buffer))
            };
          case "TilePickingSync":
            return {
              TAG: "TilePickingSync",
              _0: Stdlib_Lazy.make(() => Packet_TilePickingSync$TerrariaPacket.parse(buffer))
            };
          case "RevengeMarkerSync":
            if (fromServer) {
              return {
                TAG: "RevengeMarkerSync",
                _0: Stdlib_Lazy.make(() => Packet_RevengeMarkerSync$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "RevengeMarkerRemove":
            if (fromServer) {
              return {
                TAG: "RevengeMarkerRemove",
                _0: Stdlib_Lazy.make(() => Packet_RevengeMarkerRemove$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "GolfBallLandInCup":
            return {
              TAG: "GolfBallLandInCup",
              _0: Stdlib_Lazy.make(() => Packet_GolfBallLandInCup$TerrariaPacket.parse(buffer))
            };
          case "ClientFinishConnectingToServer":
            if (fromServer) {
              return {
                TAG: "ClientFinishConnectingToServer",
                _0: Stdlib_Lazy.make(() => Packet_ClientFinishConnectingToServer$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "NpcFishOut":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "NpcFishOut",
                _0: Stdlib_Lazy.make(() => Packet_NpcFishOut$TerrariaPacket.parse(buffer))
              };
            }
          case "NpcTamper":
            if (fromServer) {
              return {
                TAG: "NpcTamper",
                _0: Stdlib_Lazy.make(() => Packet_NpcTamper$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "LegacySoundPlay":
            if (fromServer) {
              return {
                TAG: "LegacySoundPlay",
                _0: Stdlib_Lazy.make(() => Packet_LegacySoundPlay$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "FoodPlatterTryPlacing":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "FoodPlatterTryPlacing",
                _0: Stdlib_Lazy.make(() => Packet_FoodPlatterTryPlacing$TerrariaPacket.parse(buffer))
              };
            }
          case "PlayerLuckFactorsUpdate":
            return {
              TAG: "PlayerLuckFactorsUpdate",
              _0: Stdlib_Lazy.make(() => Packet_PlayerLuckFactorsUpdate$TerrariaPacket.parse(buffer))
            };
          case "PlayerDead":
            if (fromServer) {
              return {
                TAG: "PlayerDead",
                _0: Stdlib_Lazy.make(() => Packet_PlayerDead$TerrariaPacket.parse(buffer))
              };
            } else {
              return;
            }
          case "CavernMonsterTypeSync":
            return {
              TAG: "CavernMonsterTypeSync",
              _0: Stdlib_Lazy.make(() => Packet_CavernMonsterTypeSync$TerrariaPacket.parse(buffer))
            };
          case "NpcBuffRemovalRequest":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "NpcBuffRemovalRequest",
                _0: Stdlib_Lazy.make(() => Packet_NpcBuffRemovalRequest$TerrariaPacket.parse(buffer))
              };
            }
          case "ClientSyncedInventory":
            if (fromServer) {
              return;
            } else {
              return {
                TAG: "ClientSyncedInventory",
                _0: Stdlib_Lazy.make(() => Packet_ClientSyncedInventory$TerrariaPacket.parse(buffer))
              };
            }
          case "CountsAsHostForGameplaySet":
            return {
              TAG: "CountsAsHostForGameplaySet",
              _0: Stdlib_Lazy.make(() => Packet_CountsAsHostForGameplaySet$TerrariaPacket.parse(buffer))
            };
          case "CreditsOrSlimeTransform":
            return {
              TAG: "CreditsOrSlimeTransform",
              _0: Stdlib_Lazy.make(() => Packet_CreditsOrSlimeTransform$TerrariaPacket.parse(buffer))
            };
          case "LucyAxeMessage":
            return {
              TAG: "LucyAxeMessage",
              _0: Stdlib_Lazy.make(() => Packet_LucyAxeMessage$TerrariaPacket.parse(buffer))
            };
          case "PiggyBankVoidLensUpdate":
            return {
              TAG: "PiggyBankVoidLensUpdate",
              _0: Stdlib_Lazy.make(() => Packet_PiggyBankVoidLensUpdate$TerrariaPacket.parse(buffer))
            };
          case "DungeonDefendersEventAttemptSkipWait":
            return {
              TAG: "DungeonDefendersEventAttemptSkipWait",
              _0: Stdlib_Lazy.make(() => Packet_DungeonDefendersEventAttemptSkipWait$TerrariaPacket.parse(buffer))
            };
          case "HaveDryadDoStardewAnimation":
            return {
              TAG: "HaveDryadDoStardewAnimation",
              _0: Stdlib_Lazy.make(() => Packet_HaveDryadDoStardewAnimation$TerrariaPacket.parse(buffer))
            };
          case "ItemDropShimmeredUpdate":
            return {
              TAG: "ItemDropShimmeredUpdate",
              _0: Stdlib_Lazy.make(() => Packet_ItemDropShimmeredUpdate$TerrariaPacket.parse(buffer))
            };
          case "ShimmerEffectOrCoinLuck":
            return {
              TAG: "ShimmerEffectOrCoinLuck",
              _0: Stdlib_Lazy.make(() => Packet_ShimmerEffectOrCoinLuck$TerrariaPacket.parse(buffer))
            };
          case "LoadoutSwitch":
            return {
              TAG: "LoadoutSwitch",
              _0: Stdlib_Lazy.make(() => Packet_LoadoutSwitch$TerrariaPacket.parse(buffer))
            };
          case "ItemDropProtectedUpdate":
            return {
              TAG: "ItemDropProtectedUpdate",
              _0: Stdlib_Lazy.make(() => Packet_ItemDropProtectedUpdate$TerrariaPacket.parse(buffer))
            };
        }
      } catch (_e) {
        return;
      }
    }
    exports2.parse = parse;
    exports2.parseLazy = parseLazy;
  }
});

// src/Point.js
var require_Point = __commonJS({
  "src/Point.js"(exports2) {
    "use strict";
    function toString(self) {
      return `{ x: ` + String(self.x) + `, y: ` + String(self.y) + ` }`;
    }
    var Int2 = {
      toString
    };
    function toString$1(self) {
      return `{ x: ` + String(self.x) + `, y: ` + String(self.y) + ` }`;
    }
    var Float = {
      toString: toString$1
    };
    exports2.Int = Int2;
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
  Parser: () => Parser,
  PartyTogglePacket: () => PartyTogglePacket,
  PlayerActivePacket: () => PlayerActivePacket,
  PlayerAnimationPacket: () => PlayerAnimationPacket,
  PlayerBuffAddPacket: () => PlayerBuffAddPacket,
  PlayerBuffsSetPacket: () => PlayerBuffsSetPacket,
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
var PlayerBuffsSetPacket = __toESM(require_Packet_PlayerBuffsSet());
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
var Parser = __toESM(require_Parser());
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
  Parser,
  PartyTogglePacket,
  PlayerActivePacket,
  PlayerAnimationPacket,
  PlayerBuffAddPacket,
  PlayerBuffsSetPacket,
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
