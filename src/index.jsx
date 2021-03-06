import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import 'react-mdl/extra/css/material.green-red.min.css';
import 'react-mdl/extra/material.js';

import App from './components/app';
import Homepage from './components/home-page';
import EventPage from './components/event-page';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Homepage} />
      <Route path=':date/:title' component={EventPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
