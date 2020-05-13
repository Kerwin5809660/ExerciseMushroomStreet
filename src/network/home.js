import {request} from './request'

export function getHomeMultidata(){
  return request({
    url:"api/data/home/multidata/multidata.json",

  })
}

export function getHomeGoods(type,page){
  return request({
    url:"/data/home/data/"+type+"/"+page+".json"
  })
}
