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
            },
            {
                key: "analysis",
                label: "测试1-3",
                element: <Analysis />
            },
            {
                key: "service",
                label: "测试1-4",
                element: <Service />
            }
        ]
    },
    {
        key: "plus",
        label: "测试2",
        element: <Plus />
    },
    {
        key: "unit",
        label: "测试3",
        element: <Unit />,
        children: [
            {
                key: "comprehensive",
                label: "测试3-1",
                element: <Comprehensive />
            },
            {
                key: "neighborhoods",
                label: "测试3-2",
                element: <Neighborhoods />
            },
            {
                key: "campus",
                label: "测试3-3",
                element: <Campus />
            }
        ]
    },
    {
        key: "stormThinking",
        label: "测试4",
        element: <StormThinking />,
        children: [
            {
                key: "model",
                label: "测试4-1",
                element: <Model />
            },
            {
                key: "battle",
                label: "测试4-2",
                element: <Battle />
            }
        ]
    },
    {
        key: "configuration",
        label: "测试5",
        element: <Configuration />
    }
]

export default MenuList
