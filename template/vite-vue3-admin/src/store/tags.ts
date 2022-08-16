/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 16:08:36
 * @LastEditTime: 2022-08-10 16:08:45
 * @LastEditors:dingyuwen
 * @Description:
 */
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'tags',
  state: () => ({
    // light || dark
    mode: '',
  }),
})
