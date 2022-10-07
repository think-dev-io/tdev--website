<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { silder } from '../methods/interface'
const props = defineProps<{
  initial: silder[]
}>()
// const { count, inc, dec } = useCounter(props.initial)
const allSidler: Ref<silder[]> = ref(props.initial)
const activeSilderIndex: Ref<number> = ref(0)
onMounted(() => {
  const totalSilder: Ref<number> = ref(allSidler.value.length)
  const sidler: HTMLElement = document.getElementById(`silder${activeSilderIndex.value}`)
  sidler.classList.remove('hidden')
  setInterval(() => {
    if (activeSilderIndex.value + 1 === totalSilder.value) {
      const activeSilder: HTMLElement = document.getElementById(`silder${activeSilderIndex.value}`)
      const swSidler: HTMLElement = document.getElementById(`silder${0}`)
      swSidler.classList.remove('hidden')
      activeSilder.classList.add('anime--close')
      setTimeout(() => {
        activeSilder.classList.add('hidden')
        activeSilder.classList.remove('anime--close')
      }, 3000)
      activeSilderIndex.value = 0
    }
    else {
      const activeSilder: HTMLElement = document.getElementById(`silder${activeSilderIndex.value}`)
      const swSidler: HTMLElement = document.getElementById(`silder${activeSilderIndex.value + 1}`)
      swSidler.classList.remove('hidden')
      activeSilder.classList.add('anime--close')
      setTimeout(() => {
        activeSilder.classList.add('hidden')
        activeSilder.classList.remove('anime--close')
      }, 3000)
      activeSilderIndex.value++
    }
  }, 5000)
},
)
</script>

<template>
  <div class="content--header">
    <div
      v-for="(ls, id) in allSidler"
      :id="`silder${id}`"
      :key="id"
      class="hidden"
      z-999
    >
      <div class="bg--img">
        <img :src="ls.img" alt="bg home" w-full h-max absolute>
      </div>
      <div class="bg-all-header-home" />
      <div class="content--silder flex flex-col justify-center">
        <div>
          <div class="content--anime--welcome">
            <p text-xl font-bold mb-5 class="anime--welcome uppercase">
              {{ ls.textOne }}
            </p>
          </div>
          <div class="content--anime--service">
            <h1 mb-10 font-bold text-6xl class="anime--service capitalize">
              {{ ls.textTwo }}
            </h1>
            <a :href="ls.btn.link" class="btn--submit px-5 text-lg py-3 anime--welcome anime--service capitalize">{{ ls.btn.text }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="btn--content--silder flex justify-center">
      <div flex items-center>
        <div
          v-for="(ls, id) in allSidler"
          :key="id"
          class="btn--select-silder ml-2"
          :class=" activeSilderIndex === id ? 'active' : ''"
        />
      </div>
    </div>
  </div>
  <!-- <div>
    {{ count }}
    <button class="inc" @click="inc()">
      +
    </button>
    <button class="dec" @click="dec()">
      -
    </button>
  </div> -->
</template>

<style lang="scss">
  $icolor: #7687e5;
.content--header{
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
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
// .bg--img{
//   width: 1293px;
// }
.anime--welcome{
  animation: slidein 3s ;

}
.content--anime--welcome{
  height: 40px;
  overflow: hidden;
}
.content--anime--service{
  height: 180px;
  overflow: hidden;
}
.anime--service{
  animation: slidein2 3s ;

}
.anime--close{
  position: absolute;
  animation: slideinclose 2s ;
}
@keyframes slidein {
  from {
    // height: 1000px;
    margin-top: -50px;
  }

  to {
    // margin-left: 0%;
    // width: 100%;
  }
}
@keyframes slidein2 {
  from {
    // margin-right: 100%;
    // width: 300%;
    margin-top: 150px;
  }

  to {
    // margin-right: 0%;
    // width: 100%;
  }
}
@keyframes slideinclose {
  from {
    margin-left: 0px;
    width: 100%;
  }

  to {
    margin-left: 102%;
    width: 100%;
  }
}
.btn--content--silder{
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: 150px;
  padding: 50px;
  z-index: 9999;
  .btn--select-silder{
    background: #847d94;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
  }
  .active{
    background: #fff;
    width: 20px;
    height: 20px;
  }
}
</style>
