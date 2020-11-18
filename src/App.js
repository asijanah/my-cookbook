import './App.css';
import React, { useState, } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './Example'
import Example from './Example';
import Header from './Header';
import Registration from './Registration';
import NewRecipe from './NewRecipe';
import LoginForm from './LoginForm'
import RecipePage from './RecipePage'
import SearchAndCook from './SearchAndCook'

function App() {

  return (

    <Router>
      <div className="container-fluid">
        {/* <Example /> */}
        <Header />
        <Switch>
        <Route path="/" exact component={SearchAndCook} />

          <Route path="/registration" component={Registration} />
          <Route path="/newrecipe" component={NewRecipe} />
          <LoginForm path="login" component={LoginForm} />
          <Route path="/recipe/:id" component={RecipePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
