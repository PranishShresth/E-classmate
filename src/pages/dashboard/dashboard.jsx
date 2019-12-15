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

import DashboardHeader from '../../components/DashboardHeader/dashboard-header';
import "./dashboard.css";

const useStyles = makeStyles(theme => ({
  tabs: {
    alignContent: 'center'
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
    <div className="dasboard-container">
        <DashboardHeader />
        <Tabs 
          className={classes.tabs} 
          value={value} 
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label="ASSIGNMENT" {...a11yProps(0)} />
          <Tab label="CHAT" {...a11yProps(1)} />
          <Tab label="NOTE" {...a11yProps(2)} />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default Dashboard;