function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//console.log(getRandomHexColor());

//finding button element
const btnElement = document.querySelector(".change-color");

//add event listener to button element

btnElement.addEventListener("click", btnElementClickHandler);

//button click handler function defenition

function btnElementClickHandler(event) {
  const colorInfoElement = document.querySelector(".color");
  colorInfoElement.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = colorInfoElement.innerHTML;
}
