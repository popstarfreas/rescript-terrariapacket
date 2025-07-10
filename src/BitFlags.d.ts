export type t = number;
export function fromByte(byte: number): t;
export function fromFlags(
  flag1: boolean,
  flag2: boolean,
  flag3: boolean,
  flag4: boolean,
  flag5: boolean,
  flag6: boolean,
  flag7: boolean,
  flag8: boolean
): t;
export function fromArray(flags: boolean[]): t;
export function flag1(t: t): boolean;
export function flag2(t: t): boolean;
export function flag3(t: t): boolean;
export function flag4(t: t): boolean;
export function flag5(t: t): boolean;
export function flag6(t: t): boolean;
export function flag7(t: t): boolean;
export function flag8(t: t): boolean;
export function flagN(t: t, n: number): boolean;
export function forEach(t: t, callback: (flag: boolean) => void): void;
export function toByte(t: t): number;
