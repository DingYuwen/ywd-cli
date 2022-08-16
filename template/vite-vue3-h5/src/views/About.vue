<template>
<div class="text-center">
  <van-tabs v-model:active="active">
    <van-tab title="标签 1">
      <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        About Page
      </h2>
    </van-tab>
    <van-tab title="标签 2">
      <div class="mt-10 inline-flex rounded-md shadow">
        <router-link
          to="/"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
        >Back Home</router-link
        >
      </div>
    </van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</div>
</template>
<script setup>
  import { Tab, Tabs } from 'vant';
  const active = ref(0);
</script>
