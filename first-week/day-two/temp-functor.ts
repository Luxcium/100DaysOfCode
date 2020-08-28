export type FunctorType<T = any> = IFMap<T> & IFork<T>;
export type ForkType<A = any> = A;
export type MapType<A = any> /* <A = any, U = any> = <B = U> */ = (
  fn: (val: A) => any,
) => IFMap;
export interface IFMap<A = any> /* <A = any, U = any> extends ValueType<A> */ {
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  map: MapType<A> /* <A, U> */;
}



/** A functor must, in our implementation, Fork and return its internat value */
export interface IFork<A = any> extends ValueType<A> {
  readonly fork: ForkType<A>;
}
export interface ValueType<A = any> {
  readonly _value: A;
}

/** A functor must FMap and in our implementation of a functor must Fork */


export interface IFunctor<A = any> extends IFMap<A>, IFork<A>, FunctorType<A> {
  map<B>(fn: (val: A) => B): FunctorType<B>;
  toString(): string;
  toValue(): ValueType<A>;
  readonly fork: A;
}


export class Functor<T = unknown>  {
  public _value: T;

  public constructor(value: T) {
    this._value = value;
  }

    public map<R = any>(fn: (val: T) => R): IFunctor<R> {
    return new Functor<R>(fn(this._value));
  }

}
