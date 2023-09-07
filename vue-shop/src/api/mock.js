import Mock from'mockjs'

Mock.mock('http://127.0.0.1:9000/api/home/getdata',function(){
    console.log('拦截到了');
    
    return{
        msg:'成功请求接口',
            list:[
                
                    {id:0,
                    name:'用户管理',
                
                    group:[ 
                        {named:'用户列表',
                        path:'Users'}

                        
                        
                        
                         
                    
            ]},
                {
                    id:1,
                    name:'权限管理',
                    group:[
                        
                        {named:'权限列表',
                        path:'pass'},

                        {
                          named:'权限处理',
                          path:'dopass'}
                    ]

                },
                {
                    id:2,
                    name:'订单管理',
                    group:[
                        
                        {named:'订单列表',
                        path:'shoplist'},

                       
                ]
                },
                {
                    id:3,
                    name:'数据统计',
                    group:[
                    {named:'数据列表',
                        path:'datalist'},

                ]
                }
            ]
        
    }
})

Mock.mock('http://127.0.0.1:9000/api/Users',function(){
    return{
        data:[{id:0,
             date:"2023-9-6" ,
             name:"张三", 
             tel: "123456",
             play:"管理员",
             online:true ,
             address:"重庆市",
             dochange:"eee"
            },{id:1,
                date:"2023-9-6" ,
                name:"李四", 
                tel: "123",
                play:"管理员2",
                online:false ,
                address:"重庆市",
                dochange:"eee"}]
    }
})
