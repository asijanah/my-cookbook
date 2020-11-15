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
import CardComponent from './CardComponent'

function App() {

  // const[cards,setCardes]=useState(cardsData)

  // function displayView(viewr){
  //   setCardes(
  //     cards.map(card =>{
  //       if(card.id===viewr){
  //         return{
  //           ...card,
  //           view:card.viewes+1,
  //           lastupdate:new Date()
  //         }
  //       }
  //     })
  //   )
  // }
  return (
    // cards.map(card =><CardComponent {...card} key={card.id} onView={displayView}/>)

    <Router>
      <div className="container-fluid">
        <Example />
        <Header />
        <Switch>
          <Route path="/" exact component={CookBook} />
          <Route path="/registration" component={Registration} />
          <Route path="/newrecipe" component={NewRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
