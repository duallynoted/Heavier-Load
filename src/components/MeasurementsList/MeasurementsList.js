import React, { Component } from 'react';
import { connect } from 'react-redux';


class MeasurementsList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER', payload:this.props.reduxState.user })
        console.log('MEASUREMENTSREDUXSTATE: ', this.props.reduxState.user);

    }

    render() {
        return (
            <div>
                <h3>Your Measurements</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Body Area
                            </th>
                            <th>
                                Measurement
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.reduxState.measurementsListReducer.map(measurement => {
                          return <tr key={measurement.id}>
                          <td>{measurement.body_area}</td>
                          <td>{measurement.measurement}</td>
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

export default connect(mapStateToProps)(MeasurementsList);


