# ChainRec

A value that implements the ChainRec specification must also implement the [Chain](#chain) specification.

1. `M['fantasy-land/chainRec']((next, done, v) => p(v) ? d(v)['fantasy-land/map'](done) : n(v)['fantasy-land/map'](next), i)`
   is equivalent to
   `(function step(v) { return p(v) ? d(v) : n(v)['fantasy-land/chain'](step); }(i))` (equivalence)
2. Stack usage of `M['fantasy-land/chainRec'](f, i)` must be at most a constant multiple of the stack usage of `f` itself.

<a name="chainRec-method"></a>

#### `fantasy-land/chainRec` method

```hs
fantasy-land/chainRec :: ChainRec m => ((a -> c, b -> c, a) -> m c, a) -> m b
```

A Type which has a ChainRec must provide a `fantasy-land/chainRec` function on its
[type representative](#type-representatives). The `fantasy-land/chainRec` function
takes two arguments:

    M['fantasy-land/chainRec'](f, i)

Given a value `m`, one can access its type representative via the
`constructor` property:

    m.constructor['fantasy-land/chainRec'](f, i)

1. `f` must be a function which returns a value
    1. If `f` is not a function, the behaviour of `fantasy-land/chainRec` is unspecified.
    2. `f` takes three arguments `next`, `done`, `value`
        1. `next` is a function which takes one argument of same type as `i` and can return any value
        2. `done` is a function which takes one argument and returns the same type as the return value of `next`
        3. `value` is some value of the same type as `i`
    3. `f` must return a value of the same ChainRec which contains a value returned from either `done` or `next`
2. `fantasy-land/chainRec` must return a value of the same ChainRec which contains a value of same type as argument of `done`
