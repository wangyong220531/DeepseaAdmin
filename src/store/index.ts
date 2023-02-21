import createStore from "easy-zustand"
import { login } from "../api"

const useAccount = createStore({
    getuser() {
        // if (sessionStorage.getItem("user")) {
        //     return JSON.parse(sessionStorage.getItem("user"))
        // }
        return
    },
    setuser(data: any) {
        sessionStorage.setItem("user", JSON.stringify(data))
    },
    getToken() {
        if (sessionStorage.getItem("token")) {
            return sessionStorage.getItem("token")
        }
        return
    },
    setToken(value: string) {
        sessionStorage.setItem("user", value)
    },
    login: (userInput: LoginData) => {
        login(userInput).then(res => {})
    }
})

export default useAccount
