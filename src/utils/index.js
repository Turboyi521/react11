/*
包含n个工具函数的模块
 */

export function getRedirectPath(type, header) {
  let path = ''
  if(type==='laoban') {
    path = '/laoban'
  } else {
    path = '/dashen'
  }

  if(!header) {
    path += 'info'
  }

  return path
}