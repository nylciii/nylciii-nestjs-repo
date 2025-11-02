📌 Writing Small, Focused Functions


Best Practices for Writing Small, Single-Purpose Functions
Research Summary

Good functions should do one thing and do it well. Each function should have a clear purpose — not handle multiple tasks at once. This makes the code easier to read, test, and reuse. Smaller functions also reduce bugs since each part of the code can be verified independently.

Best Practices:

Keep functions short and focused on a single task.

Give functions descriptive names that show what they do.

Avoid mixing unrelated logic (like data fetching and UI updates in the same function).

Reuse smaller functions instead of copying similar code blocks.

**Example of a Long, Complex Function**

function processOrder(order) {
  
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }

  // Apply discount
  if (order.discountCode) {
    total -= total * 0.1;
  }

  // Log order
  console.log("Processing order for:", order.customer);
  console.log("Total amount:", total);

  // Send confirmation email
  console.log("Sending email to:", order.customerEmail);
}


**Refactored Version**

function calculateOrderTotal(items, discountCode) {
  let total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (discountCode) {
    total -= total * 0.1;
  }
  return total;
}

function logOrderDetails(customer: string, total: number): void {
  console.log(`Processing order for: ${customer}`);
  console.log(`Total amount: ${total}`);
}

function sendConfirmationEmail(email: string): void {
  console.log(`Sending email to: ${email}`);
}

function processOrder(order): void {
  const total = calculateOrderTotal(order.items, order.discountCode);
  logOrderDetails(order.customer, total);
  sendConfirmationEmail(order.customerEmail);
}


Why it’s better

Still performs the same actions: calculates total, applies discount, logs info, and sends email.

Each function now has a single, focused responsibility.

The main processOrder() function reads like a clear summary of the workflow.

Reflections

Why is breaking down functions beneficial?
It makes the code simpler, easier to maintain, and reduces the risk of introducing bugs. Each function can be tested and reused independently.

How did refactoring improve the structure of the code?
The code became more organized and readable. Instead of one large block doing everything, the logic now flows clearly through smaller, well-named functions.
