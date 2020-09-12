import { expect } from 'chai';
import { FunctorComplex, FunctorSimplex } from '../functor';

const stringFunctor = new FunctorComplex('StringValue');

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

/*

https://github.com/fantasyland/fantasy-land#functor

Functor
u['fantasy-land/map'](a => a) is equivalent to u (identity)
*/
expect(stringFunctor.map<string>(a => a)).to.be.instanceOf(FunctorComplex);
expect(stringFunctor.map<string>(a => a)).to.be.instanceOf(FunctorComplex);
/*
u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)

fantasy-land/map method
fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
A value which has a Functor must provide a fantasy-land/map method. The fantasy-land/map method takes one argument:

u['fantasy-land/map'](f)
f must be a function,

If f is not a function, the behaviour of fantasy-land/map is unspecified.
f can return any value.
No parts of f's return value should be checked.
fantasy-land/map must return a value of the same Functor

*/
