<script setup lang="ts">
defineProps<{
  text: string
  btn: {
    text: string
    link: string
  }
  bgImg: string
}>()
</script>

<template>
  <section class="mt-20 ">
    <div
      :style="`background-image: url('${bgImg}') ;`"
      class="bg--flash--message"
    >
      <div class=" text-center content--flash--message flex flex-col xl:px-70 md:px-19">
        <h1 text-7xl font-bold capitalize mb-15>
          {{ text }}
        </h1>
        <div>
          <a :href="btn.link" class="btn--submit">{{ btn.text }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.bg--flash--message{
  position: relative;
  width: 100%;
  height: 50vh;
  color: #fff;
  // background-image: url("/cta-two-bg-1-1.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  .content--flash--message{
    background-color: rgba(0, 0, 0, 0.314);
    height: 50vh;
    padding-top: 10vh;
    padding-bottom: 10vh;
  }
}
</style>
