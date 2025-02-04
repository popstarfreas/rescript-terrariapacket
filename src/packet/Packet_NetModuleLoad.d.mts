export function parse(payload: NodeJs.Buffer): undefined | t;
export function toBuffer(self: t): NodeJs.Buffer;

const NetModuleType: {
  toInt: (_1: NetModuleType_t) => number;
  fromInt: (_1: number) => (undefined | NetModuleType_t);
};
