const input = document.querySelector(".inputfield").value;
const button = document.querySelector(".button");

//event listener
//clicks, mouse scroll, hover, onchange, stc

const speak = () => {
  //window.alert("Hello");
  const input = document.querySelector(".inputfield").value;
  console.log(input);
};

//newInput.addEventListener("click", () => console.log(speak()));
//newInput.addEventListener("mouseover", () => console.log(speak()));

button.addEventListener("click", () => speak());

//create
//select
//modify
//append

//appendchild == 1 element
//append == mutliple elements

/*
//getElementsByClassName()
//returns an array of divs in container

const queryCon = document.querySelector(".mainContainer");
//selects a specific class

const button = document.createElement("button");
//create element
button.className = "num";
//add a classname
button.innerText = numbers[i];
//update text inside element
button.addEventListener("click", rgb);
//add button to container
megsContainer.append(button);

*/
