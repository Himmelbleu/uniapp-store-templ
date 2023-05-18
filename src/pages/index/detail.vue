<script setup lang="ts">
const swiperList = [
  "https://oss-product-img.artfoxlive.com/profile-prod/201812/1545264371268_2122120_origin.jpg?x-oss-process=style/l_watermark",
  "https://oss-product-img.artfoxlive.com/202101/1609919260213_5023872.JPG?x-oss-process=style/l_watermark",
  "https://img0.baidu.com/it/u=2897304993,2842510785&fm=253&fmt=auto&app=138&f=JPEG?w=791&h=500",
  "https://oss-product-img.artfoxlive.com/202101/1609919161805_5023879.JPG?x-oss-process=style/l_watermark"
];

const classes = ref(0);
const dataTree = ref([
  {
    text: "标准版",
    value: 8.5
  },
  {
    text: "特典版",
    value: 9.9
  },
  {
    text: "豪华版",
    value: 19.9
  }
]);

function onnodeclick(e: any) {
  console.log(e);
}

function onpopupopened(e: any) {
  console.log("popupopened");
}

function onpopupclosed(e: any) {
  console.log("popupclosed");
}

function onchange(e: any) {
  console.log("onchange:", e);
}

const selectedNum = ref(1);
</script>

<template>
  <swiper h-80 circular indicator-dots>
    <swiper-item v-for="(item, index) in swiperList" :key="index">
      <img h-80 object-cover :src="item" />
    </swiper-item>
  </swiper>
  <view>
    <view m-2 p-4 bg-white>
      <view text-red size-1.2>¥8.5</view>
      <uni-title type="h4" title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"></uni-title>
      <view color-2 size-0.8>月销 100+</view>
    </view>
    <view m-2 p-4 bg-white>
      <view mb-4 f-c-c>
        <view mr-4 size-0.9> 规格 </view>
        <uni-data-picker
          placeholder="请选择规格"
          popup-title="请选择规格"
          :localdata="dataTree"
          v-model="classes"
          @change="onchange"
          @nodeclick="onnodeclick"
          @popupopened="onpopupopened"
          @popupclosed="onpopupclosed">
        </uni-data-picker>
      </view>
      <view f-c-s>
        <view mr-4 size-0.9> 数量 </view>
        <uni-number-box :min="1" :max="99" v-model="selectedNum" />
      </view>
    </view>
    <view m-2 p-4 bg-white>
      <view mb-4 size-0.8>评论(100+)</view>
      <view mt-4 v-for="item in 2">
        <view mb-2 font-bold size-0.8>匿名买家</view>
        <view size-0.8>非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好</view>
      </view>
    </view>
    <view m-2 p-4 bg-white>
      <view mb-2 size-0.8>问大家(2)</view>
      <view f-s-s mt-4 v-for="item in 2">
        <view mr-2 font-bold size-0.8 text-red>问</view>
        <view size-0.8>问题？问题？问题？问题？问题？问题？</view>
      </view>
    </view>
    <view m-2 p-4 bg-white>
      详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细
      详细详细详细详细详细详细详细详细详细详细详细详细详细详细
    </view>
    <uni-goods-nav class="goods-carts" />
  </view>
</template>

<style scoped lang="scss">
.goods-carts {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  /* #ifdef H5 */
  left: var(--window-left);
  right: var(--window-right);
  /* #endif */
  bottom: 0;
}
</style>
