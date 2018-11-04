import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import { connect } from 'react-redux';
import {
  searchPokemonByTerm,
  sortPokemonsByAttr,
  sortPokemonsByW,
} from '../store/actions';
import { PokemonListStyle } from './PokemonList.module.css';

class PokemonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterMode: false,
    };

    this.onTextSearch = this.onTextSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.onFilterWeaknessSelect = this.onFilterWeaknessSelect.bind(this);
  }

  onFilterWeaknessSelect(e) {
    let Weakness = e.target.value;
    this.props.sortPokemonsByW(Weakness);
  }

  onFilterSelect(e) {
    let attr = e.target.value;
    if (attr === 'height') {
      this.props.sortPokemonsByAttr(attr);
    } else if (attr === 'weekness') {
      this.setState({
        filterMode: true,
      });
    }
  }

  onTextSearch(e) {
    let inputString = e.target.value.trim().toLowerCase();
    this.props.searchByTerm(inputString);
  }

  render() {
    return (
      <div>
        <div>
          <input
            placeholder="Search pokemon by type or name"
            type="text"
            onKeyUp={this.onTextSearch}
          />
          <select onChange={this.onFilterSelect}>
            <option value="">Filter by:</option>
            <option value="weekness">Weakness</option>
            <option value="height">height</option>
          </select>
          {this.state.filterMode && (
            <select onChange={this.onFilterWeaknessSelect}>
              <option value="">Filter by weekness:</option>
              <option value="Electric">Electric</option>
              <option value="Rock">Rock</option>
              <option value="Fighting">Fighting</option>
              <option value="Ground">Ground</option>
              <option value="Psychic">Psychic</option>
            </select>
          )}
        </div>
        <div className={PokemonListStyle}>
          {this.props.pokemon.map(pokemon => {
            return <PokemonCard key={pokemon.id} Item={pokemon} style={{
              width: '300px',
            }}/>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { pokemon } = state;

  return {
    pokemon,
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
