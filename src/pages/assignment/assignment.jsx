import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import EmptyPost from '../../components/EmptyPost/EmptyPost';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
    },
    card: {
        backgroundColor: theme.palette.common.black,
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.main,
    },
    buttonContainer: {
        marginLeft: '24vw',
        marginBottom: '11px',
    },
}));

const Assignment = () => {
    
    const classes = useStyles();
    return (
    <div className={classes.container}>        
        <EmptyPost />
    </div>
    );
};
export default Assignment;