import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseListItem from '../CustomExerciseListItem/CustomExerciseListItem';
import DaySelectorList from '../DaySelectorList/DaySelectorList';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class CustomExerciseList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_EXERCISES', payload: this.props.reduxState.user })
        this.props.dispatch({ type: 'FETCH_DAYS', payload: this.props.reduxState.user })

    }

    render() {
        return (
            <div className="CustomExerciseListCSS">
                <DaySelectorList />
                <Typography id="CustomExerciseListTEXT" variant="h3">
                    {this.props.reduxState.user.first_name}'s Exercises
                     </Typography>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                    spacing={40}
                    style={{ width: "100%" }}
                >
                    {this.props.reduxState.exerciseListReducer.map(exercise => {
                        return (
                            <Grid item xs={12} md={6} lg={3}>
                                <CustomExerciseListItem key={exercise.id} exercise={exercise} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(CustomExerciseList);




