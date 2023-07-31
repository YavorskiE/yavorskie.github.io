const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.png") {
    myImage.setAttribute("src", "images/ice-age-sid.png");
  } else {
    myImage.setAttribute("src", "images/firefox.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/*
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
*/

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};

/*
myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myVariable;
myVariable = "Bob";

document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
*/
