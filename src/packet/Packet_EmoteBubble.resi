type target = Npc(int) | Player(int) | Projectile(ProjectileKey.t) | Unanchored
type anchor = Remove | Anchor({target: target, time: int, emote: int})
type t = {id: int, anchor: anchor}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
