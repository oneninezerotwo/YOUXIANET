import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";

import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

// 从react-redux导出一个Provider组件，这个组件是用来在react激活redux使用的
// import { Provider } from 'react-redux'
// import store from './stores/store'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/home" component={Home} />
    </Switch>
    <Route exact path="/list" component={List} />
    <Route exact path="/login" component={Login} />
    {/* <Redirect to="/home" /> */}
  </Router>,
  document.getElementById("root")
);
