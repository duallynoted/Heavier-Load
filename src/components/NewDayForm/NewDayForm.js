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
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class NewDayForm extends Component {
    state = {
        newDay: {
            name: '',
            new_day_id: 1
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

    handleSubmit = () => {
        this.props.dispatch({ type: 'ADD_DAY', payload: this.state.newDay })
        this.setState({
            ...this.state.newDay,
            newDay: {
                name: '',
                new_day_id: 1
            }
        });
        console.log('LOOOOK', this.state.newDay);
    };


    render() {
        const { classes } = this.props;
        return (
            <div>
                <h3>Create Your Schedule</h3>
                <form>
                    <h3>New Workout</h3>
                    <FormControl className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="Tuesdays? Leg Day?"
                            className={classes.textField}
                            value={this.state.newDay.name}
                            onChange={this.handleChangeFor('name')}
                            margin="normal"
                        />
                        <Button onClick={this.handleSubmit} value='Submit' color="primary">Create Workout Day</Button>
                    </FormControl>
                </form>
            </div>

        );
    }
}
NewDayForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
    reduxState,
});

const newDayStyles = withStyles(styles)(NewDayForm)


export default connect(mapStateToProps)(newDayStyles);

