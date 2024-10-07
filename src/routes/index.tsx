import Login from "../pages/Login"
import Home from "../components/Home"
import Command from "../components/Command"
import PoliceHandle from "../components/PoliceHandle"
import Management from "../components/Management"

const MenuList: Menu[] = [
    {
        key: "home",
        label: "首页",
        element: <Home />
    },
    {
        key: "conductor",
        label: "测试1",
        element: <Command />,
        children: [
            {
                key: "policeHandle",
                label: "测试1-1",
                element: <PoliceHandle />
            },
            {
                key: "management",
                label: "测试1-2",
                element: <Management />
            }
        ]
    }
]

export default MenuList
