type frame = PacketV1449_TileSectionSend.frame

type activeTile = PacketV1449_TileSectionSend.activeTile

type liquid = PacketV1449_TileSectionSend.liquid
type tile = PacketV1449_TileSectionSend.tile

type tileCache = PacketV1449_TileSectionSend.tileCache

module Chest = PacketV1449_TileSectionSend.Chest

module Sign = PacketV1449_TileSectionSend.Sign

module Entity: {
  type displayItem = {
    netId: int,
    prefix: int,
    stack: int,
  }

  type displayDoll = {
    items: array<option<displayItem>>,
    dyes: array<option<displayItem>>,
    misc: array<option<displayItem>>,
    pose: int,
  }

  type foodPlatter = displayItem
  type hatRack = {
    items: array<option<displayItem>>,
    dyes: array<option<displayItem>>,
  }

  type itemFrame = displayItem
  type logicSensor = {
    checkType: int,
    on: bool,
  }
  type teleportationPylon = unit
  type trainingDummy = {npcSlotId: int}
  type weaponsRack = displayItem
  type deadCellsDisplayJar = displayItem
  type leashedEntityAnchor = {itemType: int}
  type kiteAnchor = leashedEntityAnchor
  type critterAnchor = leashedEntityAnchor

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

let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
