type commandId = string
type message = string
type playerId = int

@genType
type liquidChange = {
  x: int,
  y: int,
  amount: int,
  liquidType: int,
}

@genType
type liquid = {changes: array<liquidChange>}

@genType
type position = {
  x: float,
  y: float,
}

@genType
type ambience = {
  playerId: int,
  seed: int,
  skyEntityType: int,
}

type killCount = int
@genType
type bestiaryUnlockType =
  | Kill(killCount)
  | Sight
  | Chat

@genType
type bestiary = {
  unlockType: bestiaryUnlockType,
  npcId: int,
}

@genType
type creativeUnlock = {
  itemId: int,
  researchedCount: int,
}

@genType
type unlockReport = {
  itemId: int,
  researchedCount: int,
}

@genType
type pylonAction =
  | Added
  | Removed
  | RequestTeleport

@genType
type teleportPylon = {
  pylonAction: pylonAction,
  x: int,
  y: int,
  pylonType: int,
}

@genType
type particle = {
  particleType: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  shaderIndex: int,
  invokedByPlayer: int,
}

@genType
type powerLevel =
  | LockedForEveryone
  | CanBeChangedByHostAlone
  | CanBeChangedByEveryone

@genType
type creativePowerPermission = {
  powerType: int,
  powerLevel: powerLevel,
}

@genType
type t =
  | Liquid(liquid)
  | ClientText(commandId, message)
  | ServerText(playerId, PacketFactory.NetworkText.t, PacketFactory.Color.t)
  | Ping(position)
  | Ambience(ambience)
  | Bestiary(bestiary)
  | CreativeUnlocks(creativeUnlock)
  | CreativePower(CreativePowers.t)
  | CreativeUnlocksPlayerReport(unlockReport)
  | TeleportPylon(teleportPylon)
  | Particles(particle)
  | CreativePowerPermissions(creativePowerPermission)

module NetModuleType: {
  @genType
  type t =
    | Liquid
    | Text
    | Ping
    | Ambience
    | Bestiary
    | CreativeUnlocks
    | CreativePower
    | CreativeUnlocksPlayerReport
    | TeleportPylon
    | Particles
    | CreativePowerPermissions

  @genType
  let fromInt: int => option<t>
  @genType
  let toInt: t => int
}
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
@genType
let parse: (NodeJs.Buffer.t, ~fromServer: bool) => result<t, ErrorAwarePacketReader.readError>
