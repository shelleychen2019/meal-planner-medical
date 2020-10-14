import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar} from '../components';
import { AllMeals, MealsList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAllMeals } from '../api';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* Switch will render only 1 route, meals/list/:cuisine */}
        {/* <Route path="/" exact component={NavBar} /> */}
        <Route path="/meals/list" exact component={AllMeals} />
        <Route path="/meals/list/:cuisine" exact component={MealsList} />
        <Route path="/meals/create" exact component={MoviesInsert} />
        <Route path="/meals/update/:id" exact component={MoviesUpdate} />
      </Switch>
    </Router>
  )
};
export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
