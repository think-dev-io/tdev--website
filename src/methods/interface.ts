// import { ref } from 'vue'

// export default function useUpdateHeadcount() {
//   const socialIcon = interface Person {
//     name: string;
//     age: number;
//     hairColor: string;
//     weight: number;
//     height: number;
//   }

//   const menu = ref(
//     [
//       { link: '/home', label: 'Home' },
//       { link: '/services', label: 'Services' },
//       { link: '/projects', label: 'Projects' },
//       { link: '/faq', label: 'FAQ' },
//       { link: '/contact', label: 'Contact' },
//     ],
//   )
//   const langue = ref(
//     [
//       { code: 'en', label: 'English', flag: '/langue/usa.svg', active: false },
//       { code: 'fr', label: 'Français', flag: '/langue/france.svg', active: false },
//       { code: 'de', label: 'allemand', flag: '/langue/de.svg', active: false },
//       { code: 'ru', label: 'русский', flag: '/langue/ru.svg', active: false },
//     ],
//   )
//   const address = ref(
//     [
//       { icon: 'i-carbon:email', label: 'contact@think-dev.com' },
//       { icon: 'i-carbon:location', label: 'Douala Cameroun' },
//     ],
//   )

//   return { socialIcon, menu, langue, address }
// }
export declare interface silder {
  img: string
  textOne: string
  textTwo: string
  btn: {
    text: string
    link: string
  }
}

export declare interface SOcialIcon {
  icon: string
  link: string
}

export declare interface Menu {
  link: string
  label: string
}

export declare interface Address {
  icon: string
  label: string
}

export declare interface Langue {
  code: string
  label: string
  flag: string
  active: boolean
}
