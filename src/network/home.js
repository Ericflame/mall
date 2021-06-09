import {
  myAxios
} from './myAxios'

export function getHomeMultidata() {
  return myAxios({
    url:'/home/multidata'
  })
}


