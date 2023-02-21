import createStore from "easy-zustand"
import { login } from "../api"
import axios from "axios"

const useAccount = createStore({
    login: (userInput: LoginData) => {
        axios.post("/login", { userInput }).then(res => {
            const result = res.data.resData.loginResult.data.token
        })
    },
    getuser() {
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
    }
})

export default useAccount
