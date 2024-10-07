import React from "react"
import { Button, Form, Input, message } from "antd"
import { useState } from "react"
import styles from "./index.module.less"
import useAccount from "../../store"

const Login: React.FC = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const account = useAccount()
    const [token, setToken] = useState("")

    const submit = () => {
        account[0].login({
            account: "wangyong@163.com",
            code: "123456",
            password: "1234567890",
            username: "wangyong",
            uuid: "12345678"
        })
        // setToken(sessionStorage.getItem("token"))
    }

    return (
        <>
            <Form className={styles.form} name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} initialValues={{ remember: true }} autoComplete="off">
                <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请输入用户名！" }]}>
                    <Input value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码！" }]}>
                    <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item className={styles.submitBox} wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={submit} onKeyUp={() => submit}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Login
