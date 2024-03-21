type coinLuck = {
  position: Point.t<float>,
  amount: int,
}

type t =
  | ShimmerEffect(float, float)
  | CoinLuck(coinLuck)
  | NewShimmerEffect(int)

module Decode = {
  let {readByte, readInt32, readSingle} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    switch reader->readByte {
    | 0 => Some(ShimmerEffect(reader->readSingle, reader->readSingle))
    | 1 =>
      Some(
        CoinLuck({
          position: {x: reader->readSingle, y: reader->readSingle},
          amount: reader->readInt32,
        }),
      )
    | 2 => Some(NewShimmerEffect(reader->readInt32))
    | _ => None
    }
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let writer = Writer.make()->setType(PacketType.ShimmerEffectOrCoinLuck->PacketType.toInt)

    switch self {
    | ShimmerEffect(x, y) =>
      writer
      ->packByte(0)
      ->packSingle(x)
      ->packSingle(y)
    | CoinLuck({position, amount}) =>
      writer
      ->packByte(1)
      ->packSingle(position.x)
      ->packSingle(position.y)
      ->packInt32(amount)
    | NewShimmerEffect(id) =>
      writer
      ->packByte(2)
      ->packInt32(id)
    }->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
