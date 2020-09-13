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
