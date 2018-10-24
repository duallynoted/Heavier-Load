import React, { Component } from 'react';
import { connect } from 'react-redux';


class CustomExerciseList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER', payload:this.props.reduxState.user })
        console.log('REDUXSTATE: ', this.props.reduxState.user);

    }
    // handleClick = () => {
    //     this.props.history.push('/profile')
    // };

    render() {
        return (
            <div>
                <h3>Exercises</h3>
                <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Exercise
                            </th>
                            <th>
                                Weight Load
                            </th>
                            <th>
                                Day
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.reduxState.exerciseListReducer.map(exercise => {
                          return <tr key={exercise.id}>
                          <td>{exercise.title}</td>
                          <td>{exercise.weight_load}</td>
                          <td>{exercise.day}</td>
                          <td><button onClick={() => this.handleClick}>Make it Heavier</button></td>
                          </tr>
                        })}           
                          </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(CustomExerciseList);



{/* <tr key={user.id}>
<td>{user.first_name}</td>
<td>{user.last_name}</td>
<td><button onClick={()=>this.updateUser(user.id)}>Edit</button></td>
</tr>
})} */}

