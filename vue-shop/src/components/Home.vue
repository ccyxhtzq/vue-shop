<template>
    <el-container>
  <el-header>
    <div class="index-header">
        <img src="../assets/1.jpg" alt="">
        <span>后台管理系统</span>
    </div>
    </el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu
        :router="true"
        :unique-opened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="">

      <!-- //左侧页面布局 -->
      <el-submenu :index="item.id +''" v-for="item in menulist" :key="item.id">
        <template slot="title">
          <i :class="iconobj[item.id]"></i>
          <span>{{ item.name }}</span>
        </template>

        <!-- 二级菜单 -->
        <el-menu-item-group>
          <el-menu-item :index="'/'+ itemgroup.path"
           v-for="itemgroup in item.group" :key="itemgroup.li">
           <template slot="title">
            <i class="el-icon-s-help"></i>
          <span>{{ itemgroup.named }}</span>
        </template>
          </el-menu-item>
        
        </el-menu-item-group>
        </el-submenu>


        <el-menu-item index="/Mylove" >
        <i class="el-icon-document"></i>
        <span slot="title">我的收藏</span>

        
      </el-menu-item>
     
      
     
     
    </el-menu>
  
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
      import { getdata } from '@/api';
      
      export default{
        data(){
          return{
            menulist:{},
            iconobj:{
                '0':'el-icon-user',
                '1':'el-icon-key',
                '2':'el-icon-shopping-bag-1',
                '3':'el-icon-copy-document'
            }
            
          }
        },
        methods :{
          handleOpen(){

          },
          handleClose(){

          }
        },
        
        mounted(){
          getdata().then((data)=>{
            console.log(data);
            this.menulist = data.data.list
            
            
          })
        }
      }
</script>
<style lang="less">
.el-header{
    background-color: black;
    color: white;
    
    font-weight: 300;
    padding: 20px;
    .index-header{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        
        img{
            width: 30px;
            height: 40px;
            border: 1px solid #ccc;
            background-color: #eee;
            
        border-radius: 50%;
        height: 100%;}
        span{
            display: flex;
            padding-left: 10px;
            font-size: 20px;
            align-content: center;
        }
    }
}
.el-container{
    height: 100%;
}
.el-aside{
    background-color: black;
    color: white;
   .el-menu{
    border-right: none;
   }
}

</style>