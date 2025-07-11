export type t = {
  readonly playerId: number;
  readonly active: boolean;
};

export function parse(payload: Buffer): t;

export function toBuffer(self: t): Buffer;
