<template>
    <div class="login_container">
        <div class="login_box">
            <div class="head_box">
                <img src="../assets/1.jpg" alt="">
            </div>
     <el-form  ref="loginref"  :rules="rules" :model="loginform" class="login_input">
  <el-form-item prop="username">
    <el-input v-model="loginform.username" prefix-icon="el-icon-user-solid"
></el-input>
  </el-form-item>
  <el-form-item prop="password">
    <el-input type="password" v-model="loginform.password" prefix-icon="el-icon-view"
></el-input>
  </el-form-item>
  <div class="login_button">
  <el-button @click="loginrefvite" :plain="true">登录</el-button>
<el-button @click="resetloginref">重置</el-button></div>
</el-form>

        </div>
        
  
    </div>
    
 


</template>
<script>
    export default{
       data(){
        return{
            loginform:{
                username:'admin',
                password:'123456'
            },
             rules: {
          username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ]
            }
        }
       },
       methods:{
        resetloginref(){
            this.$refs.loginref.resetFields();
        },
        loginrefvite(){
        //    登陆成功
            this.$refs.loginref.validate((valid)=>{
              if(valid==true){
                this.$message({
          message: '恭喜你登陆成功',
          type: 'success'
        });
            this.$router.push('/home')}
        else{
            
              this.$message({
          showClose: true,
          message: '登陆失败',
          type: 'warning'
            });
        }
        })
           
            
        }
    }
}

        
            
    
</script>
<style lang="less" scoped>
.login_container{
    background-color: #2e4e6e;
    background-size: 100% 100%;
    height: 100% ;
    width: 100%;
    }
.login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 4px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        
    }
    .head_box{
        width: 100px;
        height: 100px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        background-color: #fff;
        
        transform: translate(-50%,-50%);

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
    .login_input{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 50px 60px;
        box-sizing: border-box;
    }
    .login_button{
        display: flex;
        justify-content: center;
        padding: 10px;
        button{
            margin:  0 30px;
        }
    }
</style>