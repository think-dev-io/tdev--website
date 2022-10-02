<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div class="content--header">
    <div class="bg--img">
      <img src="/silder2.jpeg" alt="bg home" w-full h-max>
    </div>
    <div class="bg-all-header-home"></div>
    <div class="content--silder flex flex-col justify-center">
      <div>
        <p text-xl font-bold mb-5 > Welcome to best it solutions </p>
        <h1 mb-5 font-bold text-6xl >Provide it solutions and services</h1>
        <a href="" class="btn--submit mb-5 px-5 text-lg py-3">learn more </a>
      </div>
      <div></div>
    </div>
  </div>
  <div>
    {{ count }}
    <button class="inc" @click="inc()">
      +
    </button>
    <button class="dec" @click="dec()">
      -
    </button>
  </div>
</template>

<style lang="scss">
  $icolor: #7687e5;
.content--header{
  position: relative;
  width: 100%;
  height: 80vh;
}
.bg-all-header-home{
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 80vh;
  top: 0px;
  background-color: #00000070;
}
.content--silder{
  position: absolute;
  top: 250px;
  padding: 2em;
  z-index: 3;
  text-align: center;
  color: #fff;

  width: 100%;
}
.btn--submit{
  border-radius: 5px;
  color: #ffff;
  background-color: $icolor ;
  height: 40px;
  width: 50%;
}
</style>
