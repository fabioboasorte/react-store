import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import Tabela from '../../Components/Tabela';
import Formulario from '../../Components/Formulario';
import Header from '../../Components/Header';

import PopUp from '../../Utils/PopUp';
import ApiService from '../../Utils/ApiService';


class Home extends Component {

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
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ autores: [...autoresAtualizado] })
          PopUp.show('success', 'Item removido com sucesso');
        }
      })
      .catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
  }

  submitListener = autor => {

    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: [...this.state.autores, autor] });
          PopUp.show('success', 'Autor adicionado com sucesso!');
        }
      })
      .catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: [...this.state.autores, ...res.data] });
        }
      })
      .catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
  }

  render() {

    return (
      <React.Fragment>
        <Header />
        <Container maxWidth="lg">
          <h1>ReactStore</h1>
          <Tabela
            autores={this.state.autores}
            removeAutor={this.removeAutor}
          />
          <Formulario submitListener={this.submitListener} />
        </Container>
      </React.Fragment>
    )
  }
}

export default Home;
