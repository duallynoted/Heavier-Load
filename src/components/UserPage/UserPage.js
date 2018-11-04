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
    backgroundImage: "url(" + "https://i2.wp.com/gxmediagy.com/wp-content/uploads/2013/11/website-background-hd-backgound-widesceen-colorful-desktop-latop-white.jpg" + ")",
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '6em',
    backgroundPositionY: '1em',
    backgroundAttachment: 'fixed',
    backgroundSize: '60em',
  },
  title: {
    margin: "auto",
    maxWidth: 850,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'floatLeft',
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
          <Typography className={classes.title} variant="h5" component="h3">
            Welcome, {this.props.user.first_name}!
        </Typography>
          <Typography className={classes.title} variant="h5" component="h3">
            Your goal is to: {this.props.user.goal}
          </Typography>
          <MemberInfoList />
          <Button className={classes.title} onClick={this.logout}>Log Out</Button>
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

