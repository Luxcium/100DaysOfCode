# Profunctor

A value that implements the Profunctor specification must also implement
the [Functor](#functor) specification.

1. `p['fantasy-land/promap'](a => a, b => b)` is equivalent to `p` (identity)
2. `p['fantasy-land/promap'](a => f(g(a)), b => h(i(b)))` is equivalent to `p['fantasy-land/promap'](f, i)['fantasy-land/promap'](g, h)` (composition)

<a name="promap-method"></a>

#### `fantasy-land/promap` method

```hs
fantasy-land/promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d
```

A value which has a Profunctor must provide a `fantasy-land/promap` method.

The `fantasy-land/promap` method takes two arguments:

    c['fantasy-land/promap'](f, g)

1. `f` must be a function which returns a value

    1. If `f` is not a function, the behaviour of `fantasy-land/promap` is unspecified.
    2. `f` can return any value.
    3. No parts of `f`'s return value should be checked.

2. `g` must be a function which returns a value

    1. If `g` is not a function, the behaviour of `fantasy-land/promap` is unspecified.
    2. `g` can return any value.
    3. No parts of `g`'s return value should be checked.

3. `fantasy-land/promap` must return a value of the same Profunctor


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
