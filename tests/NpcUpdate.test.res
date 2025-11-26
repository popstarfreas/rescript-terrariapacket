open Zora

zoraBlock("should correctly parse and serialise NpcUpdate", t => {
  let data: Packet_NpcUpdate.t = {
    npcSlotId: 0,
    npcTypeId: 0,
    x: 0.,
    y: 0.,
    vx: 0.,
    vy: 0.,
    target: 0,
    directionX: false,
    directionY: false,
    ai: (None, None, None, None),
    spriteDirection: false,
    life: Byte(0),
    releaseOwner: None,
    playerCountScale: None,
    strengthMultiplier: None,
    spawnedFromStatue: false,
  }

  let result = Packet_NpcUpdate.toBuffer(data)

  if result->Result.isError {
    t->fail(~msg="Failed to serialise NpcUpdate")
  }

  let result = result->Result.getOrThrow->Packet_NpcUpdate.parse
  if result->Option.isNone {
    t->fail(~msg="Failed to serialise NpcUpdate")
  }

  let data2 = result->Option.getOrThrow
  t->equal(data, data2)
})
