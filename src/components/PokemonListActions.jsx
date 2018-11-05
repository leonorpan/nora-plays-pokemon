import React, { Component } from 'react';
import { POKEMON_WEEKNESSES, FILTER_OPTIONS } from '../Cnst';
import { AppSelect, AppSearchInput } from './global';
import {
  PokemonListActionsStyle,
  ResetBtn,
} from './PokemonListActions.module.css';

class PokemonListActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterMode: false,
    };

    this.onFilterTypeSelect = this.onFilterTypeSelect.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  onFilterTypeSelect(val) {
    if (!val) return this.props.onReset();
    if (val === 'height') {
      this.props.onHeightFilterSelected(val);
    } else if (val === 'weekness') {
      this.setState({
        filterMode: true,
      });
    }
  }

  resetFilters() {
    this.setState({
      filterMode: false,
    });
    this.props.onReset();
  }

  render() {
    return (
      <div className={PokemonListActionsStyle}>
        <AppSearchInput
          Placeholder="Search pokemon by type or name"
          onInputChange={val => this.props.onTextSearch(val)}
        />
        <AppSelect
          onSelectChange={this.onFilterTypeSelect}
          Options={FILTER_OPTIONS}
        />
        {this.state.filterMode && (
          <AppSelect
            onSelectChange={this.props.onFilterWeaknessSelected}
            Options={POKEMON_WEEKNESSES.map(w => {
              return {
                label: w,
                value: w,
              };
            })}
          />
        )}
        <button className={ResetBtn} onClick={() => this.resetFilters()}>
          Reset filters
        </button>
      </div>
    );
  }
}

export default PokemonListActions;
