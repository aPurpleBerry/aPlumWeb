<script setup>
import { getCategory } from '@/api/category';

const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res);
  
}

getCategoryData()
</script>

<template>
  <h1>我是移动端下</h1>
</template>

<style scoped>
</style>
