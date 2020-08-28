/** A Map takes any value A and morph it into any value B */
export type MapType<A = unknown>  = (
  fn: <B=unknown>(val: A) => B,
) => IFMap;

/**
 * Anything that implement a Map must implement
 * a method of the form map: MapType<A>
 */
export interface IFMap<A = unknown>  {
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  map: MapType<A>;
}

/** A simple Functor must map */
export class FunctorSimplex<T = unknown>  {
  protected _value: T;
  public constructor(value: T) {
    this._value = value;
  }
  public map<R = unknown>(fn: (val: T) => R) {
    return new FunctorSimplex<R>(fn(this._value));
  }
}

export function testFunctorSimplex() {
  const myFunctorOne = new FunctorSimplex('10')
  myFunctorOne.map((a:string)=>a)
  myFunctorOne.map((a:string):number=>a.length)
}


export type ForkType<A = unknown> = A;
export interface IFork<A = unknown>  { // extends ValueType<A>
  readonly fork: ForkType<A>;
}
// export interface ValueType<A = any> {
//   readonly _value: A;
// }

/** A complex Functor must extend simple Functor and fork */
export class FunctorComplex<T = unknown> extends FunctorSimplex implements IFork<T> {
  public constructor(value: T) {
   super(value)
  }
  public get fork():T {
  return this._value
}

}
