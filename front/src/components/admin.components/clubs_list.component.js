import React, {Component} from 'react'
import {inject, observer} from "mobx-react";

//import {Link} from "react-router-dom";


@inject("ClubsStore")
@observer
class ClubsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.ClubsStore.getClubs()
    }

    render() {
        const Club = this.props.Club
        return (
            <tr>
                <td><img src={Club.photoURL} style = {{width:60, height: 40}}/></td>
                <td>{Club.name}</td>
                <td>{Club.address}</td>
                <td>
                    <a href="#" onClick={() => {
                    }}>
                        <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false"
                                style={{marginRight: 20}}> Update club
                        </button>
                    </a>
                    </td>
                    <td>
                        <a href="#" onClick={() => {
                            this.props.deleteClub(Club.id)
                        }}>
                            <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false">
                                Delete club
                            </button>
                        </a>
                    </td>
            </tr>
    )
    }
    }
    export default ClubsList