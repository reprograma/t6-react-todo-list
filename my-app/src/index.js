import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Form from './components/form'

import * as serviceWorker from './serviceWorker'

const component =
        <Form title='Login' text='Entre com Seu Email e Senha'>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Input id='email' type='text'/>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Input id='password' type='password' />
                <Form.Button disabled>Enviar</Form.Button>
                <Form.Link href='/conta'>Criar uma Conta</Form.Link>
        </Form>

ReactDOM.render(component, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
