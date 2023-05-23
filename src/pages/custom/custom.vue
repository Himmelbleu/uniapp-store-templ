<script setup lang="ts">
const itemIndex = ref(0);
</script>

<template>
  <view>
    <img
      class="source-img w-100% h-100 object-contain"
      src="https://img.zcool.cn/community/0179d05e6b3db1a8012165188ebf75.jpg@1280w_1l_2o_100sh.jpg" />
  </view>
  <view bg-white mb-2 px-2 py-3 mx-2 rd-2 class="tool-tiks mt-2" px-4>
    <view f-c-b size-0.8>
      <view @tap="itemIndex = 0">贴纸1</view>
      <view @tap="itemIndex = 1">贴纸2</view>
      <view @tap="itemIndex = 2">贴纸3</view>
      <view @tap="itemIndex = 3">贴纸4</view>
    </view>
    <view mt-4>
      <view f-c-b flex-wrap v-if="itemIndex === 0">
        <img w-15 h-15 mr-4 mb-2 src="../../static/images/custom/三潭映月.png" />
        <img w-15 h-15 mr-4 mb-2 src="../../static/images/custom/东方明珠.png" />
        <img w-15 h-15 mr-4 mb-2 src="../../static/images/custom/故宫.png" />
        <img w-15 h-15 mr-4 mb-2 src="../../static/images/custom/广州塔.png" />
        <img w-15 h-15 mr-4 mb-2 src="../../static/images/custom/黄鹤楼.png" />
      </view>
      <view v-else-if="itemIndex === 1">
        <img w-15 h-15 mr-4 mb-2 src="../../static/images/custom/蒙古包.png" />
        <img w-15 h-15 mr-4 mb-2 src="../../static/images/custom/世纪钟.png" />
        <img w-15 h-15 mr-4 mb-2 src="../../static/images/custom/中山陵.png" />
        <img w-15 h-15 mr-4 mb-2 src="../../static/images/custom/索菲亚教堂.png" />
      </view>
      <view v-else-if="itemIndex === 2">3</view>
      <view v-else>4</view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
