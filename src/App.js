import React, { Component } from 'react';
import PokemonList from './components/PokemonList';
import PokemonPage from './components/PokemonPage';
import { Container, Header } from './App.module.css';
import { Router, Link } from "@reach/router";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    if (this.state.pokemons.length > 0) return;
    fetch(
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          pokemons: res.pokemon,
        });
      });
  }

  renderPokemonList() {
    return (
      <Router>
        <PokemonPage path="/pokemon/:pokemonId" />
        <PokemonList default Items={this.state.pokemons} />
      </Router>
    )
  }

  render() {
    return (
      <div className="App">
        <header className={Header}>
          <h1>Nora Plays Pokemon</h1>
        </header>
        <main className={Container}>
          {this.state.pokemons.length > 0 && this.renderPokemonList()}
        </main>
      </div>
    );
  }
}

export default App;
