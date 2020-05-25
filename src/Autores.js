import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PopUp from './components/PopUp';

import Data from './Data';

const TableBody = props => {
  
  const linhas = props.autores.map((linha, index) => {
    return (
      <tr key={index}>
        <td width="80%">{linha.nome}</td>
        <td width="20%">
          <button className="waves-effect waves-light indigo lighten-2 btn"
            onClick = {() => { props.removeItem(index) }}>
            Remover
          </button>
        </td>
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

	state = {
    autores: Data().autores,
	};
	
	removeItem = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        if (posAtual === index) {
          PopUp.exibeMensagem('error', 'Item removido com sucesso');
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
					<h1>Autores</h1>
					<table className="highlight">
						<thead>
							<tr>
								<th width="80%">Autores</th>
								<th width="20%">Remover</th>
							</tr>
						</thead>
						<TableBody 
							autores = { this.state.autores } 
							removeItem = { this.removeItem } 
						/>
					</table>
				</div>
			</Fragment>
		);
	}
}

export default Autores;