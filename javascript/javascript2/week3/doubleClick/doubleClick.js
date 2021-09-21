//8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
//If a double click has been detected, log out the text: "double click!"
const doubleClickButton = document.getElementById("dblclick");

doubleClickButton.addEventListener("dblclick", event => {
  console.log("double click!"); 
});