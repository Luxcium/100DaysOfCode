/* eslint-disable no-use-before-define */
export interface ISetoid<T> {
  equals: EqualsType<T>;
}
// fantasy-land/equals :: Setoid a => a ~> a -> Boolean
export type EqualsType<T> = (val: T) => boolean;
