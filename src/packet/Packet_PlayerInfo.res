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
      Journey
    } else {
      Classic
    }
    let usingBiomeTorches = torchFlags->BitFlags.flag1
    let happyFunTorchTime = torchFlags->BitFlags.flag2
    let unlockedBiomeTorches = torchFlags->BitFlags.flag3
    let unlockedSuperCart = torchFlags->BitFlags.flag4
    let enabledSuperCart = torchFlags->BitFlags.flag5
    let usedFlags = BitFlags.fromByte(reader->readByte)
    let usedAegisCrystal = usedFlags->BitFlags.flag1
    let usedAegisFruit = usedFlags->BitFlags.flag2
    let usedArcaneCrystal = usedFlags->BitFlags.flag3
    let usedGalaxyPearl = usedFlags->BitFlags.flag4
    let usedGummyWorm = usedFlags->BitFlags.flag5
    let usedAmbrosia = usedFlags->BitFlags.flag6
    let ateArtisanBread = usedFlags->BitFlags.flag7

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
    ~usingBiomeTorches: bool,
    ~happyFunTorchTime: bool,
    ~unlockedBiomeTorches: bool,
    ~unlockedSuperCart: bool,
    ~enabledSuperCart: bool,
  ) => {
    let byte = ref(0)
    byte := byte.contents->lor(usingBiomeTorches ? 1 : 0)
    byte := byte.contents->lor(happyFunTorchTime ? 2 : 0)
    byte := byte.contents->lor(unlockedBiomeTorches ? 4 : 0)
    byte := byte.contents->lor(unlockedSuperCart ? 8 : 0)
    byte := byte.contents->lor(enabledSuperCart ? 16 : 0)
    writer->packByte(byte.contents)
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
    byte := byte.contents->lor(usedAegisCrystal ? 1 : 0)
    byte := byte.contents->lor(usedAegisFruit ? 2 : 0)
    byte := byte.contents->lor(usedArcaneCrystal ? 4 : 0)
    byte := byte.contents->lor(usedGalaxyPearl ? 8 : 0)
    byte := byte.contents->lor(usedGummyWorm ? 16 : 0)
    byte := byte.contents->lor(usedAmbrosia ? 32 : 0)
    byte := byte.contents->lor(ateArtisanBread ? 64 : 0)
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
