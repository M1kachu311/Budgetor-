import React, { Component } from 'react'
// import './../styles/main.css';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import RecipeReviewCard from './../Card';
import MuiVirtualizedTable from './../BudgetTable';
import CustomizedTable from './../ProductList';


// the best way to have classes to a component is by using an object of css rules
const styles = {
    button: {
      margin: '100px',
      backgroundColor: '#2185d0',
      '&:hover': {
        backgroundColor: '#1678c2',
      },
      color: '#fff',
    },
    input: {
      display: 'none',
    },
    main: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
};

export class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.main}>
            <RecipeReviewCard title="February's Budget">
                {/* <MuiVirtualizedTable /> not in use for now */}
                <CustomizedTable /> 
            </RecipeReviewCard>
            <RecipeReviewCard title="Statistics For February"/>
            {/* <Button //this button is here temporarly, will be removed/used differently
                variant="contained" 
                className={classes.button} //here we reffer to our object of css rules
            >
                Add a budget
            </Button> */}
        </div>
    )
  }
}

export default withStyles(styles)(Main)
