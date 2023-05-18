<script setup lang="ts"></script>

<template>
  <view f-c-b bg-white rd-2 p-2 mx-2 mb-2>
    <view class="w-20% f-c-c">
      <img
        class="w-15 h-15"
        rd-50
        object-cover
        src="https://img0.baidu.com/it/u=4058537242,3046187269&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889" />
    </view>
    <view class="w-75%">
      <view mb-1 font-bold size-0.9>Himmelbleu</view>
      <view mb-1 colr-2 size-0.8>账号名：abcdefg</view>
      <view f-c-s size-0.8 colr-1>
        <view mr-4>关注0</view>
        <view mr-4>粉丝0</view>
        <view>好友0</view>
      </view>
    </view>
  </view>
  <view bg-white rd-2 p-2 mx-2 mb-2>
    <view mb-2 size-0.9 font-bold>我的订单(2)</view>
    <view v-for="item in 2" f-s-b mt-4>
      <view class="w-20%">
        <img
          rd-2
          class="w-15 h-15"
          src="https://oss-product-img.artfoxlive.com/profile-prod/201812/1545264371268_2122120_origin.jpg?x-oss-process=style/l_watermark" />
      </view>
      <view class="w-60%">
        <view size-0.9>商品名称</view>
        <view size-0.8 colr-2>规格：豪华版</view>
        <view size-0.8 colr-2>数量：2</view>
      </view>
      <view class="w-20%" size-0.8 text-end text-red>¥18.8</view>
    </view>
  </view>
  <view bg-white rd-2 p-2 mx-2 mb-2>
    <view mb-2 size-0.9 font-bold>个性化定制(2)</view>
    <view v-for="item in 2" f-s-b mt-4>
      <view class="w-20%">
        <img
          rd-2
          class="w-15 h-15"
          src="https://oss-product-img.artfoxlive.com/profile-prod/201812/1545264371268_2122120_origin.jpg?x-oss-process=style/l_watermark" />
      </view>
      <view class="w-60%">
        <view size-0.9>定制名称</view>
        <view size-0.8 colr-2>规格：基础款</view>
        <view size-0.8 colr-2>数量：2</view>
      </view>
      <view class="w-20%" size-0.8 text-end text-red>¥18.8</view>
    </view>
  </view>
  <view bg-white rd-2 p-2 mx-2 mb-2>
    <view mb-2 size-0.9 font-bold>更多服务</view>
    <uni-list>
      <uni-list-item title="设置" showArrow rightText="个性化设置" />
      <uni-list-item title="客服" showArrow rightText="咨询个人客服" />
      <uni-list-item title="收货地址" showArrow rightText="管理收货地址" />
      <uni-list-item title="账号安全" showArrow rightText="查看账号安全" />
    </uni-list>
  </view>
</template>

<style scoped lang="scss"></style>
