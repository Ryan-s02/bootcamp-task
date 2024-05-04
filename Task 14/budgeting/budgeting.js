//setting up a function that will be used to create an income source object
function Income(name, amount, recurring){
    this.name = name;
    this.amount = amount;
    this.recurring = recurring;
}

//declaring new income sources
let incomeSources = [
  new Income("Salary", 2000, true),
  new Income("Spouses Salary", 2500, true),
  new Income("Bonus", 400, false),
  new Income("Gift", 200, false),
  new Income("Side Hustle", 500, false),
];

// storing income sources in session storage using functions
function storeIncomes(){
   //converting the array of income objects to a string to store
   const incomeSourcesAsString = JSON.stringify(incomeSources);

   //setting item in session storage
   sessionStorage.setItem("incomeSources", incomeSourcesAsString);
}
function storeExpenses(){
   //converting the array of expense objects to a string to store
   const expensesAsString = JSON.stringify(expenses);
   //setting item in session storage
   sessionStorage.setItem("expenses", expensesAsString);
}
//finding the value of all income sources
let totalIncome = incomeSources.reduce((sum, income) => sum + income.amount, 0);

//setting up a function that will be used to create new expense objects
function Expense(name, amount, recurring){
    this.name = name;
    this.amount = amount;
    this.recurring = recurring;
};

//creating new expense objects
let expenses = [
  new Expense("Mortgage", 700, true),
  new Expense("Childcare", 550, true),
  new Expense("Groceries", 400, true),
  new Expense("Mechanic", 380, false),
  new Expense("Utilities", 300, true),
];

//finding the value of all expenses

//finding the sum of all of the expenses
let totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

//displaying all income sources
alert(`Your income for the month:
 ${incomeSources[0].name}: ${incomeSources[0].amount}
 ${incomeSources[1].name}: ${incomeSources[1].amount}
 ${incomeSources[2].name}: ${incomeSources[2].amount}
 ${incomeSources[3].name}: ${incomeSources[3].amount}
 ${incomeSources[4].name}: ${incomeSources[4].amount}

 Total Income for the month: ${totalIncome}`);

 //asking the user to add a new source of income
 let newSourceName = prompt("Please add another income source. \n What is the name of the income source?");
 let newSourceAmount = parseFloat(prompt("What is the amount of this income stream?"));
 let isIncomeRecurring = prompt("Is this income stream recurring? \n Please type yes or no").toUpperCase();

 //condition to check if there is a new income source added, if it isnt added, the user will be asked to enter a valid income source
if(!newSourceName || isNaN(newSourceAmount)){
    alert("Please enter a valid name and amount");
}

//storing the new income source in a variable and pushing it to the expenses array
let newIncomeSource = new Income(newSourceName, newSourceAmount, isIncomeRecurring);

//conditional statement that converts the user input to a boolean, stores the boolean in the object
if(newIncomeSource.recurring === "YES"){
   newIncomeSource.recurring = true;
}else{
   newIncomeSource.recurring = false
};
incomeSources.push(newIncomeSource);

 storeIncomes();
// finding the sum of all the income sources after the new income source has been added 
 totalIncome = incomeSources.reduce((sum, income) => sum + income.amount, 0);

 //adding the sum of total income to session storage
sessionStorage.setItem("Total income", JSON.stringify(totalIncome));

 

 //displaying expenses
 alert(`Your expenses for the month:
 ${expenses[0].name}: ${expenses[0].amount}
 ${expenses[1].name}: ${expenses[1].amount}
 ${expenses[2].name}: ${expenses[2].amount}
 ${expenses[3].name}: ${expenses[3].amount}
 ${expenses[4].name}: ${expenses[4].amount}

 Total expenses for the month: ${totalExpenses}`);

 //asking the user to add a new expense
 let newExpenseName = prompt("Please add another expense. \n What is the name of the expense?");
 let newExpenseAmount = parseFloat(prompt("What is the amount of this expense?"));
 let isExpenseRecurring = prompt("Is this expense recurring? \n Please type yes or no").toUpperCase();

 //conditional statement to check if the user has entered anything, will prompt them to enter new expense if they have not
 if(!newExpenseName || isNaN(newExpenseAmount)){
    alert("Please enter a valid name and amount");
}

//creating a new expense object from the user input and pushing it to the expense array 
 let newExpense = new Expense(newExpenseName, newExpenseAmount, isExpenseRecurring);
 expenses.push(newExpense);

//  finding the new sum of all expenses after the new expense has been added to the array 
 totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

 if(newExpense.recurring === "YES"){
    newExpense.recurring = true;
 }else{
    newExpense.recurring = false
 };
storeExpenses();
 //calculating the left over income after expenses have been removed

 const disposableIncomeBeforeSavings = totalIncome - totalExpenses;
 sessionStorage.setItem("Disposable before savings", JSON.stringify(disposableIncomeBeforeSavings));

 //telling the user the disposable and asking the user how much they would like to save by getting user input
 let savings = parseFloat(prompt(`You have ${disposableIncomeBeforeSavings} left after expenses. How much money would you like to save this month?`));

//trying/experimenting with ways to use session storage (don't need to use it with a function)
//storing the savings input in the session
sessionStorage.setItem("Savings", JSON.stringify(savings));

//  finding the income remaining after savings have been put aside
 let disposableIncomeAfter = disposableIncomeBeforeSavings - savings;

//storing the calculated disposable income in the web session
sessionStorage.setItem("Disposable Income", JSON.stringify(disposableIncomeAfter));

//  telling the user the amount of income left
 alert(`You have ${disposableIncomeAfter} left after putting money aside for your savings`);