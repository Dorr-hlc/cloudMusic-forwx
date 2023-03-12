<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-02-14 17:14:42
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-03-12 22:30:43
 * @RevisionHistory: 
-->
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
        <view class="item-tab" @click="toHotSinger">
          <image src="@/static/images/home/singer.png"></image>
          热门歌手</view
        >
        <view class="item-tab">
          <image src="@/static/images/home/MV.png"></image>
          最新MV</view
        >
        <view class="item-tab">
          <image src="@/static/images/home/menu.png"></image>
          热门歌单</view
        >
      </view>
    </view>
    <view class="recommend">
      <view class="title"> 推荐新音乐 </view>
    </view>
  </view>
</template>

<script>
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
      newSongs: {},
    };
  },
  onLoad() {
    this.getBannerImg();
    // this.getNewMusic();
  },
  computed: {},
  methods: {
    getBannerImg() {
      this.$api.bannerImg({}, (res) => {
        this.bannerList = res.banners;
      });
    },

    toHotSinger() {
      uni.navigateTo({
        url: "/pages/hotsinger/hotsinger",
      });
    },
  },
};
</script>

<style lang="less" scope>
uni-image {
  width: 100%;
  height: 400rpx;
}
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
.hotSinger {
  .middel-tab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24rpx;
    background: #fff;
    padding: 15rpx;
    border-radius: 26rpx;
  }
  .item-tab {
    width: 25%;
    border-radius: 32rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    gap: 10rpx;
    image {
      width: 64rpx;
      height: 64rpx;
    }
  }
}
</style>
