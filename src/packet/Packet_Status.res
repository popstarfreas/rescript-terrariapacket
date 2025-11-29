type flags = {
  hideStatusTextPercent: bool,
  statusTextHasShadows: bool,
  runCheckBytes: bool,
}

type t = {
  max: int,
  text: PacketFactory.NetworkText.t,
  flags: flags,
}

module Decode = {
  let {readInt32, readNetworkText, readByte} = module(ErrorAwarePacketReader)

  let hasHideStatusTextPercent = flags => {
    flags->BitFlags.flag1
  }

  let hasStatusTextHasShadows = flags => {
    flags->BitFlags.flag2
  }

  let hasRunCheckBytes = flags => {
    flags->BitFlags.flag3
  }

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(max) = reader->readInt32("max")
    let? Ok(text) = reader->readNetworkText("text")
    let? Ok(flagsRaw) = reader->readByte("flags")
    let flags = BitFlags.fromByte(flagsRaw)
    Ok({
      max,
      text,
      flags: {
        hideStatusTextPercent: flags->hasHideStatusTextPercent,
        statusTextHasShadows: flags->hasStatusTextHasShadows,
        runCheckBytes: flags->hasRunCheckBytes,
      },
    })
  }
}

module Encode = {
  let {packInt32, packNetworkText, packByte, setType, data} = module(ErrorAwarePacketWriter)

  let flagsToByte = (flags: flags) => {
    let byte = ref(0)
    byte := byte.contents ||| (flags.hideStatusTextPercent ? 1 : 0)
    byte := byte.contents ||| (flags.statusTextHasShadows ? 2 : 0)
    byte := byte.contents ||| (flags.runCheckBytes ? 4 : 0)
    byte.contents
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.Status->PacketType.toInt)
    ->packInt32(self.max, "max")
    ->packNetworkText(self.text, "text")
    ->packByte(self.flags->flagsToByte, "flags")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
