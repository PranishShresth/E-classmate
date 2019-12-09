import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import Header from "./components/Header/header";
import Landing from "./pages/landing/landing";
import Registration from "./pages/registration/registration";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./pages/404/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Registration} />
          <Route exact component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
