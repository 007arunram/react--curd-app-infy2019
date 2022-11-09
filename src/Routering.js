import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Crud from './Crud';
import FormSelection from './FormSelection';

class Routering extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React!!!!</h2>
          <nav className="nav01">
          <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/crud'>Crud</Link></li>
            <li><Link to='/formselection'>FormSelection</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/crud' component={Crud} />
              <Route path='/formselection' component={FormSelection} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routering;