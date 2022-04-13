import { mount } from '@vue/test-utils'
import Trailer from '@/components/Trailer'

describe('Trailer - Unit', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Trailer)
    expect(wrapper.vm).toBeTruthy()
  })
})
