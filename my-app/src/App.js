import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import Navbar from './components/navbar'
import PageNotFound from './pages/pageNotFound'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login}/>
          <Route path='/conta' component={Signup} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    
    )
  }
}

export default withRouter(App)
