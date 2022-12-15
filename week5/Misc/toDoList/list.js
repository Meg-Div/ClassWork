// Create a "close" button and append it to each list item
const myList = document.getElementsByTagName("LI");

for (const i = 0; i < myList.length; i++) {
  const cat = localStorage.getItem("myCat");
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

//.remove()
//to-do list item
//wrap everything in a container and remove li and button

//local storage to persist

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");

for (const i = 0; i < close.length; i++) {
  console.log(close[i]);
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");

  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);

  li.appendChild(t);
  localStorage.setItem(1, inputValue);

  document.getElementById("myList").appendChild(li);
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";

  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

if (localStorage != null) {
  for (let value in localStorage) {
    const li = document.createElement("li");
    const inputValue = value;
    const t = document.createTextNode(inputValue);

    li.appendChild(t);
    localStorage.setItem(1, inputValue);

    document.getElementById("myList").appendChild(li);
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";

    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
}
