import React, { Component } from 'react';
import { PokemonCardStyle } from './PokemonCard.module.css';
import { Link } from '@reach/router';

class PokemonCard extends Component {
  render() {
    if (!this.props.Item) return null;
    const Pokemon = this.props.Item;
    const path = `/pokemon/${Pokemon.id}`;
    return (
      <div style={this.props.style} className={PokemonCardStyle}>
        <img src={Pokemon.img} alt="" width="120" height="120" />
        <Link to={path}>
          <h3>{Pokemon.name}</h3>
        </Link>
      </div>
    );
  }
}

export default PokemonCard;
