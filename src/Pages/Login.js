import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
// import PopUp from '../Utils/PopUp';
// import ApiService from '../Utils/ApiService';
import Container from '@material-ui/core/Container';

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
				</Container>
			</Fragment>
		);
	}
}

export default Login;