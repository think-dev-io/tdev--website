<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div class="content--footer">
    <div class="">

    </div>
    <div class="copr">
      <p>© All Copyright 2022 by Think-Dev</p>
    </div>
  </div>
  <!-- <nav text-xl mt-6>
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
  </nav> -->
</template>

<style lang="scss">
  .content--footer{
    width: 100%;
    display: inline-block;
    .copr{
      background: #13206c;
      width: 100%;
      text-align: center;
      padding: 10px;
      color: rgb(255, 255, 255);
    }
  }
</style>
