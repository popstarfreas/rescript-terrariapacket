export type t<T> = {
  LAZY_DONE: boolean,
  VAL: () => T
}
