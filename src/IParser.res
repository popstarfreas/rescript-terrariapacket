type parseError =
  | ReaderError(ErrorAwarePacketReader.readError)
  | ConnectRequestFromServer
  | DisconnectFromClient
  | PlayerSlotSetFromClient
  | WorldDataRequestFromServer
  | WorldInfoFromClient
  | InitialTileSectionsRequestFromServer
  | StatusFromClient
  | TileSectionSendFromClient
  | TileSectionFrameFromClient
  | PlayerActiveFromClient
  | TimeSetFromClient
  | NpcUpdateFromClient
  | ChestOpenFromServer
  | PasswordRequiredFromClient
  | PasswordSendFromServer
  | ItemOwnerRemoveFromClient
  | SignReadFromServer
  | PlayerSpawnSelfFromClient
  | NpcBuffUpdateFromClient
  | GoodEvilUpdateFromClient
  | BossOrInvasionSpawnFromServer
  | ClientUuidFromServer
  | NpcCatchFromServer
  | NpcReleaseFromServer
  | TravellingMerchantInventoryFromClient
  | AnglerQuestFromClient
  | AnglerQuestCompleteFromServer
  | TemporaryAnimationCreateFromClient
  | InvasionProgressReportFromClient
  | PlayerChestIndexSyncFromClient
  | CombatNumberCreateFromClient
  | NpcKillCountFromClient
  | ItemForceIntoNearestChestFromServer
  | TileEntityUpdateFromClient
  | TileEntityPlaceFromServer
  | ItemDropModifyFromClient
  | ItemFramePlaceFromServer
  | EmoteBubbleFromClient
  | PortalKillFromServer
  | NpcKilledNotificationFromClient
  | EventNotificationFromClient
  | ShieldStrengthsUpdateFromClient
  | MoonLordCountdownFromClient
  | NpcShopItemFromClient
  | GemLockToggleFromServer
  | SmokePoofFromClient
  | ChatMessageSmartFromClient
  | WiredCannonShotFromClient
  | MassWireOperationFromServer
  | MassWireOperationPayFromClient
  | PartyToggleFromServer
  | CrystalInvasionStartFromServer
  | CrystalInvasionWipeAllFromClient
  | CrystalInvasionSendWaitTimeFromClient
  | CombatTextCreateFromClient
  | EmojiFromServer
  | WeaponsRackTryPlacingFromServer
  | RevengeMarkerSyncFromClient
  | RevengeMarkerRemoveFromClient
  | ClientFinishConnectingToServerFromClient
  | NpcFishOutFromServer
  | NpcTamperFromClient
  | LegacySoundPlayFromClient
  | FoodPlatterTryPlacingFromServer
  | PlayerDeadFromClient
  | NpcBuffRemovalRequestFromServer
  | ClientSyncedInventoryFromServer
  | NotImplemented
  | InvalidPacketLength
  | InvalidPacketType

@genType
type parse<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => result<'a, parseError>
// Serializtion is not considered for now for simplicity
@genType
type parseLazy<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => result<'a, parseError>
