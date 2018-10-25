import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseForm from '../CustomExerciseForm/CustomExerciseForm';


class CustomExerciseList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_DAYS', payload:this.props.reduxState.user })

    }
    // handleClick = () => {
    //     this.props.history.push('/profile')
    // };

    render() {
        return (
            <div>
                <h3>Exercises</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Exercise
                            </th>
                            <th>
                                Weight Load
                            </th>
                            {/* <th>
                                Day
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.reduxState.exerciseListReducer.map(exercise => {
                          return <tr key={exercise.id}>
                          <td>{exercise.title}</td>
                          <td>{exercise.weight_load}</td>
                          {/* <td>{this.props.exerciseListReducer.day_of_week.name}</td> */}
                          <td><button onClick={() => this.handleClick}>Make it Heavier</button></td>
                          </tr>
                        })}           
                          </tbody>
                </table>
                <CustomExerciseForm />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(CustomExerciseList);



