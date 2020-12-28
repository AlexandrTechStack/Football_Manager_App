import React, {Component} from 'react'
import UsersList from "./users_list.component";
import {inject, observer} from "mobx-react";
import {observable} from "mobx";
import {Link} from "react-router-dom";

@inject("UsersStore")
@observer
class Users extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.UsersStore.getUsers()
    }

    usersList() {
        console.log(this.props.UsersStore.users)
        return this.props.UsersStore.users.map(currentuser => {
            return <UsersList User={currentuser} key={currentuser.id}
                              deleteUser={this.props.UsersStore.deleteUser}/>;
        })
    }

    render() {
        const UsersStore = this.props.UsersStore
        return (
            <div className="container">
                <h1>Users</h1>

                {console.log(UsersStore.user.users)}
                <div>
                    <h3>Users List</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birthday</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>isApproved</th>
                            <th>isPrime</th>
                            <th>Salary</th>
                            <th>Role</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.usersList()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Users
//const a = inject("UsersStore")(observer(Users))
//export default a
