<script setup lang="ts">
import type { Ref } from 'vue'
import type { leftContentAbout, rightContentAbout, silder } from '../methods/interface'
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
const allSidler: Ref<silder[]> = ref(
  [
    {
      img: '/silder2.jpeg',
      textOne: 'Welcome to best it solutions',
      textTwo: 'Provide it solutions and services',
      btn: { text: 'learn more ', link: '/' },
    },
    {
      img: '/silder1.jpeg',
      textOne: 'Welcome to best it solutions',
      textTwo: 'IQ test - What is your IQ?',
      btn: { text: 'Next', link: '/' },
    },
  ],
)

const leftContent: Ref<leftContentAbout> = ref(
  {
    img1: 'about-five-1-1.jpeg',
    img2: 'about-five-1-2.jpeg',
    video: 'https://www.youtube.com/watch?v=ven2jnMAhn0',
    experience: {
      number: 55,
      text: 'Years Experience',
    },
  },
)
const rightContent: Ref<rightContentAbout> = ref(
  {
    text: 'ABOUT COMPANY',
    text2: 'The World’s Networking Company',
    paragraphe: 'Since from 2000 Building Your Better IT Solution The definition of business is an occupation or trade & the purchase and sale of products Our Mission \& Vision Voice and Data System are crucial to the success',
    paragraphe2: 'System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols.',
    service: [
      {
        name: {
          label: 'IT Consultant',
          link: '/services',
        },
        desc: 'Smarter Solutions',
        icon: 'i-carbon:category-add',
      },
      {
        name: {
          label: 'IT Specialist',
          link: '/services',
        },
        desc: 'Faster Solutions',
        icon: 'i-carbon:load-balancer-listener',
      },
    ],
    team: [
      {
        btn: {
          text: 'learn more',
          link: '/contact',
        },
        name: 'fokoui marco',
        desc: 'CO-FOUNDER CEO',
        img: 'profile.webp',
      },
      {
        btn: {
          text: 'learn more',
          link: '/contact',
        },
        name: 'Biya paul',
        desc: 'CO-FOUNDER CEO',
        img: 'biya.jpeg',
      },
    ],
  },
)
</script>

<template>
  <silder-home :initial="allSidler" />
  <about :left-content="leftContent" :right-content="rightContent" />
  <service-four :content="leftContent" />
  <div>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        btn m-3 text-sm
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
