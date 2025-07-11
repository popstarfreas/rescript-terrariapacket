export type Result<T, E> = {
  TAG: "Ok",
  _0: T,
} | {
  TAG: "Error",
  _0: E,
}
