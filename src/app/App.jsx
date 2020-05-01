import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Page404 from '../components/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
