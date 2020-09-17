/* eslint-disable no-use-before-define */
// must apply the function in Apply b to the value in Apply a

import { FunctorComplex } from 'functor';
import { Apply } from '../src';

// import { Apply } from '../src/apply';

/** An Apply `a.ap(b)` must apply the function in Apply b to the value in Apply a */
export type ApType<A = unknown> = <B = unknown>(
  ap: Apply<(val: A) => B>,
) => IApply<B>;
/**
 * Anything that implement an Ap must implement
 * a method of the form map: ap: ApType<A>
 */

export interface IApply<A = unknown> extends FunctorComplex<A> {
  /** `Fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b` */
  // 'fantasy-land/ap': ApType<A>;
  /** `ap :: Apply f => f a ~> f (a -> b) -> f b` */
  ap: ApType<A>;
}

//  IApply<T>,
//     IFork<T>,
//     FunctorComplex<T>,
//     IFMap<T>,
//     FunctorSimplex<T>
