import React from 'react'
import Button from './button'
import Input from './input'
import Label from './label'
import Link from './link'

import './form.css'

function Form(props) {
    return (
        <form>
            <h2 className='form__title'>{props.title}</h2>
            <p className='form__text'>{props.text}</p>
            {props.children}
        </form>
    )
}

Form.Button = Button
Form.Input = Input
Form.Label = Label
Form.Link = Link

export default Form