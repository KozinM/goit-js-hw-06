//нахожу элемент ввода
const nameInputElement = document.querySelector("#name-input");

//нахожу элемент страницы отображающий имя
const nameOutputElement = document.querySelector("#name-output");
//console.log(nameInputElement);

//пописываю слушателя на элемент ввода
nameInputElement.addEventListener("input", inputChangeHandler);

//определяю функцию по обработке ввода в элемент ввода
function inputChangeHandler(event) {
  if (event.currentTarget.value != "") {
    nameOutputElement.textContent = event.currentTarget.value;
  } else {
    nameOutputElement.textContent = "Anonymous";
  }
}
