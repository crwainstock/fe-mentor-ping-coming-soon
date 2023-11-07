# Frontend Mentor - Ping coming soon page

![Design preview for the Ping coming soon page coding challenge](./project%20requirements/design/desktop-preview.jpg)

## 🌍 Overview

This little component is a beginner project from [Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da/hub).

You can see a couple of other little, cutie builds [here](https://github.com/crwainstock/fe-mentor-social-proof) and [here](https://github.com/crwainstock/fe-mentor-product-preview) and [here](https://github.com/crwainstock/fe-mentor-testimonial-grid).

## 🛠️ Technologies & Dependencies

This component was built with HTML, vanilla CSS, and vanilla JavaScript.

I also used [PerfectPixel](https://www.welldonecode.com/perfectpixel/) and the [Eye Dropper/Color Picker](https://eyedropper.org/) browser extensions to help with the build.

The social icons are from [Font Awesome](https://fontawesome.com/icons).

I deployed the component with Netlify, though, so check that out [here](https://glowing-babka-60bb1c.netlify.app/).

## 🤔 Reflection

I was excited to dive into this little build, and it was really enjoyable to put together. I've been working in React for so long, and this project was a nice little refresher for vanilla JavaScript.

### 👇 Pseudo-Selector

One styling element that I hadn't used before was the [::placeholder pseudo-selector](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder) to style the placeholder in the input field. In the quest to style the placeholder, I came across the pseudo-selector in the MDN docs. This is an example of not knowing what you don't know. 😆

I didn't know this was a thing before this build, but now I have this little tool in my werkzeugkoffer ("toolbox" in German, sorry...I'm learing German as well, and my brain is all over the place) for future builds.

### 📨 Email Validation Function

This is also the first project I've built with an email validation function. I decided to try to use Regex to check the format of the text entered in the input field.

```
function isValidEmail(email) {
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
console.log(emailRegex.test(email)); // returns true or false
return emailRegex.test(email);
}
```

While this doesn't check the deliverability of the email, it checks the format of the text entered to make sure it aligns with standard email formatting.

This is also the first time I've used the [RegExp.prototype.test() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test). As far as I understand it, the method takes a string and compares it to the Regex outlined in the function (emailRegex in this case). Then it returns true or false depending on whether the string matches the Regex.

### 👩‍🔬 Manipulating the DOM

Another new method for me was the [.insertBefore() Node method](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore). According to the MDN documentation, "The insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node."

It takes two arguments: `insertBefore(newNode, referenceNode)`

In the case of my showErrorMessage function (and the showSuccessMessage function as well) in this component, that means the errorMessageDiv created in the function is then added to the form's parent node (email-input section -- see image below for console.log of parent node) before the next sibling node (the dashboard image section).

```
function showErrorMessage() {
  removeMessages();

  let form = document.getElementById("form");
  let errorMessageDiv = document.createElement("div");
  errorMessageDiv.textContent = "Please enter a valid email address.";
  errorMessageDiv.classList.add("error-message");

  form.parentNode.insertBefore(errorMessageDiv, form.nextSibling);
}
```

The [.nextSibling property](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) allows the errorMessageDiv to be added before the next sibling node, whatever that might happen to be.

Finally, the [.parentNode property](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode) returns the parent of the specified node in the DOM tree (see image below).

![parent node console log](./project%20requirements/images/parentNode.png)

### 💭 Final Thoughts

I really enjoyed working on this component and reviewing using vanilla JavaScript to manipulate the DOM. Despite the simplicity of this build, I learned a bit some new (to me) JavaScript methods and such (as outlined above).

Thanks for reading!

## 👀 Demo & Live Version

Check out the live version of this component [here](https://glowing-babka-60bb1c.netlify.app/).
