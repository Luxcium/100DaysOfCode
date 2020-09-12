import { IFMap } from './typings/functor';

/** A simple Functor must map */
export class FunctorSimplex<T = unknown> implements IFMap<T> {
  protected value!: T;
  public constructor(value: T) {
    const functorSimplex = {
      value: {
        value,
        configurable: false,
        enumerable: true,
        writable: false,
      },
      'fantasy-land/map': {
        value: this.map,
        configurable: false,
        enumerable: false,
        writable: true,
      },
    };
    return Object.defineProperties(this, functorSimplex);
  }
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  public 'fantasy-land/map' = this.map;
  public map<R = unknown>(fn: (val: T) => R): FunctorSimplex<R> {
    if (typeof fn === 'function') {
      return new FunctorSimplex<R>(fn(this.value));
    }
    throw new Error(
      'If argument is not a function, the behaviour of map is unspecified',
    );
  }
}
