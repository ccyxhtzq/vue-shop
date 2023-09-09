<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  
</el-breadcrumb>


<el-card class="box-card">
  <el-row :gutter="30">
  <el-col :span="13">
    <el-input placeholder="请输入内容"  class="input-with-select" v-model="querylist">
    <el-button slot="append" icon="el-icon-search" @click="result"></el-button>
  </el-input>
</el-col>
<el-col :span="6">
    
    
    <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>

<el-dialog
@close="closeform"
  title="添加用户"
  :visible.sync="dialogVisible"
  width="40%"
  :before-close="handleClose">
  <span>
    <el-form ref="addform" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name" >
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item label="电话" prop="tel">
    <el-input v-model="ruleForm.tel"></el-input>
  </el-form-item>

  <el-form-item label="角色" prop="play">
    <el-input v-model="ruleForm.play"></el-input>
  </el-form-item>

  <el-form-item label="地址" prop="address">
    <el-input v-model="ruleForm.address"></el-input>
  </el-form-item>
</el-form>

  </span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="adduser">确 定</el-button>
  </span>
</el-dialog>
</el-col>
</el-row>

<template>
  <el-table border :data="resultlist" 
    style="width: 100%">
    <el-table-column
      prop="id"    
      label="#"
      width="70">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="130">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="130">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="电话"
      width="130">
    </el-table-column>
    <el-table-column
      prop="play"
      label="角色"
      width="130">
    </el-table-column>
    <el-table-column
      prop="online"
      label="状态"
      width="130">
      <template slot-scope="scope">
        <el-switch
  v-model="scope.row.online"
  active-color="#13ce66"
  inactive-color="#ff4949">
  
</el-switch>

      </template>
     
    </el-table-column>
    
    <el-table-column
      prop="address"
      label="地址"
      width="">
    </el-table-column> 
  </el-table>
</template>


<div class="block">
  <span class="demonstration"></span>
  <el-pagination
    layout="prev, pager, next"
    :total="10">
  </el-pagination>
</div>
</el-card>
    </div>
</template>

<script>
    import {Usergetdata} from'@/api'
    import{adduser}from'@/api'


    export default{
      
        data(){
            return{
              rules: {
          name:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 1, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
          ],
          tel:[
            { required: true, message: '请输入电话', trigger: 'blur' },
            { min: 7, max: 11, message: '请输入正确的电话号码', trigger: 'blur' }
          ], 
          play:[
            { required: true, message: '请输入您的角色名称', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
          ],
          address:[
            { required: true, message: '请输入地址', trigger: 'blur' },
            { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
          ]
            },
              ruleForm: {
                name: '',
                tel:'',
                play:'',
                address:''

              },
              dialogVisible: false,
                Userlist:[],
                querylist:'',
                resultlist:[]
                
              
                }

            },      
        methods: {
          adduser(){
            this.$refs.addform.validate((valid)=>{
              if(valid==true){
                //  this.$http.post('/api/Users',this.ruleForm)
                adduser().then((data)=>{
                  this.Userlist=data.data.data
                  console.log(this.Userlist);
                  console.log( this.ruleForm);
                }
            )
            Usergetdata().then((data)=>{
                
                this.Userlist=data.data.data
                
                console.log( this.Userlist);
           })
          }
            })
          },
          closeform(){
              this.$refs.addform.resetFields()
          },
        handleOpen(){

          },
          handleClose(){

          },
          result(){
  
            this.resultlist = this.Userlist.filter((item)=>
            
           {  
            {
              return item.name.includes(this.querylist) }
              
              
              
            
           }
            )
            
        },
        
          },
      
        mounted(){
          
          Usergetdata().then((data)=>{
                
                this.Userlist=data.data.data
                this.resultlist=data.data.data
                console.log( this.Userlist);
           })
    }}
</script>

<style lang="less" scoped>
.span{
  width: 800px;
  
}
.el-form-item{
  float: left;
  width: 100%;
}
    .el-breadcrumb{
        margin-bottom: 20px;
    }
    .el-row {
        margin-bottom: 20px;
    }
    .el-pagination{
      margin-left: 400px;
      }
</style>