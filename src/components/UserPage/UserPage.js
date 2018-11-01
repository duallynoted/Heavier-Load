import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import MemberInfoList from '../MemberInfoList/MemberInfoList';
import NewDayForm from '../NewDayForm/NewDayForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    justifyContent: 'center',

  },
});

class UserPage extends Component {
  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>

        <Paper className={classes.root} elevation={10}>
          <Typography variant="h5" component="h3">
            Welcome, {this.props.user.first_name}!
        </Typography>
          <Typography variant="h5" component="h3">
            Your goal is to: {this.props.user.goal}
          </Typography>
          <MemberInfoList />
          <Button onClick={this.logout}>Log Out</Button>
        </Paper>
      </div>
    );
  }
}

UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

const userPageStyles = withStyles(styles)(UserPage);

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(userPageStyles);

