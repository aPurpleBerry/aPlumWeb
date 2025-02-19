<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :class="fillClass" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 显示的SVG
  name: {
    type: String,
    required: true,
  },
  // SVG图标的颜色
  color: {
    type: String,
  },
  // tailwind指定SVG颜色的类名
  fillClass: {
    type: String,
  },
})

const symbolId = computed(() => {
  return `#icon-${props.name}`
})
</script>
