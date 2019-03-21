import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

import Header from './components/header';
import NewDish from './components/newDish';
import Dishes from './components/dishes'

import data from './assets/data/dishes.json'

import './styles/App.css';
// import  './styles/dish.css'; //This should be here because if in one component ti is import to all app anyway


class App extends Component {
  state = {
    dish: "tacos",
    dishes: data
  };

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/dishes")
  }
  updateDish = (index, updatedName) => {
    let newState = {...this.state}
    newState.dishes[index].name = updatedName;
    console.log(newState);
    this.setState(newState);
  };
  render() {
    return (
      <div className="App">
        <Header />
        <NewDish/>
        <Dishes data={this.state.dishes} onUpdateDish={this.updateDish}/>
      </div>
    );
  }
}

export default App
