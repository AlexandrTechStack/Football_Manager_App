import React from 'react'
import {observer, inject} from "mobx-react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import SignUp from '../../front/src/components/sign_up_component'
import SignIn from '../../front/src/components/sign_in_component'
import Link from "react-router-dom/modules/Link";

@inject("mainStore")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const mainStore = this.props.mainStore;

    return (
        <div className='container'>
            <Link to="/sign_up" className="navbar-brand">Sign Up</Link>
            <Link to="/sign_in" className="navbar-brand">Sign In</Link>
          <Router>
            <div className='container'>
              <Route path='/sign_up' exect component={SignUp}/>
              <Route path='/sign_in' exect component={SignIn}/>
            </div>
          </Router>
        </div>
    );
  }
}
export default App