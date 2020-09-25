# Monad


* Fantasy Land Specification Page: [Monad](https://github.com/fantasyland/fantasy-land/#monad)



A value that implements the Monad specification must also implement
the [Applicative](#applicative) and [Chain](#chain) specifications.

1. `M['fantasy-land/of'](a)['fantasy-land/chain'](f)` is equivalent to `f(a)` (left identity)
2. `m['fantasy-land/chain'](M['fantasy-land/of'])` is equivalent to `m` (right identity)


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
