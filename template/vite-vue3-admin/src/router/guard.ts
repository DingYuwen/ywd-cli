/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 15:22:35
 * @LastEditTime: 2022-08-10 15:59:15
 * @LastEditors:dingyuwen
 * @Description: 路由导航守卫
 */
// import { nextTick } from 'vue'
// import useViewTagStore from '@/store/tags'

export function beforeEach() {
  // const { updateViewTags } = useViewTagStore()
  // const adminMain = document.querySelector('#adminui-main')
  // if (!adminMain) return false
  // updateViewTags({
  // 	fullPath: to.fullPath,
  // 	scrollTop: adminMain.scrollTop
  // })
}

export function afterEach() {
  // const adminMain = document.querySelector('#adminui-main')
  // const { viewTags } = useViewTagStore()
  // if (!adminMain) return false
  // nextTick(() => {
  // 	const beforeRoute = viewTags.filter(v => v.fullPath == to.fullPath)[0]
  // 	if (beforeRoute) {
  // 		adminMain.scrollTop = beforeRoute.scrollTop || 0
  // 	}
  // })
}
