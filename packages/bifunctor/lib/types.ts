/* eslint-disable no-use-before-define */
import { IFunctor } from 'functor';
export interface IBifunctor<T, U> extends IFunctor<T> {
  bimap: BimapType<T, U>;
}
// fantasy-land/bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d
export type BimapType<A, C> = <B, D>(
  fn1: (val: A) => B,
  fn2: (val: C) => D,
) => IBifunctor<B, D>;
