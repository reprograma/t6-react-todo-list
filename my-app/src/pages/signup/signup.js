import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'
import signupUser from '../../apis/signup.api'
import { setUser } from '../../infra/local-storage'

// function Signup(){
//     return (
//         <Container>
//             <Form title='Faça Seu Cadastro' text='Preencha com Seus Dados'>
//                 <Form.Label htmlFor='name'>Nome:</Form.Label>
//                 <Form.Input id='name' type='text'/>
//                 <Form.Label htmlFor='email'>Email:</Form.Label>
//                 <Form.Input id='email' type='email'/>
//                 <Form.Label htmlFor='phone'>Telefone:</Form.Label>
//                 <Form.Input id='phone' type='tel' />
//                 <Form.Label htmlFor='password'>Senha:</Form.Label>
//                 <Form.Input id='password' type='password' />
//                 <Form.Button disabled>Enviar</Form.Button>
//                 <Form.Link href='/login'>Fazer Login</Form.Link>
//             </Form>
//         </Container>
//     )
// }

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = { disabled : true }
        this.name =  React.createRef()
        this.email = React.createRef()
        this.phone = React.createRef()
        this.password = React.createRef()
    }
    handleSubmit= (e) => {

     e.preventDefault()

     const inputName = this.name.current
     const inputEmail = this.email.current
     const inputPhone = this.phone.current
     const inputPassword = this.password.current

     const user = {
         name: inputName.getValue(),
         email: inputEmail.getValue(),
         phone: inputPhone.getValue(),
         password: inputPassword.getValue(),
      }

      signupUser(user)
        .then((response) => {
            setUser({ email : user.email})
            this.props.history.push('/')
            this.props.showAlert('Usuário Cadastrado com Sucesso')
        })
        .catch((error) => {
            console.log(error)
        })

    }
    onDisabledButton = () => {
        const inputName = this.name.current
        const inputEmail = this.email.current
        const inputPhone = this.phone.current
        const inputPassword = this.password.current

        if(inputName.hasError() 
            || inputEmail.hasError()
            || inputPhone.hasError()
            || inputPassword.hasError()){

            this.setState({ disabled : true})

        }else{
            this.setState({ disabled : false})
        }
    }
    render(){
        return (
            <Container>
                <Form title='Faça Seu Cadastro' text='Preencha com Seus Dados' onSubmit={this.handleSubmit}>
                    <Form.Label htmlFor='name'>Nome:</Form.Label>
                    <Form.Input ref={this.name} id='name' type='text' onChange={this.onDisabledButton} required/>
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Input ref={this.email} id='email' type='email'  onChange={this.onDisabledButton} required />
                    <Form.Label htmlFor='phone'>Telefone:</Form.Label>
                    <Form.Input ref={this.phone} id='phone' type='tel' onChange={this.onDisabledButton} minLength={10} />
                    <Form.Label htmlFor='password'>Senha:</Form.Label>
                    <Form.Input ref={this.password} id='password' type='password' onChange={this.onDisabledButton} minLength={6} required />
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='/login'>Fazer Login</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Signup