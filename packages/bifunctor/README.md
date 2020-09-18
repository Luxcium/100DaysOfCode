# Bifunctor

* Fantasy Land Specification Page: [Bifunctor](https://github.com/fantasyland/fantasy-land/#bifunctor)


A value that implements the Bifunctor specification must also implement
the [Functor](#functor) specification.

1. `p['fantasy-land/bimap'](a => a, b => b)` is equivalent to `p` (identity)
2. `p['fantasy-land/bimap'](a => f(g(a)), b => h(i(b))` is equivalent to `p['fantasy-land/bimap'](g, i)['fantasy-land/bimap'](f, h)` (composition)

<a name="bimap-method"></a>

#### `fantasy-land/bimap` method

```hs
fantasy-land/bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d
```

A value which has a Bifunctor must provide a `fantasy-land/bimap` method. The `fantasy-land/bimap`
method takes two arguments:

    c['fantasy-land/bimap'](f, g)

1. `f` must be a function which returns a value

    1. If `f` is not a function, the behaviour of `fantasy-land/bimap` is unspecified.
    2. `f` can return any value.
    3. No parts of `f`'s return value should be checked.

2. `g` must be a function which returns a value

    1. If `g` is not a function, the behaviour of `fantasy-land/bimap` is unspecified.
    2. `g` can return any value.
    3. No parts of `g`'s return value should be checked.

3. `fantasy-land/bimap` must return a value of the same Bifunctor.


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
