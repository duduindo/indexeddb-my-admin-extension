import { shallowMount } from '@vue/test-utils'
import Hello from '../index.vue'


describe('Example hello', () => {
  test('First test', () => {
    // const subject = 'Im a subject'
    const wrapper = shallowMount(Hello, {})

    console.warn(Hello)
    console.log(wrapper.text())
  })
})

