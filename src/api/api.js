import request from '@/utils/http'

//登出

export function get_posts(params) {
  return request({
    url: `/wp-json/wp/v2/posts`,
    method: 'get',
    params
  })
}
export function post_posts(data) {
  return request({
    url: `/wp-json/wp/v2/posts`,
    method: 'post',
    data
  })
}

//获取用户
export function get_users(params) {
  return request({
    url: `/wp-json/wp/v2/users`,
    method: 'get',
    params
  })
}
export function post_users(data) {
  return request({
    url: `/wp-json/wp/v2/users`,
    method: 'post',
    data
  })
}
