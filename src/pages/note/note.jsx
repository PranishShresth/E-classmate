import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
    },
}))


const Note = () => {
    const classes = useStyles();
    return (
    <div className={classes.container}>
        <Typography>
            This is note page.
        </Typography>
    </div>
);}

export default Note;