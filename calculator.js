let display = document.getElementById("display");
let memory = document.getElementById("history");
let operation = "";
let operationNumber = 0;
let previousNumber = "";

let buttons = document.getElementsByClassName("button");

for (let button of buttons) {
  button.addEventListener("click", function () {
    if (button.textContent === "Sin") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "Sin(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.sin(display.value) +
        "<span/><div/>";
      display.value = Math.sin(display.value);
      operation = "Sin";
      previousNumber = display.value;
    } else if (button.textContent === "Cos") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "Cos(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.cos(display.value) +
        "<span/><div/>";
      display.value = Math.cos(display.value);
      operation = "Cos";
      previousNumber = display.value;
    } else if (button.textContent === "Tan") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "Tan(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.tan(display.value) +
        "<span/><div/>";
      display.value = Math.tan(display.value);
      operation = "Tan";
      previousNumber = display.value;
    } else if (button.textContent === "log") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "log(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.log10(display.value) +
        "<span/><div/>";
      display.value = Math.log10(display.value);
      operation = "log";
      previousNumber = display.value;
    } else if (button.textContent === "ln") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "ln(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.log(display.value) +
        "<span/><div/>";
      display.value = Math.log(display.value);
      operation = "ln";
      previousNumber = display.value;
    } else if (button.textContent === "π") {
      display.value += Math.PI;
    } else if (button.textContent === "x²") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        "&sup2" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.pow(display.value, 2) +
        "<span/><div/>";
      display.value = Math.pow(display.value, 2);
      operation = "square";
      previousNumber = display.value;
    } else if (button.textContent === "x³") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        "&sup3" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.pow(display.value, 3) +
        "<span/><div/>";
      display.value = Math.pow(display.value, 3);
      operation = "cube";
      previousNumber = display.value;
    } else if (button.textContent === "e") {
      display.value += Math.E;
    } else if (button.textContent === "√") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "&radic;<span style='text-decoration:overline;'>&nbsp;" +
        display.value +
        "&nbsp;</span> = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.sqrt(display.value) +
        "<span/><div/>";
      display.value = Math.sqrt(display.value);
      operation = "root";
      previousNumber = display.value;
    } else if (button.textContent === "∛") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "&#x221B;<span style='text-decoration:overline;'>&nbsp;" +
        display.value +
        "&nbsp;</span> = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.cbrt(display.value) +
        "<span/><div/>";
      display.value = Math.cbrt(display.value);
      operation = "cubeRoot";
      previousNumber = display.value;
    } else if (button.textContent === "/") {
      divide();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "-") {
      subtract();
    } else if (button.textContent === "+") {
      add();
    } else if (button.textContent === "1/x") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "1/" +
        display.value +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        1 / display.value +
        "<span/><div/>";
      display.value = 1 / display.value;
      operation = "fraction";
      previousNumber = display.value;
    } else if (button.textContent === "!") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        "! = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        factorial(display.value) +
        "<span/><div/>";
      display.value = factorial(display.value);
      operation = "factorial";
      previousNumber = display.value;
    } else if (button.textContent === "%") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        "% = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        display.value / 100 +
        "<span/><div/>";
      display.value = display.value / 100;
      operation = "percent";
      previousNumber = display.value;
    } else if (button.textContent === "(-)") {
      negative();
    } else if (button.textContent === "C") {
      display.value = "";
      operation = "";
      operationNumber = 0;
      previousNumber = "";
    } else if (button.textContent === "DEL") {
      del();
    } else if (button.textContent === "=") {
      equals();
    } else {
      display.value += button.textContent;
    }
  });
}

function equals() {
  if (eval(display.value) == display.value && operation === "") {
    operation = "";
    operationNumber = 0;
    previousNumber = "";
    return;
  }
  if (display.value === "") {
    return;
  } else if (operationNumber > 1) {
    operation = "";
    previousNumber = "";
    memory.innerHTML +=
      "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
      display.value +
      " = " +
      "<span style='color: #f2f2f2; font-weight: bold;'>" +
      Math.round(100000000 * eval(display.value)) / 100000000 +
      "</span></div>";
  } else if (previousNumber !== "") {
    if (operation === "add") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        previousNumber +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.round(100000000 * eval((display.value += previousNumber))) /
          100000000 +
        "</span></div>";
      display.value += previousNumber;
    } else if (operation === "subtract") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        previousNumber +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.round(100000000 * eval((display.value += previousNumber))) /
          100000000 +
        "</span></div>";
      display.value += previousNumber;
    } else if (operation === "multiply") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        previousNumber +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.round(100000000 * eval((display.value += previousNumber))) /
          100000000 +
        "</span></div>";
      display.value += previousNumber;
    } else if (operation === "divide") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        previousNumber +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.round(100000000 * eval((display.value += previousNumber))) /
          100000000 +
        "</span></div>";
      display.value += previousNumber;
    } else if (operation === "Sin") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "Sin(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.sin(display.value) +
        "</span></div>";
      display.value = Math.sin(display.value);
    } else if (operation === "Cos") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "Cos(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.cos(display.value) +
        "</span><div/>";
      display.value = Math.cos(display.value);
    } else if (operation === "Tan") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "Tan(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.tan(display.value) +
        "</span><div/>";
      display.value = Math.tan(display.value);
    } else if (operation === "log") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "log(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.log10(display.value) +
        "</span><div/>";
      display.value = Math.log10(display.value);
    } else if (operation === "ln") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "ln(" +
        display.value +
        ")" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.log(display.value) +
        "</span><div/>";
      display.value = Math.log(display.value);
    } else if (operation === "square") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        "&sup2" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.pow(display.value, 2) +
        "</span><div/>";
      display.value = Math.pow(display.value, 2);
    } else if (operation === "cube") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        "&sup3" +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.pow(display.value, 3) +
        "</span><div/>";
      display.value = Math.pow(display.value, 3);
    } else if (operation === "root") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "&radic;<span style='text-decoration:overline;'>&nbsp;" +
        display.value +
        "&nbsp;</span> = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.sqrt(display.value) +
        "</span><div/>";
      display.value = Math.sqrt(display.value);
    } else if (operation === "cubeRoot") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "&#x221B;<span style='text-decoration:overline;'>&nbsp;" +
        display.value +
        "&nbsp;</span> = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        Math.cbrt(display.value) +
        "</span><div/>";
      display.value = Math.cbrt(display.value);
    } else if (operation === "fraction") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        "1/" +
        display.value +
        " = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        1 / display.value +
        "</span><div/>";
      display.value = 1 / display.value;
    } else if (operation === "factorial") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        "! = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        factorial(display.value) +
        "</span><div/>";
      display.value = factorial(display.value);
    } else if (operation === "percent") {
      memory.innerHTML +=
        "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
        display.value +
        "% = " +
        "<span style='color: #f2f2f2; font-weight: bold;'>" +
        display.value / 100 +
        "</span><div/>";
      display.value = display.value / 100;
    }
  } else if (operationNumber === 1) {
    if (operation === "add") {
      previousNumber = display.value.substring(
        display.value.indexOf("+"),
        display.value.length
      );
    } else if (operation === "subtract") {
      previousNumber = display.value.substring(
        display.value.indexOf("-"),
        display.value.length
      );
    } else if (operation === "multiply") {
      previousNumber = display.value.substring(
        display.value.indexOf("*"),
        display.value.length
      );
    } else if (operation === "divide") {
      previousNumber = display.value.substring(
        display.value.indexOf("/"),
        display.value.length
      );
    }
    memory.innerHTML +=
      "<div style='border-bottom: 3px solid black; padding: 10px; overflow: scroll;'>" +
      display.value +
      " = " +
      "<span style='color: #f2f2f2; font-weight: bold;'>" +
      Math.round(100000000 * eval(display.value)) / 100000000 +
      "</span></div>";
  }
  operationNumber = 0;
  display.value = Math.round(100000000 * eval(display.value)) / 100000000;
}

function divide() {
  if (isOperation(display.value[display.value.length - 1])) {
    operationNumber = -1;
  }
  operation = "divide";
  operationNumber++;
  previousNumber = "";
  display.value += "/";
}

function multiply() {
  if (isOperation(display.value[display.value.length - 1])) {
    operationNumber = -1;
  }
  operation = "multiply";
  operationNumber++;
  previousNumber = "";
  display.value += "*";
}

function subtract() {
  if (isOperation(display.value[display.value.length - 1])) {
    operationNumber = -1;
  }
  operation = "subtract";
  operationNumber++;
  previousNumber = "";
  display.value += "-";
}

function add() {
  if (isOperation(display.value[display.value.length - 1])) {
    operationNumber = -1;
  }
  operation = "add";
  operationNumber++;
  previousNumber = "";
  display.value += "+";
}

function negative() {
  if (
    display.value.indexOf("+") === -1 &&
    (display.value.indexOf("-") === -1 || display.value.indexOf("-") === 0) &&
    display.value.indexOf("*") === -1 &&
    display.value.indexOf("/") === -1
  ) {
    if (display.value.indexOf("-") !== 0) {
      display.value = "-" + display.value;
    } else {
      display.value = display.value.substring(1, display.value.length);
    }
  } else if (display.value[display.value.length - 1] == "-") {
    display.value += " -";
  } else {
    display.value += "-";
  }
}

function factorial(number) {
  if (number == 0) {
    return 0;
  } else if (number == 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

function del() {
  if (
    display.value[display.value.length - 1] === "+" ||
    display.value[display.value.length - 1] === "-" ||
    display.value[display.value.length - 1] === "*" ||
    display.value[display.value.length - 1] === "/"
  ) {
    operation = "";
    operationNumber--;
  }
  display.value = display.value.substring(0, display.value.length - 1);
  if (display.value == "") {
    operation = "";
    operationNumber = 0;
    previousNumber = "";
  }
}

function isOperation(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

document.getElementById("wipe").addEventListener("click", function () {
  memory.innerHTML = "";
});
