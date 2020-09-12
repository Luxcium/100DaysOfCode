import { expect } from 'chai';
import { FunctorComplex } from '../functor-complex';
import { FunctorSimplex } from '../functor-simplex';
import { fantasyLandMapFunctor } from './fantasy-land-functor.test';
const stringFunctor = new FunctorComplex('StringValue');
// const u = stringFunctor;
/**
 *  FunctorComplex must be compatible with FunctorSimplex
 */
expect(stringFunctor.map<string>(a => a)).to.be.instanceOf(FunctorSimplex);

/**
 * It can map from type A to type A
 */
stringFunctor.map(a => expect(a).to.be.a('string'));

/**
 * It can map from type A to type B
 */
stringFunctor.map<number>(a => a.length).map(b => expect(b).to.be.a('number'));

/**
 * It can map from type A to type A
 * and FunctorComplex is an instanceOf FunctorComplex
 */
expect(stringFunctor.map<string>(a => a)).to.be.instanceOf(FunctorComplex);

expect(stringFunctor.map<string>(a => a).fork).to.be.equal('StringValue');
expect(stringFunctor.map<string>(a => a).toString()).to.be.equal(
  '"StringValue"',
);

expect(stringFunctor.map<string>(a => a).toValue()).to.be.equal('StringValue');

const numericFunctor = new FunctorComplex(24);

expect(numericFunctor.map<number>(a => a).toString()).to.be.equal('24');

expect(numericFunctor.map<number>(a => a).toValue()).to.be.eql(24);

const objectFunctor = new FunctorComplex({
  numeric: 24,
  stringValue: 'StringValue',
});

expect(objectFunctor.map(a => a).toString()).to.be.equal(
  '{"numeric":24,"stringValue":"StringValue"}',
);

expect(objectFunctor.map(a => a).toValue()).to.be.eql({
  numeric: 24,
  stringValue: 'StringValue',
});
// const numericFunctor = new FunctorComplex(24);
fantasyLandMapFunctor(FunctorComplex);

function testFunctorComplex() {
  try {
    const myFunctorTwo = new FunctorComplex('1516');
    myFunctorTwo.map((a: string) => a);
    const aFunctorSmplx: FunctorSimplex<number> = myFunctorTwo.map(
      (a: string): number => a.length,
    );
    void myFunctorTwo.fork;
    void aFunctorSmplx;
    void myFunctorTwo.toString();
    void myFunctorTwo.toValue();
    return true;
  } catch (error) {
    return false;
  }
}
testFunctorComplex();
// return  && testFunctorSimplex();
