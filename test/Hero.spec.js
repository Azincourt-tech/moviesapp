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

  test('Contem src - Unit', () => {
    const wrapper = mount(Hero)
    const src = wrapper.find('src')
    expect(src).toBeTruthy()
  })

  test('verificando se existe caminho da imagem no src - Unit', () => {
    const wrapper = mount(Hero)
    const src = wrapper.find('src')
    src.exists("~/assets/img/movieHero.jpg")
    expect(src.exists).toBeTruthy()
  })
})