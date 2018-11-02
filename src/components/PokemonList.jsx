import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonListStyle } from './PokemonList.module.css';

class PokemonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonList: [].concat(this.props.Items),
    };

    this.onTextSearch = this.onTextSearch.bind(this);
  }

  onTextSearch(e) {
    let input = e.target.value.trim().toLowerCase();
    let filteredList = this.state.pokemonList.filter(p => {
      let name = p.name.toLowerCase();
      let hasType = p.type.filter(pokemonType => {
        return pokemonType.toLowerCase().startsWith(input);
      });
      return name.startsWith(input) || hasType.length > 0;
    });

    this.setState({
      pokemonList: filteredList,
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
