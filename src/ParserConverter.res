let worldEventInfoFromV1449 = (
  eventInfo: PacketV1449.WorldInfo.eventInfo,
): Packet.WorldInfo.eventInfo => {
  {
    shadowOrbSmashed: eventInfo.shadowOrbSmashed,
    killedBoss1: eventInfo.killedBoss1,
    killedBoss2: eventInfo.killedBoss2,
    killedBoss3: eventInfo.killedBoss3,
    hardMode: eventInfo.hardMode,
    killedClown: eventInfo.killedClown,
    serverSidedCharacters: eventInfo.serverSidedCharacters,
    killedPlantBoss: eventInfo.killedPlantBoss,
    killedMechBoss: eventInfo.killedMechBoss,
    killedMechBoss2: eventInfo.killedMechBoss2,
    killedMechBoss3: eventInfo.killedMechBoss3,
    killedAnyMechBoss: eventInfo.killedAnyMechBoss,
    cloudBg: eventInfo.cloudBg,
    crimson: eventInfo.crimson,
    pumpkinMoon: eventInfo.pumpkinMoon,
    snowMoon: eventInfo.snowMoon,
    expertMode: eventInfo.expertMode,
    fastForwardTime: eventInfo.fastForwardTime,
    slimeRain: eventInfo.slimeRain,
    killedKingSlime: eventInfo.killedKingSlime,
    killedQueenBee: eventInfo.killedQueenBee,
    killedFishron: eventInfo.killedFishron,
    killedMartians: eventInfo.killedMartians,
    killedAncientCultist: eventInfo.killedAncientCultist,
    killedMoonLord: eventInfo.killedMoonLord,
    killedPumpking: eventInfo.killedPumpking,
    killedMourningWood: eventInfo.killedMourningWood,
    killedIceQueen: eventInfo.killedIceQueen,
    killedSantank: eventInfo.killedSantank,
    killedEverscream: eventInfo.killedEverscream,
    killedGolem: eventInfo.killedGolem,
    birthdayParty: eventInfo.birthdayParty,
    killedPirates: eventInfo.killedPirates,
    killedFrostLegion: eventInfo.killedFrostLegion,
    killedGoblins: eventInfo.killedGoblins,
    sandstorm: eventInfo.sandstorm,
    dungeonDefendersEvent: eventInfo.dungeonDefendersEvent,
    killedDungeonDefendersTier1: eventInfo.killedDungeonDefendersTier1,
    killedDungeonDefendersTier2: eventInfo.killedDungeonDefendersTier2,
    killedDungeonDefendersTier3: eventInfo.killedDungeonDefendersTier3,
    combatBookUsed: eventInfo.combatBookUsed,
    manualLanterns: eventInfo.manualLanterns,
    killedSolarTower: eventInfo.killedSolarTower,
    killedVortexTower: eventInfo.killedVortexTower,
    killedNebulaTower: eventInfo.killedNebulaTower,
    killedStardustTower: eventInfo.killedStardustTower,
    forceHalloween: eventInfo.forceHalloween,
    forceChristmas: eventInfo.forceChristmas,
    boughtCat: eventInfo.boughtCat,
    boughtDog: eventInfo.boughtDog,
    boughtBunny: eventInfo.boughtBunny,
    freeCake: eventInfo.freeCake,
    drunkWorld: eventInfo.drunkWorld,
    killedEmpressOfLight: eventInfo.killedEmpressOfLight,
    killedQueenSlime: eventInfo.killedQueenSlime,
    getGoodWorld: eventInfo.getGoodWorld,
    tenthAnniversaryWorld: eventInfo.tenthAnniversaryWorld,
    dontStarveWorld: eventInfo.dontStarveWorld,
    downedDeerClops: eventInfo.downedDeerClops,
    notTheBeesWorld: eventInfo.notTheBeesWorld,
    remixWorld: eventInfo.remixWorld,
    unlockedSlimeBlueSpawn: eventInfo.unlockedSlimeBlueSpawn,
    combatBookVolumeTwoWasUsed: eventInfo.combatBookVolumeTwoWasUsed,
    peddlersSatchelWasUsed: eventInfo.peddlersSatchelWasUsed,
    unlockedSlimeGreenSpawn: eventInfo.unlockedSlimeGreenSpawn,
    unlockedSlimeOldSpawn: eventInfo.unlockedSlimeOldSpawn,
    unlockedSlimePurpleSpawn: eventInfo.unlockedSlimePurpleSpawn,
    unlockedSlimeRainbowSpawn: eventInfo.unlockedSlimeRainbowSpawn,
    unlockedSlimeRedSpawn: eventInfo.unlockedSlimeRedSpawn,
    unlockedSlimeYellowSpawn: eventInfo.unlockedSlimeYellowSpawn,
    unlockedSlimeCopperSpawn: eventInfo.unlockedSlimeCopperSpawn,
    fastForwardTimeToDusk: eventInfo.fastForwardTimeToDusk,
    noTrapsWorld: eventInfo.noTrapsWorld,
    zenithWorld: eventInfo.zenithWorld,
    unlockedTruffleSpawn: eventInfo.unlockedTruffleSpawn,
    vampireSeed: false,
    infectedSeed: false,
    teamBasedSpawnsSeed: false,
    skyblockWorld: false,
    dualDungeonsSeed: false,
  }
}

let worldEventInfoToV1449 = (
  eventInfo: Packet.WorldInfo.eventInfo,
): PacketV1449.WorldInfo.eventInfo => {
  {
    shadowOrbSmashed: eventInfo.shadowOrbSmashed,
    killedBoss1: eventInfo.killedBoss1,
    killedBoss2: eventInfo.killedBoss2,
    killedBoss3: eventInfo.killedBoss3,
    hardMode: eventInfo.hardMode,
    killedClown: eventInfo.killedClown,
    serverSidedCharacters: eventInfo.serverSidedCharacters,
    killedPlantBoss: eventInfo.killedPlantBoss,
    killedMechBoss: eventInfo.killedMechBoss,
    killedMechBoss2: eventInfo.killedMechBoss2,
    killedMechBoss3: eventInfo.killedMechBoss3,
    killedAnyMechBoss: eventInfo.killedAnyMechBoss,
    cloudBg: eventInfo.cloudBg,
    crimson: eventInfo.crimson,
    pumpkinMoon: eventInfo.pumpkinMoon,
    snowMoon: eventInfo.snowMoon,
    expertMode: eventInfo.expertMode,
    fastForwardTime: eventInfo.fastForwardTime,
    slimeRain: eventInfo.slimeRain,
    killedKingSlime: eventInfo.killedKingSlime,
    killedQueenBee: eventInfo.killedQueenBee,
    killedFishron: eventInfo.killedFishron,
    killedMartians: eventInfo.killedMartians,
    killedAncientCultist: eventInfo.killedAncientCultist,
    killedMoonLord: eventInfo.killedMoonLord,
    killedPumpking: eventInfo.killedPumpking,
    killedMourningWood: eventInfo.killedMourningWood,
    killedIceQueen: eventInfo.killedIceQueen,
    killedSantank: eventInfo.killedSantank,
    killedEverscream: eventInfo.killedEverscream,
    killedGolem: eventInfo.killedGolem,
    birthdayParty: eventInfo.birthdayParty,
    killedPirates: eventInfo.killedPirates,
    killedFrostLegion: eventInfo.killedFrostLegion,
    killedGoblins: eventInfo.killedGoblins,
    sandstorm: eventInfo.sandstorm,
    dungeonDefendersEvent: eventInfo.dungeonDefendersEvent,
    killedDungeonDefendersTier1: eventInfo.killedDungeonDefendersTier1,
    killedDungeonDefendersTier2: eventInfo.killedDungeonDefendersTier2,
    killedDungeonDefendersTier3: eventInfo.killedDungeonDefendersTier3,
    combatBookUsed: eventInfo.combatBookUsed,
    manualLanterns: eventInfo.manualLanterns,
    killedSolarTower: eventInfo.killedSolarTower,
    killedVortexTower: eventInfo.killedVortexTower,
    killedNebulaTower: eventInfo.killedNebulaTower,
    killedStardustTower: eventInfo.killedStardustTower,
    forceHalloween: eventInfo.forceHalloween,
    forceChristmas: eventInfo.forceChristmas,
    boughtCat: eventInfo.boughtCat,
    boughtDog: eventInfo.boughtDog,
    boughtBunny: eventInfo.boughtBunny,
    freeCake: eventInfo.freeCake,
    drunkWorld: eventInfo.drunkWorld,
    killedEmpressOfLight: eventInfo.killedEmpressOfLight,
    killedQueenSlime: eventInfo.killedQueenSlime,
    getGoodWorld: eventInfo.getGoodWorld,
    tenthAnniversaryWorld: eventInfo.tenthAnniversaryWorld,
    dontStarveWorld: eventInfo.dontStarveWorld,
    downedDeerClops: eventInfo.downedDeerClops,
    notTheBeesWorld: eventInfo.notTheBeesWorld,
    remixWorld: eventInfo.remixWorld,
    unlockedSlimeBlueSpawn: eventInfo.unlockedSlimeBlueSpawn,
    combatBookVolumeTwoWasUsed: eventInfo.combatBookVolumeTwoWasUsed,
    peddlersSatchelWasUsed: eventInfo.peddlersSatchelWasUsed,
    unlockedSlimeGreenSpawn: eventInfo.unlockedSlimeGreenSpawn,
    unlockedSlimeOldSpawn: eventInfo.unlockedSlimeOldSpawn,
    unlockedSlimePurpleSpawn: eventInfo.unlockedSlimePurpleSpawn,
    unlockedSlimeRainbowSpawn: eventInfo.unlockedSlimeRainbowSpawn,
    unlockedSlimeRedSpawn: eventInfo.unlockedSlimeRedSpawn,
    unlockedSlimeYellowSpawn: eventInfo.unlockedSlimeYellowSpawn,
    unlockedSlimeCopperSpawn: eventInfo.unlockedSlimeCopperSpawn,
    fastForwardTimeToDusk: eventInfo.fastForwardTimeToDusk,
    noTrapsWorld: eventInfo.noTrapsWorld,
    zenithWorld: eventInfo.zenithWorld,
    unlockedTruffleSpawn: eventInfo.unlockedTruffleSpawn,
  }
}

let worldInfoFromV1449 = (worldInfo: PacketV1449.WorldInfo.t): Packet.WorldInfo.t => {
  {
    time: worldInfo.time,
    dayAndMoonInfo: worldInfo.dayAndMoonInfo,
    moonPhase: worldInfo.moonPhase,
    maxTilesX: worldInfo.maxTilesX,
    maxTilesY: worldInfo.maxTilesY,
    spawnX: worldInfo.spawnX,
    spawnY: worldInfo.spawnY,
    worldSurface: worldInfo.worldSurface,
    rockLayer: worldInfo.rockLayer,
    worldId: worldInfo.worldId,
    worldName: worldInfo.worldName,
    gameMode: worldInfo.gameMode,
    worldUniqueId: worldInfo.worldUniqueId,
    worldGeneratorVersion: worldInfo.worldGeneratorVersion,
    moonType: worldInfo.moonType,
    treeBackground: worldInfo.treeBackground,
    treeBackground2: worldInfo.treeBackground2,
    treeBackground3: worldInfo.treeBackground3,
    treeBackground4: worldInfo.treeBackground4,
    corruptionBackground: worldInfo.corruptionBackground,
    jungleBackground: worldInfo.jungleBackground,
    snowBackground: worldInfo.snowBackground,
    hallowBackground: worldInfo.hallowBackground,
    crimsonBackground: worldInfo.crimsonBackground,
    desertBackground: worldInfo.desertBackground,
    oceanBackground: worldInfo.oceanBackground,
    mushroomBackground: worldInfo.mushroomBackground,
    underworldBackground: worldInfo.underworldBackground,
    iceBackStyle: worldInfo.iceBackStyle,
    jungleBackStyle: worldInfo.jungleBackStyle,
    hellBackStyle: worldInfo.hellBackStyle,
    windSpeedSet: worldInfo.windSpeedSet,
    cloudNumber: worldInfo.cloudNumber,
    tree1: worldInfo.tree1,
    tree2: worldInfo.tree2,
    tree3: worldInfo.tree3,
    treeStyle1: worldInfo.treeStyle1,
    treeStyle2: worldInfo.treeStyle2,
    treeStyle3: worldInfo.treeStyle3,
    treeStyle4: worldInfo.treeStyle4,
    caveBack1: worldInfo.caveBack1,
    caveBack2: worldInfo.caveBack2,
    caveBack3: worldInfo.caveBack3,
    caveBackStyle1: worldInfo.caveBackStyle1,
    caveBackStyle2: worldInfo.caveBackStyle2,
    caveBackStyle3: worldInfo.caveBackStyle3,
    caveBackStyle4: worldInfo.caveBackStyle4,
    forest1TreeTopStyle: worldInfo.forest1TreeTopStyle,
    forest2TreeTopStyle: worldInfo.forest2TreeTopStyle,
    forest3TreeTopStyle: worldInfo.forest3TreeTopStyle,
    forest4TreeTopStyle: worldInfo.forest4TreeTopStyle,
    corruptionTreeTopStyle: worldInfo.corruptionTreeTopStyle,
    jungleTreeTopStyle: worldInfo.jungleTreeTopStyle,
    snowTreeTopStyle: worldInfo.snowTreeTopStyle,
    hallowTreeTopStyle: worldInfo.hallowTreeTopStyle,
    crimsonTreeTopStyle: worldInfo.crimsonTreeTopStyle,
    desertTreeTopStyle: worldInfo.desertTreeTopStyle,
    oceanTreeTopStyle: worldInfo.oceanTreeTopStyle,
    glowingMushroomTreeTopStyle: worldInfo.glowingMushroomTreeTopStyle,
    underworldTreeTopStyle: worldInfo.underworldTreeTopStyle,
    rain: worldInfo.rain,
    eventInfo: worldEventInfoFromV1449(worldInfo.eventInfo),
    lowTiles: false,
    forceHalloweenForever: false,
    forceChristmasForever: false,
    moreLightningSeed: false,
    noLightningSeed: false,
    sundialCooldown: worldInfo.sundialCooldown,
    moondialCooldown: worldInfo.moondialCooldown,
    copperOreTier: worldInfo.copperOreTier,
    ironOreTier: worldInfo.ironOreTier,
    silverOreTier: worldInfo.silverOreTier,
    goldOreTier: worldInfo.goldOreTier,
    cobaltOreTier: worldInfo.cobaltOreTier,
    mythrilOreTier: worldInfo.mythrilOreTier,
    adamantiteOreTier: worldInfo.adamantiteOreTier,
    invasionType: worldInfo.invasionType,
    lobbyId: worldInfo.lobbyId,
    sandstormSeverity: worldInfo.sandstormSeverity,
    extraSpawnPoints: [],
  }
}

let worldInfoToV1449 = (worldInfo: Packet.WorldInfo.t): PacketV1449.WorldInfo.t => {
  {
    time: worldInfo.time,
    dayAndMoonInfo: worldInfo.dayAndMoonInfo,
    moonPhase: worldInfo.moonPhase,
    maxTilesX: worldInfo.maxTilesX,
    maxTilesY: worldInfo.maxTilesY,
    spawnX: worldInfo.spawnX,
    spawnY: worldInfo.spawnY,
    worldSurface: worldInfo.worldSurface,
    rockLayer: worldInfo.rockLayer,
    worldId: worldInfo.worldId,
    worldName: worldInfo.worldName,
    gameMode: worldInfo.gameMode,
    worldUniqueId: worldInfo.worldUniqueId,
    worldGeneratorVersion: worldInfo.worldGeneratorVersion,
    moonType: worldInfo.moonType,
    treeBackground: worldInfo.treeBackground,
    treeBackground2: worldInfo.treeBackground2,
    treeBackground3: worldInfo.treeBackground3,
    treeBackground4: worldInfo.treeBackground4,
    corruptionBackground: worldInfo.corruptionBackground,
    jungleBackground: worldInfo.jungleBackground,
    snowBackground: worldInfo.snowBackground,
    hallowBackground: worldInfo.hallowBackground,
    crimsonBackground: worldInfo.crimsonBackground,
    desertBackground: worldInfo.desertBackground,
    oceanBackground: worldInfo.oceanBackground,
    mushroomBackground: worldInfo.mushroomBackground,
    underworldBackground: worldInfo.underworldBackground,
    iceBackStyle: worldInfo.iceBackStyle,
    jungleBackStyle: worldInfo.jungleBackStyle,
    hellBackStyle: worldInfo.hellBackStyle,
    windSpeedSet: worldInfo.windSpeedSet,
    cloudNumber: worldInfo.cloudNumber,
    tree1: worldInfo.tree1,
    tree2: worldInfo.tree2,
    tree3: worldInfo.tree3,
    treeStyle1: worldInfo.treeStyle1,
    treeStyle2: worldInfo.treeStyle2,
    treeStyle3: worldInfo.treeStyle3,
    treeStyle4: worldInfo.treeStyle4,
    caveBack1: worldInfo.caveBack1,
    caveBack2: worldInfo.caveBack2,
    caveBack3: worldInfo.caveBack3,
    caveBackStyle1: worldInfo.caveBackStyle1,
    caveBackStyle2: worldInfo.caveBackStyle2,
    caveBackStyle3: worldInfo.caveBackStyle3,
    caveBackStyle4: worldInfo.caveBackStyle4,
    forest1TreeTopStyle: worldInfo.forest1TreeTopStyle,
    forest2TreeTopStyle: worldInfo.forest2TreeTopStyle,
    forest3TreeTopStyle: worldInfo.forest3TreeTopStyle,
    forest4TreeTopStyle: worldInfo.forest4TreeTopStyle,
    corruptionTreeTopStyle: worldInfo.corruptionTreeTopStyle,
    jungleTreeTopStyle: worldInfo.jungleTreeTopStyle,
    snowTreeTopStyle: worldInfo.snowTreeTopStyle,
    hallowTreeTopStyle: worldInfo.hallowTreeTopStyle,
    crimsonTreeTopStyle: worldInfo.crimsonTreeTopStyle,
    desertTreeTopStyle: worldInfo.desertTreeTopStyle,
    oceanTreeTopStyle: worldInfo.oceanTreeTopStyle,
    glowingMushroomTreeTopStyle: worldInfo.glowingMushroomTreeTopStyle,
    underworldTreeTopStyle: worldInfo.underworldTreeTopStyle,
    rain: worldInfo.rain,
    eventInfo: worldEventInfoToV1449(worldInfo.eventInfo),
    sundialCooldown: worldInfo.sundialCooldown,
    moondialCooldown: worldInfo.moondialCooldown,
    copperOreTier: worldInfo.copperOreTier,
    ironOreTier: worldInfo.ironOreTier,
    silverOreTier: worldInfo.silverOreTier,
    goldOreTier: worldInfo.goldOreTier,
    cobaltOreTier: worldInfo.cobaltOreTier,
    mythrilOreTier: worldInfo.mythrilOreTier,
    adamantiteOreTier: worldInfo.adamantiteOreTier,
    invasionType: worldInfo.invasionType,
    lobbyId: worldInfo.lobbyId,
    sandstormSeverity: worldInfo.sandstormSeverity,
  }
}

let playerSpawnContextFromV1449 = (
  context: PacketV1449.PlayerSpawn.context,
): Packet.PlayerSpawn.context =>
  switch context {
  | PacketV1449.PlayerSpawn.ReviveFromDeath => Packet.PlayerSpawn.ReviveFromDeath
  | PacketV1449.PlayerSpawn.SpawningIntoWorld => Packet.PlayerSpawn.SpawningIntoWorld
  | PacketV1449.PlayerSpawn.RecallFromItem => Packet.PlayerSpawn.RecallFromItem
  }

let playerSpawnContextToV1449 = (
  context: Packet.PlayerSpawn.context,
): PacketV1449.PlayerSpawn.context =>
  switch context {
  | Packet.PlayerSpawn.ReviveFromDeath => PacketV1449.PlayerSpawn.ReviveFromDeath
  | Packet.PlayerSpawn.SpawningIntoWorld => PacketV1449.PlayerSpawn.SpawningIntoWorld
  | Packet.PlayerSpawn.RecallFromItem => PacketV1449.PlayerSpawn.RecallFromItem
  | Packet.PlayerSpawn.TeamSwap => PacketV1449.PlayerSpawn.SpawningIntoWorld
  | Unknown(_n) => PacketV1449.PlayerSpawn.SpawningIntoWorld
  }

let playerUpdateControlFromV1449 = (
  control: PacketV1449.PlayerUpdate.control,
): Packet.PlayerUpdate.control => {
  {
    isHoldingUp: control.isHoldingUp,
    isHoldingDown: control.isHoldingDown,
    isHoldingLeft: control.isHoldingLeft,
    isHoldingRight: control.isHoldingRight,
    isHoldingJump: control.isHoldingJump,
    isHoldingItemUse: control.isHoldingItemUse,
    isHoldingDash: false,
  }
}

let playerUpdateControlToV1449 = (
  control: Packet.PlayerUpdate.control,
): PacketV1449.PlayerUpdate.control => {
  {
    isHoldingUp: control.isHoldingUp,
    isHoldingDown: control.isHoldingDown,
    isHoldingLeft: control.isHoldingLeft,
    isHoldingRight: control.isHoldingRight,
    isHoldingJump: control.isHoldingJump,
    isHoldingItemUse: control.isHoldingItemUse,
  }
}

let playerUpdateDirectionFromV1449 = (
  direction: PacketV1449.PlayerUpdate.direction,
): Packet.PlayerUpdate.direction =>
  switch direction {
  | PacketV1449.PlayerUpdate.Left => Packet.PlayerUpdate.Left
  | PacketV1449.PlayerUpdate.Right => Packet.PlayerUpdate.Right
  }

let playerUpdateDirectionToV1449 = (
  direction: Packet.PlayerUpdate.direction,
): PacketV1449.PlayerUpdate.direction =>
  switch direction {
  | Packet.PlayerUpdate.Left => PacketV1449.PlayerUpdate.Left
  | Packet.PlayerUpdate.Right => PacketV1449.PlayerUpdate.Right
  }

let playerUpdatePulleyDirectionFromV1449 = (
  pulleyDirection: option<PacketV1449.PlayerUpdate.pulleyDirection>,
): option<Packet.PlayerUpdate.pulleyDirection> =>
  switch pulleyDirection {
  | None => None
  | Some(PacketV1449.PlayerUpdate.One) => Some(Packet.PlayerUpdate.One)
  | Some(PacketV1449.PlayerUpdate.Two) => Some(Packet.PlayerUpdate.Two)
  }

let playerUpdatePulleyDirectionToV1449 = (
  pulleyDirection: option<Packet.PlayerUpdate.pulleyDirection>,
): option<PacketV1449.PlayerUpdate.pulleyDirection> =>
  switch pulleyDirection {
  | None => None
  | Some(Packet.PlayerUpdate.One) => Some(PacketV1449.PlayerUpdate.One)
  | Some(Packet.PlayerUpdate.Two) => Some(PacketV1449.PlayerUpdate.Two)
  }

let playerUpdateGravityDirectionFromV1449 = (
  gravityDirection: PacketV1449.PlayerUpdate.gravityDirection,
): Packet.PlayerUpdate.gravityDirection =>
  switch gravityDirection {
  | PacketV1449.PlayerUpdate.Normal => Packet.PlayerUpdate.Normal
  | PacketV1449.PlayerUpdate.Inverted => Packet.PlayerUpdate.Inverted
  }

let playerUpdateGravityDirectionToV1449 = (
  gravityDirection: Packet.PlayerUpdate.gravityDirection,
): PacketV1449.PlayerUpdate.gravityDirection =>
  switch gravityDirection {
  | Packet.PlayerUpdate.Normal => PacketV1449.PlayerUpdate.Normal
  | Packet.PlayerUpdate.Inverted => PacketV1449.PlayerUpdate.Inverted
  }

let playerUpdatePotionOfReturnFromV1449 = (
  potionOfReturn: option<PacketV1449.PlayerUpdate.potionOfReturn>,
): option<Packet.PlayerUpdate.potionOfReturn> =>
  switch potionOfReturn {
  | None => None
  | Some(potion) =>
    Some({
      originalUsePosition: potion.originalUsePosition,
      homePosition: potion.homePosition,
    })
  }

let playerUpdatePotionOfReturnToV1449 = (
  potionOfReturn: option<Packet.PlayerUpdate.potionOfReturn>,
): option<PacketV1449.PlayerUpdate.potionOfReturn> =>
  switch potionOfReturn {
  | None => None
  | Some(potion) =>
    Some({
      originalUsePosition: potion.originalUsePosition,
      homePosition: potion.homePosition,
    })
  }

let npcUpdateLifeFromV1449 = (life: PacketV1449.NpcUpdate.life): Packet.NpcUpdate.life =>
  switch life {
  | PacketV1449.NpcUpdate.Max => Packet.NpcUpdate.Max
  | PacketV1449.NpcUpdate.Byte(value) => Packet.NpcUpdate.Byte(value)
  | PacketV1449.NpcUpdate.Int16(value) => Packet.NpcUpdate.Int16(value)
  | PacketV1449.NpcUpdate.Int32(value) => Packet.NpcUpdate.Int32(value)
  }

let npcUpdateLifeToV1449 = (life: Packet.NpcUpdate.life): PacketV1449.NpcUpdate.life =>
  switch life {
  | Packet.NpcUpdate.Max => PacketV1449.NpcUpdate.Max
  | Packet.NpcUpdate.Byte(value) => PacketV1449.NpcUpdate.Byte(value)
  | Packet.NpcUpdate.Int16(value) => PacketV1449.NpcUpdate.Int16(value)
  | Packet.NpcUpdate.Int32(value) => PacketV1449.NpcUpdate.Int32(value)
  }

let shimmerCoinLuckFromV1449 = (
  coinLuck: PacketV1449.ShimmerEffectOrCoinLuck.coinLuck,
): Packet.ShimmerEffectOrCoinLuck.coinLuck => {
  {position: coinLuck.position, amount: coinLuck.amount}
}

let shimmerCoinLuckToV1449 = (
  coinLuck: Packet.ShimmerEffectOrCoinLuck.coinLuck,
): PacketV1449.ShimmerEffectOrCoinLuck.coinLuck => {
  {position: coinLuck.position, amount: coinLuck.amount}
}

let netModuleLoadLiquidChangeFromV1449 = (
  change: PacketV1449.NetModuleLoad.liquidChange,
): Packet.NetModuleLoad.liquidChange => {
  {
    x: change.x,
    y: change.y,
    amount: change.amount,
    liquidType: change.liquidType,
  }
}

let netModuleLoadLiquidFromV1449 = (
  liquid: PacketV1449.NetModuleLoad.liquid,
): Packet.NetModuleLoad.liquid => {
  {changes: liquid.changes->Array.map(netModuleLoadLiquidChangeFromV1449)}
}

let netModuleLoadPositionFromV1449 = (
  position: PacketV1449.NetModuleLoad.position,
): Packet.NetModuleLoad.position => {
  {x: position.x, y: position.y}
}

let netModuleLoadAmbienceFromV1449 = (
  ambience: PacketV1449.NetModuleLoad.ambience,
): Packet.NetModuleLoad.ambience => {
  {playerId: ambience.playerId, seed: ambience.seed, skyEntityType: ambience.skyEntityType}
}

let netModuleLoadBestiaryUnlockTypeFromV1449 = (
  unlockType: PacketV1449.NetModuleLoad.bestiaryUnlockType,
): Packet.NetModuleLoad.bestiaryUnlockType => {
  switch unlockType {
  | Kill(count) => Packet.NetModuleLoad.Kill(count)
  | Sight => Packet.NetModuleLoad.Sight
  | Chat => Packet.NetModuleLoad.Chat
  }
}

let netModuleLoadBestiaryFromV1449 = (
  bestiary: PacketV1449.NetModuleLoad.bestiary,
): Packet.NetModuleLoad.bestiary => {
  {
    unlockType: netModuleLoadBestiaryUnlockTypeFromV1449(bestiary.unlockType),
    npcId: bestiary.npcId,
  }
}

let netModuleLoadPylonActionFromV1449 = (
  action: PacketV1449.NetModuleLoad.pylonAction,
): Packet.NetModuleLoad.pylonAction => {
  switch action {
  | Added => Packet.NetModuleLoad.Added
  | Removed => Packet.NetModuleLoad.Removed
  | RequestTeleport => Packet.NetModuleLoad.RequestTeleport
  }
}

let netModuleLoadTeleportPylonFromV1449 = (
  teleportPylon: PacketV1449.NetModuleLoad.teleportPylon,
): Packet.NetModuleLoad.teleportPylon => {
  {
    pylonAction: netModuleLoadPylonActionFromV1449(teleportPylon.pylonAction),
    x: teleportPylon.x,
    y: teleportPylon.y,
    pylonType: teleportPylon.pylonType,
  }
}

let netModuleLoadParticleFromV1449 = (
  particle: PacketV1449.NetModuleLoad.particle,
): Packet.NetModuleLoad.particle => {
  {
    particleType: particle.particleType,
    x: particle.x,
    y: particle.y,
    vx: particle.vx,
    vy: particle.vy,
    shaderIndex: particle.shaderIndex,
    invokedByPlayer: particle.invokedByPlayer,
  }
}

let netModuleLoadPowerLevelFromV1449 = (
  powerLevel: PacketV1449.NetModuleLoad.powerLevel,
): Packet.NetModuleLoad.powerLevel => {
  switch powerLevel {
  | LockedForEveryone => Packet.NetModuleLoad.LockedForEveryone
  | CanBeChangedByHostAlone => Packet.NetModuleLoad.CanBeChangedByHostAlone
  | CanBeChangedByEveryone => Packet.NetModuleLoad.CanBeChangedByEveryone
  }
}

let netModuleLoadCreativePowerPermissionFromV1449 = (
  permission: PacketV1449.NetModuleLoad.creativePowerPermission,
): Packet.NetModuleLoad.creativePowerPermission => {
  {
    powerType: permission.powerType,
    powerLevel: netModuleLoadPowerLevelFromV1449(permission.powerLevel),
  }
}

let netModuleLoadLiquidChangeToV1449 = (
  change: Packet.NetModuleLoad.liquidChange,
): PacketV1449.NetModuleLoad.liquidChange => {
  {
    x: change.x,
    y: change.y,
    amount: change.amount,
    liquidType: change.liquidType,
  }
}

let netModuleLoadLiquidToV1449 = (
  liquid: Packet.NetModuleLoad.liquid,
): PacketV1449.NetModuleLoad.liquid => {
  {changes: liquid.changes->Array.map(netModuleLoadLiquidChangeToV1449)}
}

let netModuleLoadPositionToV1449 = (
  position: Packet.NetModuleLoad.position,
): PacketV1449.NetModuleLoad.position => {
  {x: position.x, y: position.y}
}

let netModuleLoadAmbienceToV1449 = (
  ambience: Packet.NetModuleLoad.ambience,
): PacketV1449.NetModuleLoad.ambience => {
  {playerId: ambience.playerId, seed: ambience.seed, skyEntityType: ambience.skyEntityType}
}

let netModuleLoadBestiaryUnlockTypeToV1449 = (
  unlockType: Packet.NetModuleLoad.bestiaryUnlockType,
): PacketV1449.NetModuleLoad.bestiaryUnlockType => {
  switch unlockType {
  | Kill(count) => PacketV1449.NetModuleLoad.Kill(count)
  | Sight => PacketV1449.NetModuleLoad.Sight
  | Chat => PacketV1449.NetModuleLoad.Chat
  }
}

let netModuleLoadBestiaryToV1449 = (
  bestiary: Packet.NetModuleLoad.bestiary,
): PacketV1449.NetModuleLoad.bestiary => {
  {
    unlockType: netModuleLoadBestiaryUnlockTypeToV1449(bestiary.unlockType),
    npcId: bestiary.npcId,
  }
}

let netModuleLoadPylonActionToV1449 = (
  action: Packet.NetModuleLoad.pylonAction,
): PacketV1449.NetModuleLoad.pylonAction => {
  switch action {
  | Added => PacketV1449.NetModuleLoad.Added
  | Removed => PacketV1449.NetModuleLoad.Removed
  | RequestTeleport => PacketV1449.NetModuleLoad.RequestTeleport
  }
}

let netModuleLoadTeleportPylonToV1449 = (
  teleportPylon: Packet.NetModuleLoad.teleportPylon,
): PacketV1449.NetModuleLoad.teleportPylon => {
  {
    pylonAction: netModuleLoadPylonActionToV1449(teleportPylon.pylonAction),
    x: teleportPylon.x,
    y: teleportPylon.y,
    pylonType: teleportPylon.pylonType,
  }
}

let netModuleLoadParticleToV1449 = (
  particle: Packet.NetModuleLoad.particle,
): PacketV1449.NetModuleLoad.particle => {
  {
    particleType: particle.particleType,
    x: particle.x,
    y: particle.y,
    vx: particle.vx,
    vy: particle.vy,
    shaderIndex: particle.shaderIndex,
    invokedByPlayer: particle.invokedByPlayer,
  }
}

let netModuleLoadPowerLevelToV1449 = (
  powerLevel: Packet.NetModuleLoad.powerLevel,
): PacketV1449.NetModuleLoad.powerLevel => {
  switch powerLevel {
  | LockedForEveryone => PacketV1449.NetModuleLoad.LockedForEveryone
  | CanBeChangedByHostAlone => PacketV1449.NetModuleLoad.CanBeChangedByHostAlone
  | CanBeChangedByEveryone => PacketV1449.NetModuleLoad.CanBeChangedByEveryone
  }
}

let netModuleLoadCreativePowerPermissionToV1449 = (
  permission: Packet.NetModuleLoad.creativePowerPermission,
): PacketV1449.NetModuleLoad.creativePowerPermission => {
  {
    powerType: permission.powerType,
    powerLevel: netModuleLoadPowerLevelToV1449(permission.powerLevel),
  }
}

let netModuleLoadFromV1449 = (
  netModuleLoad: PacketV1449.NetModuleLoad.t,
): Packet.NetModuleLoad.t => {
  switch netModuleLoad {
  | Liquid(liquid) => Packet.NetModuleLoad.Liquid(netModuleLoadLiquidFromV1449(liquid))
  | ClientText(commandId, message) => Packet.NetModuleLoad.ClientText(commandId, message)
  | ServerText(playerId, text, color) => Packet.NetModuleLoad.ServerText(playerId, text, color)
  | Ping(position) => Packet.NetModuleLoad.Ping(netModuleLoadPositionFromV1449(position))
  | Ambience(ambience) => Packet.NetModuleLoad.Ambience(netModuleLoadAmbienceFromV1449(ambience))
  | Bestiary(bestiary) => Packet.NetModuleLoad.Bestiary(netModuleLoadBestiaryFromV1449(bestiary))
  | CreativeUnlocks(creativeUnlock) =>
    Packet.NetModuleLoad.CreativeUnlocks({
      itemId: creativeUnlock.itemId,
      sacrificeCount: creativeUnlock.researchedCount,
    })
  | CreativePower(creativePower) => Packet.NetModuleLoad.CreativePower(creativePower)
  | CreativeUnlocksPlayerReport(unlockReport) =>
    Packet.NetModuleLoad.CreativeUnlocksPlayerReport({
      userId: 0,
      itemId: unlockReport.itemId,
      researchedCount: unlockReport.researchedCount,
    })
  | TeleportPylon(teleportPylon) =>
    Packet.NetModuleLoad.TeleportPylon(netModuleLoadTeleportPylonFromV1449(teleportPylon))
  | Particles(particle) => Packet.NetModuleLoad.Particles(netModuleLoadParticleFromV1449(particle))
  | CreativePowerPermissions(creativePowerPermission) =>
    Packet.NetModuleLoad.CreativePowerPermissions(
      netModuleLoadCreativePowerPermissionFromV1449(creativePowerPermission),
    )
  }
}

let netModuleLoadToV1449 = (netModuleLoad: Packet.NetModuleLoad.t): option<
  PacketV1449.NetModuleLoad.t,
> => {
  switch netModuleLoad {
  | Liquid(liquid) => Some(PacketV1449.NetModuleLoad.Liquid(netModuleLoadLiquidToV1449(liquid)))
  | ClientText(commandId, message) => Some(PacketV1449.NetModuleLoad.ClientText(commandId, message))
  | ServerText(playerId, text, color) =>
    Some(PacketV1449.NetModuleLoad.ServerText(playerId, text, color))
  | Ping(position) => Some(PacketV1449.NetModuleLoad.Ping(netModuleLoadPositionToV1449(position)))
  | Ambience(ambience) =>
    Some(PacketV1449.NetModuleLoad.Ambience(netModuleLoadAmbienceToV1449(ambience)))
  | Bestiary(bestiary) =>
    Some(PacketV1449.NetModuleLoad.Bestiary(netModuleLoadBestiaryToV1449(bestiary)))
  | CreativeUnlocks(creativeUnlock) =>
    Some(
      PacketV1449.NetModuleLoad.CreativeUnlocks({
        itemId: creativeUnlock.itemId,
        researchedCount: creativeUnlock.sacrificeCount,
      }),
    )
  | CreativePower(creativePower) => Some(PacketV1449.NetModuleLoad.CreativePower(creativePower))
  | CreativeUnlocksPlayerReport(unlockReport) =>
    Some(
      PacketV1449.NetModuleLoad.CreativeUnlocksPlayerReport({
        itemId: unlockReport.itemId,
        researchedCount: unlockReport.researchedCount,
      }),
    )
  | TeleportPylon(teleportPylon) =>
    Some(PacketV1449.NetModuleLoad.TeleportPylon(netModuleLoadTeleportPylonToV1449(teleportPylon)))
  | Particles(particle) =>
    Some(PacketV1449.NetModuleLoad.Particles(netModuleLoadParticleToV1449(particle)))
  | CreativePowerPermissions(creativePowerPermission) =>
    Some(
      PacketV1449.NetModuleLoad.CreativePowerPermissions(
        netModuleLoadCreativePowerPermissionToV1449(creativePowerPermission),
      ),
    )
  | Banners(_)
  | CraftingRequests(_)
  | LeashedEntity(_)
  | UnbreakableWallScan(_) =>
    None
  }
}

let playerInventorySlotIdFromV1449 = (slot: int): int => {
  if slot <= 98 {
    slot
  } else if slot <= 138 {
    slot
  } else if slot <= 178 {
    slot + 160
  } else if slot == 179 {
    slot + 320
  } else if slot <= 219 {
    slot + 320
  } else if slot <= 259 {
    slot + 480
  } else if slot <= 349 {
    slot + 640
  } else {
    slot
  }
}

let playerInventorySlotIdToV1449 = (slot: int): option<int> => {
  if slot <= 98 {
    Some(slot)
  } else if slot <= 298 {
    let index = slot - 99
    if index < 40 {
      Some(slot)
    } else {
      None
    }
  } else if slot <= 498 {
    let index = slot - 299
    if index < 40 {
      Some(139 + index)
    } else {
      None
    }
  } else if slot == 499 {
    Some(179)
  } else if slot <= 699 {
    let index = slot - 500
    if index < 40 {
      Some(180 + index)
    } else {
      None
    }
  } else if slot <= 899 {
    let index = slot - 700
    if index < 40 {
      Some(220 + index)
    } else {
      None
    }
  } else if slot <= 989 {
    Some(slot - 640)
  } else {
    None
  }
}

let displayItemFromV1449 = (
  item: PacketV1449.TileSectionSend.Entity.displayItem,
): Packet.TileSectionSend.Entity.displayItem => {
  netId: item.netId,
  prefix: item.prefix,
  stack: item.stack,
}

let displayItemOptionFromV1449 = (
  item: option<PacketV1449.TileSectionSend.Entity.displayItem>,
): option<Packet.TileSectionSend.Entity.displayItem> => {
  item->Option.map(displayItemFromV1449)
}

let displayDollFromV1449 = (
  displayDoll: PacketV1449.TileSectionSend.Entity.displayDoll,
): Packet.TileSectionSend.Entity.displayDoll => {
  // V1449 has 8 slots, V145 has 9 slots + misc + pose
  // Add a 9th None slot for mount, empty misc array, and pose 0
  items: displayDoll.items->Array.map(displayItemOptionFromV1449)->Array.concat([None]),
  dyes: displayDoll.dyes->Array.map(displayItemOptionFromV1449)->Array.concat([None]),
  misc: [None],
  pose: 0,
}

let hatRackFromV1449 = (
  hatRack: PacketV1449.TileSectionSend.Entity.hatRack,
): Packet.TileSectionSend.Entity.hatRack => {
  items: hatRack.items->Array.map(displayItemOptionFromV1449),
  dyes: hatRack.dyes->Array.map(displayItemOptionFromV1449),
}

let entityKindFromV1449 = (
  _entityType: int,
  entityKind: PacketV1449.TileSectionSend.Entity.kind,
): Packet.TileSectionSend.Entity.kind => {
  switch entityKind {
  | DisplayDoll(displayDoll) => DisplayDoll(displayDollFromV1449(displayDoll))
  | FoodPlatter(item) => FoodPlatter(displayItemFromV1449(item))
  | HatRack(hatRack) => HatRack(hatRackFromV1449(hatRack))
  | ItemFrame(item) => ItemFrame(displayItemFromV1449(item))
  | LogicSensor(sensor) => LogicSensor({checkType: sensor.checkType, on: sensor.on})
  | TeleportationPylon() => TeleportationPylon()
  | TrainingDummy(dummy) => TrainingDummy({npcSlotId: dummy.npcSlotId})
  | WeaponsRack(item) => WeaponsRack(displayItemFromV1449(item))
  | DeadCellsDisplayJar(item) => DeadCellsDisplayJar(displayItemFromV1449(item))
  | KiteAnchor(anchor) => KiteAnchor({itemType: anchor.itemType})
  | CritterAnchor(anchor) => CritterAnchor({itemType: anchor.itemType})
  }
}

let entitiesFromV1449 = (entities: array<PacketV1449.TileSectionSend.Entity.t>): array<
  Packet.TileSectionSend.Entity.t,
> => {
  entities->Array.map((
    entity: PacketV1449.TileSectionSend.Entity.t,
  ): Packet.TileSectionSend.Entity.t => {
    entityType: entity.entityType,
    id: entity.id,
    x: entity.x,
    y: entity.y,
    entityKind: entityKindFromV1449(entity.entityType, entity.entityKind),
  })
}

let displayItemToV1449 = (
  item: Packet.TileSectionSend.Entity.displayItem,
): PacketV1449.TileSectionSend.Entity.displayItem => {
  netId: item.netId,
  prefix: item.prefix,
  stack: item.stack,
}

let displayItemOptionToV1449 = (item: option<Packet.TileSectionSend.Entity.displayItem>): option<
  PacketV1449.TileSectionSend.Entity.displayItem,
> => {
  item->Option.map(displayItemToV1449)
}

let displayDollToV1449 = (
  displayDoll: Packet.TileSectionSend.Entity.displayDoll,
): PacketV1449.TileSectionSend.Entity.displayDoll => {
  // V145 has 9 slots + misc + pose, V1449 has 8 slots
  // Take only the first 8 slots, discard mount slot, misc, and pose
  items: displayDoll.items->Array.slice(~start=0, ~end=8)->Array.map(displayItemOptionToV1449),
  dyes: displayDoll.dyes->Array.slice(~start=0, ~end=8)->Array.map(displayItemOptionToV1449),
}

let hatRackToV1449 = (
  hatRack: Packet.TileSectionSend.Entity.hatRack,
): PacketV1449.TileSectionSend.Entity.hatRack => {
  items: hatRack.items->Array.map(displayItemOptionToV1449),
  dyes: hatRack.dyes->Array.map(displayItemOptionToV1449),
}

let entityKindToV1449 = (
  _entityType: int,
  entityKind: Packet.TileSectionSend.Entity.kind,
): PacketV1449.TileSectionSend.Entity.kind => {
  switch entityKind {
  | DisplayDoll(displayDoll) => DisplayDoll(displayDollToV1449(displayDoll))
  | FoodPlatter(item) => FoodPlatter(displayItemToV1449(item))
  | HatRack(hatRack) => HatRack(hatRackToV1449(hatRack))
  | ItemFrame(item) => ItemFrame(displayItemToV1449(item))
  | LogicSensor(sensor) => LogicSensor({checkType: sensor.checkType, on: sensor.on})
  | TeleportationPylon() => TeleportationPylon()
  | TrainingDummy(dummy) => TrainingDummy({npcSlotId: dummy.npcSlotId})
  | WeaponsRack(item) => WeaponsRack(displayItemToV1449(item))
  | DeadCellsDisplayJar(item) => DeadCellsDisplayJar(displayItemToV1449(item))
  | KiteAnchor(anchor) => KiteAnchor({itemType: anchor.itemType})
  | CritterAnchor(anchor) => CritterAnchor({itemType: anchor.itemType})
  }
}

let entitiesToV1449 = (entities: array<Packet.TileSectionSend.Entity.t>): array<
  PacketV1449.TileSectionSend.Entity.t,
> => {
  entities->Array.map((
    entity: Packet.TileSectionSend.Entity.t,
  ): PacketV1449.TileSectionSend.Entity.t => {
    entityType: entity.entityType,
    id: entity.id,
    x: entity.x,
    y: entity.y,
    entityKind: entityKindToV1449(entity.entityType, entity.entityKind),
  })
}

let itemDropOwnershipFromV1449 = value =>
  switch Int.bitwiseAnd(value, 3) {
  | 0 => Packet.ItemDropUpdate.None
  | 1 => Packet.ItemDropUpdate.ReserveForLocalPlayer
  | 2 => Packet.ItemDropUpdate.GrabDelayForLocalPlayer
  | _ => Packet.ItemDropUpdate.GrabDelayForAllPlayers
  }

let itemDropOwnershipToV1449 = ownership =>
  switch ownership {
  | Packet.ItemDropUpdate.None => 0
  | Packet.ItemDropUpdate.ReserveForLocalPlayer => 1
  | Packet.ItemDropUpdate.GrabDelayForLocalPlayer => 2
  | Packet.ItemDropUpdate.GrabDelayForAllPlayers => 3
  }

let itemDropFromV1449 = (
  item: PacketV1449.ItemDropUpdate.t,
  ~shimmer: option<Packet.ItemDropUpdate.shimmer>=?,
  ~enemyGrabDelayTime: option<int>=?,
): Packet.ItemDropUpdate.t => {
  itemDropId: item.itemDropId,
  position: {x: item.x, y: item.y},
  velocity: {x: item.vx, y: item.vy},
  stack: item.stack,
  prefix: item.prefix,
  ownership: itemDropOwnershipFromV1449(item.noDelay),
  itemId: item.itemId,
  shimmer,
  enemyGrabDelayTime,
}

let itemDropToV1449 = (item: Packet.ItemDropUpdate.t): PacketV1449.ItemDropUpdate.t => {
  itemDropId: item.itemDropId,
  x: item.position.x,
  y: item.position.y,
  vx: item.velocity.x,
  vy: item.velocity.y,
  stack: item.stack,
  prefix: item.prefix,
  noDelay: itemDropOwnershipToV1449(item.ownership),
  itemId: item.itemId,
}

let fromV1449 = (packet: PacketV1449.t): Packet.t => {
  switch packet {
  | PlayerInfo(playerInfo) =>
    Packet.PlayerInfo({
      playerId: playerInfo.playerId,
      skinVariant: playerInfo.skinVariant,
      hair: playerInfo.hair,
      name: playerInfo.name,
      hairDye: playerInfo.hairDye,
      hideVisuals: playerInfo.hideVisuals,
      hideVisuals2: playerInfo.hideVisuals2,
      hideMisc: playerInfo.hideMisc,
      hairColor: playerInfo.hairColor,
      skinColor: playerInfo.skinColor,
      eyeColor: playerInfo.eyeColor,
      shirtColor: playerInfo.shirtColor,
      underShirtColor: playerInfo.underShirtColor,
      pantsColor: playerInfo.pantsColor,
      shoeColor: playerInfo.shoeColor,
      difficulty: playerInfo.difficulty,
      mode: playerInfo.mode,
      extraAccessory: playerInfo.extraAccessory,
      usingBiomeTorches: playerInfo.usingBiomeTorches,
      unlockedBiomeTorches: playerInfo.unlockedBiomeTorches,
      happyFunTorchTime: playerInfo.happyFunTorchTime,
      unlockedSuperCart: playerInfo.unlockedSuperCart,
      enabledSuperCart: playerInfo.enabledSuperCart,
      usedAegisCrystal: playerInfo.usedAegisCrystal,
      usedAegisFruit: playerInfo.usedAegisFruit,
      usedArcaneCrystal: playerInfo.usedArcaneCrystal,
      usedGalaxyPearl: playerInfo.usedGalaxyPearl,
      usedGummyWorm: playerInfo.usedGummyWorm,
      usedAmbrosia: playerInfo.usedAmbrosia,
      ateArtisanBread: playerInfo.ateArtisanBread,
      voiceVariant: 1,
      voicePitchOffset: 0.0,
    })
  | PlayerInventorySlot(playerInventorySlot) =>
    Packet.PlayerInventorySlot({
      playerId: playerInventorySlot.playerId,
      slot: playerInventorySlotIdFromV1449(playerInventorySlot.slot),
      stack: playerInventorySlot.stack,
      prefix: playerInventorySlot.prefix,
      itemType: playerInventorySlot.itemId,
      favorited: false,
      blocked: false,
    })
  | TileSectionSend(tileSectionSend) =>
    Packet.TileSectionSend({
      height: tileSectionSend.height,
      width: tileSectionSend.width,
      tileX: tileSectionSend.tileX,
      tileY: tileSectionSend.tileY,
      tiles: tileSectionSend.tiles,
      chests: tileSectionSend.chests,
      signs: tileSectionSend.signs,
      entities: entitiesFromV1449(tileSectionSend.entities),
    })
  | TileSquareSend(tileSquareSend) => Packet.TileSquareSend(tileSquareSend)
  | WorldInfo(worldInfo) => Packet.WorldInfo(worldInfoFromV1449(worldInfo))
  | InitialTileSectionsRequest(req) =>
    Packet.InitialTileSectionsRequest({x: req.x, y: req.y, team: 0})
  | PlayerSpawn(playerSpawn) =>
    Packet.PlayerSpawn({
      playerId: playerSpawn.playerId,
      x: playerSpawn.x,
      y: playerSpawn.y,
      timeRemaining: playerSpawn.timeRemaining,
      numberOfDeathsPve: playerSpawn.numberOfDeathsPve,
      numberOfDeathsPvp: playerSpawn.numberOfDeathsPvp,
      context: playerSpawnContextFromV1449(playerSpawn.context),
      team: 0,
    })
  | PlayerUpdate(playerUpdate) =>
    Packet.PlayerUpdate({
      playerId: playerUpdate.playerId,
      control: playerUpdateControlFromV1449(playerUpdate.control),
      direction: playerUpdateDirectionFromV1449(playerUpdate.direction),
      pulleyDirection: playerUpdatePulleyDirectionFromV1449(playerUpdate.pulleyDirection),
      vortexStealthActive: playerUpdate.vortexStealthActive,
      gravityDirection: playerUpdateGravityDirectionFromV1449(playerUpdate.gravityDirection),
      shieldRaised: playerUpdate.shouldGuard,
      ghost: playerUpdate.ghost,
      selectedItem: playerUpdate.selectedItem,
      position: playerUpdate.position,
      velocity: playerUpdate.velocity,
      mountType: None,
      potionOfReturn: playerUpdatePotionOfReturnFromV1449(playerUpdate.potionOfReturn),
      tryKeepingHoveringUp: playerUpdate.tryKeepingHoveringUp,
      isVoidVaultEnabled: playerUpdate.isVoidVaultEnabled,
      isSitting: playerUpdate.isSitting,
      hasFinishedAnyDd2Event: playerUpdate.hasFinishedAnyDd2Event,
      isPettingAnimal: playerUpdate.isPettingAnimal,
      isTheAnimalBeingPetSmall: playerUpdate.isTheAnimalBeingPetSmall,
      tryKeepingHoveringDown: playerUpdate.tryKeepingHoveringDown,
      isSleeping: playerUpdate.isSleeping,
      autoReuseAllWeapons: false,
      controlDownHold: false,
      isOperatingAnotherEntity: false,
      controlUseTile: false,
      netCameraTarget: None,
      lastItemUseAttemptSuccess: false,
      snappingStoneLightUp: false,
    })
  | ItemDropUpdate(item) => Packet.ItemDropUpdate(itemDropFromV1449(item))
  | ItemDropInstancedUpdate(item) =>
    Packet.ItemDropInstancedUpdate(itemDropFromV1449(item))
  | ItemDropShimmeredUpdate(item) =>
    Packet.ItemDropUpdate(itemDropFromV1449(
      Obj.magic(item),
      ~shimmer={shimmered: item.shimmered, shimmerTime: item.shimmeredTime},
    ))
  | ItemDropProtectedUpdate(item) =>
    Packet.ItemDropUpdate(itemDropFromV1449(
      Obj.magic(item),
      ~enemyGrabDelayTime=item.timeLeftInWhichTheItemCannotBeTakenByEnemies,
    ))
  | ItemOwner(itemOwner) =>
    Packet.ItemOwner({
      itemDropId: itemOwner.itemDropId,
      owner: itemOwner.owner,
      timeToKeepReservation: 0,
      grabDelayPlayer: 0,
      grabDelayTime: 0,
      position: {x: 0.0, y: 0.0},
    })
  | NpcUpdate(npcUpdate) =>
    Packet.NpcUpdate({
      npcSlotId: npcUpdate.npcSlotId,
      generation: 0,
      npcTypeId: npcUpdate.npcTypeId,
      x: npcUpdate.x,
      y: npcUpdate.y,
      vx: npcUpdate.vx,
      vy: npcUpdate.vy,
      target: npcUpdate.target,
      directionX: npcUpdate.directionX,
      directionY: npcUpdate.directionY,
      ai: npcUpdate.ai,
      spriteDirection: npcUpdate.spriteDirection,
      life: npcUpdateLifeFromV1449(npcUpdate.life),
      releaseOwner: npcUpdate.releaseOwner,
      playerCountScale: npcUpdate.playerCountScale,
      difficulty: npcUpdate.strengthMultiplier,
      spawnedFromStatue: npcUpdate.spawnedFromStatue,
      spawnNeedsSyncing: false,
      shimmerTransparency: false,
    })
  | ProjectileSync(value) =>
    Packet.ProjectileSync({
      projectileKey: {
        spawner: value.owner,
        index: value.projectileId,
        generation: value.projectileUuid->Option.getOr(0),
      },
      position: {x: value.x, y: value.y},
      velocity: {x: value.vx, y: value.vy},
      projectileType: value.projectileType,
      ai: value.ai,
      bannerIdToRespondTo: value.bannerIdToRespondTo,
      damage: value.damage,
      knockback: value.knockback,
      originalDamage: value.originalDamage,
    })
  | NpcStrike(value) =>
    Packet.NpcStrike({
      npcSlotId: value.npcId,
      generation: 0,
      damage: value.damage,
      knockback: value.knockback,
      direction: value.direction,
      critical: value.critical,
    })
  | ProjectileDestroy(value) =>
    Packet.ProjectileDestroy({
      projectileKey: {spawner: value.owner, index: value.projectileId, generation: 0},
      position: {x: 0.0, y: 0.0},
    })
  | ItemOwnerRemove(value) =>
    Packet.ItemOwnerRemove({itemDropId: value.itemDropId, forceAssignToServer: false})
  | PlayerDodge(value) =>
    Packet.PlayerDodge({
      playerId: value.playerId,
      dodge: switch value.dodge {
      | Ninja => Packet.PlayerDodge.Ninja
      | Shadow => Packet.PlayerDodge.Shadow
      | BrainOfConfusion => Packet.PlayerDodge.BrainOfConfusion
      },
    })
  | NpcCatch(value) => Packet.NpcCatch({npcId: value.npcId})
  | Zones(zones) =>
    Packet.Zones({
      playerId: zones.playerId,
      zone1: zones.zone1,
      zone2: zones.zone2,
      zone3: zones.zone3,
      zone4: zones.zone4,
      zone5: zones.zone5,
      townNPCs: 0,
    })
  | PlayerBuffsSet(playerBuffsSet) =>
    Packet.PlayerBuffsSet({
      playerId: playerBuffsSet.playerId,
      buffs: playerBuffsSet.buffs->Array.filter(buff => buff != 0),
    })
  | NpcBuffUpdate(npcBuffUpdate) => {
      let buffs: array<int> = []
      let buffTimes: array<int> = []
      for i in 0 to npcBuffUpdate.buffs->Array.length - 1 {
        let buff = npcBuffUpdate.buffs->Array.getUnsafe(i)
        let buffTime = npcBuffUpdate.buffTimes->Array.getUnsafe(i)
        if buff > 0 && buffTime > 0 {
          buffs->Array.push(buff)
          buffTimes->Array.push(buffTime)
        }
      }
      Packet.NpcBuffUpdate({npcId: npcBuffUpdate.npcId, buffs, buffTimes})
    }
  | Teleport(teleport) =>
    Packet.Teleport({
      teleportType: switch teleport.teleportType {
      | PacketV1449.Teleport.Player => Packet.Teleport.Player
      | PacketV1449.Teleport.Npc => Packet.Teleport.Npc
      | PacketV1449.Teleport.PlayerToPlayer => Packet.Teleport.PlayerToPlayer
      },
      getPositionFromTarget: teleport.getPositionFromTarget,
      targetId: teleport.targetId,
      x: teleport.x,
      y: teleport.y,
      style: teleport.style,
      extraInfo: teleport.extraInfo,
    })
  | TravellingMerchantInventory(inv) => Packet.TravellingMerchantInventory({items: inv.items})
  | TeleportationPotion(teleportationPotion) =>
    Packet.TeleportationPotion({
      teleportType: switch teleportationPotion.teleportType {
      | PacketV1449.TeleportationPotion.TeleportationPotion =>
        Packet.TeleportationPotion.TeleportationPotion
      | PacketV1449.TeleportationPotion.MagicConch => Packet.TeleportationPotion.MagicConch
      | PacketV1449.TeleportationPotion.DemonConch => Packet.TeleportationPotion.DemonConch
      | PacketV1449.TeleportationPotion.ShellphoneSpawn =>
        Packet.TeleportationPotion.ShellphoneSpawn
      },
    })
  | ItemForceIntoNearestChest(itemForce) =>
    Packet.ItemForceIntoNearestChest(
      Packet.ItemForceIntoNearestChest.ClientRequest({
        slotIds: [itemForce.slot],
        smartStack: false,
      }),
    )
  | TileEntityDisplayDollItemSync(tileEntityDisplayDollItemSync) =>
    Packet.TileEntityDisplayDollItemSync({
      playerId: tileEntityDisplayDollItemSync.playerId,
      tileEntityId: tileEntityDisplayDollItemSync.tileEntityId,
      itemIndex: tileEntityDisplayDollItemSync.itemIndex,
      command: Packet.TileEntityDisplayDollItemSync.Equip,
      data: Packet.TileEntityDisplayDollItemSync.Item({
        itemId: tileEntityDisplayDollItemSync.itemId,
        stack: tileEntityDisplayDollItemSync.stack,
        prefix: tileEntityDisplayDollItemSync.prefix,
      }),
    })
  | PlayerLuckFactorsUpdate(playerLuckFactorsUpdate) =>
    Packet.PlayerLuckFactorsUpdate({
      playerId: playerLuckFactorsUpdate.playerId,
      ladyBugLuckTimeLeft: playerLuckFactorsUpdate.ladyBugLuckTimeLeft,
      torchLuck: playerLuckFactorsUpdate.torchLuck,
      luckPotion: playerLuckFactorsUpdate.luckPotion,
      hasGardenGnomeNearby: playerLuckFactorsUpdate.hasGardenGnomeNearby,
      brokenMirrorBadLuck: false,
      equipmentBasedLuckBonus: playerLuckFactorsUpdate.equipmentBasedLuckBonus,
      coinLuck: playerLuckFactorsUpdate.coinLuck,
      kiteLuckLevel: 0,
    })
  | ShimmerEffectOrCoinLuck(shimmerEffectOrCoinLuck) =>
    switch shimmerEffectOrCoinLuck {
    | PacketV1449.ShimmerEffectOrCoinLuck.ShimmerEffect(x, y) =>
      Packet.ShimmerEffectOrCoinLuck(Packet.ShimmerEffectOrCoinLuck.ShimmerEffect(x, y))
    | PacketV1449.ShimmerEffectOrCoinLuck.CoinLuck(coinLuck) =>
      Packet.ShimmerEffectOrCoinLuck(
        Packet.ShimmerEffectOrCoinLuck.CoinLuck(shimmerCoinLuckFromV1449(coinLuck)),
      )
    | PacketV1449.ShimmerEffectOrCoinLuck.NewShimmerEffect(_) =>
      Packet.ShimmerEffectOrCoinLuck(Packet.ShimmerEffectOrCoinLuck.ShimmerEffect(0.0, 0.0))
    }
  | NetModuleLoad(netModuleLoad) => Packet.NetModuleLoad(netModuleLoadFromV1449(netModuleLoad))
  | packet => Obj.magic(packet)
  }
}
let latestToV1449 = (packet: Packet.t): PacketV1449.t => {
  switch packet {
  | PlayerInfo(playerInfo) =>
    PacketV1449.PlayerInfo({
      playerId: playerInfo.playerId,
      skinVariant: playerInfo.skinVariant,
      hair: playerInfo.hair,
      name: playerInfo.name,
      hairDye: playerInfo.hairDye,
      hideVisuals: playerInfo.hideVisuals,
      hideVisuals2: playerInfo.hideVisuals2,
      hideMisc: playerInfo.hideMisc,
      hairColor: playerInfo.hairColor,
      skinColor: playerInfo.skinColor,
      eyeColor: playerInfo.eyeColor,
      shirtColor: playerInfo.shirtColor,
      underShirtColor: playerInfo.underShirtColor,
      pantsColor: playerInfo.pantsColor,
      shoeColor: playerInfo.shoeColor,
      difficulty: playerInfo.difficulty,
      mode: playerInfo.mode,
      extraAccessory: playerInfo.extraAccessory,
      usingBiomeTorches: playerInfo.usingBiomeTorches,
      unlockedBiomeTorches: playerInfo.unlockedBiomeTorches,
      happyFunTorchTime: playerInfo.happyFunTorchTime,
      unlockedSuperCart: playerInfo.unlockedSuperCart,
      enabledSuperCart: playerInfo.enabledSuperCart,
      usedAegisCrystal: playerInfo.usedAegisCrystal,
      usedAegisFruit: playerInfo.usedAegisFruit,
      usedArcaneCrystal: playerInfo.usedArcaneCrystal,
      usedGalaxyPearl: playerInfo.usedGalaxyPearl,
      usedGummyWorm: playerInfo.usedGummyWorm,
      usedAmbrosia: playerInfo.usedAmbrosia,
      ateArtisanBread: playerInfo.ateArtisanBread,
    })
  | PlayerInventorySlot(playerInventorySlot) =>
    PacketV1449.PlayerInventorySlot({
      playerId: playerInventorySlot.playerId,
      slot: playerInventorySlot.slot,
      stack: playerInventorySlot.stack,
      prefix: playerInventorySlot.prefix,
      itemId: playerInventorySlot.itemType,
    })
  | WorldInfo(worldInfo) => PacketV1449.WorldInfo(worldInfoToV1449(worldInfo))
  | InitialTileSectionsRequest(req) => PacketV1449.InitialTileSectionsRequest({x: req.x, y: req.y})
  | PlayerSpawn(playerSpawn) =>
    PacketV1449.PlayerSpawn({
      playerId: playerSpawn.playerId,
      x: playerSpawn.x,
      y: playerSpawn.y,
      timeRemaining: playerSpawn.timeRemaining,
      numberOfDeathsPve: playerSpawn.numberOfDeathsPve,
      numberOfDeathsPvp: playerSpawn.numberOfDeathsPvp,
      context: playerSpawnContextToV1449(playerSpawn.context),
    })
  | PlayerUpdate(playerUpdate) =>
    PacketV1449.PlayerUpdate({
      playerId: playerUpdate.playerId,
      control: playerUpdateControlToV1449(playerUpdate.control),
      direction: playerUpdateDirectionToV1449(playerUpdate.direction),
      pulleyDirection: playerUpdatePulleyDirectionToV1449(playerUpdate.pulleyDirection),
      vortexStealthActive: playerUpdate.vortexStealthActive,
      gravityDirection: playerUpdateGravityDirectionToV1449(playerUpdate.gravityDirection),
      shouldGuard: playerUpdate.shieldRaised,
      ghost: playerUpdate.ghost,
      selectedItem: playerUpdate.selectedItem,
      position: playerUpdate.position,
      velocity: playerUpdate.velocity,
      potionOfReturn: playerUpdatePotionOfReturnToV1449(playerUpdate.potionOfReturn),
      tryKeepingHoveringUp: playerUpdate.tryKeepingHoveringUp,
      isVoidVaultEnabled: playerUpdate.isVoidVaultEnabled,
      isSitting: playerUpdate.isSitting,
      hasFinishedAnyDd2Event: playerUpdate.hasFinishedAnyDd2Event,
      isPettingAnimal: playerUpdate.isPettingAnimal,
      isTheAnimalBeingPetSmall: playerUpdate.isTheAnimalBeingPetSmall,
      tryKeepingHoveringDown: playerUpdate.tryKeepingHoveringDown,
      isSleeping: playerUpdate.isSleeping,
    })
  | ItemDropUpdate(item) =>
    switch (item.shimmer, item.enemyGrabDelayTime) {
    | (Some(shimmer), _) =>
      let base = itemDropToV1449(item)
      let base: PacketV1449.ItemDropShimmeredUpdate.t = Obj.magic(base)
      PacketV1449.ItemDropShimmeredUpdate({
        ...base,
        shimmered: shimmer.shimmered,
        shimmeredTime: shimmer.shimmerTime,
      })
    | (None, Some(enemyGrabDelayTime)) =>
      let base = itemDropToV1449(item)
      let base: PacketV1449.ItemDropProtectedUpdate.t = Obj.magic(base)
      PacketV1449.ItemDropProtectedUpdate({
        ...base,
        timeLeftInWhichTheItemCannotBeTakenByEnemies: enemyGrabDelayTime,
      })
    | (None, None) => PacketV1449.ItemDropUpdate(itemDropToV1449(item))
    }
  | ItemDropInstancedUpdate(item) =>
    PacketV1449.ItemDropInstancedUpdate(itemDropToV1449(item))
  | ItemOwner(itemOwner) =>
    PacketV1449.ItemOwner({
      itemDropId: itemOwner.itemDropId,
      owner: itemOwner.owner,
    })
  | NpcUpdate(npcUpdate) =>
    PacketV1449.NpcUpdate({
      npcSlotId: npcUpdate.npcSlotId,
      npcTypeId: npcUpdate.npcTypeId,
      x: npcUpdate.x,
      y: npcUpdate.y,
      vx: npcUpdate.vx,
      vy: npcUpdate.vy,
      target: npcUpdate.target,
      directionX: npcUpdate.directionX,
      directionY: npcUpdate.directionY,
      ai: npcUpdate.ai,
      spriteDirection: npcUpdate.spriteDirection,
      life: npcUpdateLifeToV1449(npcUpdate.life),
      releaseOwner: npcUpdate.releaseOwner,
      playerCountScale: npcUpdate.playerCountScale,
      strengthMultiplier: npcUpdate.difficulty,
      spawnedFromStatue: npcUpdate.spawnedFromStatue,
    })
  | ProjectileSync(value) =>
    PacketV1449.ProjectileSync({
      projectileId: value.projectileKey.index,
      x: value.position.x,
      y: value.position.y,
      vx: value.velocity.x,
      vy: value.velocity.y,
      owner: value.projectileKey.spawner,
      projectileType: value.projectileType,
      ai: value.ai,
      bannerIdToRespondTo: value.bannerIdToRespondTo,
      damage: value.damage,
      knockback: value.knockback,
      originalDamage: value.originalDamage,
      projectileUuid: value.projectileKey.generation == 0 ? None : Some(value.projectileKey.generation),
    })
  | NpcStrike(value) =>
    PacketV1449.NpcStrike({
      npcId: value.npcSlotId,
      damage: value.damage,
      knockback: value.knockback,
      direction: value.direction,
      critical: value.critical,
    })
  | ProjectileDestroy(value) =>
    PacketV1449.ProjectileDestroy({
      projectileId: value.projectileKey.index,
      owner: value.projectileKey.spawner,
    })
  | ItemOwnerRemove(value) => PacketV1449.ItemOwnerRemove({itemDropId: value.itemDropId})
  | PlayerDodge(value) =>
    PacketV1449.PlayerDodge({
      playerId: value.playerId,
      dodge: switch value.dodge {
      | Ninja => PacketV1449.PlayerDodge.Ninja
      | Shadow => PacketV1449.PlayerDodge.Shadow
      | BrainOfConfusion | MysticSash => PacketV1449.PlayerDodge.BrainOfConfusion
      },
    })
  | NpcCatch(value) => PacketV1449.NpcCatch({npcId: value.npcId, playerId: 0})
  | Zones(zones) =>
    PacketV1449.Zones({
      playerId: zones.playerId,
      zone1: zones.zone1,
      zone2: zones.zone2,
      zone3: zones.zone3,
      zone4: zones.zone4,
      zone5: zones.zone5,
    })
  | PlayerBuffsSet(playerBuffsSet) => {
      let buffs = Array.make(~length=44, 0)
      let max = min(44, playerBuffsSet.buffs->Array.length)
      for i in 0 to max - 1 {
        buffs->Array.setUnsafe(i, playerBuffsSet.buffs->Array.getUnsafe(i))
      }
      PacketV1449.PlayerBuffsSet({playerId: playerBuffsSet.playerId, buffs})
    }
  | NpcBuffUpdate(npcBuffUpdate) => {
      let buffs = Array.make(~length=20, 0)
      let buffTimes = Array.make(~length=20, 0)
      let max = min(20, npcBuffUpdate.buffs->Array.length)
      for i in 0 to max - 1 {
        buffs->Array.setUnsafe(i, npcBuffUpdate.buffs->Array.getUnsafe(i))
        buffTimes->Array.setUnsafe(i, npcBuffUpdate.buffTimes->Array.getUnsafe(i))
      }
      PacketV1449.NpcBuffUpdate({npcId: npcBuffUpdate.npcId, buffs, buffTimes})
    }
  | Teleport(teleport) =>
    PacketV1449.Teleport({
      teleportType: switch teleport.teleportType {
      | Packet.Teleport.Player => PacketV1449.Teleport.Player
      | Packet.Teleport.Npc => PacketV1449.Teleport.Npc
      | Packet.Teleport.PlayerToPlayer => PacketV1449.Teleport.PlayerToPlayer
      // Should be discarded by previous code
      | Packet.Teleport.TeleportAck => PacketV1449.Teleport.Player
      },
      getPositionFromTarget: teleport.getPositionFromTarget,
      targetId: teleport.targetId,
      x: teleport.x,
      y: teleport.y,
      style: teleport.style,
      extraInfo: teleport.extraInfo,
    })
  | TravellingMerchantInventory(inv) => {
      let items = Array.make(~length=40, 0)
      let max = min(40, inv.items->Array.length)
      for i in 0 to max - 1 {
        items->Array.setUnsafe(i, inv.items->Array.getUnsafe(i))
      }
      PacketV1449.TravellingMerchantInventory({items: items})
    }
  | TeleportationPotion(teleportationPotion) =>
    PacketV1449.TeleportationPotion({
      teleportType: switch teleportationPotion.teleportType {
      | Packet.TeleportationPotion.TeleportationPotion =>
        PacketV1449.TeleportationPotion.TeleportationPotion
      | Packet.TeleportationPotion.MagicConch => PacketV1449.TeleportationPotion.MagicConch
      | Packet.TeleportationPotion.DemonConch => PacketV1449.TeleportationPotion.DemonConch
      | Packet.TeleportationPotion.ShellphoneSpawn =>
        PacketV1449.TeleportationPotion.ShellphoneSpawn
      | Packet.TeleportationPotion.PlayerNoSpaceTeleport =>
        PacketV1449.TeleportationPotion.TeleportationPotion
      },
    })
  | ItemForceIntoNearestChest(itemForce) =>
    switch itemForce {
    | Packet.ItemForceIntoNearestChest.ClientRequest({slotIds}) =>
      PacketV1449.ItemForceIntoNearestChest({
        slot: slotIds->Array.get(0)->Option.getOr(0),
      })
    | Packet.ItemForceIntoNearestChest.ServerBlockedChests(_) =>
      PacketV1449.ItemForceIntoNearestChest({slot: 0})
    }
  | TileEntityDisplayDollItemSync(tileEntityDisplayDollItemSync) =>
    switch tileEntityDisplayDollItemSync.data {
    | Packet.TileEntityDisplayDollItemSync.Item(item) =>
      PacketV1449.TileEntityDisplayDollItemSync({
        playerId: tileEntityDisplayDollItemSync.playerId,
        tileEntityId: tileEntityDisplayDollItemSync.tileEntityId,
        itemIndex: tileEntityDisplayDollItemSync.itemIndex,
        itemId: item.itemId,
        stack: item.stack,
        prefix: item.prefix,
      })
    | Packet.TileEntityDisplayDollItemSync.PoseValue(_) =>
      PacketV1449.TileEntityDisplayDollItemSync({
        playerId: tileEntityDisplayDollItemSync.playerId,
        tileEntityId: tileEntityDisplayDollItemSync.tileEntityId,
        itemIndex: tileEntityDisplayDollItemSync.itemIndex,
        itemId: 0,
        stack: 0,
        prefix: 0,
      })
    }
  | PlayerLuckFactorsUpdate(playerLuckFactorsUpdate) =>
    PacketV1449.PlayerLuckFactorsUpdate({
      playerId: playerLuckFactorsUpdate.playerId,
      ladyBugLuckTimeLeft: playerLuckFactorsUpdate.ladyBugLuckTimeLeft,
      torchLuck: playerLuckFactorsUpdate.torchLuck,
      luckPotion: playerLuckFactorsUpdate.luckPotion,
      hasGardenGnomeNearby: playerLuckFactorsUpdate.hasGardenGnomeNearby,
      equipmentBasedLuckBonus: playerLuckFactorsUpdate.equipmentBasedLuckBonus,
      coinLuck: playerLuckFactorsUpdate.coinLuck,
    })
  | ShimmerEffectOrCoinLuck(shimmerEffectOrCoinLuck) =>
    switch shimmerEffectOrCoinLuck {
    | Packet.ShimmerEffectOrCoinLuck.ShimmerEffect(x, y) =>
      PacketV1449.ShimmerEffectOrCoinLuck(PacketV1449.ShimmerEffectOrCoinLuck.ShimmerEffect(x, y))
    | Packet.ShimmerEffectOrCoinLuck.CoinLuck(coinLuck) =>
      PacketV1449.ShimmerEffectOrCoinLuck(
        PacketV1449.ShimmerEffectOrCoinLuck.CoinLuck(shimmerCoinLuckToV1449(coinLuck)),
      )
    }
  | NetModuleLoad(netModuleLoad) =>
    switch netModuleLoadToV1449(netModuleLoad) {
    | Some(converted) => PacketV1449.NetModuleLoad(converted)
    | None => PacketV1449.NetModuleLoad(PacketV1449.NetModuleLoad.Ping({x: 0.0, y: 0.0}))
    }
  | TileSectionSend(tileSectionSend) =>
    PacketV1449.TileSectionSend({
      height: tileSectionSend.height,
      width: tileSectionSend.width,
      tileX: tileSectionSend.tileX,
      tileY: tileSectionSend.tileY,
      tiles: tileSectionSend.tiles,
      chests: tileSectionSend.chests,
      signs: tileSectionSend.signs,
      entities: entitiesToV1449(tileSectionSend.entities),
    })
  | ItemDropClear(itemDropClear) =>
    PacketV1449.ItemDropUpdate({
      itemDropId: itemDropClear.itemDropId,
      x: 0.0,
      y: 0.0,
      vx: 0.0,
      vy: 0.0,
      stack: 0,
      prefix: 0,
      noDelay: 0,
      itemId: 0,
    })
  | packet => Obj.magic(packet)
  }
}

type convertIfNeeded =
  | PacketStructureIsSame
  | ConvertedToLatestVersion(Packet.t)
  | DiscardAsNotExists
let convertFromV1449IfNeeded = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): result<
  convertIfNeeded,
  IParser.parseError,
> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(NpcItemStrike) => Ok(DiscardAsNotExists)
    | Some(ShimmerEffectOrCoinLuck) if !fromServer => Ok(DiscardAsNotExists)
    // Packets with structural changes between v1449 and v145
    | Some(PlayerInfo)
    | Some(PlayerInventorySlot)
    | Some(WorldInfo)
    | Some(InitialTileSectionsRequest)
    | Some(PlayerSpawn)
    | Some(PlayerUpdate)
    | Some(ItemDropUpdate)
    | Some(ItemOwner)
    | Some(NpcUpdate)
    | Some(ProjectileSync)
    | Some(NpcStrike)
    | Some(ProjectileDestroy)
    | Some(ItemOwnerRemove)
    | Some(Zones)
    | Some(PlayerBuffsSet)
    | Some(NpcBuffUpdate)
    | Some(Teleport)
    | Some(TravellingMerchantInventory)
    | Some(TeleportationPotion)
    | Some(ItemForceIntoNearestChest)
    | Some(TileEntityDisplayDollItemSync)
    | Some(PlayerLuckFactorsUpdate)
    | Some(PlayerDodge)
    | Some(NpcCatch)
    | Some(ShimmerEffectOrCoinLuck)
    | Some(ItemDropInstancedUpdate)
    | Some(ItemDropShimmeredUpdate)
    | Some(ItemDropProtectedUpdate)
    | Some(TileSectionSend)
    | Some(TileSquareSend)
    | Some(NetModuleLoad) =>
      try {
        Parserv1449.parse(~buffer, ~fromServer)
        ->Result.map(fromV1449)
        ->Result.map(p => ConvertedToLatestVersion(p))
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "Parser.parseLazy", error: obj}))
      }
    | Some(_) => Ok(PacketStructureIsSame)
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}

type convertToV1449IfNeeded =
  | PacketStructureIsSame
  | ConvertedToV1449(PacketV1449.t)
  | DiscardAsNotExists
let convertToV1449IfNeeded = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): result<
  convertToV1449IfNeeded,
  IParser.parseError,
> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(ChestResize)
    | Some(DeadCellsDisplayJarTryPlacing)
    | Some(HostToken)
    | Some(ItemDropPosition)
    | Some(LeashedEntityAnchorInsertItem)
    | Some(NpcHurtByDebuff)
    | Some(Ping)
    | Some(PlayerItemUseSound)
    | Some(PlayerSpectate)
    | Some(PlayerTeamSwapSpawn)
    | Some(PlayerTeamUpdate)
    | Some(SectionRequest)
    | Some(DamageNPCAck)
    | Some(ServerInfo)
    | Some(PlayerPlatformInfo)
    | Some(NpcItemStrike)
    | Some(ItemDropShimmeredUpdate)
    | Some(ItemDropProtectedUpdate) =>
      Ok(DiscardAsNotExists)
    // Packets with structural changes between v1449 and v145
    | Some(PlayerInfo)
    | Some(PlayerInventorySlot)
    | Some(WorldInfo)
    | Some(InitialTileSectionsRequest)
    | Some(PlayerSpawn)
    | Some(PlayerUpdate)
    | Some(ItemDropUpdate)
    | Some(ItemOwner)
    | Some(NpcUpdate)
    | Some(ProjectileSync)
    | Some(NpcStrike)
    | Some(ProjectileDestroy)
    | Some(ItemOwnerRemove)
    | Some(Zones)
    | Some(PlayerBuffsSet)
    | Some(NpcBuffUpdate)
    | Some(Teleport)
    | Some(TravellingMerchantInventory)
    | Some(TeleportationPotion)
    | Some(ItemForceIntoNearestChest)
    | Some(TileEntityDisplayDollItemSync)
    | Some(PlayerLuckFactorsUpdate)
    | Some(PlayerDodge)
    | Some(NpcCatch)
    | Some(ShimmerEffectOrCoinLuck)
    | Some(ItemDropInstancedUpdate)
    | Some(NetModuleLoad)
    | Some(ItemDropClear) =>
      try {
        Parser.parse(~buffer, ~fromServer)->Result.map(packet =>
          switch packet {
          | PlayerInventorySlot(playerInventorySlot) =>
            switch playerInventorySlotIdToV1449(playerInventorySlot.slot) {
            | Some(slot) =>
              ConvertedToV1449(
                PacketV1449.PlayerInventorySlot({
                  playerId: playerInventorySlot.playerId,
                  slot,
                  stack: playerInventorySlot.stack,
                  prefix: playerInventorySlot.prefix,
                  itemId: playerInventorySlot.itemType,
                }),
              )
            | None => DiscardAsNotExists
            }
          | Teleport({teleportType: Packet.Teleport.TeleportAck}) => DiscardAsNotExists
          | NetModuleLoad(netModuleLoad) =>
            switch netModuleLoadToV1449(netModuleLoad) {
            | Some(converted) => ConvertedToV1449(PacketV1449.NetModuleLoad(converted))
            | None => DiscardAsNotExists
            }
          | _ => ConvertedToV1449(latestToV1449(packet))
          }
        )
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "Parser.parseLazy", error: obj}))
      }
    | Some(_) => Ok(PacketStructureIsSame)
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}
