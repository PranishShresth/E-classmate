import React from "react";
import "./App.css";
import Landing from "./components/Landing-page/Landing";
import Registration from "./components/Sign-up/registration";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/sign-up" component={Registration}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
