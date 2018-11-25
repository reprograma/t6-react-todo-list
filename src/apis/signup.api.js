import api from '../infra/api-config'

 function signupUser(user){
    const url = '/users'

    const data  = {
        name : user.name,
        email: user.email,
        phone: user.phone,
        password: user.password
    }

    return api().post(url,data)

}

export default signupUser