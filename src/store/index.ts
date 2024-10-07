import createStore from "easy-zustand"
import axios from "axios"

const useAccount = createStore({
    login: (userInput: LoginData) => {
        axios.post("/login", { userInput }).then(res => {
            const result = res.data.resData.loginResult.data
            sessionStorage.setItem("token", result.token)
        })
    }
})

export default useAccount
