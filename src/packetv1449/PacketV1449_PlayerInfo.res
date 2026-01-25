module Color = PacketFactory.Color

type difficulty =
  | Softcore
  | Mediumcore
  | Hardcore

type mode =
  | Classic
  | Journey

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
  unlockedSuperCart: bool,
  enabledSuperCart: bool,
  usedAegisCrystal: bool,
  usedAegisFruit: bool,
  usedArcaneCrystal: bool,
  usedGalaxyPearl: bool,
  usedGummyWorm: bool,
  usedAmbrosia: bool,
  ateArtisanBread: bool,
}

module Decode = {
  let {readByte, readString, readColor} = module(ErrorAwarePacketReader)
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
      Journey
    } else {
      Classic
    }
    let usingBiomeTorches = torchFlags->BitFlags.flag1
    let happyFunTorchTime = torchFlags->BitFlags.flag2
    let unlockedBiomeTorches = torchFlags->BitFlags.flag3
    let unlockedSuperCart = torchFlags->BitFlags.flag4
    let enabledSuperCart = torchFlags->BitFlags.flag5
    let? Ok(usedFlags) = {
      let? Ok(usedFlags) = reader->readByte("usedFlags")
      Ok(BitFlags.fromByte(usedFlags))
    }
    let usedAegisCrystal = usedFlags->BitFlags.flag1
    let usedAegisFruit = usedFlags->BitFlags.flag2
    let usedArcaneCrystal = usedFlags->BitFlags.flag3
    let usedGalaxyPearl = usedFlags->BitFlags.flag4
    let usedGummyWorm = usedFlags->BitFlags.flag5
    let usedAmbrosia = usedFlags->BitFlags.flag6
    let ateArtisanBread = usedFlags->BitFlags.flag7

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
      unlockedSuperCart,
      enabledSuperCart,
      usedAegisCrystal,
      usedAegisFruit,
      usedArcaneCrystal,
      usedGalaxyPearl,
      usedGummyWorm,
      usedAmbrosia,
      ateArtisanBread,
    })
  }
}

module Encode = {
  let {packByte, packString, packColor, setType, data} = module(ErrorAwarePacketWriter)
  let packDifficultyFlags = (writer, difficulty: difficulty, extraAccessory: bool, mode: mode) => {
    let byte = ref(0)
    byte :=
      byte.contents |||
      switch difficulty {
      | Softcore => 0
      | Mediumcore => 1
      | Hardcore => 2
      }

    byte := byte.contents ||| (extraAccessory ? 4 : 0)
    byte := byte.contents ||| (mode == Journey ? 8 : 0)
    writer->packByte(byte.contents, "difficultyFlags")
  }

  let packTorchFlags = (
    writer,
    ~usingBiomeTorches: bool,
    ~happyFunTorchTime: bool,
    ~unlockedBiomeTorches: bool,
    ~unlockedSuperCart: bool,
    ~enabledSuperCart: bool,
  ) => {
    let byte = ref(0)
    byte := byte.contents ||| (usingBiomeTorches ? 1 : 0)
    byte := byte.contents ||| (happyFunTorchTime ? 2 : 0)
    byte := byte.contents ||| (unlockedBiomeTorches ? 4 : 0)
    byte := byte.contents ||| (unlockedSuperCart ? 8 : 0)
    byte := byte.contents ||| (enabledSuperCart ? 16 : 0)
    writer->packByte(byte.contents, "torchFlags")
  }

  let packUsedFlags = (
    writer,
    ~usedAegisCrystal: bool,
    ~usedAegisFruit: bool,
    ~usedArcaneCrystal: bool,
    ~usedGalaxyPearl: bool,
    ~usedGummyWorm: bool,
    ~usedAmbrosia: bool,
    ~ateArtisanBread: bool,
  ) => {
    let byte = ref(0)
    byte := byte.contents ||| (usedAegisCrystal ? 1 : 0)
    byte := byte.contents ||| (usedAegisFruit ? 2 : 0)
    byte := byte.contents ||| (usedArcaneCrystal ? 4 : 0)
    byte := byte.contents ||| (usedGalaxyPearl ? 8 : 0)
    byte := byte.contents ||| (usedGummyWorm ? 16 : 0)
    byte := byte.contents ||| (usedAmbrosia ? 32 : 0)
    byte := byte.contents ||| (ateArtisanBread ? 64 : 0)
    writer->packByte(byte.contents, "usedFlags")
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
    ->packTorchFlags(
      ~usingBiomeTorches=self.usingBiomeTorches,
      ~happyFunTorchTime=self.happyFunTorchTime,
      ~unlockedBiomeTorches=self.unlockedBiomeTorches,
      ~unlockedSuperCart=self.unlockedSuperCart,
      ~enabledSuperCart=self.enabledSuperCart,
    )
    ->packUsedFlags(
      ~usedAegisCrystal=self.usedAegisCrystal,
      ~usedAegisFruit=self.usedAegisFruit,
      ~usedArcaneCrystal=self.usedArcaneCrystal,
      ~usedGalaxyPearl=self.usedGalaxyPearl,
      ~usedGummyWorm=self.usedGummyWorm,
      ~usedAmbrosia=self.usedAmbrosia,
      ~ateArtisanBread=self.ateArtisanBread,
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
