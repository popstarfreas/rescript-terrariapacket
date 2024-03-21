type t =
  | ConnectRequest
  | Disconnect
  | PlayerSlotSet
  | PlayerInfo
  | PlayerInventorySlot
  | WorldDataRequest
  | WorldInfo
  | InitialTileSectionsRequest
  | Status
  | TileSectionSend
  | TileSectionFrame
  | PlayerSpawn
  | PlayerUpdate
  | PlayerActive
  | PlayerHealth
  | TileModify
  | TimeSet
  | DoorUse
  | TileSquareSend
  | ItemDropUpdate
  | ItemOwner
  | NpcUpdate
  | NpcItemStrike
  | ProjectileSync
  | NpcStrike
  | ProjectileDestroy
  | PvpToggle
  | ChestOpen
  | ChestItem
  | ActiveContainerSync
  | ChestPlace
  | HealEffect
  | Zones
  | PasswordRequired
  | PasswordSend
  | ItemOwnerRemove
  | NpcTalk
  | PlayerAnimation
  | PlayerMana
  | ManaEffect
  | PlayerTeam
  | SignRead
  | SignNew
  | LiquidSet
  | PlayerSpawnSelf
  | PlayerBuffsSet
  | NpcSpecialEffect
  | ChestOrTempleUnlock
  | NpcBuffAdd
  | NpcBuffUpdate
  | PlayerBuffAdd
  | NpcNameUpdate
  | GoodEvilUpdate
  | HarpPlay
  | SwitchHit
  | NpcHomeUpdate
  | BossOrInvasionSpawn
  | PlayerDodge
  | TilePaint
  | WallPaint
  | Teleport
  | PlayerHealOther
  | DimensionsUpdate
  | ClientUuid
  | ChestName
  | CatchNpc
  | ReleaseNpc
  | TravellingMerchantInventory
  | TeleportationPotion
  | AnglerQuest
  | AnglerQuestComplete
  | AnglerQuestsCompletedAmount
  | TemporaryAnimationCreate
  | InvasionProgressReport
  | ObjectPlace
  | PlayerChestIndexSync
  | CombatNumberCreate
  | NetModuleLoad
  | NpcKillCount
  | PlayerStealth
  | ItemForceIntoNearestChest
  | TileEntityUpdate
  | TileEntityPlace
  | ItemDropModify
  | ItemFramePlace
  | ItemDropInstancedUpdate
  | EmoteBubble
  | ExtraValueSync
  | SocialHandshake
  | Unused
  | PortalKill
  | PlayerTeleportPortal
  | NpcKilledNotification
  | EventNotification
  | MinionTargetUpdate
  | NpcTeleportPortal
  | ShieldStrengthsUpdate
  | NebulaLevelUp
  | MoonLordCountdown
  | NpcShopItem
  | GemLockToggle
  | SmokePoof
  | ChatMessageSmart
  | WiredCannonShot
  | MassWireOperation
  | MassWireOperationPay
  | PartyToggle
  | TreeGrowFx
  | CrystalInvasionStart
  | CrystalInvasionWipeAll
  | MinionAttackTargetUpdate
  | CrystalInvasionSendWaitTime
  | PlayerDamage
  | PlayerDeath
  | CombatTextCreate
  | Emoji
  | TileEntityDisplayDollItemSync
  | TileEntityInteractionRequest
  | WeaponsRackTryPlacing
  | TileEntityHatRackItemSync
  | TilePickingSync
  | RevengeMarkerSync
  | RevengeMarkerRemove
  | GolfBallLandInCup
  | ClientFinishConnectingToServer
  | NpcFishOut
  | NpcTamper
  | LegacySoundPlay
  | FoodPlatterTryPlacing
  | PlayerLuckFactorsUpdate
  | PlayerDead
  | CavernMonsterTypeSync
  | NpcBuffRemovalRequest
  | ClientSyncedInventory
  | CountsAsHostForGameplaySet
  | CreditsOrSlimeTransform
  | LucyAxeMessage
  | PiggyBankVoidLensUpdate
  | DungeonDefendersEventAttemptSkipWait
  | HaveDryadDoStardewAnimation
  | ItemDropShimmeredUpdate
  | ShimmerEffectOrCoinLuck
  | LoadoutSwitch
  | ItemDropProtectedUpdate

let fromInt = n =>
  switch n {
  | 1 => Some(ConnectRequest)
  | 2 => Some(Disconnect)
  | 3 => Some(PlayerSlotSet)
  | 4 => Some(PlayerInfo)
  | 5 => Some(PlayerInventorySlot)
  | 6 => Some(WorldDataRequest)
  | 7 => Some(WorldInfo)
  | 8 => Some(InitialTileSectionsRequest)
  | 9 => Some(Status)
  | 10 => Some(TileSectionSend)
  | 11 => Some(TileSectionFrame)
  | 12 => Some(PlayerSpawn)
  | 13 => Some(PlayerUpdate)
  | 14 => Some(PlayerActive)
  | 16 => Some(PlayerHealth)
  | 17 => Some(TileModify)
  | 18 => Some(TimeSet)
  | 19 => Some(DoorUse)
  | 20 => Some(TileSquareSend)
  | 21 => Some(ItemDropUpdate)
  | 22 => Some(ItemOwner)
  | 23 => Some(NpcUpdate)
  | 24 => Some(NpcItemStrike)
  | 27 => Some(ProjectileSync)
  | 28 => Some(NpcStrike)
  | 29 => Some(ProjectileDestroy)
  | 30 => Some(PvpToggle)
  | 31 => Some(ChestOpen)
  | 32 => Some(ChestItem)
  | 33 => Some(ActiveContainerSync)
  | 34 => Some(ChestPlace)
  | 35 => Some(HealEffect)
  | 36 => Some(Zones)
  | 37 => Some(PasswordRequired)
  | 38 => Some(PasswordSend)
  | 39 => Some(ItemOwnerRemove)
  | 40 => Some(NpcTalk)
  | 41 => Some(PlayerAnimation)
  | 42 => Some(PlayerMana)
  | 43 => Some(ManaEffect)
  | 45 => Some(PlayerTeam)
  | 46 => Some(SignRead)
  | 47 => Some(SignNew)
  | 48 => Some(LiquidSet)
  | 49 => Some(PlayerSpawnSelf)
  | 50 => Some(PlayerBuffsSet)
  | 51 => Some(NpcSpecialEffect)
  | 52 => Some(ChestOrTempleUnlock)
  | 53 => Some(NpcBuffAdd)
  | 54 => Some(NpcBuffUpdate)
  | 55 => Some(PlayerBuffAdd)
  | 56 => Some(NpcNameUpdate)
  | 57 => Some(GoodEvilUpdate)
  | 58 => Some(HarpPlay)
  | 59 => Some(SwitchHit)
  | 60 => Some(NpcHomeUpdate)
  | 61 => Some(BossOrInvasionSpawn)
  | 62 => Some(PlayerDodge)
  | 63 => Some(TilePaint)
  | 64 => Some(WallPaint)
  | 65 => Some(Teleport)
  | 66 => Some(PlayerHealOther)
  | 67 => Some(DimensionsUpdate)
  | 68 => Some(ClientUuid)
  | 69 => Some(ChestName)
  | 70 => Some(CatchNpc)
  | 71 => Some(ReleaseNpc)
  | 72 => Some(TravellingMerchantInventory)
  | 73 => Some(TeleportationPotion)
  | 74 => Some(AnglerQuest)
  | 75 => Some(AnglerQuestComplete)
  | 76 => Some(AnglerQuestsCompletedAmount)
  | 77 => Some(TemporaryAnimationCreate)
  | 78 => Some(InvasionProgressReport)
  | 79 => Some(ObjectPlace)
  | 80 => Some(PlayerChestIndexSync)
  | 81 => Some(CombatNumberCreate)
  | 82 => Some(NetModuleLoad)
  | 83 => Some(NpcKillCount)
  | 84 => Some(PlayerStealth)
  | 85 => Some(ItemForceIntoNearestChest)
  | 86 => Some(TileEntityUpdate)
  | 87 => Some(TileEntityPlace)
  | 88 => Some(ItemDropModify)
  | 89 => Some(ItemFramePlace)
  | 90 => Some(ItemDropInstancedUpdate)
  | 91 => Some(EmoteBubble)
  | 92 => Some(ExtraValueSync)
  | 93 => Some(SocialHandshake)
  | 94 => Some(Unused)
  | 95 => Some(PortalKill)
  | 96 => Some(PlayerTeleportPortal)
  | 97 => Some(NpcKilledNotification)
  | 98 => Some(EventNotification)
  | 99 => Some(MinionTargetUpdate)
  | 100 => Some(NpcTeleportPortal)
  | 101 => Some(ShieldStrengthsUpdate)
  | 102 => Some(NebulaLevelUp)
  | 103 => Some(MoonLordCountdown)
  | 104 => Some(NpcShopItem)
  | 105 => Some(GemLockToggle)
  | 106 => Some(SmokePoof)
  | 107 => Some(ChatMessageSmart)
  | 108 => Some(WiredCannonShot)
  | 109 => Some(MassWireOperation)
  | 110 => Some(MassWireOperationPay)
  | 111 => Some(PartyToggle)
  | 112 => Some(TreeGrowFx)
  | 113 => Some(CrystalInvasionStart)
  | 114 => Some(CrystalInvasionWipeAll)
  | 115 => Some(MinionAttackTargetUpdate)
  | 116 => Some(CrystalInvasionSendWaitTime)
  | 117 => Some(PlayerDamage)
  | 118 => Some(PlayerDeath)
  | 119 => Some(CombatTextCreate)
  | 120 => Some(Emoji)
  | 121 => Some(TileEntityDisplayDollItemSync)
  | 122 => Some(TileEntityInteractionRequest)
  | 123 => Some(WeaponsRackTryPlacing)
  | 124 => Some(TileEntityHatRackItemSync)
  | 125 => Some(TilePickingSync)
  | 126 => Some(RevengeMarkerSync)
  | 127 => Some(RevengeMarkerRemove)
  | 128 => Some(GolfBallLandInCup)
  | 129 => Some(ClientFinishConnectingToServer)
  | 130 => Some(NpcFishOut)
  | 131 => Some(NpcTamper)
  | 132 => Some(LegacySoundPlay)
  | 133 => Some(FoodPlatterTryPlacing)
  | 134 => Some(PlayerLuckFactorsUpdate)
  | 135 => Some(PlayerDead)
  | 136 => Some(CavernMonsterTypeSync)
  | 137 => Some(NpcBuffRemovalRequest)
  | 138 => Some(ClientSyncedInventory)
  | 139 => Some(CountsAsHostForGameplaySet)
  | 140 => Some(CreditsOrSlimeTransform)
  | 141 => Some(LucyAxeMessage)
  | 142 => Some(PiggyBankVoidLensUpdate)
  | 143 => Some(DungeonDefendersEventAttemptSkipWait)
  | 144 => Some(HaveDryadDoStardewAnimation)
  | 145 => Some(ItemDropShimmeredUpdate)
  | 146 => Some(ShimmerEffectOrCoinLuck)
  | 147 => Some(LoadoutSwitch)
  | 148 => Some(ItemDropProtectedUpdate)
  | _ => None
  }

let toInt = self =>
  switch self {
  | ConnectRequest => 1
  | Disconnect => 2
  | PlayerSlotSet => 3
  | PlayerInfo => 4
  | PlayerInventorySlot => 5
  | WorldDataRequest => 6
  | WorldInfo => 7
  | InitialTileSectionsRequest => 8
  | Status => 9
  | TileSectionSend => 10
  | TileSectionFrame => 11
  | PlayerSpawn => 12
  | PlayerUpdate => 13
  | PlayerActive => 14
  | PlayerHealth => 16
  | TileModify => 17
  | TimeSet => 18
  | DoorUse => 19
  | TileSquareSend => 20
  | ItemDropUpdate => 21
  | ItemOwner => 22
  | NpcUpdate => 23
  | NpcItemStrike => 24
  | ProjectileSync => 27
  | NpcStrike => 28
  | ProjectileDestroy => 29
  | PvpToggle => 30
  | ChestOpen => 31
  | ChestItem => 32
  | ActiveContainerSync => 33
  | ChestPlace => 34
  | HealEffect => 35
  | Zones => 36
  | PasswordRequired => 37
  | PasswordSend => 38
  | ItemOwnerRemove => 39
  | NpcTalk => 40
  | PlayerAnimation => 41
  | PlayerMana => 42
  | ManaEffect => 43
  | PlayerTeam => 45
  | SignRead => 46
  | SignNew => 47
  | LiquidSet => 48
  | PlayerSpawnSelf => 49
  | PlayerBuffsSet => 50
  | NpcSpecialEffect => 51
  | ChestOrTempleUnlock => 52
  | NpcBuffAdd => 53
  | NpcBuffUpdate => 54
  | PlayerBuffAdd => 55
  | NpcNameUpdate => 56
  | GoodEvilUpdate => 57
  | HarpPlay => 58
  | SwitchHit => 59
  | NpcHomeUpdate => 60
  | BossOrInvasionSpawn => 61
  | PlayerDodge => 62
  | TilePaint => 63
  | WallPaint => 64
  | Teleport => 65
  | PlayerHealOther => 66
  | DimensionsUpdate => 67
  | ClientUuid => 68
  | ChestName => 69
  | CatchNpc => 70
  | ReleaseNpc => 71
  | TravellingMerchantInventory => 72
  | TeleportationPotion => 73
  | AnglerQuest => 74
  | AnglerQuestComplete => 75
  | AnglerQuestsCompletedAmount => 76
  | TemporaryAnimationCreate => 77
  | InvasionProgressReport => 78
  | ObjectPlace => 79
  | PlayerChestIndexSync => 80
  | CombatNumberCreate => 81
  | NetModuleLoad => 82
  | NpcKillCount => 83
  | PlayerStealth => 84
  | ItemForceIntoNearestChest => 85
  | TileEntityUpdate => 86
  | TileEntityPlace => 87
  | ItemDropModify => 88
  | ItemFramePlace => 89
  | ItemDropInstancedUpdate => 90
  | EmoteBubble => 91
  | ExtraValueSync => 92
  | SocialHandshake => 93
  | Unused => 94
  | PortalKill => 95
  | PlayerTeleportPortal => 96
  | NpcKilledNotification => 97
  | EventNotification => 98
  | MinionTargetUpdate => 99
  | NpcTeleportPortal => 100
  | ShieldStrengthsUpdate => 101
  | NebulaLevelUp => 102
  | MoonLordCountdown => 103
  | NpcShopItem => 104
  | GemLockToggle => 105
  | SmokePoof => 106
  | ChatMessageSmart => 107
  | WiredCannonShot => 108
  | MassWireOperation => 109
  | MassWireOperationPay => 110
  | PartyToggle => 111
  | TreeGrowFx => 112
  | CrystalInvasionStart => 113
  | CrystalInvasionWipeAll => 114
  | MinionAttackTargetUpdate => 115
  | CrystalInvasionSendWaitTime => 116
  | PlayerDamage => 117
  | PlayerDeath => 118
  | CombatTextCreate => 119
  | Emoji => 120
  | TileEntityDisplayDollItemSync => 121
  | TileEntityInteractionRequest => 122
  | WeaponsRackTryPlacing => 123
  | TileEntityHatRackItemSync => 124
  | TilePickingSync => 125
  | RevengeMarkerSync => 126
  | RevengeMarkerRemove => 127
  | GolfBallLandInCup => 128
  | ClientFinishConnectingToServer => 129
  | NpcFishOut => 130
  | NpcTamper => 131
  | LegacySoundPlay => 132
  | FoodPlatterTryPlacing => 133
  | PlayerLuckFactorsUpdate => 134
  | PlayerDead => 135
  | CavernMonsterTypeSync => 136
  | NpcBuffRemovalRequest => 137
  | ClientSyncedInventory => 138
  | CountsAsHostForGameplaySet => 139
  | CreditsOrSlimeTransform => 140
  | LucyAxeMessage => 141
  | PiggyBankVoidLensUpdate => 142
  | DungeonDefendersEventAttemptSkipWait => 143
  | HaveDryadDoStardewAnimation => 144
  | ItemDropShimmeredUpdate => 145
  | ShimmerEffectOrCoinLuck => 146
  | LoadoutSwitch => 147
  | ItemDropProtectedUpdate => 148
  }
