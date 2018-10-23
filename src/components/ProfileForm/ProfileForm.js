import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomExerciseForm from '../CustomExerciseForm/CustomExerciseForm';
import MemberInfoList from '../MemberInfoList/MemberInfoList';
import Measurements from '../Measurements/Measurements';



class ProfileForm extends Component {
    state = {
        newMemberInfo: {
            first_name: '',
            last_name: '',
            height: '',
            weight: '',
            gender: '',
            goal: '',
        }
    }

    handleChangeFor = propertyName => event => {
        console.log('event logging')
        this.setState({
            newMemberInfo: {
                ...this.state.newMemberInfo,
                [propertyName]: event.target.value,
            }
        });
    }

    updateMemberInfo = event => {
        event.preventDefault();
        console.log(this.state.newMemberInfo);
        
        this.props.dispatch({ type: 'UPDATE_MEMBER_INFO', payload: this.state.newMemberInfo })
        this.setState({
            newMemberInfo: {
                first_name: '',
                last_name: '',
                height: '',
                weight: '',
                gender: '',
                goal: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Member Information</h3>
                <form onSubmit={this.updateMemberInfo}>
                    <input type='text' value={this.state.newMemberInfo.first_name} placeholder="First Name" onChange={this.handleChangeFor('first_name')} />
                    <input type='text' value={this.state.newMemberInfo.last_name} placeholder="Last Name" onChange={this.handleChangeFor('last_name')} />
                    <input type='text' value={this.state.newMemberInfo.height} placeholder="Height" onChange={this.handleChangeFor('height')} />
                    <input type='text' value={this.state.newMemberInfo.weight} placeholder="Weight" onChange={this.handleChangeFor('weight')} />
                    <input type='text' value={this.state.newMemberInfo.gender} placeholder="Gender" onChange={this.handleChangeFor('gender')} />
                    <input type='text' value={this.state.newMemberInfo.goal} placeholder="Goal" onChange={this.handleChangeFor('goal')} />
                    <br/>
                    <input type='submit' value='Submit' />
                </form>
                <CustomExerciseForm />
                <MemberInfoList />
                <Measurements />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(ProfileForm);