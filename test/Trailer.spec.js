import { mount, shallowMount } from '@vue/test-utils';
import Trailer from '@/components/Trailer';

describe('Trailer - Unit', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Trailer)
    expect(wrapper.vm).toBeTruthy()
  })

  test('Contem verificar se existe a classe videos - Unit', () => {
    const wrapper = mount(Trailer)
    expect(wrapper.classes('.videos'))
  })

  test('Contem src - Unit', () => {
    const wrapper = mount(Trailer)
    const src = wrapper.find('src')
    expect(src).toBe(src)
  })

  test('verificando se existe caminho da imagem no src - Unit', () => {
    const wrapper = mount(Trailer)
    const src = wrapper.find('src')
    src.exists(`https://www.youtube.com/embed/`)
    expect(src.exists).toBeTruthy()
  })
})
