<script setup lang="ts">
import type { Ref } from 'vue'
import type { contentTeamMember, contentserviceFoour, leftContentAbout, leftContentFEEDBACKS, rightContentAbout, rightContentFEEDBACKS, silder } from '../methods/interface'
// const user = useUserStore()
// const name = $ref(user.savedName)

// const router = useRouter()
// const go = () => {
//   if (name)
//     router.push(`/hi/${encodeURIComponent(name)}`)
// }

// const { t } = useI18n()
const all_sidler: Ref<silder[]> = ref(
  [

    {
      img: '/cv_action.png',
      textOne: 'Tart topping dessert pudding cookie. Toffee dessert marshmallow candy lemon drops gingerbread.',
      textTwo: 'Create your Professional CV',
      btn: { text: 'View', link: '/' },
    },
    {
      img: '/tdev.png',
      textOne: 'Welcome to best it solutions',
      textTwo: 'Provide it solutions and services',
      btn: { text: 'View', link: '/' },
    },
  ],
)

const left_content_about: Ref<leftContentAbout> = ref(
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
const right_content_about: Ref<rightContentAbout> = ref(
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
const content_service_foour: Ref<contentserviceFoour> = ref(
  {
    header: {
      text: 'POPULAR TECHNOLOGIES',
      text2: 'We Provide Our Client Best IT Solution Services',
    },
    content: [
      {
        icon: 'i-carbon:load-balancer-listener ',
        text: 'Product Development',
        paragraf: 'Providing the solutions for non-IT businesses.',
      },
      {
        icon: 'i-carbon:load-balancer-listener ',
        text: 'Product Development',
        paragraf: 'Providing the solutions for non-IT businesses.',
      },
      {
        icon: 'i-carbon:load-balancer-listener ',
        text: 'Product Development',
        paragraf: 'Providing the solutions for non-IT businesses.',
      },
      {
        icon: 'i-carbon:load-balancer-listener ',
        text: 'Product Development',
        paragraf: 'Providing the solutions for non-IT businesses.',
      },
      {
        icon: 'i-carbon:load-balancer-listener ',
        text: 'Product Development',
        paragraf: 'Providing the solutions for non-IT businesses.',
      },
    ],
    bottombar: [
      {
        number: 255,
        text: 'Business Interogation',
      },
      {
        number: 325,
        text: 'Strategies Planned',
      },
      {
        number: 569,
        text: 'Projects Relased',
      },
      {
        number: 769,
        text: 'Satisfied Clients',
      },
    ],
  },
)
const left_content_about2: Ref<leftContentAbout> = ref(
  {
    bg: true,
    img1: 'about-three-1-1.png',
  },
)
const right_content_about2: Ref<rightContentAbout> = ref(
  {
    text: 'Company Benefits',
    text2: 'Why You Should Choose Our Services',
    paragraphe: 'Since from 2000 Building Your Better IT Solution The definition of business is an occupation or trade & the purchase and sale of products Our Mission \& Vision Voice and Data System are crucial to the success',
    company: [
      {
        icon: 'i-carbon:application-mobile',
        name: 'Expert Team Members',
        desc: 'Services address a range of simply free text application and infrastructure needs.',
      },
      {
        icon: 'i-carbon:application-web',
        name: 'Cloud Based Services',
        desc: 'Services address a range of simply free text application and infrastructure needs.',
      },
    ],
  },
)
const content_flas_message = ref(
  {
    text: 'Better IT Solutions And Services At Your Fingertips',
    btn: {
      text: 'learn more ',
      link: '/',
    },
    img: '/cta-two-bg-1-1.jpeg',
  },
)
const left_content_feedbacks: Ref<leftContentFEEDBACKS> = ref(
  {
    titel: 'OUR CLIENTS',
    titel2: 'We Are Trusted Worldwide Peoples',
    text: ` Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa
              quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa
              quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    link: '/',
  },
)
const right_content_feedbacks: Ref<rightContentFEEDBACKS[]> = ref(
  [
    {
      img: '',
      text: 'On the other hand denounc with ghteo indignation and dislike men who so beguiled and demoralized the charms of pleasure the momen blinded by desire cannot foresee the pain and trouble.',
      name: 'Michal Rahul',
      desc: 'UL - UX DESIGNER',
    },
  ],
)
const patener = ref(['hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg', 'hosting.jpeg'])
const content_team_member: Ref<contentTeamMember> = ref(
  {
    header: {
      text: 'OUR TEAM MEMBERS',
      text2: 'Our Expert Person to Provide IT Solution Services',
    },
    menberinfo: [
      {
        pic: '/biya.jpeg',
        name: 'Biya Paul',
        post: 'CEO/Software Engineer',
        social: [
          {
            icon: 'i-carbon:logo-facebook',
            link: 'https://fr-fr.facebook.com/',
          },
          {
            icon: 'i-carbon:logo-instagram ',
            link: 'https://www.instagram.com/accounts/login',
          },
          {
            icon: 'i-carbon:logo-twitter',
            link: 'https://twitter.com/',
          },
          {
            icon: 'i-carbon:logo-linkedin',
            link: 'https://www.linkedin.com/',
          },
        ],
      },
      {
        pic: '/profile.webp',
        name: 'Fokoui Marco',
        post: 'CEO/Software Engineer',
        social: [
          {
            icon: 'i-carbon:logo-facebook',
            link: 'https://fr-fr.facebook.com/',
          },
          {
            icon: 'i-carbon:logo-instagram ',
            link: 'https://www.instagram.com/accounts/login',
          },
          {
            icon: 'i-carbon:logo-twitter',
            link: 'https://twitter.com/',
          },
          {
            icon: 'i-carbon:logo-linkedin',
            link: 'https://www.linkedin.com/',
          },
        ],
      },
      {
        pic: 'default.jpeg',
        name: 'Njoka Abdoul',
        post: 'Designer',
        social: [
          {
            icon: 'i-carbon:logo-facebook',
            link: 'https://fr-fr.facebook.com/',
          },
          {
            icon: 'i-carbon:logo-instagram ',
            link: 'https://www.instagram.com/accounts/login',
          },
          {
            icon: 'i-carbon:logo-twitter',
            link: 'https://twitter.com/',
          },
          {
            icon: 'i-carbon:logo-linkedin',
            link: 'https://www.linkedin.com/',
          },
        ],
      },
      {
        pic: 'default-f.jpeg',
        name: 'Belinda Ndoye',
        post: 'Community manager',
        social: [
          {
            icon: 'i-carbon:logo-facebook',
            link: 'https://fr-fr.facebook.com/',
          },
          {
            icon: 'i-carbon:logo-instagram ',
            link: 'https://www.instagram.com/accounts/login',
          },
          {
            icon: 'i-carbon:logo-twitter',
            link: 'https://twitter.com/',
          },
          {
            icon: 'i-carbon:logo-linkedin',
            link: 'https://www.linkedin.com/',
          },
        ],
      },
    ],
  },
)
</script>

<template>
  <silder-home :initial="all_sidler" />
  <about :left-content="left_content_about" :right-content="right_content_about" />
  <service-four :content="content_service_foour" />
  <flash-message :text="content_flas_message.text" :btn="content_flas_message.btn" :bg-img="content_flas_message.img" />
  <feedbacks :right-content-feedbacks="right_content_feedbacks" :left-content-feedbacks="left_content_feedbacks" :patener="patener" />
  <about :left-content="left_content_about2" :right-content="right_content_about2" />
  <team-members :content="content_team_member" />
  <!-- <div>
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
  </div> -->
</template>

<route lang="yaml">
meta:
  layout: home
</route>
