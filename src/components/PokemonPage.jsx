import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonCard from './PokemonCard';
import {PokemonPageStyle} from './PokemonPage.module.css';

class PokemonPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPokemon: null,
    }
  }

  componentDidMount() {
    let currPokemon = this.props.pokemon.filter(p => p.id === parseInt(this.props.pokemonId))[0];
    this.setState({
      currentPokemon: currPokemon,
    })
  }

  render() {
    if (!this.state.currentPokemon) return null;
    return (
      <div className={PokemonPageStyle}>
        <PokemonCard Item={this.state.currentPokemon} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemonData,
  };
};


export default connect(
  mapStateToProps,
  null
)(PokemonPage);
