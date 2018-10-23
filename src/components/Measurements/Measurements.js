import React, { Component } from 'react';
import { connect } from 'react-redux';

class Measurements extends Component {
    state = {
        newMeasurement: {
            body_area: '',
            measurement:0,
        }
    };

    handleChangeFor = propertyName => event => {
        console.log('event logging')
        this.setState({
            newMeasurement: {
                ...this.state.newMeasurement,
                [propertyName]: event.target.value,
            }
        });
    };
    
    handleMeasurementSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_MEASUREMENT', payload: this.state.newMeasurement })
        this.setState({
            ...this.state.newMeasurement,
            newMeasurement: {
                body_area: '',
                measurement:0,
            }
        });
        console.log('LOOOOK', this.state.newMeasurement);
};

render() {
    return (
        <div>
            <h3>Measurements</h3>
            <form onSubmit={this.handleMeasurementSubmit}>
                <input type='text' value={this.state.newMeasurement.body_area} placeholder="Body Target" onChange={this.handleChangeFor('body_area')} />
                <input type='text' value={this.state.newMeasurement.measurement} placeholder="Measurement in Decimals" onChange={this.handleChangeFor('measurement')} />
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


export default connect(mapStateToProps)(Measurements);