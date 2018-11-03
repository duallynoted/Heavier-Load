import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
      this.props.history.push('/home')
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="log-in">
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form>
          <Typography variant="h4" component="h3">
            Login
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
            <Button onClick={this.login} type="submit" value='Submit' color="secondary">Login</Button>
          </FormControl>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
          >
            <Typography variant="h5">
              REGISTER
                     </Typography>
          </button>
        </center>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

const loginStyles = withStyles(styles)(LoginPage)

const loginRouterStyles = withRouter(loginStyles)

export default connect(mapStateToProps)(loginRouterStyles);
