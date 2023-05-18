<script setup lang="ts">
const current = ref(0);
const items = ref(["推荐文章", "阅读排行榜", "点赞排行榜", "回复排行榜"]);

function onClickItem(e: any) {
  if (current.value !== e.currentIndex) {
    current.value = e.currentIndex;
  }
}
</script>

<template>
  <view bg-white mb-2 px-2 py-3 mx-2 rd-2>
    <uni-segmented-control @clickItem="onClickItem" :current="current" :values="items" />
    <view mt-4>
      <view v-if="current === 0">
        <view mt-2 f-c-b v-for="item in 5">
          <view size-0.8>优秀文章优秀文章优秀文章 </view>
          <view size-0.7 colr-2>昨天</view>
        </view>
      </view>
      <view v-if="current === 1">
        <view mt-2 f-c-b v-for="item in 5">
          <view size-0.8>阅读排行榜{{ item }} </view>
          <view size-0.7 colr-2>昨天</view>
        </view>
      </view>
      <view v-if="current === 2">
        <view mt-2 f-c-b v-for="item in 5">
          <view size-0.8>点赞排行榜{{ item }} </view>
          <view size-0.7 colr-2>昨天</view>
        </view>
      </view>
      <view v-if="current === 3">
        <view mt-2 f-c-b v-for="item in 5">
          <view size-0.8>回复排行榜{{ item }} </view>
          <view size-0.7 colr-2>昨天</view>
        </view>
      </view>
    </view>
  </view>
  <view bg-white rd-2 p-2 mx-2 mb-2>
    <view mb-2 size-0.9 font-bold>#热门话题</view>
    <view flex-wrap f-c-b>
      <view class="w-50%" v-for="item in 8">
        <view size-0.8 colr-1>话题{{ item }}</view>
      </view>
    </view>
  </view>
  <view v-for="item in 10" bg-white mb-2 px-2 py-3 mx-2 rd-2>
    <view mb-4 f-c-s>
      <img
        mr-2
        class="w-10 h-10"
        rd-50
        object-cover
        src="https://img0.baidu.com/it/u=4058537242,3046187269&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889" />
      <view>
        <view size-0.8 font-bold>Himmelbleu</view>
        <view size-0.8 colr-2>4分钟前</view>
      </view>
    </view>
    <view>
      <view>hello world!hello world!hello world!hello world!</view>
      <img class="w-100% rd-2 my-2" src="https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" />
    </view>
    <view f-c-b size-0.8 colr-2>
      <view f-c-c>
        <uni-icons mr-1 type="redo" size="15"></uni-icons>
        转发
      </view>
      <view f-c-c>
        <uni-icons mr-1 type="chatbubble" size="15"></uni-icons>
        回复1
      </view>
      <view f-c-c>
        <uni-icons mr-1 type="fire" size="15"></uni-icons>
        点赞34
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
