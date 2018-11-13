import React from 'react'
import Form from '../../components/form'

function Signup(){
    return (
        <Form title='Faça Seu Cadastro' text='Preencha com Seus Dados'>
            <Form.Label htmlFor='name'>Nome:</Form.Label>
            <Form.Input id='name' type='text'/>
            <Form.Label htmlFor='email'>Email:</Form.Label>
            <Form.Input id='email' type='email'/>
            <Form.Label htmlFor='phone'>Telefone:</Form.Label>
            <Form.Input id='phone' type='tel' />
            <Form.Label htmlFor='password'>Senha:</Form.Label>
            <Form.Input id='password' type='password' />
            <Form.Button disabled>Enviar</Form.Button>
            <Form.Link href='/login'>Fazer Login</Form.Link>
        </Form>
    )
}

export default Signup