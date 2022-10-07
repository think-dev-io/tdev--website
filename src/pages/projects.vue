<script setup lang="ts">
import type { Ref } from 'vue'
import type { silder } from '../methods/interface'

const { t } = useI18n()
const allSidler: Ref<silder[]> = ref(
  [
    {
      img: '/silder2.jpeg',
      textOne: 'Welcome to best it solutions',
      textTwo: 'Provide it solutions and services',
      btn: { text: 'learn more ', link: '/' },
    },
  ],
)
</script>

<template>
  <!-- <silder-home :initial="allSidler" /> -->
  <div>projects</div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
