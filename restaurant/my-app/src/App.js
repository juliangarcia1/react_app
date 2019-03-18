import React, { Component } from 'react';

import Header from './components/header';
import Dish from './components/dish';

import './styles/App.css';
import NewDish from './components/newDish';
// import  './styles/dish.css'; //This should be here because if in one component ti is import to all app anyway


class App extends Component {
  dish = "tacos";
  dishes =["Tacos", "Ceviche", "Paella"] 
  render() {
    return (
      <div className="App">
        <Header />
        <NewDish/>
        <Dish name={this.dish} quantity="3"/>
        Yo como {this.dish}
        <ul>
          {
            this.dishes.map((dish, index)=>(
              <li key={index}>{dish}</li>))
          }
        </ul>
      </div>
    );
  }
}

export default App
