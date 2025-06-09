export type Array16<A> = [
  A, A, A, A,
  A, A, A, A,
  A, A, A, A,
  A, A, A, A
];

export function fromArray<A>(a: A[]): Array16<A> | undefined;

export function asArray<A>(self: Array16<A>): A[];
