import React, {Component} from 'react'
import ClubsList from "./clubs_list.component";
import {inject, observer} from "mobx-react";
import UsersList from "./users_list.component";
import {Link} from "react-router-dom";

//import {Link} from "react-router-dom";

@inject("ClubsStore")
@observer
class Clubs extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.ClubsStore.getClubs()
    }

    clubsList() {
        console.log(this.props.ClubsStore.clubs)
        return this.props.ClubsStore.clubs.map(currentclub => {
            return <ClubsList Club={currentclub} key={currentclub.id} deleteClub={this.props.ClubsStore.deleteClub}/>;
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Clubs</h1>
                <div>
                    <Link to="/clubs_add">
                        <button type="button" className="btn btn-primary" data-target="#exampleModal">
                            Add new Club
                        </button>
                    </Link>

                    <h3>Clubs List</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.clubsList()}
                        </tbody>
                    </table>
                </div>
            </div>

    )
    }
    }
    export default Clubs
