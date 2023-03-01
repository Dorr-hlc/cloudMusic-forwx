import axios from 'axios'
const requests = axios.create({
    //  配置对象
    // 基础路径
    baseURL: "http://localhost:3000/",
    // 代表请求的超时时间5s
    timeout: 5000,
});
// 请求拦截器，发送请求之前，请求拦截器可以检测到，在请求发出之前需要做的一些事情
requests.interceptors.request.use((config) => {
    // config是一个配置对象，对象有一个属性很重要，header请求头

    return config
})
// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数
    return res.data
}, (err) => {
    // 失败的回调函数
    console.log(err);
})
// 对外暴露
export default requests