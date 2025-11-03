📌 Understanding Clean Code Principles

1. Simplicity

What it means: Code should do what it needs to — and no more. Avoid unnecessary complexity or overthinking simple problems.
Why it matters: Simple code is easier to understand, test, and debug.
Key takeaway: Keep your logic clear and focused. Don’t add features or layers that aren’t needed.

2. Readability

What it means: Code should be easy to read like plain English, with clear names, spacing, and structure.
Why it matters: Code is read more often than it’s written. Readable code saves time and prevents confusion.
Key takeaway: Use meaningful names, proper indentation, and keep functions short and clear.

3. Maintainability

What it means: Code should be easy to change or update in the future.
Why it matters: Projects evolve, and messy code makes fixing bugs or adding new features harder.
Key takeaway: Keep code modular, organized, and well-commented so it’s easier to maintain.

4. Consistency

What it means: Follow the same style and conventions throughout the project.
Why it matters: Consistent code looks professional and helps everyone on the team understand it faster.
Key takeaway: Use a consistent naming style, formatting, and structure across all files.

5. Efficiency

What it means: Code should run smoothly and use resources wisely, but not at the cost of readability.
Why it matters: Efficient code performs better and scales well, but clarity should come first.
Key takeaway: Make it clean first, then optimize when needed.

****Example ****

// Messy Code
function calc(a,b,op){if(op=="add"){return a+b}else if(op=="sub"){return a-b}else if(op=="mul"){return a*b}else if(op=="div"){if(b!=0){return a/b}else{console.log("err")}}}



///Cleaned Version
function calculate(a: number, b: number, operation: string): number {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) throw new Error("Cannot divide by zero");
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}


Why it’s better:

Uses clear variable names and TypeScript types

Properly formatted and easy to read

Includes basic error handling

Follows a consistent structure


