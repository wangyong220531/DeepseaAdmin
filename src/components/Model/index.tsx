import { Button, Table, Modal, Form, Select, Input, DatePicker } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useState, useEffect } from "react"
import { getNewMind } from "../../api/index"
import LocaleProvider from "antd/es/locale"
import zh_CN from "antd/lib/locale/zh_CN"
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

const Model: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOk = () => setIsModalOpen(false)

    const handleCancle = () => setIsModalOpen(false)

    const columns: ColumnsType<DataType> = [
        {
            title: "序号",
            dataIndex: "order",
            key: "order",
            align: "center"
        },
        {
            title: "模型",
            dataIndex: "model",
            key: "model",
            align: "center"
        },
        {
            title: "名称",
            dataIndex: "name",
            key: "name",
            align: "center"
        },
        {
            title: "内容",
            dataIndex: "content",
            key: "content",
            align: "center"
        },
        {
            title: "目标",
            dataIndex: "goal",
            key: "goal",
            align: "center"
        },
        {
            title: "时间",
            dataIndex: "time",
            key: "time",
            align: "center"
        },
        {
            title: "单元",
            dataIndex: "unit",
            key: "unit",
            align: "center"
        },
        {
            title: "负责人",
            dataIndex: "principal",
            key: "principal"
        },
        {
            title: "评估",
            dataIndex: "evaluate",
            key: "evaluate",
            align: "center"
        },
        {
            title: "模块",
            dataIndex: "module",
            key: "module",
            align: "center"
        },
        {
            title: "状态",
            dataIndex: "status",
            key: "status",
            align: "center"
        },
        {
            title: "操作",
            dataIndex: "operate",
            key: "operate",
            render: (text: any, record: any) => (
                <>
                    <div className={styles.operate}>
                        <Button type="primary" onClick={() => edit(record.key)}>
                            编辑
                        </Button>
                        <Button onClick={() => del(record.key)} danger>
                            删除
                        </Button>
                    </div>
                </>
            )
        }
    ]

    let data: DataType[] = [
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
        }
    ]

    // useEffect(() => {
    //     getNewMind({
    //         content: "",
    //         createPerson: "",
    //         mindNo: "",
    //         model: "",
    //         name: "",
    //         remark: "",
    //         target: "",
    //         time: "",
    //         type: "",
    //         unitName: "",
    //         unitNo: ""
    //     }).then(res => {
    //         if (!res) {
    //             console.log(res)
    //         }
    //     })
    // }, [])

    const edit = (key: number) => {
        setIsModalOpen(true)
    }

    const del = (key: number) => {
        data = data.filter(item => Number(item.key) !== Number(key))
    }

    const models = [
        { value: "模型一", label: "模型一" },
        { value: "模型二", label: "模型二" },
        { value: "模型三", label: "模型三" }
    ]

    const targets = [
        { value: "目标一", label: "目标一" },
        { value: "目标二", label: "目标二" },
        { value: "目标三", label: "目标一" }
    ]

    const units = [
        { value: "负责人1号", label: "二单元" },
        { value: "二单元", label: "二单元" },
        { value: "三单元", label: "三单元" }
    ]

    const chargers = [
        { value: "负责人1号", label: "负责人1号" },
        { value: "负责人2号", label: "负责人2号" },
        { value: "负责人3号", label: "负责人3号" }
    ]

    const evaluations = [
        { value: "一星", label: "一星" },
        { value: "二星", label: "二星" },
        { value: "三星", label: "三星" }
    ]

    const modules = [
        { value: "模块一", label: "模块一" },
        { value: "模块二", label: "模块二" },
        { value: "模块三", label: "模块三" }
    ]

    const status = [
        { value: "状态一", label: "状态一" },
        { value: "状态二", label: "状态二" },
        { value: "状态三", label: "状态三" }
    ]

    return (
        <>
            <Table columns={columns} dataSource={data} rowKey={record => record.key} />
            <Modal
                open={isModalOpen}
                footer={[
                    <>
                        <Button onClick={handleOk} type="primary">
                            确认
                        </Button>
                        <Button onClick={handleCancle}>取消</Button>
                    </>
                ]}
            >
                <Form>
                    <Form.Item label="模型">
                        <Select style={{ width: "180px" }} options={models} defaultValue={models[0].value} />
                    </Form.Item>
                    <Form.Item label="名称">
                        <Input style={{ width: "180px" }} placeholder="请输入名称" />
                    </Form.Item>
                    <Form.Item label="内容">
                        <Input style={{ width: "180px" }} placeholder="请输入内容" />
                    </Form.Item>
                    <Form.Item label="目标">
                        <Select style={{ width: "180px" }} options={targets} defaultValue={targets[0].value} />
                    </Form.Item>
                    <Form.Item label="时间">
                        <LocaleProvider locale={zh_CN}>
                            <DatePicker style={{ width: "180px" }} showTime />
                        </LocaleProvider>
                    </Form.Item>
                    <Form.Item label="单元">
                        <Select style={{ width: "180px" }} options={units} defaultValue={units[0].value} />
                    </Form.Item>
                    <Form.Item label="负责人">
                        <Select style={{ width: "180px" }} options={chargers} defaultValue={chargers[0].value} />
                    </Form.Item>
                    <Form.Item label="评估">
                        <Select style={{ width: "180px" }} options={evaluations} defaultValue={evaluations[0].value} />
                    </Form.Item>
                    <Form.Item label="模块">
                        <Select style={{ width: "180px" }} options={modules} defaultValue={modules[0].value} />
                    </Form.Item>
                    <Form.Item label="状态">
                        <Select style={{ width: "180px" }} options={status} defaultValue={status[0].value} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Model
