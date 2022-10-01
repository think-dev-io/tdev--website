<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div class="content--header">

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
.content--header{
  height: 50vh;
  width: 100%;
  border: 1px solid;
}
</style>
