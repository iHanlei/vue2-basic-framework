<template>
  <div class="app-container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header, .el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  background-color: #B3C0D1;
}

.el-aside {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  background-color: #D3DCE6;
}

.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  background-color: #E9EEF3;
}
</style>
