<script setup lang="ts">
import type { Ref } from 'vue'
import type { silder } from '../methods/interface'
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
</script>

<template>
  <silder-home :initial="allSidler" />
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
