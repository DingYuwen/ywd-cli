<!--
 * @Author:dingyuwen
 * @Date: 2022-08-10 18:14:46
 * @LastEditTime: 2022-08-11 20:22:34
 * @LastEditors: dingyuwen ding_yuwen@163.com
 * @Description: 
-->
<template>
  <div h-full text-center flex all:transition-400>
    <div ma>
      <el-space m-4>
        <div i-ep-expand m-2 />
        <i-ep-add-location m-2 />
        <i-ep-aim m-2 />
        <i-carbon-cyclist m-2 />
        <div i-ep-check m-2 />
        <div i-ep-fold m-2 />
      </el-space>
      <!-- <div
				v-loading="{ text: 'Loading...' }"
				p-2
				w-300px
				h-300px
				ma
			>
				Loading Area
			</div> -->
      <div m-20 text-5xl animate-bounce-alt animate-count-infinite animate-duration-1s> Loading... </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import PasswordForm from './components/passwordForm.vue'
  // import PhoneForm from './components/phoneForm.vue'
  import { ref } from 'vue'

  const showWechatLogin = ref(false)

  const wechatLogin = () => {}
</script>
