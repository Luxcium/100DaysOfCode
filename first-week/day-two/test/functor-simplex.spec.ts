import { expect } from 'chai';
import { FunctorSimplex } from '../functor';
import { fantasyLandMapFunctor } from './fantasy-land-functor.test';

const functor = new FunctorSimplex('StringValue');

expect(functor.map(a => a)).to.be.instanceOf(FunctorSimplex);

fantasyLandMapFunctor(FunctorSimplex);
