/* TypeScript file generated from Packet_TileSectionSend.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type frame = { readonly x: number; readonly y: number };

export type activeTile = { readonly tileType: number; readonly frame: (undefined | frame) };

export type liquid = { readonly liquidValue: number; readonly liquidType: number };

export type tile = {
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
  readonly inActive: boolean
};

export type tileCache = {
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
  inActive: boolean
};

export type Chest_t = {
  readonly id: number; 
  readonly x: number; 
  readonly y: number; 
  readonly name: string
};

export type Sign_t = {
  readonly id: number; 
  readonly x: number; 
  readonly y: number; 
  readonly name: string
};

export type Entity_displayItem = {
  readonly netId: number; 
  readonly prefix: number; 
  readonly stack: number
};

export type Entity_displayDoll = { readonly items: Array<(undefined | Entity_displayItem)>; readonly dyes: Array<(undefined | Entity_displayItem)> };

export type Entity_foodPlatter = Entity_displayItem;

export type Entity_hatRack = { readonly items: Array<(undefined | Entity_displayItem)>; readonly dyes: Array<(undefined | Entity_displayItem)> };

export type Entity_itemFrame = Entity_displayItem;

export type Entity_logicSensor = { readonly checkType: number; readonly on: boolean };

export type Entity_teleportationPylon = void;

export type Entity_trainingDummy = { readonly npcSlotId: number };

export type Entity_weaponsRack = Entity_displayItem;

export type Entity_kind = 
    { TAG: "DisplayDoll"; _0: Entity_displayDoll }
  | { TAG: "FoodPlatter"; _0: Entity_foodPlatter }
  | { TAG: "HatRack"; _0: Entity_hatRack }
  | { TAG: "ItemFrame"; _0: Entity_itemFrame }
  | { TAG: "LogicSensor"; _0: Entity_logicSensor }
  | { TAG: "TeleportationPylon"; _0: Entity_teleportationPylon }
  | { TAG: "TrainingDummy"; _0: Entity_trainingDummy }
  | { TAG: "WeaponsRack"; _0: Entity_weaponsRack };

export type Entity_t = {
  readonly entityType: number; 
  readonly x: number; 
  readonly y: number; 
  readonly entityKind: Entity_kind
};

export type t = {
  readonly height: number; 
  readonly width: number; 
  readonly tileX: number; 
  readonly tileY: number; 
  readonly tiles: Array<tile[]>; 
  readonly chests: Chest_t[]; 
  readonly signs: Sign_t[]; 
  readonly entities: Entity_t[]
};
