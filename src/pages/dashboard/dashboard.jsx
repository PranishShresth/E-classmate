import React from "react";

import AccountCircle from "@material-ui/icons/AccountCircle";
import "./dashboard.css";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dasboard-container">
        <div className="main-wrapper">
          <div className="left-nav-bar">
            <h1>ClassName</h1>
            <hr />
            <h1>Navigate</h1>
            <ul>
              <li>Assignments</li>
              <li>Notes</li>
              <li>Chats</li>
            </ul>
          </div>
          <AppBar />
        </div>
      </div>
    );
  }
}

const AppBar = () => {
  return (
    <div class="App-bar-container">
      <header>
        <h1>E-Classmate</h1>
        <AccountCircle />
      </header>
      <div className="contents"></div>
    </div>
  );
};
