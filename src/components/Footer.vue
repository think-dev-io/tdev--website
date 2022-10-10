<script setup lang="ts">
import type { Ref } from 'vue'
import type { Address, Menu, SOcialIcon } from '../methods/interface'
// const { t, availableLocales, locale } = useI18n()

// const toggleLocales = () => {
//   // change to some real logic
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }
const socialIcon: Ref<SOcialIcon[]> = ref(
  [
    { icon: 'i-carbon:logo-facebook', link: 'https://fr-fr.facebook.com/' },
    { icon: 'i-carbon:logo-instagram', link: 'https://fr-fr.facebook.com/' },
    { icon: 'i-carbon:logo-twitter', link: 'https://fr-fr.facebook.com/' },
  ],
)
const services: Ref<Menu[]> = ref(
  [
    { link: '/', label: 'Web/Mobile development' },
    { link: '/', label: 'IT Consultent' },
    { link: '/', label: 'hosting ' },
  ],
)
const address: Ref<Address[]> = ref(
  [
    { icon: 'i-carbon:phone-voice-filled', label: '(+237) 670209851', link: '+237670209851', type: 'tel:' },
    { icon: 'i-carbon:email', label: 'contact@think-dev.com', link: 'contact@think-dev.com', type: 'mailto:' },
    { icon: 'i-carbon:location', label: 'Douala, Cameroun', link: 'https://www.google.cm/maps/place/Douala, Cameroun', type: '' },
  ],
)
</script>

<template>
  <div class="content--footer">
    <div class="footer pl-30 pr-30 pt-20 pb-20 flex flex-wrap justify-center ">
      <div w-80 p-5>
        <a href="/">
          <img src="/pwa-512x512.png" alt="tdev-logo" w-20>
        </a>
        <p mt-5>
          We work with a passion of taking challenges and creating new ones in advertising sector.
        </p>
        <div mt-5>
          <div class="flex">
            <a
              v-for="(lk, id) in socialIcon"
              :key="id"
              :href="lk.link"
              target="_blank"
              class="icon--border--color  rounded-full border mr-3 text-center "
            >
              <div :class="lk.icon" class="text-base m-2" />
            </a>
          </div>
        </div>
      </div>
      <div w-80 p-5>
        <h3 class="text-2xl font-bold h--footer">
          Services
        </h3>
        <div class="service-list mt-5">
          <a v-for="(ls, id) in services" :key="id" :href="ls.link" mb-3>{{ ls.label }}</a>
        </div>
      </div>
      <div w-80 p-5>
        <h3 class="text-2xl font-bold h--footer">
          Subscribe
        </h3>
        <p mt-5>
          Sign up to receive the latest articles
        </p>
        <form action="" class="form-newletter mt-3">
          <input type="email" class="form--email" placeholder="enter your email address">
          <input type="button" value="REGISTER" class="btn--submit" mt-3>
        </form>
      </div>
      <div w-80 p-5>
        <h3 class="text-2xl font-bold h--footer">
          Contact
        </h3>
        <div class="service-list mt-5">
          <a
            v-for="(ls, id) in address"
            :key="id"
            :href="`${ls.type}${ls.link}`"
            target="_blank"
            mb-3 flex
          >
            <div :class="ls.icon" mr-4 />
            <span> {{ ls.label }}</span>
          </a>
        </div>
      </div>
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
$icolor: #5e73e4;
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
      color: #ffff;
    }
    .h--footer::after{
      content: '';
      width: 35px;
      height: 2px;
      display: block;
      background-color: $icolor;
      margin-top: 8px;
    }
  }
  .icon--border--color{
    border-color: $icolor !important;
  }
  .service-list{
    display: grid;
  }
  .form-newletter{
    display: grid;
    .form--email{
      text-align: center;
      text-transform: capitalize;
      height: 40px;
      border-right: solid 5px $icolor;
      // border: 1px solid #8a8d90;
      border-radius: 5px;
      padding: 7px;
    }
  }
</style>
