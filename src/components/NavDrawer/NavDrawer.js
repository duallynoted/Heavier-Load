import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';



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

    render(props) {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>
                    {[<Link className="nav-link" to="/exercises">Exercises</Link>, <Link className="nav-link" to="/measurements">Measurements</Link>, <Link className="nav-link" to="/info">Info Page</Link>].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        // const sideList = (
        //     <div>
        //         </ListItem>
        //         <div className={classes.list}>
        //             <List>
        //                 <div className="nav">
        //                     <Link to="/home">
        //                         <h2 className="nav-title">Heavier Load</h2>
        //                     </Link>
        //                     <div className="nav-right">
        //                         <Link className="nav-link" to="/home">
        //                             {/* Show this link if they are logged in or not,
        // but call this link 'Home' if they are logged in,
        // and call this link 'Login / Register' if they are not */}
        //                             {this.props.user.id ? 'Home' : 'Login / Register'}
        //                         </Link>
        //                         {/* Show the link to the info page and the logout button if the user is logged in */}
        //                         {this.props.user.id && (
        //                             <>
        //                                 <Link className="nav-link" to="/exercises">Exercises</Link>
        //                                 <Link className="nav-link" to="/measurements">Measurements</Link>
        //                                 <Link className="nav-link" to="/info">Info Page</Link>
        //                                 {/* <LogOutButton className="nav-link" /> */}
        //                             </>
        //                         )}
        //                         {/* Always show this link since the about page is not protected */}
        //                         <Link className="nav-link" to="/about">
        //                             About
        //             </Link>
        //                     </div>
        //                 </div>

        //             </List>
        //         </div>
        //     </div>
        // );

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

export default connect(mapStateToProps)(navDrawerStyles);

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';


// const styles = {
//     list: {
//         width: 250,
//     },
//     fullList: {
//         width: 'auto',
//     },
// };

// class NavDrawer extends React.Component {
//     state = {
//         left: false,
//     };

//     toggleDrawer = (side, open) => () => {
//         this.setState({
//             [side]: open,
//         });
//     };

//     render(props) {
//         const { classes } = this.props;
//         const sideList = (
//             <div>
//                 <ListItem button key={text}>
//                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                     <ListItemText primary={text} />
//                 </ListItem>
//                 <div className={classes.list}>
//                     <List>
//                         <div className="nav">
//                             <Link to="/home">
//                                 <h2 className="nav-title">Heavier Load</h2>
//                             </Link>
//                             <div className="nav-right">
//                                 <Link className="nav-link" to="/home">
//                                     {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//                                     {this.props.user.id ? 'Home' : 'Login / Register'}
//                                 </Link>
//                                 {/* Show the link to the info page and the logout button if the user is logged in */}
//                                 {this.props.user.id && (
//                                     <>
//                                         <Link className="nav-link" to="/exercises">
//                                             Exercises
//                       </Link>
//                                         <Link className="nav-link" to="/measurements">
//                                             Measurements
//                       </Link>
//                                         <Link className="nav-link" to="/info">
//                                             Info Page
//                       </Link>
//                                         {/* <LogOutButton className="nav-link" /> */}
//                                     </>
//                                 )}
//                                 {/* Always show this link since the about page is not protected */}
//                                 <Link className="nav-link" to="/about">
//                                     About
//                     </Link>
//                             </div>
//                         </div>

//                     </List>
//                 </div>
//             </div>
//         );

//         return (
//             <div>
//                 <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
//                 <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
//                     <div
//                         tabIndex={0}
//                         role="button"
//                         onClick={this.toggleDrawer('left', false)}
//                         onKeyDown={this.toggleDrawer('left', false)}
//                     >
//                         {sideList}
//                     </div>
//                 </Drawer>
//             </div>
//         );
//     }
// }

// NavDrawer.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
// const mapStateToProps = state => ({
//     user: state.user,
// });

// const navDrawerStyles = withStyles(styles)(NavDrawer);

// export default connect(mapStateToProps)(navDrawerStyles);