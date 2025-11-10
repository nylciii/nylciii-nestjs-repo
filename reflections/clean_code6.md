📌 Refactoring Code for Simplicity


Refactoring Techniques
Research Summary

Refactoring is the process of improving the structure of code without changing its behavior. The goal is to make code cleaner, simpler, and easier to maintain. Common refactoring techniques include:

Extract Function: Move repeated or complex logic into smaller helper functions.

Rename Variables: Use clearer, more descriptive names.

Simplify Conditions: Reduce nested if statements or long boolean checks.

Remove Dead Code: Delete unused or redundant code.

Replace Magic Numbers: Use constants or variables instead of hard-coded values.

Example of Overly Complicated Code

function getStatusMessage(statusCode: number): string {
  if (statusCode === 200) {
    return "OK";
  } else if (statusCode === 201) {
    return "Created";
  } else if (statusCode === 400) {
    return "Bad Request";
  } else if (statusCode === 401) {
    return "Unauthorized";
  } else if (statusCode === 404) {
    return "Not Found";
  } else if (statusCode === 500) {
    return "Internal Server Error";
  } else {
    return "Unknown Status";
  }
}

What made it complex:

Long chain of if-else statements

Hard to read and maintain if new codes are added

Not scalable or reusable



Refactored Version

function getStatusMessage(statusCode: number): string {
  const statusMessages: Record<number, string> = {
    200: "OK",
    201: "Created",
    400: "Bad Request",
    401: "Unauthorized",
    404: "Not Found",
    500: "Internal Server Error",
  };

  return statusMessages[statusCode] || "Unknown Status";
}

Why it’s better:

Replaces multiple conditions with a simple lookup object.

Easier to update or add new status codes.

Cleaner and more readable.

Reflections

What made the original code complex?
The long chain of if-else statements made it hard to follow and maintain. Adding a new status meant editing multiple lines, increasing the chance of errors.

How did refactoring improve it?
The refactored version became shorter, easier to understand, and simpler to extend. It focuses on readability and maintainability while keeping the same behavior.
