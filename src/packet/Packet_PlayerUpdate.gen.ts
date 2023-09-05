/* TypeScript file generated from Packet_PlayerUpdate.resi by genType. */
/* eslint-disable import/first */


const $$toJS52874861: { [key: string]: any } = {"0": "Normal", "1": "Inverted"};

const $$toRE52874861: { [key: string]: any } = {"Normal": 0, "Inverted": 1};

const $$toJS835251090: { [key: string]: any } = {"0": "Left", "1": "Right"};

const $$toRE835251090: { [key: string]: any } = {"Left": 0, "Right": 1};

const $$toJS1000234951: { [key: string]: any } = {"0": "One", "1": "Two"};

const $$toRE1000234951: { [key: string]: any } = {"One": 0, "Two": 1};

// @ts-ignore: Implicit any on import
const Packet_PlayerUpdateBS = require('./Packet_PlayerUpdate.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

import type {t as Point_t} from '../../src/Point.gen';

// tslint:disable-next-line:interface-over-type-literal
export type direction = "Left" | "Right";

// tslint:disable-next-line:interface-over-type-literal
export type potionOfReturn = { readonly originalUsePosition: Point_t<number>; readonly homePosition: Point_t<number> };

// tslint:disable-next-line:interface-over-type-literal
export type control = {
  readonly isHoldingUp: boolean; 
  readonly isHoldingDown: boolean; 
  readonly isHoldingLeft: boolean; 
  readonly isHoldingRight: boolean; 
  readonly isHoldingJump: boolean; 
  readonly isHoldingItemUse: boolean
};

// tslint:disable-next-line:interface-over-type-literal
export type pulleyDirection = "One" | "Two";

// tslint:disable-next-line:interface-over-type-literal
export type gravityDirection = "Normal" | "Inverted";

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly playerId: number; 
  readonly control: control; 
  readonly direction: direction; 
  readonly pulleyDirection: (undefined | pulleyDirection); 
  readonly vortexStealthActive: boolean; 
  readonly gravityDirection: gravityDirection; 
  readonly shouldGuard: boolean; 
  readonly ghost: boolean; 
  readonly selectedItem: number; 
  readonly position: Point_t<number>; 
  readonly velocity: (undefined | Point_t<number>); 
  readonly potionOfReturn: (undefined | potionOfReturn); 
  readonly tryKeepingHoveringUp: boolean; 
  readonly isVoidVaultEnabled: boolean; 
  readonly isSitting: boolean; 
  readonly hasFinishedAnyDd2Event: boolean; 
  readonly isPettingAnimal: boolean; 
  readonly isTheAnimalBeingPetSmall: boolean; 
  readonly tryKeepingHoveringDown: boolean; 
  readonly isSleeping: boolean
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = function (Arg1: any) {
  const result = Packet_PlayerUpdateBS.parse(Arg1);
  return (result == null ? result : {playerId:result.playerId, control:result.control, direction:$$toJS835251090[result.direction], pulleyDirection:(result.pulleyDirection == null ? result.pulleyDirection : $$toJS1000234951[result.pulleyDirection]), vortexStealthActive:result.vortexStealthActive, gravityDirection:$$toJS52874861[result.gravityDirection], shouldGuard:result.shouldGuard, ghost:result.ghost, selectedItem:result.selectedItem, position:result.position, velocity:result.velocity, potionOfReturn:result.potionOfReturn, tryKeepingHoveringUp:result.tryKeepingHoveringUp, isVoidVaultEnabled:result.isVoidVaultEnabled, isSitting:result.isSitting, hasFinishedAnyDd2Event:result.hasFinishedAnyDd2Event, isPettingAnimal:result.isPettingAnimal, isTheAnimalBeingPetSmall:result.isTheAnimalBeingPetSmall, tryKeepingHoveringDown:result.tryKeepingHoveringDown, isSleeping:result.isSleeping})
};

export const toBuffer: (_1:t) => NodeJs_Buffer_t = function (Arg1: any) {
  const result = Packet_PlayerUpdateBS.toBuffer({playerId:Arg1.playerId, control:Arg1.control, direction:$$toRE835251090[Arg1.direction], pulleyDirection:(Arg1.pulleyDirection == null ? Arg1.pulleyDirection : $$toRE1000234951[Arg1.pulleyDirection]), vortexStealthActive:Arg1.vortexStealthActive, gravityDirection:$$toRE52874861[Arg1.gravityDirection], shouldGuard:Arg1.shouldGuard, ghost:Arg1.ghost, selectedItem:Arg1.selectedItem, position:Arg1.position, velocity:Arg1.velocity, potionOfReturn:Arg1.potionOfReturn, tryKeepingHoveringUp:Arg1.tryKeepingHoveringUp, isVoidVaultEnabled:Arg1.isVoidVaultEnabled, isSitting:Arg1.isSitting, hasFinishedAnyDd2Event:Arg1.hasFinishedAnyDd2Event, isPettingAnimal:Arg1.isPettingAnimal, isTheAnimalBeingPetSmall:Arg1.isTheAnimalBeingPetSmall, tryKeepingHoveringDown:Arg1.tryKeepingHoveringDown, isSleeping:Arg1.isSleeping});
  return result
};
