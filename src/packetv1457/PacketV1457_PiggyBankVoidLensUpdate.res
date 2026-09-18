module TrackedProjectileReference = {
  @genType
  type t = {
    projectileKey: ProjectileKey.t,
    projectileType: int,
  }
}

@genType
type t = {
  playerId: int,
  piggyBankProj: TrackedProjectileReference.t,
  voidLensChest: TrackedProjectileReference.t,
}

module Decode = {
  let {readByte, readInt16, readInt32} = module(ErrorAwarePacketReader)

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(piggyBankProjectileKey) = reader->readInt32("piggyBankProjectileKey")
    let? Ok(piggyBankProjectileType) = reader->readInt16("piggyBankProjectileType")
    let? Ok(voidLensProjectileKey) = reader->readInt32("voidLensProjectileKey")
    let? Ok(voidLensProjectileType) = reader->readInt16("voidLensProjectileType")

    Ok({
      playerId,
      piggyBankProj: {
        projectileKey: ProjectileKey.fromInt(piggyBankProjectileKey),
        projectileType: piggyBankProjectileType,
      },
      voidLensChest: {
        projectileKey: ProjectileKey.fromInt(voidLensProjectileKey),
        projectileType: voidLensProjectileType,
      },
    })
  }
}

module Encode = {
  let {packByte, packInt16, packInt32, setType, data} = module(ErrorAwarePacketWriter)

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.PiggyBankVoidLensUpdate->PacketTypeV1457.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt32(self.piggyBankProj.projectileKey->ProjectileKey.toInt, "piggyBankProjectileKey")
    ->packInt16(self.piggyBankProj.projectileType, "piggyBankProjectileType")
    ->packInt32(self.voidLensChest.projectileKey->ProjectileKey.toInt, "voidLensProjectileKey")
    ->packInt16(self.voidLensChest.projectileType, "voidLensProjectileType")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
