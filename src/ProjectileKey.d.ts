export type t = {
  readonly spawner: number;
  readonly index: number;
  readonly generation: number;
};

export declare const fromInt: (bits: number) => t;
export declare const toInt: (self: t) => number;
