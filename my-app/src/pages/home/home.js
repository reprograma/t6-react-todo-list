import React from 'react'
import { getUser } from '../../infra/local-storage'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    constructor(){
        super()
    }
    // componentDidMount() {
    //     console.log('hello componentDidMount foi criado')
    // }
    // componentWillUnmount() {
    //     console.log('hello componentWillUnmount morreu :(')
    // }
    render(){
        if(getUser()){
             return <div>Hello Home</div>   
        }else{
             return <Redirect to='/login' />
        }
    }
} 
export default Home