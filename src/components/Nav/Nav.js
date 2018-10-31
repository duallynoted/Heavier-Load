import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Heavier Load</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/exercises">
            Exercises
          </Link>
          <Link className="nav-link" to="/measurements">
            Measurements
          </Link>
          <Link className="nav-link" to="/info">
            Info Page
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// class Nav extends Component {

//   render(props) {
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             </IconButton>
//             <Typography variant="h6" color="inherit" className={classes.grow}>
//               <div className="nav">
//                 <Link to="/home">
//                   <h2 className="nav-title">Heavier Load</h2>
//                 </Link>
//                 <div className="nav-right">
//                   <Link className="nav-link" to="/home">
//                     {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//                     {props.user.id ? 'Home' : 'Login / Register'}
//                   </Link>
//                   {/* Show the link to the info page and the logout button if the user is logged in */}
//                   {props.user.id && (
//                     <>
//                       <Link className="nav-link" to="/exercises">
//                         Exercises
//           </Link>
//                       <Link className="nav-link" to="/measurements">
//                         Measurements
//           </Link>
//                       <Link className="nav-link" to="/info">
//                         Info Page
//           </Link>
//                       <LogOutButton className="nav-link" />
//                     </>
//                   )}
//                   {/* Always show this link since the about page is not protected */}
//                   <Link className="nav-link" to="/about">
//                     About
//       </Link>
//                 </div>
//               </div>
//             </Typography>
//             <Button color="inherit">Login</Button>
//           </Toolbar>
//         </AppBar>
//       </div>

//     );
//   }
// }

// Nav.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// // Instead of taking everything from state, we just want the user
// // object to determine if they are logged in
// // if they are logged in, we show them a few more links 
// // if you wanted you could write this code like this:
// // const mapStateToProps = ({ user }) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
// });

// const navStyles = withStyles(styles)(Nav);

// export default connect(mapStateToProps)(navStyles);
