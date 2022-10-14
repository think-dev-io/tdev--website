<script setup lang="ts">
import type { leftContentFEEDBACKS, rightContentFEEDBACKS } from '../../methods/interface'
defineProps<{
  leftContentFeedbacks: leftContentFEEDBACKS
  rightContentFeedbacks: rightContentFEEDBACKS[]
  patener?: string[]
}>()
</script>

<template>
  <section
    style="background-image: url('/testi-bg-1.png') ; background-size: cover; background-repeat: no-repeat; "
    pt-20
  >
    <div class="container mx-auto">
      <div flex justify-center lg:mx-auto xl:mx-20 flex-wrap items-center>
        <div class="xl:w-1/2 lg:w-1/2 flex flex-col p-10 md:w-full">
          <h5 class="text-lg in--color mb-5 font-bold">
            OUR CLIENTS
          </h5>
          <h1 text-6xl font-bold mb-10>
            We Are Trusted Worldwide Peoples
          </h1>
          <p style="color: #818189 ;">
            Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa
            quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa
            quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div mt-10>
            <a href="/" class="p-5 btn--submit"> view all feedbacks</a>
          </div>
        </div>
        <div class="xl:w-1/2 lg:w-1/2 py-10 pl-20 md:w-full ">
          <div class="flex content--info--nember items-center mb-5">
            <img src="/profile.webp" w-30 h-30 rounded border-3 border-blue-700 ml--23 alt="">
            <div ml-5>
              <p>
                On the other hand denounc with ghteo indignation and dislike men who so beguiled and demoralized the charms of pleasure
                the momen blinded by desire cannot foresee the pain and trouble.
              </p>
              <div mt-5>
                <div float-left>
                  <h5 text-xl font-bold capitalize>
                    Michal Rahul
                  </h5>
                  <h6 class="in--color text-xs font-bold uppercase">
                    UL - UX DESIGNER
                  </h6>
                </div>
                <div class="float-right i-carbon-quotes rotate-180 text-6xl in--color" />
              </div>
            </div>
          </div>
          <div class="flex content--info--nember items-center">
            <img src="/profile.webp" w-30 h-30 rounded border-3 border-blue-700 ml--23 alt="">
            <div ml-5>
              <p>
                On the other hand denounc with ghteo indignation and dislike men who so beguiled and demoralized the charms of
                pleasure
                the momen blinded by desire cannot foresee the pain and trouble.
              </p>
              <div mt-5>
                <div float-left>
                  <h5 text-xl font-bold capitalize>
                    Michal Rahul
                  </h5>
                  <h6 class="in--color text-xs font-bold uppercase">
                    UL - UX DESIGNER
                  </h6>
                </div>
                <div class="float-right i-carbon-quotes rotate-180 text-6xl in--color" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="patener"
        lg:mx-auto xl:mx-20 overflow-x-auto
      >
        <div class="defile flex w-full">
          <img
            v-for="(ls, id) in patener"
            :key="id"
            :src="ls"
            width="150"
            height="300"
            alt=""
          >
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
.content--info--nember{
  border: solid 1px #bbc1e3;
  padding: 30px;
  background-color: #fafbff;
  p {
      color: #818189;
    }
  // box-shadow: 1px 1px 12px 0 rgb(206, 206, 206);
}
.content--info--nember:hover{
  border: solid 4px #1d4ed8;
  animation: borderanim 0.3s;
}
@keyframes borderanim {
  from {
      border: solid 1px #1d4ed8;
  }

  to {
      border: solid 4px #1d4ed8;
  }
}
</style>
