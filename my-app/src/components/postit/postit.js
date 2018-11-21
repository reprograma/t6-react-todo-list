import React from 'react'
import Form from '../form'

import './postit.css'

class Postit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            title: '',
            text: '',
            editing : false
        }
    }
    handlePostitClick = () => {
        console.log('handlePostitClick')
        this.setState({
            editing :  true
        })
    }
    handlePostitRemove = () =>{
        console.log('handlePostitRemove')
    }
    handlePostitSubmit = (e) => {
        e.preventDefault()
        const postit = {
            title :  this.state.title,
            text :  this.state.text
        }
    }
    setTitle = (e) => {
        const inputTitle = e.target.value
        console.log('evento ',e)
        this.setState({
            title : inputTitle
        })
    }
    setText = (event) => {
        const inputText = event.target.value
        this.setState({
            text :  inputText
        })
    }
    render() {
        return (
            <div onClick={this.handlePostitClick} className='postit'>
                <Form onSubmit={this.handlePostitSubmit}>
                    {this.state.editing  && (
                                <button 
                                    onClick={this.handlePostitRemove} 
                                    className='postit__button-remove'
                                >
                                   X 
                                </button>
                            )

                    }
                   <input 
                        type='text' 
                        className='postit__title' 
                        placeholder='Título' 
                        name='title'
                        value={this.state.title}
                        onChange={this.setTitle}
                   /> 
                   <textarea 
                        className='postit__text'
                        placeholder='Digite o texto...'
                        name='text'
                        value={this.state.text}
                        onChange={this.setText}
                   />    
                   {this.state.editing && 
                            (<button className='postit__button-completed'>
                                 Concluído
                            </button>)
                   }
                </Form>
            </div>
        )
    }
}

export default Postit