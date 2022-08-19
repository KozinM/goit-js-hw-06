function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//creating variables with links to create and destroy elements
const createButtonElement = document.querySelector("[data-create]");

const destroyButtonElement = document.querySelector("[data-destroy]");


//adding event listener on create button
createButtonElement.addEventListener('click', clickOnCreateButtonHandler);

//adding event listener on destroy button
destroyButtonElement.addEventListener('click', clickOnDestroyButtonHandler);

//defining handling function for event listener on create button
function clickOnCreateButtonHandler(event) {
  const inputElement = document.querySelector("input").value;
  createBoxes(inputElement);
}

//defining handling function for event listener on destroy button
function clickOnDestroyButtonHandler(event) {
  destroyBoxes();
}

//difining createBoxes function
function createBoxes(boxNumber) {

let boxWidth = new Number('30');
let boxHeight = new Number('30');

let divObjectSring = "";
for (let i=1; i<=boxNumber; i+=1){
  divObjectSring+=`<div class="js-created" style="background-color:${getRandomHexColor()};width:${boxWidth}px;height:${boxHeight}px;"></div>`;
  boxHeight+=10;
  boxWidth+=10;
}
const boxesContainer = document.querySelector("#boxes");
boxesContainer.insertAdjacentHTML("beforeEnd", divObjectSring);
}

//defining destroyBoxes function
function destroyBoxes () {
  const boxesToDelete = document.querySelectorAll(".js-created");
  for (let item of boxesToDelete){
    item.remove();
  }
}