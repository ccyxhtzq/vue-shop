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
    <el-input placeholder="请输入内容"  class="input-with-select" v-model="list">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</el-col>
<el-col :span="6">
    <el-button type="primary">添加用户</el-button>
</el-col>
</el-row>

<template>
  <el-table border :data="Userlist" 
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
      width="130">
    </el-table-column>
    <el-table-column
      prop="dochange"
      label="操作"
      >
      <template>
        <el-tooltip class="item" effect="dark" content="修改" placement="top-start" :enterable="false">
          <el-button type="primary" icon="el-icon-edit"></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="删除" placement="top-start" :enterable="false">
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-tooltip>
        

       
      </template>
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

    export default{
        data(){
            return{
                Userlist:[],
                list:''
                }

            },       
        methods: {
        handleOpen(){

          },
          handleClose(){

          }
              
         
        },
        
        mounted(){
          Usergetdata().then((data)=>{
                
                this.Userlist=data.data.data
           })
    }}
</script>

<style lang="less" scoped>
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