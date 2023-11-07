import type { VNode } from 'vue'

export interface Button {
  text: string
  url: string
}

export interface HeroBlock {
  title: string
  button: Button
  subtitle?: string
  class?: string
  image?: string
}

export interface Image {
  src: string
  alt: string
  className?: string
}

type InfoBlockDirection = 'horizontal' | 'vertical'

export interface InfoBlock {
  title: string
  text: string
  iconUrl: string
  direction?: InfoBlockDirection
  class?: string
  image?: Image
  secondColumnContent?: VNode
}

export interface InfoCard {
  title: string
  text: string
  image: Image
  onClick: () => void
  className?: string
}
