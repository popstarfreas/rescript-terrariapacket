/* TypeScript file generated from Array16.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Array16JS = require('./Array16.bs.js');

export abstract class t<a> { protected opaque!: a }; /* simulate opaque types */

export const fromArray: <a>(_1:a[]) => (undefined | t<a>) = Array16JS.fromArray as any;

export const asArray: <a>(_1:t<a>) => a[] = Array16JS.asArray as any;
