Code Smells and Refactoring


Research Summary

Code smells are patterns in code that indicate deeper design or structural issues. They don’t always cause immediate errors, but they often make code harder to read, maintain, and extend. Recognizing and fixing them early helps keep code clean, organized, and scalable.

Examples of Common Code Smells
1. Magic Numbers & Strings

Before:

function calculateDiscount(price: number): number {
  return price * 0.1; // 0.1 is a "magic number"
}


After:

const DISCOUNT_RATE = 0.1;

function calculateDiscount(price: number): number {
  return price * DISCOUNT_RATE;
}


- Using constants improves clarity and makes future changes easier.

2. Long Function

Before:

function processOrder(order: any) {
  console.log("Validating order...");
  if (!order.items || order.items.length === 0) return "No items!";
  console.log("Calculating total...");
  const total = order.items.reduce((sum, item) => sum + item.price, 0);
  console.log("Applying discount...");
  const finalTotal = total - total * 0.1;
  console.log("Order processed:", finalTotal);
}


After:

function validateOrder(order: any): boolean {
  return order.items && order.items.length > 0;
}

function calculateTotal(order: any): number {
  return order.items.reduce((sum, item) => sum + item.price, 0);
}

function applyDiscount(total: number): number {
  const DISCOUNT_RATE = 0.1;
  return total - total * DISCOUNT_RATE;
}

function processOrder(order: any) {
  if (!validateOrder(order)) return "No items!";
  const total = calculateTotal(order);
  const finalTotal = applyDiscount(total);
  console.log("Order processed:", finalTotal);
}


- The code is now easier to read, test, and maintain.

3. Duplicate Code

Before:

function getAdminName(admin: any) {
  return admin.firstName + ' ' + admin.lastName;
}

function getCustomerName(customer: any) {
  return customer.firstName + ' ' + customer.lastName;
}


After:

function getFullName(user: any) {
  return `${user.firstName} ${user.lastName}`;
}


- Reused logic removes duplication and reduces future maintenance work.

4. Large Class (God Object)

Before:

class UserManager {
  createUser() {}
  deleteUser() {}
  logUserActivity() {}
  generateReport() {}
  sendEmail() {}
}


After:

class UserService {
  createUser() {}
  deleteUser() {}
}

class ActivityLogger {
  logUserActivity() {}
}

class ReportService {
  generateReport() {}
}

class EmailService {
  sendEmail() {}
}


- Splitting responsibilities follows the Single Responsibility Principle (SRP).

5. Deeply Nested Conditionals

Before:

function checkAccess(user: any) {
  if (user) {
    if (user.role) {
      if (user.role === "admin") {
        return "Access granted";
      }
    }
  }
  return "Access denied";
}


After (Using Guard Clauses):

function checkAccess(user: any) {
  if (!user || !user.role) return "Access denied";
  if (user.role === "admin") return "Access granted";
  return "Access denied";
}


- Simpler flow — easier to understand and debug.

6. Commented-Out Code

Before:

function getData() {
  // fetch('api/data');
  console.log('Getting data...');
}


After:

function getData() {
  console.log('Getting data...');
}


- Removing commented-out code keeps the file clean and focused.

7. Inconsistent Naming

Before:

let n = "Donyl";
let user_age = 22;
function CalcAge(a: number) { return a + 1; }


After:

let userName = "Donyl";
let userAge = 22;
function calculateAge(age: number) { return age + 1; }


- Consistent naming improves readability and understanding.

Reflections

What code smells did you find in your code?
I found several, including magic numbers, long functions, duplicate logic, and inconsistent naming. These made the code harder to maintain and understand.

How did refactoring improve the readability and maintainability of the code?
Refactoring helped break down logic into smaller parts, used constants for clarity, and improved naming consistency. The code became easier to read and modify without confusion.

How can avoiding code smells make future debugging easier?
Avoiding code smells ensures the structure is clean and predictable, so finding bugs becomes faster. It also prevents introducing new issues when making updates.