export interface Theme {
  dark: boolean
  disable: boolean
  default: string | false
  options: {
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script */
    cspNonce?: string
    customProperties?: boolean
    minifyTheme?: ThemeMinifyTheme
    themeCache?: VxgThemeCache
    variations?: boolean
  }
  themes: {
    dark: VxgThemeVariant
    light: VxgThemeVariant
  }
  readonly currentTheme: Partial<VxgThemeVariant>
}

export interface ThemeOptions {
  dark?: boolean
  disable?: boolean
  default?: string | false
  options?: {
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script */
    cspNonce?: string
    customProperties?: boolean
    minifyTheme?: ThemeMinifyTheme
    themeCache?: VxgThemeCache
    variations?: boolean
  }
  themes?: {
    dark?: Partial<VxgThemeVariant>
    light?: Partial<VxgThemeVariant>
  }
}

export interface VxgThemes {
  dark: VxgThemeVariant
  light: VxgThemeVariant
}

export interface VxgThemeVariant {
  [name: string]: VxgThemeItem | string | number | undefined

  primary: VxgThemeItem
  secondary: VxgThemeItem
  accent: VxgThemeItem
  info: VxgThemeItem
  warning: VxgThemeItem
  error: VxgThemeItem
  success: VxgThemeItem
  anchor?: string | number
}

export interface VxgThemeCache {
  get: (parsedTheme: VxgParsedTheme) => string | null
  set: (parsedTheme: VxgParsedTheme, css: string) => void
}

export interface VxgParsedTheme {
  [name: string]: VxgParsedThemeItem
}

export interface VxgParsedThemeItem {
  [name: string]: string

  base: string
  lighten5: string
  lighten4: string
  lighten3: string
  lighten2: string
  lighten1: string
  darken1: string
  darken2: string
  darken3: string
  darken4: string
}

export type VxgThemeItem = Partial<VxgParsedThemeItem> | string | number | undefined

export type ThemeMinifyTheme = ((css: string) => string) | null
