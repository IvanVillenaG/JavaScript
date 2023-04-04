let myBtn$$ = document.getElementById("btnToClick");
myBtn$$.addEventListener("click", function(event) {
  console.log("El botón fue presionado");
  console.log("Información del evento:", event);
});