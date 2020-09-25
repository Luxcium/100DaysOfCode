import { FunctorComplex } from 'functor';
import { BimapType, IBifunctor } from '../lib/types';

export class Bifunctor<T, U>
  extends FunctorComplex<T>
  implements IBifunctor<T, U> {
  public constructor(value: T, temp: BimapType<T, U>) {
    super(value);
    this.bimap = temp;
  }

  public bimap: BimapType<T, U>;
}

export { BimapType, IBifunctor };
