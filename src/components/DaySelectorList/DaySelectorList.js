import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseListItem from '../CustomExerciseListItem/CustomExerciseListItem';
import DaySelector from '../DaySelector/DaySelector';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';


class DaySelectorList extends Component {

    handleClick = () => {
        this.props.history.push('createexercise')
    }

    render() {
        return (
            <div>
                <Typography variant="h3">
                    Today's Exercises
                </Typography>
                <DaySelector />
                <Button onClick={this.handleClick}>Create Exercise</Button>

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

const daySelectorRouterList = withRouter(DaySelectorList)

export default connect(mapStateToProps)(daySelectorRouterList);


