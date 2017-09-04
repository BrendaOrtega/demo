import React from 'react';
import HomePage from './components/home/HomePage';
import {
  Switch,
  Route
} from 'react-router-dom';
import View from './components/view/View';

// <Route path='/roster' component={Roster}/>


const Routes = () => (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/view' component={View}/>


    </Switch>
);

export default Routes;