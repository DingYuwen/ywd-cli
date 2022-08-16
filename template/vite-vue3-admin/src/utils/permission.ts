/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 18:14:46
 * @LastEditTime: 2022-08-11 13:39:37
 * @LastEditors:dingyuwen
 * @Description: 是否有xxx权限, 暂时不对传入的值做类型判断
 */
import { getItem } from './local'
import { PERMISSIONS, USER_INFO } from './constant'

export function permission(data) {
  const permissions = getItem(PERMISSIONS)
  if (!permissions) return false
  return permissions.includes(data)
}

export function rolePermission(data) {
  const userInfo = getItem(USER_INFO)
  if (!userInfo) return false
  const role = userInfo.role
  if (!role) return false
  return role.includes(data)
}
