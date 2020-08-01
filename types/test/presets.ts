/* eslint-disable no-new */
import Vue from 'vue'
import Vxg, { colors } from 'vxg/lib'
import { VxgParsedTheme } from '../services/theme'

new Vxg()

new Vxg({})

new Vxg({
  breakpoint: {},
})

new Vxg({
  breakpoint: {
    scrollBarWidth: 20,
  },
})

new Vxg({
  breakpoint: {
    mobileBreakpoint: 900,
  },
})

new Vxg({
  breakpoint: {
    thresholds: {
      lg: 1,
      md: 2,
      sm: 3,
      xs: 4,
    },
  },
})

new Vxg({
  icons: {
    iconfont: 'fa',
  },
})

new Vxg({
  icons: {
    iconfont: 'fa',
    values: {
      cancel: 'foo',
    },
  },
})

new Vxg({
  locale: {
    locales: {
      foo: {
        bar: 'baz',
      },
    },
  },
})

new Vxg({
  locale: {
    current: 'foo',
    locales: {
      foo: {
        bar: 'baz',
      },
    },
  },
})

new Vxg({
  locale: {
    current: 'foo',
    locales: {
      foo: {
        bar: 'baz',
      },
    },
    t: (key: string) => key,
  },
})

new Vxg({
  locale: {
    current: 'foo',
    locales: {
      foo: {
        bar: 'baz',
      },
    },
    t: (key: string, ...params: Array<string | number>) => key,
  },
})

new Vxg({
  theme: {},
})

new Vxg({
  theme: {
    dark: true,
  },
})

new Vxg({
  theme: {
    disable: true,
  },
})

new Vxg({
  theme: {
    default: 'dark',
  },
})

new Vxg({
  theme: {
    themes: {
      light: {
        primary: '#bada55',
      },
    },
  },
})

new Vxg({
  theme: {
    themes: {
      dark: {
        primary: {
          base: '#bada55',
        },
        success: '#012345',
      },
      light: {
        success: colors.green.base,
      },
    },
  },
})

new Vxg({
  theme: {
    options: {
      cspNonce: 'foo',
      customProperties: true,
      minifyTheme: (css: string) => css,
      themeCache: {
        get: (parsedTheme: VxgParsedTheme) => '',
        set: (parsedTheme: VxgParsedTheme, css: string) => { },
      },
      variations: false,
    },
  },
})

new Vue({
  vxg: new Vxg(),
  render: h => h('div'),
})
