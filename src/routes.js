import React from 'react';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import App from './containers/App/App';
import Home from './containers/Home/Home';

import AboutMe from './containers/AboutMe/AboutMe';
import Resume from './containers/Resume/Resume';
import Redirect from './components/Redirect/Redirect';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path='/AboutMe' component={AboutMe}/>
      <Route path='/Resume' component={Resume}/>
    </Route>
  </Router>
);

