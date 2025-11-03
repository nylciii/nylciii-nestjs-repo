

Writing Comments and Documentation


Research Summary

Comments and documentation help others (and your future self) understand why the code exists and how it works. However, they should not replace clear, self-explanatory code. The best approach is to write code that’s easy to understand first, then use comments to explain logic that isn’t immediately obvious.

Best Practices:

Write comments that explain why something is done, not just what is happening.

Keep comments up to date — outdated ones cause confusion.

Use consistent style (e.g., JSDoc or TypeScript doc comments).

Avoid over-commenting; code should speak for itself whenever possible.



Example of Poorly Commented Code
// Add
function a(x, y) {
  return x + y;
}

Issues:

The comment is vague and unnecessary (“Add” doesn’t explain much).

Function and variable names are unclear.

The code should be self-explanatory without the comment.


Refactored and Well-Commented Version

/**
 * Calculates the total price of two items.
 * @param price1 - The first item’s price
 * @param price2 - The second item’s price
 * @returns The combined total
 */
function calculateTotal(price1: number, price2: number): number {
  return price1 + price2;
}

Why it’s better:

Clear function and parameter names make the code self-explanatory.

The comment now adds meaningful context about purpose and usage.

Reflections

When should you add comments?
Add comments when explaining the reasoning behind a decision, complex logic, or anything not immediately obvious from the code itself. Comments should help others understand why something is done a certain way.

When should you avoid comments and instead improve the code?
Avoid comments when they’re only describing what the code does — it’s better to rename variables or refactor functions to make them self-explanatory instead. If your comment just repeats the code, the code needs improvement, not more comments.