import { ref } from 'vue'

export default function useUpdateHeadcount() {
  const socialIcon = ref(
    [
      { icon: 'i-carbon:logo-facebook', link: '' },
      { icon: 'i-carbon:logo-instagram', link: '' },
      { icon: 'i-carbon:logo-twitter', link: '' },
    ],
  )
  const menu = ref(
    [
      { link: '/home', label: 'Home' },
      { link: '/services', label: 'Services' },
      { link: '/projects', label: 'Projects' },
      { link: '/faq', label: 'FAQ' },
      { link: '/contact', label: 'Contact' },
    ],
  )
  const langue = ref(
    [
      { code: 'en', label: 'English', flag: '/langue/usa.svg', active: false },
      { code: 'fr', label: 'Français', flag: '/langue/france.svg', active: false },
      { code: 'de', label: 'allemand', flag: '/langue/de.svg', active: false },
      { code: 'ru', label: 'русский', flag: '/langue/ru.svg', active: false },
    ],
  )
  const address = ref(
    [
      { icon: 'i-carbon:email', label: 'contact@think-dev.com' },
      { icon: 'i-carbon:location', label: 'Douala Cameroun' },
    ],
  )

  return { socialIcon, menu, langue, address }
}
