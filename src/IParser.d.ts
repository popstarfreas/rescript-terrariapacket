/* TypeScript file generated from IParser.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "./ErrorAwarePacketReader.js";
import type { t as PacketType } from "./PacketType.js";

export type parseError =
  | { TAG: "ReaderError"; _0: readError }
  | { TAG: "ConnectRequestFromServer" }
  | { TAG: "DisconnectFromClient" }
  | { TAG: "PlayerSlotSetFromClient" }
  | { TAG: "WorldDataRequestFromServer" }
  | { TAG: "WorldInfoFromClient" }
  | { TAG: "InitialTileSectionsRequestFromServer" }
  | { TAG: "StatusFromClient" }
  | { TAG: "TileSectionSendFromClient" }
  | { TAG: "TileSectionFrameFromClient" }
  | { TAG: "PlayerActiveFromClient" }
  | { TAG: "TimeSetFromClient" }
  | { TAG: "NpcUpdateFromClient" }
  | { TAG: "ChestOpenFromServer" }
  | { TAG: "PasswordRequiredFromClient" }
  | { TAG: "PasswordSendFromServer" }
  | { TAG: "ItemOwnerRemoveFromClient" }
  | { TAG: "SignReadFromServer" }
  | { TAG: "PlayerSpawnSelfFromClient" }
  | { TAG: "NpcBuffUpdateFromClient" }
  | { TAG: "GoodEvilUpdateFromClient" }
  | { TAG: "BossOrInvasionSpawnFromServer" }
  | { TAG: "ClientUuidFromServer" }
  | { TAG: "NpcCatchFromServer" }
  | { TAG: "NpcReleaseFromServer" }
  | { TAG: "TravellingMerchantInventoryFromClient" }
  | { TAG: "AnglerQuestFromClient" }
  | { TAG: "AnglerQuestCompleteFromServer" }
  | { TAG: "TemporaryAnimationCreateFromClient" }
  | { TAG: "InvasionProgressReportFromClient" }
  | { TAG: "PlayerChestIndexSyncFromClient" }
  | { TAG: "CombatNumberCreateFromClient" }
  | { TAG: "NpcKillCountFromClient" }
  | { TAG: "ItemForceIntoNearestChestFromServer" }
  | { TAG: "TileEntityUpdateFromClient" }
  | { TAG: "TileEntityPlaceFromServer" }
  | { TAG: "ItemDropModifyFromClient" }
  | { TAG: "ItemFramePlaceFromServer" }
  | { TAG: "EmoteBubbleFromClient" }
  | { TAG: "PortalKillFromServer" }
  | { TAG: "NpcKilledNotificationFromClient" }
  | { TAG: "EventNotificationFromClient" }
  | { TAG: "ShieldStrengthsUpdateFromClient" }
  | { TAG: "MoonLordCountdownFromClient" }
  | { TAG: "NpcShopItemFromClient" }
  | { TAG: "GemLockToggleFromServer" }
  | { TAG: "SmokePoofFromClient" }
  | { TAG: "ChatMessageSmartFromClient" }
  | { TAG: "WiredCannonShotFromClient" }
  | { TAG: "MassWireOperationFromServer" }
  | { TAG: "MassWireOperationPayFromClient" }
  | { TAG: "PartyToggleFromServer" }
  | { TAG: "CrystalInvasionStartFromServer" }
  | { TAG: "CrystalInvasionWipeAllFromClient" }
  | { TAG: "CrystalInvasionSendWaitTimeFromClient" }
  | { TAG: "CombatTextCreateFromClient" }
  | { TAG: "EmojiFromServer" }
  | { TAG: "WeaponsRackTryPlacingFromServer" }
  | { TAG: "RevengeMarkerSyncFromClient" }
  | { TAG: "RevengeMarkerRemoveFromClient" }
  | { TAG: "ClientFinishConnectingToServerFromClient" }
  | { TAG: "NpcFishOutFromServer" }
  | { TAG: "NpcTamperFromClient" }
  | { TAG: "LegacySoundPlayFromClient" }
  | { TAG: "FoodPlatterTryPlacingFromServer" }
  | { TAG: "PlayerDeadFromClient" }
  | { TAG: "NpcBuffRemovalRequestFromServer" }
  | { TAG: "ClientSyncedInventoryFromServer" }
  | { TAG: "NotImplemented" }
  | { TAG: "InvalidPacketLength"; _0: number }
  | { TAG: "InvalidPacketType"; _0: number }
  | { TAG: "IgnoredPacket" };

export type parseResult<a> =
  | { TAG: "Ok"; _0: (a) }
  | { TAG: "Error"; _0: parseError };

export type parse<a> = (buffer: Buffer, fromServer: boolean, ignore?: PacketType[]) => parseResult<a>;

export type parseLazy<a> = (buffer: Buffer, fromServer: boolean) => parseResult<a>;
