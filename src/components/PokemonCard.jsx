import React, { Component } from 'react';
import { Link } from '@reach/router';
import {
  PokemonCardStyle,
  PokemonCardImage,
  PokemonTitleLink,
  PokemonTagStyles,
  PokemonMetaStyle,
} from './PokemonCard.module.css';
import { getEvolutionsStage } from '../util/pokemon';

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
        <hr />
        <div>
          {Pokemon.type.map(type => (
            <div className={PokemonTagStyles} key={type}>
              {type}
            </div>
          ))}
        </div>
        <div className={PokemonMetaStyle}>
          <p>Evolution stage: {getEvolutionsStage(Pokemon)}</p>
          <p>Height: {Pokemon.height}</p>
          <p>Weight: {Pokemon.weight}</p>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
