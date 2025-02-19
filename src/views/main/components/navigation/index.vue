<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
import { getCategory } from '@/api/category'
import { ref } from 'vue'
import { ALL_CATEGORY_ITEM } from '../../../../constants'

const _categorys = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  _categorys.value = categorys
  _categorys.value.unshift(ALL_CATEGORY_ITEM)
  console.log(_categorys.value)
}

getCategoryData()
</script>

<template>
  <mobileNavigation
    v-if="isMobileTerminal"
    :_categorys="_categorys"
  ></mobileNavigation>
</template>

<style scoped></style>
