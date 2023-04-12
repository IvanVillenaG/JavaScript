const pokedex = document.querySelector(".pokedex");

const url = async () => {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const datos = await respuesta.json();
  return datos.results;
}; // Obtenemos los datos de los 151 pokemons. Results contiene información básica de los pokemon.

const PokemonData = async (pokemon) => {
  const respuesta = await fetch(pokemon.url);
  const datos = await respuesta.json();
  return {
    id: datos.id,
    nombre: datos.name,
    imagen: datos.sprites.front_default,
  };
};// Se vuelve a hacer una llamada y PokemonData recibe un objeto de pokemon que contiene la URL de cada pokemon, con fetch recogemos la informacion de dentro. Se crea un objeto con los nuevos datos.

const displayPokemon = (pokemon) => {
  pokedex.innerHTML = "";
  pokemon.forEach((pokemon) => {
    pokedex.innerHTML += `
      <li>
        <div class="tarjeta">
          <img src="${pokemon.imagen}"/>
          <p>${pokemon.nombre}</p>
          <p># ${pokemon.id}</p>
        </div>
      </li>
    `;
  });
}; // Displaypokemon recibe el arrayd e objetos pokemon, luego itera sobre cada objeto y añade un string al HTML por su imagen, nombre e ID

const buscarPokemon = (pokemon, filtro) => {
  let filteredPokemon = pokemon.filter((pokemon) =>
    pokemon.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  displayPokemon(filteredPokemon);
}; // Definimos funcion buscarPokemon y le damos dos argumentos, el arrayd e objetos pokemon y un filtro, itera sobre cada objeto y devuelve los que cumple la condicion de su .nombre = filtro. Luego llamamos a la funcion que nos dibuja los pokemon pasandoles el filtro para que nos dibuje los filtrados.

const cargarPokedex = async () => {
  const pokemonData = await url();
  const pokemon = await Promise.all(pokemonData.map(PokemonData));
  displayPokemon(pokemon);
  const input = document.querySelector("#buscarInput");
  input.addEventListener("input", (event) => {
    buscarPokemon(pokemon, event.target.value);
  });
}; // Nuestra funcion de inicialización donde añadimos las funciones, llamamos a la funcion url y la guardamos en pokemonData. Despues llamamos a todos pokemon con promise.all con sus imagenes, nombre e ID y los almacenamos en la variable pokemon. Después "dibujamos" todos esos pokemons. Luego seleccionamos nuestro input de busqueda y le asignamos un evento y llama a la funcion buscarPokemon, el array de objetos pokemon y el valor que el usuario ha puesto en el input. La función filtra el contenido y nos muestra los pokemon que contengan ese valor.

cargarPokedex();

