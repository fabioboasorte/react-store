import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {

	return <MuiAlert elevation={4} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({

	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

const Toast = () => {

	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const initialData = {
		messages: [
			{ msg: '.' }
		],
		severity: 'success'
	};

	const [data, setData] = useState(initialData);

	const handleOpen = (props) => {

		if (!props) {
			return
		}

		setData(props);
		setOpen(true);
	}

	const handleClose = (event, reason) => {

		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	}

	window.toastOpen = handleOpen;

	return (
		<div className={classes.root}>
			{data.messages.map((item, index) => (
				<Snackbar 
					style={{marginBottom:60*index+'px'}}
					key={index}
					open={open} 
					autoHideDuration={3000} 
					onClose={handleClose}
					anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
						<Alert severity={data.severity} onClose={handleClose}>
							{item.msg
						}</Alert>
				</Snackbar>
			))}
		</div>
	);
}

export default Toast;

{/* 
<Button variant="outlined" onClick={this.props.handleOpen}>
Open success snackbar
</Button> 
<Alert severity="error">This is an error message!</Alert>
<Alert severity="warning">This is a warning message!</Alert>
<Alert severity="info">This is an information message!</Alert>
<Alert severity="success">This is a success message!</Alert>
*/}