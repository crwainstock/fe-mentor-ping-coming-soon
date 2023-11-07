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

One styling element that I hadn't used before was the [::placeholder pseudo-selector](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder) to style the placeholder in the input field.

This is also the first project I've built with an email validation function. I decided to try to use Regex to check the format of the text entered in the input field.

```
function isValidEmail(email) {
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
console.log(emailRegex.test(email)); // returns true or false
return emailRegex.test(email);
}
```

While this doesn't check the deliverability of the email, it checks the format of the text entered to make sure it aligns with standard email formatting.

## 👀 Demo & Live Version

Check out the live version of this component [here](https://glowing-babka-60bb1c.netlify.app/).
