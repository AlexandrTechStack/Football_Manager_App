import React, {Component} from 'react'
import {inject, observer} from "mobx-react";
//import {Link} from "react-router-dom";

@inject("UsersStore")
@observer
class UsersUpdate extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
        this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
        this.onChangeUserBirthDate = this.onChangeUserBirthDate.bind(this);
        this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
        this.onChangeUserIsApproved = this.onChangeUserIsApproved.bind(this);
        this.onChangeUserIsPrime = this.onChangeUserIsPrime.bind(this);
        this.onChangeUserSalary = this.onChangeUserSalary.bind(this);
        this.onChangeUserCurrentRole = this.onChangeUserCurrentRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            email: '',
            firstName: '',
            lastName: '',//this.props.UsersStore.lastName
            birthDate: '',
            photoURL: '',
            phone: '',
            isApproved: '',
            isPrime: '',
            salary: '',
            currentRole: '',
            currentId: this.props.UsersStore.userById
        }
    }
    componentDidMount() {
        this.props.UsersStore.getUsersById(this.props.UsersStore.currentId)
        console.log(this.props.UsersStore.userById)
    }

    onChangeUserEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeUserFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeUserLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    onChangeUserBirthDate(e) {
        this.setState({
            birthDate: e.target.value
        })
    }
    onChangeUserPhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    onChangeUserIsApproved(e) {
        this.setState({
            isApproved: e.target.value
        })
    }
    onChangeUserIsPrime(e) {
        this.setState({
            isPrime: e.target.value
        })
    }
    onChangeUserSalary(e) {
        this.setState({
            salary: e.target.value
        })
    }
    onChangeUserCurrentRole(e) {
        this.setState({
            currentRole: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const newuser = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDate: this.state.birthDate,
            //photoURL: this.state.photoURL,
            phone: this.state.phone,
            isApproved: this.state.isApproved,
            isPrime: this.state.isPrime,
            salary: this.state.salary,
            currentRole: this.state.currentRole,
        }
        console.log(newuser)
        this.props.UsersStore.updateUser(newuser, this.props.UsersStore.currentId)

        //window.location = '/clubs';
    }


    render() {
        return (
            <div className="container">
                <h3>Users Update</h3>
                {console.log(this.props.UsersStore.currentId)}
                <div>
                    <h3>Update user</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>User Email</label>
                                <input type="text"
                                       value={this.state.email}
                                       onChange={this.onChangeUserEmail}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>User First Name</label>
                                <input type="text"
                                       value={this.state.firstName}
                                       onChange={this.onChangeUserFirstName}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>User Last Name</label>
                                <input type="text"
                                       value={this.state.lastName}
                                       onChange={this.onChangeUserLastName}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>User Birthday</label>
                                <input type="text"
                                       value={this.state.birthDate}
                                       onChange={this.onChangeUserBirthDate}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>User Phone</label>
                                <input type="text"
                                       value={this.state.phone}
                                       onChange={this.onChangeUserPhone}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>User isApproved</label>
                                <input type="text"
                                       value={this.state.isApproved}
                                       onChange={this.onChangeUserIsApproved}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>User isPrime</label>
                                <input type="text"
                                       value={this.state.isPrime}
                                       onChange={this.onChangeUserIsPrime}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>User Salary</label>
                                <input type="text"
                                       value={this.state.salary}
                                       onChange={this.onChangeUserSalary}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputState">User Role</label>
                                <select type='text'
                                        value={this.state.currentRole}
                                        onChange={this.onChangeUserCurrentRole}
                                        className="form-control">
                                    <option value='Player'>Player</option>
                                    <option value='Coach'>Coach</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false"
                                        style={{margin: 30}}>
                                    Update User
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}
export default UsersUpdate
