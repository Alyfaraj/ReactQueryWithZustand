import { AUTH_API, SERVER_KEY } from ".."

export const login = async ({ email, password }) => {
    return await AUTH_API.post(`/accounts:signInWithPassword?key=${SERVER_KEY}`,
        {
            email, password
        })
}