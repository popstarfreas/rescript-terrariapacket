/* TypeScript file generated from IParser.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "./ErrorAwarePacketReader";

export type parsed<a> =
  { TAG: "ShouldSerialize"; _0: a }
  | { TAG: "SerializeNotNecessary"; _0: a; _1: Buffer };

export type parseResult<a> =
  { TAG: "Ok"; _0: (undefined | parsed<a>) }
  | { TAG: "Error"; _0: readError };

export type parse<a> = (buffer: Buffer, fromServer: boolean) => parseResult<a>;

export type parseLazy<a> = (buffer: Buffer, fromServer: boolean) => (
  { TAG: "Ok"; _0: (undefined | a) }
  | { TAG: "Error"; _0: readError }
);
