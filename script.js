// VARIABLES
const numberBtn = $(".number");
const deleteBtn = $(".delete");
const resetBtn = $(".reset");
const equalBtn = $(".equal");
var userInput = $(".user-input");
var isFinished = false;
var themes = $("#themes");

// FUNCTIONING
// 1. Type numbers in sequence on display
numberBtn.on("click", function (event) {
  // Delete the zero if it's the first inserted number + reset boolean value and empty string if the operation is completed
  if (userInput.text() == "0") {
    userInput.text("");
  } else if (isFinished === true){
    isFinished = false;
    userInput.text("");
  }
  // Store current value of userInput in the following var
  var currentNumber = userInput.text();
    // Save the newly entered number in a new variable
  var newNumber = event.target.value;

  // If expression starts with...
  if (currentNumber === "+" || currentNumber === "/" || currentNumber === "-" || currentNumber === "*"){
    currentNumber = "";
    userInput.text(currentNumber + newNumber);
  } else {
  // Concatenate new number to current user input value
  userInput.text(currentNumber + newNumber);
 }
});

// 2. Click event on "del" button
deleteBtn.on("click", function () {
  var currentNumber = userInput.text();
  // Store character to be deleted (the last one) in the following var
  var numberSlice = currentNumber.slice(0, -1);
  // Slicing
  userInput.text(numberSlice);
  // If it's empty, write '0'
  if (userInput.text() == "0" || userInput.text() == "") {
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
  isFinished = false;
});

// UI
function changeTheme() {
  switch (themes.prop("value")){
    case "1":
      $(":root").css("--equal-bg--theme-toggle", "hsl(6, 63%, 50%)");
      $(":root").css("--theme-active", "hsl(6, 91%, 66%)");
      $("body").css("background-color", "var(--main-bg)");
      $("body").css("color", "var(--calc-del-reset-equal-text)");
      $("#toggle-bar").css("background-color", "var(--toggle-keypad-bg)");
      themes.css("background-color", "var(--toggle-keypad-bg)");     
      $("#display").css("background-color", "var(--display-bg)");
      $("#btn-pad").css("background-color", "var(--toggle-keypad-bg)");
       $("button").css("background-color", "var(--operators-bg)");
      $("button").css("box-shadow", "0px 1.5px 0px var(--operators-shadow)");
      $("button").css("color", "var(--operators-text)");
      $(".dark").css("background-color", "var(--del-res-bg)");
      $(".dark").css("box-shadow", "0px 1.5px 0px var(--del-res-shadow)");
      $(".red").css("background-color", "var(--equal-bg--theme-toggle)");
      $(".red").css("box-shadow", "0px 1.5px 0px var(--equal-shadow)");
      $(".dark, .red").css("color", "var(--calc-del-reset-equal-text)")
      $(".btn").css("background-color", "var(--operators-bg)");
      break;

    case "2":
      $(":root").css("--equal-bg--theme-toggle", "hsl(25, 98%, 40%)");
      $(":root").css("--theme-active", "hsl(25, 98%, 80%)");
      $("body").css("background-color", "var(--main-bg-2)");
      $("body").css("color", "var(--operators-text-2)");
      $("#toggle-bar").css("background-color", "var(--toggle-keypad-bg-2)");
      themes.css("background-color", "var(--toggle-keypad-bg-2)");
      $("#display").css("background-color", "var(--display-bg-2)");
      $("#btn-pad").css("background-color", "var(--toggle-keypad-bg-2)");
      $("button").css("background-color", "var(--operators-bg-2)");
      $("button").css("color", "var(--operators-text-2)");
      $("button").css("box-shadow", "0px 1.5px 0px var(--operators-shadow-2)");
      $(".dark").css("background-color", "var(--del-res-bg-2)");
      $(".dark").css("box-shadow", "0px 1.5px 0px var(--del-res-shadow-2)");
      $(".dark").css("color", "var(--calc-del-reset-equal-text-2)");
      $(".red").css("background-color", "var(--equal-bg--theme-toggle-2)");
      $(".red").css("box-shadow", "0px 1.5px 0px var(--equal-shadow-2)");
      $(".dark, .red").css("color", "--calc-del-reset-equal-text-2")
      $(".btn").css("background-color", "var(--operators-bg-2)");
      break;

    case "3":
      $(":root").css("--equal-bg--theme-toggle", "hsl(176, 100%, 44%)");
      $(":root").css("--theme-active", "hsl(176, 100%, 80%)");
      $("body").css("background-color", "var( --main-bg-3)");
      $("body").css("color", "var(--operators-text-3)");
      $("#toggle-bar").css("background-color", "var(--toggle-keypad-display-bg-3)");
      themes.css("background-color", "var(--toggle-keypad-display-bg-3)");
      $("#display").css("background-color", "var(--toggle-keypad-display-bg-3)");
      $("#btn-pad").css("background-color", "var(--toggle-keypad-bg-3)");
      $("button").css("background-color", "var(--operators-bg-3)");    
      $("button").css("color", "var(--operators-text-3)");
      $(".equal").css("color", "var(--equal-text-3)");
      $("button").css("box-shadow", "0px 1.5px 0px var(--operators-shadow-3)");
      $(".dark").css("background-color", "var(--del-res-bg-3)");
      $(".dark").css("box-shadow", "0px 1.5px 0px var(--del-res-shadow-3)");
      $(".dark").css("color", "var(--calc-del-reset-text-3)");
      $(".red").css("background-color", "var(--equal-bg--theme-toggle-3)");
      $(".red").css("box-shadow", "0px 1.5px 0px var(--equal-shadow-3)");
      $(".btn").css("background-color", "var(--operators-bg-3)");
      break;

    default:
      break;
  }
}

// to do: don't allow duplicate operators