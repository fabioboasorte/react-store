import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import TabelaHome from '../../Components/Tabela/TabelaHome';
import Formulario from '../../Components/Formulario';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

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
          window.toastOpen({ messages: [{msg:'Item removido com sucesso'}], severity: 'success' });
        }
      })
      .catch(() => window.toastOpen({ messages: [{msg:'Problema na comunicação com a Api.'}], severity: 'error' }));
  }

  submitListener = autor => {

    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: [...this.state.autores, res.data] });
          window.toastOpen({ messages: [{msg:'Novo item adicionado com sucesso!'}], severity: 'success' });
        }
      })
      .catch(() => window.toastOpen({ messages: [{msg:'Problema na comunicação com a Api.'}], severity: 'error' }));
  }

  componentDidMount() {
    
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: [...this.state.autores, ...res.data] });
        }
      })
      .catch(() => window.toastOpen({ messages: [{msg:'Problema na comunicação com a Api.'}], severity: 'error' }));
  }

  render() {

    return (
      <React.Fragment>
        <Header />
        <Container maxWidth="lg">
          <h1>ReactStore</h1>
          <TabelaHome
            autores={this.state.autores}
            removeAutor={this.removeAutor}
          />
          <Formulario submitListener={this.submitListener} />
        </Container>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home;
