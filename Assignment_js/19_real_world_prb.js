let expenses = [
    { name: "Food", amount: 1200 },
    { name: "Bill", amount: 3000 },
    { name: "Travel", amount: 800 },
];

console.log(expenses);

expenses.push({ name: "Testfee", amount: 500 });
console.table(expenses);


let totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
console.log("Total Expense:", totalExpense);

let highestExpense = expenses.reduce((max, expense) => (expense.amount > max.amount ? expense : max), expenses[0]);
console.log("Highest Expense:", highestExpense);