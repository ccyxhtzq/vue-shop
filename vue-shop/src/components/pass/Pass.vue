<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>权限管理</el-breadcrumb-item>
  <el-breadcrumb-item>权限列表</el-breadcrumb-item>
  
</el-breadcrumb>

<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="#"
      width="180">
    </el-table-column>
    <el-table-column
      prop="authName"
      label="权限名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="aute"
      label="权限等级">
    </el-table-column>
  </el-table>
</template>
    </div>
</template>

<script>
import { Passdata } from '@/api'
export default {
        data(){
            return{
                tableData:[]
            }
            
        },
        mounted(){
            Passdata().then((data)=>{
                this.tableData = data.data.data
                console.log(this.tableData);
            })
        }
        
}
</script>

<style>
    .el-table{
        margin-top:40px ;
    }
</style>