/* TypeScript file generated from IConversionParser.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type {Buffer_t as NodeJs_Buffer_t} from './NodeJs.d';

import type {parseError as IParser_parseError} from './IParser.d';

export type possibleConversion<a> = 
    { TAG: "ShouldSerialize"; _0: a }
  | { TAG: "SerializeNotNecessary"; _0: a; _1: NodeJs_Buffer_t };

export type parse<a> = (buffer:NodeJs_Buffer_t, fromServer:boolean) => 
    { TAG: "Ok"; _0: possibleConversion<a> }
  | { TAG: "Error"; _0: IParser_parseError };

export type parseLazy<a> = (buffer:NodeJs_Buffer_t, fromServer:boolean) => 
    { TAG: "Ok"; _0: possibleConversion<a> }
  | { TAG: "Error"; _0: IParser_parseError };
