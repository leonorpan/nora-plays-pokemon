import React, { Component } from 'react';
import { PokemonCardStyle, PokemonCardImage, PokemonTitleLink, PokemonTagStyles, PokemonMetaStyle } from './PokemonCard.module.css';
import { Link } from '@reach/router';

function getEvolutionStage(pokemon) {
  if (pokemon.next_evolution && pokemon.prev_evolution ) {
    return 2
  } else if (pokemon.next_evolution) {
    return 1
  } else {
    return 3
  }
}

class PokemonCard extends Component {
  render() {
    if (!this.props.Item) return null;
    const Pokemon = this.props.Item;
    const path = `/pokemon/${Pokemon.num}`;
    return (
      <div style={this.props.style} className={PokemonCardStyle}>
        <img src={Pokemon.img} alt="" className={PokemonCardImage} />
        <Link to={path} className={PokemonTitleLink}>
          <h3>{Pokemon.name}</h3>
        </Link>
        <hr></hr>
        <div>
          {Pokemon.type.map((type) => {
            return <div className={PokemonTagStyles} key={type}>{type}</div>
          })}
        </div>
        <div className={PokemonMetaStyle}>
          <p>Evolution stage: {getEvolutionStage(Pokemon)}</p>
          <p>Height: {Pokemon.height}</p>
          <p>Weight: {Pokemon.weight}</p> 
        </div>
      </div>
    );
  }
}

export default PokemonCard;
