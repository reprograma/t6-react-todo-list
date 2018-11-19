export function getUser() {
    return localStorage.getItem('user')
}
export function setUser(user){
    localStorage.setItem('user',JSON.stringify(user))
}