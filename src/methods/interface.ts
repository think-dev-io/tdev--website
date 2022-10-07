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
