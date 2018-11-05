import React, { Component } from 'react';
import { Input } from './AppSearchInput.module.css';

class AppSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.InitialValue || '',
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  onSearchInputChange(e) {
    const val = e.target.value && e.target.value.toLowerCase().trim();
    this.setState({
      value: val,
    });
    this.props.onInputChange(val);
  }

  render() {
    const { Placeholder } = this.props;
    return (
      <input
        value={this.state.value}
        type="text"
        className={Input}
        placeholder={Placeholder || 'Search...'}
        onChange={e => this.onSearchInputChange(e)}
      />
    );
  }
}

export default AppSearchInput;
