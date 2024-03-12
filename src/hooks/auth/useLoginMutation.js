import { useMutation } from "@tanstack/react-query"
import { login } from "../../apis/services/auth"
import { Alert } from "react-native"
import { useAuthStore } from "../../store"


export const useLoginMutation = () => {
    // zustand store 
    const authStore = useAuthStore()

    // react query 
    const loginMutation = useMutation({
        mutationKey: "login",
        mutationFn: (loginData) => login(loginData),
        onSuccess: ({ data }) => {
            authStore.login(data.idToken)
        },
        onError: (err) => {
            const message = err.response.data.error.message
            Alert.alert(message)
        }
    })
    return loginMutation
}


