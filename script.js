const pokedex$$ = document.querySelector(".pokedex");

const url = async () => {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const datos = await respuesta.json();
  return datos.results;
};

const PokemonData = async (pokemon) => {
  const respuesta = await fetch(pokemon.url);
  const datos = await respuesta.json();
  return {
    id: datos.id,
    nombre: datos.name,
    imagen: datos.sprites.front_default,
  };
};

const displayPokemon = (pokemon) => {
  pokedex$$.innerHTML = "";
  pokemon.forEach((pokemon) => {
    pokedex$$.innerHTML += `
      <li>
        <div class="tarjeta">
          <img src="${pokemon.imagen}"/>
          <p>${pokemon.nombre}</p>
          <p># ${pokemon.id}</p>
        </div>
      </li>
    `;
  });
};

const buscarPokemon = (pokemon, filtro) => {
  let filteredPokemon = pokemon.filter((pokemon) =>
    pokemon.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  displayPokemon(filteredPokemon);
};

const buscarInput = (pokemon) => {
  const input = document.querySelector("#buscarInput");
  input.addEventListener("input", (event) => {
    buscarPokemon(pokemon, event.target.value);
  });
};

const cargarPokedex = async () => {
  const pokemonData = await url();
  const pokemon = await Promise.all(pokemonData.map(PokemonData));
  displayPokemon(pokemon);
  buscarInput(pokemon);
};

cargarPokedex();
