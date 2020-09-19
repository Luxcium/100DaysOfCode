export interface ISetoid<T> {
  equals: EqualsType<T>;
}
// fantasy-land/equals :: Setoid a => a ~> a -> Boolean
export type EqualsType<T> = (val: T) => boolean;
export interface IOrd<T> extends ISetoid<T> {
  lte: LteType<T>;
}
// fantasy-land/lte :: Ord a => a ~> a -> Boolean
export type LteType<T> = (val: T) => boolean;
export interface ISemigroupoid<T, U> {
  compose: ComposeType<T, U>;
}
// fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k
export type ComposeType<I, K> = <J>(
  semigroupoid: ISemigroupoid<J, K>,
) => ISemigroupoid<I, K>;

export interface ISemigroup<T> {
  concat: ConcatType<T>;
}
// fantasy-land/concat :: Semigroup a => a ~> a -> a
export type ConcatType<A> = (val: A) => A;

export interface IGroup<T> extends ISemigroup<T>, IMonoid<T> {
  invert: InvertType<T>;
}
// fantasy-land/invert :: Group g => g ~> () -> g
export type InvertType<G> = () => G;
export interface IFilterable<T> {
  filter: FilterType<T>;
}
// fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a
export type FilterType<T> = (fn: (val: T) => boolean) => boolean;
export interface IFunctor<T> {
  map: MapType<T>;
}
// fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
export type MapType<A> = <B>(fn: (val: A) => B) => IFunctor<B>;
export interface IContravariant<T> {
  contramap: ContramapType<T>;
}
// fantasy-land/contramap :: Contravariant f => f a ~> (b -> a) -> f b
export type ContramapType<B> = (fn: <A>(val: B) => A) => IContravariant<B>;
export interface IApply<T> extends IFunctor<T> {
  ap: ApType<T>;
}
// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
export type ApType<B> = (apply: <A>(val: A) => B) => IApply<B>;

export interface IAlt<T> extends IFunctor<T> {
  alt: AltType<T>;
}
// fantasy-land/alt :: Alt f => f a ~> f a -> f a
export type AltType<A> = (val: IAlt<A>) => IAlt<A>;

export interface IFoldable<T> {
  reduce: ReduceType<T>;
}
// fantasy-land/reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b
export type ReduceType<B> = (fn: <A>(val1: B, val2: A) => B, acc: B) => B;
export interface ITraversable<T> extends IFunctor<T>, IFoldable<T> {
  traverse: TraverseType<T>;
}
// fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
export type TraverseType<T> = T;
export interface IChain<T> {
  chain: ChainType<T>;
}
// fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
export type ChainType<B> = (fn: <A>(val: A) => IChain<B>) => IChain<B>;

export interface IExtend<T> extends IFunctor<T> {
  extend: ExtendType<T>;
}
// fantasy-land/extend :: Extend w => w a ~> (w a -> b) -> w b
export type ExtendType<A> = <B>(extend: (val: A) => B) => IExtend<B>;
export interface IComonad<T> extends IExtend<T> {
  extract: ExtractType<T>;
}
// fantasy-land/extract :: Comonad w => w a ~> () -> a
export type ExtractType<T> = () => T;
export interface IBifunctor<T, U> extends IFunctor<T> {
  bimap: BimapType<T, U>;
}
// fantasy-land/bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d
export type BimapType<A, C> = <B, D>(
  fn1: (val: A) => B,
  fn2: (val: C) => D,
) => IProfunctor<B, D>;
export interface IProfunctor<T, U> extends IFunctor<T> {
  promap: PromapType<T, U>;
}
// fantasy-land/promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d
export type PromapType<B, C> = <A, D>(
  fn1: (val: A) => B,
  fn2: (val: C) => D,
) => IProfunctor<A, D>;

export interface IAlternative<T> extends IFunctor<T>, IAlt<T>, IPlus<T> {
  //
}

export interface IMonad<T>
  extends IFunctor<T>,
    IApply<T>,
    // STATIC: IApplicative<T>,
    IChain<T> {
  //
}

/*
Type representatives
Certain behaviours are defined from the perspective of a member of a type.
Other behaviours do not require a member. Thus certain algebras require a type
to provide a value-level representative (with certain properties). The Identity
type, for example, could provide Id as its type representative: Id :: TypeRep
Identity.

If a type provides a type representative, each member of the type must have
a constructor property which is a reference to the type representative.
*/

export interface ICategory<T> extends ISemigroupoid<T, T> {
  // STATIC:
  id: IdType<T>;
}
// STATIC fantasy-land/id :: Category c => () -> c a a
export type IdType<A> = ICategory<A>;

export interface IMonoid<T> extends ISemigroup<T> {
  // STATIC:
  empty: EmptyType<T>;
}
// STATIC fantasy-land/empty :: Monoid m => () -> m
export type EmptyType<T> = T;

export interface IApplicative<T> extends IFunctor<T> {
  // STATIC:
  of: OfType;
}
// STATIC fantasy-land/of :: Applicative f => a -> f a
export type OfType = any;

export interface IPlus<T> extends IFunctor<T>, IAlt<T> {
  // STATIC:
  zero: ZeroType;
}
// STATIC fantasy-land/zero :: Plus f => () -> f a
export type ZeroType = any;

export interface IChainRec<T> {
  // STATIC:
  chainRec: ChainRecType<T>;
}
// STATIC fantasy-land/chainRec :: ChainRec m => ((a -> c, b -> c, a) -> m c, a) -> m b
export type ChainRecType<T> = T;
