import React from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';

import App from 'components/App/App';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
);
