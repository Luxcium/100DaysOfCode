/**
 * LUXCIUM LICENSE *NO* PERMISSION GRANTED - PROVIDED "AS IS" - WITHOUT WARRANTY
 * =============================================================================≈
 * @author Benjamin Vincent Kasapoglu (LUXCIUM)
 * @copyright © 2020 - LUXCIUM (Benjamin Vincent Kasapoglu) <luxcium@neb401.com>
 * @license LUXCIUM-LICENSE for this file only or other having the same mention
 * =============================================================================≈
 * Scientia es lux principium✨ ™ - SEE THE BOTTOM OF THIS FILES FOR MORE INFO
 */

import { expect } from 'chai';
import { FunctorSimplex } from '../src/functor-simplex';

/**
 * @link https://github.com/fantasyland/fantasy-land#functor
 * #### Functor
 *
 *  1. `u['fantasy-land/map'](a => a)` is equivalent to `u` (identity)
 *  2. `u['fantasy-land/map'](x => f(g(x)))` is equivalent to `u['fantasy-land/map'](g)['fantasy-land/map'](f)` (composition)
 *
 *  <a name="map-method"></a>
 *
 *  ##### `fantasy-land/map` method
 *
 *  ```
 *  fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
 *  ```
 *
 *  A value which has a Functor must provide a `fantasy-land/map` method. The `fantasy-land/map`
 *  method takes one argument:
 *  ```
 *  u['fantasy-land/map'](f)
 *  ```
 *  1. `f` must be a function,
 *    1. If `f` is not a function, the behaviour of `fantasy-land/map` is
 *     unspecified.
 *  2. `f` can return any value.
 *  3. No parts of `f`'s return value should be checked.
 *
 *  2. `fantasy-land/map` must return a value of the same Functor
 */

export function fantasyLandMapFunctor(Functor: typeof FunctorSimplex) {
  const u = new Functor('a string');

  /**
   * 1. u['fantasy-land/map'](a => a) is equivalent to u (identity)
   */
  expect(u['fantasy-land/map'](a => a)).to.be.eql(u);

  /**
   * 2. u['fantasy-land/map'](x => f(g(x))) is equivalent to
   *    u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)
   */

  // a fuction f to test f(g(x)))
  function f(num: number): number {
    return num * 2;
  }

  // a fuction g to test f(g(x)))
  function g(str: string): number {
    return str.length;
  }

  expect(u['fantasy-land/map'](x => f(g(x)))).to.be.eql(
    u['fantasy-land/map'](g)['fantasy-land/map'](f),
  );

  /**
   * A value which has a Functor must provide a fantasy-land/map method.
   */
  expect(u['fantasy-land/map']).to.be.a('function');

  /**
   * The fantasy-land/map method takes one argument: u['fantasy-land/map'](f)
   * f must be a function.
   * If f is not a function, the behaviour of fantasy-land/map is unspecified.
   */
  expect(() => u['fantasy-land/map'](null)).to.throw(
    'If argument fn is not a function, the behaviour of map is unspecified',
  );
  expect(() => u['fantasy-land/map'](a => a)).not.to.throw();

  /**
   * f can return any value.
   * No parts of f's return value should be checked.
   */
  const fAnyUndef = () => undefined;
  const fAnyNull = () => null;
  const fAnyNaN = () => NaN;
  const fAnyInfinity = () => Infinity;
  const fAnyObject = () => {};
  const fAnyArray = () => [];
  const fAnyBoolTrue = () => true;
  const fAnyBoolFalse = () => false;
  const fAnyBoolZero = () => 0;
  const fAnyBoolEmptyStr = () => '';

  expect(() => u['fantasy-land/map'](fAnyUndef)).not.to.throw();
  expect(() => u['fantasy-land/map'](fAnyNull)).not.to.throw();
  expect(() => u['fantasy-land/map'](fAnyNaN)).not.to.throw();
  expect(() => u['fantasy-land/map'](fAnyInfinity)).not.to.throw();
  expect(() => u['fantasy-land/map'](fAnyObject)).not.to.throw();
  expect(() => u['fantasy-land/map'](fAnyArray)).not.to.throw();
  expect(() => u['fantasy-land/map'](fAnyBoolTrue)).not.to.throw();
  expect(() => u['fantasy-land/map'](fAnyBoolFalse)).not.to.throw();
  expect(() => u['fantasy-land/map'](fAnyBoolZero)).not.to.throw();
  expect(() => u['fantasy-land/map'](fAnyBoolEmptyStr)).not.to.throw();
  expect(() => u['fantasy-land/map'](a => a)).not.to.throw();

  /**
   * fantasy-land/map must return a value of the same Functor
   */
  interface Function {
    name: string;
  }

  expect(
    ((u['fantasy-land/map'](a => a).constructor as unknown) as Function).name,
  ).to.be.equal(((u.constructor as unknown) as Function).name);

  expect(u['fantasy-land/map'](a => a)).to.be.instanceOf(FunctorSimplex);
}

/*
================================================================================≈
† LUXCIUM‡ LICENSE — *NO* PERMISSION GRANTED — PROVIDED "AS IS" WITHOUT WARRANTY

‽  *NO* PERMISSION ARE GRANTED. NOT TO PUBLISH, NOT TO DISTRIBUTE, NOT TO
‽  SUBLICENSE, AND/OR NOT TO SELL COPIES OF THE SOFTWARE.
‽
‽  You may use, only for yourself, the source code in this file and from
‽  imported files to this one. You have the right to: distribute to your
‽  friends, to your students, or to you coworker for personal or academic use
‽  at home at school or at work. You must include this «FULL NOTICE» in each
‽  imported files to this one that you decide to use if such «FULL NOTICE»
‽  is missing. If you modify the code in a substatial way you may decide to
‽  include only the «COPYRIGHT» and the «SHORT NOTICE» below.

† Copyright © 2020 — LUXCIUM‡ (Benjamin Vincent Kasapoglu) <luxcium⸓neb401.com>

- --> SHORT NOTICE
-  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ALL KIND, EXPRESS OR
-  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
-  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
-  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ALL CLAIM, DAMAGES OR OTHER
-  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
-  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
-  SOFTWARE.
- -->
-
- IN ANY CASES THE COPYRIGHT AND SHORT NOTICE ABOVE MUST BE INCLUDED.

† Scientia es lux principium✨ ™
================================================================================≈
*/
