// import { message } from "antd"
// import Axios from "axios"

// type AxiosConfig<T extends URLList> = {
//     url: T
//     method?: "POST" | "GET" | "PUT" | "DELETE"
//     baseURL?: string
//     retry?: number
// } & (T extends keyof Query ? { query: Query[T] } : {}) &
//     (T extends keyof RequestData ? { data: RequestData[T] } : {}) &
//     (IsParamURL<T> extends true ? { param: Record<GetParamNameList<T>, string> } : {})

// export async function request<T extends URLList>(config: AxiosConfig<T>): Promise<ResponseResult | null> {
//     const retry = config.retry || 0
//     let url: string = config.url
//     for (let i = 0; i < retry; i++) {
//         try {
//             const { method, baseURL } = config
//             const params = config["query" as keyof AxiosConfig<T>] as T extends keyof Query ? Query[T] : undefined
//             const data = config["data" as keyof AxiosConfig<T>] as T extends keyof RequestData ? RequestData[T] : undefined
//             const param = config["param" as keyof AxiosConfig<T>] as IsParamURL<T> extends true ? Record<GetParamNameList<T>, string> : undefined
//             if (url.includes(":") && param) {
//                 Object.keys(param).forEach(key => {
//                     url = url.replace(`:${key}`, param[key as GetParamNameList<T>])
//                 })
//             }
//             const response = await Axios({ url, method, baseURL, params, data })
//             if (!response.data.success) {
//                 message.warning(response.data.message)
//                 return null
//             }
//             return response.data.data as ResponseResult
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return null
// }

import axios from 'axios';

// 创建一个axios实例
// export const instance = axios.create({
//     baseURL: "http://127.0.0.1/"
// })

// export function login(config: LoginData) {
//     return request({
//         baseURL,
//         url: "/login",
//         method: "POST",
//         data: config
//     })
// }

// export function getNewMind(config: NewMindData) {
//     return request({
//         baseURL,
//         url: "/mind/newMind",
//         method: "POST",
//         data: config
//     })
// }

// export function addNewPermission(config: AddNewPermissionData) {
//     return request({
//         baseURL,
//         url: "/system/permissson/add",
//         method: "POST",
//         data: config
//     })
// }

// export function deletePermissionById(config: { id: string }) {
//     return request({
//         baseURL,
//         url: "/system/permission/delete1",
//         query: config
//     })
// }

// export function batchDeletePermission(config: { ids: string }) {
//     return request({
//         baseURL,
//         url: "/system/permission/delete2",
//         query: config
//     })
// }

// export function getAvailablePermission(config: { pSetId: string }) {
//     return request({
//         baseURL,
//         url: "/system/permission/getCanSelectPermissionIds",
//         query: config
//     })
// }
