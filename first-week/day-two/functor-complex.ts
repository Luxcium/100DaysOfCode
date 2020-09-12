import { FunctorSimplex } from './functor-simplex';
import { IFMap, IFork } from './typings/functor';

export class FunctorComplex<T = unknown>
  extends FunctorSimplex<T>
  implements IFMap<T>, IFork<T> {
  public constructor(value: T) {
    super(value);
    const functorComplex = {
      'fantasy-land/map': {
        value: this.map,
        configurable: false,
        enumerable: false,
        writable: true,
      },
    };
    return Object.defineProperties(this, functorComplex);
  }
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  public 'fantasy-land/map' = this.map;
  public map<R = unknown>(fn: (val: T) => R): FunctorComplex<R> {
    if (typeof fn === 'function') {
      return new FunctorComplex<R>(fn(this.fork));
    }
    throw new Error(
      'If argument is not a function, the behaviour of map is unspecified',
    );
  }

  /** Return the internal value of a Functor or type extending Functor */
  public get fork(): T {
    return this.value;
  }

  /** Returns a string representation of a Functor or type extending Functor. */
  public toString(): string {
    return JSON.stringify(this.fork);
  }
  /** Returns a value representation of a Functor or type extending Functor. */
  public toValue(): T {
    return JSON.parse(this.toString());
  }
}
