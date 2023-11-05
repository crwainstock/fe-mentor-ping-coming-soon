const button = document.querySelector("button");
const userEmailInput = document.getElementById("email");

let userEmail = document.getElementById("email");
// let message = document.createElement("div");

const submitEmail = (event) => {
  event.preventDefault();

  // Get the value of the email input
  const userEmail = userEmailInput.value;

  if (isValidEmail(userEmail)) {
    // If the userEmail is an email address
    // submit the email address
    // show success message below input

    showSuccessMessage();
  } else {
    // Turn input red, add error message below input
    userEmailInput.style.borderColor = "hsl(354, 100%, 66%)";
    showErrorMessage();
  }
};

function isValidEmail(email) {
  // Check the format of the input -- standard characters @ standard characters. ending
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  console.log(emailRegex.test(email));
  return emailRegex.test(email);
}

function removeMessages() {
  const previousSuccessMessage = document.querySelector(".success-message");
  const previousErrorMessage = document.querySelector(".error-message");

  if (previousSuccessMessage) {
    previousSuccessMessage.remove();
  }

  if (previousErrorMessage) {
    previousErrorMessage.remove();
  }
}

function showSuccessMessage() {
  removeMessages();

  let input = document.getElementById("email");
  let successMessageDiv = document.createElement("div");
  successMessageDiv.textContent = "Success! Your email has been submitted.";
  successMessageDiv.classList.add("success-message");

  input.parentNode.insertBefore(successMessageDiv, input.nextSibling);
  userEmailInput.style.borderColor = "";
  input.value = "";
}

function showErrorMessage() {
  removeMessages();

  let input = document.getElementById("email");
  let errorMessageDiv = document.createElement("div");
  errorMessageDiv.textContent = "Please enter a valid email address.";
  errorMessageDiv.classList.add("error-message");

  input.parentNode.insertBefore(errorMessageDiv, input.nextSibling);
}

button.addEventListener("click", submitEmail);
