import React, {Component} from 'react'
//import {Link} from "react-router-dom";

export default class Club extends Component {
    currentClub() {
        //return <ClubList/>;
    }

    render() {
        return (
            <div className="container">
                <h1>Club</h1>
                <div>
                    <h3>Club List</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.currentClub()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
