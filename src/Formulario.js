import React, { Component } from 'react';

class Formulario extends Component {

  constructor(props) {
    super(props);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: ''
    }

    this.state = this.stateInicial;
  }

  inputListener = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  submitFormulario = () => {
    this.props.submitListener(this.state);
    this.setState(this.stateInicial);
  }

  render() {

    const { nome, livro, preco } = this.state;

    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <input
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={this.inputListener}
              className="validate"
            />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className="input-field col s4">
            <input
              id="livro"
              type="text"
              name="livro"
              value={livro}
              onChange={this.inputListener}
              className="validate"
            />
            <label htmlFor="livro">Livro</label>
          </div>
          <div className="input-field col s4">
            <input
              id="preco"
              type="text"
              name="preco"
              value={preco}
              onChange={this.inputListener}
              className="validate"
            />
            <label htmlFor="preco">Preço</label>
          </div>
        </div>
        <button 
          className="waves-effect waves-light indigo lighten-2 btn"
          type="button" 
          onClick={this.submitFormulario}>
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;