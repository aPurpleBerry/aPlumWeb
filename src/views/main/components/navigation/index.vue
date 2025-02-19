<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
import { getCategory } from '@/api/category'
import { ref } from 'vue'

const _categorys = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  _categorys.value = categorys
  console.log(_categorys.value)
}

getCategoryData()
</script>

<template>
  <mobileNavigation 
    v-if="isMobileTerminal"
    :_categorys="_categorys"
  >
  </mobileNavigation>
</template>

<style scoped></style>
