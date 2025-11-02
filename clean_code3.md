📌 Naming Variables & Functions


Research Summary

Good naming makes code self-explanatory. A well-chosen name tells you what a variable or function does without needing to read extra comments. Clear naming improves understanding, reduces confusion, and helps maintain consistency across the project.

Best Practices:

Use descriptive and meaningful names (e.g., userEmail instead of ue).

Follow consistent naming conventions (camelCase for variables/functions).

Avoid abbreviations unless they’re widely understood.

Use verbs for functions (e.g., getUserData() instead of userData()).

Keep names short but informative.

*****Example of Unclear Code*****

function p(u, d) {
  let x = u + d;
  return x * 2;
}

-- p, u, d, and x don’t describe what they represent.

It’s impossible to understand what the function is doing without reading the logic line by line.


*****Refactored Version*****

function calculateTotalPrice(unitPrice: number, discount: number): number {
  const finalPrice = unitPrice + discount;
  return finalPrice * 2;
}


Why it’s better:

Clear, descriptive names show the purpose of each variable.

Function name explains what the operation does.

Easier to read and maintain.

What makes a good variable or function name?
Good names clearly describe the purpose or value they hold. They follow consistent patterns and are easy to understand without extra explanation.

What issues can arise from poorly named variables?
Poor names cause confusion, mistakes, and longer debugging time since you have to trace what each variable actually represents.

How did refactoring improve code readability?
Renaming made the code instantly understandable. I didn’t have to guess what each variable was for — the logic was clear just by reading the names.