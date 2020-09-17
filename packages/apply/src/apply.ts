import { FunctorComplex, FunctorSimplex } from 'functor';
// fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
export const FANTASY_LAND_APPLY = 'fantasy-land/ap';
export class Apply extends FunctorComplex {
  public ap: any;
}
export { FunctorSimplex, FunctorComplex };

/*
Apply
+ A value that implements the Apply specification must also implement the Functor specification.

v['fantasy-land/ap'](u['fantasy-land/ap'](a['fantasy-land/map'](f => g => x => f(g(x))))) is equivalent to v['fantasy-land/ap'](u)['fantasy-land/ap'](a) (composition)

fantasy-land/ap method
fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
+A value which has an Apply must provide a fantasy-land/ap method. The fantasy-land/ap method takes one argument:

a['fantasy-land/ap'](b)
b must be an Apply of a function

If b does not represent a function, the behaviour of fantasy-land/ap is unspecified.
b must be same Apply as a.
a must be an Apply of any value

fantasy-land/ap must apply the function in Apply b to the value in Apply a

No parts of return value of that function should be checked.
The Apply returned by fantasy-land/ap must be the same as a and b
 */
