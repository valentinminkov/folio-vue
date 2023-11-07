import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from '../BasicButton.vue'

describe('Button test', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Button test',
        url: '/'
      }
    })
    expect(wrapper.text()).toContain('Button test')
  })
})
