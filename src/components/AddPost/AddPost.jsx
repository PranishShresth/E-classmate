import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  TextField,
} from "@material-ui/core/";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3vh",
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
}));

const AddPost = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");

  const [professor, setProfessor] = React.useState("");

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: name,
      subject: subject,
      professor: professor,
    };
    axios
      .post("/api/posts", obj)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(obj);
  };

  return (
    <div className={classes.root}>
      <Fab
        className={classes.request}
        variant="extended"
        onClick={handleClickOpen}
      >
        <AddCircleIcon className={classes.extendedIcon} />
        Request Assignment
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            margin="dense"
            id="subject"
            label="Subject"
            fullWidth
            color="secondary"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <TextField
            margin="dense"
            id="professor"
            label="Professor"
            fullWidth
            color="secondary"
            onChange={(e) => setProfessor(e.target.value)}
            value={professor}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPost;
