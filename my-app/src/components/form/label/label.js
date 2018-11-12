import React from 'react'
import './label.css'

function Label(props) {
    return (
        <label id={props.id} className='label' htmlFor={props.htmlFor}>
            {props.children}
        </label>
    )
}

export default Label