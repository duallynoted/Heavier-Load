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

class CustomExerciseListItem extends Component {

  deleteExercise = (exercise) => {
    this.props.dispatch({ type: 'DELETE_EXERCISE', payload: exercise })
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
          <Typography component="p">
            {this.props.exercise.day_name}
            <br />
          </Typography>
          <Typography> <CustomExerciseListPopUpEdit exercise={this.props.exercise} /> </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => this.deleteExercise(this.props.exercise)} color="primary" size="small">Delete</Button>
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

