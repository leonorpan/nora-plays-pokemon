import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  FILTER_POKEMONS,
  SORT_POKEMONS_BY,
  SORT_POKEMONS_BY_WEAKNESS,
  FIND_CURRENT_POKEMON_BY_NUM,
  RESET_CURRENT_POKEMON,
  RESET_FILTERS,
} from '../store/types';
import { parseHeight, isOfType } from '../util/pokemon';
import { searchMatchesValue } from '../util/global';

const INITIAL_STATE = {
  pokemonData: [],
  pokemon: [],
  current: null,
  term: null,
};

function filterPokemonByWeakness(pList, weakness) {
  return pList.filter(p => p.weaknesses.filter(w => w === weakness).length > 0);
}

function sortPokemonByHeight(pList, height) {
  return []
    .concat(pList)
    .sort((a, b) => parseHeight(a[height]) > parseHeight(b[height]));
}

function filterPokemonByNameOrType(pList, term) {
  return pList.filter(
    p => searchMatchesValue(term, p.name) || isOfType(p, term)
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
        term: action.term,
      };
    case SORT_POKEMONS_BY:
      return {
        ...state,
        pokemon: sortPokemonByHeight(state.pokemon, action.attr),
      };
    case SORT_POKEMONS_BY_WEAKNESS:
      const data = state.term ? state.pokemon : state.pokemonData;
      return {
        ...state,
        pokemon: filterPokemonByWeakness(data, action.weakness),
      };
    case FIND_CURRENT_POKEMON_BY_NUM:
      return {
        ...state,
        current: findPokemonByNum(state.pokemonData, action.pokemonNum),
      };
    case RESET_CURRENT_POKEMON:
      return {
        ...state,
        current: null,
      };
    case RESET_FILTERS:
      return {
        ...state,
        pokemon: state.pokemonData,
        term: null,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
