<template>
  <div>
    <el-card class="box-card">
      <div class="indeximage">
        <img src="../assets/1.jpg" alt="">
        <span>超级管理员</span>
        
        <el-button @click="exit" type="danger">退出系统</el-button>
      </div>
      <!-- <el-calendar v-model="value"> -->
<!-- </el-calendar> -->
</el-card>
  
  <div ref="echarts1" id="lqq"></div>
</div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  methods:{
      exit(){
        this.$router.push('/')
      }
  },
  
    mounted(){
      this.$refs.echarts1
      var mychart = echarts.init( this.$refs.echarts1)
    var option = {
       title: {
      text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
mychart.setOption(option);




    }

}

</script>

<style lang="less" scoped>
.el-button{
  float: right;
  width: 100px;
  margin-top: 20px;
}
#lqq{
  width: 700px;
  height: 400px;
  margin-left:100px ;
  margin-top:30px ;
}
.el-calendar{
  width: 100%;
  height: 500px;

}
.indeximage{
  
  
 
  img{
    
  width: 90px;
  height: 90px;
  border-radius: 50%;
  vertical-align: middle;}
  span{
    height:90px;
    margin-left:40px ;
   
  }
}
</style>