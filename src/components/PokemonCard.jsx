import React, { Component } from 'react';
import { PokemonCardStyle } from './PokemonCard.module.css';

class PokemonCard extends Component {
  render() {
    const Pokemon = this.props.Item;
    return (
      <div className={PokemonCardStyle}>
        <img src={Pokemon.img} alt="" width="120" height="120"/>
        <h3>{Pokemon.name}</h3>
      </div>
    );
  }
}

export default PokemonCard;
