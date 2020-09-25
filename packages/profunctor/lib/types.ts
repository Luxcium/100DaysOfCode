/* eslint-disable no-use-before-define */
import { IFunctor } from 'functor';

export interface IProfunctor<T, U> extends IFunctor<T> {
  promap: PromapType<T, U>;
}
// fantasy-land/promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d
export type PromapType<B, C> = <A, D>(
  fn1: (val: A) => B,
  fn2: (val: C) => D,
) => IProfunctor<A, D>;
