/** A Map takes any value A and morph it into any value B */
export type MapType<A = unknown> = (
  fn: <B = unknown>(val: A) => B,
) => IFMap;

/**
 * Anything that implement a Map must implement
 * a method of the form map: MapType<A>
 */
export interface IFMap<A = unknown> {
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  map: MapType<A>;
}

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

    }
    // this._value = value;

    Object.defineProperties(this, functorSimplex);
  }
  public map<R = unknown>(fn: (val: T) => R): FunctorSimplex<R> {
    return new FunctorSimplex<R>(fn(this.value));
  }
}

export function testFunctorSimplex() {
  const myFunctorOne = new FunctorSimplex('10')
  myFunctorOne.map((a: string) => a)
  myFunctorOne.map((a: string): number => a.length)
}


// export type ForkType<A = unknown> = A;
export interface IFork<A = unknown> { // extends ValueType<A>
  /** Return the internal value of a Functor or type extending Functor */
  readonly fork: A;
}
// export interface ValueType<A = any> {
//   readonly _value: A;
// }

/** A complex Functor must extend simple Functor and fork */
export class FunctorComplex<T = unknown> extends FunctorSimplex<T> implements IFMap<T>, IFork<T> {
  public constructor(value: T) {
    super(value)
    return this
  }
  public map<R = unknown>(fn: (val: T) => R): FunctorComplex<R> {
    return new FunctorComplex<R>(fn(this.fork));
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



export function testFunctorComplex() {
  const myFunctorTwo = new FunctorComplex('10')
  myFunctorTwo.map((a: string) => a)
  const aFunctorSmplx: FunctorSimplex<number> = myFunctorTwo.map((a: string): number => a.length);
  // const aFunctorCmplx: FunctorComplex<number> = aFunctorSmplx.map((b: number) => b * 2)
  console.log(aFunctorSmplx)
}
testFunctorComplex()
