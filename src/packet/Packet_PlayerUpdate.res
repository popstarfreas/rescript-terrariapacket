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
  let {readByte, readSingle} = module(PacketFactory.PacketReader)
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
      playerId,
      control,
      direction,
      pulleyDirection,
      vortexStealthActive,
      gravityDirection,
      shouldGuard,
      ghost,
      selectedItem,
      position,
      velocity,
      potionOfReturn,
      tryKeepingHoveringUp,
      isVoidVaultEnabled,
      isSitting,
      hasFinishedAnyDd2Event,
      isPettingAnimal,
      isTheAnimalBeingPetSmall,
      tryKeepingHoveringDown,
      isSleeping,
    })
  }
}

module Encode = {
  let {packByte, packSingle, setType, data} = module(PacketFactory.ManagedPacketWriter)
  type writer = PacketFactory.ManagedPacketWriter.t
  let packControlFlags = (writer: writer, control: control, direction: direction) => {
    writer->packByte(
      BitFlags.fromFlags(
        ~flag1=control.isHoldingUp,
        ~flag2=control.isHoldingDown,
        ~flag3=control.isHoldingLeft,
        ~flag4=control.isHoldingRight,
        ~flag5=control.isHoldingJump,
        ~flag6=control.isHoldingItemUse,
        ~flag7=switch direction {
        | Left => false
        | Right => true
        },
        ~flag8=false,
      )->BitFlags.toByte,
    )
  }

  let packMiscFlags1 = (
    writer: writer,
    pulleyDirection: option<pulleyDirection>,
    velocity: option<Point.t<float>>,
    vortexStealthActive: bool,
    gravityDirection: gravityDirection,
    shouldGuard: bool,
    ghost: bool,
  ) => {
    writer->packByte(
      BitFlags.fromFlags(
        ~flag1=switch pulleyDirection {
        | Some(_) => true
        | None => false
        },
        ~flag2=switch pulleyDirection {
        | Some(One) => false
        | Some(Two) => true
        | None => false
        },
        ~flag3=switch velocity {
        | Some(_) => true
        | None => false
        },
        ~flag4=vortexStealthActive,
        ~flag5=switch gravityDirection {
        | Normal => true
        | Inverted => false
        },
        ~flag6=shouldGuard,
        ~flag7=ghost,
        ~flag8=false,
      )->BitFlags.toByte,
    )
  }

  let packMiscFlags2 = (
    writer: writer,
    tryKeepingHoveringUp: bool,
    isVoidVaultEnabled: bool,
    isSitting: bool,
    hasFinishedAnyDd2Event: bool,
    isPettingAnimal: bool,
    isTheAnimalBeingPetSmall: bool,
    potionOfReturn: option<potionOfReturn>,
    tryKeepingHoveringDown: bool,
  ) => {
    writer->packByte(
      BitFlags.fromFlags(
        ~flag1=tryKeepingHoveringUp,
        ~flag2=isVoidVaultEnabled,
        ~flag3=isSitting,
        ~flag4=hasFinishedAnyDd2Event,
        ~flag5=isPettingAnimal,
        ~flag6=isTheAnimalBeingPetSmall,
        ~flag7=switch potionOfReturn {
        | Some(_) => true
        | None => false
        },
        ~flag8=tryKeepingHoveringDown,
      )->BitFlags.toByte,
    )
  }

  let packMiscFlags3 = (writer: writer, isSleeping: bool) => {
    writer->packByte(
      BitFlags.fromFlags(
        ~flag1=isSleeping,
        ~flag2=false,
        ~flag3=false,
        ~flag4=false,
        ~flag5=false,
        ~flag6=false,
        ~flag7=false,
        ~flag8=false,
      )->BitFlags.toByte,
    )
  }

  let packPotionOfReturn = (writer: writer, potionOfReturn: option<potionOfReturn>) => {
    switch potionOfReturn {
    | Some(potionOfReturn) =>
      writer
      ->packSingle(potionOfReturn.originalUsePosition.x)
      ->packSingle(potionOfReturn.originalUsePosition.y)
      ->packSingle(potionOfReturn.homePosition.x)
      ->packSingle(potionOfReturn.homePosition.y)
    | None => writer
    }
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerUpdate->PacketType.toInt)
    ->packControlFlags(self.control, self.direction)
    ->packMiscFlags1(
      self.pulleyDirection,
      self.velocity,
      self.vortexStealthActive,
      self.gravityDirection,
      self.shouldGuard,
      self.ghost,
    )
    ->packMiscFlags2(
      self.tryKeepingHoveringUp,
      self.isVoidVaultEnabled,
      self.isSitting,
      self.hasFinishedAnyDd2Event,
      self.isPettingAnimal,
      self.isTheAnimalBeingPetSmall,
      self.potionOfReturn,
      self.tryKeepingHoveringDown,
    )
    ->packMiscFlags3(self.isSleeping)
    ->packByte(self.selectedItem)
    ->packSingle(self.position.x)
    ->packSingle(self.position.y)
    ->packPotionOfReturn(self.potionOfReturn)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
