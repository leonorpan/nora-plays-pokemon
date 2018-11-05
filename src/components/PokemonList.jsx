import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AppMessage} from './global';
import {
  searchPokemonByTerm,
  sortPokemonsByAttr,
  sortPokemonsByW,
  resetFilters,
} from '../store/actions';
import PokemonCard from './PokemonCard';
import PokemonListActions from './PokemonListActions';
import { Wrapper } from './PokemonList.module.css';

class PokemonList extends Component {
  renderCards() {
    if (this.props.loading) {
      return <AppMessage Msg={'One moment...fetching pokemon...'} />;
    }
    if (!this.props.pokemon.length) {
      return <AppMessage Msg={'No pokemon found matching your criteria...'} />;
    }

    return this.props.pokemon.map(pokemon => (
      <PokemonCard
        key={pokemon.id + pokemon.name}
        Item={pokemon}
        style={{
          width: '260px',
          border: '1px solid #d8e9ef',
        }}
      />
    ));
  }

  render() {
    return (
      <div>
        <PokemonListActions
          onReset={() => this.props.resetFilters()}
          onTextSearch={inputString => this.props.searchByTerm(inputString)}
          onFilterWeaknessSelected={val => this.props.sortPokemonsByW(val)}
          onHeightFilterSelected={h => this.props.sortPokemonsByAttr(h)}
        />
        <div className={Wrapper}>{this.renderCards()}</div>
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
    resetFilters: () => dispatch(resetFilters()),
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PokemonList);
