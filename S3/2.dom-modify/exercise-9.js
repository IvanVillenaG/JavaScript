
let myDiv$$ = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < myDiv$$.length; i++) {
  let myP$$ = document.createElement("p");
  myP$$.textContent = "Voy dentro!";
  myDiv$$[i].appendChild(myP$$);
}