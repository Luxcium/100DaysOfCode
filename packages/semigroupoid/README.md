# Semigroup



* Fantasy Land Specification Page: [Semigroupoid](https://github.com/fantasyland/fantasy-land/#semigroupoid)


1. `a['fantasy-land/concat'](b)['fantasy-land/concat'](c)` is equivalent to `a['fantasy-land/concat'](b['fantasy-land/concat'](c))` (associativity)

<a name="concat-method"></a>

#### `fantasy-land/concat` method

```hs
fantasy-land/concat :: Semigroup a => a ~> a -> a
```

A value which has a Semigroup must provide a `fantasy-land/concat` method. The
`fantasy-land/concat` method takes one argument:

    s['fantasy-land/concat'](b)

1. `b` must be a value of the same Semigroup

    1. If `b` is not the same semigroup, behaviour of `fantasy-land/concat` is
       unspecified.

2. `fantasy-land/concat` must return a value of the same Semigroup.


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
