/// <reference types="node" />

import Color from '@popstarfreas/packetfactory/color';
import NetworkText from '@popstarfreas/packetfactory/networktext';

declare const Action: {
    toInt: (_1: Action_t) => number;
    toString: (_1: Action_t) => string;
    fromInt: (_1: number) => (undefined | Action_t)
};

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
        t_75 as t
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

declare type Chest_t_2 = {
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
        t_83 as t,
        parse_23 as parse,
        toBuffer_22 as toBuffer
    }
}

declare type coinLuck = { readonly position: t_44<number>; readonly amount: number };

declare type coinLuck_2 = { readonly position: t_44<number>; readonly amount: number };

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

declare type difficulty_2 = "Softcore" | "Mediumcore" | "Hardcore";

declare type dimensionName = string;

declare type dimensionName_2 = string;

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

declare type direction_3 = "Left" | "Right";

declare type direction_4 = "Left" | "Right";

export declare namespace DisconnectPacket {
    export {
        parse_29 as parse,
        toBuffer_28 as toBuffer,
        t_88 as t
    }
}

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
        t_14 as t
    }
}

declare function flag1(t: t_75): boolean;

declare function flag2(t: t_75): boolean;

declare function flag3(t: t_75): boolean;

declare function flag4(t: t_75): boolean;

declare function flag5(t: t_75): boolean;

declare function flag6(t: t_75): boolean;

declare function flag7(t: t_75): boolean;

declare function flag8(t: t_75): boolean;

declare function flagN(t: t_75, n: number): boolean;

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

declare type Float_t = t_233<number>;

declare function forEach(t: t_75, callback: (flag: boolean) => void): void;

declare type frame = { readonly x: number; readonly y: number };

declare type frame_2 = { readonly x: number; readonly y: number };

declare type frame_3 = { readonly x: number; readonly y: number };

declare type frame_4 = { readonly x: number; readonly y: number };

declare function fromArray<A>(a: A[]): Array16_2<A> | undefined;

declare function fromArray_2(flags: boolean[]): t_75;

declare function fromByte(byte: number): t_75;

declare function fromFlags(
flag1: boolean,
flag2: boolean,
flag3: boolean,
flag4: boolean,
flag5: boolean,
flag6: boolean,
flag7: boolean,
flag8: boolean
): t_75;

declare function getOr<A>(a: A[], index: number, or: A): A;

declare type gravityDirection = "Normal" | "Inverted";

declare type gravityDirection_2 = "Normal" | "Inverted";

export declare namespace HaveDryadDoStardewAnimationPacket {
    export {
        t_15 as t
    }
}

declare type Immunity_t = "All" | { TAG: "PlayerId"; _0: number };

declare type Int_t = t_233<number>;

declare function intoChunks<A>(a: A[], chunkSize: number): A[][];

export declare namespace InvasionProgressReportPacket {
    export {
        t_16 as t
    }
}

declare type ip = string;

declare type ip_2 = string;

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

declare type LazyPacket_t =
    { TAG: "ConnectRequest"; _0: t_232<(undefined | t_90)> }
| { TAG: "Disconnect"; _0: t_232<(undefined | t_91)> }
| { TAG: "PlayerSlotSet"; _0: t_232<(undefined | t_92)> }
| { TAG: "PlayerInfo"; _0: t_232<(undefined | t_93)> }
| { TAG: "PlayerInventorySlot"; _0: t_232<(undefined | t_94)> }
| { TAG: "WorldDataRequest"; _0: t_232<(undefined | t_95)> }
| { TAG: "WorldInfo"; _0: t_232<(undefined | WorldInfo_2)> }
| { TAG: "InitialTileSectionsRequest"; _0: t_232<(undefined | t_96)> }
| { TAG: "Status"; _0: t_232<(undefined | t_97)> }
| { TAG: "TileSectionSend"; _0: t_232<(undefined | t_98)> }
| { TAG: "TileSectionFrame"; _0: t_232<(undefined | t_99)> }
| { TAG: "PlayerSpawn"; _0: t_232<(undefined | t_100)> }
| { TAG: "PlayerUpdate"; _0: t_232<(undefined | t_101)> }
| { TAG: "PlayerActive"; _0: t_232<(undefined | t_102)> }
| { TAG: "PlayerHealth"; _0: t_232<(undefined | t_103)> }
| { TAG: "TileModify"; _0: t_232<(undefined | t_104)> }
| { TAG: "TimeSet"; _0: t_232<(undefined | t_105)> }
| { TAG: "DoorUse"; _0: t_232<(undefined | t_106)> }
| { TAG: "TileSquareSend"; _0: t_232<(undefined | t_107)> }
| { TAG: "ItemDropUpdate"; _0: t_232<(undefined | t_108)> }
| { TAG: "ItemOwner"; _0: t_232<(undefined | t_109)> }
| { TAG: "NpcUpdate"; _0: t_232<(undefined | t_110)> }
| { TAG: "NpcItemStrike"; _0: t_232<(undefined | t_111)> }
| { TAG: "ProjectileSync"; _0: t_232<(undefined | t_112)> }
| { TAG: "NpcStrike"; _0: t_232<(undefined | t_113)> }
| { TAG: "ProjectileDestroy"; _0: t_232<(undefined | t_114)> }
| { TAG: "PvpToggle"; _0: t_232<(undefined | t_115)> }
| { TAG: "ChestOpen"; _0: t_232<(undefined | t_116)> }
| { TAG: "ChestItem"; _0: t_232<(undefined | t_117)> }
| { TAG: "ActiveContainerSync"; _0: t_232<(undefined | t_118)> }
| { TAG: "ChestPlace"; _0: t_232<(undefined | t_119)> }
| { TAG: "HealEffect"; _0: t_232<(undefined | t_120)> }
| { TAG: "Zones"; _0: t_232<(undefined | t_121)> }
| { TAG: "PasswordRequired"; _0: t_232<(undefined | t_122)> }
| { TAG: "PasswordSend"; _0: t_232<(undefined | t_123)> }
| { TAG: "ItemOwnerRemove"; _0: t_232<(undefined | t_124)> }
| { TAG: "NpcTalk"; _0: t_232<(undefined | t_125)> }
| { TAG: "PlayerAnimation"; _0: t_232<(undefined | t_126)> }
| { TAG: "PlayerMana"; _0: t_232<(undefined | t_127)> }
| { TAG: "ManaEffect"; _0: t_232<(undefined | t_128)> }
| { TAG: "PlayerTeam"; _0: t_232<(undefined | t_129)> }
| { TAG: "SignRead"; _0: t_232<(undefined | t_130)> }
| { TAG: "SignNew"; _0: t_232<(undefined | t_131)> }
| { TAG: "LiquidSet"; _0: t_232<(undefined | t_132)> }
| { TAG: "PlayerSpawnSelf"; _0: t_232<(undefined | t_133)> }
| { TAG: "PlayerBuffsSet"; _0: t_232<(undefined | t_134)> }
| { TAG: "NpcSpecialEffect"; _0: t_232<(undefined | t_135)> }
| { TAG: "ChestOrTempleUnlock"; _0: t_232<(undefined | t_136)> }
| { TAG: "NpcBuffAdd"; _0: t_232<(undefined | t_137)> }
| { TAG: "NpcBuffUpdate"; _0: t_232<(undefined | t_138)> }
| { TAG: "PlayerBuffAdd"; _0: t_232<(undefined | t_139)> }
| { TAG: "NpcNameUpdate"; _0: t_232<(undefined | t_140)> }
| { TAG: "GoodEvilUpdate"; _0: t_232<(undefined | t_141)> }
| { TAG: "HarpPlay"; _0: t_232<(undefined | t_142)> }
| { TAG: "SwitchHit"; _0: t_232<(undefined | t_143)> }
| { TAG: "NpcHomeUpdate"; _0: t_232<(undefined | t_144)> }
| { TAG: "BossOrInvasionSpawn"; _0: t_232<(undefined | t_145)> }
| { TAG: "PlayerDodge"; _0: t_232<(undefined | t_146)> }
| { TAG: "TilePaint"; _0: t_232<(undefined | t_147)> }
| { TAG: "WallPaint"; _0: t_232<(undefined | t_148)> }
| { TAG: "Teleport"; _0: t_232<(undefined | t_149)> }
| { TAG: "PlayerHealOther"; _0: t_232<(undefined | t_150)> }
| { TAG: "DimensionsUpdate"; _0: t_232<(undefined | t_151)> }
| { TAG: "ClientUuid"; _0: t_232<(undefined | t_152)> }
| { TAG: "ChestName"; _0: t_232<(undefined | t_153)> }
| { TAG: "NpcCatch"; _0: t_232<(undefined | t_154)> }
| { TAG: "NpcRelease"; _0: t_232<(undefined | t_155)> }
| { TAG: "TravellingMerchantInventory"; _0: t_232<(undefined | t_156)> }
| { TAG: "TeleportationPotion"; _0: t_232<(undefined | t_157)> }
| { TAG: "AnglerQuest"; _0: t_232<(undefined | t_158)> }
| { TAG: "AnglerQuestComplete"; _0: t_232<(undefined | t_159)> }
| { TAG: "AnglerQuestsCompletedAmount"; _0: t_232<(undefined | t_160)> }
| { TAG: "TemporaryAnimationCreate"; _0: t_232<(undefined | t_161)> }
| { TAG: "InvasionProgressReport"; _0: t_232<(undefined | t_162)> }
| { TAG: "ObjectPlace"; _0: t_232<(undefined | t_163)> }
| { TAG: "PlayerChestIndexSync"; _0: t_232<(undefined | t_164)> }
| { TAG: "CombatNumberCreate"; _0: t_232<(undefined | t_165)> }
| { TAG: "NetModuleLoad"; _0: t_232<(undefined | NetModuleLoad)> }
| { TAG: "NpcKillCount"; _0: t_232<(undefined | t_166)> }
| { TAG: "PlayerStealth"; _0: t_232<(undefined | t_167)> }
| { TAG: "ItemForceIntoNearestChest"; _0: t_232<(undefined | t_168)> }
| { TAG: "TileEntityUpdate"; _0: t_232<(undefined | t_169)> }
| { TAG: "TileEntityPlace"; _0: t_232<(undefined | t_170)> }
| { TAG: "ItemDropModify"; _0: t_232<(undefined | t_171)> }
| { TAG: "ItemFramePlace"; _0: t_232<(undefined | t_172)> }
| { TAG: "ItemDropInstancedUpdate"; _0: t_232<(undefined | t_173)> }
| { TAG: "EmoteBubble"; _0: t_232<(undefined | t_174)> }
| { TAG: "ExtraValueSync"; _0: t_232<(undefined | t_175)> }
| { TAG: "SocialHandshake"; _0: t_232<(undefined | t_176)> }
| { TAG: "Unused"; _0: t_232<(undefined | t_177)> }
| { TAG: "PortalKill"; _0: t_232<(undefined | t_178)> }
| { TAG: "PlayerTeleportPortal"; _0: t_232<(undefined | t_179)> }
| { TAG: "NpcKilledNotification"; _0: t_232<(undefined | t_180)> }
| { TAG: "EventNotification"; _0: t_232<(undefined | t_181)> }
| { TAG: "MinionTargetUpdate"; _0: t_232<(undefined | t_182)> }
| { TAG: "NpcTeleportPortal"; _0: t_232<(undefined | t_183)> }
| { TAG: "ShieldStrengthsUpdate"; _0: t_232<(undefined | t_184)> }
| { TAG: "NebulaLevelUp"; _0: t_232<(undefined | t_185)> }
| { TAG: "MoonLordCountdown"; _0: t_232<(undefined | t_186)> }
| { TAG: "NpcShopItem"; _0: t_232<(undefined | t_187)> }
| { TAG: "GemLockToggle"; _0: t_232<(undefined | t_188)> }
| { TAG: "SmokePoof"; _0: t_232<(undefined | t_189)> }
| { TAG: "ChatMessageSmart"; _0: t_232<(undefined | t_190)> }
| { TAG: "WiredCannonShot"; _0: t_232<(undefined | t_191)> }
| { TAG: "MassWireOperation"; _0: t_232<(undefined | t_192)> }
| { TAG: "MassWireOperationPay"; _0: t_232<(undefined | t_193)> }
| { TAG: "PartyToggle"; _0: t_232<(undefined | t_194)> }
| { TAG: "TreeGrowFx"; _0: t_232<(undefined | t_195)> }
| { TAG: "CrystalInvasionStart"; _0: t_232<(undefined | t_196)> }
| { TAG: "CrystalInvasionWipeAll"; _0: t_232<(undefined | t_197)> }
| { TAG: "MinionAttackTargetUpdate"; _0: t_232<(undefined | t_198)> }
| { TAG: "CrystalInvasionSendWaitTime"; _0: t_232<(undefined | t_199)> }
| { TAG: "PlayerDamage"; _0: t_232<(undefined | t_200)> }
| { TAG: "PlayerDeath"; _0: t_232<(undefined | t_201)> }
| { TAG: "CombatTextCreate"; _0: t_232<(undefined | t_202)> }
| { TAG: "Emoji"; _0: t_232<(undefined | t_203)> }
| { TAG: "TileEntityDisplayDollItemSync"; _0: t_232<(undefined | t_204)> }
| { TAG: "TileEntityInteractionRequest"; _0: t_232<(undefined | t_205)> }
| { TAG: "WeaponsRackTryPlacing"; _0: t_232<(undefined | t_206)> }
| { TAG: "TileEntityHatRackItemSync"; _0: t_232<(undefined | t_207)> }
| { TAG: "TilePickingSync"; _0: t_232<(undefined | t_208)> }
| { TAG: "RevengeMarkerSync"; _0: t_232<(undefined | t_209)> }
| { TAG: "RevengeMarkerRemove"; _0: t_232<(undefined | t_210)> }
| { TAG: "GolfBallLandInCup"; _0: t_232<(undefined | t_211)> }
| { TAG: "ClientFinishConnectingToServer"; _0: t_232<(undefined | t_212)> }
| { TAG: "NpcFishOut"; _0: t_232<(undefined | t_213)> }
| { TAG: "NpcTamper"; _0: t_232<(undefined | t_214)> }
| { TAG: "LegacySoundPlay"; _0: t_232<(undefined | t_215)> }
| { TAG: "FoodPlatterTryPlacing"; _0: t_232<(undefined | t_216)> }
| { TAG: "PlayerLuckFactorsUpdate"; _0: t_232<(undefined | t_217)> }
| { TAG: "PlayerDead"; _0: t_232<(undefined | t_218)> }
| { TAG: "CavernMonsterTypeSync"; _0: t_232<(undefined | t_219)> }
| { TAG: "NpcBuffRemovalRequest"; _0: t_232<(undefined | t_220)> }
| { TAG: "ClientSyncedInventory"; _0: t_232<(undefined | t_221)> }
| { TAG: "CountsAsHostForGameplaySet"; _0: t_232<(undefined | t_222)> }
| { TAG: "CreditsOrSlimeTransform"; _0: t_232<(undefined | t_223)> }
| { TAG: "LucyAxeMessage"; _0: t_232<(undefined | t_224)> }
| { TAG: "PiggyBankVoidLensUpdate"; _0: t_232<(undefined | t_225)> }
| { TAG: "DungeonDefendersEventAttemptSkipWait"; _0: t_232<(undefined | t_226)> }
| { TAG: "HaveDryadDoStardewAnimation"; _0: t_232<(undefined | t_227)> }
| { TAG: "ItemDropShimmeredUpdate"; _0: t_232<(undefined | t_228)> }
| { TAG: "ShimmerEffectOrCoinLuck"; _0: t_232<(undefined | t_229)> }
| { TAG: "LoadoutSwitch"; _0: t_232<(undefined | t_230)> }
| { TAG: "ItemDropProtectedUpdate"; _0: t_232<(undefined | t_231)> };

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
        parseOk,
        parseError,
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

export declare namespace NpcUpdatePacket {
    export {
        ai,
        life,
        t_87 as t,
        parseOk_7 as parseOk,
        parseError_7 as parseError,
        parse_28 as parse,
        toBufferOk_7 as toBufferOk,
        toBufferError_7 as toBufferError,
        toBuffer_27 as toBuffer
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

declare const parse_10: (_1: Buffer) => (undefined | t_41);

declare const parse_11: (_1: Buffer) => (undefined | t_43);

declare const parse_12: (_1: Buffer) => (undefined | t_60);

declare const parse_13: (_1: Buffer) => (undefined | t_61);

declare type parse_14 = parseOk_2 | parseError_2;

declare const parse_14: (_1: Buffer) => parse_14;

declare type parse_15 = { TAG: "Ok"; _0: t_69 };

declare const parse_15: (_1: Buffer) => parse_15;

declare const parse_16: (_1: Buffer) => (undefined | t_70);

declare function parse_17(payload: Buffer): t_77;

declare type parse_18 = parseOk_3 | parseError_3;

declare const parse_18: (_1: Buffer) => parse_18;

declare type parse_19 = parseOk_4 | parseError_4;

declare const parse_19: (_1: Buffer) => parse_19;

declare const parse_2: (_1: Buffer) => (undefined | t_9);

declare const parse_20: (_1: Buffer) => (undefined | t_80);

declare function parse_21(payload: Buffer): t_81;

declare const parse_22: (_1: Buffer) => (undefined | t_82);

declare const parse_23: (_1: Buffer) => (undefined | t_83);

declare type parse_24 = parseOk_5 | parseError_5;

declare const parse_24: (_1: Buffer) => parse_24;

declare const parse_25: (_1: Buffer) => (undefined | t_85);

declare function parse_26(buffer: Buffer): parse_26;

declare type parse_26 = parseOk_6 | parseError_6;

declare function parse_27(payload: Buffer): t_86;

declare type parse_28 = parseOk_7 | parseError_7;

declare const parse_28: (_1: Buffer) => parse_28;

declare function parse_29(payload: Buffer): t_88 | undefined;

declare function parse_3(payload: Buffer): t_18 | undefined;

declare const parse_30: parse_31<t_89>;

declare type parse_31<a> = (buffer: Buffer, fromServer: boolean) => parseResult<a>;

declare const parse_4: (_1: Buffer) => (undefined | t_19);

declare function parse_5(buffer: Buffer, fromServer: boolean): parse_5;

declare type parse_5 = parseOk | parseError;

declare const parse_6: (_1: Buffer) => (undefined | t_31);

declare const parse_7: (_1: Buffer) => (undefined | t_34);

declare const parse_8: (_1: Buffer) => (undefined | t_35);

declare const parse_9: (_1: Buffer) => (undefined | t_38);

declare type parseError = { TAG: "Error"; _0: readError };

declare type parseError_2 = { TAG: "Error"; _0: readError };

declare type parseError_3 = { TAG: "Error"; _0: readError };

declare type parseError_4 = { TAG: "Error"; _0: readError };

declare type parseError_5 = { TAG: "Error"; _0: readError };

declare type parseError_6 = { TAG: "Error"; _0: readError };

declare type parseError_7 = { TAG: "Error"; _0: readError };

declare const parseLazy: parseLazy_2<LazyPacket_t>;

declare type parseLazy_2<a> = (buffer: Buffer, fromServer: boolean) => (
    { TAG: "Ok"; _0: (undefined | a) }
| { TAG: "Error"; _0: readError }
);

declare type parseOk = { TAG: "Ok"; _0: (NetModuleLoad | undefined) };

declare type parseOk_2 = { TAG: "Ok"; _0: (undefined | t_65) };

declare type parseOk_3 = { TAG: "Ok"; _0: (undefined | t_78) };

declare type parseOk_4 = { TAG: "Ok"; _0: (undefined | t_79) };

declare type parseOk_5 = { TAG: "Ok"; _0: (undefined | t_84) };

declare type parseOk_6 = { TAG: "Ok"; _0: WorldInfo | undefined };

declare type parseOk_7 = { TAG: "Ok"; _0: (undefined | t_87) };

export declare namespace Parser {
    export {
        parse_30 as parse,
        parseLazy
    }
}

declare type parseResult<a> =
    { TAG: "Ok"; _0: (undefined | a) }
| { TAG: "Error"; _0: readError };

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
        parse_27 as parse,
        toBuffer_26 as toBuffer,
        t_86 as t
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

export declare namespace PlayerBuffsSetPacket {
    export {
        t_35 as t,
        parse_8 as parse,
        toBuffer_8 as toBuffer
    }
}

export declare namespace PlayerChestIndexSyncPacket {
    export {
        t_36 as t
    }
}

export declare namespace PlayerDamagePacket {
    export {
        t_85 as t,
        parse_25 as parse,
        toBuffer_24 as toBuffer
    }
}

export declare namespace PlayerDeadPacket {
    export {
        t_37 as t
    }
}

export declare namespace PlayerDeathPacket {
    export {
        t_38 as t,
        parse_9 as parse,
        toBuffer_9 as toBuffer
    }
}

export declare namespace PlayerDeathReason {
    export {
        other_2 as other,
        t_76 as t
    }
}

export declare namespace PlayerDodgePacket {
    export {
        t_40 as t
    }
}

export declare namespace PlayerHealthPacket {
    export {
        t_82 as t,
        parse_22 as parse,
        toBuffer_21 as toBuffer
    }
}

declare type playerId = number;

export declare namespace PlayerInfoPacket {
    export {
        difficulty,
        mode,
        t_79 as t,
        parseOk_4 as parseOk,
        parseError_4 as parseError,
        parse_19 as parse,
        toBufferOk_4 as toBufferOk,
        toBufferError_4 as toBufferError,
        toBuffer_18 as toBuffer
    }
}

export declare namespace PlayerInventorySlotPacket {
    export {
        parse_21 as parse,
        toBuffer_20 as toBuffer,
        t_81 as t
    }
}

export declare namespace PlayerManaPacket {
    export {
        t_41 as t,
        parse_10 as parse,
        toBuffer_10 as toBuffer
    }
}

export declare namespace PlayerSlotSetPacket {
    export {
        parse_17 as parse,
        toBuffer_16 as toBuffer,
        t_77 as t
    }
}

export declare namespace PlayerSpawnPacket {
    export {
        context,
        t_80 as t,
        parse_20 as parse,
        toBuffer_19 as toBuffer
    }
}

export declare namespace PlayerTeamPacket {
    export {
        t_42 as t
    }
}

export declare namespace PlayerUpdatePacket {
    export {
        direction_2 as direction,
        potionOfReturn,
        control,
        pulleyDirection,
        gravityDirection,
        t_78 as t,
        parseOk_3 as parseOk,
        parseError_3 as parseError,
        parse_18 as parse,
        toBufferOk_3 as toBufferOk,
        toBufferError_3 as toBufferError,
        toBuffer_17 as toBuffer
    }
}

export declare namespace Point {
    export {
        t_233 as t,
        Int_t,
        Float_t
    }
}

declare type port = number;

declare type port_2 = number;

declare type position = { readonly x: number; readonly y: number };

declare type potionOfReturn = { readonly originalUsePosition: t_44<number>; readonly homePosition: t_44<number> };

declare type potionOfReturn_2 = { readonly originalUsePosition: t_44<number>; readonly homePosition: t_44<number> };

declare type powerLevel =
"LockedForEveryone"
| "CanBeChangedByHostAlone"
| "CanBeChangedByEveryone";

export declare namespace ProjectileSyncPacket {
    export {
        t_84 as t,
        parseOk_5 as parseOk,
        parseError_5 as parseError,
        parse_24 as parse,
        toBufferOk_5 as toBufferOk,
        toBufferError_5 as toBufferError,
        toBuffer_23 as toBuffer
    }
}

declare type pulleyDirection = "One" | "Two";

declare type pulleyDirection_2 = "One" | "Two";

export declare namespace PvpTogglePacket {
    export {
        t_43 as t,
        parse_11 as parse,
        toBuffer_11 as toBuffer
    }
}

declare type pylonAction = "Added" | "Removed" | "RequestTeleport";

declare type readError = { readonly context: string; readonly error: unknown };

export declare namespace Result {
    export {
        Result_2 as Result
    }
}

declare type Result_2<T, E> = {
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
        t_45 as t
    }
}

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
        t_46 as t
    }
}

export declare namespace SignReadPacket {
    export {
        t_47 as t
    }
}

export declare namespace SmokePoofPacket {
    export {
        t_48 as t
    }
}

export declare namespace SocialHandshakePacket {
    export {
        t_49 as t
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
        t_50 as t
    }
}

export declare namespace SwitchHitPacket {
    export {
        t_51 as t
    }
}

declare type t = void;

declare type t_10 = void;

declare type t_100 = {
    readonly playerId: number;
    readonly x: number;
    readonly y: number;
    readonly timeRemaining: number;
    readonly numberOfDeathsPve: number;
    readonly numberOfDeathsPvp: number;
    readonly context: context_2
};

declare type t_101 = {
    readonly playerId: number;
    readonly control: control_2;
    readonly direction: direction_3;
    readonly pulleyDirection: (undefined | pulleyDirection_2);
    readonly vortexStealthActive: boolean;
    readonly gravityDirection: gravityDirection_2;
    readonly shouldGuard: boolean;
    readonly ghost: boolean;
    readonly selectedItem: number;
    readonly position: t_44<number>;
    readonly velocity: (undefined | t_44<number>);
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

declare type t_102 = {
    readonly playerId: number;
    readonly active: boolean;
};

declare type t_103 = {
    readonly playerId: number;
    readonly health: number;
    readonly maxHealth: number
};

declare type t_104 = {
    readonly action: Action_t_3;
    readonly tileX: number;
    readonly tileY: number;
    readonly value1: number;
    readonly value2: number
};

declare type t_105 = void;

declare type t_106 = void;

declare type t_107 = {
    readonly width: number;
    readonly height: number;
    readonly changeType: number;
    readonly tileX: number;
    readonly tileY: number;
    readonly tiles: Array<tile_4[]>
};

declare type t_108 = {
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

declare type t_109 = { readonly itemDropId: number; readonly owner: number };

declare type t_11 = { readonly eventType: EventType_t; readonly value: number };

declare type t_110 = {
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

declare type t_111 = void;

declare type t_112 = {
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

declare type t_113 = void;

declare type t_114 = { readonly projectileId: number; readonly owner: number };

declare type t_115 = { readonly playerId: number; readonly pvpEnabled: boolean };

declare type t_116 = void;

declare type t_117 = {
    readonly chestId: number; 
    readonly slot: number; 
    readonly stack: number; 
    readonly prefix: number; 
    readonly itemNetId: number
};

declare type t_118 = {
    readonly chestId: number; 
    readonly x: number; 
    readonly y: number; 
    readonly nameLength: number; 
    readonly name: string
};

declare type t_119 = {
    readonly action: Action_t_4;
    readonly x: number;
    readonly y: number;
    readonly style: number;
    readonly id: number
};

declare type t_12 = { readonly x: number; readonly y: number };

declare type t_120 = { readonly playerId: number; readonly healAmount: number };

declare type t_121 = void;

declare type t_122 = void;

declare type t_123 = void;

declare type t_124 = { readonly itemDropId: number };

declare type t_125 = void;

declare type t_126 = void;

declare type t_127 = {
    readonly playerId: number;
    readonly mana: number;
    readonly maxMana: number
};

declare type t_128 = { readonly playerId: number; readonly manaAmount: number };

declare type t_129 = void;

declare type t_13 = 
"GamemodesJoinMode"
| { TAG: "RealIpAddress"; _0: ip }
| { TAG: "SwitchServer"; _0: dimensionName }
| { TAG: "SwitchServerManual"; _0: ip; _1: port };

declare type t_130 = void;

declare type t_131 = void;

declare type t_132 = void;

declare type t_133 = void;

declare type t_134 = { readonly playerId: number; readonly buffs: number[] };

declare type t_135 = void;

declare type t_136 = {
    readonly unlockType: unlockType_2; 
    readonly x: number; 
    readonly y: number
};

declare type t_137 = void;

declare type t_138 = {
    readonly npcId: number; 
    readonly buffs: number[]; 
    readonly buffTimes: number[]
};

declare type t_139 = {
    readonly playerId: number;
    readonly buff: number;
    readonly time: number
};

declare type t_14 = {
    readonly npcSlotId: number; 
    readonly extraValue: number; 
    readonly x: number; 
    readonly y: number
};

declare type t_140 = void;

declare type t_141 = void;

declare type t_142 = void;

declare type t_143 = void;

declare type t_144 = void;

declare type t_145 = { readonly playerId: number; readonly spawnType: spawnType_2 };

declare type t_146 = void;

declare type t_147 = {
    readonly x: number;
    readonly y: number;
    readonly color: number;
    readonly coat: number
};

declare type t_148 = {
    readonly x: number;
    readonly y: number;
    readonly color: number;
    readonly coat: number
};

declare type t_149 = {
    readonly teleportType: teleportType_3; 
    readonly getPositionFromTarget: boolean; 
    readonly targetId: number; 
    readonly x: number; 
    readonly y: number; 
    readonly style: number; 
    readonly extraInfo: (undefined | number)
};

declare type t_15 = void;

declare type t_150 = void;

declare type t_151 = 
"GamemodesJoinMode"
| { TAG: "RealIpAddress"; _0: ip_2 }
| { TAG: "SwitchServer"; _0: dimensionName_2 }
| { TAG: "SwitchServerManual"; _0: ip_2; _1: port_2 };

declare type t_152 = { readonly uuid: string };

declare type t_153 = void;

declare type t_154 = { readonly npcId: number; readonly playerId: number };

declare type t_155 = {
    readonly x: number; 
    readonly y: number; 
    readonly npcType: number; 
    readonly style: number
};

declare type t_156 = { readonly items: number[] };

declare type t_157 = { readonly teleportType: teleportType_4 };

declare type t_158 = void;

declare type t_159 = void;

declare type t_16 = void;

declare type t_160 = void;

declare type t_161 = void;

declare type t_162 = void;

declare type t_163 = {
    readonly x: number;
    readonly y: number;
    readonly objectType: number;
    readonly style: number;
    readonly alternate: number;
    readonly random: number;
    readonly direction: direction_4
};

declare type t_164 = void;

declare type t_165 = void;

declare type t_166 = void;

declare type t_167 = void;

declare type t_168 = void;

declare type t_169 = void;

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

declare type t_170 = void;

declare type t_171 = void;

declare type t_172 = {
    readonly x: number; 
    readonly y: number; 
    readonly itemId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type t_173 = t_108;

declare type t_174 = void;

declare type t_175 = {
    readonly npcSlotId: number; 
    readonly extraValue: number; 
    readonly x: number; 
    readonly y: number
};

declare type t_176 = void;

declare type t_177 = undefined;

declare type t_178 = void;

declare type t_179 = void;

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

declare type t_180 = void;

declare type t_181 = void;

declare type t_182 = void;

declare type t_183 = void;

declare type t_184 = void;

declare type t_185 = void;

declare type t_186 = { readonly maxMoonLordCountdown: number; readonly moonLordCountdown: number };

declare type t_187 = void;

declare type t_188 = void;

declare type t_189 = void;

declare type t_19 = { readonly itemDropId: number; readonly owner: number };

declare type t_190 = void;

declare type t_191 = void;

declare type t_192 = void;

declare type t_193 = void;

declare type t_194 = void;

declare type t_195 = void;

declare type t_196 = { readonly x: number; readonly y: number };

declare type t_197 = void;

declare type t_198 = void;

declare type t_199 = void;

declare type t_2 = void;

declare type t_20 = { readonly playerId: number; readonly loadout: number };

declare type t_200 = {
    readonly target: number;
    readonly deathReason: t_39;
    readonly damage: number;
    readonly hitDirection: number;
    readonly critical: boolean;
    readonly pvp: boolean;
    readonly cooldownCounter: number
};

declare type t_201 = {
    readonly playerId: number;
    readonly deathReason: t_39;
    readonly damage: number;
    readonly hitDirection: number;
    readonly pvp: boolean
};

declare type t_202 = void;

declare type t_203 = void;

declare type t_204 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_205 = void;

declare type t_206 = {
    readonly x: number; 
    readonly y: number; 
    readonly itemId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type t_207 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_208 = void;

declare type t_209 = void;

declare type t_21 = void;

declare type t_210 = void;

declare type t_211 = void;

declare type t_212 = void;

declare type t_213 = void;

declare type t_214 = {
    readonly npcId: number; 
    readonly immunityTime: (undefined | number); 
    readonly immunityFromPlayerId: (undefined | Immunity_t)
};

declare type t_215 = void;

declare type t_216 = {
    readonly x: number; 
    readonly y: number; 
    readonly itemId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type t_217 = {
    readonly playerId: number; 
    readonly ladyBugLuckTimeLeft: number; 
    readonly torchLuck: number; 
    readonly luckPotion: number; 
    readonly hasGardenGnomeNearby: boolean; 
    readonly equipmentBasedLuckBonus: number; 
    readonly coinLuck: number
};

declare type t_218 = void;

declare type t_219 = void;

declare type t_22 = {
    readonly npcId: number; 
    readonly buffs: number[]; 
    readonly buffTimes: number[]
};

declare type t_220 = void;

declare type t_221 = void;

declare type t_222 = void;

declare type t_223 = { readonly eventType: EventType_t_2; readonly value: number };

declare type t_224 = {
    readonly source: number; 
    readonly variant: number; 
    readonly velocity: t_44<number>; 
    readonly position: t_44<number>
};

declare type t_225 = {
    readonly playerId: number; 
    readonly piggyBankProj: (undefined | TrackedProjectileReference_t); 
    readonly voidLensChest: (undefined | TrackedProjectileReference_t)
};

declare type t_226 = void;

declare type t_227 = void;

declare type t_228 = {
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

declare type t_229 = 
    { TAG: "ShimmerEffect"; _0: number; _1: number }
| { TAG: "CoinLuck"; _0: coinLuck_2 }
| { TAG: "NewShimmerEffect"; _0: number };

declare type t_23 = { readonly npcId: number; readonly playerId: number };

declare type t_230 = { readonly playerId: number; readonly loadout: number };

declare type t_231 = {
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

declare type t_232<T> = {
    LAZY_DONE: boolean,
    VAL: () => T
}

declare type t_233<a> = { readonly x: a; readonly y: a };

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

declare type t_35 = { readonly playerId: number; readonly buffs: number[] };

declare type t_36 = void;

declare type t_37 = void;

declare type t_38 = {
    readonly playerId: number;
    readonly deathReason: t_39;
    readonly damage: number;
    readonly hitDirection: number;
    readonly pvp: boolean
};

declare type t_39 = {
    readonly killerPlayerId: (undefined | number); 
    readonly killerNpcId: (undefined | number); 
    readonly killerProjectileId: (undefined | number); 
    readonly typeOfDeathOther: (undefined | other); 
    readonly projectileType: (undefined | number); 
    readonly itemType: (undefined | number); 
    readonly itemPrefix: (undefined | number); 
    readonly deathReason: (undefined | string)
};

declare type t_4 = void;

declare type t_40 = void;

declare type t_41 = {
    readonly playerId: number;
    readonly mana: number;
    readonly maxMana: number
};

declare type t_42 = void;

declare type t_43 = { readonly playerId: number; readonly pvpEnabled: boolean };

declare type t_44<a> = { readonly x: a; readonly y: a };

declare type t_45 = 
    { TAG: "ShimmerEffect"; _0: number; _1: number }
| { TAG: "CoinLuck"; _0: coinLuck }
| { TAG: "NewShimmerEffect"; _0: number };

declare type t_46 = void;

declare type t_47 = void;

declare type t_48 = void;

declare type t_49 = void;

declare type t_5 = {
    readonly chestId: number; 
    readonly slot: number; 
    readonly stack: number; 
    readonly prefix: number; 
    readonly itemNetId: number
};

declare type t_50 = {
    readonly max: number;
    readonly text: NetworkText;
    readonly flags: flags
};

declare type t_51 = void;

declare type t_52 = {
    readonly teleportType: teleportType; 
    readonly getPositionFromTarget: boolean; 
    readonly targetId: number; 
    readonly x: number; 
    readonly y: number; 
    readonly style: number; 
    readonly extraInfo: (undefined | number)
};

declare type t_53 = { readonly teleportType: teleportType_2 };

declare type t_54 = void;

declare type t_55 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_56 = {
    readonly playerId: number; 
    readonly tileEntityId: number; 
    readonly itemIndex: number; 
    readonly itemId: number; 
    readonly stack: number; 
    readonly prefix: number
};

declare type t_57 = void;

declare type t_58 = void;

declare type t_59 = void;

declare type t_6 = {
    readonly unlockType: unlockType; 
    readonly x: number; 
    readonly y: number
};

declare type t_60 = {
    readonly action: Action_t_2;
    readonly tileX: number;
    readonly tileY: number;
    readonly value1: number;
    readonly value2: number
};

declare type t_61 = {
    readonly x: number;
    readonly y: number;
    readonly color: number;
    readonly coat: number
};

declare type t_62 = void;

declare type t_63 = {
    readonly startX: number; 
    readonly startY: number; 
    readonly endX: number; 
    readonly endY: number
};

declare type t_64 = {
    readonly height: number; 
    readonly width: number; 
    readonly tileX: number; 
    readonly tileY: number; 
    readonly tiles: Array<tile[]>; 
    readonly chests: Chest_t[]; 
    readonly signs: Sign_t[]; 
    readonly entities: Entity_t[]
};

declare type t_65 = {
    readonly width: number;
    readonly height: number;
    readonly changeType: number;
    readonly tileX: number;
    readonly tileY: number;
    readonly tiles: Array<tile_2[]>
};

declare type t_66 = void;

declare type t_67 = { readonly items: number[] };

declare type t_68 = void;

declare type t_69 = undefined;

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
    readonly color: number;
    readonly coat: number
};

declare type t_71 = {
    readonly x: number; 
    readonly y: number; 
    readonly itemId: number; 
    readonly prefix: number; 
    readonly stack: number
};

declare type t_72 = void;

declare type t_73 = void;

declare type t_74 = void;

declare type t_75 = number;

declare type t_76 = {
    readonly killerPlayerId: (undefined | number); 
    readonly killerNpcId: (undefined | number); 
    readonly killerProjectileId: (undefined | number); 
    readonly typeOfDeathOther: (undefined | other_2); 
    readonly projectileType: (undefined | number); 
    readonly itemType: (undefined | number); 
    readonly itemPrefix: (undefined | number); 
    readonly deathReason: (undefined | string)
};

declare type t_77 = number;

declare type t_78 = {
    readonly playerId: number;
    readonly control: control;
    readonly direction: direction_2;
    readonly pulleyDirection: (undefined | pulleyDirection);
    readonly vortexStealthActive: boolean;
    readonly gravityDirection: gravityDirection;
    readonly shouldGuard: boolean;
    readonly ghost: boolean;
    readonly selectedItem: number;
    readonly position: t_44<number>;
    readonly velocity: (undefined | t_44<number>);
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

declare type t_79 = {
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

declare type t_8 = void;

declare type t_80 = {
    readonly playerId: number;
    readonly x: number;
    readonly y: number;
    readonly timeRemaining: number;
    readonly numberOfDeathsPve: number;
    readonly numberOfDeathsPvp: number;
    readonly context: context
};

declare type t_81 = {
    readonly playerId: number;
    readonly slot: number;
    readonly stack: number;
    readonly prefix: number;
    readonly itemId: number;
};

declare type t_82 = {
    readonly playerId: number;
    readonly health: number;
    readonly maxHealth: number
};

declare type t_83 = { readonly uuid: string };

declare type t_84 = {
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

declare type t_85 = {
    readonly target: number;
    readonly deathReason: t_39;
    readonly damage: number;
    readonly hitDirection: number;
    readonly critical: boolean;
    readonly pvp: boolean;
    readonly cooldownCounter: number
};

declare type t_86 = {
    readonly playerId: number;
    readonly active: boolean;
};

declare type t_87 = {
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

declare type t_88 = {
    readonly reason: NetworkText;
};

declare type t_89 =
    { TAG: "ConnectRequest"; _0: t_90 }
| { TAG: "Disconnect"; _0: t_91 }
| { TAG: "PlayerSlotSet"; _0: t_92 }
| { TAG: "PlayerInfo"; _0: t_93 }
| { TAG: "PlayerInventorySlot"; _0: t_94 }
| { TAG: "WorldDataRequest"; _0: t_95 }
| { TAG: "WorldInfo"; _0: WorldInfo_2 }
| { TAG: "InitialTileSectionsRequest"; _0: t_96 }
| { TAG: "Status"; _0: t_97 }
| { TAG: "TileSectionSend"; _0: t_98 }
| { TAG: "TileSectionFrame"; _0: t_99 }
| { TAG: "PlayerSpawn"; _0: t_100 }
| { TAG: "PlayerUpdate"; _0: t_101 }
| { TAG: "PlayerActive"; _0: t_102 }
| { TAG: "PlayerHealth"; _0: t_103 }
| { TAG: "TileModify"; _0: t_104 }
| { TAG: "TimeSet"; _0: t_105 }
| { TAG: "DoorUse"; _0: t_106 }
| { TAG: "TileSquareSend"; _0: t_107 }
| { TAG: "ItemDropUpdate"; _0: t_108 }
| { TAG: "ItemOwner"; _0: t_109 }
| { TAG: "NpcUpdate"; _0: t_110 }
| { TAG: "NpcItemStrike"; _0: t_111 }
| { TAG: "ProjectileSync"; _0: t_112 }
| { TAG: "NpcStrike"; _0: t_113 }
| { TAG: "ProjectileDestroy"; _0: t_114 }
| { TAG: "PvpToggle"; _0: t_115 }
| { TAG: "ChestOpen"; _0: t_116 }
| { TAG: "ChestItem"; _0: t_117 }
| { TAG: "ActiveContainerSync"; _0: t_118 }
| { TAG: "ChestPlace"; _0: t_119 }
| { TAG: "HealEffect"; _0: t_120 }
| { TAG: "Zones"; _0: t_121 }
| { TAG: "PasswordRequired"; _0: t_122 }
| { TAG: "PasswordSend"; _0: t_123 }
| { TAG: "ItemOwnerRemove"; _0: t_124 }
| { TAG: "NpcTalk"; _0: t_125 }
| { TAG: "PlayerAnimation"; _0: t_126 }
| { TAG: "PlayerMana"; _0: t_127 }
| { TAG: "ManaEffect"; _0: t_128 }
| { TAG: "PlayerTeam"; _0: t_129 }
| { TAG: "SignRead"; _0: t_130 }
| { TAG: "SignNew"; _0: t_131 }
| { TAG: "LiquidSet"; _0: t_132 }
| { TAG: "PlayerSpawnSelf"; _0: t_133 }
| { TAG: "PlayerBuffsSet"; _0: t_134 }
| { TAG: "NpcSpecialEffect"; _0: t_135 }
| { TAG: "ChestOrTempleUnlock"; _0: t_136 }
| { TAG: "NpcBuffAdd"; _0: t_137 }
| { TAG: "NpcBuffUpdate"; _0: t_138 }
| { TAG: "PlayerBuffAdd"; _0: t_139 }
| { TAG: "NpcNameUpdate"; _0: t_140 }
| { TAG: "GoodEvilUpdate"; _0: t_141 }
| { TAG: "HarpPlay"; _0: t_142 }
| { TAG: "SwitchHit"; _0: t_143 }
| { TAG: "NpcHomeUpdate"; _0: t_144 }
| { TAG: "BossOrInvasionSpawn"; _0: t_145 }
| { TAG: "PlayerDodge"; _0: t_146 }
| { TAG: "TilePaint"; _0: t_147 }
| { TAG: "WallPaint"; _0: t_148 }
| { TAG: "Teleport"; _0: t_149 }
| { TAG: "PlayerHealOther"; _0: t_150 }
| { TAG: "DimensionsUpdate"; _0: t_151 }
| { TAG: "ClientUuid"; _0: t_152 }
| { TAG: "ChestName"; _0: t_153 }
| { TAG: "NpcCatch"; _0: t_154 }
| { TAG: "NpcRelease"; _0: t_155 }
| { TAG: "TravellingMerchantInventory"; _0: t_156 }
| { TAG: "TeleportationPotion"; _0: t_157 }
| { TAG: "AnglerQuest"; _0: t_158 }
| { TAG: "AnglerQuestComplete"; _0: t_159 }
| { TAG: "AnglerQuestsCompletedAmount"; _0: t_160 }
| { TAG: "TemporaryAnimationCreate"; _0: t_161 }
| { TAG: "InvasionProgressReport"; _0: t_162 }
| { TAG: "ObjectPlace"; _0: t_163 }
| { TAG: "PlayerChestIndexSync"; _0: t_164 }
| { TAG: "CombatNumberCreate"; _0: t_165 }
| { TAG: "NetModuleLoad"; _0: NetModuleLoad }
| { TAG: "NpcKillCount"; _0: t_166 }
| { TAG: "PlayerStealth"; _0: t_167 }
| { TAG: "ItemForceIntoNearestChest"; _0: t_168 }
| { TAG: "TileEntityUpdate"; _0: t_169 }
| { TAG: "TileEntityPlace"; _0: t_170 }
| { TAG: "ItemDropModify"; _0: t_171 }
| { TAG: "ItemFramePlace"; _0: t_172 }
| { TAG: "ItemDropInstancedUpdate"; _0: t_173 }
| { TAG: "EmoteBubble"; _0: t_174 }
| { TAG: "ExtraValueSync"; _0: t_175 }
| { TAG: "SocialHandshake"; _0: t_176 }
| { TAG: "Unused"; _0: t_177 }
| { TAG: "PortalKill"; _0: t_178 }
| { TAG: "PlayerTeleportPortal"; _0: t_179 }
| { TAG: "NpcKilledNotification"; _0: t_180 }
| { TAG: "EventNotification"; _0: t_181 }
| { TAG: "MinionTargetUpdate"; _0: t_182 }
| { TAG: "NpcTeleportPortal"; _0: t_183 }
| { TAG: "ShieldStrengthsUpdate"; _0: t_184 }
| { TAG: "NebulaLevelUp"; _0: t_185 }
| { TAG: "MoonLordCountdown"; _0: t_186 }
| { TAG: "NpcShopItem"; _0: t_187 }
| { TAG: "GemLockToggle"; _0: t_188 }
| { TAG: "SmokePoof"; _0: t_189 }
| { TAG: "ChatMessageSmart"; _0: t_190 }
| { TAG: "WiredCannonShot"; _0: t_191 }
| { TAG: "MassWireOperation"; _0: t_192 }
| { TAG: "MassWireOperationPay"; _0: t_193 }
| { TAG: "PartyToggle"; _0: t_194 }
| { TAG: "TreeGrowFx"; _0: t_195 }
| { TAG: "CrystalInvasionStart"; _0: t_196 }
| { TAG: "CrystalInvasionWipeAll"; _0: t_197 }
| { TAG: "MinionAttackTargetUpdate"; _0: t_198 }
| { TAG: "CrystalInvasionSendWaitTime"; _0: t_199 }
| { TAG: "PlayerDamage"; _0: t_200 }
| { TAG: "PlayerDeath"; _0: t_201 }
| { TAG: "CombatTextCreate"; _0: t_202 }
| { TAG: "Emoji"; _0: t_203 }
| { TAG: "TileEntityDisplayDollItemSync"; _0: t_204 }
| { TAG: "TileEntityInteractionRequest"; _0: t_205 }
| { TAG: "WeaponsRackTryPlacing"; _0: t_206 }
| { TAG: "TileEntityHatRackItemSync"; _0: t_207 }
| { TAG: "TilePickingSync"; _0: t_208 }
| { TAG: "RevengeMarkerSync"; _0: t_209 }
| { TAG: "RevengeMarkerRemove"; _0: t_210 }
| { TAG: "GolfBallLandInCup"; _0: t_211 }
| { TAG: "ClientFinishConnectingToServer"; _0: t_212 }
| { TAG: "NpcFishOut"; _0: t_213 }
| { TAG: "NpcTamper"; _0: t_214 }
| { TAG: "LegacySoundPlay"; _0: t_215 }
| { TAG: "FoodPlatterTryPlacing"; _0: t_216 }
| { TAG: "PlayerLuckFactorsUpdate"; _0: t_217 }
| { TAG: "PlayerDead"; _0: t_218 }
| { TAG: "CavernMonsterTypeSync"; _0: t_219 }
| { TAG: "NpcBuffRemovalRequest"; _0: t_220 }
| { TAG: "ClientSyncedInventory"; _0: t_221 }
| { TAG: "CountsAsHostForGameplaySet"; _0: t_222 }
| { TAG: "CreditsOrSlimeTransform"; _0: t_223 }
| { TAG: "LucyAxeMessage"; _0: t_224 }
| { TAG: "PiggyBankVoidLensUpdate"; _0: t_225 }
| { TAG: "DungeonDefendersEventAttemptSkipWait"; _0: t_226 }
| { TAG: "HaveDryadDoStardewAnimation"; _0: t_227 }
| { TAG: "ItemDropShimmeredUpdate"; _0: t_228 }
| { TAG: "ShimmerEffectOrCoinLuck"; _0: t_229 }
| { TAG: "LoadoutSwitch"; _0: t_230 }
| { TAG: "ItemDropProtectedUpdate"; _0: t_231 };

declare type t_9 = { readonly version: string };

declare type t_90 = { readonly version: string };

declare type t_91 = {
    readonly reason: NetworkText;
};

declare type t_92 = number;

declare type t_93 = {
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

declare type t_94 = {
    readonly playerId: number;
    readonly slot: number;
    readonly stack: number;
    readonly prefix: number;
    readonly itemId: number;
};

declare type t_95 = void;

declare type t_96 = { readonly x: number; readonly y: number };

declare type t_97 = {
    readonly max: number;
    readonly text: NetworkText;
    readonly flags: flags_2
};

declare type t_98 = {
    readonly height: number; 
    readonly width: number; 
    readonly tileX: number; 
    readonly tileY: number; 
    readonly tiles: Array<tile_3[]>; 
    readonly chests: Chest_t_2[]; 
    readonly signs: Sign_t_2[]; 
    readonly entities: Entity_t_2[]
};

declare type t_99 = {
    readonly startX: number; 
    readonly startY: number; 
    readonly endX: number; 
    readonly endY: number
};

export declare namespace TeleportationPotionPacket {
    export {
        teleportType_2 as teleportType,
        t_53 as t
    }
}

export declare namespace TeleportPacket {
    export {
        teleportType,
        t_52 as t
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
        t_54 as t
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
        t_55 as t
    }
}

export declare namespace TileEntityHatRackItemSyncPacket {
    export {
        t_56 as t
    }
}

export declare namespace TileEntityInteractionRequestPacket {
    export {
        t_57 as t
    }
}

export declare namespace TileEntityPlacePacket {
    export {
        t_58 as t
    }
}

export declare namespace TileEntityUpdatePacket {
    export {
        t_59 as t
    }
}

export declare namespace TileModifyPacket {
    export {
        Action_t_2 as Action_t,
        t_60 as t,
        parse_12 as parse,
        toBuffer_12 as toBuffer,
        Action_2 as Action
    }
}

export declare namespace TilePaintPacket {
    export {
        t_61 as t,
        parse_13 as parse,
        toBuffer_13 as toBuffer
    }
}

export declare namespace TilePickingSyncPacket {
    export {
        t_62 as t
    }
}

export declare namespace TileSectionFramePacket {
    export {
        t_63 as t
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
        t_64 as t
    }
}

export declare namespace TileSquareSendPacket {
    export {
        frame_2 as frame,
        activeTile_2 as activeTile,
        liquid_3 as liquid,
        tile_2 as tile,
        t_65 as t,
        parseOk_2 as parseOk,
        parseError_2 as parseError,
        parse_14 as parse,
        toBufferOk_2 as toBufferOk,
        toBufferError_2 as toBufferError,
        toBuffer_14 as toBuffer
    }
}

export declare namespace TimeSetPacket {
    export {
        t_66 as t
    }
}

declare const toBuffer: (_1: t_7) => Buffer;

declare const toBuffer_10: (_1: t_41) => Buffer;

declare const toBuffer_11: (_1: t_43) => Buffer;

declare const toBuffer_12: (_1: t_60) => Buffer;

declare const toBuffer_13: (_1: t_61) => Buffer;

declare type toBuffer_14 = toBufferOk_2 | toBufferError_2;

declare const toBuffer_14: (_1: t_65) => toBuffer_14;

declare const toBuffer_15: (_1: t_70) => Buffer;

declare function toBuffer_16(self: t_77): Buffer;

declare type toBuffer_17 = toBufferOk_3 | toBufferError_3;

declare const toBuffer_17: (_1: t_78) => toBuffer_17;

declare type toBuffer_18 = toBufferOk_4 | toBufferError_4;

declare const toBuffer_18: (_1: t_79) => toBuffer_18;

declare const toBuffer_19: (_1: t_80) => Buffer;

declare const toBuffer_2: (_1: t_9) => Buffer;

declare function toBuffer_20(self: t_81): Buffer;

declare const toBuffer_21: (_1: t_82) => Buffer;

declare const toBuffer_22: (_1: t_83) => Buffer;

declare type toBuffer_23 = toBufferOk_5 | toBufferError_5;

declare const toBuffer_23: (_1: t_84) => toBuffer_23;

declare const toBuffer_24: (_1: t_85) => Buffer;

declare function toBuffer_25(data: WorldInfo): toBuffer_25;

declare type toBuffer_25 = toBufferOk_6 | toBufferError_6;

declare function toBuffer_26(self: t_86): Buffer;

declare type toBuffer_27 = toBufferOk_7 | toBufferError_7;

declare const toBuffer_27: (_1: t_87) => toBuffer_27;

declare function toBuffer_28(self: t_88): Buffer;

declare function toBuffer_3(self: t_18): Buffer;

declare const toBuffer_4: (_1: t_19) => Buffer;

declare function toBuffer_5(data: NetModuleLoad): toBuffer_5;

declare type toBuffer_5 = toBufferOk | toBufferError;

declare const toBuffer_6: (_1: t_31) => Buffer;

declare const toBuffer_7: (_1: t_34) => Buffer;

declare const toBuffer_8: (_1: t_35) => Buffer;

declare const toBuffer_9: (_1: t_38) => Buffer;

declare type toBufferError = { TAG: "Error"; _0: PackError };

declare type toBufferError_2 = { TAG: "Error"; _0: PackError };

declare type toBufferError_3 = { TAG: "Error"; _0: PackError };

declare type toBufferError_4 = { TAG: "Error"; _0: PackError };

declare type toBufferError_5 = { TAG: "Error"; _0: PackError };

declare type toBufferError_6 = { TAG: "Error"; _0: PackError };

declare type toBufferError_7 = { TAG: "Error"; _0: PackError };

declare type toBufferOk = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_2 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_3 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_4 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_5 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_6 = { TAG: "Ok"; _0: Buffer };

declare type toBufferOk_7 = { TAG: "Ok"; _0: Buffer };

declare function toByte(t: t_75): number;

declare function toString_2(data: CreativePower): string;

declare type TrackedProjectileReference_t = { readonly expectedIdentity: number; readonly expectedType: number };

export declare namespace TravellingMerchantInventoryPacket {
    export {
        t_67 as t
    }
}

export declare namespace TreeGrowFxPacket {
    export {
        t_68 as t
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
        t_69 as t,
        parse_15 as parse
    }
}

declare type UpdateType_t = 
"RealIpAddress"
| "GamemodesJoinMode"
| "SwitchServer"
| "SwitchServerManual";

export declare namespace WallPaintPacket {
    export {
        t_70 as t,
        parse_16 as parse,
        toBuffer_15 as toBuffer
    }
}

export declare namespace WeaponsRackTryPlacingPacket {
    export {
        t_71 as t
    }
}

export declare namespace WiredCannonShotPacket {
    export {
        t_72 as t
    }
}

export declare namespace WorldDataRequestPacket {
    export {
        t_73 as t
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
        parse_26 as parse,
        toBuffer_25 as toBuffer,
        eventInfo,
        WorldInfo,
        parseOk_6 as parseOk,
        parseError_6 as parseError,
        toBufferOk_6 as toBufferOk,
        toBufferError_6 as toBufferError
    }
}

export declare namespace ZonesPacket {
    export {
        t_74 as t
    }
}

export { }
