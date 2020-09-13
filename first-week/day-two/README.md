# Day Two



## Functor

### MapType

Anything that implement a Map must implement a method of the form map: `MapType<A>`

```typescript
export type MapType<A = unknown> = (fn: <B = unknown>(val: A) => B) => IFMap;
```



### IFMap

```typescript
export interface IFMap<A = unknown> {
  /**
   * `fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b`
   */
  map: MapType<A>;
}
```


### IFork

Return the internal value `T` of a Functor or type extending Functor

```typescript
export interface IFork<A = unknown> {
  /**
   * Return the internal value `T` of a Functor
   * or type extending Functor
   */
  readonly fork: A;
}
```


### FunctorSimplex

>*TypeScript functional programming using class to define main components to be later used in a functional programming like manner.*

```typescript
export class FunctorComplex<T = unknown> implements IFMap<T>
```

#### constructor

can be any value `T`

```typescript
public constructor(value: T)
```

#### fantasy-land/map

  + `fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b`
  + `fn` can return any value `R`.
  + `fantasy-land/map` must return a value of the same Functor

```typescript
public 'fantasy-land/map' = this.map;
```

#### map

A Map takes any value A and morph it into any value B

```typescript
public map<R = unknown>(fn: (val: T) => R): FunctorComplex<R>
```

### FunctorComplex

>*TypeScript functional programming using class to define main components to be later used in a functional programming like manner.*

```typescript
export class FunctorComplex<T = unknown>
extends FunctorSimplex<T>
implements IFMap<T>, IFork<T>, FunctorSimplex<T>
```

#### constructor

can be any value `T`

```typescript
public constructor(value: T)
```

#### fantasy-land/map

  + `fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b`
  + `fn` can return any value `R`.
  + `fantasy-land/map` must return a value of the same Functor

```typescript
public 'fantasy-land/map' = this.map;
```

#### map

A Map takes any value A and morph it into any value B

```typescript
public map<R = unknown>(fn: (val: T) => R): FunctorComplex<R>
```

####  fork

Return the internal value `T` of a Functor or type extending `Functor`

```typescript
public get fork(): T
```

#### tostring

Returns a `string` representation of a `Functor` or a `Functor` extended type.

```typescript
public toString(): string
```

#### toValue

Returns a value `T` 'representation' of a `Functor` or a `Functor` extended type.

```typescript
public toValue(): T
```
## LICENSE
```typescript
/**
 * =============================================================================≈
 * @author Benjamin Vincent Kasapoglu (LUXCIUM)
 * @copyright © 2020 - LUXCIUM (Benjamin Vincent Kasapoglu) <luxcium@neb401.com>
 * @license LUXCIUM-LICENSE for this file only or other having the same mention
 * =============================================================================≈
 * Scientia es lux principium✨ ™
 */

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
```
