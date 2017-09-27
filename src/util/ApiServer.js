import API from './api'
import axios from 'axios'
import jsonp from './myJsonp'

const apiFactory = ({url, params, method, dataName})=>{
  console.log(url, params, method)
  const request = method === 'jsonp' ?
    jsonp(url, params, {param: 'jsonpCallback'})
    : axios({
      method: method,
      url: url,
      data: params
    })

  return new Promise((resolve)=>{
    request
    .then((res)=>{
      if(res.code == 0){
        resolve(res[dataName] || res.data || res)
      }
    })
  })
}

export default{
  getRecommend(){
    return apiFactory(API.Recommend())
  },
  getSingerList(){
    return apiFactory(API.Singer())
  },
  getSingerDetails(singerId){
    return apiFactory(API.SingerDetails(singerId))
  },
  getRankList(){
    return apiFactory(API.Rank())
  },
  getRankListDetails(rankId){
    return apiFactory(API.RankDetails(rankId))
  },
  getHotKey(){
    return apiFactory(API.HotKey())
  },
  getSerch(params){
    return apiFactory(API.Serch(params))
  },
}