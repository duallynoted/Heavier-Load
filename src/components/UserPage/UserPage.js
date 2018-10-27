import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import MemberInfoList from '../MemberInfoList/MemberInfoList';
import NewDayForm from '../NewDayForm/NewDayForm';

class UserPage extends Component {
  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
  }

  render() {
    return (
      <div>
        <h1 id="welcome">
          Welcome, { this.props.user.first_name }!
        </h1>
        <p>Your goal is to {this.props.user.goal}</p>

        <MemberInfoList />
        <NewDayForm />
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

