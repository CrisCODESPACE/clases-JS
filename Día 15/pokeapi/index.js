const root = document.getElementById("root");

const URL_BASE = "https://pokeapi.co/api/v2/";

async function allEndpoints() {
  const url = `${URL_BASE}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("URL not found");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// allEndpoints();

async function allPokemons() {
  const url = `${URL_BASE}pokemon`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Pokemons not found");
    }

    const data = await response.json();
    console.log(data);

    for (let pokemon of data.results) {
      const pokemonInfo = await fetch(pokemon.url);
      const pokemonData = await pokemonInfo.json();

      console.log(pokemonData);

      const pokemonName = pokemonData.name;
      const imgPokemon = pokemonData.sprites.front_shiny;

      const name = document.createElement("p");
      name.textContent = pokemonName;

      const img = document.createElement("img");
      img.src = imgPokemon;

      root.appendChild(name);
      root.appendChild(img);
    }
  } catch (error) {
    console.error(error);
  }
}

allPokemons();
