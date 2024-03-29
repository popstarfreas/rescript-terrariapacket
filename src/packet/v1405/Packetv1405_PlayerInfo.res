module Color = PacketFactory.Color

type difficulty = Packet_PlayerInfo.difficulty
type mode = Packet_PlayerInfo.mode
type t = {
  playerId: int,
  skinVariant: int,
  hair: int,
  name: string,
  hairDye: int,
  hideVisuals: int,
  hideVisuals2: int,
  hideMisc: int,
  hairColor: Color.t,
  skinColor: Color.t,
  eyeColor: Color.t,
  shirtColor: Color.t,
  underShirtColor: Color.t,
  pantsColor: Color.t,
  shoeColor: Color.t,
  difficulty: difficulty,
  mode: mode,
  extraAccessory: bool,
  usingBiomeTorches: bool,
  unlockedBiomeTorches: bool,
  happyFunTorchTime: bool,
}

module Decode = {
  let {readByte, readColor, readString} = module(PacketFactory.PacketReader)
  let getDifficulty = (difficultyFlags: BitFlags.t): difficulty => {
    if difficultyFlags->BitFlags.flag2 {
      Hardcore
    } else if difficultyFlags->BitFlags.flag1 {
      Mediumcore
    } else {
      Softcore
    }
  }

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let skinVariant = reader->readByte
    let hair = reader->readByte
    let name = reader->readString
    let hairDye = reader->readByte
    let hideVisuals = reader->readByte
    let hideVisuals2 = reader->readByte
    let hideMisc = reader->readByte
    let hairColor = reader->readColor
    let skinColor = reader->readColor
    let eyeColor = reader->readColor
    let shirtColor = reader->readColor
    let underShirtColor = reader->readColor
    let pantsColor = reader->readColor
    let shoeColor = reader->readColor
    let difficultyFlags = BitFlags.fromByte(reader->readByte)
    let torchFlags = BitFlags.fromByte(reader->readByte)

    let difficulty = difficultyFlags->getDifficulty
    let extraAccessory = difficultyFlags->BitFlags.flag3
    let mode = if difficultyFlags->BitFlags.flag4 {
      Packet_PlayerInfo.Journey
    } else {
      Classic
    }
    let usingBiomeTorches = torchFlags->BitFlags.flag1
    let happyFunTorchTime = torchFlags->BitFlags.flag2
    let unlockedBiomeTorches = torchFlags->BitFlags.flag3

    Some({
      playerId,
      skinVariant,
      hair,
      name,
      hairDye,
      hideVisuals,
      hideVisuals2,
      hideMisc,
      hairColor,
      skinColor,
      eyeColor,
      shirtColor,
      underShirtColor,
      pantsColor,
      shoeColor,
      difficulty,
      mode,
      extraAccessory,
      usingBiomeTorches,
      unlockedBiomeTorches,
      happyFunTorchTime,
    })
  }
}

module Encode = {
  let {packByte, packString, packColor, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let packDifficultyFlags = (writer, difficulty: difficulty, extraAccessory: bool, mode: mode) => {
    let byte = ref(0)
    byte :=
      byte.contents->lor(
        switch difficulty {
        | Softcore => 0
        | Mediumcore => 1
        | Hardcore => 2
        },
      )

    byte := byte.contents->lor(extraAccessory ? 4 : 0)
    byte := byte.contents->lor(mode == Journey ? 8 : 0)
    writer->packByte(byte.contents)
  }

  let packTorchFlags = (
    writer,
    usingBiomeTorches: bool,
    happyFunTorchTime: bool,
    unlockedBiomeTorches: bool,
  ) => {
    let byte = ref(0)
    byte := byte.contents->lor(usingBiomeTorches ? 1 : 0)
    byte := byte.contents->lor(happyFunTorchTime ? 2 : 0)
    byte := byte.contents->lor(unlockedBiomeTorches ? 4 : 0)
    writer->packByte(byte.contents)
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerInfo->PacketType.toInt)
    ->packByte(self.playerId)
    ->packByte(self.skinVariant)
    ->packByte(self.hair)
    ->packString(self.name)
    ->packByte(self.hairDye)
    ->packByte(self.hideVisuals)
    ->packByte(self.hideVisuals2)
    ->packByte(self.hideMisc)
    ->packColor(self.hairColor)
    ->packColor(self.skinColor)
    ->packColor(self.eyeColor)
    ->packColor(self.shirtColor)
    ->packColor(self.underShirtColor)
    ->packColor(self.pantsColor)
    ->packColor(self.shoeColor)
    ->packDifficultyFlags(self.difficulty, self.extraAccessory, self.mode)
    ->packTorchFlags(self.usingBiomeTorches, self.happyFunTorchTime, self.unlockedBiomeTorches)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer

let toLatest = (self: t): Packet.PlayerInfo.t => {
  {
    playerId: self.playerId,
    skinVariant: self.skinVariant,
    hair: self.hair,
    name: self.name,
    hairDye: self.hairDye,
    hideVisuals: self.hideVisuals,
    hideVisuals2: self.hideVisuals2,
    hideMisc: self.hideMisc,
    hairColor: self.hairColor,
    skinColor: self.skinColor,
    eyeColor: self.eyeColor,
    shirtColor: self.shirtColor,
    underShirtColor: self.underShirtColor,
    pantsColor: self.pantsColor,
    shoeColor: self.shoeColor,
    difficulty: self.difficulty,
    mode: self.mode,
    extraAccessory: self.extraAccessory,
    usingBiomeTorches: self.usingBiomeTorches,
    unlockedBiomeTorches: self.unlockedBiomeTorches,
    happyFunTorchTime: self.happyFunTorchTime,
    unlockedSuperCart: false,
    enabledSuperCart: false,
    usedAegisCrystal: false,
    usedAegisFruit: false,
    usedArcaneCrystal: false,
    usedGalaxyPearl: false,
    usedGummyWorm: false,
    usedAmbrosia: false,
    ateArtisanBread: false,
  }
}

let fromLatest = (latest: Packet.PlayerInfo.t): option<t> => {
  Some({
    playerId: latest.playerId,
    skinVariant: latest.skinVariant,
    hair: latest.hair,
    name: latest.name,
    hairDye: latest.hairDye,
    hideVisuals: latest.hideVisuals,
    hideVisuals2: latest.hideVisuals2,
    hideMisc: latest.hideMisc,
    hairColor: latest.hairColor,
    skinColor: latest.skinColor,
    eyeColor: latest.eyeColor,
    shirtColor: latest.shirtColor,
    underShirtColor: latest.underShirtColor,
    pantsColor: latest.pantsColor,
    shoeColor: latest.shoeColor,
    difficulty: latest.difficulty,
    mode: latest.mode,
    extraAccessory: latest.extraAccessory,
    usingBiomeTorches: latest.usingBiomeTorches,
    unlockedBiomeTorches: latest.unlockedBiomeTorches,
    happyFunTorchTime: latest.happyFunTorchTime,
  })
}
