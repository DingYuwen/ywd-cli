/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 15:22:35
 * @LastEditTime: 2022-08-17 22:11:01
 * @LastEditors: dingyuwen ding_yuwen@163.com
 * @Description: 路由导航守卫
 */
// import { nextTick } from 'vue'
// import useViewTagStore from '@/store/tags'
import { RouteLocationNormalized } from 'vue-router'
import config from '@/config'
const env = import.meta.env
const defaultTitle = config.APP_NAME

document.title = defaultTitle
export function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  // const { updateViewTags } = useViewTagStore()
  // const adminMain = document.querySelector('#adminui-main')
  // if (!adminMain) return false
  // updateViewTags({
  // 	fullPath: to.fullPath,
  // 	scrollTop: adminMain.scrollTop
  // })

}

export function afterEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  // const adminMain = document.querySelector('#adminui-main')
  // const { viewTags } = useViewTagStore()
  // if (!adminMain) return false
  // nextTick(() => {
  // 	const beforeRoute = viewTags.filter(v => v.fullPath == to.fullPath)[0]
  // 	if (beforeRoute) {
  // 		adminMain.scrollTop = beforeRoute.scrollTop || 0
  // 	}
  // })
  document.title = to.meta.title ? `[${env.VITE_APP_MODE}] - ${to.meta.title} - ${defaultTitle}` : `${defaultTitle}`
}
