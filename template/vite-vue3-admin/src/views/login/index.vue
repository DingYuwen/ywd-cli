<!--
 * @Author:dingyuwen
 * @Date: 2022-08-10 18:14:46
 * @LastEditTime: 2022-08-17 23:49:22
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
      <div v-if="!isLogin" m-20 justify-center items-center flex>
        <el-button type="primary" round @click="login">sign in</el-button>
      </div>
      <div v-else m-20 animate-bounce-alt animate-count-infinite animate-duration-1s> Loading... </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import PasswordForm from './components/passwordForm.vue'
  // import PhoneForm from './components/phoneForm.vue'
  import { ref } from 'vue'
  import { setItem } from '@/utils/local'
  import { TOKEN } from '@/utils/constant'
  const router = useRouter()
  const isLogin = ref(false)

  const login = () => {
    isLogin.value = true
    setTimeout(() => {
      isLogin.value = false
      setItem(TOKEN, 'haslogin')
      router.replace({ path: '/' })
      ElMessage({
        type: 'success',
        message: 'Login Success 登录成功',
      })
    }, 2000)
  }
</script>
