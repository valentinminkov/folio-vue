import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeroBlock from '../HeroBlock.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HeroBlock, {
      props: {
        title: 'Title test',
        subtitle: 'Subitle test',
        button: { text: 'Button  test', url: '/' }
      }
    })
    expect(wrapper.text()).toContain('Title test')
    expect(wrapper.text()).toContain('Subtitle test')
  })
})
