declare module "@popstarfreas/packetfactory/color" {
  interface Color {
    R: number;
    G: number;
    B: number;
  }
  export default Color;
}

declare module "@popstarfreas/packetfactory/networktext" {
  class NetworkText {
    private _mode: number;
    private _text: string;
    constructor(mode: number, text: string);
    get mode(): number;
    get text(): string;
    toString(): string;
  }
  export default NetworkText;
}
