// Services
import {
  Breakpoint,
  BreakpointOptions,
} from 'vxg/types/services/breakpoint'
import {
  Icons,
  IconsOptions,
} from 'vxg/types/services/icons'
import {
  Lang,
  LangOptions,
} from 'vxg/types/services/lang'
import {
  Theme,
  ThemeOptions,
} from 'vxg/types/services/theme'

export interface VxgPreset {
  breakpoint: {
    mobileBreakpoint: Breakpoint['mobileBreakpoint']
    scrollBarWidth: Breakpoint['scrollBarWidth']
    thresholds: Breakpoint['thresholds']
  }
  icons: {
    iconfont: Icons['iconfont']
    // TODO: Remove partial for v3
    values: Partial<Icons['values']>
  }
  lang: {
    current: Lang['current']
    locales: Lang['locales']
    t: Lang['t']
  }
  theme: {
    dark: Theme['dark']
    default: Theme['default']
    disable: Theme['disable']
    options: Theme['options']
    themes: Theme['themes']
  }

  [name: string]: any
}

export interface UserVxgPreset extends GlobalVxgPreset {
  preset?: GlobalVxgPreset

  [name: string]: any
}

export interface GlobalVxgPreset {
  breakpoint?: BreakpointOptions
  icons?: IconsOptions
  lang?: LangOptions
  theme?: ThemeOptions

  [name: string]: any
}

export interface Presets {
  preset: UserVxgPreset
}
