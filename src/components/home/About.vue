<script setup lang="ts">
import type { leftContentAbout, rightContentAbout } from '../../methods/interface'

defineProps<{
  leftContent: leftContentAbout
  rightContent: rightContentAbout
}>()
// const { count, inc, dec } = useCounter(props.initial)

const router = useRouter()
const go: Function = (name: string) => {
  if (name)
    router.push(name)
}
</script>

<template>
  <section>
    <div class="content flex flex-wrap justify-center items-center ml-auto mr-auto mt-20 relative">
      <div class=" xl:w-170 lg:w-140 w-160 relative h-150 p-5 mb-5">
        <div class="first--image z-4">
          <img :src="leftContent.img1" h-130 alt="">
        </div>
        <div class="absolute z-4 top-20 left-auto w-20 h-20 right-30 in--bg animate-ping opacity-75" />
        <a
          v-if="leftContent.video"
          :href="leftContent.video"
          class="absolute z-4 top-20 left-auto w-20 h-20 right-30 in--bg text-white flex items-center justify-center">
          <p i-carbon:play-filled-alt />
        </a>
        <div
          v-if="leftContent.img2"
          absolute z-3 bottom-10 right-10
        >
          <img :src="leftContent.img2" h-80 alt="">
        </div>
        <div
          v-if="leftContent.experience"
          class="years--exp pl-5 pr-5 flex justify-center items-center"
        >
          <span class="font-bold text-6xl pl-5 in--color">{{ leftContent.experience.number }}</span>
          <span pl-5 text-lg font-bold>
            {{ leftContent.experience.text }}
          </span>
        </div>
      </div>
      <div class="xl:w-170 lg:w-140 w-160 p-5">
        <div>
          <h5 class="uppercase text-lg in--color mb-3">
            {{ rightContent.text }}
          </h5>
          <h1
            capitalize text-5xl font-bold mb-5
          >
            {{ rightContent.text2 }}
          </h1>
          <p mb-5 class="paragraph" >
            {{ rightContent.paragraphe }}
          </p>
          <p mb-5 class="paragraph" >
            {{ rightContent.paragraphe2 }}
          </p>
        </div>
        <div>
          <div flex w-full flex-wrap justify-center mt-5 mb-5>
            <div
              v-show="rightContent.service"
              v-for="(ls, id) in rightContent.service"
              :key="id"
              class="flex items-center in--bgt p-5 w--49 mr-1 mt-2"
            >
              <div :class="`${ls.icon} icon--about`" />
              <div ml-5 overflow-hidden w--49>
                <p
                  class="over--link font-bold text-xl in--color truncate cursor-pointer"
                  @click="go(ls.name.link)"
                >
                  {{ ls.name.label }}
                </p>
                <p text-sm text-slate-700 truncate>
                  {{ ls.desc }}
                </p>
              </div>
            </div>
          </div>
          <hr>
          <div
            v-show="rightContent.team"
            v-for="(ls, id) in rightContent.team"
            :key="id"
            flex w-full mt-2 mb-2 items-center
          >
            <div class="flex items-center  p-5 xl:w-3/4 w-3/4 mt-2">
              <img :src="ls.img" rounded w-20>
              <div ml-5 overflow-hidden w--49>
                <p class="font-bold text-xl uppercase truncate">
                  {{ ls.name }}
                </p>
                <p class="text-sm in--color uppercase truncate">
                  {{ ls.desc }}
                </p>
              </div>
            </div>
            <div class="text-center w-1/4 mt-2 xl:w-1/4 ">
              <a :href="ls.btn.link" class="btn--submit ">
                {{ ls.btn.text }}
              </a>
            </div>
          </div>
        </div>
        <div
          v-if="!rightContent.team && !rightContent.service && rightContent.company"
          flex flex-col mt-5
        >
          <div flex>
            <div w-32 h-25 rounded-full text-center mr-7 class="in--bgt flex items-center justify-center ">
              <div i-carbon:application-mobile text-5xl />
            </div>
            <div w-full>
              <h5 font-bold text-3xl class="in--color " >Cloud Based Services</h5>
              <p text-sm class="paragraph">Services address a range of simply free text application and infrastructure needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$icolor: #5e73e4;
$icolort: #5e72e42b;
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
  left: 60px;
  background: rgb(247, 247, 247);
  border-right: 10px solid $icolor;
  border-radius: 50px 0 0 50px;
}
.over--link:hover::after {
  content: '';
  width: 50%;
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
    width: 50%;
  }
}
.paragraph {
  color: #818189;
}
.first--image::before{
  content: "";
  position: absolute;
  z-index: -1;
  width: 50%;
  left: -30%;
  height: 100%;
  background-color: $icolor;
}
.first--image::after{
  content: "";
  position: absolute;
  top: 0;
  left: -30%;
  width: 100%;
  height: 100%;
  background-image: url('about-bg.png');
  background-repeat: repeat;
}
</style>
