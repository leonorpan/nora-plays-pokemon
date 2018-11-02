import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonListStyle } from './PokemonList.module.css';

class PokemonList extends Component {
  render() {
    return (
      <div className={PokemonListStyle}>
        {this.props.Items.map(pokemon => {
          return <PokemonCard key={pokemon.id} Item={pokemon} />;
        })}
      </div>
    );
  }
}

export default PokemonList;
