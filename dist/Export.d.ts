import Color from '@popstarfreas/packetfactory/color';
import NetworkText from '@popstarfreas/packetfactory/networktext';

declare const Action: {
    toInt: (_1: Action_t) => number;
    toString: (_1: Action_t) => string;
    fromInt: (_1: number) => (undefined | Action_t)
};

declare type action =
| "OpenDoor"
| "CloseDoor"
| "ShiftTrapdoorOpen"
| "ShiftTrapdoorClose"
| "ShiftTallGateOpen"
| "ShiftTallGateClose";

declare const Action_2: { toInt: (_1: Action_t_2) => number; fromInt: (_1: number) => (undefined | Action_t_2) };

declare const Action_fromInt: (_1: number) => (undefined | Action_t);

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

declare type Action_t_3 =
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

declare type Action_t_4 =
"PlaceChest"
| "KillChest"
| "PlaceDresser"
| "KillDresser"
| "PlaceContainer"
| "KillContainer";

declare const Action_toInt: (_1: Action_t) => number;

declare const Action_toString: (_1: Action_t) => string;

declare type activeTile = { readonly tileType: number; readonly frame: (undefined | frame) };

declare type activeTile_2 = {
    readonly tileType: number;
    readonly slope: number;
    readonly frame: (undefined | frame_2)
};

declare type activeTile_3 = { readonly tileType: number; readonly frame: (undefined | frame_3) };

declare type activeTile_4 = {
    readonly tileType: number;
    readonly slope: number;
    readonly frame: (undefined | frame_4)
};

declare type ai = [(undefined | number), (undefined | number), (undefined | number), (undefined | number)];

declare type ai_2 = [(undefined | number), (undefined | number), (undefined | number), (undefined | number)];

declare type ambience = {
    readonly playerId: number;
    readonly seed: number;
    readonly skyEntityType: number
};

declare type anchor =
| "Remove"
| {
    TAG: "Anchor";
    _0: {
        readonly anchorType: number;
        readonly anchorMeta: number;
        readonly time: number;
        readonly emote: number;
        readonly metadata: number | undefined
    }
};

export declare namespace AnglerQuestCompletePacket {
    export {
        t_2 as t,
        parseOk_2 as parseOk,
        parseError_2 as parseError,
        parse_2 as parse,
        toBufferOk_2 as toBufferOk,
        toBufferError_2 as toBufferError,
        toBuffer_2 as toBuffer
    }
}

export declare namespace AnglerQuestPacket {
    export {
        t,
        parseOk,
        parseError,
        parse,
        toBufferOk,
        toBufferError,
        toBuffer
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

declare type Array16_3<A> = [
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
        t_77 as t
    }
}

export declare namespace BossOrInvasionSpawnPacket {
    export {
        spawnType,
        t_3 as t,
        parseOk_3 as parseOk,
        parseError_3 as parseError,
        parse_3 as parse,
        toBufferOk_3 as toBufferOk,
        toBufferError_3 as toBufferError,
        toBuffer_3 as toBuffer
    }
}

export declare namespace ChatMessageSmartPacket {
    export {
        t_4 as t,
        parseOk_4 as parseOk,
        parseError_4 as parseError,
        parse_4 as parse,
        toBufferOk_4 as toBufferOk,
        toBufferError_4 as toBufferError,
        toBuffer_4 as toBuffer
    }
}

declare const Chest: {};

declare type Chest_t = {
    readonly id: number; 
    readonly x: number; 
    readonly y: number; 
    readonly name: string
};

declare type Chest_t_2 = {
    readonly id: number; 
    readonly x: number; 
    readonly y: number; 
    readonly name: string
};

export declare namespace ChestItemPacket {
    export {
        t_5 as t,
        parseOk_5 as parseOk,
        parseError_5 as parseError,
        parse_5 as parse,
        toBufferOk_5 as toBufferOk,
        toBufferError_5 as toBufferError,
        toBuffer_5 as toBuffer
    }
}

export declare namespace ChestOrTempleUnlockPacket {
    export {
        unlockType,
        t_6 as t,
        parseOk_6 as parseOk,
        parseError_6 as parseError,
        parse_6 as parse,
        toBufferOk_6 as toBufferOk,
        toBufferError_6 as toBufferError,
        toBuffer_6 as toBuffer
    }
}

export declare namespace ChestPlacePacket {
    export {
        Action_t,
        t_7 as t,
        Action_toInt,
        Action_fromInt,
        Action_toString,
        Action,
        parseOk_7 as parseOk,
        parseError_7 as parseError,
        parse_7 as parse,
        toBufferOk_7 as toBufferOk,
        toBufferError_7 as toBufferError,
        toBuffer_7 as toBuffer
    }
}

export declare namespace ClientFinishConnectingToServerPacket {
    export {
        t_8 as t,
        parseOk_8 as parseOk,
        parseError_8 as parseError,
        parse_8 as parse,
        toBufferOk_8 as toBufferOk,
        toBufferError_8 as toBufferError,
        toBuffer_8 as toBuffer
    }
}

export declare namespace ClientUuidPacket {
    export {
        t_85 as t,
        parseOk_81 as parseOk,
        parseError_81 as parseError,
        parse_81 as parse,
        toBufferOk_80 as toBufferOk,
        toBufferError_80 as toBufferError,
        toBuffer_80 as toBuffer
    }
}

declare type coinLuck = { readonly position: t_33<number>; readonly amount: number };

declare type coinLuck_2 = { readonly position: t_33<number>; readonly amount: number };

declare type color = {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number
};

declare type commandId = string;

export declare namespace ConnectRequestPacket {
    export {
        t_9 as t,
        parseOk_9 as parseOk,
        parseError_9 as parseError,
        parse_9 as parse,
        toBufferOk_9 as toBufferOk,
        toBufferError_9 as toBufferError,
        toBuffer_9 as toBuffer
    }
}

declare type context =
"ReviveFromDeath"
| "SpawningIntoWorld"
| "RecallFromItem";

declare type context_2 =
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

declare type control_2 = {
    readonly isHoldingUp: boolean;
    readonly isHoldingDown: boolean;
    readonly isHoldingLeft: boolean;
    readonly isHoldingRight: boolean;
    readonly isHoldingJump: boolean;
    readonly isHoldingItemUse: boolean
};

declare type convertIfNeeded =
| { TAG: "PacketStructureIsSame" }
| { TAG: "ConvertedToLatestVersion"; _0: t_91 };

declare type convertIfNeededResult =
| { TAG: "Ok"; _0: convertIfNeeded }
| { TAG: "Error"; _0: parseError_88 };

declare const convertv1449IfNeeded: (buffer: Buffer, fromServer: boolean) => convertIfNeededResult;

export declare namespace CountsAsHostForGameplaySetPacket {
    export {
        t_10 as t,
        parseOk_10 as parseOk,
        parseError_10 as parseError,
        parse_10 as parse,
        toBufferOk_10 as toBufferOk,
        toBufferError_10 as toBufferError,
        toBuffer_10 as toBuffer
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
        t_11 as t,
        EventType,
        parseOk_11 as parseOk,
        parseError_11 as parseError,
        parse_11 as parse,
        toBufferOk_11 as toBufferOk,
        toBufferError_11 as toBufferError,
        toBuffer_11 as toBuffer
    }
}

export declare namespace CrystalInvasionStartPacket {
    export {
        t_12 as t,
        parseOk_12 as parseOk,
        parseError_12 as parseError,
        parse_12 as parse,
        toBufferOk_12 as toBufferOk,
        toBufferError_12 as toBufferError,
        toBuffer_12 as toBuffer
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

declare const Decode: { parse: (_1: Buffer) => parse_65 };

declare type difficulty = "Softcore" | "Mediumcore" | "Hardcore";

declare type difficulty_2 = "Softcore" | "Mediumcore" | "Hardcore";

declare type dimensionName = string;

declare type dimensionName_2 = string;

export declare namespace DimensionsUpdatePacket {
    export {
        ip,
        dimensionName,
        port,
        t_13 as t,
        UpdateType_t,
        UpdateType,
        parseOk_13 as parseOk,
        parseError_13 as parseError,
        parse_13 as parse,
        toBufferOk_13 as toBufferOk,
        toBufferError_13 as toBufferError,
        toBuffer_13 as toBuffer
    }
}

declare type direction = "Left" | "Right";

declare type direction_2 = "Left" | "Right";

declare type direction_3 = "Left" | "Right";

declare type direction_4 = "Left" | "Right";

export declare namespace DisconnectPacket {
    export {
        t_90 as t,
        parseOk_87 as parseOk,
        parseError_87 as parseError,
        parse_87 as parse,
        toBufferOk_86 as toBufferOk,
        toBufferError_86 as toBufferError,
        toBuffer_86 as toBuffer
    }
}

declare type dodge = "Ninja" | "Shadow" | "BrainOfConfusion";

declare type dodge_2 = "Ninja" | "Shadow" | "BrainOfConfusion";

declare const Encode: { toBuffer: (_1: t_67) => toBuffer_65 };

declare const Entity: {};

declare type Entity_displayDoll = { readonly items: Array<(undefined | Entity_displayItem)>; readonly dyes: Array<(undefined | Entity_displayItem)> };

declare type Entity_displayDoll_2 = { readonly items: Array<(undefined | Entity_displayItem_2)>; readonly dyes: Array<(undefined | Entity_displayItem_2)> };

declare type Entity_displayItem = {
    readonly netId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type Entity_displayItem_2 = {
    readonly netId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type Entity_foodPlatter = Entity_displayItem;

declare type Entity_foodPlatter_2 = Entity_displayItem_2;

declare type Entity_hatRack = { readonly items: Array<(undefined | Entity_displayItem)>; readonly dyes: Array<(undefined | Entity_displayItem)> };

declare type Entity_hatRack_2 = { readonly items: Array<(undefined | Entity_displayItem_2)>; readonly dyes: Array<(undefined | Entity_displayItem_2)> };

declare type Entity_itemFrame = Entity_displayItem;

declare type Entity_itemFrame_2 = Entity_displayItem_2;

declare type Entity_kind = 
    { TAG: "DisplayDoll"; _0: Entity_displayDoll }
| { TAG: "FoodPlatter"; _0: Entity_foodPlatter }
| { TAG: "HatRack"; _0: Entity_hatRack }
| { TAG: "ItemFrame"; _0: Entity_itemFrame }
| { TAG: "LogicSensor"; _0: Entity_logicSensor }
| { TAG: "TeleportationPylon"; _0: Entity_teleportationPylon }
| { TAG: "TrainingDummy"; _0: Entity_trainingDummy }
| { TAG: "WeaponsRack"; _0: Entity_weaponsRack };

declare type Entity_kind_2 = 
    { TAG: "DisplayDoll"; _0: Entity_displayDoll_2 }
| { TAG: "FoodPlatter"; _0: Entity_foodPlatter_2 }
| { TAG: "HatRack"; _0: Entity_hatRack_2 }
| { TAG: "ItemFrame"; _0: Entity_itemFrame_2 }
| { TAG: "LogicSensor"; _0: Entity_logicSensor_2 }
| { TAG: "TeleportationPylon"; _0: Entity_teleportationPylon_2 }
| { TAG: "TrainingDummy"; _0: Entity_trainingDummy_2 }
| { TAG: "WeaponsRack"; _0: Entity_weaponsRack_2 };

declare type Entity_logicSensor = { readonly checkType: number; readonly on: boolean };

declare type Entity_logicSensor_2 = { readonly checkType: number; readonly on: boolean };

declare type Entity_t = {
    readonly entityType: number; 
    readonly x: number; 
    readonly y: number; 
    readonly entityKind: Entity_kind
};

declare type Entity_t_2 = {
    readonly entityType: number; 
    readonly x: number; 
    readonly y: number; 
    readonly entityKind: Entity_kind_2
};

declare type Entity_teleportationPylon = void;

declare type Entity_teleportationPylon_2 = void;

declare type Entity_trainingDummy = { readonly npcSlotId: number };

declare type Entity_trainingDummy_2 = { readonly npcSlotId: number };

declare type Entity_weaponsRack = Entity_displayItem;

declare type Entity_weaponsRack_2 = Entity_displayItem_2;

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

declare type eventInfo_2 = {
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

declare const EventType: {};

declare type EventType_t = 
"CreditsTimeRemainingSet"
| "CopperSlimeTransform"
| "ElderSlimeTransform";

declare type EventType_t_2 = 
"CreditsTimeRemainingSet"
| "CopperSlimeTransform"
| "ElderSlimeTransform";

export declare namespace ExtraValueSyncPacket {
    export {
        t_14 as t,
        parseOk_14 as parseOk,
        parseError_14 as parseError,
        parse_14 as parse,
        toBufferOk_14 as toBufferOk,
        toBufferError_14 as toBufferError,
        toBuffer_14 as toBuffer
    }
}

declare function flag1(t: t_77): boolean;

declare function flag2(t: t_77): boolean;

declare function flag3(t: t_77): boolean;

declare function flag4(t: t_77): boolean;

declare function flag5(t: t_77): boolean;

declare function flag6(t: t_77): boolean;

declare function flag7(t: t_77): boolean;

declare function flag8(t: t_77): boolean;

declare function flagN(t: t_77, n: number): boolean;

declare type flags = {
    readonly hideStatusTextPercent: boolean;
    readonly statusTextHasShadows: boolean;
    readonly runCheckBytes: boolean
};

declare type flags_2 = {
    readonly hideStatusTextPercent: boolean;
    readonly statusTextHasShadows: boolean;
    readonly runCheckBytes: boolean
};

declare type Float_t = t_246<number>;

declare function forEach(t: t_77, callback: (flag: boolean) => void): void;

declare type frame = { readonly x: number; readonly y: number };

declare type frame_2 = { readonly x: number; readonly y: number };

declare type frame_3 = { readonly x: number; readonly y: number };

declare type frame_4 = { readonly x: number; readonly y: number };

declare function fromArray<A>(a: A[]): Array16_2<A> | undefined;

declare function fromArray_2(flags: boolean[]): t_77;

declare function fromByte(byte: number): t_77;

declare function fromFlags(
flag1: boolean,
flag2: boolean,
flag3: boolean,
flag4: boolean,
flag5: boolean,
flag6: boolean,
flag7: boolean,
flag8: boolean
): t_77;

declare function getOr<A>(a: A[], index: number, or: A): A;

declare type gravityDirection = "Normal" | "Inverted";

declare type gravityDirection_2 = "Normal" | "Inverted";

export declare namespace HaveDryadDoStardewAnimationPacket {
    export {
        t_15 as t,
        parseOk_15 as parseOk,
        parseError_15 as parseError,
        parse_15 as parse,
        toBufferOk_15 as toBufferOk,
        toBufferError_15 as toBufferError,
        toBuffer_15 as toBuffer
    }
}

declare type Immunity_t = "All" | { TAG: "PlayerId"; _0: number };

declare type Int_t = t_246<number>;

declare function intoChunks<A>(a: A[], chunkSize: number): A[][];

export declare namespace InvasionProgressReportPacket {
    export {
        t_16 as t,
        parseOk_16 as parseOk,
        parseError_16 as parseError,
        parse_16 as parse,
        toBufferOk_16 as toBufferOk,
        toBufferError_16 as toBufferError,
        toBuffer_16 as toBuffer
    }
}

declare type ip = string;

declare type ip_2 = string;

export declare namespace ItemDropShimmeredUpdatePacket {
    export {
        t_17 as t,
        parseOk_17 as parseOk,
        parseError_17 as parseError,
        parse_17 as parse,
        toBufferOk_17 as toBufferOk,
        toBufferError_17 as toBufferError,
        toBuffer_17 as toBuffer
    }
}

export declare namespace ItemDropUpdatePacket {
    export {
        t_18 as t,
        parseOk_18 as parseOk,
        parseError_18 as parseError,
        parse_18 as parse,
        toBufferOk_18 as toBufferOk,
        toBufferError_18 as toBufferError,
        toBuffer_18 as toBuffer
    }
}

export declare namespace ItemOwnerPacket {
    export {
        t_19 as t,
        parseOk_19 as parseOk,
        parseError_19 as parseError,
        parse_19 as parse,
        toBufferOk_19 as toBufferOk,
        toBufferError_19 as toBufferError,
        toBuffer_19 as toBuffer
    }
}

export declare namespace ItemOwnerRemovePacket {
    export {
        t_20 as t,
        parseOk_20 as parseOk,
        parseError_20 as parseError,
        parse_20 as parse,
        toBufferOk_20 as toBufferOk,
        toBufferError_20 as toBufferError,
        toBuffer_20 as toBuffer
    }
}

declare type killCount = number;

declare type LazyPacket_lazyParsed<a> = t_248<Result_2<a, readError>>;

declare type LazyPacket_t =
    { TAG: "ConnectRequest"; _0: LazyPacket_lazyParsed<t_92> }
| { TAG: "Disconnect"; _0: LazyPacket_lazyParsed<t_93> }
| { TAG: "PlayerSlotSet"; _0: LazyPacket_lazyParsed<t_94> }
| { TAG: "PlayerInfo"; _0: LazyPacket_lazyParsed<t_95> }
| { TAG: "PlayerInventorySlot"; _0: LazyPacket_lazyParsed<t_96> }
| { TAG: "WorldDataRequest"; _0: LazyPacket_lazyParsed<t_97> }
| { TAG: "WorldInfo"; _0: LazyPacket_lazyParsed<WorldInfo_2> }
| { TAG: "InitialTileSectionsRequest"; _0: LazyPacket_lazyParsed<t_98> }
| { TAG: "Status"; _0: LazyPacket_lazyParsed<t_99> }
| { TAG: "TileSectionSend"; _0: LazyPacket_lazyParsed<t_100> }
| { TAG: "TileSectionFrame"; _0: LazyPacket_lazyParsed<t_101> }
| { TAG: "PlayerSpawn"; _0: LazyPacket_lazyParsed<t_102> }
| { TAG: "PlayerUpdate"; _0: LazyPacket_lazyParsed<t_103> }
| { TAG: "PlayerActive"; _0: LazyPacket_lazyParsed<t_104> }
| { TAG: "PlayerHealth"; _0: LazyPacket_lazyParsed<t_105> }
| { TAG: "TileModify"; _0: LazyPacket_lazyParsed<t_106> }
| { TAG: "TimeSet"; _0: LazyPacket_lazyParsed<t_107> }
| { TAG: "DoorUse"; _0: LazyPacket_lazyParsed<t_108> }
| { TAG: "TileSquareSend"; _0: LazyPacket_lazyParsed<t_109> }
| { TAG: "ItemDropUpdate"; _0: LazyPacket_lazyParsed<t_110> }
| { TAG: "ItemOwner"; _0: LazyPacket_lazyParsed<t_111> }
| { TAG: "NpcUpdate"; _0: LazyPacket_lazyParsed<t_112> }
| { TAG: "NpcItemStrike"; _0: LazyPacket_lazyParsed<t_113> }
| { TAG: "ProjectileSync"; _0: LazyPacket_lazyParsed<t_114> }
| { TAG: "NpcStrike"; _0: LazyPacket_lazyParsed<t_115> }
| { TAG: "ProjectileDestroy"; _0: LazyPacket_lazyParsed<t_116> }
| { TAG: "PvpToggle"; _0: LazyPacket_lazyParsed<t_117> }
| { TAG: "ChestOpen"; _0: LazyPacket_lazyParsed<t_118> }
| { TAG: "ChestItem"; _0: LazyPacket_lazyParsed<t_119> }
| { TAG: "ActiveContainerSync"; _0: LazyPacket_lazyParsed<t_120> }
| { TAG: "ChestPlace"; _0: LazyPacket_lazyParsed<t_121> }
| { TAG: "HealEffect"; _0: LazyPacket_lazyParsed<t_122> }
| { TAG: "Zones"; _0: LazyPacket_lazyParsed<t_123> }
| { TAG: "PasswordRequired"; _0: LazyPacket_lazyParsed<t_124> }
| { TAG: "PasswordSend"; _0: LazyPacket_lazyParsed<t_125> }
| { TAG: "ItemOwnerRemove"; _0: LazyPacket_lazyParsed<t_126> }
| { TAG: "NpcTalk"; _0: LazyPacket_lazyParsed<t_127> }
| { TAG: "PlayerAnimation"; _0: LazyPacket_lazyParsed<t_128> }
| { TAG: "PlayerMana"; _0: LazyPacket_lazyParsed<t_129> }
| { TAG: "ManaEffect"; _0: LazyPacket_lazyParsed<t_130> }
| { TAG: "PlayerTeam"; _0: LazyPacket_lazyParsed<t_131> }
| { TAG: "SignRead"; _0: LazyPacket_lazyParsed<t_132> }
| { TAG: "SignNew"; _0: LazyPacket_lazyParsed<t_133> }
| { TAG: "LiquidSet"; _0: LazyPacket_lazyParsed<t_134> }
| { TAG: "PlayerSpawnSelf"; _0: LazyPacket_lazyParsed<t_135> }
| { TAG: "PlayerBuffsSet"; _0: LazyPacket_lazyParsed<t_136> }
| { TAG: "NpcSpecialEffect"; _0: LazyPacket_lazyParsed<t_137> }
| { TAG: "ChestOrTempleUnlock"; _0: LazyPacket_lazyParsed<t_138> }
| { TAG: "NpcBuffAdd"; _0: LazyPacket_lazyParsed<t_139> }
| { TAG: "NpcBuffUpdate"; _0: LazyPacket_lazyParsed<t_140> }
| { TAG: "PlayerBuffAdd"; _0: LazyPacket_lazyParsed<t_141> }
| { TAG: "NpcNameUpdate"; _0: LazyPacket_lazyParsed<t_142> }
| { TAG: "GoodEvilUpdate"; _0: LazyPacket_lazyParsed<t_143> }
| { TAG: "HarpPlay"; _0: LazyPacket_lazyParsed<t_144> }
| { TAG: "SwitchHit"; _0: LazyPacket_lazyParsed<t_145> }
| { TAG: "NpcHomeUpdate"; _0: LazyPacket_lazyParsed<t_146> }
| { TAG: "BossOrInvasionSpawn"; _0: LazyPacket_lazyParsed<t_147> }
| { TAG: "PlayerDodge"; _0: LazyPacket_lazyParsed<t_148> }
| { TAG: "TilePaint"; _0: LazyPacket_lazyParsed<t_149> }
| { TAG: "WallPaint"; _0: LazyPacket_lazyParsed<t_150> }
| { TAG: "Teleport"; _0: LazyPacket_lazyParsed<t_151> }
| { TAG: "PlayerHealOther"; _0: LazyPacket_lazyParsed<t_152> }
| { TAG: "DimensionsUpdate"; _0: LazyPacket_lazyParsed<t_153> }
| { TAG: "ClientUuid"; _0: LazyPacket_lazyParsed<t_154> }
| { TAG: "ChestName"; _0: LazyPacket_lazyParsed<t_155> }
| { TAG: "NpcCatch"; _0: LazyPacket_lazyParsed<t_156> }
| { TAG: "NpcRelease"; _0: LazyPacket_lazyParsed<t_157> }
| { TAG: "TravellingMerchantInventory"; _0: LazyPacket_lazyParsed<t_158> }
| { TAG: "TeleportationPotion"; _0: LazyPacket_lazyParsed<t_159> }
| { TAG: "AnglerQuest"; _0: LazyPacket_lazyParsed<t_160> }
| { TAG: "AnglerQuestComplete"; _0: LazyPacket_lazyParsed<t_161> }
| { TAG: "AnglerQuestsCompletedAmount"; _0: LazyPacket_lazyParsed<t_162> }
| { TAG: "TemporaryAnimationCreate"; _0: LazyPacket_lazyParsed<t_163> }
| { TAG: "InvasionProgressReport"; _0: LazyPacket_lazyParsed<t_164> }
| { TAG: "ObjectPlace"; _0: LazyPacket_lazyParsed<t_165> }
| { TAG: "PlayerChestIndexSync"; _0: LazyPacket_lazyParsed<t_166> }
| { TAG: "CombatNumberCreate"; _0: LazyPacket_lazyParsed<t_167> }
| { TAG: "NetModuleLoad"; _0: LazyPacket_lazyParsed<NetModuleLoad> }
| { TAG: "NpcKillCount"; _0: LazyPacket_lazyParsed<t_168> }
| { TAG: "PlayerStealth"; _0: LazyPacket_lazyParsed<t_169> }
| { TAG: "ItemForceIntoNearestChest"; _0: LazyPacket_lazyParsed<t_170> }
| { TAG: "TileEntityUpdate"; _0: LazyPacket_lazyParsed<t_171> }
| { TAG: "TileEntityPlace"; _0: LazyPacket_lazyParsed<t_172> }
| { TAG: "ItemDropModify"; _0: LazyPacket_lazyParsed<t_173> }
| { TAG: "ItemFramePlace"; _0: LazyPacket_lazyParsed<t_174> }
| { TAG: "ItemDropInstancedUpdate"; _0: LazyPacket_lazyParsed<t_175> }
| { TAG: "EmoteBubble"; _0: LazyPacket_lazyParsed<t_176> }
| { TAG: "ExtraValueSync"; _0: LazyPacket_lazyParsed<t_177> }
| { TAG: "SocialHandshake"; _0: LazyPacket_lazyParsed<t_178> }
| { TAG: "Unused"; _0: LazyPacket_lazyParsed<t_179> }
| { TAG: "PortalKill"; _0: LazyPacket_lazyParsed<t_180> }
| { TAG: "PlayerTeleportPortal"; _0: LazyPacket_lazyParsed<t_181> }
| { TAG: "NpcKilledNotification"; _0: LazyPacket_lazyParsed<t_182> }
| { TAG: "EventNotification"; _0: LazyPacket_lazyParsed<t_183> }
| { TAG: "MinionTargetUpdate"; _0: LazyPacket_lazyParsed<t_184> }
| { TAG: "NpcTeleportPortal"; _0: LazyPacket_lazyParsed<t_185> }
| { TAG: "ShieldStrengthsUpdate"; _0: LazyPacket_lazyParsed<t_186> }
| { TAG: "NebulaLevelUp"; _0: LazyPacket_lazyParsed<t_187> }
| { TAG: "MoonLordCountdown"; _0: LazyPacket_lazyParsed<t_188> }
| { TAG: "NpcShopItem"; _0: LazyPacket_lazyParsed<t_189> }
| { TAG: "GemLockToggle"; _0: LazyPacket_lazyParsed<t_190> }
| { TAG: "SmokePoof"; _0: LazyPacket_lazyParsed<t_191> }
| { TAG: "ChatMessageSmart"; _0: LazyPacket_lazyParsed<t_192> }
| { TAG: "WiredCannonShot"; _0: LazyPacket_lazyParsed<t_193> }
| { TAG: "MassWireOperation"; _0: LazyPacket_lazyParsed<t_194> }
| { TAG: "MassWireOperationPay"; _0: LazyPacket_lazyParsed<t_195> }
| { TAG: "PartyToggle"; _0: LazyPacket_lazyParsed<t_196> }
| { TAG: "TreeGrowFx"; _0: LazyPacket_lazyParsed<t_197> }
| { TAG: "CrystalInvasionStart"; _0: LazyPacket_lazyParsed<t_198> }
| { TAG: "CrystalInvasionWipeAll"; _0: LazyPacket_lazyParsed<t_199> }
| { TAG: "MinionAttackTargetUpdate"; _0: LazyPacket_lazyParsed<t_200> }
| { TAG: "CrystalInvasionSendWaitTime"; _0: LazyPacket_lazyParsed<t_201> }
| { TAG: "PlayerDamage"; _0: LazyPacket_lazyParsed<t_202> }
| { TAG: "PlayerDeath"; _0: LazyPacket_lazyParsed<t_203> }
| { TAG: "CombatTextCreate"; _0: LazyPacket_lazyParsed<t_204> }
| { TAG: "Emoji"; _0: LazyPacket_lazyParsed<t_205> }
| { TAG: "TileEntityDisplayDollItemSync"; _0: LazyPacket_lazyParsed<t_206> }
| { TAG: "TileEntityInteractionRequest"; _0: LazyPacket_lazyParsed<t_207> }
| { TAG: "WeaponsRackTryPlacing"; _0: LazyPacket_lazyParsed<t_208> }
| { TAG: "TileEntityHatRackItemSync"; _0: LazyPacket_lazyParsed<t_209> }
| { TAG: "TilePickingSync"; _0: LazyPacket_lazyParsed<t_210> }
| { TAG: "RevengeMarkerSync"; _0: LazyPacket_lazyParsed<t_211> }
| { TAG: "RevengeMarkerRemove"; _0: LazyPacket_lazyParsed<t_212> }
| { TAG: "GolfBallLandInCup"; _0: LazyPacket_lazyParsed<t_213> }
| { TAG: "ClientFinishConnectingToServer"; _0: LazyPacket_lazyParsed<t_214> }
| { TAG: "NpcFishOut"; _0: LazyPacket_lazyParsed<t_215> }
| { TAG: "NpcTamper"; _0: LazyPacket_lazyParsed<t_216> }
| { TAG: "LegacySoundPlay"; _0: LazyPacket_lazyParsed<t_217> }
| { TAG: "FoodPlatterTryPlacing"; _0: LazyPacket_lazyParsed<t_218> }
| { TAG: "PlayerLuckFactorsUpdate"; _0: LazyPacket_lazyParsed<t_219> }
| { TAG: "PlayerDead"; _0: LazyPacket_lazyParsed<t_220> }
| { TAG: "CavernMonsterTypeSync"; _0: LazyPacket_lazyParsed<t_221> }
| { TAG: "NpcBuffRemovalRequest"; _0: LazyPacket_lazyParsed<t_222> }
| { TAG: "ClientSyncedInventory"; _0: LazyPacket_lazyParsed<t_223> }
| { TAG: "CountsAsHostForGameplaySet"; _0: LazyPacket_lazyParsed<t_224> }
| { TAG: "CreditsOrSlimeTransform"; _0: LazyPacket_lazyParsed<t_225> }
| { TAG: "LucyAxeMessage"; _0: LazyPacket_lazyParsed<t_226> }
| { TAG: "PiggyBankVoidLensUpdate"; _0: LazyPacket_lazyParsed<t_227> }
| { TAG: "DungeonDefendersEventAttemptSkipWait"; _0: LazyPacket_lazyParsed<t_228> }
| { TAG: "HaveDryadDoStardewAnimation"; _0: LazyPacket_lazyParsed<t_229> }
| { TAG: "ItemDropShimmeredUpdate"; _0: LazyPacket_lazyParsed<t_230> }
| { TAG: "ShimmerEffectOrCoinLuck"; _0: LazyPacket_lazyParsed<t_231> }
| { TAG: "LoadoutSwitch"; _0: LazyPacket_lazyParsed<t_232> }
| { TAG: "ItemDropProtectedUpdate"; _0: LazyPacket_lazyParsed<t_233> }
| { TAG: "DeadCellsDisplayJarTryPlacing"; _0: LazyPacket_lazyParsed<t_234> }
| { TAG: "PlayerSpectate"; _0: LazyPacket_lazyParsed<t_235> }
| { TAG: "ItemDropClear"; _0: LazyPacket_lazyParsed<t_236> }
| { TAG: "PlayerItemUseSound"; _0: LazyPacket_lazyParsed<t_237> }
| { TAG: "NpcHurtByDebuff"; _0: LazyPacket_lazyParsed<t_238> }
| { TAG: "Ping"; _0: LazyPacket_lazyParsed<t_239> }
| { TAG: "ChestResize"; _0: LazyPacket_lazyParsed<t_240> }
| { TAG: "LeashedEntityAnchorInsertItem"; _0: LazyPacket_lazyParsed<t_241> }
| { TAG: "PlayerTeamUpdate"; _0: LazyPacket_lazyParsed<t_242> }
| { TAG: "PlayerTeamSwapSpawn"; _0: LazyPacket_lazyParsed<t_243> }
| { TAG: "SectionRequest"; _0: LazyPacket_lazyParsed<t_244> }
| { TAG: "ItemDropPosition"; _0: LazyPacket_lazyParsed<t_245> }
| { TAG: "HostToken"; _0: LazyPacket_lazyParsed<t_247> };

declare type life =
"Max"
| { TAG: "Byte"; _0: number }
| { TAG: "Int16"; _0: number }
| { TAG: "Int32"; _0: number };

declare type life_2 =
"Max"
| { TAG: "Byte"; _0: number }
| { TAG: "Int16"; _0: number }
| { TAG: "Int32"; _0: number };

declare type liquid = { readonly changes: liquidChange[] };

declare type liquid_2 = { readonly liquidValue: number; readonly liquidType: number };

declare type liquid_3 = { readonly liquidValue: number; readonly liquidType: number };

declare type liquid_4 = { readonly liquidValue: number; readonly liquidType: number };

declare type liquidChange = {
    readonly x: number;
    readonly y: number;
    readonly amount: number;
    readonly liquidType: number
};

export declare namespace LoadoutSwitchPacket {
    export {
        t_21 as t,
        parseOk_21 as parseOk,
        parseError_21 as parseError,
        parse_21 as parse,
        toBufferOk_21 as toBufferOk,
        toBufferError_21 as toBufferError,
        toBuffer_21 as toBuffer
    }
}

/**
 * Creates a new, uninitialized packet writer.
 * @returns An untypedT instance.
 */
declare function make(): untypedT;

declare type message = string;

declare type mode = "Classic" | "Journey";

declare type mode_2 = "Classic" | "Journey";

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
        t_22 as t,
        NetModuleType,
        parseOk_22 as parseOk,
        parseError_22 as parseError,
        parse_22 as parse,
        toBufferOk_22 as toBufferOk,
        toBufferError_22 as toBufferError,
        toBuffer_22 as toBuffer
    }
}

declare const NetModuleType: {
    toInt: (_1: NetModuleType_t) => number;
    fromInt: (_1: number) => NetModuleType_t | undefined
};

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
        t_23 as t,
        parseOk_23 as parseOk,
        parseError_23 as parseError,
        parse_23 as parse,
        toBufferOk_23 as toBufferOk,
        toBufferError_23 as toBufferError,
        toBuffer_23 as toBuffer
    }
}

export declare namespace NpcBuffUpdatePacket {
    export {
        t_24 as t,
        parseOk_24 as parseOk,
        parseError_24 as parseError,
        parse_24 as parse,
        toBufferOk_24 as toBufferOk,
        toBufferError_24 as toBufferError,
        toBuffer_24 as toBuffer
    }
}

export declare namespace NpcCatchPacket {
    export {
        t_25 as t,
        parseOk_25 as parseOk,
        parseError_25 as parseError,
        parse_25 as parse,
        toBufferOk_25 as toBufferOk,
        toBufferError_25 as toBufferError,
        toBuffer_25 as toBuffer
    }
}

export declare namespace NpcFishOutPacket {
    export {
        t_26 as t,
        parseOk_26 as parseOk,
        parseError_26 as parseError,
        parse_26 as parse,
        toBufferOk_26 as toBufferOk,
        toBufferError_26 as toBufferError,
        toBuffer_26 as toBuffer
    }
}

export declare namespace NpcHomeUpdatePacket {
    export {
        t_27 as t,
        parseOk_27 as parseOk,
        parseError_27 as parseError,
        parse_27 as parse,
        toBufferOk_27 as toBufferOk,
        toBufferError_27 as toBufferError,
        toBuffer_27 as toBuffer
    }
}

export declare namespace NpcKillCountPacket {
    export {
        t_28 as t,
        parseOk_28 as parseOk,
        parseError_28 as parseError,
        parse_28 as parse,
        toBufferOk_28 as toBufferOk,
        toBufferError_28 as toBufferError,
        toBuffer_28 as toBuffer
    }
}

export declare namespace NpcNameUpdatePacket {
    export {
        t_29 as t,
        parseOk_29 as parseOk,
        parseError_29 as parseError,
        parse_29 as parse,
        toBufferOk_29 as toBufferOk,
        toBufferError_29 as toBufferError,
        toBuffer_29 as toBuffer
    }
}

export declare namespace NpcShopItemPacket {
    export {
        t_30 as t,
        parseOk_30 as parseOk,
        parseError_30 as parseError,
        parse_30 as parse,
        toBufferOk_30 as toBufferOk,
        toBufferError_30 as toBufferError,
        toBuffer_30 as toBuffer
    }
}

export declare namespace NpcTalkPacket {
    export {
        t_31 as t,
        parseOk_31 as parseOk,
        parseError_31 as parseError,
        parse_31 as parse,
        toBufferOk_31 as toBufferOk,
        toBufferError_31 as toBufferError,
        toBuffer_31 as toBuffer
    }
}

export declare namespace NpcTeleportPortalPacket {
    export {
        t_32 as t,
        parseOk_32 as parseOk,
        parseError_32 as parseError,
        parse_32 as parse,
        toBufferOk_32 as toBufferOk,
        toBufferError_32 as toBufferError,
        toBuffer_32 as toBuffer
    }
}

export declare namespace NpcUpdatePacket {
    export {
        ai,
        life,
        t_89 as t,
        parseOk_86 as parseOk,
        parseError_86 as parseError,
        parse_86 as parse,
        toBufferOk_85 as toBufferOk,
        toBufferError_85 as toBufferError,
        toBuffer_85 as toBuffer
    }
}

export declare namespace ObjectPlacePacket {
    export {
        direction,
        t_34 as t,
        parseOk_33 as parseOk,
        parseError_33 as parseError,
        parse_33 as parse,
        toBufferOk_33 as toBufferOk,
        toBufferError_33 as toBufferError,
        toBuffer_33 as toBuffer
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

declare type parse = parseOk | parseError;

declare const parse: (_1: Buffer) => parse;

declare type parse_10 = parseOk_10 | parseError_10;

declare const parse_10: (_1: Buffer) => parse_10;

declare type parse_11 = parseOk_11 | parseError_11;

declare const parse_11: (_1: Buffer) => parse_11;

declare type parse_12 = parseOk_12 | parseError_12;

declare const parse_12: (_1: Buffer) => parse_12;

declare type parse_13 = parseOk_13 | parseError_13;

declare const parse_13: (_1: Buffer) => parse_13;

declare type parse_14 = parseOk_14 | parseError_14;

declare const parse_14: (_1: Buffer) => parse_14;

declare type parse_15 = parseOk_15 | parseError_15;

declare const parse_15: (_1: Buffer) => parse_15;

declare type parse_16 = parseOk_16 | parseError_16;

declare const parse_16: (_1: Buffer) => parse_16;

declare type parse_17 = parseOk_17 | parseError_17;

declare const parse_17: (_1: Buffer) => parse_17;

declare type parse_18 = parseOk_18 | parseError_18;

declare const parse_18: (_1: Buffer) => parse_18;

declare type parse_19 = parseOk_19 | parseError_19;

declare const parse_19: (_1: Buffer) => parse_19;

declare type parse_2 = parseOk_2 | parseError_2;

declare const parse_2: (_1: Buffer) => parse_2;

declare type parse_20 = parseOk_20 | parseError_20;

declare const parse_20: (_1: Buffer) => parse_20;

declare type parse_21 = parseOk_21 | parseError_21;

declare const parse_21: (_1: Buffer) => parse_21;

declare type parse_22 = parseOk_22 | parseError_22;

declare const parse_22: (_1: Buffer, _2: boolean) => parse_22;

declare type parse_23 = parseOk_23 | parseError_23;

declare const parse_23: (_1: Buffer) => parse_23;

declare type parse_24 = parseOk_24 | parseError_24;

declare const parse_24: (_1: Buffer) => parse_24;

declare type parse_25 = parseOk_25 | parseError_25;

declare const parse_25: (_1: Buffer) => parse_25;

declare type parse_26 = parseOk_26 | parseError_26;

declare const parse_26: (_1: Buffer) => parse_26;

declare type parse_27 = parseOk_27 | parseError_27;

declare const parse_27: (_1: Buffer) => parse_27;

declare type parse_28 = parseOk_28 | parseError_28;

declare const parse_28: (_1: Buffer) => parse_28;

declare type parse_29 = parseOk_29 | parseError_29;

declare const parse_29: (_1: Buffer) => parse_29;

declare type parse_3 = parseOk_3 | parseError_3;

declare const parse_3: (_1: Buffer) => parse_3;

declare type parse_30 = parseOk_30 | parseError_30;

declare const parse_30: (_1: Buffer) => parse_30;

declare type parse_31 = parseOk_31 | parseError_31;

declare const parse_31: (_1: Buffer) => parse_31;

declare type parse_32 = parseOk_32 | parseError_32;

declare const parse_32: (_1: Buffer) => parse_32;

declare type parse_33 = parseOk_33 | parseError_33;

declare const parse_33: (_1: Buffer) => parse_33;

declare type parse_34 = parseOk_34 | parseError_34;

declare const parse_34: (_1: Buffer) => parse_34;

declare type parse_35 = parseOk_35 | parseError_35;

declare const parse_35: (_1: Buffer) => parse_35;

declare type parse_36 = parseOk_36 | parseError_36;

declare const parse_36: (_1: Buffer) => parse_36;

declare type parse_37 = parseOk_37 | parseError_37;

declare const parse_37: (_1: Buffer) => parse_37;

declare type parse_38 = parseOk_38 | parseError_38;

declare const parse_38: (_1: Buffer) => parse_38;

declare type parse_39 = parseOk_39 | parseError_39;

declare const parse_39: (_1: Buffer) => parse_39;

declare type parse_4 = parseOk_4 | parseError_4;

declare const parse_4: (_1: Buffer) => parse_4;

declare type parse_40 = parseOk_40 | parseError_40;

declare const parse_40: (_1: Buffer) => parse_40;

declare type parse_41 = parseOk_41 | parseError_41;

declare const parse_41: (_1: Buffer) => parse_41;

declare type parse_42 = parseOk_42 | parseError_42;

declare const parse_42: (_1: Buffer) => parse_42;

declare type parse_43 = parseOk_43 | parseError_43;

declare const parse_43: (_1: Buffer) => parse_43;

declare type parse_44 = parseOk_44 | parseError_44;

declare const parse_44: (_1: Buffer) => parse_44;

declare type parse_45 = parseOk_45 | parseError_45;

declare const parse_45: (_1: Buffer) => parse_45;

declare type parse_46 = parseOk_46 | parseError_46;

declare const parse_46: (_1: Buffer) => parse_46;

declare type parse_47 = parseOk_47 | parseError_47;

declare const parse_47: (_1: Buffer) => parse_47;

declare type parse_48 = parseOk_48 | parseError_48;

declare const parse_48: (_1: Buffer) => parse_48;

declare type parse_49 = parseOk_49 | parseError_49;

declare const parse_49: (_1: Buffer) => parse_49;

declare type parse_5 = parseOk_5 | parseError_5;

declare const parse_5: (_1: Buffer) => parse_5;

declare type parse_50 = parseOk_50 | parseError_50;

declare const parse_50: (_1: Buffer) => parse_50;

declare type parse_51 = parseOk_51 | parseError_51;

declare const parse_51: (_1: Buffer) => parse_51;

declare type parse_52 = parseOk_52 | parseError_52;

declare const parse_52: (_1: Buffer) => parse_52;

declare type parse_53 = parseOk_53 | parseError_53;

declare const parse_53: (_1: Buffer) => parse_53;

declare type parse_54 = parseOk_54 | parseError_54;

declare const parse_54: (_1: Buffer) => parse_54;

declare type parse_55 = parseOk_55 | parseError_55;

declare const parse_55: (_1: Buffer) => parse_55;

declare type parse_56 = parseOk_56 | parseError_56;

declare const parse_56: (_1: Buffer) => parse_56;

declare type parse_57 = parseOk_57 | parseError_57;

declare const parse_57: (_1: Buffer) => parse_57;

declare type parse_58 = parseOk_58 | parseError_58;

declare const parse_58: (_1: Buffer) => parse_58;

declare type parse_59 = parseOk_59 | parseError_59;

declare const parse_59: (_1: Buffer) => parse_59;

declare type parse_6 = parseOk_6 | parseError_6;

declare const parse_6: (_1: Buffer) => parse_6;

declare type parse_60 = parseOk_60 | parseError_60;

declare const parse_60: (_1: Buffer) => parse_60;

declare type parse_61 = parseOk_61 | parseError_61;

declare const parse_61: (_1: Buffer) => parse_61;

declare type parse_62 = parseOk_62 | parseError_62;

declare const parse_62: (_1: Buffer) => parse_62;

declare type parse_63 = parseOk_63 | parseError_63;

declare const parse_63: (_1: Buffer) => parse_63;

declare type parse_64 = parseOk_64 | parseError_64;

declare const parse_64: (_1: Buffer) => parse_64;

declare type parse_65 = parseOk_65 | parseError_65;

declare const parse_65: (_1: Buffer) => parse_65;

declare type parse_66 = parseOk_66 | parseError_66;

declare const parse_66: (_1: Buffer) => parse_66;

declare type parse_67 = parseOk_67 | parseError_67;

declare const parse_67: (_1: Buffer) => parse_67;

declare type parse_68 = parseOk_68 | parseError_68;

declare const parse_68: (_1: Buffer) => parse_68;

declare type parse_69 = parseOk_69 | parseError_69;

declare const parse_69: (_1: Buffer) => parse_69;

declare type parse_7 = parseOk_7 | parseError_7;

declare const parse_7: (_1: Buffer) => parse_7;

declare type parse_70 = parseOk_70 | parseError_70;

declare const parse_70: (_1: Buffer) => parse_70;

declare type parse_71 = parseOk_71 | parseError_71;

declare const parse_71: (_1: Buffer) => parse_71;

declare type parse_72 = parseOk_72 | parseError_72;

declare const parse_72: (_1: Buffer) => parse_72;

declare type parse_73 = parseOk_73 | parseError_73;

declare const parse_73: (_1: Buffer) => parse_73;

declare type parse_74 = parseOk_74 | parseError_74;

declare const parse_74: (_1: Buffer) => parse_74;

declare type parse_75 = parseOk_75 | parseError_75;

declare const parse_75: (_1: Buffer) => parse_75;

declare type parse_76 = parseOk_76 | parseError_76;

declare const parse_76: (_1: Buffer) => parse_76;

declare type parse_77 = parseOk_77 | parseError_77;

declare const parse_77: (_1: Buffer) => parse_77;

declare type parse_78 = parseOk_78 | parseError_78;

declare const parse_78: (_1: Buffer) => parse_78;

declare type parse_79 = parseOk_79 | parseError_79;

declare const parse_79: (_1: Buffer) => parse_79;

declare type parse_8 = parseOk_8 | parseError_8;

declare const parse_8: (_1: Buffer) => parse_8;

declare type parse_80 = parseOk_80 | parseError_80;

declare const parse_80: (_1: Buffer) => parse_80;

declare type parse_81 = parseOk_81 | parseError_81;

declare const parse_81: (_1: Buffer) => parse_81;

declare type parse_82 = parseOk_82 | parseError_82;

declare const parse_82: (_1: Buffer) => parse_82;

declare type parse_83 = parseOk_83 | parseError_83;

declare const parse_83: (_1: Buffer) => parse_83;

declare type parse_84 = parseOk_84 | parseError_84;

declare const parse_84: (_1: Buffer) => parse_84;

declare type parse_85 = parseOk_85 | parseError_85;

declare const parse_85: (_1: Buffer) => parse_85;

declare type parse_86 = parseOk_86 | parseError_86;

declare const parse_86: (_1: Buffer) => parse_86;

declare type parse_87 = parseOk_87 | parseError_87;

declare const parse_87: (_1: Buffer) => parse_87;

declare const parse_88: parse_89<t_91>;

declare type parse_89<a> = (buffer: Buffer, fromServer: boolean) => parseResult<a>;

declare type parse_9 = parseOk_9 | parseError_9;

declare const parse_9: (_1: Buffer) => parse_9;

declare type parseError = { TAG: "Error"; _0: readError };

declare type parseError_10 = { TAG: "Error"; _0: readError };

declare type parseError_11 = { TAG: "Error"; _0: readError };

declare type parseError_12 = { TAG: "Error"; _0: readError };

declare type parseError_13 = { TAG: "Error"; _0: readError };

declare type parseError_14 = { TAG: "Error"; _0: readError };

declare type parseError_15 = { TAG: "Error"; _0: readError };

declare type parseError_16 = { TAG: "Error"; _0: readError };

declare type parseError_17 = { TAG: "Error"; _0: readError };

declare type parseError_18 = { TAG: "Error"; _0: readError };

declare type parseError_19 = { TAG: "Error"; _0: readError };

declare type parseError_2 = { TAG: "Error"; _0: readError };

declare type parseError_20 = { TAG: "Error"; _0: readError };

declare type parseError_21 = { TAG: "Error"; _0: readError };

declare type parseError_22 = { TAG: "Error"; _0: readError };

declare type parseError_23 = { TAG: "Error"; _0: readError };

declare type parseError_24 = { TAG: "Error"; _0: readError };

declare type parseError_25 = { TAG: "Error"; _0: readError };

declare type parseError_26 = { TAG: "Error"; _0: readError };

declare type parseError_27 = { TAG: "Error"; _0: readError };

declare type parseError_28 = { TAG: "Error"; _0: readError };

declare type parseError_29 = { TAG: "Error"; _0: readError };

declare type parseError_3 = { TAG: "Error"; _0: readError };

declare type parseError_30 = { TAG: "Error"; _0: readError };

declare type parseError_31 = { TAG: "Error"; _0: readError };

declare type parseError_32 = { TAG: "Error"; _0: readError };

declare type parseError_33 = { TAG: "Error"; _0: readError };

declare type parseError_34 = { TAG: "Error"; _0: readError };

declare type parseError_35 = { TAG: "Error"; _0: readError };

declare type parseError_36 = { TAG: "Error"; _0: readError };

declare type parseError_37 = { TAG: "Error"; _0: readError };

declare type parseError_38 = { TAG: "Error"; _0: readError };

declare type parseError_39 = { TAG: "Error"; _0: readError };

declare type parseError_4 = { TAG: "Error"; _0: readError };

declare type parseError_40 = { TAG: "Error"; _0: readError };

declare type parseError_41 = { TAG: "Error"; _0: readError };

declare type parseError_42 = { TAG: "Error"; _0: readError };

declare type parseError_43 = { TAG: "Error"; _0: readError };

declare type parseError_44 = { TAG: "Error"; _0: readError };

declare type parseError_45 = { TAG: "Error"; _0: readError };

declare type parseError_46 = { TAG: "Error"; _0: readError };

declare type parseError_47 = { TAG: "Error"; _0: readError };

declare type parseError_48 = { TAG: "Error"; _0: readError };

declare type parseError_49 = { TAG: "Error"; _0: readError };

declare type parseError_5 = { TAG: "Error"; _0: readError };

declare type parseError_50 = { TAG: "Error"; _0: readError };

declare type parseError_51 = { TAG: "Error"; _0: readError };

declare type parseError_52 = { TAG: "Error"; _0: readError };

declare type parseError_53 = { TAG: "Error"; _0: readError };

declare type parseError_54 = { TAG: "Error"; _0: readError };

declare type parseError_55 = { TAG: "Error"; _0: readError };

declare type parseError_56 = { TAG: "Error"; _0: readError };

declare type parseError_57 = { TAG: "Error"; _0: readError };

declare type parseError_58 = { TAG: "Error"; _0: readError };

declare type parseError_59 = { TAG: "Error"; _0: readError };

declare type parseError_6 = { TAG: "Error"; _0: readError };

declare type parseError_60 = { TAG: "Error"; _0: readError };

declare type parseError_61 = { TAG: "Error"; _0: readError };

declare type parseError_62 = { TAG: "Error"; _0: readError };

declare type parseError_63 = { TAG: "Error"; _0: readError };

declare type parseError_64 = { TAG: "Error"; _0: readError };

declare type parseError_65 = { TAG: "Error"; _0: readError };

declare type parseError_66 = { TAG: "Error"; _0: readError };

declare type parseError_67 = { TAG: "Error"; _0: readError };

declare type parseError_68 = { TAG: "Error"; _0: readError };

declare type parseError_69 = { TAG: "Error"; _0: readError };

declare type parseError_7 = { TAG: "Error"; _0: readError };

declare type parseError_70 = { TAG: "Error"; _0: readError };

declare type parseError_71 = { TAG: "Error"; _0: readError };

declare type parseError_72 = { TAG: "Error"; _0: readError };

declare type parseError_73 = { TAG: "Error"; _0: readError };

declare type parseError_74 = { TAG: "Error"; _0: readError };

declare type parseError_75 = { TAG: "Error"; _0: readError };

declare type parseError_76 = { TAG: "Error"; _0: readError };

declare type parseError_77 = { TAG: "Error"; _0: readError };

declare type parseError_78 = { TAG: "Error"; _0: readError };

declare type parseError_79 = { TAG: "Error"; _0: readError };

declare type parseError_8 = { TAG: "Error"; _0: readError };

declare type parseError_80 = { TAG: "Error"; _0: readError };

declare type parseError_81 = { TAG: "Error"; _0: readError };

declare type parseError_82 = { TAG: "Error"; _0: readError };

declare type parseError_83 = { TAG: "Error"; _0: readError };

declare type parseError_84 = { TAG: "Error"; _0: readError };

declare type parseError_85 = { TAG: "Error"; _0: readError };

declare type parseError_86 = { TAG: "Error"; _0: readError };

declare type parseError_87 = { TAG: "Error"; _0: readError };

declare type parseError_88 =
| { TAG: "ReaderError"; _0: readError }
| { TAG: "ConnectRequestFromServer" }
| { TAG: "DisconnectFromClient" }
| { TAG: "PlayerSlotSetFromClient" }
| { TAG: "WorldDataRequestFromServer" }
| { TAG: "WorldInfoFromClient" }
| { TAG: "InitialTileSectionsRequestFromServer" }
| { TAG: "StatusFromClient" }
| { TAG: "TileSectionSendFromClient" }
| { TAG: "TileSectionFrameFromClient" }
| { TAG: "PlayerActiveFromClient" }
| { TAG: "TimeSetFromClient" }
| { TAG: "NpcUpdateFromClient" }
| { TAG: "ChestOpenFromServer" }
| { TAG: "PasswordRequiredFromClient" }
| { TAG: "PasswordSendFromServer" }
| { TAG: "ItemOwnerRemoveFromClient" }
| { TAG: "SignReadFromServer" }
| { TAG: "PlayerSpawnSelfFromClient" }
| { TAG: "NpcBuffUpdateFromClient" }
| { TAG: "GoodEvilUpdateFromClient" }
| { TAG: "BossOrInvasionSpawnFromServer" }
| { TAG: "ClientUuidFromServer" }
| { TAG: "NpcCatchFromServer" }
| { TAG: "NpcReleaseFromServer" }
| { TAG: "TravellingMerchantInventoryFromClient" }
| { TAG: "AnglerQuestFromClient" }
| { TAG: "AnglerQuestCompleteFromServer" }
| { TAG: "TemporaryAnimationCreateFromClient" }
| { TAG: "InvasionProgressReportFromClient" }
| { TAG: "PlayerChestIndexSyncFromClient" }
| { TAG: "CombatNumberCreateFromClient" }
| { TAG: "NpcKillCountFromClient" }
| { TAG: "ItemForceIntoNearestChestFromServer" }
| { TAG: "TileEntityUpdateFromClient" }
| { TAG: "TileEntityPlaceFromServer" }
| { TAG: "ItemDropModifyFromClient" }
| { TAG: "ItemFramePlaceFromServer" }
| { TAG: "EmoteBubbleFromClient" }
| { TAG: "PortalKillFromServer" }
| { TAG: "NpcKilledNotificationFromClient" }
| { TAG: "EventNotificationFromClient" }
| { TAG: "ShieldStrengthsUpdateFromClient" }
| { TAG: "MoonLordCountdownFromClient" }
| { TAG: "NpcShopItemFromClient" }
| { TAG: "GemLockToggleFromServer" }
| { TAG: "SmokePoofFromClient" }
| { TAG: "ChatMessageSmartFromClient" }
| { TAG: "WiredCannonShotFromClient" }
| { TAG: "MassWireOperationFromServer" }
| { TAG: "MassWireOperationPayFromClient" }
| { TAG: "PartyToggleFromServer" }
| { TAG: "CrystalInvasionStartFromServer" }
| { TAG: "CrystalInvasionWipeAllFromClient" }
| { TAG: "CrystalInvasionSendWaitTimeFromClient" }
| { TAG: "CombatTextCreateFromClient" }
| { TAG: "EmojiFromServer" }
| { TAG: "WeaponsRackTryPlacingFromServer" }
| { TAG: "RevengeMarkerSyncFromClient" }
| { TAG: "RevengeMarkerRemoveFromClient" }
| { TAG: "ClientFinishConnectingToServerFromClient" }
| { TAG: "NpcFishOutFromServer" }
| { TAG: "NpcTamperFromClient" }
| { TAG: "LegacySoundPlayFromClient" }
| { TAG: "FoodPlatterTryPlacingFromServer" }
| { TAG: "PlayerDeadFromClient" }
| { TAG: "NpcBuffRemovalRequestFromServer" }
| { TAG: "ClientSyncedInventoryFromServer" }
| { TAG: "NotImplemented" }
| { TAG: "InvalidPacketLength"; _0: number }
| { TAG: "InvalidPacketType"; _0: number }
| { TAG: "IgnoredPacket" };

declare type parseError_9 = { TAG: "Error"; _0: readError };

declare const parseLazy: parseLazy_2<LazyPacket_t>;

declare type parseLazy_2<a> = (buffer: Buffer, fromServer: boolean) => parseResult<a>;

declare type parseOk = { TAG: "Ok"; _0: t };

declare type parseOk_10 = { TAG: "Ok"; _0: t_10 };

declare type parseOk_11 = { TAG: "Ok"; _0: t_11 };

declare type parseOk_12 = { TAG: "Ok"; _0: t_12 };

declare type parseOk_13 = { TAG: "Ok"; _0: t_13 };

declare type parseOk_14 = { TAG: "Ok"; _0: t_14 };

declare type parseOk_15 = { TAG: "Ok"; _0: t_15 };

declare type parseOk_16 = { TAG: "Ok"; _0: t_16 };

declare type parseOk_17 = { TAG: "Ok"; _0: t_17 };

declare type parseOk_18 = { TAG: "Ok"; _0: t_18 };

declare type parseOk_19 = { TAG: "Ok"; _0: t_19 };

declare type parseOk_2 = { TAG: "Ok"; _0: t_2 };

declare type parseOk_20 = { TAG: "Ok"; _0: t_20 };

declare type parseOk_21 = { TAG: "Ok"; _0: t_21 };

declare type parseOk_22 = { TAG: "Ok"; _0: NetModuleLoad };

declare type parseOk_23 = { TAG: "Ok"; _0: t_23 };

declare type parseOk_24 = { TAG: "Ok"; _0: t_24 };

declare type parseOk_25 = { TAG: "Ok"; _0: t_25 };

declare type parseOk_26 = { TAG: "Ok"; _0: t_26 };

declare type parseOk_27 = { TAG: "Ok"; _0: t_27 };

declare type parseOk_28 = { TAG: "Ok"; _0: t_28 };

declare type parseOk_29 = { TAG: "Ok"; _0: t_29 };

declare type parseOk_3 = { TAG: "Ok"; _0: t_3 };

declare type parseOk_30 = { TAG: "Ok"; _0: t_30 };

declare type parseOk_31 = { TAG: "Ok"; _0: t_31 };

declare type parseOk_32 = { TAG: "Ok"; _0: t_32 };

declare type parseOk_33 = { TAG: "Ok"; _0: t_34 };

declare type parseOk_34 = { TAG: "Ok"; _0: t_35 };

declare type parseOk_35 = { TAG: "Ok"; _0: t_36 };

declare type parseOk_36 = { TAG: "Ok"; _0: t_37 };

declare type parseOk_37 = { TAG: "Ok"; _0: t_38 };

declare type parseOk_38 = { TAG: "Ok"; _0: t_39 };

declare type parseOk_39 = { TAG: "Ok"; _0: t_40 };

declare type parseOk_4 = { TAG: "Ok"; _0: t_4 };

declare type parseOk_40 = { TAG: "Ok"; _0: t_41 };

declare type parseOk_41 = { TAG: "Ok"; _0: t_43 };

declare type parseOk_42 = { TAG: "Ok"; _0: t_44 };

declare type parseOk_43 = { TAG: "Ok"; _0: t_45 };

declare type parseOk_44 = { TAG: "Ok"; _0: t_46 };

declare type parseOk_45 = { TAG: "Ok"; _0: t_47 };

declare type parseOk_46 = { TAG: "Ok"; _0: t_48 };

declare type parseOk_47 = { TAG: "Ok"; _0: t_49 };

declare type parseOk_48 = { TAG: "Ok"; _0: t_50 };

declare type parseOk_49 = { TAG: "Ok"; _0: t_51 };

declare type parseOk_5 = { TAG: "Ok"; _0: t_5 };

declare type parseOk_50 = { TAG: "Ok"; _0: t_52 };

declare type parseOk_51 = { TAG: "Ok"; _0: t_53 };

declare type parseOk_52 = { TAG: "Ok"; _0: t_54 };

declare type parseOk_53 = { TAG: "Ok"; _0: t_55 };

declare type parseOk_54 = { TAG: "Ok"; _0: t_56 };

declare type parseOk_55 = { TAG: "Ok"; _0: t_57 };

declare type parseOk_56 = { TAG: "Ok"; _0: t_58 };

declare type parseOk_57 = { TAG: "Ok"; _0: t_59 };

declare type parseOk_58 = { TAG: "Ok"; _0: t_60 };

declare type parseOk_59 = { TAG: "Ok"; _0: t_61 };

declare type parseOk_6 = { TAG: "Ok"; _0: t_6 };

declare type parseOk_60 = { TAG: "Ok"; _0: t_62 };

declare type parseOk_61 = { TAG: "Ok"; _0: t_63 };

declare type parseOk_62 = { TAG: "Ok"; _0: t_64 };

declare type parseOk_63 = { TAG: "Ok"; _0: t_65 };

declare type parseOk_64 = { TAG: "Ok"; _0: t_66 };

declare type parseOk_65 = { TAG: "Ok"; _0: t_67 };

declare type parseOk_66 = { TAG: "Ok"; _0: t_68 };

declare type parseOk_67 = { TAG: "Ok"; _0: t_69 };

declare type parseOk_68 = { TAG: "Ok"; _0: t_70 };

declare type parseOk_69 = { TAG: "Ok"; _0: t_71 };

declare type parseOk_7 = { TAG: "Ok"; _0: t_7 };

declare type parseOk_70 = { TAG: "Ok"; _0: t_72 };

declare type parseOk_71 = { TAG: "Ok"; _0: t_73 };

declare type parseOk_72 = { TAG: "Ok"; _0: t_74 };

declare type parseOk_73 = { TAG: "Ok"; _0: t_75 };

declare type parseOk_74 = { TAG: "Ok"; _0: t_76 };

declare type parseOk_75 = { TAG: "Ok"; _0: t_79 };

declare type parseOk_76 = { TAG: "Ok"; _0: t_80 };

declare type parseOk_77 = { TAG: "Ok"; _0: t_81 };

declare type parseOk_78 = { TAG: "Ok"; _0: t_82 };

declare type parseOk_79 = { TAG: "Ok"; _0: t_83 };

declare type parseOk_8 = { TAG: "Ok"; _0: t_8 };

declare type parseOk_80 = { TAG: "Ok"; _0: t_84 };

declare type parseOk_81 = { TAG: "Ok"; _0: t_85 };

declare type parseOk_82 = { TAG: "Ok"; _0: t_86 };

declare type parseOk_83 = { TAG: "Ok"; _0: t_87 };

declare type parseOk_84 = { TAG: "Ok"; _0: WorldInfo };

declare type parseOk_85 = { TAG: "Ok"; _0: t_88 };

declare type parseOk_86 = { TAG: "Ok"; _0: t_89 };

declare type parseOk_87 = { TAG: "Ok"; _0: t_90 };

declare type parseOk_9 = { TAG: "Ok"; _0: t_9 };

export declare namespace Parser {
    export {
        convertIfNeeded,
        convertIfNeededResult,
        parse_88 as parse,
        parseLazy,
        convertv1449IfNeeded
    }
}

declare type parseResult<a> =
| { TAG: "Ok"; _0: (a) }
| { TAG: "Error"; _0: parseError_88 };

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
        t_35 as t,
        parseOk_34 as parseOk,
        parseError_34 as parseError,
        parse_34 as parse,
        toBufferOk_34 as toBufferOk,
        toBufferError_34 as toBufferError,
        toBuffer_34 as toBuffer
    }
}

declare type payload = "Remove" | { TAG: "Data"; _0: Buffer };

declare type payload_2 = "Remove" | { TAG: "Data"; _0: Buffer };

declare type PerPlayerSliderPower = {
    readonly playerId: number;
    readonly value: number;
};

declare type PerPlayerTogglePower =
| { readonly TAG: "Everyone"; readonly _0: boolean[] }
| { readonly TAG: "Player"; readonly _0: number; readonly _1: boolean };

export declare namespace PlayerActivePacket {
    export {
        t_88 as t,
        parseOk_85 as parseOk,
        parseError_85 as parseError,
        parse_85 as parse,
        toBufferOk_84 as toBufferOk,
        toBufferError_84 as toBufferError,
        toBuffer_84 as toBuffer
    }
}

export declare namespace PlayerAnimationPacket {
    export {
        t_36 as t,
        parseOk_35 as parseOk,
        parseError_35 as parseError,
        parse_35 as parse,
        toBufferOk_35 as toBufferOk,
        toBufferError_35 as toBufferError,
        toBuffer_35 as toBuffer
    }
}

export declare namespace PlayerBuffAddPacket {
    export {
        t_37 as t,
        parseOk_36 as parseOk,
        parseError_36 as parseError,
        parse_36 as parse,
        toBufferOk_36 as toBufferOk,
        toBufferError_36 as toBufferError,
        toBuffer_36 as toBuffer
    }
}

export declare namespace PlayerBuffsSetPacket {
    export {
        t_38 as t,
        parseOk_37 as parseOk,
        parseError_37 as parseError,
        parse_37 as parse,
        toBufferOk_37 as toBufferOk,
        toBufferError_37 as toBufferError,
        toBuffer_37 as toBuffer
    }
}

export declare namespace PlayerChestIndexSyncPacket {
    export {
        t_39 as t,
        parseOk_38 as parseOk,
        parseError_38 as parseError,
        parse_38 as parse,
        toBufferOk_38 as toBufferOk,
        toBufferError_38 as toBufferError,
        toBuffer_38 as toBuffer
    }
}

export declare namespace PlayerDamagePacket {
    export {
        t_87 as t,
        parseOk_83 as parseOk,
        parseError_83 as parseError,
        parse_83 as parse,
        toBufferOk_82 as toBufferOk,
        toBufferError_82 as toBufferError,
        toBuffer_82 as toBuffer
    }
}

export declare namespace PlayerDeadPacket {
    export {
        t_40 as t,
        parseOk_39 as parseOk,
        parseError_39 as parseError,
        parse_39 as parse,
        toBufferOk_39 as toBufferOk,
        toBufferError_39 as toBufferError,
        toBuffer_39 as toBuffer
    }
}

export declare namespace PlayerDeathPacket {
    export {
        t_41 as t,
        parseOk_40 as parseOk,
        parseError_40 as parseError,
        parse_40 as parse,
        toBufferOk_40 as toBufferOk,
        toBufferError_40 as toBufferError,
        toBuffer_40 as toBuffer
    }
}

export declare namespace PlayerDeathReason {
    export {
        other_2 as other,
        t_78 as t
    }
}

export declare namespace PlayerDodgePacket {
    export {
        dodge,
        t_43 as t,
        parseOk_41 as parseOk,
        parseError_41 as parseError,
        parse_41 as parse,
        toBufferOk_41 as toBufferOk,
        toBufferError_41 as toBufferError,
        toBuffer_41 as toBuffer
    }
}

export declare namespace PlayerHealthPacket {
    export {
        t_84 as t,
        parseOk_80 as parseOk,
        parseError_80 as parseError,
        parse_80 as parse,
        toBufferOk_79 as toBufferOk,
        toBufferError_79 as toBufferError,
        toBuffer_79 as toBuffer
    }
}

declare type playerId = number;

export declare namespace PlayerInfoPacket {
    export {
        difficulty,
        mode,
        t_81 as t,
        parseOk_77 as parseOk,
        parseError_77 as parseError,
        parse_77 as parse,
        toBufferOk_76 as toBufferOk,
        toBufferError_76 as toBufferError,
        toBuffer_76 as toBuffer
    }
}

export declare namespace PlayerInventorySlotPacket {
    export {
        t_83 as t,
        parseOk_79 as parseOk,
        parseError_79 as parseError,
        parse_79 as parse,
        toBufferOk_78 as toBufferOk,
        toBufferError_78 as toBufferError,
        toBuffer_78 as toBuffer
    }
}

export declare namespace PlayerManaPacket {
    export {
        t_44 as t,
        parseOk_42 as parseOk,
        parseError_42 as parseError,
        parse_42 as parse,
        toBufferOk_42 as toBufferOk,
        toBufferError_42 as toBufferError,
        toBuffer_42 as toBuffer
    }
}

export declare namespace PlayerSlotSetPacket {
    export {
        t_79 as t,
        parseOk_75 as parseOk,
        parseError_75 as parseError,
        parse_75 as parse,
        toBufferOk_74 as toBufferOk,
        toBufferError_74 as toBufferError,
        toBuffer_74 as toBuffer
    }
}

export declare namespace PlayerSpawnPacket {
    export {
        context,
        t_82 as t,
        parseOk_78 as parseOk,
        parseError_78 as parseError,
        parse_78 as parse,
        toBufferOk_77 as toBufferOk,
        toBufferError_77 as toBufferError,
        toBuffer_77 as toBuffer
    }
}

export declare namespace PlayerTeamPacket {
    export {
        t_45 as t,
        parseOk_43 as parseOk,
        parseError_43 as parseError,
        parse_43 as parse,
        toBufferOk_43 as toBufferOk,
        toBufferError_43 as toBufferError,
        toBuffer_43 as toBuffer
    }
}

export declare namespace PlayerUpdatePacket {
    export {
        direction_2 as direction,
        potionOfReturn,
        control,
        pulleyDirection,
        gravityDirection,
        t_80 as t,
        parseOk_76 as parseOk,
        parseError_76 as parseError,
        parse_76 as parse,
        toBufferOk_75 as toBufferOk,
        toBufferError_75 as toBufferError,
        toBuffer_75 as toBuffer
    }
}

export declare namespace Point {
    export {
        t_246 as t,
        Int_t,
        Float_t
    }
}

declare type port = number;

declare type port_2 = number;

declare type position = { readonly x: number; readonly y: number };

declare type potionOfReturn = { readonly originalUsePosition: t_33<number>; readonly homePosition: t_33<number> };

declare type potionOfReturn_2 = { readonly originalUsePosition: t_33<number>; readonly homePosition: t_33<number> };

declare type powerLevel =
"LockedForEveryone"
| "CanBeChangedByHostAlone"
| "CanBeChangedByEveryone";

export declare namespace ProjectileSyncPacket {
    export {
        t_86 as t,
        parseOk_82 as parseOk,
        parseError_82 as parseError,
        parse_82 as parse,
        toBufferOk_81 as toBufferOk,
        toBufferError_81 as toBufferError,
        toBuffer_81 as toBuffer
    }
}

declare type pulleyDirection = "One" | "Two";

declare type pulleyDirection_2 = "One" | "Two";

export declare namespace PvpTogglePacket {
    export {
        t_46 as t,
        parseOk_44 as parseOk,
        parseError_44 as parseError,
        parse_44 as parse,
        toBufferOk_44 as toBufferOk,
        toBufferError_44 as toBufferError,
        toBuffer_44 as toBuffer
    }
}

declare type pylonAction = "Added" | "Removed" | "RequestTeleport";

declare type readError = { readonly context: string; readonly error: unknown };

export declare namespace Result {
    export {
        Result_3 as Result
    }
}

declare type Result_2<T, E> = {
    TAG: "Ok",
    _0: T,
} | {
    TAG: "Error",
    _0: E,
}

declare type Result_3<T, E> = {
    TAG: "Ok",
    _0: T,
} | {
    TAG: "Error",
    _0: E,
}

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
        t_47 as t,
        parseOk_45 as parseOk,
        parseError_45 as parseError,
        parse_45 as parse,
        toBufferOk_45 as toBufferOk,
        toBufferError_45 as toBufferError,
        toBuffer_45 as toBuffer
    }
}

declare const Sign: {};

declare type Sign_t = {
    readonly id: number; 
    readonly x: number; 
    readonly y: number; 
    readonly name: string
};

declare type Sign_t_2 = {
    readonly id: number; 
    readonly x: number; 
    readonly y: number; 
    readonly name: string
};

export declare namespace SignNewPacket {
    export {
        t_48 as t,
        parseOk_46 as parseOk,
        parseError_46 as parseError,
        parse_46 as parse,
        toBufferOk_46 as toBufferOk,
        toBufferError_46 as toBufferError,
        toBuffer_46 as toBuffer
    }
}

export declare namespace SignReadPacket {
    export {
        t_49 as t,
        parseOk_47 as parseOk,
        parseError_47 as parseError,
        parse_47 as parse,
        toBufferOk_47 as toBufferOk,
        toBufferError_47 as toBufferError,
        toBuffer_47 as toBuffer
    }
}

export declare namespace SmokePoofPacket {
    export {
        t_50 as t,
        parseOk_48 as parseOk,
        parseError_48 as parseError,
        parse_48 as parse,
        toBufferOk_48 as toBufferOk,
        toBufferError_48 as toBufferError,
        toBuffer_48 as toBuffer
    }
}

export declare namespace SocialHandshakePacket {
    export {
        t_51 as t,
        parseOk_49 as parseOk,
        parseError_49 as parseError,
        parse_49 as parse,
        toBufferOk_49 as toBufferOk,
        toBufferError_49 as toBufferError,
        toBuffer_49 as toBuffer
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

declare type spawnType_2 = 
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
        t_52 as t,
        parseOk_50 as parseOk,
        parseError_50 as parseError,
        parse_50 as parse,
        toBufferOk_50 as toBufferOk,
        toBufferError_50 as toBufferError,
        toBuffer_50 as toBuffer
    }
}

export declare namespace SwitchHitPacket {
    export {
        t_53 as t,
        parseOk_51 as parseOk,
        parseError_51 as parseError,
        parse_51 as parse,
        toBufferOk_51 as toBufferOk,
        toBufferError_51 as toBufferError,
        toBuffer_51 as toBuffer
    }
}

declare type t = { readonly anglerQuest: number; readonly anglerQuestFinished: boolean };

declare type t_10 = { readonly playerId: number; readonly countsAsHost: boolean };

declare type t_100 = {
    readonly height: number; 
    readonly width: number; 
    readonly tileX: number; 
    readonly tileY: number; 
    readonly tiles: Array<tile_3[]>; 
    readonly chests: Chest_t_2[]; 
    readonly signs: Sign_t_2[]; 
    readonly entities: Entity_t_2[]
};

declare type t_101 = {
    readonly startX: number; 
    readonly startY: number; 
    readonly endX: number; 
    readonly endY: number
};

declare type t_102 = {
    readonly playerId: number;
    readonly x: number;
    readonly y: number;
    readonly timeRemaining: number;
    readonly numberOfDeathsPve: number;
    readonly numberOfDeathsPvp: number;
    readonly context: context_2
};

declare type t_103 = {
    readonly playerId: number;
    readonly control: control_2;
    readonly direction: direction_3;
    readonly pulleyDirection: (undefined | pulleyDirection_2);
    readonly vortexStealthActive: boolean;
    readonly gravityDirection: gravityDirection_2;
    readonly shouldGuard: boolean;
    readonly ghost: boolean;
    readonly selectedItem: number;
    readonly position: t_33<number>;
    readonly velocity: (undefined | t_33<number>);
    readonly potionOfReturn: (undefined | potionOfReturn_2);
    readonly tryKeepingHoveringUp: boolean;
    readonly isVoidVaultEnabled: boolean;
    readonly isSitting: boolean;
    readonly hasFinishedAnyDd2Event: boolean;
    readonly isPettingAnimal: boolean;
    readonly isTheAnimalBeingPetSmall: boolean;
    readonly tryKeepingHoveringDown: boolean;
    readonly isSleeping: boolean
};

declare type t_104 = {
    readonly playerId: number;
    readonly active: boolean;
};

declare type t_105 = {
    readonly playerId: number;
    readonly health: number;
    readonly maxHealth: number
};

declare type t_106 = {
    readonly action: Action_t_3;
    readonly tileX: number;
    readonly tileY: number;
    readonly value1: number;
    readonly value2: number
};

declare type t_107 = {
    readonly dayTime: boolean;
    readonly time: number;
    readonly sunModY: number;
    readonly moonModY: number
};

declare type t_108 = {
    readonly action: action;
    readonly x: number;
    readonly y: number;
    readonly direction: number
};

declare type t_109 = {
    readonly width: number;
    readonly height: number;
    readonly changeType: number;
    readonly tileX: number;
    readonly tileY: number;
    readonly tiles: Array<tile_4[]>
};

declare type t_11 = { readonly eventType: EventType_t; readonly value: number };

declare type t_110 = {
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

declare type t_111 = { readonly itemDropId: number; readonly owner: number };

declare type t_112 = {
    readonly npcSlotId: number;
    readonly npcTypeId: number;
    readonly x: number;
    readonly y: number;
    readonly vx: number;
    readonly vy: number;
    readonly target: number;
    readonly directionX: boolean;
    readonly directionY: boolean;
    readonly ai: ai_2;
    readonly spriteDirection: boolean;
    readonly life: life_2;
    readonly releaseOwner: (undefined | number);
    readonly playerCountScale: (undefined | number);
    readonly strengthMultiplier: (undefined | number);
    readonly spawnedFromStatue: boolean
};

declare type t_113 = { readonly npcId: number; readonly playerId: number };

declare type t_114 = {
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

declare type t_115 = {
    readonly npcId: number;
    readonly damage: number;
    readonly knockback: number;
    readonly direction: number;
    readonly critical: boolean
};

declare type t_116 = { readonly projectileId: number; readonly owner: number };

declare type t_117 = { readonly playerId: number; readonly pvpEnabled: boolean };

declare type t_118 = { readonly x: number; readonly y: number };

declare type t_119 = {
    readonly chestId: number; 
    readonly slot: number; 
    readonly stack: number; 
    readonly prefix: number; 
    readonly itemNetId: number
};

declare type t_12 = { readonly x: number; readonly y: number };

declare type t_120 = {
    readonly chestId: number; 
    readonly x: number; 
    readonly y: number; 
    readonly nameLength: number; 
    readonly name: string
};

declare type t_121 = {
    readonly action: Action_t_4;
    readonly x: number;
    readonly y: number;
    readonly style: number;
    readonly id: number
};

declare type t_122 = { readonly playerId: number; readonly healAmount: number };

declare type t_123 = {
    readonly playerId: number;
    readonly zone1: number;
    readonly zone2: number;
    readonly zone3: number;
    readonly zone4: number;
    readonly zone5: number
};

declare type t_124 = void;

declare type t_125 = { readonly password: string };

declare type t_126 = { readonly itemDropId: number };

declare type t_127 = { readonly playerId: number; readonly npcId: number };

declare type t_128 = {
    readonly playerId: number;
    readonly itemRotation: number;
    readonly itemAnimation: number
};

declare type t_129 = {
    readonly playerId: number;
    readonly mana: number;
    readonly maxMana: number
};

declare type t_13 =
| "GamemodesJoinMode"
| { TAG: "RealIpAddress"; _0: ip }
| { TAG: "SwitchServer"; _0: dimensionName }
| { TAG: "SwitchServerManual"; _0: ip; _1: port };

declare type t_130 = { readonly playerId: number; readonly manaAmount: number };

declare type t_131 = { readonly playerId: number; readonly team: number };

declare type t_132 = { readonly x: number; readonly y: number };

declare type t_133 = {
    readonly signId: number;
    readonly x: number;
    readonly y: number;
    readonly text: string;
    readonly playerId: number;
    readonly deleteSign: boolean
};

declare type t_134 = {
    readonly x: number;
    readonly y: number;
    readonly liquid: number;
    readonly liquidType: number
};

declare type t_135 = undefined

declare type t_136 = { readonly playerId: number; readonly buffs: number[] };

declare type t_137 = { readonly playerId: number; readonly effectType: number };

declare type t_138 = {
    readonly unlockType: unlockType_2; 
    readonly x: number; 
    readonly y: number
};

declare type t_139 = { readonly npcId: number; readonly buffType: number; readonly time: number };

declare type t_14 = {
    readonly npcSlotId: number; 
    readonly extraValue: number; 
    readonly x: number; 
    readonly y: number
};

declare type t_140 = {
    readonly npcId: number; 
    readonly buffs: number[]; 
    readonly buffTimes: number[]
};

declare type t_141 = {
    readonly playerId: number;
    readonly buff: number;
    readonly time: number
};

declare type t_142 = {
    readonly npcId: number;
    readonly name: string;
    readonly townNpcVariationIndex: number
};

declare type t_143 = { readonly good: number; readonly evil: number; readonly blood: number };

declare type t_144 = { readonly playerId: number; readonly pitch: number };

declare type t_145 = { readonly x: number; readonly y: number };

declare type t_146 = {
    readonly npcId: number;
    readonly homeTileX: number;
    readonly homeTileY: number;
    readonly state: number
};

declare type t_147 = { readonly playerId: number; readonly spawnType: spawnType_2 };

declare type t_148 = { readonly playerId: number; readonly dodge: dodge_2 };

declare type t_149 = {
    readonly x: number;
    readonly y: number;
    readonly color: number;
    readonly coat: number
};

declare type t_15 = void;

declare type t_150 = {
    readonly x: number;
    readonly y: number;
    readonly color: number;
    readonly coat: number
};

declare type t_151 = {
    readonly teleportType: teleportType_3; 
    readonly getPositionFromTarget: boolean; 
    readonly targetId: number; 
    readonly x: number; 
    readonly y: number; 
    readonly style: number; 
    readonly extraInfo: (undefined | number)
};

declare type t_152 = { readonly playerId: number; readonly healAmount: number };

declare type t_153 =
| "GamemodesJoinMode"
| { TAG: "RealIpAddress"; _0: ip_2 }
| { TAG: "SwitchServer"; _0: dimensionName_2 }
| { TAG: "SwitchServerManual"; _0: ip_2; _1: port_2 };

declare type t_154 = { readonly uuid: string };

declare type t_155 = {
    readonly chestId: number;
    readonly x: number;
    readonly y: number;
    readonly name: string
};

declare type t_156 = { readonly npcId: number; readonly playerId: number };

declare type t_157 = {
    readonly x: number; 
    readonly y: number; 
    readonly npcType: number; 
    readonly style: number
};

declare type t_158 = { readonly items: number[] };

declare type t_159 = { readonly teleportType: teleportType_4 };

declare type t_16 = {
    readonly progress: number;
    readonly progressMax: number;
    readonly icon: number;
    readonly wave: number
};

declare type t_160 = { readonly anglerQuest: number; readonly anglerQuestFinished: boolean };

declare type t_161 = void;

declare type t_162 = {
    readonly playerId: number;
    readonly anglerQuestsFinished: number;
    readonly golferScoreAccumulated: number
};

declare type t_163 = { readonly typeId: number; readonly tileType: number; readonly x: number; readonly y: number };

declare type t_164 = {
    readonly progress: number;
    readonly progressMax: number;
    readonly icon: number;
    readonly wave: number
};

declare type t_165 = {
    readonly x: number;
    readonly y: number;
    readonly objectType: number;
    readonly style: number;
    readonly alternate: number;
    readonly random: number;
    readonly direction: direction_4
};

declare type t_166 = { readonly playerId: number; readonly chestId: number };

declare type t_167 = { readonly x: number; readonly y: number; readonly color: Color; readonly amount: number };

declare type t_168 = { readonly npcId: number; readonly killCount: number };

declare type t_169 = { readonly playerId: number; readonly stealth: number };

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

declare type t_170 = { readonly slot: number };

declare type t_171 = { readonly tileEntityId: number; readonly payload: payload_2 };

declare type t_172 = {
    readonly x: number;
    readonly y: number;
    readonly tileEntityType: number
};

declare type t_173 = {
    readonly itemId: number;
    readonly color: color | undefined;
    readonly damage: number | undefined;
    readonly knockback: number | undefined;
    readonly useAnimation: number | undefined;
    readonly useTime: number | undefined;
    readonly shoot: number | undefined;
    readonly shootSpeed: number | undefined;
    readonly width: number | undefined;
    readonly height: number | undefined;
    readonly scale: number | undefined;
    readonly ammo: number | undefined;
    readonly useAmmo: number | undefined;
    readonly notAmmo: boolean | undefined
};

declare type t_174 = {
    readonly x: number; 
    readonly y: number; 
    readonly itemId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type t_175 = t_110;

declare type t_176 = { readonly id: number; readonly anchor: anchor };

declare type t_177 = {
    readonly npcSlotId: number; 
    readonly extraValue: number; 
    readonly x: number; 
    readonly y: number
};

declare type t_178 = void;

declare type t_179 = undefined;

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

declare type t_180 = { readonly owner: number; readonly portalColor: number };

declare type t_181 = {
    readonly playerId: number;
    readonly extraInfo: number;
    readonly position: t_33<number>;
    readonly velocity: t_33<number>
};

declare type t_182 = { readonly npcId: number };

declare type t_183 = { readonly eventId: number };

declare type t_184 = { readonly playerId: number; readonly x: number; readonly y: number };

declare type t_185 = {
    readonly npcId: number;
    readonly portalColor: number;
    readonly position: t_33<number>;
    readonly velocity: t_33<number>
};

declare type t_186 = {
    readonly solar: number;
    readonly vortex: number;
    readonly nebula: number;
    readonly stardust: number
};

declare type t_187 = {
    readonly playerId: number;
    readonly level: number;
    readonly x: number;
    readonly y: number
};

declare type t_188 = { readonly maxMoonLordCountdown: number; readonly moonLordCountdown: number };

declare type t_189 = {
    readonly slot: number;
    readonly itemId: number;
    readonly stack: number;
    readonly prefix: number;
    readonly value: number;
    readonly buyOnce: boolean
};

declare type t_19 = { readonly itemDropId: number; readonly owner: number };

declare type t_190 = { readonly x: number; readonly y: number; readonly active: boolean };

declare type t_191 = { readonly packedPosition: number };

declare type t_192 = {
    readonly color: Color;
    readonly message: NetworkText;
    readonly widthLimit: number
};

declare type t_193 = {
    readonly damage: number;
    readonly knockback: number;
    readonly x: number;
    readonly y: number;
    readonly angle: number;
    readonly ammo: number;
    readonly playerId: number
};

declare type t_194 = {
    readonly startX: number;
    readonly startY: number;
    readonly endX: number;
    readonly endY: number;
    readonly toolMode: number
};

declare type t_195 = { readonly itemType: number; readonly stack: number; readonly playerId: number };

declare type t_196 = void;

declare type t_197 = {
    readonly action: number;
    readonly x: number;
    readonly y: number;
    readonly style: number;
    readonly treeType: number
};

declare type t_198 = { readonly x: number; readonly y: number };

declare type t_199 = void;

declare type t_2 = void;

declare type t_20 = { readonly itemDropId: number };

declare type t_200 = { readonly playerId: number; readonly targetNpcId: number };

declare type t_201 = { readonly timeLeftBetweenWaves: number };

declare type t_202 = {
    readonly target: number;
    readonly deathReason: t_42;
    readonly damage: number;
    readonly hitDirection: number;
    readonly critical: boolean;
    readonly pvp: boolean;
    readonly cooldownCounter: number
};

declare type t_203 = {
    readonly playerId: number;
    readonly deathReason: t_42;
    readonly damage: number;
    readonly hitDirection: number;
    readonly pvp: boolean
};

declare type t_204 = {
    readonly x: number;
    readonly y: number;
    readonly color: Color;
    readonly text: NetworkText
};

declare type t_205 = { readonly playerId: number; readonly emojiId: number };

declare type t_206 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_207 = { readonly tileEntityId: number; readonly playerId: number };

declare type t_208 = {
    readonly x: number; 
    readonly y: number; 
    readonly itemId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type t_209 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_21 = { readonly playerId: number; readonly loadout: number };

declare type t_210 = {
    readonly playerId: number;
    readonly x: number;
    readonly y: number;
    readonly pickPower: number
};

declare type t_211 = {
    readonly uniqueId: number;
    readonly position: t_33<number>;
    readonly npcNetId: number;
    readonly npcHpPercent: number;
    readonly npcTypeAgainstDiscouragement: number;
    readonly npcAiStyleAgainstDiscouragement: number;
    readonly coinValue: number;
    readonly baseValue: number;
    readonly spawnedFromStatue: boolean
};

declare type t_212 = { readonly markerId: number };

declare type t_213 = {
    readonly playerId: number;
    readonly cupX: number;
    readonly cupY: number;
    readonly projId: number;
    readonly projType: number
};

declare type t_214 = void;

declare type t_215 = { readonly x: number; readonly y: number; readonly npcNetId: number };

declare type t_216 = {
    readonly npcId: number; 
    readonly immunityTime: (undefined | number); 
    readonly immunityFromPlayerId: (undefined | Immunity_t)
};

declare type t_217 = {
    readonly position: t_33<number>;
    readonly soundIndex: number;
    readonly styleOverride: number | undefined;
    readonly volumeOverride: number | undefined;
    readonly pitchOverride: number | undefined
};

declare type t_218 = {
    readonly x: number; 
    readonly y: number; 
    readonly itemId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type t_219 = {
    readonly playerId: number; 
    readonly ladyBugLuckTimeLeft: number; 
    readonly torchLuck: number; 
    readonly luckPotion: number; 
    readonly hasGardenGnomeNearby: boolean; 
    readonly equipmentBasedLuckBonus: number; 
    readonly coinLuck: number
};

declare type t_22 = NetModuleLoad;

declare type t_220 = { readonly playerId: number };

declare type t_221 = number[][];

declare type t_222 = { readonly npcId: number; readonly buffType: number };

declare type t_223 = void;

declare type t_224 = { readonly playerId: number; readonly countsAsHost: boolean };

declare type t_225 = { readonly eventType: EventType_t_2; readonly value: number };

declare type t_226 = {
    readonly source: number; 
    readonly variant: number; 
    readonly velocity: t_33<number>; 
    readonly position: t_33<number>
};

declare type t_227 = {
    readonly playerId: number; 
    readonly piggyBankProj: (undefined | TrackedProjectileReference_t); 
    readonly voidLensChest: (undefined | TrackedProjectileReference_t)
};

declare type t_228 = void;

declare type t_229 = void;

declare type t_23 = { readonly npcId: number; readonly buffType: number };

declare type t_230 = {
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

declare type t_231 = 
    { TAG: "ShimmerEffect"; _0: number; _1: number }
| { TAG: "CoinLuck"; _0: coinLuck_2 }
| { TAG: "NewShimmerEffect"; _0: number };

declare type t_232 = { readonly playerId: number; readonly loadout: number };

declare type t_233 = {
    readonly itemDropId: number; 
    readonly x: number; 
    readonly y: number; 
    readonly vx: number; 
    readonly vy: number; 
    readonly stack: number; 
    readonly prefix: number; 
    readonly noDelay: number; 
    readonly itemId: number; 
    readonly timeLeftInWhichTheItemCannotBeTakenByEnemies: number
};

declare type t_234 = {
    readonly x: number;
    readonly y: number;
    readonly itemType: number;
    readonly prefix: number;
    readonly stack: number;
};

declare type t_235 = {
    readonly playerId: number;
    readonly targetPlayerId: number;
};

declare type t_236 = { readonly itemDropId: number };

declare type t_237 = { readonly playerId: number };

declare type t_238 = {
    readonly npcId: number;
    readonly debuffId: number;
};

declare type t_239 = void;

declare type t_24 = {
    readonly npcId: number; 
    readonly buffs: number[]; 
    readonly buffTimes: number[]
};

declare type t_240 = {
    readonly chestId: number;
    readonly newSize: number;
};

declare type t_241 = {
    readonly x: number;
    readonly y: number;
    readonly itemType: number;
};

declare type t_242 = {
    readonly playerId: number;
    readonly team: number;
};

declare type t_243 = { readonly playerId: number };

declare type t_244 = {
    readonly sectionX: number;
    readonly sectionY: number;
};

declare type t_245 = {
    readonly itemDropId: number;
    readonly position: t_246<number>;
};

declare type t_246<a> = { readonly x: a; readonly y: a };

declare type t_247 = { readonly token: string };

declare type t_248<T> = {
    LAZY_DONE: boolean,
    VAL: () => T
}

declare type t_25 = { readonly npcId: number; readonly playerId: number };

declare type t_26 = { readonly x: number; readonly y: number; readonly npcNetId: number };

declare type t_27 = {
    readonly npcId: number;
    readonly homeTileX: number;
    readonly homeTileY: number;
    readonly state: number
};

declare type t_28 = { readonly npcId: number; readonly killCount: number };

declare type t_29 = {
    readonly npcId: number;
    readonly name: string;
    readonly townNpcVariationIndex: number
};

declare type t_3 = { readonly playerId: number; readonly spawnType: spawnType };

declare type t_30 = {
    readonly slot: number;
    readonly itemId: number;
    readonly stack: number;
    readonly prefix: number;
    readonly value: number;
    readonly buyOnce: boolean
};

declare type t_31 = { readonly playerId: number; readonly npcId: number };

declare type t_32 = {
    readonly npcId: number;
    readonly portalColor: number;
    readonly position: t_33<number>;
    readonly velocity: t_33<number>
};

declare type t_33<a> = { readonly x: a; readonly y: a };

declare type t_34 = {
    readonly x: number;
    readonly y: number;
    readonly objectType: number;
    readonly style: number;
    readonly alternate: number;
    readonly random: number;
    readonly direction: direction
};

declare type t_35 = void;

declare type t_36 = {
    readonly playerId: number;
    readonly itemRotation: number;
    readonly itemAnimation: number
};

declare type t_37 = {
    readonly playerId: number;
    readonly buff: number;
    readonly time: number
};

declare type t_38 = { readonly playerId: number; readonly buffs: number[] };

declare type t_39 = { readonly playerId: number; readonly chestId: number };

declare type t_4 = {
    readonly color: Color;
    readonly message: NetworkText;
    readonly widthLimit: number
};

declare type t_40 = { readonly playerId: number };

declare type t_41 = {
    readonly playerId: number;
    readonly deathReason: t_42;
    readonly damage: number;
    readonly hitDirection: number;
    readonly pvp: boolean
};

declare type t_42 = {
    readonly killerPlayerId: (undefined | number); 
    readonly killerNpcId: (undefined | number); 
    readonly killerProjectileId: (undefined | number); 
    readonly typeOfDeathOther: (undefined | other); 
    readonly projectileType: (undefined | number); 
    readonly itemType: (undefined | number); 
    readonly itemPrefix: (undefined | number); 
    readonly deathReason: (undefined | string)
};

declare type t_43 = { readonly playerId: number; readonly dodge: dodge };

declare type t_44 = {
    readonly playerId: number;
    readonly mana: number;
    readonly maxMana: number
};

declare type t_45 = { readonly playerId: number; readonly team: number };

declare type t_46 = { readonly playerId: number; readonly pvpEnabled: boolean };

declare type t_47 = 
    { TAG: "ShimmerEffect"; _0: number; _1: number }
| { TAG: "CoinLuck"; _0: coinLuck }
| { TAG: "NewShimmerEffect"; _0: number };

declare type t_48 = {
    readonly signId: number;
    readonly x: number;
    readonly y: number;
    readonly text: string;
    readonly playerId: number;
    readonly deleteSign: boolean
};

declare type t_49 = { readonly x: number; readonly y: number };

declare type t_5 = {
    readonly chestId: number; 
    readonly slot: number; 
    readonly stack: number; 
    readonly prefix: number; 
    readonly itemNetId: number
};

declare type t_50 = { readonly packedPosition: number };

declare type t_51 = void;

declare type t_52 = {
    readonly max: number;
    readonly text: NetworkText;
    readonly flags: flags
};

declare type t_53 = { readonly x: number; readonly y: number };

declare type t_54 = {
    readonly teleportType: teleportType; 
    readonly getPositionFromTarget: boolean; 
    readonly targetId: number; 
    readonly x: number; 
    readonly y: number; 
    readonly style: number; 
    readonly extraInfo: (undefined | number)
};

declare type t_55 = { readonly teleportType: teleportType_2 };

declare type t_56 = { readonly typeId: number; readonly tileType: number; readonly x: number; readonly y: number };

declare type t_57 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_58 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_59 = { readonly tileEntityId: number; readonly playerId: number };

declare type t_6 = {
    readonly unlockType: unlockType; 
    readonly x: number; 
    readonly y: number
};

declare type t_60 = {
    readonly x: number;
    readonly y: number;
    readonly tileEntityType: number
};

declare type t_61 = { readonly tileEntityId: number; readonly payload: payload };

declare type t_62 = {
    readonly action: Action_t_2;
    readonly tileX: number;
    readonly tileY: number;
    readonly value1: number;
    readonly value2: number
};

declare type t_63 = {
    readonly x: number;
    readonly y: number;
    readonly color: number;
    readonly coat: number
};

declare type t_64 = {
    readonly playerId: number;
    readonly x: number;
    readonly y: number;
    readonly pickPower: number
};

declare type t_65 = {
    readonly startX: number; 
    readonly startY: number; 
    readonly endX: number; 
    readonly endY: number
};

declare type t_66 = {
    readonly height: number; 
    readonly width: number; 
    readonly tileX: number; 
    readonly tileY: number; 
    readonly tiles: Array<tile[]>; 
    readonly chests: Chest_t[]; 
    readonly signs: Sign_t[]; 
    readonly entities: Entity_t[]
};

declare type t_67 = {
    readonly width: number;
    readonly height: number;
    readonly changeType: number;
    readonly tileX: number;
    readonly tileY: number;
    readonly tiles: Array<tile_2[]>
};

declare type t_68 = {
    readonly dayTime: boolean;
    readonly time: number;
    readonly sunModY: number;
    readonly moonModY: number
};

declare type t_69 = { readonly items: number[] };

declare type t_7 = {
    readonly action: Action_t;
    readonly x: number;
    readonly y: number;
    readonly style: number;
    readonly id: number
};

declare type t_70 = {
    readonly action: number;
    readonly x: number;
    readonly y: number;
    readonly style: number;
    readonly treeType: number
};

declare type t_71 = undefined;

declare type t_72 = {
    readonly x: number;
    readonly y: number;
    readonly color: number;
    readonly coat: number
};

declare type t_73 = {
    readonly x: number; 
    readonly y: number; 
    readonly itemId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type t_74 = {
    readonly damage: number;
    readonly knockback: number;
    readonly x: number;
    readonly y: number;
    readonly angle: number;
    readonly ammo: number;
    readonly playerId: number
};

declare type t_75 = void;

declare type t_76 = {
    readonly playerId: number;
    readonly zone1: number;
    readonly zone2: number;
    readonly zone3: number;
    readonly zone4: number;
    readonly zone5: number
};

declare type t_77 = number;

declare type t_78 = {
    readonly killerPlayerId: (undefined | number); 
    readonly killerNpcId: (undefined | number); 
    readonly killerProjectileId: (undefined | number); 
    readonly typeOfDeathOther: (undefined | other_2); 
    readonly projectileType: (undefined | number); 
    readonly itemType: (undefined | number); 
    readonly itemPrefix: (undefined | number); 
    readonly deathReason: (undefined | string)
};

declare type t_79 = {
    playerSlotId: number;
    serverWantsToRunCheckBytesInClientLoopThread: boolean;
}

declare type t_8 = void;

declare type t_80 = {
    readonly playerId: number;
    readonly control: control;
    readonly direction: direction_2;
    readonly pulleyDirection: (undefined | pulleyDirection);
    readonly vortexStealthActive: boolean;
    readonly gravityDirection: gravityDirection;
    readonly shouldGuard: boolean;
    readonly ghost: boolean;
    readonly selectedItem: number;
    readonly position: t_33<number>;
    readonly velocity: (undefined | t_33<number>);
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

declare type t_81 = {
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

declare type t_82 = {
    readonly playerId: number;
    readonly x: number;
    readonly y: number;
    readonly timeRemaining: number;
    readonly numberOfDeathsPve: number;
    readonly numberOfDeathsPvp: number;
    readonly context: context
};

declare type t_83 = {
    readonly playerId: number;
    readonly slot: number;
    readonly stack: number;
    readonly prefix: number;
    readonly itemId: number;
};

declare type t_84 = {
    readonly playerId: number;
    readonly health: number;
    readonly maxHealth: number
};

declare type t_85 = { readonly uuid: string };

declare type t_86 = {
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

declare type t_87 = {
    readonly target: number;
    readonly deathReason: t_42;
    readonly damage: number;
    readonly hitDirection: number;
    readonly critical: boolean;
    readonly pvp: boolean;
    readonly cooldownCounter: number
};

declare type t_88 = {
    readonly playerId: number;
    readonly active: boolean;
};

declare type t_89 = {
    readonly npcSlotId: number;
    readonly npcTypeId: number;
    readonly x: number;
    readonly y: number;
    readonly vx: number;
    readonly vy: number;
    readonly target: number;
    readonly directionX: boolean;
    readonly directionY: boolean;
    readonly ai: ai;
    readonly spriteDirection: boolean;
    readonly life: life;
    readonly releaseOwner: (undefined | number);
    readonly playerCountScale: (undefined | number);
    readonly strengthMultiplier: (undefined | number);
    readonly spawnedFromStatue: boolean
};

declare type t_9 = { readonly version: string };

declare type t_90 = {
    readonly reason: NetworkText;
};

declare type t_91 =
    { TAG: "ConnectRequest"; _0: t_92 }
| { TAG: "Disconnect"; _0: t_93 }
| { TAG: "PlayerSlotSet"; _0: t_94 }
| { TAG: "PlayerInfo"; _0: t_95 }
| { TAG: "PlayerInventorySlot"; _0: t_96 }
| { TAG: "WorldDataRequest"; _0: t_97 }
| { TAG: "WorldInfo"; _0: WorldInfo_2 }
| { TAG: "InitialTileSectionsRequest"; _0: t_98 }
| { TAG: "Status"; _0: t_99 }
| { TAG: "TileSectionSend"; _0: t_100 }
| { TAG: "TileSectionFrame"; _0: t_101 }
| { TAG: "PlayerSpawn"; _0: t_102 }
| { TAG: "PlayerUpdate"; _0: t_103 }
| { TAG: "PlayerActive"; _0: t_104 }
| { TAG: "PlayerHealth"; _0: t_105 }
| { TAG: "TileModify"; _0: t_106 }
| { TAG: "TimeSet"; _0: t_107 }
| { TAG: "DoorUse"; _0: t_108 }
| { TAG: "TileSquareSend"; _0: t_109 }
| { TAG: "ItemDropUpdate"; _0: t_110 }
| { TAG: "ItemOwner"; _0: t_111 }
| { TAG: "NpcUpdate"; _0: t_112 }
| { TAG: "NpcItemStrike"; _0: t_113 }
| { TAG: "ProjectileSync"; _0: t_114 }
| { TAG: "NpcStrike"; _0: t_115 }
| { TAG: "ProjectileDestroy"; _0: t_116 }
| { TAG: "PvpToggle"; _0: t_117 }
| { TAG: "ChestOpen"; _0: t_118 }
| { TAG: "ChestItem"; _0: t_119 }
| { TAG: "ActiveContainerSync"; _0: t_120 }
| { TAG: "ChestPlace"; _0: t_121 }
| { TAG: "HealEffect"; _0: t_122 }
| { TAG: "Zones"; _0: t_123 }
| { TAG: "PasswordRequired"; _0: t_124 }
| { TAG: "PasswordSend"; _0: t_125 }
| { TAG: "ItemOwnerRemove"; _0: t_126 }
| { TAG: "NpcTalk"; _0: t_127 }
| { TAG: "PlayerAnimation"; _0: t_128 }
| { TAG: "PlayerMana"; _0: t_129 }
| { TAG: "ManaEffect"; _0: t_130 }
| { TAG: "PlayerTeam"; _0: t_131 }
| { TAG: "SignRead"; _0: t_132 }
| { TAG: "SignNew"; _0: t_133 }
| { TAG: "LiquidSet"; _0: t_134 }
| { TAG: "PlayerSpawnSelf"; _0: t_135 }
| { TAG: "PlayerBuffsSet"; _0: t_136 }
| { TAG: "NpcSpecialEffect"; _0: t_137 }
| { TAG: "ChestOrTempleUnlock"; _0: t_138 }
| { TAG: "NpcBuffAdd"; _0: t_139 }
| { TAG: "NpcBuffUpdate"; _0: t_140 }
| { TAG: "PlayerBuffAdd"; _0: t_141 }
| { TAG: "NpcNameUpdate"; _0: t_142 }
| { TAG: "GoodEvilUpdate"; _0: t_143 }
| { TAG: "HarpPlay"; _0: t_144 }
| { TAG: "SwitchHit"; _0: t_145 }
| { TAG: "NpcHomeUpdate"; _0: t_146 }
| { TAG: "BossOrInvasionSpawn"; _0: t_147 }
| { TAG: "PlayerDodge"; _0: t_148 }
| { TAG: "TilePaint"; _0: t_149 }
| { TAG: "WallPaint"; _0: t_150 }
| { TAG: "Teleport"; _0: t_151 }
| { TAG: "PlayerHealOther"; _0: t_152 }
| { TAG: "DimensionsUpdate"; _0: t_153 }
| { TAG: "ClientUuid"; _0: t_154 }
| { TAG: "ChestName"; _0: t_155 }
| { TAG: "NpcCatch"; _0: t_156 }
| { TAG: "NpcRelease"; _0: t_157 }
| { TAG: "TravellingMerchantInventory"; _0: t_158 }
| { TAG: "TeleportationPotion"; _0: t_159 }
| { TAG: "AnglerQuest"; _0: t_160 }
| { TAG: "AnglerQuestComplete"; _0: t_161 }
| { TAG: "AnglerQuestsCompletedAmount"; _0: t_162 }
| { TAG: "TemporaryAnimationCreate"; _0: t_163 }
| { TAG: "InvasionProgressReport"; _0: t_164 }
| { TAG: "ObjectPlace"; _0: t_165 }
| { TAG: "PlayerChestIndexSync"; _0: t_166 }
| { TAG: "CombatNumberCreate"; _0: t_167 }
| { TAG: "NetModuleLoad"; _0: NetModuleLoad }
| { TAG: "NpcKillCount"; _0: t_168 }
| { TAG: "PlayerStealth"; _0: t_169 }
| { TAG: "ItemForceIntoNearestChest"; _0: t_170 }
| { TAG: "TileEntityUpdate"; _0: t_171 }
| { TAG: "TileEntityPlace"; _0: t_172 }
| { TAG: "ItemDropModify"; _0: t_173 }
| { TAG: "ItemFramePlace"; _0: t_174 }
| { TAG: "ItemDropInstancedUpdate"; _0: t_175 }
| { TAG: "EmoteBubble"; _0: t_176 }
| { TAG: "ExtraValueSync"; _0: t_177 }
| { TAG: "SocialHandshake"; _0: t_178 }
| { TAG: "Unused"; _0: t_179 }
| { TAG: "PortalKill"; _0: t_180 }
| { TAG: "PlayerTeleportPortal"; _0: t_181 }
| { TAG: "NpcKilledNotification"; _0: t_182 }
| { TAG: "EventNotification"; _0: t_183 }
| { TAG: "MinionTargetUpdate"; _0: t_184 }
| { TAG: "NpcTeleportPortal"; _0: t_185 }
| { TAG: "ShieldStrengthsUpdate"; _0: t_186 }
| { TAG: "NebulaLevelUp"; _0: t_187 }
| { TAG: "MoonLordCountdown"; _0: t_188 }
| { TAG: "NpcShopItem"; _0: t_189 }
| { TAG: "GemLockToggle"; _0: t_190 }
| { TAG: "SmokePoof"; _0: t_191 }
| { TAG: "ChatMessageSmart"; _0: t_192 }
| { TAG: "WiredCannonShot"; _0: t_193 }
| { TAG: "MassWireOperation"; _0: t_194 }
| { TAG: "MassWireOperationPay"; _0: t_195 }
| { TAG: "PartyToggle"; _0: t_196 }
| { TAG: "TreeGrowFx"; _0: t_197 }
| { TAG: "CrystalInvasionStart"; _0: t_198 }
| { TAG: "CrystalInvasionWipeAll"; _0: t_199 }
| { TAG: "MinionAttackTargetUpdate"; _0: t_200 }
| { TAG: "CrystalInvasionSendWaitTime"; _0: t_201 }
| { TAG: "PlayerDamage"; _0: t_202 }
| { TAG: "PlayerDeath"; _0: t_203 }
| { TAG: "CombatTextCreate"; _0: t_204 }
| { TAG: "Emoji"; _0: t_205 }
| { TAG: "TileEntityDisplayDollItemSync"; _0: t_206 }
| { TAG: "TileEntityInteractionRequest"; _0: t_207 }
| { TAG: "WeaponsRackTryPlacing"; _0: t_208 }
| { TAG: "TileEntityHatRackItemSync"; _0: t_209 }
| { TAG: "TilePickingSync"; _0: t_210 }
| { TAG: "RevengeMarkerSync"; _0: t_211 }
| { TAG: "RevengeMarkerRemove"; _0: t_212 }
| { TAG: "GolfBallLandInCup"; _0: t_213 }
| { TAG: "ClientFinishConnectingToServer"; _0: t_214 }
| { TAG: "NpcFishOut"; _0: t_215 }
| { TAG: "NpcTamper"; _0: t_216 }
| { TAG: "LegacySoundPlay"; _0: t_217 }
| { TAG: "FoodPlatterTryPlacing"; _0: t_218 }
| { TAG: "PlayerLuckFactorsUpdate"; _0: t_219 }
| { TAG: "PlayerDead"; _0: t_220 }
| { TAG: "CavernMonsterTypeSync"; _0: t_221 }
| { TAG: "NpcBuffRemovalRequest"; _0: t_222 }
| { TAG: "ClientSyncedInventory"; _0: t_223 }
| { TAG: "CountsAsHostForGameplaySet"; _0: t_224 }
| { TAG: "CreditsOrSlimeTransform"; _0: t_225 }
| { TAG: "LucyAxeMessage"; _0: t_226 }
| { TAG: "PiggyBankVoidLensUpdate"; _0: t_227 }
| { TAG: "DungeonDefendersEventAttemptSkipWait"; _0: t_228 }
| { TAG: "HaveDryadDoStardewAnimation"; _0: t_229 }
| { TAG: "ItemDropShimmeredUpdate"; _0: t_230 }
| { TAG: "ShimmerEffectOrCoinLuck"; _0: t_231 }
| { TAG: "LoadoutSwitch"; _0: t_232 }
| { TAG: "ItemDropProtectedUpdate"; _0: t_233 }
| { TAG: "DeadCellsDisplayJarTryPlacing"; _0: t_234 }
| { TAG: "PlayerSpectate"; _0: t_235 }
| { TAG: "ItemDropClear"; _0: t_236 }
| { TAG: "PlayerItemUseSound"; _0: t_237 }
| { TAG: "NpcHurtByDebuff"; _0: t_238 }
| { TAG: "Ping"; _0: t_239 }
| { TAG: "ChestResize"; _0: t_240 }
| { TAG: "LeashedEntityAnchorInsertItem"; _0: t_241 }
| { TAG: "PlayerTeamUpdate"; _0: t_242 }
| { TAG: "PlayerTeamSwapSpawn"; _0: t_243 }
| { TAG: "SectionRequest"; _0: t_244 }
| { TAG: "ItemDropPosition"; _0: t_245 }
| { TAG: "HostToken"; _0: t_247 };

declare type t_92 = { readonly version: string };

declare type t_93 = {
    readonly reason: NetworkText;
};

declare type t_94 = {
    playerSlotId: number;
    serverWantsToRunCheckBytesInClientLoopThread: boolean;
}

declare type t_95 = {
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
    readonly difficulty: difficulty_2;
    readonly mode: mode_2;
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

declare type t_96 = {
    readonly playerId: number;
    readonly slot: number;
    readonly stack: number;
    readonly prefix: number;
    readonly itemId: number;
};

declare type t_97 = void;

declare type t_98 = { readonly x: number; readonly y: number };

declare type t_99 = {
    readonly max: number;
    readonly text: NetworkText;
    readonly flags: flags_2
};

export declare namespace TeleportationPotionPacket {
    export {
        teleportType_2 as teleportType,
        t_55 as t,
        parseOk_53 as parseOk,
        parseError_53 as parseError,
        parse_53 as parse,
        toBufferOk_53 as toBufferOk,
        toBufferError_53 as toBufferError,
        toBuffer_53 as toBuffer
    }
}

export declare namespace TeleportPacket {
    export {
        teleportType,
        t_54 as t,
        parseOk_52 as parseOk,
        parseError_52 as parseError,
        parse_52 as parse,
        toBufferOk_52 as toBufferOk,
        toBufferError_52 as toBufferError,
        toBuffer_52 as toBuffer
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

declare type teleportType_3 = "Player" | "Npc" | "PlayerToPlayer";

declare type teleportType_4 = 
"TeleportationPotion"
| "MagicConch"
| "DemonConch"
| "ShellphoneSpawn";

export declare namespace TemporaryAnimationCreatePacket {
    export {
        t_56 as t,
        parseOk_54 as parseOk,
        parseError_54 as parseError,
        parse_54 as parse,
        toBufferOk_54 as toBufferOk,
        toBufferError_54 as toBufferError,
        toBuffer_54 as toBuffer
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

declare type tile_3 = {
    readonly activeTile: (undefined | activeTile_3); 
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

declare type tile_4 = {
    readonly wire: boolean;
    readonly halfBrick: boolean;
    readonly actuator: boolean;
    readonly inActive: boolean;
    readonly wire2: boolean;
    readonly wire3: boolean;
    readonly wire4: boolean;
    readonly color: (undefined | number);
    readonly wallColor: (undefined | number);
    readonly activeTile: (undefined | activeTile_4);
    readonly wall: (undefined | number);
    readonly liquid: (undefined | liquid_4);
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
        t_57 as t,
        parseOk_55 as parseOk,
        parseError_55 as parseError,
        parse_55 as parse,
        toBufferOk_55 as toBufferOk,
        toBufferError_55 as toBufferError,
        toBuffer_55 as toBuffer
    }
}

export declare namespace TileEntityHatRackItemSyncPacket {
    export {
        t_58 as t,
        parseOk_56 as parseOk,
        parseError_56 as parseError,
        parse_56 as parse,
        toBufferOk_56 as toBufferOk,
        toBufferError_56 as toBufferError,
        toBuffer_56 as toBuffer
    }
}

export declare namespace TileEntityInteractionRequestPacket {
    export {
        t_59 as t,
        parseOk_57 as parseOk,
        parseError_57 as parseError,
        parse_57 as parse,
        toBufferOk_57 as toBufferOk,
        toBufferError_57 as toBufferError,
        toBuffer_57 as toBuffer
    }
}

export declare namespace TileEntityPlacePacket {
    export {
        t_60 as t,
        parseOk_58 as parseOk,
        parseError_58 as parseError,
        parse_58 as parse,
        toBufferOk_58 as toBufferOk,
        toBufferError_58 as toBufferError,
        toBuffer_58 as toBuffer
    }
}

export declare namespace TileEntityUpdatePacket {
    export {
        payload,
        t_61 as t,
        parseOk_59 as parseOk,
        parseError_59 as parseError,
        parse_59 as parse,
        toBufferOk_59 as toBufferOk,
        toBufferError_59 as toBufferError,
        toBuffer_59 as toBuffer
    }
}

export declare namespace TileModifyPacket {
    export {
        Action_t_2 as Action_t,
        t_62 as t,
        Action_2 as Action,
        parseOk_60 as parseOk,
        parseError_60 as parseError,
        parse_60 as parse,
        toBufferOk_60 as toBufferOk,
        toBufferError_60 as toBufferError,
        toBuffer_60 as toBuffer
    }
}

export declare namespace TilePaintPacket {
    export {
        t_63 as t,
        parseOk_61 as parseOk,
        parseError_61 as parseError,
        parse_61 as parse,
        toBufferOk_61 as toBufferOk,
        toBufferError_61 as toBufferError,
        toBuffer_61 as toBuffer
    }
}

export declare namespace TilePickingSyncPacket {
    export {
        t_64 as t,
        parseOk_62 as parseOk,
        parseError_62 as parseError,
        parse_62 as parse,
        toBufferOk_62 as toBufferOk,
        toBufferError_62 as toBufferError,
        toBuffer_62 as toBuffer
    }
}

export declare namespace TileSectionFramePacket {
    export {
        t_65 as t,
        parseOk_63 as parseOk,
        parseError_63 as parseError,
        parse_63 as parse,
        toBufferOk_63 as toBufferOk,
        toBufferError_63 as toBufferError,
        toBuffer_63 as toBuffer
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
        t_66 as t,
        Chest,
        Sign,
        Entity,
        parseOk_64 as parseOk,
        parseError_64 as parseError,
        parse_64 as parse,
        toBufferOk_64 as toBufferOk,
        toBufferError_64 as toBufferError,
        toBuffer_64 as toBuffer
    }
}

export declare namespace TileSquareSendPacket {
    export {
        frame_2 as frame,
        activeTile_2 as activeTile,
        liquid_3 as liquid,
        tile_2 as tile,
        t_67 as t,
        Decode,
        Encode,
        parseOk_65 as parseOk,
        parseError_65 as parseError,
        parse_65 as parse,
        toBufferOk_65 as toBufferOk,
        toBufferError_65 as toBufferError,
        toBuffer_65 as toBuffer
    }
}

export declare namespace TimeSetPacket {
    export {
        t_68 as t,
        parseOk_66 as parseOk,
        parseError_66 as parseError,
        parse_66 as parse,
        toBufferOk_66 as toBufferOk,
        toBufferError_66 as toBufferError,
        toBuffer_66 as toBuffer
    }
}

declare type toBuffer = toBufferOk | toBufferError;

declare const toBuffer: (_1: t) => toBuffer;

declare type toBuffer_10 = toBufferOk_10 | toBufferError_10;

declare const toBuffer_10: (_1: t_10) => toBuffer_10;

declare type toBuffer_11 = toBufferOk_11 | toBufferError_11;

declare const toBuffer_11: (_1: t_11) => toBuffer_11;

declare type toBuffer_12 = toBufferOk_12 | toBufferError_12;

declare const toBuffer_12: (_1: t_12) => toBuffer_12;

declare type toBuffer_13 = toBufferOk_13 | toBufferError_13;

declare const toBuffer_13: (_1: t_13) => toBuffer_13;

declare type toBuffer_14 = toBufferOk_14 | toBufferError_14;

declare const toBuffer_14: (_1: t_14) => toBuffer_14;

declare type toBuffer_15 = toBufferOk_15 | toBufferError_15;

declare const toBuffer_15: (_1: t_15) => toBuffer_15;

declare type toBuffer_16 = toBufferOk_16 | toBufferError_16;

declare const toBuffer_16: (_1: t_16) => toBuffer_16;

declare type toBuffer_17 = toBufferOk_17 | toBufferError_17;

declare const toBuffer_17: (_1: t_17) => toBuffer_17;

declare type toBuffer_18 = toBufferOk_18 | toBufferError_18;

declare const toBuffer_18: (_1: t_18) => toBuffer_18;

declare type toBuffer_19 = toBufferOk_19 | toBufferError_19;

declare const toBuffer_19: (_1: t_19) => toBuffer_19;

declare type toBuffer_2 = toBufferOk_2 | toBufferError_2;

declare const toBuffer_2: (_1: t_2) => toBuffer_2;

declare type toBuffer_20 = toBufferOk_20 | toBufferError_20;

declare const toBuffer_20: (_1: t_20) => toBuffer_20;

declare type toBuffer_21 = toBufferOk_21 | toBufferError_21;

declare const toBuffer_21: (_1: t_21) => toBuffer_21;

declare type toBuffer_22 = toBufferOk_22 | toBufferError_22;

declare const toBuffer_22: (_1: NetModuleLoad) => toBuffer_22;

declare type toBuffer_23 = toBufferOk_23 | toBufferError_23;

declare const toBuffer_23: (_1: t_23) => toBuffer_23;

declare type toBuffer_24 = toBufferOk_24 | toBufferError_24;

declare const toBuffer_24: (_1: t_24) => toBuffer_24;

declare type toBuffer_25 = toBufferOk_25 | toBufferError_25;

declare const toBuffer_25: (_1: t_25) => toBuffer_25;

declare type toBuffer_26 = toBufferOk_26 | toBufferError_26;

declare const toBuffer_26: (_1: t_26) => toBuffer_26;

declare type toBuffer_27 = toBufferOk_27 | toBufferError_27;

declare const toBuffer_27: (_1: t_27) => toBuffer_27;

declare type toBuffer_28 = toBufferOk_28 | toBufferError_28;

declare const toBuffer_28: (_1: t_28) => toBuffer_28;

declare type toBuffer_29 = toBufferOk_29 | toBufferError_29;

declare const toBuffer_29: (_1: t_29) => toBuffer_29;

declare type toBuffer_3 = toBufferOk_3 | toBufferError_3;

declare const toBuffer_3: (_1: t_3) => toBuffer_3;

declare type toBuffer_30 = toBufferOk_30 | toBufferError_30;

declare const toBuffer_30: (_1: t_30) => toBuffer_30;

declare type toBuffer_31 = toBufferOk_31 | toBufferError_31;

declare const toBuffer_31: (_1: t_31) => toBuffer_31;

declare type toBuffer_32 = toBufferOk_32 | toBufferError_32;

declare const toBuffer_32: (_1: t_32) => toBuffer_32;

declare type toBuffer_33 = toBufferOk_33 | toBufferError_33;

declare const toBuffer_33: (_1: t_34) => toBuffer_33;

declare type toBuffer_34 = toBufferOk_34 | toBufferError_34;

declare const toBuffer_34: (_1: t_35) => toBuffer_34;

declare type toBuffer_35 = toBufferOk_35 | toBufferError_35;

declare const toBuffer_35: (_1: t_36) => toBuffer_35;

declare type toBuffer_36 = toBufferOk_36 | toBufferError_36;

declare const toBuffer_36: (_1: t_37) => toBuffer_36;

declare type toBuffer_37 = toBufferOk_37 | toBufferError_37;

declare const toBuffer_37: (_1: t_38) => toBuffer_37;

declare type toBuffer_38 = toBufferOk_38 | toBufferError_38;

declare const toBuffer_38: (_1: t_39) => toBuffer_38;

declare type toBuffer_39 = toBufferOk_39 | toBufferError_39;

declare const toBuffer_39: (_1: t_40) => toBuffer_39;

declare type toBuffer_4 = toBufferOk_4 | toBufferError_4;

declare const toBuffer_4: (_1: t_4) => toBuffer_4;

declare type toBuffer_40 = toBufferOk_40 | toBufferError_40;

declare const toBuffer_40: (_1: t_41) => toBuffer_40;

declare type toBuffer_41 = toBufferOk_41 | toBufferError_41;

declare const toBuffer_41: (_1: t_43) => toBuffer_41;

declare type toBuffer_42 = toBufferOk_42 | toBufferError_42;

declare const toBuffer_42: (_1: t_44) => toBuffer_42;

declare type toBuffer_43 = toBufferOk_43 | toBufferError_43;

declare const toBuffer_43: (_1: t_45) => toBuffer_43;

declare type toBuffer_44 = toBufferOk_44 | toBufferError_44;

declare const toBuffer_44: (_1: t_46) => toBuffer_44;

declare type toBuffer_45 = toBufferOk_45 | toBufferError_45;

declare const toBuffer_45: (_1: t_47) => toBuffer_45;

declare type toBuffer_46 = toBufferOk_46 | toBufferError_46;

declare const toBuffer_46: (_1: t_48) => toBuffer_46;

declare type toBuffer_47 = toBufferOk_47 | toBufferError_47;

declare const toBuffer_47: (_1: t_49) => toBuffer_47;

declare type toBuffer_48 = toBufferOk_48 | toBufferError_48;

declare const toBuffer_48: (_1: t_50) => toBuffer_48;

declare type toBuffer_49 = toBufferOk_49 | toBufferError_49;

declare const toBuffer_49: (_1: t_51) => toBuffer_49;

declare type toBuffer_5 = toBufferOk_5 | toBufferError_5;

declare const toBuffer_5: (_1: t_5) => toBuffer_5;

declare type toBuffer_50 = toBufferOk_50 | toBufferError_50;

declare const toBuffer_50: (_1: t_52) => toBuffer_50;

declare type toBuffer_51 = toBufferOk_51 | toBufferError_51;

declare const toBuffer_51: (_1: t_53) => toBuffer_51;

declare type toBuffer_52 = toBufferOk_52 | toBufferError_52;

declare const toBuffer_52: (_1: t_54) => toBuffer_52;

declare type toBuffer_53 = toBufferOk_53 | toBufferError_53;

declare const toBuffer_53: (_1: t_55) => toBuffer_53;

declare type toBuffer_54 = toBufferOk_54 | toBufferError_54;

declare const toBuffer_54: (_1: t_56) => toBuffer_54;

declare type toBuffer_55 = toBufferOk_55 | toBufferError_55;

declare const toBuffer_55: (_1: t_57) => toBuffer_55;

declare type toBuffer_56 = toBufferOk_56 | toBufferError_56;

declare const toBuffer_56: (_1: t_58) => toBuffer_56;

declare type toBuffer_57 = toBufferOk_57 | toBufferError_57;

declare const toBuffer_57: (_1: t_59) => toBuffer_57;

declare type toBuffer_58 = toBufferOk_58 | toBufferError_58;

declare const toBuffer_58: (_1: t_60) => toBuffer_58;

declare type toBuffer_59 = toBufferOk_59 | toBufferError_59;

declare const toBuffer_59: (_1: t_61) => toBuffer_59;

declare type toBuffer_6 = toBufferOk_6 | toBufferError_6;

declare const toBuffer_6: (_1: t_6) => toBuffer_6;

declare type toBuffer_60 = toBufferOk_60 | toBufferError_60;

declare const toBuffer_60: (_1: t_62) => toBuffer_60;

declare type toBuffer_61 = toBufferOk_61 | toBufferError_61;

declare const toBuffer_61: (_1: t_63) => toBuffer_61;

declare type toBuffer_62 = toBufferOk_62 | toBufferError_62;

declare const toBuffer_62: (_1: t_64) => toBuffer_62;

declare type toBuffer_63 = toBufferOk_63 | toBufferError_63;

declare const toBuffer_63: (_1: t_65) => toBuffer_63;

declare type toBuffer_64 = toBufferOk_64 | toBufferError_64;

declare const toBuffer_64: (_1: t_66) => toBuffer_64;

declare type toBuffer_65 = toBufferOk_65 | toBufferError_65;

declare const toBuffer_65: (_1: t_67) => toBuffer_65;

declare type toBuffer_66 = toBufferOk_66 | toBufferError_66;

declare const toBuffer_66: (_1: t_68) => toBuffer_66;

declare type toBuffer_67 = toBufferOk_67 | toBufferError_67;

declare const toBuffer_67: (_1: t_69) => toBuffer_67;

declare type toBuffer_68 = toBufferOk_68 | toBufferError_68;

declare const toBuffer_68: (_1: t_70) => toBuffer_68;

declare type toBuffer_69 = toBufferOk_69 | toBufferError_69;

declare const toBuffer_69: (_1: t_72) => toBuffer_69;

declare type toBuffer_7 = toBufferOk_7 | toBufferError_7;

declare const toBuffer_7: (_1: t_7) => toBuffer_7;

declare type toBuffer_70 = toBufferOk_70 | toBufferError_70;

declare const toBuffer_70: (_1: t_73) => toBuffer_70;

declare type toBuffer_71 = toBufferOk_71 | toBufferError_71;

declare const toBuffer_71: (_1: t_74) => toBuffer_71;

declare type toBuffer_72 = toBufferOk_72 | toBufferError_72;

declare const toBuffer_72: (_1: t_75) => toBuffer_72;

declare type toBuffer_73 = toBufferOk_73 | toBufferError_73;

declare const toBuffer_73: (_1: t_76) => toBuffer_73;

declare type toBuffer_74 = toBufferOk_74 | toBufferError_74;

declare const toBuffer_74: (_1: t_79) => toBuffer_74;

declare type toBuffer_75 = toBufferOk_75 | toBufferError_75;

declare const toBuffer_75: (_1: t_80) => toBuffer_75;

declare type toBuffer_76 = toBufferOk_76 | toBufferError_76;

declare const toBuffer_76: (_1: t_81) => toBuffer_76;

declare type toBuffer_77 = toBufferOk_77 | toBufferError_77;

declare const toBuffer_77: (_1: t_82) => toBuffer_77;

declare type toBuffer_78 = toBufferOk_78 | toBufferError_78;

declare const toBuffer_78: (_1: t_83) => toBuffer_78;

declare type toBuffer_79 = toBufferOk_79 | toBufferError_79;

declare const toBuffer_79: (_1: t_84) => toBuffer_79;

declare type toBuffer_8 = toBufferOk_8 | toBufferError_8;

declare const toBuffer_8: (_1: t_8) => toBuffer_8;

declare type toBuffer_80 = toBufferOk_80 | toBufferError_80;

declare const toBuffer_80: (_1: t_85) => toBuffer_80;

declare type toBuffer_81 = toBufferOk_81 | toBufferError_81;

declare const toBuffer_81: (_1: t_86) => toBuffer_81;

declare type toBuffer_82 = toBufferOk_82 | toBufferError_82;

declare const toBuffer_82: (_1: t_87) => toBuffer_82;

declare type toBuffer_83 = toBufferOk_83 | toBufferError_83;

declare const toBuffer_83: (_1: WorldInfo) => toBuffer_83;

declare type toBuffer_84 = toBufferOk_84 | toBufferError_84;

declare const toBuffer_84: (_1: t_88) => toBuffer_84;

declare type toBuffer_85 = toBufferOk_85 | toBufferError_85;

declare const toBuffer_85: (_1: t_89) => toBuffer_85;

declare type toBuffer_86 = toBufferOk_86 | toBufferError_86;

declare const toBuffer_86: (_1: t_90) => toBuffer_86;

declare type toBuffer_9 = toBufferOk_9 | toBufferError_9;

declare const toBuffer_9: (_1: t_9) => toBuffer_9;

declare type toBufferError = { TAG: "Error"; _0: PackError };

declare type toBufferError_10 = { TAG: "Error"; _0: PackError };

declare type toBufferError_11 = { TAG: "Error"; _0: PackError };

declare type toBufferError_12 = { TAG: "Error"; _0: PackError };

declare type toBufferError_13 = { TAG: "Error"; _0: PackError };

declare type toBufferError_14 = { TAG: "Error"; _0: PackError };

declare type toBufferError_15 = { TAG: "Error"; _0: PackError };

declare type toBufferError_16 = { TAG: "Error"; _0: PackError };

declare type toBufferError_17 = { TAG: "Error"; _0: PackError };

declare type toBufferError_18 = { TAG: "Error"; _0: PackError };

declare type toBufferError_19 = { TAG: "Error"; _0: PackError };

declare type toBufferError_2 = { TAG: "Error"; _0: PackError };

declare type toBufferError_20 = { TAG: "Error"; _0: PackError };

declare type toBufferError_21 = { TAG: "Error"; _0: PackError };

declare type toBufferError_22 = { TAG: "Error"; _0: PackError };

declare type toBufferError_23 = { TAG: "Error"; _0: PackError };

declare type toBufferError_24 = { TAG: "Error"; _0: PackError };

declare type toBufferError_25 = { TAG: "Error"; _0: PackError };

declare type toBufferError_26 = { TAG: "Error"; _0: PackError };

declare type toBufferError_27 = { TAG: "Error"; _0: PackError };

declare type toBufferError_28 = { TAG: "Error"; _0: PackError };

declare type toBufferError_29 = { TAG: "Error"; _0: PackError };

declare type toBufferError_3 = { TAG: "Error"; _0: PackError };

declare type toBufferError_30 = { TAG: "Error"; _0: PackError };

declare type toBufferError_31 = { TAG: "Error"; _0: PackError };

declare type toBufferError_32 = { TAG: "Error"; _0: PackError };

declare type toBufferError_33 = { TAG: "Error"; _0: PackError };

declare type toBufferError_34 = { TAG: "Error"; _0: PackError };

declare type toBufferError_35 = { TAG: "Error"; _0: PackError };

declare type toBufferError_36 = { TAG: "Error"; _0: PackError };

declare type toBufferError_37 = { TAG: "Error"; _0: PackError };

declare type toBufferError_38 = { TAG: "Error"; _0: PackError };

declare type toBufferError_39 = { TAG: "Error"; _0: PackError };

declare type toBufferError_4 = { TAG: "Error"; _0: PackError };

declare type toBufferError_40 = { TAG: "Error"; _0: PackError };

declare type toBufferError_41 = { TAG: "Error"; _0: PackError };

declare type toBufferError_42 = { TAG: "Error"; _0: PackError };

declare type toBufferError_43 = { TAG: "Error"; _0: PackError };

declare type toBufferError_44 = { TAG: "Error"; _0: PackError };

declare type toBufferError_45 = { TAG: "Error"; _0: PackError };

declare type toBufferError_46 = { TAG: "Error"; _0: PackError };

declare type toBufferError_47 = { TAG: "Error"; _0: PackError };

declare type toBufferError_48 = { TAG: "Error"; _0: PackError };

declare type toBufferError_49 = { TAG: "Error"; _0: PackError };

declare type toBufferError_5 = { TAG: "Error"; _0: PackError };

declare type toBufferError_50 = { TAG: "Error"; _0: PackError };

declare type toBufferError_51 = { TAG: "Error"; _0: PackError };

declare type toBufferError_52 = { TAG: "Error"; _0: PackError };

declare type toBufferError_53 = { TAG: "Error"; _0: PackError };

declare type toBufferError_54 = { TAG: "Error"; _0: PackError };

declare type toBufferError_55 = { TAG: "Error"; _0: PackError };

declare type toBufferError_56 = { TAG: "Error"; _0: PackError };

declare type toBufferError_57 = { TAG: "Error"; _0: PackError };

declare type toBufferError_58 = { TAG: "Error"; _0: PackError };

declare type toBufferError_59 = { TAG: "Error"; _0: PackError };

declare type toBufferError_6 = { TAG: "Error"; _0: PackError };

declare type toBufferError_60 = { TAG: "Error"; _0: PackError };

declare type toBufferError_61 = { TAG: "Error"; _0: PackError };

declare type toBufferError_62 = { TAG: "Error"; _0: PackError };

declare type toBufferError_63 = { TAG: "Error"; _0: PackError };

declare type toBufferError_64 = { TAG: "Error"; _0: PackError };

declare type toBufferError_65 = { TAG: "Error"; _0: PackError };

declare type toBufferError_66 = { TAG: "Error"; _0: PackError };

declare type toBufferError_67 = { TAG: "Error"; _0: PackError };

declare type toBufferError_68 = { TAG: "Error"; _0: PackError };

declare type toBufferError_69 = { TAG: "Error"; _0: PackError };

declare type toBufferError_7 = { TAG: "Error"; _0: PackError };

declare type toBufferError_70 = { TAG: "Error"; _0: PackError };

declare type toBufferError_71 = { TAG: "Error"; _0: PackError };

declare type toBufferError_72 = { TAG: "Error"; _0: PackError };

declare type toBufferError_73 = { TAG: "Error"; _0: PackError };

declare type toBufferError_74 = { TAG: "Error"; _0: PackError };

declare type toBufferError_75 = { TAG: "Error"; _0: PackError };

declare type toBufferError_76 = { TAG: "Error"; _0: PackError };

declare type toBufferError_77 = { TAG: "Error"; _0: PackError };

declare type toBufferError_78 = { TAG: "Error"; _0: PackError };

declare type toBufferError_79 = { TAG: "Error"; _0: PackError };

declare type toBufferError_8 = { TAG: "Error"; _0: PackError };

declare type toBufferError_80 = { TAG: "Error"; _0: PackError };

declare type toBufferError_81 = { TAG: "Error"; _0: PackError };

declare type toBufferError_82 = { TAG: "Error"; _0: PackError };

declare type toBufferError_83 = { TAG: "Error"; _0: PackError };

declare type toBufferError_84 = { TAG: "Error"; _0: PackError };

declare type toBufferError_85 = { TAG: "Error"; _0: PackError };

declare type toBufferError_86 = { TAG: "Error"; _0: PackError };

declare type toBufferError_9 = { TAG: "Error"; _0: PackError };

declare type toBufferOk = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_10 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_11 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_12 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_13 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_14 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_15 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_16 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_17 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_18 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_19 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_2 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_20 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_21 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_22 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_23 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_24 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_25 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_26 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_27 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_28 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_29 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_3 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_30 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_31 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_32 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_33 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_34 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_35 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_36 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_37 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_38 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_39 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_4 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_40 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_41 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_42 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_43 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_44 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_45 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_46 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_47 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_48 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_49 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_5 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_50 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_51 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_52 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_53 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_54 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_55 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_56 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_57 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_58 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_59 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_6 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_60 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_61 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_62 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_63 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_64 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_65 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_66 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_67 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_68 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_69 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_7 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_70 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_71 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_72 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_73 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_74 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_75 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_76 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_77 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_78 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_79 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_8 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_80 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_81 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_82 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_83 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_84 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_85 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_86 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_9 = { TAG: "Ok"; _0: Buffer };

declare function toByte(t: t_77): number;

declare function toString_2(data: CreativePower): string;

declare type TrackedProjectileReference_t = { readonly expectedIdentity: number; readonly expectedType: number };

export declare namespace TravellingMerchantInventoryPacket {
    export {
        t_69 as t,
        parseOk_67 as parseOk,
        parseError_67 as parseError,
        parse_67 as parse,
        toBufferOk_67 as toBufferOk,
        toBufferError_67 as toBufferError,
        toBuffer_67 as toBuffer
    }
}

export declare namespace TreeGrowFxPacket {
    export {
        t_70 as t,
        parseOk_68 as parseOk,
        parseError_68 as parseError,
        parse_68 as parse,
        toBufferOk_68 as toBufferOk,
        toBufferError_68 as toBufferError,
        toBuffer_68 as toBuffer
    }
}

declare type unlockReport = { readonly itemId: number; readonly researchedCount: number };

declare type unlockType = "Chest" | "TempleDoor" | "ChestLock";

declare type unlockType_2 = "Chest" | "TempleDoor" | "ChestLock";

/**
 * An opaque type representing an uninitialized packet writer.
 */
declare class untypedT { }

export declare namespace UnusedPacket {
    export {
        t_71 as t,
        parseOk_69 as parseOk,
        parseError_69 as parseError,
        parse_69 as parse
    }
}

declare const UpdateType: {
    toInt: (_1: UpdateType_t) => number;
    fromInt: (_1: number) => UpdateType_t | undefined
};

declare type UpdateType_t =
| "RealIpAddress"
| "GamemodesJoinMode"
| "SwitchServer"
| "SwitchServerManual";

export declare namespace WallPaintPacket {
    export {
        t_72 as t,
        parseOk_70 as parseOk,
        parseError_70 as parseError,
        parse_70 as parse,
        toBufferOk_69 as toBufferOk,
        toBufferError_69 as toBufferError,
        toBuffer_69 as toBuffer
    }
}

export declare namespace WeaponsRackTryPlacingPacket {
    export {
        t_73 as t,
        parseOk_71 as parseOk,
        parseError_71 as parseError,
        parse_71 as parse,
        toBufferOk_70 as toBufferOk,
        toBufferError_70 as toBufferError,
        toBuffer_70 as toBuffer
    }
}

export declare namespace WiredCannonShotPacket {
    export {
        t_74 as t,
        parseOk_72 as parseOk,
        parseError_72 as parseError,
        parse_72 as parse,
        toBufferOk_71 as toBufferOk,
        toBufferError_71 as toBufferError,
        toBuffer_71 as toBuffer
    }
}

export declare namespace WorldDataRequestPacket {
    export {
        t_75 as t,
        parseOk_73 as parseOk,
        parseError_73 as parseError,
        parse_73 as parse,
        toBufferOk_72 as toBufferOk,
        toBufferError_72 as toBufferError,
        toBuffer_72 as toBuffer
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

declare type WorldInfo_2 = {
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
    readonly worldUniqueId: Array16_3<number>;
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
    readonly eventInfo: eventInfo_2;
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
        eventInfo,
        WorldInfo,
        parseOk_84 as parseOk,
        parseError_84 as parseError,
        parse_84 as parse,
        toBufferOk_83 as toBufferOk,
        toBufferError_83 as toBufferError,
        toBuffer_83 as toBuffer
    }
}

export declare namespace ZonesPacket {
    export {
        t_76 as t,
        parseOk_74 as parseOk,
        parseError_74 as parseError,
        parse_74 as parse,
        toBufferOk_73 as toBufferOk,
        toBufferError_73 as toBufferError,
        toBuffer_73 as toBuffer
    }
}

export { }
