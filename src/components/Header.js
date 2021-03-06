import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Menu from './Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		color: '#fff',
		textDecoration: 'none'
	},
}));

const Header = () => {

	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Menu />
				<Typography variant="h6" className={classes.title}>
					ReactStore
    		</Typography>
				<Button color="inherit">
					<Link className={classes.link} to="/login">
						Login/Cadastro
					</Link>
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Header;