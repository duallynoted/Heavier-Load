import React, { Component } from 'react';
import { connect } from 'react-redux';



class DaySelector extends Component {
    state = {
        day_id: 0,
    }
  
    handleSelectExerciseDay = async (event) => {

        await this.setState({      
                day_id: event.target.value,
        });
        this.props.dispatch({ type: 'SET_SELECTED_DAY', payload: this.state.day_id })
        console.log('DAY', this.state.day_id);
    }   

render() {
    return (
        <div>
            <h3>Day</h3>        
                <select value={this.props.reduxState.daysReducer.day_id} onChange={this.handleSelectExerciseDay}>
                <option>Select a Day</option>
                {this.props.reduxState.daysReducer.map(day =>{
                    return <option value={day.id} key={day.id}>{day.name}</option>   
                })}
                </select>
        </div>
    );
}
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(DaySelector);
