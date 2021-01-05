import axios from 'axios'

var baseURLStr = window.g.ApiUrl
export function request(config){
	//1.创建axios实例
	//axios创建了promise赋值给了instance,所以返回的是promise
	const instance = axios.create({
	  baseURL:baseURLStr,
	  timeout:5000
	})
	
	//2.axios的拦截器
	instance.interceptors.request.use(res =>{
	  //2.1请求成功
	  // console.log(res);
	  return res//拦截成功后要放行
	},err =>{
	  //请求失败
	  console.log(err);
	})
	//2.2响应拦截
	instance.interceptors.response.use(res =>{
	  // console.log(res);
	  return res.data
	},err =>{
	  console.log(err);
	})
	
	//3.发送真正的网络请求
	return instance(config)
	
}