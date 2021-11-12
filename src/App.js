import React from 'react';
//import
import {Link, Route} from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div className='App'>
      <nav>
      <h1>Lambda Eats!</h1>
      <Link to="/">Home</Link>
      </nav>

      <Route path="/">
        <Home />
      </Route>

    </div>
  );
};
export default App;
