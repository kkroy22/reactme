import React from 'react';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import App from './containers/App/App';
import Home from './containers/Home/Home';

import AboutMe from './containers/AboutMe/AboutMe';
import Resume from './containers/Resume/Resume';
import Redirect from './components/Redirect/Redirect';

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path='/AboutMe' component={AboutMe}/>
      <Route path='/Resume' component={Resume}/>
      <Route path="/owcsx" component={ Redirect } loc="http://www.owcsx.science"/>
    </Route>
  </Router>
);

