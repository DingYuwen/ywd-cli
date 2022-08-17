/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 18:14:46
 * @LastEditTime: 2022-08-17 23:28:21
 * @LastEditors: dingyuwen ding_yuwen@163.com
 * @Description:
 */
import { TOKEN, USER_INFO, MENU } from './constant'

// token
export const setToken = (value: string) => localStorage.setItem(TOKEN, value)
export const getToken = () => localStorage.getItem(TOKEN)
export const removeToken = () => localStorage.removeItem(TOKEN)

// unified
export const setItem = (key: string, value: any) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  return localStorage.setItem(key, value)
}
export const getItem = (key: string, type = 'local') => {
  const data = type === 'local' ? localStorage.getItem(key) : sessionStorage.getItem(key)
  if (!data) {
    return null
  }
  try {
    return JSON.parse(data)
  } catch (error) {
    return data || null
  }
}
export const removeItem = (key: string, type = 'local') => {
  type === 'local' ? localStorage.removeItem(key) : sessionStorage.removeItem(key)
}
export const removeAll = (type = 'local') => {
  type === 'local' ? localStorage.clear() : sessionStorage.clear()
}

// userInfo
export const setUser = (value: string) => localStorage.setItem(USER_INFO, value)
export const getUser = () => getItem(USER_INFO)
export const removeUser = () => localStorage.removeItem(USER_INFO)

// menu
export const setMenu = (value: string) => localStorage.setItem(MENU, value)
export const getMenu = () => getItem(MENU)
export const removeMenu = () => localStorage.removeItem(MENU)

// session
export const setSession = (key: string, value: any) => {
  const _set = JSON.stringify(value)
  return sessionStorage.setItem(key, _set)
}
