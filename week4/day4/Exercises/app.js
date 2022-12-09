/*
create an image
create a header with your name
create a paragraph with info about you
create all of this in JS without writing any html
*/

//create container

//THIS WILL ALLWAYS BE AN ARRAY
const megsContainer = document.getElementsByClassName("mainContainer")[0];
//Const megsContainer = document.querySelector("mainContainer");
//no need to specify [0] after if you use querySelector

//create imag
const megsImg = document.createElement("img");
megsImg.src =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80";

megsImg.height = 250;
megsImg.width = 250;

//create header
const megsHeader = document.createElement("h1");
megsHeader.innerText = "Hi i'm Meg.";

//create paragraph
const megsP = document.createElement("p");
megsP.innerText = "I'm from Ferndale and I love to travel.";

//create class names
megsImg.classList = "megImg";
megsHeader.classList = "megHeader";
megsP.classList = "megParagraph";

//append all created items to container
megsContainer.append(megsImg, megsHeader, megsP);

//log container
console.log(megsContainer);

//find three travel related images
//put in an array
//create the amount of elements that are in the array

travelArray = [];
travelArray.push(
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1642&q=80"
);
travelArray.push(
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
);
travelArray.push(
  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80"
);

for (let i = 0; i < travelArray.length; i++) {
  const travelImg = document.createElement("img");
  //strTravelImg = "tImg" + i;
  travelImg.className = "tImg";
  travelImg.height = 150;
  travelImg.width = 150;
  travelImg.src = travelArray[i];
  megsContainer.append(travelImg);
}
