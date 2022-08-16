<template>
  <van-config-provider :theme="theme">
    <router-view />
  </van-config-provider>
</template>

<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'
import { localStorage } from '@/utils/local-storage'
import { useStore } from '@/store'

const store = useStore()
const theme = ref<ConfigProviderTheme>('light')
const mode = computed(() => store.mode)

watch(mode, (val) => {
  if(val === 'dark' || localStorage.get('theme') === 'dark') {
    theme.value = 'dark'
    document.querySelector('html').setAttribute('data-theme', 'dark')
  } else {
    theme.value = 'light'
    document.querySelector('html').setAttribute('data-theme', 'light')
  }
}, { immediate: true })

</script>
<style lang="less">

body {
  overflow: hidden;
}

#app {
  height: 100%;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

[data-theme='dark'] {
  &,
  * {
    color-scheme: dark !important;
    transition: background-color 300ms;
  }
}

[data-theme='light'] {
  &,
  * {
    color-scheme: light !important;
    transition: background-color 300ms;
  }

  body {
    background-color: #eff2f5;
  }
}
</style>
