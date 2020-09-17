/* eslint-disable no-invalid-this */
/* eslint-disable @typescript-eslint/unbound-method */
import { Apply, IApply } from 'apply';
import { FunctorComplex, FunctorSimplex, IFMap, IFork } from 'functor';

export class Chain<T = unknown>
  extends FunctorComplex<T>
  implements
    IApply<T>,
    Apply<T>,
    IFork<T>,
    FunctorComplex<T>,
    IFMap<T>,
    FunctorSimplex<T> {
  public constructor(value: T) {
    super(value);
    const apply = {
      'fantasy-land/chain': {
        configurable: false,
        enumerable: false,
        value: this.chain,
        writable: true,
      },
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

  public 'fantasy-land/chain' = this.chain;
  // fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
  public chain<R = unknown>(apply: Chain<(val: T) => R>) {
    if (typeof apply.value === 'function') {
      return void new Chain<R>(apply.value(this.value));
    }
    throw new Error(
      'If argument is not an Apply of a function, the behaviour of ap is unspecified',
    );
  }

  public 'fantasy-land/ap' = this.ap;
  public ap<R = unknown>(apply: Chain<(val: T) => R>) {
    if (typeof apply.value === 'function') {
      // return new Apply<R>(fn(this.fork));
      return new Chain<R>(apply.value(this.value));
    }
    throw new Error(
      'If argument is not an Apply of a function, the behaviour of ap is unspecified',
    );
  }

  public 'fantasy-land/map' = this.map;

  public map<R = unknown>(fn: (val: T) => R): Chain<R> {
    if (typeof fn === 'function') {
      return new Chain<R>(fn(this.fork));
    }
    throw new Error(
      'If argument is not a function, the behaviour of map is unspecified',
    );
  }
}

/*


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
