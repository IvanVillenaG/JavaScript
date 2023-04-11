
const url = async () => {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const datos = await respuesta.json();
  return datos.results;
} //Creamos una fetch  de la pokeapi para recoger la información usando "limit" para limitarlo a 151 ahorrandonos un bucle for. devuelve una promesa con la información.


const cargarPokedex = async () => {
  const pokedex = document.querySelector('.pokedex'); // 
  const pokemons = await url(); //llamamos a la funcion url y la almacenamos en pokemons.

  
  pokemons.forEach(async (pokemon) => { //Usamos forEach para recorer pokemons y para cada elementos se hace una llamada para obtener información
    const respuesta = await fetch(pokemon.url);
    const results = await respuesta.json(); //Al macenamos los datos recogidos en la variable results

    const pokemonLi = document.createElement('li'); //Creamos el elemento <li> que nos pide el ejercicio
    const pokemonDiv = document.createElement('div');//Creamos elemento div donde queremos meter los datos recogidos y le añadimos una clase
    pokemonDiv.classList.add('tarjeta');    
    const imagenPokemon = document.createElement('img');//Creamos elemento <img> donde meteremos las imagenes de los pokemon
    const nombrePokemon = document.createElement('p');//Creamos elemento <p> donde meteremos los nombres de los pokemon y le añadimos una clase
    nombrePokemon.classList.add('nombre');
    const idPokemon = document.createElement('p');//Creamos elemento <p> donde meteremos el ID de los pokemon y le añadimos una clase
    idPokemon.classList.add('id');

    imagenPokemon.src = results.sprites.front_default; //Asignamos la url de la imagen que se desea mostrar, la información se obtiene del objeto results que contiene la respuesta en la propiedad sprites.front_default.
    nombrePokemon.innerText = results.name; //Hacemos lo mismo con el nombre de los pokemon
    idPokemon.innerText = `ID: ${results.id}`;//Hacemos lo mismo con el ID de los pokemon

    pokemonDiv.appendChild(imagenPokemon); //Dentro del elemento <div> que hemos creado metemos el elementos <img>
    pokemonDiv.appendChild(nombrePokemon); //Dentro del elemento <div> que hemos creado metemos el elementos <p>
    pokemonDiv.appendChild(idPokemon); //Dentro del elemento <div> que hemos creado metemos el elementos <p>
    pokemonLi.appendChild(pokemonDiv);  //Metemos el elemento <div> dentro del elemento <li>
    pokedex.appendChild(pokemonLi); //añadimos el elementos <li> al elemento <ol> con clase pokedex de nuestro HTML
  }); // Este proceso lo realizamos por cada uno de los 151 pokemons gracias a nuestro forEach

  const buscarInput = document.getElementById('buscarInput'); //Asignamos una variable a nuestro input
  const buscarBoton = document.getElementById('buscarBoton'); //Asignamos una variable a nuestro boton de busqueda

  buscarBoton.addEventListener('click', () => { // Creamos un evento click que se ejecute cuando le demos al boton de busqueda
    const input = buscarInput.value.toLowerCase(); // Asignamos le valor introducido en el input a una variable
    const pokemonDivs = document.querySelectorAll('.tarjeta'); // Asigamos a una variable todos los divs de nuestros pokemons

    pokemonDivs.forEach((div) => { //Realizamos un forEach en todos los divs de nuestros pokemons
      const pokemonNombre = div.querySelector('.nombre').textContent.toLowerCase(); //buscamos en cada div el elemento <p> que hace referencia al nombre del pokemon
      if (pokemonNombre.includes(input)) { //creamos un condicional para que en caso de que si el valor del input es igual al del nombre
        div.style.display = 'block'; //nos muestre el div
      } else { // y si no
        div.style.display = 'none'; // no nos muestre el div
      }
    });
  });
}

cargarPokedex() // Inicializamos la funcion de la pokédex