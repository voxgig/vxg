// Types
import Framework from '../../../framework'
import { Breakpoint } from 'vxg/types/services/breakpoint'
import { Icons } from 'vxg/types/services/icons'
import { Lang } from 'vxg/types/services/lang'
import { Theme } from 'vxg/types/services/theme'

describe('$vxg.presets', () => {
  it('should merge user and default preset', () => {
    const vxg = new Framework({
      rtl: true,
      breakpoint: {
        thresholds: { xs: 200 },
      },
      icons: {
        iconfont: 'md',
        values: { complete: 'bar' },
      },
      lang: {
        locales: {
          en: {
            badge: 'Foobar',
            dataIterator: { noResultsText: 'Fizzbuzz' },
          },
        },
      },
      theme: {
        dark: true,
        themes: {
          light: {
            primary: 'blue',
            // https://github.com/vxgjs/vxg/issues/10100
            secondary: { darken4: 'red' },
          },
        },
      },
    })

    expect(JSON.stringify(vxg.preset)).toMatchSnapshot()

    const icons: Icons = vxg.framework as any
    const lang: Lang = vxg.framework.lang as any
    const itheme: Theme = vxg.framework.theme as any
    const breakpoints: Breakpoint = vxg.framework.breakpoint as any

    expect(JSON.stringify(icons.values)).toMatchSnapshot()
    expect(JSON.stringify(lang.locales)).toMatchSnapshot()
    expect(JSON.stringify(itheme.themes)).toMatchSnapshot()
    expect(JSON.stringify(breakpoints.thresholds)).toMatchSnapshot()
  })
})
