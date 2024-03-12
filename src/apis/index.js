import Axios from 'axios'


// use firebase apis 
export const AUTH_API = Axios.create({ baseURL: "https://identitytoolkit.googleapis.com/v1" })

// use jsonplaceholder apis 
export const POSTS_API = Axios.create({ baseURL: "https://jsonplaceholder.typicode.com" })

export const SERVER_KEY = 'add your keyyy :))))';
