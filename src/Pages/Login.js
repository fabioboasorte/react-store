import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
// import PopUp from '../Utils/PopUp';
// import ApiService from '../Utils/ApiService';
import Container from '@material-ui/core/Container';
import Footer from '../Components/Footer';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { data: [] }
	}

	render() {

		return (
			<Fragment>
				<Header />
				<Container maxWidth="lg">
					<h1>Login</h1>
					<Footer />
				</Container>
			</Fragment>
		);
	}
}

export default Login;