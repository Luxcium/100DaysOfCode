# Group

A value that implements the Group specification must also implement
the [Monoid](#monoid) specification.

1. `g['fantasy-land/concat'](g['fantasy-land/invert']())` is equivalent to `g.constructor['fantasy-land/empty']()` (right inverse)
2. `g['fantasy-land/invert']()['fantasy-land/concat'](g)` is equivalent to `g.constructor['fantasy-land/empty']()` (left inverse)

<a name="invert-method"></a>

#### `fantasy-land/invert` method

```hs
fantasy-land/invert :: Group g => g ~> () -> g
```

A value which has a Group must provide a `fantasy-land/invert` method. The
`fantasy-land/invert` method takes no arguments:

    g['fantasy-land/invert']()

1. `fantasy-land/invert` must return a value of the same Group.


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
