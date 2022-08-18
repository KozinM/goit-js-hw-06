// создаю счетчик
let counterValue = 0;

// нахожу елемент странцы отображающий состояние счетчика

let counterDisplay = document.querySelector("#value");

// нахожу кнопку декремента

const buttonDecrement = document.querySelector("[data-action=decrement]");

// нахожу кнопку инкремента

const buttonIncrement = document.querySelector("[data-action=increment]");

// создаю слушателя для кнопки декремента

buttonDecrement.addEventListener("click", btDecrementClickHandler);

// создаю слушателя для кнопки инкремента

buttonIncrement.addEventListener("click", btIncrementClickHandler);

// определение функции обработчика события нажатия на кнопку декремента

function btDecrementClickHandler() {
  counterValue--;
  counterDisplay.innerHTML = counterValue;
  //console.log(counterValue);
}

// определение функции обработчика события нажатия на кнопку инкремента

function btIncrementClickHandler() {
  counterValue++;
  counterDisplay.innerHTML = counterValue;
  //console.log(counterValue);
}
