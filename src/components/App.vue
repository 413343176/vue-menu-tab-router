<template>
  <div>
    <el-row :gutter="1">
      <el-col :span="2"
        ><router-link :to="{ path: '/login' }">登录界面</router-link></el-col
      >
      <el-col :span="2"
        ><router-link :to="{ name: 'Main' }">主界面</router-link></el-col
      >
      <el-col :span="4"
        ><router-link :to="{ name: 'Page1' }">Page1页面</router-link></el-col
      >
    </el-row>
    <p>{{ this.$route.name }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
