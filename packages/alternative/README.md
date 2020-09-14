# Alternative

A value that implements the Alternative specification must also implement
the [Applicative](#applicative) and [Plus](#plus) specifications.

1. `x['fantasy-land/ap'](f['fantasy-land/alt'](g))` is equivalent to `x['fantasy-land/ap'](f)['fantasy-land/alt'](x['fantasy-land/ap'](g))` (distributivity)
2. `x['fantasy-land/ap'](A['fantasy-land/zero']())` is equivalent to `A['fantasy-land/zero']()` (annihilation)


>\#100DaysOfCode


---

##### Copyright © 2020 Benjamin Vincent Kasapoglu (Luxcium)

###### Scientia is lux principium✨™
