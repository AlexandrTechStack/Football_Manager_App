import React from 'react'
import {observer, inject} from "mobx-react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import SignUp from './components/auth.components/sign_up.component'
import SignIn from './components/auth.components/sign_in.component'
import {Link} from "react-router-dom";
import Profile from "./components/user.components/user_profile.component";

@inject("mainStore")
@observer
class Auth extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
        <div className='container'>
            <h1>Football Manager App</h1>
            <Router>
                <Link to="/sign_up" className="navbar-brand">Sign Up</Link>
                <Link to="/sign_in" className="navbar-brand">Sign In</Link>
                <Link to="/profile" className="navbar-brand">Profile</Link>
                <div className='container'>
                    <Route path='/sign_up' exect component={SignUp}/>
                    <Route path='/sign_in' exect component={SignIn}/>
                    <Route path='/profile' exect component={Profile}/>
                </div>
            </Router>
        </div>
    );
  }
}
export default Auth



/*
 <Link to="/sign_up" className="navbar-brand">Sign Up</Link>
            <Link to="/sign_in" className="navbar-brand">Sign In</Link>
          <Router>
            <div className='container'>
              <Route path='/sign_up' exect component={SignUp}/>
              <Route path='/sign_in' exect component={SignIn}/>
            </div>
          </Router>
 */