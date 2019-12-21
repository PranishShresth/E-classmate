import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Dialog } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import UploadButton from '../UploadButton/UploadButton';

const useStyles = makeStyles(theme => ({  
    button: {
        backgroundColor: theme.palette.primary.main,
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '7px',
    },
    uploadDialog: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '30vh',
      minWidth: '80vw',
      backgroundColor: theme.palette.background.paper,
    },
}));

const SimpleDialog = (props) => {
  const { onClose, open } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <Container className={classes.uploadDialog}>
        <UploadButton />
      </Container>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const UploadButtonDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>      
      <div className={classes.buttonContainer}>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    onClick={handleClickOpen}
                >
                    Upload
                </Button>
            </div>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default UploadButtonDialog;