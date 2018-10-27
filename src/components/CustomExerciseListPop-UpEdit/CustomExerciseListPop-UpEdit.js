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

class CustomExerciseListPopUpEdit extends React.Component {
  state = {
    open: false,
    id: this.props.exercise.id,
    title: this.props.exercise.title,
    weight_load: this.props.exercise.weight_load,
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
    this.props.dispatch({type:'UPDATE_LOAD', payload:this.state});
    console.log('hey???')
    this.handleClose();
}

  render() {  
    return (
      <div>
          
        <Button color="secondary" className="button"onClick={this.handleClickOpen}>Make it Heavier</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Update Name"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            <input value={this.state.title} onChange={this.handleChangeFor('title')} />
            <input value={this.state.weight_load} onChange={this.handleChangeFor('weight_load')} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateState} color="primary" autoFocus>
              Track
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

CustomExerciseListPopUpEdit.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};


const mapReduxStateToProps = (reduxState) => {
    return {
      reduxState,
    }
}


export default connect(mapReduxStateToProps) (withMobileDialog()(CustomExerciseListPopUpEdit));