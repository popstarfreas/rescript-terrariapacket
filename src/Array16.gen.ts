/* TypeScript file generated from Array16.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Array16BS = require('./Array16.bs');

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class t<a> { protected opaque!: a }; /* simulate opaque types */

export const fromArray: <a>(_1:a[]) => (undefined | t<a>) = Array16BS.fromArray;

export const asArray: <a>(_1:t<a>) => a[] = Array16BS.asArray;
