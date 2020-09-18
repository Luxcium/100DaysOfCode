# Plus



* Fantasy Land Specification Page: [Plus](https://github.com/fantasyland/fantasy-land/#plus)

A value that implements the Plus specification must also implement
the [Alt](#alt) specification.

1. `x['fantasy-land/alt'](A['fantasy-land/zero']())` is equivalent to `x` (right identity)
2. `A['fantasy-land/zero']()['fantasy-land/alt'](x)` is equivalent to `x` (left identity)
3. `A['fantasy-land/zero']()['fantasy-land/map'](f)` is equivalent to `A['fantasy-land/zero']()` (annihilation)

<a name="zero-method"></a>

#### `fantasy-land/zero` method

```hs
fantasy-land/zero :: Plus f => () -> f a
```

A value which has a Plus must provide a `fantasy-land/zero` function on its
[type representative](#type-representatives):

    A['fantasy-land/zero']()

Given a value `x`, one can access its type representative via the
`constructor` property:

    x.constructor['fantasy-land/zero']()

1. `fantasy-land/zero` must return a value of the same Plus


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
