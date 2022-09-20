<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()
const socialIcon = 'carbon-dicom-overlay'

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div flex mt-3 text-sm >
    <div flex-none class="w-4/10">
      <p>Welcome to IT Solutions</p>
    </div>
    <div flex-auto class="w-4/10" flex>
      <div mr-10 flex items-center>
        <div i-carbon-dicom-overlay />
        <p pl-4>contact@think-dev.com</p>
      </div>
      <div mr-10 flex items-center>
        <div i-carbon-dicom-overlay />
        <p pl-4>Douala Cameroun</p>
      </div>
    </div>
    <div flex-auto class="w-1/10" flex>
      <a href="" pl-4>
        <div :i="socialIcon" />
      </a>
      <a href="" pl-4>
        <div :i="socialIcon" />
      </a>
      <a href="" pl-4>
        <div :i="socialIcon" />
      </a>
    </div>
  </div>
  <nav text-xl mt-6>
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
  $tColor1: #a39eae;
  $tColor2: #8892b0;
  $color: #185a9a;
  $colorTa: #f2680045;
  $bg: #dedcdc;
  $bg--dark: #091320;
  $bglogo: #fff;
</style>
