import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class CustomTextField extends React.Component {
  
    state = {
        title: '',
    }

    saveComment = () => {
        // will save the comment to the database
    };

    handleChange = (event) => {
        this.setState({title: event.target.value})
        console.log(this.state.title)
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="filled-multiline-static"
                    label="Comment"
                    multiline
                    rows="4"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    name='title' 
                    value={this.state.title} 
                    onChange={this.handleChange.bind(this)}
                />
                {/* <button onClick={will have to save the comment to database}>Save Comment</button> */}
            </form>
        )
    }
}




CustomTextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomTextField);