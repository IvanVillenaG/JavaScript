let nuevoDiv = document.createElement("div");

for (let i = 1; i <= 6; i++) {
  let nuevaP = document.createElement("p");
  let contenidoTexto = document.createTextNode("Este es el párrafo: " + i);
  nuevaP.appendChild(contenidoTexto);
  nuevoDiv.appendChild(nuevaP);
}