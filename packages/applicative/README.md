# Applicative

* Fantasy Land Specification Page: [Applicative](https://github.com/fantasyland/fantasy-land/#applicative)

A value that implements the Applicative specification must also
implement the [Apply](#apply) specification.

1. `v['fantasy-land/ap'](A['fantasy-land/of'](x => x))` is equivalent to `v` (identity)
2. `A['fantasy-land/of'](x)['fantasy-land/ap'](A['fantasy-land/of'](f))` is equivalent to `A['fantasy-land/of'](f(x))` (homomorphism)
3. `A['fantasy-land/of'](y)['fantasy-land/ap'](u)` is equivalent to `u['fantasy-land/ap'](A['fantasy-land/of'](f => f(y)))` (interchange)

<a name="of-method"></a>

#### `fantasy-land/of` method

```hs
fantasy-land/of :: Applicative f => a -> f a
```

A value which has an Applicative must provide a `fantasy-land/of` function on its
[type representative](#type-representatives). The `fantasy-land/of` function takes
one argument:

    F['fantasy-land/of'](a)

Given a value `f`, one can access its type representative via the
`constructor` property:

    f.constructor['fantasy-land/of'](a)

1. `fantasy-land/of` must provide a value of the same Applicative

    1. No parts of `a` should be checked


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
