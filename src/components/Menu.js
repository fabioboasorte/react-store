import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpIcon from '@material-ui/icons/Help';

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	item: {
		color: 'rgba(0, 0, 0, 0.54)',
		textDecoration: 'none'
	}
});

export default function Menu() {

	const classes = useStyles();

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			
			<List>

				<ListItem>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<Link className={classes.item} to="/">
						<ListItemText primary='Home' />
					</Link>
				</ListItem>

				<ListItem>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<Link className={classes.item} to="/autores">
						<ListItemText primary='Autores' />
					</Link>
				</ListItem>

				<ListItem>
					<ListItemIcon>
						<MenuBookIcon />
					</ListItemIcon>
					<Link className={classes.item} to="/livros">
						<ListItemText primary='Livros' />
					</Link>
				</ListItem>

				<ListItem>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<Link className={classes.item} to="/sobre">
						<ListItemText primary='Sobre' />
					</Link>
				</ListItem>
				
			</List>
		</div>
	);

	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}