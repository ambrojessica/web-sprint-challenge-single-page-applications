import axios from 'axios';
import React, { useState } from 'react';
//import
import {Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';
import schema from './formSchema';
import * as yup from 'yup';

const intialFormValues = {
  name: '',
  size: '',
  sauce: '',
  toppings: false,
  instructions: '',
}

const formErrors = {
  name: '',
  size: '',
  sauce: '',
  instructions: ''
}

const App = () => {

  const [formValues, setFormValues] = useState(intialFormValues);
  const [errors, setErrors] = useState(formErrors);

  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
  }

  return (
    <div className='App'>
      <nav>
      <h1>Lambda Eats!</h1>
      <Link to="/">Home</Link>
      </nav>

      <Switch>
        <Route path="/pizza">
        <Pizza 
        values={formValues}
        change={onChange}
        errors={errors}
        submit={onSubmit}
        />
      </Route>

      <Route path="/">
        <Home />
      </Route>
      </Switch>

    </div>
  );
};
export default App;
