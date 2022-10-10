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
      <div class=" w-170 relative h-150 p-5">
        <div absolute z-1>
          <img :src="leftContent.img1" h-130 alt="">
        </div>
        <div class="absolute z-4 top-20 left-auto w-20 h-20 right-30 in--bg animate-ping opacity-75" />
        <a :href="leftContent.video" class="absolute z-4 top-20 left-auto w-20 h-20 right-30 in--bg text-white flex items-center justify-center">
          <p i-carbon:play-filled-alt />
        </a>
        <div absolute z-3 bottom-10 right-10>
          <img :src="leftContent.img2" h-80 alt="">
        </div>
        <div class="years--exp pl-5 pr-5 flex justify-center items-center">
          <span class="font-bold text-6xl pl-5 in--color">{{ leftContent.experience.number }}</span>
          <span pl-5 text-lg font-bold>
            {{ leftContent.experience.text }}
          </span>
        </div>
      </div>
      <div class="w-170 p-5">
        <div>
          <h5 class="uppercase text-lg in--color mb-3">
            {{ rightContent.text }}
          </h5>
          <h1 capitalize text-5xl font-bold mb-5>
            {{ rightContent.text2 }}
          </h1>
          <p mb-5>
            {{ rightContent.paragraphe }}
          </p>
          <p mb-5>
            {{ rightContent.paragraphe2 }}
          </p>
        </div>
        <div>
          <div flex w-full flex-wrap justify-center mt-5 mb-5>
            <div
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
            v-for="(ls, id) in rightContent.team"
            :key="id"
            flex w-full flex-wrap justify-center mt-2 mb-2 items-center
          >
            <div class="flex items-center  p-5 w-3/4 mt-2">
              <img :src="ls.img" w-20>
              <div ml-5 overflow-hidden w--49>
                <p class="font-bold text-xl uppercase truncate">
                  {{ ls.name }}
                </p>
                <p class="text-sm in--color uppercase truncate">
                  {{ ls.desc }}
                </p>
              </div>
            </div>
            <div class="text-center  mt-2">
              <a :href="ls.btn.link" class="btn--submit ">
                {{ ls.btn.text }}
              </a>
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
