/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract:
 * @Date: 2023-03-01 18:50:45
 * @Author:
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-12 22:25:44
 * @RevisionHistory:
 */
import Vue from "vue";
import App from "./App";
import * as Api from "./axios/request.js";
Vue.config.productionTip = false;

App.mpType = "app";
// 引入Vuex仓库
import store from "@/store";
// 引入路由
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});
Vue.prototype.$api = Api;
const app = new Vue({
  ...App,
  store,
});
app.$mount();
