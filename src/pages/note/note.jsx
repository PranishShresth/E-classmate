import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNote } from '../../redux/actions/note'

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        paddingTop: '25vh',
    },
}))


const Note = () => {
    const classes = useStyles();

    console.log(getNote());

    React.useEffect(() => {
        console.log('componentDidMount is useEffect in React Hooks');
    }, [])

    Note.propTypes = {
        note: PropTypes.array.isRequired
    }
    return (
    <div className={classes.container}>
        <Typography>
            This is note page.
        </Typography>
    </div>
);}

const mapStateToProps = state => ({
    note: state.note.note
});

export default connect(
    mapStateToProps, 
    { getNote }
)(Note);