import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

import Header from './components/header';
import Dish from './components/dish';
import NewDish from './components/newDish';

import './styles/App.css';
// import  './styles/dish.css'; //This should be here because if in one component ti is import to all app anyway


class App extends Component {
  dish = "tacos";
  dishes =["Tacos", "Ceviche", "Paella"] 
  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/dishes")
  }
  render() {
    return (
      <div className="App">
        <Header />
        <NewDish/>
        <Button variant="contained"
        color="secondary" onClick={this.showDishes}>
        Elegir
        </Button>
      </div>
    );
  }
}

export default App
