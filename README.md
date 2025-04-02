 # What is this library?
 This is a library that provides parsing/decoding for Terraria Packets for Rescript / Typescript / Javascript. Includes support for parsing/decoding indivudual packet types as well as parsing a buffer containing a packet yet to be parsed.

 Not all packets yet have implementations.

 It's currently powering two Dark Gaming projects:
 * Dimensions (public; proxy service for Terraria Servers)
 * TrueSSC (private; transaction-based inventory anti-cheat for SSC)

# Basic Usage
## Rescript
Once you have a buffer containing a packet you can parse it as such:
```rescript
let packet = TerrariaPacket.Parser.parseLazy(~buffer, ~fromServer=false)
```

The lazy parser is the default recommended parser for performance reasons (it will not parse any packets, especially large packets, unless you explicitly need it to).

Note that fromServer should be set to true if you are parsing packets sent by the server. This is important as certain packets are parsed differently.

Once you have the packet, you can match on it like the below:

```rescript
module LazyPacket = TerrariaPacket.Packet.LazyPacket

switch packet {
  | Some(LazyPacket.ItemDropUpdate(lazy Some(itemDropUpdate))) => Console.log(itemDropUpdate)
  | Some(LazyPacket.ItemOwner(lazy None)) => Console.log("Failed to parse item drop update")
}
```

To parse a specific packet:
```rescript
module ClientUuid = TerrariaPacket.Packet.ClientUuid

let packet = .... // this should be a buffer containing a packet, including the length and packet type bytes
let clientUuid = ClientUuid.parse(packet)
switch clientUuid {
  | Some(clientUuid} => Console.log(`UUID parsed: ${clientUuid.uuid}`)
  | None => Console.log("Failed to parse UUID packet")
}
```

## Typescript
To parse a specific packet:
```typescript
import * as ClientUuid from "terraria-packet/src/packet/Packet_ClientUuid.gen";

const packet = .... // this should be a buffer containing a packet, including the length and packet type bytes
const clientUuid = ClientUuid.parse(packet);
if (typeof clientUuid === 'undefined') {
  console.log("Failed to parse UUID packet");
} else {
  console.log(`UUID parsed: ${clientUuid.uuid}`);
}
```

# Contributing
PRs are accepted. Note that the typescript/javascript files are all generated output. The original source is in [Rescript](https://rescript-lang.org/).
