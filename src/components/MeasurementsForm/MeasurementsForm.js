import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 'flex',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class MeasurementsForm extends Component {
    state = {
        newMeasurement: {
            body_area: '',
            measurement: 0,
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
                measurement: 0,
            }
        });
        console.log('LOOOOK', this.state.newMeasurement);
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form>
                    <h3>Measurements</h3>
                    <FormControl className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="Body Area"
                            className={classes.textField}
                            value={this.state.newMeasurement.body_area}
                            onChange={this.handleChangeFor('body_area')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Measurement"
                            className={classes.textField}
                            value={this.state.newMeasurement.measurement}
                            onChange={this.handleChangeFor('measurement')}
                            margin="normal"
                        />
                        <Button onClick={this.handleMeasurementSubmit} type="submit" value='Submit' color="primary">Add Measurement</Button>
                    </FormControl>
                </form>
            </div>
        );
    }
}

MeasurementsForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
    reduxState,
});

const measurementsStyles = withStyles(styles)(MeasurementsForm)

export default connect(mapStateToProps)(measurementsStyles);