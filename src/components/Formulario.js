import React, { Component } from 'react';
import FormValidator from '../Utils/FormValidator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Input = props => {

  const { label, name, value, onchange } = props;

  return (
    <TextField 
      size="small" 
      label={label} 
      variant="outlined" 
      name={name} 
      value={value} 
      onChange={onchange} />
  )
}

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
      validacao: this.validador.valido(),
      title: 'Inserir novo item:',
      action: 'create'
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

  cancelEdit = () => {
    this.setState(this.stateInicial);
  }

  componentDidUpdate = () => {
    if (this.props.liveEdit[0]) {

      this.setState({
        nome: this.props.liveEdit[0].nome,
        livro: this.props.liveEdit[0].livro,
        preco: this.props.liveEdit[0].preco,
        title: 'Editando item',
        action: 'edit'
      });

      delete this.props.liveEdit[0];
    }
  }

  render() {

    const { nome, livro, preco, title, action } = this.state;

    return (
      <form style={{marginBottom:'24px'}} noValidate autoComplete="off">

        <h3>
          {title}

          {
            action === 'edit' ?
            <IconButton color='#757575' onClick={this.cancelEdit}>
                <HighlightOffIcon fontSize="small" />
            </IconButton>
            : ''
          }
        </h3>

        <Input 
          label={'Nome'}
          name={'nome'}
          value={nome}
          onchange={this.inputListener}
        />

        <Input 
          label={'Livro'}
          name={'livro'}
          value={livro}
          onchange={this.inputListener}
        />

        <Input 
          label={'Preço'}
          name={'preco'}
          value={preco}
          onchange={this.inputListener}
        />
        
        <Button 
          onClick={this.submitFormulario} 
          variant="outlined">
            Salvar
        </Button>
      </form>
    );
  }
}

export default Formulario;