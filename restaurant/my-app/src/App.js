import React, { Component } from 'react';

import Header from './components/header'
import Dish, {Flag, Ingredient} from './components/dish'

import './styles/App.css';
// import  './styles/dish.css'; //This should be here because if in one component ti is import to all app anyway


class App extends Component {
  dish = "tacos";
  dishes =["Tacos", "Ceviche", "Paella"] 
  render() {
    return (
      <div className="App">
        <Header />
        <Dish name={this.dish} quantity="3"/>
        Yo como {this.dish}
        <ul>
          {
            this.dishes.map(dish=><li>{dish}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App
