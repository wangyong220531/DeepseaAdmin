interface NewMindData {
    content: string
    createPerson: string
    mindNo: string
    model: string
    name: string
    pageNum?: number
    pageSize?: number
    remark: string
    target: string
    time: string
    type: string
    unitName: string
    unitNo: string
}

interface QueryMindData {
    createPerson: string
    mindNo: string
    model: string
    name: string
    pageNum: number
    pageSize: string
    type: string
    unitNo: string
}

interface AddNewPermissionData {
    createOperator: string
    createTime: string
    id: number
    parentId: number
    parentName: string
    permissionComment: string
    permissionLevel: number
    permissionName: string
    permissionPath: string
    remark: string
    status: 0
    updateOperator: string
    updateTime: string
}

interface LoginData {
    account: string
    code: string
    password: string
    username: string
    uuid: string
}
