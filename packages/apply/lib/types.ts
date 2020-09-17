/* eslint-disable no-use-before-define */
import { FunctorComplex } from 'functor';
import { Apply } from '../src';

/**
 * 1. An Apply `a.ap(b)` must apply the function in
 * Apply `b` to the value in Apply `a`
 * 2. `b` must be same Apply as `a`
 * 3. The Apply returned must be the same as a and b
 */
export type ApType<A = unknown> = <B = unknown>(
  ap: Apply<(val: A) => B>,
) => IApply<B>;

/**
 * Anything that implement an Ap must implement
 * a method of the form map: ap: ApType<A>
 */
export interface IApply<A = unknown> extends FunctorComplex<A> {
  /** `Fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b` */
  ap: ApType<A>;
}
