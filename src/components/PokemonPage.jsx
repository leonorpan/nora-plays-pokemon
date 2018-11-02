import React, { Component } from 'react';

class PokemonPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Pokemon id:
        {this.props.pokemonId}
      </div>
    );
  }
}

export default PokemonPage;
