type target = Npc(int) | Player(int) | Projectile(ProjectileKey.t) | Unanchored
type anchor = Remove | Anchor({target: target, time: int, emote: int})
type t = {id: int, anchor: anchor}

let parse = (payload): result<t, ErrorAwarePacketReader.readError> => {
  open ErrorAwarePacketReader
  let reader = PacketFactory.PacketReader.make(payload)
  let? Ok(id) = reader->readInt32("id")
  let? Ok(kind) = reader->readByte("anchorType")
  if kind == 255 {
    Ok({id, anchor: Remove})
  } else {
    let? Ok(target) = switch kind {
    | 0 => reader->readUInt16("npc")->Result.map(n => Npc(n))
    | 1 => reader->readByte("player")->Result.map(n => Player(n))
    | 2 => reader->readInt32("projectileKey")->Result.map(n => Projectile(ProjectileKey.fromInt(n)))
    | _ => Ok(Unanchored)
    }
    let? Ok(time) = reader->readUInt16("time")
    let? Ok(emote) = reader->readByte("emote")
    Ok({id, anchor: Anchor({target, time, emote})})
  }
}

let toBuffer = (self: t) => {
  open ErrorAwarePacketWriter
  let writer = make()->setType(PacketType.EmoteBubble->PacketType.toInt)->packInt32(self.id, "id")
  switch self.anchor {
  | Remove => writer->packByte(255, "anchorType")->data
  | Anchor({target, time, emote}) =>
    let writer = switch target {
    | Npc(n) => writer->packByte(0, "anchorType")->packUInt16(n, "npc")
    | Player(n) => writer->packByte(1, "anchorType")->packByte(n, "player")
    | Projectile(key) =>
      writer->packByte(2, "anchorType")->packInt32(ProjectileKey.toInt(key), "projectileKey")
    | Unanchored => writer->packByte(3, "anchorType")
    }
    writer->packUInt16(time, "time")->packByte(emote, "emote")->data
  }
}
