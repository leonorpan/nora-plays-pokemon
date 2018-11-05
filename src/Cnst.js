const API_URL =
  'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

const POKEMON_WEEKNESSES = [
  'Bug',
  'Dark',
  'Dragon',
  'Electric',
  'Ghost',
  'Grass',
  'Ground',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Ice',
  'Psychic',
  'Rock',
  'Steel',
  'Water',
];

const FILTER_OPTIONS = [
  {
    label: 'Filter by:',
    value: '',
  },
  {
    label: 'Weakness',
    value: 'weekness',
  },
  {
    label: 'Height',
    value: 'height',
  },
];

export { POKEMON_WEEKNESSES, API_URL, FILTER_OPTIONS };
