<script setup lang="ts">
import type { Ref } from 'vue'
import type { Address, SOcialIcon } from '../methods/interface'
const onSubmit = () => { }
const newcontact = ref(
  {
    name: '',
    email: '',
    message: '',
  },
)
const address: Ref<Address[]> = ref(
  [
    { icon: 'i-carbon:phone-voice-filled', label: '(+237) 670209851', link: '+237670209851', type: 'tel:' },
    { icon: 'i-carbon:email', label: 'contact@think-dev.com', link: 'contact@think-dev.com', type: 'mailto:' },
    { icon: 'i-carbon:location', label: 'Douala, Cameroun', link: 'https://www.google.cm/maps/place/Douala, Cameroun', type: '' },
  ],
)
const socialIcon: Ref<SOcialIcon[]> = ref(
  [
    { icon: 'i-carbon:logo-facebook', link: 'https://fr-fr.facebook.com/' },
    { icon: 'i-carbon:logo-instagram', link: 'https://fr-fr.facebook.com/' },
    { icon: 'i-carbon:logo-twitter', link: 'https://fr-fr.facebook.com/' },
  ],
)
</script>

<template>
  <section mt-20>
    <div class="container mx-auto relative mb-20">
      <div class="flex justify-center lg:mx-auto xl:mx-50 flex-wrap items-center">
        <div class="w-2/3 flex flex-col justify-center mt-10 left--content--contact">
          <div mb-10>
            <h5 class="text-sm in--color font-bold uppercase mb-5">
              CONTACT WITH US
            </h5>
            <h1 capitalize font-bold text-5xl>
              Join Us To Get IT Free Consultations
            </h1>
          </div>
          <div>
            <form @submit="onSubmit">
              <div w-full mt-5>
                <input id="name" v-model="newcontact.name" class="form--email" type="text" placeholder="You name">
                <input id="email" v-model="newcontact.name" class="form--email ml-5" type="email" placeholder="Email Address">
              </div>
              <div w-full mt-5>
                <textarea id="message" v-model="newcontact.message" class="form--email w-full" placeholder="White Message" />
              </div>
              <div mt-5>
                <input type="button" class="btn--submit" value="Send a Message">
              </div>
            </form>
          </div>
        </div>
        <div class="w-1/3 flex-col justify-center mt-10 self-stretch relative">
          <div class="right--content--contact  xl:p-20 p-10 text-center">
            <div class="service-list mb-7">
              <a v-for="(ls, id) in address" :key="id" :href="`${ls.type}${ls.link}`" target="_blank" mb-7 flex>
                <div :class="ls.icon" mr- class="icon--border--color mr-2" />
                <span> {{ ls.label }}</span>
              </a>
            </div>
            <div mt-5>
              <div class="flex">
                <a
                  v-for="(lk, id) in socialIcon"
                  :key="id" :href="lk.link" target="_blank"
                  class="icon--border--color  rounded-full border mr-3 text-center "
                >
                  <div :class="lk.icon" class="text-base m-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div w-full >
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            id="gmap_canvas" width="100%" height="541"
            src="https://maps.google.com/maps?q=Douala%20bonamoussadi,%20Cameroun&t=&z=11&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          />
          <a href="https://123movies-a.com"/>
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
.form--email {
  text-align: center;
  text-transform: capitalize;
  height: 40px;
  color: black;
  border-right: solid 5px $icolor;
  border-radius: 5px;
  padding: 7px;
}
.left--content--contact{
  background-color: $icolort;
  padding: 70px;
  input{
    width: 48%;

  }
  .form--email {
      text-align: center;
      text-transform: capitalize;
      height: 40px;
      color: black;
      border-right: solid 5px $icolor;
      border-radius: 5px;
      padding: 7px;
    }
    textarea{
      height: 100px !important;
    }
}
.right--content--contact {
  background-image: linear-gradient(#5e72e4b1, #2f29d4b5),url("/contact-one-bg.png");
  background-repeat: no-repeat;
  opacity: 0.93;
  color: #ffff;
  height: 100%;
  p,a{
    color: #cfcff0;
  }
  .icon--border--color{
    color: #ffff;
    border-color: #ffff !important;
  }
}
iframe, .mapouter, .gmap_canvas{
  width: 100%;
}
</style>
