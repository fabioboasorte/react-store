import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFound = () => {

	return (
		<Fragment>
			<Header />
			<div className="container">
				<h1>404 Página não encontrada</h1>
				<p>Você pode navegar por:</p>
				<ul>
					<li><Link href="/">Home</Link></li>
					<li><Link href="/autores">Autores</Link></li>
					<li><Link href="/livros">Livros</Link></li>
					<li><Link href="/sobre">Sobre</Link></li>
				</ul>
			</div>
		</Fragment>
	)
}

export default NotFound;