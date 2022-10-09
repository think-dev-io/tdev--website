<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { Topbarcontent } from '../../methods/interface'

const props = defineProps<{
  initial: Topbarcontent
}>()
// const { count, inc, dec } = useCounter(props.initial)
const cont: Ref<Topbarcontent> = ref(props.initial)
const router = useRouter()
const go: Function = (name: string) => {
  if (name)
    router.push(name)
}
</script>

<template>
  <section>
    <div class="content flex flex-wrap justify-center ml-auto mr-auto mt-20 relative">
      <div class=" w-150 relative h-150 p-5">
        <div absolute z-1>
          <img src="about-five-1-1.jpeg" h-130 alt="">
        </div>
        <div class="absolute z-4 top-20 left-auto w-20 h-20 right-30 in--bg animate-ping opacity-75" />
        <a href="https://www.youtube.com/watch?v=ven2jnMAhn0" class="absolute z-4 top-20 left-auto w-20 h-20 right-30 in--bg text-white flex items-center justify-center">
          <p i-carbon:play-filled-alt />
        </a>
        <div absolute z-3 bottom-10 right-10>
          <img src="about-five-1-2.jpeg" h-80 alt="">
        </div>
        <div class="years--exp pl-5 pr-5 flex justify-center items-center">
          <span class="font-bold text-6xl pl-5 in--color">55</span>
          <span pl-5 text-lg font-bold>
            Years Experience
          </span>
        </div>
      </div>
      <div class="w-150 p-5">
        <div>
          <h5 class="uppercase text-xl font-bold in--color mb-3">
            ABOUT COMPANY
          </h5>
          <h1 capitalize text-5xl font-bold mb-5>
            The World’s Networking Company
          </h1>
          <p mb-5>
            Since from 2000 Building Your Better IT Solution The definition of business is an occupation or trade & the purchase and
            sale of products Our Mission & Vision Voice and Data System are crucial to the success
          </p>
          <p mb-5>
            System is a term used to refer to an organized collection symbols and processes that may be used to operate on such
            symbols.
          </p>
        </div>
        <div>
          <div flex w-full flex-wrap justify-center mt-5 mb-5>
            <div class="flex items-center in--bgt p-5 w--49 mr-2 mt-2">
              <div class="i-carbon:category-add icon--about" />
              <div ml-5 overflow-hidden w--49>
                <p
                  class="over--link font-bold text-xl in--color truncate cursor-pointer"
                  @click="go('link')"
                >
                  IT Consultant IT Consultant
                </p>
                <p text-sm text-slate-700 truncate>
                  Smarter Solutions Smarter Solutions
                </p>
              </div>
            </div>
            <div class="flex items-center in--bgt p-5 w--49 mt-2">
              <div class="i-carbon:category-add icon--about" />
              <div ml-5 overflow-hidden w--49>
                <p
                  class="over--link font-bold text-xl in--color truncate cursor-pointer"
                  @click="go('link')"
                >
                  IT Consultant IT Consultant
                </p>
                <p text-sm text-slate-700 truncate>
                  Smarter Solutions Smarter Solutions
                </p>
              </div>
            </div>
          </div>
          <hr>
          <div flex w-full flex-wrap justify-center mt-5 mb-5 items-center>
            <div class="flex items-center  p-5 w--49 mt-2">
              <img src="profile.webp" w-15>
              <div ml-5 overflow-hidden w--49>
                <p class="font-bold text-xl uppercase truncate">
                  fokoui marco
                </p>
                <p class="text-sm in--color uppercase truncate">
                  FOUNDER CEO
                </p>
              </div>
            </div>
            <div class="text-center  mt-2">
              <a href="" class="btn--submit ">
                IT Consultant IT Consultant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>{{ cont }}</div>
  </section>
</template>

<style lang="scss">
$icolor: #7687e5;
$icolort: #7687e521;
.in--color{
  color: $icolor;
}
.in--bg {
  background-color: $icolor;
}
.in--bgt {
  background-color: $icolort;
}
.icon--about{
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
.years--exp{
  position: absolute;
  bottom: 20px;
  width: 250px;
  height: 90px;
  z-index: 3;
  left: 30px;
  background: rgb(247, 247, 247);
  border-right: 10px solid $icolor;
  border-radius: 50px 0 0 50px;
}
.over--link:hover::after {
  content: '';
  width: 100%;
  height: 2px;
  display: block;
  background-color: $icolor;
  margin-top: 2px;
  animation: olink 2s;
}
.w--49{
  width: 49%;
}
@keyframes olink {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
.btn--submit {
  border-radius: 5px;
  color: #ffff;
  background-color: $icolor ;
  font-size: 1.125rem;
  padding: 0.75rem 1.25rem;
  height: 40px;
  text-transform: capitalize;
  width: auto;
}
</style>
