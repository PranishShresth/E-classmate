import React from "react";

import 
  { Box,
    Tabs,
    Tab,
    Typography
  } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

import Assignment from '../assignment/assignment';
import Chat from '../chat/chat';
import DashboardHeader from '../../components/DashboardHeader/dashboard-header';
import Note from '../note/note';

const useStyles = makeStyles(theme => ({
  tabs: {
    alignContent: 'center',
    position: 'fixed',
    paddingTop: '12vh',
    paddingLeft: '6vw',
    backgroundColor: theme.palette.background.paper, 
    width: '100%',
    zIndex: 500,
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.white,
  },
  assignmentTab: {
    width: '46vw',
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Dashboard = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(theme);
  
  const handleChangeIndex = index => {
    setValue(index);
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  return (
    <div className={classes.root}>
        <DashboardHeader />
        <Tabs 
          className={classes.tabs} 
          value={value} 
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab className={classes.assignmentTab} label="ASSIGNMENT" {...a11yProps(0)} />
          <Tab label="CHAT" {...a11yProps(1)} />
          <Tab label="NOTE" {...a11yProps(2)} />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className={classes.assignment} value={value} index={0} dir={theme.direction}>
          <Assignment />
        </TabPanel>
        <TabPanel className={classes.chat} value={value} index={1} dir={theme.direction}>
          <Chat />
        </TabPanel>
        <TabPanel className={classes.note} value={value} index={2} dir={theme.direction}>
          <Note />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default Dashboard;