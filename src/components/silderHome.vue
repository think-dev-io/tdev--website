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
    <div class="bg-all-header-home" />
    <div class="content--silder flex flex-col justify-center">
      <div>
        <div class="content--anime--welcome">
          <p text-xl font-bold mb-5 class="anime--welcome">
            Welcome to best it solutions
          </p>
        </div>
        <div class="content--anime--service">
          <h1 mb-10 font-bold text-6xl class="anime--service">
            Provide it solutions and services
          </h1>
          <a href="" class="btn--submit px-5 text-lg py-3 anime--welcome anime--service">learn more </a>
        </div>
      </div>
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
</style>
