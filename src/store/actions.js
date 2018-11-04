export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';
export const FILTER_POKEMONS = 'FILTER_POKEMONS';
export const SORT_POKEMONS_BY = 'SORT_POKEMONS_BY';
export const SORT_POKEMONS_BY_WEAKNESS = 'SORT_POKEMONS_BY_WEAKNESS';

const requestPokemons = () => ({
  type: REQUEST_POKEMONS,
  loading: true,
});

const receivePokemons = ({ pokemon }) => ({
  type: RECEIVE_POKEMONS,
  pokemon: pokemon,
  receivedAt: Date.now(),
  loading: false,
});

const sortPokemonsBy = attr => ({
  type: SORT_POKEMONS_BY,
  attr,
});

const sortPokemonsByWeekness = w => ({
  type: SORT_POKEMONS_BY_WEAKNESS,
  weakness: w,
});

const filterPokemons = str => ({
  type: FILTER_POKEMONS,
  term: str,
});

const fetchPokemon = () => dispatch => {
  dispatch(requestPokemons());
  return fetch(
    `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
  )
    .then(response => response.json())
    .then(json => dispatch(receivePokemons(json)));
};

const searchPokemonByTerm = str => {
  return filterPokemons(str);
};

const sortPokemonsByAttr = attr => {
  return sortPokemonsBy(attr);
};

const sortPokemonsByW = w => {
  return sortPokemonsByWeekness(w);
};

export {
  fetchPokemon,
  searchPokemonByTerm,
  sortPokemonsByAttr,
  sortPokemonsByW,
};
