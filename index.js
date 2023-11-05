const button = document.querySelector("button");
const userEmailInput = document.getElementById("email");

button.addEventListener("click", submitEmail);

let userEmail = document.getElementById("email");

const submitEmail = (event) => {
  event.preventDefault();

  // Get the value of the email input
  const userEmail = userEmailInput.value;

  if (userEmail) {
    // If the userEmail is an email address
    // submit the email address
    // show success message below input
  } else {
    // Turn input red, add error message below input
  }
};
