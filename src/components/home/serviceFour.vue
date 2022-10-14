<script setup lang="ts">
import type { contentserviceFoour } from '../../methods/interface'
defineProps<{
  content: contentserviceFoour
}>()
</script>

<template>
  <section mt-20>
    <div relative overflow-hidden>
      <div class="content w-full justify-center text-center mx-auto flex flex-col p-5 xl:mb-30 z-4 relative bg--circle2">
        <div class="bg--circle1 z-2" />
        <div class="w-full h-full absolute top-0 left-0 z-3 bg--content " />
        <div class="mx-auto mt-20 z-99">
          <h5 class="uppercase text-md in--color mb-5">
            {{ content.header.text }}
          </h5>
          <h1 capitalize text-5xl font-bold mb-5 lg:w-200 md:w-200 xs:w-full mx-auto>
            {{ content.header.text2 }}
          </h1>
        </div>
        <div class="my-20 xl:mx-auto xl:mb-50 md:min-mx-15 xs:min-mx-5 flex overflow-auto z-99">
          <div
            v-for="(ls, id) in content.content"
            :key="id"
            class="w-50 p-5 text-center service--list ml-5"
          >
            <div :class="`text-7xl in--color mx-auto mb-5 ${ls.icon}`" />
            <div flex flex-col>
              <h6 text-xl font-bold mb-3>
                {{ ls.text }}
              </h6>
              <p text-xs>
                {{ ls.paragraf }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div xl:absolute xl:bottom-10 z-9 xl:left-auto w-full md:mt-10 z-5>
        <div mx-auto class="flex w-9/12 mx-auto text-center total-desc items-center ">
          <div
            v-for="(ls, id) in content.bottombar"
            :key="id"
            class="flex flex-col w-1/4"
          >
            <h3 text-5xl font-bold>
              {{ ls.number }}
            </h3>
            <p class="text-md in--colort">
              {{ ls.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$icolor: #5e73e4;
$icolort: #5e72e42b;
.in--color {
  color: $icolor;
}
.in--colort {
  color: #c3c8ea;
}
.in--bg {
  background-color: $icolor;
}

.in--bgt {
  background-color: $icolort;
  z-index: 2;
}

.icon--about {
  font-size: 60px !important;
}

.bg--content {
  position: relative;
  width: 100%;
  height: 24rem;
}

.bg-transp {
  background-color: #00000070;
}
.service--list{
  background: #fff;
  border-radius: 5px;
  p{
    color: #818189;
  }
    animation: servicelistinit 2s;
}
.service--list:hover {
  border-radius: 5px;
  background: linear-gradient(55deg, var(--cretech-secondary, #5e73e4, ) 0%, var(--cretech-primary, #3530db) 100%);
  color: #fff !important;
  animation: servicelist 2s;
  .in--color{
    color: #fff !important;
  }
  p {
    color: #fff;
  }
}
@keyframes servicelistinit {
  from {
    background: $icolor;
  }

  to {
    background: #fff;
  }
}
@keyframes servicelist {
  from {
    background: #fff;
    color: rgb(0, 0, 0) !important;
  }

  to {
    background: linear-gradient(55deg, var(--cretech-secondary, #5e73e4, ) 0%, var(--cretech-primary, #3530db) 100%);
  }
}
.total-desc{
  background-image: linear-gradient(55deg, var(--cretech-secondary, #5e73e4, ) 0%, var(--cretech-primary, #3530db) 100%);
  height: 180px;
  color: #fff;
}
.bg--circle1{
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  left: -40px;
  top: 100px;
  background: #908e0552;
  z-index: 1;
}
.bg--circle2::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50% ;
  top: -20px;
  right: -80px;
  background: #db309130;
  z-index: 1;
}
.bg--circle2::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  bottom: 10px;
  right: 100px;
  background: #30db3330;
  z-index: 1;
}
.bg--content{
  background: $icolort;
}
</style>
