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
  hairColor: PacketFactory.Color.t,
  skinColor: PacketFactory.Color.t,
  eyeColor: PacketFactory.Color.t,
  shirtColor: PacketFactory.Color.t,
  underShirtColor: PacketFactory.Color.t,
  pantsColor: PacketFactory.Color.t,
  shoeColor: PacketFactory.Color.t,
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

let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
let fromv1449: t => t
