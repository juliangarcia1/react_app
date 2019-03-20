import React, { Component, Fragment}  from 'react';
import { Card, 
         CardContent, 
         List,
         ListItem,
         ListItemIcon, 
         ListItemText,
         ListSubheader}
from '@material-ui/core';

import ScatterPlot from '@material-ui/icons/ScatterPlot';

export class Flag extends Component {
    render() {
        return (
            <div>
                <h1> Bandera </h1>
            </div>
        )
    }
}

export class Ingredient extends Component {
    render() {
        return (
            <Fragment >
                <h4> Ingredientes</h4>
                <h4> Ingredientes</h4>
            </Fragment>

        )
    }
}

class Dish extends Component {

    render() {
        // const { params } = this.props.match

        return (
            <Card className="card">
                <CardContent>
                        <List 
                            component="nav"
                            subheader={
                                <ListSubheader component="div">
                                    {this.props.name}
                                </ListSubheader>
                            }
                        >
                        {this.props.ingredients.map( (ingredient, index) =>
                            (
                                <ListItem button key={index}>
                                    <ListItemIcon>
                                        <ScatterPlot />
                                    </ListItemIcon>
                                    <ListItemText inset primary={ingredient} />
                                </ListItem>
                        ))}
                        </List>
                </CardContent>
            </Card>
        )
    }
}

export default Dish;