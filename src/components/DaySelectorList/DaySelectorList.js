import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseForm from '../CustomExerciseForm/CustomExerciseForm';
import CustomExerciseListItem from '../CustomExerciseListItem/CustomExerciseListItem';
import DaySelector from '../DaySelector/DaySelector';



class DaySelectorList extends Component {

    render() {
        let day = this.props.reduxState.daysReducer
        return (
            <div>
                <h3>DaySelectorList</h3>
                <DaySelector />
                {!this.props.reduxState.setSelectedDayReducer ? <h3>Choose a Day from the list above to get started.</h3> :
                this.props.reduxState.exerciseListReducer.map(exercise => {
                    if (exercise.day_id === this.props.reduxState.setSelectedDayReducer) {
                        return <CustomExerciseListItem key={exercise.id} exercise={exercise} />
                    }
                })}
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

