import React from 'react';
import { Router,Route,hashHistory,IndexRoute } from 'react-router';

import Main from '../containers/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

export default (
     <Router history = { hashHistory}>
         <Route path="/" component={ Main }>
             <IndexRoute component= { Home }/>
             <Route path="Profile(/:username)" component={ Profile }/>
         </Route>
     </Router>
 )

