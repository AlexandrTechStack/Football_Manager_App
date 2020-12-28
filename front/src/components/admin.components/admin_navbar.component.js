import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

export default class AdminNavbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to="/admin_profile" className="navbar-brand">Logo</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/admin_profile" className="nav-link">Profile</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/clubs" className="nav-link">Clubs</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/users" className="nav-link">Users</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/tasks" className="nav-link">Trainings</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}