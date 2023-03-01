/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-01 12:57:34
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-01 14:20:41
 * @RevisionHistory: 
 */
// 当前的接口是对api进行统一的管理
import request from "./request"

// 登录的接口
// /api/product/getBaseCategoryList get 无参数
export const phoneLogin = (params) =>
    // 发送请求
    request({
        url: "/login/cellphone",
        method: 'post',
        data: params
    })
export const bannerImg = () =>
    // 发送请求
    request({
        url: "/banner",
        method: 'post',
    })