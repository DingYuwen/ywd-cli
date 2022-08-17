/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 18:14:46
 * @LastEditTime: 2022-08-17 22:11:51
 * @LastEditors: dingyuwen ding_yuwen@163.com
 * @Description:
 */
// import {getItem} from '@/utils/local'
// import {APP_LAYOUT} from '@/utils/constant'

const DEFAULT_CONFIG = {
  //标题
  APP_NAME: 'ywd-cli',
  //首页地址
  DASHBOARD_URL: '/dashboard',
  //版本号
  APP_VER: '0.1.0',
  //接口地址
  API_URL: '/api',
  //请求超时
  TIMEOUT: 10000,
  //TokenName
  TOKEN_NAME: 'Authorization',
  //Token前缀，注意最后有个空格，如不需要需设置空字符串
  TOKEN_PREFIX: 'Bearer ',
  //追加其他头
  HEADERS: {},
  //请求是否开启缓存
  REQUEST_CACHE: false,
  //布局 默认：default | 通栏：header | 经典：menu | 功能坞：dock
  //dock将关闭标签和面包屑栏
  LAYOUT: 'menu',
  //菜单是否折叠
  MENU_IS_COLLAPSE: false,
  //菜单是否启用手风琴效果
  MENU_UNIQUE_OPENED: true,
  //是否开启多标签
  LAYOUT_TAGS: true,
  //语言
  LANG: 'zh-cn',
  //主题颜色
  COLOR: '',
  //控制台首页默认布局
  DEFAULT_GRID: {
    //默认分栏数量和宽度 例如 [24] [18,6] [8,8,8] [6,12,6]
    layout: [12, 6, 6],
    //小组件分布，com取值:views/home/components 文件名
    copmsList: [['welcome'], ['about', 'ver'], ['time', 'progress']],
  },
}

// 如果生产模式，就合并动态的APP_CONFIG
// public/config.js
if (process.env.NODE_ENV === 'production' && window.APP_CONFIG) {
  // eslint-disable-next-line no-undef
  Object.assign(DEFAULT_CONFIG, APP_CONFIG)
}

export default DEFAULT_CONFIG
