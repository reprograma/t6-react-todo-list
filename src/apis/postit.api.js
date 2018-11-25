import api from '../infra/api-config'

export function createPostit(postit){
    const url = '/todo'
    
    const data = {
        title : postit.title,
        desc : postit.text,
        color: postit.color
    }

    return api().post(url, data)    
}
export function getPostitsApi(){

    const url = '/todo'

    return api().get(url)
}

export function deletePostit(idPostit){
    const url = `/todo/${idPostit}`

    return api().delete(url)
}

export function updatePostitApi(postit){
    const url = `/todo/${postit.id}`

    const data = {
        title : postit.title,
        desc : postit.text,
        color: postit.color
    }

    return api().put(url,data)

}