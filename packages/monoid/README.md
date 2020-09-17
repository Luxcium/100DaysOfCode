# Monoid

* Fantasy Land Specification Page: [Monoid](https://github.com/fantasyland/fantasy-land/#monoid)


A value that implements the Monoid specification must also implement
the [Semigroup](#semigroup) specification.

1. `m['fantasy-land/concat'](M['fantasy-land/empty']())` is equivalent to `m` (right identity)
2. `M['fantasy-land/empty']()['fantasy-land/concat'](m)` is equivalent to `m` (left identity)

<a name="empty-method"></a>

#### `fantasy-land/empty` method

```hs
fantasy-land/empty :: Monoid m => () -> m
```

A value which has a Monoid must provide a `fantasy-land/empty` function on its
[type representative](#type-representatives):

    M['fantasy-land/empty']()

Given a value `m`, one can access its type representative via the
`constructor` property:

    m.constructor['fantasy-land/empty']()

1. `fantasy-land/empty` must return a value of the same Monoid


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
