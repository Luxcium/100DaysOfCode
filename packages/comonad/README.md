# Comonad

A value that implements the Comonad specification must also implement the [Extend](#extend) specification.

1. `w['fantasy-land/extend'](_w => _w['fantasy-land/extract']())` is equivalent to `w` (left identity)
2. `w['fantasy-land/extend'](f)['fantasy-land/extract']()` is equivalent to `f(w)` (right identity)

<a name="extract-method"></a>

#### `fantasy-land/extract` method

```hs
fantasy-land/extract :: Comonad w => w a ~> () -> a
```

A value which has a Comonad must provide a `fantasy-land/extract` method on itself.
The `fantasy-land/extract` method takes no arguments:

    w['fantasy-land/extract']()

1. `fantasy-land/extract` must return a value of type `v`, for some variable `v` contained in `w`.
    1. `v` must have the same type that `f` returns in `fantasy-land/extend`.


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
