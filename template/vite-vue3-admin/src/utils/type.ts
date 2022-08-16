/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 18:14:46
 * @LastEditTime: 2022-08-11 13:39:08
 * @LastEditors:dingyuwen
 * @Description: 检查变量类型
 */
const toString = Object.prototype.toString
const checkTypeFn = type => {
  return function isType(value) {
    return toString.call(value) === `[object ${type}]`
  }
}

export const isFunc = checkTypeFn('Function')
export const isUndefined = checkTypeFn('Undefined')
export const isArray = checkTypeFn('Array')
export const isString = checkTypeFn('String')
export const isObject = checkTypeFn('Object')
export const isNumber = checkTypeFn('Number')
export const isDate = checkTypeFn('Date')
export const isHtmlElement = node => node && node.nodeType === Node.ELEMENT_NODE
export const isDefined = val => val !== undefined && val !== null
