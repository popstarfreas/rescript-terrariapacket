type frame = {
  x: int,
  y: int,
}

type activeTile = {
  tileType: int,
  frame: option<frame>,
}

type liquid = {
  liquidValue: int,
  liquidType: int,
}

type tile = {
  activeTile: option<activeTile>,
  color: option<int>,
  wallColor: option<int>,
  wall: option<int>,
  liquid: option<int>,
  lava: bool,
  honey: bool,
  shimmer: bool,
  wire: bool,
  wire2: bool,
  wire3: bool,
  wire4: bool,
  halfBrick: bool,
  slope: option<int>,
  actuator: bool,
  inActive: bool,
  invisibleBlock: bool,
  invisibleWall: bool,
  fullbrightBlock: bool,
  fullbrightWall: bool,
  coatHeader: int,
}

type tileCache = {
  mutable activeTile: option<activeTile>,
  mutable color: option<int>,
  mutable wallColor: option<int>,
  mutable wall: option<int>,
  mutable liquid: option<int>,
  mutable lava: bool,
  mutable honey: bool,
  mutable shimmer: bool,
  mutable wire: bool,
  mutable wire2: bool,
  mutable wire3: bool,
  mutable wire4: bool,
  mutable halfBrick: bool,
  mutable slope: option<int>,
  mutable actuator: bool,
  mutable inActive: bool,
  mutable invisibleBlock: bool,
  mutable invisibleWall: bool,
  mutable fullbrightBlock: bool,
  mutable fullbrightWall: bool,
  mutable coatHeader: int,
}

module Chest: {
  type t = {
    id: int,
    x: int,
    y: int,
    name: string,
  }

  let parse: ErrorAwareBufferReader.t => result<t, ErrorAwarePacketReader.readError>
  let pack: (ErrorAwareBufferWriter.t, t) => ErrorAwareBufferWriter.t
}

module Sign: {
  type t = {
    id: int,
    x: int,
    y: int,
    name: string,
  }

  let parse: ErrorAwareBufferReader.t => result<t, ErrorAwarePacketReader.readError>
  let pack: (ErrorAwareBufferWriter.t, t) => ErrorAwareBufferWriter.t
}

module Entity: {
  type displayItem = {
    netId: int,
    prefix: int,
    stack: int,
  }

  @genType
  type displayDoll = {
    items: array<option<displayItem>>,
    dyes: array<option<displayItem>>,
  }

  @genType
  type foodPlatter = displayItem
  @genType
  type hatRack = {
    items: array<option<displayItem>>,
    dyes: array<option<displayItem>>,
  }

  @genType
  type itemFrame = displayItem
  @genType
  type logicSensor = {
    checkType: int,
    on: bool,
  }
  @genType
  type teleportationPylon = unit
  @genType
  type trainingDummy = {npcSlotId: int}
  @genType
  type weaponsRack = displayItem
  @genType
  type deadCellsDisplayJar = displayItem
  @genType
  type leashedEntityAnchor = {itemType: int}
  @genType
  type kiteAnchor = leashedEntityAnchor
  @genType
  type critterAnchor = leashedEntityAnchor

  @genType
  type kind =
    | DisplayDoll(displayDoll)
    | FoodPlatter(foodPlatter)
    | HatRack(hatRack)
    | ItemFrame(itemFrame)
    | LogicSensor(logicSensor)
    | TeleportationPylon(teleportationPylon)
    | TrainingDummy(trainingDummy)
    | WeaponsRack(weaponsRack)
    | DeadCellsDisplayJar(deadCellsDisplayJar)
    | KiteAnchor(kiteAnchor)
    | CritterAnchor(critterAnchor)

  @genType
  type t = {
    entityType: int,
    id: int,
    x: int,
    y: int,
    entityKind: kind,
  }

  let parse: ErrorAwareBufferReader.t => result<t, ErrorAwarePacketReader.readError>
  let pack: (ErrorAwareBufferWriter.t, t) => ErrorAwareBufferWriter.t
}

@genType
type t = {
  height: int,
  width: int,
  tileX: int,
  tileY: int,
  tiles: array<array<tile>>,
  chests: array<Chest.t>,
  signs: array<Sign.t>,
  entities: array<Entity.t>,
}

let defaultTileCache: unit => tileCache
let cacheToTile: tileCache => tile

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
