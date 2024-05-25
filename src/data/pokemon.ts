export const getAllPokemons = async () => {
  const MaxPokemons = 151;

  return Promise.all(
    [...Array(MaxPokemons)].map(async (_, index) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index + 1}`,
        {
          method: "GET",
        },
      );
      const pokemons = await response.json();
      return pokemons;
    }),
  );
};

export const getPokemon = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: "GET",
  });
  const pokemon = await response.json();

  return pokemon;
};
