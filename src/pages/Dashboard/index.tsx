import { useNavigate, Outlet } from "react-router-dom"
import { Layout, Menu, theme } from "antd"
import MenuList from "../../routes"
import styles from "./index.module.less"

const { Header, Sider, Content } = Layout

const Dashboard: React.FC = () => {
    const nav = useNavigate()
    const {
        token: { colorBgContainer }
    } = theme.useToken()

    const test = (e: any) => {
        e.keyPath.length === 1 ? nav(e.key) : nav(`${e.keyPath[1]}/${e.key}`)
    }

    return (
        <Layout className={styles["layout"]}>
            <Sider style={{ background: colorBgContainer }}>
                <div className="logo"></div>
                <Menu mode="inline" items={MenuList.filter(item => item.key !== "login")} onClick={e => test(e)} />
            </Sider>
            <Layout>
                <Header style={{ background: colorBgContainer }}></Header>
                <Content style={{ background: colorBgContainer }}>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard
