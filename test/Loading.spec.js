import { mount } from '@vue/test-utils'
import Loading from '@/components/Loading'

describe('Loading - Unit', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Loading)
    expect(wrapper.vm).toBeTruthy()
  })

  test('verificar se existe a classe loading - Unit', () => {
    const wrapper = mount(Loading)
    expect(wrapper.classes('.loading'))
    expect(wrapper.exists)
  })
})