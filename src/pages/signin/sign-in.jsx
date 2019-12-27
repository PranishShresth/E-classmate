import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

import NewHeader from '../../components/NewHeader/NewHeder';
import SignInForm from '../../components/SignIn/SignIn';

const useStyles = makeStyles(theme =>  ({
	root: {
		flexGrow: 1,
		height: '90vh',
	},
	title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
	},
	top: {
		paddingTop: '14vh',
		paddingLeft: '4vw',
	},
	textField: {
		marginBottom: '10px',
	},
	button: {
		marginBottom: '10px',
		marginRight: '20vw',
	},
	tos: {
		marginRight: '10vw',
	},
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const SignIn = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [inputs, setInputs] = React.useState({});

	const handleSubmit = event => {
		if(event) {
			event.preventDefault();
		}
		console.log(inputs);
	};

	const handleInputChange = event => {
		event.persist();
		setInputs(inputs => ({
			...inputs,
			[event.target.name]: event.target.value
		}));
	};

  const handleChange = (event, newValue) => {
    setValue(newValue);
	};
	
	return (
		<div>
			<NewHeader />
			<Paper className={classes.signIn}>
				<Typography variant='h6' className={classes.top}>E-Classmate</Typography>
				<Paper className={classes.root}>
					<Tabs
						value={value}
						onChange={handleChange}
						centered
					>
						<Tab label="Sign In" {...a11yProps(0)} />
						<Tab label="Sign Up" {...a11yProps(1)} />
					</Tabs>

					<TabPanel value={value} index={0}>
						<SignInForm />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<form onSubmit={handleSubmit}>
							<div className={classes.formContainer}>
								<TextField 
									className={classes.textField}
									onChange={handleInputChange}
									value={inputs.email}
									label="Email"
									name="email"
									required
									fullWidth
								/>
								<TextField 
									className={classes.textField}
									onChange={handleInputChange}
									value={inputs.username}
									label="Username"
									name="username"
									required
									fullWidth
								/>
								<TextField 
									className={classes.textField}
									onChange={handleInputChange}
									value={inputs.password}
									label="Password"
									name="password"
									required
									fullWidth
									type="password"
								/>
								<TextField 
									className={classes.textField} 
									onChange={handleInputChange}
									value={inputs.confirmPassword}
									name="confirmPassword"
									label="Confirm Password" 
									required 
									fullWidth 
									type="password"
								/>
								<Button
									className={classes.button}
									type="submit"
									variant="contained"
									color="primary"
								>
									Sign Up
								</Button>
								<Button className={classes.button} variant="contained">
									Sign Up with Google
								</Button>
							</div>
						</form>
					</TabPanel>
				</Paper>
			</Paper>
		</div>
	);
}

export default SignIn;