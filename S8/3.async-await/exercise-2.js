const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await response.json();
    console.log(characters);
};

getCharacters ();