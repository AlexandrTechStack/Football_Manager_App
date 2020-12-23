import {React, Component} from 'react'
import {observer, inject} from "mobx-react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

@inject("mainStore")
@observer
class Profile extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const mainStore = this.props.mainStore;

        return (
            <div className='container'>
                <h1>Profile</h1>
            </div>
        );
    }
}
export default Profile