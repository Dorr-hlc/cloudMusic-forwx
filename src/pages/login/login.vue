<template>
  <view class="content">
    <view>登录界面</view>
    <input type="text" v-model="userInfo.phone" />
    <input type="password" v-model="userInfo.password" />
    <button @click="login">登录</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        phone: "",
        password: "",
      },
    };
  },
  onLoad() {},
  methods: {
    // login() {
    //   this.$store.dispatch("login", this.userInfo);
    // },
  },
};
</script>

<style>
.content {
  padding: 0 15px;
}
input {
  border: 1px solid #ccc;
  margin: 10px 0;
}
</style>
