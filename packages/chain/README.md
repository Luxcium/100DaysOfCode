# Chain


* Fantasy Land Specification Page: [Chain](https://github.com/fantasyland/fantasy-land/#chain)


A value that implements the Chain specification must also
implement the [Apply](#apply) specification.

1. `m['fantasy-land/chain'](f)['fantasy-land/chain'](g)` is equivalent to `m['fantasy-land/chain'](x => f(x)['fantasy-land/chain'](g))` (associativity)

<a name="chain-method"></a>

#### `fantasy-land/chain` method

```hs
fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
```

A value which has a Chain must provide a `fantasy-land/chain` method. The `fantasy-land/chain`
method takes one argument:

    m['fantasy-land/chain'](f)

1. `f` must be a function which returns a value

    1. If `f` is not a function, the behaviour of `fantasy-land/chain` is
       unspecified.
    2. `f` must return a value of the same Chain

2. `fantasy-land/chain` must return a value of the same Chain


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
