import { FunctorComplex, FunctorSimplex, IFMap, IFork } from 'functor';
// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
export const FANTASY_LAND_APPLY = 'fantasy-land/ap';
// export class Apply extends FunctorComplex {
//   public ap: any;
// }
export { FunctorSimplex, FunctorComplex };

export class Apply<T = unknown>
  extends FunctorComplex<T>
  implements IFMap<T>, IFork<T>, FunctorSimplex<T>, FunctorComplex<T> {
  public constructor(value: T) {
    super(value);
    const functorComplex = {
      'fantasy-land/map': {
        configurable: false,
        enumerable: false,
        value: this.map,
        writable: true,
      },
    };
    return Object.defineProperties(this, functorComplex);
  }

  public 'fantasy-land/map' = this.map;

  public map<R = unknown>(fn: (val: T) => R): FunctorComplex<R> {
    if (typeof fn === 'function') {
      return new FunctorComplex<R>(fn(this.fork));
    }
    throw new Error(
      'If argument is not a function, the behaviour of map is unspecified',
    );
  }

  public get fork(): T {
    return this.value;
  }

  /** Returns a string representation of a Functor or a Functor extended type. */
  public toString(): string {
    return JSON.stringify(this.fork);
  }

  /** Returns a value `T` 'representation' of a Functor or a Functor extended type. */
  public toValue(): T {
    return JSON.parse(this.toString());
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
