import { ISetoid } from '../lib/types';

export class Setoid<T> implements ISetoid<T> {
  public constructor(value: T, setoidFn: (thisVal: T, thatVal: T) => boolean) {
    this.value = value;
    this.setoidFn = setoidFn;
  }
  public value!: T;
  private setoidFn;
  public equals(value: T) {
    return this.setoidFn(this.value, value);
  }
}
