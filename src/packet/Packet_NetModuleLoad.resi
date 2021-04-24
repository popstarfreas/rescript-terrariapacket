type commandId = string
type message = string
type playerId = int

type liquidChange = {
  x: int,
  y: int,
  amount: int,
  liquidType: int,
}

type liquid = {changes: array<liquidChange>}

type position = {
  x: float,
  y: float,
}

type ambience = {
  playerId: int,
  seed: int,
  skyEntityType: int,
}

type killCount = int
type bestiaryUnlockType =
  | Kill(killCount)
  | Sight
  | Chat

type bestiary = {
  unlockType: bestiaryUnlockType,
  npcId: int,
}

type creativeUnlock = {
  itemId: int,
  researchedCount: int,
}

type creativePower = {powerType: int}

type unlockReport = {
  itemId: int,
  researchedCount: int,
}

type pylonAction =
  | Added
  | Removed
  | RequestTeleport

type teleportPylon = {
  pylonAction: pylonAction,
  x: int,
  y: int,
  pylonType: int,
}

type particle = {
  particleType: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  shaderIndex: int,
  invokedByPlayer: int,
}

type powerLevel =
  | LockedForEveryone
  | CanBeChangedByHostAlone
  | CanBeChangedByEveryone

type creativePowerPermission = {
  powerType: int,
  powerLevel: powerLevel,
}

type t =
  | Liquid(liquid)
  | ClientText(commandId, message)
  | ServerText(playerId, PacketFactory.NetworkText.t, PacketFactory.Color.t)
  | Ping(position)
  | Ambience(ambience)
  | Bestiary(bestiary)
  | CreativeUnlocks(creativeUnlock)
  | CreativePower(creativePower)
  | CreativeUnlocksPlayerReport(unlockReport)
  | TeleportPylon(teleportPylon)
  | Particles(particle)
  | CreativePowerPermissions(creativePowerPermission)

module NetModuleType: {
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

  let fromInt: int => option<t>
  let toInt: t => int
}
let toBuffer: t => NodeJs.Buffer.t
let parse: (NodeJs.Buffer.t, bool) => option<t>
