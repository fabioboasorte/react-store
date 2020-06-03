import React, { Component, useState } from 'react';
import FormValidator from '../Utils/FormValidator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        args: [{ min: 0, max: 99999 }],
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

      const { nome, livro, preco } = validacao;
      const campos = [nome, livro, preco];

      const camposInvalidos = campos.filter(elem => {
        return elem.isInvalid;
      });

      let messages = [];

      camposInvalidos.forEach(campo => {
        messages.push({msg: campo.message});
      });

      window.toastOpen({ messages: messages, severity: 'error' });
    }
  }

  componentDidUpdate() {
    if (this.props.liveEdit[0]) {

      this.setState({
        nome: this.props.liveEdit[0].nome,
        livro: this.props.liveEdit[0].livro,
        preco: this.props.liveEdit[0].preco,
      });

      delete this.props.liveEdit[0];
    }
  }

  render() {

    const { nome, livro, preco } = this.state;

    return (
      <form noValidate autoComplete="off">
        <h3>Inserir novo item:</h3>
        <TextField size="small" label="Nome" variant="outlined" name="nome" value={nome} onChange={this.inputListener} />
        <TextField size="small" label="Livro" variant="outlined" name="livro" value={livro} onChange={this.inputListener} />
        <TextField size="small" label="Preço" variant="outlined" name="preco" value={preco} onChange={this.inputListener} />
        <Button onClick={this.submitFormulario} variant="outlined">Salvar</Button>
      </form>
    );
  }
}

export default Formulario;