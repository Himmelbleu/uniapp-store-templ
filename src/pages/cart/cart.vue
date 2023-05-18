<script setup lang="ts">
const thangkaList = [
  {
    src: "https://oss-product-img.artfoxlive.com/profile-prod/201812/1545264371268_2122120_origin.jpg?x-oss-process=style/l_watermark",
    title: "one1",
    desc: "abcdefg"
  },
  {
    src: "https://oss-product-img.artfoxlive.com/202101/1609919260213_5023872.JPG?x-oss-process=style/l_watermark",
    title: "one2",
    desc: "hijklmo"
  },
  {
    src: "https://img0.baidu.com/it/u=2897304993,2842510785&fm=253&fmt=auto&app=138&f=JPEG?w=791&h=500",
    title: "one3",
    desc: "pqrstuvw"
  },
  {
    src: "https://img0.baidu.com/it/u=2897304993,2842510785&fm=253&fmt=auto&app=138&f=JPEG?w=791&h=500",
    title: "one3",
    desc: "pqrstuvw"
  },
  {
    src: "https://img0.baidu.com/it/u=2897304993,2842510785&fm=253&fmt=auto&app=138&f=JPEG?w=791&h=500",
    title: "one3",
    desc: "pqrstuvw"
  },
  {
    src: "https://img0.baidu.com/it/u=2897304993,2842510785&fm=253&fmt=auto&app=138&f=JPEG?w=791&h=500",
    title: "one3",
    desc: "pqrstuvw"
  }
];
</script>

<template>
  <view bg-white mb-4 px-2 py-3 mx-2 rd-2>
    <view v-for="item in 3" f-s-b :class="{ 'mb-8': item !== 0 }">
      <view>
        <img
          rd-2
          class="w-20 h-20"
          src="https://oss-product-img.artfoxlive.com/profile-prod/201812/1545264371268_2122120_origin.jpg?x-oss-process=style/l_watermark" />
      </view>
      <view>
        <view size-0.9>商品名称</view>
        <view size-0.8 colr-2>规格：豪华版</view>
        <view size-0.8 colr-2>数量：2</view>
      </view>
      <view size-0.8 text-red>¥18.8</view>
      <view size-0.8>删除</view>
    </view>
  </view>
  <view>
    <view text-center>猜你可能还喜欢</view>
    <view f-c-c flex-wrap mt-2>
      <view
        class="w-45%"
        m-2
        rd-2
        bg-white
        @click="$uni.navigateTo({ url: '/pages/index/detail' })"
        v-for="item in thangkaList"
        :key="item.title">
        <img class="w-100%" h-35 rd-t-2 object-cover :src="item.src" />
        <view pt-1 pb-2 pl-2 pr-2>
          <view size-0.9 colr-1 text-ellipsis line-clamp-1>{{ item.title }}</view>
          <view size-0.8 colr-2>{{ item.desc }}</view>
        </view>
      </view>
    </view>
  </view>
  <view class="button-nav" px-3 py-2 bg-white>
    <view class="f-c-b w-100% h-100%">
      <view f-e-c>
        <view size-0.9>合计：</view>
        <view size-0.8 text-red>¥180</view>
      </view>
      <view>
        <button type="primary" size="mini">结算</button>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.button-nav {
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  /* #ifdef H5 */
  left: var(--window-left);
  right: var(--window-right);
  /* #endif */
  bottom: var(--tab-bar-height);
}
</style>
