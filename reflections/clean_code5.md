📌 Avoiding Code Duplication

Research Summary

The DRY principle means avoiding repetition in your code — whether that’s repeated logic, hard-coded values, or similar blocks that do the same thing. Instead of copying and pasting, you should reuse functions, constants, or shared components.
This keeps the code cleaner, easier to maintain, and reduces the chance of errors when something needs to be updated.


-- Example of Repeated Code
function calculateCircleArea(radius: number): number {
  return 3.1416 * radius * radius;
}

function calculateCylinderVolume(radius: number, height: number): number {
  return 3.1416 * radius * radius * height;
}

Issues:

The formula for the circle area is repeated in both functions.

If the value of π (pi) changes or the logic needs adjustment, you have to update it in multiple places — which can lead to mistakes.

--Refactored Version

const PI = 3.1416;

function calculateCircleArea(radius: number): number {
  return PI * radius * radius;
}

function calculateCylinderVolume(radius: number, height: number): number {
  return calculateCircleArea(radius) * height;
}

Why it’s better:

Shared logic (calculateCircleArea) is reused instead of repeated.

Easy to update — if the formula changes, you only fix it once.

Code is shorter, cleaner, and easier to maintain.

Reflections

What were the issues with duplicated code?
Duplicated code makes maintenance harder. If you need to fix a bug or change a formula, you have to update multiple sections, which increases the chance of missing something.

How did refactoring improve maintainability?
By reusing functions and constants, the code became easier to manage and modify. Any future change now only needs to be done in one place, reducing errors and keeping everything consistent.
