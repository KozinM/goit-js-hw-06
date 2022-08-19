// finding input element for checking
const inputElement = document.querySelector("#validation-input");

//subscribing input for a listener

inputElement.addEventListener("blur", inputBlurHandler);

//creating function for handling blur event for input element

function inputBlurHandler(event) {
  //console.log(event.currentTarget.value.length);
  //console.log("dataset: " + event.currentTarget.dataset.length);
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
}
