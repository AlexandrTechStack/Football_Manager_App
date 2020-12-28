import React from 'react'
import {observer, inject} from "mobx-react"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Profile from "../user.components/user_profile.component";
import UserNavbar from "./user_navbar.component";
import Club from "./club.component";
import Task from "./task.component";


@inject("mainStore")
@observer
class UserComponent extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div className='container'>
                <Router>
                    <UserNavbar/>
                    <Route path='/user_profile' exect component={Profile}/>
                    <Route path='/club' exect component={Club}/>
                    <Route path='/task' exect component={Task}/>
                </Router>
            </div>
        );
    }
}

export default UserComponent