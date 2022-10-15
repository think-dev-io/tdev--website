<script setup lang="ts">
import type { Ref } from 'vue'
import type { FAQContent, Topbarcontent } from '../methods/interface'
const faqContent: Ref<FAQContent[]> = ref(
  [
    {
      qes: 'Question 1',
      res: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    },
    {
      qes: 'Question 2',
      res: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    },
    {
      qes: 'Question 3',
      res: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    },
    {
      qes: 'Question 4',
      res: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    },
    {
      qes: 'Question ',
      res: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    },
  ],
)

// const { t } = useI18n()
const cont: Ref<Topbarcontent> = ref(
  {
    img: '/silder2.jpeg',
    name: 'Faq',
  },
)
</script>

<template>
  <topbar :initial="cont" />
  <Faq-content :data="faqContent" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
