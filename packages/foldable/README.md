# Foldable

1. `u['fantasy-land/reduce']` is equivalent to `u['fantasy-land/reduce']((acc, x) => acc.concat([x]), []).reduce`

<a name="reduce-method"></a>

#### `fantasy-land/reduce` method

```hs
fantasy-land/reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b
```

A value which has a Foldable must provide a `fantasy-land/reduce` method. The `fantasy-land/reduce`
method takes two arguments:

    u['fantasy-land/reduce'](f, x)

1. `f` must be a binary function

    1. if `f` is not a function, the behaviour of `fantasy-land/reduce` is unspecified.
    2. The first argument to `f` must be the same type as `x`.
    3. `f` must return a value of the same type as `x`.
    4. No parts of `f`'s return value should be checked.

1. `x` is the initial accumulator value for the reduction

    1. No parts of `x` should be checked.
