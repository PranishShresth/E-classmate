import React from 'react';

import {
  Button,
  Checkbox,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useForm from '../../hooks/useForm';

const useStyles = makeStyles(theme => ({
	tos: {
		marginRight: '10vw',
	},
	signButton: {
		marginBottom: '10px',
    marginRight: '20vw',
	},
	textField: {
		marginBottom: '10px',
	},
}));


const SignInForm = () => {
  const signInFunction = () => {
    console.log('usu');
  };

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);


  let { inputs, handleSubmit, handleInputChange } = useForm({}, signInFunction);
  
	const handleCheck = event => {
    setChecked(event.target.checked);
  };

  return (
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
          value={inputs.password}
          label="Password"
          type="password"
          name="password"
          required
          fullWidth
        />
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
        <Button 
          className={classes.signButton}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
        <Button className={classes.signButton} variant="contained">
          Sign In with Google
        </Button>
      </div>
    </form>
  )
};

export default SignInForm;