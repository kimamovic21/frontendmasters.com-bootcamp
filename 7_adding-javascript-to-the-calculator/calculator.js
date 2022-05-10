// let runningTotal = 0;
// let buffer = "0";
// let previousOperator = null;

// const screen = document.querySelector('.screen');

// function buttonClick(value) {
//     debugger;
//     // console.log(value); // pogledati u browser
//     if ( isNaN(value)) {
//         //this is not a number
//         handleSymbol(value);
//     } else {
//         //this is a number
//         handleNumber(value);
//     }
//     screen.innerText = buffer;
// }


// function handleSymbol(symbol) {
//     // if (symbol === 'C') {
//     //     buffer = '0';
//     //     runningTotal = 0; 
//     // }
//     switch (symbol) {
//         case 'C': 
//           buffer = '0';
//           runningTotal = 0;
//           break;
//         case '=':
//           if (previousOperator = null) {
//             return;
//           }
//           flushOperation(parseInt(buffer));
//           previousOperator = null;
//           buffer = runningTotal;
//           runningTotal = 0;
//           break;
//         case "←":
//             if(buffer.length === 1) {
//                 buffer = '0';
//             } else {
//                 buffer = buffer.substring(0, buffer.length - 1);
//             }
//            break;
//         case '+':
//         case '-':
//         case '×':
//         case '÷':
//           handleMath(symbol);
//           break;
//     }
// }

// function handleMath(symbol) {
//     if(buffer === '0') {
//         // do nothing
//         return;
//     }

//     const intBuffer = parseInt(buffer);

//     if(runningTotal === 0) {
//         runningTotal = intBuffer;
//     } else {
//         flushOperation(intBuffer);
//     }

//     previousOperator = symbol;

//     buffer = '0';
// }

// function flushOperation(intBuffer) {
//     if (previousOperator === '+') {
//         runningTotal += intBuffer;
//     } else if (previousOperator === '-') {
//         runningTotal -= intBuffer;
//     } else if (previousOperator === '×') {
//         runningTotal *= intBuffer;
//     } else {
//         runningTotal /= intBuffer;
//     }
// }

// function handleNumber(numberString) {
//     if (buffer === "0") {
//         buffer = numberString;
//     } else {
//         // buffer = buffer + numberString
//         buffer += numberString;
//         // console.log('buffer', buffer);
//     }
// }

// function init() {
//     document.querySelector('.calc-buttons')
//     .addEventListener('click', function(event) {
//         // console.log(event) // pogledati u browser 
//         buttonClick(event.target.innerText);
//     })
// }


// init();


// https://github.com/FrontendMasters/bootcamp/blob/master/static/calculator.js



let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleMath(value) {
  if (buffer === "0") {
    // do nothing
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;

  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = +runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(value);
      break;
  }
}

function rerender() {
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function(event) {
      buttonClick(event.target.innerText);
    });
}

init();
