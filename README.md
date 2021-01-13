# zhangqifo
This is a vue project

网络请求请使用network文件夹下的request.js中的request方法
导入：
在需要网络请求的vue文件中导入request.js，例如在Home.vue中使用网络请求
Home.vue
<script>
  import {request} from '@/network/request.js'//注意{}不要省略，因为不是默认导出的
</script>
用法:
request({
  method:'get',//post或者get
  url:'',
  params:参数//get用params post用data
}).then(res =>{
  成功后执行
}).catch( err=>{
  失败后执行
})

部署或者访问服务器时,请修改public/config.js中的ApiUrl，改成服务器地址
