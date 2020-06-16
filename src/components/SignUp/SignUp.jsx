import React from 'react';

import {
  Button,
  TextField  
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import useForm from '../../hooks/useForm';

const useStyles = makeStyles(theme => ({
	button: {
		marginBottom: '10px',
		marginRight: '20vw',
	},
	textField: {
		marginBottom: '10px',
	},
}))

const SignUpForm = () => {
  const classes = useStyles();

  const signUpFunction = (inputs) => {
  };

  let { inputs, handleSubmit, handleInputChange } = useForm({}, signUpFunction);
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
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
  )
};

export default  SignUpForm;