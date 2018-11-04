import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import PokemonCard from './PokemonCard';
import {
  PokemonPageStyle,
  PokemonInfoStyles,
  PokemonEvStyles,
} from './PokemonPage.module.css';
import { findCurrentPokemonByNum, resetCurrentPokemon } from '../store/actions';

function getEvolutions(ev) {
  return ev ? ev.map(ne => ne.num) : [];
}

const PokemonInfo = ({ Pokemon }) => {
  return (
    <div className={PokemonInfoStyles}>
      <img src={Pokemon.img} alt="" width="60" height="60" />
      <h4>{Pokemon.name}</h4>
    </div>
  );
};

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
    this.props.resetCurrentPokemon();
  }

  renderRelatedGenerations(pokemon) {
    const prev = getEvolutions(pokemon.prev_evolution);
    const next = getEvolutions(pokemon.next_evolution);
    const evs = prev.concat(next);
    return this.props.pokemon
      .filter(p => evs.indexOf(p.num) > -1)
      .map(p => <PokemonInfo key={p.num} Pokemon={p} />);
  }

  render() {
    const Pokemon = this.props.current;
    if (!Pokemon) return null;
    return (
      <div className={PokemonPageStyle}>
        <Link to={'../'}>Back</Link>
        <PokemonCard Item={Pokemon} />
        <div className={PokemonEvStyles}>
          <h3>Evolutions:</h3>
          {this.renderRelatedGenerations(Pokemon)}
        </div>
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
