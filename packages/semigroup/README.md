# Semigroupoid



* Fantasy Land Specification Page: [Semigroup](https://github.com/fantasyland/fantasy-land/#semigroup)


1. `a['fantasy-land/compose'](b)['fantasy-land/compose'](c) === a['fantasy-land/compose'](b['fantasy-land/compose'](c))` (associativity)

<a name="compose-method"></a>

#### `fantasy-land/compose` method

```hs
fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k
```

A value which has a Semigroupoid must provide a `fantasy-land/compose` method. The
`fantasy-land/compose` method takes one argument:

    a['fantasy-land/compose'](b)

1. `b` must be a value of the same Semigroupoid

    1. If `b` is not the same semigroupoid, behaviour of `fantasy-land/compose` is
       unspecified.

2. `fantasy-land/compose` must return a value of the same Semigroupoid.


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
