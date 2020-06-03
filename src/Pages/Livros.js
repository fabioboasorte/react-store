import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
import PopUp from '../Utils/PopUp';
import ApiService from '../Utils/ApiService';
import TabelaSimples from '../Components/Tabela/TabelaSimples';
import Container from '@material-ui/core/Container';
import Footer from '../Components/Footer';

class Livros extends Component {

	constructor(props) {
		super(props);
		this.state = { data: [] }
	}

	componentDidMount() {
		ApiService.ListaLivros()
			.then(res => {
				if (res.message === 'success') {
					this.setState({ data: [...this.state.data, ...res.data] });
				}
			})
			.catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
	}

	render() {

		return (
			<Fragment>
				<Header />
				<Container maxWidth="lg">
					<h1>Livros</h1>
					<TabelaSimples
						titulo='Livros'
						field='livro'
						dados={this.state.data}
					/>
					<Footer />
				</Container>
			</Fragment>
		);
	}
}

export default Livros;