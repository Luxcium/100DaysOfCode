import { FunctorComplex } from 'functor';
import { IProfunctor, PromapType } from '../lib/types';
export class Profunctor<T, U>
  extends FunctorComplex<T>
  implements IProfunctor<T, U> {
  public constructor(value: T, temp: PromapType<T, U>) {
    super(value);
    this.promap = temp;
  }
  public promap: PromapType<T, U>;
}
export { IProfunctor, PromapType };
