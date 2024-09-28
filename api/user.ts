import http from "@/utils/http";


export const createUser = (payload:any)=>http.post(`create/user`, payload)
export const LoginAPI = (payload: any) => http.post(`/auth/signin`, payload);