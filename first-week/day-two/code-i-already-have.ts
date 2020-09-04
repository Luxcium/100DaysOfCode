/**
 * LUXCIUM LICENSE *NO* PERMISSION GRANTED - PROVIDED "AS IS" - WITHOUT WARRANTY
 * =============================================================================≈
 * @author Benjamin Vincent Kasapoglu (LUXCIUM)
 * @copyright © 2020 - LUXCIUM (Benjamin Vincent Kasapoglu) <luxcium@neb401.com>
 * @license LUXCIUM-LICENSE for this file only or other having the same mention
 * =============================================================================≈
 * Scientia es lux principium✨ ™ - SEE THE BOTTOM OF THIS FILES FOR MORE INFO
 */

/*
  M['fantasy-land/of'](a)['fantasy-land/chain'](f) is equivalent to f(a) (left identity)
  m['fantasy-land/chain'](M['fantasy-land/of']) is equivalent to m (right identity)
*/
// ------------------------------------------------------------------------------
/*

Monad
A value that implements the Monad specification must also implement the Applicative and Chain specifications.

M['fantasy-land/of'](a)['fantasy-land/chain'](f) is equivalent to f(a) (left identity)
m['fantasy-land/chain'](M['fantasy-land/of']) is equivalent to m (right identity)


Applicative
A value that implements the Applicative specification must also implement the Apply specification.

v['fantasy-land/ap'](A['fantasy-land/of'](x => x)) is equivalent to v (identity)
A['fantasy-land/of'](x)['fantasy-land/ap'](A['fantasy-land/of'](f)) is equivalent to A['fantasy-land/of'](f(x)) (homomorphism)
A['fantasy-land/of'](y)['fantasy-land/ap'](u) is equivalent to u['fantasy-land/ap'](A['fantasy-land/of'](f => f(y))) (interchange)

fantasy-land/of method
fantasy-land/of :: Applicative f => a -> f a
A value which has an Applicative must provide a fantasy-land/of function on its type representative. The fantasy-land/of function takes one argument:

F['fantasy-land/of'](a)
Given a value f, one can access its type representative via the constructor property:

f.constructor['fantasy-land/of'](a)
fantasy-land/of must provide a value of the same Applicative

No parts of a should be checked


Apply
A value that implements the Apply specification must also implement the Functor specification.

v['fantasy-land/ap'](u['fantasy-land/ap'](a['fantasy-land/map'](f => g => x => f(g(x))))) is equivalent to v['fantasy-land/ap'](u)['fantasy-land/ap'](a) (composition)

fantasy-land/ap method
fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
A value which has an Apply must provide a fantasy-land/ap method. The fantasy-land/ap method takes one argument:

a['fantasy-land/ap'](b)
b must be an Apply of a function

If b does not represent a function, the behaviour of fantasy-land/ap is unspecified.
b must be same Apply as a.
a must be an Apply of any value

fantasy-land/ap must apply the function in Apply b to the value in Apply a

No parts of return value of that function should be checked.
The Apply returned by fantasy-land/ap must be the same as a and b



Chain
A value that implements the Chain specification must also implement the Apply specification.

m['fantasy-land/chain'](f)['fantasy-land/chain'](g) is equivalent to m['fantasy-land/chain'](x => f(x)['fantasy-land/chain'](g)) (associativity)

fantasy-land/chain method
fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
A value which has a Chain must provide a fantasy-land/chain method. The fantasy-land/chain method takes one argument:

m['fantasy-land/chain'](f)
f must be a function which returns a value

If f is not a function, the behaviour of fantasy-land/chain is unspecified.
f must return a value of the same Chain
fantasy-land/chain must return a value of the same Chain

 */
/* eslint-disable lodash/prefer-lodash-method */
// import { Functor } from './functor';
// import { Applicative, IFunctor, IMonad, ValueType } from './typings';

export interface HKT<URI, A> {
  readonly _URI: URI;
  readonly _A: A;
}

const domain = 'domain';

export type Domain = typeof domain;

export interface FunctorFP<F> {
  readonly URI: F;
  readonly map: <A, B>(fa: HKT<F, A>, f: (a: A) => B) => HKT<F, B>;
}
export class Functor<T = unknown> implements IFunctor<T> {
  public _value: T;

  public constructor(value: T) {
    this._value = value;
  }

  /**
   * fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
   *
   * @param fn
   */
  public map<R = any>(fn: (val: T) => R): IFunctor<R> {
    return new Functor<R>(fn(this._value));
  }

  public get fork() {
    return this._value;
  }

  public toString(): string {
    return JSON.stringify(this);
  }

  public toValue(): ValueType<T> {
    return JSON.parse(this.toString());
  }

  public static fromValue<TVal>(value: ValueType) {
    return new Functor<TVal>(value._value);
  }
}

export class FunctorSimple<T = unknown> implements IFunctorSimple<T> {
  public _value: T;
  public constructor(value: T) {
    this._value = value;
  }
  public map<R = any>(fn: (val: T) => R) {
    return new FunctorSimple<R>(fn(this._value));
  }
}

export class FunctorComplex<T = unknown> extends FunctorSimple<T>
  implements IFunctorSimple<T>, IFunctorT<T> {
  public constructor(value: T) {
    super(value);
  }
  public map<R = any>(fn: (val: T) => R) {
    return new FunctorComplex<R>(fn(super._value));
  }
  public get fork() {
    return super._value;
  }
}

/*

Functor
*/
export interface IMapX<A = unknown> {
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  readonly map: (fn: <R = unknown>(val: A) => R) => IMapX;
}

/** A functor must, in our implementation, Fork and return its internat value */

export interface IForkX<A = unknown> {
  readonly fork: A;
}
export type IFunctorSimple<T = unknown> = IMapX<T>;
export type IFunctorT<T = unknown> = IMapX<T> & IForkX<T>;
/*
u['fantasy-land/map'](a => a) is equivalent to u (identity)
u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)

fantasy-land/map method
fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
A value which has a Functor must provide a fantasy-land/map method. The fantasy-land/map method takes one argument:

u['fantasy-land/map'](f)
f must be a function,

If f is not a function, the behaviour of fantasy-land/map is unspecified.
f can return any value.
No parts of f's return value should be checked.
fantasy-land/map must return a value of the same Functor

 */

/*
Apply
A value that implements the Apply specification must also implement the Functor specification.
*/
export type IApT<T = unknown> = IFunctorT<T> & IApX<T>;

export interface IApX<T = unknown> {
  /** fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b */
  readonly ap: <R = unknown>(fn: IApT<(val: T) => R>) => IApT<R>;
}
/*
v['fantasy-land/ap'](u['fantasy-land/ap'](a['fantasy-land/map'](f => g => x => f(g(x))))) is equivalent to v['fantasy-land/ap'](u)['fantasy-land/ap'](a) (composition)

fantasy-land/ap method
fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
A value which has an Apply must provide a fantasy-land/ap method. The fantasy-land/ap method takes one argument:

a['fantasy-land/ap'](b)
b must be an Apply of a function

If b does not represent a function, the behaviour of fantasy-land/ap is unspecified.
b must be same Apply as a.
a must be an Apply of any value

fantasy-land/ap must apply the function in Apply b to the value in Apply a

No parts of return value of that function should be checked.
The Apply returned by fantasy-land/ap must be the same as a and b
*/

// ------------------------------------------------------------------------------
/*
Applicative
A value that implements the Applicative specification must also implement the Apply specification.

  public static of: Applicative<IMonad> = <TVal = any>(
    value: TVal,
  ): IMonad<TVal> => new Monad<TVal>(value);

*/
// export type IOfT<T = unknown> = IApT<T>; // & IOfX<T>;
export interface IOfX<T = unknown> {
  readonly of: (val: T) => IApT<T>;
}
/*
v['fantasy-land/ap'](A['fantasy-land/of'](x => x)) is equivalent to v (identity)
A['fantasy-land/of'](x)['fantasy-land/ap'](A['fantasy-land/of'](f)) is equivalent to A['fantasy-land/of'](f(x)) (homomorphism)
A['fantasy-land/of'](y)['fantasy-land/ap'](u) is equivalent to u['fantasy-land/ap'](A['fantasy-land/of'](f => f(y))) (interchange)

fantasy-land/of method
fantasy-land/of :: Applicative f => a -> f a
A value which has an Applicative must provide a fantasy-land/of function on its type representative. The fantasy-land/of function takes one argument:

F['fantasy-land/of'](a)
Given a value f, one can access its type representative via the constructor property:

f.constructor['fantasy-land/of'](a)
fantasy-land/of must provide a value of the same Applicative

No parts of a should be checked

 */
// ------------------------------------------------------------------------------
/*
Chain
A value that implements the Chain specification must also implement the Apply specification.
*/
export type IChainT<T = unknown> = IApX<T> & IChainX<T>;
export interface IChainX<T = unknown> {
  /** fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b */
  readonly chain: <R>(val: T) => IChainT<R>;
}

/*
m['fantasy-land/chain'](f)['fantasy-land/chain'](g) is equivalent to m['fantasy-land/chain'](x => f(x)['fantasy-land/chain'](g)) (associativity)

fantasy-land/chain method
fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
A value which has a Chain must provide a fantasy-land/chain method. The fantasy-land/chain method takes one argument:

m['fantasy-land/chain'](f)
f must be a function which returns a value

If f is not a function, the behaviour of fantasy-land/chain is unspecified.
f must return a value of the same Chain
fantasy-land/chain must return a value of the same Chain
 */
// ------------------------------------------------------------------------------
/*
  Monad
  A value that implements the Monad specification must also implement the Applicative and Chain specifications.
*/
export type IMonadT<T = unknown> = IApT<T> & IChainT<T>;

/**
 * ## Monad
 * https://github.com/fantasyland/fantasy-land#monad \
 * A value that implements the Monad specification must also implement the Applicative and Chain specifications.
 *
 * M\['fantasy-land/of'](a)\['fantasy-land/chain'](f) \
 * is equivalent to f(a) (left identity) \
 * m\['fantasy-land/chain'](M\['fantasy-land/of']) \
 * is equivalent to m (right identity)
 *
 */
export class Monad<T = any> extends Functor<T> implements IMonad<T> {
  /**
   *
   * ### Applicative
   * https://github.com/fantasyland/fantasy-land#applicative
   *
   * A value that implements the Applicative specification
   * must also implement the Apply specification.
   *
   * v['fantasy-land/ap'](A['fantasy-land/of'](x => x))
   * is equivalent to v (identity)
   * A['fantasy-land/of'](x)['fantasy-land/ap'](A['fantasy-land/of'](f))
   * is equivalent to A['fantasy-land/of'](f(x)) (homomorphism)
   * A['fantasy-land/of'](y)['fantasy-land/ap'](u)
   * is equivalent to
   * u['fantasy-land/ap'](A['fantasy-land/of'](f => f(y))) (interchange)
   *
   * fantasy-land/of method
   * fantasy-land/of :: Applicative f => a -> f a
   * A value which has an Applicative must provide a fantasy-land/of function
   * on its type representative. The fantasy-land/of
   *  function takes one argument:
   *
   * F['fantasy-land/of'](a)
   * Given a value f, one can access its type representative via the constructor
   * property:
   *
   * f.constructor['fantasy-land/of'](a)
   * fantasy-land/of must provide a value of the same Applicative
   *
   * No parts of a should be checked
   *
   *
   *
   *
   */
  /**
   * fantasy-land/of :: Applicative m => TVal -> m TVal
   *
   * @param value
   */
  public static of: Applicative<IMonad> = <TVal = any>(
    value: TVal,
  ): IMonad<TVal> => new Monad<TVal>(value);

  public constructor(value: T) {
    super(value);
    return this;
  }

  /**
   * ## Functor
   *
   * @see https://github.com/fantasyland/fantasy-land#functor \
   *  \
   * u['fantasy-land/map'](a => a) is equivalent to u (identity) \
   * u['fantasy-land/map'](x => f(g(x))) is equivalent to \
   *  u\['fantasy-land/map'](g) * \['fantasy-land/map'](f) (composition) \
   * \
   * fantasy-land/map method
   *
   * @typedef fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b \
   *  \
   * A value which has a Functor must provide a fantasy-land/map method. \
   *  \
   * The fantasy-land/map method takes one argument: \
   * \
   * `u['fantasy-land/map'](fn)` \
   *  \
   * fn must be a function, \
   * \
   * If f is not a function, the behaviour of fantasy-land/map is unspecified. \
   * f can return any value. \
   * No parts of f's return value should be checked. \
   * fantasy-land/map must return a value of the same Functor
   */
  /**
   * fantasy-land/map :: Functor m => m T ~> (T -> R) -> m R
   *
   * @param fn
   */
  public map<R>(fn: (val: T) => R): IMonad<R> {
    return Monad.of(
      super.map<R>(x => fn(x)).fork,
    );
  }

  /**
   * ### Apply
   * https://github.com/fantasyland/fantasy-land#apply
   *
   * A value that implements the Apply specification must also implement
   * the Functor specification.
   *
   * v['fantasy-land/ap'](u['fantasy-land/ap'](a['fantasy-land/map'](f => g => x => f(g(x)))))
   * is equivalent to v['fantasy-land/ap'](u)['fantasy-land/ap'](a) (composition)
   *
   * fantasy-land/ap method
   * fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
   * A value which has an Apply must provide a fantasy-land/ap method.
   * The fantasy-land/ap method takes one argument:
   *
   * a['fantasy-land/ap'](b)
   * b must be an Apply of a function
   *
   * If b does not represent a function, the behaviour of fantasy-land/ap
   * is unspecified.
   *
   * b must be same Apply as a.
   * a must be an Apply of any value
   *
   * fantasy-land/ap must apply the function in Apply b to the value in Apply a
   *
   * No parts of return value of that function should be checked.
   * The Apply returned by fantasy-land/ap must be the same as a and b
   */
  /**
   * fantasy-land/ap :: Apply m => m T ~> m (T -> R) -> m R
   *
   * @param c
   */
  public ap<R = any>(c: IMonad<(val: T) => R>): IMonad<R> {
    return c.map<IMonad<R>>((fn: (val: T) => R) => this.map<R>(x => fn(x)))
      .fork;
  }

  /**
   *
   * ### Chain
   * https://github.com/fantasyland/fantasy-land#chain
   * A value that implements the Chain specification must also implement the
   * Apply specification.
   *
   * m['fantasy-land/chain'](f)['fantasy-land/chain'](g) is equivalent
   * to m['fantasy-land/chain'](x => f(x)['fantasy-land/chain'](g)) (associativity)
   *
   * fantasy-land/chain method
   * fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
   * A value which has a Chain must provide a fantasy-land/chain method.
   * The fantasy-land/chain method takes one argument:
   *
   * m['fantasy-land/chain'](f)
   * f must be a function which returns a value
   *
   * If f is not a function, the behaviour of fantasy-land/chain is unspecified.
   * f must return a value of the same Chain
   * fantasy-land/chain must return a value of the same Chain
   *
   */

  /**
   * fantasy-land/chain :: Chain m => m T ~> (a -> m R) -> m R
   *
   * @param fn
   */
  public chain<R = any>(fn: (val: T) => IMonad<R>): IMonad<R> {
    return Monad.of<IMonad<R>>(
      this.map<IMonad<R>>(x => fn(x)).fork,
    ).fork;
  }

  public static fromValue = <T>(value: ValueType<T>) => {
    return new Monad<T>(value._value);
  };
}



export interface IApply<A = any, U = any> extends IFunctor<A> {
  /** fantasy-land/ap :: Apply f => f A ~> f (A -> B) -> f B */
  ap: ApType<A, U>;
}
export type ApType<A = any, U = any> = <B = U>(
  Ap: IApply<(val: A) => B>,
) => IApply<U>;

export interface IApplicative {
  /** fantasy-land/of :: Applicative f => a -> f a */
  readonly of: Applicative;
}
export type Applicative<RType = IApply> = <TVal>(value?: TVal) => RType;

export interface ApplicativeFP<F> extends ApplyFP<F> {
  readonly of: <A>(a: A) => HKT<F, A>;
}
export interface ChainFP<F> extends ApplyFP<F> {
  readonly chain: <A, B>(fa: HKT<F, A>, f: (a: A) => HKT<F, B>) => HKT<F, B>;
}
export interface ApplyFP<F> extends FunctorFP<F> {
  readonly ap: <A, B>(fab: HKT<F, (a: A) => B>, fa: HKT<F, A>) => HKT<F, B>;
}
export interface FunctorFP<F> {
  readonly URI: F;
  readonly map: <A, B>(fa: HKT<F, A>, f: (a: A) => B) => HKT<F, B>;
}
export interface HKT<URI, A> {
  readonly _URI: URI;
  readonly _A: A;
}

export type Option<A> =
  | { type: 'None' }
  | {
    type: 'Some';
    value: A;
  };

export interface IChain<A = any> extends ValueType<A> {
  /** fantasy-land/chain :: Chain m => m A ~> (A -> m B) -> m B */
  chain: ChainType<A>;
}
export type ChainType<A = any> = <B = any>(
  fn: (val: A) => IChain<B>,
) => IChain<B>;

export interface IMonad<A = any> extends IChain<A>, IApply<A> {
  chain<B = any>(fn: (val: A) => IChain<B>): IMonad<B>;
  ap<B = any>(Apply: IApply<(val: A) => B>): IMonad<B>;
  map<B>(fn: (val: A) => B): IMonad<B>;
}



/**
 * ## Functor
 *
 * @see https://github.com/fantasyland/fantasy-land#functor \
 *  \
 * u['fantasy-land/map'](a => a) is equivalent to u (identity) \
 * u['fantasy-land/map'](x => f(g(x))) is equivalent to \
 *  u\['fantasy-land/map'](g) * \['fantasy-land/map'](f) (composition) \
 * \
 * fantasy-land/map method
 *
 * @typedef fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b \
 *  \
 * A value which has a Functor must provide a fantasy-land/map method. \
 *  \
 * The fantasy-land/map method takes one argument: \
 * \
 * `u['fantasy-land/map'](fn)` \
 *  \
 * fn must be a function, \
 * \
 * If f is not a function, the behaviour of fantasy-land/map is unspecified. \
 * f can return any value. \
 * No parts of f's return value should be checked. \
 * fantasy-land/map must return a value of the same Functor
 */

export type FunctorType<T = any> = IFMap<T> & IFork<T>;
export type ForkType<A = any> = A;
export type MapType<A = any> /* <A = any, U = any> = <B = U> */ = (
  fn: (val: A) => any,
) => IFMap;
export interface IFMap<A = any> /* <A = any, U = any> extends ValueType<A> */ {
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  map: MapType<A> /* <A, U> */;
}

/** A functor must, in our implementation, Fork and return its internat value */
export interface IFork<A = any> extends ValueType<A> {
  readonly fork: ForkType<A>;
}
export interface ValueType<A = any> {
  readonly _value: A;
}

/** A functor must FMap and in our implementation of a functor must Fork */
export interface IFunctor<A = any> extends IFMap<A>, IFork<A>, FunctorType<A> {
  map<B>(fn: (val: A) => B): FunctorType<B>;
  toString(): string;
  toValue(): ValueType<A>;
  readonly fork: A;
}


/*
================================================================================≈
† LUXCIUM‡ LICENSE — *NO* PERMISSION GRANTED — PROVIDED "AS IS" WITHOUT WARRANTY

‽  *NO* PERMISSION ARE GRANTED. NOT TO PUBLISH, NOT TO DISTRIBUTE, NOT TO
‽  SUBLICENSE, AND/OR NOT TO SELL COPIES OF THE SOFTWARE.
‽
‽  You may use, only for yourself, the source code in this file and from
‽  imported files to this one. You have the right to: distribute to your
‽  friends, to your students, or to you coworker for personal or academic use
‽  at home at school or at work. You must include this «FULL NOTICE» in each
‽  imported files to this one that you decide to use if such «FULL NOTICE»
‽  is missing. If you modify the code in a substatial way you may decide to
‽  include only the «COPYRIGHT» and the «SHORT NOTICE» below.

† Copyright © 2020 — LUXCIUM‡ (Benjamin Vincent Kasapoglu) <luxcium⸓neb401.com>

- --> SHORT NOTICE
-  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ALL KIND, EXPRESS OR
-  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
-  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
-  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ALL CLAIM, DAMAGES OR OTHER
-  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
-  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
-  SOFTWARE.
- -->
-
- IN ANY CASES THE COPYRIGHT AND SHORT NOTICE ABOVE MUST BE INCLUDED.

† Scientia es lux principium✨ ™
================================================================================≈
*/
