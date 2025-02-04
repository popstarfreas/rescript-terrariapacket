export function parse(payload: NodeJs.Buffer): undefined | t;
export function toBuffer(self: t): NodeJs.Buffer;

namespace Action {
  export function fromInt(value: number): Action_t;
  export function toInt(value: Action_t): number;
}
