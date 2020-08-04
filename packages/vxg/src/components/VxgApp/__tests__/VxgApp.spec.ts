// Components
import VxgApp from '../VxgApp'

// Utilities
import {
  mount,
  Wrapper,
} from '@vue/test-utils'

describe('VxgApp.ts', () => {
  type Instance = InstanceType<typeof VxgApp>
  let mountFunction: (options?: object) => Wrapper<Instance>

  beforeEach(() => {
    mountFunction = (options = {}) => {
      return mount(VxgApp, {
        ...options,
      })
    }
  })

  it('should match a snapshot', () => {
    const wrapper = mountFunction({
      mocks: {
        $vxg: {
          rtl: false,
          theme: {
            dark: false,
          },
        },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have data-app attribute', () => {
    const wrapper = mountFunction({
      mocks: {
        $vxg: {
          rtl: false,
          theme: {
            dark: false,
          },
        },
      },
    })

    const app = wrapper.find('.v-application')
    expect(app.attributes()['data-app']).toBe('true')
  })

  it('should allow a custom id', () => {
    const wrapper = mountFunction({
      propsData: {
        id: 'inspire',
      },
      mocks: {
        $vxg: {
          rtl: false,
          theme: {
            dark: false,
          },
        },
      },
    })
    const app = wrapper.find('.v-application')
    expect(app.attributes().id).toBe('inspire')

    expect(wrapper.html()).toMatchSnapshot()
  })
})
