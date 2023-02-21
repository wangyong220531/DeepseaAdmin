import Login from "../pages/Login"
import Home from "../components/Home"
import PoliceHandle from "../components/PoliceHandle"
import Management from "../components/Management"
import Analysis from "../components/Analysis"
import Service from "../components/Service"
import Command from "../components/Command"
import Plus from "../components/Plus"
import Unit from "../components/Unit"
import StormThinking from "../components/StormThinking"
import Model from "../components/Model"
import Battle from "../components/Battle"
import Configuration from "../components/Configuration"
import Comprehensive from "../components/Comprehensive"
import Campus from "../components/Campus"
import Neighborhoods from "../components/Neighborhoods"

const MenuList: Menu[] = [
    {
        key: "home",
        label: "首页",
        element: <Home />
    },
    {
        key: "conductor",
        label: "指挥",
        element: <Command />,
        children: [
            {
                key: "policeHandle",
                label: "警情处理记录",
                element: <PoliceHandle />
            },
            {
                key: "management",
                label: "勤务管理",
                element: <Management />
            },
            {
                key: "analysis",
                label: "勤务分析",
                element: <Analysis />
            },
            {
                key: "service",
                label: "请求服务",
                element: <Service />
            }
        ]
    },
    {
        key: "plus",
        label: "智慧+",
        element: <Plus />
    },
    {
        key: "unit",
        label: "智慧单元",
        element: <Unit />,
        children: [
            {
                key: "comprehensive",
                label: "综合",
                element: <Comprehensive />
            },
            {
                key: "neighborhoods",
                label: "小区",
                element: <Neighborhoods />
            },
            {
                key: "campus",
                label: "校园",
                element: <Campus />
            }
        ]
    },
    {
        key: "stormThinking",
        label: "风暴思维",
        element: <StormThinking />,
        children: [
            {
                key: "model",
                label: "模型",
                element: <Model />
            },
            {
                key: "battle",
                label: "技战法",
                element: <Battle />
            }
        ]
    },
    {
        key: "configuration",
        label: "系统配置",
        element: <Configuration />
    }
]

export default MenuList
