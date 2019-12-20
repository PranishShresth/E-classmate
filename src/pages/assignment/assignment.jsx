import React from 'react';

import { Card, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UploadButtonDialog from '../../components/UploadButtonDialog/UploadButtonDialog';

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
        <Card className={classes.card}>
            <CardHeader
                title='Maths BPB Ex 2.2'
                subheader='Requested by @sagarmichael' 
            />
            <UploadButtonDialog />
        </Card>
    </div>
    );
};
export default Assignment;