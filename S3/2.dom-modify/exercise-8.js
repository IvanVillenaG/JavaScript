let myP$$ = document.createElement("p");
myP$$.textContent = "Voy en medio!";

let primerDiv = document.getElementsByTagName("div")[0];
let segundoDiv = document.getElementsByTagName("div")[1];

primerDiv.parentNode.insertBefore(myP$$, segundoDiv);