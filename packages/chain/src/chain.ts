/* eslint-disable no-use-before-define */
/* eslint-disable no-invalid-this */
/* eslint-disable @typescript-eslint/unbound-method */
import { Apply, IApply } from 'apply';
import { FunctorComplex, FunctorSimplex, IFMap, IFork } from 'functor';

export interface IChain<A = any> extends Apply<A> {
  /** fantasy-land/chain :: Chain m => m A ~> (A -> m B) -> m B */
  chain: ChainType<A>;
}
export type ChainType<A = unknown> = <B = unknown>(
  // fn: (A -> m B)
  fn: fnChain<A, B>,
  //  m B
) => IChain<B>;

export type fnChain<A, B> =  (val: A) => IChain<B>


/*
"is a member of"
  fantasy-land/chain "is a member of the type"  °Chain m => m A ~> (A -> m B) -> m B°

  fantasy-land/chain  ::            Chain m           =>  m A  ~>      (A -> m B)      ->
'-------------------'    '--------------------------'     '-'     '-------------------'    '-----'
 '                        '                                '      '                        '
 '                        ' - type constraints             '      ' - argument types       ' - return type
 '                                                         '
 '- method name                                            ' - method target type
 */
// type ChainType<A> = A;
// export interface IChain<A = unknown> extends FunctorComplex<A> {
//   /** `Fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b` */
//   'fantasy-land/chain': ChainType<A>;
//   /** `Fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b` */
//   ap: ChainType<A>;
// }

export class Chain<T = unknown>
  extends FunctorComplex<T>
  implements
    IChain<T>,
    Apply<T>,
    IApply<T>,
    FunctorComplex<T>,
    IFork<T>,
    FunctorSimplex<T>,
    IFMap<T> {
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
  public chain<R = any>(fn: (val: T) => IChain<R>): Chain<R> {
    if (typeof fn === 'function') {
      return new Chain<R>(fn(this.value).fork);
    }
    throw new Error(
      'If argument is not a function, the behaviour of chain is unspecified',
    );
  }

  public 'fantasy-land/ap' = this.ap;
  public ap<R = unknown>(apply: IApply<(val: T) => R>) {
    if (typeof apply.fork === 'function') {
      return new Chain<R>(apply.fork(this.value));
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
fantasy-land/chain ::
Chain m => m a ~> (a -> m b) -> m b
f => f a ~> f (a -> b) -> f b
m['fantasy-land/chain'](f)
f must be a function which returns a value

If f is not a function, the behaviour of fantasy-land/chain is unspecified.
f must return a value of the same Chain
fantasy-land/chain must return a value of the same Chain
  // public ===================================================-| chain() |-====
  public [Fantasy.chain] = this.chain;

  public chain<R>(fn: (val: T[]) => IMonad<R>): IMonad<R> {
    return super.chain(fn);
  }

  // public ==================================================-| fChain() |-====
  public fChain<R = any>(
    fn: (val: T, index: number, array: T[]) => MaybeList<R>,
  ): MaybeList<R> {
    return MaybeList.of(
      ...this.chain<R[]>(values =>
        Monad.of(
          values.map((value: T, index: number, array: T[]) =>
            fn(value, index, array),
          ),
        ),
      ).fork,
    );
  }

  // public ===============================================-| flatChain() |-====
  public flatChain<R = any>(
    fn: (val: T, index: number, array: T[]) => R,
  ): MaybeList<R> {
    return MaybeList.of(
      ...this.chain<R[]>(values => Monad.of(values.flatMap(fn))).fork,
    );
  }

  / **
   * fantasy-land/chain :: Chain m => m T ~> (a -> m R) -> m R
   *
   * @param fn
   * /
  public chain<R = any>(fn: (val: T) => IChain<R>): IChain<R> {
    return new Chain(
      this.map(x => fn(x)).fork
    )
  }




 */
