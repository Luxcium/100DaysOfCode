# Category

* Fantasy Land Specification Page: [Category](https://github.com/fantasyland/fantasy-land/#category)


A value that implements the Category specification must also implement
the [Semigroupoid](#semigroupoid) specification.

1. `a['fantasy-land/compose'](C['fantasy-land/id']())` is equivalent to `a` (right identity)
2. `C['fantasy-land/id']()['fantasy-land/compose'](a)` is equivalent to `a` (left identity)

<a name="id-method"></a>

#### `fantasy-land/id` method

```hs
fantasy-land/id :: Category c => () -> c a a
```

A value which has a Category must provide a `fantasy-land/id` function on its
[type representative](#type-representatives):

    C['fantasy-land/id']()

Given a value `c`, one can access its type representative via the
`constructor` property:

    c.constructor['fantasy-land/id']()

1. `fantasy-land/id` must return a value of the same Category


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
