import { expect } from 'chai';
import { FunctorSimplex } from '../functor-simplex';
import { fantasyLandMapFunctor } from './fantasy-land-functor.test';

const functor = new FunctorSimplex('StringValue');

expect(functor.map(a => a)).to.be.instanceOf(FunctorSimplex);

fantasyLandMapFunctor(FunctorSimplex);

function testFunctorSimplex() {
  try {
    const myFunctorOne = new FunctorSimplex('10');
    myFunctorOne.map((a: string) => a);
    myFunctorOne.map((a: string): number => a.length);
    return true;
  } catch (error) {
    return false;
  }
}
testFunctorSimplex();
