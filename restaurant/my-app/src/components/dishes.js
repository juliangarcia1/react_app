import React, {Component} from 'react';
import {
    Button,
    List, 
    ListItem,
    ListSubheader, 
    ListItemText, 
    ListItemIcon,
    GridList,
    GridListTile

} from '@material-ui/core';
import Restaurant from '@material-ui/icons/Restaurant'
import Dish from './dish';

import data from '../assets/data/dishes.json'

export class Dishes extends Component {
    goBack = e => {
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <h1>Dishes</h1>
                <Button variant="contained"
                color="secondary"
                onClick={this.goBack}>
                    Go Back

                </Button>
                {/* {data.dishes.map(((dish, index) => (
                    <div key={index}>
                        <div>{dish.name}</div>
                        <div>{dish.ingredients}</div>
                        <br/>
                    </div>
                )))
                } */}
                {/* <List
                    component="nav"
                    subheader={ <ListSubheader
                                    component="div">Dishes</ListSubheader>
                              }
                    >
                {data.dishes.map((dish, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>
                         <Restaurant />
                        </ListItemIcon>
                        <ListItemText inset primary={dish.name} /> 
                    </ListItem>
                    ))
                }
                </List> */}
                <GridList>
                   {data.dishes.map((dish, index) => (
                        <Dish key={index} name={dish.name}
                            ingredients={dish.ingredients} />
                    ))}
                </GridList>
            </div>
        );
    }
}

export default Dishes;