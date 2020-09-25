interface FantasyLand {
  /** Setoid: fantasy-land/equals :: Setoid a => a ~> a -> Boolean  */
  equals: 'fantasy-land/equals';
  /** Ord: fantasy-land/lte :: Ord a => a ~> a -> Boolean  */
  lte: 'fantasy-land/lte';
  /** Semigroupoid: fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k  */
  compose: 'fantasy-land/compose';
  /** Category: fantasy-land/id :: Category c => () -> c a a  */
  id: 'fantasy-land/id';
  /** Semigroup: fantasy-land/concat :: Semigroup a => a ~> a -> a  */
  concat: 'fantasy-land/concat';
  /** Monoid: fantasy-land/empty :: Monoid m => () -> m  */
  empty: 'fantasy-land/empty';
  /** Group: fantasy-land/invert :: Group g => g ~> () -> g  */
  invert: 'fantasy-land/invert';
  /** Filterable: fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a  */
  filter: 'fantasy-land/filter';
  /** Functor: fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b  */
  map: 'fantasy-land/map';
  /** Contravariant: fantasy-land/contramap :: Contravariant f => f a ~> (b -> a) -> f b  */
  contramap: 'fantasy-land/contramap';
  /** Apply: fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b  */
  ap: 'fantasy-land/ap';
  /** Applicative: fantasy-land/of :: Applicative f => a -> f a  */
  of: 'fantasy-land/of';
  /** Alt: fantasy-land/alt :: Alt f => f a ~> f a -> f a  */
  alt: 'fantasy-land/alt';
  /** Plus: fantasy-land/zero :: Plus f => () -> f a  */
  zero: 'fantasy-land/zero';
  /** Foldable: fantasy-land/reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b  */
  reduce: 'fantasy-land/reduce';
  /** Applicative: fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)  */
  traverse: 'fantasy-land/traverse';
  /** Chain: fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b  */
  chain: 'fantasy-land/chain';
  /** ChainRec: fantasy-land/chainRec :: ChainRec m => ((a -> c, b -> c, a) -> m c, a) -> m b  */
  chainRec: 'fantasy-land/chainRec';
  /** Extend: fantasy-land/extend :: Extend w => w a ~> (w a -> b) -> w b  */
  extend: 'fantasy-land/extend';
  /** Comonad: fantasy-land/extract :: Comonad w => w a ~> () -> a  */
  extract: 'fantasy-land/extract';
  /** Bifunctor: fantasy-land/bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d  */
  bimap: 'fantasy-land/bimap';
  /** Profunctor: fantasy-land/promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d  */
  promap: 'fantasy-land/promap';
}
export const fantasyLand: FantasyLand = {
  /** Setoid: fantasy-land/equals :: Setoid a => a ~> a -> Boolean  */
  equals: 'fantasy-land/equals',
  /** Ord: fantasy-land/lte :: Ord a => a ~> a -> Boolean  */
  lte: 'fantasy-land/lte',
  /** Semigroupoid: fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k  */
  compose: 'fantasy-land/compose',
  /** Category: fantasy-land/id :: Category c => () -> c a a  */
  id: 'fantasy-land/id',
  /** Semigroup: fantasy-land/concat :: Semigroup a => a ~> a -> a  */
  concat: 'fantasy-land/concat',
  /** Monoid: fantasy-land/empty :: Monoid m => () -> m  */
  empty: 'fantasy-land/empty',
  /** Group: fantasy-land/invert :: Group g => g ~> () -> g  */
  invert: 'fantasy-land/invert',
  /** Filterable: fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a  */
  filter: 'fantasy-land/filter',
  /** Functor: fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b  */
  map: 'fantasy-land/map',
  /** Contravariant: fantasy-land/contramap :: Contravariant f => f a ~> (b -> a) -> f b  */
  contramap: 'fantasy-land/contramap',
  /** Apply: fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b  */
  ap: 'fantasy-land/ap',
  /** Applicative: fantasy-land/of :: Applicative f => a -> f a  */
  of: 'fantasy-land/of',
  /** Alt: fantasy-land/alt :: Alt f => f a ~> f a -> f a  */
  alt: 'fantasy-land/alt',
  /** Plus: fantasy-land/zero :: Plus f => () -> f a  */
  zero: 'fantasy-land/zero',
  /** Foldable: fantasy-land/reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b  */
  reduce: 'fantasy-land/reduce',
  /** Applicative: fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)  */
  traverse: 'fantasy-land/traverse',
  /** Chain: fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b  */
  chain: 'fantasy-land/chain',
  /** ChainRec: fantasy-land/chainRec :: ChainRec m => ((a -> c, b -> c, a) -> m c, a) -> m b  */
  chainRec: 'fantasy-land/chainRec',
  /** Extend: fantasy-land/extend :: Extend w => w a ~> (w a -> b) -> w b  */
  extend: 'fantasy-land/extend',
  /** Comonad: fantasy-land/extract :: Comonad w => w a ~> () -> a  */
  extract: 'fantasy-land/extract',
  /** Bifunctor: fantasy-land/bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d  */
  bimap: 'fantasy-land/bimap',
  /** Profunctor: fantasy-land/promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d  */
  promap: 'fantasy-land/promap',
};

// fantasy-land/equals :: Setoid a => a ~> a -> Boolean
// fantasy-land/lte :: Ord a => a ~> a -> Boolean
// fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k
// fantasy-land/id :: Category c => () -> c a a
// fantasy-land/concat :: Semigroup a => a ~> a -> a
// fantasy-land/empty :: Monoid m => () -> m
// fantasy-land/invert :: Group g => g ~> () -> g
// fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a
// fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
// fantasy-land/contramap :: Contravariant f => f a ~> (b -> a) -> f b
// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
// fantasy-land/of :: Applicative f => a -> f a
// fantasy-land/alt :: Alt f => f a ~> f a -> f a
// fantasy-land/zero :: Plus f => () -> f a
// fantasy-land/reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b
// fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
// fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
// fantasy-land/chainRec :: ChainRec m => ((a -> c, b -> c, a) -> m c, a) -> m b
// fantasy-land/extend :: Extend w => w a ~> (w a -> b) -> w b
// fantasy-land/extract :: Comonad w => w a ~> () -> a
// fantasy-land/bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d
// fantasy-land/promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d

// fantasy-land/equals :: Setoid a => a ~> a -> Boolean
// fantasy-land/lte :: Ord a => a ~> a -> Boolean
// fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k
// fantasy-land/id :: Category c => () -> c a a
// fantasy-land/concat :: Semigroup a => a ~> a -> a
// fantasy-land/empty :: Monoid m => () -> m
// fantasy-land/invert :: Group g => g ~> () -> g
// fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a
// fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
// fantasy-land/contramap :: Contravariant f => f a ~> (b -> a) -> f b
// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
// fantasy-land/of :: Applicative f => a -> f a
// fantasy-land/alt :: Alt f => f a ~> f a -> f a
// fantasy-land/zero :: Plus f => () -> f a
// // Alternative
// fantasy-land/reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b
// fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
// fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
// fantasy-land/chainRec :: ChainRec m => ((a -> c, b -> c, a) -> m c, a) -> m b
// // monad
// fantasy-land/extend :: Extend w => w a ~> (w a -> b) -> w b
// fantasy-land/extract :: Comonad w => w a ~> () -> a
// fantasy-land/bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d
// fantasy-land/promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d

// Setoid;
// Ord;
// Semigroupoid;
// Category;
// Semigroup;
// Monoid;
// Group;
// Filterable;
// Functor;
// Contravariant;
// Apply;
// Applicative;
// Alt;
// Plus;
// Foldable;
// Applicative;
// Chain;
// ChainRec;
// Extend;
// Comonad;
// Bifunctor;
// Profunctor;

// equals;
// lte;
// compose;
// id;
// concat;
// empty;
// invert;
// filter;
// map;
// contramap;
// ap;
// of;
// alt;
// zero;
// reduce;
// traverse;
// chain;
// chainRec;
// extend;
// extract;
// bimap;
// promap;
