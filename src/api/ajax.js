import axios from 'axios'
export default function ajax(url = '',params = {} ,type = 'GET'){
  let promise;
  return new Promise((resolve ,reject)=>{
  //  判断请求的方式
    if(type == 'GET'){
      let paramsStr = '';
      Object.keys(params).forEach( key=>{
        paramsStr += key+'='+params[key]+'&';
      })
      if(paramsStr != ''){
        paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'));
      }
      url+='?'+paramsStr;
      promise = axios.get(url);
    }else{
      promise = axios.post(url,params)
    }
    promise.then((res)=>{
      resolve(res.data)
    }).catch((err)=>{
      reject(err);
    })
  })
}