import React from 'react';
import PropTypes from 'prop-types';

import { Box, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

import NewHeader from '../../components/NewHeader/NewHeder';
import SignInForm from '../../components/SignIn/SignIn';
import SignUpForm from '../../components/SignUp/SignUp';

const useStyles = makeStyles(theme =>  ({
	root: {
		flexGrow: 1,
		height: '90vh',
	},
	top: {
		paddingTop: '14vh',
		paddingLeft: '4vw',
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
						<SignUpForm />
					</TabPanel>
				</Paper>
			</Paper>
		</div>
	);
}

export default SignIn;