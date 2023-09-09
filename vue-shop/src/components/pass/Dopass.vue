<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>权限管理</el-breadcrumb-item>
  <el-breadcrumb-item>权限处理</el-breadcrumb-item>
  
</el-breadcrumb>
<template>
  <el-table
    :data="tabeldata"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="#"
      width="180">
    </el-table-column>
    <el-table-column
      prop="level"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="authName"
      label="权限名称">
    </el-table-column>
    <el-table-column
      prop="pid"
      label="权限处理"
      width="180">
      <el-tooltip class="item" effect="dark" content="修改" placement="top-start" :enterable="false">
      <el-button type="primary" icon="el-icon-edit"></el-button></el-tooltip>
      <el-tooltip class="item" effect="dark" content="删除" placement="top-start" :enterable="false">
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-tooltip>
    </el-table-column>
  </el-table>
</template>
    </div>
</template>
<script>
import { Dopassdata } from '@/api'
export default {
    data(){
        return{
            tabeldata:[]
        }
    },
    mounted(){
        Dopassdata().then((data)=>{
            this.tabeldata=data.data.data
          
        }
    )
}
}
</script>

<style>
   
   
</style>