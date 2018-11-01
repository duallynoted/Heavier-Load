import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseListItem from '../CustomExerciseListItem/CustomExerciseListItem';
import DaySelector from '../DaySelector/DaySelector';
import DaySelectorList from '../DaySelectorList/DaySelectorList';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


class CustomExerciseList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_EXERCISES', payload: this.props.reduxState.user })
        this.props.dispatch({ type: 'FETCH_DAYS', payload: this.props.reduxState.user })

    }

    // handleClick = () => {
    //     this.props.history.push('/profile')
    // };

    render() {
        return (
            <div>
                <DaySelectorList />
                <Divider />
                <h3>All {this.props.reduxState.user.first_name}'s Exercises</h3>
                <pre>{JSON.stringify(this.props.reduxState.exercise)}</pre>
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
                            <Grid item xs={12} md={6} lg={12}>
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

{/* <td><button onClick={() => this.handleClick}>Make it Heavier</button></td> */ }



