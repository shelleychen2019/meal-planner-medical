import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar} from '../components';
import { Login, Favorites, AllMeals, MealsList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAllMeals } from '../api';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* Switch will render only 1 route, meals/list/:cuisine */}
        <Route path="/" exact component={Login} />
        <Route path="/meals/list/favorites" exact component={Favorites} />
        <Route path="/meals/list" exact component={AllMeals} />
        <Route path="/meals/list/:cuisine" exact component={MealsList} />
        <Route path="/meals/create" exact component={MoviesInsert} />
        <Route path="/meals/update/:id" exact component={MoviesUpdate} />
      </Switch>
    </Router>
  )
};
export default App;