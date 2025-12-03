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
  let {readByte, readColor, readString} = module(ErrorAwarePacketReader)
  let getDifficulty = (difficultyFlags: BitFlags.t): difficulty => {
    if difficultyFlags->BitFlags.flag2 {
      Hardcore
    } else if difficultyFlags->BitFlags.flag1 {
      Mediumcore
    } else {
      Softcore
    }
  }

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(skinVariant) = reader->readByte("skinVariant")
    let? Ok(hair) = reader->readByte("hair")
    let? Ok(name) = reader->readString("name")
    let? Ok(hairDye) = reader->readByte("hairDye")
    let? Ok(hideVisuals) = reader->readByte("hideVisuals")
    let? Ok(hideVisuals2) = reader->readByte("hideVisuals2")
    let? Ok(hideMisc) = reader->readByte("hideMisc")
    let? Ok(hairColor) = reader->readColor("hairColor")
    let? Ok(skinColor) = reader->readColor("skinColor")
    let? Ok(eyeColor) = reader->readColor("eyeColor")
    let? Ok(shirtColor) = reader->readColor("shirtColor")
    let? Ok(underShirtColor) = reader->readColor("underShirtColor")
    let? Ok(pantsColor) = reader->readColor("pantsColor")
    let? Ok(shoeColor) = reader->readColor("shoeColor")
    let? Ok(difficultyFlagsRaw) = reader->readByte("difficultyFlags")
    let difficultyFlags = BitFlags.fromByte(difficultyFlagsRaw)
    let? Ok(torchFlagsRaw) = reader->readByte("torchFlags")
    let torchFlags = BitFlags.fromByte(torchFlagsRaw)

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

    Ok({
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
  let {packByte, packString, packColor, setType, data} = module(ErrorAwarePacketWriter)
  let packDifficultyFlags = (
    writer: ErrorAwarePacketWriter.t,
    difficulty: difficulty,
    extraAccessory: bool,
    mode: mode,
  ) => {
    let byte = ref(0)
    byte :=
      byte.contents ||| (
        switch difficulty {
        | Softcore => 0
        | Mediumcore => 1
        | Hardcore => 2
        }
      )

    byte := byte.contents ||| (extraAccessory ? 4 : 0)
    byte := byte.contents ||| (mode == Journey ? 8 : 0)
    writer->packByte(byte.contents, "difficultyFlags")
  }

  let packTorchFlags = (
    writer: ErrorAwarePacketWriter.t,
    usingBiomeTorches: bool,
    happyFunTorchTime: bool,
    unlockedBiomeTorches: bool,
  ) => {
    let byte = ref(0)
    byte := byte.contents ||| (usingBiomeTorches ? 1 : 0)
    byte := byte.contents ||| (happyFunTorchTime ? 2 : 0)
    byte := byte.contents ||| (unlockedBiomeTorches ? 4 : 0)
    writer->packByte(byte.contents, "torchFlags")
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerInfo->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(self.skinVariant, "skinVariant")
    ->packByte(self.hair, "hair")
    ->packString(self.name, "name")
    ->packByte(self.hairDye, "hairDye")
    ->packByte(self.hideVisuals, "hideVisuals")
    ->packByte(self.hideVisuals2, "hideVisuals2")
    ->packByte(self.hideMisc, "hideMisc")
    ->packColor(self.hairColor, "hairColor")
    ->packColor(self.skinColor, "skinColor")
    ->packColor(self.eyeColor, "eyeColor")
    ->packColor(self.shirtColor, "shirtColor")
    ->packColor(self.underShirtColor, "underShirtColor")
    ->packColor(self.pantsColor, "pantsColor")
    ->packColor(self.shoeColor, "shoeColor")
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
