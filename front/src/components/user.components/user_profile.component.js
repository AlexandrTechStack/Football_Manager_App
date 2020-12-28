import React from 'react'
import {observer, inject} from "mobx-react"
import "bootstrap/dist/css/bootstrap.min.css"


class Profile extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div className='container'>
                <h1>User Profile</h1>
                <div>
                    <div className="card">
                        <div className="media">
                            <img src="" className="mr-3" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Александр Тарабанов</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Email</li>
                                <li className="list-group-item">Birthday</li>
                                <li className="list-group-item">Address</li>
                                <li className="list-group-item">Phone</li>
                                <li className="list-group-item">isApproved</li>
                                <li className="list-group-item">isPrime</li>
                                <li className="list-group-item">Salary</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Update profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile