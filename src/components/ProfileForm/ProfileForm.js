import React, { Component } from 'react';
import { connect } from 'react-redux';



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

    handleNameChange = propertyName => event => {
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
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.updateMemberInfo}>
                    <input type='text' value={this.state.newMemberInfo.first_name} placeholder="First Name" onChange={this.handleNameChange('first_name')} />
                    <input type='text' value={this.state.newMemberInfo.last_name} placeholder="Last Name" onChange={this.handleNameChange('last_name')} />
                    <input type='text' value={this.state.newMemberInfo.height} placeholder="Height" onChange={this.handleNameChange('height')} />
                    <input type='text' value={this.state.newMemberInfo.weight} placeholder="Weight" onChange={this.handleNameChange('weight')} />
                    <input type='text' value={this.state.newMemberInfo.gender} placeholder="Gender" onChange={this.handleNameChange('gender')} />
                    <input type='text' value={this.state.newMemberInfo.goal} placeholder="Goal" onChange={this.handleNameChange('goal')} />
                    <input type='submit' value='Update Your Information' />
                </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(ProfileForm);