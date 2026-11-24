import { test } from "zora";
import { Packet, PacketV1458, Parser, ParserV1458, ParserConverterV1458 as bridge } from "../dist/Export.js";

function frame(id, payload = "") {
  const data = Buffer.from("000000" + payload, "hex");
  data.writeUInt16LE(data.length);
  data[2] = id;
  return data;
}

function unwrap(result) {
  if (result.TAG !== "Ok") throw new Error(JSON.stringify(result));
  return result._0;
}

function checkRoundTrip(t, data, fromServer) {
  const packet = unwrap(Parser.parse(data, fromServer));
  t.equal(unwrap(Packet.toBuffer(packet, fromServer)), data);
  t.equal(unwrap(Parser.parseLazy(data, fromServer))._0.VAL()._0, packet._0);
  return packet._0;
}

function checkConversion(t, legacy, current, fromServer, reverse = legacy) {
  const old = unwrap(ParserV1458.parse(legacy, fromServer));
  t.equal(unwrap(PacketV1458.toBuffer(old, fromServer)), legacy);
  const upgraded = unwrap(bridge.convertToLatestIfNeeded(legacy, fromServer));
  t.equal(unwrap(Packet.toBuffer(upgraded._0, fromServer)), current);
  const downgraded = unwrap(bridge.convertFromLatestIfNeeded(current, fromServer));
  t.equal(unwrap(PacketV1458.toBuffer(downgraded._0, fromServer)), reverse);
}

test("WorldInfo adds the no-spiders flag without shifting dungeon or extra spawn points", t => {
  const legacy = Buffer.from("b40007483f00000000d0206009b7100e037c0782072a09214a054c6f6262790221123b408994804ab40674ee13ee1d0501000000160100000504090708000305020402050201030002cdcc4c3f411c08000050120000491b000004010403d90a0000de0b0000ed1900000207000500040403000404020402040001000000000e2d9841023d60f404000006000700a700a800a900ffffffffffff000000000000000000ae9d273e02ffffff7f007d00803412c7cf", "hex");
  const current = Buffer.from(legacy);
  current[137] |= 0x20;
  const world = checkRoundTrip(t, current, true);
  t.equal(world.noSpidersSeed, true);
  t.equal([world.dungeonX, world.dungeonY], [4660, -12345]);
  const down = unwrap(bridge.convertFromLatestIfNeeded(current, true));
  t.equal(unwrap(PacketV1458.toBuffer(down._0, true)), legacy);
  const up = unwrap(bridge.convertToLatestIfNeeded(legacy, true));
  t.equal(up._0._0.noSpidersSeed, false);
  t.equal(unwrap(Packet.toBuffer(up._0, true)), legacy);
});

test("protocol 329 animation and hurt flags translate in either direction", t => {
  for (const fromServer of [false, true]) {
    const old = frame(41, "030000003f0700");
    checkConversion(t, old, frame(41, "030000003f07000700"), fromServer);
    const current = frame(41, "030000003f07001800");
    t.equal(checkRoundTrip(t, current, fromServer).itemAnimationMax, 24);
    const down = unwrap(bridge.convertFromLatestIfNeeded(current, fromServer));
    t.equal(unwrap(PacketV1458.toBuffer(down._0, fromServer)), old);
    t.equal(Parser.parse(old, fromServer).TAG, "Error");
    // Extra death reason 19, PvP + crit, signed cooldown.
    checkConversion(t, frame(117, "03081317000203ff"), frame(117, "03081317000207ff"), fromServer);
    t.equal(checkRoundTrip(t, frame(117, "030017000200ff"), fromServer).dodgeable, false);
  }
});

test("dropped item overrides retain scale and ammo following removed sizes", t => {
  const legacy = frame(88, "0100802f200040000000c03f2a0001");
  const current = frame(88, "0100802c0000c03f2a0001");
  checkConversion(t, legacy, current, true, current);
  t.equal(checkRoundTrip(t, current, true).scale, 1.5);
});

test("emote anchors use the entity-specific widths", t => {
  for (const [oldPayload, newPayload] of [
    ["01000000ff", "01000000ff"],
    ["010000000070000a0002", "010000000070000a0002"],
    ["0100000001fe000a0002", "0100000001fe0a0002"],
  ]) {
    checkConversion(t, frame(91, oldPayload), frame(91, newPayload), true);
  }
  const oldHead = unwrap(bridge.convertToLatestIfNeeded(frame(91, "010000000001000a00ff0100"), true));
  t.equal(unwrap(Packet.toBuffer(oldHead._0, true)), frame(91, "010000000001000a0069"));
  t.equal(unwrap(bridge.convertToLatestIfNeeded(frame(91, "010000000201000a0002"), true)), "DiscardAsNotExists");
  checkRoundTrip(t, frame(91, "0100000002ffffffff0a0002"), true);
  checkRoundTrip(t, frame(91, "01000000030a0002"), true);
});

test("protocol 329 server discovery, platform identity and custom acknowledgements", t => {
  checkRoundTrip(t, frame(163), false);
  const fields = "611e000001770168d0200102000000100300";
  t.equal(checkRoundTrip(t, frame(163, fields + "00"), true).maxPlayers, 16);
  const endpoint = checkRoundTrip(t, frame(163, fields + "01093132372e302e302e31611e0000"), true);
  t.equal(endpoint.externalEndpoint, {address: "127.0.0.1", port: 7777});
  for (const fromServer of [true, false]) {
    const platform = checkRoundTrip(t, frame(164, "0705026964046e616d6501"), fromServer);
    t.equal(platform.platformName, "name");
    t.equal(checkRoundTrip(t, frame(164, "070602696400"), fromServer).isHost, false);
    t.equal(checkRoundTrip(t, frame(165, "ac02"), fromServer), 300);
    t.equal(checkRoundTrip(t, frame(165, "ffffffff0f"), fromServer), -1);
    for (const invalid of ["80", "ffffffff10"]) {
      t.equal(Parser.parse(frame(165, invalid), fromServer).TAG, "Error");
    }
    for (const id of [163, 164, 165]) {
      t.equal(unwrap(bridge.convertFromLatestIfNeeded(frame(id), fromServer)), "DiscardAsNotExists");
    }
  }
  t.equal(ParserV1458.parse(frame(165, "01"), false).TAG, "Error");
  t.equal(unwrap(bridge.convertToLatestIfNeeded(frame(162), true)), "PacketStructureIsSame");
});
