import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseForm from '../CustomExerciseForm/CustomExerciseForm';
import CustomExerciseListItem from '../CustomExerciseListItem/CustomExerciseListItem';
import DaySelector from '../DaySelector/DaySelector';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



class DaySelectorList extends Component {

    render() {
        let day = this.props.reduxState.daysReducer
        return (
            <div>
                <Typography variant="h3">
                    Today's Exercises
                </Typography>
                <DaySelector />

                {!this.props.reduxState.setSelectedDayReducer ? <Typography variant="h6">Choose a Day From the List Above to Start Lifting</Typography> :
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
                                    <Grid item xs={12} md={6} lg={3}>
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

