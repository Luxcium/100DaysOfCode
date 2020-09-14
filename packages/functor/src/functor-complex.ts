/**
 * LUXCIUM LICENSE *NO* PERMISSION GRANTED - PROVIDED "AS IS" - WITHOUT WARRANTY
 * =============================================================================≈
 * @author Benjamin Vincent Kasapoglu (LUXCIUM)
 * @copyright © 2020 - LUXCIUM (Benjamin Vincent Kasapoglu) <luxcium@neb401.com>
 * @license LUXCIUM-LICENSE for this file only or other having the same mention
 * =============================================================================≈
 * Scientia es lux principium✨ ™ - SEE THE BOTTOM OF THIS FILES FOR MORE INFO
 */

import { IFMap, IFork } from '../libs/functor';
import { FunctorSimplex } from './functor-simplex';

export class FunctorComplex<T = unknown>
  extends FunctorSimplex<T>
  implements IFMap<T>, IFork<T>, FunctorSimplex<T> {
  public constructor(value: T) {
    super(value);
    const functorComplex = {
      'fantasy-land/map': {
        value: this.map,
        configurable: false,
        enumerable: false,
        writable: true,
      },
    };
    return Object.defineProperties(this, functorComplex);
  }
  public 'fantasy-land/map' = this.map;
  public map<R = unknown>(fn: (val: T) => R): FunctorComplex<R> {
    if (typeof fn === 'function') {
      return new FunctorComplex<R>(fn(this.fork));
    }
    throw new Error(
      'If argument is not a function, the behaviour of map is unspecified',
    );
  }

  public get fork(): T {
    return this.value;
  }

  /** Returns a string representation of a Functor or a Functor extended type. */
  public toString(): string {
    return JSON.stringify(this.fork);
  }
  /** Returns a value `T` 'representation' of a Functor or a Functor extended type. */
  public toValue(): T {
    return JSON.parse(this.toString());
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
