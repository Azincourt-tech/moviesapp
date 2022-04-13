import { shallowMount } from '@vue/test-utils';
import Trailer from '@/components/Trailer';

describe('Trailer - Unit', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Trailer)
    expect(wrapper.vm).toBeTruthy()
  })
})
