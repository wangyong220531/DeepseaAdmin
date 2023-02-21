import Mock from "mockjs"
import loginResult from "./login.json"

Mock.mock("/login", "post", options => {
    return {
        resCode: 200,
        resMsg: "登录成功",
        resData: loginResult
    }
})

export default Mock
