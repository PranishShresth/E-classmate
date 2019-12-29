import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
    AppBar,
    Button,
    Toolbar,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
	},
	button: {
		paddingLeft: '1px',
		paddingRight: '1px',
	},
}));

const NewHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              E-C
            </Typography>
          </Link>    

          <div className={classes.grow} />
          <div>
            <Link to="/">
              <Button className={classes.button}>Contact</Button>
            </Link>
            <Link to="/">
              <Button className={classes.button}>About</Button>
            </Link>
            <Link to="/signin">
              <Button className={classes.button}>Signin</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NewHeader;