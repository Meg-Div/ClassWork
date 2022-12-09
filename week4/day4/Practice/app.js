console.log(window);
console.log(document);

//select

const headerHi3 = document.getElementsByClassName("Vinny");
const hi = document.getElementById("hi");
console.log(headerHi3[0].innerHTML);

//queryselector takes one arguement, will either return one or all

//refer to id use #
const faculty = document.querySelector("#joe");
//refer to class use .
const faculty2 = document.querySelector(".ethan");
const jess = document.querySelector(".Jessika");
const joesDiv = document.querySelector(".JoesContainer");

//innerText update
faculty2.innerText = "the best TA";

//create

const JoesTitle = document.createElement("h2");
JoesTitle.innerText = "teacher";
JoesTitle.innerText = "JESSIKA";
const mauroP = document.createElement("p");
mauroP.innerText = "Awesome";

//append
joesDiv.append(JoesTitle);

//select
const example = document.getElementsByClassName("Vinny");
//create
const joesP = document.createElement("p");
//change
joesP.innerText = "Joe is the best";
//append
joesDiv.append(JoesTitle, mauroP);

for (let i = 0; i < travelArray.length; i++) {
  const travelImg = document.createElement("img");
  //strTravelImg = "tImg" + i;
  travelImg.className = "tImg";
  travelImg.height = 150;
  travelImg.width = 150;
  travelImg.src = travelArray[i];
  megsContainer.append(travelImg);
}

//capture a click

//create button
const button = document.createElement("button");
//update button text
button.innerText = "Click Me";
//add click response
button.addEventListener("click", () => console.log("I have been clicked."));
//("click", function)

//addEventListener("click", ()=>{})
