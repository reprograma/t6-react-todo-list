import React from 'react'
import './input.css'

// function Input2(props){
//     return (
//          <input 
//             type={props.type}
//             id={props.id}
//             className='input'
//             placeholder={props.placeholder}
//         />   
//     )
// }

class Input extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            message : null
        }
    }
    hasError = () => {
        if(this.state.message === null || this.state.message !== ''){
            return true
        }else{
            return false
        }
    }

    handleChange = (e) => {
        const value = e.target.value
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let message = ''
        if(this.props.required && value.trim() === ''){
            message = 'Campo Obrigatório'   
        }else if(value && this.props.minLength && value.length < (this.props.minLength)){
            message = `Digite pelo menos ${this.props.minLength} caracteres`
        }else if(this.props.type==='email' && !regex.test(value)){
            message= 'Digite um email válido'
        }
       this.setState({ message : message  },this.props.onChange)
       
    }
    render() {
        return (
            <React.Fragment>
                 <input 
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                    type={this.props.type}
                    id={this.props.id}
                    className='input'
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                 /> 
                <p className='input__erro'>{this.state.message}</p> 
            </React.Fragment>
        
        )
    }

}

export default Input

