type color = {
  r: int,
  g: int,
  b: int,
  a: int,
}

@genType
type t = {
  itemId: int,
  color: option<color>,
  damage: option<int>,
  knockback: option<float>,
  useAnimation: option<int>,
  useTime: option<int>,
  shoot: option<int>,
  shootSpeed: option<float>,
  width: option<int>,
  height: option<int>,
  scale: option<float>,
  ammo: option<int>,
  useAmmo: option<int>,
  notAmmo: option<bool>,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

