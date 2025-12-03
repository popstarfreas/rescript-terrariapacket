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

// When parsing a packet, it is sometimes necessary to note that the packet as read is not the same
// as what is in the buffer, due to packet conversions. This is only true when we combine a parser with
// a conversion
@genType
type parsed<'a> =
  | ShouldSerialize('a) // The packet as parsed was modified in some way from the original buffer
  | SerializeNotNecessary('a, NodeJs.Buffer.t) // The buffer is equivalent to the parsed data
@genType
type parse<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => result<parsed<'a>, parseError>
// Serializtion is not considered for now for simplicity
@genType
type parseLazy<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => result<'a, parseError>
