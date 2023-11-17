// VARIABLES
const numberBtn = $(".number");
const deleteBtn = $(".delete");
const resetBtn = $(".reset");
const equalBtn = $(".equal");
var userInput = $(".user-input");
var isFinished = false;

// FUNCTIONING
// 1. Type numbers in sequence on display
numberBtn.on("click", function (event) {
  // Delete the zero if it's the first inserted number + reset boolean value and empty string if the operation is completed
  if (userInput.text() == "0" || isFinished === true) {
    isFinished = false;
    userInput.text("");
  }
  // Store current value of userInput in the following var
  var currentNumber = userInput.text();
  // Save the newly entered number in a new variable
  var newNumber = event.target.value;
  // Concatenate new number to current user input value
  userInput.text(currentNumber + newNumber);
});

// 2. Click event on "del" button
deleteBtn.on("click", function () {
  var currentNumber = userInput.text();
  // Store character to be deleted (the last one) in the following var
  var numberSlice = currentNumber.slice(0, -1);
  // Slicing
  userInput.text(numberSlice);
  // If it's empty, write '0'
  if (userInput.text() !== "0") {
    userInput.text("0");
  }
});

// 3. Result
equalBtn.on("click", function () {
  // Save the entire user input with operators
  var expression = userInput.text();
  // Solve the expression
  var answer = eval(expression);
  userInput.text(answer);
  isFinished = true;
});

// 4. Reset
resetBtn.on("click", function () {
  userInput.text("0");
});


// DA VEDERE:
// NON INIZIARE CON OPERATORI (TRANNE IL MENO)
// NON PERMETTERE DOPPIONE OPERATORI (es: ++, //, *+...)
// SISTEMARE TEMI