import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
});

class DaySelector extends Component {
  state = {
    day_id: 0,
  }
  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleSelectExerciseDay = async (event) => {

    await this.setState({
      day_id: event.target.value,
    });
    this.props.dispatch({ type: 'SET_SELECTED_DAY', payload: this.state.day_id })
    console.log('DAY', this.state.day_id);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="">
            Day</InputLabel>
          <Select
            value={this.props.reduxState.daysReducer.day_id}
            onChange={this.handleSelectExerciseDay}
          >
            <MenuItem value={0}>View All {this.props.reduxState.user.first_name}'s Exercises</MenuItem>
            {this.props.reduxState.daysReducer.map(day => {
              return <MenuItem value={day.id} key={day.id}>{day.name}</MenuItem>
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

DaySelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
  reduxState,
});

const daySelectorDropDown = withStyles(styles)(DaySelector)

export default connect(mapStateToProps)(daySelectorDropDown);

