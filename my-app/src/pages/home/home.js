import React from 'react'
import { getUser } from '../../infra/local-storage'
import { Redirect } from 'react-router-dom'
import Postit from '../../components/postit'
import { getPostitsApi } from '../../apis/postit.api'

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
        if(getUser()){
             return (
                <div className='home'>
                        <Postit updatePostits={this.getPostits} />
                        {this.state.postits.map((item,index)=>(
                            <Postit 
                                id={item.id}
                                title={item.title}
                                text={item.desc}
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