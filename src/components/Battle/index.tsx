import { Button, Table } from "antd"
import type { ColumnsType } from "antd/es/table"
import styles from "./index.module.less"

interface DataType {
    key: string
    order: number
    model: string
    name: string
    content: string
    goal: string
    time: string
    unit: string
    principal: string
    evaluate: string
    module: string
    status: string
    operate: string
}

const columns: ColumnsType<DataType> = [
    {
        title: "序号",
        dataIndex: "order",
        key: "order"
    },
    {
        title: "技战法",
        dataIndex: "model",
        key: "model"
    },
    {
        title: "名称",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "内容",
        dataIndex: "content",
        key: "content"
    },
    {
        title: "目标",
        dataIndex: "goal",
        key: "goal"
    },
    {
        title: "时间",
        dataIndex: "time",
        key: "time"
    },
    {
        title: "单元",
        dataIndex: "unit",
        key: "unit"
    },
    {
        title: "负责人",
        dataIndex: "principal",
        key: "principal"
    },
    {
        title: "评估",
        dataIndex: "evaluate",
        key: "evaluate"
    },
    {
        title: "模型",
        dataIndex: "module",
        key: "module"
    },
    {
        title: "状态",
        dataIndex: "status",
        key: "status"
    },
    {
        title: "操作",
        dataIndex: "operate",
        key: "operate",
        render: () => (
            <>
                <div className={styles["operate"]}>
                    <Button type="primary">编辑</Button>
                    <Button danger>删除</Button>
                </div>
            </>
        )
    }
]

const data: DataType[] = [
    {
        key: "0",
        order: 0,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "1",
        order: 1,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "2",
        order: 2,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "3",
        order: 3,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "4",
        order: 4,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "5",
        order: 5,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "6",
        order: 6,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "7",
        order: 7,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "8",
        order: 8,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "9",
        order: 9,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "10",
        order: 10,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "11",
        order: 11,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "12",
        order: 12,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "13",
        order: 13,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "14",
        order: 14,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "15",
        order: 15,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "16",
        order: 16,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "17",
        order: 17,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "18",
        order: 18,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "19",
        order: 19,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "20",
        order: 20,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "21",
        order: 21,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "22",
        order: 22,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "23",
        order: 23,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "24",
        order: 24,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "25",
        order: 25,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "26",
        order: 26,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "27",
        order: 27,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "28",
        order: 28,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    },
    {
        key: "29",
        order: 29,
        model: "未知",
        name: "未知",
        content: "未知",
        goal: "未知",
        time: "未知",
        unit: "未知",
        principal: "未知",
        evaluate: "未知",
        module: "未知",
        status: "未知",
        operate: "未知"
    }
]

const Model: React.FC = () => {
    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default Model
