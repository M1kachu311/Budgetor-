import React, { Component } from 'react'
import './../styles/main.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// the best way to have classes to a component is jsut by using an object of css rules
const styles = {
    button: {
      margin: '100px',
      backgroundColor: '#2185d0',
      '&:hover': {
        backgroundColor: 'red',
      },
      color: '#fff',
    },
    input: {
      display: 'none',
    },
};

export class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className="mainStyle">
            <Button //this button is here temporarly, will be removed/used differently
                variant="contained" 
                className={classes.button} //here we reffer to our object of css rules
            >
                Add a budget
            </Button>
        </div>
    )
  }
}

export default withStyles(styles)(Main)
