import type { Button, HeroBlock, Image, InfoBlock, InfoCard } from '@/types/components'
import type { VNode } from 'vue'

export const buttonDummyData: Button = {
  text: 'Click me!',
  url: '/some-url'
}

export const heroBlockDummyData: HeroBlock = {
  title: 'Hero block dummy title!',
  button: buttonDummyData,
  subtitle: 'We offer services.',
  class: 'hero-class',
  image: 'path/to/hero-image.jpg'
}

export const imageDummyData: Image = {
  src: 'path/to/image.jpg',
  alt: 'Some description',
  className: 'image-class'
}

export const infoBlockDummyData: InfoBlock = {
  title: 'Info Block Title',
  text: 'This is some information about our product.',
  iconUrl: 'path/to/icon.png',
  direction: 'horizontal',
  class: 'info-block-class',
  image: imageDummyData,
  secondColumnContent: {} as VNode
}

export const infoCardDummyData: InfoCard = {
  title: 'Info Card Title',
  text: 'This card provides some valuable information.',
  image: imageDummyData,
  onClick: () => {
    console.log('Card clicked!')
  },
  className: 'info-card-class'
}
