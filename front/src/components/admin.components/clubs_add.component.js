import React, {Component} from 'react'
import {inject, observer} from "mobx-react";

//import {Link} from "react-router-dom";

@inject("ClubsStore")
@observer
class ClubsAdd extends Component {
    constructor(props) {
        super(props);
        this.onChangeClubName = this.onChangeClubName.bind(this);
        this.onChangeClubAddress = this.onChangeClubAddress.bind(this);
        this.onChangeClubPhoto = this.onChangeClubPhoto.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            name: '',
            address: '',
        }
    }


    onChangeClubName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeClubAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onChangeClubPhoto(e) {
        this.setState({
            photoURL: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const newclub = {
            name: this.state.name,
            address: this.state.address,
            //photoURL: this.state.photoURL
        }
        console.log(newclub)
        this.props.ClubsStore.addClub(newclub)

        //window.location = '/clubs';
    }

    render() {
        return (
            <div className="container">
                <h3>Clubs Add</h3>
                <div>
                    <h3>Add new Club</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>Club Name</label>
                                <input type="text"
                                       required
                                       value={this.state.name}
                                       onChange={this.onChangeClubName}
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>Club Address</label>
                                <input type="text"
                                       required
                                       value={this.state.address}
                                       onChange={this.onChangeClubAddress}
                                       className="form-control"/>

                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary" data-toggle="button"
                                        aria-pressed="false"
                                        style={{margin: 30}}>
                                    Add Club
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default ClubsAdd
