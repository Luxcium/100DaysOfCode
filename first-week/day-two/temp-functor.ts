/**
 * LUXCIUM LICENSE *NO* PERMISSION GRANTED - PROVIDED "AS IS" - WITHOUT WARRANTY
 * =============================================================================≈
 * @author Benjamin Vincent Kasapoglu (LUXCIUM)
 * @copyright © 2020 - LUXCIUM (Benjamin Vincent Kasapoglu) <luxcium@neb401.com>
 * @license LUXCIUM-LICENSE for this file only or other having the same mention
 * =============================================================================≈
 * Scientia es lux principium✨ ™ - SEE THE BOTTOM OF THIS FILES FOR MORE INFO
*/

export type FunctorType<T = any> = IFMap<T> & IFork<T>;
export type ForkType<A = any> = A;
export type MapType<A = any> /* <A = any, U = any> = <B = U> */ = (
  fn: (val: A) => any,
) => IFMap;
export interface IFMap<A = any> /* <A = any, U = any> extends ValueType<A> */ {
  /** fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b */
  map: MapType<A> /* <A, U> */;
}



/** A functor must, in our implementation, Fork and return its internat value */
export interface IFork<A = any> extends ValueType<A> {
  readonly fork: ForkType<A>;
}
export interface ValueType<A = any> {
  readonly _value: A;
}

/** A functor must FMap and in our implementation of a functor must Fork */


export interface IFunctor<A = any> extends IFMap<A>, IFork<A>, FunctorType<A> {
  map<B>(fn: (val: A) => B): FunctorType<B>;
  toString(): string;
  toValue(): ValueType<A>;
  readonly fork: A;
}


// export class Functor<T = unknown>  {
//   public _value: T;

//   public constructor(value: T) {
//     this._value = value;
//   }

//     public map<R = any>(fn: (val: T) => R): IFunctor<R> {
//     return new Functor<R>(fn(this._value));
//   }

// }


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
