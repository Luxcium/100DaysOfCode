# Alt

A value that implements the Alt specification must also implement
the [Functor](#functor) specification.

1. `a['fantasy-land/alt'](b)['fantasy-land/alt'](c)` is equivalent to `a['fantasy-land/alt'](b['fantasy-land/alt'](c))` (associativity)
2. `a['fantasy-land/alt'](b)['fantasy-land/map'](f)` is equivalent to `a['fantasy-land/map'](f)['fantasy-land/alt'](b['fantasy-land/map'](f))` (distributivity)

<a name="alt-method"></a>

#### `fantasy-land/alt` method

```hs
fantasy-land/alt :: Alt f => f a ~> f a -> f a
```

A value which has a Alt must provide a `fantasy-land/alt` method. The
`fantasy-land/alt` method takes one argument:

    a['fantasy-land/alt'](b)

1. `b` must be a value of the same Alt

    1. If `b` is not the same Alt, behaviour of `fantasy-land/alt` is
       unspecified.
    2. `a` and `b` can contain any value of same type.
    3. No parts of `a`'s and `b`'s containing value should be checked.

2. `fantasy-land/alt` must return a value of the same Alt.


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
