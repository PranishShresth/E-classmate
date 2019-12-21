import React from 'react';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Fab,
    TextField 
} from '@material-ui/core/';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3vh',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
      },
    // request: {
    //     position: 'fixed',
    //     bottom: '10vh',
    //     right: '5vw',
    //     zIndex: 200,
    // },
}))

const AddPost = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Fab className={classes.request} variant="extended" onClick={handleClickOpen}>
          <AddCircleIcon className={classes.extendedIcon} />
        Request Assignment
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Request Assignment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            id="subject"
            label="Subject"
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            id="professor"
            label="Professor"
            fullWidth
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>
            Request
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPost;
