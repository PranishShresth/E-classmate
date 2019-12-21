import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader } from '@material-ui/core';

import UploadButtonDialog from '../../components/UploadButtonDialog/UploadButtonDialog';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.common.black,
        marginBottom: '3vh',
    },
}))

const EmptyPost = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader
                title='Maths BPB Ex 2.2'
                subheader='Requested by @sagarmichael' 
            />
            <UploadButtonDialog />
        </Card>
    );
};

export default EmptyPost;