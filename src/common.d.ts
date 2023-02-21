interface SubMenu {
    name: string
    key: string
    element?: React.ReactNode
}

interface Menu {
    label: string
    key: string
    element?: React.ReactNode
    children?: Menu[]
}
