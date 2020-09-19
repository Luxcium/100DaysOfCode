export interface ISetoid {
  equals: equalsType;
}
export type equalsType = any;
export interface IOrd {
  lte: lteType;
}
export type lteType = any;
export interface ISemigroupoid {
  compose: composeType;
}
export type composeType = any;
export interface ICategory {
  id: idType;
}
export type idType = any;
export interface ISemigroup {
  concat: concatType;
}
export type concatType = any;
export interface IMonoid {
  empty: emptyType;
}
export type emptyType = any;
export interface IGroup {
  invert: invertType;
}
export type invertType = any;
export interface IFilterable {
  filter: filterType;
}
export type filterType = any;
export interface IFunctor {
  map: mapType;
}
export type mapType = any;
export interface IContravariant {
  contramap: contramapType;
}
export type contramapType = any;
export interface IApply {
  ap: apType;
}
export type apType = any;
export interface IApplicative {
  of: ofType;
}
export type ofType = any;
export interface IAlt {
  alt: altType;
}
export type altType = any;
export interface IPlus {
  zero: zeroType;
}
export type zeroType = any;
export interface IFoldable {
  reduce: reduceType;
}
export type reduceType = any;
export interface IApplicative {
  traverse: traverseType;
}
export type traverseType = any;
export interface IChain {
  chain: chainType;
}
export type chainType = any;
export interface IChainRec {
  chainRec: chainRecType;
}
export type chainRecType = any;
export interface IExtend {
  extend: extendType;
}
export type extendType = any;
export interface IComonad {
  extract: extractType;
}
export type extractType = any;
export interface IBifunctor {
  bimap: bimapType;
}
export type bimapType = any;
export interface IProfunctor {
  promap: promapType;
}
export type promapType = any;
