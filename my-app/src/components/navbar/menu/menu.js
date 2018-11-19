import React from 'react'
import { Link,Redirect } from 'react-router-dom'
import { getUser, clearUser } from '../../../infra/local-storage'
import './menu.css'


class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = { open : false}
        this.user = getUser()
    }
    handleOpenOrClose = () => {
        this.setState({ open : !this.state.open})
    }
    handleLoginOrLogout = (e) => {
        e.preventDefault()
        console.log(this.user)
        if(this.user){
            clearUser()
        }
        window.location.reload();
    }
    render(){
        console.log('hello render')    
        let classesOfButton = 'menu__button'
        let classesOfOptions = 'menu__options'

        if(this.state.open){
            classesOfButton += ' menu__button--open'
            classesOfOptions += ' menu__options--open'
        }
        return (
            <div>
                <a  className={classesOfButton} onClick={this.handleOpenOrClose}  >
                    Menu
                </a>
                <ul className={classesOfOptions} onClick={this.handleOpenOrClose}>
                      <li>
                          <Link to='/quem-somos'>
                            Quem Somos
                          </Link>
                      </li>  
                      <li>
                          <Link to='/contato'>
                            Contato
                          </Link>
                      </li> 
                      <li>
                          <a onClick={this.handleLoginOrLogout}>
                            { this.user ? 'Sair' : 'Login'}
                          </a>
                      </li> 
                </ul>
            </div>
        )
        
    }
}

export default Menu