import axios from 'axios'

export function myAxios(config) {

  //创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32',
    timeout: 5000
  })



  //axios拦截器
  //请求拦截器

  instance.interceptors.myAxios.use(config => {
    // console.log(config);
    //比如config中的一些信息不符合服务器的要求
    //比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //某些网络请求（比如登录token），必须要携带一些特殊的信息
    return config
  }, err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}
