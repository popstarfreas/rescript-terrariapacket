/// <reference types="node" />

import { Buffer as Buffer_2 } from 'buffer';
import Color from '@popstarfreas/packetfactory/color';
import NetworkText from '@popstarfreas/packetfactory/networktext';

declare const Action: {
    toInt: (_1: Action_t) => number;
    toString: (_1: Action_t) => string;
    fromInt: (_1: number) => (undefined | Action_t)
};

declare const Action_2: { toInt: (_1: Action_t_2) => number; fromInt: (_1: number) => (undefined | Action_t_2) };

declare const Action_fromInt: (_1: number) => (undefined | Action_t);

declare const Action_fromInt_2: (_1: number) => (undefined | Action_t_2);

declare type Action_t =
"PlaceChest"
| "KillChest"
| "PlaceDresser"
| "KillDresser"
| "PlaceContainer"
| "KillContainer";

declare type Action_t_2 =
"KillTile"
| "PlaceTile"
| "KillWall"
| "PlaceWall"
| "KillTileNoItem"
| "PlaceWire"
| "KillWire"
| "PoundTile"
| "PlaceActuator"
| "KillActuator"
| "PlaceWire2"
| "KillWire2"
| "PlaceWire3"
| "KillWire3"
| "SlopeTile"
| "FrameTrack"
| "PlaceWire4"
| "KillWire4"
| "PokeLogicGate"
| "Actuate"
| "KillTile2"
| "ReplaceTile"
| "ReplaceWall"
| "SlopePoundTile";

declare const Action_toInt: (_1: Action_t) => number;

declare const Action_toInt_2: (_1: Action_t_2) => number;

declare const Action_toString: (_1: Action_t) => string;

declare type activeTile = { readonly tileType: number; readonly frame: (undefined | frame) };

declare type activeTile_2 = {
    readonly tileType: number;
    readonly slope: number;
    readonly frame: (undefined | frame_2)
};

declare type ambience = {
    readonly playerId: number;
    readonly seed: number;
    readonly skyEntityType: number
};

export declare namespace AnglerQuestCompletePacket {
    export {
        t_2 as t
    }
}

export declare namespace AnglerQuestPacket {
    export {
        t
    }
}

export declare namespace Array16 {
    export {
        fromArray,
        asArray,
        Array16_2 as Array16
    }
}

declare type Array16_2<A> = [
A, A, A, A,
A, A, A, A,
A, A, A, A,
A, A, A, A
];

export declare namespace ArrayExt {
    export {
        intoChunks,
        getOr
    }
}

declare function asArray<A>(self: Array16_2<A>): A[];

declare type bestiary = { readonly unlockType: bestiaryUnlockType; readonly npcId: number };

declare type bestiaryUnlockType =
"Sight"
| "Chat"
| { TAG: "Kill"; _0: killCount };

export declare namespace BitFlags {
    export {
        fromByte,
        fromFlags,
        fromArray_2 as fromArray,
        flag1,
        flag2,
        flag3,
        flag4,
        flag5,
        flag6,
        flag7,
        flag8,
        flagN,
        forEach,
        toByte,
        t_74 as t
    }
}

export declare namespace BossOrInvasionSpawnPacket {
    export {
        spawnType,
        t_3 as t
    }
}

export declare namespace ChatMessageSmartPacket {
    export {
        t_4 as t
    }
}

declare type Chest_t = {
    readonly id: number; 
    readonly x: number; 
    readonly y: number; 
    readonly name: string
};

export declare namespace ChestItemPacket {
    export {
        t_5 as t
    }
}

export declare namespace ChestOrTempleUnlockPacket {
    export {
        unlockType,
        t_6 as t
    }
}

export declare namespace ChestPlacePacket {
    export {
        Action_t,
        t_7 as t,
        Action_toInt,
        Action_fromInt,
        Action_toString,
        parse,
        toBuffer,
        Action
    }
}

export declare namespace ClientFinishConnectingToServerPacket {
    export {
        t_8 as t
    }
}

export declare namespace ClientUuidPacket {
    export {
        t_82 as t,
        parse_21 as parse,
        toBuffer_21 as toBuffer
    }
}

declare type coinLuck = { readonly position: t_43<number>; readonly amount: number };

declare type commandId = string;

export declare namespace ConnectRequestPacket {
    export {
        t_9 as t,
        parse_2 as parse,
        toBuffer_2 as toBuffer
    }
}

declare type context =
"ReviveFromDeath"
| "SpawningIntoWorld"
| "RecallFromItem";

declare type control = {
    readonly isHoldingUp: boolean;
    readonly isHoldingDown: boolean;
    readonly isHoldingLeft: boolean;
    readonly isHoldingRight: boolean;
    readonly isHoldingJump: boolean;
    readonly isHoldingItemUse: boolean
};

export declare namespace CountsAsHostForGameplaySetPacket {
    export {
        t_10 as t
    }
}

declare type CreativePower =
| { readonly TAG: "FreezeTime"; readonly _0: boolean }
| "StartDayImmediately"
| "StartNoonImmediately"
| "StartNightImmediately"
| "StartMidnightImmediately"
| { readonly TAG: "GodmodePower"; readonly _0: PerPlayerTogglePower }
| { readonly TAG: "ModifyWindDirectionAndStrength"; readonly _0: number }
| { readonly TAG: "ModifyRainPower"; readonly _0: number }
| { readonly TAG: "ModifyTimeRate"; readonly _0: number }
| { readonly TAG: "FreezeRainPower"; readonly _0: boolean }
| { readonly TAG: "FreezeWindDirectionAndStrength"; readonly _0: boolean }
| { readonly TAG: "FarPlacementRangePower"; readonly _0: PerPlayerTogglePower }
| { readonly TAG: "DifficultySliderPower"; readonly _0: number }
| { readonly TAG: "StopBiomeSpreadPower"; readonly _0: boolean }
| { readonly TAG: "SpawnRateSliderPerPlayerPower"; readonly _0: PerPlayerSliderPower };

declare type creativePowerPermission = { readonly powerType: number; readonly powerLevel: powerLevel };

export declare namespace CreativePowers {
    export {
        toString_2 as toString,
        PerPlayerSliderPower,
        PerPlayerTogglePower,
        CreativePower,
        CreativePowerType
    }
}

declare type CreativePowerType =
| "FreezeTime"
| "StartDayImmediately"
| "StartNoonImmediately"
| "StartNightImmediately"
| "StartMidnightImmediately"
| "GodmodePower"
| "ModifyWindDirectionAndStrength"
| "ModifyRainPower"
| "ModifyTimeRate"
| "FreezeRainPower"
| "FreezeWindDirectionAndStrength"
| "FarPlacementRangePower"
| "DifficultySliderPower"
| "StopBiomeSpreadPower"
| "SpawnRateSliderPerPlayerPower";

declare const CreativePowerType: {
    toString: (data: CreativePowerType) => string;
    fromInt: (value: number) => CreativePowerType | undefined;
    toInt: (data: CreativePowerType) => number;
};

declare type creativeUnlock = { readonly itemId: number; readonly researchedCount: number };

export declare namespace CreditsOrSlimeTransformPacket {
    export {
        EventType_t,
        t_11 as t
    }
}

export declare namespace CrystalInvasionStartPacket {
    export {
        t_12 as t
    }
}

/**
 * Finalizes the packet and retrieves the data as a Buffer.
 * @param writer The packet writer instance.
 * @returns A result type containing either the Buffer or a packError.
 */
declare function data(writer: ErrorAwarePacketWriter_2): DataResult;

/**
 * Represents an error result of the data extraction.
 */
declare type DataError = { TAG: "Error"; _0: PackError };

/**
 * Represents a successful result of the data extraction.
 */
declare type DataOk = { TAG: "Ok"; _0: Buffer };

/**
 * Represents the result of extracting data from the packet writer, which can be a Buffer or an error.
 */
declare type DataResult = DataOk | DataError;

declare type difficulty = "Softcore" | "Mediumcore" | "Hardcore";

declare type dimensionName = string;

export declare namespace DimensionsUpdatePacket {
    export {
        ip,
        dimensionName,
        port,
        t_13 as t,
        UpdateType_t
    }
}

declare type direction = "Left" | "Right";

declare type direction_2 = "Left" | "Right";

declare type Entity_displayDoll = { readonly items: Array<(undefined | Entity_displayItem)>; readonly dyes: Array<(undefined | Entity_displayItem)> };

declare type Entity_displayItem = {
    readonly netId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type Entity_foodPlatter = Entity_displayItem;

declare type Entity_hatRack = { readonly items: Array<(undefined | Entity_displayItem)>; readonly dyes: Array<(undefined | Entity_displayItem)> };

declare type Entity_itemFrame = Entity_displayItem;

declare type Entity_kind = 
    { TAG: "DisplayDoll"; _0: Entity_displayDoll }
| { TAG: "FoodPlatter"; _0: Entity_foodPlatter }
| { TAG: "HatRack"; _0: Entity_hatRack }
| { TAG: "ItemFrame"; _0: Entity_itemFrame }
| { TAG: "LogicSensor"; _0: Entity_logicSensor }
| { TAG: "TeleportationPylon"; _0: Entity_teleportationPylon }
| { TAG: "TrainingDummy"; _0: Entity_trainingDummy }
| { TAG: "WeaponsRack"; _0: Entity_weaponsRack };

declare type Entity_logicSensor = { readonly checkType: number; readonly on: boolean };

declare type Entity_t = {
    readonly entityType: number; 
    readonly x: number; 
    readonly y: number; 
    readonly entityKind: Entity_kind
};

declare type Entity_teleportationPylon = void;

declare type Entity_trainingDummy = { readonly npcSlotId: number };

declare type Entity_weaponsRack = Entity_displayItem;

export declare namespace ErrorAwarePacketWriter {
    export {
        packSingle,
        packInt32,
        packByte,
        packInt16,
        packUInt64,
        packString,
        packSByte,
        packBytes,
        packColor,
        setType,
        data,
        make,
        untypedT,
        PackError,
        ErrorAwarePacketWriter_2 as ErrorAwarePacketWriter,
        DataOk,
        DataError,
        DataResult
    }
}

/**
 * An opaque type representing an initialized packet writer.
 */
declare class ErrorAwarePacketWriter_2 { }

declare type eventInfo = {
    readonly shadowOrbSmashed: boolean;
    readonly killedBoss1: boolean;
    readonly killedBoss2: boolean;
    readonly killedBoss3: boolean;
    readonly hardMode: boolean;
    readonly killedClown: boolean;
    readonly serverSidedCharacters: boolean;
    readonly killedPlantBoss: boolean;
    readonly killedMechBoss: boolean;
    readonly killedMechBoss2: boolean;
    readonly killedMechBoss3: boolean;
    readonly killedAnyMechBoss: boolean;
    readonly cloudBg: boolean;
    readonly crimson: boolean;
    readonly pumpkinMoon: boolean;
    readonly snowMoon: boolean;
    readonly expertMode: boolean;
    readonly fastForwardTime: boolean;
    readonly slimeRain: boolean;
    readonly killedKingSlime: boolean;
    readonly killedQueenBee: boolean;
    readonly killedFishron: boolean;
    readonly killedMartians: boolean;
    readonly killedAncientCultist: boolean;
    readonly killedMoonLord: boolean;
    readonly killedPumpking: boolean;
    readonly killedMourningWood: boolean;
    readonly killedIceQueen: boolean;
    readonly killedSantank: boolean;
    readonly killedEverscream: boolean;
    readonly killedGolem: boolean;
    readonly birthdayParty: boolean;
    readonly killedPirates: boolean;
    readonly killedFrostLegion: boolean;
    readonly killedGoblins: boolean;
    readonly sandstorm: boolean;
    readonly dungeonDefendersEvent: boolean;
    readonly killedDungeonDefendersTier1: boolean;
    readonly killedDungeonDefendersTier2: boolean;
    readonly killedDungeonDefendersTier3: boolean;
    readonly combatBookUsed: boolean;
    readonly manualLanterns: boolean;
    readonly killedSolarTower: boolean;
    readonly killedVortexTower: boolean;
    readonly killedNebulaTower: boolean;
    readonly killedStardustTower: boolean;
    readonly forceHalloween: boolean;
    readonly forceChristmas: boolean;
    readonly boughtCat: boolean;
    readonly boughtDog: boolean;
    readonly boughtBunny: boolean;
    readonly freeCake: boolean;
    readonly drunkWorld: boolean;
    readonly killedEmpressOfLight: boolean;
    readonly killedQueenSlime: boolean;
    readonly getGoodWorld: boolean;
    readonly tenthAnniversaryWorld: boolean;
    readonly dontStarveWorld: boolean;
    readonly downedDeerClops: boolean;
    readonly notTheBeesWorld: boolean;
    readonly remixWorld: boolean;
    readonly unlockedSlimeBlueSpawn: boolean;
    readonly combatBookVolumeTwoWasUsed: boolean;
    readonly peddlersSatchelWasUsed: boolean;
    readonly unlockedSlimeGreenSpawn: boolean;
    readonly unlockedSlimeOldSpawn: boolean;
    readonly unlockedSlimePurpleSpawn: boolean;
    readonly unlockedSlimeRainbowSpawn: boolean;
    readonly unlockedSlimeRedSpawn: boolean;
    readonly unlockedSlimeYellowSpawn: boolean;
    readonly unlockedSlimeCopperSpawn: boolean;
    readonly fastForwardTimeToDusk: boolean;
    readonly noTrapsWorld: boolean;
    readonly zenithWorld: boolean;
    readonly unlockedTruffleSpawn: boolean;
};

declare type EventType_t = 
"CreditsTimeRemainingSet"
| "CopperSlimeTransform"
| "ElderSlimeTransform";

export declare namespace ExtraValueSyncPacket {
    export {
        t_14 as t
    }
}

declare function flag1(t: t_74): boolean;

declare function flag2(t: t_74): boolean;

declare function flag3(t: t_74): boolean;

declare function flag4(t: t_74): boolean;

declare function flag5(t: t_74): boolean;

declare function flag6(t: t_74): boolean;

declare function flag7(t: t_74): boolean;

declare function flag8(t: t_74): boolean;

declare function flagN(t: t_74, n: number): boolean;

declare type flags = {
    readonly hideStatusTextPercent: boolean;
    readonly statusTextHasShadows: boolean;
    readonly runCheckBytes: boolean
};

declare type Float_t = t_86<number>;

declare function forEach(t: t_74, callback: (flag: boolean) => void): void;

declare type frame = { readonly x: number; readonly y: number };

declare type frame_2 = { readonly x: number; readonly y: number };

declare function fromArray<A>(a: A[]): Array16_2<A> | undefined;

declare function fromArray_2(flags: boolean[]): t_74;

declare function fromByte(byte: number): t_74;

declare function fromFlags(
flag1: boolean,
flag2: boolean,
flag3: boolean,
flag4: boolean,
flag5: boolean,
flag6: boolean,
flag7: boolean,
flag8: boolean
): t_74;

declare function getOr<A>(a: A[], index: number, or: A): A;

declare type gravityDirection = "Normal" | "Inverted";

export declare namespace HaveDryadDoStardewAnimationPacket {
    export {
        t_15 as t
    }
}

declare type Int_t = t_86<number>;

declare function intoChunks<A>(a: A[], chunkSize: number): A[][];

export declare namespace InvasionProgressReportPacket {
    export {
        t_16 as t
    }
}

declare type ip = string;

export declare namespace ItemDropShimmeredUpdatePacket {
    export {
        t_17 as t
    }
}

export declare namespace ItemDropUpdatePacket {
    export {
        parse_3 as parse,
        toBuffer_3 as toBuffer,
        t_18 as t
    }
}

export declare namespace ItemOwnerPacket {
    export {
        t_19 as t,
        parse_4 as parse,
        toBuffer_4 as toBuffer
    }
}

declare type killCount = number;

declare type liquid = { readonly changes: liquidChange[] };

declare type liquid_2 = { readonly liquidValue: number; readonly liquidType: number };

declare type liquid_3 = { readonly liquidValue: number; readonly liquidType: number };

declare type liquidChange = {
    readonly x: number;
    readonly y: number;
    readonly amount: number;
    readonly liquidType: number
};

export declare namespace LoadoutSwitchPacket {
    export {
        t_20 as t
    }
}

/**
 * Creates a new, uninitialized packet writer.
 * @returns An untypedT instance.
 */
declare function make(): untypedT;

declare type message = string;

declare type mode = "Classic" | "Journey";

declare type NetModuleLoad =
    { TAG: "Liquid"; _0: liquid }
| { TAG: "ClientText"; _0: commandId; _1: message }
| { TAG: "ServerText"; _0: playerId; _1: NetworkText; _2: Color }
| { TAG: "Ping"; _0: position }
| { TAG: "Ambience"; _0: ambience }
| { TAG: "Bestiary"; _0: bestiary }
| { TAG: "CreativeUnlocks"; _0: creativeUnlock }
| { TAG: "CreativePower"; _0: CreativePower }
| { TAG: "CreativeUnlocksPlayerReport"; _0: unlockReport }
| { TAG: "TeleportPylon"; _0: teleportPylon }
| { TAG: "Particles"; _0: particle }
| { TAG: "CreativePowerPermissions"; _0: creativePowerPermission };

export declare namespace NetModuleLoadPacket {
    export {
        parse_5 as parse,
        toBuffer_5 as toBuffer,
        commandId,
        message,
        playerId,
        liquidChange,
        liquid,
        position,
        ambience,
        killCount,
        bestiaryUnlockType,
        bestiary,
        creativeUnlock,
        unlockReport,
        pylonAction,
        teleportPylon,
        particle,
        powerLevel,
        creativePowerPermission,
        NetModuleLoad,
        NetModuleType_t,
        toBufferOk,
        toBufferError
    }
}

declare type NetModuleType_t =
"Liquid"
| "Text"
| "Ping"
| "Ambience"
| "Bestiary"
| "CreativeUnlocks"
| "CreativePower"
| "CreativeUnlocksPlayerReport"
| "TeleportPylon"
| "Particles"
| "CreativePowerPermissions";

export declare namespace NpcBuffRemovalRequestPacket {
    export {
        t_21 as t
    }
}

export declare namespace NpcBuffUpdatePacket {
    export {
        t_22 as t
    }
}

export declare namespace NpcCatchPacket {
    export {
        t_23 as t
    }
}

export declare namespace NpcFishOutPacket {
    export {
        t_24 as t
    }
}

export declare namespace NpcHomeUpdatePacket {
    export {
        t_25 as t
    }
}

export declare namespace NpcKillCountPacket {
    export {
        t_26 as t
    }
}

export declare namespace NpcNameUpdatePacket {
    export {
        t_27 as t
    }
}

export declare namespace NpcShopItemPacket {
    export {
        t_28 as t
    }
}

export declare namespace NpcTalkPacket {
    export {
        t_29 as t
    }
}

export declare namespace NpcTeleportPortalPacket {
    export {
        t_30 as t
    }
}

export declare namespace ObjectPlacePacket {
    export {
        direction,
        t_31 as t,
        parse_6 as parse,
        toBuffer_6 as toBuffer
    }
}

declare type other = 
"FallDamage"
| "Drowning"
| "Lava"
| "FallDamage2"
| "DemonAltar"
| "CompanionCube"
| "Suffocation"
| "Burning"
| "Poison"
| "Electrified"
| "WallOfFleshEscape"
| "WallOfFleshLicked"
| "ChaosState"
| "ChaosState2Male"
| "ChaosState3Female";

declare type other_2 = 
"FallDamage"
| "Drowning"
| "Lava"
| "FallDamage2"
| "DemonAltar"
| "CompanionCube"
| "Suffocation"
| "Burning"
| "Poison"
| "Electrified"
| "WallOfFleshEscape"
| "WallOfFleshLicked"
| "ChaosState"
| "ChaosState2Male"
| "ChaosState3Female";

/**
 * Packs a byte (8-bit unsigned integer).
 * @param writer The packet writer instance.
 * @param value The byte value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
declare function packByte(writer: ErrorAwarePacketWriter_2, value: number, context: string): ErrorAwarePacketWriter_2;

/**
 * Packs an array of bytes.
 * @param writer The packet writer instance.
 * @param value The array of byte values to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
declare function packBytes(writer: ErrorAwarePacketWriter_2, value: number[], context: string): ErrorAwarePacketWriter_2;

/**
 * Packs a color.
 * @param writer The packet writer instance.
 * @param value The color value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
declare function packColor(writer: ErrorAwarePacketWriter_2, value: Color, context: string): ErrorAwarePacketWriter_2;

/**
 * Represents an error that occurred during packet packing.
 */
declare type PackError = {
    readonly context: string;
    readonly error: Error;
};

/**
 * Packs a 16-bit signed integer.
 * @param writer The packet writer instance.
 * @param value The integer value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
declare function packInt16(writer: ErrorAwarePacketWriter_2, value: number, context: string): ErrorAwarePacketWriter_2;

/**
 * Packs a 32-bit signed integer.
 * @param writer The packet writer instance.
 * @param value The integer value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
declare function packInt32(writer: ErrorAwarePacketWriter_2, value: number, context: string): ErrorAwarePacketWriter_2;

/**
 * Packs a signed byte (8-bit signed integer).
 * @param writer The packet writer instance.
 * @param value The sbyte value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
declare function packSByte(writer: ErrorAwarePacketWriter_2, value: number, context: string): ErrorAwarePacketWriter_2;

/**
 * Packs a single-precision floating point number.
 * @param writer The packet writer instance.
 * @param value The float value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
declare function packSingle(writer: ErrorAwarePacketWriter_2, value: number, context: string): ErrorAwarePacketWriter_2;

/**
 * Packs a string.
 * @param writer The packet writer instance.
 * @param value The string value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
declare function packString(writer: ErrorAwarePacketWriter_2, value: string, context: string): ErrorAwarePacketWriter_2;

/**
 * Packs a 64-bit unsigned integer.
 * @param writer The packet writer instance.
 * @param value The bigint value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
declare function packUInt64(writer: ErrorAwarePacketWriter_2, value: bigint, context: string): ErrorAwarePacketWriter_2;

declare const parse: (_1: Buffer) => (undefined | t_7);

declare const parse_10: (_1: Buffer) => (undefined | t_42);

declare const parse_11: (_1: Buffer) => (undefined | t_59);

declare const parse_12: (_1: Buffer) => (undefined | t_60);

declare const parse_13: (_1: Buffer) => (undefined | t_64);

declare const parse_14: (_1: Buffer) => (undefined | t_69);

declare function parse_15(payload: Buffer_2): t_76;

declare const parse_16: (_1: Buffer) => (undefined | t_77);

declare const parse_17: (_1: Buffer) => (undefined | t_78);

declare const parse_18: (_1: Buffer) => (undefined | t_79);

declare function parse_19(payload: Buffer_2): t_80;

declare const parse_2: (_1: Buffer) => (undefined | t_9);

declare const parse_20: (_1: Buffer) => (undefined | t_81);

declare const parse_21: (_1: Buffer) => (undefined | t_82);

declare const parse_22: (_1: Buffer) => (undefined | t_83);

declare const parse_23: (_1: Buffer) => (undefined | t_84);

declare function parse_24(buffer: Buffer): WorldInfo | undefined;

declare function parse_25(payload: Buffer_2): t_85;

declare function parse_3(payload: Buffer): t_18 | undefined;

declare const parse_4: (_1: Buffer) => (undefined | t_19);

declare function parse_5(buffer: Buffer, fromServer: boolean): NetModuleLoad | undefined;

declare const parse_6: (_1: Buffer) => (undefined | t_31);

declare const parse_7: (_1: Buffer) => (undefined | t_34);

declare const parse_8: (_1: Buffer) => (undefined | t_37);

declare const parse_9: (_1: Buffer) => (undefined | t_40);

declare type particle = {
    readonly particleType: number;
    readonly x: number;
    readonly y: number;
    readonly vx: number;
    readonly vy: number;
    readonly shaderIndex: number;
    readonly invokedByPlayer: number
};

export declare namespace PartyTogglePacket {
    export {
        t_32 as t
    }
}

declare type PerPlayerSliderPower = {
    readonly playerId: number;
    readonly value: number;
};

declare type PerPlayerTogglePower =
| { readonly TAG: "Everyone"; readonly _0: boolean[] }
| { readonly TAG: "Player"; readonly _0: number; readonly _1: boolean };

export declare namespace PlayerActivePacket {
    export {
        parse_25 as parse,
        toBuffer_25 as toBuffer,
        t_85 as t
    }
}

export declare namespace PlayerAnimationPacket {
    export {
        t_33 as t
    }
}

export declare namespace PlayerBuffAddPacket {
    export {
        t_34 as t,
        parse_7 as parse,
        toBuffer_7 as toBuffer
    }
}

export declare namespace PlayerChestIndexSyncPacket {
    export {
        t_35 as t
    }
}

export declare namespace PlayerDamagePacket {
    export {
        t_84 as t,
        parse_23 as parse,
        toBuffer_23 as toBuffer
    }
}

export declare namespace PlayerDeadPacket {
    export {
        t_36 as t
    }
}

export declare namespace PlayerDeathPacket {
    export {
        t_37 as t,
        parse_8 as parse,
        toBuffer_8 as toBuffer
    }
}

export declare namespace PlayerDeathReason {
    export {
        other_2 as other,
        t_75 as t
    }
}

export declare namespace PlayerDodgePacket {
    export {
        t_39 as t
    }
}

export declare namespace PlayerHealthPacket {
    export {
        t_81 as t,
        parse_20 as parse,
        toBuffer_20 as toBuffer
    }
}

declare type playerId = number;

export declare namespace PlayerInfoPacket {
    export {
        difficulty,
        mode,
        t_78 as t,
        parse_17 as parse,
        toBuffer_17 as toBuffer
    }
}

export declare namespace PlayerInventorySlotPacket {
    export {
        parse_19 as parse,
        toBuffer_19 as toBuffer,
        t_80 as t
    }
}

export declare namespace PlayerManaPacket {
    export {
        t_40 as t,
        parse_9 as parse,
        toBuffer_9 as toBuffer
    }
}

export declare namespace PlayerSlotSetPacket {
    export {
        parse_15 as parse,
        toBuffer_15 as toBuffer,
        t_76 as t
    }
}

export declare namespace PlayerSpawnPacket {
    export {
        context,
        t_79 as t,
        parse_18 as parse,
        toBuffer_18 as toBuffer
    }
}

export declare namespace PlayerTeamPacket {
    export {
        t_41 as t
    }
}

export declare namespace PlayerUpdatePacket {
    export {
        direction_2 as direction,
        potionOfReturn,
        control,
        pulleyDirection,
        gravityDirection,
        t_77 as t,
        parse_16 as parse,
        toBuffer_16 as toBuffer
    }
}

export declare namespace Point {
    export {
        t_86 as t,
        Int_t,
        Float_t
    }
}

declare type port = number;

declare type position = { readonly x: number; readonly y: number };

declare type potionOfReturn = { readonly originalUsePosition: t_43<number>; readonly homePosition: t_43<number> };

declare type powerLevel =
"LockedForEveryone"
| "CanBeChangedByHostAlone"
| "CanBeChangedByEveryone";

export declare namespace ProjectileSyncPacket {
    export {
        t_83 as t,
        parse_22 as parse,
        toBuffer_22 as toBuffer
    }
}

declare type pulleyDirection = "One" | "Two";

export declare namespace PvpTogglePacket {
    export {
        t_42 as t,
        parse_10 as parse,
        toBuffer_10 as toBuffer
    }
}

declare type pylonAction = "Added" | "Removed" | "RequestTeleport";

/**
 * Sets the packet type on an untyped writer, returning an initialized writer.
 * @param untypedWriter The uninitialized packet writer.
 * @param packetTypeId The ID of the packet type.
 * @returns An initialized packet writer instance.
 */
declare function setType(untypedWriter: untypedT, packetTypeId: number): ErrorAwarePacketWriter_2;

export declare namespace ShimmerEffectOrCoinLuckPacket {
    export {
        coinLuck,
        t_44 as t
    }
}

declare type Sign_t = {
    readonly id: number; 
    readonly x: number; 
    readonly y: number; 
    readonly name: string
};

export declare namespace SignNewPacket {
    export {
        t_45 as t
    }
}

export declare namespace SignReadPacket {
    export {
        t_46 as t
    }
}

export declare namespace SmokePoofPacket {
    export {
        t_47 as t
    }
}

export declare namespace SocialHandshakePacket {
    export {
        t_48 as t
    }
}

declare type spawnType = 
"GoblinInvasion"
| "FrostInvasion"
| "PirateInvasion"
| "PumpkinMoon"
| "SnowMoon"
| "Eclipse"
| "MartianMoon"
| "ImpendingDoom"
| "BloodMoon"
| "CombatBookUsed"
| "BoughtCat"
| "BoughtDog"
| "BoughtBunny"
| "BoughtSlime"
| "MechQueen"
| "CombatBookVolumeTwo"
| "PeddlersSatchel"
| { TAG: "Invasion"; _0: number }
| { TAG: "Npc"; _0: number };

export declare namespace StatusPacket {
    export {
        flags,
        t_49 as t
    }
}

export declare namespace SwitchHitPacket {
    export {
        t_50 as t
    }
}

declare type t = void;

declare type t_10 = void;

declare type t_11 = { readonly eventType: EventType_t; readonly value: number };

declare type t_12 = { readonly x: number; readonly y: number };

declare type t_13 = 
"GamemodesJoinMode"
| { TAG: "RealIpAddress"; _0: ip }
| { TAG: "SwitchServer"; _0: dimensionName }
| { TAG: "SwitchServerManual"; _0: ip; _1: port };

declare type t_14 = {
    readonly npcSlotId: number; 
    readonly extraValue: number; 
    readonly x: number; 
    readonly y: number
};

declare type t_15 = void;

declare type t_16 = void;

declare type t_17 = {
    readonly itemDropId: number; 
    readonly x: number; 
    readonly y: number; 
    readonly vx: number; 
    readonly vy: number; 
    readonly stack: number; 
    readonly prefix: number; 
    readonly noDelay: number; 
    readonly itemId: number; 
    readonly shimmered: boolean; 
    readonly shimmeredTime: number
};

declare type t_18 = {
    readonly itemDropId: number;
    readonly x: number;
    readonly y: number;
    readonly vx: number;
    readonly vy: number;
    readonly stack: number;
    readonly prefix: number;
    readonly noDelay: number;
    readonly itemId: number
};

declare type t_19 = { readonly itemDropId: number; readonly owner: number };

declare type t_2 = void;

declare type t_20 = { readonly playerId: number; readonly loadout: number };

declare type t_21 = void;

declare type t_22 = {
    readonly npcId: number; 
    readonly buffs: number[]; 
    readonly buffTimes: number[]
};

declare type t_23 = { readonly npcId: number; readonly playerId: number };

declare type t_24 = void;

declare type t_25 = void;

declare type t_26 = void;

declare type t_27 = void;

declare type t_28 = void;

declare type t_29 = void;

declare type t_3 = { readonly playerId: number; readonly spawnType: spawnType };

declare type t_30 = void;

declare type t_31 = {
    readonly x: number;
    readonly y: number;
    readonly objectType: number;
    readonly style: number;
    readonly alternate: number;
    readonly random: number;
    readonly direction: direction
};

declare type t_32 = void;

declare type t_33 = void;

declare type t_34 = {
    readonly playerId: number;
    readonly buff: number;
    readonly time: number
};

declare type t_35 = void;

declare type t_36 = void;

declare type t_37 = {
    readonly playerId: number;
    readonly deathReason: t_38;
    readonly damage: number;
    readonly hitDirection: number;
    readonly pvp: boolean
};

declare type t_38 = {
    readonly killerPlayerId: (undefined | number); 
    readonly killerNpcId: (undefined | number); 
    readonly killerProjectileId: (undefined | number); 
    readonly typeOfDeathOther: (undefined | other); 
    readonly projectileType: (undefined | number); 
    readonly itemType: (undefined | number); 
    readonly itemPrefix: (undefined | number); 
    readonly deathReason: (undefined | string)
};

declare type t_39 = void;

declare type t_4 = void;

declare type t_40 = {
    readonly playerId: number;
    readonly mana: number;
    readonly maxMana: number
};

declare type t_41 = void;

declare type t_42 = { readonly playerId: number; readonly pvpEnabled: boolean };

declare type t_43<a> = { readonly x: a; readonly y: a };

declare type t_44 = 
    { TAG: "ShimmerEffect"; _0: number; _1: number }
| { TAG: "CoinLuck"; _0: coinLuck }
| { TAG: "NewShimmerEffect"; _0: number };

declare type t_45 = void;

declare type t_46 = void;

declare type t_47 = void;

declare type t_48 = void;

declare type t_49 = {
    readonly max: number;
    readonly text: NetworkText;
    readonly flags: flags
};

declare type t_5 = {
    readonly chestId: number; 
    readonly slot: number; 
    readonly stack: number; 
    readonly prefix: number; 
    readonly itemNetId: number
};

declare type t_50 = void;

declare type t_51 = {
    readonly teleportType: teleportType; 
    readonly getPositionFromTarget: boolean; 
    readonly targetId: number; 
    readonly x: number; 
    readonly y: number; 
    readonly style: number; 
    readonly extraInfo: (undefined | number)
};

declare type t_52 = { readonly teleportType: teleportType_2 };

declare type t_53 = void;

declare type t_54 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_55 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_56 = void;

declare type t_57 = void;

declare type t_58 = void;

declare type t_59 = {
    readonly action: Action_t_2;
    readonly tileX: number;
    readonly tileY: number;
    readonly value1: number;
    readonly value2: number
};

declare type t_6 = {
    readonly unlockType: unlockType; 
    readonly x: number; 
    readonly y: number
};

declare type t_60 = {
    readonly x: number;
    readonly y: number;
    readonly color: number;
    readonly coat: number
};

declare type t_61 = void;

declare type t_62 = {
    readonly startX: number; 
    readonly startY: number; 
    readonly endX: number; 
    readonly endY: number
};

declare type t_63 = {
    readonly height: number; 
    readonly width: number; 
    readonly tileX: number; 
    readonly tileY: number; 
    readonly tiles: Array<tile[]>; 
    readonly chests: Chest_t[]; 
    readonly signs: Sign_t[]; 
    readonly entities: Entity_t[]
};

declare type t_64 = {
    readonly width: number;
    readonly height: number;
    readonly changeType: number;
    readonly tileX: number;
    readonly tileY: number;
    readonly tiles: Array<tile_2[]>
};

declare type t_65 = void;

declare type t_66 = { readonly items: number[] };

declare type t_67 = void;

declare type t_68 = void;

declare type t_69 = {
    readonly x: number;
    readonly y: number;
    readonly color: number;
    readonly coat: number
};

declare type t_7 = {
    readonly action: Action_t;
    readonly x: number;
    readonly y: number;
    readonly style: number;
    readonly id: number
};

declare type t_70 = {
    readonly x: number; 
    readonly y: number; 
    readonly itemId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type t_71 = void;

declare type t_72 = void;

declare type t_73 = void;

declare type t_74 = number;

declare type t_75 = {
    readonly killerPlayerId: (undefined | number); 
    readonly killerNpcId: (undefined | number); 
    readonly killerProjectileId: (undefined | number); 
    readonly typeOfDeathOther: (undefined | other_2); 
    readonly projectileType: (undefined | number); 
    readonly itemType: (undefined | number); 
    readonly itemPrefix: (undefined | number); 
    readonly deathReason: (undefined | string)
};

declare type t_76 = number;

declare type t_77 = {
    readonly playerId: number;
    readonly control: control;
    readonly direction: direction_2;
    readonly pulleyDirection: (undefined | pulleyDirection);
    readonly vortexStealthActive: boolean;
    readonly gravityDirection: gravityDirection;
    readonly shouldGuard: boolean;
    readonly ghost: boolean;
    readonly selectedItem: number;
    readonly position: t_43<number>;
    readonly velocity: (undefined | t_43<number>);
    readonly potionOfReturn: (undefined | potionOfReturn);
    readonly tryKeepingHoveringUp: boolean;
    readonly isVoidVaultEnabled: boolean;
    readonly isSitting: boolean;
    readonly hasFinishedAnyDd2Event: boolean;
    readonly isPettingAnimal: boolean;
    readonly isTheAnimalBeingPetSmall: boolean;
    readonly tryKeepingHoveringDown: boolean;
    readonly isSleeping: boolean
};

declare type t_78 = {
    readonly playerId: number;
    readonly skinVariant: number;
    readonly hair: number;
    readonly name: string;
    readonly hairDye: number;
    readonly hideVisuals: number;
    readonly hideVisuals2: number;
    readonly hideMisc: number;
    readonly hairColor: Color;
    readonly skinColor: Color;
    readonly eyeColor: Color;
    readonly shirtColor: Color;
    readonly underShirtColor: Color;
    readonly pantsColor: Color;
    readonly shoeColor: Color;
    readonly difficulty: difficulty;
    readonly mode: mode;
    readonly extraAccessory: boolean;
    readonly usingBiomeTorches: boolean;
    readonly unlockedBiomeTorches: boolean;
    readonly happyFunTorchTime: boolean;
    readonly unlockedSuperCart: boolean;
    readonly enabledSuperCart: boolean;
    readonly usedAegisCrystal: boolean;
    readonly usedAegisFruit: boolean;
    readonly usedArcaneCrystal: boolean;
    readonly usedGalaxyPearl: boolean;
    readonly usedGummyWorm: boolean;
    readonly usedAmbrosia: boolean;
    readonly ateArtisanBread: boolean
};

declare type t_79 = {
    readonly playerId: number;
    readonly x: number;
    readonly y: number;
    readonly timeRemaining: number;
    readonly numberOfDeathsPve: number;
    readonly numberOfDeathsPvp: number;
    readonly context: context
};

declare type t_8 = void;

declare type t_80 = {
    readonly playerId: number;
    readonly slot: number;
    readonly stack: number;
    readonly prefix: number;
    readonly itemId: number;
};

declare type t_81 = {
    readonly playerId: number;
    readonly health: number;
    readonly maxHealth: number
};

declare type t_82 = { readonly uuid: string };

declare type t_83 = {
    readonly projectileId: number;
    readonly x: number;
    readonly y: number;
    readonly vx: number;
    readonly vy: number;
    readonly owner: number;
    readonly projectileType: number;
    readonly ai: [(undefined | number), (undefined | number), (undefined | number)];
    readonly bannerIdToRespondTo: (undefined | number);
    readonly damage: (undefined | number);
    readonly knockback: (undefined | number);
    readonly originalDamage: (undefined | number);
    readonly projectileUuid: (undefined | number)
};

declare type t_84 = {
    readonly target: number;
    readonly deathReason: t_38;
    readonly damage: number;
    readonly hitDirection: number;
    readonly critical: boolean;
    readonly pvp: boolean;
    readonly cooldownCounter: number
};

declare type t_85 = {
    readonly playerId: number;
    readonly active: boolean;
};

declare type t_86<a> = { readonly x: a; readonly y: a };

declare type t_9 = { readonly version: string };

export declare namespace TeleportationPotionPacket {
    export {
        teleportType_2 as teleportType,
        t_52 as t
    }
}

export declare namespace TeleportPacket {
    export {
        teleportType,
        t_51 as t
    }
}

declare type teleportPylon = {
    readonly pylonAction: pylonAction;
    readonly x: number;
    readonly y: number;
    readonly pylonType: number
};

declare type teleportType = "Player" | "Npc" | "PlayerToPlayer";

declare type teleportType_2 = 
"TeleportationPotion"
| "MagicConch"
| "DemonConch"
| "ShellphoneSpawn";

export declare namespace TemporaryAnimationCreatePacket {
    export {
        t_53 as t
    }
}

declare type tile = {
    readonly activeTile: (undefined | activeTile); 
    readonly color: (undefined | number); 
    readonly wallColor: (undefined | number); 
    readonly wall: (undefined | number); 
    readonly liquid: (undefined | number); 
    readonly lava: boolean; 
    readonly honey: boolean; 
    readonly wire: boolean; 
    readonly wire2: boolean; 
    readonly wire3: boolean; 
    readonly wire4: boolean; 
    readonly halfBrick: boolean; 
    readonly slope: (undefined | number); 
    readonly actuator: boolean; 
    readonly inActive: boolean; 
    readonly coatHeader: number
};

declare type tile_2 = {
    readonly wire: boolean;
    readonly halfBrick: boolean;
    readonly actuator: boolean;
    readonly inActive: boolean;
    readonly wire2: boolean;
    readonly wire3: boolean;
    readonly wire4: boolean;
    readonly color: (undefined | number);
    readonly wallColor: (undefined | number);
    readonly activeTile: (undefined | activeTile_2);
    readonly wall: (undefined | number);
    readonly liquid: (undefined | liquid_3);
    readonly coatHeader: number
};

declare type tileCache = {
    activeTile: (undefined | activeTile); 
    color: (undefined | number); 
    wallColor: (undefined | number); 
    wall: (undefined | number); 
    liquid: (undefined | number); 
    lava: boolean; 
    honey: boolean; 
    wire: boolean; 
    wire2: boolean; 
    wire3: boolean; 
    wire4: boolean; 
    halfBrick: boolean; 
    slope: (undefined | number); 
    actuator: boolean; 
    inActive: boolean; 
    coatHeader: number
};

export declare namespace TileEntityDisplayDollItemSyncPacket {
    export {
        t_54 as t
    }
}

export declare namespace TileEntityHatRackItemSyncPacket {
    export {
        t_55 as t
    }
}

export declare namespace TileEntityInteractionRequestPacket {
    export {
        t_56 as t
    }
}

export declare namespace TileEntityPlacePacket {
    export {
        t_57 as t
    }
}

export declare namespace TileEntityUpdatePacket {
    export {
        t_58 as t
    }
}

export declare namespace TileModifyPacket {
    export {
        Action_t_2 as Action_t,
        t_59 as t,
        Action_fromInt_2 as Action_fromInt,
        Action_toInt_2 as Action_toInt,
        parse_11 as parse,
        toBuffer_11 as toBuffer,
        Action_2 as Action
    }
}

export declare namespace TilePaintPacket {
    export {
        t_60 as t,
        parse_12 as parse,
        toBuffer_12 as toBuffer
    }
}

export declare namespace TilePickingSyncPacket {
    export {
        t_61 as t
    }
}

export declare namespace TileSectionFramePacket {
    export {
        t_62 as t
    }
}

export declare namespace TileSectionSendPacket {
    export {
        frame,
        activeTile,
        liquid_2 as liquid,
        tile,
        tileCache,
        Chest_t,
        Sign_t,
        Entity_displayItem,
        Entity_displayDoll,
        Entity_foodPlatter,
        Entity_hatRack,
        Entity_itemFrame,
        Entity_logicSensor,
        Entity_teleportationPylon,
        Entity_trainingDummy,
        Entity_weaponsRack,
        Entity_kind,
        Entity_t,
        t_63 as t
    }
}

export declare namespace TileSquareSendPacket {
    export {
        frame_2 as frame,
        activeTile_2 as activeTile,
        liquid_3 as liquid,
        tile_2 as tile,
        t_64 as t,
        parse_13 as parse,
        toBuffer_13 as toBuffer
    }
}

export declare namespace TimeSetPacket {
    export {
        t_65 as t
    }
}

declare const toBuffer: (_1: t_7) => Buffer;

declare const toBuffer_10: (_1: t_42) => Buffer;

declare const toBuffer_11: (_1: t_59) => Buffer;

declare const toBuffer_12: (_1: t_60) => Buffer;

declare const toBuffer_13: (_1: t_64) => Buffer;

declare const toBuffer_14: (_1: t_69) => Buffer;

declare function toBuffer_15(self: t_76): Buffer_2;

declare const toBuffer_16: (_1: t_77) => Buffer;

declare const toBuffer_17: (_1: t_78) => Buffer;

declare const toBuffer_18: (_1: t_79) => Buffer;

declare function toBuffer_19(self: t_80): Buffer_2;

declare const toBuffer_2: (_1: t_9) => Buffer;

declare const toBuffer_20: (_1: t_81) => Buffer;

declare const toBuffer_21: (_1: t_82) => Buffer;

declare const toBuffer_22: (_1: t_83) => Buffer;

declare const toBuffer_23: (_1: t_84) => Buffer;

declare function toBuffer_24(data: WorldInfo): toBuffer_24;

declare type toBuffer_24 = toBufferOk_2 | toBufferError_2;

declare function toBuffer_25(self: t_85): Buffer_2;

declare function toBuffer_3(self: t_18): Buffer;

declare const toBuffer_4: (_1: t_19) => Buffer;

declare function toBuffer_5(data: NetModuleLoad): toBuffer_5;

declare type toBuffer_5 = toBufferOk | toBufferError;

declare const toBuffer_6: (_1: t_31) => Buffer;

declare const toBuffer_7: (_1: t_34) => Buffer;

declare const toBuffer_8: (_1: t_37) => Buffer;

declare const toBuffer_9: (_1: t_40) => Buffer;

declare type toBufferError = { TAG: "Error"; _0: PackError };

declare type toBufferError_2 = { TAG: "Error"; _0: PackError };

declare type toBufferOk = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_2 = { TAG: "Ok"; _0: Buffer };

declare function toByte(t: t_74): number;

declare function toString_2(data: CreativePower): string;

export declare namespace TravellingMerchantInventoryPacket {
    export {
        t_66 as t
    }
}

export declare namespace TreeGrowFxPacket {
    export {
        t_67 as t
    }
}

declare type unlockReport = { readonly itemId: number; readonly researchedCount: number };

declare type unlockType = "Chest" | "TempleDoor" | "ChestLock";

/**
 * An opaque type representing an uninitialized packet writer.
 */
declare class untypedT { }

export declare namespace UnusedPacket {
    export {
        t_68 as t
    }
}

declare type UpdateType_t = 
"RealIpAddress"
| "GamemodesJoinMode"
| "SwitchServer"
| "SwitchServerManual";

export declare namespace WallPaintPacket {
    export {
        t_69 as t,
        parse_14 as parse,
        toBuffer_14 as toBuffer
    }
}

export declare namespace WeaponsRackTryPlacingPacket {
    export {
        t_70 as t
    }
}

export declare namespace WiredCannonShotPacket {
    export {
        t_71 as t
    }
}

export declare namespace WorldDataRequestPacket {
    export {
        t_72 as t
    }
}

declare type WorldInfo = {
    readonly time: number;
    readonly dayAndMoonInfo: number;
    readonly moonPhase: number;
    readonly maxTilesX: number;
    readonly maxTilesY: number;
    readonly spawnX: number;
    readonly spawnY: number;
    readonly worldSurface: number;
    readonly rockLayer: number;
    readonly worldId: number;
    readonly worldName: string;
    readonly gameMode: number;
    readonly worldUniqueId: Array16_2<number>;
    readonly worldGeneratorVersion: bigint;
    readonly moonType: number;
    readonly treeBackground: number;
    readonly treeBackground2: number;
    readonly treeBackground3: number;
    readonly treeBackground4: number;
    readonly corruptionBackground: number;
    readonly jungleBackground: number;
    readonly snowBackground: number;
    readonly hallowBackground: number;
    readonly crimsonBackground: number;
    readonly desertBackground: number;
    readonly oceanBackground: number;
    readonly mushroomBackground: number;
    readonly underworldBackground: number;
    readonly iceBackStyle: number;
    readonly jungleBackStyle: number;
    readonly hellBackStyle: number;
    readonly windSpeedSet: number;
    readonly cloudNumber: number;
    readonly tree1: number;
    readonly tree2: number;
    readonly tree3: number;
    readonly treeStyle1: number;
    readonly treeStyle2: number;
    readonly treeStyle3: number;
    readonly treeStyle4: number;
    readonly caveBack1: number;
    readonly caveBack2: number;
    readonly caveBack3: number;
    readonly caveBackStyle1: number;
    readonly caveBackStyle2: number;
    readonly caveBackStyle3: number;
    readonly caveBackStyle4: number;
    readonly forest1TreeTopStyle: number;
    readonly forest2TreeTopStyle: number;
    readonly forest3TreeTopStyle: number;
    readonly forest4TreeTopStyle: number;
    readonly corruptionTreeTopStyle: number;
    readonly jungleTreeTopStyle: number;
    readonly snowTreeTopStyle: number;
    readonly hallowTreeTopStyle: number;
    readonly crimsonTreeTopStyle: number;
    readonly desertTreeTopStyle: number;
    readonly oceanTreeTopStyle: number;
    readonly glowingMushroomTreeTopStyle: number;
    readonly underworldTreeTopStyle: number;
    readonly rain: number;
    readonly eventInfo: eventInfo;
    readonly sundialCooldown: number;
    readonly moondialCooldown: number;
    readonly copperOreTier: number;
    readonly ironOreTier: number;
    readonly silverOreTier: number;
    readonly goldOreTier: number;
    readonly cobaltOreTier: number;
    readonly mythrilOreTier: number;
    readonly adamantiteOreTier: number;
    readonly invasionType: number;
    readonly lobbyId: bigint;
    readonly sandstormSeverity: number;
};

export declare namespace WorldInfoPacket {
    export {
        parse_24 as parse,
        toBuffer_24 as toBuffer,
        eventInfo,
        WorldInfo,
        toBufferOk_2 as toBufferOk,
        toBufferError_2 as toBufferError
    }
}

export declare namespace ZonesPacket {
    export {
        t_73 as t
    }
}

export { }
