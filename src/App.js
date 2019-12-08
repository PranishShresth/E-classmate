import React from "react";
import "./App.css";

import Dashboard from './pages/dashboard/dashboard';
import Header from './components/Header/header';
import Landing from './pages/landing/landing';
import LandingParent from './pages/landing-parent/landing-parent';
import Registration from "./components/Sign-up/registration";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className="App">
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Registration} />
          <Route path="/dashboard" component={Dashboard} />
      </div>
  );
}

export default App;
