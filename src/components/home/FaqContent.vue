<script setup lang="ts">
const data = ref(
  [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, animi saepe mollitia tenetur quas accusamus temporibus nobis, quaerat veritatis quo architecto ab excepturi at itaque perspiciatis id fugiat quia! ',
  ],
)
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
    <div mt-20 mb-5>
      <div
        v-for="(ls, id) in data"
        :key="id"
        :id="`faq_content_${id}`"
        class="bloc--faq--close mx-auto  p-5 mb-5"
      >
        <div class="content--text--faq">
          <h5 mb-2 font-bold text-xl> Question {{ id + 1 }} </h5>
          <p> {{ ls }} </p>
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
  width: 700px;
  max-width: 100%;
  border-top: solid 2px $icolor;
  border-right: solid 2px $icolor;
  border-radius: 5px;
  color: #fff;
  // height: 70px;
  background-color: $icolor;
  // p{
  //   display: none;
  // }
  display: flex;
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
  width: 700px;
  max-width: 100%;
  border-top: solid 2px $icolor;
  border-right: solid 2px $icolor;
  border-radius: 5px;
  height: 70px;
  background-color: rgb(249, 249, 249);

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
