import React, {Component} from 'react'
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";

@inject("UsersStore")
@observer
class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.UsersStore.users
        }
    }
    componentDidMount() {
        this.props.UsersStore.getUsers()
       //this.setState({users: this.props.UsersStore.getUsers()})
    }

    render() {
        const User = this.props.User
        console.log(this.state)
        return (
                <tr>
                    <td><img src={User.photoURL} style = {{width:60, height: 40}}/></td>
                    <td>{User.email}</td>
                    <td>{User.firstName}</td>
                    <td>{User.lastName}</td>
                    <td>{User.birthDate}</td>
                    <td>{User.address}</td>
                    <td>{User.phone}</td>
                    <td>{User.salary}</td>
                    <td>{User.currentRole}</td>
                    <td>
                        <Link to="/users_update" onClick={() => {
                            return this.props.UsersStore.currentId = User.id
                        }} >
                            <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false"
                                    style={{marginRight: 20}}>
                                Update user
                            </button>
                        </Link>
                    </td>
                    <td>
                        <a href="#" onClick={() => {
                            this.props.deleteUser(User.id)
                        }}>
                            <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false">
                                Delete user
                            </button>
                        </a>
                    </td>
                </tr>

        )
    }
}
export default UsersList