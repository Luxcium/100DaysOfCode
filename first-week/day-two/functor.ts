/**
 * LUXCIUM LICENSE *NO* PERMISSION GRANTED - PROVIDED "AS IS" - WITHOUT WARRANTY
 * =============================================================================≈
 * @author Benjamin Vincent Kasapoglu (LUXCIUM)
 * @copyright © 2020 - LUXCIUM (Benjamin Vincent Kasapoglu) <luxcium@neb401.com>
 * @license LUXCIUM-LICENSE for this file only or other having the same mention
 * =============================================================================≈
 * Scientia es lux principium✨ ™ - SEE THE BOTTOM OF THIS FILES FOR MORE INFO
 */

/** A Map takes any value A and morph it into any value B */
export type MapType<A = unknown> = (fn: <B = unknown>(val: A) => B) => IFMap;
/**
 * Anything that implement a Map must implement
 * a method of the form map: MapType<A>
 */
export interface IFMap<A = unknown> {
  /** `fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b` */
  map: MapType<A>;
}

/** A simple Functor must map */
export class FunctorSimplex<T = unknown> implements IFMap<T> {
  protected value!: T;
  public constructor(value: T) {
    const functorSimplex = {
      'fantasy-land/map': {
        value: this.map,
        configurable: false,
        enumerable: false,
        writable: true,
      },
      value: {
        value,
        configurable: false,
        enumerable: true,
        writable: false,
      },
    };
    return Object.defineProperties(this, functorSimplex);
  }
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  public 'fantasy-land/map' = this.map;
  public map<R = unknown>(fn: (val: T) => R): FunctorSimplex<R> {
    if (typeof fn === 'function') {
      return new FunctorSimplex<R>(fn(this.value));
    }
    throw new Error('If argument is not a function, the behaviour of map is unspecified');
  }
}

export interface IFork<A = unknown> {
  // extends ValueType<A>
  /** Return the internal value of a Functor or type extending Functor */
  readonly fork: A;
}

/** A complex Functor must extend simple Functor and fork */
export class FunctorComplex<T = unknown>
  extends FunctorSimplex<T>
  implements IFMap<T>, IFork<T> {
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
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  public 'fantasy-land/map' = this.map;
  public map<R = unknown>(fn: (val: T) => R): FunctorComplex<R> {
    if (typeof fn === 'function') {
      return new FunctorComplex<R>(fn(this.fork));
    }
    throw new Error('If argument is not a function, the behaviour of map is unspecified');
  }

  /** Return the internal value of a Functor or type extending Functor */
  public get fork(): T {
    return this.value;
  }

  /** Returns a string representation of a Functor or type extending Functor. */
  public toString(): string {
    return JSON.stringify(this.fork);
  }
  /** Returns a value representation of a Functor or type extending Functor. */
  public toValue(): T {
    return JSON.parse(this.toString());
  }
}

export function testing() {
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

  return testFunctorComplex() && testFunctorSimplex();
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
