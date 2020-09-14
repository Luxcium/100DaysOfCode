# Filterable

1. `v['fantasy-land/filter'](x => p(x) && q(x))` is equivalent to `v['fantasy-land/filter'](p)['fantasy-land/filter'](q)` (distributivity)
2. `v['fantasy-land/filter'](x => true)` is equivalent to `v` (identity)
3. `v['fantasy-land/filter'](x => false)` is equivalent to `w['fantasy-land/filter'](x => false)`
   if `v` and `w` are values of the same Filterable (annihilation)

<a name="filter-method"></a>

#### `fantasy-land/filter` method

```hs
fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a
```

A value which has a Filterable must provide a `fantasy-land/filter` method. The `fantasy-land/filter`
method takes one argument:

    v['fantasy-land/filter'](p)

1. `p` must be a function.

    1. If `p` is not a function, the behaviour of `fantasy-land/filter` is unspecified.
    2. `p` must return either `true` or `false`. If it returns any other value,
       the behaviour of `fantasy-land/filter` is unspecified.

2. `fantasy-land/filter` must return a value of the same Filterable.


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
