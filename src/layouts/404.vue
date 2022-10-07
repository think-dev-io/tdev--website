<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div>
    <Header />
  </div>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm min-h-90">
      <div text-4xl>
        <div i-carbon-warning inline-block />
      </div>
      <RouterView />
      <div>
        <button btn text-sm m="3 t8" @click="router.back()">
          {{ t('button.back') }}
        </button>
      </div>
    </div>
  </main>
  <div>
    <Footer />
  </div>
</template>

