import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "mobx-react"
import Auth from './App';
import UserProfile from "./components/user.components/user_profile.component";
import AdminComponent from "./components/admin.components/admin.component";
import UserComponent from "./components/user.components/user.component";
//stores
import optionsStore from "./stores/options.store";
import mainStore from "./stores/main.store";
import UsersStore from "./stores/users.store";
import ClubsStore from "./stores/clubs.store";
import TasksStore from "./stores/tasks.store";
import SignInStore from "./stores/sign_in.store";
import SignUpStore from "./stores/sign_up.store";


const stores = {
    mainStore: new mainStore(),
    //optionsStore: new optionsStore(),
    UsersStore: new UsersStore(),
    ClubsStore: new ClubsStore(),
    TasksStore: new TasksStore(),
    SignInStore: new SignInStore(),
    SignUpStore: new SignUpStore(),
}

ReactDOM.render(
    <Provider {...stores}>
        <Router>
            <Route path="/auth" component={Auth}/>
            <Route path="/user_profile" component={UserProfile}/>
            <Route path="/admin" component={AdminComponent}/>
            <Route path="/user" component={UserComponent}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);


/*"proxy": "http://localhost:3001",*/