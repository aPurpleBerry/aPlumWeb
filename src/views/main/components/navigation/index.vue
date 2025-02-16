<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
// import mobileNavigation from './mobile/index.vue'
</script>

<template>
  <mobileNavigation v-if="isMobileTerminal"></mobileNavigation>
</template>

<style scoped></style>
