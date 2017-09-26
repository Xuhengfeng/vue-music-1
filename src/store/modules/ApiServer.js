import API from '../../util/api'
import axios from 'axios'
import jsonp from '../../util/myJsonp'

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
  actions:{
    getRecommend(){
      return apiFactory(API.Recommend())
    },
    getSingerList(){
      return apiFactory(API.Singer())
    },
    getSingerDetails({}, singerId){
      return apiFactory(API.SingerDetails(singerId))
    },
    getRankList({}, singerId){
      return apiFactory(API.Rank())
    },
    getRankListDetails({}, rankId){
      return apiFactory(API.RankDetails(rankId))
    },
  }
}
