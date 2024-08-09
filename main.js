/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
const myButton = document.querySelector(" ");
myButton.textContent = "click here";

let myVariable = document.querySelector("h1");
alert ("hello");

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });


const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // passing two arguments

// This function takes two values
function example(parameter1, parameter2) {
  console.log(parameter1); // Output = "Web"
  console.log(parameter2); // Output = "Development"
*/

//adding image changer using the if else condition many times 
const myImage = document.querySelector("img");
const button = document.querySelector("button");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.jpg") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  }
  
  else if(mySrc === "images/firefox2.jpg"){
    myImage.setAttribute("src", "images/firefox3.jpg");
  }

  
  else if(mySrc === "images/firefox3.jpg"){
    myImage.setAttribute("src", "images/firefox4.jpg");
  }

  
  else if(mySrc === "images/firefox4.jpg"){
    myImage.setAttribute("src", "images/firefox5.jpg");
  }
   else {
    myImage.setAttribute("src", "images/firefox-icon.jpg");
  } 
};
// *Functions code using a function to multiply numbers and output on the console screen
/*function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
button.onclick = () => {
  console.log("called");
  const result = multiply(0.5, 3);
  console.log(result);
  
};
// const myhtml = document.querySelector("myhtml");
// const myHeading = document.querySelector("html");
// myHeading.textContent = "Hello world!";
/*document.querySelector("html").addEventListener("click", ("home") {
  console.log("");
  alert("Ouch! Stop poking me!");
});*/

/*document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});*/


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
} 

myButton.onclick = () => {
  setUserName();
};