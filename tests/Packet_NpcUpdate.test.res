module NpcUpdate = Packet.NpcUpdate

open Zora

let npcUpdate: NpcUpdate.t = {
  npcSlotId: 1,
  npcTypeId: 2,
  x: 3.0,
  y: 4.0,
  vx: 5.0,
  vy: 6.0,
  target: 7,
  directionX: false,
  directionY: true,
  ai: (None, Some(0.0), Some(1.0), Some(2.0)),
  spriteDirection: false,
  life: Byte(4),
  releaseOwner: None,
  playerCountScale: None,
  strengthMultiplier: None,
  spawnedFromStatue: false,
}

zoraBlock("Should be the same going after encode/decode", t => {
  let rawNpcUpdate = NpcUpdate.toBuffer(npcUpdate)
  let newNpcUpdate = NpcUpdate.parse(rawNpcUpdate)
  t->optionSome(newNpcUpdate, (t, newNpcUpdate) => {
    t->equal(npcUpdate, newNpcUpdate, "hi")
  })
})
