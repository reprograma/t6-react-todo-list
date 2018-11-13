import React from 'react'
import Form from '../../components/form'

function Login(){
    return(
        <Form title='Login' text='Entre com Seu Email e Senha'>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Input id='email' type='text'/>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Input id='password' type='password' />
            <Form.Button disabled>Enviar</Form.Button>
            <Form.Link href='/conta'>Criar uma Conta</Form.Link>
        </Form> 
    )
}

export default Login