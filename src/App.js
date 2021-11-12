import React from 'react';
//import
import {Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';

const App = () => {
  return (
    <div className='App'>
      <nav>
      <h1>Lambda Eats!</h1>
      <Link to="/">Home</Link>
      </nav>

      <Switch>
        <Route path="/pizza">
        <Pizza />
      </Route>

      <Route path="/">
        <Home />
      </Route>
      </Switch>

    </div>
  );
};
export default App;
