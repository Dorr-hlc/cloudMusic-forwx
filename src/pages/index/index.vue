<template>
  <view class="container">
    <view class="banner">
      <view class="title">音乐资讯</view>
      <swiper
        class="swiper"
        circular
        :indicator-dots="swiperOption.indicatorDots"
        :autoplay="swiperOption.autoplay"
        :interval="swiperOption.interval"
        :duration="swiperOption.duration"
        indicator-active-color="#d81e06"
      >
        <swiper-item v-for="(imgItem, index) in bannerList" :key="index">
          <view class="swiper-item">
            <image :src="imgItem.imageUrl" alt="" srcset="" mode="aspectFill" />
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="hotSinger">
      <view class="title"> 你感兴趣 </view>
      <view class="middel-tab">
        <vie class="item-tab"></vie>
        <vie class="item-tab"></vie>
        <vie class="item-tab"></vie>
      </view>
    </view>
  </view>
</template>

<script>
import { bannerImg } from "../../axios/api";
export default {
  data() {
    return {
      bannerList: [],
      swiperOption: {
        indicatorDots: true,
        autoplay: false,
        interval: 3000,
        duration: 500,
      },
    };
  },
  onLoad() {
    this.getBannerImg();
  },
  computed: {},
  methods: {
    async getBannerImg() {
      let result = await bannerImg();
      if (result.code == 200) {
        this.bannerList = result.banners;
      }
    },
  },
};
</script>

<style lang="less" scope>
.container {
  padding: 0 15rpx;
}
.title {
  font-size: 32rpx;
  font-weight: 600;
  margin: 40rpx 0 20rpx 0;
  &::before {
    content: "";
    display: inline-block;
    width: 5rpx;
    height: 30rpx;
    background: skyblue;
    margin-right: 10rpx;
    vertical-align: middle;
  }
}
uni-image {
  width: 100%;
  height: 400rpx;
}
</style>
