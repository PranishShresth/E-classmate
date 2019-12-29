import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        paddingTop: '25vh',
    },
}));

const Chat = () => {
    const classes = useStyles();
    return (
    <div className={classes.container}>
        <Typography>
            This is chat page.
        </Typography>
    </div>
);
}
export default Chat;