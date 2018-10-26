import React, { Component } from 'react';
import { connect } from 'react-redux';



class NewDayForm extends Component {
    state = {
        newDay: {
            name: '',
            new_day_id:1
        }
    };

    handleChangeFor = propertyName => event => {
        console.log('event logging')
        this.setState({
            newDay: {
                ...this.state.newDay,
                [propertyName]: event.target.value,
            }
        });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_DAY', payload: this.state.newDay })
        this.setState({
            ...this.state.newDay,
            newDay: {
                name: '',
                new_day_id:1
            }
        });
        console.log('LOOOOK', this.state.newDay);
};


render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.newDay.name} placeholder="Arm Day? Leg Day?" onChange={this.handleChangeFor('name')} />
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(NewDayForm);