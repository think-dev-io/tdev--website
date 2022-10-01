<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const socialIcon = ref(
  [
    { icon: 'i-carbon:logo-facebook', link: '' },
    { icon: 'i-carbon:logo-instagram', link: '' },
    { icon: 'i-carbon:logo-twitter', link: '' },
  ],
)
</script>

<template>
  <div class="content--footer">
    <div class="footer pl-30 pr-30 pt-30 pb-30 flex flex-wrap justify-center ">
      <div w-80 p-5>
        <a href="/">
          <img src="/pwa-512x512.png" alt="tdev-logo" w-20>
        </a>
        <p mt-5>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
        <div mt-5>
          <div class="flex">
            <a
              v-for="(lk, id) in socialIcon"
              :key="id"
              :href="lk.link"
              class="icon--border--color  rounded-full border mr-3 text-center "
            >
              <div :class="lk.icon" class="text-base m-2" />
            </a>
          </div>
        </div>
      </div>
      <div w-80 p-5>bnb</div>
      <div w-80 p-5>ncmsd  </div>
      <div w-80 p-5>mds m d</div>
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
  $icolor: #7687e5;
  .content--footer{
    width: 100%;
    display: inline-block;
    .copr{
      background: #13206c;
      width: 100%;
      text-align: center;
      padding: 10px;
      color: #ffff;
    }
    .footer{
      background: #16257c;
      width: 100%;
      height: 60vh;
      color: #ffff;
    }
  }
  .icon--border--color{
    border-color: $icolor !important;
  }
</style>
