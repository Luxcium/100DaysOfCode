# Extend

A value that implements the Extend specification must also implement the [Functor](#functor) specification.

1. `w['fantasy-land/extend'](g)['fantasy-land/extend'](f)` is equivalent to `w['fantasy-land/extend'](_w => f(_w['fantasy-land/extend'](g)))`

<a name="extend-method"></a>

#### `fantasy-land/extend` method

```hs
fantasy-land/extend :: Extend w => w a ~> (w a -> b) -> w b
```

An Extend must provide a `fantasy-land/extend` method. The `fantasy-land/extend`
method takes one argument:

     w['fantasy-land/extend'](f)

1. `f` must be a function which returns a value

    1. If `f` is not a function, the behaviour of `fantasy-land/extend` is
       unspecified.
    2. `f` must return a value of type `v`, for some variable `v` contained in `w`.
    3. No parts of `f`'s return value should be checked.

2. `fantasy-land/extend` must return a value of the same Extend.
