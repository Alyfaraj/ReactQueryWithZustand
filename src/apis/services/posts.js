import { POSTS_API } from ".."

export const getPosts = async (page) => {
    return await POSTS_API.get(`/posts?_page=${page}`)
}


export const getPost = async (id) => {
    return await POSTS_API.get(`/posts/${id}`)
}



export const getPostComments = async (id) => {
    return await POSTS_API.get(`/posts/${id}/comments`)
}