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
