import React, { Component } from 'react';
import { POKEMON_WEEKNESSES } from '../Cnst';
import {
  PokemonListActionsStyle,
  SearchInput,
  PokemonFilteringStyle,
  ResetBtn,
} from './PokemonListActions.module.css';

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
    if (!attr) return this.props.onReset();
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
      <div>
        <button className={ResetBtn} onClick={() => this.props.onReset()}>
          Reset filters
        </button>
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
              <select
                onChange={e => {
                  if (!e.target.value) return this.props.onReset();
                  this.props.onFilterWeaknessSelected(e.target.value);
                }}>
                <option value="">Filter by weekness:</option>
                {POKEMON_WEEKNESSES.map((w, i) => (
                  <option key={i + w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonListActions;
