import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import RowingIcon from '@material-ui/icons/Rowing';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import Divider from '@material-ui/core/Divider';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import InfoIcon from '@material-ui/icons/Info';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class NavDrawer extends React.Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    handleExerciseClick = () => {
        this.props.history.push('/exercises')
    }
    handleMeasurementsClick = () => {
        this.props.history.push('/measurements')
    }
    handleInfoClick = () => {
        this.props.history.push('/info')
    }

    render(props) {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button onClick={this.handleExerciseClick}>
                        <ListItemIcon>
                            <RowingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Your Exercises" />
                    </ListItem>
                    <ListItem button onClick={this.handleMeasurementsClick}>
                        <ListItemIcon>
                            <TrackChangesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Measurements" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={this.handleInfoClick}>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Info" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>
                        <ListItemIcon>
                            <VerifiedUserIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <Button onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    user: state.user,
});

const navDrawerStyles = withStyles(styles)(NavDrawer);

const navDrawerRouterStyles = withRouter(navDrawerStyles);

export default connect(mapStateToProps)(navDrawerRouterStyles);

