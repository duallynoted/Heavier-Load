import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseForm from '../CustomExerciseForm/CustomExerciseForm';
import CustomExerciseListItem from '../CustomExerciseListItem/CustomExerciseListItem';
import DaySelector from '../DaySelector/DaySelector';
import Grid from '@material-ui/core/Grid';


class DaySelectorList extends Component {

    render() {
        let day = this.props.reduxState.daysReducer
        return (
            <div>
                <h3>DaySelectorList</h3>
                <DaySelector />

                {!this.props.reduxState.setSelectedDayReducer ? <h3>Choose a Day from the list above to get started.</h3> :
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start"
                        spacing={40}
                        style={{ width: "100%" }}
                    >
                        {this.props.reduxState.exerciseListReducer.map(exercise => {
                            if (exercise.day_id === this.props.reduxState.setSelectedDayReducer) {
                                return (
                                    <Grid item xs={12} md={6} lg={12}>
                                        <CustomExerciseListItem key={exercise.id} exercise={exercise} />
                                    </Grid>
                                )
                            }
                        })}
                    </Grid>
                }
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(DaySelectorList);


// for (let i = 0; i < this.props.reduxState.setSelectedDayReducer.length; ) {
//     const element = this.props.reduxState.setSelectedDayReducer[i];

// }

