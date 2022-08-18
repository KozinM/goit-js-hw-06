//finding form
const formElement = document.querySelector(".login-form");

//adding listener to a form
formElement.addEventListener("submit", formSubmitHandler);

//defining formSubmitHandler
function formSubmitHandler(event) {
  //prevent page refreshing
  event.preventDefault();

  //checking form-fields for fullfillment
  if (
    event.currentTarget.elements.email.value == "" ||
    event.currentTarget.elements.password.value == ""
  ) {
    return alert("All form-fields should be filled in!");
  }

  //making object in case of succesful checking
  const submitInfo = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  //output of the object to console
  console.log(submitInfo);

  //Reseting form
  event.currentTarget.reset();
}
