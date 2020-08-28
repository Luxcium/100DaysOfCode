export class Functor<T = unknown>  {
  public _value: T;

  public constructor(value: T) {
    this._value = value;
  }
}
