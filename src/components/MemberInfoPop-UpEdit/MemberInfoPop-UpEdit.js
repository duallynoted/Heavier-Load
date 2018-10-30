import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

class MemberInfoPopUpEdit extends React.Component {
  state = {
        open: false,
        id: this.props.reduxState.user.id,
        first_name: this.props.reduxState.user.first_name,
        last_name: this.props.reduxState.user.last_name,
        height: this.props.reduxState.user.height,
        weight: this.props.reduxState.user.weight,
        gender: this.props.reduxState.user.gender,
        goal: this.props.reduxState.user.goal,
  };

handleChangeFor = propertyName => event => {
    this.setState({
        ...this.state,
        [propertyName]: event.target.value,
    });
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  updateState = () => {
    this.props.dispatch({ type: 'UPDATE_MEMBER_INFO', payload: this.state })
    console.log('hey???')
    this.handleClose();
}

  render() {  
    return (
      <div>
          
        <Button color="secondary" className="button"onClick={this.handleClickOpen}>Update Your Information</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Update Name"}</DialogTitle>
          <DialogContent>
              <Typography color="textSecondary">First Name</Typography>
            <DialogContentText>
            <input value={this.state.first_name} onChange={this.handleChangeFor('first_name')} />
            </DialogContentText>
            <Typography color="textSecondary">Last Name</Typography>
            <DialogContentText>
            <input value={this.state.last_name} onChange={this.handleChangeFor('last_name')} />
            </DialogContentText>
            <Typography color="textSecondary">Height in inches(ex:55,73)</Typography>
            <DialogContentText>
            <input value={this.state.height} onChange={this.handleChangeFor('height')} />
            </DialogContentText>
            <Typography color="textSecondary">Weight</Typography>
            <DialogContentText>
            <input value={this.state.weight} onChange={this.handleChangeFor('weight')} />
            </DialogContentText>
            <Typography color="textSecondary">Gender</Typography>
            <DialogContentText>
            <input value={this.state.gender} onChange={this.handleChangeFor('gender')} />
            </DialogContentText>
            <Typography color="textSecondary">Goal?</Typography>
            <DialogContentText>
            <input value={this.state.goal} onChange={this.handleChangeFor('goal')} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateState} color="primary" autoFocus>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

MemberInfoPopUpEdit.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};


const mapReduxStateToProps = (reduxState) => {
    return {
      reduxState,
    }
}


export default connect(mapReduxStateToProps) (withMobileDialog()(MemberInfoPopUpEdit));