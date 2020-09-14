# Setoid

1. `a['fantasy-land/equals'](a) === true` (reflexivity)
2. `a['fantasy-land/equals'](b) === b['fantasy-land/equals'](a)` (symmetry)
3. If `a['fantasy-land/equals'](b)` and `b['fantasy-land/equals'](c)`, then `a['fantasy-land/equals'](c)` (transitivity)

<a name="equals-method"></a>

#### `fantasy-land/equals` method

```hs
fantasy-land/equals :: Setoid a => a ~> a -> Boolean
```

A value which has a Setoid must provide a `fantasy-land/equals` method. The
`fantasy-land/equals` method takes one argument:

    a['fantasy-land/equals'](b)

1. `b` must be a value of the same Setoid

    1. If `b` is not the same Setoid, behaviour of `fantasy-land/equals` is
       unspecified (returning `false` is recommended).

2. `fantasy-land/equals` must return a boolean (`true` or `false`).


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
