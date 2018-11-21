import api from '../infra/api-config'

export function createPostit(postit){
    const url = '/todo'
    
    const data = {
        title : postit.title,
        desc : postit.text
    }

    return api().post(url, data)    
}
export function getPostitsApi(){

    const url = '/todo'

    return api().get(url)
}