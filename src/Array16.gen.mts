/* TypeScript file generated from Array16.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Array16JS from './Array16.mjs';

export abstract class t<a> { protected opaque!: a }; /* simulate opaque types */

export const fromArray: <a>(_1: a[]) => (undefined | t<a>) = Array16JS.fromArray as any;

export const asArray: <a>(_1: t<a>) => a[] = Array16JS.asArray as any;
