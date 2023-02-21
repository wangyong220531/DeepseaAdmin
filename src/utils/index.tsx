import { useLocation } from "react-router-dom"

export function usePathList() {
    const location = useLocation()
    return location.pathname.split("/").filter(path => path)
}
