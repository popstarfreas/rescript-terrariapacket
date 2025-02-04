export function parse(payload: NodeJs.Buffer): undefined | t;
export function toBuffer(self: t): NodeJs.Buffer;

const Action: {
  toInt: (_1: Action_t) => number;
  fromInt: (_1: number) => (undefined | Action_t);
  toString: (_1: Action_t) => string;
};
