# sixth-day

Catching up (today is the 18th day and I am late on my comitment) I have coded more than one hour average each day but did not produce the required code in the repo as part of my learning of new and specifics element.

## Mocha and Chai

In this sixth day I have installed [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) because I always used [Jest](https://jestjs.io/) and I want to learn new way of testing my code.

### Hello World code

```typescript
import { expect } from 'chai';

export function funct(
  num1: number,
  num2: number,
  func: (arg1: number, arg2: number) => number,
): {
  result: number;
} {
  return { result: func(num1, num2) };
}

const add = (num1: number, num2: number): number => num1 + num2;

expect(funct(1, 2, add).result).to.equal(3);
```
