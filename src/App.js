import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './assets/App.css';
import Tabela from './components/Tabela';
import Formulario from './components/Formulario';
import Header from './components/Header';
import PopUp from './components/PopUp';

import Data from './Data';

class App extends Component {

  state = {
    autores: Data().autores,
  };

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        if (posAtual === index) {
          PopUp.exibeMensagem('success', 'Item removido com sucesso');
        }

        return posAtual !== index;
      }),
    });
  }

  submitListener = autor => {
    this.setState({
      autores : [...this.state.autores, autor]
    })
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
          <Formulario 
            submitListener = { this.submitListener }
          />
        </div>
      </Fragment>
    )
  }
}

export default App;
