import React from 'react'
import './button.css'

function Button(props){
    let classes = 'button'

    if(props.disabled){
        classes += ' button--disabled'
    }

    return(
        <button disabled={props.desabilitado} className={classes}>
            {props.children}
        </button>
    )
}

export default Button