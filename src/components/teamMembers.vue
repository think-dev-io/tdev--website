<script setup lang="ts">
import type { contentTeamMember } from '../methods/interface'
const props = defineProps<{
  content: contentTeamMember
}>()
</script>

<template>
  <section mt-20>
    <div relative overflow-hidden>
      <div
        class="content w-full justify-center text-center mx-auto flex flex-col z-4 relative bg--team--member"
      >
        <div class="w-full h-full absolute top-0 left-0 z-3 bg--content " />
        <div class="mx-auto mt-20 z-99">
          <h5 class="uppercase text-md in--color mb-5">
            {{ props.content.header.text }}
          </h5>
          <h1 capitalize text-5xl font-bold mb-5 lg:w-200 md:w-200 xs:w-full mx-auto>
            {{ props.content.header.text2 }}
          </h1>
        </div>
        <div class="my-20 px-20 mx-auto flex overflow-auto z-99">
          <div
            v-for="(ls, id) in props.content.menberinfo"
            :key="id"
            class="w-65 text-center team--list ml-5"
          >
            <div relative>
              <img :src="ls.pic" z-1 w-full alt="">
              <div absolute bottom-5 z-2 right-5>
                <div class="member--social--info">
                  <div class="social--link--list">
                    <a
                      v-for="(si, id) in ls.social"
                      :key="id"
                      :href="si.link"
                      target="_blank"
                    >
                      <div :class="`${si.icon} mx-auto my-1`" />
                    </a>
                  </div>
                  <div class="btn--share">
                    <div i-carbon:share />
                  </div>
                </div>
              </div>
            </div>
            <div p-3>
              <h4 text-xl font-bold capitalize>
                {{ ls.name }}
              </h4>
              <p class="text-xs font-bold capitalize ">
                {{ ls.post }}
              </p>
            </div>
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

.in--colort {
  color: #c3c8ea;
}

.in--bg {
  background-color: $icolor;
}

.in--bgt {
  background-color: $icolort;
  z-index: 2;
}

.icon--about {
  font-size: 60px !important;
}

.bg--content {
  position: relative;
  width: 100%;
  height: 24rem;
}

.bg-transp {
  background-color: #00000070;
}

.team--list {
  background: #fff;
  border-radius: 5px;
  border-top: 4px solid $icolor;
  border-right: 4px solid $icolor;
  transition: all .33s cubic-bezier(.6, 2, .4, 1);
  p{
    color: $icolor;
  }
}
.team--list:hover{
  background: $icolor;
  transition: all .33s cubic-bezier(.6, 2, .4, 1);
  h4, p{
    color: #fff;
  }
}
.btn--share{
  background-color: #ffff;
  color:$icolor ;
  padding: 7px;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 600;
  margin-top: 20px;
}

.member--social--info:hover{
  .social--link--list{
    display: block !important;
    animation: sociallinklist 1s;
  }
}

.social--link--list{
  display: none;
  background-color: #fff;
  padding: 10px;
  height: 100%;
  border-radius: 5px;
  }
@keyframes sociallinklist {
  from {
    heigh: 0%;
  }

  to {
    height: 100%;
  }
}

.total-desc {
  background-image: linear-gradient(55deg, var(--cretech-secondary, #5e73e4, ) 0%, var(--cretech-primary, #3530db) 100%);
  height: 180px;
  color: #fff;
}

.bg--circle1 {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  left: -40px;
  top: 100px;
  background: #908e0552;
  z-index: 1;
}
.bg--team--member{
  background-image: url('/team-bg.jpeg');
  background-repeat: no-repeat;
}
.bg--content {
  background: #5e72e412 !important;
}
</style>
