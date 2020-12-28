import React, {Component} from 'react'
import Profile from "../admin.components/admin_profile.component";
import {Route, Router} from "react-router-dom";
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";

@inject("SignInStore")
@observer
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            email: '',
            password: '',
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const authdata = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(authdata)
        this.props.SignInStore.signIn(authdata)

        //window.location = '/clubs';
    }

    render() {
        return (
            <div className="container">
                <h4>SignIn page</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               required
                               value={this.state.email}
                               onChange={this.onChangeEmail}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                            anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               required
                               value={this.state.password}
                               onChange={this.onChangePassword}/>
                    </div>
                            <button type="submit" className="btn btn-primary">
                                Sign In
                            </button>
                </form>
            </div>

        )
    }
}

export default SignIn


/*
<Router>
                        <Link to="/profile" className="navbar-brand">
                            <button type="submit" className="btn btn-primary">
                                Sign In
                            </button>
                        </Link>
                        <Route path='/profile' exect component={Profile}/>
                    </Router>
 */