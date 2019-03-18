import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

export class Dishes extends Component {
    goBack = e => {
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <h1>Dishes</h1>
                <Button variant="contained"
                color="primaray"
                onClick={this.goBack}>
                    Go Back
                </Button>
            </div>
        );
    }
}

export default Dishes;