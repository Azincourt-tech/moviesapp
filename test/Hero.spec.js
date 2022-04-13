import { mount } from '@vue/test-utils'
import Hero from '@/components/Hero'

describe('Hero - Unit', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Hero)
    expect(wrapper.vm).toBeTruthy()
  })

  test('Contem classe mini-heading - Unit', () => {
    const wrapper = mount(Hero)
    expect(wrapper.classes('.mini-heading'))

  })

  test('Deve ter o height style "height: 400px;"', () => {

    expect(Hero.attributes('.hero').style).toBe('height: 400px;');
    expect(Hero.attributes().style).not.toBe('height: 410px;');
  })
})