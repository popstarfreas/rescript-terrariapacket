/* TypeScript file generated from IParser.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "./ErrorAwarePacketReader.js";
import type { t as PacketType } from "./PacketType.js";

export type parseError =
  | { TAG: "ReaderError"; _0: readError }
  | { TAG: "InvalidPacketLength"; _0: number }
  | { TAG: "InvalidPacketType"; _0: number }
  | "ConnectRequestFromServer"
  | "DisconnectFromClient"
  | "PlayerSlotSetFromClient"
  | "WorldDataRequestFromServer"
  | "WorldInfoFromClient"
  | "InitialTileSectionsRequestFromServer"
  | "StatusFromClient"
  | "TileSectionSendFromClient"
  | "TileSectionFrameFromClient"
  | "PlayerActiveFromClient"
  | "TimeSetFromClient"
  | "NpcUpdateFromClient"
  | "ChestOpenFromServer"
  | "PasswordRequiredFromClient"
  | "PasswordSendFromServer"
  | "ItemOwnerRemoveFromClient"
  | "SignReadFromServer"
  | "PlayerSpawnSelfFromClient"
  | "NpcBuffUpdateFromClient"
  | "GoodEvilUpdateFromClient"
  | "BossOrInvasionSpawnFromServer"
  | "ClientUuidFromServer"
  | "NpcCatchFromServer"
  | "NpcReleaseFromServer"
  | "TravellingMerchantInventoryFromClient"
  | "AnglerQuestFromClient"
  | "AnglerQuestCompleteFromServer"
  | "TemporaryAnimationCreateFromClient"
  | "InvasionProgressReportFromClient"
  | "PlayerChestIndexSyncFromClient"
  | "CombatNumberCreateFromClient"
  | "NpcKillCountFromClient"
  | "ItemForceIntoNearestChestFromServer"
  | "TileEntityUpdateFromClient"
  | "TileEntityPlaceFromServer"
  | "ItemDropModifyFromClient"
  | "ItemFramePlaceFromServer"
  | "EmoteBubbleFromClient"
  | "PortalKillFromServer"
  | "NpcKilledNotificationFromClient"
  | "EventNotificationFromClient"
  | "ShieldStrengthsUpdateFromClient"
  | "MoonLordCountdownFromClient"
  | "NpcShopItemFromClient"
  | "GemLockToggleFromServer"
  | "SmokePoofFromClient"
  | "ChatMessageSmartFromClient"
  | "WiredCannonShotFromClient"
  | "MassWireOperationFromServer"
  | "MassWireOperationPayFromClient"
  | "PartyToggleFromServer"
  | "CrystalInvasionStartFromServer"
  | "CrystalInvasionWipeAllFromClient"
  | "CrystalInvasionSendWaitTimeFromClient"
  | "CombatTextCreateFromClient"
  | "EmojiFromServer"
  | "WeaponsRackTryPlacingFromServer"
  | "RevengeMarkerSyncFromClient"
  | "RevengeMarkerRemoveFromClient"
  | "ClientFinishConnectingToServerFromClient"
  | "NpcFishOutFromServer"
  | "NpcTamperFromClient"
  | "LegacySoundPlayFromClient"
  | "FoodPlatterTryPlacingFromServer"
  | "PlayerDeadFromClient"
  | "CavernMonsterTypeSyncFromClient"
  | "NpcBuffRemovalRequestFromServer"
  | "ClientSyncedInventoryFromServer"
  | "ServerInfoFromClient"
  | "PlayerPlatformInfoFromServer"
  | "NotImplemented"
  | "IgnoredPacket";

export type parseResult<a> =
  | { TAG: "Ok"; _0: (a) }
  | { TAG: "Error"; _0: parseError };

export type parse<a> = (buffer: Buffer, fromServer: boolean, ignore?: PacketType[]) => parseResult<a>;

export type parseLazy<a> = (buffer: Buffer, fromServer: boolean) => parseResult<a>;
