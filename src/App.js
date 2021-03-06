import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import PokemonList from './components/PokemonList';
import PokemonPage from './components/PokemonPage';
import { fetchPokemon } from './store/actions';
import { Container, Header } from './App.module.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (!this.props.pokemonData.length) {
      dispatch(fetchPokemon());
    }
  }

  renderPokemonList() {
    return (
      <Router>
        <PokemonPage path="/pokemon/:pokemonId" />
        <PokemonList default Items={this.props.pokemon} />
      </Router>
    );
  }

  render() {
    return (
      <div className="App">
        <header className={Header}>
          <h1>Nora Plays Pokemon</h1>
        </header>
        <main className={Container}>{this.renderPokemonList()}</main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { pokemon, pokemonData } = state;

  return {
    pokemonData,
    pokemon,
  };
};

export default connect(mapStateToProps)(App);
