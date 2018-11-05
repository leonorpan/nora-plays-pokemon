import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import PokemonCard from './PokemonCard';
import PokemonTeaser from './PokemonTeaser';
import { findCurrentPokemonByNum, resetCurrentPokemon } from '../store/actions';
import { getEvolutions } from '../util/pokemon';
import { PokemonPageStyle, PokemonEvStyles } from './PokemonPage.module.css';

class PokemonPage extends Component {
  componentDidMount() {
    if (this.props.pokemon.length) {
      this.props.findCurrentPokemonByNum(this.props.pokemonId);
    }
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.pokemon.length && !prevProps.current) {
      this.props.findCurrentPokemonByNum(this.props.pokemonId);
    }
  }

  componentWillUnmount() {
    //this.props.resetCurrentPokemon();
  }

  renderRelatedGenerations(pokemon) {
    const evs = getEvolutions(pokemon.prev_evolution, pokemon.next_evolution);
    return this.props.pokemon
      .filter(p => evs.indexOf(p.num) > -1)
      .map(p => <div style={{display: 'inline-block', margin: 20,}}><PokemonTeaser key={p.num} Name={p.name} Img={p.img} /></div>);
  }

  render() {
    const Pokemon = this.props.current;
    if (!Pokemon) return null;
    const hasEvolutions =
      Pokemon.prev_evolution.length || Pokemon.next_evolution.length;

    return (
      <div className={PokemonPageStyle}>
        <Link to={'../'}>Back</Link>
        <PokemonCard Item={Pokemon} />
        {hasEvolutions && (
          <div className={PokemonEvStyles}>
            <h3>Evolutions:</h3>
            {this.renderRelatedGenerations(Pokemon)}
            </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemonData,
    current: state.current,
  };
};

const mapActionsToProps = dispatch => {
  return {
    findCurrentPokemonByNum: num => dispatch(findCurrentPokemonByNum(num)),
    resetCurrentPokemon: () => dispatch(resetCurrentPokemon()),
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PokemonPage);
