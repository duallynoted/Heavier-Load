import React, { Component, Children } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import swal from 'sweetalert';
import MeasurementsForm from '../MeasurementsForm/MeasurementsForm';

const styles = theme => ({
    root: {
        width: '62%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 100,
    },
    tableBody: {
        width: '100%',
    },
});


class MeasurementsList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER', payload: this.props.reduxState.user })
        console.log('MEASUREMENTSREDUXSTATE: ', this.props.reduxState.user);

    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow >
                                <TableCell numeric>Body Area</TableCell>
                                <TableCell numeric>Measurement</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.tableBody}>
                            {this.props.reduxState.measurementsListReducer.map(measurement => {
                                return (
                                    <TableRow key={measurement.id}>
                                        <TableCell >{measurement.body_area}</TableCell>
                                        <TableCell numeric>{measurement.measurement}''</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
                <MeasurementsForm />
            </div>
        );
    }
}
MeasurementsList.propTypes = {
    classes: PropTypes.object.isRequired,
};
const measurementTable = withStyles(styles)(MeasurementsList);

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(measurementTable);







