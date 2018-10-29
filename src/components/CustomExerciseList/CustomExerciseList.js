import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseForm from '../CustomExerciseForm/CustomExerciseForm';
import CustomExerciseListItem from '../CustomExerciseListItem/CustomExerciseListItem';


class CustomExerciseList extends Component {
     componentDidMount() {
        this.props.dispatch({ type: 'FETCH_EXERCISES', payload:this.props.reduxState.user })
        this.props.dispatch({ type: 'FETCH_DAYS', payload:this.props.reduxState.user })

    }
    
    // handleClick = () => {
    //     this.props.history.push('/profile')
    // };

    render() {
        return (
            <div>
                <h3>Exercises</h3>
                <pre>{JSON.stringify(this.props.reduxState.exercise)}</pre>   
                    {this.props.reduxState.exerciseListReducer.map(exercise => {
                          return <CustomExerciseListItem key = {exercise.id} exercise={exercise}/>
                        })}           
                <CustomExerciseForm />
            
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(CustomExerciseList);

{/* <td><button onClick={() => this.handleClick}>Make it Heavier</button></td> */}



