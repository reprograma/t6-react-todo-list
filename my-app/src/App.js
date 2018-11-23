import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import Navbar from './components/navbar'
import PageNotFound from './pages/pageNotFound'
import { startServer  } from './infra/api-config'
import Alert from './components/alert'
import { getUser } from './infra/local-storage'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      openAlert : false,
      childrenAlert : ''
    }
    this.user = ''
  }
  showAlert= (message) =>{
    this.setState({
      openAlert : true,
      childrenAlert : message
    })
  }
  closeAlert = () =>{
    this.setState({
      openAlert :  false,
      childrenAlert : ''
    })
  }
  componentDidMount() {
    startServer()
    //this.user = getUser()
  }
 
  render() {
    this.user = getUser()
    return (
      <React.Fragment>
        <Navbar history={this.props.history} user={this.user} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' render={ (props)=><Login showAlert={this.showAlert} {...props} /> }/>
          <Route path='/conta' render={ (props) => <Signup showAlert={this.showAlert} {...props} />} />
          <Route component={PageNotFound} />
        </Switch>
        <Alert open={this.state.openAlert} handleOnClick={this.closeAlert} >{this.state.childrenAlert}</Alert>
      </React.Fragment>
    
    )
  }
}

export default withRouter(App)
