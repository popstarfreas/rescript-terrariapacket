/* TypeScript file generated from IParser.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type {Buffer_t as NodeJs_Buffer_t} from '../src/shims/NodeJs.shim';

export type parsed<a> = 
    { TAG: "ShouldSerialize"; _0: a }
  | { TAG: "SerializeNotNecessary"; _0: a; _1: NodeJs_Buffer_t };

export type parse<a> = (buffer:NodeJs_Buffer_t, fromServer:boolean) => (undefined | parsed<a>);

export type parseLazy<a> = (buffer:NodeJs_Buffer_t, fromServer:boolean) => (undefined | a);
