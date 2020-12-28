import React, {Component} from 'react'
//import {Link} from "react-router-dom";

export default class ClubsUpdate extends Component {
    render() {
        return (
            <div className="container">
                <h3>Clubs Update</h3>
                <div>
                    <h3>Update user</h3>
                    <form onSubmit='{this.onSubmit}'>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>Club Name</label>
                                <input type="text"
                                       required
                                       value={}
                                       onChange={}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>Club Address</label>
                                <input type="text"
                                       required
                                       value={}
                                       onChange={}
                                       className="form-control"/>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false"
                                        style={{margin: 30}}>
                                    Update Club
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}
