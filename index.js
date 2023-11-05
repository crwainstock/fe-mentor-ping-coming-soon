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
    showErrorMessage("Please enter a valid email address.");
  }
};

function isValidEmail(email) {
  // Check the format of the input -- standard characters @ standard characters. ending
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  console.log(emailRegex.test(email));
  return emailRegex.test(email);
}

function showSuccessMessage() {
  // Implement your logic to show a success message below the input field.
  // For example, you can create a div element and add it to the DOM.
  // Make sure to clear any previous error styles/messages if needed.
  const previousSuccessMessage = document.querySelector(".success-message");
  if (previousSuccessMessage) {
    previousSuccessMessage.remove();
  }

  let input = document.getElementById("email");
  let successMessageDiv = document.createElement("div");
  successMessageDiv.textContent = "Success! Your email has been submitted.";
  successMessageDiv.classList.add("success-message");

  input.parentNode.insertBefore(successMessageDiv, input.nextSibling);
  userEmailInput.style.borderColor = "";
}

function showErrorMessage(message) {
  // Implement your logic to show an error message below the input field.
  // For example, you can create a div element, set the error message, and add it to the DOM.
}

button.addEventListener("click", submitEmail);
