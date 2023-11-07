const button = document.querySelector("button");
const userEmailInput = document.getElementById("email");

let userEmail = document.getElementById("email");

const submitEmail = (event) => {
  event.preventDefault();

  const userEmail = userEmailInput.value;

  if (isValidEmail(userEmail)) {
    showSuccessMessage();
  } else {
    userEmailInput.style.borderColor = "hsl(354, 100%, 66%)";
    showErrorMessage();
  }
};

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  console.log(emailRegex.test(email));
  return emailRegex.test(email);
}

// Check the format of the input -- standard characters @ standard characters. ending
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

  let form = document.getElementById("form");
  let input = document.getElementById("email");
  let successMessageDiv = document.createElement("div");
  successMessageDiv.textContent = "Success! Your email has been submitted.";
  successMessageDiv.classList.add("success-message");

  form.parentNode.insertBefore(successMessageDiv, form.nextSibling);
  userEmailInput.style.borderColor = "";
  input.value = "";
}

function showErrorMessage() {
  removeMessages();

  let form = document.getElementById("form");
  let errorMessageDiv = document.createElement("div");
  errorMessageDiv.textContent = "Please enter a valid email address.";
  errorMessageDiv.classList.add("error-message");

  form.parentNode.insertBefore(errorMessageDiv, form.nextSibling);
}

button.addEventListener("click", submitEmail);
