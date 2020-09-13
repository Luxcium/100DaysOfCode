import { IFMap } from './typings/functor';

/**
 * ##### Functor
 * Fantasy Land ―
 *  @see Link: https://github.com/fantasyland/fantasy-land/blob/master/README.md#functor
 * A value which has a Functor must provide a `fantasy-land/map` method.
 * The `fantasy-land/map` method takes one argument `fn`:
 * ```typescript
 *    u['fantasy-land/map'](fn)
 * ```
 *
 * `fn` must be a function,
 *
 * If `fn` is not a function, the behaviour of `fantasy-land/map` is *unspecified*.
 * `fn` can return any value.
 * No parts of `fn`'s return value should be checked.
 * `fantasy-land/map` must return a value of the same `Functor`
 */
export class FunctorSimplex<T = unknown> implements IFMap<T> {
  /**  `value` can be any value of type `T` */
  // protected ==================================================-| value |-====
  protected value!: T;

  // constructor =======================================-| FunctorSimplex |-====
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

  /**
   *  Fantasy Land ―
   * + `fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b`
   * + `fn` can return any value `R`.
   * + `fantasy-land/map` return value of the same Functor (FunctorSimplex<R>)
   */
  // Fantasy Land =================================================-| map |-====
  public 'fantasy-land/map' = this.map;

  // public =======================================================-| map |-====
  public map<R = unknown>(fn: (val: T) => R): FunctorSimplex<R> {
    // fn must be a function
    if (typeof fn === 'function') {
      return new FunctorSimplex<R>(fn(this.value));
    }

    // If fn is not a function, fantasy-land/map behaviour is unspecified.
    throw new Error(
      'If argument fn is not a function, the behaviour of map is unspecified',
    );
  }
}
