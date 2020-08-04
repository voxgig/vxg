// Libraries
import Vue from 'vue'

// Components
import VxgFoo from '../VxgFoo'

// Utilities
import {
  createLocalVue,
  mount,
  Wrapper,
} from '@vue/test-utils'

describe('VxgFoo', () => {
  let mountFunction: (options?: object) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    localVue = createLocalVue()

    mountFunction = (ctx = {}) => {
      return mount(VxgFoo, {
        localVue,
        context: {
          ...ctx,
        },
      })
    }
  })

  it('should have custom color', () => {
    const wrapper = mountFunction({
      props: {
        color: 'pink',
        focused: true,
      },
    })

    expect(wrapper.classes('pink--text')).toBe(true)
  })

  it('should position itself absolutely', () => {
    const wrapper = mountFunction({
      props: {
        absolute: true,
      },
    })

    expect(wrapper.element.style.position).toBe('absolute')
  })
})
