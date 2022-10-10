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
  type?: string
  link?: string
}

export declare interface Langue {
  code: string
  label: string
  flag: string
  active: boolean
}

export declare interface PhoneNumber {
  code: number | string
  number: number
}

export declare interface Topbarcontent {
  img: string
  name: string
}

export declare interface leftContentAbout {
  img1: string
  img2: string
  video: string
  experience: {
    number: number
    text: string | 'Years Experience'
  }
}

export declare interface rightContentAbout {
  text: string
  text2: string
  paragraphe: string
  paragraphe2: string
  service: {
    name: {
      label: string
      link: string
    }
    desc: string
    icon: string
  }[]
  team: {
    btn: {
      text: string
      link: string
    }
    name: string
    desc: string
    img: string
  }[]
}
export declare interface contentserviceFoour {
  header: {
    text: string
    text2: string
  }
  content: {
    icon: string
    text: string
    paragraf: string
  }[]
  bottombar: {
    number: number
    text: string
  }[]
}
