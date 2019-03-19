import React, {Component} from 'react';
import {GridList} from '@material-ui/core';

import Dish from './dish';

export class Dishes extends Component {
    goBack = e => {
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <GridList>
                   {this.props.data.map((dish, index) => (
                        <Dish key={index} name={dish.name}
                            ingredients={dish.ingredients} />
                    ))}
                </GridList>
            </div>
        );
    }
}

export default Dishes;