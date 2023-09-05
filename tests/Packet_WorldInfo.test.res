module WorldInfo = Packet.WorldInfo

open Zora

let worldInfo: WorldInfo.t = {
  let time = 27000
  let dayAndMoonInfo = 1
  let moonPhase = 0
  let maxTilesX = 8400
  let maxTilesY = 2400
  let worldSurface = 745
  let rockLayer = 1009
  /*
   * Mobile Bug to look into:
   * When this was 1 with name "Dark Gaming", it caused mobile clients to get stuck after receiving world info.
   * When it was 1 with the name "Dark Gaming - Lite" it did not cause them to get stuck
   */
  let worldId = 1786675403
  let worldName = "Dark Gaming"
  let gameMode = 2
  let copperOreTier = 7
  let ironOreTier = 6
  let silverOreTier = 9
  let goldOreTier = 8
  let cobaltOreTier = 107
  let mythrilOreTier = 108
  let adamantiteOreTier = 111

  let worldInfo: WorldInfo.t = {
    time,
    dayAndMoonInfo,
    moonPhase,
    maxTilesX,
    maxTilesY,
    spawnX: 1,
    spawnY: 2,
    worldSurface,
    rockLayer,
    worldId,
    worldName,
    gameMode,
    worldUniqueId: Array16.fromArray(Belt.Array.make(16, 0))->Belt.Option.getExn,
    worldGeneratorVersion: NodeJs.BigInt.fromInt(0),
    moonType: 0,
    treeBackground: 0,
    treeBackground2: 0,
    treeBackground3: 0,
    treeBackground4: 0,
    corruptionBackground: 0,
    jungleBackground: 0,
    snowBackground: 0,
    hallowBackground: 0,
    crimsonBackground: 0,
    desertBackground: 0,
    oceanBackground: 0,
    mushroomBackground: 0,
    underworldBackground: 0,
    iceBackStyle: 0,
    jungleBackStyle: 0,
    hellBackStyle: 0,
    windSpeedSet: 0.0,
    cloudNumber: 0,
    tree1: 0,
    tree2: 0,
    tree3: 0,
    treeStyle1: 0,
    treeStyle2: 0,
    treeStyle3: 0,
    treeStyle4: 0,
    caveBack1: 0,
    caveBack2: 0,
    caveBack3: 0,
    caveBackStyle1: 0,
    caveBackStyle2: 0,
    caveBackStyle3: 0,
    caveBackStyle4: 0,
    forest1TreeTopStyle: 0,
    forest2TreeTopStyle: 0,
    forest3TreeTopStyle: 0,
    forest4TreeTopStyle: 0,
    corruptionTreeTopStyle: 0,
    jungleTreeTopStyle: 0,
    snowTreeTopStyle: 0,
    hallowTreeTopStyle: 0,
    crimsonTreeTopStyle: 0,
    desertTreeTopStyle: 0,
    oceanTreeTopStyle: 0,
    glowingMushroomTreeTopStyle: 0,
    underworldTreeTopStyle: 0,
    rain: 0.0,
    eventInfo: {
      shadowOrbSmashed: false,
      killedBoss1: false,
      killedBoss2: false,
      killedBoss3: false,
      hardMode: false,
      killedClown: false,
      serverSidedCharacters: false,
      killedPlantBoss: false,
      killedMechBoss: false,
      killedMechBoss2: false,
      killedMechBoss3: false,
      killedAnyMechBoss: false,
      cloudBg: false,
      crimson: false,
      pumpkinMoon: false,
      snowMoon: false,
      expertMode: false,
      fastForwardTime: false,
      slimeRain: false,
      killedKingSlime: false,
      killedQueenBee: false,
      killedFishron: false,
      killedMartians: false,
      killedAncientCultist: false,
      killedMoonLord: false,
      killedPumpking: false,
      killedMounringWood: false,
      killedIceQueen: false,
      killedSantank: false,
      killedEverscream: false,
      killedGolem: false,
      birthdayParty: false,
      killedPirates: false,
      killedFrostLegion: false,
      killedGoblins: false,
      sandstorm: false,
      dungeonDefendersEvent: false,
      killedDungeonDefendersTier1: false,
      killedDungeonDefendersTier2: false,
      killedDungeonDefendersTier3: false,
      combatBookUsed: false,
      manualLanterns: false,
      killedSolarTower: false,
      killedVortexTower: false,
      killedNebulaTower: false,
      killedStardustTower: false,
      forceHalloween: false,
      forceChristmas: false,
      boughtCat: false,
      boughtDog: false,
      boughtBunny: false,
      freeCake: false,
      drunkWorld: false,
      killedEmpressOfLight: false,
      killedQueenSlime: false,
      getGoodWorld: false,
      tenthAnniversaryWorld: false,
    },
    copperOreTier,
    ironOreTier,
    silverOreTier,
    goldOreTier,
    cobaltOreTier,
    mythrilOreTier,
    adamantiteOreTier,
    invasionType: 0,
    lobbyId: NodeJs.BigInt.fromInt(0),
    sandstormSeverity: 0.0,
  }
  worldInfo
}

zoraBlock("Should be the same going after encode/decode", t => {
  let rawWorldInfo = WorldInfo.toBuffer(worldInfo)
  let newWorldInfo = WorldInfo.parse(rawWorldInfo)
  t->optionSome(newWorldInfo, (t, newWorldInfo) => {
    t->equal(worldInfo, newWorldInfo, "hi")
  })
})
