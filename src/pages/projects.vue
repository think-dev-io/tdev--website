<script setup lang="ts">
import type { Ref } from 'vue'
import type { Topbarcontent } from '../methods/interface'

// const { t } = useI18n()
const cont: Ref<Topbarcontent> = ref(
  {
    img: '/silder2.jpeg',
    name: 'Project',
  },
)
</script>

<template>
  <topbar :initial="cont" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
