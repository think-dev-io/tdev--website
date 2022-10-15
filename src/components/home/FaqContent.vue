<script setup lang="ts">
import type { FAQContent } from '../../methods/interface'
const props = defineProps<{
  data: FAQContent[]
}>()
const closeContent = (id: string) => {
  const el: HTMLElement = document.getElementById(id)
  el.classList.remove('bloc--faq')
  el.classList.add('bloc--faq--close')
}
const openContent = (id: string) => {
  const el: HTMLElement = document.getElementById(id)
  el.classList.remove('bloc--faq--close')
  el.classList.add('bloc--faq')
}
</script>

<template>
  <section>
    <div mt-20 mb-10>
      <div
        v-for="(ls, id) in props.data"
        :key="id"
        :id="`faq_content_${id}`"
        class="bloc--faq--close mx-auto  p-5 mb-5"
      >
        <div class="content--text--faq">
          <h5 mb-2> {{ ls.qes }} </h5>
          <p> {{ ls.res }} </p>
        </div>
        <div ml-2 class="content--btn--faq">
          <div
            class="close--btn mx-auto flex items-center"
            @click="closeContent(`faq_content_${id}`)"
          >
            <div i-carbon:chevron-up mx-auto />
          </div>
          <div
            class="open--btn mx-auto flex items-center"
            @click="openContent(`faq_content_${id}`)"
          >
            <div i-carbon:chevron-down mx-auto />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$icolor: #5e73e4;
$icolort: #5e72e42b;

.in--color {
  color: $icolor;
}

.in--bg {
  background-color: $icolor;
}

.in--bgt {
  background-color: $icolort;
}

.icon--about {
  font-size: 60px !important;
}
.bloc--faq{
  overflow: hidden;
  width: 700px;
  max-width: 100%;
  border-top: solid 2px $icolor;
  border-right: solid 2px $icolor;
  border-radius: 5px;
  color: #fff;
  height: auto;
  transition: all .33s cubic-bezier(.6, 2, .4, 1);
  background-color: $icolor;
  display: flex;
  h5{
    font-weight: 900;
    font-size: 1.2rem;
  }
  .content--btn--faq{
    .close--btn{
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: $icolor;
      text-align: center;
      background-color: #fff;
      border-radius: 50%;
    }
    .open--btn {
      cursor: pointer;
      display: none;
      width: 30px;
      height: 30px;
      color: #fff;
      text-align: center;
      background-color: $icolor;
      border-radius: 50%;
    }
  }
}
.bloc--faq--close {
  overflow: hidden;
  width: 700px;
  max-width: 100%;
  border-top: solid 2px $icolor;
  border-right: solid 2px $icolor;
  border-radius: 5px;
  height: 70px;
  background-color: rgb(249, 249, 249);
  // animation: closeFaq 1s;
  transition: all .33s cubic-bezier(.6, 2, .4, 1);
  h5{
    color: $icolor;
  }
  .content--text--faq {
    float: left;

    p {
      display: none;
    }
  }

  .content--btn--faq {
    float: right;

    .close--btn {
      cursor: pointer;
      display: none;
      width: 30px;
      height: 30px;
      color: $icolor;
      text-align: center;
      background-color: #fff;
      border-radius: 50%;
    }

    .open--btn {
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: #fff;
      text-align: center;
      background-color: $icolor;
      border-radius: 50%;
    }
  }
}
</style>
