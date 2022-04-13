import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Footer - Unit', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.vm).toBeTruthy()
  })
})