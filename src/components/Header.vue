<script setup lang="ts">
// import type { ref, computed } from 'vue'
const { t, availableLocales, locale } = useI18n()
const socialIcon = ref(
  [
    { icon: 'i-carbon:logo-facebook', link: '' },
    { icon: 'i-carbon:logo-instagram', link: '' },
    { icon: 'i-carbon:logo-twitter', link: '' },
  ],
)
const menu = ref(
  [
    { link: '/home', label: 'Home' },
    { link: '/services', label: 'Services' },
    { link: '/projects', label: 'Projects' },
    { link: '/faq', label: 'FAQ' },
    { link: '/contact', label: 'Contact' },
  ],
)
const langue = ref(
  [
    { link: '/home', label: 'Home' },
    { link: '/services', label: 'Services' },
    { link: '/projects', label: 'Projects' },
    { link: '/faq', label: 'FAQ' },
    { link: '/contact', label: 'Contact' },
  ],
)
const address = ref(
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
</script>

<template>
  <div class="top--bar" flex p-2 pl-20 pr-20 text-xs >
    <div flex-none class="w-6/10">
      <p text-left pl-4>
        Welcome to Think-Dev
      </p>
    </div>
    <div flex-auto flex justify-end>
      <div v-for="(ls, id) in address" :key="id"  pr-2 pl-2 flex items-center>
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

  <nav text-xl >
    <div flex pl-10 pr-10 p-2 items-center>
      <div w-20>
        <a href="/">
          <img src="/pwa-512x512.png" alt="tdev-logo">
        </a>
      </div>
      <div ml-4>
        <ul flex justify-items-stretch>
          <li v-for="(ls, id) in menu" :key="id" >
            <a :href="ls.link">
              {{ ls.label }}
            </a>
          </li>
        </ul>
      </div>
      <div>

      </div>
    </div>
    <img src="/pwa-512x512.png" alt="">
    <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
      <div i-carbon-campsite />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div i-carbon-language />
    </a>

    <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink>
  </nav>
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
</style>
