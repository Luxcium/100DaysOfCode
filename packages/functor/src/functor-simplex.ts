/**
 * LUXCIUM LICENSE *NO* PERMISSION GRANTED - PROVIDED "AS IS" - WITHOUT WARRANTY
 * =============================================================================≈
 * @author Benjamin Vincent Kasapoglu (LUXCIUM)
 * @copyright © 2020 - LUXCIUM (Benjamin Vincent Kasapoglu) <luxcium@neb401.com>
 * @license LUXCIUM-LICENSE for this file only or other having the same mention
 * =============================================================================≈
 * Scientia es lux principium✨ ™ - SEE THE BOTTOM OF THIS FILES FOR MORE INFO
 */

import { IFMap } from '../libs/functor';

/**
 * ##### Functor
 * Fantasy Land ―
 *  @see Link: https://github.com/fantasyland/fantasy-land/blob/master/README.md#functor
 * A value which has a Functor must provide a `fantasy-land/map` method.
 * The `fantasy-land/map` method takes one argument `fn`:
 * ```typescript
 *    u['fantasy-land/map'](fn)
 * ```
 *
 * `fn` must be a function,
 *
 * If `fn` is not a function, the behaviour of `fantasy-land/map` is *unspecified*.
 * `fn` can return any value.
 * No parts of `fn`'s return value should be checked.
 * `fantasy-land/map` must return a value of the same `Functor`
 */
export class FunctorSimplex<T = unknown> implements IFMap<T> {
  /**  `value` can be any value of type `T` */
  // protected ==================================================-| value |-====
  protected value!: T;

  // constructor =======================================-| FunctorSimplex |-====
  public constructor(value: T) {
    const functorSimplex = {
      value: {
        value,
        configurable: false,
        enumerable: true,
        writable: false,
      },
      'fantasy-land/map': {
        value: this.map,
        configurable: false,
        enumerable: false,
        writable: true,
      },
    };
    return Object.defineProperties(this, functorSimplex);
  }

  /**
   *  Fantasy Land ― map
   * + `fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b`
   * + `fn` can return any value `R`.
   * + `fantasy-land/map` return value of the same Functor (FunctorSimplex<R>)
   */
  // Fantasy Land =================================================-| map |-====
  public 'fantasy-land/map' = this.map;

  // public =======================================================-| map |-====
  public map<R = unknown>(fn: (val: T) => R): FunctorSimplex<R> {
    // fn must be a function
    if (typeof fn === 'function') {
      return new FunctorSimplex<R>(fn(this.value));
    }

    // If fn is not a function, fantasy-land/map behaviour is unspecified.
    throw new Error(
      'If argument fn is not a function, the behaviour of map is unspecified',
    );
  }
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
