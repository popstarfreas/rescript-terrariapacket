module ParseError = {
  type t =
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
    | InvalidPacketLength(int)
    | InvalidPacketType(int)
    | IgnoredPacket

  @val external stringOfUnknown: 'a => string = "String"

  let clientOnlyFromServerError = (packetName: string): string =>
    "Cannot parse a client-only packet from the server side: " ++ packetName

  let serverOnlyFromClientError = (packetName: string): string =>
    "Cannot parse a server-only packet from the client side: " ++ packetName

  let toDisplayString = (self: t): string =>
    switch self {
    | ReaderError({context, error}) => "ReaderError(" ++ context ++ "): " ++ stringOfUnknown(error)
    | NotImplemented => "NotImplemented: parser for this packet is not implemented"
    | InvalidPacketLength(len) =>
      "InvalidPacketLength: buffer is too short to contain a packet header. Length: " ++
      Int.toString(len)
    | InvalidPacketType(packetType) =>
      "InvalidPacketType: unknown packet type id: " ++ Int.toString(packetType)

    | ConnectRequestFromServer => clientOnlyFromServerError("ConnectRequest")
    | WorldDataRequestFromServer => clientOnlyFromServerError("WorldDataRequest")
    | InitialTileSectionsRequestFromServer =>
      clientOnlyFromServerError("InitialTileSectionsRequest")
    | ChestOpenFromServer => clientOnlyFromServerError("ChestOpen")
    | SignReadFromServer => clientOnlyFromServerError("SignRead")
    | BossOrInvasionSpawnFromServer => clientOnlyFromServerError("BossOrInvasionSpawn")
    | ClientUuidFromServer => clientOnlyFromServerError("ClientUuid")
    | NpcCatchFromServer => clientOnlyFromServerError("NpcCatch")
    | NpcReleaseFromServer => clientOnlyFromServerError("NpcRelease")
    | AnglerQuestCompleteFromServer => clientOnlyFromServerError("AnglerQuestComplete")
    | ItemForceIntoNearestChestFromServer => clientOnlyFromServerError("ItemForceIntoNearestChest")
    | TileEntityPlaceFromServer => clientOnlyFromServerError("TileEntityPlace")
    | ItemFramePlaceFromServer => clientOnlyFromServerError("ItemFramePlace")
    | PortalKillFromServer => clientOnlyFromServerError("PortalKill")
    | GemLockToggleFromServer => clientOnlyFromServerError("GemLockToggle")
    | MassWireOperationFromServer => clientOnlyFromServerError("MassWireOperation")
    | PartyToggleFromServer => clientOnlyFromServerError("PartyToggle")
    | CrystalInvasionStartFromServer => clientOnlyFromServerError("CrystalInvasionStart")
    | EmojiFromServer => clientOnlyFromServerError("Emoji")
    | WeaponsRackTryPlacingFromServer => clientOnlyFromServerError("WeaponsRackTryPlacing")
    | NpcFishOutFromServer => clientOnlyFromServerError("NpcFishOut")
    | FoodPlatterTryPlacingFromServer => clientOnlyFromServerError("FoodPlatterTryPlacing")
    | NpcBuffRemovalRequestFromServer => clientOnlyFromServerError("NpcBuffRemovalRequest")
    | ClientSyncedInventoryFromServer => clientOnlyFromServerError("ClientSyncedInventory")
    | PasswordSendFromServer => clientOnlyFromServerError("PasswordSend")

    | DisconnectFromClient => serverOnlyFromClientError("Disconnect")
    | PlayerSlotSetFromClient => serverOnlyFromClientError("PlayerSlotSet")
    | WorldInfoFromClient => serverOnlyFromClientError("WorldInfo")
    | StatusFromClient => serverOnlyFromClientError("Status")
    | TileSectionSendFromClient => serverOnlyFromClientError("TileSectionSend")
    | TileSectionFrameFromClient => serverOnlyFromClientError("TileSectionFrame")
    | PlayerActiveFromClient => serverOnlyFromClientError("PlayerActive")
    | TimeSetFromClient => serverOnlyFromClientError("TimeSet")
    | NpcUpdateFromClient => serverOnlyFromClientError("NpcUpdate")
    | PasswordRequiredFromClient => serverOnlyFromClientError("PasswordRequired")
    | ItemOwnerRemoveFromClient => serverOnlyFromClientError("ItemOwnerRemove")
    | PlayerSpawnSelfFromClient => serverOnlyFromClientError("PlayerSpawnSelf")
    | NpcBuffUpdateFromClient => serverOnlyFromClientError("NpcBuffUpdate")
    | GoodEvilUpdateFromClient => serverOnlyFromClientError("GoodEvilUpdate")
    | TravellingMerchantInventoryFromClient =>
      serverOnlyFromClientError("TravellingMerchantInventory")
    | AnglerQuestFromClient => serverOnlyFromClientError("AnglerQuest")
    | TemporaryAnimationCreateFromClient => serverOnlyFromClientError("TemporaryAnimationCreate")
    | InvasionProgressReportFromClient => serverOnlyFromClientError("InvasionProgressReport")
    | PlayerChestIndexSyncFromClient => serverOnlyFromClientError("PlayerChestIndexSync")
    | CombatNumberCreateFromClient => serverOnlyFromClientError("CombatNumberCreate")
    | NpcKillCountFromClient => serverOnlyFromClientError("NpcKillCount")
    | TileEntityUpdateFromClient => serverOnlyFromClientError("TileEntityUpdate")
    | ItemDropModifyFromClient => serverOnlyFromClientError("ItemDropModify")
    | EmoteBubbleFromClient => serverOnlyFromClientError("EmoteBubble")
    | NpcKilledNotificationFromClient => serverOnlyFromClientError("NpcKilledNotification")
    | EventNotificationFromClient => serverOnlyFromClientError("EventNotification")
    | ShieldStrengthsUpdateFromClient => serverOnlyFromClientError("ShieldStrengthsUpdate")
    | MoonLordCountdownFromClient => serverOnlyFromClientError("MoonLordCountdown")
    | NpcShopItemFromClient => serverOnlyFromClientError("NpcShopItem")
    | SmokePoofFromClient => serverOnlyFromClientError("SmokePoof")
    | ChatMessageSmartFromClient => serverOnlyFromClientError("ChatMessageSmart")
    | WiredCannonShotFromClient => serverOnlyFromClientError("WiredCannonShot")
    | MassWireOperationPayFromClient => serverOnlyFromClientError("MassWireOperationPay")
    | CrystalInvasionWipeAllFromClient => serverOnlyFromClientError("CrystalInvasionWipeAll")
    | CrystalInvasionSendWaitTimeFromClient =>
      serverOnlyFromClientError("CrystalInvasionSendWaitTime")
    | CombatTextCreateFromClient => serverOnlyFromClientError("CombatTextCreate")
    | RevengeMarkerSyncFromClient => serverOnlyFromClientError("RevengeMarkerSync")
    | RevengeMarkerRemoveFromClient => serverOnlyFromClientError("RevengeMarkerRemove")
    | ClientFinishConnectingToServerFromClient =>
      serverOnlyFromClientError("ClientFinishConnectingToServer")
    | NpcTamperFromClient => serverOnlyFromClientError("NpcTamper")
    | LegacySoundPlayFromClient => serverOnlyFromClientError("LegacySoundPlay")
    | PlayerDeadFromClient => serverOnlyFromClientError("PlayerDead")
    | IgnoredPacket => "Packet was ignored"
    }
}

type parseError = ParseError.t
type parse<'a> = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
  ~ignore: array<PacketType.t>=?,
) => result<'a, parseError>
// Serializtion is not considered for now for simplicity
type parseLazy<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => result<'a, parseError>
