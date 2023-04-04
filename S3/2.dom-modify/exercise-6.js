const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let lista = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  let elementoLista = document.createElement("li");
  elementoLista.textContent = apps[i];
  lista.appendChild(elementoLista);
}

document.body.appendChild(lista);