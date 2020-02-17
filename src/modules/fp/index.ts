import { Option, fold as foldOption } from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/pipeable";
import { identity, constant, flip } from "fp-ts/lib/function";

export type Getter<K extends string> = <
  T,
  O extends {
    [P in K]: T;
  }
>(
  o: O
) => O[K];

export const getter = <K extends string>(key: K): Getter<K> => <
  T,
  O extends { [P in K]: T }
>(
  o: O
) => o[key];

export const getter2 = <K1 extends string, K2 extends string>(
  k1: K1,
  k2: K2
) => <T, O extends { [P in K1]: { [R in K2]: T } }>(o: O) => o[k1][k2];

export const foldMaybe = <T>(maybe: Option<T>) => (base: T) => pipe(
  maybe,
  foldOption(constant(base), identity)
)

export const foldValue = <T>(base: T) => <U>(maybe: Option<T>) => pipe(
  maybe,
  foldOption(constant(base), identity)
)

export const foldString = foldValue("")