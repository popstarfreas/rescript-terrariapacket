export type t = {
  readonly itemDropId: number;
  readonly x: number;
  readonly y: number;
  readonly vx: number;
  readonly vy: number;
  readonly stack: number;
  readonly prefix: number;
  readonly noDelay: number;
  readonly itemId: number
};

export declare function parse(payload: Buffer): t | undefined;
export declare function toBuffer(self: t): Buffer;
