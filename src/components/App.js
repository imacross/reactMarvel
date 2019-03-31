import React, { Component } from 'react';
import SearchBar from './search-bar';
import CharacterList from './character-list';
import Details from './details';
import md5 from 'md5';
import $ from 'jquery';

const API_URL = 'https://gateway.marvel.com:443/v1/public/';
const publicKey = '157a244f06e024bd65ee01a768a63e06';
const privateKey = 'a3ca645123dda0ede92255d7c0673121f88af3e3';
const ts = '1';
const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
    };
  }
  componentDidMount = () => {
    this.GetInitialChararcters();
  };

  GetInitialChararcters() {
    $.getJSON(`${API_URL}/characters?${auth}&limit=5`, result => {
      const characters = result.data.results;
      this.setState({ characters });
    });
  }
  render() {
    console.log(this.state.characters);
    return (
      <div className="container">
        <SearchBar />
        <CharacterList characters={this.state.characters} />
        <Details />
      </div>
    );
  }
}

export default App;
