import { expect } from 'chai';
import { FunctorSimplex } from '../functor';

const functor = new FunctorSimplex('StringValue');

expect(functor.map(a => a)).to.be.instanceOf(FunctorSimplex);
