import React, { Fragment } from 'react';
import Header from '../Components/Header';
import Container from '@material-ui/core/Container';

const Sobre = () => {

	return (
		<Fragment>
			<Header />
			<Container style={{lineHeight:'1.75'}} maxWidth="lg">
				<h1>Sobre</h1>
				<p>
					<b>Lorem Ipsum</b> é simplesmente uma simulação de texto da indústria tipográfica
					e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido
					 pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
					 Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração
					 eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60,
					 quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais
					 recentemente quando passou a ser integrado a softwares de editoração eletrônica
					 como Aldus PageMaker.
					</p>
				<p>
					<b>Lorem Ipsum</b> é simplesmente uma simulação de texto da indústria tipográfica
					e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido
					 pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
					 Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração
					 eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60,
					 quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais
					 recentemente quando passou a ser integrado a softwares de editoração eletrônica
					 como Aldus PageMaker.
				</p>
			</Container>
		</Fragment >
	)
}

export default Sobre;