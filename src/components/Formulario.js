import React, { Component } from 'react';
import FormValidator from '../Utils/FormValidator';
import PopUp from '../Utils/PopUp';

class Formulario extends Component {

  constructor(props) {
    super(props);

    this.validador = new FormValidator([
      {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um nome'
      },
      {
        campo: 'livro',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um livro'
      },
      {
        campo: 'preco',
        metodo: 'isInt',
        args: [{min: 0, max: 99999}],
        validoQuando: true,
        mensagem: 'Entre com um valor numérico'
      }
    ]);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
      validacao: this.validador.valido()
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

    const validacao = this.validador.valida(this.state);

    if (validacao.isValid) {

      this.props.submitListener(this.state);
      this.setState(this.stateInicial);
    }
    else {
      
      const {nome, livro, preco} = validacao;
      const campos = [nome, livro, preco];

      const camposInvalidos = campos.filter(elem => {
        return elem.isInvalid;
      });
      camposInvalidos.forEach(campo => {
        PopUp.show('error', campo.message);
      });
    }
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