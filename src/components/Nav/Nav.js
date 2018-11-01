import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NavDrawer from '../NavDrawer/NavDrawer';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Nav extends Component {

  render(props) {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton}>
              {this.props.user.id ? <NavDrawer /> : null}
            </IconButton>
            <Typography variant="h5" color="inherit" className={classes.grow}>
              Heavier Load
            </Typography>
            <div>
              <Link to="/home">
              </Link>
              <div className="nav-right">
                <Link className="nav-link" to="/home">
                  {/* Shows Login/Register when users aren't logged in, and shows as 'Home' when they log in */}
                  {this.props.user.id ? 'Home' : 'Login / Register'}
                </Link>
                {/* Show the link to the info page and the logout button if the user is logged in */}
                {this.props.user.id && (
                  <>
                  </>
                )}
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

const navStyles = withStyles(styles)(Nav);

export default connect(mapStateToProps)(navStyles);
