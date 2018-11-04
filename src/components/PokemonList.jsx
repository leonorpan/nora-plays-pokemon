import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchPokemonByTerm,
  sortPokemonsByAttr,
  sortPokemonsByW,
} from '../store/actions';
import PokemonCard from './PokemonCard';
import PokemonListActions from './PokemonListActions';
import { PokemonListStyle } from './PokemonList.module.css';

class PokemonList extends Component {
  renderCards() {
    if (this.props.loading) {
      return <h2>One moment...fetching pokemon...</h2>
    }
    if (!this.props.pokemon.length) {
      return <h2>No pokemon found matching your criteria...</h2>
    }
    
    return this.props.pokemon.map(pokemon => 
        <PokemonCard
          key={pokemon.id + pokemon.name}
          Item={pokemon}
          style={{
            width: '260px',
            border: '1px solid #d8e9ef',
          }}
        />
    );
  }


  render() {
    return (
      <div>
        <PokemonListActions
          onTextSearch={inputString => this.props.searchByTerm(inputString)}
          onFilterWeaknessSelected={val => this.props.sortPokemonsByW(val)}
          onHeightFilterSelected={(h) => this.props.sortPokemonsByAttr(h)}
        />
        <div className={PokemonListStyle}>{this.renderCards()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon,
    loading: state.loading,
  };
};

const mapActionsToProps = dispatch => {
  return {
    searchByTerm: term => dispatch(searchPokemonByTerm(term)),
    sortPokemonsByAttr: attr => dispatch(sortPokemonsByAttr(attr)),
    sortPokemonsByW: w => dispatch(sortPokemonsByW(w)),
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PokemonList);
