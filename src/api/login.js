import request from '@/utils/http'

//登出

export function login(data) {
  return request({
    url: `/wp-json/jwt-auth/v1/token`,
    method: 'post',
    data
  })
}
// export function submit(data) {
//     return request({
//       url: `/edtv/interaction/submit`,
//       method: 'post',
//       data
//     })
//   }