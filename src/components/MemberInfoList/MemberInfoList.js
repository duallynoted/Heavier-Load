import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseList from '../CustomExerciseList/CustomExerciseList';


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
        return (
            <div>
                <h3>Member Info</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Height
                            </th>
                            <th>
                                Weight
                            </th>
                            <th>
                                Gender
                            </th>
                            <th>
                                Goal
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr key={member.id}>
                            <td>{member.first_name}</td>
                            <td>{member.last_name}</td>
                            <td>{member.height}</td>
                            <td>{member.weight}</td>
                            <td>{member.gender}</td>
                            <td>{member.goal}</td>
                            <td><button onClick={() => this.handleClick}>Edit Member Info</button></td>
                        </tr>
                          </tbody>
                </table>
                <CustomExerciseList />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MemberInfoList);



{/* <tr key={user.id}>
<td>{user.first_name}</td>
<td>{user.last_name}</td>
<td><button onClick={()=>this.updateUser(user.id)}>Edit</button></td>
</tr>
})} */}

