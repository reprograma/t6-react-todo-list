import React from 'react'
import './container.css'

function Container(props){
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}

export default Container