// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Zora = require("zora");
var Packet_NetModuleLoad$TerrariaPacket = require("../src/packet/Packet_NetModuleLoad.bs.js");

Zora.test("should correctly parse and serialise FarPlacementRangePower", (function (t) {
        var hex = "28005206000b0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f";
        var buffer = Buffer.from(hex, "hex");
        var p = Packet_NetModuleLoad$TerrariaPacket.parse(buffer, true);
        if (p !== undefined) {
          if (p.TAG === "CreativePower") {
            var match = p._0;
            if (typeof match !== "object" || match.TAG !== "FarPlacementRangePower") {
              t.fail("Failed to parse packet");
            } else {
              var values = match._0;
              if (values.TAG === "Everyone") {
                t.ok(values._0.every(function (v) {
                          return v;
                        }));
              } else {
                t.fail("Failed to parse packet");
              }
            }
          } else {
            t.fail("Failed to parse packet");
          }
          var hexOutput = Packet_NetModuleLoad$TerrariaPacket.toBuffer(p).toString("hex");
          t.equal(hex, hexOutput);
          return ;
        }
        t.fail("Failed to parse packet");
      }));

Zora.test("should correctly parse and serialise GodmodePower", (function (t) {
        var hex = "28005206000500000100000000000000000000000000000000000000000000000000000000000000";
        var buffer = Buffer.from(hex, "hex");
        var p = Packet_NetModuleLoad$TerrariaPacket.parse(buffer, true);
        if (p !== undefined) {
          if (p.TAG === "CreativePower") {
            var match = p._0;
            if (typeof match !== "object" || match.TAG !== "GodmodePower") {
              t.fail("Failed to parse packet");
            } else {
              var values = match._0;
              if (values.TAG === "Everyone") {
                var values$1 = values._0;
                t.ok(values$1.slice(1).every(function (v) {
                          return !v;
                        }));
                t.equal(values$1[0], true);
              } else {
                t.fail("Failed to parse packet");
              }
            }
          } else {
            t.fail("Failed to parse packet");
          }
          var hexOutput = Packet_NetModuleLoad$TerrariaPacket.toBuffer(p).toString("hex");
          t.equal(hex, hexOutput);
          return ;
        }
        t.fail("Failed to parse packet");
      }));

/*  Not a pure module */
