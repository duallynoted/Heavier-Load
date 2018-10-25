import React, { Component } from 'react';
import { connect } from 'react-redux';



class CustomExerciseForm extends Component {
    state = {
        newExercise: {
            title: '',
            weight_load: 0,
            day_id:0,
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
    handleSelectChange = (event) => {
        this.setState({
            ...this.state.newExercise,
            day_id: Number(event.target.value),
        })
        console.log('DAY',event.target.value);
        
    }

    
    handleExerciseSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_EXERCISE', payload: this.state.newExercise })
        this.setState({
            ...this.state.newExercise,
            newExercise: {
                title: '',
                weight_load: 0,
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
                <br />
                <select onChange={this.handleSelectChange}>
                {this.props.reduxState.daysReducer.map(day =>{
                    return <option key={day.id}>{day.name}</option>
                     
                })}
                    
                </select>

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