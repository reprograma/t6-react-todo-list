import React from 'react'
import './input.css'

function Input(props){
    return (
         <input 
            type={props.type}
            id={props.id}
            className='input'
            placeholder={props.placeholder}
        />   
    )
}

export default Input

