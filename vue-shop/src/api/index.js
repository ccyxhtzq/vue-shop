import http from "@/utils/request"
import  ruleForm from "@/components/user/Users"


//请求数据
export const getdata = () =>{
    return http.get('/api/home/getdata')
};
export const Usergetdata = () =>{
    return http.get('/api/Users'
   
    )
};
export const Passdata = () =>{
    return http.get('/api/Pass')
};
export const Dopassdata = () =>{
    return http.get('/api/Dopass')
};
export const adduser = () =>{
    return http.post('/api/Users',ruleForm)
};