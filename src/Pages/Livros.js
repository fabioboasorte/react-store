import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
import PopUp from '../Utils/PopUp';
import ApiService from '../Utils/ApiService';

const TableBody = props => {

	const linhas = props.livros.map((linha) => {
		return (
			<tr key={linha.id}>
				<td>{linha.livro}</td>
			</tr>
		)
	});

	return (
		<tbody>
			{linhas}
		</tbody>
	);
}

class Autores extends Component {

	constructor(props) {
		super(props);

		this.state = {
			livros: [],
			titulo: 'Livros'
		}
	}

	componentDidMount() {
		ApiService.ListaLivros()
			.then(res => {
				if (res.message === 'success') {
					this.setState({ livros : [...this.state.livros, ...res.data] });
				}
			})
			.catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
	}

	render() {

		return (
			<Fragment>
				<Header />
				<div className="container">
					<h1>Livros</h1>
					<table className="highlight centered">
						<thead>
							<tr>
								<th>Livros</th>
							</tr>
						</thead>
						<TableBody livros={this.state.livros} />
					</table>
				</div>
			</Fragment>
		);
	}
}

export default Autores;