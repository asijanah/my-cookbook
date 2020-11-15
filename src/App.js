import './App.css';
import React, { useState, } from 'react';
import './Example'
import Example from './Example';
import Header from './Header';
import CookBook from './CookBook';
import Registration from './Registration';
import NewRecipe from './NewRecipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import cardsData from './cardsData'
import SearchComponent from './SearchComponent'
import LoginForm from './LoginForm'
import RecipePage from './RecipePage'

function App() {

  return (

    <Router>
      <div className="container-fluid">
        {/* <Example /> */}
        <Header />
        {/* <SearchComponent/> */}
        <RecipePage />
        <Switch>
          {/* <div className="row">
          <Route path="/" exact component={CookBook} />
          </div>
          <Route path="/registration" component={Registration} />
          <Route path="/newrecipe" component={NewRecipe} /> */}
          {/* <LoginForm path="login" component={LoginForm} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
