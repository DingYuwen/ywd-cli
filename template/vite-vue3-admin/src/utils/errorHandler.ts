/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 18:14:46
 * @LastEditTime: 2022-08-11 13:39:08
 * @LastEditors:dingyuwen
 * @Description: 全局代码错误捕捉
 */

export default (error, vm) => {
  //过滤HTTP请求错误
  if (error.status) return false

  const errorMap = {
    InternalError: 'Javascript引擎内部错误',
    ReferenceError: '未找到对象',
    TypeError: '使用了错误的类型或对象',
    RangeError: '使用内置对象时，参数超范围',
    SyntaxError: '语法错误',
    EvalError: '错误的使用了Eval',
    URIError: 'URI错误',
  }
  const errorName = errorMap[error.name] || '未知错误'

  console.warn(`[SCUI error]: ${error}`)
  console.error(error)

  vm.$nextTick(() => {
    vm.$notify.error({
      title: errorName,
      message: error,
    })
  })
}
