Unit Testing and Code Quality

Research Summary

Unit testing is the process of testing individual pieces of code (like functions or methods) to ensure they work correctly. It’s an important part of clean code because it helps catch bugs early, improves reliability, and gives developers confidence to refactor or add new features without breaking existing functionality.

Why it’s important:

Detects bugs early before deployment.

Ensures each part of the code behaves as expected.

Encourages writing smaller, single-purpose functions.

Makes refactoring safer and easier.

Serves as living documentation for how the code should behave.



Example Using Jest (JavaScript/TypeScript)

Function to Test:

export function add(a: number, b: number): number {
  return a + b;
}

Unit Test:

import { add } from './math';

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('returns NaN when given non-numeric values', () => {
    // @ts-expect-error
    expect(add('a', 2)).toBeNaN();
  });
});

Reflections:

How do unit tests help keep code clean?
Unit tests make the codebase more reliable by ensuring each function performs as intended. They also make it easier to refactor confidently, since failing tests will immediately show if something breaks.

What issues did you find while testing?
While testing, I noticed that the function didn’t handle invalid inputs properly (like strings or null). This revealed the need for input validation or guard clauses, which improved the overall code quality.

