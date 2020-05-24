import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Data from './Data';
import Formulario from './Formulario';
import Header from './Header';

class App extends Component {

  state = {
    autores: Data().autores,
  };

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
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
