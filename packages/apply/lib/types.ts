/* eslint-disable no-use-before-define */
import { FunctorComplex } from 'functor';
import { Apply } from '../src';

/** 'fantasy-land/ap'
 * Anything that implement an Ap must implement
 * a method of the form map: ap: ApType<A>
 */
export interface IApply<A = unknown> extends FunctorComplex<A> {
  /** `Fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b` */
  'fantasy-land/ap': ApType<A>;
  /** `Fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b` */
  ap: ApType<A>;
}

export type FnAtoB<A = unknown, B = unknown> = (val: A) => B;
export type FnAtoB_<R = unknown> = <T = unknown>(val: T) => R;

/**
 * 1. An Apply `a.ap(b)` must apply the function in
 * Apply `b` to the value in Apply `a`
 * 2. `b` must be same Apply as `a`
 * 3. The Apply returned must be the same as a and b
 */
// <A = unknown> =
export type ApType<
  A = unknown,
  B = unknown,
  Z = Apply<FnAtoB<A, B>>,
  W = IApply<B>
> = (apply: Z) => W;

// export type ApplyType = (val: A) => B ;

// <B = unknown>(
// ap: IApply<(val: A) => B>,
// ) => IApply<B>;
// '<R = unknown>(apply: Apply<(val: T) => R>) => Apply<R>'

/*
   'fantasy-land/ap' = this.ap;
    ap<R = unknown>(apply: Apply<(val: T) => R>) {
    if (typeof apply.value === 'function') {
      // return new Apply<R>(fn(this.fork));
      return new Apply<R>(apply.value(this.value));
    }
    throw new Error(
      'If argument is not an Apply of a function, the behaviour of ap is unspecified',
    );
  }

  Property 'ap' in type 'Apply<T>' is not assignable to the same property in base type 'IApply<T>'.
  Type '<R = unknown>(apply: Apply<(val: T) => R>) => Apply<R>' is not assignable to type 'ApType<T>'.ts(2416)
 */
