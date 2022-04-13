import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Footer - Unit', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.vm).toBeTruthy()
  })

  test('verificar se existe a classe copyright - Unit', () => {
    const wrapper = mount(Footer)
    expect(wrapper.classes('.copyright'))
  })

  test('verificar se existe a tag href - Unit', () => {
    const wrapper = mount(Footer)
    const href = wrapper.find('href')
    expect(href).toBe(href)
  })

  test('verificando se existe link em href - Unit', () => {
    const wrapper = mount(Footer)
    const href = wrapper.find('href')
    href.exists(`https://github.com/Azincourt-tech`)
    expect(href.exists).toBeTruthy()
  })
  
})