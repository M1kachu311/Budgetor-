import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

  class SimpleSelect extends React.Component {
    state = {
      month: '',
    //   name: '',
    //   labelWidth: 0,
    };
  
    // componentDidMount() {
    //   this.setState({
    //     // labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    //   });
    // }
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="month-simple">Select a Month</InputLabel>
            <Select
              value={this.state.month}
              onChange={this.handleChange}
              inputProps={{
                name: 'month',
                id: 'month-simple',
              }}
            >
              <MenuItem value={0}>January</MenuItem>
              <MenuItem value={1}>February</MenuItem>
              <MenuItem value={2}>March</MenuItem>
              <MenuItem value={3}>April</MenuItem>
              <MenuItem value={4}>May</MenuItem>
              <MenuItem value={5}>June</MenuItem>
              <MenuItem value={6}>Jully</MenuItem>
              <MenuItem value={7}>August</MenuItem>
              <MenuItem value={8}>September</MenuItem>
              <MenuItem value={9}>October</MenuItem>
              <MenuItem value={10}>November</MenuItem>
              <MenuItem value={11}>December</MenuItem>
            </Select>
          </FormControl>
        </form>
    );
  }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(SimpleSelect);
  
