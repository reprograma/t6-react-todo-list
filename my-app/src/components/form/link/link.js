import React from 'react'
import './link.css'

function Link(props){
    return (
        <a id={props.id} className='link' 
        href={props.href}>
            {props.children}
        </a>
    )
}

export default Link;