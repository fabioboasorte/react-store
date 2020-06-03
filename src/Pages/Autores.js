import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
import PopUp from '../Utils/PopUp';
import ApiService from '../Utils/ApiService';
import TabelaSimples from '../Components/Tabela/TabelaSimples';
import Container from '@material-ui/core/Container';

class Autores extends Component {

	constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {

    ApiService.ListaAutores()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ data : [...this.state.data, ...res.data] });
        }
      })
      .catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
  }

	render() {
		
		return (
			<Fragment>
				<Header />
				<Container maxWidth="lg">
					<h1>Autores</h1>
          <TabelaSimples 
            titulo = 'Autores' 
            field = 'nome'
            dados = { this.state.data } 
          />
				</Container>
			</Fragment>
		);
	}
}

export default Autores;