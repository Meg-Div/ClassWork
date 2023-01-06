const userName = document.querySelector(".userName");
userName.addEventListener("input", () => console.log());

const firstName = document.querySelector(".firstName");
firstName.addEventListener("input", () => console.log());

const lastName = document.querySelector(".lastName");
lastName.addEventListener("input", () => console.log());

const date = document.querySelector(".date");
date.addEventListener("input", () => console.log());
//date formatted

const radio = document.querySelector(".radio");
radio.addEventListener("input", () => console.log());
//on or off

const updateValue = (e) => {
  console.log(e.target.value);
};
