import React, { Component } from 'react';
import PokemonList from './components/PokemonList';
import { Container, Header } from './App.module.css';

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

  //shouldComponentUpdate()

  render() {
    return (
      <div className="App">
        <header className={Header}>
          <h1>Nora Plays Pokemon</h1>
        </header>
        <main className={Container}>
          {this.state.pokemons.length > 0 && (
            <PokemonList Items={this.state.pokemons} />
          )}
        </main>
      </div>
    );
  }
}

export default App;
