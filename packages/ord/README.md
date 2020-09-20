# Ord


* Fantasy Land Specification Page: [Ord](https://github.com/fantasyland/fantasy-land/#ord)

A value that implements the Ord specification must also implement
the [Setoid](#setoid) specification.

1. `a['fantasy-land/lte'](b)` or `b['fantasy-land/lte'](a)` (totality)
2. If `a['fantasy-land/lte'](b)` and `b['fantasy-land/lte'](a)`, then `a['fantasy-land/equals'](b)` (antisymmetry)
3. If `a['fantasy-land/lte'](b)` and `b['fantasy-land/lte'](c)`, then `a['fantasy-land/lte'](c)` (transitivity)

<a name="lte-method"></a>

#### `fantasy-land/lte` method

```hs
fantasy-land/lte :: Ord a => a ~> a -> Boolean
```

A value which has an Ord must provide a `fantasy-land/lte` method. The
`fantasy-land/lte` method takes one argument:

     a['fantasy-land/lte'](b)

1. `b` must be a value of the same Ord

    1. If `b` is not the same Ord, behaviour of `fantasy-land/lte` is
       unspecified (returning `false` is recommended).

2. `fantasy-land/lte` must return a boolean (`true` or `false`).



>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
