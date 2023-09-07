import http from "@/utils/request"

//请求数据
export const getdata = () =>{
    return http.get('/api/home/getdata')
};
export const Usergetdata = () =>{
    return http.get('/api/Users')
}