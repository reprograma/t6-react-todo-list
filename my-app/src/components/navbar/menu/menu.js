import React from 'react'
import { Link,Redirect } from 'react-router-dom'
import './menu.css'


class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = { open : false}
    }

    handleOpenOrClose = () => {
        this.setState({ open : !this.state.open})
    }
    handleLoginOrLogout = (e) => {
        e.preventDefault()
        if(this.props.user){
            localStorage.clear()
        }
        this.props.history.push('/login')
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
                            { this.props.user ? 'Sair' : 'Login'}
                          </a>
                      </li> 
                </ul>
            </div>
        )
        
    }
}

export default Menu