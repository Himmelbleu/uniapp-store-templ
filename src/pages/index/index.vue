<template>
  <view mb-2 f-c-b p-2 rd-2 bg-white>
    <view>
      <img w-8 h-8 rd-50 object-cover src="https://img0.baidu.com/it/u=4058537242,3046187269&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889" />
    </view>
    <view class="w-70%">
      <uni-search-bar placeholder="请输入搜索关键词" v-model="inputValue"> </uni-search-bar>
    </view>
    <view>
      <img w-6 h-6 object-cover src="../../static/images/message.png" />
    </view>
  </view>
  <view px-2>
    <swiper circular indicator-dots autoplay>
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <img class="w-100% h-100%" rd-2 object-cover :src="item" />
      </swiper-item>
    </swiper>
  </view>
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
</template>

<script setup lang="ts">
const inputValue = ref();

const swiperList = [
  "https://oss-product-img.artfoxlive.com/profile-prod/201812/1545264371268_2122120_origin.jpg?x-oss-process=style/l_watermark",
  "https://oss-product-img.artfoxlive.com/202101/1609919260213_5023872.JPG?x-oss-process=style/l_watermark",
  "https://img0.baidu.com/it/u=2897304993,2842510785&fm=253&fmt=auto&app=138&f=JPEG?w=791&h=500",
  "https://oss-product-img.artfoxlive.com/202101/1609919161805_5023879.JPG?x-oss-process=style/l_watermark"
];

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
    src: "https://img1.artron.net/auction/2019/art514350/d/art5143500013.jpg",
    title: "one3",
    desc: "pqrstuvw"
  },
  {
    src: "https://th.bing.com/th/id/R.e2d3fcfa822a52788acfd5867055d5eb?rik=432aP4ZwxwAhcw&riu=http%3a%2f%2fpic9.nipic.com%2f20100909%2f2243789_102653080619_2.jpg&ehk=yayD8pyu7OYr0P9ouxKL%2bi%2frC979ipvrqqc0sXZ2CY4%3d&risl=&pid=ImgRaw&r=0",
    title: "one3",
    desc: "pqrstuvw"
  },
  {
    src: "https://p1.ssl.qhmsg.com/t01d541d2024a4ab849.jpg",
    title: "one3",
    desc: "pqrstuvw"
  }
];
</script>

<style scoped lang="scss"></style>
