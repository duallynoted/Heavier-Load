import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomExerciseListPopUpEdit from '../CustomExerciseListPop-UpEdit/CustomExerciseListPop-UpEdit';
import DeleteIcon from '@material-ui/icons/Delete';
import swal from 'sweetalert2';

const styles = {
  card: {
    maxWidth: "100%",
    // minWidth: 100,
    // display: "inline-block",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
const swalWithBootstrapButtons = swal.mixin({
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: true,
})

class CustomExerciseListItem extends Component {



  deleteExercise = (exercise) => {
    swalWithBootstrapButtons({
      title: "Are you sure you want to get rid of " + exercise.title + "?",
      text: "This exercise cannot be recovered",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'No, cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.props.dispatch({ type: 'DELETE_EXERCISE', payload: exercise })
        swalWithBootstrapButtons(
          'Deleted!',
          'The exercise has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          'Cancelled',
          'Your exercise will remain in your profile',
          'error'
        )
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>

          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.exercise.title}
          </Typography>
          <Typography variant="h4" className={classes.pos} color="textSecondary">
            Weight Load:
          <br />
            {this.props.exercise.weight_load} lbs
        </Typography>
          <Typography variant="h6" component="h2">
            {this.props.exercise.rep_scheme}
          </Typography>
          <Typography component="p">
            {this.props.exercise.day_name}
            <br />
          </Typography>
          <Typography> <CustomExerciseListPopUpEdit exercise={this.props.exercise} /> </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => this.deleteExercise(this.props.exercise)} color="primary" size="small"><DeleteIcon /></Button>
        </CardActions>
      </Card>
    );
  }
}

CustomExerciseListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

const customExerciseListItemCards = withStyles(styles)(CustomExerciseListItem);

const mapStateToProps = (reduxState) => {
  return {
    reduxState,
  }
}

export default connect(mapStateToProps)(customExerciseListItemCards);

