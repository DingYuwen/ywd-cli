<!--
 * @Author:dingyuwen
 * @Date: 2022-08-10 13:23:21
 * @LastEditTime: 2022-08-17 23:52:38
 * @LastEditors: dingyuwen ding_yuwen@163.com
 * @Description: 
-->
<script setup lang="ts">
  defineProps<{ msg: string }>()

  const toast = () => {
    ElMessage.success('Hello')
  }
</script>

<template>
  <h1>{{ msg }}</h1>

  <el-button @click="toast">El Message</el-button>
</template>

<style>
  .ep-button {
    margin: 4px;
  }
</style>
