import React, {Component} from 'react'
//import {Link} from "react-router-dom";

export default class AdminNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Logo</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Profile</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Clubs</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}