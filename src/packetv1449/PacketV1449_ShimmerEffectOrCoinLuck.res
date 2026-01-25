@genType
type coinLuck = {
  position: Point.t<float>,
  amount: int,
}

@genType
type t =
  | ShimmerEffect(float, float)
  | CoinLuck(coinLuck)
  | NewShimmerEffect(int)

module Decode = {
  let {readByte, readInt32, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(kind) = reader->readByte("kind")
    switch kind {
    | 0 =>
      let? Ok(x) = reader->readSingle("shimmerX")
      let? Ok(y) = reader->readSingle("shimmerY")
      Ok(ShimmerEffect(x, y))
    | 1 =>
      let? Ok(posX) = reader->readSingle("coinLuckX")
      let? Ok(posY) = reader->readSingle("coinLuckY")
      let? Ok(amount) = reader->readInt32("coinLuckAmount")
      Ok(
        CoinLuck({
          position: {x: posX, y: posY},
          amount,
        }),
      )
    | 2 =>
      let? Ok(id) = reader->readInt32("newShimmerEffectId")
      Ok(NewShimmerEffect(id))
    | _ =>
      Error({
        context: "Packet_ShimmerEffectOrCoinLuck.parse",
        error: JsError.make("Unknown shimmer effect kind")->JsError.toJsExn,
      })
    }
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packByte, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let writer = Writer.make()->setType(PacketType.ShimmerEffectOrCoinLuck->PacketType.toInt)

    switch self {
    | ShimmerEffect(x, y) =>
      writer
      ->packByte(0, "kind")
      ->packSingle(x, "shimmerX")
      ->packSingle(y, "shimmerY")
    | CoinLuck({position, amount}) =>
      writer
      ->packByte(1, "kind")
      ->packSingle(position.x, "coinLuckX")
      ->packSingle(position.y, "coinLuckY")
      ->packInt32(amount, "coinLuckAmount")
    | NewShimmerEffect(id) =>
      writer
      ->packByte(2, "kind")
      ->packInt32(id, "newShimmerEffectId")
    }->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
