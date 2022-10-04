const formEl = document.querySelector(".main__form");
const inputDivs = [...document.querySelectorAll(".input__div")];
const formSuccess = document.querySelector(".form-success");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  formEl.style.display = "none";
  formSuccess.style.display = "block";
});

for (let inputDiv of inputDivs) {
  const input = inputDiv.querySelector("input");
  const errorPar = inputDiv.querySelector(".err__p");

  input.addEventListener("invalid", (event) => {
    event.preventDefault();
    input.classList.add("not-valid");
    if(event.target.validity.valueMissing){
        errorPar.innerText = `${input.placeholder} cannot be empty`;
        errorMessage(errorPar);
    } else if(event.target.validity.tooShort){
        errorPar.innerText = `The value entered is not up to ${input.minLength} characters`;
        errorMessage(errorPar);
    } else if(event.target.validity.patternMismatch){
        errorPar.innerText = `Looks like this is not an email`;
        input.style.color = "hsl(0, 100%, 74%)";
        input.style.fontWeight = "600";
        errorMessage(errorPar);
    }
    input.onfocus = ()=>{
        errorPar.innerText = "";
    }
});
}


const errorMessage = (err) =>{
    err.style.display = "block";
    err.style.color = "hsl(0, 100%, 74%)";
    err.style.textAlign = "right";
    err.style.fontStyle = "italic";
    err.style.fontWeight = "500";
}
