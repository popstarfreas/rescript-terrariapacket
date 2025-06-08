/* TypeScript file generated from ErrorAwarePacketWriter.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const ErrorAwarePacketWriterJS = require('./ErrorAwarePacketWriter.bs.js');

import type {BigInt_t as NodeJs_BigInt_t} from '../src/shims/NodeJs.shim';

import type {Buffer_t as NodeJs_Buffer_t} from '../src/shims/NodeJs.shim';

import type {t as Exn_t} from '../src/shims/Exn.shim';

export abstract class untypedT { protected opaque!: any }; /* simulate opaque types */

export type packError = { readonly context: string; readonly error: Exn_t };

export abstract class t { protected opaque!: any }; /* simulate opaque types */

export const packSingle: (_1:t, _2:number, _3:string) => t = ErrorAwarePacketWriterJS.packSingle as any;

export const packInt32: (_1:t, _2:number, _3:string) => t = ErrorAwarePacketWriterJS.packInt32 as any;

export const packByte: (_1:t, _2:number, _3:string) => t = ErrorAwarePacketWriterJS.packByte as any;

export const packInt16: (_1:t, _2:number, _3:string) => t = ErrorAwarePacketWriterJS.packInt16 as any;

export const packUInt64: (_1:t, _2:NodeJs_BigInt_t, _3:string) => t = ErrorAwarePacketWriterJS.packUInt64 as any;

export const packString: (_1:t, _2:string, _3:string) => t = ErrorAwarePacketWriterJS.packString as any;

export const packSByte: (_1:t, _2:number, _3:string) => t = ErrorAwarePacketWriterJS.packSByte as any;

export const packBytes: (_1:t, _2:number[], _3:string) => t = ErrorAwarePacketWriterJS.packBytes as any;

export const setType: (_1:untypedT, _2:number) => t = ErrorAwarePacketWriterJS.setType as any;

export const data: (_1:t) => 
    { TAG: "Ok"; _0: NodeJs_Buffer_t }
  | { TAG: "Error"; _0: packError } = ErrorAwarePacketWriterJS.data as any;

export const make: () => untypedT = ErrorAwarePacketWriterJS.make as any;
