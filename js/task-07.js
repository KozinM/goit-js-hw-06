// finding range element
const rangeElement = document.querySelector("#font-size-control");

//adding event listener for range element

rangeElement.addEventListener("change", rangeElementChangeHandler);

// defining handler for range element change

function rangeElementChangeHandler(event) {
  //finding element for changing
  const textElement = document.querySelector("#text");

  textElement.style.fontSize = event.currentTarget.value + "px";
  //console.log(event.currentTarget.value);
}