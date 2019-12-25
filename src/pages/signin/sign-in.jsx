import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Checkbox, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

import NewHeader from '../../components/NewHeader/NewHeder';

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
	const [checked, setChecked] = React.useState(false);

	const handleCheck = event => {
    setChecked(event.target.checked);
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
						<form>
							<div className={classes.formContainer}>
								<TextField className={classes.textField} label="Email" required  fullWidth/>
								<TextField className={classes.textField} label="Password" type="password" required fullWidth />
								<div className={classes.tos}>
									<Checkbox
										checked={checked}
										onChange={handleCheck}
										value="primary"
										color="primary"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
									<Typography variant="caption">I agree with terms of services and conditions</Typography>
								</div>
								<Button className={classes.button} variant="contained" color="primary">
									Sign In
								</Button>
								<Button className={classes.button} variant="contained">
									Sign In with Google
								</Button>
							</div>
						</form>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<form>
							<div className={classes.formContainer}>
								<TextField className={classes.textField} label="Email" required  fullWidth/>
								<TextField className={classes.textField} label="Username" required fullWidth />
								<TextField className={classes.textField} label="Password" required fullWidth type="password"/>
								<Button className={classes.button} variant="contained" color="primary">
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