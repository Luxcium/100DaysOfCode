# Contravariant

1. `u['fantasy-land/contramap'](a => a)` is equivalent to `u` (identity)
2. `u['fantasy-land/contramap'](x => f(g(x)))` is equivalent to `u['fantasy-land/contramap'](f)['fantasy-land/contramap'](g)`
(composition)

<a name="contramap-method"></a>

#### `fantasy-land/contramap` method

```hs
fantasy-land/contramap :: Contravariant f => f a ~> (b -> a) -> f b
```

A value which has a Contravariant must provide a `fantasy-land/contramap` method. The
`fantasy-land/contramap` method takes one argument:

    u['fantasy-land/contramap'](f)

1. `f` must be a function,

    1. If `f` is not a function, the behaviour of `fantasy-land/contramap` is
       unspecified.
    2. `f` can return any value.
    3. No parts of `f`'s return value should be checked.

2. `fantasy-land/contramap` must return a value of the same Contravariant
