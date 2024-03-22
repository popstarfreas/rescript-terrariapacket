/* TypeScript file generated from Packet_DimensionsUpdate.resi by genType. */

/* eslint-disable */
/* tslint:disable */

export type ip = string;

export type dimensionName = string;

export type port = number;

export type t = 
    "GamemodesJoinMode"
  | { TAG: "RealIpAddress"; _0: ip }
  | { TAG: "SwitchServer"; _0: dimensionName }
  | { TAG: "SwitchServerManual"; _0: ip; _1: port };

export type UpdateType_t = 
    "RealIpAddress"
  | "GamemodesJoinMode"
  | "SwitchServer"
  | "SwitchServerManual";
