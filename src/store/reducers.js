import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  FILTER_POKEMONS,
  SORT_POKEMONS_BY,
  SORT_POKEMONS_BY_WEAKNESS,
  FIND_CURRENT_POKEMON_BY_NUM,
  RESET_CURRENT_POKEMON,
} from '../store/types';
import {parseHeight} from '../util/pokemon'

const INITIAL_STATE = {
  pokemonData: [],
  pokemon: [],
  current: null,
};


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
    (a, b) => parseHeight(a[height]) > parseHeight(b[height])
  );
}

function filterPokemonByNameOrType(pList, term) {
  return pList.filter(
    p => nameMatchesTerm(p.name, term) || pokemonIsOfType(p.type, term)
  );
}

function findPokemonByNum(pList, num) {
  return pList.filter(p => p.num === num)[0];
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
    case FIND_CURRENT_POKEMON_BY_NUM:
      return {
        ...state,
        current: findPokemonByNum(state.pokemonData, action.pokemonNum)
      }
    case RESET_CURRENT_POKEMON:
      return {
        ...state,
        current: null,
      }
    default:
      return state;
  }
};

export default pokemonReducer;
