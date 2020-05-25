import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './assets/App.css';
import Tabela from './components/Tabela';
import Formulario from './components/Formulario';
import Header from './components/Header';
import PopUp from './components/PopUp';

import ApiService from './ApiService';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: [],
    };
  }

  removeAutor = id => {
    const { autores } = this.state;

    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id
    });

    ApiService.RemoveAutor(id)
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if(res.message === 'deleted') {
          this.setState({autores : [...autoresAtualizado]})
          PopUp.show('success', 'Item removido com sucesso');
        }
      })
      .catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
  }

  submitListener = autor => {

    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if(res.message === 'success') {
          this.setState({ autores : [...this.state.autores, autor] });
          PopUp.show('success', 'Autor adicionado com sucesso!');
        }
      })
      .catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if(res.message === 'success') {
          this.setState({autores : [...this.state.autores, ...res.data]});
        }
      })
      .catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
  }

  render() {

    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>ReactStore</h1>
          <Tabela 
            autores = { this.state.autores } 
            removeAutor = { this.removeAutor } 
          />
          <Formulario submitListener = { this.submitListener } />
        </div>
      </Fragment>
    )
  }
}

export default App;
