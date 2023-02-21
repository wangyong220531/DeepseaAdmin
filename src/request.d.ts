type URLList = keyof ResponseResult

type IsParamURL<T extends string> = T extends `${infer First}:${infer Rest}` ? true : false

type FirstParam<T extends string> = T extends `${infer First}/${infer Rest}` ? First : T

type GetParamNameList<T extends string, K = never> = T extends `${infer First}/:${infer Rest}` ? GetParamNameList<Rest, K | FirstParam<Rest>> : K

interface RequestData {
    "/mind/newMind": NewMindData
    "/mind/selectMindList": QueryMindData
    "/system/permissson/add": AddNewPermissionData
    "/login": LoginData
}

interface Query {
    "/system/permission/delete1": { id: string }
    "/system/permission/delete2": { ids: string }
    "/system/permission/getCanSelectPermissionIds": { pSetId: string }
}

interface ResponseResult {
    "/mind/newMind": NewMindResult
    "/mind/selectMindList": QueryMindResult
    "/system/permissson/add": any
    "/system/permission/delete1": any
    "/system/permission/delete2": any
    "/system/permission/getCanSelectPermissionIds": any
    "/login": LoginResponseResult
}
