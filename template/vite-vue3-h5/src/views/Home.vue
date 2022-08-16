<template>
  <div class="min-h-full flex flex-col items-center justify-center">
    <img alt="logo" src="../assets/logo.jpg" />

    <HelloWorld msg="YWD-CLI" />

    <div class="w-80 my-6">
      <van-cell-group inset>
        <van-cell center title="暗黑切换">
          <template #right-icon>
            <van-switch v-model="checked" size="18px" />
          </template>
        </van-cell>
        <van-cell title="About Page" to="about" is-link />
      </van-cell-group>
    </div>

    <button
      @click="count++"
      class="my-8 py-1 px-3 border text-sm font-medium rounded-md"
    >
      Count: {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { useStore } from '@/store'
import { localStorage } from '@/utils/local-storage'

const store = useStore()
const themeStore = localStorage.get('theme')
const checked = ref<boolean>(themeStore === 'dark' ? true : false)
const count = ref(0)

watch(checked, (val) => {
  if (val) {
    store.mode = 'dark'
    localStorage.set('theme', 'dark')
  } else {
    store.mode = 'light'
    localStorage.set('theme', 'light')
  }
})
</script>
