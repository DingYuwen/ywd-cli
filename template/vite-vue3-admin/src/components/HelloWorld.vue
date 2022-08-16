<!--
 * @Author:dingyuwen
 * @Date: 2022-08-10 13:23:21
 * @LastEditTime: 2022-08-10 17:30:00
 * @LastEditors:dingyuwen
 * @Description: 
-->
<script setup lang="ts">
  import { ElMessage, ElButton  } from 'element-plus';

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
