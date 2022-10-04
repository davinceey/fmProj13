# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![Sign up Preview](images/sign-up-form.png)

### Links

- Solution URL: [https://github.com/davinceey/fmProj13]
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I designed using a "Mobile-first" workflow by ensuring the proper HTML markup was used. Next, I moved into CSS to enhance the layout of the project. One notable area that was quite dynamic in CSS was the area where I got to use the `input[type=text]:not(:focus):invalid`. This helped to place some properties in at that condition.
Next up, I moved into the Javascript section, where I manipulated elements using the DOM and selected all my input divs as an array and then, I iterated over them all in order to get dynamic responses as the user either fills in the right or wrong input. I achieved this by saying:
```js
const inputDivs = [...document.querySelectorAll(".input__div")];
for(let inputDiv of inputDivs){
  const input = inputDiv.querySelector("input");
}
```
This enabled me to create a proper way with which I could place conditional expressions to the user inputs by targeting the `event.target.validity/minLength/tooShort`. And all of these where done under the `input.addEventListener("invalid", (event) = >{})` which was implemented as far as one or all of the user inputs are invalid (I just learnt about the invalid event, wow!). 

This can be all I can recall in summary from this project. Special thanks to [@elaineleung](https://www.frontendmentor.io/profile/elaineleung) for her solution which showed me a clearer and simpler way of achieving this FrontEnd Mentor Project. You can check out on her work on this solution by [clicking here](https://www.frontendmentor.io/solutions/responsive-sign-up-page-using-form-validation-and-scss-8X9BC5NUd). Hope it helps you too.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

## Author

- Frontend Mentor - [@davinceey](https://www.frontendmentor.io/profile/davinceey)

## Acknowledgments

Special thanks goes to Elaine [@elaineleung](https://www.frontendmentor.io/profile/elaineleung) as her solution on this project inspired me and helped me to setup a proper code.
