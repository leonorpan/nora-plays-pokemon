import React, { Component } from 'react';
import { Select } from './AppSelect.module.css';

class AppSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.Selected || '',
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(e) {
    this.setState({
      value: e.target.value,
    });
    this.props.onSelectChange(e.target.value);
  }

  render() {
    let Options = this.props.Options;
    if (!Options) return null;

    return (
      <select
        className={Select}
        value={this.state.value}
        onChange={this.onSelectChange}>
        {Options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    );
  }
}

export default AppSelect;
