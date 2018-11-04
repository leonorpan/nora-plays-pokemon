import React, { Component } from 'react';
import {PokemonListActionsStyle, SearchInput, PokemonFilteringStyle} from './PokemonListActions.module.css';

class PokemonListActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterMode: false,
    };

    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  onFilterSelect(e) {
    let attr = e.target.value;
    if (attr === 'height') {
      this.props.onHeightFilterSelected(attr);
    } else if (attr === 'weekness') {
      this.setState({
        filterMode: true,
      });
    }
  }

  render() {
    return (
      <div className={PokemonListActionsStyle}>
        <input
          className={SearchInput}
          placeholder="Search pokemon by type or name"
          type="text"
          onKeyUp={e =>
            this.props.onTextSearch(e.target.value.trim().toLowerCase())
          }
        />
        <div className={PokemonFilteringStyle}>
        <select onChange={this.onFilterSelect}>
          <option value="">Filter by:</option>
          <option value="weekness">Weakness</option>
          <option value="height">height</option>
        </select>
        {this.state.filterMode && (
          <select onChange={e => this.props.onFilterWeaknessSelected(e.target.value)}>
            <option value="">Filter by weekness:</option>
            <option value="Electric">Electric</option>
            <option value="Rock">Rock</option>
            <option value="Fighting">Fighting</option>
            <option value="Ground">Ground</option>
            <option value="Psychic">Psychic</option>
          </select>
        )}
        </div>
      </div>
    );
  }
}

export default PokemonListActions;