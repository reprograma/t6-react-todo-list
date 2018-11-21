import React from 'react'
import Form from '../form'

import './postit.css'

class Postit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
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
    render() {
        return (
            <div onClick={this.handlePostitClick} className='postit'>
                <Form>
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
                   /> 
                   <textarea 
                        className='postit__text'
                        placeholder='Digite o texto...'
                        name='text'
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