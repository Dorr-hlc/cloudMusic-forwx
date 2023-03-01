import { phoneLogin } from "../axios/api"
const state = {
    login: "false"
}
const mutations = {
    LOGIN(state, token) {
        state.login = true
    }
}
const actions = {
    async login({ commit }, userInfo = {}) {
        const result = await phoneLogin(userInfo)
        console.log(result);
        if (result.code == 200) {
            commit("LOGIN", result.data)
        }
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}