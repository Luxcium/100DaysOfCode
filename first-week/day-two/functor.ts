/** A simple Functor must map */
export class FunctorSimplex<T = unknown>  {
  protected _value: T;
  public constructor(value: T) {
    this._value = value;
  }
  public map<R = any>(fn: (val: T) => R) {
    return new FunctorSimplex<R>(fn(this._value));
  }
}
