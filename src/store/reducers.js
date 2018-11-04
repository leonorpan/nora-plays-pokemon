import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  FILTER_POKEMONS,
  SORT_POKEMONS_BY,
  SORT_POKEMONS_BY_WEAKNESS,
} from '../store/actions';

const INITIAL_STATE = {
  pokemonData: [],
  pokemon: [],
};

function parsePokemonHeight(heightStr) {
  return parseFloat(heightStr.slice(0, 3).trim());
}

function nameMatchesTerm(name, term) {
  return name.toLowerCase().startsWith(term);
}

function pokemonIsOfType(pTypes, type) {
  return (
    pTypes.filter(pokemonType => pokemonType.toLowerCase().startsWith(type))
      .length > 0
  );
}

function filterPokemonByWeakness(pList, weakness) {
  return pList.filter(p => p.weaknesses.filter(w => w === weakness).length > 0);
}

function sortPokemonByHeight(pList, height) {
  return pList.sort(
    (a, b) => parsePokemonHeight(a[height]) > parsePokemonHeight(b[height])
  );
}

function filterPokemonByNameOrType(pList, term) {
  return pList.filter(
    p => nameMatchesTerm(p.name, term) || pokemonIsOfType(p.type, term)
  );
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_POKEMONS:
      return {
        ...state,
        pokemonData: action.pokemon,
        pokemon: action.pokemon,
        loading: false,
      };
    case REQUEST_POKEMONS:
      return {
        ...state,
        loading: true,
      };
    case FILTER_POKEMONS:
      return {
        ...state,
        pokemon: filterPokemonByNameOrType(state.pokemonData, action.term),
      };
    case SORT_POKEMONS_BY:
      return {
        ...state,
        pokemon: sortPokemonByHeight(state.pokemonData, action.attr),
      };
    case SORT_POKEMONS_BY_WEAKNESS:
      return {
        ...state,
        pokemon: filterPokemonByWeakness(state.pokemonData, action.weakness),
      };
    default:
      return state;
  }
};

export default pokemonReducer;
