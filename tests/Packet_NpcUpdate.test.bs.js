// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Zora = require("@dusty-phillips/rescript-zora/src/Zora.bs.js");
var Zora$1 = require("zora");
var Packet_NpcUpdate$TerrariaPacket = require("../src/packet/Packet_NpcUpdate.bs.js");

var npcUpdate = {
  npcSlotId: 1,
  npcTypeId: 2,
  x: 3.0,
  y: 4.0,
  vx: 5.0,
  vy: 6.0,
  target: 7,
  directionX: false,
  directionY: true,
  ai: [
    undefined,
    0.0,
    1.0,
    2.0
  ],
  spriteDirection: false,
  life: {
    TAG: "Byte",
    _0: 4
  },
  releaseOwner: undefined,
  playerCountScale: undefined,
  strengthMultiplier: undefined,
  spawnedFromStatue: false
};

Zora$1.test("Should be the same going after encode/decode", (function (t) {
        var rawNpcUpdate = Packet_NpcUpdate$TerrariaPacket.toBuffer(npcUpdate);
        var newNpcUpdate = Packet_NpcUpdate$TerrariaPacket.parse(rawNpcUpdate);
        Zora.optionSome(t, newNpcUpdate, (function (t, newNpcUpdate) {
                t.equal(npcUpdate, newNpcUpdate, "hi");
              }));
      }));

var NpcUpdate;

exports.NpcUpdate = NpcUpdate;
exports.npcUpdate = npcUpdate;
/*  Not a pure module */