<script setup lang="ts">
import type { leftContentAbout, rightContentAbout } from '../../methods/interface'

defineProps<{
  leftContent: leftContentAbout
  rightContent: rightContentAbout
}>()
// const { count, inc, dec } = useCounter(props.initial)

// const router = useRouter()
// const go: Function = (name: string) => {
//   if (name)
//     router.push(name)
// }
</script>

<template>
  <section mt-20>
    <div class="content w-full justify-center text-center mx-auto flex flex-col in--bgt p-5 ">
      <div class="mx-auto mt-20">
        <h5 class="uppercase text-md in--color mb-5">
          POPULAR SERVICES
        </h5>
        <h1 capitalize text-5xl font-bold mb-5 lg:w-200 md:w-200 xs:w-full mx-auto>
          We Provide Our Client Best IT Solution Services
        </h1>
      </div>
      <div class="my-20 xl:mx-auto md:min-mx-15 xs:min-mx-5 flex overflow-auto ">
        <div class="w-50 p-5 text-center service--list ml-5 ">
          <div i-carbon:load-balancer-listener class="text-7xl in--color mx-auto mb-5" />
          <div flex flex-col>
            <h6 text-xl font-bold mb-3>
              Product Development
            </h6>
            <p text-xs>
              Providing the solutions for non-IT businesses.
            </p>
          </div>
        </div>
        <div class="w-50 p-5 text-center service--list ml-5 ">
          <div i-carbon:load-balancer-listener class="text-7xl in--color mx-auto mb-5" />
          <div flex flex-col>
            <h6 text-xl font-bold mb-3>
              Product Development
            </h6>
            <p text-xs>
              Providing the solutions for non-IT businesses.
            </p>
          </div>
        </div>
        <div class="w-50 p-5 text-center service--list ml-5 ">
          <div i-carbon:load-balancer-listener class="text-7xl in--color mx-auto mb-5" />
          <div flex flex-col>
            <h6 text-xl font-bold mb-3>
              Product Development
            </h6>
            <p text-xs>
              Providing the solutions for non-IT businesses.
            </p>
          </div>
        </div>
        <div class="w-50 p-5 text-center service--list ml-5 ">
          <div i-carbon:load-balancer-listener class="text-7xl in--color mx-auto mb-5" />
          <div flex flex-col>
            <h6 text-xl font-bold mb-3>
              Product Development
            </h6>
            <p text-xs>
              Providing the solutions for non-IT businesses.
            </p>
          </div>
        </div>
        <div class="w-50 p-5 text-center service--list ml-5 ">
          <div i-carbon:load-balancer-listener class="text-7xl in--color mx-auto mb-5" />
          <div flex flex-col>
            <h6 text-xl font-bold mb-3>
              Product Development
            </h6>
            <p text-xs>
              Providing the solutions for non-IT businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$icolor: #7687e5;
$icolort: #7687e521;

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

.bg--content {
  position: relative;
  width: 100%;
  height: 24rem;
}

.bg-transp {
  background-color: #00000070;
}
.service--list{
  background: #fff;
  border-radius: 5px;
  p{
    color: #818189;
  }
    animation: servicelistinit 2s;
}
.service--list:hover {
  border-radius: 5px;
  background: $icolor;
  color: #fff !important;
  animation: servicelist 2s;
  .in--color{
    color: #fff !important;
  }
  p {
    color: #fff;
  }
}
@keyframes servicelistinit {
  from {
    background: $icolor;
  }

  to {
    background: #fff;
  }
}
@keyframes servicelist {
  from {
    background: #fff;
    color: rgb(0, 0, 0) !important;
  }

  to {
    background: $icolor;
  }
}
</style>
