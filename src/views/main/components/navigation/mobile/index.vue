<script setup>
import { ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core';
//接受父组件传过来的参数
const props = defineProps({
  _categorys: {
    type: String,
    default: '',
  },
})

// 滑块样式
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '50px',
})

//选中的item下标
const currentCategoryIndex = ref(0);

//所有的item
let itemRefs = []
const setItemRef = (el) => {
  // console.log(el);
  if(el) {
    itemRefs.push(el)
  }
}

onBeforeUpdate(() => {
  itemRefs = []
})

// 获取ul元素
const ulTarget = ref(null)
// useScroll
const {x: ulScrollLeft } = useScroll(ulTarget)
watch(currentCategoryIndex, (val) => {
  const {left, width} = itemRefs[val].getBoundingClientRect()
  sliderStyle.value = {
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px',
  }
})

const onItemClick = (index) => {
  currentCategoryIndex.value = index
  console.log(currentCategoryIndex.value);
  
}
</script>

<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <!-- 汉堡 -->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-nav-white"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <!-- item -->
      <li
        v-for="(item,index) in _categorys"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :ref="setItemRef"
        @click="onItemClick(index)"
        :class="{
          'text-zinc-100': currentCategoryIndex === index
        }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
