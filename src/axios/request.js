// /*
//  * @Copyright: Copyright© 2022 AOMEI
//  * @Abstract:
//  * @Date: 2023-03-01 18:50:45
//  * @Author:
//  * @LastEditors: houliucun
//  * @LastEditTime: 2023-03-12 22:21:10
//  * @RevisionHistory:
//  */
// import axios from "axios";
// const requests = axios.create({
//   //  配置对象
//   // 基础路径
//   baseURL: "http://localhost:3000/",
//   // 代表请求的超时时间5s
//   timeout: 5000,
// });
// // 请求拦截器，发送请求之前，请求拦截器可以检测到，在请求发出之前需要做的一些事情
// requests.interceptors.request.use((config) => {
//   // config是一个配置对象，对象有一个属性很重要，header请求头
//   return config;
// });
// // 响应拦截器
// requests.interceptors.response.use(
//   (res) => {
//     // 成功的回调函数
//     // return res.data;
//   },
//   (err) => {
//     // 失败的回调函数
//     console.log(err);
//   }
// );
// // 对外暴露
// export default requests;

// 需要登陆的，都写到这里，否则就是不需要登陆的接口
const baseURL = "http://localhost:3000";
const post = (method, data, callback, complete) => {
  uni.showLoading({
    title: "加载中",
  });

  //data.method = method;
  uni.request({
    url: baseURL + method,
    data: data,
    header: {
      Accept: "application/json,text/plain",
      //'Content-Type': 'application/json; charset=utf-8',
      "Content-Type": "application/x-www-form-urlencoded", //自定义请求头信息
    },
    method: "POST",
    success: (response) => {
      uni.hideLoading();
      const result = response.data;
      callback(result);
    },
    complete: (response) => {
      // setTimeout(function() {
      //     uni.hideLoading();
      // }, 300)
      complete ? complete() : "";
    },
    fail: (error) => {
      uni.showLoading({
        title: "网络开小差了",
      });
      setTimeout(function () {
        uni.hideLoading();
      }, 1000);
      if (error && error.response) {
        showError(error.response);
      } else {
      }
    },
  });
};

const get = (method, data, callback) => {
  uni.request({
    url: baseURL + method,
    header: {
      Accept: "application/json,text/plain",
      "Content-Type": "application/x-www-form-urlencoded", //自定义请求头信息
    },
    data: data,
    method: "GET",
    success: (response) => {
      // uni.hideLoading();
      callback(response.data);
    },
    fail: (error) => {
      // uni.hideLoading();
      if (error && error.response) {
        showError(error.response);
      }
    },
    complete: () => {
      // setTimeout(function() {
      //     uni.hideLoading();
      // }, 250);
    },
  });
};
const showError = (error) => {
  let errorMsg = "";
  switch (error.status) {
    case 400:
      errorMsg = "请求参数错误";
      break;
    case 401:
      errorMsg = "未授权，请登录";
      break;
    case 403:
      errorMsg = "跨域拒绝访问";
      break;
    case 404:
      errorMsg = `请求地址出错: ${error.config.url}`;
      break;
    case 408:
      errorMsg = "请求超时";
      break;
    case 500:
      errorMsg = "服务器内部错误";
      break;
    case 501:
      errorMsg = "服务未实现";
      break;
    case 502:
      errorMsg = "网关错误";
      break;
    case 503:
      errorMsg = "服务不可用";
      break;
    case 504:
      errorMsg = "网关超时";
      break;
    case 505:
      errorMsg = "HTTP版本不受支持";
      break;
    default:
      errorMsg = error.msg;
      break;
  }

  uni.showToast({
    title: errorMsg,
    icon: "none",
    duration: 1000,
    complete: function () {
      setTimeout(function () {
        uni.hideToast();
      }, 1000);
    },
  });
};

// 文件上传
export const uploadFiles = (callback) => {
  uni.chooseImage({
    sizeType: ["compressed"],
    success: (chooseImageRes) => {
      uni.showLoading({
        title: "上传中...",
      });
      const tempFilePaths = chooseImageRes.tempFilePaths;
      console.log(tempFilePaths);
      const uploadTask = uni.uploadFile({
        url: baseURL + "tree_hole&op=image_header", //仅为示例，非真实的接口地址
        filePath: tempFilePaths[0],
        fileType: "image",
        name: "file",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        formData: {
          key: db.get("token"),
          file: tempFilePaths[0],
        },
        success: (uploadFileRes) => {
          callback(JSON.parse(uploadFileRes.data));
        },
        fail: (error) => {
          if (error && error.message) {
            showError(error.message);
          }
        },
        complete: () => {
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
        },
      });
    },
  });
};

//上传文件
// export const uploadfile = (callback) => uploadFiles(callback);
// 获取广场数据
export const bannerImg = (data, callback) => post("/banner", data, callback);
// 获取广场数据
export const newMusic = (data, callback) =>
  post("/personalized/newsong", data, callback);
