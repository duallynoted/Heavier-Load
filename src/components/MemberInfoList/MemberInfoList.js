import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MemberInfoPopUpEdit from '../MemberInfoPop-UpEdit/MemberInfoPop-UpEdit';


const styles = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class MemberInfoList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER' })
        console.log(this.props.reduxState.user);

    }
    handleClick = () => {
        this.props.history.push('/profile')
    };

    render() {
        let member = this.props.reduxState.user;
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent key={member.id}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Member Information for {member.username}
                        </Typography>
                        <Typography variant="h2" component="h2">
                            {member.first_name} {member.last_name}
                        </Typography>
                        <Typography variant="h5" className={classes.pos} color="textSecondary">
                            Height:
                        <br />
                            {member.height}''
                        </Typography>
                        <Typography variant="h5" className={classes.pos} color="textSecondary">
                            Weight:
                         <br />
                            {member.weight} lbs
                        </Typography>
                        <Typography component="p">
                            {member.gender}
                            <br />
                        </Typography>
                    </CardContent>
                    <MemberInfoPopUpEdit />
                    {/* <CardActions>
                        <Button color="primary" size="small">Edit Your Information</Button>
                    </CardActions> */}
                </Card>
            </div>
        );
    }
}

MemberInfoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const memberInfoListCards = withStyles(styles)(MemberInfoList);

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(memberInfoListCards);




