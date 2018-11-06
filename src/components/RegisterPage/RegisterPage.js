import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 'flex',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form>
          <Typography variant="h5" component="h2">
            It's Gettin' Kinda Heavy
          </Typography>
          <FormControl className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="email address"
              className={classes.textField}
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="password"
              type="password"
              name="password"
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
              margin="normal"
            />
            <Button onClick={this.registerUser} type="submit" value='Submit' color="primary">Start Lifting</Button>
          </FormControl>
        </form>
        <center>
          <Button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </Button>
        </center>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

const registerStyles = withStyles(styles)(RegisterPage)


export default connect(mapStateToProps)(registerStyles);

