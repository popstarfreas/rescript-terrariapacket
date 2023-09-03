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
  let {readInt32, readNetworkText, readByte} = module(PacketFactory.PacketReader)

  let hasHideStatusTextPercent = flags => {
    flags->BitFlags.flag1
  }

  let hasStatusTextHasShadows = flags => {
    flags->BitFlags.flag2
  }

  let hasRunCheckBytes = flags => {
    flags->BitFlags.flag3
  }

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let max = reader->readInt32
    let text = reader->readNetworkText
    let flags = BitFlags.fromByte(reader->readByte)
    Some({
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
  let {packInt32, packNetworkText, packByte, setType, data} = module(
    PacketFactory.ManagedPacketWriter
  )

  let flagsToByte = (flags: flags) => {
    let byte = ref(0)
    byte := byte.contents->lor(flags.hideStatusTextPercent ? 1 : 0)
    byte := byte.contents->lor(flags.statusTextHasShadows ? 2 : 0)
    byte := byte.contents->lor(flags.runCheckBytes ? 4 : 0)
    byte.contents
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.Status->PacketType.toInt)
    ->packInt32(self.max)
    ->packNetworkText(self.text)
    ->packByte(self.flags->flagsToByte)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
