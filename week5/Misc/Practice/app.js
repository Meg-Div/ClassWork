const buttons = document.querySelectorAll("numberButtons");

for (const button of buttons) {
  button.addEventListener("click", () => console.log(e.target.innerText));
}

button.array.forEach((button) => {
  console.log("foreach", button);
});
