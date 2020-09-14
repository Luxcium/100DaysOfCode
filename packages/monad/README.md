# Monad

A value that implements the Monad specification must also implement
the [Applicative](#applicative) and [Chain](#chain) specifications.

1. `M['fantasy-land/of'](a)['fantasy-land/chain'](f)` is equivalent to `f(a)` (left identity)
2. `m['fantasy-land/chain'](M['fantasy-land/of'])` is equivalent to `m` (right identity)
