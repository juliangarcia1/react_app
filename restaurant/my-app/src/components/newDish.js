import React, { Component } from 'react';
import { Fab, TextField } from '@material-ui/core';


import AddIcon from '@material-ui/icons/Add';

class NewDish extends Component {

    constructor() {
        super();
        this.addDish = this.addDish.bind(this);
    }
    addDish(event) {
        console.log('Add dish');
        event.preventDefault(); // Avoid reload the webpage and clean text fields, etc.
        console.log(this)
    }
    render(){
        // console.log(this);
        return(
            <form autoComplete="off" onSubmit={this.addDish}>
                <TextField 
                    label= "Platillo..."
                    type="text"
                    margin="normal"
                    variant="outlined"
                />
                <Fab color="primary" size="medium"
                    className="dish-form-icon" onClick={this.addDish}>
                    <AddIcon/>
                </Fab>
            </form>
        );
    }
}

export default NewDish;