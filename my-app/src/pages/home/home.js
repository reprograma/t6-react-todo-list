import React from 'react'
import { getUser } from '../../infra/local-storage'
import { Redirect } from 'react-router-dom'
import Postit from '../../components/postit'
import { getPostitsApi } from '../../apis/postit.api'

import './home.css'

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            postits : []
        }
    }
    componentDidMount() {
        console.log('hello componentDidMount foi criado')
        this.getPostits()
    }
    componentWillUnmount() {
        console.log('hello componentWillUnmount morreu :(')
    }
    getPostits = () => {
        getPostitsApi()
            .then((response) => {
                console.log(response)
                this.setState({
                    postits :  response.data.todo
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    render(){
        const user  = this.props.user ? this.props.user : getUser()
        if(user){
             return (
                <div className='home'>
                        <Postit updatePostits={this.getPostits} />
                        {this.state.postits.map((item,index)=>(
                            <Postit 
                                key={item._id}
                                id={item._id}
                                title={item.title}
                                text={item.desc}
                                color={item.color}
                                updatePostits={this.getPostits}
                            />
                        ))}
                   </div>
                )
                    
        }else{
             return <Redirect to='/login' />
        }
    }
} 
export default Home