import React from "react";

import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DashboardHeader from "../../components/DashboardHeader/dashboard-header";
import "./dashboard.css";

const useStyles = makeStyles(theme => ({
  tabs: {
    alignContent: "center"
  }
}));

const Dashboard = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }

  return (
    <div className="dasboard-container">
      <DashboardHeader />
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        variant="fullWidth"
      >
        <Tab label="ASSIGNMENT" {...a11yProps(0)}></Tab>
        <Tab label="CHAT" {...a11yProps(1)} />
        <Tab label="NOTE" {...a11yProps(2)} />
      </Tabs>
      <h1>ASSIGNMENT</h1>
    </div>
  );
};

export default Dashboard;
