import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AddPost from '../../components/AddPost/AddPost';
import EmptyPost from '../../components/EmptyPost/EmptyPost';
import OnePost from '../../components/OnePost/OnePost';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '80vh',
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
        <AddPost />
        <EmptyPost />
        <OnePost />
    </div>
    );
};
export default Assignment;