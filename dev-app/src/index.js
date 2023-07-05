import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import FilterDataHook from './Sanbox/FilterDataHook';
import CustomHook from './Sanbox/CustomHook';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/filter" component={FilterDataHook} />
        <Route path="/customhooks" component={CustomHook} />
      </Switch>
    </Router>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

