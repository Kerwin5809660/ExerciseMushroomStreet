import {request} from './request'

export function getCategoryLeftdata(subc){
  return request({
    url:"/data/category/category.json",

  })
}

export function getCategoryRightdata(subc){
  return request({
    url:"./data/category/subcategory/"+subc+".json"
  })
}

