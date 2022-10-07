<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { Topbarcontent } from '../methods/interface'

const props = defineProps<{
  initial: Topbarcontent
}>()
// const { count, inc, dec } = useCounter(props.initial)
const cont: Ref<Topbarcontent> = ref(props.initial)
</script>

<template>
  <div class="content">
    <div relative>
      <div class="bg--content" />
      <img :src="cont.img" alt="" absolute top-0 w-full h-96 z-1>
      <div absolute top-0 w-full h-96 z-2 class="bg-transp "/>
      <div absolute top-20 p-10 z-3>
        <div flex text-xl text-white font-sans items-center>
          <a href="/" capitalize ml-1>Home</a>
          <div ml-1 i-carbon:chevron-right text-lg />
          <span capitalize ml-1> {{ cont.name }}</span>
        </div>
        <div mt-4 text-5xl text-white font-bold>
          <span capitalize ml-1> {{ cont.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$icolor: #7687e5;
.bg--content{
  position: relative;
  width: 100%;
  height: 24rem;
}
.bg-transp{
  background-color: #00000070;
}
 </style>
