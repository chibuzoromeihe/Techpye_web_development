function budgetTracker() {
  //asking the user to input income
  const incomeValue = prompt("Enter your income");
  let expensesValue = prompt("Enter your expenses");

  const income = parseFloat(incomeValue);
  let expenses = parseFloat(expensesValue);

  //calculating the balance
  let balance = income - expenses;

  //using conditional state to determine if positive or negative
  let statusOfBalance;
  if (balance > 0) {
    statusOfBalance = "Positive";
  } else if (balance < 0) {
    statusOfBalance = "Negative";
  } else {
    statusOfBalance = "Zero";
  }

  console.log("Income is: $" + income);
  console.log("Expenses is: $" + expenses);
  console.log("Balance is: $" + balance + " (" + statusOfBalance + ")");
}

budgetTracker();

// Part 2: Enhanced Budget Tracker

// Step 1: Declare arrays for incomes and expenses
let incomes = [];
let expenses = [];

// Function to add an amount to either income or expense
function addAmount(type, amount) {
  amount = parseFloat(amount);

  //validating the amount entered by user
  if (typeof amount !== "number" || amount <= 0) {
    console.log("Please enter a valid amount that is greater than 0 ");
    return;
  }
  if (type === "income") {
    incomes.push(amount);
  } else if (type === "expense") {
    expenses.push(amount);
  }
}

// Function to calculate the total of an array
//function calculateTotal(arr) {
// let total = 0;
//for (let i = 0; i < arr.lenght; i++) {
// to calculate total using for loop
// total += arr[i];
//}
function calculateTotal(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
//
// Function to calculate and display the balance
function calculateBalance() {
  // TODO: Calculate total income and total expenses
  const totalIncome = calculateTotal(incomes);
  const totalExpenses = calculateTotal(expenses);
  const balance = totalIncome - totalExpenses;
  // balance status
  let statusOfBalance;
  if (balance > 0) {
    statusOfBalance = "Positive";
  } else if (balance < 0) {
    statusOfBalance = "Negative";
  } else {
    statusOfBalance = "Zero";
  }

  // to display the balance and status
  console.log("Total Income is: $" + totalIncome);
  console.log("Total Expenses is: $" + totalExpenses);
  console.log("Balance is: $" + balance + " (" + statusOfBalance + ")");
}

// Step 2: Input Flow for Income
let incomeInput = prompt("Enter an income amount (or type 'done' to finish):");
while (incomeInput.toLowerCase() !== "done") {
  addAmount("income", incomeInput);
  incomeInput = prompt(
    "Enter another income amount (or type 'done' to finish):"
  );
}

// Step 3: Input Flow for Expenses
let expenseInput = prompt(
  "Enter an expense amount (or type 'done' to finish):"
);
while (expenseInput.toLowerCase() !== "done") {
  addAmount("expense", expenseInput);
  expenseInput = prompt(
    "Enter another expense amount (or type 'done' to finish):"
  );
}

// Step 4: Calculate and display the final balance
calculateBalance();
