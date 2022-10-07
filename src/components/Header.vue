<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Address, Langue, Menu, SOcialIcon } from '../methods/interface'
const { t, availableLocales, locale } = useI18n()
const socialIcon: Ref<SOcialIcon[]> = ref(
  [
    { icon: 'i-carbon:logo-facebook', link: '' },
    { icon: 'i-carbon:logo-instagram', link: '' },
    { icon: 'i-carbon:logo-twitter', link: '' },
  ],
)
const menu: Ref<Menu[]> = ref(
  [
    { link: '/home', label: 'Home' },
    { link: '/services', label: 'Services' },
    { link: '/projects', label: 'Projects' },
    { link: '/faq', label: 'FAQ' },
    { link: '/contact', label: 'Contact' },
  ],
)
const langue: Ref<Langue[]> = ref(
  [
    { code: 'en', label: 'English', flag: '/langue/usa.svg', active: false },
    { code: 'fr', label: 'Français', flag: '/langue/france.svg', active: false },
    { code: 'de', label: 'allemand', flag: '/langue/de.svg', active: false },
    { code: 'ru', label: 'русский', flag: '/langue/ru.svg', active: false },
  ],
)
const address: Ref<Address[]> = ref(
  [
    { icon: 'i-carbon:email', label: 'contact@think-dev.com' },
    { icon: 'i-carbon:location', label: 'Douala Cameroun' },
  ],
)

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const showListLangue = ref(false)
</script>

<template>
  <div class="top--bar" flex p-2 pl-20 pr-20 text-xs>
    <div flex-none class="w-6/10">
      <p text-left pl-4>
        Welcome to Think-Dev
      </p>
    </div>
    <div flex-auto flex justify-end>
      <div v-for="(ls, id) in address" :key="id" pr-2 pl-2 flex items-center>
        <div :class="ls.icon" class="icon--top--bar text-sm" />
        <p pl-2>
          {{ ls.label }}
        </p>
      </div>
    </div>
    <div class="w-1/10 flex-auto flex justify-end ">
      <div v-for="(ls, id) in socialIcon" :key="id" pl-4>
        <a :href="ls.link">
          <div :class="ls.icon" class="icon--top--bar text-sm" />
        </a>
      </div>
    </div>
  </div>

  <nav text-xl w-full flex>
    <div items-center w-full flex >
      <div class="w-1/4" p-2 ml-15>
        <a href="/">
          <img src="/pwa-512x512.png" alt="tdev-logo" w-20>
        </a>
      </div>
      <div ml-4 mr-4 class="w-7/12">
        <ul flex justify-items-stretch text-base>
          <li v-for="(ls, id) in menu" :key="id" p-2 ml-2 mr-2 hover:text-blue-700 @click="toggleLocales()">
            <a :href="ls.link">
              {{ ls.label }}
            </a>
          </li>
        </ul>
      </div>
      <div w-28 flex ml-1 items-center>
        <div w-6 @click="showListLangue = true">
          <img src="/langue/france.svg" alt="" rounded-full>
        </div>
        <button class="icon-btn mx-2 !outline-none ml-5" :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
      </div>
    </div>
    <div flex items-center class="call--btn ">
      <span ml-10 rounded-full bg-slate-100 p-3 hover:bg-stone-800>
        <div i-carbon:phone-voice-filled hover:bg-slate-100 class="icon--top--bar" />
      </span>
      <span ml-4>
        <p text-xs>(+237) 697 040 726</p>
        <p text-xs>CALL ANYTIME</p>
      </span>
    </div>
  </nav>
  <div v-if="showListLangue" class="content--lng" @click="showListLangue = false">
    <ul justify-items-stretch class="list-lng">
      <li v-for="(ls, id) in langue" :key="id" class="items-center flex text-xs">
        <img :src="ls.flag" :alt="ls.code" w-5 m-1 mr-2 rounded-full>
        <p>{{ ls.label }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
//vars
  $fg:#e91e63;
  $tColor1: #ffff;
  $tColor2: #8892b0;
  $color: #185a9a;
  $colorTa: #f2680045;
  $bg: #13206c;
  $icolor: #7687e5;
  $bg--dark: #091320;
  .top--bar{
    background: $bg !important;
    color: $tColor1;
  }
  .icon--top--bar{
    color: $icolor;
  }
  .call--btn{
    background-image: linear-gradient(205deg, #4d63e2,#4d63e2, #576be1, #5c6fda,#6e7ed3);
    width: 400px;
  }
  .list-lng{
    position: absolute;
    top: 13vh;
    background-color: #fff;
    right: 350px;
    border: solid 1px #4d63e2;
    border-radius: 5px;
    z-index: 9999;
    li{
      padding: 5px 10px;
      border-bottom: solid 1px #c1c6e6;
    }
  }
  .content--lng{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
    display: block !important;
    transition: opacity 0.15s linear;
    box-sizing: border-box;
  }
</style>
