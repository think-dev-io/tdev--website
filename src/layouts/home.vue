<template>
  <div>
    <Header />
  </div>
  <RouterView />
  <!-- <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
    </div>
  </main> -->
  <div>
    <Footer />
  </div>
</template>

<style lang="scss">
$icolor: #7687e5;
.btn--submit {
  border-radius: 5px;
  text-align: center;
  color: #ffff;
  background-color: $icolor ;
  height: auto;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  text-transform: capitalize;
  width: auto;
}
</style>
