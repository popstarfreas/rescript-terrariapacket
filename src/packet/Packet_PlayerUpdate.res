type direction =
  | Left
  | Right

type potionOfReturn = {
  originalUsePosition: Point.t<float>,
  homePosition: Point.t<float>,
}

type control = {
  isHoldingUp: bool,
  isHoldingDown: bool,
  isHoldingLeft: bool,
  isHoldingRight: bool,
  isHoldingJump: bool,
  isHoldingItemUse: bool,
}

// What does 1 and 2 actually mean?
type pulleyDirection =
  | One
  | Two

type gravityDirection =
  | Normal // 1
  | Inverted // -1

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

module Decode = {
  let {readByte, readSingle, readString} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let controlFlags = BitFlags.fromByte(reader->readByte)
    let miscFlags1 = BitFlags.fromByte(reader->readByte)
    let miscFlags2 = BitFlags.fromByte(reader->readByte)
    let miscFlags3 = BitFlags.fromByte(reader->readByte)
    let control = {
      isHoldingUp: controlFlags->BitFlags.flag1,
      isHoldingDown: controlFlags->BitFlags.flag2,
      isHoldingLeft: controlFlags->BitFlags.flag3,
      isHoldingRight: controlFlags->BitFlags.flag4,
      isHoldingJump: controlFlags->BitFlags.flag5,
      isHoldingItemUse: controlFlags->BitFlags.flag6,
    }
    let direction = switch controlFlags->BitFlags.flag7 {
    | true => Right
    | false => Left
    }
    let pulleyDirection = switch miscFlags1->BitFlags.flag1 {
    | true =>
      switch miscFlags1->BitFlags.flag2 {
      | true => Some(Two)
      | false => Some(One)
      }
    | false => None
    }
    let vortexStealthActive = miscFlags1->BitFlags.flag4
    let gravityDirection = switch miscFlags1->BitFlags.flag5 {
    | true => Normal
    | false => Inverted
    }
    let shouldGuard = miscFlags1->BitFlags.flag6
    let ghost = miscFlags1->BitFlags.flag7
    let selectedItem = reader->readByte
    let position: Point.t<float> = {
      x: reader->readSingle,
      y: reader->readSingle,
    }
    let velocity: option<Point.t<float>> = switch miscFlags1->BitFlags.flag3 {
    | true =>
      Some({
        x: reader->readSingle,
        y: reader->readSingle,
      })
    | false => None
    }
    let potionOfReturn = switch miscFlags2->BitFlags.flag7 {
    | true =>
      Some({
        originalUsePosition: {
          x: reader->readSingle,
          y: reader->readSingle,
        },
        homePosition: {
          x: reader->readSingle,
          y: reader->readSingle,
        },
      })
    | false => None
    }
    let tryKeepingHoveringUp = miscFlags2->BitFlags.flag1
    let isVoidVaultEnabled = miscFlags2->BitFlags.flag2
    let isSitting = miscFlags2->BitFlags.flag3
    let hasFinishedAnyDd2Event = miscFlags2->BitFlags.flag4
    let isPettingAnimal = miscFlags2->BitFlags.flag5
    let isTheAnimalBeingPetSmall = miscFlags2->BitFlags.flag6
    let tryKeepingHoveringDown = miscFlags2->BitFlags.flag8
    let isSleeping = miscFlags3->BitFlags.flag1

    Some({
      playerId: playerId,
      control: control,
      direction: direction,
      pulleyDirection: pulleyDirection,
      vortexStealthActive: vortexStealthActive,
      gravityDirection: gravityDirection,
      shouldGuard: shouldGuard,
      ghost: ghost,
      selectedItem: selectedItem,
      position: position,
      velocity: velocity,
      potionOfReturn: potionOfReturn,
      tryKeepingHoveringUp: tryKeepingHoveringUp,
      isVoidVaultEnabled: isVoidVaultEnabled,
      isSitting: isSitting,
      hasFinishedAnyDd2Event: hasFinishedAnyDd2Event,
      isPettingAnimal: isPettingAnimal,
      isTheAnimalBeingPetSmall: isTheAnimalBeingPetSmall,
      tryKeepingHoveringDown: tryKeepingHoveringDown,
      isSleeping: isSleeping,
    })
  }
}

module Encode = {
  let {packString, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerUpdate->PacketType.toInt)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
