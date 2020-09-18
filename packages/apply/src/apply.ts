/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable no-invalid-this */
import { FunctorComplex, FunctorSimplex, IFMap, IFork } from 'functor';
import { IApply } from '../lib/types';

// #region https://curiosity-driven.org/monads-in-javascript
// export interface M<T> {

// }

// export function unit<T>(value: T): M<T> {
//     // ...

// }

// export function bind<T, U>(instance: M<T>, transform: (value: T) => M<U>): M<U> {
//     // ...
// }

// interface MStatic<T> {
//     // constructor that wraps value
//     new(value: T): M<T>;
// }

// interface M<T> {
//     // bind as an instance method
//     bind<U>(transform: (value: T) => M<U>): M<U>;
// }
// #endregion https://curiosity-driven.org/monads-in-javascript
export class Apply<T = unknown>
  extends FunctorComplex<T>
  implements
    IApply<T>,
    FunctorComplex<T>,
    IFork<T>,
    FunctorSimplex<T>,
    IFMap<T> {
  public constructor(value: T) {
    super(value);
    const apply = {
      'fantasy-land/ap': {
        configurable: false,
        enumerable: false,
        value: this.ap,
        writable: true,
      },
      'fantasy-land/map': {
        configurable: false,
        enumerable: false,
        value: this.map,
        writable: true,
      },
    };
    return Object.defineProperties(this, apply);
  }
  public 'fantasy-land/ap' = this.ap;
  public ap<R = unknown>(apply: IApply<(val: T) => R>) {
    if (typeof apply.fork === 'function') {
      return new Apply<R>(apply.fork(this.value));
    }
    throw new Error(
      'If argument is not an Apply of a function, the behaviour of ap is unspecified',
    );
  }

  public 'fantasy-land/map' = this.map;
  public map<R = unknown>(fn: (val: T) => R): Apply<R> {
    if (typeof fn === 'function') {
      return new Apply<R>(fn(this.fork));
    }
    throw new Error(
      'If argument is not a function, the behaviour of map is unspecified',
    );
  }
}

/*
Apply
+ A value that implements the Apply specification must also implement the Functor specification.

v['fantasy-land/ap'](u['fantasy-land/ap'](a['fantasy-land/map'](f => g => x => f(g(x))))) is equivalent to v['fantasy-land/ap'](u)['fantasy-land/ap'](a) (composition)

fantasy-land/ap method
fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
+A value which has an Apply must provide a fantasy-land/ap method. The fantasy-land/ap method takes one argument:

a['fantasy-land/ap'](b)
b must be an Apply of a function

If b does not represent a function, the behaviour of fantasy-land/ap is unspecified.
b must be same Apply as a.
a must be an Apply of any value

fantasy-land/ap must apply the function in Apply b to the value in Apply a

No parts of return value of that function should be checked.
The Apply returned by fantasy-land/ap must be the same as a and b
 */
