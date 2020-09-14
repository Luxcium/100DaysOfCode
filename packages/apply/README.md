# Apply

A value that implements the Apply specification must also
implement the [Functor](#functor) specification.

1. `v['fantasy-land/ap'](u['fantasy-land/ap'](a['fantasy-land/map'](f => g => x => f(g(x)))))` is equivalent to `v['fantasy-land/ap'](u)['fantasy-land/ap'](a)` (composition)

<a name="ap-method"></a>

#### `fantasy-land/ap` method

```hs
fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
```

A value which has an Apply must provide a `fantasy-land/ap` method. The `fantasy-land/ap`
method takes one argument:

    a['fantasy-land/ap'](b)

1. `b` must be an Apply of a function

    1. If `b` does not represent a function, the behaviour of `fantasy-land/ap` is
       unspecified.
    2. `b` must be same Apply as `a`.

2. `a` must be an Apply of any value

3. `fantasy-land/ap` must apply the function in Apply `b` to the value in
   Apply `a`

   1. No parts of return value of that function should be checked.

4. The `Apply` returned by `fantasy-land/ap` must be the same as `a` and `b`
