import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
import PopUp from '../Utils/PopUp';
import ApiService from '../Utils/ApiService';

const TableBody = props => {
  
  const linhas = props.autores.map((linha) => {
    return (
      <tr key={linha.id}>
        <td>{linha.nome}</td>
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
      nomes: [],
      titulo: 'Autores'
    }
  }

  componentDidMount() {

    ApiService.ListaAutores()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ nomes : [...this.state.nomes, ...res.data] });
        }
      })
      .catch(() => PopUp.show('error', 'Problema na comunicação com a Api.'));
  }

	render() {
		
		return (
			<Fragment>
				<Header />
				<div className="container">
					<h1>Autores</h1>
					<table className="highlight centered">
						<thead>
							<tr>
								<th>Autores</th>
							</tr>
						</thead>
						<TableBody autores = { this.state.nomes } />
					</table>
				</div>
			</Fragment>
		);
	}
}

export default Autores;