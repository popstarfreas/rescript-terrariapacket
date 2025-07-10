/* TypeScript file generated from IParser.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type parsed<a> =
  { TAG: "ShouldSerialize"; _0: a }
  | { TAG: "SerializeNotNecessary"; _0: a; _1: Buffer };

export type parse<a> = (buffer: Buffer, fromServer: boolean) => (undefined | parsed<a>);

export type parseLazy<a> = (buffer: Buffer, fromServer: boolean) => (undefined | a);
