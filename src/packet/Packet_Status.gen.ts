/* TypeScript file generated from Packet_Status.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type {NetworkText_t as PacketFactory_NetworkText_t} from '../../src/shims/PacketFactory.shim';

export type flags = {
  readonly hideStatusTextPercent: boolean; 
  readonly statusTextHasShadows: boolean; 
  readonly runCheckBytes: boolean
};

export type t = {
  readonly max: number; 
  readonly text: PacketFactory_NetworkText_t; 
  readonly flags: flags
};
