# Traversable

A value that implements the Traversable specification must also
implement the [Functor](#functor) and [Foldable](#foldable) specifications.

1. `t(u['fantasy-land/traverse'](F, x => x))` is equivalent to `u['fantasy-land/traverse'](G, t)` for any
   `t` such that `t(a)['fantasy-land/map'](f)` is equivalent to `t(a['fantasy-land/map'](f))` (naturality)

2. `u['fantasy-land/traverse'](F, F['fantasy-land/of'])` is equivalent to `F['fantasy-land/of'](u)` for any Applicative `F`
   (identity)

3. `u['fantasy-land/traverse'](Compose, x => new Compose(x))` is equivalent to
   `new Compose(u['fantasy-land/traverse'](F, x => x)['fantasy-land/map'](x => x['fantasy-land/traverse'](G, x => x)))` for
   `Compose` defined below and any Applicatives `F` and `G` (composition)

```js
function Compose(c) {
  this.c = c;
}

Compose['fantasy-land/of'] = function(x) {
  return new Compose(F['fantasy-land/of'](G['fantasy-land/of'](x)));
};

Compose.prototype['fantasy-land/ap'] = function(f) {
  return new Compose(this.c['fantasy-land/ap'](f.c['fantasy-land/map'](u => y => y['fantasy-land/ap'](u))));
};

Compose.prototype['fantasy-land/map'] = function(f) {
  return new Compose(this.c['fantasy-land/map'](y => y['fantasy-land/map'](f)));
};
```

<a name="traverse-method"></a>

#### `fantasy-land/traverse` method

```hs
fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
```

A value which has a Traversable must provide a `fantasy-land/traverse` method. The `fantasy-land/traverse`
method takes two arguments:

    u['fantasy-land/traverse'](A, f)

1. `A` must be the [type representative](#type-representatives) of an
   Applicative.

2. `f` must be a function which returns a value

    1. If `f` is not a function, the behaviour of `fantasy-land/traverse` is
       unspecified.
    2. `f` must return a value of the type represented by `A`.

3. `fantasy-land/traverse` must return a value of the type represented by `A`.
