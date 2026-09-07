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
  isHoldingDash: bool,
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
  shieldRaised: bool,
  ghost: bool,
  selectedItem: int,
  position: Point.t<float>,
  velocity: option<Point.t<float>>,
  mountType: option<int>,
  potionOfReturn: option<potionOfReturn>,
  tryKeepingHoveringUp: bool,
  isVoidVaultEnabled: bool,
  isSitting: bool,
  hasFinishedAnyDd2Event: bool,
  isPettingAnimal: bool,
  isTheAnimalBeingPetSmall: bool,
  tryKeepingHoveringDown: bool,
  isSleeping: bool,
  autoReuseAllWeapons: bool,
  controlDownHold: bool,
  isOperatingAnotherEntity: bool,
  controlUseTile: bool,
  netCameraTarget: option<Point.t<float>>,
  lastItemUseAttemptSuccess: bool,
  snappingStoneLightUp: bool,
}

module Decode = {
  let {readByte, readSingle, readUInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(controlFlagsRaw) = reader->readByte("controlFlags")
    let controlFlags = BitFlags.fromByte(controlFlagsRaw)
    let? Ok(miscFlags1Raw) = reader->readByte("miscFlags1")
    let miscFlags1 = BitFlags.fromByte(miscFlags1Raw)
    let? Ok(miscFlags2Raw) = reader->readByte("miscFlags2")
    let miscFlags2 = BitFlags.fromByte(miscFlags2Raw)
    let? Ok(miscFlags3Raw) = reader->readByte("miscFlags3")
    let miscFlags3 = BitFlags.fromByte(miscFlags3Raw)
    let control = {
      isHoldingUp: controlFlags->BitFlags.flag1,
      isHoldingDown: controlFlags->BitFlags.flag2,
      isHoldingLeft: controlFlags->BitFlags.flag3,
      isHoldingRight: controlFlags->BitFlags.flag4,
      isHoldingJump: controlFlags->BitFlags.flag5,
      isHoldingItemUse: controlFlags->BitFlags.flag6,
      isHoldingDash: controlFlags->BitFlags.flag8,
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
    let shieldRaised = miscFlags1->BitFlags.flag6
    let ghost = miscFlags1->BitFlags.flag7
    let? Ok(selectedItem) = reader->readByte("selectedItem")
    let? Ok(positionX) = reader->readSingle("positionX")
    let? Ok(positionY) = reader->readSingle("positionY")
    let position: Point.t<float> = {
      x: positionX,
      y: positionY,
    }
    let? Ok(velocity: option<Point.t<float>>) = switch miscFlags1->BitFlags.flag3 {
    | true =>
      let? Ok(velocityX) = reader->readSingle("velocityX")
      let? Ok(velocityY) = reader->readSingle("velocityY")
      Ok(
        Some({
          Point.x: velocityX,
          y: velocityY,
        }),
      )
    | false => Ok(None)
    }
    let? Ok(mountType) = switch miscFlags1->BitFlags.flag8 {
    | true =>
      let? Ok(mountType) = reader->readUInt16("mountType")
      Ok(Some(mountType))
    | false => Ok(None)
    }
    let? Ok(potionOfReturn) = switch miscFlags2->BitFlags.flag7 {
    | true =>
      let? Ok(potionOfReturnOrigX) = reader->readSingle("potionOfReturnOrigX")
      let? Ok(potionOfReturnOrigY) = reader->readSingle("potionOfReturnOrigY")
      let? Ok(potionOfReturnHomeX) = reader->readSingle("potionOfReturnHomeX")
      let? Ok(potionOfReturnHomeY) = reader->readSingle("potionOfReturnHomeY")
      Ok(
        Some({
          originalUsePosition: {
            x: potionOfReturnOrigX,
            y: potionOfReturnOrigY,
          },
          homePosition: {
            x: potionOfReturnHomeX,
            y: potionOfReturnHomeY,
          },
        }),
      )
    | false => Ok(None)
    }
    let tryKeepingHoveringUp = miscFlags2->BitFlags.flag1
    let isVoidVaultEnabled = miscFlags2->BitFlags.flag2
    let isSitting = miscFlags2->BitFlags.flag3
    let hasFinishedAnyDd2Event = miscFlags2->BitFlags.flag4
    let isPettingAnimal = miscFlags2->BitFlags.flag5
    let isTheAnimalBeingPetSmall = miscFlags2->BitFlags.flag6
    let tryKeepingHoveringDown = miscFlags2->BitFlags.flag8
    let isSleeping = miscFlags3->BitFlags.flag1
    let autoReuseAllWeapons = miscFlags3->BitFlags.flag2
    let controlDownHold = miscFlags3->BitFlags.flag3
    let isOperatingAnotherEntity = miscFlags3->BitFlags.flag4
    let controlUseTile = miscFlags3->BitFlags.flag5
    let? Ok(netCameraTarget: option<Point.t<float>>) = switch miscFlags3->BitFlags.flag6 {
    | true =>
      let? Ok(netCameraTargetX) = reader->readSingle("netCameraTargetX")
      let? Ok(netCameraTargetY) = reader->readSingle("netCameraTargetY")
      Ok(
        Some({
          Point.x: netCameraTargetX,
          y: netCameraTargetY,
        }),
      )
    | false => Ok(None)
    }
    let lastItemUseAttemptSuccess = miscFlags3->BitFlags.flag7
    let snappingStoneLightUp = miscFlags3->BitFlags.flag8

    Ok({
      playerId,
      control,
      direction,
      pulleyDirection,
      vortexStealthActive,
      gravityDirection,
      shieldRaised,
      ghost,
      selectedItem,
      position,
      velocity,
      mountType,
      potionOfReturn,
      tryKeepingHoveringUp,
      isVoidVaultEnabled,
      isSitting,
      hasFinishedAnyDd2Event,
      isPettingAnimal,
      isTheAnimalBeingPetSmall,
      tryKeepingHoveringDown,
      isSleeping,
      autoReuseAllWeapons,
      controlDownHold,
      isOperatingAnotherEntity,
      controlUseTile,
      netCameraTarget,
      lastItemUseAttemptSuccess,
      snappingStoneLightUp,
    })
  }
}

module Encode = {
  let {packByte, packSingle, packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  type writer = ErrorAwarePacketWriter.t
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
        ~flag8=control.isHoldingDash,
      )->BitFlags.toByte,
      "controlFlags",
    )
  }

  let packMiscFlags1 = (
    writer: writer,
    pulleyDirection: option<pulleyDirection>,
    velocity: option<Point.t<float>>,
    vortexStealthActive: bool,
    gravityDirection: gravityDirection,
    shieldRaised: bool,
    ghost: bool,
    mountType: option<int>,
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
        ~flag6=shieldRaised,
        ~flag7=ghost,
        ~flag8=mountType->Option.isSome,
      )->BitFlags.toByte,
      "miscFlags1",
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
      "miscFlags2",
    )
  }

  let packMiscFlags3 = (
    writer: writer,
    isSleeping: bool,
    autoReuseAllWeapons: bool,
    controlDownHold: bool,
    isOperatingAnotherEntity: bool,
    controlUseTile: bool,
    netCameraTarget: option<Point.t<float>>,
    lastItemUseAttemptSuccess: bool,
    snappingStoneLightUp: bool,
  ) => {
    writer->packByte(
      BitFlags.fromFlags(
        ~flag1=isSleeping,
        ~flag2=autoReuseAllWeapons,
        ~flag3=controlDownHold,
        ~flag4=isOperatingAnotherEntity,
        ~flag5=controlUseTile,
        ~flag6=netCameraTarget->Option.isSome,
        ~flag7=lastItemUseAttemptSuccess,
        ~flag8=snappingStoneLightUp,
      )->BitFlags.toByte,
      "miscFlags3",
    )
  }

  let packVelocity = (writer: writer, velocity: option<Point.t<float>>) => {
    switch velocity {
    | Some(v) =>
      writer
      ->packSingle(v.x, "velocityX")
      ->packSingle(v.y, "velocityY")
    | None => writer
    }
  }

  let packMountType = (writer: writer, mountType: option<int>) => {
    switch mountType {
    | Some(mountType) => writer->packUInt16(mountType, "mountType")
    | None => writer
    }
  }

  let packPotionOfReturn = (writer: writer, potionOfReturn: option<potionOfReturn>) => {
    switch potionOfReturn {
    | Some(p) =>
      writer
      ->packSingle(p.originalUsePosition.x, "potionOfReturnOrigX")
      ->packSingle(p.originalUsePosition.y, "potionOfReturnOrigY")
      ->packSingle(p.homePosition.x, "potionOfReturnHomeX")
      ->packSingle(p.homePosition.y, "potionOfReturnHomeY")
    | None => writer
    }
  }

  let packNetCameraTarget = (writer: writer, netCameraTarget: option<Point.t<float>>) => {
    switch netCameraTarget {
    | Some(target) =>
      writer
      ->packSingle(target.x, "netCameraTargetX")
      ->packSingle(target.y, "netCameraTargetY")
    | None => writer
    }
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.PlayerUpdate->PacketTypeV1457.toInt)
    ->packByte(self.playerId, "playerId")
    ->packControlFlags(self.control, self.direction)
    ->packMiscFlags1(
      self.pulleyDirection,
      self.velocity,
      self.vortexStealthActive,
      self.gravityDirection,
      self.shieldRaised,
      self.ghost,
      self.mountType,
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
    ->packMiscFlags3(
      self.isSleeping,
      self.autoReuseAllWeapons,
      self.controlDownHold,
      self.isOperatingAnotherEntity,
      self.controlUseTile,
      self.netCameraTarget,
      self.lastItemUseAttemptSuccess,
      self.snappingStoneLightUp,
    )
    ->packByte(self.selectedItem, "selectedItem")
    ->packSingle(self.position.x, "positionX")
    ->packSingle(self.position.y, "positionY")
    ->packVelocity(self.velocity)
    ->packMountType(self.mountType)
    ->packPotionOfReturn(self.potionOfReturn)
    ->packNetCameraTarget(self.netCameraTarget)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
