<template>
  <div>
    <!-- router组件占位符 -->
    <router-view></router-view>
    <!-- 底部切换栏 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
</style>
