import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonListStyle } from './PokemonList.module.css';

class PokemonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonList: [].concat(this.props.Items),
      filterMode: false,
    };

    this.onTextSearch = this.onTextSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.onFilterWeaknessSelect = this.onFilterWeaknessSelect.bind(this);
  }

  onFilterWeaknessSelect(e) {
    let Weakness = e.target.value;
    let filteredPokemonList = this.props.Items.filter(pokemon => {
      return pokemon.weaknesses.filter(w => w === Weakness).length > 0;
    });
    this.setState({
      pokemonList: filteredPokemonList,
    });
  }

  onFilterSelect(e) {
    let val = e.target.value;
    if (val === 'h') {
      let filteredPokemonList = [].concat(this.props.Items);
      filteredPokemonList.sort(function(a, b) {
        let heightAToNum = parseFloat(a.height.slice(0, 3).trim());
        let heightBToNum = parseFloat(b.height.slice(0, 3).trim());
        return heightAToNum > heightBToNum;
      });

      this.setState({
        pokemonList: filteredPokemonList,
      });
    } else if (val === 'w') {
      this.setState({
        filterMode: true,
      });
    }
  }

  onTextSearch(e) {
    let input = e.target.value.trim().toLowerCase();
    let resultList = this.props.Items.filter(p => {
      let name = p.name.toLowerCase();
      let hasType = p.type.filter(pokemonType => {
        return pokemonType.toLowerCase().startsWith(input);
      });
      return name.startsWith(input) || hasType.length > 0;
    });

    this.setState({
      pokemonList: resultList,
    });
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
            <option value="w">Weakness</option>
            <option value="h">height</option>
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
          {this.state.pokemonList.map(pokemon => {
            return <PokemonCard key={pokemon.id} Item={pokemon} />;
          })}
        </div>
      </div>
    );
  }
}

export default PokemonList;
