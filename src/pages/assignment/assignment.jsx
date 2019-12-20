import React from 'react';

import { Card, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
    },
    card: {
        backgroundColor: theme.palette.common.black,
    }
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
        </Card>
    </div>
    );
};
export default Assignment;