<template>
  <div class="logo">
    <img src="../../assets/logo.png" alt="" />
    <span class="title">{{ title }}</span>
  </div>
</template>

<script lang="ts" setup>
const title = import.meta.env.VITE_TITLE
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: $layout-header-height;
  img {
    width: 40px;
    height: 40px;
  }
  .title {
    font-size: 20px;
    color: #fff;
  }
}
</style>
