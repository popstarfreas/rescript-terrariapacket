@genType
type direction =
  | Left
  | Right

@genType
type potionOfReturn = {
  originalUsePosition: Point.t<float>,
  homePosition: Point.t<float>,
}

@genType
type control = {
  isHoldingUp: bool,
  isHoldingDown: bool,
  isHoldingLeft: bool,
  isHoldingRight: bool,
  isHoldingJump: bool,
  isHoldingItemUse: bool,
}

// What does 1 and 2 actually mean?
@genType
type pulleyDirection =
  | One
  | Two

@genType
type gravityDirection =
  | Normal // 1
  | Inverted // -1

@genType
type t = {
  playerId: int,
  control: control,
  direction: direction,
  pulleyDirection: option<pulleyDirection>,
  vortexStealthActive: bool,
  gravityDirection: gravityDirection,
  shouldGuard: bool,
  ghost: bool,
  selectedItem: int,
  position: Point.t<float>,
  velocity: option<Point.t<float>>,
  potionOfReturn: option<potionOfReturn>,
  tryKeepingHoveringUp: bool,
  isVoidVaultEnabled: bool,
  isSitting: bool,
  hasFinishedAnyDd2Event: bool,
  isPettingAnimal: bool,
  isTheAnimalBeingPetSmall: bool,
  tryKeepingHoveringDown: bool,
  isSleeping: bool,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
