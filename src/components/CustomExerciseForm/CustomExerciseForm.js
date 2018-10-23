import React, { Component } from 'react';
import { connect } from 'react-redux';



class CustomExerciseForm extends Component {
    state = {
        newExercise: {
            title: '',
            weight_load: 0,
            day: '',
        }
    };

    handleChangeFor = propertyName => event => {
        console.log('event logging')
        this.setState({
            newExercise: {
                ...this.state.newExercise,
                [propertyName]: event.target.value,
            }
        });
    };
    
    handleExerciseSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_EXERCISE', payload: this.state.newExercise })
        this.setState({
            ...this.state.newExercise,
            newExercise: {
                title: '',
                weight_load: 0,
                day: '',
            }
        });
        console.log('LOOOOK', this.state.newExercise);
};


render() {
    return (
        <div>
            <h3>Workout</h3>
            <form onSubmit={this.handleExerciseSubmit}>
                <input type='text' value={this.state.newExercise.title} placeholder="Exercise" onChange={this.handleChangeFor('title')} />
                <input type='text' value={this.state.newExercise.weight_load} placeholder="Weight" onChange={this.handleChangeFor('weight_load')} />
                <input type='text' value={this.state.newExercise.day} placeholder="Arm Day? Tuesdays?" onChange={this.handleChangeFor('day')} />
                <br />
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(CustomExerciseForm);