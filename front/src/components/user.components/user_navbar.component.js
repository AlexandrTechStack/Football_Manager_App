import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class UserNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/user_profile" className="navbar-brand">Logo</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/user_profile" className="nav-link">Profile</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/club" className="nav-link">Club</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/task" className="nav-link">Training</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}