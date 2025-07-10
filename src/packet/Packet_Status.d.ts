/* TypeScript file generated from Packet_Status.resi by genType. */

import NetworkText from "@popstarfreas/packetfactory/networktext";

/* eslint-disable */
/* tslint:disable */

export type flags = {
  readonly hideStatusTextPercent: boolean;
  readonly statusTextHasShadows: boolean;
  readonly runCheckBytes: boolean
};

export type t = {
  readonly max: number;
  readonly text: NetworkText;
  readonly flags: flags
};
