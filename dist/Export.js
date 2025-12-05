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
var __export = (target, all8) => {
  for (var name in all8)
    __defProp(target, name, { get: all8[name], enumerable: true });
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
    var Primitive_exceptions2 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
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
    function readBytesUnsafe(prim0, prim1) {
      return prim0.readBytes(prim1);
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
    function readBufferUnsafe(prim0, prim1) {
      return prim0.readBuffer(prim1);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
    exports2.readByteUnsafe = readByteUnsafe;
    exports2.readUInt16Unsafe = readUInt16Unsafe;
    exports2.readInt16Unsafe = readInt16Unsafe;
    exports2.readUInt32Unsafe = readUInt32Unsafe;
    exports2.readInt32Unsafe = readInt32Unsafe;
    exports2.readUInt64Unsafe = readUInt64Unsafe;
    exports2.readStringUnsafe = readStringUnsafe;
    exports2.readBytesUnsafe = readBytesUnsafe;
    exports2.readSingleUnsafe = readSingleUnsafe;
    exports2.readSByteUnsafe = readSByteUnsafe;
    exports2.readColorUnsafe = readColorUnsafe;
    exports2.readBufferUnsafe = readBufferUnsafe;
    exports2.readNetworkTextUnsafe = readNetworkTextUnsafe;
    exports2.getBytesLeftUnsafe = getBytesLeftUnsafe;
    exports2.withContext = withContext;
    exports2.readByte = readByte;
    exports2.readBool = readBool;
    exports2.readUInt16 = readUInt16;
    exports2.readInt16 = readInt16;
    exports2.readUInt32 = readUInt32;
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
      readBuffer(size3) {
        const buffer = this._data.slice(this.head, this.head + size3);
        this.head += size3;
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

// src/ErrorAwarePacketWriter.js
var require_ErrorAwarePacketWriter = __commonJS({
  "src/ErrorAwarePacketWriter.js"(exports2) {
    "use strict";
    var Primitive_exceptions2 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
    exports2.packUInt32 = packUInt32;
    exports2.packInt32 = packInt32;
    exports2.packByte = packByte;
    exports2.packBool = packBool;
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

// src/packet/Packet_AnglerQuest.js
var require_Packet_AnglerQuest = __commonJS({
  "src/packet/Packet_AnglerQuest.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "anglerQuest");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readBool(reader, "anglerQuestFinished");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readBool: ErrorAwarePacketReader$TerrariaPacket.readBool,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packBool(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("AnglerQuest")), self.anglerQuest, "anglerQuest"), self.anglerQuestFinished, "anglerQuestFinished"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packBool: ErrorAwarePacketWriter$TerrariaPacket.packBool,
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

// src/packet/Packet_AnglerQuestComplete.js
var require_Packet_AnglerQuestComplete = __commonJS({
  "src/packet/Packet_AnglerQuestComplete.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    var Decode = {
      parse
    };
    function toBuffer(_self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("AnglerQuestComplete")));
    }
    var Encode = {
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

// src/packet/Packet_BossOrInvasionSpawn.js
var require_Packet_BossOrInvasionSpawn = __commonJS({
  "src/packet/Packet_BossOrInvasionSpawn.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "spawnType");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function packSpawnType(writer, spawnType) {
      if (typeof spawnType === "object") {
        if (spawnType.TAG === "Invasion") {
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -spawnType._0 | 0, "spawnType");
        } else {
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, spawnType._0, "spawnType");
        }
      }
      switch (spawnType) {
        case "GoblinInvasion":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -1, "spawnType");
        case "FrostInvasion":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -2, "spawnType");
        case "PirateInvasion":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -3, "spawnType");
        case "PumpkinMoon":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -4, "spawnType");
        case "SnowMoon":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -5, "spawnType");
        case "Eclipse":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -6, "spawnType");
        case "MartianMoon":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -7, "spawnType");
        case "ImpendingDoom":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -8, "spawnType");
        case "BloodMoon":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -10, "spawnType");
        case "CombatBookUsed":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -11, "spawnType");
        case "BoughtCat":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -12, "spawnType");
        case "BoughtDog":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -13, "spawnType");
        case "BoughtBunny":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -14, "spawnType");
        case "BoughtSlime":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -15, "spawnType");
        case "MechQueen":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -16, "spawnType");
        case "CombatBookVolumeTwo":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -17, "spawnType");
        case "PeddlersSatchel":
          return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -18, "spawnType");
      }
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(packSpawnType(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("BossOrInvasionSpawn")), self.playerId, "playerId"), self.spawnType));
    }
    var Encode = {
      Writer: void 0,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "color");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readNetworkText(reader, "message");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "widthLimit");
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "chestId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "slot");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemNetId");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ChestItem")), self.chestId, "chestId"), self.slot, "slot"), self.stack, "stack"), self.prefix, "prefix"), self.itemNetId, "itemNetId"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_ChestOrTempleUnlock.js
var require_Packet_ChestOrTempleUnlock = __commonJS({
  "src/packet/Packet_ChestOrTempleUnlock.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
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
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "unlockType");
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
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ChestOrTempleUnlock")), unlockTypeToInt(self.unlockType), "unlockType"), self.x, "x"), self.y, "y"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
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
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "action");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "style");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "id");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let action = fromInt(e._0);
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
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, byte, "action");
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(packAction(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ChestPlace")), self.action), self.x, "x"), self.y, "y"), self.style, "style"), self.id, "id"));
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    var Decode = {
      parse
    };
    function toBuffer(_self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ClientFinishConnectingToServer")));
    }
    var Encode = {
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

// src/packet/Packet_ConnectRequest.js
var require_Packet_ConnectRequest = __commonJS({
  "src/packet/Packet_ConnectRequest.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "version");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ConnectRequest")), self.version, "version"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_CountsAsHostForGameplaySet.js
var require_Packet_CountsAsHostForGameplaySet = __commonJS({
  "src/packet/Packet_CountsAsHostForGameplaySet.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readBool(reader, "countsAsHost");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readBool: ErrorAwarePacketReader$TerrariaPacket.readBool,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packBool(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("CountsAsHostForGameplaySet")), self.playerId, "playerId"), self.countsAsHost, "countsAsHost"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packBool: ErrorAwarePacketWriter$TerrariaPacket.packBool,
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

// src/packet/Packet_CreditsOrSlimeTransform.js
var require_Packet_CreditsOrSlimeTransform = __commonJS({
  "src/packet/Packet_CreditsOrSlimeTransform.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
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
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventType");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "value");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let eventType = fromInt(e._0);
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("CreditsOrSlimeTransform")), toInt(self.eventType), "eventType"), self.value, "value"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("CrystalInvasionStart")), self.x, "x"), self.y, "y"));
    }
    var Encode = {
      Writer: void 0,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_DimensionsUpdate.js
var require_Packet_DimensionsUpdate = __commonJS({
  "src/packet/Packet_DimensionsUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
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
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "updateType");
      if (e.TAG !== "Ok") {
        return e;
      }
      let match = fromInt(e._0);
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
          let e$1 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "ip");
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
          let e$2 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "dimensionName");
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
          let e$3 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "ip");
          if (e$3.TAG !== "Ok") {
            return e$3;
          }
          let e$4 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "port");
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
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")), 1, "updateType"));
    }
    function toBuffer(self) {
      if (typeof self !== "object") {
        return gamemodesJoinModeToBuffer();
      }
      switch (self.TAG) {
        case "RealIpAddress":
          let ip = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")), 0, "updateType"), ip, "ip"));
        case "SwitchServer":
          let dimensionName = self._0;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")), 2, "updateType"), dimensionName, "dimensionName"));
        case "SwitchServerManual":
          let ip$1 = self._0;
          let port = self._1;
          return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("DimensionsUpdate")), 3, "updateType"), ip$1, "ip"), port, "port"));
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcSlotId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "extraValue");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ExtraValueSync")), self.npcSlotId, "npcSlotId"), self.extraValue, "extraValue"), self.x, "x"), self.y, "y"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_HaveDryadDoStardewAnimation.js
var require_Packet_HaveDryadDoStardewAnimation = __commonJS({
  "src/packet/Packet_HaveDryadDoStardewAnimation.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    var Decode = {
      parse
    };
    function toBuffer(_self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("HaveDryadDoStardewAnimation")));
    }
    var Encode = {
      Writer: void 0,
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

// src/packet/Packet_InvasionProgressReport.js
var require_Packet_InvasionProgressReport = __commonJS({
  "src/packet/Packet_InvasionProgressReport.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "progress");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "progressMax");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "icon");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "wave");
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
    var Decode = {
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readSByte: ErrorAwarePacketReader$TerrariaPacket.readSByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSByte(ErrorAwarePacketWriter$TerrariaPacket.packSByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("InvasionProgressReport")), self.progress, "progress"), self.progressMax, "progressMax"), self.icon, "icon"), self.wave, "wave"));
    }
    var Encode = {
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packSByte: ErrorAwarePacketWriter$TerrariaPacket.packSByte,
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

// src/packet/Packet_ItemDropShimmeredUpdate.js
var require_Packet_ItemDropShimmeredUpdate = __commonJS({
  "src/packet/Packet_ItemDropShimmeredUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemDropId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "noDelay");
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let e$8 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
      if (e$8.TAG !== "Ok") {
        return e$8;
      }
      let e$9 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "shimmered");
      if (e$9.TAG !== "Ok") {
        return e$9;
      }
      let e$10 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "shimmeredTime");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ItemDropShimmeredUpdate")), self.itemDropId, "itemDropId"), self.x, "x"), self.y, "y"), self.vx, "vx"), self.vy, "vy"), self.stack, "stack"), self.prefix, "prefix"), self.noDelay, "noDelay"), self.itemId, "itemId"), self.shimmered ? 1 : 0, "shimmered"), self.shimmeredTime, "shimmeredTime"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_ItemDropUpdate.js
var require_Packet_ItemDropUpdate = __commonJS({
  "src/packet/Packet_ItemDropUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemDropId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "noDelay");
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let e$8 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ItemDropUpdate")), self.itemDropId, "itemDropId"), self.x, "x"), self.y, "y"), self.vx, "vx"), self.vy, "vy"), self.stack, "stack"), self.prefix, "prefix"), self.noDelay, "noDelay"), self.itemId, "itemId"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ItemOwner.js
var require_Packet_ItemOwner = __commonJS({
  "src/packet/Packet_ItemOwner.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemDropId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "owner");
      if (e$1.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            itemDropId: e._0,
            owner: e$1._0
          }
        };
      } else {
        return e$1;
      }
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ItemOwner")), self.itemDropId, "itemDropId"), self.owner, "owner"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Array.js
var Stdlib_Array_exports = {};
function make(length, x) {
  if (length <= 0) {
    return [];
  }
  let arr = new Array(length);
  arr.fill(x);
  return arr;
}
function fromInitializer(length, f) {
  if (length <= 0) {
    return [];
  }
  let arr = new Array(length);
  for (let i = 0; i < length; ++i) {
    arr[i] = f(i);
  }
  return arr;
}
function isEmpty(arr) {
  return arr.length === 0;
}
function equal(a, b, eq6) {
  let len = a.length;
  if (len === b.length) {
    let _i = 0;
    while (true) {
      let i = _i;
      if (i === len) {
        return true;
      }
      if (!eq6(a[i], b[i])) {
        return false;
      }
      _i = i + 1 | 0;
      continue;
    }
    ;
  } else {
    return false;
  }
}
function compare(a, b, cmp6) {
  let lenA = a.length;
  let lenB = b.length;
  if (lenA < lenB) {
    return -1;
  } else if (lenA > lenB) {
    return 1;
  } else {
    let _i = 0;
    while (true) {
      let i = _i;
      if (i === lenA) {
        return 0;
      }
      let c = cmp6(a[i], b[i]);
      if (c !== 0) {
        return c;
      }
      _i = i + 1 | 0;
      continue;
    }
    ;
  }
}
function indexOfOpt(arr, item) {
  let index = arr.indexOf(item);
  if (index !== -1) {
    return index;
  }
}
function lastIndexOfOpt(arr, item) {
  let index = arr.lastIndexOf(item);
  if (index !== -1) {
    return index;
  }
}
function reduce(arr, init2, f) {
  return arr.reduce(f, init2);
}
function reduceWithIndex(arr, init2, f) {
  return arr.reduce(f, init2);
}
function reduceRight(arr, init2, f) {
  return arr.reduceRight(f, init2);
}
function reduceRightWithIndex(arr, init2, f) {
  return arr.reduceRight(f, init2);
}
function findIndexOpt(array, finder) {
  let index = array.findIndex(finder);
  if (index !== -1) {
    return index;
  }
}
function findLastIndexOpt(array, finder) {
  let index = array.findLastIndex(finder);
  if (index !== -1) {
    return index;
  }
}
function swapUnsafe(xs, i, j) {
  let tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
}
function random_int(min6, max6) {
  return (Math.floor(Math.random() * (max6 - min6 | 0)) | 0) + min6 | 0;
}
function shuffle(xs) {
  let len = xs.length;
  for (let i = 0; i < len; ++i) {
    swapUnsafe(xs, i, random_int(i, len));
  }
}
function toShuffled(xs) {
  let result = xs.slice();
  shuffle(result);
  return result;
}
function filterMap(a, f) {
  let l = a.length;
  let r = new Array(l);
  let j = 0;
  for (let i = 0; i < l; ++i) {
    let v = a[i];
    let v$1 = f(v);
    if (v$1 !== void 0) {
      r[j] = Primitive_option.valFromOption(v$1);
      j = j + 1 | 0;
    }
  }
  r.length = j;
  return r;
}
function keepSome(__x) {
  return filterMap(__x, (x) => x);
}
function filterMapWithIndex(a, f) {
  let l = a.length;
  let r = new Array(l);
  let j = 0;
  for (let i = 0; i < l; ++i) {
    let v = a[i];
    let v$1 = f(v, i);
    if (v$1 !== void 0) {
      r[j] = Primitive_option.valFromOption(v$1);
      j = j + 1 | 0;
    }
  }
  r.length = j;
  return r;
}
function findMap(arr, f) {
  let _i = 0;
  while (true) {
    let i = _i;
    if (i === arr.length) {
      return;
    }
    let r = f(arr[i]);
    if (r !== void 0) {
      return r;
    }
    _i = i + 1 | 0;
    continue;
  }
  ;
}
function last(a) {
  return a[a.length - 1 | 0];
}
var Primitive_option;
var init_Stdlib_Array = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Array.js"() {
    "use strict";
    Primitive_option = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    exports.make = make;
    exports.fromInitializer = fromInitializer;
    exports.equal = equal;
    exports.compare = compare;
    exports.isEmpty = isEmpty;
    exports.indexOfOpt = indexOfOpt;
    exports.lastIndexOfOpt = lastIndexOfOpt;
    exports.reduce = reduce;
    exports.reduceWithIndex = reduceWithIndex;
    exports.reduceRight = reduceRight;
    exports.reduceRightWithIndex = reduceRightWithIndex;
    exports.findIndexOpt = findIndexOpt;
    exports.findLastIndexOpt = findLastIndexOpt;
    exports.filterMap = filterMap;
    exports.filterMapWithIndex = filterMapWithIndex;
    exports.keepSome = keepSome;
    exports.toShuffled = toShuffled;
    exports.shuffle = shuffle;
    exports.findMap = findMap;
    exports.last = last;
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
function forEach(opt, f) {
  if (opt !== void 0) {
    return f(Primitive_option2.valFromOption(opt));
  }
}
function getOrThrow(x, message) {
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
function map(opt, f) {
  if (opt !== void 0) {
    return Primitive_option2.some(f(Primitive_option2.valFromOption(opt)));
  }
}
function flatMap(opt, f) {
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
function equal2(a, b, eq6) {
  if (a !== void 0) {
    if (b !== void 0) {
      return eq6(Primitive_option2.valFromOption(a), Primitive_option2.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === void 0;
  }
}
function compare2(a, b, cmp6) {
  if (a !== void 0) {
    if (b !== void 0) {
      return cmp6(Primitive_option2.valFromOption(a), Primitive_option2.valFromOption(b));
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
var Stdlib_JsError, Primitive_option2, getExn, mapWithDefault, getWithDefault;
var init_Stdlib_Option = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Option.js"() {
    "use strict";
    Stdlib_JsError = (init_Stdlib_JsError(), __toCommonJS(Stdlib_JsError_exports));
    Primitive_option2 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    getExn = getOrThrow;
    mapWithDefault = mapOr;
    getWithDefault = getOr;
    exports.filter = filter;
    exports.forEach = forEach;
    exports.getExn = getExn;
    exports.getOrThrow = getOrThrow;
    exports.mapOr = mapOr;
    exports.mapWithDefault = mapWithDefault;
    exports.map = map;
    exports.flatMap = flatMap;
    exports.getOr = getOr;
    exports.getWithDefault = getWithDefault;
    exports.orElse = orElse;
    exports.isSome = isSome;
    exports.isNone = isNone;
    exports.equal = equal2;
    exports.compare = compare2;
    exports.all = all;
    exports.all2 = all2;
    exports.all3 = all3;
    exports.all4 = all4;
    exports.all5 = all5;
    exports.all6 = all6;
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
    function getOr3(self, index, or) {
      return Stdlib_Option.getOr(self[index], or);
    }
    exports2.intoChunks = intoChunks;
    exports2.getOr = getOr3;
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
    function fromArray4(flags) {
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
    exports2.fromArray = fromArray4;
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

// src/Array16.js
var require_Array16 = __commonJS({
  "src/Array16.js"(exports2) {
    "use strict";
    var Stdlib_Array = (init_Stdlib_Array(), __toCommonJS(Stdlib_Array_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    function fromArray4(a) {
      if (a.length === 16) {
        return a;
      }
    }
    function fromBitFlagsPair(a, b) {
      let array = Stdlib_Array.make(16, false);
      array[0] = BitFlags$TerrariaPacket.flag1(a);
      array[1] = BitFlags$TerrariaPacket.flag2(a);
      array[2] = BitFlags$TerrariaPacket.flag3(a);
      array[3] = BitFlags$TerrariaPacket.flag4(a);
      array[4] = BitFlags$TerrariaPacket.flag5(a);
      array[5] = BitFlags$TerrariaPacket.flag6(a);
      array[6] = BitFlags$TerrariaPacket.flag7(a);
      array[7] = BitFlags$TerrariaPacket.flag8(a);
      array[8] = BitFlags$TerrariaPacket.flag1(b);
      array[9] = BitFlags$TerrariaPacket.flag2(b);
      array[10] = BitFlags$TerrariaPacket.flag3(b);
      array[11] = BitFlags$TerrariaPacket.flag4(b);
      array[12] = BitFlags$TerrariaPacket.flag5(b);
      array[13] = BitFlags$TerrariaPacket.flag6(b);
      array[14] = BitFlags$TerrariaPacket.flag7(b);
      array[15] = BitFlags$TerrariaPacket.flag8(b);
      return array;
    }
    function toBitFlagsPair(self) {
      let a = BitFlags$TerrariaPacket.fromArray(self.slice(0, 8));
      let b = BitFlags$TerrariaPacket.fromArray(self.slice(8, 16));
      return [
        a,
        b
      ];
    }
    function asArray(self) {
      return self;
    }
    exports2.fromArray = fromArray4;
    exports2.asArray = asArray;
    exports2.fromBitFlagsPair = fromBitFlagsPair;
    exports2.toBitFlagsPair = toBitFlagsPair;
  }
});

// src/packet/Packet_LoadoutSwitch.js
var require_Packet_LoadoutSwitch = __commonJS({
  "src/packet/Packet_LoadoutSwitch.js"(exports2) {
    "use strict";
    var Array16$TerrariaPacket = require_Array16();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "loadout");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "hideVisibleAccessory");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let hideVisibleAccessory = e$2._0;
      let flags0 = BitFlags$TerrariaPacket.fromByte(hideVisibleAccessory & 255);
      let flags1 = BitFlags$TerrariaPacket.fromByte(hideVisibleAccessory >> 8 & 255);
      let hideVisibleAccessory$1 = Array16$TerrariaPacket.fromBitFlagsPair(flags0, flags1);
      return {
        TAG: "Ok",
        _0: {
          playerId: e._0,
          loadout: e$1._0,
          hideVisibleAccessory: hideVisibleAccessory$1
        }
      };
    }
    var Decode = {
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      let match = Array16$TerrariaPacket.toBitFlagsPair(self.hideVisibleAccessory);
      let hideVisibleAccessory = BitFlags$TerrariaPacket.toByte(match[0]) | BitFlags$TerrariaPacket.toByte(match[1]) << 8;
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("LoadoutSwitch")), self.playerId, "playerId"), self.loadout, "loadout"), hideVisibleAccessory, "hideVisibleAccessory"));
    }
    var Encode = {
      Writer: void 0,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_int.js
var Primitive_int_exports = {};
function compare3(x, y) {
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
    exports.compare = compare3;
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
function getOrThrow2(arr, i) {
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
function swapUnsafe2(xs, i, j) {
  let tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
}
function shuffleInPlace(xs) {
  let len = xs.length;
  let random_int2 = (min6, max6) => Math.floor(Math.random() * (max6 - min6 | 0)) + min6 | 0;
  for (let i = 0; i < len; ++i) {
    swapUnsafe2(xs, i, random_int2(i, len));
  }
}
function shuffle2(xs) {
  let result = xs.slice(0);
  shuffleInPlace(result);
  return result;
}
function reverseInPlace(xs) {
  let len = xs.length;
  let ofs = 0;
  for (let i = 0, i_finish = len / 2 | 0; i < i_finish; ++i) {
    swapUnsafe2(xs, ofs + i | 0, ((ofs + len | 0) - i | 0) - 1 | 0);
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
function make2(l, f) {
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
function forEach2(a, f) {
  for (let i = 0, i_finish = a.length; i < i_finish; ++i) {
    f(a[i]);
  }
}
function map2(a, f) {
  let l = a.length;
  let r = new Array(l);
  for (let i = 0; i < l; ++i) {
    r[i] = f(a[i]);
  }
  return r;
}
function flatMap2(a, f) {
  return concatMany(map2(a, f));
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
function keep(a, f) {
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
function reduce2(a, x, f) {
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
function reduceWithIndex2(a, x, f) {
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
function eq(a, b, p) {
  let lena = a.length;
  let lenb = b.length;
  if (lena === lenb) {
    return everyAux2(a, b, 0, p, lena);
  } else {
    return false;
  }
}
function cmp(a, b, p) {
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
var Primitive_int, Primitive_option3, getExn2, setExn, makeByU, makeByAndShuffleU, zipByU, forEachU, mapU, flatMapU, getByU, getIndexByU, keepU, keepWithIndexU, keepMapU, forEachWithIndexU, mapWithIndexU, partitionU, reduceU, reduceReverseU, reduceReverse2U, reduceWithIndexU, joinWithU, someU, everyU, every2U, some2U, cmpU, eqU, initU;
var init_Belt_Array = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_Array.js"() {
    "use strict";
    Primitive_int = (init_Primitive_int(), __toCommonJS(Primitive_int_exports));
    Primitive_option3 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    getExn2 = getOrThrow2;
    setExn = setOrThrow;
    makeByU = makeBy;
    makeByAndShuffleU = makeByAndShuffle;
    zipByU = zipBy;
    forEachU = forEach2;
    mapU = map2;
    flatMapU = flatMap2;
    getByU = getBy;
    getIndexByU = getIndexBy;
    keepU = keep;
    keepWithIndexU = keepWithIndex;
    keepMapU = keepMap;
    forEachWithIndexU = forEachWithIndex;
    mapWithIndexU = mapWithIndex;
    partitionU = partition;
    reduceU = reduce2;
    reduceReverseU = reduceReverse;
    reduceReverse2U = reduceReverse2;
    reduceWithIndexU = reduceWithIndex2;
    joinWithU = joinWith;
    someU = some2;
    everyU = every;
    every2U = every2;
    some2U = some22;
    cmpU = cmp;
    eqU = eq;
    initU = init;
    exports.get = get;
    exports.getExn = getExn2;
    exports.getOrThrow = getOrThrow2;
    exports.set = set;
    exports.setExn = setExn;
    exports.setOrThrow = setOrThrow;
    exports.shuffleInPlace = shuffleInPlace;
    exports.shuffle = shuffle2;
    exports.reverseInPlace = reverseInPlace;
    exports.reverse = reverse;
    exports.make = make2;
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
    exports.forEachU = forEachU;
    exports.forEach = forEach2;
    exports.mapU = mapU;
    exports.map = map2;
    exports.flatMapU = flatMapU;
    exports.flatMap = flatMap2;
    exports.getByU = getByU;
    exports.getBy = getBy;
    exports.getIndexByU = getIndexByU;
    exports.getIndexBy = getIndexBy;
    exports.keepU = keepU;
    exports.keep = keep;
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
    exports.reduce = reduce2;
    exports.reduceReverseU = reduceReverseU;
    exports.reduceReverse = reduceReverse;
    exports.reduceReverse2U = reduceReverse2U;
    exports.reduceReverse2 = reduceReverse2;
    exports.reduceWithIndexU = reduceWithIndexU;
    exports.reduceWithIndex = reduceWithIndex2;
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
    exports.cmpU = cmpU;
    exports.cmp = cmp;
    exports.eqU = eqU;
    exports.eq = eq;
    exports.initU = initU;
    exports.init = init;
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
    var Belt_Array2 = (init_Belt_Array(), __toCommonJS(Belt_Array_exports));
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
      let e = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "moduleType");
      if (e.TAG !== "Ok") {
        return e;
      }
      let match = fromInt(e._0);
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
          let e$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "changesCount");
          if (e$1.TAG !== "Ok") {
            return e$1;
          }
          let changesCount = e$1._0;
          let readChanges = (_idx, _acc) => {
            while (true) {
              let acc = _acc;
              let idx = _idx;
              if (idx >= changesCount) {
                return {
                  TAG: "Ok",
                  _0: Belt_Array2.reverse(acc)
                };
              }
              let e2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
              if (e2.TAG !== "Ok") {
                return e2;
              }
              let e$16 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
              if (e$16.TAG !== "Ok") {
                return e$16;
              }
              let e$210 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "amount");
              if (e$210.TAG !== "Ok") {
                return e$210;
              }
              let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidType");
              if (e$3.TAG !== "Ok") {
                return e$3;
              }
              _acc = Belt_Array2.concatMany([
                [{
                  x: e$16._0,
                  y: e2._0,
                  amount: e$210._0,
                  liquidType: e$3._0
                }],
                acc
              ]);
              _idx = idx + 1 | 0;
              continue;
            }
            ;
          };
          let e$2 = readChanges(0, []);
          if (e$2.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "Liquid",
                _0: {
                  changes: e$2._0
                }
              }
            };
          } else {
            return e$2;
          }
        case "Text":
          if (fromServer) {
            let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
            if (e$3.TAG !== "Ok") {
              return e$3;
            }
            let e$4 = ErrorAwarePacketReader$TerrariaPacket.readNetworkText(reader, "message");
            if (e$4.TAG !== "Ok") {
              return e$4;
            }
            let e$5 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "color");
            if (e$5.TAG === "Ok") {
              return {
                TAG: "Ok",
                _0: {
                  TAG: "ServerText",
                  _0: e$3._0,
                  _1: e$4._0,
                  _2: e$5._0
                }
              };
            } else {
              return e$5;
            }
          }
          let e$6 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "commandId");
          if (e$6.TAG !== "Ok") {
            return e$6;
          }
          let e$7 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "message");
          if (e$7.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "ClientText",
                _0: e$6._0,
                _1: e$7._0
              }
            };
          } else {
            return e$7;
          }
        case "Ping":
          let e$8 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
          if (e$8.TAG !== "Ok") {
            return e$8;
          }
          let e$9 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
          if (e$9.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "Ping",
                _0: {
                  x: e$8._0,
                  y: e$9._0
                }
              }
            };
          } else {
            return e$9;
          }
        case "Ambience":
          let e$10 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
          if (e$10.TAG !== "Ok") {
            return e$10;
          }
          let e$11 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "seed");
          if (e$11.TAG !== "Ok") {
            return e$11;
          }
          let e$12 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "skyEntityType");
          if (e$12.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "Ambience",
                _0: {
                  playerId: e$10._0,
                  seed: e$11._0,
                  skyEntityType: e$12._0
                }
              }
            };
          } else {
            return e$12;
          }
        case "Bestiary":
          let e$13 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "rawBestiaryUnlockType");
          if (e$13.TAG !== "Ok") {
            return e$13;
          }
          let e$14 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
          if (e$14.TAG !== "Ok") {
            return e$14;
          }
          let e$15;
          switch (e$13._0) {
            case 0:
              let e$16 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "killCount");
              e$15 = e$16.TAG === "Ok" ? {
                TAG: "Ok",
                _0: {
                  TAG: "Kill",
                  _0: e$16._0
                }
              } : e$16;
              break;
            case 1:
              e$15 = {
                TAG: "Ok",
                _0: "Sight"
              };
              break;
            case 2:
              e$15 = {
                TAG: "Ok",
                _0: "Chat"
              };
              break;
            default:
              e$15 = {
                TAG: "Error",
                _0: {
                  context: "Packet_NetModuleLoad.parseBestiary",
                  error: new Error("Unknown bestiary unlock type")
                }
              };
          }
          if (e$15.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "Bestiary",
                _0: {
                  unlockType: e$15._0,
                  npcId: e$14._0
                }
              }
            };
          } else {
            return e$15;
          }
        case "CreativeUnlocks":
          let e$17 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
          if (e$17.TAG !== "Ok") {
            return e$17;
          }
          let e$18 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "researchedCount");
          if (e$18.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "CreativeUnlocks",
                _0: {
                  itemId: e$17._0,
                  researchedCount: e$18._0
                }
              }
            };
          } else {
            return e$18;
          }
        case "CreativePower":
          let p = CreativePowers$TerrariaPacket.parse(reader);
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
        case "CreativeUnlocksPlayerReport":
          let e$19 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "unknownByte");
          if (e$19.TAG !== "Ok") {
            return e$19;
          }
          let e$20 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "itemId");
          if (e$20.TAG !== "Ok") {
            return e$20;
          }
          let e$21 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "researchedCount");
          if (e$21.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "CreativeUnlocksPlayerReport",
                _0: {
                  itemId: e$20._0,
                  researchedCount: e$21._0
                }
              }
            };
          } else {
            return e$21;
          }
        case "TeleportPylon":
          let e$22 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "rawPylonAction");
          if (e$22.TAG !== "Ok") {
            return e$22;
          }
          let e$23 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
          if (e$23.TAG !== "Ok") {
            return e$23;
          }
          let e$24 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
          if (e$24.TAG !== "Ok") {
            return e$24;
          }
          let e$25 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "pylonType");
          if (e$25.TAG !== "Ok") {
            return e$25;
          }
          let pylonAction;
          switch (e$22._0) {
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
                  x: e$23._0,
                  y: e$24._0,
                  pylonType: e$25._0
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
        case "Particles":
          let e$26 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "particleType");
          if (e$26.TAG !== "Ok") {
            return e$26;
          }
          let e$27 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
          if (e$27.TAG !== "Ok") {
            return e$27;
          }
          let e$28 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
          if (e$28.TAG !== "Ok") {
            return e$28;
          }
          let e$29 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
          if (e$29.TAG !== "Ok") {
            return e$29;
          }
          let e$30 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
          if (e$30.TAG !== "Ok") {
            return e$30;
          }
          let e$31 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "shaderIndex");
          if (e$31.TAG !== "Ok") {
            return e$31;
          }
          let e$32 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "invokedByPlayer");
          if (e$32.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "Particles",
                _0: {
                  particleType: e$26._0,
                  x: e$27._0,
                  y: e$28._0,
                  vx: e$29._0,
                  vy: e$30._0,
                  shaderIndex: e$31._0,
                  invokedByPlayer: e$32._0
                }
              }
            };
          } else {
            return e$32;
          }
        case "CreativePowerPermissions":
          let e$33 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "unknownByte");
          if (e$33.TAG !== "Ok") {
            return e$33;
          }
          let e$34 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "powerType");
          if (e$34.TAG !== "Ok") {
            return e$34;
          }
          let e$35 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "rawPowerLevel");
          if (e$35.TAG !== "Ok") {
            return e$35;
          }
          let powerLevel;
          switch (e$35._0) {
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
                  powerType: e$34._0,
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "buffType");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcBuffRemovalRequest")), self.npcId, "npcId"), self.buffType, "buffType"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
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

// src/packet/Packet_NpcBuffUpdate.js
var require_Packet_NpcBuffUpdate = __commonJS({
  "src/packet/Packet_NpcBuffUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let buffs = [];
      let buffTimes = [];
      let readBuffs = (_idx) => {
        while (true) {
          let idx = _idx;
          if (idx >= 20) {
            return {
              TAG: "Ok",
              _0: void 0
            };
          }
          let e2 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, `buff` + (idx + 1 | 0).toString());
          if (e2.TAG !== "Ok") {
            return e2;
          }
          let e$12 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, `buffTime` + (idx + 1 | 0).toString());
          if (e$12.TAG !== "Ok") {
            return e$12;
          }
          buffs.push(e2._0);
          buffTimes.push(e$12._0);
          _idx = idx + 1 | 0;
          continue;
        }
        ;
      };
      let e$1 = readBuffs(0);
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
    var Decode = {
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function packBuffs(writer, buffs) {
      let _writer = writer;
      let _idx = 0;
      while (true) {
        let idx = _idx;
        let writer$1 = _writer;
        if (idx >= buffs.length) {
          return writer$1;
        }
        _idx = idx + 1 | 0;
        _writer = ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer$1, buffs[idx], `buff` + (idx + 1 | 0).toString());
        continue;
      }
      ;
    }
    function packBuffTimes(writer, buffTimes) {
      let _writer = writer;
      let _idx = 0;
      while (true) {
        let idx = _idx;
        let writer$1 = _writer;
        if (idx >= buffTimes.length) {
          return writer$1;
        }
        _idx = idx + 1 | 0;
        _writer = ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer$1, buffTimes[idx], `buffTime` + (idx + 1 | 0).toString());
        continue;
      }
      ;
    }
    function toBuffer(self) {
      if (self.buffs.length !== 20 || self.buffTimes.length !== 20) {
        return {
          TAG: "Error",
          _0: {
            context: "Packet_NpcBuffUpdate.toBuffer",
            error: new Error("Expected 20 buffs and 20 buffTimes")
          }
        };
      } else {
        return ErrorAwarePacketWriter$TerrariaPacket.data(packBuffTimes(packBuffs(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcBuffUpdate")), self.npcId, "npcId"), self.buffs), self.buffTimes));
      }
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcCatch")), self.npcId, "npcId"), self.playerId, "playerId"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_NpcFishOut.js
var require_Packet_NpcFishOut = __commonJS({
  "src/packet/Packet_NpcFishOut.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcNetId");
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
    var Decode = {
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcFishOut")), self.x, "x"), self.y, "y"), self.npcNetId, "npcNetId"));
    }
    var Encode = {
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_NpcHomeUpdate.js
var require_Packet_NpcHomeUpdate = __commonJS({
  "src/packet/Packet_NpcHomeUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "homeTileX");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "homeTileY");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "state");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcHomeUpdate")), self.npcId, "npcId"), self.homeTileX, "homeTileX"), self.homeTileY, "homeTileY"), self.state, "state"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_NpcKillCount.js
var require_Packet_NpcKillCount = __commonJS({
  "src/packet/Packet_NpcKillCount.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "killCount");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcKillCount")), self.npcId, "npcId"), self.killCount, "killCount"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_NpcNameUpdate.js
var require_Packet_NpcNameUpdate = __commonJS({
  "src/packet/Packet_NpcNameUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "name");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "townNpcVariationIndex");
      if (e$2.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            npcId: e._0,
            name: e$1._0,
            townNpcVariationIndex: e$2._0
          }
        };
      } else {
        return e$2;
      }
    }
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readString: ErrorAwarePacketReader$TerrariaPacket.readString,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcNameUpdate")), self.npcId, "npcId"), self.name, "name"), self.townNpcVariationIndex, "townNpcVariationIndex"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packString: ErrorAwarePacketWriter$TerrariaPacket.packString,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_NpcShopItem.js
var require_Packet_NpcShopItem = __commonJS({
  "src/packet/Packet_NpcShopItem.js"(exports2) {
    "use strict";
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "slot");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "value");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags");
      if (e$5.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            slot: e._0,
            itemId: e$1._0,
            stack: e$2._0,
            prefix: e$3._0,
            value: e$4._0,
            buyOnce: BitFlags$TerrariaPacket.flag1(BitFlags$TerrariaPacket.fromByte(e$5._0))
          }
        };
      } else {
        return e$5;
      }
    }
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      let flags = BitFlags$TerrariaPacket.fromFlags(self.buyOnce, false, false, false, false, false, false, false);
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcShopItem")), self.slot, "slot"), self.itemId, "itemId"), self.stack, "stack"), self.prefix, "prefix"), self.value, "value"), BitFlags$TerrariaPacket.toByte(flags), "flags"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_NpcTalk.js
var require_Packet_NpcTalk = __commonJS({
  "src/packet/Packet_NpcTalk.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcTalk")), self.playerId, "playerId"), self.npcId, "npcId"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_NpcTeleportPortal.js
var require_Packet_NpcTeleportPortal = __commonJS({
  "src/packet/Packet_NpcTeleportPortal.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "portalColor");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "posX");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "posY");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velX");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velY");
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
    var Decode = {
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcTeleportPortal")), self.npcId, "npcId"), self.portalColor, "portalColor"), self.position.x, "posX"), self.position.y, "posY"), self.velocity.x, "velX"), self.velocity.y, "velY"));
    }
    var Encode = {
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
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

// src/packet/Packet_ObjectPlace.js
var require_Packet_ObjectPlace = __commonJS({
  "src/packet/Packet_ObjectPlace.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "objectType");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "style");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "alternate");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "random");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "direction");
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
    function toBuffer(self) {
      let match = self.direction;
      let tmp;
      tmp = match === "Left" ? 0 : 1;
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packSByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ObjectPlace")), self.x, "x"), self.y, "y"), self.objectType, "objectType"), self.style, "style"), self.alternate, "alternate"), self.random, "random"), tmp, "direction"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PartyToggle.js
var require_Packet_PartyToggle = __commonJS({
  "src/packet/Packet_PartyToggle.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    var Decode = {
      parse
    };
    function toBuffer(_self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PartyToggle")));
    }
    var Encode = {
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

// src/packet/Packet_PlayerAnimation.js
var require_Packet_PlayerAnimation = __commonJS({
  "src/packet/Packet_PlayerAnimation.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "itemRotation");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemAnimation");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerAnimation")), self.playerId, "playerId"), self.itemRotation, "itemRotation"), self.itemAnimation, "itemAnimation"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packSingle: ErrorAwarePacketWriter$TerrariaPacket.packSingle,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_PlayerBuffAdd.js
var require_Packet_PlayerBuffAdd = __commonJS({
  "src/packet/Packet_PlayerBuffAdd.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "buff");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "time");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerBuffAdd")), self.playerId, "playerId"), self.buff, "buff"), self.time, "time"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerBuffsSet.js
var require_Packet_PlayerBuffsSet = __commonJS({
  "src/packet/Packet_PlayerBuffsSet.js"(exports2) {
    "use strict";
    var Stdlib_Array = (init_Stdlib_Array(), __toCommonJS(Stdlib_Array_exports));
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let buffs = Stdlib_Array.make(44, 0);
      let buffsParseResult = {
        TAG: "Ok",
        _0: void 0
      };
      for (let i = 0; i <= 43; ++i) {
        let match = buffsParseResult;
        if (match.TAG === "Ok") {
          let label = "buff_" + i.toString();
          let buff = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, label);
          if (buff.TAG === "Ok") {
            buffs[i] = buff._0;
          } else {
            buffsParseResult = {
              TAG: "Error",
              _0: buff._0
            };
          }
        }
      }
      let err = buffsParseResult;
      if (err.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            playerId: e._0,
            buffs
          }
        };
      } else {
        return {
          TAG: "Error",
          _0: err._0
        };
      }
    }
    function packBuffs(writer, buffs) {
      buffs.forEach((buff, idx) => {
        ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, buff, `buff_` + idx.toString());
      });
      return writer;
    }
    function toBuffer(self) {
      if (self.buffs.length !== 44) {
        return {
          TAG: "Error",
          _0: {
            context: "PlayerBuffsSet.toBuffer",
            error: new Error(`Expected 44 buffs, got ` + self.buffs.length.toString())
          }
        };
      } else {
        return ErrorAwarePacketWriter$TerrariaPacket.data(packBuffs(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerBuffsSet")), self.playerId, "playerId"), self.buffs));
      }
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerChestIndexSync.js
var require_Packet_PlayerChestIndexSync = __commonJS({
  "src/packet/Packet_PlayerChestIndexSync.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "chestId");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerChestIndexSync")), self.playerId, "playerId"), self.chestId, "chestId"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_PlayerDead.js
var require_Packet_PlayerDead = __commonJS({
  "src/packet/Packet_PlayerDead.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerDead")), self.playerId, "playerId"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_Option.js
var Belt_Option_exports = {};
function keep2(opt, p) {
  if (opt !== void 0 && p(Primitive_option4.valFromOption(opt))) {
    return opt;
  }
}
function forEach3(opt, f) {
  if (opt !== void 0) {
    return f(Primitive_option4.valFromOption(opt));
  }
}
function getOrThrow3(x) {
  if (x !== void 0) {
    return Primitive_option4.valFromOption(x);
  }
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}
function mapWithDefault2(opt, $$default, f) {
  if (opt !== void 0) {
    return f(Primitive_option4.valFromOption(opt));
  } else {
    return $$default;
  }
}
function map3(opt, f) {
  if (opt !== void 0) {
    return Primitive_option4.some(f(Primitive_option4.valFromOption(opt)));
  }
}
function flatMap3(opt, f) {
  if (opt !== void 0) {
    return f(Primitive_option4.valFromOption(opt));
  }
}
function getWithDefault2(opt, $$default) {
  if (opt !== void 0) {
    return Primitive_option4.valFromOption(opt);
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
function eq2(a, b, f) {
  if (a !== void 0) {
    if (b !== void 0) {
      return f(Primitive_option4.valFromOption(a), Primitive_option4.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === void 0;
  }
}
function cmp2(a, b, f) {
  if (a !== void 0) {
    if (b !== void 0) {
      return f(Primitive_option4.valFromOption(a), Primitive_option4.valFromOption(b));
    } else {
      return 1;
    }
  } else if (b !== void 0) {
    return -1;
  } else {
    return 0;
  }
}
var Primitive_option4, keepU2, forEachU2, getExn3, mapWithDefaultU, mapU2, flatMapU2, eqU2, cmpU2;
var init_Belt_Option = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_Option.js"() {
    "use strict";
    Primitive_option4 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    keepU2 = keep2;
    forEachU2 = forEach3;
    getExn3 = getOrThrow3;
    mapWithDefaultU = mapWithDefault2;
    mapU2 = map3;
    flatMapU2 = flatMap3;
    eqU2 = eq2;
    cmpU2 = cmp2;
    exports.keepU = keepU2;
    exports.keep = keep2;
    exports.forEachU = forEachU2;
    exports.forEach = forEach3;
    exports.getExn = getExn3;
    exports.getOrThrow = getOrThrow3;
    exports.mapWithDefaultU = mapWithDefaultU;
    exports.mapWithDefault = mapWithDefault2;
    exports.mapU = mapU2;
    exports.map = map3;
    exports.flatMapU = flatMapU2;
    exports.flatMap = flatMap3;
    exports.getWithDefault = getWithDefault2;
    exports.orElse = orElse2;
    exports.isSome = isSome2;
    exports.isNone = isNone2;
    exports.eqU = eqU2;
    exports.eq = eq2;
    exports.cmpU = cmpU2;
    exports.cmp = cmp2;
  }
});

// src/PlayerDeathReason.js
var require_PlayerDeathReason = __commonJS({
  "src/PlayerDeathReason.js"(exports2) {
    "use strict";
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
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
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "reasonType");
      if (e.TAG !== "Ok") {
        return e;
      }
      let reasonType = BitFlags$TerrariaPacket.fromByte(e._0);
      let e$1;
      if (BitFlags$TerrariaPacket.flag1(reasonType)) {
        let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "killerPlayerId");
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
      if (BitFlags$TerrariaPacket.flag2(reasonType)) {
        let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "killerNpcId");
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
      if (BitFlags$TerrariaPacket.flag3(reasonType)) {
        let e$6 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "killerProjectileId");
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
      if (BitFlags$TerrariaPacket.flag4(reasonType)) {
        let e$8 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "typeOfDeathOther");
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
      if (BitFlags$TerrariaPacket.flag5(reasonType)) {
        let e$10 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileType");
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
      if (BitFlags$TerrariaPacket.flag6(reasonType)) {
        let e$12 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemType");
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
      if (BitFlags$TerrariaPacket.flag7(reasonType)) {
        let e$14 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "itemPrefix");
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
      if (BitFlags$TerrariaPacket.flag8(reasonType)) {
        let e$16 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "deathReason");
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
      let flags = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(self.killerPlayerId), Belt_Option.isSome(self.killerNpcId), Belt_Option.isSome(self.killerProjectileId), Belt_Option.isSome(self.typeOfDeathOther), Belt_Option.isSome(self.projectileType), Belt_Option.isSome(self.itemType), Belt_Option.isSome(self.itemPrefix), Belt_Option.isSome(self.deathReason));
      return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(flags), "reasonType");
    }
    function packKillerPlayerId(writer, self) {
      let killerPlayerId = self.killerPlayerId;
      if (killerPlayerId !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, killerPlayerId, "killerPlayerId");
      } else {
        return writer;
      }
    }
    function packKillerNpcId(writer, self) {
      let killerNpcId = self.killerNpcId;
      if (killerNpcId !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, killerNpcId, "killerNpcId");
      } else {
        return writer;
      }
    }
    function packKillerProjectileId(writer, self) {
      let killerProjectileId = self.killerProjectileId;
      if (killerProjectileId !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, killerProjectileId, "killerProjectileId");
      } else {
        return writer;
      }
    }
    function packTypeOfDeathOther(writer, self) {
      let typeOfDeathOther = self.typeOfDeathOther;
      if (typeOfDeathOther !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, otherToByte(typeOfDeathOther), "typeOfDeathOther");
      } else {
        return writer;
      }
    }
    function packProjectileType(writer, self) {
      let projectileType = self.projectileType;
      if (projectileType !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, projectileType, "projectileType");
      } else {
        return writer;
      }
    }
    function packItemType(writer, self) {
      let itemType = self.itemType;
      if (itemType !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, itemType, "itemType");
      } else {
        return writer;
      }
    }
    function packItemPrefix(writer, self) {
      let itemPrefix = self.itemPrefix;
      if (itemPrefix !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, itemPrefix, "itemPrefix");
      } else {
        return writer;
      }
    }
    function pack(writer, self) {
      let writer$1 = packItemPrefix(packItemType(packProjectileType(packTypeOfDeathOther(packKillerProjectileId(packKillerNpcId(packKillerPlayerId(packFlags(writer, self), self), self), self), self), self), self), self);
      let deathReason = self.deathReason;
      if (deathReason !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packString(writer$1, deathReason, "deathReason");
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = PlayerDeathReason$TerrariaPacket.readDeathReason(reader);
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "damage");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hitDirection");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "pvp");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(PlayerDeathReason$TerrariaPacket.packDeathReason(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerDeath")), self.playerId, "playerId"), self.deathReason), self.damage, "damage"), self.hitDirection, "hitDirection"), self.pvp ? 1 : 0, "pvp"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerDodge.js
var require_Packet_PlayerDodge = __commonJS({
  "src/packet/Packet_PlayerDodge.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
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
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "dodge");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerDodge")), self.playerId, "playerId"), dodgeToByte(self.dodge), "dodge"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
      toBuffer
    };
    exports2.dodgeFromByte = dodgeFromByte;
    exports2.dodgeToByte = dodgeToByte;
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerMana.js
var require_Packet_PlayerMana = __commonJS({
  "src/packet/Packet_PlayerMana.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "mana");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "maxMana");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerMana")), self.playerId, "playerId"), self.mana, "mana"), self.maxMana, "maxMana"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_PlayerTeam.js
var require_Packet_PlayerTeam = __commonJS({
  "src/packet/Packet_PlayerTeam.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "team");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerTeam")), self.playerId, "playerId"), self.team, "team"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_PvpToggle.js
var require_Packet_PvpToggle = __commonJS({
  "src/packet/Packet_PvpToggle.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "pvpEnabled");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PvpToggle")), self.playerId, "playerId"), self.pvpEnabled ? 1 : 0, "pvpEnabled"));
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "kind");
      if (e.TAG !== "Ok") {
        return e;
      }
      switch (e._0) {
        case 0:
          let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "shimmerX");
          if (e$1.TAG !== "Ok") {
            return e$1;
          }
          let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "shimmerY");
          if (e$2.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "ShimmerEffect",
                _0: e$1._0,
                _1: e$2._0
              }
            };
          } else {
            return e$2;
          }
        case 1:
          let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "coinLuckX");
          if (e$3.TAG !== "Ok") {
            return e$3;
          }
          let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "coinLuckY");
          if (e$4.TAG !== "Ok") {
            return e$4;
          }
          let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "coinLuckAmount");
          if (e$5.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "CoinLuck",
                _0: {
                  position: {
                    x: e$3._0,
                    y: e$4._0
                  },
                  amount: e$5._0
                }
              }
            };
          } else {
            return e$5;
          }
        case 2:
          let e$6 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "newShimmerEffectId");
          if (e$6.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: {
                TAG: "NewShimmerEffect",
                _0: e$6._0
              }
            };
          } else {
            return e$6;
          }
        default:
          return {
            TAG: "Error",
            _0: {
              context: "Packet_ShimmerEffectOrCoinLuck.parse",
              error: new Error("Unknown shimmer effect kind")
            }
          };
      }
    }
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parse
    };
    function toBuffer(self) {
      let writer = ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ShimmerEffectOrCoinLuck"));
      let tmp;
      switch (self.TAG) {
        case "ShimmerEffect":
          tmp = ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 0, "kind"), self._0, "shimmerX"), self._1, "shimmerY");
          break;
        case "CoinLuck":
          let match = self._0;
          let position = match.position;
          tmp = ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 1, "kind"), position.x, "coinLuckX"), position.y, "coinLuckY"), match.amount, "coinLuckAmount");
          break;
        case "NewShimmerEffect":
          tmp = ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 2, "kind"), self._0, "newShimmerEffectId");
          break;
      }
      return ErrorAwarePacketWriter$TerrariaPacket.data(tmp);
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_SignNew.js
var require_Packet_SignNew = __commonJS({
  "src/packet/Packet_SignNew.js"(exports2) {
    "use strict";
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "signId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "text");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags");
      if (e$5.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            signId: e._0,
            x: e$1._0,
            y: e$2._0,
            text: e$3._0,
            playerId: e$4._0,
            deleteSign: BitFlags$TerrariaPacket.flag1(BitFlags$TerrariaPacket.fromByte(e$5._0))
          }
        };
      } else {
        return e$5;
      }
    }
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readString: ErrorAwarePacketReader$TerrariaPacket.readString,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      let flags = BitFlags$TerrariaPacket.fromFlags(self.deleteSign, false, false, false, false, false, false, false);
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("SignNew")), self.signId, "signId"), self.x, "x"), self.y, "y"), self.text, "text"), self.playerId, "playerId"), BitFlags$TerrariaPacket.toByte(flags), "flags"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packString: ErrorAwarePacketWriter$TerrariaPacket.packString,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_SignRead.js
var require_Packet_SignRead = __commonJS({
  "src/packet/Packet_SignRead.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("SignRead")), self.x, "x"), self.y, "y"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_SmokePoof.js
var require_Packet_SmokePoof = __commonJS({
  "src/packet/Packet_SmokePoof.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readUInt32(reader, "packedPosition");
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
    var Decode = {
      readUInt32: ErrorAwarePacketReader$TerrariaPacket.readUInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("SmokePoof")), self.packedPosition, "packedPosition"));
    }
    var Encode = {
      packUInt32: ErrorAwarePacketWriter$TerrariaPacket.packUInt32,
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

// src/packet/Packet_SocialHandshake.js
var require_Packet_SocialHandshake = __commonJS({
  "src/packet/Packet_SocialHandshake.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    var Decode = {
      parse
    };
    function toBuffer(_self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("SocialHandshake")));
    }
    var Encode = {
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

// src/packet/Packet_Status.js
var require_Packet_Status = __commonJS({
  "src/packet/Packet_Status.js"(exports2) {
    "use strict";
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "max");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readNetworkText(reader, "text");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let flags = BitFlags$TerrariaPacket.fromByte(e$2._0);
      return {
        TAG: "Ok",
        _0: {
          max: e._0,
          text: e$1._0,
          flags: {
            hideStatusTextPercent: BitFlags$TerrariaPacket.flag1(flags),
            statusTextHasShadows: BitFlags$TerrariaPacket.flag2(flags),
            runCheckBytes: BitFlags$TerrariaPacket.flag3(flags)
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packNetworkText(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("Status")), self.max, "max"), self.text, "text"), flagsToByte(self.flags), "flags"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_SwitchHit.js
var require_Packet_SwitchHit = __commonJS({
  "src/packet/Packet_SwitchHit.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("SwitchHit")), self.x, "x"), self.y, "y"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Result.js
var Stdlib_Result_exports = {};
function getOrThrow4(x, message) {
  if (x.TAG === "Ok") {
    return x._0;
  } else {
    return Stdlib_JsError2.panic(message !== void 0 ? message : "Result.getOrThrow called for Error value");
  }
}
function mapOr2(opt, $$default, f) {
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
    return opt;
  }
}
function flatMap4(opt, f) {
  if (opt.TAG === "Ok") {
    return f(opt._0);
  } else {
    return opt;
  }
}
function getOr2(opt, $$default) {
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
function equal3(a, b, eqOk, eqError) {
  if (a.TAG === "Ok") {
    if (b.TAG === "Ok") {
      return eqOk(a._0, b._0);
    } else {
      return false;
    }
  } else if (b.TAG === "Ok") {
    return false;
  } else {
    return eqError(a._0, b._0);
  }
}
function compare4(a, b, cmpOk, cmpError) {
  if (a.TAG === "Ok") {
    if (b.TAG === "Ok") {
      return cmpOk(a._0, b._0);
    } else {
      return 1;
    }
  } else if (b.TAG === "Ok") {
    return -1;
  } else {
    return cmpError(a._0, b._0);
  }
}
function forEach4(r, f) {
  if (r.TAG === "Ok") {
    return f(r._0);
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
function all7(results) {
  let acc = [];
  let returnValue;
  let index = 0;
  while (returnValue === void 0 && index < results.length) {
    let err = results[index];
    if (err.TAG === "Ok") {
      acc.push(err._0);
      index = index + 1 | 0;
    } else {
      returnValue = err;
    }
  }
  ;
  let error = returnValue;
  if (error !== void 0) {
    return error;
  } else {
    return {
      TAG: "Ok",
      _0: acc
    };
  }
}
function all22(param) {
  let b = param[1];
  let a = param[0];
  if (a.TAG === "Ok") {
    if (b.TAG === "Ok") {
      return {
        TAG: "Ok",
        _0: [
          a._0,
          b._0
        ]
      };
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
function all32(param) {
  let c = param[2];
  let b = param[1];
  let a = param[0];
  if (a.TAG === "Ok") {
    if (b.TAG === "Ok") {
      if (c.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: [
            a._0,
            b._0,
            c._0
          ]
        };
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
function all42(param) {
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
function all52(param) {
  let e = param[4];
  let d = param[3];
  let c = param[2];
  let b = param[1];
  let a = param[0];
  if (a.TAG === "Ok") {
    if (b.TAG === "Ok") {
      if (c.TAG === "Ok") {
        if (d.TAG === "Ok") {
          if (e.TAG === "Ok") {
            return {
              TAG: "Ok",
              _0: [
                a._0,
                b._0,
                c._0,
                d._0,
                e._0
              ]
            };
          } else {
            return {
              TAG: "Error",
              _0: e._0
            };
          }
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
function all62(param) {
  let f = param[5];
  let e = param[4];
  let d = param[3];
  let c = param[2];
  let b = param[1];
  let a = param[0];
  if (a.TAG === "Ok") {
    if (b.TAG === "Ok") {
      if (c.TAG === "Ok") {
        if (d.TAG === "Ok") {
          if (e.TAG === "Ok") {
            if (f.TAG === "Ok") {
              return {
                TAG: "Ok",
                _0: [
                  a._0,
                  b._0,
                  c._0,
                  d._0,
                  e._0,
                  f._0
                ]
              };
            } else {
              return {
                TAG: "Error",
                _0: f._0
              };
            }
          } else {
            return {
              TAG: "Error",
              _0: e._0
            };
          }
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
async function mapOkAsync(res, f) {
  let value = await res;
  if (value.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: f(value._0)
    };
  } else {
    return {
      TAG: "Error",
      _0: value._0
    };
  }
}
async function mapErrorAsync(res, f) {
  let value = await res;
  if (value.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: value._0
    };
  } else {
    return {
      TAG: "Error",
      _0: f(value._0)
    };
  }
}
async function flatMapOkAsync(res, f) {
  let value = await res;
  if (value.TAG === "Ok") {
    return await f(value._0);
  } else {
    return {
      TAG: "Error",
      _0: value._0
    };
  }
}
async function flatMapErrorAsync(res, f) {
  let value = await res;
  if (value.TAG === "Ok") {
    return {
      TAG: "Ok",
      _0: value._0
    };
  } else {
    return await f(value._0);
  }
}
var Stdlib_JsError2, getExn4, mapWithDefault3, getWithDefault3;
var init_Stdlib_Result = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Result.js"() {
    "use strict";
    Stdlib_JsError2 = (init_Stdlib_JsError(), __toCommonJS(Stdlib_JsError_exports));
    getExn4 = getOrThrow4;
    mapWithDefault3 = mapOr2;
    getWithDefault3 = getOr2;
    exports.getExn = getExn4;
    exports.getOrThrow = getOrThrow4;
    exports.mapOr = mapOr2;
    exports.mapWithDefault = mapWithDefault3;
    exports.map = map4;
    exports.flatMap = flatMap4;
    exports.getOr = getOr2;
    exports.getWithDefault = getWithDefault3;
    exports.isOk = isOk;
    exports.isError = isError;
    exports.equal = equal3;
    exports.compare = compare4;
    exports.forEach = forEach4;
    exports.mapError = mapError;
    exports.all = all7;
    exports.all2 = all22;
    exports.all3 = all32;
    exports.all4 = all42;
    exports.all5 = all52;
    exports.all6 = all62;
    exports.mapOkAsync = mapOkAsync;
    exports.mapErrorAsync = mapErrorAsync;
    exports.flatMapOkAsync = flatMapOkAsync;
    exports.flatMapErrorAsync = flatMapErrorAsync;
  }
});

// src/packet/Packet_Teleport.js
var require_Packet_Teleport = __commonJS({
  "src/packet/Packet_Teleport.js"(exports2) {
    "use strict";
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
    var Stdlib_Result = (init_Stdlib_Result(), __toCommonJS(Stdlib_Result_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags");
      if (e.TAG !== "Ok") {
        return e;
      }
      let flags = BitFlags$TerrariaPacket.fromByte(e._0);
      let getPositionFromTarget = BitFlags$TerrariaPacket.flag3(flags);
      let match = BitFlags$TerrariaPacket.flag1(flags);
      let match$1 = BitFlags$TerrariaPacket.flag2(flags);
      let teleportType = match ? match$1 ? void 0 : "Npc" : match$1 ? "PlayerToPlayer" : "Player";
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "targetId");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "style");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = BitFlags$TerrariaPacket.flag4(flags) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "extraInfo"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (e$5.TAG === "Ok") {
        if (teleportType !== void 0) {
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
          return {
            TAG: "Error",
            _0: {
              context: "Packet_Teleport.parse",
              error: new Error("Invalid teleport type flags")
            }
          };
        }
      } else {
        return e$5;
      }
    }
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function getFlags(self) {
      return BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(self.teleportType === "Npc", self.teleportType === "PlayerToPlayer", self.getPositionFromTarget, Belt_Option.isSome(self.extraInfo), false, false, false, false));
    }
    function toBuffer(self) {
      let writer = ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("Teleport")), getFlags(self), "flags"), self.targetId, "targetId"), self.x, "x"), self.y, "y"), self.style, "style");
      let extraInfo = self.extraInfo;
      return ErrorAwarePacketWriter$TerrariaPacket.data(extraInfo !== void 0 ? ErrorAwarePacketWriter$TerrariaPacket.packInt32(writer, extraInfo, "extraInfo") : writer);
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packSingle: ErrorAwarePacketWriter$TerrariaPacket.packSingle,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
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
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "teleportType");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TeleportationPotion")), teleportTypeToInt(self.teleportType), "teleportType"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "typeId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "tileType");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TemporaryAnimationCreate")), self.typeId, "typeId"), self.tileType, "tileType"), self.x, "x"), self.y, "y"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
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

// src/packet/Packet_TileEntityDisplayDollItemSync.js
var require_Packet_TileEntityDisplayDollItemSync = __commonJS({
  "src/packet/Packet_TileEntityDisplayDollItemSync.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tileEntityId");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "itemIndex");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "itemId");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "stack");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileEntityDisplayDollItemSync")), self.playerId, "playerId"), self.tileEntityId, "tileEntityId"), self.itemIndex, "itemIndex"), self.itemId, "itemId"), self.stack, "stack"), self.prefix, "prefix"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
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

// src/packet/Packet_TileEntityHatRackItemSync.js
var require_Packet_TileEntityHatRackItemSync = __commonJS({
  "src/packet/Packet_TileEntityHatRackItemSync.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tileEntityId");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "itemIndex");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "itemId");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "stack");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileEntityHatRackItemSync")), self.playerId, "playerId"), self.tileEntityId, "tileEntityId"), self.itemIndex, "itemIndex"), self.itemId, "itemId"), self.stack, "stack"), self.prefix, "prefix"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
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

// src/packet/Packet_TileEntityInteractionRequest.js
var require_Packet_TileEntityInteractionRequest = __commonJS({
  "src/packet/Packet_TileEntityInteractionRequest.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tileEntityId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
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
    var Decode = {
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileEntityInteractionRequest")), self.tileEntityId, "tileEntityId"), self.playerId, "playerId"));
    }
    var Encode = {
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_TileEntityPlace.js
var require_Packet_TileEntityPlace = __commonJS({
  "src/packet/Packet_TileEntityPlace.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "tileEntityType");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileEntityPlace")), self.x, "x"), self.y, "y"), self.tileEntityType, "tileEntityType"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_TileEntityUpdate.js
var require_Packet_TileEntityUpdate = __commonJS({
  "src/packet/Packet_TileEntityUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tileEntityId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let tileEntityId = e._0;
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readBool(reader, "hasData");
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
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.getBytesLeft(reader);
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readBuffer(reader, e$2._0, "tileEntityData");
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
    var Decode = {
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readBool: ErrorAwarePacketReader$TerrariaPacket.readBool,
      getBytesLeft: ErrorAwarePacketReader$TerrariaPacket.getBytesLeft,
      readBuffer: ErrorAwarePacketReader$TerrariaPacket.readBuffer,
      parse
    };
    function toBuffer(self) {
      let writer = ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileEntityUpdate")), self.tileEntityId, "tileEntityId");
      let tileEntityData = self.payload;
      if (typeof tileEntityData !== "object") {
        return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packBool(writer, false, "hasData"));
      } else {
        return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packBuffer(ErrorAwarePacketWriter$TerrariaPacket.packBool(writer, true, "hasData"), tileEntityData._0, "tileEntityData"));
      }
    }
    var Encode = {
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packBool: ErrorAwarePacketWriter$TerrariaPacket.packBool,
      packBuffer: ErrorAwarePacketWriter$TerrariaPacket.packBuffer,
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

// src/packet/Packet_TileModify.js
var require_Packet_TileModify = __commonJS({
  "src/packet/Packet_TileModify.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
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
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "action");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "tileX");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "tileY");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "value1");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "value2");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let action = fromInt(e._0);
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileModify")), toInt(self.action), "action"), self.tileX, "tileX"), self.tileY, "tileY"), self.value1, "value1"), self.value2, "value2"));
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "color");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "coat");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TilePaint")), self.x, "x"), self.y, "y"), self.color, "color"), self.coat, "coat"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_TilePickingSync.js
var require_Packet_TilePickingSync = __commonJS({
  "src/packet/Packet_TilePickingSync.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "pickPower");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TilePickingSync")), self.playerId, "playerId"), self.x, "x"), self.y, "y"), self.pickPower, "pickPower"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_TileSectionFrame.js
var require_Packet_TileSectionFrame = __commonJS({
  "src/packet/Packet_TileSectionFrame.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "startX");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "startY");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "endX");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "endY");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TileSectionFrame")), self.startX, "startX"), self.startY, "startY"), self.endX, "endX"), self.endY, "endY"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_bool.js
var Primitive_bool_exports = {};
function compare5(x, y) {
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
    exports.compare = compare5;
    exports.min = min2;
    exports.max = max2;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_float.js
var Primitive_float_exports = {};
function compare6(x, y) {
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
    exports.compare = compare6;
    exports.min = min3;
    exports.max = max3;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_string.js
var Primitive_string_exports = {};
function compare7(s1, s2) {
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
function make3(n, ch) {
  return String.fromCodePoint(ch).repeat(n);
}
var init_Primitive_string = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_string.js"() {
    "use strict";
    exports.compare = compare7;
    exports.min = min4;
    exports.max = max4;
    exports.getChar = getChar;
    exports.make = make3;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Primitive_object.js
var Primitive_object_exports = {};
function updateDummy(prim0, prim1) {
  Object.assign(prim0, prim1);
}
function compare8(a, b) {
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
            let res = compare8(a[i], b[i]);
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
          let res$1 = compare8(a[i$1], b[i$1]);
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
          let res$2 = compare8(a[i$2], b[i$2]);
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
    if (!(!Object.prototype.hasOwnProperty.call(b2, key) || compare8(param[0][key], b2[key]) > 0)) {
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
function equal4(a, b) {
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
        if (!equal4(a[i], b[i])) {
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
        if (!Object.prototype.hasOwnProperty.call(a, key) || !equal4(b[key], a[key])) {
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
    return !equal4(a, b);
  }
}
function greaterequal(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a >= b;
  } else {
    return compare8(a, b) >= 0;
  }
}
function greaterthan(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a > b;
  } else {
    return compare8(a, b) > 0;
  }
}
function lessequal(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a <= b;
  } else {
    return compare8(a, b) <= 0;
  }
}
function lessthan(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a < b;
  } else {
    return compare8(a, b) < 0;
  }
}
function min5(x, y) {
  if (compare8(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}
function max5(x, y) {
  if (compare8(x, y) >= 0) {
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
    exports.compare = compare8;
    exports.equal = equal4;
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
function isSorted(a, cmp6) {
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
      if (cmp6(a[i], a[i + 1 | 0]) > 0) {
        return false;
      }
      _i = i + 1 | 0;
      continue;
    }
    ;
  }
}
function merge(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp6) {
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
    if (cmp6(s1, s2) <= 0) {
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
function union(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp6) {
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
    let c = cmp6(s1, s2);
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
function intersect(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp6) {
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
    let c = cmp6(s1, s2);
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
function diff(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp6) {
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
    let c = cmp6(s1, s2);
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
function insertionSort(src, srcofs, dst, dstofs, len, cmp6) {
  for (let i = 0; i < len; ++i) {
    let e = src[srcofs + i | 0];
    let j = (dstofs + i | 0) - 1 | 0;
    while (j >= dstofs && cmp6(dst[j], e) > 0) {
      dst[j + 1 | 0] = dst[j];
      j = j - 1 | 0;
    }
    ;
    dst[j + 1 | 0] = e;
  }
}
function sortTo(src, srcofs, dst, dstofs, len, cmp6) {
  if (len <= 5) {
    return insertionSort(src, srcofs, dst, dstofs, len, cmp6);
  }
  let l1 = len / 2 | 0;
  let l2 = len - l1 | 0;
  sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2, cmp6);
  sortTo(src, srcofs, src, srcofs + l2 | 0, l1, cmp6);
  merge(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs, cmp6);
}
function stableSortInPlaceBy(a, cmp6) {
  let l = a.length;
  if (l <= 5) {
    return insertionSort(a, 0, a, 0, l, cmp6);
  }
  let l1 = l / 2 | 0;
  let l2 = l - l1 | 0;
  let t = new Array(l2);
  sortTo(a, l1, t, 0, l2, cmp6);
  sortTo(a, 0, a, l2, l1, cmp6);
  merge(a, l2, l1, t, 0, l2, a, 0, cmp6);
}
function stableSortBy(a, cmp6) {
  let b = a.slice(0);
  stableSortInPlaceBy(b, cmp6);
  return b;
}
function binarySearchBy(sorted, key, cmp6) {
  let len = sorted.length;
  if (len === 0) {
    return -1;
  }
  let lo = sorted[0];
  let c = cmp6(key, lo);
  if (c < 0) {
    return -1;
  }
  let hi = sorted[len - 1 | 0];
  let c2 = cmp6(key, hi);
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
      let c$1 = cmp6(key, midVal);
      if (c$1 === 0) {
        return mid;
      }
      if (c$1 < 0) {
        if (hi$1 === mid) {
          if (cmp6(sorted[lo$1], key) === 0) {
            return lo$1;
          } else {
            return -(hi$1 + 1 | 0) | 0;
          }
        }
        _hi = mid;
        continue;
      }
      if (lo$1 === mid) {
        if (cmp6(sorted[hi$1], key) === 0) {
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
function isEmpty2(x) {
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
function map5(n, f) {
  if (n === void 0) {
    return;
  }
  let newLeft = map5(n.l, f);
  let newD = f(n.v);
  let newRight = map5(n.r, f);
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
function every3(_n, p) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return true;
    }
    if (!p(n.k, n.v)) {
      return false;
    }
    if (!every3(n.l, p)) {
      return false;
    }
    _n = n.r;
    continue;
  }
  ;
}
function some3(_n, p) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return false;
    }
    if (p(n.k, n.v)) {
      return true;
    }
    if (some3(n.l, p)) {
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
function concat2(t1, t2) {
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
    return concat2(t1, t2);
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
    return concat2(newLeft, newRight);
  }
}
function keepMap2(n, p) {
  if (n === void 0) {
    return;
  }
  let v = n.k;
  let d = n.v;
  let newLeft = keepMap2(n.l, p);
  let pvd = p(v, d);
  let newRight = keepMap2(n.r, p);
  if (pvd !== void 0) {
    return join(newLeft, v, Primitive_option5.valFromOption(pvd), newRight);
  } else {
    return concat2(newLeft, newRight);
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
      concat2(lf, rf)
    ];
  } else {
    return [
      concat2(lt, rt),
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
function size(n) {
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
function toArray(n) {
  if (n === void 0) {
    return [];
  }
  let size3 = lengthNode(n);
  let v = new Array(size3);
  fillArray(n, 0, v);
  return v;
}
function keysToArray(n) {
  if (n === void 0) {
    return [];
  }
  let size3 = lengthNode(n);
  let v = new Array(size3);
  fillArrayKey(n, 0, v);
  return v;
}
function valuesToArray(n) {
  if (n === void 0) {
    return [];
  }
  let size3 = lengthNode(n);
  let v = new Array(size3);
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
function cmp3(s1, s2, kcmp, vcmp) {
  let len1 = size(s1);
  let len2 = size(s2);
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
function eq3(s1, s2, kcmp, veq) {
  let len1 = size(s1);
  let len2 = size(s2);
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
function get2(_n, x, cmp6) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return;
    }
    let v = n.k;
    let c = cmp6(x, v);
    if (c === 0) {
      return Primitive_option5.some(n.v);
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  }
  ;
}
function getUndefined(_n, x, cmp6) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return;
    }
    let v = n.k;
    let c = cmp6(x, v);
    if (c === 0) {
      return n.v;
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  }
  ;
}
function getOrThrow5(_n, x, cmp6) {
  while (true) {
    let n = _n;
    if (n !== void 0) {
      let v = n.k;
      let c = cmp6(x, v);
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
function getWithDefault4(_n, x, def, cmp6) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return def;
    }
    let v = n.k;
    let c = cmp6(x, v);
    if (c === 0) {
      return n.v;
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  }
  ;
}
function has(_n, x, cmp6) {
  while (true) {
    let n = _n;
    if (n === void 0) {
      return false;
    }
    let v = n.k;
    let c = cmp6(x, v);
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
function updateMutate(t, x, data, cmp6) {
  if (t === void 0) {
    return singleton(x, data);
  }
  let k = t.k;
  let c = cmp6(x, k);
  if (c === 0) {
    t.v = data;
    return t;
  }
  let l = t.l;
  let r = t.r;
  if (c < 0) {
    let ll = updateMutate(l, x, data, cmp6);
    t.l = ll;
  } else {
    t.r = updateMutate(r, x, data, cmp6);
  }
  return balMutate(t);
}
function fromArray(xs, cmp6) {
  let len = xs.length;
  if (len === 0) {
    return;
  }
  let next = Belt_SortArray.strictlySortedLength(xs, (param, param$1) => cmp6(param[0], param$1[0]) < 0);
  let result;
  if (next >= 0) {
    result = fromSortedArrayAux(xs, 0, next);
  } else {
    next = -next | 0;
    result = fromSortedArrayRevAux(xs, next - 1 | 0, next);
  }
  for (let i = next; i < len; ++i) {
    let match = xs[i];
    result = updateMutate(result, match[0], match[1], cmp6);
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
var Primitive_int2, Belt_SortArray, Primitive_option5;
var init_Belt_internalAVLtree = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_internalAVLtree.js"() {
    "use strict";
    Primitive_int2 = (init_Primitive_int(), __toCommonJS(Primitive_int_exports));
    Belt_SortArray = (init_Belt_SortArray(), __toCommonJS(Belt_SortArray_exports));
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
    exports.isEmpty = isEmpty2;
    exports.stackAllLeft = stackAllLeft;
    exports.findFirstBy = findFirstBy;
    exports.forEach = forEach5;
    exports.map = map5;
    exports.mapWithKey = mapWithKey;
    exports.reduce = reduce3;
    exports.every = every3;
    exports.some = some3;
    exports.join = join;
    exports.concat = concat2;
    exports.concatOrJoin = concatOrJoin;
    exports.keepShared = keepShared;
    exports.keepMap = keepMap2;
    exports.partitionShared = partitionShared;
    exports.lengthNode = lengthNode;
    exports.size = size;
    exports.toList = toList;
    exports.checkInvariantInternal = checkInvariantInternal;
    exports.fillArray = fillArray;
    exports.toArray = toArray;
    exports.keysToArray = keysToArray;
    exports.valuesToArray = valuesToArray;
    exports.fromSortedArrayAux = fromSortedArrayAux;
    exports.fromSortedArrayRevAux = fromSortedArrayRevAux;
    exports.fromSortedArrayUnsafe = fromSortedArrayUnsafe;
    exports.cmp = cmp3;
    exports.eq = eq3;
    exports.get = get2;
    exports.getUndefined = getUndefined;
    exports.getWithDefault = getWithDefault4;
    exports.getOrThrow = getOrThrow5;
    exports.has = has;
    exports.fromArray = fromArray;
    exports.updateMutate = updateMutate;
    exports.balMutate = balMutate;
    exports.removeMinAuxWithRootMutate = removeMinAuxWithRootMutate;
  }
});

// node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_internalMapInt.js
var Belt_internalMapInt_exports = {};
function add(t, x, data) {
  if (t === void 0) {
    return Belt_internalAVLtree.singleton(x, data);
  }
  let k = t.k;
  if (x === k) {
    return Belt_internalAVLtree.updateValue(t, data);
  }
  let v = t.v;
  if (x < k) {
    return Belt_internalAVLtree.bal(add(t.l, x, data), k, v, t.r);
  } else {
    return Belt_internalAVLtree.bal(t.l, k, v, add(t.r, x, data));
  }
}
function get3(_n, x) {
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
function getOrThrow6(_n, x) {
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
function has2(_n, x) {
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
function splitAux(x, n) {
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
    let match = splitAux(x, l);
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
  let match$1 = splitAux(x, r);
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
function cmp4(s1, s2, cmp$1) {
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
function eqAux(_e1, _e2, eq6) {
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
    if (!(h1.k === h2.k && eq6(h1.v, h2.v))) {
      return false;
    }
    _e2 = Belt_internalAVLtree.stackAllLeft(h2.r, e2.tl);
    _e1 = Belt_internalAVLtree.stackAllLeft(h1.r, e1.tl);
    continue;
  }
  ;
}
function eq4(s1, s2, eq$1) {
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
function fromArray2(xs) {
  let len = xs.length;
  if (len === 0) {
    return;
  }
  let next = Belt_SortArray2.strictlySortedLength(xs, (param, param$1) => param[0] < param$1[0]);
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
var Primitive_int3, Belt_SortArray2, Primitive_option6, Belt_internalAVLtree, N, A, S, cmpU3, eqU3, mergeU;
var init_Belt_internalMapInt = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_internalMapInt.js"() {
    "use strict";
    Primitive_int3 = (init_Primitive_int(), __toCommonJS(Primitive_int_exports));
    Belt_SortArray2 = (init_Belt_SortArray(), __toCommonJS(Belt_SortArray_exports));
    Primitive_option6 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    Belt_internalAVLtree = (init_Belt_internalAVLtree(), __toCommonJS(Belt_internalAVLtree_exports));
    cmpU3 = cmp4;
    eqU3 = eq4;
    mergeU = merge2;
    exports.N = N;
    exports.A = A;
    exports.S = S;
    exports.add = add;
    exports.get = get3;
    exports.getUndefined = getUndefined2;
    exports.getOrThrow = getOrThrow6;
    exports.getWithDefault = getWithDefault5;
    exports.has = has2;
    exports.remove = remove;
    exports.splitAux = splitAux;
    exports.split = split;
    exports.merge = merge2;
    exports.compareAux = compareAux;
    exports.cmp = cmp4;
    exports.eqAux = eqAux;
    exports.eq = eq4;
    exports.addMutate = addMutate;
    exports.fromArray = fromArray2;
    exports.cmpU = cmpU3;
    exports.eqU = eqU3;
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
var Primitive_option7, Belt_internalMapInt, Belt_internalAVLtree2, empty, isEmpty3, has3, cmpU4, cmp5, eqU4, eq5, findFirstByU, findFirstBy2, forEachU3, forEach6, reduceU2, reduce4, everyU2, every4, someU2, some4, size2, toList2, toArray2, fromArray3, keysToArray2, valuesToArray2, minKey2, minKeyUndefined2, maxKey2, maxKeyUndefined2, minimum2, minUndefined2, maximum2, maxUndefined2, get4, getUndefined3, getWithDefault6, getExn5, getOrThrow7, checkInvariantInternal2, updateU, mergeU2, merge3, keepU3, keep3, partitionU2, partition2, split2, mapU3, map6, mapWithKeyU, mapWithKey2;
var init_Belt_MapInt = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Belt_MapInt.js"() {
    "use strict";
    Primitive_option7 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    Belt_internalMapInt = (init_Belt_internalMapInt(), __toCommonJS(Belt_internalMapInt_exports));
    Belt_internalAVLtree2 = (init_Belt_internalAVLtree(), __toCommonJS(Belt_internalAVLtree_exports));
    isEmpty3 = Belt_internalAVLtree2.isEmpty;
    has3 = Belt_internalMapInt.has;
    cmpU4 = Belt_internalMapInt.cmp;
    cmp5 = Belt_internalMapInt.cmp;
    eqU4 = Belt_internalMapInt.eq;
    eq5 = Belt_internalMapInt.eq;
    findFirstByU = Belt_internalAVLtree2.findFirstBy;
    findFirstBy2 = Belt_internalAVLtree2.findFirstBy;
    forEachU3 = Belt_internalAVLtree2.forEach;
    forEach6 = Belt_internalAVLtree2.forEach;
    reduceU2 = Belt_internalAVLtree2.reduce;
    reduce4 = Belt_internalAVLtree2.reduce;
    everyU2 = Belt_internalAVLtree2.every;
    every4 = Belt_internalAVLtree2.every;
    someU2 = Belt_internalAVLtree2.some;
    some4 = Belt_internalAVLtree2.some;
    size2 = Belt_internalAVLtree2.size;
    toList2 = Belt_internalAVLtree2.toList;
    toArray2 = Belt_internalAVLtree2.toArray;
    fromArray3 = Belt_internalMapInt.fromArray;
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
    get4 = Belt_internalMapInt.get;
    getUndefined3 = Belt_internalMapInt.getUndefined;
    getWithDefault6 = Belt_internalMapInt.getWithDefault;
    getExn5 = Belt_internalMapInt.getOrThrow;
    getOrThrow7 = Belt_internalMapInt.getOrThrow;
    checkInvariantInternal2 = Belt_internalAVLtree2.checkInvariantInternal;
    updateU = update;
    mergeU2 = Belt_internalMapInt.merge;
    merge3 = Belt_internalMapInt.merge;
    keepU3 = Belt_internalAVLtree2.keepShared;
    keep3 = Belt_internalAVLtree2.keepShared;
    partitionU2 = Belt_internalAVLtree2.partitionShared;
    partition2 = Belt_internalAVLtree2.partitionShared;
    split2 = Belt_internalMapInt.split;
    mapU3 = Belt_internalAVLtree2.map;
    map6 = Belt_internalAVLtree2.map;
    mapWithKeyU = Belt_internalAVLtree2.mapWithKey;
    mapWithKey2 = Belt_internalAVLtree2.mapWithKey;
    exports.empty = empty;
    exports.isEmpty = isEmpty3;
    exports.has = has3;
    exports.cmpU = cmpU4;
    exports.cmp = cmp5;
    exports.eqU = eqU4;
    exports.eq = eq5;
    exports.findFirstByU = findFirstByU;
    exports.findFirstBy = findFirstBy2;
    exports.forEachU = forEachU3;
    exports.forEach = forEach6;
    exports.reduceU = reduceU2;
    exports.reduce = reduce4;
    exports.everyU = everyU2;
    exports.every = every4;
    exports.someU = someU2;
    exports.some = some4;
    exports.size = size2;
    exports.toList = toList2;
    exports.toArray = toArray2;
    exports.fromArray = fromArray3;
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
    exports.get = get4;
    exports.getUndefined = getUndefined3;
    exports.getWithDefault = getWithDefault6;
    exports.getExn = getExn5;
    exports.getOrThrow = getOrThrow7;
    exports.checkInvariantInternal = checkInvariantInternal2;
    exports.remove = remove2;
    exports.removeMany = removeMany;
    exports.set = set2;
    exports.updateU = updateU;
    exports.update = update;
    exports.mergeU = mergeU2;
    exports.merge = merge3;
    exports.mergeMany = mergeMany;
    exports.keepU = keepU3;
    exports.keep = keep3;
    exports.partitionU = partitionU2;
    exports.partition = partition2;
    exports.split = split2;
    exports.mapU = mapU3;
    exports.map = map6;
    exports.mapWithKeyU = mapWithKeyU;
    exports.mapWithKey = mapWithKey2;
  }
});

// src/TileSolid.js
var require_TileSolid = __commonJS({
  "src/TileSolid.js"(exports2) {
    "use strict";
    var Belt_MapInt = (init_Belt_MapInt(), __toCommonJS(Belt_MapInt_exports));
    var map7 = Belt_MapInt.fromArray([
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
      return Belt_MapInt.getWithDefault(map7, tileType, false);
    }
    exports2.map = map7;
    exports2.isSolid = isSolid;
  }
});

// src/TileFrameImportant.js
var require_TileFrameImportant = __commonJS({
  "src/TileFrameImportant.js"(exports2) {
    "use strict";
    var Belt_MapInt = (init_Belt_MapInt(), __toCommonJS(Belt_MapInt_exports));
    var map7 = Belt_MapInt.fromArray([
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
      return Belt_MapInt.getWithDefault(map7, tileType, false);
    }
    exports2.map = map7;
    exports2.isImportant = isImportant;
  }
});

// src/ErrorAwareBufferReader.js
var require_ErrorAwareBufferReader = __commonJS({
  "src/ErrorAwareBufferReader.js"(exports2) {
    "use strict";
    var Primitive_exceptions2 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
    function readByteUnsafe(prim) {
      return prim.readByte();
    }
    function readInt16Unsafe(prim) {
      return prim.readInt16();
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
    function readBytesUnsafe(prim0, prim1) {
      return prim0.readBytes(prim1);
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
    function readBufferUnsafe(prim0, prim1) {
      return prim0.readBuffer(prim1);
    }
    function getBytesLeftUnsafe(prim) {
      return prim.bytesLeft;
    }
    var ReadError = /* @__PURE__ */ Primitive_exceptions2.create("ErrorAwareBufferReader-TerrariaPacket.ReadError");
    function withContext(fn, reader, context) {
      try {
        return {
          TAG: "Ok",
          _0: fn(reader)
        };
      } catch (raw_obj) {
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
    function readInt16(reader, context) {
      return withContext(readInt16Unsafe, reader, context);
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
    function getBytesLeft(reader) {
      return withContext(getBytesLeftUnsafe, reader, "getBytesLeft");
    }
    exports2.readByteUnsafe = readByteUnsafe;
    exports2.readInt16Unsafe = readInt16Unsafe;
    exports2.readInt32Unsafe = readInt32Unsafe;
    exports2.readUInt64Unsafe = readUInt64Unsafe;
    exports2.readStringUnsafe = readStringUnsafe;
    exports2.readBytesUnsafe = readBytesUnsafe;
    exports2.readSingleUnsafe = readSingleUnsafe;
    exports2.readSByteUnsafe = readSByteUnsafe;
    exports2.readColorUnsafe = readColorUnsafe;
    exports2.readBufferUnsafe = readBufferUnsafe;
    exports2.getBytesLeftUnsafe = getBytesLeftUnsafe;
    exports2.ReadError = ReadError;
    exports2.withContext = withContext;
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
    var Primitive_exceptions2 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
    var Belt_Array2 = (init_Belt_Array(), __toCommonJS(Belt_Array_exports));
    var Belt_Option = (init_Belt_Option(), __toCommonJS(Belt_Option_exports));
    var Stdlib_Result = (init_Stdlib_Result(), __toCommonJS(Stdlib_Result_exports));
    var Primitive_object = (init_Primitive_object(), __toCommonJS(Primitive_object_exports));
    var Primitive_exceptions2 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
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
      let e = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "id");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwareBufferReader$TerrariaPacket.readString(reader, "name");
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
      let e = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "id");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwareBufferReader$TerrariaPacket.readString(reader, "name");
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
      let e = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "npcSlotId");
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
      let e = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "netId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "stack");
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
      let e = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "checkType");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "on");
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
      let e = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "itemsFlags");
      if (e.TAG !== "Ok") {
        return e;
      }
      let itemsFlags = BitFlags$TerrariaPacket.fromByte(e._0);
      let e$1 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "dyeFlags");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let dyeFlags = BitFlags$TerrariaPacket.fromByte(e$1._0);
      let items = [];
      let dyes = [];
      let parseResult = {
        TAG: "Ok",
        _0: void 0
      };
      for (let i = 0; i <= 7; ++i) {
        let match = parseResult;
        if (match.TAG === "Ok") {
          if (BitFlags$TerrariaPacket.flagN(itemsFlags, i)) {
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
      for (let i$1 = 0; i$1 <= 7; ++i$1) {
        let match$1 = parseResult;
        if (match$1.TAG === "Ok") {
          if (BitFlags$TerrariaPacket.flagN(dyeFlags, i$1)) {
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
    function parseHatRackKind(reader) {
      let e = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "flags");
      if (e.TAG !== "Ok") {
        return e;
      }
      let flags = BitFlags$TerrariaPacket.fromByte(e._0);
      let items = [];
      let dyes = [];
      let parseResult = {
        TAG: "Ok",
        _0: void 0
      };
      for (let i = 0; i <= 1; ++i) {
        let match = parseResult;
        if (match.TAG === "Ok") {
          if (BitFlags$TerrariaPacket.flagN(flags, i)) {
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
          if (BitFlags$TerrariaPacket.flagN(flags, i$1 + 2 | 0)) {
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
    function parse$2(reader) {
      let e = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "entityType");
      if (e.TAG !== "Ok") {
        return e;
      }
      let entityType = e._0;
      let e$1 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3;
      switch (entityType) {
        case 0:
          e$3 = Stdlib_Result.map(parseTrainingDummyKind(reader), (v) => ({
            TAG: "TrainingDummy",
            _0: v
          }));
          break;
        case 1:
          e$3 = Stdlib_Result.map(parseDisplayItem(reader), (v) => ({
            TAG: "ItemFrame",
            _0: v
          }));
          break;
        case 2:
          e$3 = Stdlib_Result.map(parseLogicSensorKind(reader), (v) => ({
            TAG: "LogicSensor",
            _0: v
          }));
          break;
        case 3:
          e$3 = Stdlib_Result.map(parseDisplayDollKind(reader), (v) => ({
            TAG: "DisplayDoll",
            _0: v
          }));
          break;
        case 4:
          e$3 = Stdlib_Result.map(parseDisplayItem(reader), (v) => ({
            TAG: "WeaponsRack",
            _0: v
          }));
          break;
        case 5:
          e$3 = Stdlib_Result.map(parseHatRackKind(reader), (v) => ({
            TAG: "HatRack",
            _0: v
          }));
          break;
        case 6:
          e$3 = Stdlib_Result.map(parseDisplayItem(reader), (v) => ({
            TAG: "FoodPlatter",
            _0: v
          }));
          break;
        case 7:
          e$3 = {
            TAG: "Ok",
            _0: {
              TAG: "TeleportationPylon",
              _0: void 0
            }
          };
          break;
        default:
          e$3 = {
            TAG: "Error",
            _0: {
              context: "Entity.parse",
              error: new Error("Unknown entity kind: " + String(entityType))
            }
          };
      }
      if (e$3.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            entityType,
            x: e$1._0,
            y: e$2._0,
            entityKind: e$3._0
          }
        };
      } else {
        return e$3;
      }
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
      return Belt_Option.isSome(Belt_Option.flatMap(Belt_Array2.get(arr, n), (a) => a));
    }
    function packDisplayDoll(writer, displayDollKind) {
      let itemFlags = BitFlags$TerrariaPacket.fromFlags(hasItem(displayDollKind.items, 0), hasItem(displayDollKind.items, 1), hasItem(displayDollKind.items, 2), hasItem(displayDollKind.items, 3), hasItem(displayDollKind.items, 4), hasItem(displayDollKind.items, 5), hasItem(displayDollKind.items, 6), hasItem(displayDollKind.items, 7));
      let dyeFlags = BitFlags$TerrariaPacket.fromFlags(hasItem(displayDollKind.dyes, 0), hasItem(displayDollKind.dyes, 1), hasItem(displayDollKind.dyes, 2), hasItem(displayDollKind.dyes, 3), hasItem(displayDollKind.dyes, 4), hasItem(displayDollKind.dyes, 5), hasItem(displayDollKind.dyes, 6), hasItem(displayDollKind.dyes, 7));
      ErrorAwareBufferWriter$TerrariaPacket.packByte(ErrorAwareBufferWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(itemFlags), "itemFlags"), BitFlags$TerrariaPacket.toByte(dyeFlags), "dyeFlags");
      for (let i = 0; i <= 7; ++i) {
        let item = Belt_Option.flatMap(Belt_Array2.get(displayDollKind.items, i), (a) => a);
        if (item !== void 0) {
          packDisplayItem(writer, item);
        }
      }
      for (let i$1 = 0; i$1 <= 7; ++i$1) {
        let item$1 = Belt_Option.flatMap(Belt_Array2.get(displayDollKind.dyes, i$1), (a) => a);
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
        let item = Belt_Option.flatMap(Belt_Array2.get(hatRackKind.items, i), (a) => a);
        if (item !== void 0) {
          packDisplayItem(writer, item);
        }
      }
      for (let i$1 = 0; i$1 <= 1; ++i$1) {
        let item$1 = Belt_Option.flatMap(Belt_Array2.get(hatRackKind.dyes, i$1), (a) => a);
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
    function parse$3(payload) {
      let packetReader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.getBytesLeft(packetReader);
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readBuffer(packetReader, e._0, "deflatedPayload");
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
      let reader = new Bufferreader(inflated._0);
      let e$2 = ErrorAwareBufferReader$TerrariaPacket.readInt32(reader, "tileX");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwareBufferReader$TerrariaPacket.readInt32(reader, "tileY");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "width");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let width = e$4._0;
      let e$5 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "height");
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
        let e2 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header5");
        if (e2.TAG !== "Ok") {
          return e2;
        }
        let header5 = BitFlags$TerrariaPacket.fromByte(e2._0);
        let e$12;
        if (BitFlags$TerrariaPacket.flag1(header5)) {
          let e$22 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header4_conditional");
          if (e$22.TAG === "Ok") {
            let header4 = BitFlags$TerrariaPacket.fromByte(e$22._0);
            let e$32;
            if (BitFlags$TerrariaPacket.flag1(header4)) {
              let e$42 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header3_conditional");
              if (e$42.TAG === "Ok") {
                let header3 = BitFlags$TerrariaPacket.fromByte(e$42._0);
                let e$52 = BitFlags$TerrariaPacket.flag1(header3) ? ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "header2_conditional") : {
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
                  BitFlags$TerrariaPacket.fromByte(0),
                  0
                ]
              };
            }
            if (e$32.TAG === "Ok") {
              let match = e$32._0;
              e$12 = {
                TAG: "Ok",
                _0: [
                  header4,
                  match[0],
                  match[1]
                ]
              };
            } else {
              e$12 = e$32;
            }
          } else {
            e$12 = e$22;
          }
        } else {
          e$12 = {
            TAG: "Ok",
            _0: [
              BitFlags$TerrariaPacket.fromByte(0),
              BitFlags$TerrariaPacket.fromByte(0),
              0
            ]
          };
        }
        if (e$12.TAG !== "Ok") {
          return e$12;
        }
        let match$1 = e$12._0;
        let header3$1 = match$1[1];
        let header4$1 = match$1[0];
        tileCache.coatHeader = match$1[2];
        let oldActive = tileCache.activeTile;
        let e$62;
        if (BitFlags$TerrariaPacket.flag2(header5)) {
          let oldType = Belt_Option.mapWithDefault(tileCache.activeTile, 0, (active) => active.tileType);
          let e$72;
          if (BitFlags$TerrariaPacket.flag6(header5)) {
            let e$82 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "tileType_byte1");
            if (e$82.TAG === "Ok") {
              let e$92 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "tileType_byte2");
              e$72 = e$92.TAG === "Ok" ? {
                TAG: "Ok",
                _0: e$92._0 << 8 | e$82._0
              } : e$92;
            } else {
              e$72 = e$82;
            }
          } else {
            e$72 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "tileType");
          }
          if (e$72.TAG === "Ok") {
            let tileType = e$72._0;
            let e$102;
            if (TileFrameImportant$TerrariaPacket.isImportant(tileType)) {
              let e$112 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "frameX");
              if (e$112.TAG === "Ok") {
                let e$122 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "frameY");
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
              e$102 = Belt_Option.isSome(oldActive) && tileType === oldType ? {
                TAG: "Ok",
                _0: oldActive.frame
              } : {
                TAG: "Ok",
                _0: void 0
              };
            }
            if (e$102.TAG === "Ok") {
              let e$13;
              if (BitFlags$TerrariaPacket.flag4(header3$1)) {
                let e$14 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "color");
                if (e$14.TAG === "Ok") {
                  tileCache.color = e$14._0;
                  e$13 = {
                    TAG: "Ok",
                    _0: void 0
                  };
                } else {
                  e$13 = e$14;
                }
              } else {
                e$13 = {
                  TAG: "Ok",
                  _0: void 0
                };
              }
              if (e$13.TAG === "Ok") {
                tileCache.activeTile = {
                  tileType,
                  frame: e$102._0
                };
                e$62 = {
                  TAG: "Ok",
                  _0: void 0
                };
              } else {
                e$62 = e$13;
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
        let e$15;
        if (BitFlags$TerrariaPacket.flag3(header5)) {
          let e$16 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "wall");
          if (e$16.TAG === "Ok") {
            tileCache.wall = e$16._0;
            if (BitFlags$TerrariaPacket.flag5(header3$1)) {
              let e$17 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "wallColor");
              if (e$17.TAG === "Ok") {
                tileCache.wallColor = e$17._0;
                e$15 = {
                  TAG: "Ok",
                  _0: void 0
                };
              } else {
                e$15 = e$17;
              }
            } else {
              e$15 = {
                TAG: "Ok",
                _0: void 0
              };
            }
          } else {
            e$15 = e$16;
          }
        } else {
          e$15 = {
            TAG: "Ok",
            _0: void 0
          };
        }
        if (e$15.TAG !== "Ok") {
          return e$15;
        }
        let liquidBits = (BitFlags$TerrariaPacket.toByte(header5) & 24) >> 3;
        let e$18;
        if (liquidBits !== 0) {
          let e$19 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "liquidValue");
          if (e$19.TAG === "Ok") {
            tileCache.liquid = e$19._0;
            if (liquidBits > 1) {
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
        let e$20;
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
          let e$21;
          if (BitFlags$TerrariaPacket.flag7(header3$1)) {
            let e$22 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "wall_highByte");
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
        let repeatCountBytes = (BitFlags$TerrariaPacket.toByte(header5) & 192) >> 6;
        let e$23;
        if (repeatCountBytes !== 0) {
          if (repeatCountBytes !== 1) {
            let e$24 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "rle_int16");
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
            let e$25 = ErrorAwareBufferReader$TerrariaPacket.readByte(reader, "rle_byte");
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
      let e$6 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "chestCount");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = readRepeated(e$6._0, () => parse(reader));
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let e$8 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "signCount");
      if (e$8.TAG !== "Ok") {
        return e$8;
      }
      let e$9 = readRepeated(e$8._0, () => parse$1(reader));
      if (e$9.TAG !== "Ok") {
        return e$9;
      }
      let e$10 = ErrorAwareBufferReader$TerrariaPacket.readInt16(reader, "entityCount");
      if (e$10.TAG !== "Ok") {
        return e$10;
      }
      let e$11 = readRepeated(e$10._0, () => parse$2(reader));
      if (e$11.TAG === "Ok") {
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
            entities: e$11._0
          }
        };
      } else {
        return e$11;
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
      readRepeated,
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
      let last2 = lastTile.contents;
      if (last2 !== void 0) {
        if (Primitive_object.equal(tile, last2.tile)) {
          last2.count = last2.count + 1 | 0;
        } else {
          packTile(writer, last2.tile, last2.count);
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
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "tileX");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "tileY");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "width");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let width = e$2._0;
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "height");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let height = e$3._0;
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "changeType");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let readTile = () => {
        let e2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags1");
        if (e2.TAG !== "Ok") {
          return e2;
        }
        let flags1 = BitFlags$TerrariaPacket.fromByte(e2._0);
        let e$12 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags2");
        if (e$12.TAG !== "Ok") {
          return e$12;
        }
        let flags2 = BitFlags$TerrariaPacket.fromByte(e$12._0);
        let e$22 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags3");
        if (e$22.TAG !== "Ok") {
          return e$22;
        }
        let active = BitFlags$TerrariaPacket.flag1(flags1);
        let hasWall = BitFlags$TerrariaPacket.flag3(flags1);
        let hasLiquid = BitFlags$TerrariaPacket.flag4(flags1);
        let wire = BitFlags$TerrariaPacket.flag5(flags1);
        let halfBrick = BitFlags$TerrariaPacket.flag6(flags1);
        let actuator = BitFlags$TerrariaPacket.flag7(flags1);
        let inActive = BitFlags$TerrariaPacket.flag8(flags1);
        let wire2 = BitFlags$TerrariaPacket.flag1(flags2);
        let wire3 = BitFlags$TerrariaPacket.flag2(flags2);
        let e$32;
        if (BitFlags$TerrariaPacket.flag3(flags2)) {
          let e$42 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "color");
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
        if (BitFlags$TerrariaPacket.flag4(flags2)) {
          let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "wallColor");
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
          let e$8 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "tileType");
          if (e$8.TAG === "Ok") {
            let tileType = e$8._0;
            let e$9;
            if (TileFrameImportant$TerrariaPacket.isImportant(tileType)) {
              let e$10 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "frameX");
              if (e$10.TAG === "Ok") {
                let e$11 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "frameY");
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
              let slope = ((0 + (BitFlags$TerrariaPacket.flag5(flags2) ? 1 : 0) | 0) + (BitFlags$TerrariaPacket.flag6(flags2) ? 2 : 0) | 0) + (BitFlags$TerrariaPacket.flag7(flags2) ? 4 : 0) | 0;
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
          let e$13 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "wall");
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
          let e$15 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidValue");
          if (e$15.TAG === "Ok") {
            let e$16 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidType");
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
        let wire4 = BitFlags$TerrariaPacket.flag8(flags2);
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "dayTime");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "time");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "sunModY");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "moonModY");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TimeSet")), self.dayTime ? 1 : 0, "dayTime"), self.time, "time"), self.sunModY, "sunModY"), self.moonModY, "moonModY"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_TravellingMerchantInventory.js
var require_Packet_TravellingMerchantInventory = __commonJS({
  "src/packet/Packet_TravellingMerchantInventory.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let items = [];
      let readItems = (_idx) => {
        while (true) {
          let idx = _idx;
          if (idx >= 40) {
            return {
              TAG: "Ok",
              _0: void 0
            };
          }
          let e2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, `item` + (idx + 1 | 0).toString());
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
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
        _writer = ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer$1, items[idx], `item` + (idx + 1 | 0).toString());
        continue;
      }
      ;
    }
    function toBuffer(self) {
      if (self.items.length !== 40) {
        return {
          TAG: "Error",
          _0: {
            context: "Packet_TravellingMerchantInventory.toBuffer",
            error: new Error("Expected 40 items")
          }
        };
      }
      let writer = ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TravellingMerchantInventory"));
      return ErrorAwarePacketWriter$TerrariaPacket.data(packItems(writer, self.items));
    }
    var Encode = {
      Writer: void 0,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
      packItems,
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "action");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "style");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "treeType");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("TreeGrowFx")), self.action, "action"), self.x, "x"), self.y, "y"), self.style, "style"), self.treeType, "treeType"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_Unused.js
var require_Packet_Unused = __commonJS({
  "src/packet/Packet_Unused.js"(exports2) {
    "use strict";
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_WallPaint.js
var require_Packet_WallPaint = __commonJS({
  "src/packet/Packet_WallPaint.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "color");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "coat");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("WallPaint")), self.x, "x"), self.y, "y"), self.color, "color"), self.coat, "coat"));
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("WeaponsRackTryPlacing")), self.x, "x"), self.y, "y"), self.itemId, "itemId"), self.prefix, "prefix"), self.stack, "stack"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_WiredCannonShot.js
var require_Packet_WiredCannonShot = __commonJS({
  "src/packet/Packet_WiredCannonShot.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "damage");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "knockback");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "angle");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "ammo");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("WiredCannonShot")), self.damage, "damage"), self.knockback, "knockback"), self.x, "x"), self.y, "y"), self.angle, "angle"), self.ammo, "ammo"), self.playerId, "playerId"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packSingle: ErrorAwarePacketWriter$TerrariaPacket.packSingle,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_WorldDataRequest.js
var require_Packet_WorldDataRequest = __commonJS({
  "src/packet/Packet_WorldDataRequest.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ManagedPacketWriter$PacketFactory = require_ManagedPacketWriter();
    var Packetwriter = require_packetwriter().default;
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    var Decode = {
      parse
    };
    function data(prim) {
      return prim.data;
    }
    function toBuffer(_self) {
      return {
        TAG: "Ok",
        _0: ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("WorldDataRequest")).data
      };
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "zone1");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "zone2");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "zone3");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "zone4");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "zone5");
      if (e$5.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            playerId: e._0,
            zone1: e$1._0,
            zone2: e$2._0,
            zone3: e$3._0,
            zone4: e$4._0,
            zone5: e$5._0
          }
        };
      } else {
        return e$5;
      }
    }
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("Zones")), self.playerId, "playerId"), self.zone1, "zone1"), self.zone2, "zone2"), self.zone3, "zone3"), self.zone4, "zone4"), self.zone5, "zone5"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_PlayerSlotSet.js
var require_Packet_PlayerSlotSet = __commonJS({
  "src/packet/Packet_PlayerSlotSet.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerSlotId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "serverWantsToRunCheckBytesInClientLoopThread");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerSlotSet")), self.playerSlotId, "playerSlotId"), self.serverWantsToRunCheckBytesInClientLoopThread ? 1 : 0, "serverWantsToRunCheckBytesInClientLoopThread"));
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
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "controlFlags");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let controlFlags = BitFlags$TerrariaPacket.fromByte(e$1._0);
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "miscFlags1");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let miscFlags1 = BitFlags$TerrariaPacket.fromByte(e$2._0);
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "miscFlags2");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let miscFlags2 = BitFlags$TerrariaPacket.fromByte(e$3._0);
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "miscFlags3");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let miscFlags3 = BitFlags$TerrariaPacket.fromByte(e$4._0);
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
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "selectedItem");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionX");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionY");
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
      if (BitFlags$TerrariaPacket.flag3(miscFlags1)) {
        let e$9 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityX");
        if (e$9.TAG === "Ok") {
          let e$10 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityY");
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
      if (BitFlags$TerrariaPacket.flag7(miscFlags2)) {
        let e$12 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnOrigX");
        if (e$12.TAG === "Ok") {
          let e$13 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnOrigY");
          if (e$13.TAG === "Ok") {
            let e$14 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnHomeX");
            if (e$14.TAG === "Ok") {
              let e$15 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "potionOfReturnHomeY");
              e$11 = e$15.TAG === "Ok" ? {
                TAG: "Ok",
                _0: {
                  originalUsePosition: {
                    x: e$12._0,
                    y: e$13._0
                  },
                  homePosition: {
                    x: e$14._0,
                    y: e$15._0
                  }
                }
              } : e$15;
            } else {
              e$11 = e$14;
            }
          } else {
            e$11 = e$13;
          }
        } else {
          e$11 = e$12;
        }
      } else {
        e$11 = {
          TAG: "Ok",
          _0: void 0
        };
      }
      if (e$11.TAG !== "Ok") {
        return e$11;
      }
      let tryKeepingHoveringUp = BitFlags$TerrariaPacket.flag1(miscFlags2);
      let isVoidVaultEnabled = BitFlags$TerrariaPacket.flag2(miscFlags2);
      let isSitting = BitFlags$TerrariaPacket.flag3(miscFlags2);
      let hasFinishedAnyDd2Event = BitFlags$TerrariaPacket.flag4(miscFlags2);
      let isPettingAnimal = BitFlags$TerrariaPacket.flag5(miscFlags2);
      let isTheAnimalBeingPetSmall = BitFlags$TerrariaPacket.flag6(miscFlags2);
      let tryKeepingHoveringDown = BitFlags$TerrariaPacket.flag8(miscFlags2);
      let isSleeping = BitFlags$TerrariaPacket.flag1(miscFlags3);
      return {
        TAG: "Ok",
        _0: {
          playerId: e._0,
          control,
          direction,
          pulleyDirection,
          vortexStealthActive,
          gravityDirection,
          shouldGuard,
          ghost,
          selectedItem: e$5._0,
          position,
          velocity: e$8._0,
          potionOfReturn: e$11._0,
          tryKeepingHoveringUp,
          isVoidVaultEnabled,
          isSitting,
          hasFinishedAnyDd2Event,
          isPettingAnimal,
          isTheAnimalBeingPetSmall,
          tryKeepingHoveringDown,
          isSleeping
        }
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
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "skinVariant");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hair");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "name");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hairDye");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hideVisuals");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hideVisuals2");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hideMisc");
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let e$8 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "hairColor");
      if (e$8.TAG !== "Ok") {
        return e$8;
      }
      let e$9 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "skinColor");
      if (e$9.TAG !== "Ok") {
        return e$9;
      }
      let e$10 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "eyeColor");
      if (e$10.TAG !== "Ok") {
        return e$10;
      }
      let e$11 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "shirtColor");
      if (e$11.TAG !== "Ok") {
        return e$11;
      }
      let e$12 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "underShirtColor");
      if (e$12.TAG !== "Ok") {
        return e$12;
      }
      let e$13 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "pantsColor");
      if (e$13.TAG !== "Ok") {
        return e$13;
      }
      let e$14 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "shoeColor");
      if (e$14.TAG !== "Ok") {
        return e$14;
      }
      let e$15 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "difficultyFlags");
      if (e$15.TAG !== "Ok") {
        return e$15;
      }
      let difficultyFlags = BitFlags$TerrariaPacket.fromByte(e$15._0);
      let e$16 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "torchFlags");
      if (e$16.TAG !== "Ok") {
        return e$16;
      }
      let torchFlags = BitFlags$TerrariaPacket.fromByte(e$16._0);
      let difficulty = getDifficulty(difficultyFlags);
      let extraAccessory = BitFlags$TerrariaPacket.flag3(difficultyFlags);
      let mode = BitFlags$TerrariaPacket.flag4(difficultyFlags) ? "Journey" : "Classic";
      let usingBiomeTorches = BitFlags$TerrariaPacket.flag1(torchFlags);
      let happyFunTorchTime = BitFlags$TerrariaPacket.flag2(torchFlags);
      let unlockedBiomeTorches = BitFlags$TerrariaPacket.flag3(torchFlags);
      let unlockedSuperCart = BitFlags$TerrariaPacket.flag4(torchFlags);
      let enabledSuperCart = BitFlags$TerrariaPacket.flag5(torchFlags);
      let e$17 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "usedFlags");
      let e$18;
      e$18 = e$17.TAG === "Ok" ? {
        TAG: "Ok",
        _0: BitFlags$TerrariaPacket.fromByte(e$17._0)
      } : e$17;
      if (e$18.TAG !== "Ok") {
        return e$18;
      }
      let usedFlags = e$18._0;
      let usedAegisCrystal = BitFlags$TerrariaPacket.flag1(usedFlags);
      let usedAegisFruit = BitFlags$TerrariaPacket.flag2(usedFlags);
      let usedArcaneCrystal = BitFlags$TerrariaPacket.flag3(usedFlags);
      let usedGalaxyPearl = BitFlags$TerrariaPacket.flag4(usedFlags);
      let usedGummyWorm = BitFlags$TerrariaPacket.flag5(usedFlags);
      let usedAmbrosia = BitFlags$TerrariaPacket.flag6(usedFlags);
      let ateArtisanBread = BitFlags$TerrariaPacket.flag7(usedFlags);
      return {
        TAG: "Ok",
        _0: {
          playerId: e._0,
          skinVariant: e$1._0,
          hair: e$2._0,
          name: e$3._0,
          hairDye: e$4._0,
          hideVisuals: e$5._0,
          hideVisuals2: e$6._0,
          hideMisc: e$7._0,
          hairColor: e$8._0,
          skinColor: e$9._0,
          eyeColor: e$10._0,
          shirtColor: e$11._0,
          underShirtColor: e$12._0,
          pantsColor: e$13._0,
          shoeColor: e$14._0,
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "timeRemaining");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "numberOfDeathsPve");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "numberOfDeathsPvp");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "context");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let context;
      switch (e$6._0) {
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
          TAG: "Ok",
          _0: {
            playerId: e._0,
            x: e$1._0,
            y: e$2._0,
            timeRemaining: e$3._0,
            numberOfDeathsPve: e$4._0,
            numberOfDeathsPvp: e$5._0,
            context
          }
        };
      } else {
        return {
          TAG: "Error",
          _0: {
            context: "PlayerSpawn.parse.context",
            error: new Error("Unknown context")
          }
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
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerSpawn")), self.playerId, "playerId"), self.x, "x"), self.y, "y"), self.timeRemaining, "timeRemaining"), self.numberOfDeathsPve, "numberOfDeathsPve"), self.numberOfDeathsPvp, "numberOfDeathsPvp"), tmp, "context"));
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "slot");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
      if (e$4.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            playerId: e._0,
            slot: e$1._0,
            stack: e$2._0,
            prefix: e$3._0,
            itemId: e$4._0
          }
        };
      } else {
        return e$4;
      }
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerInventorySlot")), self.playerId, "playerId"), self.slot, "slot"), self.stack, "stack"), self.prefix, "prefix"), self.itemId, "itemId"));
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "health");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "maxHealth");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerHealth")), self.playerId, "playerId"), self.health, "health"), self.maxHealth, "maxHealth"));
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "uuid");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ClientUuid")), self.uuid, "uuid"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ProjectileSync.js
var require_Packet_ProjectileSync = __commonJS({
  "src/packet/Packet_ProjectileSync.js"(exports2) {
    "use strict";
    var Stdlib_Option = (init_Stdlib_Option(), __toCommonJS(Stdlib_Option_exports));
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "owner");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileType");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags");
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let flags = BitFlags$TerrariaPacket.fromByte(e$7._0);
      let e$8;
      if (BitFlags$TerrariaPacket.flag3(flags)) {
        let e$9 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags2");
        e$8 = e$9.TAG === "Ok" ? {
          TAG: "Ok",
          _0: Primitive_option8.some(BitFlags$TerrariaPacket.fromByte(e$9._0))
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
      if (BitFlags$TerrariaPacket.flag1(flags)) {
        let e$11 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai0");
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
      if (BitFlags$TerrariaPacket.flag2(flags)) {
        let e$13 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai1");
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
      if (BitFlags$TerrariaPacket.flag4(flags)) {
        let e$15 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "bannerIdToRespondTo");
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
      if (BitFlags$TerrariaPacket.flag5(flags)) {
        let e$17 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "damage");
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
      if (BitFlags$TerrariaPacket.flag6(flags)) {
        let e$19 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "knockback");
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
      if (BitFlags$TerrariaPacket.flag7(flags)) {
        let e$21 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "originalDamage");
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
      if (BitFlags$TerrariaPacket.flag8(flags)) {
        let e$23 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileUuid");
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
      if (flags2 !== void 0 && BitFlags$TerrariaPacket.flag1(Primitive_option8.valFromOption(flags2))) {
        let e$25 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai2");
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
      let bitFlags2 = BitFlags$TerrariaPacket.fromFlags(Stdlib_Option.isSome(ai2), false, false, false, false, false, false, false);
      let bannerIdToRespondTo = self.bannerIdToRespondTo;
      let bitFlags = BitFlags$TerrariaPacket.fromFlags(Stdlib_Option.isSome(ai0), Stdlib_Option.isSome(ai1), BitFlags$TerrariaPacket.toByte(bitFlags2) !== 0, bannerIdToRespondTo !== void 0 ? bannerIdToRespondTo !== 0 : false, Stdlib_Option.isSome(self.damage), Stdlib_Option.isSome(self.knockback), Stdlib_Option.isSome(self.originalDamage), Stdlib_Option.isSome(self.projectileUuid));
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function readDamageFlags(reader) {
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "damageFlags");
      if (e.TAG !== "Ok") {
        return e;
      }
      let flags = BitFlags$TerrariaPacket.fromByte(e._0);
      return {
        TAG: "Ok",
        _0: {
          critical: BitFlags$TerrariaPacket.flag1(flags),
          pvp: BitFlags$TerrariaPacket.flag2(flags)
        }
      };
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "target");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = PlayerDeathReason$TerrariaPacket.readDeathReason(reader);
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "damage");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hitDirection");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = readDamageFlags(reader);
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let damageFlags = e$4._0;
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "cooldownCounter");
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
    function toBuffer(self) {
      let damageFlags = (self2) => BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(self2.critical, self2.pvp, false, false, false, false, false, false));
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(PlayerDeathReason$TerrariaPacket.packDeathReason(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerDamage")), self.target, "target"), self.deathReason), self.damage, "damage"), self.hitDirection, "hitDirection"), damageFlags(self), "damageFlags"), self.cooldownCounter, "cooldownCounter"));
    }
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_WorldInfo.js
var require_Packet_WorldInfo = __commonJS({
  "src/packet/Packet_WorldInfo.js"(exports2) {
    "use strict";
    var Primitive_option8 = (init_Primitive_option(), __toCommonJS(Primitive_option_exports));
    var Array16$TerrariaPacket = require_Array16();
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function readEventInfo(reader) {
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo1");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo2");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo3");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo4");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo5");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo6");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo7");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo8");
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let e$8 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo9");
      if (e$8.TAG !== "Ok") {
        return e$8;
      }
      let e$9 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "eventInfo10");
      if (e$9.TAG !== "Ok") {
        return e$9;
      }
      let eventInfo1 = BitFlags$TerrariaPacket.fromByte(e._0);
      let eventInfo2 = BitFlags$TerrariaPacket.fromByte(e$1._0);
      let eventInfo3 = BitFlags$TerrariaPacket.fromByte(e$2._0);
      let eventInfo4 = BitFlags$TerrariaPacket.fromByte(e$3._0);
      let eventInfo5 = BitFlags$TerrariaPacket.fromByte(e$4._0);
      let eventInfo6 = BitFlags$TerrariaPacket.fromByte(e$5._0);
      let eventInfo7 = BitFlags$TerrariaPacket.fromByte(e$6._0);
      let eventInfo8 = BitFlags$TerrariaPacket.fromByte(e$7._0);
      let eventInfo9 = BitFlags$TerrariaPacket.fromByte(e$8._0);
      let eventInfo10 = BitFlags$TerrariaPacket.fromByte(e$9._0);
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
          unlockedTruffleSpawn
        }
      };
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "time");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "dayAndMoonInfo");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "moonPhase");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "maxTilesX");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "maxTilesY");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "spawnX");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "spawnY");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "worldSurface");
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let e$8 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "rockLayer");
      if (e$8.TAG !== "Ok") {
        return e$8;
      }
      let e$9 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "worldId");
      if (e$9.TAG !== "Ok") {
        return e$9;
      }
      let e$10 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "worldName");
      if (e$10.TAG !== "Ok") {
        return e$10;
      }
      let e$11 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "gameMode");
      if (e$11.TAG !== "Ok") {
        return e$11;
      }
      let e$12 = ErrorAwarePacketReader$TerrariaPacket.readBytes(reader, 16, "worldUniqueId");
      if (e$12.TAG !== "Ok") {
        return e$12;
      }
      let worldUniqueId = Array16$TerrariaPacket.fromArray(e$12._0);
      let e$13 = worldUniqueId !== void 0 ? {
        TAG: "Ok",
        _0: Primitive_option8.valFromOption(worldUniqueId)
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
      let e$14 = ErrorAwarePacketReader$TerrariaPacket.readUInt64(reader, "worldGeneratorVersion");
      if (e$14.TAG !== "Ok") {
        return e$14;
      }
      let e$15 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "moonType");
      if (e$15.TAG !== "Ok") {
        return e$15;
      }
      let e$16 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground");
      if (e$16.TAG !== "Ok") {
        return e$16;
      }
      let e$17 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground2");
      if (e$17.TAG !== "Ok") {
        return e$17;
      }
      let e$18 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground3");
      if (e$18.TAG !== "Ok") {
        return e$18;
      }
      let e$19 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeBackground4");
      if (e$19.TAG !== "Ok") {
        return e$19;
      }
      let e$20 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "corruptionBackground");
      if (e$20.TAG !== "Ok") {
        return e$20;
      }
      let e$21 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "jungleBackground");
      if (e$21.TAG !== "Ok") {
        return e$21;
      }
      let e$22 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "snowBackground");
      if (e$22.TAG !== "Ok") {
        return e$22;
      }
      let e$23 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hallowBackground");
      if (e$23.TAG !== "Ok") {
        return e$23;
      }
      let e$24 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "crimsonBackground");
      if (e$24.TAG !== "Ok") {
        return e$24;
      }
      let e$25 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "desertBackground");
      if (e$25.TAG !== "Ok") {
        return e$25;
      }
      let e$26 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "oceanBackground");
      if (e$26.TAG !== "Ok") {
        return e$26;
      }
      let e$27 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "mushroomBackground");
      if (e$27.TAG !== "Ok") {
        return e$27;
      }
      let e$28 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "underworldBackground");
      if (e$28.TAG !== "Ok") {
        return e$28;
      }
      let e$29 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "iceBackStyle");
      if (e$29.TAG !== "Ok") {
        return e$29;
      }
      let e$30 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "jungleBackStyle");
      if (e$30.TAG !== "Ok") {
        return e$30;
      }
      let e$31 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hellBackStyle");
      if (e$31.TAG !== "Ok") {
        return e$31;
      }
      let e$32 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "windSpeedSet");
      if (e$32.TAG !== "Ok") {
        return e$32;
      }
      let e$33 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "cloudNumber");
      if (e$33.TAG !== "Ok") {
        return e$33;
      }
      let e$34 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tree1");
      if (e$34.TAG !== "Ok") {
        return e$34;
      }
      let e$35 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tree2");
      if (e$35.TAG !== "Ok") {
        return e$35;
      }
      let e$36 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "tree3");
      if (e$36.TAG !== "Ok") {
        return e$36;
      }
      let e$37 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle1");
      if (e$37.TAG !== "Ok") {
        return e$37;
      }
      let e$38 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle2");
      if (e$38.TAG !== "Ok") {
        return e$38;
      }
      let e$39 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle3");
      if (e$39.TAG !== "Ok") {
        return e$39;
      }
      let e$40 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "treeStyle4");
      if (e$40.TAG !== "Ok") {
        return e$40;
      }
      let e$41 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "caveBack1");
      if (e$41.TAG !== "Ok") {
        return e$41;
      }
      let e$42 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "caveBack2");
      if (e$42.TAG !== "Ok") {
        return e$42;
      }
      let e$43 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "caveBack3");
      if (e$43.TAG !== "Ok") {
        return e$43;
      }
      let e$44 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle1");
      if (e$44.TAG !== "Ok") {
        return e$44;
      }
      let e$45 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle2");
      if (e$45.TAG !== "Ok") {
        return e$45;
      }
      let e$46 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle3");
      if (e$46.TAG !== "Ok") {
        return e$46;
      }
      let e$47 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "caveBackStyle4");
      if (e$47.TAG !== "Ok") {
        return e$47;
      }
      let e$48 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest1TreeTopStyle");
      if (e$48.TAG !== "Ok") {
        return e$48;
      }
      let e$49 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest2TreeTopStyle");
      if (e$49.TAG !== "Ok") {
        return e$49;
      }
      let e$50 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest3TreeTopStyle");
      if (e$50.TAG !== "Ok") {
        return e$50;
      }
      let e$51 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "forest4TreeTopStyle");
      if (e$51.TAG !== "Ok") {
        return e$51;
      }
      let e$52 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "corruptionTreeTopStyle");
      if (e$52.TAG !== "Ok") {
        return e$52;
      }
      let e$53 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "jungleTreeTopStyle");
      if (e$53.TAG !== "Ok") {
        return e$53;
      }
      let e$54 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "snowTreeTopStyle");
      if (e$54.TAG !== "Ok") {
        return e$54;
      }
      let e$55 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hallowTreeTopStyle");
      if (e$55.TAG !== "Ok") {
        return e$55;
      }
      let e$56 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "crimsonTreeTopStyle");
      if (e$56.TAG !== "Ok") {
        return e$56;
      }
      let e$57 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "desertTreeTopStyle");
      if (e$57.TAG !== "Ok") {
        return e$57;
      }
      let e$58 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "oceanTreeTopStyle");
      if (e$58.TAG !== "Ok") {
        return e$58;
      }
      let e$59 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "glowingMushroomTreeTopStyle");
      if (e$59.TAG !== "Ok") {
        return e$59;
      }
      let e$60 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "underworldTreeTopStyle");
      if (e$60.TAG !== "Ok") {
        return e$60;
      }
      let e$61 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "rain");
      if (e$61.TAG !== "Ok") {
        return e$61;
      }
      let e$62 = readEventInfo(reader);
      if (e$62.TAG !== "Ok") {
        return e$62;
      }
      let e$63 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "sundialCooldown");
      if (e$63.TAG !== "Ok") {
        return e$63;
      }
      let e$64 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "moondialCooldown");
      if (e$64.TAG !== "Ok") {
        return e$64;
      }
      let e$65 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "copperOreTier");
      if (e$65.TAG !== "Ok") {
        return e$65;
      }
      let e$66 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "ironOreTier");
      if (e$66.TAG !== "Ok") {
        return e$66;
      }
      let e$67 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "silverOreTier");
      if (e$67.TAG !== "Ok") {
        return e$67;
      }
      let e$68 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "goldOreTier");
      if (e$68.TAG !== "Ok") {
        return e$68;
      }
      let e$69 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "cobaltOreTier");
      if (e$69.TAG !== "Ok") {
        return e$69;
      }
      let e$70 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "mythrilOreTier");
      if (e$70.TAG !== "Ok") {
        return e$70;
      }
      let e$71 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "adamantiteOreTier");
      if (e$71.TAG !== "Ok") {
        return e$71;
      }
      let e$72 = ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "invasionType");
      if (e$72.TAG !== "Ok") {
        return e$72;
      }
      let e$73 = ErrorAwarePacketReader$TerrariaPacket.readUInt64(reader, "lobbyId");
      if (e$73.TAG !== "Ok") {
        return e$73;
      }
      let e$74 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "sandstormSeverity");
      if (e$74.TAG === "Ok") {
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
            sandstormSeverity: e$74._0
          }
        };
      } else {
        return e$74;
      }
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "active");
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
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerActive")), self.playerId, "playerId"), self.active ? 1 : 0, "active"));
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
    var Stdlib_Result = (init_Stdlib_Result(), __toCommonJS(Stdlib_Result_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function readNpcFlags1(reader, fieldName) {
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, fieldName);
      if (e.TAG !== "Ok") {
        return e;
      }
      let flags = BitFlags$TerrariaPacket.fromByte(e._0);
      return {
        TAG: "Ok",
        _0: {
          directionX: BitFlags$TerrariaPacket.flag1(flags),
          directionY: BitFlags$TerrariaPacket.flag2(flags),
          ai0: BitFlags$TerrariaPacket.flag3(flags),
          ai1: BitFlags$TerrariaPacket.flag4(flags),
          ai2: BitFlags$TerrariaPacket.flag5(flags),
          ai3: BitFlags$TerrariaPacket.flag6(flags),
          spriteDirection: BitFlags$TerrariaPacket.flag7(flags),
          lifeMax: BitFlags$TerrariaPacket.flag8(flags)
        }
      };
    }
    function readNpcFlags2(reader, fieldName) {
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, fieldName);
      if (e.TAG !== "Ok") {
        return e;
      }
      let flags = BitFlags$TerrariaPacket.fromByte(e._0);
      return {
        TAG: "Ok",
        _0: {
          statsScaled: BitFlags$TerrariaPacket.flag1(flags),
          spawnedFromStatue: BitFlags$TerrariaPacket.flag2(flags),
          strengthMultiplier: BitFlags$TerrariaPacket.flag3(flags)
        }
      };
    }
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcSlotId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "target");
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
        let e$8 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai0");
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
        let e$9 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai1");
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
        let e$10 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai2");
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
        let e$11 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "ai3");
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
      let e$12 = Stdlib_Result.all4([
        tmp,
        tmp$1,
        tmp$2,
        tmp$3
      ]);
      if (e$12.TAG !== "Ok") {
        return e$12;
      }
      let e$13 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcTypeId");
      if (e$13.TAG !== "Ok") {
        return e$13;
      }
      let e$14;
      if (npcFlags22.statsScaled) {
        let e$15 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerCountScale");
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
      if (npcFlags22.strengthMultiplier) {
        let e$17 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "strengthMultiplier");
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
        let e$19 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "lifeBytes");
        if (e$19.TAG === "Ok") {
          switch (e$19._0) {
            case 1:
              let e$20 = ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "life_sbyte");
              e$18 = e$20.TAG === "Ok" ? {
                TAG: "Ok",
                _0: {
                  TAG: "Byte",
                  _0: e$20._0
                }
              } : e$20;
              break;
            case 2:
              let e$21 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "life_int16");
              e$18 = e$21.TAG === "Ok" ? {
                TAG: "Ok",
                _0: {
                  TAG: "Int16",
                  _0: e$21._0
                }
              } : e$21;
              break;
            case 4:
              let e$22 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "life_int32");
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
      let releaseOwner = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "releaseOwner");
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
          strengthMultiplier: e$16._0,
          spawnedFromStatue: npcFlags22.spawnedFromStatue
        }
      };
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readNetworkText(reader, "reason");
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
    var Decode = {
      readNetworkText: ErrorAwarePacketReader$TerrariaPacket.readNetworkText,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packNetworkText(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("Disconnect")), self.reason, "reason"));
    }
    var Encode = {
      packNetworkText: ErrorAwarePacketWriter$TerrariaPacket.packNetworkText,
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
var Primitive_exceptions, Undefined, make4, get5, isEvaluated;
var init_Stdlib_Lazy = __esm({
  "node_modules/.pnpm/@rescript+runtime@12.0.0/node_modules/@rescript/runtime/lib/js/Stdlib_Lazy.js"() {
    "use strict";
    Primitive_exceptions = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
    Undefined = /* @__PURE__ */ Primitive_exceptions.create("Stdlib_Lazy.Undefined");
    make4 = from_fun;
    get5 = force;
    isEvaluated = is_val;
    exports.make = make4;
    exports.get = get5;
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "emojiId");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("Emoji")), self.playerId, "playerId"), self.emojiId, "emojiId"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_DoorUse.js
var require_Packet_DoorUse = __commonJS({
  "src/packet/Packet_DoorUse.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function actionToInt(self) {
      switch (self) {
        case "OpenDoor":
          return 0;
        case "CloseDoor":
          return 1;
        case "ShiftTrapdoorOpen":
          return 2;
        case "ShiftTrapdoorClose":
          return 3;
        case "ShiftTallGateOpen":
          return 4;
        case "ShiftTallGateClose":
          return 5;
      }
    }
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
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "action");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "direction");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("DoorUse")), actionToInt(self.action), "action"), self.x, "x"), self.y, "y"), self.direction >= 0 ? 1 : 0, "direction"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
      toBuffer
    };
    exports2.actionToInt = actionToInt;
    exports2.actionFromInt = actionFromInt;
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_HarpPlay.js
var require_Packet_HarpPlay = __commonJS({
  "src/packet/Packet_HarpPlay.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "pitch");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("HarpPlay")), self.playerId, "playerId"), self.pitch, "pitch"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_ChestName.js
var require_Packet_ChestName = __commonJS({
  "src/packet/Packet_ChestName.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "chestId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "name");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readString: ErrorAwarePacketReader$TerrariaPacket.readString,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ChestName")), self.chestId, "chestId"), self.x, "x"), self.y, "y"), self.name, "name"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packString: ErrorAwarePacketWriter$TerrariaPacket.packString,
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

// src/packet/Packet_ChestOpen.js
var require_Packet_ChestOpen = __commonJS({
  "src/packet/Packet_ChestOpen.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ChestOpen")), self.x, "x"), self.y, "y"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_LiquidSet.js
var require_Packet_LiquidSet = __commonJS({
  "src/packet/Packet_LiquidSet.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquid");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "liquidType");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("LiquidSet")), self.x, "x"), self.y, "y"), self.liquid, "liquid"), self.liquidType, "liquidType"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_NpcStrike.js
var require_Packet_NpcStrike = __commonJS({
  "src/packet/Packet_NpcStrike.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "damage");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "knockback");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "direction");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "critical");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcStrike")), self.npcId, "npcId"), self.damage, "damage"), self.knockback, "knockback"), self.direction + 1 | 0, "direction"), self.critical ? 1 : 0, "critical"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packSingle: ErrorAwarePacketWriter$TerrariaPacket.packSingle,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_NpcTamper.js
var require_Packet_NpcTamper = __commonJS({
  "src/packet/Packet_NpcTamper.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
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
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "setNpcImmunity");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2;
      if (e$1._0 === 1) {
        let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "immunityTime");
        if (e$3.TAG === "Ok") {
          let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "immunityFromPlayerId");
          e$2 = e$4.TAG === "Ok" ? {
            TAG: "Ok",
            _0: [
              e$3._0,
              fromInt(e$4._0)
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
    var Decode = {
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function packImmunity(writer, immunityTime, immunityOrigin) {
      if (immunityTime !== void 0 && immunityOrigin !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 1, "setNpcImmunity"), immunityTime, "immunityTime"), toInt(immunityOrigin), "immunityFromPlayerId");
      } else {
        return ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 0, "setNpcImmunity");
      }
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(packImmunity(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcTamper")), self.npcId, "npcId"), self.immunityTime, self.immunityFromPlayerId));
    }
    var Encode = {
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "healAmount");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("HealEffect")), self.playerId, "playerId"), self.healAmount, "healAmount"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_ManaEffect.js
var require_Packet_ManaEffect = __commonJS({
  "src/packet/Packet_ManaEffect.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "manaAmount");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ManaEffect")), self.playerId, "playerId"), self.manaAmount, "manaAmount"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_NpcBuffAdd.js
var require_Packet_NpcBuffAdd = __commonJS({
  "src/packet/Packet_NpcBuffAdd.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "buffType");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "time");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcBuffAdd")), self.npcId, "npcId"), self.buffType, "buffType"), self.time, "time"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
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

// src/packet/Packet_NpcRelease.js
var require_Packet_NpcRelease = __commonJS({
  "src/packet/Packet_NpcRelease.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcType");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "style");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcRelease")), self.x, "x"), self.y, "y"), self.npcType, "npcType"), self.style, "style"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_PortalKill.js
var require_Packet_PortalKill = __commonJS({
  "src/packet/Packet_PortalKill.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "owner");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "portalColor");
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
    var Decode = {
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PortalKill")), self.owner, "owner"), self.portalColor, "portalColor"));
    }
    var Encode = {
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_EmoteBubble.js
var require_Packet_EmoteBubble = __commonJS({
  "src/packet/Packet_EmoteBubble.js"(exports2) {
    "use strict";
    var Stdlib_Result = (init_Stdlib_Result(), __toCommonJS(Stdlib_Result_exports));
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "id");
      if (e.TAG !== "Ok") {
        return e;
      }
      let id = e._0;
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "anchorType");
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
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "anchorMeta");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "time");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSByte(reader, "emote");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let emote = e$4._0;
      let metadata = emote < 0 ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "metadata"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (metadata.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            id,
            anchor: {
              TAG: "Anchor",
              anchorType,
              anchorMeta: e$2._0,
              time: e$3._0,
              emote,
              metadata: metadata._0
            }
          }
        };
      } else {
        return metadata;
      }
    }
    var Decode = {
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readSByte: ErrorAwarePacketReader$TerrariaPacket.readSByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      let writer = ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("EmoteBubble")), self.id, "id");
      let details = self.anchor;
      if (typeof details !== "object") {
        return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, 255, "anchorType"));
      }
      let writer$1 = ErrorAwarePacketWriter$TerrariaPacket.packSByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, details.anchorType, "anchorType"), details.anchorMeta, "anchorMeta"), details.time, "time"), details.emote, "emote");
      let tmp;
      if (details.emote < 0) {
        let v = details.metadata;
        tmp = ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer$1, v !== void 0 ? v : 0, "metadata");
      } else {
        tmp = writer$1;
      }
      return ErrorAwarePacketWriter$TerrariaPacket.data(tmp);
    }
    var Encode = {
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
      packSByte: ErrorAwarePacketWriter$TerrariaPacket.packSByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_PasswordSend.js
var require_Packet_PasswordSend = __commonJS({
  "src/packet/Packet_PasswordSend.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readString(reader, "password");
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
    var Decode = {
      readString: ErrorAwarePacketReader$TerrariaPacket.readString,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packString(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PasswordSend")), self.password, "password"));
    }
    var Encode = {
      packString: ErrorAwarePacketWriter$TerrariaPacket.packString,
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

// src/packet/Packet_GemLockToggle.js
var require_Packet_GemLockToggle = __commonJS({
  "src/packet/Packet_GemLockToggle.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readBool(reader, "active");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readBool: ErrorAwarePacketReader$TerrariaPacket.readBool,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packBool(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("GemLockToggle")), self.x, "x"), self.y, "y"), self.active, "active"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packBool: ErrorAwarePacketWriter$TerrariaPacket.packBool,
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

// src/packet/Packet_NebulaLevelUp.js
var require_Packet_NebulaLevelUp = __commonJS({
  "src/packet/Packet_NebulaLevelUp.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "level");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NebulaLevelUp")), self.playerId, "playerId"), self.level, "level"), self.x, "x"), self.y, "y"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
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

// src/packet/Packet_NpcItemStrike.js
var require_Packet_NpcItemStrike = __commonJS({
  "src/packet/Packet_NpcItemStrike.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcItemStrike")), self.npcId, "npcId"), self.playerId, "playerId"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_PlayerStealth.js
var require_Packet_PlayerStealth = __commonJS({
  "src/packet/Packet_PlayerStealth.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "stealth");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerStealth")), self.playerId, "playerId"), self.stealth, "stealth"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_GoodEvilUpdate.js
var require_Packet_GoodEvilUpdate = __commonJS({
  "src/packet/Packet_GoodEvilUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "good");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "evil");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "blood");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("GoodEvilUpdate")), self.good, "good"), self.evil, "evil"), self.blood, "blood"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_ItemDropModify.js
var require_Packet_ItemDropModify = __commonJS({
  "src/packet/Packet_ItemDropModify.js"(exports2) {
    "use strict";
    var Stdlib_Option = (init_Stdlib_Option(), __toCommonJS(Stdlib_Option_exports));
    var Stdlib_Result = (init_Stdlib_Result(), __toCommonJS(Stdlib_Result_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parseFlags2(reader, flags22) {
      let width = BitFlags$TerrariaPacket.flag1(flags22) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "width"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (width.TAG !== "Ok") {
        return width;
      }
      let height = BitFlags$TerrariaPacket.flag2(flags22) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "height"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (height.TAG !== "Ok") {
        return height;
      }
      let scale = BitFlags$TerrariaPacket.flag3(flags22) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "scale"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (scale.TAG !== "Ok") {
        return scale;
      }
      let ammo = BitFlags$TerrariaPacket.flag4(flags22) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "ammo"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (ammo.TAG !== "Ok") {
        return ammo;
      }
      let useAmmo = BitFlags$TerrariaPacket.flag5(flags22) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "useAmmo"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (useAmmo.TAG !== "Ok") {
        return useAmmo;
      }
      let notAmmo = BitFlags$TerrariaPacket.flag6(flags22) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "notAmmo"), (v) => v === 1) : {
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
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags1");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let flags12 = BitFlags$TerrariaPacket.fromByte(e$1._0);
      let color;
      if (BitFlags$TerrariaPacket.flag1(flags12)) {
        let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "Color.r");
        if (e$2.TAG === "Ok") {
          let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "Color.g");
          if (e$3.TAG === "Ok") {
            let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "Color.b");
            if (e$4.TAG === "Ok") {
              let e$5 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "Color.a");
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
      let damage = BitFlags$TerrariaPacket.flag2(flags12) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "damage"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (damage.TAG !== "Ok") {
        return damage;
      }
      let knockback = BitFlags$TerrariaPacket.flag3(flags12) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "knockback"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (knockback.TAG !== "Ok") {
        return knockback;
      }
      let useAnimation = BitFlags$TerrariaPacket.flag4(flags12) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "useAnimation"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (useAnimation.TAG !== "Ok") {
        return useAnimation;
      }
      let useTime = BitFlags$TerrariaPacket.flag5(flags12) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "useTime"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (useTime.TAG !== "Ok") {
        return useTime;
      }
      let shoot = BitFlags$TerrariaPacket.flag6(flags12) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "shoot"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (shoot.TAG !== "Ok") {
        return shoot;
      }
      let shootSpeed = BitFlags$TerrariaPacket.flag7(flags12) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "shootSpeed"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (shootSpeed.TAG !== "Ok") {
        return shootSpeed;
      }
      let e$6;
      if (BitFlags$TerrariaPacket.flag8(flags12)) {
        let e$7 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags2");
        e$6 = e$7.TAG === "Ok" ? parseFlags2(reader, BitFlags$TerrariaPacket.fromByte(e$7._0)) : e$7;
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readUInt32: ErrorAwarePacketReader$TerrariaPacket.readUInt32,
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parseFlags2,
      parse
    };
    function flags1(self) {
      return BitFlags$TerrariaPacket.fromFlags(Stdlib_Option.isSome(self.color), Stdlib_Option.isSome(self.damage), Stdlib_Option.isSome(self.knockback), Stdlib_Option.isSome(self.useAnimation), Stdlib_Option.isSome(self.useTime), Stdlib_Option.isSome(self.shoot), Stdlib_Option.isSome(self.shootSpeed), Stdlib_Option.isSome(self.width) || Stdlib_Option.isSome(self.height) || Stdlib_Option.isSome(self.scale) || Stdlib_Option.isSome(self.ammo) || Stdlib_Option.isSome(self.useAmmo) || Stdlib_Option.isSome(self.notAmmo));
    }
    function flags2(self) {
      return BitFlags$TerrariaPacket.fromFlags(Stdlib_Option.isSome(self.width), Stdlib_Option.isSome(self.height), Stdlib_Option.isSome(self.scale), Stdlib_Option.isSome(self.ammo), Stdlib_Option.isSome(self.useAmmo), Stdlib_Option.isSome(self.notAmmo), false, false);
    }
    function toBuffer(self) {
      let writer = ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ItemDropModify")), self.itemId, "itemId"), BitFlags$TerrariaPacket.toByte(flags1(self)), "flags1");
      let c = self.color;
      if (c !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, c.r, "Color.r");
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, c.g, "Color.g");
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, c.b, "Color.b");
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, c.a, "Color.a");
      }
      let v = self.damage;
      if (v !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, v, "damage");
      }
      let v$1 = self.knockback;
      if (v$1 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, v$1, "knockback");
      }
      let v$2 = self.useAnimation;
      if (v$2 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, v$2, "useAnimation");
      }
      let v$3 = self.useTime;
      if (v$3 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer, v$3, "useTime");
      }
      let v$4 = self.shoot;
      if (v$4 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, v$4, "shoot");
      }
      let v$5 = self.shootSpeed;
      if (v$5 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, v$5, "shootSpeed");
      }
      if (BitFlags$TerrariaPacket.flag8(flags1(self))) {
        ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, BitFlags$TerrariaPacket.toByte(flags2(self)), "flags2");
        let v$6 = self.width;
        if (v$6 !== void 0) {
          ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, v$6, "width");
        }
        let v$7 = self.height;
        if (v$7 !== void 0) {
          ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, v$7, "height");
        }
        let v$8 = self.scale;
        if (v$8 !== void 0) {
          ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, v$8, "scale");
        }
        let v$9 = self.ammo;
        if (v$9 !== void 0) {
          ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, v$9, "ammo");
        }
        let v$10 = self.useAmmo;
        if (v$10 !== void 0) {
          ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, v$10, "useAmmo");
        }
        let v$11 = self.notAmmo;
        if (v$11 !== void 0) {
          ErrorAwarePacketWriter$TerrariaPacket.packByte(writer, v$11 ? 1 : 0, "notAmmo");
        }
      }
      return ErrorAwarePacketWriter$TerrariaPacket.data(writer);
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packUInt32: ErrorAwarePacketWriter$TerrariaPacket.packUInt32,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
      packSingle: ErrorAwarePacketWriter$TerrariaPacket.packSingle,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
      flags1,
      flags2,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ItemFramePlace.js
var require_Packet_ItemFramePlace = __commonJS({
  "src/packet/Packet_ItemFramePlace.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ItemFramePlace")), self.x, "x"), self.y, "y"), self.itemId, "itemId"), self.prefix, "prefix"), self.stack, "stack"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_LucyAxeMessage.js
var require_Packet_LucyAxeMessage = __commonJS({
  "src/packet/Packet_LucyAxeMessage.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "source");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "variant");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityX");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityY");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let velocity_x = e$2._0;
      let velocity_y = e$3._0;
      let velocity = {
        x: velocity_x,
        y: velocity_y
      };
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "positionX");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "positionY");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("LucyAxeMessage")), self.source, "source"), self.variant, "variant"), self.velocity.x, "velocityX"), self.velocity.y, "velocityY"), self.position.x, "positionX"), self.position.y, "positionY"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_ItemOwnerRemove.js
var require_Packet_ItemOwnerRemove = __commonJS({
  "src/packet/Packet_ItemOwnerRemove.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemDropId");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ItemOwnerRemove")), self.itemDropId, "itemDropId"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_LegacySoundPlay.js
var require_Packet_LegacySoundPlay = __commonJS({
  "src/packet/Packet_LegacySoundPlay.js"(exports2) {
    "use strict";
    var Stdlib_Option = (init_Stdlib_Option(), __toCommonJS(Stdlib_Option_exports));
    var Stdlib_Result = (init_Stdlib_Result(), __toCommonJS(Stdlib_Result_exports));
    var BitFlags$TerrariaPacket = require_BitFlags();
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "soundIndex");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "flags");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let flags = BitFlags$TerrariaPacket.fromByte(e$3._0);
      let e$4 = BitFlags$TerrariaPacket.flag1(flags) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "styleOverride"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = BitFlags$TerrariaPacket.flag2(flags) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "volumeOverride"), (v) => v) : {
        TAG: "Ok",
        _0: void 0
      };
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = BitFlags$TerrariaPacket.flag3(flags) ? Stdlib_Result.map(ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "pitchOverride"), (v) => v) : {
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
    var Decode = {
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parse
    };
    function toBuffer(self) {
      let flags = BitFlags$TerrariaPacket.fromFlags(Stdlib_Option.isSome(self.styleOverride), Stdlib_Option.isSome(self.volumeOverride), Stdlib_Option.isSome(self.pitchOverride), false, false, false, false, false);
      let writer = ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("LegacySoundPlay")), self.position.x, "x"), self.position.y, "y"), self.soundIndex, "soundIndex"), BitFlags$TerrariaPacket.toByte(flags), "flags");
      let v = self.styleOverride;
      if (v !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packInt32(writer, v, "styleOverride");
      }
      let v$1 = self.volumeOverride;
      if (v$1 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, v$1, "volumeOverride");
      }
      let v$2 = self.pitchOverride;
      if (v$2 !== void 0) {
        ErrorAwarePacketWriter$TerrariaPacket.packSingle(writer, v$2, "pitchOverride");
      }
      return ErrorAwarePacketWriter$TerrariaPacket.data(writer);
    }
    var Encode = {
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_PlayerHealOther.js
var require_Packet_PlayerHealOther = __commonJS({
  "src/packet/Packet_PlayerHealOther.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "healAmount");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerHealOther")), self.playerId, "playerId"), self.healAmount, "healAmount"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_PlayerSpawnSelf.js
var require_Packet_PlayerSpawnSelf = __commonJS({
  "src/packet/Packet_PlayerSpawnSelf.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "respawnTimer");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "numberOfDeathsPve");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "numberOfDeathsPvp");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "context");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let context;
      switch (e$6._0) {
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
          TAG: "Ok",
          _0: {
            playerId: e._0,
            x: e$1._0,
            y: e$2._0,
            respawnTimer: e$3._0,
            numberOfDeathsPve: e$4._0,
            numberOfDeathsPvp: e$5._0,
            context
          }
        };
      } else {
        return {
          TAG: "Error",
          _0: {
            context: "Packet_PlayerSpawnSelf.parse.context",
            error: new Error("Unknown context")
          }
        };
      }
    }
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function contextToByte(c) {
      switch (c) {
        case "ReviveFromDeath":
          return 0;
        case "SpawningIntoWorld":
          return 1;
        case "RecallFromItem":
          return 2;
      }
    }
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerSpawnSelf")), self.playerId, "playerId"), self.x, "x"), self.y, "y"), self.respawnTimer, "respawnTimer"), self.numberOfDeathsPve, "numberOfDeathsPve"), self.numberOfDeathsPvp, "numberOfDeathsPvp"), contextToByte(self.context), "context"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
      contextToByte,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_CombatTextCreate.js
var require_Packet_CombatTextCreate = __commonJS({
  "src/packet/Packet_CombatTextCreate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "color");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readNetworkText(reader, "text");
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
    var Decode = {
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readColor: ErrorAwarePacketReader$TerrariaPacket.readColor,
      readNetworkText: ErrorAwarePacketReader$TerrariaPacket.readNetworkText,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packNetworkText(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("CombatTextCreate")), self.x, "x"), self.y, "y"), self.color, "color"), self.text, "text"));
    }
    var Encode = {
      packSingle: ErrorAwarePacketWriter$TerrariaPacket.packSingle,
      packColor: ErrorAwarePacketWriter$TerrariaPacket.packColor,
      packNetworkText: ErrorAwarePacketWriter$TerrariaPacket.packNetworkText,
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

// src/packet/Packet_NpcSpecialEffect.js
var require_Packet_NpcSpecialEffect = __commonJS({
  "src/packet/Packet_NpcSpecialEffect.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "effectType");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcSpecialEffect")), self.playerId, "playerId"), self.effectType, "effectType"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_PasswordRequired.js
var require_Packet_PasswordRequired = __commonJS({
  "src/packet/Packet_PasswordRequired.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    var Decode = {
      parse
    };
    function toBuffer(_self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PasswordRequired")));
    }
    var Encode = {
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

// src/packet/Packet_EventNotification.js
var require_Packet_EventNotification = __commonJS({
  "src/packet/Packet_EventNotification.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "eventId");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("EventNotification")), self.eventId, "eventId"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_GolfBallLandInCup.js
var require_Packet_GolfBallLandInCup = __commonJS({
  "src/packet/Packet_GolfBallLandInCup.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "cupX");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "cupY");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "projId");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "projType");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("GolfBallLandInCup")), self.playerId, "playerId"), self.cupX, "cupX"), self.cupY, "cupY"), self.projId, "projId"), self.projType, "projType"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
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

// src/packet/Packet_MassWireOperation.js
var require_Packet_MassWireOperation = __commonJS({
  "src/packet/Packet_MassWireOperation.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "startX");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "startY");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "endX");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "endY");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "toolMode");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("MassWireOperation")), self.startX, "startX"), self.startY, "startY"), self.endX, "endX"), self.endY, "endY"), self.toolMode, "toolMode"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_MoonLordCountdown.js
var require_Packet_MoonLordCountdown = __commonJS({
  "src/packet/Packet_MoonLordCountdown.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "maxMoonLordCountdown");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "moonLordCountdown");
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
    var Decode = {
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("MoonLordCountdown")), self.maxMoonLordCountdown, "maxMoonLordCountdown"), self.moonLordCountdown, "moonLordCountdown"));
    }
    var Encode = {
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_ProjectileDestroy.js
var require_Packet_ProjectileDestroy = __commonJS({
  "src/packet/Packet_ProjectileDestroy.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "projectileId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "owner");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ProjectileDestroy")), self.projectileId, "projectileId"), self.owner, "owner"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_RevengeMarkerSync.js
var require_Packet_RevengeMarkerSync = __commonJS({
  "src/packet/Packet_RevengeMarkerSync.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "uniqueId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "posX");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "posY");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "npcNetId");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "npcHpPercent");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "npcTypeAgainstDiscouragement");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "npcAiStyleAgainstDiscouragement");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "coinValue");
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let e$8 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "baseValue");
      if (e$8.TAG !== "Ok") {
        return e$8;
      }
      let e$9 = ErrorAwarePacketReader$TerrariaPacket.readBool(reader, "spawnedFromStatue");
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
    var Decode = {
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readBool: ErrorAwarePacketReader$TerrariaPacket.readBool,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packBool(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("RevengeMarkerSync")), self.uniqueId, "uniqueId"), self.position.x, "posX"), self.position.y, "posY"), self.npcNetId, "npcNetId"), self.npcHpPercent, "npcHpPercent"), self.npcTypeAgainstDiscouragement, "npcTypeAgainstDiscouragement"), self.npcAiStyleAgainstDiscouragement, "npcAiStyleAgainstDiscouragement"), self.coinValue, "coinValue"), self.baseValue, "baseValue"), self.spawnedFromStatue, "spawnedFromStatue"));
    }
    var Encode = {
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
      packSingle: ErrorAwarePacketWriter$TerrariaPacket.packSingle,
      packBool: ErrorAwarePacketWriter$TerrariaPacket.packBool,
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

// src/packet/Packet_CombatNumberCreate.js
var require_Packet_CombatNumberCreate = __commonJS({
  "src/packet/Packet_CombatNumberCreate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readColor(reader, "color");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "amount");
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
    var Decode = {
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readColor: ErrorAwarePacketReader$TerrariaPacket.readColor,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packColor(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("CombatNumberCreate")), self.x, "x"), self.y, "y"), self.color, "color"), self.amount, "amount"));
    }
    var Encode = {
      packSingle: ErrorAwarePacketWriter$TerrariaPacket.packSingle,
      packColor: ErrorAwarePacketWriter$TerrariaPacket.packColor,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_MinionTargetUpdate.js
var require_Packet_MinionTargetUpdate = __commonJS({
  "src/packet/Packet_MinionTargetUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("MinionTargetUpdate")), self.playerId, "playerId"), self.x, "x"), self.y, "y"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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

// src/packet/Packet_ActiveContainerSync.js
var require_Packet_ActiveContainerSync = __commonJS({
  "src/packet/Packet_ActiveContainerSync.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "chestId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "nameLength");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let nameLength = e$3._0;
      let e$4 = nameLength > 0 && nameLength <= 20 ? ErrorAwarePacketReader$TerrariaPacket.readString(reader, "name") : {
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readString: ErrorAwarePacketReader$TerrariaPacket.readString,
      parse
    };
    function toBuffer(self) {
      let writer = ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ActiveContainerSync")), self.chestId, "chestId"), self.x, "x"), self.y, "y"), self.nameLength, "nameLength");
      return ErrorAwarePacketWriter$TerrariaPacket.data(self.nameLength > 0 && self.nameLength <= 20 ? ErrorAwarePacketWriter$TerrariaPacket.packString(writer, self.name, "name") : writer);
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packString: ErrorAwarePacketWriter$TerrariaPacket.packString,
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

// src/packet/Packet_RevengeMarkerRemove.js
var require_Packet_RevengeMarkerRemove = __commonJS({
  "src/packet/Packet_RevengeMarkerRemove.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "markerId");
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
    var Decode = {
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("RevengeMarkerRemove")), self.markerId, "markerId"));
    }
    var Encode = {
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_MassWireOperationPay.js
var require_Packet_MassWireOperationPay = __commonJS({
  "src/packet/Packet_MassWireOperationPay.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemType");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("MassWireOperationPay")), self.itemType, "itemType"), self.stack, "stack"), self.playerId, "playerId"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
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
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "extraInfo");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionX");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "positionY");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let position_x = e$2._0;
      let position_y = e$3._0;
      let position = {
        x: position_x,
        y: position_y
      };
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityX");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "velocityY");
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
    var Stdlib_Array = (init_Stdlib_Array(), __toCommonJS(Stdlib_Array_exports));
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let rows = Stdlib_Array.make(2, []);
      let error;
      for (let i = 0; i <= 1; ++i) {
        if (error !== void 0) {
          let row = Stdlib_Array.make(3, 0);
          for (let j = 0; j <= 2; ++j) {
            if (error !== void 0) {
              let value = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, `monster_` + i.toString() + `_` + j.toString());
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
    var Decode = {
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      parse
    };
    function packRow(writer, row, rowIdx) {
      let _writer = writer;
      let _colIdx = 0;
      while (true) {
        let colIdx = _colIdx;
        let writer$1 = _writer;
        if (colIdx >= row.length) {
          return writer$1;
        }
        _colIdx = colIdx + 1 | 0;
        _writer = ErrorAwarePacketWriter$TerrariaPacket.packUInt16(writer$1, row[colIdx], `monster_` + rowIdx.toString() + `_` + colIdx.toString());
        continue;
      }
      ;
    }
    function packRows(writer, rows) {
      let _writer = writer;
      let _rowIdx = 0;
      while (true) {
        let rowIdx = _rowIdx;
        let writer$1 = _writer;
        if (rowIdx >= rows.length) {
          return writer$1;
        }
        _rowIdx = rowIdx + 1 | 0;
        _writer = packRow(writer$1, rows[rowIdx], rowIdx);
        continue;
      }
      ;
    }
    function toBuffer(self) {
      if (self.length !== 2 || self[0].length !== 3 || self[1].length !== 3) {
        return {
          TAG: "Error",
          _0: {
            context: "Packet_CavernMonsterTypeSync.toBuffer",
            error: new Error("Expected a 2x3 array of monster types")
          }
        };
      } else {
        return ErrorAwarePacketWriter$TerrariaPacket.data(packRows(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("CavernMonsterTypeSync")), self));
      }
    }
    var Encode = {
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
      packRow,
      packRows,
      toBuffer
    };
    exports2.Decode = Decode;
    exports2.Encode = Encode;
    exports2.parse = parse;
    exports2.toBuffer = toBuffer;
  }
});

// src/packet/Packet_ClientSyncedInventory.js
var require_Packet_ClientSyncedInventory = __commonJS({
  "src/packet/Packet_ClientSyncedInventory.js"(exports2) {
    "use strict";
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    exports2.parse = parse;
  }
});

// src/packet/Packet_FoodPlatterTryPlacing.js
var require_Packet_FoodPlatterTryPlacing = __commonJS({
  "src/packet/Packet_FoodPlatterTryPlacing.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "y");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("FoodPlatterTryPlacing")), self.x, "x"), self.y, "y"), self.itemId, "itemId"), self.prefix, "prefix"), self.stack, "stack"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_NpcKilledNotification.js
var require_Packet_NpcKilledNotification = __commonJS({
  "src/packet/Packet_NpcKilledNotification.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "npcId");
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
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("NpcKilledNotification")), self.npcId, "npcId"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_ShieldStrengthsUpdate.js
var require_Packet_ShieldStrengthsUpdate = __commonJS({
  "src/packet/Packet_ShieldStrengthsUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "solar");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "vortex");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "nebula");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readUInt16(reader, "stardust");
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
    var Decode = {
      readUInt16: ErrorAwarePacketReader$TerrariaPacket.readUInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.packUInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ShieldStrengthsUpdate")), self.solar, "solar"), self.vortex, "vortex"), self.nebula, "nebula"), self.stardust, "stardust"));
    }
    var Encode = {
      packUInt16: ErrorAwarePacketWriter$TerrariaPacket.packUInt16,
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

// src/packet/Packet_CrystalInvasionWipeAll.js
var require_Packet_CrystalInvasionWipeAll = __commonJS({
  "src/packet/Packet_CrystalInvasionWipeAll.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    var Decode = {
      parse
    };
    function toBuffer(_self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("CrystalInvasionWipeAll")));
    }
    var Encode = {
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemDropId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "x");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "y");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vx");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "vy");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "stack");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "prefix");
      if (e$6.TAG !== "Ok") {
        return e$6;
      }
      let e$7 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "noDelay");
      if (e$7.TAG !== "Ok") {
        return e$7;
      }
      let e$8 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "itemId");
      if (e$8.TAG !== "Ok") {
        return e$8;
      }
      let e$9 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "timeLeftInWhichTheItemCannotBeTakenByEnemies");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ItemDropProtectedUpdate")), self.itemDropId, "itemDropId"), self.x, "x"), self.y, "y"), self.vx, "vx"), self.vy, "vy"), self.stack, "stack"), self.prefix, "prefix"), self.noDelay, "noDelay"), self.itemId, "itemId"), self.timeLeftInWhichTheItemCannotBeTakenByEnemies, "timeLeftInWhichTheItemCannotBeTakenByEnemies"));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_PiggyBankVoidLensUpdate.js
var require_Packet_PiggyBankVoidLensUpdate = __commonJS({
  "src/packet/Packet_PiggyBankVoidLensUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function tryReading(reader, context) {
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, context);
      if (e.TAG !== "Ok") {
        return e;
      }
      if (e._0 !== -1) {
        return {
          TAG: "Ok",
          _0: void 0
        };
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, context + "_expectedIdentity");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, context + "_expectedType");
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
    function pack(writer, self) {
      if (self !== void 0) {
        return ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, self.expectedIdentity, "expectedIdentity"), self.expectedType, "expectedType");
      } else {
        return ErrorAwarePacketWriter$TerrariaPacket.packInt16(writer, -1, "trackedProjectileReference");
      }
    }
    var TrackedProjectileReference = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      tryReading,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
      pack
    };
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(pack(pack(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PiggyBankVoidLensUpdate")), self.playerId, "playerId"), self.piggyBankProj), self.voidLensChest));
    }
    var Encode = {
      Writer: void 0,
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      setType: ErrorAwarePacketWriter$TerrariaPacket.setType,
      data: ErrorAwarePacketWriter$TerrariaPacket.data,
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
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "ladyBugLuckTimeLeft");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "torchLuck");
      if (e$2.TAG !== "Ok") {
        return e$2;
      }
      let e$3 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "luckPotion");
      if (e$3.TAG !== "Ok") {
        return e$3;
      }
      let e$4 = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "hasGardenGnomeNearby");
      if (e$4.TAG !== "Ok") {
        return e$4;
      }
      let hasGardenGnomeNearby = e$4._0 === 1;
      let e$5 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "equipmentBasedLuckBonus");
      if (e$5.TAG !== "Ok") {
        return e$5;
      }
      let e$6 = ErrorAwarePacketReader$TerrariaPacket.readSingle(reader, "coinLuck");
      if (e$6.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            playerId: e._0,
            ladyBugLuckTimeLeft: e$1._0,
            torchLuck: e$2._0,
            luckPotion: e$3._0,
            hasGardenGnomeNearby,
            equipmentBasedLuckBonus: e$5._0,
            coinLuck: e$6._0
          }
        };
      } else {
        return e$6;
      }
    }
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readSingle: ErrorAwarePacketReader$TerrariaPacket.readSingle,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.packSingle(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("PlayerLuckFactorsUpdate")), self.playerId, "playerId"), self.ladyBugLuckTimeLeft, "ladyBugLuckTimeLeft"), self.torchLuck, "torchLuck"), self.luckPotion, "luckPotion"), self.hasGardenGnomeNearby ? 1 : 0, "hasGardenGnomeNearby"), self.equipmentBasedLuckBonus, "equipmentBasedLuckBonus"), self.coinLuck, "coinLuck"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_MinionAttackTargetUpdate.js
var require_Packet_MinionAttackTargetUpdate = __commonJS({
  "src/packet/Packet_MinionAttackTargetUpdate.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "targetNpcId");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("MinionAttackTargetUpdate")), self.playerId, "playerId"), self.targetNpcId, "targetNpcId"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_ItemForceIntoNearestChest.js
var require_Packet_ItemForceIntoNearestChest = __commonJS({
  "src/packet/Packet_ItemForceIntoNearestChest.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt16(reader, "slot");
      if (e.TAG === "Ok") {
        return {
          TAG: "Ok",
          _0: {
            slot: e._0
          }
        };
      } else {
        return e;
      }
    }
    var Decode = {
      readInt16: ErrorAwarePacketReader$TerrariaPacket.readInt16,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt16(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("ItemForceIntoNearestChest")), self.slot, "slot"));
    }
    var Encode = {
      packInt16: ErrorAwarePacketWriter$TerrariaPacket.packInt16,
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

// src/packet/Packet_InitialTileSectionsRequest.js
var require_Packet_InitialTileSectionsRequest = __commonJS({
  "src/packet/Packet_InitialTileSectionsRequest.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "x");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "y");
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
    var Decode = {
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("InitialTileSectionsRequest")), self.x, "x"), self.y, "y"));
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
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readByte(reader, "playerId");
      if (e.TAG !== "Ok") {
        return e;
      }
      let e$1 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "anglerQuestsFinished");
      if (e$1.TAG !== "Ok") {
        return e$1;
      }
      let e$2 = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "golferScoreAccumulated");
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
    var Decode = {
      readByte: ErrorAwarePacketReader$TerrariaPacket.readByte,
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.packByte(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("AnglerQuestsCompletedAmount")), self.playerId, "playerId"), self.anglerQuestsFinished, "anglerQuestsFinished"), self.golferScoreAccumulated, "golferScoreAccumulated"));
    }
    var Encode = {
      packByte: ErrorAwarePacketWriter$TerrariaPacket.packByte,
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_CrystalInvasionSendWaitTime.js
var require_Packet_CrystalInvasionSendWaitTime = __commonJS({
  "src/packet/Packet_CrystalInvasionSendWaitTime.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketReader$TerrariaPacket = require_ErrorAwarePacketReader();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    var Packetreader = require_packetreader().default;
    var Packetwriter = require_packetwriter().default;
    function parse(payload) {
      let reader = new Packetreader(payload);
      let e = ErrorAwarePacketReader$TerrariaPacket.readInt32(reader, "timeLeftBetweenWaves");
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
    var Decode = {
      readInt32: ErrorAwarePacketReader$TerrariaPacket.readInt32,
      parse
    };
    function toBuffer(self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.packInt32(ErrorAwarePacketWriter$TerrariaPacket.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("CrystalInvasionSendWaitTime")), self.timeLeftBetweenWaves, "timeLeftBetweenWaves"));
    }
    var Encode = {
      packInt32: ErrorAwarePacketWriter$TerrariaPacket.packInt32,
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

// src/packet/Packet_DungeonDefendersEventAttemptSkipWait.js
var require_Packet_DungeonDefendersEventAttemptSkipWait = __commonJS({
  "src/packet/Packet_DungeonDefendersEventAttemptSkipWait.js"(exports2) {
    "use strict";
    var PacketType$TerrariaPacket = require_PacketType();
    var ErrorAwarePacketWriter$TerrariaPacket = require_ErrorAwarePacketWriter();
    function parse(_payload) {
      return {
        TAG: "Ok",
        _0: void 0
      };
    }
    var Decode = {
      parse
    };
    function toBuffer(_self) {
      return ErrorAwarePacketWriter$TerrariaPacket.data(ErrorAwarePacketWriter$TerrariaPacket.setType(ErrorAwarePacketWriter$TerrariaPacket.make(), PacketType$TerrariaPacket.toInt("DungeonDefendersEventAttemptSkipWait")));
    }
    var Encode = {
      Writer: void 0,
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

// src/Parser.js
var require_Parser = __commonJS({
  "src/Parser.js"(exports2) {
    "use strict";
    var Stdlib_Lazy = (init_Stdlib_Lazy(), __toCommonJS(Stdlib_Lazy_exports));
    var Stdlib_Result = (init_Stdlib_Result(), __toCommonJS(Stdlib_Result_exports));
    var Primitive_exceptions2 = (init_Primitive_exceptions(), __toCommonJS(Primitive_exceptions_exports));
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
    function mapPacket(buffer, fn) {
      return Stdlib_Result.mapError(Stdlib_Result.map(buffer, fn), (e) => ({
        TAG: "ReaderError",
        _0: e
      }));
    }
    function makeParsers(parse2, toPacket, toLazyPacket) {
      let parseWrapped = (payload, _fromServer) => mapPacket(parse2(payload), toPacket);
      let parseLazyWrapped = (payload, _fromServer) => ({
        TAG: "Ok",
        _0: toLazyPacket(Stdlib_Lazy.make(() => parse2(payload)))
      });
      return {
        parse: parseWrapped,
        parseLazy: parseLazyWrapped
      };
    }
    function makeParsersWithFromServer(parse2, toPacket, toLazyPacket) {
      let parseWrapped = (payload, fromServer) => mapPacket(parse2(payload, fromServer), toPacket);
      let parseLazyWrapped = (payload, fromServer) => ({
        TAG: "Ok",
        _0: toLazyPacket(Stdlib_Lazy.make(() => parse2(payload, fromServer)))
      });
      return {
        parse: parseWrapped,
        parseLazy: parseLazyWrapped
      };
    }
    function getParsers(packetType, fromServer) {
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
              _0: makeParsers(Packet_ConnectRequest$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_Disconnect$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_PlayerSlotSet$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerInfo$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerInventorySlot$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_WorldDataRequest$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_WorldInfo$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_InitialTileSectionsRequest$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_Status$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_TileSectionSend$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_TileSectionFrame$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerSpawn$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerUpdate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_PlayerActive$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerHealth$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_TileModify$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_TimeSet$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_DoorUse$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_TileSquareSend$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ItemDropUpdate$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ItemOwner$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcUpdate$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_NpcItemStrike$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ProjectileSync$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_NpcStrike$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ProjectileDestroy$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PvpToggle$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_ChestOpen$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ChestItem$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ActiveContainerSync$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ChestPlace$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_HealEffect$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_Zones$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_PasswordRequired$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_PasswordSend$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_ItemOwnerRemove$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_NpcTalk$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerAnimation$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerMana$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ManaEffect$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerTeam$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_SignRead$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_SignNew$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_LiquidSet$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_PlayerSpawnSelf$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerBuffsSet$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_NpcSpecialEffect$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ChestOrTempleUnlock$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_NpcBuffAdd$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcBuffUpdate$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerBuffAdd$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_NpcNameUpdate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_GoodEvilUpdate$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_HarpPlay$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_SwitchHit$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_NpcHomeUpdate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_BossOrInvasionSpawn$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerDodge$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_TilePaint$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_WallPaint$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_Teleport$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerHealOther$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_DimensionsUpdate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_ClientUuid$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ChestName$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcCatch$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcRelease$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_TravellingMerchantInventory$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_TeleportationPotion$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_AnglerQuest$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_AnglerQuestComplete$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_AnglerQuestsCompletedAmount$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_TemporaryAnimationCreate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_InvasionProgressReport$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ObjectPlace$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_PlayerChestIndexSync$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_CombatNumberCreate$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsersWithFromServer(Packet_NetModuleLoad$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcKillCount$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerStealth$TerrariaPacket.parse, (a) => ({
              TAG: "PlayerStealth",
              _0: a
            }), (a) => ({
              TAG: "PlayerStealth",
              _0: a
            }))
          };
        case "ItemForceIntoNearestChest":
          if (fromServer) {
            return {
              TAG: "Error",
              _0: "ItemForceIntoNearestChestFromServer"
            };
          } else {
            return {
              TAG: "Ok",
              _0: makeParsers(Packet_ItemForceIntoNearestChest$TerrariaPacket.parse, (a) => ({
                TAG: "ItemForceIntoNearestChest",
                _0: a
              }), (a) => ({
                TAG: "ItemForceIntoNearestChest",
                _0: a
              }))
            };
          }
        case "TileEntityUpdate":
          if (fromServer) {
            return {
              TAG: "Ok",
              _0: makeParsers(Packet_TileEntityUpdate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_TileEntityPlace$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_ItemDropModify$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_ItemFramePlace$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ItemDropInstancedUpdate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_EmoteBubble$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ExtraValueSync$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_SocialHandshake$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_Unused$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_PortalKill$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerTeleportPortal$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcKilledNotification$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_EventNotification$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_MinionTargetUpdate$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_NpcTeleportPortal$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_ShieldStrengthsUpdate$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_NebulaLevelUp$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_MoonLordCountdown$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcShopItem$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_GemLockToggle$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_SmokePoof$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_ChatMessageSmart$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_WiredCannonShot$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_MassWireOperation$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_MassWireOperationPay$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_PartyToggle$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_TreeGrowFx$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_CrystalInvasionStart$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_CrystalInvasionWipeAll$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_MinionAttackTargetUpdate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_CrystalInvasionSendWaitTime$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerDamage$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerDeath$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_CombatTextCreate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_Emoji$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_TileEntityDisplayDollItemSync$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_TileEntityInteractionRequest$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_WeaponsRackTryPlacing$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_TileEntityHatRackItemSync$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_TilePickingSync$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_RevengeMarkerSync$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_RevengeMarkerRemove$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_GolfBallLandInCup$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_ClientFinishConnectingToServer$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcFishOut$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcTamper$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_LegacySoundPlay$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_FoodPlatterTryPlacing$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PlayerLuckFactorsUpdate$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_PlayerDead$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_CavernMonsterTypeSync$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_NpcBuffRemovalRequest$TerrariaPacket.parse, (a) => ({
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
              _0: makeParsers(Packet_ClientSyncedInventory$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_CountsAsHostForGameplaySet$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_CreditsOrSlimeTransform$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_LucyAxeMessage$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_PiggyBankVoidLensUpdate$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_DungeonDefendersEventAttemptSkipWait$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_HaveDryadDoStardewAnimation$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ItemDropShimmeredUpdate$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ShimmerEffectOrCoinLuck$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_LoadoutSwitch$TerrariaPacket.parse, (a) => ({
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
            _0: makeParsers(Packet_ItemDropProtectedUpdate$TerrariaPacket.parse, (a) => ({
              TAG: "ItemDropProtectedUpdate",
              _0: a
            }), (a) => ({
              TAG: "ItemDropProtectedUpdate",
              _0: a
            }))
          };
      }
    }
    function parse(buffer, fromServer) {
      let match = buffer.length;
      if (!(match > 2 || match < 0)) {
        return {
          TAG: "Error",
          _0: "InvalidPacketLength"
        };
      }
      let packetType = PacketType$TerrariaPacket.fromInt(buffer[2]);
      if (packetType === void 0) {
        return {
          TAG: "Error",
          _0: "InvalidPacketType"
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
          _0: "InvalidPacketLength"
        };
      }
      let packetType = PacketType$TerrariaPacket.fromInt(buffer[2]);
      if (packetType === void 0) {
        return {
          TAG: "Error",
          _0: "InvalidPacketType"
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
        let obj = Primitive_exceptions2.internalToException(raw_obj);
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
