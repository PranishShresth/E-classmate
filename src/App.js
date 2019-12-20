import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import Landing from "./pages/landing/landing";
import Registration from "./pages/registration/registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./pages/404/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Registration} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route exact component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
