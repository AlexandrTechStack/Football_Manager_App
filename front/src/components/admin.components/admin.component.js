import React from 'react'
import {observer, inject} from "mobx-react"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import AdminNavbar from "./admin_navbar.component";
import Clubs from "./clubs.component";
import Users from "./users.component";
import Tasks from "./tasks.component";
import Profile from "../admin.components/admin_profile.component";
import ClubsAdd from "./clubs_add.component";
import UsersUpdate from "./users_update.component";

@inject("mainStore")
@observer
class AdminComponent extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div className='container'>
                <Router>
                    <AdminNavbar/>
                    <Route path='/admin_profile' exect component={Profile}/>
                    <Route path='/clubs' exect component={Clubs}/>
                    <Route path='/clubs_add' exect component={ClubsAdd}/>
                    <Route path='/users' exect component={Users}/>
                    <Route path='/users_update' exect component={UsersUpdate}/>
                    <Route path='/tasks' exect component={Tasks}/>
                </Router>
            </div>
        );
    }
}

export default AdminComponent